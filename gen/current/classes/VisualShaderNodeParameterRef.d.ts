import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A reference to an existing `VisualShaderNodeParameter`.
 * 
 * Creating a reference to a `VisualShaderNodeParameter` allows you to reuse this parameter in different shaders or shader stages easily.
 */
export class VisualShaderNodeParameterRef extends VisualShaderNode {
/**
 * The name of the parameter which this reference points to.
 */
  parameterName: string;
}
