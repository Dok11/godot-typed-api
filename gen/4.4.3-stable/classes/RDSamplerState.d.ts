import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Sampler state (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDSamplerState extends RefCounted {
/**
 * Maximum anisotropy that can be used when sampling. Only effective if `use_anisotropy` is `true`. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to `16.0`.
 * If `anisotropy_max` is `1.0`, forcibly disables anisotropy even if `use_anisotropy` is `true`.
 */
  anisotropyMax: float;
/**
 * The border color that will be returned when sampling outside the sampler's bounds and the `repeat_u`, `repeat_v` or `repeat_w` modes have repeating disabled.
 */
  borderColor: int;
/**
 * The compare operation to use. Only effective if `enable_compare` is `true`.
 */
  compareOp: int;
/**
 * If `true`, returned values will be based on the comparison operation defined in `compare_op`. This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler.
 */
  enableCompare: boolean;
/**
 * The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between `-0.5` and `0.0`. Only effective if the sampler has mipmaps available.
 */
  lodBias: float;
/**
 * The sampler's magnification filter. It is the filtering method used when sampling texels that appear bigger than on-screen pixels.
 */
  magFilter: int;
/**
 * The maximum mipmap LOD bias to display (lowest resolution). Only effective if the sampler has mipmaps available.
 */
  maxLod: float;
/**
 * The sampler's minification filter. It is the filtering method used when sampling texels that appear smaller than on-screen pixels.
 */
  minFilter: int;
/**
 * The minimum mipmap LOD bias to display (highest resolution). Only effective if the sampler has mipmaps available.
 */
  minLod: float;
/**
 * The filtering method to use for mipmaps.
 */
  mipFilter: int;
/**
 * The repeat mode to use along the U axis of UV coordinates. This affects the returned values if sampling outside the UV bounds.
 */
  repeatU: int;
/**
 * The repeat mode to use along the V axis of UV coordinates. This affects the returned values if sampling outside the UV bounds.
 */
  repeatV: int;
/**
 * The repeat mode to use along the W axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. Only effective for 3D samplers.
 */
  repeatW: int;
/**
 * If `true`, the texture will be sampled with coordinates ranging from 0 to the texture's resolution. Otherwise, the coordinates will be normalized and range from 0 to 1.
 */
  unnormalizedUvw: boolean;
/**
 * If `true`, perform anisotropic sampling. See `anisotropy_max`.
 */
  useAnisotropy: boolean;
}
