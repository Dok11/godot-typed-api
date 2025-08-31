import type { GodotArray, GodotDictionary, PackedStringArray, RefCounted, float, int } from "../index.d.ts";
/**
 * Provides methods for managing directories and their content.
 * 
 * This class is used to manage directories and their content, even outside of the project folder.
 * `DirAccess` can't be instantiated directly. Instead it is created with a static method that takes a path for which it will be opened.
 * Most of the methods have a static alternative that can be used without creating a `DirAccess`. Static methods only support absolute paths (including `res://` and `user://`).
 * 
 * 		```gdscript
 * 
 * 		# Standard
 * 		var dir = DirAccess.open("user://levels")
 * 		dir.make_dir("world1")
 * 		# Static
 * 		DirAccess.make_dir_absolute("user://levels/world1")
 * 		
 * 
 * ```
 * 
 * **Note:** Accessing project ("res://") directories once exported may behave unexpectedly as some files are converted to engine-specific formats and their original source files may not be present in the expected PCK package. Because of this, to access resources in an exported project, it is recommended to use `ResourceLoader` instead of `FileAccess`.
 * Here is an example on how to iterate through the files of a directory:
 * 
 * 		```gdscript
 * 
 * 		func dir_contents(path):
 * 		    var dir = DirAccess.open(path)
 * 		    if dir:
 * 		        dir.list_dir_begin()
 * 		        var file_name = dir.get_next()
 * 		        while file_name != "":
 * 		            if dir.current_is_dir():
 * 		                print("Found directory: " + file_name)
 * 		            else:
 * 		                print("Found file: " + file_name)
 * 		            file_name = dir.get_next()
 * 		    else:
 * 		        print("An error occurred when trying to access the path.")
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		public void DirContents(string path)
 * 		{
 * 		    using var dir = DirAccess.Open(path);
 * 		    if (dir != null)
 * 		    {
 * 		        dir.ListDirBegin();
 * 		        string fileName = dir.GetNext();
 * 		        while (fileName != "")
 * 		        {
 * 		            if (dir.CurrentIsDir())
 * 		            {
 * 		                GD.Print($"Found directory: {fileName}");
 * 		            }
 * 		            else
 * 		            {
 * 		                GD.Print($"Found file: {fileName}");
 * 		            }
 * 		            fileName = dir.GetNext();
 * 		        }
 * 		    }
 * 		    else
 * 		    {
 * 		        GD.Print("An error occurred when trying to access the path.");
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 * Keep in mind that file names may change or be remapped after export. If you want to see the actual resource file list as it appears in the editor, use `ResourceLoader.list_directory` instead.
 */
export class DirAccess extends RefCounted {
/**
 * If `true`, hidden files are included when navigating the directory.
 * Affects `list_dir_begin`, `get_directories` and `get_files`.
 */
  includeHidden: boolean;
/**
 * If `true`, `.` and `..` are included when navigating the directory.
 * Affects `list_dir_begin` and `get_directories`.
 */
  includeNavigational: boolean;
/**
 * Changes the currently opened directory to the one passed as an argument. The argument can be relative to the current directory (e.g. `newdir` or `../newdir`), or an absolute path (e.g. `/tmp/newdir` or `res://somedir/newdir`).
 * Returns one of the `Error` code constants (`OK` on success).
 * 
 * **Note:** The new directory must be within the same scope, e.g. when you had opened a directory inside `res://`, you can't change it to `user://` directory. If you need to open a directory in another access scope, use `open` to create a new instance instead.
 * @param toDir string
 * @returns int
 */
  changeDir(toDir: string): int;
/**
 * Copies the `from` file to the `to` destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.
 * If `chmod_flags` is different than `-1`, the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.
 * Returns one of the `Error` code constants (`OK` on success).
 * @param from_ string
 * @param to string
 * @param chmodFlags int (optional, default: -1)
 * @returns int
 */
  copy(from_: string, to: string, chmodFlags?: int): int;
/**
 * Static version of `copy`. Supports only absolute paths.
 * @param from_ string
 * @param to string
 * @param chmodFlags int (optional, default: -1)
 * @returns int
 */
  copyAbsolute(from_: string, to: string, chmodFlags?: int): int;
/**
 * Creates symbolic link between files or folders.
 * 
 * **Note:** On Windows, this method works only if the application is running with elevated privileges or Developer Mode is enabled.
 * 
 * **Note:** This method is implemented on macOS, Linux, and Windows.
 * @param source string
 * @param target string
 * @returns int
 */
  createLink(source: string, target: string): int;
/**
 * Creates a temporary directory. This directory will be freed when the returned `DirAccess` is freed.
 * If `prefix` is not empty, it will be prefixed to the directory name, separated by a `-`.
 * If `keep` is `true`, the directory is not deleted when the returned `DirAccess` is freed.
 * Returns `null` if opening the directory failed. You can use `get_open_error` to check the error that occurred.
 * @param prefix string (optional, default: "")
 * @param keep boolean (optional, default: false)
 * @returns DirAccess
 */
  createTemp(prefix?: string, keep?: boolean): DirAccess;
/**
 * Returns whether the current item processed with the last `get_next` call is a directory (`.` and `..` are considered directories).
 * @returns boolean
 */
  currentIsDir(): boolean;
/**
 * Returns whether the target directory exists. The argument can be relative to the current directory, or an absolute path.
 * 
 * **Note:** The returned [bool] in the editor and after exporting when used on a path in the `res://` directory may be different. Some files are converted to engine-specific formats when exported, potentially changing the directory structure.
 * @param path string
 * @returns boolean
 */
  dirExists(path: string): boolean;
/**
 * Static version of `dir_exists`. Supports only absolute paths.
 * 
 * **Note:** The returned [bool] in the editor and after exporting when used on a path in the `res://` directory may be different. Some files are converted to engine-specific formats when exported, potentially changing the directory structure.
 * @param path string
 * @returns boolean
 */
  dirExistsAbsolute(path: string): boolean;
/**
 * Returns whether the target file exists. The argument can be relative to the current directory, or an absolute path.
 * For a static equivalent, use `FileAccess.file_exists`.
 * 
 * **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See `ResourceLoader.exists` for an alternative approach that takes resource remapping into account.
 * @param path string
 * @returns boolean
 */
  fileExists(path: string): boolean;
/**
 * Returns the absolute path to the currently opened directory (e.g. `res://folder` or `C:\tmp\folder`).
 * @param includeDrive boolean (optional, default: true)
 * @returns string
 */
  getCurrentDir(includeDrive?: boolean): string;
/**
 * Returns the currently opened directory's drive index. See `get_drive_name` to convert returned index to the name of the drive.
 * @returns int
 */
  getCurrentDrive(): int;
/**
 * Returns a `PackedStringArray` containing filenames of the directory contents, excluding files. The array is sorted alphabetically.
 * Affected by `include_hidden` and `include_navigational`.
 * 
 * **Note:** The returned directories in the editor and after exporting in the `res://` directory may differ as some files are converted to engine-specific formats when exported.
 * @returns PackedStringArray
 */
  getDirectories(): PackedStringArray;
/**
 * Returns a `PackedStringArray` containing filenames of the directory contents, excluding files, at the given `path`. The array is sorted alphabetically.
 * Use `get_directories` if you want more control of what gets included.
 * 
 * **Note:** The returned directories in the editor and after exporting in the `res://` directory may differ as some files are converted to engine-specific formats when exported.
 * @param path string
 * @returns PackedStringArray
 */
  getDirectoriesAt(path: string): PackedStringArray;
/**
 * On Windows, returns the number of drives (partitions) mounted on the current filesystem.
 * On macOS, returns the number of mounted volumes.
 * On Linux, returns the number of mounted volumes and GTK 3 bookmarks.
 * On other platforms, the method returns 0.
 * @returns int
 */
  getDriveCount(): int;
/**
 * On Windows, returns the name of the drive (partition) passed as an argument (e.g. `C:`).
 * On macOS, returns the path to the mounted volume passed as an argument.
 * On Linux, returns the path to the mounted volume or GTK 3 bookmark passed as an argument.
 * On other platforms, or if the requested drive does not exist, the method returns an empty String.
 * @param idx int
 * @returns string
 */
  getDriveName(idx: int): string;
/**
 * Returns a `PackedStringArray` containing filenames of the directory contents, excluding directories. The array is sorted alphabetically.
 * Affected by `include_hidden`.
 * 
 * **Note:** When used on a `res://` path in an exported project, only the files actually included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `*.gd` and `*.import` files are returned (plus a few files such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on whether `ProjectSettings.editor/export/convert_text_resources_to_binary` is `true`.
 * @returns PackedStringArray
 */
  getFiles(): PackedStringArray;
/**
 * Returns a `PackedStringArray` containing filenames of the directory contents, excluding directories, at the given `path`. The array is sorted alphabetically.
 * Use `get_files` if you want more control of what gets included.
 * 
 * **Note:** When used on a `res://` path in an exported project, only the files included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `.gd` and `.import` files are returned (plus a few other files, such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on `ProjectSettings.editor/export/convert_text_resources_to_binary`.
 * @param path string
 * @returns PackedStringArray
 */
  getFilesAt(path: string): PackedStringArray;
/**
 * Returns the next element (file or directory) in the current directory.
 * The name of the file or directory is returned (and not its full path). Once the stream has been fully processed, the method returns an empty `String` and closes the stream automatically (i.e. `list_dir_end` would not be mandatory in such a case).
 * @returns string
 */
  getNext(): string;
/**
 * Returns the result of the last `open` call in the current thread.
 * @returns int
 */
  getOpenError(): int;
/**
 * Returns the available space on the current directory's disk, in bytes. Returns `0` if the platform-specific method to query the available space fails.
 * @returns int
 */
  getSpaceLeft(): int;
/**
 * Returns `true` if the directory is a macOS bundle.
 * 
 * **Note:** This method is implemented on macOS.
 * @param path string
 * @returns boolean
 */
  isBundle(path: string): boolean;
/**
 * Returns `true` if the file system or directory use case sensitive file names.
 * 
 * **Note:** This method is implemented on macOS, Linux (for EXT4 and F2FS filesystems only) and Windows. On other platforms, it always returns `true`.
 * @param path string
 * @returns boolean
 */
  isCaseSensitive(path: string): boolean;
/**
 * Returns `true` if the file or directory is a symbolic link, directory junction, or other reparse point.
 * 
 * **Note:** This method is implemented on macOS, Linux, and Windows.
 * @param path string
 * @returns boolean
 */
  isLink(path: string): boolean;
/**
 * Initializes the stream used to list all files and directories using the `get_next` function, closing the currently opened stream if needed. Once the stream has been processed, it should typically be closed with `list_dir_end`.
 * Affected by `include_hidden` and `include_navigational`.
 * 
 * **Note:** The order of files and directories returned by this method is not deterministic, and can vary between operating systems. If you want a list of all files or folders sorted alphabetically, use `get_files` or `get_directories`.
 * @returns int
 */
  listDirBegin(): int;
/**
 * Closes the current stream opened with `list_dir_begin` (whether it has been fully processed with `get_next` does not matter).
 */
  listDirEnd(): void;
/**
 * Creates a directory. The argument can be relative to the current directory, or an absolute path. The target directory should be placed in an already existing directory (to create the full path recursively, see `make_dir_recursive`).
 * Returns one of the `Error` code constants (`OK` on success).
 * @param path string
 * @returns int
 */
  makeDir(path: string): int;
/**
 * Static version of `make_dir`. Supports only absolute paths.
 * @param path string
 * @returns int
 */
  makeDirAbsolute(path: string): int;
/**
 * Creates a target directory and all necessary intermediate directories in its path, by calling `make_dir` recursively. The argument can be relative to the current directory, or an absolute path.
 * Returns one of the `Error` code constants (`OK` on success).
 * @param path string
 * @returns int
 */
  makeDirRecursive(path: string): int;
/**
 * Static version of `make_dir_recursive`. Supports only absolute paths.
 * @param path string
 * @returns int
 */
  makeDirRecursiveAbsolute(path: string): int;
/**
 * Creates a new `DirAccess` object and opens an existing directory of the filesystem. The `path` argument can be within the project tree (`res://folder`), the user directory (`user://folder`) or an absolute path of the user filesystem (e.g. `/tmp/folder` or `C:\tmp\folder`).
 * Returns `null` if opening the directory failed. You can use `get_open_error` to check the error that occurred.
 * @param path string
 * @returns DirAccess
 */
  open(path: string): DirAccess;
/**
 * Returns target of the symbolic link.
 * 
 * **Note:** This method is implemented on macOS, Linux, and Windows.
 * @param path string
 * @returns string
 */
  readLink(path: string): string;
/**
 * Permanently deletes the target file or an empty directory. The argument can be relative to the current directory, or an absolute path. If the target directory is not empty, the operation will fail.
 * If you don't want to delete the file/directory permanently, use `OS.move_to_trash` instead.
 * Returns one of the `Error` code constants (`OK` on success).
 * @param path string
 * @returns int
 */
  remove(path: string): int;
/**
 * Static version of `remove`. Supports only absolute paths.
 * @param path string
 * @returns int
 */
  removeAbsolute(path: string): int;
/**
 * Renames (move) the `from` file or directory to the `to` destination. Both arguments should be paths to files or directories, either relative or absolute. If the destination file or directory exists and is not access-protected, it will be overwritten.
 * Returns one of the `Error` code constants (`OK` on success).
 * @param from_ string
 * @param to string
 * @returns int
 */
  rename(from_: string, to: string): int;
/**
 * Static version of `rename`. Supports only absolute paths.
 * @param from_ string
 * @param to string
 * @returns int
 */
  renameAbsolute(from_: string, to: string): int;
}
