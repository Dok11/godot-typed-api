import type { Color, GodotArray, GodotDictionary, PhysicsMaterial, Resource, TileMapPattern, TileSetSource, Vector2i, float, int } from "../index.d.ts";
/**
 * Tile library for tilemaps.
 * 
 * A TileSet is a library of tiles for a `TileMapLayer`. A TileSet handles a list of `TileSetSource`, each of them storing a set of tiles.
 * Tiles can either be from a `TileSetAtlasSource`, which renders tiles out of a texture with support for physics, navigation, etc., or from a `TileSetScenesCollectionSource`, which exposes scene-based tiles.
 * Tiles are referenced by using three IDs: their source ID, their atlas coordinates ID, and their alternative tile ID.
 * A TileSet can be configured so that its tiles expose more or fewer properties. To do so, the TileSet resources use property layers, which you can add or remove depending on your needs.
 * For example, adding a physics layer allows giving collision shapes to your tiles. Each layer has dedicated properties (physics layer and mask), so you may add several TileSet physics layers for each type of collision you need.
 * See the functions to add new layers for more information.
 */
export class TileSet extends Resource {
/**
 * For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the TileMap grid.
 */
  tileLayout: int;
/**
 * For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis.
 */
  tileOffsetAxis: int;
/**
 * The tile shape.
 */
  tileShape: int;
/**
 * The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas.
 */
  tileSize: Vector2i;
/**
 * Enables/Disable uv clipping when rendering the tiles.
 */
  uvClipping: boolean;
/**
 * Adds a custom data layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.
 * Custom data layers allow assigning custom properties to atlas tiles.
 * @param toPosition int (optional, default: -1)
 */
  addCustomDataLayer(toPosition?: int): void;
/**
 * Adds a navigation layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.
 * Navigation layers allow assigning a navigable area to atlas tiles.
 * @param toPosition int (optional, default: -1)
 */
  addNavigationLayer(toPosition?: int): void;
/**
 * Adds an occlusion layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.
 * Occlusion layers allow assigning occlusion polygons to atlas tiles.
 * @param toPosition int (optional, default: -1)
 */
  addOcclusionLayer(toPosition?: int): void;
/**
 * Adds a `TileMapPattern` to be stored in the TileSet resource. If provided, insert it at the given `index`.
 * @param pattern TileMapPattern
 * @param index int (optional, default: -1)
 * @returns int
 */
  addPattern(pattern: TileMapPattern, index?: int): int;
/**
 * Adds a physics layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.
 * Physics layers allow assigning collision polygons to atlas tiles.
 * @param toPosition int (optional, default: -1)
 */
  addPhysicsLayer(toPosition?: int): void;
/**
 * Adds a `TileSetSource` to the TileSet. If `atlas_source_id_override` is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.
 * The function returns the added source ID or -1 if the source could not be added.
 * 
 * **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another `TileSet`, it will be removed from that one.
 * @param source TileSetSource
 * @param atlasSourceIdOverride int (optional, default: -1)
 * @returns int
 */
  addSource(source: TileSetSource, atlasSourceIdOverride?: int): int;
/**
 * Adds a new terrain to the given terrain set `terrain_set` at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.
 * @param terrainSet int
 * @param toPosition int (optional, default: -1)
 */
  addTerrain(terrainSet: int, toPosition?: int): void;
/**
 * Adds a new terrain set at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.
 * @param toPosition int (optional, default: -1)
 */
  addTerrainSet(toPosition?: int): void;
/**
 * Clears tile proxies pointing to invalid tiles.
 */
  cleanupInvalidTileProxies(): void;
/**
 * Clears all tile proxies.
 */
  clearTileProxies(): void;
/**
 * Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).
 * If the TileSet has no proxy for the given identifiers, returns an empty Array.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 * @param alternativeFrom int
 * @returns GodotArray<any>
 */
  getAlternativeLevelTileProxy(sourceFrom: int, coordsFrom: Vector2i, alternativeFrom: int): GodotArray<any>;
/**
 * Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).
 * If the TileSet has no proxy for the given identifiers, returns an empty Array.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 * @returns GodotArray<any>
 */
  getCoordsLevelTileProxy(sourceFrom: int, coordsFrom: Vector2i): GodotArray<any>;
/**
 * Returns the index of the custom data layer identified by the given name.
 * @param layerName string
 * @returns int
 */
  getCustomDataLayerByName(layerName: string): int;
/**
 * Returns the name of the custom data layer identified by the given index.
 * @param layerIndex int
 * @returns string
 */
  getCustomDataLayerName(layerIndex: int): string;
/**
 * Returns the custom data layers count.
 * @returns int
 */
  getCustomDataLayersCount(): int;
/**
 * Returns the type of the custom data layer identified by the given index.
 * @param layerIndex int
 * @returns int
 */
  getCustomDataLayerType(layerIndex: int): int;
/**
 * Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer.
 * @param layerIndex int
 * @returns int
 */
  getNavigationLayerLayers(layerIndex: int): int;
/**
 * Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given `layer_index` is enabled, given a navigation_layers `layer_number` between 1 and 32.
 * @param layerIndex int
 * @param layerNumber int
 * @returns boolean
 */
  getNavigationLayerLayerValue(layerIndex: int, layerNumber: int): boolean;
/**
 * Returns the navigation layers count.
 * @returns int
 */
  getNavigationLayersCount(): int;
/**
 * Returns a new unused source ID. This generated ID is the same that a call to `add_source` would return.
 * @returns int
 */
  getNextSourceId(): int;
/**
 * Returns the light mask of the occlusion layer.
 * @param layerIndex int
 * @returns int
 */
  getOcclusionLayerLightMask(layerIndex: int): int;
/**
 * Returns the occlusion layers count.
 * @returns int
 */
  getOcclusionLayersCount(): int;
/**
 * Returns if the occluders from this layer use `sdf_collision`.
 * @param layerIndex int
 * @returns boolean
 */
  getOcclusionLayerSdfCollision(layerIndex: int): boolean;
/**
 * Returns the `TileMapPattern` at the given `index`.
 * @param index int (optional, default: -1)
 * @returns TileMapPattern
 */
  getPattern(index?: int): TileMapPattern;
/**
 * Returns the number of `TileMapPattern` this tile set handles.
 * @returns int
 */
  getPatternsCount(): int;
/**
 * Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in.
 * @param layerIndex int
 * @returns int
 */
  getPhysicsLayerCollisionLayer(layerIndex: int): int;
/**
 * Returns the collision mask of bodies on the given TileSet's physics layer.
 * @param layerIndex int
 * @returns int
 */
  getPhysicsLayerCollisionMask(layerIndex: int): int;
/**
 * Returns the collision priority of bodies on the given TileSet's physics layer.
 * @param layerIndex int
 * @returns float
 */
  getPhysicsLayerCollisionPriority(layerIndex: int): float;
/**
 * Returns the physics material of bodies on the given TileSet's physics layer.
 * @param layerIndex int
 * @returns PhysicsMaterial
 */
  getPhysicsLayerPhysicsMaterial(layerIndex: int): PhysicsMaterial;
/**
 * Returns the physics layers count.
 * @returns int
 */
  getPhysicsLayersCount(): int;
/**
 * Returns the `TileSetSource` with ID `source_id`.
 * @param sourceId int
 * @returns TileSetSource
 */
  getSource(sourceId: int): TileSetSource;
/**
 * Returns the number of `TileSetSource` in this TileSet.
 * @returns int
 */
  getSourceCount(): int;
/**
 * Returns the source ID for source with index `index`.
 * @param index int
 * @returns int
 */
  getSourceId(index: int): int;
/**
 * Returns the source-level proxy for the given source identifier.
 * If the TileSet has no proxy for the given identifier, returns -1.
 * @param sourceFrom int
 * @returns int
 */
  getSourceLevelTileProxy(sourceFrom: int): int;
/**
 * Returns a terrain's color.
 * @param terrainSet int
 * @param terrainIndex int
 * @returns Color
 */
  getTerrainColor(terrainSet: int, terrainIndex: int): Color;
/**
 * Returns a terrain's name.
 * @param terrainSet int
 * @param terrainIndex int
 * @returns string
 */
  getTerrainName(terrainSet: int, terrainIndex: int): string;
/**
 * Returns the number of terrains in the given terrain set.
 * @param terrainSet int
 * @returns int
 */
  getTerrainsCount(terrainSet: int): int;
/**
 * Returns a terrain set mode.
 * @param terrainSet int
 * @returns int
 */
  getTerrainSetMode(terrainSet: int): int;
/**
 * Returns the terrain sets count.
 * @returns int
 */
  getTerrainSetsCount(): int;
/**
 * Returns if there is an alternative-level proxy for the given identifiers.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 * @param alternativeFrom int
 * @returns boolean
 */
  hasAlternativeLevelTileProxy(sourceFrom: int, coordsFrom: Vector2i, alternativeFrom: int): boolean;
/**
 * Returns if there is a coodinates-level proxy for the given identifiers.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 * @returns boolean
 */
  hasCoordsLevelTileProxy(sourceFrom: int, coordsFrom: Vector2i): boolean;
/**
 * Returns if there is a custom data layer named `layer_name`.
 * @param layerName string
 * @returns boolean
 */
  hasCustomDataLayerByName(layerName: string): boolean;
/**
 * Returns if this TileSet has a source for the given source ID.
 * @param sourceId int
 * @returns boolean
 */
  hasSource(sourceId: int): boolean;
/**
 * Returns if there is a source-level proxy for the given source ID.
 * @param sourceFrom int
 * @returns boolean
 */
  hasSourceLevelTileProxy(sourceFrom: int): boolean;
/**
 * According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.
 * This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.
 * If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 * @param alternativeFrom int
 * @returns GodotArray<any>
 */
  mapTileProxy(sourceFrom: int, coordsFrom: Vector2i, alternativeFrom: int): GodotArray<any>;
/**
 * Moves the custom data layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 * @param toPosition int
 */
  moveCustomDataLayer(layerIndex: int, toPosition: int): void;
/**
 * Moves the navigation layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 * @param toPosition int
 */
  moveNavigationLayer(layerIndex: int, toPosition: int): void;
/**
 * Moves the occlusion layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 * @param toPosition int
 */
  moveOcclusionLayer(layerIndex: int, toPosition: int): void;
/**
 * Moves the physics layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 * @param toPosition int
 */
  movePhysicsLayer(layerIndex: int, toPosition: int): void;
/**
 * Moves the terrain at index `terrain_index` for terrain set `terrain_set` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.
 * @param terrainSet int
 * @param terrainIndex int
 * @param toPosition int
 */
  moveTerrain(terrainSet: int, terrainIndex: int, toPosition: int): void;
/**
 * Moves the terrain set at index `terrain_set` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.
 * @param terrainSet int
 * @param toPosition int
 */
  moveTerrainSet(terrainSet: int, toPosition: int): void;
/**
 * Removes an alternative-level proxy for the given identifiers.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 * @param alternativeFrom int
 */
  removeAlternativeLevelTileProxy(sourceFrom: int, coordsFrom: Vector2i, alternativeFrom: int): void;
/**
 * Removes a coordinates-level proxy for the given identifiers.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 */
  removeCoordsLevelTileProxy(sourceFrom: int, coordsFrom: Vector2i): void;
/**
 * Removes the custom data layer at index `layer_index`. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 */
  removeCustomDataLayer(layerIndex: int): void;
/**
 * Removes the navigation layer at index `layer_index`. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 */
  removeNavigationLayer(layerIndex: int): void;
/**
 * Removes the occlusion layer at index `layer_index`. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 */
  removeOcclusionLayer(layerIndex: int): void;
/**
 * Remove the `TileMapPattern` at the given index.
 * @param index int
 */
  removePattern(index: int): void;
/**
 * Removes the physics layer at index `layer_index`. Also updates the atlas tiles accordingly.
 * @param layerIndex int
 */
  removePhysicsLayer(layerIndex: int): void;
/**
 * Removes the source with the given source ID.
 * @param sourceId int
 */
  removeSource(sourceId: int): void;
/**
 * Removes a source-level tile proxy.
 * @param sourceFrom int
 */
  removeSourceLevelTileProxy(sourceFrom: int): void;
/**
 * Removes the terrain at index `terrain_index` in the given terrain set `terrain_set`. Also updates the atlas tiles accordingly.
 * @param terrainSet int
 * @param terrainIndex int
 */
  removeTerrain(terrainSet: int, terrainIndex: int): void;
/**
 * Removes the terrain set at index `terrain_set`. Also updates the atlas tiles accordingly.
 * @param terrainSet int
 */
  removeTerrainSet(terrainSet: int): void;
/**
 * Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.
 * This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.
 * Proxied tiles can be automatically replaced in TileMap nodes using the editor.
 * @param sourceFrom int
 * @param coordsFrom Vector2i
 * @param alternativeFrom int
 * @param sourceTo int
 * @param coordsTo Vector2i
 * @param alternativeTo int
 */
  setAlternativeLevelTileProxy(sourceFrom: int, coordsFrom: Vector2i, alternativeFrom: int, sourceTo: int, coordsTo: Vector2i, alternativeTo: int): void;
/**
 * Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.
 * This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.
 * Proxied tiles can be automatically replaced in TileMap nodes using the editor.
 * @param pSourceFrom int
 * @param coordsFrom Vector2i
 * @param sourceTo int
 * @param coordsTo Vector2i
 */
  setCoordsLevelTileProxy(pSourceFrom: int, coordsFrom: Vector2i, sourceTo: int, coordsTo: Vector2i): void;
/**
 * Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error.
 * @param layerIndex int
 * @param layerName string
 */
  setCustomDataLayerName(layerIndex: int, layerName: string): void;
/**
 * Sets the type of the custom data layer identified by the given index.
 * @param layerIndex int
 * @param layerType int
 */
  setCustomDataLayerType(layerIndex: int, layerType: int): void;
/**
 * Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer.
 * @param layerIndex int
 * @param layers int
 */
  setNavigationLayerLayers(layerIndex: int, layers: int): void;
/**
 * Based on `value`, enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given `layer_index`, given a navigation_layers `layer_number` between 1 and 32.
 * @param layerIndex int
 * @param layerNumber int
 * @param value boolean
 */
  setNavigationLayerLayerValue(layerIndex: int, layerNumber: int, value: boolean): void;
/**
 * Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer.
 * @param layerIndex int
 * @param lightMask int
 */
  setOcclusionLayerLightMask(layerIndex: int, lightMask: int): void;
/**
 * Enables or disables SDF collision for occluders in the given TileSet occlusion layer.
 * @param layerIndex int
 * @param sdfCollision boolean
 */
  setOcclusionLayerSdfCollision(layerIndex: int, sdfCollision: boolean): void;
/**
 * Sets the collision layer (as in the physics server) for bodies in the given TileSet physics layer.
 * @param layerIndex int
 * @param layer int
 */
  setPhysicsLayerCollisionLayer(layerIndex: int, layer: int): void;
/**
 * Sets the collision mask for bodies in the given TileSet physics layer.
 * @param layerIndex int
 * @param mask int
 */
  setPhysicsLayerCollisionMask(layerIndex: int, mask: int): void;
/**
 * Sets the collision priority for bodies in the given TileSet physics layer.
 * @param layerIndex int
 * @param priority float
 */
  setPhysicsLayerCollisionPriority(layerIndex: int, priority: float): void;
/**
 * Sets the physics material for bodies in the given TileSet physics layer.
 * @param layerIndex int
 * @param physicsMaterial PhysicsMaterial
 */
  setPhysicsLayerPhysicsMaterial(layerIndex: int, physicsMaterial: PhysicsMaterial): void;
/**
 * Changes a source's ID.
 * @param sourceId int
 * @param newSourceId int
 */
  setSourceId(sourceId: int, newSourceId: int): void;
/**
 * Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.
 * This can be used to replace a source in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target source when one is available.
 * Proxied tiles can be automatically replaced in TileMap nodes using the editor.
 * @param sourceFrom int
 * @param sourceTo int
 */
  setSourceLevelTileProxy(sourceFrom: int, sourceTo: int): void;
/**
 * Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor.
 * @param terrainSet int
 * @param terrainIndex int
 * @param color Color
 */
  setTerrainColor(terrainSet: int, terrainIndex: int, color: Color): void;
/**
 * Sets a terrain's name.
 * @param terrainSet int
 * @param terrainIndex int
 * @param name string
 */
  setTerrainName(terrainSet: int, terrainIndex: int, name: string): void;
/**
 * Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains.
 * @param terrainSet int
 * @param mode int
 */
  setTerrainSetMode(terrainSet: int, mode: int): void;
/**
 * Rectangular tile shape.
 */
  static readonly TILE_SHAPE_SQUARE: int;
/**
 * Diamond tile shape (for isometric look).
 * 
 * **Note:** Isometric `TileSet` works best if `TileMap` and all its layers have Y-sort enabled.
 */
  static readonly TILE_SHAPE_ISOMETRIC: int;
/**
 * Rectangular tile shape with one row/column out of two offset by half a tile.
 */
  static readonly TILE_SHAPE_HALF_OFFSET_SQUARE: int;
/**
 * Hexagonal tile shape.
 */
  static readonly TILE_SHAPE_HEXAGON: int;
/**
 * Tile coordinates layout where both axis stay consistent with their respective local horizontal and vertical axis.
 */
  static readonly TILE_LAYOUT_STACKED: int;
/**
 * Same as `TILE_LAYOUT_STACKED`, but the first half-offset is negative instead of positive.
 */
  static readonly TILE_LAYOUT_STACKED_OFFSET: int;
/**
 * Tile coordinates layout where the horizontal axis stay horizontal, and the vertical one goes down-right.
 */
  static readonly TILE_LAYOUT_STAIRS_RIGHT: int;
/**
 * Tile coordinates layout where the vertical axis stay vertical, and the horizontal one goes down-right.
 */
  static readonly TILE_LAYOUT_STAIRS_DOWN: int;
/**
 * Tile coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right.
 */
  static readonly TILE_LAYOUT_DIAMOND_RIGHT: int;
/**
 * Tile coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left.
 */
  static readonly TILE_LAYOUT_DIAMOND_DOWN: int;
/**
 * Horizontal half-offset.
 */
  static readonly TILE_OFFSET_AXIS_HORIZONTAL: int;
/**
 * Vertical half-offset.
 */
  static readonly TILE_OFFSET_AXIS_VERTICAL: int;
/**
 * Neighbor on the right side.
 */
  static readonly CELL_NEIGHBOR_RIGHT_SIDE: int;
/**
 * Neighbor in the right corner.
 */
  static readonly CELL_NEIGHBOR_RIGHT_CORNER: int;
/**
 * Neighbor on the bottom right side.
 */
  static readonly CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE: int;
/**
 * Neighbor in the bottom right corner.
 */
  static readonly CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER: int;
/**
 * Neighbor on the bottom side.
 */
  static readonly CELL_NEIGHBOR_BOTTOM_SIDE: int;
/**
 * Neighbor in the bottom corner.
 */
  static readonly CELL_NEIGHBOR_BOTTOM_CORNER: int;
/**
 * Neighbor on the bottom left side.
 */
  static readonly CELL_NEIGHBOR_BOTTOM_LEFT_SIDE: int;
/**
 * Neighbor in the bottom left corner.
 */
  static readonly CELL_NEIGHBOR_BOTTOM_LEFT_CORNER: int;
/**
 * Neighbor on the left side.
 */
  static readonly CELL_NEIGHBOR_LEFT_SIDE: int;
/**
 * Neighbor in the left corner.
 */
  static readonly CELL_NEIGHBOR_LEFT_CORNER: int;
/**
 * Neighbor on the top left side.
 */
  static readonly CELL_NEIGHBOR_TOP_LEFT_SIDE: int;
/**
 * Neighbor in the top left corner.
 */
  static readonly CELL_NEIGHBOR_TOP_LEFT_CORNER: int;
/**
 * Neighbor on the top side.
 */
  static readonly CELL_NEIGHBOR_TOP_SIDE: int;
/**
 * Neighbor in the top corner.
 */
  static readonly CELL_NEIGHBOR_TOP_CORNER: int;
/**
 * Neighbor on the top right side.
 */
  static readonly CELL_NEIGHBOR_TOP_RIGHT_SIDE: int;
/**
 * Neighbor in the top right corner.
 */
  static readonly CELL_NEIGHBOR_TOP_RIGHT_CORNER: int;
/**
 * Requires both corners and side to match with neighboring tiles' terrains.
 */
  static readonly TERRAIN_MODE_MATCH_CORNERS_AND_SIDES: int;
/**
 * Requires corners to match with neighboring tiles' terrains.
 */
  static readonly TERRAIN_MODE_MATCH_CORNERS: int;
/**
 * Requires sides to match with neighboring tiles' terrains.
 */
  static readonly TERRAIN_MODE_MATCH_SIDES: int;
}
