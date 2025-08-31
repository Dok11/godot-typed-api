import type { GodotArray, GodotDictionary, PackedInt32Array, PackedVector2Array, Rect2, Resource, Vector2, float, int } from "../index.d.ts";
export class PolygonPathFinder extends Resource {
/**
 * @param from_ Vector2
 * @param to Vector2
 * @returns PackedVector2Array
 */
  findPath(from_: Vector2, to: Vector2): PackedVector2Array;
/**
 * @returns Rect2
 */
  getBounds(): Rect2;
/**
 * @param point Vector2
 * @returns Vector2
 */
  getClosestPoint(point: Vector2): Vector2;
/**
 * @param from_ Vector2
 * @param to Vector2
 * @returns PackedVector2Array
 */
  getIntersections(from_: Vector2, to: Vector2): PackedVector2Array;
/**
 * @param idx int
 * @returns float
 */
  getPointPenalty(idx: int): float;
/**
 * Returns `true` if `point` falls inside the polygon area.
 * 
 * 				```gdscript
 * 
 * 				var polygon_path_finder = PolygonPathFinder.new()
 * 				var points = [Vector2(0.0, 0.0), Vector2(1.0, 0.0), Vector2(0.0, 1.0)]
 * 				var connections = [0, 1, 1, 2, 2, 0]
 * 				polygon_path_finder.setup(points, connections)
 * 				print(polygon_path_finder.is_point_inside(Vector2(0.2, 0.2))) # Prints true
 * 				print(polygon_path_finder.is_point_inside(Vector2(1.0, 1.0))) # Prints false
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var polygonPathFinder = new PolygonPathFinder();
 * 				Vector2[] points =
 * 				[
 * 				    new Vector2(0.0f, 0.0f),
 * 				    new Vector2(1.0f, 0.0f),
 * 				    new Vector2(0.0f, 1.0f)
 * 				];
 * 				int[] connections = [0, 1, 1, 2, 2, 0];
 * 				polygonPathFinder.Setup(points, connections);
 * 				GD.Print(polygonPathFinder.IsPointInside(new Vector2(0.2f, 0.2f))); // Prints True
 * 				GD.Print(polygonPathFinder.IsPointInside(new Vector2(1.0f, 1.0f))); // Prints False
 * 				
 * 
 * ```
 * 
 * @param point Vector2
 * @returns boolean
 */
  isPointInside(point: Vector2): boolean;
/**
 * @param idx int
 * @param penalty float
 */
  setPointPenalty(idx: int, penalty: float): void;
/**
 * Sets up `PolygonPathFinder` with an array of points that define the vertices of the polygon, and an array of indices that determine the edges of the polygon.
 * The length of `connections` must be even, returns an error if odd.
 * 
 * 				```gdscript
 * 
 * 				var polygon_path_finder = PolygonPathFinder.new()
 * 				var points = [Vector2(0.0, 0.0), Vector2(1.0, 0.0), Vector2(0.0, 1.0)]
 * 				var connections = [0, 1, 1, 2, 2, 0]
 * 				polygon_path_finder.setup(points, connections)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var polygonPathFinder = new PolygonPathFinder();
 * 				Vector2[] points =
 * 				[
 * 				    new Vector2(0.0f, 0.0f),
 * 				    new Vector2(1.0f, 0.0f),
 * 				    new Vector2(0.0f, 1.0f)
 * 				];
 * 				int[] connections = [0, 1, 1, 2, 2, 0];
 * 				polygonPathFinder.Setup(points, connections);
 * 				
 * 
 * ```
 * 
 * @param points PackedVector2Array
 * @param connections PackedInt32Array
 */
  setup(points: PackedVector2Array, connections: PackedInt32Array): void;
}
