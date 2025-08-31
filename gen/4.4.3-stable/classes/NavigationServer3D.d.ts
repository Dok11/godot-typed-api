import type { AABB, Callable, GodotArray, GodotDictionary, NavigationMesh, NavigationMeshSourceGeometryData3D, NavigationPathQueryParameters3D, NavigationPathQueryResult3D, Node, Object, PackedVector3Array, RID, Signal, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * A server interface for low-level 3D navigation access.
 * 
 * NavigationServer3D is the server that handles navigation maps, regions and agents. It does not handle A* navigation from `AStar3D`.
 * Maps are divided into regions, which are composed of navigation meshes. Together, they define the navigable areas in the 3D world.
 * 
 * **Note:** Most `NavigationServer3D` changes take effect after the next physics frame and not immediately. This includes all changes made to maps, regions or agents by navigation-related nodes in the scene tree or made through scripts.
 * For two regions to be connected to each other, they must share a similar edge. An edge is considered connected to another if both of its two vertices are at a distance less than `edge_connection_margin` to the respective other edge's vertex.
 * You may assign navigation layers to regions with `NavigationServer3D.region_set_navigation_layers`, which then can be checked upon when requesting a path with `NavigationServer3D.map_get_path`. This can be used to allow or deny certain areas for some objects.
 * To use the collision avoidance system, you may use agents. You can set an agent's target velocity, then the servers will emit a callback with a modified velocity.
 * 
 * **Note:** The collision avoidance system ignores regions. Using the modified velocity directly may move an agent outside of the traversable area. This is a limitation of the collision avoidance system, any more complex situation may require the use of the physics engine.
 * This server keeps tracks of any call and executes them during the sync phase. This means that you can request any change to the map, using any thread, without worrying.
 */
export class NavigationServer3D extends Object {
/**
 * Creates the agent.
 * @returns RID
 */
  agentCreate(): RID;
/**
 * Returns `true` if the provided `agent` has avoidance enabled.
 * @param agent RID
 * @returns boolean
 */
  agentGetAvoidanceEnabled(agent: RID): boolean;
/**
 * Returns the `avoidance_layers` bitmask of the specified `agent`.
 * @param agent RID
 * @returns int
 */
  agentGetAvoidanceLayers(agent: RID): int;
/**
 * Returns the `avoidance_mask` bitmask of the specified `agent`.
 * @param agent RID
 * @returns int
 */
  agentGetAvoidanceMask(agent: RID): int;
/**
 * Returns the `avoidance_priority` of the specified `agent`.
 * @param agent RID
 * @returns float
 */
  agentGetAvoidancePriority(agent: RID): float;
/**
 * Returns the `height` of the specified `agent`.
 * @param agent RID
 * @returns float
 */
  agentGetHeight(agent: RID): float;
/**
 * Returns the navigation map `RID` the requested `agent` is currently assigned to.
 * @param agent RID
 * @returns RID
 */
  agentGetMap(agent: RID): RID;
/**
 * Returns the maximum number of other agents the specified `agent` takes into account in the navigation.
 * @param agent RID
 * @returns int
 */
  agentGetMaxNeighbors(agent: RID): int;
/**
 * Returns the maximum speed of the specified `agent`.
 * @param agent RID
 * @returns float
 */
  agentGetMaxSpeed(agent: RID): float;
/**
 * Returns the maximum distance to other agents the specified `agent` takes into account in the navigation.
 * @param agent RID
 * @returns float
 */
  agentGetNeighborDistance(agent: RID): float;
/**
 * Returns `true` if the specified `agent` is paused.
 * @param agent RID
 * @returns boolean
 */
  agentGetPaused(agent: RID): boolean;
/**
 * Returns the position of the specified `agent` in world space.
 * @param agent RID
 * @returns Vector3
 */
  agentGetPosition(agent: RID): Vector3;
/**
 * Returns the radius of the specified `agent`.
 * @param agent RID
 * @returns float
 */
  agentGetRadius(agent: RID): float;
/**
 * Returns the minimal amount of time for which the specified `agent`'s velocities that are computed by the simulation are safe with respect to other agents.
 * @param agent RID
 * @returns float
 */
  agentGetTimeHorizonAgents(agent: RID): float;
/**
 * Returns the minimal amount of time for which the specified `agent`'s velocities that are computed by the simulation are safe with respect to static avoidance obstacles.
 * @param agent RID
 * @returns float
 */
  agentGetTimeHorizonObstacles(agent: RID): float;
/**
 * Returns `true` if the provided `agent` uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z).
 * @param agent RID
 * @returns boolean
 */
  agentGetUse3dAvoidance(agent: RID): boolean;
/**
 * Returns the velocity of the specified `agent`.
 * @param agent RID
 * @returns Vector3
 */
  agentGetVelocity(agent: RID): Vector3;
/**
 * Return `true` if the specified `agent` has an avoidance callback.
 * @param agent RID
 * @returns boolean
 */
  agentHasAvoidanceCallback(agent: RID): boolean;
/**
 * Returns `true` if the map got changed the previous frame.
 * @param agent RID
 * @returns boolean
 */
  agentIsMapChanged(agent: RID): boolean;
/**
 * Sets the callback `Callable` that gets called after each avoidance processing step for the `agent`. The calculated `safe_velocity` will be dispatched with a signal to the object just before the physics calculations.
 * 
 * **Note:** Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use `agent_set_avoidance_callback` again with an empty `Callable`.
 * @param agent RID
 * @param callback Callable
 */
  agentSetAvoidanceCallback(agent: RID, callback: Callable): void;
/**
 * If `enabled` is `true`, the provided `agent` calculates avoidance.
 * @param agent RID
 * @param enabled boolean
 */
  agentSetAvoidanceEnabled(agent: RID, enabled: boolean): void;
/**
 * Set the agent's `avoidance_layers` bitmask.
 * @param agent RID
 * @param layers int
 */
  agentSetAvoidanceLayers(agent: RID, layers: int): void;
/**
 * Set the agent's `avoidance_mask` bitmask.
 * @param agent RID
 * @param mask int
 */
  agentSetAvoidanceMask(agent: RID, mask: int): void;
/**
 * Set the agent's `avoidance_priority` with a `priority` between 0.0 (lowest priority) to 1.0 (highest priority).
 * The specified `agent` does not adjust the velocity for other agents that would match the `avoidance_mask` but have a lower `avoidance_priority`. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.
 * @param agent RID
 * @param priority float
 */
  agentSetAvoidancePriority(agent: RID, priority: float): void;
/**
 * Updates the provided `agent` `height`.
 * @param agent RID
 * @param height float
 */
  agentSetHeight(agent: RID, height: float): void;
/**
 * Puts the agent in the map.
 * @param agent RID
 * @param map RID
 */
  agentSetMap(agent: RID, map: RID): void;
/**
 * Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe.
 * @param agent RID
 * @param count int
 */
  agentSetMaxNeighbors(agent: RID, count: int): void;
/**
 * Sets the maximum speed of the agent. Must be positive.
 * @param agent RID
 * @param maxSpeed float
 */
  agentSetMaxSpeed(agent: RID, maxSpeed: float): void;
/**
 * Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe.
 * @param agent RID
 * @param distance float
 */
  agentSetNeighborDistance(agent: RID, distance: float): void;
/**
 * If `paused` is `true` the specified `agent` will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks.
 * @param agent RID
 * @param paused boolean
 */
  agentSetPaused(agent: RID, paused: boolean): void;
/**
 * Sets the position of the agent in world space.
 * @param agent RID
 * @param position Vector3
 */
  agentSetPosition(agent: RID, position: Vector3): void;
/**
 * Sets the radius of the agent.
 * @param agent RID
 * @param radius float
 */
  agentSetRadius(agent: RID, radius: float): void;
/**
 * The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive.
 * @param agent RID
 * @param timeHorizon float
 */
  agentSetTimeHorizonAgents(agent: RID, timeHorizon: float): void;
/**
 * The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive.
 * @param agent RID
 * @param timeHorizon float
 */
  agentSetTimeHorizonObstacles(agent: RID, timeHorizon: float): void;
/**
 * Sets if the agent uses the 2D avoidance or the 3D avoidance while avoidance is enabled.
 * If `true` the agent calculates avoidance velocities in 3D for the xyz-axis, e.g. for games that take place in air, underwater or space. The 3D using agent only avoids other 3D avoidance using agent's. The 3D using agent only reacts to radius based avoidance obstacles. The 3D using agent ignores any vertices based obstacles. The 3D using agent only avoids other 3D using agent's.
 * If `false` the agent calculates avoidance velocities in 2D along the xz-axis ignoring the y-axis. The 2D using agent only avoids other 2D avoidance using agent's. The 2D using agent reacts to radius avoidance obstacles. The 2D using agent reacts to vertices based avoidance obstacles. The 2D using agent only avoids other 2D using agent's. 2D using agents will ignore other 2D using agents or obstacles that are below their current position or above their current position including the agents height in 2D avoidance.
 * @param agent RID
 * @param enabled boolean
 */
  agentSetUse3dAvoidance(agent: RID, enabled: boolean): void;
/**
 * Sets `velocity` as the new wanted velocity for the specified `agent`. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position use `agent_set_velocity_forced` as well to reset the internal simulation velocity.
 * @param agent RID
 * @param velocity Vector3
 */
  agentSetVelocity(agent: RID, velocity: Vector3): void;
/**
 * Replaces the internal velocity in the collision avoidance simulation with `velocity` for the specified `agent`. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck.
 * @param agent RID
 * @param velocity Vector3
 */
  agentSetVelocityForced(agent: RID, velocity: Vector3): void;
/**
 * Bakes the provided `navigation_mesh` with the data from the provided `source_geometry_data`. After the process is finished the optional `callback` will be called.
 * @param navigationMesh NavigationMesh
 * @param sourceGeometryData NavigationMeshSourceGeometryData3D
 * @param callback Callable (optional, default: Callable())
 */
  bakeFromSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback?: Callable): void;
/**
 * Bakes the provided `navigation_mesh` with the data from the provided `source_geometry_data` as an async task running on a background thread. After the process is finished the optional `callback` will be called.
 * @param navigationMesh NavigationMesh
 * @param sourceGeometryData NavigationMeshSourceGeometryData3D
 * @param callback Callable (optional, default: Callable())
 */
  bakeFromSourceGeometryDataAsync(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback?: Callable): void;
/**
 * Destroys the given RID.
 * @param rid RID
 */
  freeRid(rid: RID): void;
/**
 * Returns `true` when the NavigationServer has debug enabled.
 * @returns boolean
 */
  getDebugEnabled(): boolean;
/**
 * Returns all created navigation map `RID`s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them.
 * @returns RID[]
 */
  getMaps(): RID[];
/**
 * Returns information about the current state of the NavigationServer. See `ProcessInfo` for a list of available states.
 * @param processInfo int
 * @returns int
 */
  getProcessInfo(processInfo: int): int;
/**
 * Returns `true` when the provided navigation mesh is being baked on a background thread.
 * @param navigationMesh NavigationMesh
 * @returns boolean
 */
  isBakingNavigationMesh(navigationMesh: NavigationMesh): boolean;
/**
 * Create a new link between two positions on a map.
 * @returns RID
 */
  linkCreate(): RID;
/**
 * Returns `true` if the specified `link` is enabled.
 * @param link RID
 * @returns boolean
 */
  linkGetEnabled(link: RID): boolean;
/**
 * Returns the ending position of this `link`.
 * @param link RID
 * @returns Vector3
 */
  linkGetEndPosition(link: RID): Vector3;
/**
 * Returns the enter cost of this `link`.
 * @param link RID
 * @returns float
 */
  linkGetEnterCost(link: RID): float;
/**
 * Returns the navigation map `RID` the requested `link` is currently assigned to.
 * @param link RID
 * @returns RID
 */
  linkGetMap(link: RID): RID;
/**
 * Returns the navigation layers for this `link`.
 * @param link RID
 * @returns int
 */
  linkGetNavigationLayers(link: RID): int;
/**
 * Returns the `ObjectID` of the object which manages this link.
 * @param link RID
 * @returns int
 */
  linkGetOwnerId(link: RID): int;
/**
 * Returns the starting position of this `link`.
 * @param link RID
 * @returns Vector3
 */
  linkGetStartPosition(link: RID): Vector3;
/**
 * Returns the travel cost of this `link`.
 * @param link RID
 * @returns float
 */
  linkGetTravelCost(link: RID): float;
/**
 * Returns whether this `link` can be travelled in both directions.
 * @param link RID
 * @returns boolean
 */
  linkIsBidirectional(link: RID): boolean;
/**
 * Sets whether this `link` can be travelled in both directions.
 * @param link RID
 * @param bidirectional boolean
 */
  linkSetBidirectional(link: RID, bidirectional: boolean): void;
/**
 * If `enabled` is `true`, the specified `link` will contribute to its current navigation map.
 * @param link RID
 * @param enabled boolean
 */
  linkSetEnabled(link: RID, enabled: boolean): void;
/**
 * Sets the exit position for the `link`.
 * @param link RID
 * @param position Vector3
 */
  linkSetEndPosition(link: RID, position: Vector3): void;
/**
 * Sets the `enter_cost` for this `link`.
 * @param link RID
 * @param enterCost float
 */
  linkSetEnterCost(link: RID, enterCost: float): void;
/**
 * Sets the navigation map `RID` for the link.
 * @param link RID
 * @param map RID
 */
  linkSetMap(link: RID, map: RID): void;
/**
 * Set the links's navigation layers. This allows selecting links from a path request (when using `NavigationServer3D.map_get_path`).
 * @param link RID
 * @param navigationLayers int
 */
  linkSetNavigationLayers(link: RID, navigationLayers: int): void;
/**
 * Set the `ObjectID` of the object which manages this link.
 * @param link RID
 * @param ownerId int
 */
  linkSetOwnerId(link: RID, ownerId: int): void;
/**
 * Sets the entry position for this `link`.
 * @param link RID
 * @param position Vector3
 */
  linkSetStartPosition(link: RID, position: Vector3): void;
/**
 * Sets the `travel_cost` for this `link`.
 * @param link RID
 * @param travelCost float
 */
  linkSetTravelCost(link: RID, travelCost: float): void;
/**
 * Create a new map.
 * @returns RID
 */
  mapCreate(): RID;
/**
 * This function immediately forces synchronization of the specified navigation `map` `RID`. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).
 * Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.
 * Avoidance processing and dispatch of the `safe_velocity` signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.
 * 
 * **Note:** With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.
 * @param map RID
 */
  mapForceUpdate(map: RID): void;
/**
 * Returns all navigation agents `RID`s that are currently assigned to the requested navigation `map`.
 * @param map RID
 * @returns RID[]
 */
  mapGetAgents(map: RID): RID[];
/**
 * Returns the map cell height used to rasterize the navigation mesh vertices on the Y axis.
 * @param map RID
 * @returns float
 */
  mapGetCellHeight(map: RID): float;
/**
 * Returns the map cell size used to rasterize the navigation mesh vertices on the XZ plane.
 * @param map RID
 * @returns float
 */
  mapGetCellSize(map: RID): float;
/**
 * Returns the navigation mesh surface point closest to the provided `to_point` on the navigation `map`.
 * @param map RID
 * @param toPoint Vector3
 * @returns Vector3
 */
  mapGetClosestPoint(map: RID, toPoint: Vector3): Vector3;
/**
 * Returns the navigation mesh surface normal closest to the provided `to_point` on the navigation `map`.
 * @param map RID
 * @param toPoint Vector3
 * @returns Vector3
 */
  mapGetClosestPointNormal(map: RID, toPoint: Vector3): Vector3;
/**
 * Returns the owner region RID for the navigation mesh surface point closest to the provided `to_point` on the navigation `map`.
 * @param map RID
 * @param toPoint Vector3
 * @returns RID
 */
  mapGetClosestPointOwner(map: RID, toPoint: Vector3): RID;
/**
 * Returns the navigation mesh surface point closest to the provided `start` and `end` segment on the navigation `map`.
 * If `use_collision` is `true`, a closest point test is only done when the segment intersects with the navigation mesh surface.
 * @param map RID
 * @param start Vector3
 * @param end Vector3
 * @param useCollision boolean (optional, default: false)
 * @returns Vector3
 */
  mapGetClosestPointToSegment(map: RID, start: Vector3, end: Vector3, useCollision?: boolean): Vector3;
/**
 * Returns the edge connection margin of the map. This distance is the minimum vertex distance needed to connect two edges from different regions.
 * @param map RID
 * @returns float
 */
  mapGetEdgeConnectionMargin(map: RID): float;
/**
 * Returns the current iteration id of the navigation map. Every time the navigation map changes and synchronizes the iteration id increases. An iteration id of 0 means the navigation map has never synchronized.
 * 
 * **Note:** The iteration id will wrap back to 1 after reaching its range limit.
 * @param map RID
 * @returns int
 */
  mapGetIterationId(map: RID): int;
/**
 * Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to.
 * @param map RID
 * @returns float
 */
  mapGetLinkConnectionRadius(map: RID): float;
/**
 * Returns all navigation link `RID`s that are currently assigned to the requested navigation `map`.
 * @param map RID
 * @returns RID[]
 */
  mapGetLinks(map: RID): RID[];
/**
 * Returns map's internal merge rasterizer cell scale.
 * @param map RID
 * @returns float
 */
  mapGetMergeRasterizerCellScale(map: RID): float;
/**
 * Returns all navigation obstacle `RID`s that are currently assigned to the requested navigation `map`.
 * @param map RID
 * @returns RID[]
 */
  mapGetObstacles(map: RID): RID[];
/**
 * Returns the navigation path to reach the destination from the origin. `navigation_layers` is a bitmask of all region navigation layers that are allowed to be in the path.
 * @param map RID
 * @param origin Vector3
 * @param destination Vector3
 * @param optimize boolean
 * @param navigationLayers int (optional, default: 1)
 * @returns PackedVector3Array
 */
  mapGetPath(map: RID, origin: Vector3, destination: Vector3, optimize: boolean, navigationLayers?: int): PackedVector3Array;
/**
 * Returns a random position picked from all map region polygons with matching `navigation_layers`.
 * If `uniformly` is `true`, all map regions, polygons, and faces are weighted by their surface area (slower).
 * If `uniformly` is `false`, just a random region and a random polygon are picked (faster).
 * @param map RID
 * @param navigationLayers int
 * @param uniformly boolean
 * @returns Vector3
 */
  mapGetRandomPoint(map: RID, navigationLayers: int, uniformly: boolean): Vector3;
/**
 * Returns all navigation regions `RID`s that are currently assigned to the requested navigation `map`.
 * @param map RID
 * @returns RID[]
 */
  mapGetRegions(map: RID): RID[];
/**
 * Returns the map's up direction.
 * @param map RID
 * @returns Vector3
 */
  mapGetUp(map: RID): Vector3;
/**
 * Returns `true` if the `map` synchronization uses an async process that runs on a background thread.
 * @param map RID
 * @returns boolean
 */
  mapGetUseAsyncIterations(map: RID): boolean;
/**
 * Returns `true` if the navigation `map` allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.
 * @param map RID
 * @returns boolean
 */
  mapGetUseEdgeConnections(map: RID): boolean;
/**
 * Returns `true` if the map is active.
 * @param map RID
 * @returns boolean
 */
  mapIsActive(map: RID): boolean;
/**
 * Sets the map active.
 * @param map RID
 * @param active boolean
 */
  mapSetActive(map: RID, active: boolean): void;
/**
 * Sets the map cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height of the used navigation meshes.
 * @param map RID
 * @param cellHeight float
 */
  mapSetCellHeight(map: RID, cellHeight: float): void;
/**
 * Sets the map cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size of the used navigation meshes.
 * @param map RID
 * @param cellSize float
 */
  mapSetCellSize(map: RID, cellSize: float): void;
/**
 * Set the map edge connection margin used to weld the compatible region edges.
 * @param map RID
 * @param margin float
 */
  mapSetEdgeConnectionMargin(map: RID, margin: float): void;
/**
 * Set the map's link connection radius used to connect links to navigation polygons.
 * @param map RID
 * @param radius float
 */
  mapSetLinkConnectionRadius(map: RID, radius: float): void;
/**
 * Set the map's internal merge rasterizer cell scale used to control merging sensitivity.
 * @param map RID
 * @param scale float
 */
  mapSetMergeRasterizerCellScale(map: RID, scale: float): void;
/**
 * Sets the map up direction.
 * @param map RID
 * @param up Vector3
 */
  mapSetUp(map: RID, up: Vector3): void;
/**
 * If `enabled` is `true` the `map` synchronization uses an async process that runs on a background thread.
 * @param map RID
 * @param enabled boolean
 */
  mapSetUseAsyncIterations(map: RID, enabled: boolean): void;
/**
 * Set the navigation `map` edge connection use. If `enabled` is `true`, the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.
 * @param map RID
 * @param enabled boolean
 */
  mapSetUseEdgeConnections(map: RID, enabled: boolean): void;
/**
 * Creates a new obstacle.
 * @returns RID
 */
  obstacleCreate(): RID;
/**
 * Returns `true` if the provided `obstacle` has avoidance enabled.
 * @param obstacle RID
 * @returns boolean
 */
  obstacleGetAvoidanceEnabled(obstacle: RID): boolean;
/**
 * Returns the `avoidance_layers` bitmask of the specified `obstacle`.
 * @param obstacle RID
 * @returns int
 */
  obstacleGetAvoidanceLayers(obstacle: RID): int;
/**
 * Returns the `height` of the specified `obstacle`.
 * @param obstacle RID
 * @returns float
 */
  obstacleGetHeight(obstacle: RID): float;
/**
 * Returns the navigation map `RID` the requested `obstacle` is currently assigned to.
 * @param obstacle RID
 * @returns RID
 */
  obstacleGetMap(obstacle: RID): RID;
/**
 * Returns `true` if the specified `obstacle` is paused.
 * @param obstacle RID
 * @returns boolean
 */
  obstacleGetPaused(obstacle: RID): boolean;
/**
 * Returns the position of the specified `obstacle` in world space.
 * @param obstacle RID
 * @returns Vector3
 */
  obstacleGetPosition(obstacle: RID): Vector3;
/**
 * Returns the radius of the specified dynamic `obstacle`.
 * @param obstacle RID
 * @returns float
 */
  obstacleGetRadius(obstacle: RID): float;
/**
 * Returns `true` if the provided `obstacle` uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z).
 * @param obstacle RID
 * @returns boolean
 */
  obstacleGetUse3dAvoidance(obstacle: RID): boolean;
/**
 * Returns the velocity of the specified dynamic `obstacle`.
 * @param obstacle RID
 * @returns Vector3
 */
  obstacleGetVelocity(obstacle: RID): Vector3;
/**
 * Returns the outline vertices for the specified `obstacle`.
 * @param obstacle RID
 * @returns PackedVector3Array
 */
  obstacleGetVertices(obstacle: RID): PackedVector3Array;
/**
 * If `enabled` is `true`, the provided `obstacle` affects avoidance using agents.
 * @param obstacle RID
 * @param enabled boolean
 */
  obstacleSetAvoidanceEnabled(obstacle: RID, enabled: boolean): void;
/**
 * Set the obstacles's `avoidance_layers` bitmask.
 * @param obstacle RID
 * @param layers int
 */
  obstacleSetAvoidanceLayers(obstacle: RID, layers: int): void;
/**
 * Sets the `height` for the `obstacle`. In 3D agents will ignore obstacles that are above or below them while using 2D avoidance.
 * @param obstacle RID
 * @param height float
 */
  obstacleSetHeight(obstacle: RID, height: float): void;
/**
 * Assigns the `obstacle` to a navigation map.
 * @param obstacle RID
 * @param map RID
 */
  obstacleSetMap(obstacle: RID, map: RID): void;
/**
 * If `paused` is `true` the specified `obstacle` will not be processed, e.g. affect avoidance velocities.
 * @param obstacle RID
 * @param paused boolean
 */
  obstacleSetPaused(obstacle: RID, paused: boolean): void;
/**
 * Updates the `position` in world space for the `obstacle`.
 * @param obstacle RID
 * @param position Vector3
 */
  obstacleSetPosition(obstacle: RID, position: Vector3): void;
/**
 * Sets the radius of the dynamic obstacle.
 * @param obstacle RID
 * @param radius float
 */
  obstacleSetRadius(obstacle: RID, radius: float): void;
/**
 * Sets if the `obstacle` uses the 2D avoidance or the 3D avoidance while avoidance is enabled.
 * @param obstacle RID
 * @param enabled boolean
 */
  obstacleSetUse3dAvoidance(obstacle: RID, enabled: boolean): void;
/**
 * Sets `velocity` of the dynamic `obstacle`. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle.
 * @param obstacle RID
 * @param velocity Vector3
 */
  obstacleSetVelocity(obstacle: RID, velocity: Vector3): void;
/**
 * Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out.
 * @param obstacle RID
 * @param vertices PackedVector3Array
 */
  obstacleSetVertices(obstacle: RID, vertices: PackedVector3Array): void;
/**
 * Parses the `SceneTree` for source geometry according to the properties of `navigation_mesh`. Updates the provided `source_geometry_data` resource with the resulting data. The resource can then be used to bake a navigation mesh with `bake_from_source_geometry_data`. After the process is finished the optional `callback` will be called.
 * 
 * **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.
 * 
 * **Performance:** While convenient, reading data arrays from `Mesh` resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the `RenderingServer` in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.
 * @param navigationMesh NavigationMesh
 * @param sourceGeometryData NavigationMeshSourceGeometryData3D
 * @param rootNode Node
 * @param callback Callable (optional, default: Callable())
 */
  parseSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, rootNode: Node, callback?: Callable): void;
/**
 * Queries a path in a given navigation map. Start and target position and other parameters are defined through `NavigationPathQueryParameters3D`. Updates the provided `NavigationPathQueryResult3D` result object with the path among other results requested by the query. After the process is finished the optional `callback` will be called.
 * @param parameters NavigationPathQueryParameters3D
 * @param result NavigationPathQueryResult3D
 * @param callback Callable (optional, default: Callable())
 */
  queryPath(parameters: NavigationPathQueryParameters3D, result: NavigationPathQueryResult3D, callback?: Callable): void;
/**
 * Bakes the `navigation_mesh` with bake source geometry collected starting from the `root_node`.
 * @param navigationMesh NavigationMesh
 * @param rootNode Node
 * @deprecated This method is deprecated due to core threading changes. To upgrade existing code, first create a `NavigationMeshSourceGeometryData3D` resource. Use this resource with `parse_source_geometry_data` to parse the `SceneTree` for nodes that should contribute to the navigation mesh baking. The `SceneTree` parsing needs to happen on the main thread. After the parsing is finished use the resource with `bake_from_source_geometry_data` to bake a navigation mesh.
 */
  regionBakeNavigationMesh(navigationMesh: NavigationMesh, rootNode: Node): void;
/**
 * Creates a new region.
 * @returns RID
 */
  regionCreate(): RID;
/**
 * Returns the axis-aligned bounding box for the `region`'s transformed navigation mesh.
 * @param region RID
 * @returns AABB
 */
  regionGetBounds(region: RID): AABB;
/**
 * Returns the navigation mesh surface point closest to the provided `to_point` on the navigation `region`.
 * @param region RID
 * @param toPoint Vector3
 * @returns Vector3
 */
  regionGetClosestPoint(region: RID, toPoint: Vector3): Vector3;
/**
 * Returns the navigation mesh surface normal closest to the provided `to_point` on the navigation `region`.
 * @param region RID
 * @param toPoint Vector3
 * @returns Vector3
 */
  regionGetClosestPointNormal(region: RID, toPoint: Vector3): Vector3;
/**
 * Returns the navigation mesh surface point closest to the provided `start` and `end` segment on the navigation `region`.
 * If `use_collision` is `true`, a closest point test is only done when the segment intersects with the navigation mesh surface.
 * @param region RID
 * @param start Vector3
 * @param end Vector3
 * @param useCollision boolean (optional, default: false)
 * @returns Vector3
 */
  regionGetClosestPointToSegment(region: RID, start: Vector3, end: Vector3, useCollision?: boolean): Vector3;
/**
 * Returns the ending point of a connection door. `connection` is an index between 0 and the return value of `region_get_connections_count`.
 * @param region RID
 * @param connection int
 * @returns Vector3
 */
  regionGetConnectionPathwayEnd(region: RID, connection: int): Vector3;
/**
 * Returns the starting point of a connection door. `connection` is an index between 0 and the return value of `region_get_connections_count`.
 * @param region RID
 * @param connection int
 * @returns Vector3
 */
  regionGetConnectionPathwayStart(region: RID, connection: int): Vector3;
/**
 * Returns how many connections this `region` has with other regions in the map.
 * @param region RID
 * @returns int
 */
  regionGetConnectionsCount(region: RID): int;
/**
 * Returns `true` if the specified `region` is enabled.
 * @param region RID
 * @returns boolean
 */
  regionGetEnabled(region: RID): boolean;
/**
 * Returns the enter cost of this `region`.
 * @param region RID
 * @returns float
 */
  regionGetEnterCost(region: RID): float;
/**
 * Returns the navigation map `RID` the requested `region` is currently assigned to.
 * @param region RID
 * @returns RID
 */
  regionGetMap(region: RID): RID;
/**
 * Returns the region's navigation layers.
 * @param region RID
 * @returns int
 */
  regionGetNavigationLayers(region: RID): int;
/**
 * Returns the `ObjectID` of the object which manages this region.
 * @param region RID
 * @returns int
 */
  regionGetOwnerId(region: RID): int;
/**
 * Returns a random position picked from all region polygons with matching `navigation_layers`.
 * If `uniformly` is `true`, all region polygons and faces are weighted by their surface area (slower).
 * If `uniformly` is `false`, just a random polygon and face is picked (faster).
 * @param region RID
 * @param navigationLayers int
 * @param uniformly boolean
 * @returns Vector3
 */
  regionGetRandomPoint(region: RID, navigationLayers: int, uniformly: boolean): Vector3;
/**
 * Returns the global transformation of this `region`.
 * @param region RID
 * @returns Transform3D
 */
  regionGetTransform(region: RID): Transform3D;
/**
 * Returns the travel cost of this `region`.
 * @param region RID
 * @returns float
 */
  regionGetTravelCost(region: RID): float;
/**
 * Returns `true` if the navigation `region` is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.
 * @param region RID
 * @returns boolean
 */
  regionGetUseEdgeConnections(region: RID): boolean;
/**
 * Returns `true` if the provided `point` in world space is currently owned by the provided navigation `region`. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.
 * If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.
 * 
 * **Note:** If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.
 * @param region RID
 * @param point Vector3
 * @returns boolean
 */
  regionOwnsPoint(region: RID, point: Vector3): boolean;
/**
 * If `enabled` is `true`, the specified `region` will contribute to its current navigation map.
 * @param region RID
 * @param enabled boolean
 */
  regionSetEnabled(region: RID, enabled: boolean): void;
/**
 * Sets the `enter_cost` for this `region`.
 * @param region RID
 * @param enterCost float
 */
  regionSetEnterCost(region: RID, enterCost: float): void;
/**
 * Sets the map for the region.
 * @param region RID
 * @param map RID
 */
  regionSetMap(region: RID, map: RID): void;
/**
 * Set the region's navigation layers. This allows selecting regions from a path request (when using `NavigationServer3D.map_get_path`).
 * @param region RID
 * @param navigationLayers int
 */
  regionSetNavigationLayers(region: RID, navigationLayers: int): void;
/**
 * Sets the navigation mesh for the region.
 * @param region RID
 * @param navigationMesh NavigationMesh
 */
  regionSetNavigationMesh(region: RID, navigationMesh: NavigationMesh): void;
/**
 * Set the `ObjectID` of the object which manages this region.
 * @param region RID
 * @param ownerId int
 */
  regionSetOwnerId(region: RID, ownerId: int): void;
/**
 * Sets the global transformation for the region.
 * @param region RID
 * @param transform Transform3D
 */
  regionSetTransform(region: RID, transform: Transform3D): void;
/**
 * Sets the `travel_cost` for this `region`.
 * @param region RID
 * @param travelCost float
 */
  regionSetTravelCost(region: RID, travelCost: float): void;
/**
 * If `enabled` is `true`, the navigation `region` will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.
 * @param region RID
 * @param enabled boolean
 */
  regionSetUseEdgeConnections(region: RID, enabled: boolean): void;
/**
 * Control activation of this server.
 * @param active boolean
 */
  setActive(active: boolean): void;
/**
 * If `true` enables debug mode on the NavigationServer.
 * @param enabled boolean
 */
  setDebugEnabled(enabled: boolean): void;
/**
 * Returns a simplified version of `path` with less critical path points removed. The simplification amount is in worlds units and controlled by `epsilon`. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.
 * Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".
 * @param path PackedVector3Array
 * @param epsilon float
 * @returns PackedVector3Array
 */
  simplifyPath(path: PackedVector3Array, epsilon: float): PackedVector3Array;
/**
 * Creates a new source geometry parser. If a `Callable` is set for the parser with `source_geometry_parser_set_callback` the callback will be called for every single node that gets parsed whenever `parse_source_geometry_data` is used.
 * @returns RID
 */
  sourceGeometryParserCreate(): RID;
/**
 * Sets the `callback` `Callable` for the specific source geometry `parser`. The `Callable` will receive a call with the following parameters:
 * - `navigation_mesh` - The `NavigationMesh` reference used to define the parse settings. Do NOT edit or add directly to the navigation mesh.
 * - `source_geometry_data` - The `NavigationMeshSourceGeometryData3D` reference. Add custom source geometry for navigation mesh baking to this object.
 * - `node` - The `Node` that is parsed.
 * @param parser RID
 * @param callback Callable
 */
  sourceGeometryParserSetCallback(parser: RID, callback: Callable): void;
/**
 * Emitted when avoidance debug settings are changed. Only available in debug builds.
 */
  avoidanceDebugChanged: Signal<[]>;
/**
 * Emitted when a navigation map is updated, when a region moves or is modified.
 */
  mapChanged: Signal<[map: RID]>;
/**
 * Emitted when navigation debug settings are changed. Only available in debug builds.
 */
  navigationDebugChanged: Signal<[]>;
/**
 * Constant to get the number of active navigation maps.
 */
  static readonly INFO_ACTIVE_MAPS: int;
/**
 * Constant to get the number of active navigation regions.
 */
  static readonly INFO_REGION_COUNT: int;
/**
 * Constant to get the number of active navigation agents processing avoidance.
 */
  static readonly INFO_AGENT_COUNT: int;
/**
 * Constant to get the number of active navigation links.
 */
  static readonly INFO_LINK_COUNT: int;
/**
 * Constant to get the number of navigation mesh polygons.
 */
  static readonly INFO_POLYGON_COUNT: int;
/**
 * Constant to get the number of navigation mesh polygon edges.
 */
  static readonly INFO_EDGE_COUNT: int;
/**
 * Constant to get the number of navigation mesh polygon edges that were merged due to edge key overlap.
 */
  static readonly INFO_EDGE_MERGE_COUNT: int;
/**
 * Constant to get the number of navigation mesh polygon edges that are considered connected by edge proximity.
 */
  static readonly INFO_EDGE_CONNECTION_COUNT: int;
/**
 * Constant to get the number of navigation mesh polygon edges that could not be merged but may be still connected by edge proximity or with links.
 */
  static readonly INFO_EDGE_FREE_COUNT: int;
/**
 * Constant to get the number of active navigation obstacles.
 */
  static readonly INFO_OBSTACLE_COUNT: int;
}
