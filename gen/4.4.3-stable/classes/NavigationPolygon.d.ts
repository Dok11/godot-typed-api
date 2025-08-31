import type { GodotArray, GodotDictionary, NavigationMesh, PackedInt32Array, PackedVector2Array, Rect2, Resource, StringName, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D navigation mesh that describes a traversable surface for pathfinding.
 * 
 * A navigation mesh can be created either by baking it with the help of the `NavigationServer2D`, or by adding vertices and convex polygon indices arrays manually.
 * To bake a navigation mesh at least one outline needs to be added that defines the outer bounds of the baked area.
 * 
 * 		```gdscript
 * 
 * 		var new_navigation_mesh = NavigationPolygon.new()
 * 		var bounding_outline = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
 * 		new_navigation_mesh.add_outline(bounding_outline)
 * 		NavigationServer2D.bake_from_source_geometry_data(new_navigation_mesh, NavigationMeshSourceGeometryData2D.new());
 * 		$NavigationRegion2D.navigation_polygon = new_navigation_mesh
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var newNavigationMesh = new NavigationPolygon();
 * 		Vector2[] boundingOutline = [new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0)];
 * 		newNavigationMesh.AddOutline(boundingOutline);
 * 		NavigationServer2D.BakeFromSourceGeometryData(newNavigationMesh, new NavigationMeshSourceGeometryData2D());
 * 		GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
 * 		
 * 
 * ```
 * 
 * Adding vertices and polygon indices manually.
 * 
 * 		```gdscript
 * 
 * 		var new_navigation_mesh = NavigationPolygon.new()
 * 		var new_vertices = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
 * 		new_navigation_mesh.vertices = new_vertices
 * 		var new_polygon_indices = PackedInt32Array([0, 1, 2, 3])
 * 		new_navigation_mesh.add_polygon(new_polygon_indices)
 * 		$NavigationRegion2D.navigation_polygon = new_navigation_mesh
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var newNavigationMesh = new NavigationPolygon();
 * 		Vector2[] newVertices = [new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0)];
 * 		newNavigationMesh.Vertices = newVertices;
 * 		int[] newPolygonIndices = [0, 1, 2, 3];
 * 		newNavigationMesh.AddPolygon(newPolygonIndices);
 * 		GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
 * 		
 * 
 * ```
 * 
 */
export class NavigationPolygon extends Resource {
/**
 * The distance to erode/shrink the walkable surface when baking the navigation mesh.
 */
  agentRadius: float;
/**
 * If the baking `Rect2` has an area the navigation mesh baking will be restricted to its enclosing area.
 */
  bakingRect: Rect2;
/**
 * The position offset applied to the `baking_rect` `Rect2`.
 */
  bakingRectOffset: Vector2;
/**
 * The size of the non-navigable border around the bake bounding area defined by the `baking_rect` `Rect2`.
 * In conjunction with the `baking_rect` the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by `agent_radius`.
 */
  borderSize: float;
/**
 * The cell size used to rasterize the navigation mesh vertices. Must match with the cell size on the navigation map.
 */
  cellSize: float;
/**
 * The physics layers to scan for static colliders.
 * Only used when `parsed_geometry_type` is `PARSED_GEOMETRY_STATIC_COLLIDERS` or `PARSED_GEOMETRY_BOTH`.
 */
  parsedCollisionMask: int;
/**
 * Determines which type of nodes will be parsed as geometry. See `ParsedGeometryType` for possible values.
 */
  parsedGeometryType: int;
/**
 * Partitioning algorithm for creating the navigation mesh polys. See `SamplePartitionType` for possible values.
 */
  samplePartitionType: int;
/**
 * The group name of nodes that should be parsed for baking source geometry.
 * Only used when `source_geometry_mode` is `SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN` or `SOURCE_GEOMETRY_GROUPS_EXPLICIT`.
 */
  sourceGeometryGroupName: StringName;
/**
 * The source of the geometry used when baking. See `SourceGeometryMode` for possible values.
 */
  sourceGeometryMode: int;
/**
 * Appends a `PackedVector2Array` that contains the vertices of an outline to the internal array that contains all the outlines.
 * @param outline PackedVector2Array
 */
  addOutline(outline: PackedVector2Array): void;
/**
 * Adds a `PackedVector2Array` that contains the vertices of an outline to the internal array that contains all the outlines at a fixed position.
 * @param outline PackedVector2Array
 * @param index int
 */
  addOutlineAtIndex(outline: PackedVector2Array, index: int): void;
/**
 * Adds a polygon using the indices of the vertices you get when calling `get_vertices`.
 * @param polygon PackedInt32Array
 */
  addPolygon(polygon: PackedInt32Array): void;
/**
 * Clears the internal arrays for vertices and polygon indices.
 */
  clear(): void;
/**
 * Clears the array of the outlines, but it doesn't clear the vertices and the polygons that were created by them.
 */
  clearOutlines(): void;
/**
 * Clears the array of polygons, but it doesn't clear the array of outlines and vertices.
 */
  clearPolygons(): void;
/**
 * Returns the `NavigationMesh` resulting from this navigation polygon. This navigation mesh can be used to update the navigation mesh of a region with the `NavigationServer3D.region_set_navigation_mesh` API directly (as 2D uses the 3D server behind the scene).
 * @returns NavigationMesh
 */
  getNavigationMesh(): NavigationMesh;
/**
 * Returns a `PackedVector2Array` containing the vertices of an outline that was created in the editor or by script.
 * @param idx int
 * @returns PackedVector2Array
 */
  getOutline(idx: int): PackedVector2Array;
/**
 * Returns the number of outlines that were created in the editor or by script.
 * @returns int
 */
  getOutlineCount(): int;
/**
 * Returns whether or not the specified layer of the `parsed_collision_mask` is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getParsedCollisionMaskValue(layerNumber: int): boolean;
/**
 * Returns a `PackedInt32Array` containing the indices of the vertices of a created polygon.
 * @param idx int
 * @returns PackedInt32Array
 */
  getPolygon(idx: int): PackedInt32Array;
/**
 * Returns the count of all polygons.
 * @returns int
 */
  getPolygonCount(): int;
/**
 * Returns a `PackedVector2Array` containing all the vertices being used to create the polygons.
 * @returns PackedVector2Array
 */
  getVertices(): PackedVector2Array;
/**
 * Creates polygons from the outlines added in the editor or by script.
 * @deprecated Use `NavigationServer2D.parse_source_geometry_data` and `NavigationServer2D.bake_from_source_geometry_data` instead.
 */
  makePolygonsFromOutlines(): void;
/**
 * Removes an outline created in the editor or by script. You have to call `make_polygons_from_outlines` for the polygons to update.
 * @param idx int
 */
  removeOutline(idx: int): void;
/**
 * Changes an outline created in the editor or by script. You have to call `make_polygons_from_outlines` for the polygons to update.
 * @param idx int
 * @param outline PackedVector2Array
 */
  setOutline(idx: int, outline: PackedVector2Array): void;
/**
 * Based on `value`, enables or disables the specified layer in the `parsed_collision_mask`, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setParsedCollisionMaskValue(layerNumber: int, value: boolean): void;
/**
 * Sets the vertices that can be then indexed to create polygons with the `add_polygon` method.
 * @param vertices PackedVector2Array
 */
  setVertices(vertices: PackedVector2Array): void;
/**
 * Convex partitioning that yields navigation mesh with convex polygons.
 */
  static readonly SAMPLE_PARTITION_CONVEX_PARTITION: int;
/**
 * Triangulation partitioning that yields navigation mesh with triangle polygons.
 */
  static readonly SAMPLE_PARTITION_TRIANGULATE: int;
/**
 * Represents the size of the `SamplePartitionType` enum.
 */
  static readonly SAMPLE_PARTITION_MAX: int;
/**
 * Parses mesh instances as obstruction geometry. This includes `Polygon2D`, `MeshInstance2D`, `MultiMeshInstance2D`, and `TileMap` nodes.
 * Meshes are only parsed when they use a 2D vertices surface format.
 */
  static readonly PARSED_GEOMETRY_MESH_INSTANCES: int;
/**
 * Parses `StaticBody2D` and `TileMap` colliders as obstruction geometry. The collider should be in any of the layers specified by `parsed_collision_mask`.
 */
  static readonly PARSED_GEOMETRY_STATIC_COLLIDERS: int;
/**
 * Both `PARSED_GEOMETRY_MESH_INSTANCES` and `PARSED_GEOMETRY_STATIC_COLLIDERS`.
 */
  static readonly PARSED_GEOMETRY_BOTH: int;
/**
 * Represents the size of the `ParsedGeometryType` enum.
 */
  static readonly PARSED_GEOMETRY_MAX: int;
/**
 * Scans the child nodes of the root node recursively for geometry.
 */
  static readonly SOURCE_GEOMETRY_ROOT_NODE_CHILDREN: int;
/**
 * Scans nodes in a group and their child nodes recursively for geometry. The group is specified by `source_geometry_group_name`.
 */
  static readonly SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN: int;
/**
 * Uses nodes in a group for geometry. The group is specified by `source_geometry_group_name`.
 */
  static readonly SOURCE_GEOMETRY_GROUPS_EXPLICIT: int;
/**
 * Represents the size of the `SourceGeometryMode` enum.
 */
  static readonly SOURCE_GEOMETRY_MAX: int;
}
