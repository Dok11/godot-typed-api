import type { GodotArray, GodotDictionary, Transform3D, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A `Transform3D` constant for use within the visual shader graph.
 * 
 * A constant `Transform3D`, which can be used as an input node.
 */
export class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
/**
 * A `Transform3D` constant which represents the state of this node.
 */
  constant: Transform3D;
}
