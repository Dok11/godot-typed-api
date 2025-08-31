import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Base class for resource importers.
 * 
 * This is the base class for Godot's resource importers. To implement your own resource importers using editor plugins, see `EditorImportPlugin`.
 */
export class ResourceImporter extends RefCounted {
/**
 * The default import order.
 */
  static readonly IMPORT_ORDER_DEFAULT: int;
/**
 * The import order for scenes, which ensures scenes are imported *after* all other core resources such as textures. Custom importers should generally have an import order lower than `100` to avoid issues when importing scenes that rely on custom resources.
 */
  static readonly IMPORT_ORDER_SCENE: int;
}
