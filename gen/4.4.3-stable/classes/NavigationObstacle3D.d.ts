import type { GodotArray, GodotDictionary, Node3D, PackedVector3Array, RID, Vector3, float, int } from "../index.d.ts";
/**
 * 3D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.
 * 
 * An obstacle needs a navigation map and outline `vertices` defined to work correctly. The outlines can not cross or overlap and are restricted to a plane projection. This means the y-axis of the vertices is ignored, instead the obstacle's global y-axis position is used for placement. The projected shape is extruded by the obstacles height along the y-axis.
 * Obstacles can be included in the navigation mesh baking process when `affect_navigation_mesh` is enabled. They do not add walkable geometry, instead their role is to discard other source geometry inside the shape. This can be used to prevent navigation mesh from appearing in unwanted places, e.g. inside "solid" geometry or on top of it. If `carve_navigation_mesh` is enabled the baked shape will not be affected by offsets of the navigation mesh baking, e.g. the agent radius.
 * With `avoidance_enabled` the obstacle can constrain the avoidance velocities of avoidance using agents. If the obstacle's vertices are wound in clockwise order, avoidance agents will be pushed in by the obstacle, otherwise, avoidance agents will be pushed out. Obstacles using vertices and avoidance can warp to a new position but should not be moved every single frame as each change requires a rebuild of the avoidance map.
 */
export class NavigationObstacle3D extends Node3D {
/**
 * If enabled and parsed in a navigation mesh baking process the obstacle will discard source geometry inside its `vertices` and `height` defined shape.
 */
  affectNavigationMesh: boolean;
/**
 * If `true` the obstacle affects avoidance using agents.
 */
  avoidanceEnabled: boolean;
/**
 * A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle.
 */
  avoidanceLayers: int;
/**
 * If enabled the obstacle vertices will carve into the baked navigation mesh with the shape unaffected by additional offsets (e.g. agent radius).
 * It will still be affected by further postprocessing of the baking process, like edge and polygon simplification.
 * Requires `affect_navigation_mesh` to be enabled.
 */
  carveNavigationMesh: boolean;
/**
 * Sets the obstacle height used in 2D avoidance. 2D avoidance using agent's ignore obstacles that are below or above them.
 */
  height: float;
/**
 * Sets the avoidance radius for the obstacle.
 */
  radius: float;
/**
 * If `true` the obstacle affects 3D avoidance using agent's with obstacle `radius`.
 * If `false` the obstacle affects 2D avoidance using agent's with both obstacle `vertices` as well as obstacle `radius`.
 */
  use3dAvoidance: boolean;
/**
 * Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles `radius`. Does nothing for the obstacles static vertices.
 */
  velocity: Vector3;
/**
 * The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle.
 */
  vertices: PackedVector3Array;
/**
 * Returns whether or not the specified layer of the `avoidance_layers` bitmask is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getAvoidanceLayerValue(layerNumber: int): boolean;
/**
 * Returns the `RID` of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use `set_navigation_map` to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer.
 * @returns RID
 */
  getNavigationMap(): RID;
/**
 * Returns the `RID` of this obstacle on the `NavigationServer3D`.
 * @returns RID
 */
  getRid(): RID;
/**
 * Based on `value`, enables or disables the specified layer in the `avoidance_layers` bitmask, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setAvoidanceLayerValue(layerNumber: int, value: boolean): void;
/**
 * Sets the `RID` of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer.
 * @param navigationMap RID
 */
  setNavigationMap(navigationMap: RID): void;
}
