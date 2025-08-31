import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Calculates a derivative within the visual shader graph.
 * 
 * This node is only available in `Fragment` and `Light` visual shaders.
 */
export class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
/**
 * A derivative function type. See `Function` for options.
 */
  function_: int;
/**
 * A type of operands and returned value. See `OpType` for options.
 */
  opType: int;
/**
 * Sets the level of precision to use for the derivative function. See `Precision` for options. When using the Compatibility renderer, this setting has no effect.
 */
  precision: int;
/**
 * A floating-point scalar.
 */
  static readonly OP_TYPE_SCALAR: int;
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
/**
 * Sum of absolute derivative in `x` and `y`.
 */
  static readonly FUNC_SUM: int;
/**
 * Derivative in `x` using local differencing.
 */
  static readonly FUNC_X: int;
/**
 * Derivative in `y` using local differencing.
 */
  static readonly FUNC_Y: int;
/**
 * Represents the size of the `Function` enum.
 */
  static readonly FUNC_MAX: int;
/**
 * No precision is specified, the GPU driver is allowed to use whatever level of precision it chooses. This is the default option and is equivalent to using `dFdx()` or `dFdy()` in text shaders.
 */
  static readonly PRECISION_NONE: int;
/**
 * The derivative will be calculated using the current fragment's neighbors (which may not include the current fragment). This tends to be faster than using `PRECISION_FINE`, but may not be suitable when more precision is needed. This is equivalent to using `dFdxCoarse()` or `dFdyCoarse()` in text shaders.
 */
  static readonly PRECISION_COARSE: int;
/**
 * The derivative will be calculated using the current fragment and its immediate neighbors. This tends to be slower than using `PRECISION_COARSE`, but may be necessary when more precision is needed. This is equivalent to using `dFdxFine()` or `dFdyFine()` in text shaders.
 */
  static readonly PRECISION_FINE: int;
/**
 * Represents the size of the `Precision` enum.
 */
  static readonly PRECISION_MAX: int;
}
