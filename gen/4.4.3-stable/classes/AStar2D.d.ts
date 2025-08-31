import type { GodotArray, GodotDictionary, PackedInt64Array, PackedVector2Array, RefCounted, Vector2, float, int } from "../index.d.ts";
/**
 * An implementation of A* for finding the shortest path between two vertices on a connected graph in 2D space.
 * 
 * An implementation of the A* algorithm, used to find the shortest path between two vertices on a connected graph in 2D space.
 * See `AStar3D` for a more thorough explanation on how to use this class. `AStar2D` is a wrapper for `AStar3D` that enforces 2D coordinates.
 */
export class AStar2D extends RefCounted {
/**
 * Adds a new point at the given position with the given identifier. The `id` must be 0 or larger, and the `weight_scale` must be 0.0 or greater.
 * The `weight_scale` is multiplied by the result of `_compute_cost` when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower `weight_scale`s to form a path.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar2D.new()
 * 				astar.add_point(1, Vector2(1, 0), 4) # Adds the point (1, 0) with weight_scale 4 and id 1
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar2D();
 * 				astar.AddPoint(1, new Vector2(1, 0), 4); // Adds the point (1, 0) with weight_scale 4 and id 1
 * 				
 * 
 * ```
 * 
 * If there already exists a point for the given `id`, its position and weight scale are updated to the given values.
 * @param id int
 * @param position Vector2
 * @param weightScale float (optional, default: 1.0)
 */
  addPoint(id: int, position: Vector2, weightScale?: float): void;
/**
 * Returns whether there is a connection/segment between the given points. If `bidirectional` is `false`, returns whether movement from `id` to `to_id` is possible through this segment.
 * @param id int
 * @param toId int
 * @param bidirectional boolean (optional, default: true)
 * @returns boolean
 */
  arePointsConnected(id: int, toId: int, bidirectional?: boolean): boolean;
/**
 * Clears all the points and segments.
 */
  clear(): void;
/**
 * Called when computing the cost between two connected points.
 * Note that this function is hidden in the default `AStar2D` class.
 * @param fromId int
 * @param toId int
 * @returns float
 */
  private computeCost(fromId: int, toId: int): float;
/**
 * Creates a segment between the given points. If `bidirectional` is `false`, only movement from `id` to `to_id` is allowed, not the reverse direction.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar2D.new()
 * 				astar.add_point(1, Vector2(1, 1))
 * 				astar.add_point(2, Vector2(0, 5))
 * 				astar.connect_points(1, 2, false)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar2D();
 * 				astar.AddPoint(1, new Vector2(1, 1));
 * 				astar.AddPoint(2, new Vector2(0, 5));
 * 				astar.ConnectPoints(1, 2, false);
 * 				
 * 
 * ```
 * 
 * @param id int
 * @param toId int
 * @param bidirectional boolean (optional, default: true)
 */
  connectPoints(id: int, toId: int, bidirectional?: boolean): void;
/**
 * Deletes the segment between the given points. If `bidirectional` is `false`, only movement from `id` to `to_id` is prevented, and a unidirectional segment possibly remains.
 * @param id int
 * @param toId int
 * @param bidirectional boolean (optional, default: true)
 */
  disconnectPoints(id: int, toId: int, bidirectional?: boolean): void;
/**
 * Called when estimating the cost between a point and the path's ending point.
 * Note that this function is hidden in the default `AStar2D` class.
 * @param fromId int
 * @param endId int
 * @returns float
 */
  private estimateCost(fromId: int, endId: int): float;
/**
 * Returns the next available point ID with no point associated to it.
 * @returns int
 */
  getAvailablePointId(): int;
/**
 * Returns the ID of the closest point to `to_position`, optionally taking disabled points into account. Returns `-1` if there are no points in the points pool.
 * 
 * **Note:** If several points are the closest to `to_position`, the one with the smallest ID will be returned, ensuring a deterministic result.
 * @param toPosition Vector2
 * @param includeDisabled boolean (optional, default: false)
 * @returns int
 */
  getClosestPoint(toPosition: Vector2, includeDisabled?: boolean): int;
/**
 * Returns the closest position to `to_position` that resides inside a segment between two connected points.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar2D.new()
 * 				astar.add_point(1, Vector2(0, 0))
 * 				astar.add_point(2, Vector2(0, 5))
 * 				astar.connect_points(1, 2)
 * 				var res = astar.get_closest_position_in_segment(Vector2(3, 3)) # Returns (0, 3)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar2D();
 * 				astar.AddPoint(1, new Vector2(0, 0));
 * 				astar.AddPoint(2, new Vector2(0, 5));
 * 				astar.ConnectPoints(1, 2);
 * 				Vector2 res = astar.GetClosestPositionInSegment(new Vector2(3, 3)); // Returns (0, 3)
 * 				
 * 
 * ```
 * 
 * The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.
 * @param toPosition Vector2
 * @returns Vector2
 */
  getClosestPositionInSegment(toPosition: Vector2): Vector2;
/**
 * Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.
 * If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.
 * 
 * **Note:** When `allow_partial_path` is `true` and `to_id` is disabled the search may take an unusually long time to finish.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar2D.new()
 * 				astar.add_point(1, Vector2(0, 0))
 * 				astar.add_point(2, Vector2(0, 1), 1) # Default weight is 1
 * 				astar.add_point(3, Vector2(1, 1))
 * 				astar.add_point(4, Vector2(2, 0))
 * 
 * 				astar.connect_points(1, 2, false)
 * 				astar.connect_points(2, 3, false)
 * 				astar.connect_points(4, 3, false)
 * 				astar.connect_points(1, 4, false)
 * 
 * 				var res = astar.get_id_path(1, 3) # Returns [1, 2, 3]
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar2D();
 * 				astar.AddPoint(1, new Vector2(0, 0));
 * 				astar.AddPoint(2, new Vector2(0, 1), 1); // Default weight is 1
 * 				astar.AddPoint(3, new Vector2(1, 1));
 * 				astar.AddPoint(4, new Vector2(2, 0));
 * 
 * 				astar.ConnectPoints(1, 2, false);
 * 				astar.ConnectPoints(2, 3, false);
 * 				astar.ConnectPoints(4, 3, false);
 * 				astar.ConnectPoints(1, 4, false);
 * 				long[] res = astar.GetIdPath(1, 3); // Returns [1, 2, 3]
 * 				
 * 
 * ```
 * 
 * If you change the 2nd point's weight to 3, then the result will be `[1, 4, 3]` instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.
 * @param fromId int
 * @param toId int
 * @param allowPartialPath boolean (optional, default: false)
 * @returns PackedInt64Array
 */
  getIdPath(fromId: int, toId: int, allowPartialPath?: boolean): PackedInt64Array;
/**
 * Returns the capacity of the structure backing the points, useful in conjunction with `reserve_space`.
 * @returns int
 */
  getPointCapacity(): int;
/**
 * Returns an array with the IDs of the points that form the connection with the given point.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar2D.new()
 * 				astar.add_point(1, Vector2(0, 0))
 * 				astar.add_point(2, Vector2(0, 1))
 * 				astar.add_point(3, Vector2(1, 1))
 * 				astar.add_point(4, Vector2(2, 0))
 * 
 * 				astar.connect_points(1, 2, true)
 * 				astar.connect_points(1, 3, true)
 * 
 * 				var neighbors = astar.get_point_connections(1) # Returns [2, 3]
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar2D();
 * 				astar.AddPoint(1, new Vector2(0, 0));
 * 				astar.AddPoint(2, new Vector2(0, 1));
 * 				astar.AddPoint(3, new Vector2(1, 1));
 * 				astar.AddPoint(4, new Vector2(2, 0));
 * 
 * 				astar.ConnectPoints(1, 2, true);
 * 				astar.ConnectPoints(1, 3, true);
 * 
 * 				long[] neighbors = astar.GetPointConnections(1); // Returns [2, 3]
 * 				
 * 
 * ```
 * 
 * @param id int
 * @returns PackedInt64Array
 */
  getPointConnections(id: int): PackedInt64Array;
/**
 * Returns the number of points currently in the points pool.
 * @returns int
 */
  getPointCount(): int;
/**
 * Returns an array of all point IDs.
 * @returns PackedInt64Array
 */
  getPointIds(): PackedInt64Array;
/**
 * Returns an array with the points that are in the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.
 * If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.
 * 
 * **Note:** This method is not thread-safe. If called from a `Thread`, it will return an empty array and will print an error message.
 * Additionally, when `allow_partial_path` is `true` and `to_id` is disabled the search may take an unusually long time to finish.
 * @param fromId int
 * @param toId int
 * @param allowPartialPath boolean (optional, default: false)
 * @returns PackedVector2Array
 */
  getPointPath(fromId: int, toId: int, allowPartialPath?: boolean): PackedVector2Array;
/**
 * Returns the position of the point associated with the given `id`.
 * @param id int
 * @returns Vector2
 */
  getPointPosition(id: int): Vector2;
/**
 * Returns the weight scale of the point associated with the given `id`.
 * @param id int
 * @returns float
 */
  getPointWeightScale(id: int): float;
/**
 * Returns whether a point associated with the given `id` exists.
 * @param id int
 * @returns boolean
 */
  hasPoint(id: int): boolean;
/**
 * Returns whether a point is disabled or not for pathfinding. By default, all points are enabled.
 * @param id int
 * @returns boolean
 */
  isPointDisabled(id: int): boolean;
/**
 * Removes the point associated with the given `id` from the points pool.
 * @param id int
 */
  removePoint(id: int): void;
/**
 * Reserves space internally for `num_nodes` points. Useful if you're adding a known large number of points at once, such as points on a grid. The new capacity must be greater or equal to the old capacity.
 * @param numNodes int
 */
  reserveSpace(numNodes: int): void;
/**
 * Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle.
 * @param id int
 * @param disabled boolean (optional, default: true)
 */
  setPointDisabled(id: int, disabled?: boolean): void;
/**
 * Sets the `position` for the point with the given `id`.
 * @param id int
 * @param position Vector2
 */
  setPointPosition(id: int, position: Vector2): void;
/**
 * Sets the `weight_scale` for the point with the given `id`. The `weight_scale` is multiplied by the result of `_compute_cost` when determining the overall cost of traveling across a segment from a neighboring point to this point.
 * @param id int
 * @param weightScale float
 */
  setPointWeightScale(id: int, weightScale: float): void;
}
