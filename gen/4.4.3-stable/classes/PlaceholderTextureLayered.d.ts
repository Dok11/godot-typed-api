import type { GodotArray, GodotDictionary, TextureLayered, Vector2i, float, int } from "../index.d.ts";
/**
 * Placeholder class for a 2-dimensional texture array.
 * 
 * This class is used when loading a project that uses a `TextureLayered` subclass in 2 conditions:
 * - When running the project exported in dedicated server mode, only the texture's dimensions are kept (as they may be relied upon for gameplay purposes or positioning of other elements). This allows reducing the exported PCK's size significantly.
 * - When this subclass is missing due to using a different engine version or build (e.g. modules disabled).
 * 
 * **Note:** This is not intended to be used as an actual texture for rendering. It is not guaranteed to work like one in shaders or materials (for example when calculating UV).
 */
export class PlaceholderTextureLayered extends TextureLayered {
/**
 * The number of layers in the texture array.
 */
  layers: int;
/**
 * The size of each texture layer (in pixels).
 */
  size: Vector2i;
}
