import type { GodotArray, GodotDictionary, Image, Texture3D, float, int } from "../index.d.ts";
/**
 * Texture with 3 dimensions.
 * 
 * `ImageTexture3D` is a 3-dimensional `ImageTexture` that has a width, height, and depth. See also `ImageTextureLayered`.
 * 3D textures are typically used to store density maps for `FogMaterial`, color correction LUTs for `Environment`, vector fields for `GPUParticlesAttractorVectorField3D` and collision maps for `GPUParticlesCollisionSDF3D`. 3D textures can also be used in custom shaders.
 */
export class ImageTexture3D extends Texture3D {
/**
 * Creates the `ImageTexture3D` with specified `width`, `height`, and `depth`. See `Image.Format` for `format` options. If `use_mipmaps` is `true`, then generate mipmaps for the `ImageTexture3D`.
 * @param format int
 * @param width int
 * @param height int
 * @param depth int
 * @param useMipmaps boolean
 * @param data Image[]
 * @returns int
 */
  create(format: int, width: int, height: int, depth: int, useMipmaps: boolean, data: Image[]): int;
/**
 * Replaces the texture's existing data with the layers specified in `data`. The size of `data` must match the parameters that were used for `create`. In other words, the texture cannot be resized or have its format changed by calling `update`.
 * @param data Image[]
 */
  update(data: Image[]): void;
}
