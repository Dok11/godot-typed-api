import type { GodotArray, GodotDictionary, PackedVector2Array, Resource, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Describes a Bézier curve in 2D space.
 * 
 * This class describes a Bézier curve in 2D space. It is mainly used to give a shape to a `Path2D`, but can be manually sampled for other purposes.
 * It keeps a cache of precalculated points along the curve, to speed up further calculations.
 */
export class Curve2D extends Resource {
/**
 * The distance in pixels between two adjacent cached points. Changing it forces the cache to be recomputed the next time the `get_baked_points` or `get_baked_length` function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care.
 */
  bakeInterval: float;
/**
 * The number of points describing the curve.
 */
  pointCount: int;
/**
 * Adds a point with the specified `position` relative to the curve's own position, with control points `in` and `out`. Appends the new point at the end of the point list.
 * If `index` is given, the new point is inserted before the existing point identified by index `index`. Every existing point starting from `index` is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See `point_count`.
 * @param position Vector2
 * @param in_ Vector2 (optional, default: Vector2(0, 0))
 * @param out Vector2 (optional, default: Vector2(0, 0))
 * @param index int (optional, default: -1)
 */
  addPoint(position: Vector2, in_?: Vector2, out?: Vector2, index?: int): void;
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
 * Returns the cache of points as a `PackedVector2Array`.
 * @returns PackedVector2Array
 */
  getBakedPoints(): PackedVector2Array;
/**
 * Returns the closest offset to `to_point`. This offset is meant to be used in `sample_baked`.
 * `to_point` must be in this curve's local space.
 * @param toPoint Vector2
 * @returns float
 */
  getClosestOffset(toPoint: Vector2): float;
/**
 * Returns the closest point on baked segments (in curve's local space) to `to_point`.
 * `to_point` must be in this curve's local space.
 * @param toPoint Vector2
 * @returns Vector2
 */
  getClosestPoint(toPoint: Vector2): Vector2;
/**
 * Returns the position of the control point leading to the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`.
 * @param idx int
 * @returns Vector2
 */
  getPointIn(idx: int): Vector2;
/**
 * Returns the position of the control point leading out of the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`.
 * @param idx int
 * @returns Vector2
 */
  getPointOut(idx: int): Vector2;
/**
 * Returns the position of the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`.
 * @param idx int
 * @returns Vector2
 */
  getPointPosition(idx: int): Vector2;
/**
 * Deletes the point `idx` from the curve. Sends an error to the console if `idx` is out of bounds.
 * @param idx int
 */
  removePoint(idx: int): void;
/**
 * Returns the position between the vertex `idx` and the vertex `idx + 1`, where `t` controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of `t` outside the range (`0.0 <= t <= 1.0`) give strange, but predictable results.
 * If `idx` is out of bounds it is truncated to the first or last vertex, and `t` is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0)`.
 * @param idx int
 * @param t float
 * @returns Vector2
 */
  sample(idx: int, t: float): Vector2;
/**
 * Returns a point within the curve at position `offset`, where `offset` is measured as a pixel distance along the curve.
 * To do that, it finds the two cached points where the `offset` lies between, then interpolates the values. This interpolation is cubic if `cubic` is set to `true`, or linear if set to `false`.
 * Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).
 * @param offset float (optional, default: 0.0)
 * @param cubic boolean (optional, default: false)
 * @returns Vector2
 */
  sampleBaked(offset?: float, cubic?: boolean): Vector2;
/**
 * Similar to `sample_baked`, but returns `Transform2D` that includes a rotation along the curve, with `Transform2D.origin` as the point position and the `Transform2D.x` vector pointing in the direction of the path at that point. Returns an empty transform if the length of the curve is `0`.
 * 
 * 				```gdscript
 * 
 * 				var baked = curve.sample_baked_with_rotation(offset)
 * 				# The returned Transform2D can be set directly.
 * 				transform = baked
 * 				# You can also read the origin and rotation separately from the returned Transform2D.
 * 				position = baked.get_origin()
 * 				rotation = baked.get_rotation()
 * 				
 * 
 * ```
 * @param offset float (optional, default: 0.0)
 * @param cubic boolean (optional, default: false)
 * @returns Transform2D
 */
  sampleBakedWithRotation(offset?: float, cubic?: boolean): Transform2D;
/**
 * Returns the position at the vertex `fofs`. It calls `sample` using the integer part of `fofs` as `idx`, and its fractional part as `t`.
 * @param fofs float
 * @returns Vector2
 */
  samplef(fofs: float): Vector2;
/**
 * Sets the position of the control point leading to the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.
 * @param idx int
 * @param position Vector2
 */
  setPointIn(idx: int, position: Vector2): void;
/**
 * Sets the position of the control point leading out of the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.
 * @param idx int
 * @param position Vector2
 */
  setPointOut(idx: int, position: Vector2): void;
/**
 * Sets the position for the vertex `idx`. If the index is out of bounds, the function sends an error to the console.
 * @param idx int
 * @param position Vector2
 */
  setPointPosition(idx: int, position: Vector2): void;
/**
 * Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.
 * This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.
 * `max_stages` controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
 * `tolerance_degrees` controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.
 * @param maxStages int (optional, default: 5)
 * @param toleranceDegrees float (optional, default: 4)
 * @returns PackedVector2Array
 */
  tessellate(maxStages?: int, toleranceDegrees?: float): PackedVector2Array;
/**
 * Returns a list of points along the curve, with almost uniform density. `max_stages` controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
 * `tolerance_length` controls the maximal distance between two neighboring points, before the segment has to be subdivided.
 * @param maxStages int (optional, default: 5)
 * @param toleranceLength float (optional, default: 20.0)
 * @returns PackedVector2Array
 */
  tessellateEvenLength(maxStages?: int, toleranceLength?: float): PackedVector2Array;
}
