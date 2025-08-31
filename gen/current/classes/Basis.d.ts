import type { GodotArray, GodotDictionary, Quaternion, Vector3, float, int } from "../index.d.ts";
/**
 * A 3×3 matrix for representing 3D rotation and scale.
 * 
 * The `Basis` built-in `Variant` type is a 3×3 matrix (https://en.wikipedia.org/wiki/Matrix_(mathematics)) used to represent 3D rotation, scale, and shear. It is frequently used within a `Transform3D`.
 * A `Basis` is composed by 3 axis vectors, each representing a column of the matrix: `x`, `y`, and `z`. The length of each axis (`Vector3.length`) influences the basis's scale, while the direction of all axes influence the rotation. Usually, these axes are perpendicular to one another. However, when you rotate any axis individually, the basis becomes sheared. Applying a sheared basis to a 3D model will make the model appear distorted.
 * A `Basis` is:
 * - **Orthogonal** if its axes are perpendicular to each other.
 * - **Normalized** if the length of every axis is `1.0`.
 * - **Uniform** if all axes share the same length (see `get_scale`).
 * - **Orthonormal** if it is both orthogonal and normalized, which allows it to only represent rotations (see `orthonormalized`).
 * - **Conformal** if it is both orthogonal and uniform, which ensures it is not distorted.
 * For a general introduction, see the Matrices and transforms (https://docs.godotengine.org/en/stable/tutorials/math/matrices_and_transforms.html) tutorial.
 * 
 * **Note:** Godot uses a right-handed coordinate system (https://en.wikipedia.org/wiki/Right-hand_rule), which is a common standard. For directions, the convention for built-in types like `Camera3D` is for -Z to point forward (+X is right, +Y is up, and +Z is back). Other objects may use different direction conventions. For more information, see the 3D asset direction conventions (https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/model_export_considerations.html#d-asset-direction-conventions) tutorial.
 * 
 * **Note:** The basis matrices are exposed as column-major (https://www.mindcontrol.org/~hplus/graphics/matrix-layout.html) order, which is the same as OpenGL. However, they are stored internally in row-major order, which is the same as DirectX.
 */
export class Basis {
/**
 * The basis's X axis, and the column `0` of the matrix.
 * On the identity basis, this vector points right (`Vector3.RIGHT`).
 */
  x: Vector3;
/**
 * The basis's Y axis, and the column `1` of the matrix.
 * On the identity basis, this vector points up (`Vector3.UP`).
 */
  y: Vector3;
/**
 * The basis's Z axis, and the column `2` of the matrix.
 * On the identity basis, this vector points back (`Vector3.BACK`).
 */
  z: Vector3;
/**
 * Returns the determinant (https://en.wikipedia.org/wiki/Determinant) of this basis's matrix. For advanced math, this number can be used to determine a few attributes:
 * - If the determinant is exactly `0.0`, the basis is not invertible (see `inverse`).
 * - If the determinant is a negative number, the basis represents a negative scale.
 * 
 * **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.
 * @returns float
 */
  determinant(): float;
/**
 * Constructs a new `Basis` that only represents rotation from the given `Vector3` of Euler angles (https://en.wikipedia.org/wiki/Euler_angles), in radians.
 * - The `Vector3.x` should contain the angle around the `x` axis (pitch);
 * - The `Vector3.y` should contain the angle around the `y` axis (yaw);
 * - The `Vector3.z` should contain the angle around the `z` axis (roll).
 * 
 * 				```gdscript
 * 
 * 				# Creates a Basis whose z axis points down.
 * 				var my_basis = Basis.from_euler(Vector3(TAU / 4, 0, 0))
 * 
 * 				print(my_basis.z) # Prints (0.0, -1.0, 0.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				// Creates a Basis whose z axis points down.
 * 				var myBasis = Basis.FromEuler(new Vector3(Mathf.Tau / 4.0f, 0.0f, 0.0f));
 * 
 * 				GD.Print(myBasis.Z); // Prints (0, -1, 0)
 * 				
 * 
 * ```
 * 
 * The order of each consecutive rotation can be changed with `order` (see `EulerOrder` constants). By default, the YXZ convention is used (`EULER_ORDER_YXZ`): the basis rotates first around the Y axis (yaw), then X (pitch), and lastly Z (roll). When using the opposite method `get_euler`, this order is reversed.
 * @param euler Vector3
 * @param order int (optional, default: 2)
 * @returns Basis
 */
  fromEuler(euler: Vector3, order?: int): Basis;
/**
 * Constructs a new `Basis` that only represents scale, with no rotation or shear, from the given `scale` vector.
 * 
 * 				```gdscript
 * 
 * 				var my_basis = Basis.from_scale(Vector3(2, 4, 8))
 * 
 * 				print(my_basis.x) # Prints (2.0, 0.0, 0.0)
 * 				print(my_basis.y) # Prints (0.0, 4.0, 0.0)
 * 				print(my_basis.z) # Prints (0.0, 0.0, 8.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var myBasis = Basis.FromScale(new Vector3(2.0f, 4.0f, 8.0f));
 * 
 * 				GD.Print(myBasis.X); // Prints (2, 0, 0)
 * 				GD.Print(myBasis.Y); // Prints (0, 4, 0)
 * 				GD.Print(myBasis.Z); // Prints (0, 0, 8)
 * 				
 * 
 * ```
 * 
 * **Note:** In linear algebra, the matrix of this basis is also known as a diagonal matrix (https://en.wikipedia.org/wiki/Diagonal_matrix).
 * @param scale Vector3
 * @returns Basis
 */
  fromScale(scale: Vector3): Basis;
/**
 * Returns this basis's rotation as a `Vector3` of Euler angles (https://en.wikipedia.org/wiki/Euler_angles), in radians. For the returned value:
 * - The `Vector3.x` contains the angle around the `x` axis (pitch);
 * - The `Vector3.y` contains the angle around the `y` axis (yaw);
 * - The `Vector3.z` contains the angle around the `z` axis (roll).
 * The order of each consecutive rotation can be changed with `order` (see `EulerOrder` constants). By default, the YXZ convention is used (`EULER_ORDER_YXZ`): Z (roll) is calculated first, then X (pitch), and lastly Y (yaw). When using the opposite method `from_euler`, this order is reversed.
 * 
 * **Note:** For this method to return correctly, the basis needs to be *orthonormal* (see `orthonormalized`).
 * 
 * **Note:** Euler angles are much more intuitive but are not suitable for 3D math. Because of this, consider using the `get_rotation_quaternion` method instead, which returns a `Quaternion`.
 * 
 * **Note:** In the Inspector dock, a basis's rotation is often displayed in Euler angles (in degrees), as is the case with the `Node3D.rotation` property.
 * @param order int (optional, default: 2)
 * @returns Vector3
 */
  getEuler(order?: int): Vector3;
/**
 * Returns this basis's rotation as a `Quaternion`.
 * 
 * **Note:** Quaternions are much more suitable for 3D math but are less intuitive. For user interfaces, consider using the `get_euler` method, which returns Euler angles.
 * @returns Quaternion
 */
  getRotationQuaternion(): Quaternion;
/**
 * Returns the length of each axis of this basis, as a `Vector3`. If the basis is not sheared, this value is the scaling factor. It is not affected by rotation.
 * 
 * 				```gdscript
 * 
 * 				var my_basis = Basis(
 * 				    Vector3(2, 0, 0),
 * 				    Vector3(0, 4, 0),
 * 				    Vector3(0, 0, 8)
 * 				)
 * 				# Rotating the Basis in any way preserves its scale.
 * 				my_basis = my_basis.rotated(Vector3.UP, TAU / 2)
 * 				my_basis = my_basis.rotated(Vector3.RIGHT, TAU / 4)
 * 
 * 				print(my_basis.get_scale()) # Prints (2.0, 4.0, 8.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var myBasis = new Basis(
 * 				    Vector3(2.0f, 0.0f, 0.0f),
 * 				    Vector3(0.0f, 4.0f, 0.0f),
 * 				    Vector3(0.0f, 0.0f, 8.0f)
 * 				);
 * 				// Rotating the Basis in any way preserves its scale.
 * 				myBasis = myBasis.Rotated(Vector3.Up, Mathf.Tau / 2.0f);
 * 				myBasis = myBasis.Rotated(Vector3.Right, Mathf.Tau / 4.0f);
 * 
 * 				GD.Print(myBasis.Scale); // Prints (2, 4, 8)
 * 				
 * 
 * ```
 * 
 * **Note:** If the value returned by `determinant` is negative, the scale is also negative.
 * @returns Vector3
 */
  getScale(): Vector3;
/**
 * Returns the inverse of this basis's matrix (https://en.wikipedia.org/wiki/Invertible_matrix).
 * @returns Basis
 */
  inverse(): Basis;
/**
 * Returns `true` if this basis is conformal. A conformal basis is both *orthogonal* (the axes are perpendicular to each other) and *uniform* (the axes share the same length). This method can be especially useful during physics calculations.
 * @returns boolean
 */
  isConformal(): boolean;
/**
 * Returns `true` if this basis and `b` are approximately equal, by calling `@GlobalScope.is_equal_approx` on all vector components.
 * @param b Basis
 * @returns boolean
 */
  isEqualApprox(b: Basis): boolean;
/**
 * Returns `true` if this basis is finite, by calling `@GlobalScope.is_finite` on all vector components.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Creates a new `Basis` with a rotation such that the forward axis (-Z) points towards the `target` position.
 * By default, the -Z axis (camera forward) is treated as forward (implies +X is right). If `use_model_front` is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the `target` position.
 * The up axis (+Y) points as close to the `up` vector as possible while staying perpendicular to the forward axis. The returned basis is orthonormalized (see `orthonormalized`).
 * The `target` and the `up` cannot be `Vector3.ZERO`, and shouldn't be colinear to avoid unintended rotation around local Z axis.
 * @param target Vector3
 * @param up Vector3 (optional, default: Vector3(0, 1, 0))
 * @param useModelFront boolean (optional, default: false)
 * @returns Basis
 */
  lookingAt(target: Vector3, up?: Vector3, useModelFront?: boolean): Basis;
/**
 * Returns the orthonormalized version of this basis. An orthonormal basis is both *orthogonal* (the axes are perpendicular to each other) and *normalized* (the axes have a length of `1.0`), which also means it can only represent a rotation.
 * It is often useful to call this method to avoid rounding errors on a rotating basis:
 * 
 * 				```gdscript
 * 
 * 				# Rotate this Node3D every frame.
 * 				func _process(delta):
 * 				    basis = basis.rotated(Vector3.UP, TAU * delta)
 * 				    basis = basis.rotated(Vector3.RIGHT, TAU * delta)
 * 
 * 				    basis = basis.orthonormalized()
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				// Rotate this Node3D every frame.
 * 				public override void _Process(double delta)
 * 				{
 * 				    Basis = Basis.Rotated(Vector3.Up, Mathf.Tau * (float)delta)
 * 				                 .Rotated(Vector3.Right, Mathf.Tau * (float)delta)
 * 				                 .Orthonormalized();
 * 				}
 * 				
 * 
 * ```
 * 
 * @returns Basis
 */
  orthonormalized(): Basis;
/**
 * Returns a copy of this basis rotated around the given `axis` by the given `angle` (in radians).
 * The `axis` must be a normalized vector (see `Vector3.normalized`). If `angle` is positive, the basis is rotated counter-clockwise around the axis.
 * 
 * 				```gdscript
 * 
 * 				var my_basis = Basis.IDENTITY
 * 				var angle = TAU / 2
 * 
 * 				my_basis = my_basis.rotated(Vector3.UP, angle)    # Rotate around the up axis (yaw).
 * 				my_basis = my_basis.rotated(Vector3.RIGHT, angle) # Rotate around the right axis (pitch).
 * 				my_basis = my_basis.rotated(Vector3.BACK, angle)  # Rotate around the back axis (roll).
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var myBasis = Basis.Identity;
 * 				var angle = Mathf.Tau / 2.0f;
 * 
 * 				myBasis = myBasis.Rotated(Vector3.Up, angle);    // Rotate around the up axis (yaw).
 * 				myBasis = myBasis.Rotated(Vector3.Right, angle); // Rotate around the right axis (pitch).
 * 				myBasis = myBasis.Rotated(Vector3.Back, angle);  // Rotate around the back axis (roll).
 * 				
 * 
 * ```
 * 
 * @param axis Vector3
 * @param angle float
 * @returns Basis
 */
  rotated(axis: Vector3, angle: float): Basis;
/**
 * Returns this basis with each axis's components scaled by the given `scale`'s components.
 * The basis matrix's rows are multiplied by `scale`'s components. This operation is a global scale (relative to the parent).
 * 
 * 				```gdscript
 * 
 * 				var my_basis = Basis(
 * 				    Vector3(1, 1, 1),
 * 				    Vector3(2, 2, 2),
 * 				    Vector3(3, 3, 3)
 * 				)
 * 				my_basis = my_basis.scaled(Vector3(0, 2, -2))
 * 
 * 				print(my_basis.x) # Prints (0.0, 2.0, -2.0)
 * 				print(my_basis.y) # Prints (0.0, 4.0, -4.0)
 * 				print(my_basis.z) # Prints (0.0, 6.0, -6.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var myBasis = new Basis(
 * 				    new Vector3(1.0f, 1.0f, 1.0f),
 * 				    new Vector3(2.0f, 2.0f, 2.0f),
 * 				    new Vector3(3.0f, 3.0f, 3.0f)
 * 				);
 * 				myBasis = myBasis.Scaled(new Vector3(0.0f, 2.0f, -2.0f));
 * 
 * 				GD.Print(myBasis.X); // Prints (0, 2, -2)
 * 				GD.Print(myBasis.Y); // Prints (0, 4, -4)
 * 				GD.Print(myBasis.Z); // Prints (0, 6, -6)
 * 				
 * 
 * ```
 * 
 * @param scale Vector3
 * @returns Basis
 */
  scaled(scale: Vector3): Basis;
/**
 * Performs a spherical-linear interpolation with the `to` basis, given a `weight`. Both this basis and `to` should represent a rotation.
 * 
 * **Example:** Smoothly rotate a `Node3D` to the target basis over time, with a `Tween`:
 * 
 * 				```gdscript
 * 
 * 				var start_basis = Basis.IDENTITY
 * 				var target_basis = Basis.IDENTITY.rotated(Vector3.UP, TAU / 2)
 * 
 * 				func _ready():
 * 				    create_tween().tween_method(interpolate, 0.0, 1.0, 5.0).set_trans(Tween.TRANS_EXPO)
 * 
 * 				func interpolate(weight):
 * 				    basis = start_basis.slerp(target_basis, weight)
 * 				
 * 
 * ```
 * @param to Basis
 * @param weight float
 * @returns Basis
 */
  slerp(to: Basis, weight: float): Basis;
/**
 * Returns the transposed dot product between `with` and the `x` axis (see `transposed`).
 * This is equivalent to `basis.x.dot(vector)`.
 * @param with_ Vector3
 * @returns float
 */
  tdotx(with_: Vector3): float;
/**
 * Returns the transposed dot product between `with` and the `y` axis (see `transposed`).
 * This is equivalent to `basis.y.dot(vector)`.
 * @param with_ Vector3
 * @returns float
 */
  tdoty(with_: Vector3): float;
/**
 * Returns the transposed dot product between `with` and the `z` axis (see `transposed`).
 * This is equivalent to `basis.z.dot(vector)`.
 * @param with_ Vector3
 * @returns float
 */
  tdotz(with_: Vector3): float;
/**
 * Returns the transposed version of this basis. This turns the basis matrix's columns into rows, and its rows into columns.
 * 
 * 				```gdscript
 * 
 * 				var my_basis = Basis(
 * 				    Vector3(1, 2, 3),
 * 				    Vector3(4, 5, 6),
 * 				    Vector3(7, 8, 9)
 * 				)
 * 				my_basis = my_basis.transposed()
 * 
 * 				print(my_basis.x) # Prints (1.0, 4.0, 7.0)
 * 				print(my_basis.y) # Prints (2.0, 5.0, 8.0)
 * 				print(my_basis.z) # Prints (3.0, 6.0, 9.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var myBasis = new Basis(
 * 				    new Vector3(1.0f, 2.0f, 3.0f),
 * 				    new Vector3(4.0f, 5.0f, 6.0f),
 * 				    new Vector3(7.0f, 8.0f, 9.0f)
 * 				);
 * 				myBasis = myBasis.Transposed();
 * 
 * 				GD.Print(myBasis.X); // Prints (1, 4, 7)
 * 				GD.Print(myBasis.Y); // Prints (2, 5, 8)
 * 				GD.Print(myBasis.Z); // Prints (3, 6, 9)
 * 				
 * 
 * ```
 * 
 * @returns Basis
 */
  transposed(): Basis;
/**
 * The identity `Basis`. This is an orthonormal basis with no rotation, no shear, and a scale of `Vector3.ONE`. This also means that:
 * - The `x` points right (`Vector3.RIGHT`);
 * - The `y` points up (`Vector3.UP`);
 * - The `z` points back (`Vector3.BACK`).
 * 
 * 			```gdscript
 * 
 * 			var basis = Basis.IDENTITY
 * 			print("| X | Y | Z")
 * 			print("| %.f | %.f | %.f" % [basis.x.x, basis.y.x, basis.z.x])
 * 			print("| %.f | %.f | %.f" % [basis.x.y, basis.y.y, basis.z.y])
 * 			print("| %.f | %.f | %.f" % [basis.x.z, basis.y.z, basis.z.z])
 * 			# Prints:
 * 			# | X | Y | Z
 * 			# | 1 | 0 | 0
 * 			# | 0 | 1 | 0
 * 			# | 0 | 0 | 1
 * 			
 * 
 * ```
 * If a `Vector3` or another `Basis` is transformed (multiplied) by this constant, no transformation occurs.
 * 
 * **Note:** In GDScript, this constant is equivalent to creating a [constructor Basis] without any arguments. It can be used to make your code clearer, and for consistency with C#.
 */
  static readonly IDENTITY: int;
/**
 * When any basis is multiplied by `FLIP_X`, it negates all components of the `x` axis (the X column).
 * When `FLIP_X` is multiplied by any basis, it negates the `Vector3.x` component of all axes (the X row).
 */
  static readonly FLIP_X: int;
/**
 * When any basis is multiplied by `FLIP_Y`, it negates all components of the `y` axis (the Y column).
 * When `FLIP_Y` is multiplied by any basis, it negates the `Vector3.y` component of all axes (the Y row).
 */
  static readonly FLIP_Y: int;
/**
 * When any basis is multiplied by `FLIP_Z`, it negates all components of the `z` axis (the Z column).
 * When `FLIP_Z` is multiplied by any basis, it negates the `Vector3.z` component of all axes (the Z row).
 */
  static readonly FLIP_Z: int;
}
