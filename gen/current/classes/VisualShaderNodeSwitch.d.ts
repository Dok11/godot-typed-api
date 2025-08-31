import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A selector function for use within the visual shader graph.
 * 
 * Returns an associated value of the `op_type` type if the provided boolean value is `true` or `false`.
 */
export class VisualShaderNodeSwitch extends VisualShaderNode {
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
 * A boolean type.
 */
  static readonly OP_TYPE_BOOLEAN: int;
/**
 * A transform type.
 */
  static readonly OP_TYPE_TRANSFORM: int;
/**
 * Represents the size of the `OpType` enum.
 */
  static readonly OP_TYPE_MAX: int;
}
