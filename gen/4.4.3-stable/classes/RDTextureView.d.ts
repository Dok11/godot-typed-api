import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Texture view (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDTextureView extends RefCounted {
/**
 * Optional override for the data format to return sampled values in. The corresponding `RDTextureFormat` must have had this added as a shareable format. The default value of `RenderingDevice.DATA_FORMAT_MAX` does not override the format.
 */
  formatOverride: int;
/**
 * The channel to sample when sampling the alpha channel.
 */
  swizzleA: int;
/**
 * The channel to sample when sampling the blue color channel.
 */
  swizzleB: int;
/**
 * The channel to sample when sampling the green color channel.
 */
  swizzleG: int;
/**
 * The channel to sample when sampling the red color channel.
 */
  swizzleR: int;
}
