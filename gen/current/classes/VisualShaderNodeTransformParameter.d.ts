import type { GodotArray, GodotDictionary, Transform3D, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A `Transform3D` parameter for use within the visual shader graph.
 * 
 * Translated to `uniform mat4` in the shader language.
 */
export class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
/**
 * A default value to be assigned within the shader.
 */
  defaultValue: Transform3D;
/**
 * Enables usage of the `default_value`.
 */
  defaultValueEnabled: boolean;
}
