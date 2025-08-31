import type { GodotArray, GodotDictionary, NavigationPolygon, Node2D, RID, Rect2, Signal, float, int } from "../index.d.ts";
/**
 * A traversable 2D region that `NavigationAgent2D`s can use for pathfinding.
 * 
 * A traversable 2D region based on a `NavigationPolygon` that `NavigationAgent2D`s can use for pathfinding.
 * Two regions can be connected to each other if they share a similar edge. You can set the minimum distance between two vertices required to connect two edges by using `NavigationServer2D.map_set_edge_connection_margin`.
 * 
 * **Note:** Overlapping two regions' navigation polygons is not enough for connecting two regions. They must share a similar edge.
 * The pathfinding cost of entering a region from another region can be controlled with the `enter_cost` value.
 * 
 * **Note:** This value is not added to the path cost when the start position is already inside this region.
 * The pathfinding cost of traveling distances inside this region can be controlled with the `travel_cost` multiplier.
 * 
 * **Note:** This node caches changes to its properties, so if you make changes to the underlying region `RID` in `NavigationServer2D`, they will not be reflected in this node's properties.
 */
export class NavigationRegion2D extends Node2D {
/**
 * Determines if the `NavigationRegion2D` is enabled or disabled.
 */
  enabled: boolean;
/**
 * When pathfinding enters this region's navigation mesh from another regions navigation mesh the `enter_cost` value is added to the path distance for determining the shortest path.
 */
  enterCost: float;
/**
 * A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with `NavigationServer2D.map_get_path`.
 */
  navigationLayers: int;
/**
 * The `NavigationPolygon` resource to use.
 */
  navigationPolygon: NavigationPolygon;
/**
 * When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with `travel_cost` for determining the shortest path.
 */
  travelCost: float;
/**
 * If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.
 */
  useEdgeConnections: boolean;
/**
 * Bakes the `NavigationPolygon`. If `on_thread` is set to `true` (default), the baking is done on a separate thread.
 * @param onThread boolean (optional, default: true)
 */
  bakeNavigationPolygon(onThread?: boolean): void;
/**
 * Returns the axis-aligned rectangle for the region's transformed navigation mesh.
 * @returns Rect2
 */
  getBounds(): Rect2;
/**
 * Returns whether or not the specified layer of the `navigation_layers` bitmask is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getNavigationLayerValue(layerNumber: int): boolean;
/**
 * Returns the current navigation map `RID` used by this region.
 * @returns RID
 */
  getNavigationMap(): RID;
/**
 * Returns the `RID` of this region on the `NavigationServer2D`.
 * @returns RID
 * @deprecated Use `get_rid` instead.
 */
  getRegionRid(): RID;
/**
 * Returns the `RID` of this region on the `NavigationServer2D`. Combined with `NavigationServer2D.map_get_closest_point_owner` can be used to identify the `NavigationRegion2D` closest to a point on the merged navigation map.
 * @returns RID
 */
  getRid(): RID;
/**
 * Returns `true` when the `NavigationPolygon` is being baked on a background thread.
 * @returns boolean
 */
  isBaking(): boolean;
/**
 * Based on `value`, enables or disables the specified layer in the `navigation_layers` bitmask, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setNavigationLayerValue(layerNumber: int, value: boolean): void;
/**
 * Sets the `RID` of the navigation map this region should use. By default the region will automatically join the `World2D` default navigation map so this function is only required to override the default map.
 * @param navigationMap RID
 */
  setNavigationMap(navigationMap: RID): void;
/**
 * Emitted when a navigation polygon bake operation is completed.
 */
  bakeFinished: Signal<[]>;
/**
 * Emitted when the used navigation polygon is replaced or changes to the internals of the current navigation polygon are committed.
 */
  navigationPolygonChanged: Signal<[]>;
}
