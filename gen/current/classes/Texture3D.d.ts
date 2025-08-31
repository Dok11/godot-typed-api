import type { GodotArray, GodotDictionary, Image, Resource, Texture, float, int } from "../index.d.ts";
/**
 * Base class for 3-dimensional textures.
 * 
 * Base class for `ImageTexture3D` and `CompressedTexture3D`. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. `Texture3D` is the base class for all 3-dimensional texture types. See also `TextureLayered`.
 * All images need to have the same width, height and number of mipmap levels.
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets.
 */
export class Texture3D extends Texture {
/**
 * Creates a placeholder version of this resource (`PlaceholderTexture3D`).
 * @returns Resource
 */
  createPlaceholder(): Resource;
/**
 * Returns the `Texture3D`'s data as an array of `Image`s. Each `Image` represents a *slice* of the `Texture3D`, with different slices mapping to different depth (Z axis) levels.
 * @returns Image[]
 */
  getData(): Image[];
/**
 * Called when the `Texture3D`'s data is queried.
 * @returns Image[]
 */
  private getData(): Image[];
/**
 * Returns the `Texture3D`'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in `Texture2D`).
 * @returns int
 */
  getDepth(): int;
/**
 * Called when the `Texture3D`'s depth is queried.
 * @returns int
 */
  private getDepth(): int;
/**
 * Returns the current format being used by this texture. See `Image.Format` for details.
 * @returns int
 */
  getFormat(): int;
/**
 * Called when the `Texture3D`'s format is queried.
 * @returns int
 */
  private getFormat(): int;
/**
 * Returns the `Texture3D`'s height in pixels. Width is typically represented by the Y axis.
 * @returns int
 */
  getHeight(): int;
/**
 * Called when the `Texture3D`'s height is queried.
 * @returns int
 */
  private getHeight(): int;
/**
 * Returns the `Texture3D`'s width in pixels. Width is typically represented by the X axis.
 * @returns int
 */
  getWidth(): int;
/**
 * Called when the `Texture3D`'s width is queried.
 * @returns int
 */
  private getWidth(): int;
/**
 * Returns `true` if the `Texture3D` has generated mipmaps.
 * @returns boolean
 */
  hasMipmaps(): boolean;
/**
 * Called when the presence of mipmaps in the `Texture3D` is queried.
 * @returns boolean
 */
  private hasMipmaps(): boolean;
}
