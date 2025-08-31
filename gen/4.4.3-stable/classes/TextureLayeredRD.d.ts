import type { GodotArray, GodotDictionary, RID, TextureLayered, float, int } from "../index.d.ts";
/**
 * Abstract base class for layered texture RD types.
 * 
 * Base class for `Texture2DArrayRD`, `TextureCubemapRD` and `TextureCubemapArrayRD`. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types.
 */
export class TextureLayeredRD extends TextureLayered {
/**
 * The RID of the texture object created on the `RenderingDevice`.
 */
  textureRdRid: RID;
}
