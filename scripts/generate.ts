import { XMLParser } from "fast-xml-parser";
import { readFileSync, mkdirSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { toCamel, privatizeIfNeeded, sanitizeIdentifier } from "./utils/name-style.js";
import { mapGodotType } from "./utils/types.js";
import { toJsDoc } from "./utils/jsdoc.js";

const tag = process.env.GODOT_TAG ?? "4.4.3-stable";
const classesDir = "build/godot/doc/classes";
const outDir = `gen/${tag}`;

// Optional subset (e.g., --subset Node,Button) for faster PR checks
function parseSubsetArg(): Set<string> | null {
  const argIdx = process.argv.indexOf("--subset");
  let raw = "";
  if (argIdx >= 0 && process.argv[argIdx + 1]) raw = String(process.argv[argIdx + 1]);
  if (!raw && process.env.SUBSET) raw = String(process.env.SUBSET);
  if (!raw) return null;
  const names = raw
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return names.length ? new Set(names) : null;
}
const subset = parseSubsetArg();
const parser = new XMLParser({ ignoreAttributes: false });

// Array normalization helper: accept single item or array
function toArray<T>(v?: T | T[] | null): T[] {
  return v == null ? [] : Array.isArray(v) ? v : [v];
}

type ApiMapClass = {
  members: { snake: string; camel: string; private: boolean }[];
  methods: { snake: string; camel: string; private: boolean }[];
  signals: { snake: string; camel: string }[];
};

const apiMap: { version: string; classes: Record<string, ApiMapClass> } = {
  version: tag,
  classes: {},
};

function emitClass(classXmlPath: string) {
  const xml = readFileSync(classXmlPath, "utf8");
  const json = parser.parse(xml);
  const cls = (json as any).class as any;
  const className: string = cls["@_name"];
  if (!className || className === "@GlobalScope") return; // Skip globals to keep module clean
  const inherits: string | undefined = cls["@_inherits"] || cls["@_inherits"]; // attribute may be absent

  const lines: string[] = [];
  const neededTypes = new Set<string>(["int", "float", "GodotArray", "GodotDictionary"]);
  const primitiveOrBuiltins = new Set([
    "string",
    "number",
    "boolean",
    "void",
    "any",
    "unknown",
    "never",
    "object",
    "symbol",
    "bigint",
    "GodotArray",
    "GodotDictionary",
  ]);
  const maybeCollect = (typeStr: string) => {
    const re = /[A-Za-z_][A-Za-z0-9_]*/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(typeStr))) {
      const id = m[1] ? m[1] : m[0];
      if (primitiveOrBuiltins.has(id)) continue;
      neededTypes.add(id);
    }
  };
  // Class JSDoc from <brief_description> and <description>
  {
    const brief = (cls.brief_description ?? "").toString().trim();
    const desc = (cls.description ?? "").toString().trim();
    const sep = brief && desc ? "\n\n" : "";
    const txt = `${brief}${sep}${desc}`;
    const docLines: string[] = [];
    if (txt) docLines.push(...txt.replace(/\r?\n/g, "\n").split("\n"));
    const deprecated = cls["@_deprecated"] ?? cls["@_is_deprecated"] ?? cls.deprecated;
    if (deprecated) docLines.push(`@deprecated ${String(deprecated)}`);
    if (docLines.length) lines.push(toJsDoc(docLines));
  }
  const header = inherits ? `export class ${className} extends ${inherits} {` : `export class ${className} {`;
  if (inherits) neededTypes.add(inherits);
  lines.push(header);

  // Collect api map accumulators
  const mapEntry: ApiMapClass = { members: [], methods: [], signals: [] };

  // Members
  const members = toArray(cls.members?.member).sort((a: any, b: any) => {
    const aName = a["@_name"] as string; const bName = b["@_name"] as string;
    return toCamel(aName).localeCompare(toCamel(bName));
  });
  for (const m of members) {
    const snake = m["@_name"] as string;
    const type = mapGodotType(m["@_type"] ?? "any");
    maybeCollect(type);
    const { name: n2, isPrivate } = privatizeIfNeeded(snake);
    const camel = n2.startsWith("_") ? n2 : toCamel(n2);
    const safeName = sanitizeIdentifier(camel);
    const declName = isPrivate ? `private ${safeName}` : safeName;
    const mDesc = (m["#text"] ?? "").toString().trim();
    const mDoc: string[] = [];
    if (mDesc) mDoc.push(...mDesc.replace(/\r?\n/g, "\n").split("\n"));
    const deprecated = m["@_deprecated"] ?? m["@_is_deprecated"] ?? m.deprecated;
    if (deprecated) mDoc.push(`@deprecated ${String(deprecated)}`);
    if (mDoc.length) lines.push(toJsDoc(mDoc));
    lines.push(`  ${declName}: ${type};`);
    mapEntry.members.push({ snake, camel, private: !!isPrivate });
  }

  // Methods
  const methods = toArray(cls.methods?.method).sort((a: any, b: any) => {
    const aName = a["@_name"] as string; const bName = b["@_name"] as string;
    return toCamel(aName).localeCompare(toCamel(bName));
  });
  const methodVisibility = new Map<string, boolean>(); // name -> isPrivate
  for (const fn of methods) {
    const snake = fn["@_name"] as string;
    const { name: n2, isPrivate } = privatizeIfNeeded(snake);
    const camel = n2.startsWith("_") ? n2 : toCamel(n2);
    const baseName = sanitizeIdentifier(camel);
    const existing = methodVisibility.get(baseName);
    const effectivePrivate = existing !== undefined ? existing : isPrivate;
    if (existing === undefined) methodVisibility.set(baseName, effectivePrivate);
    const declName = effectivePrivate ? `private ${baseName}` : baseName;
    const ret = mapGodotType(fn.return?.["@_type"] ?? "void");
    maybeCollect(ret);
    const params = toArray(fn.param)
      .map((a: any) => {
        const pName = sanitizeIdentifier(toCamel(a["@_name"]));
        const pType = mapGodotType(a["@_type"] ?? "any");
        maybeCollect(pType);
        const isOptional = a["@_default"] !== undefined;
        return `${pName}${isOptional ? "?" : ""}: ${pType}`;
      })
      .join(", ");
    const docParts: string[] = [];
    const mText = (fn.description ?? "").toString().trim();
    if (mText) docParts.push(...mText.replace(/\r?\n/g, "\n").split("\n"));
    for (const a of toArray(fn.param)) {
      const pName = sanitizeIdentifier(toCamel(a["@_name"]));
      const pType = mapGodotType(a["@_type"] ?? "any");
      maybeCollect(pType);
      const def = a["@_default"];
      const optNote = def !== undefined ? ` (optional, default: ${def})` : "";
      docParts.push(`@param ${pName} ${pType}${optNote}`);
    }
    if (ret !== "void") docParts.push(`@returns ${ret}`);
    const deprecated = fn["@_deprecated"] ?? fn["@_is_deprecated"] ?? fn.deprecated;
    if (deprecated) docParts.push(`@deprecated ${String(deprecated)}`);
    if (docParts.length) lines.push(toJsDoc(docParts));
    lines.push(`  ${declName}(${params}): ${ret};`);
    mapEntry.methods.push({ snake, camel: sanitizeIdentifier(camel), private: !!isPrivate });
  }

  // Signals
  const signals = toArray(cls.signals?.signal).sort((a: any, b: any) => {
    const aName = a["@_name"] as string; const bName = b["@_name"] as string;
    return toCamel(aName).localeCompare(toCamel(bName));
  });
  // Build a set of existing member/method names to avoid collisions with signals
  const takenNames = new Set<string>([
    ...members.map((m: any) => sanitizeIdentifier(toCamel(privatizeIfNeeded(m["@_name"])!.name.startsWith("_") ? privatizeIfNeeded(m["@_name"])!.name : toCamel(m["@_name"])))),
    ...Array.from(methodVisibility.keys()),
  ]);

  for (const sig of signals) {
    const snake = sig["@_name"] as string;
    let camel = sanitizeIdentifier(toCamel(snake));
    if (takenNames.has(camel)) camel = `${camel}Signal`;
    const params = toArray(sig.param)
      .map((p: any) => {
        const t = p["@_type"] ? mapGodotType(p["@_type"]) : undefined;
        if (t) maybeCollect(t);
        return `${sanitizeIdentifier(toCamel(p["@_name"]))}` + (t ? `: ${t}` : "");
      })
      .join(", ");
    const typeArgs = params ? `[${params}]` : "[]";
    const sText = (sig.description ?? "").toString().trim();
    const sDoc: string[] = [];
    if (sText) sDoc.push(...sText.replace(/\r?\n/g, "\n").split("\n"));
    const deprecated = sig["@_deprecated"] ?? sig["@_is_deprecated"] ?? sig.deprecated;
    if (deprecated) sDoc.push(`@deprecated ${String(deprecated)}`);
    if (sDoc.length) lines.push(toJsDoc(sDoc));
    neededTypes.add("Signal");
    lines.push(`  ${camel}: Signal<${typeArgs}>;`);
    mapEntry.signals.push({ snake, camel });
  }

  // Constants
  for (const c of toArray(cls.constants?.constant)) {
    const cname = sanitizeIdentifier(c["@_name"] as string);
    const deprecated = c["@_deprecated"] as string | undefined;
    const cText = (c["#text"] ?? "").toString().trim();
    const cDoc: string[] = [];
    if (cText) cDoc.push(...cText.replace(/\r?\n/g, "\n").split("\n"));
    if (deprecated) cDoc.push(`@deprecated ${deprecated}`);
    if (cDoc.length) lines.push(toJsDoc(cDoc));
    lines.push(`  static readonly ${cname}: int;`);
  }

  lines.push(`}`);

  // Prepend type imports if needed (exclude self references)
  neededTypes.delete(className);
  if (neededTypes.size) {
    const spec = Array.from(neededTypes).sort().join(", ");
    lines.unshift(`import type { ${spec} } from "../index.d.ts";`);
  }

  // Write class file
  const classDir = join(outDir, "classes");
  mkdirSync(classDir, { recursive: true });
  writeFileSync(join(classDir, `${className}.d.ts`), lines.join("\n") + "\n");

  // Save api map entry
  apiMap.classes[className] = mapEntry;
}

function emitAll() {
  const files = readdirSync(classesDir)
    .filter((f) => f.endsWith(".xml"))
    .filter((f) => f !== "@GlobalScope.xml")
    .filter((f) => {
      const base = f.replace(/\.xml$/, "");
      // Exclude built-in primitives and helper alias types we provide ourselves
      if (new Set(["int", "float", "bool", "Signal"]).has(base)) return false;
      // Apply optional subset filter
      if (subset && !subset.has(base)) return false;
      return true;
    })
    .sort((a, b) => a.localeCompare(b));
  for (const f of files) emitClass(join(classesDir, f));
}

function emitIndex() {
  const classFiles = Object.keys(apiMap.classes).sort((a, b) => a.localeCompare(b));
  const content = [
    `// Godot ${tag} modular type exports`,
    `export * from "../../src-template/core";`,
    `export * from "../../src-template/signal";`,
    ...classFiles.map((name) => `export * from "./classes/${name}";`),
  ].join("\n");
  const header = [
    "/**",
    ` * Godot ${tag} type definitions generated from upstream docs.`,
    " * Source: https://github.com/godotengine/godot (Docs)",
    " * License (docs): CC-BY 3.0",
    " */",
  ].join("\n");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/index.d.ts`, header + "\n" + content + "\n");
}

function emitApiMap() {
  const ordered: typeof apiMap = { version: apiMap.version, classes: {} };
  for (const k of Object.keys(apiMap.classes).sort((a, b) => a.localeCompare(b))) {
    const v = apiMap.classes[k];
    ordered.classes[k] = {
      members: [...v.members],
      methods: [...v.methods],
      signals: [...v.signals],
    };
  }
  writeFileSync(`${outDir}/api-map.json`, JSON.stringify(ordered, null, 2) + "\n");
}

// Clean output to remove legacy folders like `scene/`
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

emitAll();
emitIndex();
emitApiMap();
console.log("Generated", outDir);
