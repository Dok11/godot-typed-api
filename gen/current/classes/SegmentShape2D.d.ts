import type { GodotArray, GodotDictionary, Shape2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D line segment shape used for physics collision.
 * 
 * A 2D line segment shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape2D`.
 */
export class SegmentShape2D extends Shape2D {
/**
 * The segment's first point position.
 */
  a: Vector2;
/**
 * The segment's second point position.
 */
  b: Vector2;
}
