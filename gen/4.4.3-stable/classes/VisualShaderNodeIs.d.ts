import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A boolean comparison operator to be used within the visual shader graph.
 * 
 * Returns the boolean result of the comparison between `INF` or `NaN` and a scalar parameter.
 */
export class VisualShaderNodeIs extends VisualShaderNode {
/**
 * The comparison function. See `Function` for options.
 */
  function_: int;
/**
 * Comparison with `INF` (Infinity).
 */
  static readonly FUNC_IS_INF: int;
/**
 * Comparison with `NaN` (Not a Number; indicates invalid numeric results, such as division by zero).
 */
  static readonly FUNC_IS_NAN: int;
/**
 * Represents the size of the `Function` enum.
 */
  static readonly FUNC_MAX: int;
}
