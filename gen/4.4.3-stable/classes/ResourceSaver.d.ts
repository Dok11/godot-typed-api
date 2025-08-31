import type { GodotArray, GodotDictionary, Object, PackedStringArray, Resource, ResourceFormatSaver, float, int } from "../index.d.ts";
/**
 * A singleton for saving `Resource`s to the filesystem.
 * 
 * A singleton for saving resource types to the filesystem.
 * It uses the many `ResourceFormatSaver` classes registered in the engine (either built-in or from a plugin) to save resource data to text-based (e.g. `.tres` or `.tscn`) or binary files (e.g. `.res` or `.scn`).
 */
export class ResourceSaver extends Object {
/**
 * Registers a new `ResourceFormatSaver`. The ResourceSaver will use the ResourceFormatSaver as described in `save`.
 * This method is performed implicitly for ResourceFormatSavers written in GDScript (see `ResourceFormatSaver` for more information).
 * @param formatSaver ResourceFormatSaver
 * @param atFront boolean (optional, default: false)
 */
  addResourceFormatSaver(formatSaver: ResourceFormatSaver, atFront?: boolean): void;
/**
 * Returns the list of extensions available for saving a resource of a given type.
 * @param type_ Resource
 * @returns PackedStringArray
 */
  getRecognizedExtensions(type_: Resource): PackedStringArray;
/**
 * Returns the resource ID for the given path. If `generate` is `true`, a new resource ID will be generated if one for the path is not found. If `generate` is `false` and the path is not found, `ResourceUID.INVALID_ID` is returned.
 * @param path string
 * @param generate boolean (optional, default: false)
 * @returns int
 */
  getResourceIdForPath(path: string, generate?: boolean): int;
/**
 * Unregisters the given `ResourceFormatSaver`.
 * @param formatSaver ResourceFormatSaver
 */
  removeResourceFormatSaver(formatSaver: ResourceFormatSaver): void;
/**
 * Saves a resource to disk to the given path, using a `ResourceFormatSaver` that recognizes the resource object. If `path` is empty, `ResourceSaver` will try to use `Resource.resource_path`.
 * The `flags` bitmask can be specified to customize the save behavior using `SaverFlags` flags.
 * Returns `OK` on success.
 * 
 * **Note:** When the project is running, any generated UID associated with the resource will not be saved as the required code is only executed in editor mode.
 * @param resource Resource
 * @param path string (optional, default: "")
 * @param flags int (optional, default: 0)
 * @returns int
 */
  save(resource: Resource, path?: string, flags?: int): int;
/**
 * No resource saving option.
 */
  static readonly FLAG_NONE: int;
/**
 * Save the resource with a path relative to the scene which uses it.
 */
  static readonly FLAG_RELATIVE_PATHS: int;
/**
 * Bundles external resources.
 */
  static readonly FLAG_BUNDLE_RESOURCES: int;
/**
 * Changes the `Resource.resource_path` of the saved resource to match its new location.
 */
  static readonly FLAG_CHANGE_PATH: int;
/**
 * Do not save editor-specific metadata (identified by their `__editor` prefix).
 */
  static readonly FLAG_OMIT_EDITOR_PROPERTIES: int;
/**
 * Save as big endian (see `FileAccess.big_endian`).
 */
  static readonly FLAG_SAVE_BIG_ENDIAN: int;
/**
 * Compress the resource on save using `FileAccess.COMPRESSION_ZSTD`. Only available for binary resource types.
 */
  static readonly FLAG_COMPRESS: int;
/**
 * Take over the paths of the saved subresources (see `Resource.take_over_path`).
 */
  static readonly FLAG_REPLACE_SUBRESOURCE_PATHS: int;
}
