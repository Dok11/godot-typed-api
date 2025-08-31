import type { GodotArray, GodotDictionary, Object, PackedInt32Array, PackedVector2Array, Variant, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * Provides methods for some common 2D geometric operations.
 * 
 * Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 2D.
 */
export class Geometry2D extends Object {
/**
 * Returns the Bresenham line (https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm) between the `from` and `to` points. A Bresenham line is a series of pixels that draws a line and is always 1-pixel thick on every row and column of the drawing (never more, never less).
 * Example code to draw a line between two `Marker2D` nodes using a series of `CanvasItem.draw_rect` calls:
 * 
 * 				```gdscript
 * 
 * 				func _draw():
 * 				    for pixel in Geometry2D.bresenham_line($MarkerA.position, $MarkerB.position):
 * 				        draw_rect(Rect2(pixel, Vector2.ONE), Color.WHITE)
 * 				
 * 
 * ```
 * @param from_ Vector2i
 * @param to Vector2i
 * @returns Vector2i[]
 */
  bresenhamLine(from_: Vector2i, to: Vector2i): Vector2i[];
/**
 * Clips `polygon_a` against `polygon_b` and returns an array of clipped polygons. This performs `OPERATION_DIFFERENCE` between polygons. Returns an empty array if `polygon_b` completely overlaps `polygon_a`.
 * If `polygon_b` is enclosed by `polygon_a`, returns an outer polygon (boundary) and inner polygon (hole) which could be distinguished by calling `is_polygon_clockwise`.
 * @param polygonA PackedVector2Array
 * @param polygonB PackedVector2Array
 * @returns PackedVector2Array[]
 */
  clipPolygons(polygonA: PackedVector2Array, polygonB: PackedVector2Array): PackedVector2Array[];
/**
 * Clips `polyline` against `polygon` and returns an array of clipped polylines. This performs `OPERATION_DIFFERENCE` between the polyline and the polygon. This operation can be thought of as cutting a line with a closed shape.
 * @param polyline PackedVector2Array
 * @param polygon PackedVector2Array
 * @returns PackedVector2Array[]
 */
  clipPolylineWithPolygon(polyline: PackedVector2Array, polygon: PackedVector2Array): PackedVector2Array[];
/**
 * Given an array of `Vector2`s, returns the convex hull as a list of points in counterclockwise order. The last point is the same as the first one.
 * @param points PackedVector2Array
 * @returns PackedVector2Array
 */
  convexHull(points: PackedVector2Array): PackedVector2Array;
/**
 * Decomposes the `polygon` into multiple convex hulls and returns an array of `PackedVector2Array`.
 * @param polygon PackedVector2Array
 * @returns PackedVector2Array[]
 */
  decomposePolygonInConvex(polygon: PackedVector2Array): PackedVector2Array[];
/**
 * Mutually excludes common area defined by intersection of `polygon_a` and `polygon_b` (see `intersect_polygons`) and returns an array of excluded polygons. This performs `OPERATION_XOR` between polygons. In other words, returns all but common area between polygons.
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling `is_polygon_clockwise`.
 * @param polygonA PackedVector2Array
 * @param polygonB PackedVector2Array
 * @returns PackedVector2Array[]
 */
  excludePolygons(polygonA: PackedVector2Array, polygonB: PackedVector2Array): PackedVector2Array[];
/**
 * Given the two 2D segments (`p1`, `q1`) and (`p2`, `q2`), finds those two points on the two segments that are closest to each other. Returns a `PackedVector2Array` that contains this point on (`p1`, `q1`) as well the accompanying point on (`p2`, `q2`).
 * @param p1 Vector2
 * @param q1 Vector2
 * @param p2 Vector2
 * @param q2 Vector2
 * @returns PackedVector2Array
 */
  getClosestPointsBetweenSegments(p1: Vector2, q1: Vector2, p2: Vector2, q2: Vector2): PackedVector2Array;
/**
 * Returns the 2D point on the 2D segment (`s1`, `s2`) that is closest to `point`. The returned point will always be inside the specified segment.
 * @param point Vector2
 * @param s1 Vector2
 * @param s2 Vector2
 * @returns Vector2
 */
  getClosestPointToSegment(point: Vector2, s1: Vector2, s2: Vector2): Vector2;
/**
 * Returns the 2D point on the 2D line defined by (`s1`, `s2`) that is closest to `point`. The returned point can be inside the segment (`s1`, `s2`) or outside of it, i.e. somewhere on the line extending from the segment.
 * @param point Vector2
 * @param s1 Vector2
 * @param s2 Vector2
 * @returns Vector2
 */
  getClosestPointToSegmentUncapped(point: Vector2, s1: Vector2, s2: Vector2): Vector2;
/**
 * Intersects `polygon_a` with `polygon_b` and returns an array of intersected polygons. This performs `OPERATION_INTERSECTION` between polygons. In other words, returns common area shared by polygons. Returns an empty array if no intersection occurs.
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling `is_polygon_clockwise`.
 * @param polygonA PackedVector2Array
 * @param polygonB PackedVector2Array
 * @returns PackedVector2Array[]
 */
  intersectPolygons(polygonA: PackedVector2Array, polygonB: PackedVector2Array): PackedVector2Array[];
/**
 * Intersects `polyline` with `polygon` and returns an array of intersected polylines. This performs `OPERATION_INTERSECTION` between the polyline and the polygon. This operation can be thought of as chopping a line with a closed shape.
 * @param polyline PackedVector2Array
 * @param polygon PackedVector2Array
 * @returns PackedVector2Array[]
 */
  intersectPolylineWithPolygon(polyline: PackedVector2Array, polygon: PackedVector2Array): PackedVector2Array[];
/**
 * Returns `true` if `point` is inside the circle or if it's located exactly *on* the circle's boundary, otherwise returns `false`.
 * @param point Vector2
 * @param circlePosition Vector2
 * @param circleRadius float
 * @returns boolean
 */
  isPointInCircle(point: Vector2, circlePosition: Vector2, circleRadius: float): boolean;
/**
 * Returns `true` if `point` is inside `polygon` or if it's located exactly *on* polygon's boundary, otherwise returns `false`.
 * @param point Vector2
 * @param polygon PackedVector2Array
 * @returns boolean
 */
  isPointInPolygon(point: Vector2, polygon: PackedVector2Array): boolean;
/**
 * Returns `true` if `polygon`'s vertices are ordered in clockwise order, otherwise returns `false`.
 * 
 * **Note:** Assumes a Cartesian coordinate system where `+x` is right and `+y` is up. If using screen coordinates (`+y` is down), the result will need to be flipped (i.e. a `true` result will indicate counter-clockwise).
 * @param polygon PackedVector2Array
 * @returns boolean
 */
  isPolygonClockwise(polygon: PackedVector2Array): boolean;
/**
 * Returns the point of intersection between the two lines (`from_a`, `dir_a`) and (`from_b`, `dir_b`). Returns a `Vector2`, or `null` if the lines are parallel.
 * `from` and `dir` are *not* endpoints of a line segment or ray but the slope (`dir`) and a known point (`from`) on that line.
 * 
 * 				```gdscript
 * 
 * 				var from_a = Vector2.ZERO
 * 				var dir_a = Vector2.RIGHT
 * 				var from_b = Vector2.DOWN
 * 
 * 				# Returns Vector2(1, 0)
 * 				Geometry2D.line_intersects_line(from_a, dir_a, from_b, Vector2(1, -1))
 * 				# Returns Vector2(-1, 0)
 * 				Geometry2D.line_intersects_line(from_a, dir_a, from_b, Vector2(-1, -1))
 * 				# Returns null
 * 				Geometry2D.line_intersects_line(from_a, dir_a, from_b, Vector2.RIGHT)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var fromA = Vector2.Zero;
 * 				var dirA = Vector2.Right;
 * 				var fromB = Vector2.Down;
 * 
 * 				// Returns new Vector2(1, 0)
 * 				Geometry2D.LineIntersectsLine(fromA, dirA, fromB, new Vector2(1, -1));
 * 				// Returns new Vector2(-1, 0)
 * 				Geometry2D.LineIntersectsLine(fromA, dirA, fromB, new Vector2(-1, -1));
 * 				// Returns null
 * 				Geometry2D.LineIntersectsLine(fromA, dirA, fromB, Vector2.Right);
 * 				
 * 
 * ```
 * 
 * @param fromA Vector2
 * @param dirA Vector2
 * @param fromB Vector2
 * @param dirB Vector2
 * @returns Variant
 */
  lineIntersectsLine(fromA: Vector2, dirA: Vector2, fromB: Vector2, dirB: Vector2): Variant;
/**
 * Given an array of `Vector2`s representing tiles, builds an atlas. The returned dictionary has two keys: `points` is a `PackedVector2Array` that specifies the positions of each tile, `size` contains the overall size of the whole atlas as `Vector2i`.
 * @param sizes PackedVector2Array
 * @returns GodotDictionary<any>
 */
  makeAtlas(sizes: PackedVector2Array): GodotDictionary<any>;
/**
 * Merges (combines) `polygon_a` and `polygon_b` and returns an array of merged polygons. This performs `OPERATION_UNION` between polygons.
 * The operation may result in an outer polygon (boundary) and multiple inner polygons (holes) produced which could be distinguished by calling `is_polygon_clockwise`.
 * @param polygonA PackedVector2Array
 * @param polygonB PackedVector2Array
 * @returns PackedVector2Array[]
 */
  mergePolygons(polygonA: PackedVector2Array, polygonB: PackedVector2Array): PackedVector2Array[];
/**
 * Inflates or deflates `polygon` by `delta` units (pixels). If `delta` is positive, makes the polygon grow outward. If `delta` is negative, shrinks the polygon inward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. Returns an empty array if `delta` is negative and the absolute value of it approximately exceeds the minimum bounding rectangle dimensions of the polygon.
 * Each polygon's vertices will be rounded as determined by `join_type`, see `PolyJoinType`.
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling `is_polygon_clockwise`.
 * 
 * **Note:** To translate the polygon's vertices specifically, multiply them to a `Transform2D`:
 * 
 * 				```gdscript
 * 
 * 				var polygon = PackedVector2Array([Vector2(0, 0), Vector2(100, 0), Vector2(100, 100), Vector2(0, 100)])
 * 				var offset = Vector2(50, 50)
 * 				polygon = Transform2D(0, offset) * polygon
 * 				print(polygon) # Prints [(50.0, 50.0), (150.0, 50.0), (150.0, 150.0), (50.0, 150.0)]
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Vector2[] polygon = [new Vector2(0, 0), new Vector2(100, 0), new Vector2(100, 100), new Vector2(0, 100)];
 * 				var offset = new Vector2(50, 50);
 * 				polygon = new Transform2D(0, offset) * polygon;
 * 				GD.Print((Variant)polygon); // Prints [(50, 50), (150, 50), (150, 150), (50, 150)]
 * 				
 * 
 * ```
 * 
 * @param polygon PackedVector2Array
 * @param delta float
 * @param joinType int (optional, default: 0)
 * @returns PackedVector2Array[]
 */
  offsetPolygon(polygon: PackedVector2Array, delta: float, joinType?: int): PackedVector2Array[];
/**
 * Inflates or deflates `polyline` by `delta` units (pixels), producing polygons. If `delta` is positive, makes the polyline grow outward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. If `delta` is negative, returns an empty array.
 * Each polygon's vertices will be rounded as determined by `join_type`, see `PolyJoinType`.
 * Each polygon's endpoints will be rounded as determined by `end_type`, see `PolyEndType`.
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling `is_polygon_clockwise`.
 * @param polyline PackedVector2Array
 * @param delta float
 * @param joinType int (optional, default: 0)
 * @param endType int (optional, default: 3)
 * @returns PackedVector2Array[]
 */
  offsetPolyline(polyline: PackedVector2Array, delta: float, joinType?: int, endType?: int): PackedVector2Array[];
/**
 * Returns if `point` is inside the triangle specified by `a`, `b` and `c`.
 * @param point Vector2
 * @param a Vector2
 * @param b Vector2
 * @param c Vector2
 * @returns boolean
 */
  pointIsInsideTriangle(point: Vector2, a: Vector2, b: Vector2, c: Vector2): boolean;
/**
 * Given the 2D segment (`segment_from`, `segment_to`), returns the position on the segment (as a number between 0 and 1) at which the segment hits the circle that is located at position `circle_position` and has radius `circle_radius`. If the segment does not intersect the circle, -1 is returned (this is also the case if the line extending the segment would intersect the circle, but the segment does not).
 * @param segmentFrom Vector2
 * @param segmentTo Vector2
 * @param circlePosition Vector2
 * @param circleRadius float
 * @returns float
 */
  segmentIntersectsCircle(segmentFrom: Vector2, segmentTo: Vector2, circlePosition: Vector2, circleRadius: float): float;
/**
 * Checks if the two segments (`from_a`, `to_a`) and (`from_b`, `to_b`) intersect. If yes, return the point of intersection as `Vector2`. If no intersection takes place, returns `null`.
 * @param fromA Vector2
 * @param toA Vector2
 * @param fromB Vector2
 * @param toB Vector2
 * @returns Variant
 */
  segmentIntersectsSegment(fromA: Vector2, toA: Vector2, fromB: Vector2, toB: Vector2): Variant;
/**
 * Triangulates the area specified by discrete set of `points` such that no point is inside the circumcircle of any resulting triangle. Returns a `PackedInt32Array` where each triangle consists of three consecutive point indices into `points` (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). If the triangulation did not succeed, an empty `PackedInt32Array` is returned.
 * @param points PackedVector2Array
 * @returns PackedInt32Array
 */
  triangulateDelaunay(points: PackedVector2Array): PackedInt32Array;
/**
 * Triangulates the polygon specified by the points in `polygon`. Returns a `PackedInt32Array` where each triangle consists of three consecutive point indices into `polygon` (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). Output triangles will always be counter clockwise, and the contour will be flipped if it's clockwise. If the triangulation did not succeed, an empty `PackedInt32Array` is returned.
 * @param polygon PackedVector2Array
 * @returns PackedInt32Array
 */
  triangulatePolygon(polygon: PackedVector2Array): PackedInt32Array;
/**
 * Create regions where either subject or clip polygons (or both) are filled.
 */
  static readonly OPERATION_UNION: int;
/**
 * Create regions where subject polygons are filled except where clip polygons are filled.
 */
  static readonly OPERATION_DIFFERENCE: int;
/**
 * Create regions where both subject and clip polygons are filled.
 */
  static readonly OPERATION_INTERSECTION: int;
/**
 * Create regions where either subject or clip polygons are filled but not where both are filled.
 */
  static readonly OPERATION_XOR: int;
/**
 * Squaring is applied uniformally at all convex edge joins at `1 * delta`.
 */
  static readonly JOIN_SQUARE: int;
/**
 * While flattened paths can never perfectly trace an arc, they are approximated by a series of arc chords.
 */
  static readonly JOIN_ROUND: int;
/**
 * There's a necessary limit to mitered joins since offsetting edges that join at very acute angles will produce excessively long and narrow "spikes". For any given edge join, when miter offsetting would exceed that maximum distance, "square" joining is applied.
 */
  static readonly JOIN_MITER: int;
/**
 * Endpoints are joined using the `PolyJoinType` value and the path filled as a polygon.
 */
  static readonly END_POLYGON: int;
/**
 * Endpoints are joined using the `PolyJoinType` value and the path filled as a polyline.
 */
  static readonly END_JOINED: int;
/**
 * Endpoints are squared off with no extension.
 */
  static readonly END_BUTT: int;
/**
 * Endpoints are squared off and extended by `delta` units.
 */
  static readonly END_SQUARE: int;
/**
 * Endpoints are rounded off and extended by `delta` units.
 */
  static readonly END_ROUND: int;
}
