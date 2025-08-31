import type { GodotArray, GodotDictionary, Gradient, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D texture that creates a pattern with colors obtained from a `Gradient`.
 * 
 * A 2D texture that obtains colors from a `Gradient` to fill the texture data. This texture is able to transform a color transition into different patterns such as a linear or a radial gradient. The gradient is sampled individually for each pixel so it does not necessarily represent an exact copy of the gradient(see `width` and `height`). See also `GradientTexture1D`, `CurveTexture` and `CurveXYZTexture`.
 */
export class GradientTexture2D extends Texture2D {
/**
 * The gradient fill type, one of the `Fill` values. The texture is filled by interpolating colors starting from `fill_from` to `fill_to` offsets.
 */
  fill: int;
/**
 * The initial offset used to fill the texture specified in UV coordinates.
 */
  fillFrom: Vector2;
/**
 * The final offset used to fill the texture specified in UV coordinates.
 */
  fillTo: Vector2;
/**
 * The `Gradient` used to fill the texture.
 */
  gradient: Gradient;
/**
 * The number of vertical color samples that will be obtained from the `Gradient`, which also represents the texture's height.
 */
  height: int;
/**
 * The gradient repeat type, one of the `Repeat` values. The texture is filled starting from `fill_from` to `fill_to` offsets by default, but the gradient fill can be repeated to cover the entire texture.
 */
  repeat: int;
  resourceLocalToScene: boolean;
/**
 * If `true`, the generated texture will support high dynamic range (`Image.FORMAT_RGBAF` format). This allows for glow effects to work if `Environment.glow_enabled` is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped (`Image.FORMAT_RGBA8` format).
 */
  useHdr: boolean;
/**
 * The number of horizontal color samples that will be obtained from the `Gradient`, which also represents the texture's width.
 */
  width: int;
/**
 * The colors are linearly interpolated in a straight line.
 */
  static readonly FILL_LINEAR: int;
/**
 * The colors are linearly interpolated in a circular pattern.
 */
  static readonly FILL_RADIAL: int;
/**
 * The colors are linearly interpolated in a square pattern.
 */
  static readonly FILL_SQUARE: int;
/**
 * The gradient fill is restricted to the range defined by `fill_from` to `fill_to` offsets.
 */
  static readonly REPEAT_NONE: int;
/**
 * The texture is filled starting from `fill_from` to `fill_to` offsets, repeating the same pattern in both directions.
 */
  static readonly REPEAT: int;
/**
 * The texture is filled starting from `fill_from` to `fill_to` offsets, mirroring the pattern in both directions.
 */
  static readonly REPEAT_MIRROR: int;
}
