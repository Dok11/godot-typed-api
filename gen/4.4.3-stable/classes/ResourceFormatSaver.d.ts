import type { GodotArray, GodotDictionary, PackedStringArray, RefCounted, Resource, float, int } from "../index.d.ts";
/**
 * Saves a specific resource type to a file.
 * 
 * The engine can save resources when you do it from the editor, or when you use the `ResourceSaver` singleton. This is accomplished thanks to multiple `ResourceFormatSaver`s, each handling its own format and called automatically by the engine.
 * By default, Godot saves resources as `.tres` (text-based), `.res` (binary) or another built-in format, but you can choose to create your own format by extending this class. Be sure to respect the documented return types and values. You should give it a global class name with `class_name` for it to be registered. Like built-in ResourceFormatSavers, it will be called automatically when saving resources of its recognized type(s). You may also implement a `ResourceFormatLoader`.
 */
export class ResourceFormatSaver extends RefCounted {
/**
 * Returns the list of extensions available for saving the resource object, provided it is recognized (see `_recognize`).
 * @param resource Resource
 * @returns PackedStringArray
 */
  private getRecognizedExtensions(resource: Resource): PackedStringArray;
/**
 * Returns whether the given resource object can be saved by this saver.
 * @param resource Resource
 * @returns boolean
 */
  private recognize(resource: Resource): boolean;
/**
 * Returns `true` if this saver handles a given save path and `false` otherwise.
 * If this method is not implemented, the default behavior returns whether the path's extension is within the ones provided by `_get_recognized_extensions`.
 * @param resource Resource
 * @param path string
 * @returns boolean
 */
  private recognizePath(resource: Resource, path: string): boolean;
/**
 * Saves the given resource object to a file at the target `path`. `flags` is a bitmask composed with `ResourceSaver.SaverFlags` constants.
 * Returns `OK` on success, or an `Error` constant in case of failure.
 * @param resource Resource
 * @param path string
 * @param flags int
 * @returns int
 */
  private save(resource: Resource, path: string, flags: int): int;
/**
 * Sets a new UID for the resource at the given `path`. Returns `OK` on success, or an `Error` constant in case of failure.
 * @param path string
 * @param uid int
 * @returns int
 */
  private setUid(path: string, uid: int): int;
}
