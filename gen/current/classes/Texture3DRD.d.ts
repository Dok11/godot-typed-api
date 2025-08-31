import type { GodotArray, GodotDictionary, RID, Texture3D, float, int } from "../index.d.ts";
/**
 * Texture for 3D that is bound to a texture created on the `RenderingDevice`.
 * 
 * This texture class allows you to use a 3D texture created directly on the `RenderingDevice` as a texture for materials, meshes, etc.
 */
export class Texture3DRD extends Texture3D {
/**
 * The RID of the texture object created on the `RenderingDevice`.
 */
  textureRdRid: RID;
}
