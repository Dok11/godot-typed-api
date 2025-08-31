import type { Curve, GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * A 1D texture where pixel brightness corresponds to points on a curve.
 * 
 * A 1D texture where pixel brightness corresponds to points on a unit `Curve` resource, either in grayscale or in red. This visual representation simplifies the task of saving curves as image files.
 * If you need to store up to 3 curves within a single texture, use `CurveXYZTexture` instead. See also `GradientTexture1D` and `GradientTexture2D`.
 */
export class CurveTexture extends Texture2D {
/**
 * The `Curve` that is rendered onto the texture. Should be a unit `Curve`.
 */
  curve: Curve;
  resourceLocalToScene: boolean;
/**
 * The format the texture should be generated with. When passing a CurveTexture as an input to a `Shader`, this may need to be adjusted.
 */
  textureMode: int;
/**
 * The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage.
 */
  width: int;
/**
 * Store the curve equally across the red, green and blue channels. This uses more video memory, but is more compatible with shaders that only read the green and blue values.
 */
  static readonly TEXTURE_MODE_RGB: int;
/**
 * Store the curve only in the red channel. This saves video memory, but some custom shaders may not be able to work with this.
 */
  static readonly TEXTURE_MODE_RED: int;
}
