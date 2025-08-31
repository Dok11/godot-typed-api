import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { rmSync, mkdirSync } from "node:fs";
const sh = promisify(execFile);

const tag = process.env.GODOT_TAG ?? "4.4.3-stable";
const out = "build/godot";
rmSync(out, { recursive: true, force: true });
mkdirSync("build", { recursive: true });
await sh("git", ["clone", "--depth", "1", "--branch", tag, "https://github.com/godotengine/godot", out]);
console.log("Fetched", tag);
