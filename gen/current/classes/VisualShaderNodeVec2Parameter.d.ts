import type { GodotArray, GodotDictionary, Vector2, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A `Vector2` parameter to be used within the visual shader graph.
 * 
 * Translated to `uniform vec2` in the shader language.
 */
export class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
/**
 * A default value to be assigned within the shader.
 */
  defaultValue: Vector2;
/**
 * Enables usage of the `default_value`.
 */
  defaultValueEnabled: boolean;
}
