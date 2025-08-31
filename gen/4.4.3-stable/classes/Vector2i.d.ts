import type { GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A 2D vector using integer coordinates.
 * 
 * A 2-element structure that can be used to represent 2D grid coordinates or any other pair of integers.
 * It uses integer coordinates and is therefore preferable to `Vector2` when exact precision is required. Note that the values are limited to 32 bits, and unlike `Vector2` this cannot be configured with an engine build option. Use [int] or `PackedInt64Array` if 64-bit values are needed.
 * 
 * **Note:** In a boolean context, a Vector2i will evaluate to `false` if it's equal to `Vector2i(0, 0)`. Otherwise, a Vector2i will always evaluate to `true`.
 */
export class Vector2i {
/**
 * The vector's X component. Also accessible by using the index position `[0]`.
 */
  x: int;
/**
 * The vector's Y component. Also accessible by using the index position `[1]`.
 */
  y: int;
/**
 * Returns a new vector with all components in absolute values (i.e. positive).
 * @returns Vector2i
 */
  abs(): Vector2i;
/**
 * Returns the aspect ratio of this vector, the ratio of `x` to `y`.
 * @returns float
 */
  aspect(): float;
/**
 * Returns a new vector with all components clamped between the components of `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min Vector2i
 * @param max Vector2i
 * @returns Vector2i
 */
  clamp(min: Vector2i, max: Vector2i): Vector2i;
/**
 * Returns a new vector with all components clamped between `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min int
 * @param max int
 * @returns Vector2i
 */
  clampi(min: int, max: int): Vector2i;
/**
 * Returns the squared distance between this vector and `to`.
 * This method runs faster than `distance_to`, so prefer it if you need to compare vectors or need the squared distance for some formula.
 * @param to Vector2i
 * @returns int
 */
  distanceSquaredTo(to: Vector2i): int;
/**
 * Returns the distance between this vector and `to`.
 * @param to Vector2i
 * @returns float
 */
  distanceTo(to: Vector2i): float;
/**
 * Returns the length (magnitude) of this vector.
 * @returns float
 */
  length(): float;
/**
 * Returns the squared length (squared magnitude) of this vector.
 * This method runs faster than `length`, so prefer it if you need to compare vectors or need the squared distance for some formula.
 * @returns int
 */
  lengthSquared(): int;
/**
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector2i(maxi(x, with.x), maxi(y, with.y))`.
 * @param with_ Vector2i
 * @returns Vector2i
 */
  max(with_: Vector2i): Vector2i;
/**
 * Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_X`.
 * @returns int
 */
  maxAxisIndex(): int;
/**
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector2i(maxi(x, with), maxi(y, with))`.
 * @param with_ int
 * @returns Vector2i
 */
  maxi(with_: int): Vector2i;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector2i(mini(x, with.x), mini(y, with.y))`.
 * @param with_ Vector2i
 * @returns Vector2i
 */
  min(with_: Vector2i): Vector2i;
/**
 * Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_Y`.
 * @returns int
 */
  minAxisIndex(): int;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector2i(mini(x, with), mini(y, with))`.
 * @param with_ int
 * @returns Vector2i
 */
  mini(with_: int): Vector2i;
/**
 * Returns a new vector with each component set to `1` if it's positive, `-1` if it's negative, and `0` if it's zero. The result is identical to calling `@GlobalScope.sign` on each component.
 * @returns Vector2i
 */
  sign(): Vector2i;
/**
 * Returns a new vector with each component snapped to the closest multiple of the corresponding component in `step`.
 * @param step Vector2i
 * @returns Vector2i
 */
  snapped(step: Vector2i): Vector2i;
/**
 * Returns a new vector with each component snapped to the closest multiple of `step`.
 * @param step int
 * @returns Vector2i
 */
  snappedi(step: int): Vector2i;
/**
 * Enumerated value for the X axis. Returned by `max_axis_index` and `min_axis_index`.
 */
  static readonly AXIS_X: int;
/**
 * Enumerated value for the Y axis. Returned by `max_axis_index` and `min_axis_index`.
 */
  static readonly AXIS_Y: int;
/**
 * Zero vector, a vector with all components set to `0`.
 */
  static readonly ZERO: int;
/**
 * One vector, a vector with all components set to `1`.
 */
  static readonly ONE: int;
/**
 * Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of `Vector2.INF`.
 */
  static readonly MIN: int;
/**
 * Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of `Vector2.INF`.
 */
  static readonly MAX: int;
/**
 * Left unit vector. Represents the direction of left.
 */
  static readonly LEFT: int;
/**
 * Right unit vector. Represents the direction of right.
 */
  static readonly RIGHT: int;
/**
 * Up unit vector. Y is down in 2D, so this vector points -Y.
 */
  static readonly UP: int;
/**
 * Down unit vector. Y is down in 2D, so this vector points +Y.
 */
  static readonly DOWN: int;
}
