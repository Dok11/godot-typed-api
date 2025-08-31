import type { Curve3D, GodotArray, GodotDictionary, Node3D, Signal, float, int } from "../index.d.ts";
/**
 * Contains a `Curve3D` path for `PathFollow3D` nodes to follow.
 * 
 * Can have `PathFollow3D` child nodes moving along the `Curve3D`. See `PathFollow3D` for more information on the usage.
 * Note that the path is considered as relative to the moved nodes (children of `PathFollow3D`). As such, the curve should usually start with a zero vector `(0, 0, 0)`.
 */
export class Path3D extends Node3D {
/**
 * A `Curve3D` describing the path.
 */
  curve: Curve3D;
/**
 * Emitted when the `curve` changes.
 */
  curveChanged: Signal<[]>;
}
