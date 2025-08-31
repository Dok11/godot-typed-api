import type { AABB, GodotArray, GodotDictionary, NavigationMesh, Node3D, RID, Signal, float, int } from "../index.d.ts";
/**
 * A traversable 3D region that `NavigationAgent3D`s can use for pathfinding.
 * 
 * A traversable 3D region based on a `NavigationMesh` that `NavigationAgent3D`s can use for pathfinding.
 * Two regions can be connected to each other if they share a similar edge. You can set the minimum distance between two vertices required to connect two edges by using `NavigationServer3D.map_set_edge_connection_margin`.
 * 
 * **Note:** Overlapping two regions' navigation meshes is not enough for connecting two regions. They must share a similar edge.
 * The cost of entering this region from another region can be controlled with the `enter_cost` value.
 * 
 * **Note:** This value is not added to the path cost when the start position is already inside this region.
 * The cost of traveling distances inside this region can be controlled with the `travel_cost` multiplier.
 * 
 * **Note:** This node caches changes to its properties, so if you make changes to the underlying region `RID` in `NavigationServer3D`, they will not be reflected in this node's properties.
 */
export class NavigationRegion3D extends Node3D {
/**
 * Determines if the `NavigationRegion3D` is enabled or disabled.
 */
  enabled: boolean;
/**
 * When pathfinding enters this region's navigation mesh from another regions navigation mesh the `enter_cost` value is added to the path distance for determining the shortest path.
 */
  enterCost: float;
/**
 * A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with `NavigationServer3D.map_get_path`.
 */
  navigationLayers: int;
/**
 * The `NavigationMesh` resource to use.
 */
  navigationMesh: NavigationMesh;
/**
 * When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with `travel_cost` for determining the shortest path.
 */
  travelCost: float;
/**
 * If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.
 */
  useEdgeConnections: boolean;
/**
 * Bakes the `NavigationMesh`. If `on_thread` is set to `true` (default), the baking is done on a separate thread. Baking on separate thread is useful because navigation baking is not a cheap operation. When it is completed, it automatically sets the new `NavigationMesh`. Please note that baking on separate thread may be very slow if geometry is parsed from meshes as async access to each mesh involves heavy synchronization. Also, please note that baking on a separate thread is automatically disabled on operating systems that cannot use threads (such as Web with threads disabled).
 * @param onThread boolean (optional, default: true)
 */
  bakeNavigationMesh(onThread?: boolean): void;
/**
 * Returns the axis-aligned bounding box for the region's transformed navigation mesh.
 * @returns AABB
 */
  getBounds(): AABB;
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
 * Returns the `RID` of this region on the `NavigationServer3D`.
 * @returns RID
 * @deprecated Use `get_rid` instead.
 */
  getRegionRid(): RID;
/**
 * Returns the `RID` of this region on the `NavigationServer3D`. Combined with `NavigationServer3D.map_get_closest_point_owner` can be used to identify the `NavigationRegion3D` closest to a point on the merged navigation map.
 * @returns RID
 */
  getRid(): RID;
/**
 * Returns `true` when the `NavigationMesh` is being baked on a background thread.
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
 * Sets the `RID` of the navigation map this region should use. By default the region will automatically join the `World3D` default navigation map so this function is only required to override the default map.
 * @param navigationMap RID
 */
  setNavigationMap(navigationMap: RID): void;
/**
 * Notifies when the navigation mesh bake operation is completed.
 */
  bakeFinished: Signal<[]>;
/**
 * Notifies when the `NavigationMesh` has changed.
 */
  navigationMeshChanged: Signal<[]>;
}
