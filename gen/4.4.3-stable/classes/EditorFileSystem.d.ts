import type { EditorFileSystemDirectory, GodotArray, GodotDictionary, Node, PackedStringArray, Signal, float, int } from "../index.d.ts";
/**
 * Resource filesystem, as the editor sees it.
 * 
 * This object holds information of all resources in the filesystem, their types, etc.
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using `EditorInterface.get_resource_filesystem`.
 */
export class EditorFileSystem extends Node {
/**
 * Gets the root directory object.
 * @returns EditorFileSystemDirectory
 */
  getFilesystem(): EditorFileSystemDirectory;
/**
 * Returns a view into the filesystem at `path`.
 * @param path string
 * @returns EditorFileSystemDirectory
 */
  getFilesystemPath(path: string): EditorFileSystemDirectory;
/**
 * Returns the resource type of the file, given the full path. This returns a string such as `"Resource"` or `"GDScript"`, *not* a file extension such as `".gd"`.
 * @param path string
 * @returns string
 */
  getFileType(path: string): string;
/**
 * Returns the scan progress for 0 to 1 if the FS is being scanned.
 * @returns float
 */
  getScanningProgress(): float;
/**
 * Returns `true` if the filesystem is being scanned.
 * @returns boolean
 */
  isScanning(): boolean;
/**
 * Reimports a set of files. Call this if these files or their `.import` files were directly edited by script or an external program.
 * If the file type changed or the file was newly created, use `update_file` or `scan`.
 * 
 * **Note:** This function blocks until the import is finished. However, the main loop iteration, including timers and `Node._process`, will occur during the import process due to progress bar updates. Avoid calls to `reimport_files` or `scan` while an import is in progress.
 * @param files PackedStringArray
 */
  reimportFiles(files: PackedStringArray): void;
/**
 * Scan the filesystem for changes.
 */
  scan(): void;
/**
 * Check if the source of any imported resource changed.
 */
  scanSources(): void;
/**
 * Add a file in an existing directory, or schedule file information to be updated on editor restart. Can be used to update text files saved by an external program.
 * This will not import the file. To reimport, call `reimport_files` or `scan` methods.
 * @param path string
 */
  updateFile(path: string): void;
/**
 * Emitted if the filesystem changed.
 */
  filesystemChanged: Signal<[]>;
/**
 * Emitted if a resource is reimported.
 */
  resourcesReimported: Signal<[resources: PackedStringArray]>;
/**
 * Emitted before a resource is reimported.
 */
  resourcesReimporting: Signal<[resources: PackedStringArray]>;
/**
 * Emitted if at least one resource is reloaded when the filesystem is scanned.
 */
  resourcesReload: Signal<[resources: PackedStringArray]>;
/**
 * Emitted when the list of global script classes gets updated.
 */
  scriptClassesUpdated: Signal<[]>;
/**
 * Emitted if the source of any imported file changed.
 */
  sourcesChanged: Signal<[exist: boolean]>;
}
