import type { Color, GodotArray, GodotDictionary, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A `Color` parameter to be used within the visual shader graph.
 * 
 * Translated to `uniform vec4` in the shader language.
 */
export class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
/**
 * A default value to be assigned within the shader.
 */
  defaultValue: Color;
/**
 * Enables usage of the `default_value`.
 */
  defaultValueEnabled: boolean;
}
