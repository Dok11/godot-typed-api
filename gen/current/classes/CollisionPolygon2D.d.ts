import type { GodotArray, GodotDictionary, Node2D, PackedVector2Array, float, int } from "../index.d.ts";
/**
 * A node that provides a polygon shape to a `CollisionObject2D` parent.
 * 
 * A node that provides a polygon shape to a `CollisionObject2D` parent and allows to edit it. The polygon can be concave or convex. This can give a detection shape to an `Area2D`, turn `PhysicsBody2D` into a solid object, or give a hollow shape to a `StaticBody2D`.
 * 
 * **Warning:** A non-uniformly scaled `CollisionPolygon2D` will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its polygon instead.
 */
export class CollisionPolygon2D extends Node2D {
/**
 * Collision build mode. Use one of the `BuildMode` constants.
 */
  buildMode: int;
/**
 * If `true`, no collisions will be detected.
 */
  disabled: boolean;
/**
 * If `true`, only edges that face up, relative to `CollisionPolygon2D`'s rotation, will collide with other objects.
 * 
 * **Note:** This property has no effect if this `CollisionPolygon2D` is a child of an `Area2D` node.
 */
  oneWayCollision: boolean;
/**
 * The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the polygon at a high velocity.
 */
  oneWayCollisionMargin: float;
/**
 * The polygon's list of vertices. Each point will be connected to the next, and the final point will be connected to the first.
 * 
 * **Note:** The returned vertices are in the local coordinate space of the given `CollisionPolygon2D`.
 */
  polygon: PackedVector2Array;
/**
 * Collisions will include the polygon and its contained area. In this mode the node has the same effect as several `ConvexPolygonShape2D` nodes, one for each convex shape in the convex decomposition of the polygon (but without the overhead of multiple nodes).
 */
  static readonly BUILD_SOLIDS: int;
/**
 * Collisions will only include the polygon edges. In this mode the node has the same effect as a single `ConcavePolygonShape2D` made of segments, with the restriction that each segment (after the first one) starts where the previous one ends, and the last one ends where the first one starts (forming a closed but hollow polygon).
 */
  static readonly BUILD_SEGMENTS: int;
}
