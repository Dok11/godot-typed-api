import type { GodotArray, GodotDictionary, Vector3, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A `Vector3` constant to be used within the visual shader graph.
 * 
 * A constant `Vector3`, which can be used as an input node.
 */
export class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
/**
 * A `Vector3` constant which represents the state of this node.
 */
  constant: Vector3;
}
