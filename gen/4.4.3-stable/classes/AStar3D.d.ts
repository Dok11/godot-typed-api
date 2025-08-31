import type { GodotArray, GodotDictionary, PackedInt64Array, PackedVector3Array, RefCounted, Vector3, float, int } from "../index.d.ts";
/**
 * An implementation of A* for finding the shortest path between two vertices on a connected graph in 3D space.
 * 
 * A* (A star) is a computer algorithm used in pathfinding and graph traversal, the process of plotting short paths among vertices (points), passing through a given set of edges (segments). It enjoys widespread use due to its performance and accuracy. Godot's A* implementation uses points in 3D space and Euclidean distances by default.
 * You must add points manually with `add_point` and create segments manually with `connect_points`. Once done, you can test if there is a path between two points with the `are_points_connected` function, get a path containing indices by `get_id_path`, or one containing actual coordinates with `get_point_path`.
 * It is also possible to use non-Euclidean distances. To do so, create a script that extends `AStar3D` and override the methods `_compute_cost` and `_estimate_cost`. Both should take two point IDs and return the distance between the corresponding points.
 * 
 * **Example:** Use Manhattan distance instead of Euclidean distance:
 * 
 * 		```gdscript
 * 
 * 		class_name MyAStar3D
 * 		extends AStar3D
 * 
 * 		func _compute_cost(u, v):
 * 		    var u_pos = get_point_position(u)
 * 		    var v_pos = get_point_position(v)
 * 		    return abs(u_pos.x - v_pos.x) + abs(u_pos.y - v_pos.y) + abs(u_pos.z - v_pos.z)
 * 
 * 		func _estimate_cost(u, v):
 * 		    var u_pos = get_point_position(u)
 * 		    var v_pos = get_point_position(v)
 * 		    return abs(u_pos.x - v_pos.x) + abs(u_pos.y - v_pos.y) + abs(u_pos.z - v_pos.z)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		using Godot;
 * 
 * 		`GlobalClass`
 * 		public partial class MyAStar3D : AStar3D
 * 		{
 * 		    public override float _ComputeCost(long fromId, long toId)
 * 		    {
 * 		        Vector3 fromPoint = GetPointPosition(fromId);
 * 		        Vector3 toPoint = GetPointPosition(toId);
 * 
 * 		        return Mathf.Abs(fromPoint.X - toPoint.X) + Mathf.Abs(fromPoint.Y - toPoint.Y) + Mathf.Abs(fromPoint.Z - toPoint.Z);
 * 		    }
 * 
 * 		    public override float _EstimateCost(long fromId, long toId)
 * 		    {
 * 		        Vector3 fromPoint = GetPointPosition(fromId);
 * 		        Vector3 toPoint = GetPointPosition(toId);
 * 		        return Mathf.Abs(fromPoint.X - toPoint.X) + Mathf.Abs(fromPoint.Y - toPoint.Y) + Mathf.Abs(fromPoint.Z - toPoint.Z);
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 * `_estimate_cost` should return a lower bound of the distance, i.e. `_estimate_cost(u, v) <= _compute_cost(u, v)`. This serves as a hint to the algorithm because the custom `_compute_cost` might be computation-heavy. If this is not the case, make `_estimate_cost` return the same value as `_compute_cost` to provide the algorithm with the most accurate information.
 * If the default `_estimate_cost` and `_compute_cost` methods are used, or if the supplied `_estimate_cost` method returns a lower bound of the cost, then the paths returned by A* will be the lowest-cost paths. Here, the cost of a path equals the sum of the `_compute_cost` results of all segments in the path multiplied by the `weight_scale`s of the endpoints of the respective segments. If the default methods are used and the `weight_scale`s of all points are set to `1.0`, then this equals the sum of Euclidean distances of all segments in the path.
 */
export class AStar3D extends RefCounted {
/**
 * Adds a new point at the given position with the given identifier. The `id` must be 0 or larger, and the `weight_scale` must be 0.0 or greater.
 * The `weight_scale` is multiplied by the result of `_compute_cost` when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower `weight_scale`s to form a path.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar3D.new()
 * 				astar.add_point(1, Vector3(1, 0, 0), 4) # Adds the point (1, 0, 0) with weight_scale 4 and id 1
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar3D();
 * 				astar.AddPoint(1, new Vector3(1, 0, 0), 4); // Adds the point (1, 0, 0) with weight_scale 4 and id 1
 * 				
 * 
 * ```
 * 
 * If there already exists a point for the given `id`, its position and weight scale are updated to the given values.
 * @param id int
 * @param position Vector3
 * @param weightScale float (optional, default: 1.0)
 */
  addPoint(id: int, position: Vector3, weightScale?: float): void;
/**
 * Returns whether the two given points are directly connected by a segment. If `bidirectional` is `false`, returns whether movement from `id` to `to_id` is possible through this segment.
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
 * Note that this function is hidden in the default `AStar3D` class.
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
 * 				var astar = AStar3D.new()
 * 				astar.add_point(1, Vector3(1, 1, 0))
 * 				astar.add_point(2, Vector3(0, 5, 0))
 * 				astar.connect_points(1, 2, false)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar3D();
 * 				astar.AddPoint(1, new Vector3(1, 1, 0));
 * 				astar.AddPoint(2, new Vector3(0, 5, 0));
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
 * Note that this function is hidden in the default `AStar3D` class.
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
 * @param toPosition Vector3
 * @param includeDisabled boolean (optional, default: false)
 * @returns int
 */
  getClosestPoint(toPosition: Vector3, includeDisabled?: boolean): int;
/**
 * Returns the closest position to `to_position` that resides inside a segment between two connected points.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar3D.new()
 * 				astar.add_point(1, Vector3(0, 0, 0))
 * 				astar.add_point(2, Vector3(0, 5, 0))
 * 				astar.connect_points(1, 2)
 * 				var res = astar.get_closest_position_in_segment(Vector3(3, 3, 0)) # Returns (0, 3, 0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var astar = new AStar3D();
 * 				astar.AddPoint(1, new Vector3(0, 0, 0));
 * 				astar.AddPoint(2, new Vector3(0, 5, 0));
 * 				astar.ConnectPoints(1, 2);
 * 				Vector3 res = astar.GetClosestPositionInSegment(new Vector3(3, 3, 0)); // Returns (0, 3, 0)
 * 				
 * 
 * ```
 * 
 * The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.
 * @param toPosition Vector3
 * @returns Vector3
 */
  getClosestPositionInSegment(toPosition: Vector3): Vector3;
/**
 * Returns an array with the IDs of the points that form the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.
 * If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.
 * 
 * **Note:** When `allow_partial_path` is `true` and `to_id` is disabled the search may take an unusually long time to finish.
 * 
 * 				```gdscript
 * 
 * 				var astar = AStar3D.new()
 * 				astar.add_point(1, Vector3(0, 0, 0))
 * 				astar.add_point(2, Vector3(0, 1, 0), 1) # Default weight is 1
 * 				astar.add_point(3, Vector3(1, 1, 0))
 * 				astar.add_point(4, Vector3(2, 0, 0))
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
 * 				var astar = new AStar3D();
 * 				astar.AddPoint(1, new Vector3(0, 0, 0));
 * 				astar.AddPoint(2, new Vector3(0, 1, 0), 1); // Default weight is 1
 * 				astar.AddPoint(3, new Vector3(1, 1, 0));
 * 				astar.AddPoint(4, new Vector3(2, 0, 0));
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
 * 				var astar = AStar3D.new()
 * 				astar.add_point(1, Vector3(0, 0, 0))
 * 				astar.add_point(2, Vector3(0, 1, 0))
 * 				astar.add_point(3, Vector3(1, 1, 0))
 * 				astar.add_point(4, Vector3(2, 0, 0))
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
 * 				var astar = new AStar3D();
 * 				astar.AddPoint(1, new Vector3(0, 0, 0));
 * 				astar.AddPoint(2, new Vector3(0, 1, 0));
 * 				astar.AddPoint(3, new Vector3(1, 1, 0));
 * 				astar.AddPoint(4, new Vector3(2, 0, 0));
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
 * Returns an array with the points that are in the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.
 * If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.
 * 
 * **Note:** This method is not thread-safe. If called from a `Thread`, it will return an empty array and will print an error message.
 * Additionally, when `allow_partial_path` is `true` and `to_id` is disabled the search may take an unusually long time to finish.
 * @param fromId int
 * @param toId int
 * @param allowPartialPath boolean (optional, default: false)
 * @returns PackedVector3Array
 */
  getPointPath(fromId: int, toId: int, allowPartialPath?: boolean): PackedVector3Array;
/**
 * Returns the position of the point associated with the given `id`.
 * @param id int
 * @returns Vector3
 */
  getPointPosition(id: int): Vector3;
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
 * Reserves space internally for `num_nodes` points. Useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity.
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
 * @param position Vector3
 */
  setPointPosition(id: int, position: Vector3): void;
/**
 * Sets the `weight_scale` for the point with the given `id`. The `weight_scale` is multiplied by the result of `_compute_cost` when determining the overall cost of traveling across a segment from a neighboring point to this point.
 * @param id int
 * @param weightScale float
 */
  setPointWeightScale(id: int, weightScale: float): void;
}
