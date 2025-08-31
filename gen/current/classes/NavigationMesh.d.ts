import type { AABB, GodotArray, GodotDictionary, Mesh, PackedInt32Array, PackedVector3Array, Resource, StringName, Vector3, float, int } from "../index.d.ts";
/**
 * A navigation mesh that defines traversable areas and obstacles.
 * 
 * A navigation mesh is a collection of polygons that define which areas of an environment are traversable to aid agents in pathfinding through complicated spaces.
 */
export class NavigationMesh extends Resource {
/**
 * The minimum floor to ceiling height that will still allow the floor area to be considered walkable.
 * 
 * **Note:** While baking, this value will be rounded up to the nearest multiple of `cell_height`.
 */
  agentHeight: float;
/**
 * The minimum ledge height that is considered to still be traversable.
 * 
 * **Note:** While baking, this value will be rounded down to the nearest multiple of `cell_height`.
 */
  agentMaxClimb: float;
/**
 * The maximum slope that is considered walkable, in degrees.
 */
  agentMaxSlope: float;
/**
 * The distance to erode/shrink the walkable area of the heightfield away from obstructions.
 * 
 * **Note:** While baking, this value will be rounded up to the nearest multiple of `cell_size`.
 */
  agentRadius: float;
/**
 * The size of the non-navigable border around the bake bounding area.
 * In conjunction with the `filter_baking_aabb` and a `edge_max_error` value at `1.0` or below the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by `agent_radius`.
 * 
 * **Note:** While baking and not zero, this value will be rounded up to the nearest multiple of `cell_size`.
 */
  borderSize: float;
/**
 * The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map.
 */
  cellHeight: float;
/**
 * The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map.
 */
  cellSize: float;
/**
 * The sampling distance to use when generating the detail mesh, in cell unit.
 */
  detailSampleDistance: float;
/**
 * The maximum distance the detail mesh surface should deviate from heightfield, in cell unit.
 */
  detailSampleMaxError: float;
/**
 * The maximum distance a simplified contour's border edges should deviate the original raw contour.
 */
  edgeMaxError: float;
/**
 * The maximum allowed length for contour edges along the border of the mesh. A value of `0.0` disables this feature.
 * 
 * **Note:** While baking, this value will be rounded up to the nearest multiple of `cell_size`.
 */
  edgeMaxLength: float;
/**
 * If the baking `AABB` has a volume the navigation mesh baking will be restricted to its enclosing area.
 */
  filterBakingAabb: AABB;
/**
 * The position offset applied to the `filter_baking_aabb` `AABB`.
 */
  filterBakingAabbOffset: Vector3;
/**
 * If `true`, marks spans that are ledges as non-walkable.
 */
  filterLedgeSpans: boolean;
/**
 * If `true`, marks non-walkable spans as walkable if their maximum is within `agent_max_climb` of a walkable neighbor.
 */
  filterLowHangingObstacles: boolean;
/**
 * If `true`, marks walkable spans as not walkable if the clearance above the span is less than `agent_height`.
 */
  filterWalkableLowHeightSpans: boolean;
/**
 * The physics layers to scan for static colliders.
 * Only used when `geometry_parsed_geometry_type` is `PARSED_GEOMETRY_STATIC_COLLIDERS` or `PARSED_GEOMETRY_BOTH`.
 */
  geometryCollisionMask: int;
/**
 * Determines which type of nodes will be parsed as geometry. See `ParsedGeometryType` for possible values.
 */
  geometryParsedGeometryType: int;
/**
 * The source of the geometry used when baking. See `SourceGeometryMode` for possible values.
 */
  geometrySourceGeometryMode: int;
/**
 * The name of the group to scan for geometry.
 * Only used when `geometry_source_geometry_mode` is `SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN` or `SOURCE_GEOMETRY_GROUPS_EXPLICIT`.
 */
  geometrySourceGroupName: StringName;
/**
 * Any regions with a size smaller than this will be merged with larger regions if possible.
 * 
 * **Note:** This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.
 */
  regionMergeSize: float;
/**
 * The minimum size of a region for it to be created.
 * 
 * **Note:** This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.
 */
  regionMinSize: float;
/**
 * Partitioning algorithm for creating the navigation mesh polys. See `SamplePartitionType` for possible values.
 */
  samplePartitionType: int;
/**
 * The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process.
 */
  verticesPerPolygon: float;
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
 * Clears the array of polygons, but it doesn't clear the array of vertices.
 */
  clearPolygons(): void;
/**
 * Initializes the navigation mesh by setting the vertices and indices according to a `Mesh`.
 * 
 * **Note:** The given `mesh` must be of type `Mesh.PRIMITIVE_TRIANGLES` and have an index array.
 * @param mesh Mesh
 */
  createFromMesh(mesh: Mesh): void;
/**
 * Returns whether or not the specified layer of the `geometry_collision_mask` is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getCollisionMaskValue(layerNumber: int): boolean;
/**
 * Returns a `PackedInt32Array` containing the indices of the vertices of a created polygon.
 * @param idx int
 * @returns PackedInt32Array
 */
  getPolygon(idx: int): PackedInt32Array;
/**
 * Returns the number of polygons in the navigation mesh.
 * @returns int
 */
  getPolygonCount(): int;
/**
 * Returns a `PackedVector3Array` containing all the vertices being used to create the polygons.
 * @returns PackedVector3Array
 */
  getVertices(): PackedVector3Array;
/**
 * Based on `value`, enables or disables the specified layer in the `geometry_collision_mask`, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setCollisionMaskValue(layerNumber: int, value: boolean): void;
/**
 * Sets the vertices that can be then indexed to create polygons with the `add_polygon` method.
 * @param vertices PackedVector3Array
 */
  setVertices(vertices: PackedVector3Array): void;
/**
 * Watershed partitioning. Generally the best choice if you precompute the navigation mesh, use this if you have large open areas.
 */
  static readonly SAMPLE_PARTITION_WATERSHED: int;
/**
 * Monotone partitioning. Use this if you want fast navigation mesh generation.
 */
  static readonly SAMPLE_PARTITION_MONOTONE: int;
/**
 * Layer partitioning. Good choice to use for tiled navigation mesh with medium and small sized tiles.
 */
  static readonly SAMPLE_PARTITION_LAYERS: int;
/**
 * Represents the size of the `SamplePartitionType` enum.
 */
  static readonly SAMPLE_PARTITION_MAX: int;
/**
 * Parses mesh instances as geometry. This includes `MeshInstance3D`, `CSGShape3D`, and `GridMap` nodes.
 */
  static readonly PARSED_GEOMETRY_MESH_INSTANCES: int;
/**
 * Parses `StaticBody3D` colliders as geometry. The collider should be in any of the layers specified by `geometry_collision_mask`.
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
 * Scans nodes in a group and their child nodes recursively for geometry. The group is specified by `geometry_source_group_name`.
 */
  static readonly SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN: int;
/**
 * Uses nodes in a group for geometry. The group is specified by `geometry_source_group_name`.
 */
  static readonly SOURCE_GEOMETRY_GROUPS_EXPLICIT: int;
/**
 * Represents the size of the `SourceGeometryMode` enum.
 */
  static readonly SOURCE_GEOMETRY_MAX: int;
}
