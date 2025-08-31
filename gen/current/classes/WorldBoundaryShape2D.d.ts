import type { GodotArray, GodotDictionary, Shape2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D world boundary (half-plane) shape used for physics collision.
 * 
 * A 2D world boundary shape, intended for use in physics. `WorldBoundaryShape2D` works like an infinite straight line that forces all physics bodies to stay above it. The line's normal determines which direction is considered as "above" and in the editor, the smaller line over it represents this direction. It can for example be used for endless flat floors.
 */
export class WorldBoundaryShape2D extends Shape2D {
/**
 * The distance from the origin to the line, expressed in terms of `normal` (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.
 * In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the `normal` property.
 */
  distance: float;
/**
 * The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to `Vector2.UP`.
 */
  normal: Vector2;
}
