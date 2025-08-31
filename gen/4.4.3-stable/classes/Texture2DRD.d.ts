import type { GodotArray, GodotDictionary, RID, Texture2D, float, int } from "../index.d.ts";
/**
 * Texture for 2D that is bound to a texture created on the `RenderingDevice`.
 * 
 * This texture class allows you to use a 2D texture created directly on the `RenderingDevice` as a texture for materials, meshes, etc.
 */
export class Texture2DRD extends Texture2D {
  resourceLocalToScene: boolean;
/**
 * The RID of the texture object created on the `RenderingDevice`.
 */
  textureRdRid: RID;
}
