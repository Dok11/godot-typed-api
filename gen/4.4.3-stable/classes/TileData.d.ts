import type { Color, GodotArray, GodotDictionary, Material, NavigationPolygon, Object, OccluderPolygon2D, PackedVector2Array, Signal, Variant, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * Settings for a single tile in a `TileSet`.
 * 
 * `TileData` object represents a single tile in a `TileSet`. It is usually edited using the tileset editor, but it can be modified at runtime using `TileMap._tile_data_runtime_update`.
 */
export class TileData extends Object {
/**
 * If `true`, the tile will have its texture flipped horizontally.
 */
  flipH: boolean;
/**
 * If `true`, the tile will have its texture flipped vertically.
 */
  flipV: boolean;
/**
 * The `Material` to use for this `TileData`. This can be a `CanvasItemMaterial` to use the default shader, or a `ShaderMaterial` to use a custom shader.
 */
  material: Material;
/**
 * Color modulation of the tile.
 */
  modulate: Color;
/**
 * Relative probability of this tile being selected when drawing a pattern of random tiles.
 */
  probability: float;
/**
 * ID of the terrain from the terrain set that the tile uses.
 */
  terrain: int;
/**
 * ID of the terrain set that the tile uses.
 */
  terrainSet: int;
/**
 * Offsets the position of where the tile is drawn.
 */
  textureOrigin: Vector2i;
/**
 * If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped.
 */
  transpose: boolean;
/**
 * Vertical point of the tile used for determining y-sorted order.
 */
  ySortOrigin: int;
/**
 * Ordering index of this tile, relative to `TileMap`.
 */
  zIndex: int;
/**
 * Adds a collision polygon to the tile on the given TileSet physics layer.
 * @param layerId int
 */
  addCollisionPolygon(layerId: int): void;
/**
 * Adds an occlusion polygon to the tile on the TileSet occlusion layer with index `layer_id`.
 * @param layerId int
 */
  addOccluderPolygon(layerId: int): void;
/**
 * Returns the one-way margin (for one-way platforms) of the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 * @returns float
 */
  getCollisionPolygonOneWayMargin(layerId: int, polygonIndex: int): float;
/**
 * Returns the points of the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 * @returns PackedVector2Array
 */
  getCollisionPolygonPoints(layerId: int, polygonIndex: int): PackedVector2Array;
/**
 * Returns how many polygons the tile has for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @returns int
 */
  getCollisionPolygonsCount(layerId: int): int;
/**
 * Returns the constant angular velocity applied to objects colliding with this tile.
 * @param layerId int
 * @returns float
 */
  getConstantAngularVelocity(layerId: int): float;
/**
 * Returns the constant linear velocity applied to objects colliding with this tile.
 * @param layerId int
 * @returns Vector2
 */
  getConstantLinearVelocity(layerId: int): Vector2;
/**
 * Returns the custom data value for custom data layer named `layer_name`. To check if a custom data layer exists, use `has_custom_data`.
 * @param layerName string
 * @returns Variant
 */
  getCustomData(layerName: string): Variant;
/**
 * Returns the custom data value for custom data layer with index `layer_id`.
 * @param layerId int
 * @returns Variant
 */
  getCustomDataByLayerId(layerId: int): Variant;
/**
 * Returns the navigation polygon of the tile for the TileSet navigation layer with index `layer_id`.
 * `flip_h`, `flip_v`, and `transpose` allow transforming the returned polygon.
 * @param layerId int
 * @param flipH boolean (optional, default: false)
 * @param flipV boolean (optional, default: false)
 * @param transpose boolean (optional, default: false)
 * @returns NavigationPolygon
 */
  getNavigationPolygon(layerId: int, flipH?: boolean, flipV?: boolean, transpose?: boolean): NavigationPolygon;
/**
 * Returns the occluder polygon of the tile for the TileSet occlusion layer with index `layer_id`.
 * `flip_h`, `flip_v`, and `transpose` allow transforming the returned polygon.
 * @param layerId int
 * @param flipH boolean (optional, default: false)
 * @param flipV boolean (optional, default: false)
 * @param transpose boolean (optional, default: false)
 * @returns OccluderPolygon2D
 * @deprecated Use `get_occluder_polygon` instead.
 */
  getOccluder(layerId: int, flipH?: boolean, flipV?: boolean, transpose?: boolean): OccluderPolygon2D;
/**
 * Returns the occluder polygon at index `polygon_index` from the TileSet occlusion layer with index `layer_id`.
 * The `flip_h`, `flip_v`, and `transpose` parameters can be `true` to transform the returned polygon.
 * @param layerId int
 * @param polygonIndex int
 * @param flipH boolean (optional, default: false)
 * @param flipV boolean (optional, default: false)
 * @param transpose boolean (optional, default: false)
 * @returns OccluderPolygon2D
 */
  getOccluderPolygon(layerId: int, polygonIndex: int, flipH?: boolean, flipV?: boolean, transpose?: boolean): OccluderPolygon2D;
/**
 * Returns the number of occluder polygons of the tile in the TileSet occlusion layer with index `layer_id`.
 * @param layerId int
 * @returns int
 */
  getOccluderPolygonsCount(layerId: int): int;
/**
 * Returns the tile's terrain bit for the given `peering_bit` direction. To check that a direction is valid, use `is_valid_terrain_peering_bit`.
 * @param peeringBit int
 * @returns int
 */
  getTerrainPeeringBit(peeringBit: int): int;
/**
 * Returns whether there exists a custom data layer named `layer_name`.
 * @param layerName string
 * @returns boolean
 */
  hasCustomData(layerName: string): boolean;
/**
 * Returns whether one-way collisions are enabled for the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 * @returns boolean
 */
  isCollisionPolygonOneWay(layerId: int, polygonIndex: int): boolean;
/**
 * Returns whether the given `peering_bit` direction is valid for this tile.
 * @param peeringBit int
 * @returns boolean
 */
  isValidTerrainPeeringBit(peeringBit: int): boolean;
/**
 * Removes the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 */
  removeCollisionPolygon(layerId: int, polygonIndex: int): void;
/**
 * Removes the polygon at index `polygon_index` for TileSet occlusion layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 */
  removeOccluderPolygon(layerId: int, polygonIndex: int): void;
/**
 * Enables/disables one-way collisions on the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 * @param oneWay boolean
 */
  setCollisionPolygonOneWay(layerId: int, polygonIndex: int, oneWay: boolean): void;
/**
 * Sets the one-way margin (for one-way platforms) of the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 * @param oneWayMargin float
 */
  setCollisionPolygonOneWayMargin(layerId: int, polygonIndex: int, oneWayMargin: float): void;
/**
 * Sets the points of the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 * @param polygon PackedVector2Array
 */
  setCollisionPolygonPoints(layerId: int, polygonIndex: int, polygon: PackedVector2Array): void;
/**
 * Sets the polygons count for TileSet physics layer with index `layer_id`.
 * @param layerId int
 * @param polygonsCount int
 */
  setCollisionPolygonsCount(layerId: int, polygonsCount: int): void;
/**
 * Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile.
 * @param layerId int
 * @param velocity float
 */
  setConstantAngularVelocity(layerId: int, velocity: float): void;
/**
 * Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts.
 * @param layerId int
 * @param velocity Vector2
 */
  setConstantLinearVelocity(layerId: int, velocity: Vector2): void;
/**
 * Sets the tile's custom data value for the TileSet custom data layer with name `layer_name`.
 * @param layerName string
 * @param value Variant
 */
  setCustomData(layerName: string, value: Variant): void;
/**
 * Sets the tile's custom data value for the TileSet custom data layer with index `layer_id`.
 * @param layerId int
 * @param value Variant
 */
  setCustomDataByLayerId(layerId: int, value: Variant): void;
/**
 * Sets the navigation polygon for the TileSet navigation layer with index `layer_id`.
 * @param layerId int
 * @param navigationPolygon NavigationPolygon
 */
  setNavigationPolygon(layerId: int, navigationPolygon: NavigationPolygon): void;
/**
 * Sets the occluder for the TileSet occlusion layer with index `layer_id`.
 * @param layerId int
 * @param occluderPolygon OccluderPolygon2D
 * @deprecated Use `set_occluder_polygon` instead.
 */
  setOccluder(layerId: int, occluderPolygon: OccluderPolygon2D): void;
/**
 * Sets the occluder for polygon with index `polygon_index` in the TileSet occlusion layer with index `layer_id`.
 * @param layerId int
 * @param polygonIndex int
 * @param polygon OccluderPolygon2D
 */
  setOccluderPolygon(layerId: int, polygonIndex: int, polygon: OccluderPolygon2D): void;
/**
 * Sets the occluder polygon count in the TileSet occlusion layer with index `layer_id`.
 * @param layerId int
 * @param polygonsCount int
 */
  setOccluderPolygonsCount(layerId: int, polygonsCount: int): void;
/**
 * Sets the tile's terrain bit for the given `peering_bit` direction. To check that a direction is valid, use `is_valid_terrain_peering_bit`.
 * @param peeringBit int
 * @param terrain int
 */
  setTerrainPeeringBit(peeringBit: int, terrain: int): void;
/**
 * Emitted when any of the properties are changed.
 */
  changed: Signal<[]>;
}
