import { describe, it, expect } from "vitest";
import {
  toCamel,
  isMagicGodotCallback,
  privatizeIfNeeded,
} from "../scripts/utils/name-style";

describe("toCamel", () => {
  it("converts snake_case to camelCase", () => {
    expect(toCamel("snake_case")).toBe("snakeCase");
    expect(toCamel("get_2d_vector")).toBe("get2dVector");
    expect(toCamel("alreadyCamel")).toBe("alreadyCamel");
  });
});

describe("isMagicGodotCallback", () => {
  it("detects known magic callbacks", () => {
    expect(isMagicGodotCallback("_ready")).toBe(true);
    expect(isMagicGodotCallback("_process")).toBe(true);
    expect(isMagicGodotCallback("_physics_process")).toBe(true);
    expect(isMagicGodotCallback("_input")).toBe(true);
    expect(isMagicGodotCallback("_init")).toBe(true);
  });

  it("rejects non-magic names and near-misses", () => {
    expect(isMagicGodotCallback("ready")).toBe(false);
    expect(isMagicGodotCallback("__ready")).toBe(false);
    expect(isMagicGodotCallback("_physicsProcess")).toBe(false);
    expect(isMagicGodotCallback("_other")).toBe(false);
  });
});

describe("privatizeIfNeeded", () => {
  it("keeps magic callbacks public and intact", () => {
    expect(privatizeIfNeeded("_ready")).toEqual({ name: "_ready", isPrivate: false });
    expect(privatizeIfNeeded("_physics_process")).toEqual({ name: "_physics_process", isPrivate: false });
  });

  it("privatizes leading-underscore names and strips underscores", () => {
    expect(privatizeIfNeeded("_private_method")).toEqual({ name: "private_method", isPrivate: true });
    expect(privatizeIfNeeded("__hidden")).toEqual({ name: "hidden", isPrivate: true });
    // Near-miss to magic: two underscores → still privatized
    expect(privatizeIfNeeded("__ready")).toEqual({ name: "ready", isPrivate: true });
  });

  it("keeps public names as-is", () => {
    expect(privatizeIfNeeded("publicMethod")).toEqual({ name: "publicMethod", isPrivate: false });
  });
});
