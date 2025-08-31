import type { Dictionary, GodotArray, GodotDictionary, PackedVector2Array, Rect2i, RefCounted, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * An implementation of A* for finding the shortest path between two points on a partial 2D grid.
 * 
 * `AStarGrid2D` is a variant of `AStar2D` that is specialized for partial 2D grids. It is simpler to use because it doesn't require you to manually create points and connect them together. This class also supports multiple types of heuristics, modes for diagonal movement, and a jumping mode to speed up calculations.
 * To use `AStarGrid2D`, you only need to set the `region` of the grid, optionally set the `cell_size`, and then call the `update` method:
 * 
 * 		```gdscript
 * 
 * 		var astar_grid = AStarGrid2D.new()
 * 		astar_grid.region = Rect2i(0, 0, 32, 32)
 * 		astar_grid.cell_size = Vector2(16, 16)
 * 		astar_grid.update()
 * 		print(astar_grid.get_id_path(Vector2i(0, 0), Vector2i(3, 4))) # Prints [(0, 0), (1, 1), (2, 2), (3, 3), (3, 4)]
 * 		print(astar_grid.get_point_path(Vector2i(0, 0), Vector2i(3, 4))) # Prints [(0, 0), (16, 16), (32, 32), (48, 48), (48, 64)]
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		AStarGrid2D astarGrid = new AStarGrid2D();
 * 		astarGrid.Region = new Rect2I(0, 0, 32, 32);
 * 		astarGrid.CellSize = new Vector2I(16, 16);
 * 		astarGrid.Update();
 * 		GD.Print(astarGrid.GetIdPath(Vector2I.Zero, new Vector2I(3, 4))); // Prints [(0, 0), (1, 1), (2, 2), (3, 3), (3, 4)]
 * 		GD.Print(astarGrid.GetPointPath(Vector2I.Zero, new Vector2I(3, 4))); // Prints [(0, 0), (16, 16), (32, 32), (48, 48), (48, 64)]
 * 		
 * 
 * ```
 * 
 * To remove a point from the pathfinding grid, it must be set as "solid" with `set_point_solid`.
 */
export class AStarGrid2D extends RefCounted {
/**
 * The cell shape. Affects how the positions are placed in the grid. If changed, `update` needs to be called before finding the next path.
 */
  cellShape: int;
/**
 * The size of the point cell which will be applied to calculate the resulting point position returned by `get_point_path`. If changed, `update` needs to be called before finding the next path.
 */
  cellSize: Vector2;
/**
 * The default `Heuristic` which will be used to calculate the cost between two points if `_compute_cost` was not overridden.
 */
  defaultComputeHeuristic: int;
/**
 * The default `Heuristic` which will be used to calculate the cost between the point and the end point if `_estimate_cost` was not overridden.
 */
  defaultEstimateHeuristic: int;
/**
 * A specific `DiagonalMode` mode which will force the path to avoid or accept the specified diagonals.
 */
  diagonalMode: int;
/**
 * Enables or disables jumping to skip up the intermediate points and speeds up the searching algorithm.
 * 
 * **Note:** Currently, toggling it on disables the consideration of weight scaling in pathfinding.
 */
  jumpingEnabled: boolean;
/**
 * The offset of the grid which will be applied to calculate the resulting point position returned by `get_point_path`. If changed, `update` needs to be called before finding the next path.
 */
  offset: Vector2;
/**
 * The region of grid cells available for pathfinding. If changed, `update` needs to be called before finding the next path.
 */
  region: Rect2i;
/**
 * The size of the grid (number of cells of size `cell_size` on each axis). If changed, `update` needs to be called before finding the next path.
 * @deprecated Use `region` instead.
 */
  size: Vector2i;
/**
 * Clears the grid and sets the `region` to `Rect2i(0, 0, 0, 0)`.
 */
  clear(): void;
/**
 * Called when computing the cost between two connected points.
 * Note that this function is hidden in the default `AStarGrid2D` class.
 * @param fromId Vector2i
 * @param toId Vector2i
 * @returns float
 */
  private computeCost(fromId: Vector2i, toId: Vector2i): float;
/**
 * Called when estimating the cost between a point and the path's ending point.
 * Note that this function is hidden in the default `AStarGrid2D` class.
 * @param fromId Vector2i
 * @param endId Vector2i
 * @returns float
 */
  private estimateCost(fromId: Vector2i, endId: Vector2i): float;
/**
 * Fills the given `region` on the grid with the specified value for the solid flag.
 * 
 * **Note:** Calling `update` is not needed after the call of this function.
 * @param region Rect2i
 * @param solid boolean (optional, default: true)
 */
  fillSolidRegion(region: Rect2i, solid?: boolean): void;
/**
 * Fills the given `region` on the grid with the specified value for the weight scale.
 * 
 * **Note:** Calling `update` is not needed after the call of this function.
 * @param region Rect2i
 * @param weightScale float
 */
  fillWeightScaleRegion(region: Rect2i, weightScale: float): void;
/**
 * Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.
 * If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.
 * 
 * **Note:** When `allow_partial_path` is `true` and `to_id` is solid the search may take an unusually long time to finish.
 * @param fromId Vector2i
 * @param toId Vector2i
 * @param allowPartialPath boolean (optional, default: false)
 * @returns Vector2i[]
 */
  getIdPath(fromId: Vector2i, toId: Vector2i, allowPartialPath?: boolean): Vector2i[];
/**
 * Returns an array of dictionaries with point data (`id`: `Vector2i`, `position`: `Vector2`, `solid`: [bool], `weight_scale`: [float]) within a `region`.
 * @param region Rect2i
 * @returns Dictionary[]
 */
  getPointDataInRegion(region: Rect2i): Dictionary[];
/**
 * Returns an array with the points that are in the path found by `AStarGrid2D` between the given points. The array is ordered from the starting point to the ending point of the path.
 * If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.
 * 
 * **Note:** This method is not thread-safe. If called from a `Thread`, it will return an empty array and will print an error message.
 * Additionally, when `allow_partial_path` is `true` and `to_id` is solid the search may take an unusually long time to finish.
 * @param fromId Vector2i
 * @param toId Vector2i
 * @param allowPartialPath boolean (optional, default: false)
 * @returns PackedVector2Array
 */
  getPointPath(fromId: Vector2i, toId: Vector2i, allowPartialPath?: boolean): PackedVector2Array;
/**
 * Returns the position of the point associated with the given `id`.
 * @param id Vector2i
 * @returns Vector2
 */
  getPointPosition(id: Vector2i): Vector2;
/**
 * Returns the weight scale of the point associated with the given `id`.
 * @param id Vector2i
 * @returns float
 */
  getPointWeightScale(id: Vector2i): float;
/**
 * Indicates that the grid parameters were changed and `update` needs to be called.
 * @returns boolean
 */
  isDirty(): boolean;
/**
 * Returns `true` if the `x` and `y` is a valid grid coordinate (id), i.e. if it is inside `region`. Equivalent to `region.has_point(Vector2i(x, y))`.
 * @param x int
 * @param y int
 * @returns boolean
 */
  isInBounds(x: int, y: int): boolean;
/**
 * Returns `true` if the `id` vector is a valid grid coordinate, i.e. if it is inside `region`. Equivalent to `region.has_point(id)`.
 * @param id Vector2i
 * @returns boolean
 */
  isInBoundsv(id: Vector2i): boolean;
/**
 * Returns `true` if a point is disabled for pathfinding. By default, all points are enabled.
 * @param id Vector2i
 * @returns boolean
 */
  isPointSolid(id: Vector2i): boolean;
/**
 * Disables or enables the specified point for pathfinding. Useful for making an obstacle. By default, all points are enabled.
 * 
 * **Note:** Calling `update` is not needed after the call of this function.
 * @param id Vector2i
 * @param solid boolean (optional, default: true)
 */
  setPointSolid(id: Vector2i, solid?: boolean): void;
/**
 * Sets the `weight_scale` for the point with the given `id`. The `weight_scale` is multiplied by the result of `_compute_cost` when determining the overall cost of traveling across a segment from a neighboring point to this point.
 * 
 * **Note:** Calling `update` is not needed after the call of this function.
 * @param id Vector2i
 * @param weightScale float
 */
  setPointWeightScale(id: Vector2i, weightScale: float): void;
/**
 * Updates the internal state of the grid according to the parameters to prepare it to search the path. Needs to be called if parameters like `region`, `cell_size` or `offset` are changed. `is_dirty` will return `true` if this is the case and this needs to be called.
 * 
 * **Note:** All point data (solidity and weight scale) will be cleared.
 */
  update(): void;
/**
 * The Euclidean heuristic (https://en.wikipedia.org/wiki/Euclidean_distance) to be used for the pathfinding using the following formula:
 * 
 * 			```gdscript
 * 
 * 			dx = abs(to_id.x - from_id.x)
 * 			dy = abs(to_id.y - from_id.y)
 * 			result = sqrt(dx * dx + dy * dy)
 * 			
 * 
 * ```
 * 
 * **Note:** This is also the internal heuristic used in `AStar3D` and `AStar2D` by default (with the inclusion of possible z-axis coordinate).
 */
  static readonly HEURISTIC_EUCLIDEAN: int;
/**
 * The Manhattan heuristic (https://en.wikipedia.org/wiki/Taxicab_geometry) to be used for the pathfinding using the following formula:
 * 
 * 			```gdscript
 * 
 * 			dx = abs(to_id.x - from_id.x)
 * 			dy = abs(to_id.y - from_id.y)
 * 			result = dx + dy
 * 			
 * 
 * ```
 * 
 * **Note:** This heuristic is intended to be used with 4-side orthogonal movements, provided by setting the `diagonal_mode` to `DIAGONAL_MODE_NEVER`.
 */
  static readonly HEURISTIC_MANHATTAN: int;
/**
 * The Octile heuristic to be used for the pathfinding using the following formula:
 * 
 * 			```gdscript
 * 
 * 			dx = abs(to_id.x - from_id.x)
 * 			dy = abs(to_id.y - from_id.y)
 * 			f = sqrt(2) - 1
 * 			result = (dx < dy) ? f * dx + dy : f * dy + dx;
 * 			
 * 
 * ```
 */
  static readonly HEURISTIC_OCTILE: int;
/**
 * The Chebyshev heuristic (https://en.wikipedia.org/wiki/Chebyshev_distance) to be used for the pathfinding using the following formula:
 * 
 * 			```gdscript
 * 
 * 			dx = abs(to_id.x - from_id.x)
 * 			dy = abs(to_id.y - from_id.y)
 * 			result = max(dx, dy)
 * 			
 * 
 * ```
 */
  static readonly HEURISTIC_CHEBYSHEV: int;
/**
 * Represents the size of the `Heuristic` enum.
 */
  static readonly HEURISTIC_MAX: int;
/**
 * The pathfinding algorithm will ignore solid neighbors around the target cell and allow passing using diagonals.
 */
  static readonly DIAGONAL_MODE_ALWAYS: int;
/**
 * The pathfinding algorithm will ignore all diagonals and the way will be always orthogonal.
 */
  static readonly DIAGONAL_MODE_NEVER: int;
/**
 * The pathfinding algorithm will avoid using diagonals if at least two obstacles have been placed around the neighboring cells of the specific path segment.
 */
  static readonly DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE: int;
/**
 * The pathfinding algorithm will avoid using diagonals if any obstacle has been placed around the neighboring cells of the specific path segment.
 */
  static readonly DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES: int;
/**
 * Represents the size of the `DiagonalMode` enum.
 */
  static readonly DIAGONAL_MODE_MAX: int;
/**
 * Rectangular cell shape.
 */
  static readonly CELL_SHAPE_SQUARE: int;
/**
 * Diamond cell shape (for isometric look). Cell coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right.
 */
  static readonly CELL_SHAPE_ISOMETRIC_RIGHT: int;
/**
 * Diamond cell shape (for isometric look). Cell coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left.
 */
  static readonly CELL_SHAPE_ISOMETRIC_DOWN: int;
/**
 * Represents the size of the `CellShape` enum.
 */
  static readonly CELL_SHAPE_MAX: int;
}
