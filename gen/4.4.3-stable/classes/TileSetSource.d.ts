import type { GodotArray, GodotDictionary, Resource, Vector2i, float, int } from "../index.d.ts";
/**
 * Exposes a set of tiles for a `TileSet` resource.
 * 
 * Exposes a set of tiles for a `TileSet` resource.
 * Tiles in a source are indexed with two IDs, coordinates ID (of type Vector2i) and an alternative ID (of type int), named according to their use in the `TileSetAtlasSource` class.
 * Depending on the TileSet source type, those IDs might have restrictions on their values, this is why the base `TileSetSource` class only exposes getters for them.
 * You can iterate over all tiles exposed by a TileSetSource by first iterating over coordinates IDs using `get_tiles_count` and `get_tile_id`, then over alternative IDs using `get_alternative_tiles_count` and `get_alternative_tile_id`.
 * 
 * **Warning:** `TileSetSource` can only be added to one TileSet at the same time. Calling `TileSet.add_source` on a second `TileSet` will remove the source from the first one.
 */
export class TileSetSource extends Resource {
/**
 * Returns the alternative ID for the tile with coordinates ID `atlas_coords` at index `index`.
 * @param atlasCoords Vector2i
 * @param index int
 * @returns int
 */
  getAlternativeTileId(atlasCoords: Vector2i, index: int): int;
/**
 * Returns the number of alternatives tiles for the coordinates ID `atlas_coords`.
 * For `TileSetAtlasSource`, this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.
 * Returns -1 if there is not tile at the given coords.
 * @param atlasCoords Vector2i
 * @returns int
 */
  getAlternativeTilesCount(atlasCoords: Vector2i): int;
/**
 * Returns the tile coordinates ID of the tile with index `index`.
 * @param index int
 * @returns Vector2i
 */
  getTileId(index: int): Vector2i;
/**
 * Returns how many tiles this atlas source defines (not including alternative tiles).
 * @returns int
 */
  getTilesCount(): int;
/**
 * Returns if the base tile at coordinates `atlas_coords` has an alternative with ID `alternative_tile`.
 * @param atlasCoords Vector2i
 * @param alternativeTile int
 * @returns boolean
 */
  hasAlternativeTile(atlasCoords: Vector2i, alternativeTile: int): boolean;
/**
 * Returns if this atlas has a tile with coordinates ID `atlas_coords`.
 * @param atlasCoords Vector2i
 * @returns boolean
 */
  hasTile(atlasCoords: Vector2i): boolean;
}
