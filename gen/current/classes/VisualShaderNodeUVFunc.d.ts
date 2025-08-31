import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Contains functions to modify texture coordinates (`uv`) to be used within the visual shader graph.
 * 
 * UV functions are similar to `Vector2` functions, but the input port of this node uses the shader's UV value by default.
 */
export class VisualShaderNodeUVFunc extends VisualShaderNode {
/**
 * A function to be applied to the texture coordinates. See `Function` for options.
 */
  function_: int;
/**
 * Translates `uv` by using `scale` and `offset` values using the following formula: `uv = uv + offset * scale`. `uv` port is connected to `UV` built-in by default.
 */
  static readonly FUNC_PANNING: int;
/**
 * Scales `uv` by using `scale` and `pivot` values using the following formula: `uv = (uv - pivot) * scale + pivot`. `uv` port is connected to `UV` built-in by default.
 */
  static readonly FUNC_SCALING: int;
/**
 * Represents the size of the `Function` enum.
 */
  static readonly FUNC_MAX: int;
}
