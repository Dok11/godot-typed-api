import type { GodotArray, GodotDictionary, Node3D, float, int } from "../index.d.ts";
/**
 * Generic 3D position hint for editing.
 * 
 * Generic 3D position hint for editing. It's just like a plain `Node3D`, but it displays as a cross in the 3D editor at all times.
 */
export class Marker3D extends Node3D {
/**
 * Size of the gizmo cross that appears in the editor.
 */
  gizmoExtents: float;
}
