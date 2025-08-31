import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A visual shader node for remap function.
 * 
 * Remap will transform the input range into output range, e.g. you can change a `0..1` value to `-2..2` etc. See `@GlobalScope.remap` for more details.
 */
export class VisualShaderNodeRemap extends VisualShaderNode {
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
 * The `value` port uses a 2D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type.
 */
  static readonly OP_TYPE_VECTOR_2D_SCALAR: int;
/**
 * A 3D vector type.
 */
  static readonly OP_TYPE_VECTOR_3D: int;
/**
 * The `value` port uses a 3D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type.
 */
  static readonly OP_TYPE_VECTOR_3D_SCALAR: int;
/**
 * A 4D vector type.
 */
  static readonly OP_TYPE_VECTOR_4D: int;
/**
 * The `value` port uses a 4D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type.
 */
  static readonly OP_TYPE_VECTOR_4D_SCALAR: int;
/**
 * Represents the size of the `OpType` enum.
 */
  static readonly OP_TYPE_MAX: int;
}
