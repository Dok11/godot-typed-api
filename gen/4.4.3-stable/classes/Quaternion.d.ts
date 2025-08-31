import type { GodotArray, GodotDictionary, Vector3, float, int } from "../index.d.ts";
/**
 * A unit quaternion used for representing 3D rotations.
 * 
 * The `Quaternion` built-in `Variant` type is a 4D data structure that represents rotation in the form of a Hamilton convention quaternion (https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). Compared to the `Basis` type which can store both rotation and scale, quaternions can *only* store rotation.
 * A `Quaternion` is composed by 4 floating-point components: `w`, `x`, `y`, and `z`. These components are very compact in memory, and because of this some operations are more efficient and less likely to cause floating-point errors. Methods such as `get_angle`, `get_axis`, and `slerp` are faster than their `Basis` counterparts.
 * For a great introduction to quaternions, see this video by 3Blue1Brown (https://www.youtube.com/watch?v=d4EgbgTm0Bg). You do not need to know the math behind quaternions, as Godot provides several helper methods that handle it for you. These include `slerp` and `spherical_cubic_interpolate`, as well as the `*` operator.
 * 
 * **Note:** Quaternions must be normalized before being used for rotation (see `normalized`).
 * 
 * **Note:** Similarly to `Vector2` and `Vector3`, the components of a quaternion use 32-bit precision by default, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 */
export class Quaternion {
/**
 * W component of the quaternion. This is the "real" part.
 * 
 * **Note:** Quaternion components should usually not be manipulated directly.
 */
  w: float;
/**
 * X component of the quaternion. This is the value along the "imaginary" `i` axis.
 * 
 * **Note:** Quaternion components should usually not be manipulated directly.
 */
  x: float;
/**
 * Y component of the quaternion. This is the value along the "imaginary" `j` axis.
 * 
 * **Note:** Quaternion components should usually not be manipulated directly.
 */
  y: float;
/**
 * Z component of the quaternion. This is the value along the "imaginary" `k` axis.
 * 
 * **Note:** Quaternion components should usually not be manipulated directly.
 */
  z: float;
/**
 * Returns the angle between this quaternion and `to`. This is the magnitude of the angle you would need to rotate by to get from one to the other.
 * 
 * **Note:** The magnitude of the floating-point error for this method is abnormally high, so methods such as `is_zero_approx` will not work reliably.
 * @param to Quaternion
 * @returns float
 */
  angleTo(to: Quaternion): float;
/**
 * Returns the dot product between this quaternion and `with`.
 * This is equivalent to `(quat.x * with.x) + (quat.y * with.y) + (quat.z * with.z) + (quat.w * with.w)`.
 * @param with_ Quaternion
 * @returns float
 */
  dot(with_: Quaternion): float;
/**
 * Returns the exponential of this quaternion. The rotation axis of the result is the normalized rotation axis of this quaternion, the angle of the result is the length of the vector part of this quaternion.
 * @returns Quaternion
 */
  exp(): Quaternion;
/**
 * Constructs a new `Quaternion` from the given `Vector3` of Euler angles (https://en.wikipedia.org/wiki/Euler_angles), in radians. This method always uses the YXZ convention (`EULER_ORDER_YXZ`).
 * @param euler Vector3
 * @returns Quaternion
 */
  fromEuler(euler: Vector3): Quaternion;
/**
 * Returns the angle of the rotation represented by this quaternion.
 * 
 * **Note:** The quaternion must be normalized.
 * @returns float
 */
  getAngle(): float;
/**
 * Returns the rotation axis of the rotation represented by this quaternion.
 * @returns Vector3
 */
  getAxis(): Vector3;
/**
 * Returns this quaternion's rotation as a `Vector3` of Euler angles (https://en.wikipedia.org/wiki/Euler_angles), in radians.
 * The order of each consecutive rotation can be changed with `order` (see `EulerOrder` constants). By default, the YXZ convention is used (`EULER_ORDER_YXZ`): Z (roll) is calculated first, then X (pitch), and lastly Y (yaw). When using the opposite method `from_euler`, this order is reversed.
 * @param order int (optional, default: 2)
 * @returns Vector3
 */
  getEuler(order?: int): Vector3;
/**
 * Returns the inverse version of this quaternion, inverting the sign of every component except `w`.
 * @returns Quaternion
 */
  inverse(): Quaternion;
/**
 * Returns `true` if this quaternion and `to` are approximately equal, by calling `@GlobalScope.is_equal_approx` on each component.
 * @param to Quaternion
 * @returns boolean
 */
  isEqualApprox(to: Quaternion): boolean;
/**
 * Returns `true` if this quaternion is finite, by calling `@GlobalScope.is_finite` on each component.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Returns `true` if this quaternion is normalized. See also `normalized`.
 * @returns boolean
 */
  isNormalized(): boolean;
/**
 * Returns this quaternion's length, also called magnitude.
 * @returns float
 */
  length(): float;
/**
 * Returns this quaternion's length, squared.
 * 
 * **Note:** This method is faster than `length`, so prefer it if you only need to compare quaternion lengths.
 * @returns float
 */
  lengthSquared(): float;
/**
 * Returns the logarithm of this quaternion. Multiplies this quaternion's rotation axis by its rotation angle, and stores the result in the returned quaternion's vector part (`x`, `y`, and `z`). The returned quaternion's real part (`w`) is always `0.0`.
 * @returns Quaternion
 */
  log(): Quaternion;
/**
 * Returns a copy of this quaternion, normalized so that its length is `1.0`. See also `is_normalized`.
 * @returns Quaternion
 */
  normalized(): Quaternion;
/**
 * Performs a spherical-linear interpolation with the `to` quaternion, given a `weight` and returns the result. Both this quaternion and `to` must be normalized.
 * @param to Quaternion
 * @param weight float
 * @returns Quaternion
 */
  slerp(to: Quaternion, weight: float): Quaternion;
/**
 * Performs a spherical-linear interpolation with the `to` quaternion, given a `weight` and returns the result. Unlike `slerp`, this method does not check if the rotation path is smaller than 90 degrees. Both this quaternion and `to` must be normalized.
 * @param to Quaternion
 * @param weight float
 * @returns Quaternion
 */
  slerpni(to: Quaternion, weight: float): Quaternion;
/**
 * Performs a spherical cubic interpolation between quaternions `pre_a`, this vector, `b`, and `post_b`, by the given amount `weight`.
 * @param b Quaternion
 * @param preA Quaternion
 * @param postB Quaternion
 * @param weight float
 * @returns Quaternion
 */
  sphericalCubicInterpolate(b: Quaternion, preA: Quaternion, postB: Quaternion, weight: float): Quaternion;
/**
 * Performs a spherical cubic interpolation between quaternions `pre_a`, this vector, `b`, and `post_b`, by the given amount `weight`.
 * It can perform smoother interpolation than `spherical_cubic_interpolate` by the time values.
 * @param b Quaternion
 * @param preA Quaternion
 * @param postB Quaternion
 * @param weight float
 * @param bT float
 * @param preAT float
 * @param postBT float
 * @returns Quaternion
 */
  sphericalCubicInterpolateInTime(b: Quaternion, preA: Quaternion, postB: Quaternion, weight: float, bT: float, preAT: float, postBT: float): Quaternion;
/**
 * The identity quaternion, representing no rotation. This has the same rotation as `Basis.IDENTITY`.
 * If a `Vector3` is rotated (multiplied) by this quaternion, it does not change.
 * 
 * **Note:** In GDScript, this constant is equivalent to creating a [constructor Quaternion] without any arguments. It can be used to make your code clearer, and for consistency with C#.
 */
  static readonly IDENTITY: int;
}
