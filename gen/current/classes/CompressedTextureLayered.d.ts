import type { GodotArray, GodotDictionary, TextureLayered, float, int } from "../index.d.ts";
/**
 * Base class for texture arrays that can optionally be compressed.
 * 
 * Base class for `CompressedTexture2DArray` and `CompressedTexture3D`. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also `TextureLayered`.
 */
export class CompressedTextureLayered extends TextureLayered {
/**
 * The path the texture should be loaded from.
 */
  loadPath: string;
/**
 * Loads the texture at `path`.
 * @param path string
 * @returns int
 */
  load(path: string): int;
}
