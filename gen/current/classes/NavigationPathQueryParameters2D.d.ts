import type { GodotArray, GodotDictionary, RID, RefCounted, Vector2, float, int } from "../index.d.ts";
/**
 * Provides parameters for 2D navigation path queries.
 * 
 * By changing various properties of this object, such as the start and target position, you can configure path queries to the `NavigationServer2D`.
 */
export class NavigationPathQueryParameters2D extends RefCounted {
/**
 * The navigation map `RID` used in the path query.
 */
  map: RID;
/**
 * Additional information to include with the navigation path.
 */
  metadataFlags: int;
/**
 * The navigation layers the query will use (as a bitmask).
 */
  navigationLayers: int;
/**
 * The pathfinding algorithm used in the path query.
 */
  pathfindingAlgorithm: int;
/**
 * The path postprocessing applied to the raw path corridor found by the `pathfinding_algorithm`.
 */
  pathPostprocessing: int;
/**
 * The path simplification amount in worlds units.
 */
  simplifyEpsilon: float;
/**
 * If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by `simplify_epsilon`. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.
 * Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".
 */
  simplifyPath: boolean;
/**
 * The pathfinding start position in global coordinates.
 */
  startPosition: Vector2;
/**
 * The pathfinding target position in global coordinates.
 */
  targetPosition: Vector2;
/**
 * The path query uses the default A* pathfinding algorithm.
 */
  static readonly PATHFINDING_ALGORITHM_ASTAR: int;
/**
 * Applies a funnel algorithm to the raw path corridor found by the pathfinding algorithm. This will result in the shortest path possible inside the path corridor. This postprocessing very much depends on the navigation mesh polygon layout and the created corridor. Especially tile- or gridbased layouts can face artificial corners with diagonal movement due to a jagged path corridor imposed by the cell shapes.
 */
  static readonly PATH_POSTPROCESSING_CORRIDORFUNNEL: int;
/**
 * Centers every path position in the middle of the traveled navigation mesh polygon edge. This creates better paths for tile- or gridbased layouts that restrict the movement to the cells center.
 */
  static readonly PATH_POSTPROCESSING_EDGECENTERED: int;
/**
 * Applies no postprocessing and returns the raw path corridor as found by the pathfinding algorithm.
 */
  static readonly PATH_POSTPROCESSING_NONE: int;
/**
 * Don't include any additional metadata about the returned path.
 */
  static readonly PATH_METADATA_INCLUDE_NONE: int;
/**
 * Include the type of navigation primitive (region or link) that each point of the path goes through.
 */
  static readonly PATH_METADATA_INCLUDE_TYPES: int;
/**
 * Include the `RID`s of the regions and links that each point of the path goes through.
 */
  static readonly PATH_METADATA_INCLUDE_RIDS: int;
/**
 * Include the `ObjectID`s of the `Object`s which manage the regions and links each point of the path goes through.
 */
  static readonly PATH_METADATA_INCLUDE_OWNERS: int;
/**
 * Include all available metadata about the returned path.
 */
  static readonly PATH_METADATA_INCLUDE_ALL: int;
}
