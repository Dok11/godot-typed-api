import type { AABB, GodotArray, GodotDictionary, Plane, Rect2, Vector2, Vector4, float, int } from "../index.d.ts";
/**
 * A 4×4 matrix for 3D projective transformations.
 * 
 * A 4×4 matrix used for 3D projective transformations. It can represent transformations such as translation, rotation, scaling, shearing, and perspective division. It consists of four `Vector4` columns.
 * For purely linear transformations (translation, rotation, and scale), it is recommended to use `Transform3D`, as it is more performant and requires less memory.
 * Used internally as `Camera3D`'s projection matrix.
 */
export class Projection {
/**
 * The projection matrix's W vector (column 3). Equivalent to array index `3`.
 */
  w: Vector4;
/**
 * The projection matrix's X vector (column 0). Equivalent to array index `0`.
 */
  x: Vector4;
/**
 * The projection matrix's Y vector (column 1). Equivalent to array index `1`.
 */
  y: Vector4;
/**
 * The projection matrix's Z vector (column 2). Equivalent to array index `2`.
 */
  z: Vector4;
/**
 * Creates a new `Projection` that projects positions from a depth range of `-1` to `1` to one that ranges from `0` to `1`, and flips the projected positions vertically, according to `flip_y`.
 * @param flipY boolean
 * @returns Projection
 */
  createDepthCorrection(flipY: boolean): Projection;
/**
 * Creates a new `Projection` that scales a given projection to fit around a given `AABB` in projection space.
 * @param aabb AABB
 * @returns Projection
 */
  createFitAabb(aabb: AABB): Projection;
/**
 * Creates a new `Projection` for projecting positions onto a head-mounted display with the given X:Y aspect ratio, distance between eyes, display width, distance to lens, oversampling factor, and depth clipping planes.
 * `eye` creates the projection for the left eye when set to 1, or the right eye when set to 2.
 * @param eye int
 * @param aspect float
 * @param intraocularDist float
 * @param displayWidth float
 * @param displayToLens float
 * @param oversample float
 * @param zNear float
 * @param zFar float
 * @returns Projection
 */
  createForHmd(eye: int, aspect: float, intraocularDist: float, displayWidth: float, displayToLens: float, oversample: float, zNear: float, zFar: float): Projection;
/**
 * Creates a new `Projection` that projects positions in a frustum with the given clipping planes.
 * @param left float
 * @param right float
 * @param bottom float
 * @param top float
 * @param zNear float
 * @param zFar float
 * @returns Projection
 */
  createFrustum(left: float, right: float, bottom: float, top: float, zNear: float, zFar: float): Projection;
/**
 * Creates a new `Projection` that projects positions in a frustum with the given size, X:Y aspect ratio, offset, and clipping planes.
 * `flip_fov` determines whether the projection's field of view is flipped over its diagonal.
 * @param size float
 * @param aspect float
 * @param offset Vector2
 * @param zNear float
 * @param zFar float
 * @param flipFov boolean (optional, default: false)
 * @returns Projection
 */
  createFrustumAspect(size: float, aspect: float, offset: Vector2, zNear: float, zFar: float, flipFov?: boolean): Projection;
/**
 * Creates a new `Projection` that projects positions into the given `Rect2`.
 * @param rect Rect2
 * @returns Projection
 */
  createLightAtlasRect(rect: Rect2): Projection;
/**
 * Creates a new `Projection` that projects positions using an orthogonal projection with the given clipping planes.
 * @param left float
 * @param right float
 * @param bottom float
 * @param top float
 * @param zNear float
 * @param zFar float
 * @returns Projection
 */
  createOrthogonal(left: float, right: float, bottom: float, top: float, zNear: float, zFar: float): Projection;
/**
 * Creates a new `Projection` that projects positions using an orthogonal projection with the given size, X:Y aspect ratio, and clipping planes.
 * `flip_fov` determines whether the projection's field of view is flipped over its diagonal.
 * @param size float
 * @param aspect float
 * @param zNear float
 * @param zFar float
 * @param flipFov boolean (optional, default: false)
 * @returns Projection
 */
  createOrthogonalAspect(size: float, aspect: float, zNear: float, zFar: float, flipFov?: boolean): Projection;
/**
 * Creates a new `Projection` that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping planes.
 * `flip_fov` determines whether the projection's field of view is flipped over its diagonal.
 * @param fovy float
 * @param aspect float
 * @param zNear float
 * @param zFar float
 * @param flipFov boolean (optional, default: false)
 * @returns Projection
 */
  createPerspective(fovy: float, aspect: float, zNear: float, zFar: float, flipFov?: boolean): Projection;
/**
 * Creates a new `Projection` that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping distances. The projection is adjusted for a head-mounted display with the given distance between eyes and distance to a point that can be focused on.
 * `eye` creates the projection for the left eye when set to 1, or the right eye when set to 2.
 * `flip_fov` determines whether the projection's field of view is flipped over its diagonal.
 * @param fovy float
 * @param aspect float
 * @param zNear float
 * @param zFar float
 * @param flipFov boolean
 * @param eye int
 * @param intraocularDist float
 * @param convergenceDist float
 * @returns Projection
 */
  createPerspectiveHmd(fovy: float, aspect: float, zNear: float, zFar: float, flipFov: boolean, eye: int, intraocularDist: float, convergenceDist: float): Projection;
/**
 * Returns a scalar value that is the signed factor by which areas are scaled by this matrix. If the sign is negative, the matrix flips the orientation of the area.
 * The determinant can be used to calculate the invertibility of a matrix or solve linear systems of equations involving the matrix, among other applications.
 * @returns float
 */
  determinant(): float;
/**
 * Returns a copy of this `Projection` with the signs of the values of the Y column flipped.
 * @returns Projection
 */
  flippedY(): Projection;
/**
 * Returns the X:Y aspect ratio of this `Projection`'s viewport.
 * @returns float
 */
  getAspect(): float;
/**
 * Returns the dimensions of the far clipping plane of the projection, divided by two.
 * @returns Vector2
 */
  getFarPlaneHalfExtents(): Vector2;
/**
 * Returns the horizontal field of view of the projection (in degrees).
 * @returns float
 */
  getFov(): float;
/**
 * Returns the vertical field of view of the projection (in degrees) associated with the given horizontal field of view (in degrees) and aspect ratio.
 * 
 * **Note:** Unlike most methods of `Projection`, `aspect` is expected to be 1 divided by the X:Y aspect ratio.
 * @param fovx float
 * @param aspect float
 * @returns float
 */
  getFovy(fovx: float, aspect: float): float;
/**
 * Returns the factor by which the visible level of detail is scaled by this `Projection`.
 * @returns float
 */
  getLodMultiplier(): float;
/**
 * Returns the number of pixels with the given pixel width displayed per meter, after this `Projection` is applied.
 * @param forPixelWidth int
 * @returns int
 */
  getPixelsPerMeter(forPixelWidth: int): int;
/**
 * Returns the clipping plane of this `Projection` whose index is given by `plane`.
 * `plane` should be equal to one of `PLANE_NEAR`, `PLANE_FAR`, `PLANE_LEFT`, `PLANE_TOP`, `PLANE_RIGHT`, or `PLANE_BOTTOM`.
 * @param plane int
 * @returns Plane
 */
  getProjectionPlane(plane: int): Plane;
/**
 * Returns the dimensions of the viewport plane that this `Projection` projects positions onto, divided by two.
 * @returns Vector2
 */
  getViewportHalfExtents(): Vector2;
/**
 * Returns the distance for this `Projection` beyond which positions are clipped.
 * @returns float
 */
  getZFar(): float;
/**
 * Returns the distance for this `Projection` before which positions are clipped.
 * @returns float
 */
  getZNear(): float;
/**
 * Returns a `Projection` that performs the inverse of this `Projection`'s projective transformation.
 * @returns Projection
 */
  inverse(): Projection;
/**
 * Returns `true` if this `Projection` performs an orthogonal projection.
 * @returns boolean
 */
  isOrthogonal(): boolean;
/**
 * Returns a `Projection` with the X and Y values from the given `Vector2` added to the first and second values of the final column respectively.
 * @param offset Vector2
 * @returns Projection
 */
  jitterOffseted(offset: Vector2): Projection;
/**
 * Returns a `Projection` with the near clipping distance adjusted to be `new_znear`.
 * 
 * **Note:** The original `Projection` must be a perspective projection.
 * @param newZnear float
 * @returns Projection
 */
  perspectiveZnearAdjusted(newZnear: float): Projection;
/**
 * The index value of the projection's near clipping plane.
 */
  static readonly PLANE_NEAR: int;
/**
 * The index value of the projection's far clipping plane.
 */
  static readonly PLANE_FAR: int;
/**
 * The index value of the projection's left clipping plane.
 */
  static readonly PLANE_LEFT: int;
/**
 * The index value of the projection's top clipping plane.
 */
  static readonly PLANE_TOP: int;
/**
 * The index value of the projection's right clipping plane.
 */
  static readonly PLANE_RIGHT: int;
/**
 * The index value of the projection bottom clipping plane.
 */
  static readonly PLANE_BOTTOM: int;
/**
 * A `Projection` with no transformation defined. When applied to other data structures, no transformation is performed.
 */
  static readonly IDENTITY: int;
/**
 * A `Projection` with all values initialized to 0. When applied to other data structures, they will be zeroed.
 */
  static readonly ZERO: int;
}
