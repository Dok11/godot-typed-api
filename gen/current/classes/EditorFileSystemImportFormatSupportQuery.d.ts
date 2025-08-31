import type { GodotArray, GodotDictionary, PackedStringArray, RefCounted, float, int } from "../index.d.ts";
/**
 * Used to query and configure import format support.
 * 
 * This class is used to query and configure a certain import format. It is used in conjunction with asset format import plugins.
 */
export class EditorFileSystemImportFormatSupportQuery extends RefCounted {
/**
 * Return the file extensions supported.
 * @returns PackedStringArray
 */
  private getFileExtensions(): PackedStringArray;
/**
 * Return whether this importer is active.
 * @returns boolean
 */
  private isActive(): boolean;
/**
 * Query support. Return `false` if import must not continue.
 * @returns boolean
 */
  private query(): boolean;
}
