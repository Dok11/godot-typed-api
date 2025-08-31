import type { GodotArray, GodotDictionary, Quaternion, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A 4D vector constant to be used within the visual shader graph.
 * 
 * A constant 4D vector, which can be used as an input node.
 */
export class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
/**
 * A 4D vector (represented as a `Quaternion`) constant which represents the state of this node.
 */
  constant: Quaternion;
}
