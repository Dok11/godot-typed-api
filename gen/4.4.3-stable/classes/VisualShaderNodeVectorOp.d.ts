import type { GodotArray, GodotDictionary, VisualShaderNodeVectorBase, float, int } from "../index.d.ts";
/**
 * A vector operator to be used within the visual shader graph.
 * 
 * A visual shader node for use of vector operators. Operates on vector `a` and vector `b`.
 */
export class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
/**
 * The operator to be used. See `Operator` for options.
 */
  operator: int;
/**
 * Adds two vectors.
 */
  static readonly OP_ADD: int;
/**
 * Subtracts a vector from a vector.
 */
  static readonly OP_SUB: int;
/**
 * Multiplies two vectors.
 */
  static readonly OP_MUL: int;
/**
 * Divides vector by vector.
 */
  static readonly OP_DIV: int;
/**
 * Returns the remainder of the two vectors.
 */
  static readonly OP_MOD: int;
/**
 * Returns the value of the first parameter raised to the power of the second, for each component of the vectors.
 */
  static readonly OP_POW: int;
/**
 * Returns the greater of two values, for each component of the vectors.
 */
  static readonly OP_MAX: int;
/**
 * Returns the lesser of two values, for each component of the vectors.
 */
  static readonly OP_MIN: int;
/**
 * Calculates the cross product of two vectors.
 */
  static readonly OP_CROSS: int;
/**
 * Returns the arc-tangent of the parameters.
 */
  static readonly OP_ATAN2: int;
/**
 * Returns the vector that points in the direction of reflection. `a` is incident vector and `b` is the normal vector.
 */
  static readonly OP_REFLECT: int;
/**
 * Vector step operator. Returns `0.0` if `a` is smaller than `b` and `1.0` otherwise.
 */
  static readonly OP_STEP: int;
/**
 * Represents the size of the `Operator` enum.
 */
  static readonly OP_ENUM_SIZE: int;
}
