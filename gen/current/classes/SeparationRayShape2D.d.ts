import type { GodotArray, GodotDictionary, Shape2D, float, int } from "../index.d.ts";
/**
 * A 2D ray shape used for physics collision that tries to separate itself from any collider.
 * 
 * A 2D ray shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape2D`. When a `SeparationRayShape2D` collides with an object, it tries to separate itself from it by moving its endpoint to the collision point. For example, a `SeparationRayShape2D` next to a character can allow it to instantly move up when touching stairs.
 */
export class SeparationRayShape2D extends Shape2D {
/**
 * The ray's length.
 */
  length: float;
/**
 * If `false` (default), the shape always separates and returns a normal along its own direction.
 * If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.
 */
  slideOnSlope: boolean;
}
