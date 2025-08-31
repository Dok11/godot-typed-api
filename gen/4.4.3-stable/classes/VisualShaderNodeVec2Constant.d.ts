import type { GodotArray, GodotDictionary, Vector2, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A `Vector2` constant to be used within the visual shader graph.
 * 
 * A constant `Vector2`, which can be used as an input node.
 */
export class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
/**
 * A `Vector2` constant which represents the state of this node.
 */
  constant: Vector2;
}
