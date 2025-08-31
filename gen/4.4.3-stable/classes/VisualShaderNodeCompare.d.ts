import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A comparison function for common types within the visual shader graph.
 * 
 * Compares `a` and `b` of `type` by `function`. Returns a boolean scalar. Translates to `if` instruction in shader code.
 */
export class VisualShaderNodeCompare extends VisualShaderNode {
/**
 * Extra condition which is applied if `type` is set to `CTYPE_VECTOR_3D`.
 */
  condition: int;
/**
 * A comparison function. See `Function` for options.
 */
  function_: int;
/**
 * The type to be used in the comparison. See `ComparisonType` for options.
 */
  type_: int;
/**
 * A floating-point scalar.
 */
  static readonly CTYPE_SCALAR: int;
/**
 * An integer scalar.
 */
  static readonly CTYPE_SCALAR_INT: int;
/**
 * An unsigned integer scalar.
 */
  static readonly CTYPE_SCALAR_UINT: int;
/**
 * A 2D vector type.
 */
  static readonly CTYPE_VECTOR_2D: int;
/**
 * A 3D vector type.
 */
  static readonly CTYPE_VECTOR_3D: int;
/**
 * A 4D vector type.
 */
  static readonly CTYPE_VECTOR_4D: int;
/**
 * A boolean type.
 */
  static readonly CTYPE_BOOLEAN: int;
/**
 * A transform (`mat4`) type.
 */
  static readonly CTYPE_TRANSFORM: int;
/**
 * Represents the size of the `ComparisonType` enum.
 */
  static readonly CTYPE_MAX: int;
/**
 * Comparison for equality (`a == b`).
 */
  static readonly FUNC_EQUAL: int;
/**
 * Comparison for inequality (`a != b`).
 */
  static readonly FUNC_NOT_EQUAL: int;
/**
 * Comparison for greater than (`a > b`). Cannot be used if `type` set to `CTYPE_BOOLEAN` or `CTYPE_TRANSFORM`.
 */
  static readonly FUNC_GREATER_THAN: int;
/**
 * Comparison for greater than or equal (`a >= b`). Cannot be used if `type` set to `CTYPE_BOOLEAN` or `CTYPE_TRANSFORM`.
 */
  static readonly FUNC_GREATER_THAN_EQUAL: int;
/**
 * Comparison for less than (`a < b`). Cannot be used if `type` set to `CTYPE_BOOLEAN` or `CTYPE_TRANSFORM`.
 */
  static readonly FUNC_LESS_THAN: int;
/**
 * Comparison for less than or equal (`a <= b`). Cannot be used if `type` set to `CTYPE_BOOLEAN` or `CTYPE_TRANSFORM`.
 */
  static readonly FUNC_LESS_THAN_EQUAL: int;
/**
 * Represents the size of the `Function` enum.
 */
  static readonly FUNC_MAX: int;
/**
 * The result will be `true` if all components in the vector satisfy the comparison condition.
 */
  static readonly COND_ALL: int;
/**
 * The result will be `true` if any component in the vector satisfies the comparison condition.
 */
  static readonly COND_ANY: int;
/**
 * Represents the size of the `Condition` enum.
 */
  static readonly COND_MAX: int;
}
