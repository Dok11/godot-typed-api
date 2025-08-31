import type { GodotArray, GodotDictionary, PackedVector2Array, Rect2i, Texture2D, TileData, TileSetSource, Vector2i, float, int } from "../index.d.ts";
/**
 * Exposes a 2D atlas texture as a set of tiles for a `TileSet` resource.
 * 
 * An atlas is a grid of tiles laid out on a texture. Each tile in the grid must be exposed using `create_tile`. Those tiles are then indexed using their coordinates in the grid.
 * Each tile can also have a size in the grid coordinates, making it more or less cells in the atlas.
 * Alternatives version of a tile can be created using `create_alternative_tile`, which are then indexed using an alternative ID. The main tile (the one in the grid), is accessed with an alternative ID equal to 0.
 * Each tile alternate has a set of properties that is defined by the source's `TileSet` layers. Those properties are stored in a TileData object that can be accessed and modified using `get_tile_data`.
 * As TileData properties are stored directly in the TileSetAtlasSource resource, their properties might also be set using `TileSetAtlasSource.set("<coords_x>:<coords_y>/<alternative_id>/<tile_data_property>")`.
 */
export class TileSetAtlasSource extends TileSetSource {
/**
 * Margins, in pixels, to offset the origin of the grid in the texture.
 */
  margins: Vector2i;
/**
 * Separation, in pixels, between each tile texture region of the grid.
 */
  separation: Vector2i;
/**
 * The atlas texture.
 */
  texture: Texture2D;
/**
 * The base tile size in the texture (in pixel). This size must be bigger than or equal to the TileSet's `tile_size` value.
 */
  textureRegionSize: Vector2i;
/**
 * If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.
 * Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.
 */
  useTexturePadding: boolean;
/**
 * Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use `has_tiles_outside_texture` beforehand.
 */
  clearTilesOutsideTexture(): void;
/**
 * Creates an alternative tile for the tile at coordinates `atlas_coords`. If `alternative_id_override` is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.
 * Returns the new alternative identifier, or -1 if the alternative could not be created with a provided `alternative_id_override`.
 * @param atlasCoords Vector2i
 * @param alternativeIdOverride int (optional, default: -1)
 * @returns int
 */
  createAlternativeTile(atlasCoords: Vector2i, alternativeIdOverride?: int): int;
/**
 * Creates a new tile at coordinates `atlas_coords` with the given `size`.
 * @param atlasCoords Vector2i
 * @param size Vector2i (optional, default: Vector2i(1, 1))
 */
  createTile(atlasCoords: Vector2i, size?: Vector2i): void;
/**
 * Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the `texture`'s size, the atlas `margins`, and the tiles' `texture_region_size`.
 * @returns Vector2i
 */
  getAtlasGridSize(): Vector2i;
/**
 * Returns the alternative ID a following call to `create_alternative_tile` would return.
 * @param atlasCoords Vector2i
 * @returns int
 */
  getNextAlternativeTileId(atlasCoords: Vector2i): int;
/**
 * If `use_texture_padding` is `false`, returns `texture`. Otherwise, returns and internal `ImageTexture` created that includes the padding.
 * @returns Texture2D
 */
  getRuntimeTexture(): Texture2D;
/**
 * Returns the region of the tile at coordinates `atlas_coords` for the given `frame` inside the texture returned by `get_runtime_texture`.
 * 
 * **Note:** If `use_texture_padding` is `false`, returns the same as `get_tile_texture_region`.
 * @param atlasCoords Vector2i
 * @param frame int
 * @returns Rect2i
 */
  getRuntimeTileTextureRegion(atlasCoords: Vector2i, frame: int): Rect2i;
/**
 * Returns how many columns the tile at `atlas_coords` has in its animation layout.
 * @param atlasCoords Vector2i
 * @returns int
 */
  getTileAnimationColumns(atlasCoords: Vector2i): int;
/**
 * Returns the animation frame duration of frame `frame_index` for the tile at coordinates `atlas_coords`.
 * @param atlasCoords Vector2i
 * @param frameIndex int
 * @returns float
 */
  getTileAnimationFrameDuration(atlasCoords: Vector2i, frameIndex: int): float;
/**
 * Returns how many animation frames has the tile at coordinates `atlas_coords`.
 * @param atlasCoords Vector2i
 * @returns int
 */
  getTileAnimationFramesCount(atlasCoords: Vector2i): int;
/**
 * Returns the tile animation mode of the tile at `atlas_coords`. See also `set_tile_animation_mode`.
 * @param atlasCoords Vector2i
 * @returns int
 */
  getTileAnimationMode(atlasCoords: Vector2i): int;
/**
 * Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates `atlas_coords`.
 * @param atlasCoords Vector2i
 * @returns Vector2i
 */
  getTileAnimationSeparation(atlasCoords: Vector2i): Vector2i;
/**
 * Returns the animation speed of the tile at coordinates `atlas_coords`.
 * @param atlasCoords Vector2i
 * @returns float
 */
  getTileAnimationSpeed(atlasCoords: Vector2i): float;
/**
 * Returns the sum of the sum of the frame durations of the tile at coordinates `atlas_coords`. This value needs to be divided by the animation speed to get the actual animation loop duration.
 * @param atlasCoords Vector2i
 * @returns float
 */
  getTileAnimationTotalDuration(atlasCoords: Vector2i): float;
/**
 * If there is a tile covering the `atlas_coords` coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns `Vector2i(-1, -1)` otherwise.
 * @param atlasCoords Vector2i
 * @returns Vector2i
 */
  getTileAtCoords(atlasCoords: Vector2i): Vector2i;
/**
 * Returns the `TileData` object for the given atlas coordinates and alternative ID.
 * @param atlasCoords Vector2i
 * @param alternativeTile int
 * @returns TileData
 */
  getTileData(atlasCoords: Vector2i, alternativeTile: int): TileData;
/**
 * Returns the size of the tile (in the grid coordinates system) at coordinates `atlas_coords`.
 * @param atlasCoords Vector2i
 * @returns Vector2i
 */
  getTileSizeInAtlas(atlasCoords: Vector2i): Vector2i;
/**
 * Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: `texture`, `margins`, `separation` or `texture_region_size`. This can be used to undo changes that would have caused tiles data loss.
 * @param texture Texture2D
 * @param margins Vector2i
 * @param separation Vector2i
 * @param textureRegionSize Vector2i
 * @returns PackedVector2Array
 */
  getTilesToBeRemovedOnChange(texture: Texture2D, margins: Vector2i, separation: Vector2i, textureRegionSize: Vector2i): PackedVector2Array;
/**
 * Returns a tile's texture region in the atlas texture. For animated tiles, a `frame` argument might be provided for the different frames of the animation.
 * @param atlasCoords Vector2i
 * @param frame int (optional, default: 0)
 * @returns Rect2i
 */
  getTileTextureRegion(atlasCoords: Vector2i, frame?: int): Rect2i;
/**
 * Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If `ignored_tile` is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties.
 * @param atlasCoords Vector2i
 * @param size Vector2i
 * @param animationColumns int
 * @param animationSeparation Vector2i
 * @param framesCount int
 * @param ignoredTile Vector2i (optional, default: Vector2i(-1, -1))
 * @returns boolean
 */
  hasRoomForTile(atlasCoords: Vector2i, size: Vector2i, animationColumns: int, animationSeparation: Vector2i, framesCount: int, ignoredTile?: Vector2i): boolean;
/**
 * Checks if the source has any tiles that don't fit the texture area (either partially or completely).
 * @returns boolean
 */
  hasTilesOutsideTexture(): boolean;
/**
 * Move the tile and its alternatives at the `atlas_coords` coordinates to the `new_atlas_coords` coordinates with the `new_size` size. This functions will fail if a tile is already present in the given area.
 * If `new_atlas_coords` is `Vector2i(-1, -1)`, keeps the tile's coordinates. If `new_size` is `Vector2i(-1, -1)`, keeps the tile's size.
 * To avoid an error, first check if a move is possible using `has_room_for_tile`.
 * @param atlasCoords Vector2i
 * @param newAtlasCoords Vector2i (optional, default: Vector2i(-1, -1))
 * @param newSize Vector2i (optional, default: Vector2i(-1, -1))
 */
  moveTileInAtlas(atlasCoords: Vector2i, newAtlasCoords?: Vector2i, newSize?: Vector2i): void;
/**
 * Remove a tile's alternative with alternative ID `alternative_tile`.
 * Calling this function with `alternative_tile` equals to 0 will fail, as the base tile alternative cannot be removed.
 * @param atlasCoords Vector2i
 * @param alternativeTile int
 */
  removeAlternativeTile(atlasCoords: Vector2i, alternativeTile: int): void;
/**
 * Remove a tile and its alternative at coordinates `atlas_coords`.
 * @param atlasCoords Vector2i
 */
  removeTile(atlasCoords: Vector2i): void;
/**
 * Change a tile's alternative ID from `alternative_tile` to `new_id`.
 * Calling this function with `new_id` of 0 will fail, as the base tile alternative cannot be moved.
 * @param atlasCoords Vector2i
 * @param alternativeTile int
 * @param newId int
 */
  setAlternativeTileId(atlasCoords: Vector2i, alternativeTile: int, newId: int): void;
/**
 * Sets the number of columns in the animation layout of the tile at coordinates `atlas_coords`. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas.
 * @param atlasCoords Vector2i
 * @param frameColumns int
 */
  setTileAnimationColumns(atlasCoords: Vector2i, frameColumns: int): void;
/**
 * Sets the animation frame `duration` of frame `frame_index` for the tile at coordinates `atlas_coords`.
 * @param atlasCoords Vector2i
 * @param frameIndex int
 * @param duration float
 */
  setTileAnimationFrameDuration(atlasCoords: Vector2i, frameIndex: int, duration: float): void;
/**
 * Sets how many animation frames the tile at coordinates `atlas_coords` has.
 * @param atlasCoords Vector2i
 * @param framesCount int
 */
  setTileAnimationFramesCount(atlasCoords: Vector2i, framesCount: int): void;
/**
 * Sets the tile animation mode of the tile at `atlas_coords` to `mode`. See also `get_tile_animation_mode`.
 * @param atlasCoords Vector2i
 * @param mode int
 */
  setTileAnimationMode(atlasCoords: Vector2i, mode: int): void;
/**
 * Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates `atlas_coords` has.
 * @param atlasCoords Vector2i
 * @param separation Vector2i
 */
  setTileAnimationSeparation(atlasCoords: Vector2i, separation: Vector2i): void;
/**
 * Sets the animation speed of the tile at coordinates `atlas_coords` has.
 * @param atlasCoords Vector2i
 * @param speed float
 */
  setTileAnimationSpeed(atlasCoords: Vector2i, speed: float): void;
/**
 * Tile animations start at same time, looking identical.
 */
  static readonly TILE_ANIMATION_MODE_DEFAULT: int;
/**
 * Tile animations start at random times, looking varied.
 */
  static readonly TILE_ANIMATION_MODE_RANDOM_START_TIMES: int;
/**
 * Represents the size of the `TileAnimationMode` enum.
 */
  static readonly TILE_ANIMATION_MODE_MAX: int;
/**
 * Represents cell's horizontal flip flag. Should be used directly with `TileMap` to flip placed tiles by altering their alternative IDs.
 * 
 * 			```gdscript
 * 
 * 			var alternate_id = $TileMap.get_cell_alternative_tile(0, Vector2i(2, 2))
 * 			if not alternate_id & TileSetAtlasSource.TRANSFORM_FLIP_H:
 * 			    # If tile is not already flipped, flip it.
 * 			    $TileMap.set_cell(0, Vector2i(2, 2), source_id, atlas_coords, alternate_id | TileSetAtlasSource.TRANSFORM_FLIP_H)
 * 			
 * 
 * ```
 * 
 * **Note:** These transformations can be combined to do the equivalent of 0, 90, 180, and 270 degree rotations, as shown below:
 * 
 * 			```gdscript
 * 
 * 			enum TileTransform {
 * 			    ROTATE_0 = 0,
 * 			    ROTATE_90 = TileSetAtlasSource.TRANSFORM_TRANSPOSE | TileSetAtlasSource.TRANSFORM_FLIP_H,
 * 			    ROTATE_180 = TileSetAtlasSource.TRANSFORM_FLIP_H | TileSetAtlasSource.TRANSFORM_FLIP_V,
 * 			    ROTATE_270 = TileSetAtlasSource.TRANSFORM_TRANSPOSE | TileSetAtlasSource.TRANSFORM_FLIP_V,
 * 			}
 * 			
 * 
 * ```
 */
  static readonly TRANSFORM_FLIP_H: int;
/**
 * Represents cell's vertical flip flag. See `TRANSFORM_FLIP_H` for usage.
 */
  static readonly TRANSFORM_FLIP_V: int;
/**
 * Represents cell's transposed flag. See `TRANSFORM_FLIP_H` for usage.
 */
  static readonly TRANSFORM_TRANSPOSE: int;
}
