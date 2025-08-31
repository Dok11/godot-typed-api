import { rmSync, cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const tag = process.env.GODOT_TAG ?? "4.4.3-stable";

// 1) Switch current to selected tag (copies index.d.ts, classes, and api-map.json)
rmSync("gen/current", { recursive: true, force: true });
mkdirSync("gen/current", { recursive: true });
cpSync(`gen/${tag}`, "gen/current", { recursive: true });
console.log("Set current ->", tag);

// 2) Optionally bump package.json version to <tag> or <tag>-N
// Enable by setting UPDATE_VERSION=1. Optionally set GENERATOR_N to append -N.
if (process.env.UPDATE_VERSION === "1" || process.env.UPDATE_VERSION === "true") {
  try {
    const pkgPath = "package.json";
    const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
    const n = process.env.GENERATOR_N ? String(process.env.GENERATOR_N).trim() : "";
    const version = n ? `${tag}-${n}` : tag;
    if (pkg.version !== version) {
      pkg.version = version;
      writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
      console.log("Updated package.json version ->", version);
    } else {
      console.log("package.json version already", version);
    }
  } catch (e) {
    console.error("Failed to update package.json version:", e);
    process.exitCode = 1;
  }
}
