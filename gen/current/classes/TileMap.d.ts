import type { Color, GodotArray, GodotDictionary, Node2D, RID, Rect2i, Signal, TileData, TileMapPattern, TileSet, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * Node for 2D tile-based maps.
 * 
 * Node for 2D tile-based maps. Tilemaps use a `TileSet` which contain a list of tiles which are used to create grid-based maps. A TileMap may have several layers, layouting tiles on top of each other.
 * For performance reasons, all TileMap updates are batched at the end of a frame. Notably, this means that scene tiles from a `TileSetScenesCollectionSource` may be initialized after their parent. This is only queued when inside the scene tree.
 * To force an update earlier on, call `update_internals`.
 * 
 * **Note:** For performance and compatibility reasons, the coordinates serialized by `TileMap` are limited to 16-bit signed integers, i.e. the range for X and Y coordinates is from `-32768` to `32767`. When saving tile data, tiles outside this range are wrapped.
 * @deprecated Use multiple `TileMapLayer` nodes instead. To convert a TileMap to a set of TileMapLayer nodes, open the TileMap bottom panel with the node selected, click the toolbox icon in the top-right corner and choose 'Extract TileMap layers as individual TileMapLayer nodes'.
 */
export class TileMap extends Node2D {
/**
 * If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.
 * 
 * **Note:** Enabling `collision_animatable` may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.
 */
  collisionAnimatable: boolean;
/**
 * Show or hide the TileMap's collision shapes. If set to `VISIBILITY_MODE_DEFAULT`, this depends on the show collision debug settings.
 */
  collisionVisibilityMode: int;
/**
 * Show or hide the TileMap's navigation meshes. If set to `VISIBILITY_MODE_DEFAULT`, this depends on the show navigation debug settings.
 */
  navigationVisibilityMode: int;
/**
 * The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. `rendering_quadrant_size` defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.
 * The quadrant size does not apply on Y-sorted layers, as tiles are grouped by Y position instead in that case.
 * 
 * **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.
 */
  renderingQuadrantSize: int;
/**
 * The `TileSet` used by this `TileMap`. The textures, collisions, and additional behavior of all available tiles are stored here.
 */
  tileSet: TileSet;
/**
 * Adds a layer at the given position `to_position` in the array. If `to_position` is negative, the position is counted from the end, with `-1` adding the layer at the end of the array.
 * @param toPosition int
 */
  addLayer(toPosition: int): void;
/**
 * Clears all cells.
 */
  clear(): void;
/**
 * Clears all cells on the given layer.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 */
  clearLayer(layer: int): void;
/**
 * Erases the cell on layer `layer` at coordinates `coords`.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param coords Vector2i
 */
  eraseCell(layer: int, coords: Vector2i): void;
/**
 * Clears cells that do not exist in the tileset.
 */
  fixInvalidTiles(): void;
/**
 * Forces the TileMap and the layer `layer` to update.
 * @param layer int (optional, default: -1)
 * @deprecated Use `notify_runtime_tile_data_update` and/or `update_internals` instead.
 */
  forceUpdate(layer?: int): void;
/**
 * Returns the tile alternative ID of the cell on layer `layer` at `coords`.
 * If `use_proxies` is `false`, ignores the `TileSet`'s tile proxies, returning the raw alternative identifier. See `TileSet.map_tile_proxy`.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param coords Vector2i
 * @param useProxies boolean (optional, default: false)
 * @returns int
 */
  getCellAlternativeTile(layer: int, coords: Vector2i, useProxies?: boolean): int;
/**
 * Returns the tile atlas coordinates ID of the cell on layer `layer` at coordinates `coords`. Returns `Vector2i(-1, -1)` if the cell does not exist.
 * If `use_proxies` is `false`, ignores the `TileSet`'s tile proxies, returning the raw atlas coordinate identifier. See `TileSet.map_tile_proxy`.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param coords Vector2i
 * @param useProxies boolean (optional, default: false)
 * @returns Vector2i
 */
  getCellAtlasCoords(layer: int, coords: Vector2i, useProxies?: boolean): Vector2i;
/**
 * Returns the tile source ID of the cell on layer `layer` at coordinates `coords`. Returns `-1` if the cell does not exist.
 * If `use_proxies` is `false`, ignores the `TileSet`'s tile proxies, returning the raw source identifier. See `TileSet.map_tile_proxy`.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param coords Vector2i
 * @param useProxies boolean (optional, default: false)
 * @returns int
 */
  getCellSourceId(layer: int, coords: Vector2i, useProxies?: boolean): int;
/**
 * Returns the `TileData` object associated with the given cell, or `null` if the cell does not exist or is not a `TileSetAtlasSource`.
 * If `layer` is negative, the layers are accessed from the last one.
 * 
 * 				```gdscript
 * 
 * 				func get_clicked_tile_power():
 * 				    var clicked_cell = tile_map.local_to_map(tile_map.get_local_mouse_position())
 * 				    var data = tile_map.get_cell_tile_data(0, clicked_cell)
 * 				    if data:
 * 				        return data.get_custom_data("power")
 * 				    else:
 * 				        return 0
 * 				
 * 
 * ```
 * If `use_proxies` is `false`, ignores the `TileSet`'s tile proxies. See `TileSet.map_tile_proxy`.
 * @param layer int
 * @param coords Vector2i
 * @param useProxies boolean (optional, default: false)
 * @returns TileData
 */
  getCellTileData(layer: int, coords: Vector2i, useProxies?: boolean): TileData;
/**
 * Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from `KinematicCollision2D.get_collider_rid`, when colliding with a tile.
 * @param body RID
 * @returns Vector2i
 */
  getCoordsForBodyRid(body: RID): Vector2i;
/**
 * Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from `KinematicCollision2D.get_collider_rid`, when colliding with a tile.
 * @param body RID
 * @returns int
 */
  getLayerForBodyRid(body: RID): int;
/**
 * Returns a TileMap layer's modulate.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns Color
 */
  getLayerModulate(layer: int): Color;
/**
 * Returns a TileMap layer's name.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns string
 */
  getLayerName(layer: int): string;
/**
 * Returns the `RID` of the `NavigationServer2D` navigation map assigned to the specified TileMap layer `layer`.
 * By default the TileMap uses the default `World2D` navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.
 * In order to make `NavigationAgent2D` switch between TileMap layer navigation maps use `NavigationAgent2D.set_navigation_map` with the navigation map received from `get_layer_navigation_map`.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns RID
 */
  getLayerNavigationMap(layer: int): RID;
/**
 * Returns the number of layers in the TileMap.
 * @returns int
 */
  getLayersCount(): int;
/**
 * Returns a TileMap layer's Y sort origin.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns int
 */
  getLayerYSortOrigin(layer: int): int;
/**
 * Returns a TileMap layer's Z-index value.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns int
 */
  getLayerZIndex(layer: int): int;
/**
 * Returns the `RID` of the `NavigationServer2D` navigation map assigned to the specified TileMap layer `layer`.
 * @param layer int
 * @returns RID
 * @deprecated Use `get_layer_navigation_map` instead.
 */
  getNavigationMap(layer: int): RID;
/**
 * Returns the neighboring cell to the one at coordinates `coords`, identified by the `neighbor` direction. This method takes into account the different layouts a TileMap can take.
 * @param coords Vector2i
 * @param neighbor int
 * @returns Vector2i
 */
  getNeighborCell(coords: Vector2i, neighbor: int): Vector2i;
/**
 * Creates a new `TileMapPattern` from the given layer and set of cells.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param coordsArray Vector2i[]
 * @returns TileMapPattern
 */
  getPattern(layer: int, coordsArray: Vector2i[]): TileMapPattern;
/**
 * Returns the list of all neighbourings cells to the one at `coords`.
 * @param coords Vector2i
 * @returns Vector2i[]
 */
  getSurroundingCells(coords: Vector2i): Vector2i[];
/**
 * Returns a `Vector2i` array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns Vector2i[]
 */
  getUsedCells(layer: int): Vector2i[];
/**
 * Returns a `Vector2i` array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source (`source_id`), their atlas coordinates (`atlas_coords`) or alternative id (`alternative_tile`).
 * If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as `get_used_cells`.
 * A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param sourceId int (optional, default: -1)
 * @param atlasCoords Vector2i (optional, default: Vector2i(-1, -1))
 * @param alternativeTile int (optional, default: -1)
 * @returns Vector2i[]
 */
  getUsedCellsById(layer: int, sourceId?: int, atlasCoords?: Vector2i, alternativeTile?: int): Vector2i[];
/**
 * Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers.
 * @returns Rect2i
 */
  getUsedRect(): Rect2i;
/**
 * Returns `true` if the cell on layer `layer` at coordinates `coords` is flipped horizontally. The result is valid only for atlas sources.
 * @param layer int
 * @param coords Vector2i
 * @param useProxies boolean (optional, default: false)
 * @returns boolean
 */
  isCellFlippedH(layer: int, coords: Vector2i, useProxies?: boolean): boolean;
/**
 * Returns `true` if the cell on layer `layer` at coordinates `coords` is flipped vertically. The result is valid only for atlas sources.
 * @param layer int
 * @param coords Vector2i
 * @param useProxies boolean (optional, default: false)
 * @returns boolean
 */
  isCellFlippedV(layer: int, coords: Vector2i, useProxies?: boolean): boolean;
/**
 * Returns `true` if the cell on layer `layer` at coordinates `coords` is transposed. The result is valid only for atlas sources.
 * @param layer int
 * @param coords Vector2i
 * @param useProxies boolean (optional, default: false)
 * @returns boolean
 */
  isCellTransposed(layer: int, coords: Vector2i, useProxies?: boolean): boolean;
/**
 * Returns if a layer is enabled.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns boolean
 */
  isLayerEnabled(layer: int): boolean;
/**
 * Returns if a layer's built-in navigation regions generation is enabled.
 * @param layer int
 * @returns boolean
 */
  isLayerNavigationEnabled(layer: int): boolean;
/**
 * Returns if a layer Y-sorts its tiles.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @returns boolean
 */
  isLayerYSortEnabled(layer: int): boolean;
/**
 * Returns the map coordinates of the cell containing the given `local_position`. If `local_position` is in global coordinates, consider using `Node2D.to_local` before passing it to this method. See also `map_to_local`.
 * @param localPosition Vector2
 * @returns Vector2i
 */
  localToMap(localPosition: Vector2): Vector2i;
/**
 * Returns for the given coordinate `coords_in_pattern` in a `TileMapPattern` the corresponding cell coordinates if the pattern was pasted at the `position_in_tilemap` coordinates (see `set_pattern`). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`.
 * @param positionInTilemap Vector2i
 * @param coordsInPattern Vector2i
 * @param pattern TileMapPattern
 * @returns Vector2i
 */
  mapPattern(positionInTilemap: Vector2i, coordsInPattern: Vector2i, pattern: TileMapPattern): Vector2i;
/**
 * Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use `Node2D.to_global`. See also `local_to_map`.
 * 
 * **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the `TileData.texture_origin` property of individual tiles.
 * @param mapPosition Vector2i
 * @returns Vector2
 */
  mapToLocal(mapPosition: Vector2i): Vector2;
/**
 * Moves the layer at index `layer` to the given position `to_position` in the array.
 * @param layer int
 * @param toPosition int
 */
  moveLayer(layer: int, toPosition: int): void;
/**
 * Notifies the TileMap node that calls to `_use_tile_data_runtime_update` or `_tile_data_runtime_update` will lead to different results. This will thus trigger a TileMap update.
 * If `layer` is provided, only notifies changes for the given layer. Providing the `layer` argument (when applicable) is usually preferred for performance reasons.
 * 
 * **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.
 * 
 * **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call `update_internals`).
 * @param layer int (optional, default: -1)
 */
  notifyRuntimeTileDataUpdate(layer?: int): void;
/**
 * Removes the layer at index `layer`.
 * @param layer int
 */
  removeLayer(layer: int): void;
/**
 * Sets the tile identifiers for the cell on layer `layer` at coordinates `coords`. Each tile of the `TileSet` is identified using three parts:
 * - The source identifier `source_id` identifies a `TileSetSource` identifier. See `TileSet.set_source_id`,
 * - The atlas coordinates identifier `atlas_coords` identifies a tile coordinates in the atlas (if the source is a `TileSetAtlasSource`). For `TileSetScenesCollectionSource` it should always be `Vector2i(0, 0)`),
 * - The alternative tile identifier `alternative_tile` identifies a tile alternative in the atlas (if the source is a `TileSetAtlasSource`), and the scene for a `TileSetScenesCollectionSource`.
 * If `source_id` is set to `-1`, `atlas_coords` to `Vector2i(-1, -1)` or `alternative_tile` to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param coords Vector2i
 * @param sourceId int (optional, default: -1)
 * @param atlasCoords Vector2i (optional, default: Vector2i(-1, -1))
 * @param alternativeTile int (optional, default: 0)
 */
  setCell(layer: int, coords: Vector2i, sourceId?: int, atlasCoords?: Vector2i, alternativeTile?: int): void;
/**
 * Update all the cells in the `cells` coordinates array so that they use the given `terrain` for the given `terrain_set`. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.
 * If `ignore_empty_terrains` is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
 * If `layer` is negative, the layers are accessed from the last one.
 * 
 * **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
 * @param layer int
 * @param cells Vector2i[]
 * @param terrainSet int
 * @param terrain int
 * @param ignoreEmptyTerrains boolean (optional, default: true)
 */
  setCellsTerrainConnect(layer: int, cells: Vector2i[], terrainSet: int, terrain: int, ignoreEmptyTerrains?: boolean): void;
/**
 * Update all the cells in the `path` coordinates array so that they use the given `terrain` for the given `terrain_set`. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.
 * If `ignore_empty_terrains` is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
 * If `layer` is negative, the layers are accessed from the last one.
 * 
 * **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
 * @param layer int
 * @param path Vector2i[]
 * @param terrainSet int
 * @param terrain int
 * @param ignoreEmptyTerrains boolean (optional, default: true)
 */
  setCellsTerrainPath(layer: int, path: Vector2i[], terrainSet: int, terrain: int, ignoreEmptyTerrains?: boolean): void;
/**
 * Enables or disables the layer `layer`. A disabled layer is not processed at all (no rendering, no physics, etc.).
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param enabled boolean
 */
  setLayerEnabled(layer: int, enabled: boolean): void;
/**
 * Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param modulate Color
 */
  setLayerModulate(layer: int, modulate: Color): void;
/**
 * Sets a layer's name. This is mostly useful in the editor.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param name string
 */
  setLayerName(layer: int, name: string): void;
/**
 * Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a `NavigationRegion2D` node.
 * @param layer int
 * @param enabled boolean
 */
  setLayerNavigationEnabled(layer: int, enabled: boolean): void;
/**
 * Assigns `map` as a `NavigationServer2D` navigation map for the specified TileMap layer `layer`.
 * By default the TileMap uses the default `World2D` navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.
 * In order to make `NavigationAgent2D` switch between TileMap layer navigation maps use `NavigationAgent2D.set_navigation_map` with the navigation map received from `get_layer_navigation_map`.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param map RID
 */
  setLayerNavigationMap(layer: int, map: RID): void;
/**
 * Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.
 * Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param ySortEnabled boolean
 */
  setLayerYSortEnabled(layer: int, ySortEnabled: boolean): void;
/**
 * Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.
 * This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param ySortOrigin int
 */
  setLayerYSortOrigin(layer: int, ySortOrigin: int): void;
/**
 * Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param zIndex int
 */
  setLayerZIndex(layer: int, zIndex: int): void;
/**
 * Assigns `map` as a `NavigationServer2D` navigation map for the specified TileMap layer `layer`.
 * @param layer int
 * @param map RID
 * @deprecated Use `set_layer_navigation_map` instead.
 */
  setNavigationMap(layer: int, map: RID): void;
/**
 * Paste the given `TileMapPattern` at the given `position` and `layer` in the tile map.
 * If `layer` is negative, the layers are accessed from the last one.
 * @param layer int
 * @param position Vector2i
 * @param pattern TileMapPattern
 */
  setPattern(layer: int, position: Vector2i, pattern: TileMapPattern): void;
/**
 * Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.
 * This method is only called if `_use_tile_data_runtime_update` is implemented and returns `true` for the given tile `coords` and `layer`.
 * 
 * **Warning:** The `tile_data` object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.
 * 
 * **Note:** If the properties of `tile_data` object should change over time, use `notify_runtime_tile_data_update` to notify the TileMap it needs an update.
 * @param layer int
 * @param coords Vector2i
 * @param tileData TileData
 */
  private tileDataRuntimeUpdate(layer: int, coords: Vector2i, tileData: TileData): void;
/**
 * Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.
 * However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.
 * 
 * **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.
 */
  updateInternals(): void;
/**
 * Should return `true` if the tile at coordinates `coords` on layer `layer` requires a runtime update.
 * 
 * **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.
 * 
 * **Note:** If the result of this function should changed, use `notify_runtime_tile_data_update` to notify the TileMap it needs an update.
 * @param layer int
 * @param coords Vector2i
 * @returns boolean
 */
  private useTileDataRuntimeUpdate(layer: int, coords: Vector2i): boolean;
/**
 * Emitted when the `TileSet` of this TileMap changes.
 */
  changed: Signal<[]>;
/**
 * Use the debug settings to determine visibility.
 */
  static readonly VISIBILITY_MODE_DEFAULT: int;
/**
 * Always hide.
 */
  static readonly VISIBILITY_MODE_FORCE_HIDE: int;
/**
 * Always show.
 */
  static readonly VISIBILITY_MODE_FORCE_SHOW: int;
}
