import type { Basis, GodotArray, GodotDictionary, Vector3, float, int } from "../index.d.ts";
/**
 * A 3×4 matrix representing a 3D transformation.
 * 
 * The `Transform3D` built-in `Variant` type is a 3×4 matrix representing a transformation in 3D space. It contains a `Basis`, which on its own can represent rotation, scale, and shear. Additionally, combined with its own `origin`, the transform can also represent a translation.
 * For a general introduction, see the Matrices and transforms (https://docs.godotengine.org/en/stable/tutorials/math/matrices_and_transforms.html) tutorial.
 * 
 * **Note:** Godot uses a right-handed coordinate system (https://en.wikipedia.org/wiki/Right-hand_rule), which is a common standard. For directions, the convention for built-in types like `Camera3D` is for -Z to point forward (+X is right, +Y is up, and +Z is back). Other objects may use different direction conventions. For more information, see the 3D asset direction conventions (https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/model_export_considerations.html#d-asset-direction-conventions) tutorial.
 */
export class Transform3D {
/**
 * The `Basis` of this transform. It is composed by 3 axes (`Basis.x`, `Basis.y`, and `Basis.z`). Together, these represent the transform's rotation, scale, and shear.
 */
  basis: Basis;
/**
 * The translation offset of this transform. In 3D space, this can be seen as the position.
 */
  origin: Vector3;
/**
 * Returns the inverted version of this transform. Unlike `inverse`, this method works with almost any `basis`, including non-uniform ones, but is slower. See also `Basis.inverse`.
 * 
 * **Note:** For this method to return correctly, the transform's `basis` needs to have a determinant that is not exactly `0.0` (see `Basis.determinant`).
 * @returns Transform3D
 */
  affineInverse(): Transform3D;
/**
 * Returns the result of the linear interpolation between this transform and `xform` by the given `weight`.
 * The `weight` should be between `0.0` and `1.0` (inclusive). Values outside this range are allowed and can be used to perform *extrapolation* instead.
 * @param xform Transform3D
 * @param weight float
 * @returns Transform3D
 */
  interpolateWith(xform: Transform3D, weight: float): Transform3D;
/**
 * Returns the inverted version of this transform (https://en.wikipedia.org/wiki/Invertible_matrix). See also `Basis.inverse`.
 * 
 * **Note:** For this method to return correctly, the transform's `basis` needs to be *orthonormal* (see `orthonormalized`). That means the basis should only represent a rotation. If it does not, use `affine_inverse` instead.
 * @returns Transform3D
 */
  inverse(): Transform3D;
/**
 * Returns `true` if this transform and `xform` are approximately equal, by running `@GlobalScope.is_equal_approx` on each component.
 * @param xform Transform3D
 * @returns boolean
 */
  isEqualApprox(xform: Transform3D): boolean;
/**
 * Returns `true` if this transform is finite, by calling `@GlobalScope.is_finite` on each component.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Returns a copy of this transform rotated so that the forward axis (-Z) points towards the `target` position.
 * The up axis (+Y) points as close to the `up` vector as possible while staying perpendicular to the forward axis. The resulting transform is orthonormalized. The existing rotation, scale, and skew information from the original transform is discarded. The `target` and `up` vectors cannot be zero, cannot be parallel to each other, and are defined in global/parent space.
 * If `use_model_front` is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the `target` position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).
 * @param target Vector3
 * @param up Vector3 (optional, default: Vector3(0, 1, 0))
 * @param useModelFront boolean (optional, default: false)
 * @returns Transform3D
 */
  lookingAt(target: Vector3, up?: Vector3, useModelFront?: boolean): Transform3D;
/**
 * Returns a copy of this transform with its `basis` orthonormalized. An orthonormal basis is both *orthogonal* (the axes are perpendicular to each other) and *normalized* (the axes have a length of `1.0`), which also means it can only represent a rotation. See also `Basis.orthonormalized`.
 * @returns Transform3D
 */
  orthonormalized(): Transform3D;
/**
 * Returns a copy of this transform rotated around the given `axis` by the given `angle` (in radians).
 * The `axis` must be a normalized vector (see `Vector3.normalized`). If `angle` is positive, the basis is rotated counter-clockwise around the axis.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.
 * This can be seen as transforming with respect to the global/parent frame.
 * @param axis Vector3
 * @param angle float
 * @returns Transform3D
 */
  rotated(axis: Vector3, angle: float): Transform3D;
/**
 * Returns a copy of this transform rotated around the given `axis` by the given `angle` (in radians).
 * The `axis` must be a normalized vector in the transform's local coordinate system. For example, to rotate around the local X-axis, use `Vector3.RIGHT`.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.
 * This can be seen as transforming with respect to the local frame.
 * @param axis Vector3
 * @param angle float
 * @returns Transform3D
 */
  rotatedLocal(axis: Vector3, angle: float): Transform3D;
/**
 * Returns a copy of this transform scaled by the given `scale` factor.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.
 * This can be seen as transforming with respect to the global/parent frame.
 * @param scale Vector3
 * @returns Transform3D
 */
  scaled(scale: Vector3): Transform3D;
/**
 * Returns a copy of this transform scaled by the given `scale` factor.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.
 * This can be seen as transforming with respect to the local frame.
 * @param scale Vector3
 * @returns Transform3D
 */
  scaledLocal(scale: Vector3): Transform3D;
/**
 * Returns a copy of this transform translated by the given `offset`.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.
 * This can be seen as transforming with respect to the global/parent frame.
 * @param offset Vector3
 * @returns Transform3D
 */
  translated(offset: Vector3): Transform3D;
/**
 * Returns a copy of this transform translated by the given `offset`.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.
 * This can be seen as transforming with respect to the local frame.
 * @param offset Vector3
 * @returns Transform3D
 */
  translatedLocal(offset: Vector3): Transform3D;
/**
 * The identity `Transform3D`. This is a transform with no translation, no rotation, and a scale of `Vector3.ONE`. Its `basis` is equal to `Basis.IDENTITY`. This also means that:
 * - Its `Basis.x` points right (`Vector3.RIGHT`);
 * - Its `Basis.y` points up (`Vector3.UP`);
 * - Its `Basis.z` points back (`Vector3.BACK`).
 * 
 * 			```gdscript
 * 
 * 			var transform = Transform3D.IDENTITY
 * 			var basis = transform.basis
 * 			print("| X | Y | Z | Origin")
 * 			print("| %.f | %.f | %.f | %.f" % [basis.x.x, basis.y.x, basis.z.x, transform.origin.x])
 * 			print("| %.f | %.f | %.f | %.f" % [basis.x.y, basis.y.y, basis.z.y, transform.origin.y])
 * 			print("| %.f | %.f | %.f | %.f" % [basis.x.z, basis.y.z, basis.z.z, transform.origin.z])
 * 			# Prints:
 * 			# | X | Y | Z | Origin
 * 			# | 1 | 0 | 0 | 0
 * 			# | 0 | 1 | 0 | 0
 * 			# | 0 | 0 | 1 | 0
 * 			
 * 
 * ```
 * If a `Vector3`, an `AABB`, a `Plane`, a `PackedVector3Array`, or another `Transform3D` is transformed (multiplied) by this constant, no transformation occurs.
 * 
 * **Note:** In GDScript, this constant is equivalent to creating a [constructor Transform3D] without any arguments. It can be used to make your code clearer, and for consistency with C#.
 */
  static readonly IDENTITY: int;
/**
 * `Transform3D` with mirroring applied perpendicular to the YZ plane. Its `basis` is equal to `Basis.FLIP_X`.
 */
  static readonly FLIP_X: int;
/**
 * `Transform3D` with mirroring applied perpendicular to the XZ plane. Its `basis` is equal to `Basis.FLIP_Y`.
 */
  static readonly FLIP_Y: int;
/**
 * `Transform3D` with mirroring applied perpendicular to the XY plane. Its `basis` is equal to `Basis.FLIP_Z`.
 */
  static readonly FLIP_Z: int;
}
