import type { GodotArray, GodotDictionary, Node2D, PackedByteArray, RID, Rect2i, Signal, TileData, TileMapPattern, TileSet, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * Node for 2D tile-based maps.
 * 
 * Node for 2D tile-based maps. A `TileMapLayer` uses a `TileSet` which contain a list of tiles which are used to create grid-based maps. Unlike the `TileMap` node, which is deprecated, `TileMapLayer` has only one layer of tiles. You can use several `TileMapLayer` to achieve the same result as a `TileMap` node.
 * For performance reasons, all TileMap updates are batched at the end of a frame. Notably, this means that scene tiles from a `TileSetScenesCollectionSource` may be initialized after their parent. This is only queued when inside the scene tree.
 * To force an update earlier on, call `update_internals`.
 * 
 * **Note:** For performance and compatibility reasons, the coordinates serialized by `TileMapLayer` are limited to 16-bit signed integers, i.e. the range for X and Y coordinates is from `-32768` to `32767`. When saving tile data, tiles outside this range are wrapped.
 */
export class TileMapLayer extends Node2D {
/**
 * Enable or disable collisions.
 */
  collisionEnabled: boolean;
/**
 * Show or hide the `TileMapLayer`'s collision shapes. If set to `DEBUG_VISIBILITY_MODE_DEFAULT`, this depends on the show collision debug settings.
 */
  collisionVisibilityMode: int;
/**
 * If `false`, disables this `TileMapLayer` completely (rendering, collision, navigation, scene tiles, etc.)
 */
  enabled: boolean;
/**
 * If `true`, navigation regions are enabled.
 */
  navigationEnabled: boolean;
/**
 * Show or hide the `TileMapLayer`'s navigation meshes. If set to `DEBUG_VISIBILITY_MODE_DEFAULT`, this depends on the show navigation debug settings.
 */
  navigationVisibilityMode: int;
/**
 * Enable or disable light occlusion.
 */
  occlusionEnabled: boolean;
/**
 * The `TileMapLayer`'s quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. `rendering_quadrant_size` defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.
 * The quadrant size does not apply on a Y-sorted `TileMapLayer`, as tiles are grouped by Y position instead in that case.
 * 
 * **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the `TileMapLayer`'s local coordinate system.
 */
  renderingQuadrantSize: int;
/**
 * The raw tile map data as a byte array.
 */
  tileMapData: PackedByteArray;
/**
 * The `TileSet` used by this layer. The textures, collisions, and additional behavior of all available tiles are stored here.
 */
  tileSet: TileSet;
/**
 * If `true`, this `TileMapLayer` collision shapes will be instantiated as kinematic bodies. This can be needed for moving `TileMapLayer` nodes (i.e. moving platforms).
 */
  useKinematicBodies: boolean;
/**
 * If `CanvasItem.y_sort_enabled` is enabled, setting this to `true` will reverse the order the tiles are drawn on the X-axis.
 */
  xDrawOrderReversed: boolean;
/**
 * This Y-sort origin value is added to each tile's Y-sort origin value. This allows, for example, to fake a different height level. This can be useful for top-down view games.
 */
  ySortOrigin: int;
/**
 * Clears all cells.
 */
  clear(): void;
/**
 * Erases the cell at coordinates `coords`.
 * @param coords Vector2i
 */
  eraseCell(coords: Vector2i): void;
/**
 * Clears cells containing tiles that do not exist in the `tile_set`.
 */
  fixInvalidTiles(): void;
/**
 * Returns the tile alternative ID of the cell at coordinates `coords`.
 * @param coords Vector2i
 * @returns int
 */
  getCellAlternativeTile(coords: Vector2i): int;
/**
 * Returns the tile atlas coordinates ID of the cell at coordinates `coords`. Returns `Vector2i(-1, -1)` if the cell does not exist.
 * @param coords Vector2i
 * @returns Vector2i
 */
  getCellAtlasCoords(coords: Vector2i): Vector2i;
/**
 * Returns the tile source ID of the cell at coordinates `coords`. Returns `-1` if the cell does not exist.
 * @param coords Vector2i
 * @returns int
 */
  getCellSourceId(coords: Vector2i): int;
/**
 * Returns the `TileData` object associated with the given cell, or `null` if the cell does not exist or is not a `TileSetAtlasSource`.
 * 
 * 				```gdscript
 * 
 * 				func get_clicked_tile_power():
 * 				    var clicked_cell = tile_map_layer.local_to_map(tile_map_layer.get_local_mouse_position())
 * 				    var data = tile_map_layer.get_cell_tile_data(clicked_cell)
 * 				    if data:
 * 				        return data.get_custom_data("power")
 * 				    else:
 * 				        return 0
 * 				
 * 
 * ```
 * @param coords Vector2i
 * @returns TileData
 */
  getCellTileData(coords: Vector2i): TileData;
/**
 * Returns the coordinates of the tile for given physics body `RID`. Such an `RID` can be retrieved from `KinematicCollision2D.get_collider_rid`, when colliding with a tile.
 * @param body RID
 * @returns Vector2i
 */
  getCoordsForBodyRid(body: RID): Vector2i;
/**
 * Returns the `RID` of the `NavigationServer2D` navigation used by this `TileMapLayer`.
 * By default this returns the default `World2D` navigation map, unless a custom map was provided using `set_navigation_map`.
 * @returns RID
 */
  getNavigationMap(): RID;
/**
 * Returns the neighboring cell to the one at coordinates `coords`, identified by the `neighbor` direction. This method takes into account the different layouts a TileMap can take.
 * @param coords Vector2i
 * @param neighbor int
 * @returns Vector2i
 */
  getNeighborCell(coords: Vector2i, neighbor: int): Vector2i;
/**
 * Creates and returns a new `TileMapPattern` from the given array of cells. See also `set_pattern`.
 * @param coordsArray Vector2i[]
 * @returns TileMapPattern
 */
  getPattern(coordsArray: Vector2i[]): TileMapPattern;
/**
 * Returns the list of all neighboring cells to the one at `coords`. Any neighboring cell is one that is touching edges, so for a square cell 4 cells would be returned, for a hexagon 6 cells are returned.
 * @param coords Vector2i
 * @returns Vector2i[]
 */
  getSurroundingCells(coords: Vector2i): Vector2i[];
/**
 * Returns a `Vector2i` array with the positions of all cells containing a tile. A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`.
 * @returns Vector2i[]
 */
  getUsedCells(): Vector2i[];
/**
 * Returns a `Vector2i` array with the positions of all cells containing a tile. Tiles may be filtered according to their source (`source_id`), their atlas coordinates (`atlas_coords`), or alternative id (`alternative_tile`).
 * If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default values, this method returns the same result as `get_used_cells`.
 * A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`.
 * @param sourceId int (optional, default: -1)
 * @param atlasCoords Vector2i (optional, default: Vector2i(-1, -1))
 * @param alternativeTile int (optional, default: -1)
 * @returns Vector2i[]
 */
  getUsedCellsById(sourceId?: int, atlasCoords?: Vector2i, alternativeTile?: int): Vector2i[];
/**
 * Returns a rectangle enclosing the used (non-empty) tiles of the map.
 * @returns Rect2i
 */
  getUsedRect(): Rect2i;
/**
 * Returns whether the provided `body` `RID` belongs to one of this `TileMapLayer`'s cells.
 * @param body RID
 * @returns boolean
 */
  hasBodyRid(body: RID): boolean;
/**
 * Returns `true` if the cell at coordinates `coords` is flipped horizontally. The result is valid only for atlas sources.
 * @param coords Vector2i
 * @returns boolean
 */
  isCellFlippedH(coords: Vector2i): boolean;
/**
 * Returns `true` if the cell at coordinates `coords` is flipped vertically. The result is valid only for atlas sources.
 * @param coords Vector2i
 * @returns boolean
 */
  isCellFlippedV(coords: Vector2i): boolean;
/**
 * Returns `true` if the cell at coordinates `coords` is transposed. The result is valid only for atlas sources.
 * @param coords Vector2i
 * @returns boolean
 */
  isCellTransposed(coords: Vector2i): boolean;
/**
 * Returns the map coordinates of the cell containing the given `local_position`. If `local_position` is in global coordinates, consider using `Node2D.to_local` before passing it to this method. See also `map_to_local`.
 * @param localPosition Vector2
 * @returns Vector2i
 */
  localToMap(localPosition: Vector2): Vector2i;
/**
 * Returns for the given coordinates `coords_in_pattern` in a `TileMapPattern` the corresponding cell coordinates if the pattern was pasted at the `position_in_tilemap` coordinates (see `set_pattern`). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`.
 * @param positionInTilemap Vector2i
 * @param coordsInPattern Vector2i
 * @param pattern TileMapPattern
 * @returns Vector2i
 */
  mapPattern(positionInTilemap: Vector2i, coordsInPattern: Vector2i, pattern: TileMapPattern): Vector2i;
/**
 * Returns the centered position of a cell in the `TileMapLayer`'s local coordinate space. To convert the returned value into global coordinates, use `Node2D.to_global`. See also `local_to_map`.
 * 
 * **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the `TileData.texture_origin` property of individual tiles.
 * @param mapPosition Vector2i
 * @returns Vector2
 */
  mapToLocal(mapPosition: Vector2i): Vector2;
/**
 * Notifies the `TileMapLayer` node that calls to `_use_tile_data_runtime_update` or `_tile_data_runtime_update` will lead to different results. This will thus trigger a `TileMapLayer` update.
 * 
 * **Warning:** Updating the `TileMapLayer` is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.
 * 
 * **Note:** This does not trigger a direct update of the `TileMapLayer`, the update will be done at the end of the frame as usual (unless you call `update_internals`).
 */
  notifyRuntimeTileDataUpdate(): void;
/**
 * Sets the tile identifiers for the cell at coordinates `coords`. Each tile of the `TileSet` is identified using three parts:
 * - The source identifier `source_id` identifies a `TileSetSource` identifier. See `TileSet.set_source_id`,
 * - The atlas coordinate identifier `atlas_coords` identifies a tile coordinates in the atlas (if the source is a `TileSetAtlasSource`). For `TileSetScenesCollectionSource` it should always be `Vector2i(0, 0)`,
 * - The alternative tile identifier `alternative_tile` identifies a tile alternative in the atlas (if the source is a `TileSetAtlasSource`), and the scene for a `TileSetScenesCollectionSource`.
 * If `source_id` is set to `-1`, `atlas_coords` to `Vector2i(-1, -1)`, or `alternative_tile` to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.
 * @param coords Vector2i
 * @param sourceId int (optional, default: -1)
 * @param atlasCoords Vector2i (optional, default: Vector2i(-1, -1))
 * @param alternativeTile int (optional, default: 0)
 */
  setCell(coords: Vector2i, sourceId?: int, atlasCoords?: Vector2i, alternativeTile?: int): void;
/**
 * Update all the cells in the `cells` coordinates array so that they use the given `terrain` for the given `terrain_set`. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.
 * If `ignore_empty_terrains` is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
 * 
 * **Note:** To work correctly, this method requires the `TileMapLayer`'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
 * @param cells Vector2i[]
 * @param terrainSet int
 * @param terrain int
 * @param ignoreEmptyTerrains boolean (optional, default: true)
 */
  setCellsTerrainConnect(cells: Vector2i[], terrainSet: int, terrain: int, ignoreEmptyTerrains?: boolean): void;
/**
 * Update all the cells in the `path` coordinates array so that they use the given `terrain` for the given `terrain_set`. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.
 * If `ignore_empty_terrains` is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
 * 
 * **Note:** To work correctly, this method requires the `TileMapLayer`'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
 * @param path Vector2i[]
 * @param terrainSet int
 * @param terrain int
 * @param ignoreEmptyTerrains boolean (optional, default: true)
 */
  setCellsTerrainPath(path: Vector2i[], terrainSet: int, terrain: int, ignoreEmptyTerrains?: boolean): void;
/**
 * Sets a custom `map` as a `NavigationServer2D` navigation map. If not set, uses the default `World2D` navigation map instead.
 * @param map RID
 */
  setNavigationMap(map: RID): void;
/**
 * Pastes the `TileMapPattern` at the given `position` in the tile map. See also `get_pattern`.
 * @param position Vector2i
 * @param pattern TileMapPattern
 */
  setPattern(position: Vector2i, pattern: TileMapPattern): void;
/**
 * Called with a `TileData` object about to be used internally by the `TileMapLayer`, allowing its modification at runtime.
 * This method is only called if `_use_tile_data_runtime_update` is implemented and returns `true` for the given tile `coords`.
 * 
 * **Warning:** The `tile_data` object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.
 * 
 * **Note:** If the properties of `tile_data` object should change over time, use `notify_runtime_tile_data_update` to notify the `TileMapLayer` it needs an update.
 * @param coords Vector2i
 * @param tileData TileData
 */
  private tileDataRuntimeUpdate(coords: Vector2i, tileData: TileData): void;
/**
 * Called when this `TileMapLayer`'s cells need an internal update. This update may be caused from individual cells being modified or by a change in the `tile_set` (causing all cells to be queued for an update). The first call to this function is always for initializing all the `TileMapLayer`'s cells. `coords` contains the coordinates of all modified cells, roughly in the order they were modified. `forced_cleanup` is `true` when the `TileMapLayer`'s internals should be fully cleaned up. This is the case when:
 * - The layer is disabled;
 * - The layer is not visible;
 * - `tile_set` is set to `null`;
 * - The node is removed from the tree;
 * - The node is freed.
 * Note that any internal update happening while one of these conditions is verified is considered to be a "cleanup". See also `update_internals`.
 * 
 * **Warning:** Implementing this method may degrade the `TileMapLayer`'s performance.
 * @param coords Vector2i[]
 * @param forcedCleanup boolean
 */
  private updateCells(coords: Vector2i[], forcedCleanup: boolean): void;
/**
 * Triggers a direct update of the `TileMapLayer`. Usually, calling this function is not needed, as `TileMapLayer` node updates automatically when one of its properties or cells is modified.
 * However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the `TileMapLayer` to update right away instead.
 * 
 * **Warning:** Updating the `TileMapLayer` is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.
 */
  updateInternals(): void;
/**
 * Should return `true` if the tile at coordinates `coords` requires a runtime update.
 * 
 * **Warning:** Make sure this function only returns `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.
 * 
 * **Note:** If the result of this function should change, use `notify_runtime_tile_data_update` to notify the `TileMapLayer` it needs an update.
 * @param coords Vector2i
 * @returns boolean
 */
  private useTileDataRuntimeUpdate(coords: Vector2i): boolean;
/**
 * Emitted when this `TileMapLayer`'s properties changes. This includes modified cells, properties, or changes made to its assigned `TileSet`.
 * 
 * **Note:** This signal may be emitted very often when batch-modifying a `TileMapLayer`. Avoid executing complex processing in a connected function, and consider delaying it to the end of the frame instead (i.e. calling `Object.call_deferred`).
 */
  changed: Signal<[]>;
/**
 * Hide the collisions or navigation debug shapes in the editor, and use the debug settings to determine their visibility in game (i.e. `SceneTree.debug_collisions_hint` or `SceneTree.debug_navigation_hint`).
 */
  static readonly DEBUG_VISIBILITY_MODE_DEFAULT: int;
/**
 * Always hide the collisions or navigation debug shapes.
 */
  static readonly DEBUG_VISIBILITY_MODE_FORCE_HIDE: int;
/**
 * Always show the collisions or navigation debug shapes.
 */
  static readonly DEBUG_VISIBILITY_MODE_FORCE_SHOW: int;
}
