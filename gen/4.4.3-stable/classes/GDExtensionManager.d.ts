import type { GDExtension, GodotArray, GodotDictionary, Object, PackedStringArray, Signal, float, int } from "../index.d.ts";
/**
 * Provides access to GDExtension functionality.
 * 
 * The GDExtensionManager loads, initializes, and keeps track of all available `GDExtension` libraries in the project.
 * 
 * **Note:** Do not worry about GDExtension unless you know what you are doing.
 */
export class GDExtensionManager extends Object {
/**
 * Returns the `GDExtension` at the given file `path`, or `null` if it has not been loaded or does not exist.
 * @param path string
 * @returns GDExtension
 */
  getExtension(path: string): GDExtension;
/**
 * Returns the file paths of all currently loaded extensions.
 * @returns PackedStringArray
 */
  getLoadedExtensions(): PackedStringArray;
/**
 * Returns `true` if the extension at the given file `path` has already been loaded successfully. See also `get_loaded_extensions`.
 * @param path string
 * @returns boolean
 */
  isExtensionLoaded(path: string): boolean;
/**
 * Loads an extension by absolute file path. The `path` needs to point to a valid `GDExtension`. Returns `LOAD_STATUS_OK` if successful.
 * @param path string
 * @returns int
 */
  loadExtension(path: string): int;
/**
 * Reloads the extension at the given file path. The `path` needs to point to a valid `GDExtension`, otherwise this method may return either `LOAD_STATUS_NOT_LOADED` or `LOAD_STATUS_FAILED`.
 * 
 * **Note:** You can only reload extensions in the editor. In release builds, this method always fails and returns `LOAD_STATUS_FAILED`.
 * @param path string
 * @returns int
 */
  reloadExtension(path: string): int;
/**
 * Unloads an extension by file path. The `path` needs to point to an already loaded `GDExtension`, otherwise this method returns `LOAD_STATUS_NOT_LOADED`.
 * @param path string
 * @returns int
 */
  unloadExtension(path: string): int;
/**
 * Emitted after the editor has finished loading a new extension.
 * 
 * **Note:** This signal is only emitted in editor builds.
 */
  extensionLoaded: Signal<[extension: GDExtension]>;
/**
 * Emitted after the editor has finished reloading one or more extensions.
 */
  extensionsReloaded: Signal<[]>;
/**
 * Emitted before the editor starts unloading an extension.
 * 
 * **Note:** This signal is only emitted in editor builds.
 */
  extensionUnloading: Signal<[extension: GDExtension]>;
/**
 * The extension has loaded successfully.
 */
  static readonly LOAD_STATUS_OK: int;
/**
 * The extension has failed to load, possibly because it does not exist or has missing dependencies.
 */
  static readonly LOAD_STATUS_FAILED: int;
/**
 * The extension has already been loaded.
 */
  static readonly LOAD_STATUS_ALREADY_LOADED: int;
/**
 * The extension has not been loaded.
 */
  static readonly LOAD_STATUS_NOT_LOADED: int;
/**
 * The extension requires the application to restart to fully load.
 */
  static readonly LOAD_STATUS_NEEDS_RESTART: int;
}
