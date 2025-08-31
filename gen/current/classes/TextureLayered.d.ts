import type { GodotArray, GodotDictionary, Image, Texture, float, int } from "../index.d.ts";
/**
 * Base class for texture types which contain the data of multiple `Image`s. Each image is of the same size and format.
 * 
 * Base class for `ImageTextureLayered` and `CompressedTextureLayered`. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also `Texture3D`.
 * Data is set on a per-layer basis. For `Texture2DArray`s, the layer specifies the array layer.
 * All images need to have the same width, height and number of mipmap levels.
 * A `TextureLayered` can be loaded with `ResourceLoader.load`.
 * Internally, Godot maps these files to their respective counterparts in the target rendering driver (Vulkan, OpenGL3).
 */
export class TextureLayered extends Texture {
/**
 * Returns the current format being used by this texture. See `Image.Format` for details.
 * @returns int
 */
  getFormat(): int;
/**
 * Called when the `TextureLayered`'s format is queried.
 * @returns int
 */
  private getFormat(): int;
/**
 * Returns the height of the texture in pixels. Height is typically represented by the Y axis.
 * @returns int
 */
  getHeight(): int;
/**
 * Called when the `TextureLayered`'s height is queried.
 * @returns int
 */
  private getHeight(): int;
/**
 * Returns an `Image` resource with the data from specified `layer`.
 * @param layer int
 * @returns Image
 */
  getLayerData(layer: int): Image;
/**
 * Called when the data for a layer in the `TextureLayered` is queried.
 * @param layerIndex int
 * @returns Image
 */
  private getLayerData(layerIndex: int): Image;
/**
 * Returns the `TextureLayered`'s type. The type determines how the data is accessed, with cubemaps having special types.
 * @returns int
 */
  getLayeredType(): int;
/**
 * Called when the layers' type in the `TextureLayered` is queried.
 * @returns int
 */
  private getLayeredType(): int;
/**
 * Returns the number of referenced `Image`s.
 * @returns int
 */
  getLayers(): int;
/**
 * Called when the number of layers in the `TextureLayered` is queried.
 * @returns int
 */
  private getLayers(): int;
/**
 * Returns the width of the texture in pixels. Width is typically represented by the X axis.
 * @returns int
 */
  getWidth(): int;
/**
 * Called when the `TextureLayered`'s width queried.
 * @returns int
 */
  private getWidth(): int;
/**
 * Returns `true` if the layers have generated mipmaps.
 * @returns boolean
 */
  hasMipmaps(): boolean;
/**
 * Called when the presence of mipmaps in the `TextureLayered` is queried.
 * @returns boolean
 */
  private hasMipmaps(): boolean;
/**
 * Texture is a generic `Texture2DArray`.
 */
  static readonly LAYERED_TYPE_2D_ARRAY: int;
/**
 * Texture is a `Cubemap`, with each side in its own layer (6 in total).
 */
  static readonly LAYERED_TYPE_CUBEMAP: int;
/**
 * Texture is a `CubemapArray`, with each cubemap being made of 6 layers.
 */
  static readonly LAYERED_TYPE_CUBEMAP_ARRAY: int;
}
