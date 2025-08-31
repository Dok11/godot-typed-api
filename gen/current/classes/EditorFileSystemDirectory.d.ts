import type { GodotArray, GodotDictionary, Object, StringName, float, int } from "../index.d.ts";
/**
 * A directory for the resource filesystem.
 * 
 * A more generalized, low-level variation of the directory concept.
 */
export class EditorFileSystemDirectory extends Object {
/**
 * Returns the index of the directory with name `name` or `-1` if not found.
 * @param name string
 * @returns int
 */
  findDirIndex(name: string): int;
/**
 * Returns the index of the file with name `name` or `-1` if not found.
 * @param name string
 * @returns int
 */
  findFileIndex(name: string): int;
/**
 * Returns the name of the file at index `idx`.
 * @param idx int
 * @returns string
 */
  getFile(idx: int): string;
/**
 * Returns the number of files in this directory.
 * @returns int
 */
  getFileCount(): int;
/**
 * Returns `true` if the file at index `idx` imported properly.
 * @param idx int
 * @returns boolean
 */
  getFileImportIsValid(idx: int): boolean;
/**
 * Returns the path to the file at index `idx`.
 * @param idx int
 * @returns string
 */
  getFilePath(idx: int): string;
/**
 * Returns the base class of the script class defined in the file at index `idx`. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string.
 * @param idx int
 * @returns string
 */
  getFileScriptClassExtends(idx: int): string;
/**
 * Returns the name of the script class defined in the file at index `idx`. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string.
 * @param idx int
 * @returns string
 */
  getFileScriptClassName(idx: int): string;
/**
 * Returns the resource type of the file at index `idx`. This returns a string such as `"Resource"` or `"GDScript"`, *not* a file extension such as `".gd"`.
 * @param idx int
 * @returns StringName
 */
  getFileType(idx: int): StringName;
/**
 * Returns the name of this directory.
 * @returns string
 */
  getName(): string;
/**
 * Returns the parent directory for this directory or `null` if called on a directory at `res://` or `user://`.
 * @returns EditorFileSystemDirectory
 */
  getParent(): EditorFileSystemDirectory;
/**
 * Returns the path to this directory.
 * @returns string
 */
  getPath(): string;
/**
 * Returns the subdirectory at index `idx`.
 * @param idx int
 * @returns EditorFileSystemDirectory
 */
  getSubdir(idx: int): EditorFileSystemDirectory;
/**
 * Returns the number of subdirectories in this directory.
 * @returns int
 */
  getSubdirCount(): int;
}
