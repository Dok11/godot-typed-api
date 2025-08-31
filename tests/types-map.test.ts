import { describe, it, expect } from "vitest";
import { mapGodotType } from "../scripts/utils/types";

describe("mapGodotType", () => {
  it("maps primitive and branded types", () => {
    expect(mapGodotType("int")).toBe("int");
    expect(mapGodotType("float")).toBe("float");
    expect(mapGodotType("bool")).toBe("boolean");
    expect(mapGodotType("String")).toBe("string");
  });

  it("maps collections to branded Godot types", () => {
    expect(mapGodotType("Array")).toBe("GodotArray<any>");
    expect(mapGodotType("Array[int]")).toBe("GodotArray<int>");
    expect(mapGodotType("Array[String]")).toBe("GodotArray<string>");
    expect(mapGodotType("Dictionary")).toBe("GodotDictionary<any>");
  });

  it("passes through non-primitive Godot classes", () => {
    expect(mapGodotType("Vector2")).toBe("Vector2");
    expect(mapGodotType("Vector3")).toBe("Vector3");
    expect(mapGodotType("Node")).toBe("Node");
    expect(mapGodotType("PackedScene")).toBe("PackedScene");
    expect(mapGodotType("RID")).toBe("RID");
  });

  it("trims whitespace before mapping", () => {
    expect(mapGodotType("  bool  ")).toBe("boolean");
    expect(mapGodotType("  Array[int] ")).toBe("GodotArray<any>");
  });
});
