import type { GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A 4D vector using floating-point coordinates.
 * 
 * A 4-element structure that can be used to represent 4D coordinates or any other quadruplet of numeric values.
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 * See `Vector4i` for its integer counterpart.
 * 
 * **Note:** In a boolean context, a Vector4 will evaluate to `false` if it's equal to `Vector4(0, 0, 0, 0)`. Otherwise, a Vector4 will always evaluate to `true`.
 */
export class Vector4 {
/**
 * The vector's W component. Also accessible by using the index position `[3]`.
 */
  w: float;
/**
 * The vector's X component. Also accessible by using the index position `[0]`.
 */
  x: float;
/**
 * The vector's Y component. Also accessible by using the index position `[1]`.
 */
  y: float;
/**
 * The vector's Z component. Also accessible by using the index position `[2]`.
 */
  z: float;
/**
 * Returns a new vector with all components in absolute values (i.e. positive).
 * @returns Vector4
 */
  abs(): Vector4;
/**
 * Returns a new vector with all components rounded up (towards positive infinity).
 * @returns Vector4
 */
  ceil(): Vector4;
/**
 * Returns a new vector with all components clamped between the components of `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min Vector4
 * @param max Vector4
 * @returns Vector4
 */
  clamp(min: Vector4, max: Vector4): Vector4;
/**
 * Returns a new vector with all components clamped between `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min float
 * @param max float
 * @returns Vector4
 */
  clampf(min: float, max: float): Vector4;
/**
 * Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.
 * @param b Vector4
 * @param preA Vector4
 * @param postB Vector4
 * @param weight float
 * @returns Vector4
 */
  cubicInterpolate(b: Vector4, preA: Vector4, postB: Vector4, weight: float): Vector4;
/**
 * Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.
 * It can perform smoother interpolation than `cubic_interpolate` by the time values.
 * @param b Vector4
 * @param preA Vector4
 * @param postB Vector4
 * @param weight float
 * @param bT float
 * @param preAT float
 * @param postBT float
 * @returns Vector4
 */
  cubicInterpolateInTime(b: Vector4, preA: Vector4, postB: Vector4, weight: float, bT: float, preAT: float, postBT: float): Vector4;
/**
 * Returns the normalized vector pointing from this vector to `to`. This is equivalent to using `(b - a).normalized()`.
 * @param to Vector4
 * @returns Vector4
 */
  directionTo(to: Vector4): Vector4;
/**
 * Returns the squared distance between this vector and `to`.
 * This method runs faster than `distance_to`, so prefer it if you need to compare vectors or need the squared distance for some formula.
 * @param to Vector4
 * @returns float
 */
  distanceSquaredTo(to: Vector4): float;
/**
 * Returns the distance between this vector and `to`.
 * @param to Vector4
 * @returns float
 */
  distanceTo(to: Vector4): float;
/**
 * Returns the dot product of this vector and `with`.
 * @param with_ Vector4
 * @returns float
 */
  dot(with_: Vector4): float;
/**
 * Returns a new vector with all components rounded down (towards negative infinity).
 * @returns Vector4
 */
  floor(): Vector4;
/**
 * Returns the inverse of the vector. This is the same as `Vector4(1.0 / v.x, 1.0 / v.y, 1.0 / v.z, 1.0 / v.w)`.
 * @returns Vector4
 */
  inverse(): Vector4;
/**
 * Returns `true` if this vector and `to` are approximately equal, by running `@GlobalScope.is_equal_approx` on each component.
 * @param to Vector4
 * @returns boolean
 */
  isEqualApprox(to: Vector4): boolean;
/**
 * Returns `true` if this vector is finite, by calling `@GlobalScope.is_finite` on each component.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1.
 * @returns boolean
 */
  isNormalized(): boolean;
/**
 * Returns `true` if this vector's values are approximately zero, by running `@GlobalScope.is_zero_approx` on each component.
 * This method is faster than using `is_equal_approx` with one value as a zero vector.
 * @returns boolean
 */
  isZeroApprox(): boolean;
/**
 * Returns the length (magnitude) of this vector.
 * @returns float
 */
  length(): float;
/**
 * Returns the squared length (squared magnitude) of this vector.
 * This method runs faster than `length`, so prefer it if you need to compare vectors or need the squared distance for some formula.
 * @returns float
 */
  lengthSquared(): float;
/**
 * Returns the result of the linear interpolation between this vector and `to` by amount `weight`. `weight` is on the range of `0.0` to `1.0`, representing the amount of interpolation.
 * @param to Vector4
 * @param weight float
 * @returns Vector4
 */
  lerp(to: Vector4, weight: float): Vector4;
/**
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector4(maxf(x, with.x), maxf(y, with.y), maxf(z, with.z), maxf(w, with.w))`.
 * @param with_ Vector4
 * @returns Vector4
 */
  max(with_: Vector4): Vector4;
/**
 * Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_X`.
 * @returns int
 */
  maxAxisIndex(): int;
/**
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector4(maxf(x, with), maxf(y, with), maxf(z, with), maxf(w, with))`.
 * @param with_ float
 * @returns Vector4
 */
  maxf(with_: float): Vector4;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector4(minf(x, with.x), minf(y, with.y), minf(z, with.z), minf(w, with.w))`.
 * @param with_ Vector4
 * @returns Vector4
 */
  min(with_: Vector4): Vector4;
/**
 * Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_W`.
 * @returns int
 */
  minAxisIndex(): int;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector4(minf(x, with), minf(y, with), minf(z, with), minf(w, with))`.
 * @param with_ float
 * @returns Vector4
 */
  minf(with_: float): Vector4;
/**
 * Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0, 0, 0)` if `v.length() == 0`. See also `is_normalized`.
 * 
 * **Note:** This function may return incorrect values if the input vector length is near zero.
 * @returns Vector4
 */
  normalized(): Vector4;
/**
 * Returns a vector composed of the `@GlobalScope.fposmod` of this vector's components and `mod`.
 * @param mod float
 * @returns Vector4
 */
  posmod(mod: float): Vector4;
/**
 * Returns a vector composed of the `@GlobalScope.fposmod` of this vector's components and `modv`'s components.
 * @param modv Vector4
 * @returns Vector4
 */
  posmodv(modv: Vector4): Vector4;
/**
 * Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero.
 * @returns Vector4
 */
  round(): Vector4;
/**
 * Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling `@GlobalScope.sign` on each component.
 * @returns Vector4
 */
  sign(): Vector4;
/**
 * Returns a new vector with each component snapped to the nearest multiple of the corresponding component in `step`. This can also be used to round the components to an arbitrary number of decimals.
 * @param step Vector4
 * @returns Vector4
 */
  snapped(step: Vector4): Vector4;
/**
 * Returns a new vector with each component snapped to the nearest multiple of `step`. This can also be used to round the components to an arbitrary number of decimals.
 * @param step float
 * @returns Vector4
 */
  snappedf(step: float): Vector4;
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
 * Enumerated value for the W axis. Returned by `max_axis_index` and `min_axis_index`.
 */
  static readonly AXIS_W: int;
/**
 * Zero vector, a vector with all components set to `0`.
 */
  static readonly ZERO: int;
/**
 * One vector, a vector with all components set to `1`.
 */
  static readonly ONE: int;
/**
 * Infinity vector, a vector with all components set to `@GDScript.INF`.
 */
  static readonly INF: int;
}
