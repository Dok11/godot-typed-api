import type { GodotArray, GodotDictionary, Mesh, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * Simple texture that uses a mesh to draw itself.
 * 
 * Simple texture that uses a mesh to draw itself. It's limited because flags can't be changed and region drawing is not supported.
 */
export class MeshTexture extends Texture2D {
/**
 * Sets the base texture that the Mesh will use to draw.
 */
  baseTexture: Texture2D;
/**
 * Sets the size of the image, needed for reference.
 */
  imageSize: Vector2;
/**
 * Sets the mesh used to draw. It must be a mesh using 2D vertices.
 */
  mesh: Mesh;
  resourceLocalToScene: boolean;
}
