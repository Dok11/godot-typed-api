import type { GodotArray, GodotDictionary, VisualShaderNodeVectorBase, float, int } from "../index.d.ts";
/**
 * A vector function to be used within the visual shader graph.
 * 
 * A visual shader node able to perform different functions using vectors.
 */
export class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
/**
 * The function to be performed. See `Function` for options.
 */
  function_: int;
/**
 * Normalizes the vector so that it has a length of `1` but points in the same direction.
 */
  static readonly FUNC_NORMALIZE: int;
/**
 * Clamps the value between `0.0` and `1.0`.
 */
  static readonly FUNC_SATURATE: int;
/**
 * Returns the opposite value of the parameter.
 */
  static readonly FUNC_NEGATE: int;
/**
 * Returns `1/vector`.
 */
  static readonly FUNC_RECIPROCAL: int;
/**
 * Returns the absolute value of the parameter.
 */
  static readonly FUNC_ABS: int;
/**
 * Returns the arc-cosine of the parameter.
 */
  static readonly FUNC_ACOS: int;
/**
 * Returns the inverse hyperbolic cosine of the parameter.
 */
  static readonly FUNC_ACOSH: int;
/**
 * Returns the arc-sine of the parameter.
 */
  static readonly FUNC_ASIN: int;
/**
 * Returns the inverse hyperbolic sine of the parameter.
 */
  static readonly FUNC_ASINH: int;
/**
 * Returns the arc-tangent of the parameter.
 */
  static readonly FUNC_ATAN: int;
/**
 * Returns the inverse hyperbolic tangent of the parameter.
 */
  static readonly FUNC_ATANH: int;
/**
 * Finds the nearest integer that is greater than or equal to the parameter.
 */
  static readonly FUNC_CEIL: int;
/**
 * Returns the cosine of the parameter.
 */
  static readonly FUNC_COS: int;
/**
 * Returns the hyperbolic cosine of the parameter.
 */
  static readonly FUNC_COSH: int;
/**
 * Converts a quantity in radians to degrees.
 */
  static readonly FUNC_DEGREES: int;
/**
 * Base-e Exponential.
 */
  static readonly FUNC_EXP: int;
/**
 * Base-2 Exponential.
 */
  static readonly FUNC_EXP2: int;
/**
 * Finds the nearest integer less than or equal to the parameter.
 */
  static readonly FUNC_FLOOR: int;
/**
 * Computes the fractional part of the argument.
 */
  static readonly FUNC_FRACT: int;
/**
 * Returns the inverse of the square root of the parameter.
 */
  static readonly FUNC_INVERSE_SQRT: int;
/**
 * Natural logarithm.
 */
  static readonly FUNC_LOG: int;
/**
 * Base-2 logarithm.
 */
  static readonly FUNC_LOG2: int;
/**
 * Converts a quantity in degrees to radians.
 */
  static readonly FUNC_RADIANS: int;
/**
 * Finds the nearest integer to the parameter.
 */
  static readonly FUNC_ROUND: int;
/**
 * Finds the nearest even integer to the parameter.
 */
  static readonly FUNC_ROUNDEVEN: int;
/**
 * Extracts the sign of the parameter, i.e. returns `-1` if the parameter is negative, `1` if it's positive and `0` otherwise.
 */
  static readonly FUNC_SIGN: int;
/**
 * Returns the sine of the parameter.
 */
  static readonly FUNC_SIN: int;
/**
 * Returns the hyperbolic sine of the parameter.
 */
  static readonly FUNC_SINH: int;
/**
 * Returns the square root of the parameter.
 */
  static readonly FUNC_SQRT: int;
/**
 * Returns the tangent of the parameter.
 */
  static readonly FUNC_TAN: int;
/**
 * Returns the hyperbolic tangent of the parameter.
 */
  static readonly FUNC_TANH: int;
/**
 * Returns a value equal to the nearest integer to the parameter whose absolute value is not larger than the absolute value of the parameter.
 */
  static readonly FUNC_TRUNC: int;
/**
 * Returns `1.0 - vector`.
 */
  static readonly FUNC_ONEMINUS: int;
/**
 * Represents the size of the `Function` enum.
 */
  static readonly FUNC_MAX: int;
}
