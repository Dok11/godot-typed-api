import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Texture format (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDTextureFormat extends RefCounted {
/**
 * The number of layers in the texture. Only relevant for 2D texture arrays.
 */
  arrayLayers: int;
/**
 * The texture's depth (in pixels). This is always `1` for 2D textures.
 */
  depth: int;
/**
 * The texture's pixel data format.
 */
  format: int;
/**
 * The texture's height (in pixels).
 */
  height: int;
/**
 * If a texture is discardable, its contents do not need to be preserved between frames. This flag is only relevant when the texture is used as target in a draw list.
 * This information is used by `RenderingDevice` to figure out if a texture's contents can be discarded, eliminating unnecessary writes to memory and boosting performance.
 */
  isDiscardable: boolean;
/**
 * The texture will be used as the destination of a resolve operation.
 */
  isResolveBuffer: boolean;
/**
 * The number of mipmaps available in the texture.
 */
  mipmaps: int;
/**
 * The number of samples used when sampling the texture.
 */
  samples: int;
/**
 * The texture type.
 */
  textureType: int;
/**
 * The texture's usage bits, which determine what can be done using the texture.
 */
  usageBits: int;
/**
 * The texture's width (in pixels).
 */
  width: int;
/**
 * Adds `format` as a valid format for the corresponding `RDTextureView`'s `RDTextureView.format_override` property. If any format is added as shareable, then the main `format` must also be added.
 * @param format int
 */
  addShareableFormat(format: int): void;
/**
 * Removes `format` from the list of valid formats that the corresponding `RDTextureView`'s `RDTextureView.format_override` property can be set to.
 * @param format int
 */
  removeShareableFormat(format: int): void;
}
