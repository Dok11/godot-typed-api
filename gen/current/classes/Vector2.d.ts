import type { GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A 2D vector using floating-point coordinates.
 * 
 * A 2-element structure that can be used to represent 2D coordinates or any other pair of numeric values.
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 * See `Vector2i` for its integer counterpart.
 * 
 * **Note:** In a boolean context, a Vector2 will evaluate to `false` if it's equal to `Vector2(0, 0)`. Otherwise, a Vector2 will always evaluate to `true`.
 */
export class Vector2 {
/**
 * The vector's X component. Also accessible by using the index position `[0]`.
 */
  x: float;
/**
 * The vector's Y component. Also accessible by using the index position `[1]`.
 */
  y: float;
/**
 * Returns a new vector with all components in absolute values (i.e. positive).
 * @returns Vector2
 */
  abs(): Vector2;
/**
 * Returns this vector's angle with respect to the positive X axis, or `(1, 0)` vector, in radians.
 * For example, `Vector2.RIGHT.angle()` will return zero, `Vector2.DOWN.angle()` will return `PI / 2` (a quarter turn, or 90 degrees), and `Vector2(1, -1).angle()` will return `-PI / 4` (a negative eighth turn, or -45 degrees).
 * Illustration of the returned angle. (https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle.png)
 * Equivalent to the result of `@GlobalScope.atan2` when called with the vector's `y` and `x` as parameters: `atan2(y, x)`.
 * @returns float
 */
  angle(): float;
/**
 * Returns the signed angle to the given vector, in radians.
 * Illustration of the returned angle. (https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to.png)
 * @param to Vector2
 * @returns float
 */
  angleTo(to: Vector2): float;
/**
 * Returns the angle between the line connecting the two points and the X axis, in radians.
 * `a.angle_to_point(b)` is equivalent of doing `(b - a).angle()`.
 * Illustration of the returned angle. (https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to_point.png)
 * @param to Vector2
 * @returns float
 */
  angleToPoint(to: Vector2): float;
/**
 * Returns the aspect ratio of this vector, the ratio of `x` to `y`.
 * @returns float
 */
  aspect(): float;
/**
 * Returns the derivative at the given `t` on the Bézier curve (https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by this vector and the given `control_1`, `control_2`, and `end` points.
 * @param control1 Vector2
 * @param control2 Vector2
 * @param end Vector2
 * @param t float
 * @returns Vector2
 */
  bezierDerivative(control1: Vector2, control2: Vector2, end: Vector2, t: float): Vector2;
/**
 * Returns the point at the given `t` on the Bézier curve (https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by this vector and the given `control_1`, `control_2`, and `end` points.
 * @param control1 Vector2
 * @param control2 Vector2
 * @param end Vector2
 * @param t float
 * @returns Vector2
 */
  bezierInterpolate(control1: Vector2, control2: Vector2, end: Vector2, t: float): Vector2;
/**
 * Returns the vector "bounced off" from a line defined by the given normal `n` perpendicular to the line.
 * 
 * **Note:** `bounce` performs the operation that most engines and frameworks call [code skip-lint]reflect()[/code].
 * @param n Vector2
 * @returns Vector2
 */
  bounce(n: Vector2): Vector2;
/**
 * Returns a new vector with all components rounded up (towards positive infinity).
 * @returns Vector2
 */
  ceil(): Vector2;
/**
 * Returns a new vector with all components clamped between the components of `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min Vector2
 * @param max Vector2
 * @returns Vector2
 */
  clamp(min: Vector2, max: Vector2): Vector2;
/**
 * Returns a new vector with all components clamped between `min` and `max`, by running `@GlobalScope.clamp` on each component.
 * @param min float
 * @param max float
 * @returns Vector2
 */
  clampf(min: float, max: float): Vector2;
/**
 * Returns the 2D analog of the cross product for this vector and `with`.
 * This is the signed area of the parallelogram formed by the two vectors. If the second vector is clockwise from the first vector, then the cross product is the positive area. If counter-clockwise, the cross product is the negative area. If the two vectors are parallel this returns zero, making it useful for testing if two vectors are parallel.
 * 
 * **Note:** Cross product is not defined in 2D mathematically. This method embeds the 2D vectors in the XY plane of 3D space and uses their cross product's Z component as the analog.
 * @param with_ Vector2
 * @returns float
 */
  cross(with_: Vector2): float;
/**
 * Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.
 * @param b Vector2
 * @param preA Vector2
 * @param postB Vector2
 * @param weight float
 * @returns Vector2
 */
  cubicInterpolate(b: Vector2, preA: Vector2, postB: Vector2, weight: float): Vector2;
/**
 * Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.
 * It can perform smoother interpolation than `cubic_interpolate` by the time values.
 * @param b Vector2
 * @param preA Vector2
 * @param postB Vector2
 * @param weight float
 * @param bT float
 * @param preAT float
 * @param postBT float
 * @returns Vector2
 */
  cubicInterpolateInTime(b: Vector2, preA: Vector2, postB: Vector2, weight: float, bT: float, preAT: float, postBT: float): Vector2;
/**
 * Returns the normalized vector pointing from this vector to `to`. This is equivalent to using `(b - a).normalized()`.
 * @param to Vector2
 * @returns Vector2
 */
  directionTo(to: Vector2): Vector2;
/**
 * Returns the squared distance between this vector and `to`.
 * This method runs faster than `distance_to`, so prefer it if you need to compare vectors or need the squared distance for some formula.
 * @param to Vector2
 * @returns float
 */
  distanceSquaredTo(to: Vector2): float;
/**
 * Returns the distance between this vector and `to`.
 * @param to Vector2
 * @returns float
 */
  distanceTo(to: Vector2): float;
/**
 * Returns the dot product of this vector and `with`. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.
 * The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.
 * When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.
 * 
 * **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.
 * @param with_ Vector2
 * @returns float
 */
  dot(with_: Vector2): float;
/**
 * Returns a new vector with all components rounded down (towards negative infinity).
 * @returns Vector2
 */
  floor(): Vector2;
/**
 * Creates a unit `Vector2` rotated to the given `angle` in radians. This is equivalent to doing `Vector2(cos(angle), sin(angle))` or `Vector2.RIGHT.rotated(angle)`.
 * 
 * 				```gdscript
 * 
 * 				print(Vector2.from_angle(0)) # Prints (1.0, 0.0)
 * 				print(Vector2(1, 0).angle()) # Prints 0.0, which is the angle used above.
 * 				print(Vector2.from_angle(PI / 2)) # Prints (0.0, 1.0)
 * 				
 * 
 * ```
 * @param angle float
 * @returns Vector2
 */
  fromAngle(angle: float): Vector2;
/**
 * Returns `true` if this vector and `to` are approximately equal, by running `@GlobalScope.is_equal_approx` on each component.
 * @param to Vector2
 * @returns boolean
 */
  isEqualApprox(to: Vector2): boolean;
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
 * @param to Vector2
 * @param weight float
 * @returns Vector2
 */
  lerp(to: Vector2, weight: float): Vector2;
/**
 * Returns the vector with a maximum length by limiting its length to `length`. If the vector is non-finite, the result is undefined.
 * @param length float (optional, default: 1.0)
 * @returns Vector2
 */
  limitLength(length?: float): Vector2;
/**
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector2(maxf(x, with.x), maxf(y, with.y))`.
 * @param with_ Vector2
 * @returns Vector2
 */
  max(with_: Vector2): Vector2;
/**
 * Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_X`.
 * @returns int
 */
  maxAxisIndex(): int;
/**
 * Returns the component-wise maximum of this and `with`, equivalent to `Vector2(maxf(x, with), maxf(y, with))`.
 * @param with_ float
 * @returns Vector2
 */
  maxf(with_: float): Vector2;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector2(minf(x, with.x), minf(y, with.y))`.
 * @param with_ Vector2
 * @returns Vector2
 */
  min(with_: Vector2): Vector2;
/**
 * Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns `AXIS_Y`.
 * @returns int
 */
  minAxisIndex(): int;
/**
 * Returns the component-wise minimum of this and `with`, equivalent to `Vector2(minf(x, with), minf(y, with))`.
 * @param with_ float
 * @returns Vector2
 */
  minf(with_: float): Vector2;
/**
 * Returns a new vector moved toward `to` by the fixed `delta` amount. Will not go past the final value.
 * @param to Vector2
 * @param delta float
 * @returns Vector2
 */
  moveToward(to: Vector2, delta: float): Vector2;
/**
 * Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0)` if `v.length() == 0`. See also `is_normalized`.
 * 
 * **Note:** This function may return incorrect values if the input vector length is near zero.
 * @returns Vector2
 */
  normalized(): Vector2;
/**
 * Returns a perpendicular vector rotated 90 degrees counter-clockwise compared to the original, with the same length.
 * @returns Vector2
 */
  orthogonal(): Vector2;
/**
 * Returns a vector composed of the `@GlobalScope.fposmod` of this vector's components and `mod`.
 * @param mod float
 * @returns Vector2
 */
  posmod(mod: float): Vector2;
/**
 * Returns a vector composed of the `@GlobalScope.fposmod` of this vector's components and `modv`'s components.
 * @param modv Vector2
 * @returns Vector2
 */
  posmodv(modv: Vector2): Vector2;
/**
 * Returns a new vector resulting from projecting this vector onto the given vector `b`. The resulting new vector is parallel to `b`. See also `slide`.
 * 
 * **Note:** If the vector `b` is a zero vector, the components of the resulting new vector will be `@GDScript.NAN`.
 * @param b Vector2
 * @returns Vector2
 */
  project(b: Vector2): Vector2;
/**
 * Returns the result of reflecting the vector from a line defined by the given direction vector `line`.
 * 
 * **Note:** `reflect` differs from what other engines and frameworks call [code skip-lint]reflect()[/code]. In other engines, [code skip-lint]reflect()[/code] takes a normal direction which is a direction perpendicular to the line. In Godot, you specify the direction of the line directly. See also `bounce` which does what most engines call [code skip-lint]reflect()[/code].
 * @param line Vector2
 * @returns Vector2
 */
  reflect(line: Vector2): Vector2;
/**
 * Returns the result of rotating this vector by `angle` (in radians). See also `@GlobalScope.deg_to_rad`.
 * @param angle float
 * @returns Vector2
 */
  rotated(angle: float): Vector2;
/**
 * Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero.
 * @returns Vector2
 */
  round(): Vector2;
/**
 * Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling `@GlobalScope.sign` on each component.
 * @returns Vector2
 */
  sign(): Vector2;
/**
 * Returns the result of spherical linear interpolation between this vector and `to`, by amount `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.
 * This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like `lerp`.
 * @param to Vector2
 * @param weight float
 * @returns Vector2
 */
  slerp(to: Vector2, weight: float): Vector2;
/**
 * Returns a new vector resulting from sliding this vector along a line with normal `n`. The resulting new vector is perpendicular to `n`, and is equivalent to this vector minus its projection on `n`. See also `project`.
 * 
 * **Note:** The vector `n` must be normalized. See also `normalized`.
 * @param n Vector2
 * @returns Vector2
 */
  slide(n: Vector2): Vector2;
/**
 * Returns a new vector with each component snapped to the nearest multiple of the corresponding component in `step`. This can also be used to round the components to an arbitrary number of decimals.
 * @param step Vector2
 * @returns Vector2
 */
  snapped(step: Vector2): Vector2;
/**
 * Returns a new vector with each component snapped to the nearest multiple of `step`. This can also be used to round the components to an arbitrary number of decimals.
 * @param step float
 * @returns Vector2
 */
  snappedf(step: float): Vector2;
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
 * Infinity vector, a vector with all components set to `@GDScript.INF`.
 */
  static readonly INF: int;
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
