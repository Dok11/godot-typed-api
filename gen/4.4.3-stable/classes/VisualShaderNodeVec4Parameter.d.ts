import type { GodotArray, GodotDictionary, Vector4, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A 4D vector parameter to be used within the visual shader graph.
 * 
 * Translated to `uniform vec4` in the shader language.
 */
export class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
/**
 * A default value to be assigned within the shader.
 */
  defaultValue: Vector4;
/**
 * Enables usage of the `default_value`.
 */
  defaultValueEnabled: boolean;
}
