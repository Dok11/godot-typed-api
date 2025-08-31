import type { Curve, GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * A 1D texture where the red, green, and blue color channels correspond to points on 3 curves.
 * 
 * A 1D texture where the red, green, and blue color channels correspond to points on 3 unit `Curve` resources. Compared to using separate `CurveTexture`s, this further simplifies the task of saving curves as image files.
 * If you only need to store one curve within a single texture, use `CurveTexture` instead. See also `GradientTexture1D` and `GradientTexture2D`.
 */
export class CurveXYZTexture extends Texture2D {
/**
 * The `Curve` that is rendered onto the texture's red channel. Should be a unit `Curve`.
 */
  curveX: Curve;
/**
 * The `Curve` that is rendered onto the texture's green channel. Should be a unit `Curve`.
 */
  curveY: Curve;
/**
 * The `Curve` that is rendered onto the texture's blue channel. Should be a unit `Curve`.
 */
  curveZ: Curve;
  resourceLocalToScene: boolean;
/**
 * The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage.
 */
  width: int;
}
