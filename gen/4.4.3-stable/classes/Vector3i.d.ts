import type { GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A 3D vector using integer coordinates.
 * 
 * A 3-element structure that can be used to represent 3D grid coordinates or any other triplet of integers.
 * It uses integer coordinates and is therefore preferable to `Vector3` when exact precision is required. Note that the values are limited to 32 bits, and unlike `Vector3` this cannot be configured with an engine build option. Use [int] or `PackedInt64Array` if 64-bit values are needed.
 * 
 * **Note:** In a boolean context, a Vector3i will evaluate to `false` if it's equal to `Vector3i(0, 0, 0)`. Otherwise, a Vector3i will always evaluate to `true`.
 */
export class Vector3i {
/**
 * The vector's X component. Also accessible by using the index position `[0]`.
 */
  x: int;
/**
 * The vector's Y component. Also accessible by using the index position `[1]`.
 */
  y: int;
/**
 * The vector's Z component. Also accessible by using the index position `[2]`.
 */
  z: int;
/**
 * Returns a new vector with all components in absolute values (i.e. positive).
 * @returns Vector3i
 */
  abs(): Vector3i;
/**
 * Returns a new vector with all components clamped between the components of `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min Vector3i
 * @param max Vector3i
 * @returns Vector3i
 */
  clamp(min: Vector3i, max: Vector3i): Vector3i;
/**
 * Returns a new vector with all components clamped between `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min int
 * @param max int
 * @returns Vector3i
 */
  clampi(min: int, max: int): Vector3i;
/**
 * Returns the squared distance between this vector and `to`.
 * This method runs faster than `distance_to`, so prefer it if you need to compare vectors or need the squared distance for some formula.
 * @param to Vector3i
 * @returns int
 */
  distanceSquaredTo(to: Vector3i): int;
/**
 * Returns the distance between this vector and `to`.
 * @param to Vector3i
 * @returns float
 */
  distanceTo(to: Vector3i): float;
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
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector3i(maxi(x, with.x), maxi(y, with.y), maxi(z, with.z))`.
 * @param with_ Vector3i
 * @returns Vector3i
 */
  max(with_: Vector3i): Vector3i;
/**
 * Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_X`.
 * @returns int
 */
  maxAxisIndex(): int;
/**
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector3i(maxi(x, with), maxi(y, with), maxi(z, with))`.
 * @param with_ int
 * @returns Vector3i
 */
  maxi(with_: int): Vector3i;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector3i(mini(x, with.x), mini(y, with.y), mini(z, with.z))`.
 * @param with_ Vector3i
 * @returns Vector3i
 */
  min(with_: Vector3i): Vector3i;
/**
 * Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_Z`.
 * @returns int
 */
  minAxisIndex(): int;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector3i(mini(x, with), mini(y, with), mini(z, with))`.
 * @param with_ int
 * @returns Vector3i
 */
  mini(with_: int): Vector3i;
/**
 * Returns a new vector with each component set to `1` if it's positive, `-1` if it's negative, and `0` if it's zero. The result is identical to calling `@GlobalScope.sign` on each component.
 * @returns Vector3i
 */
  sign(): Vector3i;
/**
 * Returns a new vector with each component snapped to the closest multiple of the corresponding component in `step`.
 * @param step Vector3i
 * @returns Vector3i
 */
  snapped(step: Vector3i): Vector3i;
/**
 * Returns a new vector with each component snapped to the closest multiple of `step`.
 * @param step int
 * @returns Vector3i
 */
  snappedi(step: int): Vector3i;
/**
 * Enumerated value for the X axis. Returned by `max_axis_index` and `min_axis_index`.
 */
  static readonly AXIS_X: int;
/**
 * Enumerated value for the Y axis. Returned by `max_axis_index` and `min_axis_index`.
 */
  static readonly AXIS_Y: int;
/**
 * Enumerated value for the Z axis. Returned by `max_axis_index` and `min_axis_index`.
 */
  static readonly AXIS_Z: int;
/**
 * Zero vector, a vector with all components set to `0`.
 */
  static readonly ZERO: int;
/**
 * One vector, a vector with all components set to `1`.
 */
  static readonly ONE: int;
/**
 * Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of `Vector3.INF`.
 */
  static readonly MIN: int;
/**
 * Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of `Vector3.INF`.
 */
  static readonly MAX: int;
/**
 * Left unit vector. Represents the local direction of left, and the global direction of west.
 */
  static readonly LEFT: int;
/**
 * Right unit vector. Represents the local direction of right, and the global direction of east.
 */
  static readonly RIGHT: int;
/**
 * Up unit vector.
 */
  static readonly UP: int;
/**
 * Down unit vector.
 */
  static readonly DOWN: int;
/**
 * Forward unit vector. Represents the local direction of forward, and the global direction of north.
 */
  static readonly FORWARD: int;
/**
 * Back unit vector. Represents the local direction of back, and the global direction of south.
 */
  static readonly BACK: int;
}
