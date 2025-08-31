import type { GodotArray, GodotDictionary, Shape2D, float, int } from "../index.d.ts";
/**
 * A 2D circle shape used for physics collision.
 * 
 * A 2D circle shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape2D`.
 * 
 * **Performance:** `CircleShape2D` is fast to check collisions against. It is faster than `RectangleShape2D` and `CapsuleShape2D`.
 */
export class CircleShape2D extends Shape2D {
/**
 * The circle's radius.
 */
  radius: float;
}
