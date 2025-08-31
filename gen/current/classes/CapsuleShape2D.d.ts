import type { GodotArray, GodotDictionary, Shape2D, float, int } from "../index.d.ts";
/**
 * A 2D capsule shape used for physics collision.
 * 
 * A 2D capsule shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape2D`.
 * 
 * **Performance:** `CapsuleShape2D` is fast to check collisions against, but it is slower than `RectangleShape2D` and `CircleShape2D`.
 */
export class CapsuleShape2D extends Shape2D {
/**
 * The capsule's height.
 */
  height: float;
/**
 * The capsule's radius.
 */
  radius: float;
}
