import type { GodotArray, GodotDictionary, Object, PackedStringArray, Resource, ResourceFormatLoader, float, int } from "../index.d.ts";
/**
 * A singleton for loading resource files.
 * 
 * A singleton used to load resource files from the filesystem.
 * It uses the many `ResourceFormatLoader` classes registered in the engine (either built-in or from a plugin) to load files into memory and convert them to a format that can be used by the engine.
 * 
 * **Note:** You have to import the files into the engine first to load them using `load`. If you want to load `Image`s at run-time, you may use `Image.load`. If you want to import audio files, you can use the snippet described in `AudioStreamMP3.data`.
 * 
 * **Note:** Non-resource files such as plain text files cannot be read using `ResourceLoader`. Use `FileAccess` for those files instead, and be aware that non-resource files are not exported by default (see notes in the `FileAccess` class description for instructions on exporting them).
 */
export class ResourceLoader extends Object {
/**
 * Registers a new `ResourceFormatLoader`. The ResourceLoader will use the ResourceFormatLoader as described in `load`.
 * This method is performed implicitly for ResourceFormatLoaders written in GDScript (see `ResourceFormatLoader` for more information).
 * @param formatLoader ResourceFormatLoader
 * @param atFront boolean (optional, default: false)
 */
  addResourceFormatLoader(formatLoader: ResourceFormatLoader, atFront?: boolean): void;
/**
 * Returns whether a recognized resource exists for the given `path`.
 * An optional `type_hint` can be used to further specify the `Resource` type that should be handled by the `ResourceFormatLoader`. Anything that inherits from `Resource` can be used as a type hint, for example `Image`.
 * 
 * **Note:** If you use `Resource.take_over_path`, this method will return `true` for the taken path even if the resource wasn't saved (i.e. exists only in resource cache).
 * @param path string
 * @param typeHint string (optional, default: "")
 * @returns boolean
 */
  exists(path: string, typeHint?: string): boolean;
/**
 * Returns the cached resource reference for the given `path`.
 * 
 * **Note:** If the resource is not cached, the returned `Resource` will be invalid.
 * @param path string
 * @returns Resource
 */
  getCachedRef(path: string): Resource;
/**
 * Returns the dependencies for the resource at the given `path`.
 * 
 * **Note:** The dependencies are returned with slices separated by `::`. You can use `String.get_slice` to get their components.
 * 
 * 				```gdscript
 * 
 * 				for dependency in ResourceLoader.get_dependencies(path):
 * 				    print(dependency.get_slice("::", 0)) # Prints the UID.
 * 				    print(dependency.get_slice("::", 2)) # Prints the path.
 * 				
 * 
 * ```
 * @param path string
 * @returns PackedStringArray
 */
  getDependencies(path: string): PackedStringArray;
/**
 * Returns the list of recognized extensions for a resource type.
 * @param type_ string
 * @returns PackedStringArray
 */
  getRecognizedExtensionsForType(type_: string): PackedStringArray;
/**
 * Returns the ID associated with a given resource path, or `-1` when no such ID exists.
 * @param path string
 * @returns int
 */
  getResourceUid(path: string): int;
/**
 * Returns whether a cached resource is available for the given `path`.
 * Once a resource has been loaded by the engine, it is cached in memory for faster access, and future calls to the `load` method will use the cached version. The cached resource can be overridden by using `Resource.take_over_path` on a new resource for that same path.
 * @param path string
 * @returns boolean
 */
  hasCached(path: string): boolean;
/**
 * Lists a directory (as example: "res://assets/enemies"), returning all resources contained within. The resource files are the original file names as visible in the editor before exporting.
 * @param directoryPath string
 * @returns PackedStringArray
 */
  listDirectory(directoryPath: string): PackedStringArray;
/**
 * Loads a resource at the given `path`, caching the result for further access.
 * The registered `ResourceFormatLoader`s are queried sequentially to find the first one which can handle the file's extension, and then attempt loading. If loading fails, the remaining ResourceFormatLoaders are also attempted.
 * An optional `type_hint` can be used to further specify the `Resource` type that should be handled by the `ResourceFormatLoader`. Anything that inherits from `Resource` can be used as a type hint, for example `Image`.
 * The `cache_mode` property defines whether and how the cache should be used or updated when loading the resource. See `CacheMode` for details.
 * Returns an empty resource if no `ResourceFormatLoader` could handle the file, and prints an error if no file is found at the specified path.
 * GDScript has a simplified `@GDScript.load` built-in method which can be used in most situations, leaving the use of `ResourceLoader` for more advanced scenarios.
 * 
 * **Note:** If `ProjectSettings.editor/export/convert_text_resources_to_binary` is `true`, `@GDScript.load` will not be able to read converted files in an exported project. If you rely on run-time loading of files present within the PCK, set `ProjectSettings.editor/export/convert_text_resources_to_binary` to `false`.
 * 
 * **Note:** Relative paths will be prefixed with `"res://"` before loading, to avoid unexpected results make sure your paths are absolute.
 * @param path string
 * @param typeHint string (optional, default: "")
 * @param cacheMode int (optional, default: 1)
 * @returns Resource
 */
  load(path: string, typeHint?: string, cacheMode?: int): Resource;
/**
 * Returns the resource loaded by `load_threaded_request`.
 * If this is called before the loading thread is done (i.e. `load_threaded_get_status` is not `THREAD_LOAD_LOADED`), the calling thread will be blocked until the resource has finished loading. However, it's recommended to use `load_threaded_get_status` to known when the load has actually completed.
 * @param path string
 * @returns Resource
 */
  loadThreadedGet(path: string): Resource;
/**
 * Returns the status of a threaded loading operation started with `load_threaded_request` for the resource at `path`. See `ThreadLoadStatus` for possible return values.
 * An array variable can optionally be passed via `progress`, and will return a one-element array containing the ratio of completion of the threaded loading (between `0.0` and `1.0`).
 * 
 * **Note:** The recommended way of using this method is to call it during different frames (e.g., in `Node._process`, instead of a loop).
 * @param path string
 * @param progress GodotArray<any> (optional, default: [])
 * @returns int
 */
  loadThreadedGetStatus(path: string, progress?: GodotArray<any>): int;
/**
 * Loads the resource using threads. If `use_sub_threads` is `true`, multiple threads will be used to load the resource, which makes loading faster, but may affect the main thread (and thus cause game slowdowns).
 * The `cache_mode` property defines whether and how the cache should be used or updated when loading the resource. See `CacheMode` for details.
 * @param path string
 * @param typeHint string (optional, default: "")
 * @param useSubThreads boolean (optional, default: false)
 * @param cacheMode int (optional, default: 1)
 * @returns int
 */
  loadThreadedRequest(path: string, typeHint?: string, useSubThreads?: boolean, cacheMode?: int): int;
/**
 * Unregisters the given `ResourceFormatLoader`.
 * @param formatLoader ResourceFormatLoader
 */
  removeResourceFormatLoader(formatLoader: ResourceFormatLoader): void;
/**
 * Changes the behavior on missing sub-resources. The default behavior is to abort loading.
 * @param abort boolean
 */
  setAbortOnMissingResources(abort: boolean): void;
/**
 * The resource is invalid, or has not been loaded with `load_threaded_request`.
 */
  static readonly THREAD_LOAD_INVALID_RESOURCE: int;
/**
 * The resource is still being loaded.
 */
  static readonly THREAD_LOAD_IN_PROGRESS: int;
/**
 * Some error occurred during loading and it failed.
 */
  static readonly THREAD_LOAD_FAILED: int;
/**
 * The resource was loaded successfully and can be accessed via `load_threaded_get`.
 */
  static readonly THREAD_LOAD_LOADED: int;
/**
 * Neither the main resource (the one requested to be loaded) nor any of its subresources are retrieved from cache nor stored into it. Dependencies (external resources) are loaded with `CACHE_MODE_REUSE`.
 */
  static readonly CACHE_MODE_IGNORE: int;
/**
 * The main resource (the one requested to be loaded), its subresources, and its dependencies (external resources) are retrieved from cache if present, instead of loaded. Those not cached are loaded and then stored into the cache. The same rules are propagated recursively down the tree of dependencies (external resources).
 */
  static readonly CACHE_MODE_REUSE: int;
/**
 * Like `CACHE_MODE_REUSE`, but the cache is checked for the main resource (the one requested to be loaded) as well as for each of its subresources. Those already in the cache, as long as the loaded and cached types match, have their data refreshed from storage into the already existing instances. Otherwise, they are recreated as completely new objects.
 */
  static readonly CACHE_MODE_REPLACE: int;
/**
 * Like `CACHE_MODE_IGNORE`, but propagated recursively down the tree of dependencies (external resources).
 */
  static readonly CACHE_MODE_IGNORE_DEEP: int;
/**
 * Like `CACHE_MODE_REPLACE`, but propagated recursively down the tree of dependencies (external resources).
 */
  static readonly CACHE_MODE_REPLACE_DEEP: int;
}
