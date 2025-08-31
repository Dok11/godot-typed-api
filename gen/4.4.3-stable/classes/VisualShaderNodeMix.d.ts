import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Linearly interpolates between two values within the visual shader graph.
 * 
 * Translates to `mix(a, b, weight)` in the shader language.
 */
export class VisualShaderNodeMix extends VisualShaderNode {
/**
 * A type of operands and returned value.
 */
  opType: int;
/**
 * A floating-point scalar.
 */
  static readonly OP_TYPE_SCALAR: int;
/**
 * A 2D vector type.
 */
  static readonly OP_TYPE_VECTOR_2D: int;
/**
 * The `a` and `b` ports use a 2D vector type. The `weight` port uses a scalar type.
 */
  static readonly OP_TYPE_VECTOR_2D_SCALAR: int;
/**
 * A 3D vector type.
 */
  static readonly OP_TYPE_VECTOR_3D: int;
/**
 * The `a` and `b` ports use a 3D vector type. The `weight` port uses a scalar type.
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
