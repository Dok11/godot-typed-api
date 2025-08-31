import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Clamps a value within the visual shader graph.
 * 
 * Constrains a value to lie between `min` and `max` values.
 */
export class VisualShaderNodeClamp extends VisualShaderNode {
/**
 * A type of operands and returned value.
 */
  opType: int;
/**
 * A floating-point scalar.
 */
  static readonly OP_TYPE_FLOAT: int;
/**
 * An integer scalar.
 */
  static readonly OP_TYPE_INT: int;
/**
 * An unsigned integer scalar.
 */
  static readonly OP_TYPE_UINT: int;
/**
 * A 2D vector type.
 */
  static readonly OP_TYPE_VECTOR_2D: int;
/**
 * A 3D vector type.
 */
  static readonly OP_TYPE_VECTOR_3D: int;
/**
 * A 4D vector type.
 */
  static readonly OP_TYPE_VECTOR_4D: int;
/**
 * Represents the size of the `OpType` enum.
 */
  static readonly OP_TYPE_MAX: int;
}
