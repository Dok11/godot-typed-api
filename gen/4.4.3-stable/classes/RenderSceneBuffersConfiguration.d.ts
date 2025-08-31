import type { GodotArray, GodotDictionary, RID, RefCounted, Vector2i, float, int } from "../index.d.ts";
/**
 * Configuration object used to setup a `RenderSceneBuffers` object.
 * 
 * This configuration object is created and populated by the render engine on a viewport change and used to (re)configure a `RenderSceneBuffers` object.
 */
export class RenderSceneBuffersConfiguration extends RefCounted {
/**
 * Level of the anisotropic filter.
 */
  anisotropicFilteringLevel: int;
/**
 * FSR Sharpness applicable if FSR upscaling is used.
 */
  fsrSharpness: float;
/**
 * The size of the 3D render buffer used for rendering.
 */
  internalSize: Vector2i;
/**
 * The MSAA mode we're using for 3D rendering.
 */
  msaa3d: int;
/**
 * The render target associated with these buffer.
 */
  renderTarget: RID;
/**
 * The requested scaling mode with which we upscale/downscale if `internal_size` and `target_size` are not equal.
 */
  scaling3dMode: int;
/**
 * The requested screen space AA applied in post processing.
 */
  screenSpaceAa: int;
/**
 * The target (upscale) size if scaling is used.
 */
  targetSize: Vector2i;
/**
 * Bias applied to mipmaps.
 */
  textureMipmapBias: float;
/**
 * The number of views we're rendering.
 */
  viewCount: int;
}
