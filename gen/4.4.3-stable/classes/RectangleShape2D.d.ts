import type { GodotArray, GodotDictionary, Shape2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D rectangle shape used for physics collision.
 * 
 * A 2D rectangle shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape2D`.
 * 
 * **Performance:** `RectangleShape2D` is fast to check collisions against. It is faster than `CapsuleShape2D`, but slower than `CircleShape2D`.
 */
export class RectangleShape2D extends Shape2D {
/**
 * The rectangle's width and height.
 */
  size: Vector2;
}
