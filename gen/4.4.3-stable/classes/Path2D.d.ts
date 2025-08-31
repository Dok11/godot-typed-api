import type { Curve2D, GodotArray, GodotDictionary, Node2D, float, int } from "../index.d.ts";
/**
 * Contains a `Curve2D` path for `PathFollow2D` nodes to follow.
 * 
 * Can have `PathFollow2D` child nodes moving along the `Curve2D`. See `PathFollow2D` for more information on usage.
 * 
 * **Note:** The path is considered as relative to the moved nodes (children of `PathFollow2D`). As such, the curve should usually start with a zero vector (`(0, 0)`).
 */
export class Path2D extends Node2D {
/**
 * A `Curve2D` describing the path.
 */
  curve: Curve2D;
}
