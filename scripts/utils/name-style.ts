export function toCamel(name: string): string {
  return name.replace(/_+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase());
}
export const isMagicGodotCallback = (n: string) =>
  /^_(ready|process|physics_process|input|init|enter_tree|exit_tree|get_configuration_warnings|shortcut_input|unhandled_input|unhandled_key_input)$/.test(
    n
  );

// Optional whitelist for public API items that begin with underscore in docs
// Keep public and preserve leading underscore.
// Populated via patches/underscore-public-whitelist.json (array of strings)
let underscoreWhitelist = new Set<string>();
try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - JSON import enabled by tsconfig resolveJsonModule
  const wl: string[] = (await import("../../patches/underscore-public-whitelist.json", { assert: { type: "json" } }) as any).default;
  underscoreWhitelist = new Set(wl);
} catch {
  // optional
}

export function privatizeIfNeeded(name: string) {
  if (isMagicGodotCallback(name)) return { name, isPrivate: false };
  if (underscoreWhitelist.has(name)) return { name, isPrivate: false };
  if (name.startsWith("_")) return { name: name.replace(/^_+/, ""), isPrivate: true };
  return { name, isPrivate: false };
}

// Reserved keywords and contextual keywords that cannot be used as identifiers in TS
const tsReserved = new Set<string>([
  // statements/keywords
  "break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","false","finally","for","function","if","import","in","instanceof","new","null","return","super","switch","this","throw","true","try","typeof","var","void","while","with","as","implements","interface","let","package","private","protected","public","static","yield","await","any","boolean","constructor","declare","get","module","namespace","number","require","set","string","symbol","type","from","of"
]);

// Make a valid TypeScript identifier out of a raw name
export function sanitizeIdentifier(raw: string): string {
  let name = raw;
  // Handle path-like segments such as "voice/1/cutoff_hz"
  if (name.includes("/") || name.includes(":") || name.includes(" ") || name.includes(".")) {
    const parts = name.split(/[\/:.\s]+/g).filter(Boolean);
    if (parts.length > 1) {
      name = parts
        .map((p, i) => {
          const base = toCamel(p);
          return i === 0 ? base : base.charAt(0).toUpperCase() + base.slice(1);
        })
        .join("");
    }
  }
  // Replace remaining illegal characters
  name = name.replace(/[^A-Za-z0-9_$]/g, "_");
  // If starts with a digit, prefix underscore
  if (/^[0-9]/.test(name)) name = "_" + name;
  // Avoid reserved words
  if (tsReserved.has(name)) name = name + "_";
  return name;
}
