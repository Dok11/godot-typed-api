import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Computes a `Transform3D` function within the visual shader graph.
 * 
 * Computes an inverse or transpose function on the provided `Transform3D`.
 */
export class VisualShaderNodeTransformFunc extends VisualShaderNode {
/**
 * The function to be computed. See `Function` for options.
 */
  function_: int;
/**
 * Perform the inverse operation on the `Transform3D` matrix.
 */
  static readonly FUNC_INVERSE: int;
/**
 * Perform the transpose operation on the `Transform3D` matrix.
 */
  static readonly FUNC_TRANSPOSE: int;
/**
 * Represents the size of the `Function` enum.
 */
  static readonly FUNC_MAX: int;
}
