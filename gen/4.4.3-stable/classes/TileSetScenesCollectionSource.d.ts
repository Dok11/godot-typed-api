import type { GodotArray, GodotDictionary, PackedScene, TileSetSource, float, int } from "../index.d.ts";
/**
 * Exposes a set of scenes as tiles for a `TileSet` resource.
 * 
 * When placed on a `TileMap`, tiles from `TileSetScenesCollectionSource` will automatically instantiate an associated scene at the cell's position in the TileMap.
 * Scenes are instantiated as children of the `TileMap` when it enters the tree. If you add/remove a scene tile in the `TileMap` that is already inside the tree, the `TileMap` will automatically instantiate/free the scene accordingly.
 * 
 * **Note:** Scene tiles all occupy one tile slot and instead use alternate tile ID to identify scene index. `TileSetSource.get_tiles_count` will always return `1`. Use `get_scene_tiles_count` to get a number of scenes in a `TileSetScenesCollectionSource`.
 * Use this code if you want to find the scene path at a given tile in `TileMapLayer`:
 * 
 * 		```gdscript
 * 
 * 		var source_id = tile_map_layer.get_cell_source_id(Vector2i(x, y))
 * 		if source_id > -1:
 * 		    var scene_source = tile_map_layer.tile_set.get_source(source_id)
 * 		    if scene_source is TileSetScenesCollectionSource:
 * 		        var alt_id = tile_map_layer.get_cell_alternative_tile(Vector2i(x, y))
 * 		        # The assigned PackedScene.
 * 		        var scene = scene_source.get_scene_tile_scene(alt_id)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		int sourceId = tileMapLayer.GetCellSourceId(new Vector2I(x, y));
 * 		if (sourceId > -1)
 * 		{
 * 		    TileSetSource source = tileMapLayer.TileSet.GetSource(sourceId);
 * 		    if (source is TileSetScenesCollectionSource sceneSource)
 * 		    {
 * 		        int altId = tileMapLayer.GetCellAlternativeTile(new Vector2I(x, y));
 * 		        // The assigned PackedScene.
 * 		        PackedScene scene = sceneSource.GetSceneTileScene(altId);
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 */
export class TileSetScenesCollectionSource extends TileSetSource {
/**
 * Creates a scene-based tile out of the given scene.
 * Returns a newly generated unique ID.
 * @param packedScene PackedScene
 * @param idOverride int (optional, default: -1)
 * @returns int
 */
  createSceneTile(packedScene: PackedScene, idOverride?: int): int;
/**
 * Returns the scene ID a following call to `create_scene_tile` would return.
 * @returns int
 */
  getNextSceneTileId(): int;
/**
 * Returns whether the scene tile with `id` displays a placeholder in the editor.
 * @param id int
 * @returns boolean
 */
  getSceneTileDisplayPlaceholder(id: int): boolean;
/**
 * Returns the scene tile ID of the scene tile at `index`.
 * @param index int
 * @returns int
 */
  getSceneTileId(index: int): int;
/**
 * Returns the `PackedScene` resource of scene tile with `id`.
 * @param id int
 * @returns PackedScene
 */
  getSceneTileScene(id: int): PackedScene;
/**
 * Returns the number or scene tiles this TileSet source has.
 * @returns int
 */
  getSceneTilesCount(): int;
/**
 * Returns whether this TileSet source has a scene tile with `id`.
 * @param id int
 * @returns boolean
 */
  hasSceneTileId(id: int): boolean;
/**
 * Remove the scene tile with `id`.
 * @param id int
 */
  removeSceneTile(id: int): void;
/**
 * Sets whether or not the scene tile with `id` should display a placeholder in the editor. This might be useful for scenes that are not visible.
 * @param id int
 * @param displayPlaceholder boolean
 */
  setSceneTileDisplayPlaceholder(id: int, displayPlaceholder: boolean): void;
/**
 * Changes a scene tile's ID from `id` to `new_id`. This will fail if there is already a tile with an ID equal to `new_id`.
 * @param id int
 * @param newId int
 */
  setSceneTileId(id: int, newId: int): void;
/**
 * Assigns a `PackedScene` resource to the scene tile with `id`. This will fail if the scene does not extend CanvasItem, as positioning properties are needed to place the scene on the TileMap.
 * @param id int
 * @param packedScene PackedScene
 */
  setSceneTileScene(id: int, packedScene: PackedScene): void;
}
