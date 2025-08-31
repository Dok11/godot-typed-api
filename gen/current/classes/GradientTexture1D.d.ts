import type { GodotArray, GodotDictionary, Gradient, Texture2D, float, int } from "../index.d.ts";
/**
 * A 1D texture that uses colors obtained from a `Gradient`.
 * 
 * A 1D texture that obtains colors from a `Gradient` to fill the texture data. The texture is filled by sampling the gradient for each pixel. Therefore, the texture does not necessarily represent an exact copy of the gradient, as it may miss some colors if there are not enough pixels. See also `GradientTexture2D`, `CurveTexture` and `CurveXYZTexture`.
 */
export class GradientTexture1D extends Texture2D {
/**
 * The `Gradient` used to fill the texture.
 */
  gradient: Gradient;
  resourceLocalToScene: boolean;
/**
 * If `true`, the generated texture will support high dynamic range (`Image.FORMAT_RGBAF` format). This allows for glow effects to work if `Environment.glow_enabled` is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped (`Image.FORMAT_RGBA8` format).
 */
  useHdr: boolean;
/**
 * The number of color samples that will be obtained from the `Gradient`.
 */
  width: int;
}
