import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Multiplies a `Transform3D` and a `Vector3` within the visual shader graph.
 * 
 * A multiplication operation on a transform (4×4 matrix) and a vector, with support for different multiplication operators.
 */
export class VisualShaderNodeTransformVecMult extends VisualShaderNode {
/**
 * The multiplication type to be performed. See `Operator` for options.
 */
  operator: int;
/**
 * Multiplies transform `a` by the vector `b`.
 */
  static readonly OP_AxB: int;
/**
 * Multiplies vector `b` by the transform `a`.
 */
  static readonly OP_BxA: int;
/**
 * Multiplies transform `a` by the vector `b`, skipping the last row and column of the transform.
 */
  static readonly OP_3x3_AxB: int;
/**
 * Multiplies vector `b` by the transform `a`, skipping the last row and column of the transform.
 */
  static readonly OP_3x3_BxA: int;
/**
 * Represents the size of the `Operator` enum.
 */
  static readonly OP_MAX: int;
}
