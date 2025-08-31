import type { GodotArray, GodotDictionary, Vector3, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A `Vector3` parameter to be used within the visual shader graph.
 * 
 * Translated to `uniform vec3` in the shader language.
 */
export class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
/**
 * A default value to be assigned within the shader.
 */
  defaultValue: Vector3;
/**
 * Enables usage of the `default_value`.
 */
  defaultValueEnabled: boolean;
}
