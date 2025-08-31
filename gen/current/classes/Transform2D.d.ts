import type { GodotArray, GodotDictionary, Vector2, float, int } from "../index.d.ts";
/**
 * A 2×3 matrix representing a 2D transformation.
 * 
 * The `Transform2D` built-in `Variant` type is a 2×3 matrix (https://en.wikipedia.org/wiki/Matrix_(mathematics)) representing a transformation in 2D space. It contains three `Vector2` values: `x`, `y`, and `origin`. Together, they can represent translation, rotation, scale, and skew.
 * The `x` and `y` axes form a 2×2 matrix, known as the transform's **basis**. The length of each axis (`Vector2.length`) influences the transform's scale, while the direction of all axes influence the rotation. Usually, both axes are perpendicular to one another. However, when you rotate one axis individually, the transform becomes skewed. Applying a skewed transform to a 2D sprite will make the sprite appear distorted.
 * For a general introduction, see the Matrices and transforms (https://docs.godotengine.org/en/stable/tutorials/math/matrices_and_transforms.html) tutorial.
 * 
 * **Note:** Unlike `Transform3D`, there is no 2D equivalent to the `Basis` type. All mentions of "basis" refer to the `x` and `y` components of `Transform2D`.
 */
export class Transform2D {
/**
 * The translation offset of this transform, and the column `2` of the matrix. In 2D space, this can be seen as the position.
 */
  origin: Vector2;
/**
 * The transform basis's X axis, and the column `0` of the matrix. Combined with `y`, this represents the transform's rotation, scale, and skew.
 * On the identity transform, this vector points right (`Vector2.RIGHT`).
 */
  x: Vector2;
/**
 * The transform basis's Y axis, and the column `1` of the matrix. Combined with `x`, this represents the transform's rotation, scale, and skew.
 * On the identity transform, this vector points down (`Vector2.DOWN`).
 */
  y: Vector2;
/**
 * Returns the inverted version of this transform. Unlike `inverse`, this method works with almost any basis, including non-uniform ones, but is slower.
 * 
 * **Note:** For this method to return correctly, the transform's basis needs to have a determinant that is not exactly `0.0` (see `determinant`).
 * @returns Transform2D
 */
  affineInverse(): Transform2D;
/**
 * Returns a copy of the `v` vector, transformed (multiplied) by the transform basis's matrix. Unlike the multiplication operator (`*`), this method ignores the `origin`.
 * @param v Vector2
 * @returns Vector2
 */
  basisXform(v: Vector2): Vector2;
/**
 * Returns a copy of the `v` vector, transformed (multiplied) by the inverse transform basis's matrix (see `inverse`). This method ignores the `origin`.
 * 
 * **Note:** This method assumes that this transform's basis is *orthonormal* (see `orthonormalized`). If the basis is not orthonormal, `transform.affine_inverse().basis_xform(vector)` should be used instead (see `affine_inverse`).
 * @param v Vector2
 * @returns Vector2
 */
  basisXformInv(v: Vector2): Vector2;
/**
 * Returns the determinant (https://en.wikipedia.org/wiki/Determinant) of this transform basis's matrix. For advanced math, this number can be used to determine a few attributes:
 * - If the determinant is exactly `0.0`, the basis is not invertible (see `inverse`).
 * - If the determinant is a negative number, the basis represents a negative scale.
 * 
 * **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.
 * @returns float
 */
  determinant(): float;
/**
 * Returns this transform's translation. Equivalent to `origin`.
 * @returns Vector2
 */
  getOrigin(): Vector2;
/**
 * Returns this transform's rotation (in radians). This is equivalent to `x`'s angle (see `Vector2.angle`).
 * @returns float
 */
  getRotation(): float;
/**
 * Returns the length of both `x` and `y`, as a `Vector2`. If this transform's basis is not skewed, this value is the scaling factor. It is not affected by rotation.
 * 
 * 				```gdscript
 * 
 * 				var my_transform = Transform2D(
 * 				    Vector2(2, 0),
 * 				    Vector2(0, 4),
 * 				    Vector2(0, 0)
 * 				)
 * 				# Rotating the Transform2D in any way preserves its scale.
 * 				my_transform = my_transform.rotated(TAU / 2)
 * 
 * 				print(my_transform.get_scale()) # Prints (2.0, 4.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var myTransform = new Transform2D(
 * 				    Vector3(2.0f, 0.0f),
 * 				    Vector3(0.0f, 4.0f),
 * 				    Vector3(0.0f, 0.0f)
 * 				);
 * 				// Rotating the Transform2D in any way preserves its scale.
 * 				myTransform = myTransform.Rotated(Mathf.Tau / 2.0f);
 * 
 * 				GD.Print(myTransform.GetScale()); // Prints (2, 4)
 * 				
 * 
 * ```
 * 
 * **Note:** If the value returned by `determinant` is negative, the scale is also negative.
 * @returns Vector2
 */
  getScale(): Vector2;
/**
 * Returns this transform's skew (in radians).
 * @returns float
 */
  getSkew(): float;
/**
 * Returns the result of the linear interpolation between this transform and `xform` by the given `weight`.
 * The `weight` should be between `0.0` and `1.0` (inclusive). Values outside this range are allowed and can be used to perform *extrapolation* instead.
 * @param xform Transform2D
 * @param weight float
 * @returns Transform2D
 */
  interpolateWith(xform: Transform2D, weight: float): Transform2D;
/**
 * Returns the inverted version of this transform (https://en.wikipedia.org/wiki/Invertible_matrix).
 * 
 * **Note:** For this method to return correctly, the transform's basis needs to be *orthonormal* (see `orthonormalized`). That means the basis should only represent a rotation. If it does not, use `affine_inverse` instead.
 * @returns Transform2D
 */
  inverse(): Transform2D;
/**
 * Returns `true` if this transform's basis is conformal. A conformal basis is both *orthogonal* (the axes are perpendicular to each other) and *uniform* (the axes share the same length). This method can be especially useful during physics calculations.
 * @returns boolean
 */
  isConformal(): boolean;
/**
 * Returns `true` if this transform and `xform` are approximately equal, by running `@GlobalScope.is_equal_approx` on each component.
 * @param xform Transform2D
 * @returns boolean
 */
  isEqualApprox(xform: Transform2D): boolean;
/**
 * Returns `true` if this transform is finite, by calling `@GlobalScope.is_finite` on each component.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Returns a copy of the transform rotated such that the rotated X-axis points towards the `target` position, in global space.
 * @param target Vector2 (optional, default: Vector2(0, 0))
 * @returns Transform2D
 */
  lookingAt(target?: Vector2): Transform2D;
/**
 * Returns a copy of this transform with its basis orthonormalized. An orthonormal basis is both *orthogonal* (the axes are perpendicular to each other) and *normalized* (the axes have a length of `1.0`), which also means it can only represent a rotation.
 * @returns Transform2D
 */
  orthonormalized(): Transform2D;
/**
 * Returns a copy of this transform rotated by the given `angle` (in radians).
 * If `angle` is positive, the transform is rotated clockwise.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.
 * This can be seen as transforming with respect to the global/parent frame.
 * @param angle float
 * @returns Transform2D
 */
  rotated(angle: float): Transform2D;
/**
 * Returns a copy of the transform rotated by the given `angle` (in radians).
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.
 * This can be seen as transforming with respect to the local frame.
 * @param angle float
 * @returns Transform2D
 */
  rotatedLocal(angle: float): Transform2D;
/**
 * Returns a copy of the transform scaled by the given `scale` factor.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.
 * This can be seen as transforming with respect to the global/parent frame.
 * @param scale Vector2
 * @returns Transform2D
 */
  scaled(scale: Vector2): Transform2D;
/**
 * Returns a copy of the transform scaled by the given `scale` factor.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.
 * This can be seen as transforming with respect to the local frame.
 * @param scale Vector2
 * @returns Transform2D
 */
  scaledLocal(scale: Vector2): Transform2D;
/**
 * Returns a copy of the transform translated by the given `offset`.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.
 * This can be seen as transforming with respect to the global/parent frame.
 * @param offset Vector2
 * @returns Transform2D
 */
  translated(offset: Vector2): Transform2D;
/**
 * Returns a copy of the transform translated by the given `offset`.
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.
 * This can be seen as transforming with respect to the local frame.
 * @param offset Vector2
 * @returns Transform2D
 */
  translatedLocal(offset: Vector2): Transform2D;
/**
 * The identity `Transform2D`. This is a transform with no translation, no rotation, and a scale of `Vector2.ONE`. This also means that:
 * - The `x` points right (`Vector2.RIGHT`);
 * - The `y` points down (`Vector2.DOWN`).
 * 
 * 			```gdscript
 * 
 * 			var transform = Transform2D.IDENTITY
 * 			print("| X | Y | Origin")
 * 			print("| %.f | %.f | %.f" % [transform.x.x, transform.y.x, transform.origin.x])
 * 			print("| %.f | %.f | %.f" % [transform.x.y, transform.y.y, transform.origin.y])
 * 			# Prints:
 * 			# | X | Y | Origin
 * 			# | 1 | 0 | 0
 * 			# | 0 | 1 | 0
 * 			
 * 
 * ```
 * If a `Vector2`, a `Rect2`, a `PackedVector2Array`, or another `Transform2D` is transformed (multiplied) by this constant, no transformation occurs.
 * 
 * **Note:** In GDScript, this constant is equivalent to creating a [constructor Transform2D] without any arguments. It can be used to make your code clearer, and for consistency with C#.
 */
  static readonly IDENTITY: int;
/**
 * When any transform is multiplied by `FLIP_X`, it negates all components of the `x` axis (the X column).
 * When `FLIP_X` is multiplied by any transform, it negates the `Vector2.x` component of all axes (the X row).
 */
  static readonly FLIP_X: int;
/**
 * When any transform is multiplied by `FLIP_Y`, it negates all components of the `y` axis (the Y column).
 * When `FLIP_Y` is multiplied by any transform, it negates the `Vector2.y` component of all axes (the Y row).
 */
  static readonly FLIP_Y: int;
}
