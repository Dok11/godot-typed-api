import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Calculates a Step function within the visual shader graph.
 * 
 * Translates to `step(edge, x)` in the shader language.
 * Returns `0.0` if `x` is smaller than `edge` and `1.0` otherwise.
 */
export class VisualShaderNodeStep extends VisualShaderNode {
/**
 * A type of operands and returned value.
 */
  opType: int;
/**
 * A floating-point scalar type.
 */
  static readonly OP_TYPE_SCALAR: int;
/**
 * A 2D vector type.
 */
  static readonly OP_TYPE_VECTOR_2D: int;
/**
 * The `x` port uses a 2D vector type, while the `edge` port uses a floating-point scalar type.
 */
  static readonly OP_TYPE_VECTOR_2D_SCALAR: int;
/**
 * A 3D vector type.
 */
  static readonly OP_TYPE_VECTOR_3D: int;
/**
 * The `x` port uses a 3D vector type, while the `edge` port uses a floating-point scalar type.
 */
  static readonly OP_TYPE_VECTOR_3D_SCALAR: int;
/**
 * A 4D vector type.
 */
  static readonly OP_TYPE_VECTOR_4D: int;
/**
 * The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type.
 */
  static readonly OP_TYPE_VECTOR_4D_SCALAR: int;
/**
 * Represents the size of the `OpType` enum.
 */
  static readonly OP_TYPE_MAX: int;
}
