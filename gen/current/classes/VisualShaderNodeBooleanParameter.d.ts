import type { GodotArray, GodotDictionary, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A boolean parameter to be used within the visual shader graph.
 * 
 * Translated to `uniform bool` in the shader language.
 */
export class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
/**
 * A default value to be assigned within the shader.
 */
  defaultValue: boolean;
/**
 * Enables usage of the `default_value`.
 */
  defaultValueEnabled: boolean;
}
