import type { GodotArray, GodotDictionary, PackedInt32Array, PackedInt64Array, PackedVector2Array, RID, RefCounted, float, int } from "../index.d.ts";
/**
 * Represents the result of a 2D pathfinding query.
 * 
 * This class stores the result of a 2D navigation path query from the `NavigationServer2D`.
 */
export class NavigationPathQueryResult2D extends RefCounted {
/**
 * The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by `NavigationServer2D.map_get_path`.
 */
  path: PackedVector2Array;
/**
 * The `ObjectID`s of the `Object`s which manage the regions and links each point of the path goes through.
 */
  pathOwnerIds: PackedInt64Array;
/**
 * The `RID`s of the regions and links that each point of the path goes through.
 */
  pathRids: RID[];
/**
 * The type of navigation primitive (region or link) that each point of the path goes through.
 */
  pathTypes: PackedInt32Array;
/**
 * Reset the result object to its initial state. This is useful to reuse the object across multiple queries.
 */
  reset(): void;
/**
 * This segment of the path goes through a region.
 */
  static readonly PATH_SEGMENT_TYPE_REGION: int;
/**
 * This segment of the path goes through a link.
 */
  static readonly PATH_SEGMENT_TYPE_LINK: int;
}
