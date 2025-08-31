import type { GodotArray, GodotDictionary, MultiMesh, Node2D, Signal, Texture2D, float, int } from "../index.d.ts";
/**
 * Node that instances a `MultiMesh` in 2D.
 * 
 * `MultiMeshInstance2D` is a specialized node to instance a `MultiMesh` resource in 2D.
 * Usage is the same as `MultiMeshInstance3D`.
 */
export class MultiMeshInstance2D extends Node2D {
/**
 * The `MultiMesh` that will be drawn by the `MultiMeshInstance2D`.
 */
  multimesh: MultiMesh;
/**
 * The `Texture2D` that will be used if using the default `CanvasItemMaterial`. Can be accessed as `TEXTURE` in CanvasItem shader.
 */
  texture: Texture2D;
/**
 * Emitted when the `texture` is changed.
 */
  textureChanged: Signal<[]>;
}
