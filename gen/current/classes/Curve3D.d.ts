import type { GodotArray, GodotDictionary, PackedFloat32Array, PackedVector3Array, Resource, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Describes a Bézier curve in 3D space.
 * 
 * This class describes a Bézier curve in 3D space. It is mainly used to give a shape to a `Path3D`, but can be manually sampled for other purposes.
 * It keeps a cache of precalculated points along the curve, to speed up further calculations.
 */
export class Curve3D extends Resource {
/**
 * The distance in meters between two adjacent cached points. Changing it forces the cache to be recomputed the next time the `get_baked_points` or `get_baked_length` function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care.
 */
  bakeInterval: float;
/**
 * If `true`, and the curve has more than 2 control points, the last point and the first one will be connected in a loop.
 */
  closed: boolean;
/**
 * The number of points describing the curve.
 */
  pointCount: int;
/**
 * If `true`, the curve will bake up vectors used for orientation. This is used when `PathFollow3D.rotation_mode` is set to `PathFollow3D.ROTATION_ORIENTED`. Changing it forces the cache to be recomputed.
 */
  upVectorEnabled: boolean;
/**
 * Adds a point with the specified `position` relative to the curve's own position, with control points `in` and `out`. Appends the new point at the end of the point list.
 * If `index` is given, the new point is inserted before the existing point identified by index `index`. Every existing point starting from `index` is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See `point_count`.
 * @param position Vector3
 * @param in_ Vector3 (optional, default: Vector3(0, 0, 0))
 * @param out Vector3 (optional, default: Vector3(0, 0, 0))
 * @param index int (optional, default: -1)
 */
  addPoint(position: Vector3, in_?: Vector3, out?: Vector3, index?: int): void;
/**
 * Removes all points from the curve.
 */
  clearPoints(): void;
/**
 * Returns the total length of the curve, based on the cached points. Given enough density (see `bake_interval`), it should be approximate enough.
 * @returns float
 */
  getBakedLength(): float;
/**
 * Returns the cache of points as a `PackedVector3Array`.
 * @returns PackedVector3Array
 */
  getBakedPoints(): PackedVector3Array;
/**
 * Returns the cache of tilts as a `PackedFloat32Array`.
 * @returns PackedFloat32Array
 */
  getBakedTilts(): PackedFloat32Array;
/**
 * Returns the cache of up vectors as a `PackedVector3Array`.
 * If `up_vector_enabled` is `false`, the cache will be empty.
 * @returns PackedVector3Array
 */
  getBakedUpVectors(): PackedVector3Array;
/**
 * Returns the closest offset to `to_point`. This offset is meant to be used in `sample_baked` or `sample_baked_up_vector`.
 * `to_point` must be in this curve's local space.
 * @param toPoint Vector3
 * @returns float
 */
  getClosestOffset(toPoint: Vector3): float;
/**
 * Returns the closest point on baked segments (in curve's local space) to `to_point`.
 * `to_point` must be in this curve's local space.
 * @param toPoint Vector3
 * @returns Vector3
 */
  getClosestPoint(toPoint: Vector3): Vector3;
/**
 * Returns the position of the control point leading to the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`.
 * @param idx int
 * @returns Vector3
 */
  getPointIn(idx: int): Vector3;
/**
 * Returns the position of the control point leading out of the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`.
 * @param idx int
 * @returns Vector3
 */
  getPointOut(idx: int): Vector3;
/**
 * Returns the position of the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`.
 * @param idx int
 * @returns Vector3
 */
  getPointPosition(idx: int): Vector3;
/**
 * Returns the tilt angle in radians for the point `idx`. If the index is out of bounds, the function sends an error to the console, and returns `0`.
 * @param idx int
 * @returns float
 */
  getPointTilt(idx: int): float;
/**
 * Deletes the point `idx` from the curve. Sends an error to the console if `idx` is out of bounds.
 * @param idx int
 */
  removePoint(idx: int): void;
/**
 * Returns the position between the vertex `idx` and the vertex `idx + 1`, where `t` controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of `t` outside the range (`0.0 >= t <=1`) give strange, but predictable results.
 * If `idx` is out of bounds it is truncated to the first or last vertex, and `t` is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0, 0)`.
 * @param idx int
 * @param t float
 * @returns Vector3
 */
  sample(idx: int, t: float): Vector3;
/**
 * Returns a point within the curve at position `offset`, where `offset` is measured as a distance in 3D units along the curve. To do that, it finds the two cached points where the `offset` lies between, then interpolates the values. This interpolation is cubic if `cubic` is set to `true`, or linear if set to `false`.
 * Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).
 * @param offset float (optional, default: 0.0)
 * @param cubic boolean (optional, default: false)
 * @returns Vector3
 */
  sampleBaked(offset?: float, cubic?: boolean): Vector3;
/**
 * Returns an up vector within the curve at position `offset`, where `offset` is measured as a distance in 3D units along the curve. To do that, it finds the two cached up vectors where the `offset` lies between, then interpolates the values. If `apply_tilt` is `true`, an interpolated tilt is applied to the interpolated up vector.
 * If the curve has no up vectors, the function sends an error to the console, and returns `(0, 1, 0)`.
 * @param offset float
 * @param applyTilt boolean (optional, default: false)
 * @returns Vector3
 */
  sampleBakedUpVector(offset: float, applyTilt?: boolean): Vector3;
/**
 * Returns a `Transform3D` with `origin` as point position, `basis.x` as sideway vector, `basis.y` as up vector, `basis.z` as forward vector. When the curve length is 0, there is no reasonable way to calculate the rotation, all vectors aligned with global space axes. See also `sample_baked`.
 * @param offset float (optional, default: 0.0)
 * @param cubic boolean (optional, default: false)
 * @param applyTilt boolean (optional, default: false)
 * @returns Transform3D
 */
  sampleBakedWithRotation(offset?: float, cubic?: boolean, applyTilt?: boolean): Transform3D;
/**
 * Returns the position at the vertex `fofs`. It calls `sample` using the integer part of `fofs` as `idx`, and its fractional part as `t`.
 * @param fofs float
 * @returns Vector3
 */
  samplef(fofs: float): Vector3;
/**
 * Sets the position of the control point leading to the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.
 * @param idx int
 * @param position Vector3
 */
  setPointIn(idx: int, position: Vector3): void;
/**
 * Sets the position of the control point leading out of the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.
 * @param idx int
 * @param position Vector3
 */
  setPointOut(idx: int, position: Vector3): void;
/**
 * Sets the position for the vertex `idx`. If the index is out of bounds, the function sends an error to the console.
 * @param idx int
 * @param position Vector3
 */
  setPointPosition(idx: int, position: Vector3): void;
/**
 * Sets the tilt angle in radians for the point `idx`. If the index is out of bounds, the function sends an error to the console.
 * The tilt controls the rotation along the look-at axis an object traveling the path would have. In the case of a curve controlling a `PathFollow3D`, this tilt is an offset over the natural tilt the `PathFollow3D` calculates.
 * @param idx int
 * @param tilt float
 */
  setPointTilt(idx: int, tilt: float): void;
/**
 * Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.
 * This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.
 * `max_stages` controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
 * `tolerance_degrees` controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.
 * @param maxStages int (optional, default: 5)
 * @param toleranceDegrees float (optional, default: 4)
 * @returns PackedVector3Array
 */
  tessellate(maxStages?: int, toleranceDegrees?: float): PackedVector3Array;
/**
 * Returns a list of points along the curve, with almost uniform density. `max_stages` controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
 * `tolerance_length` controls the maximal distance between two neighboring points, before the segment has to be subdivided.
 * @param maxStages int (optional, default: 5)
 * @param toleranceLength float (optional, default: 0.2)
 * @returns PackedVector3Array
 */
  tessellateEvenLength(maxStages?: int, toleranceLength?: float): PackedVector3Array;
}
