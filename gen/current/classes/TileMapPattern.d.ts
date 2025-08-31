import type { GodotArray, GodotDictionary, Resource, Vector2i, float, int } from "../index.d.ts";
/**
 * Holds a pattern to be copied from or pasted into `TileMap`s.
 * 
 * This resource holds a set of cells to help bulk manipulations of `TileMap`.
 * A pattern always start at the `(0,0)` coordinates and cannot have cells with negative coordinates.
 */
export class TileMapPattern extends Resource {
/**
 * Returns the tile alternative ID of the cell at `coords`.
 * @param coords Vector2i
 * @returns int
 */
  getCellAlternativeTile(coords: Vector2i): int;
/**
 * Returns the tile atlas coordinates ID of the cell at `coords`.
 * @param coords Vector2i
 * @returns Vector2i
 */
  getCellAtlasCoords(coords: Vector2i): Vector2i;
/**
 * Returns the tile source ID of the cell at `coords`.
 * @param coords Vector2i
 * @returns int
 */
  getCellSourceId(coords: Vector2i): int;
/**
 * Returns the size, in cells, of the pattern.
 * @returns Vector2i
 */
  getSize(): Vector2i;
/**
 * Returns the list of used cell coordinates in the pattern.
 * @returns Vector2i[]
 */
  getUsedCells(): Vector2i[];
/**
 * Returns whether the pattern has a tile at the given coordinates.
 * @param coords Vector2i
 * @returns boolean
 */
  hasCell(coords: Vector2i): boolean;
/**
 * Returns whether the pattern is empty or not.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Remove the cell at the given coordinates.
 * @param coords Vector2i
 * @param updateSize boolean
 */
  removeCell(coords: Vector2i, updateSize: boolean): void;
/**
 * Sets the tile identifiers for the cell at coordinates `coords`. See `TileMap.set_cell`.
 * @param coords Vector2i
 * @param sourceId int (optional, default: -1)
 * @param atlasCoords Vector2i (optional, default: Vector2i(-1, -1))
 * @param alternativeTile int (optional, default: -1)
 */
  setCell(coords: Vector2i, sourceId?: int, atlasCoords?: Vector2i, alternativeTile?: int): void;
/**
 * Sets the size of the pattern.
 * @param size Vector2i
 */
  setSize(size: Vector2i): void;
}
