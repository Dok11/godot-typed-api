import type { GodotArray, GodotDictionary, Mesh, Node2D, Signal, Texture2D, float, int } from "../index.d.ts";
/**
 * Node used for displaying a `Mesh` in 2D.
 * 
 * Node used for displaying a `Mesh` in 2D. A `MeshInstance2D` can be automatically created from an existing `Sprite2D` via a tool in the editor toolbar. Select the `Sprite2D` node, then choose **Sprite2D > Convert to MeshInstance2D** at the top of the 2D editor viewport.
 */
export class MeshInstance2D extends Node2D {
/**
 * The `Mesh` that will be drawn by the `MeshInstance2D`.
 */
  mesh: Mesh;
/**
 * The `Texture2D` that will be used if using the default `CanvasItemMaterial`. Can be accessed as `TEXTURE` in CanvasItem shader.
 */
  texture: Texture2D;
/**
 * Emitted when the `texture` is changed.
 */
  textureChanged: Signal<[]>;
}
