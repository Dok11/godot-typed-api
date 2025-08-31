import type { GodotArray, GodotDictionary, Node2D, float, int } from "../index.d.ts";
/**
 * Generic 2D position hint for editing.
 * 
 * Generic 2D position hint for editing. It's just like a plain `Node2D`, but it displays as a cross in the 2D editor at all times. You can set the cross' visual size by using the gizmo in the 2D editor while the node is selected.
 */
export class Marker2D extends Node2D {
/**
 * Size of the gizmo cross that appears in the editor.
 */
  gizmoExtents: float;
}
