import type { GodotArray, GodotDictionary, Node2D, RID, Vector2, float, int } from "../index.d.ts";
/**
 * A link between two positions on `NavigationRegion2D`s that agents can be routed through.
 * 
 * A link between two positions on `NavigationRegion2D`s that agents can be routed through. These positions can be on the same `NavigationRegion2D` or on two different ones. Links are useful to express navigation methods other than traveling along the surface of the navigation polygon, such as ziplines, teleporters, or gaps that can be jumped across.
 */
export class NavigationLink2D extends Node2D {
/**
 * Whether this link can be traveled in both directions or only from `start_position` to `end_position`.
 */
  bidirectional: boolean;
/**
 * Whether this link is currently active. If `false`, `NavigationServer2D.map_get_path` will ignore this link.
 */
  enabled: boolean;
/**
 * Ending position of the link.
 * This position will search out the nearest polygon in the navigation mesh to attach to.
 * The distance the link will search is controlled by `NavigationServer2D.map_set_link_connection_radius`.
 */
  endPosition: Vector2;
/**
 * When pathfinding enters this link from another regions navigation mesh the `enter_cost` value is added to the path distance for determining the shortest path.
 */
  enterCost: float;
/**
 * A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with `NavigationServer2D.map_get_path`.
 */
  navigationLayers: int;
/**
 * Starting position of the link.
 * This position will search out the nearest polygon in the navigation mesh to attach to.
 * The distance the link will search is controlled by `NavigationServer2D.map_set_link_connection_radius`.
 */
  startPosition: Vector2;
/**
 * When pathfinding moves along the link the traveled distance is multiplied with `travel_cost` for determining the shortest path.
 */
  travelCost: float;
/**
 * Returns the `end_position` that is relative to the link as a global position.
 * @returns Vector2
 */
  getGlobalEndPosition(): Vector2;
/**
 * Returns the `start_position` that is relative to the link as a global position.
 * @returns Vector2
 */
  getGlobalStartPosition(): Vector2;
/**
 * Returns whether or not the specified layer of the `navigation_layers` bitmask is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getNavigationLayerValue(layerNumber: int): boolean;
/**
 * Returns the current navigation map `RID` used by this link.
 * @returns RID
 */
  getNavigationMap(): RID;
/**
 * Returns the `RID` of this link on the `NavigationServer2D`.
 * @returns RID
 */
  getRid(): RID;
/**
 * Sets the `end_position` that is relative to the link from a global `position`.
 * @param position Vector2
 */
  setGlobalEndPosition(position: Vector2): void;
/**
 * Sets the `start_position` that is relative to the link from a global `position`.
 * @param position Vector2
 */
  setGlobalStartPosition(position: Vector2): void;
/**
 * Based on `value`, enables or disables the specified layer in the `navigation_layers` bitmask, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setNavigationLayerValue(layerNumber: int, value: boolean): void;
/**
 * Sets the `RID` of the navigation map this link should use. By default the link will automatically join the `World2D` default navigation map so this function is only required to override the default map.
 * @param navigationMap RID
 */
  setNavigationMap(navigationMap: RID): void;
}
