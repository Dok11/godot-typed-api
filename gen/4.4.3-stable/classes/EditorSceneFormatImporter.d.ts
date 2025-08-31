import type { GodotArray, GodotDictionary, Object, PackedStringArray, RefCounted, Variant, float, int } from "../index.d.ts";
/**
 * Imports scenes from third-parties' 3D files.
 * 
 * `EditorSceneFormatImporter` allows to define an importer script for a third-party 3D format.
 * To use `EditorSceneFormatImporter`, register it using the `EditorPlugin.add_scene_format_importer_plugin` method first.
 */
export class EditorSceneFormatImporter extends RefCounted {
/**
 * Add a specific import option (name and default value only). This function can only be called from `_get_import_options`.
 * @param name string
 * @param value Variant
 */
  addImportOption(name: string, value: Variant): void;
/**
 * Add a specific import option. This function can only be called from `_get_import_options`.
 * @param type_ int
 * @param name string
 * @param defaultValue Variant
 * @param hint int (optional, default: 0)
 * @param hintString string (optional, default: "")
 * @param usageFlags int (optional, default: 6)
 */
  addImportOptionAdvanced(type_: int, name: string, defaultValue: Variant, hint?: int, hintString?: string, usageFlags?: int): void;
/**
 * Return supported file extensions for this scene importer.
 * @returns PackedStringArray
 */
  private getExtensions(): PackedStringArray;
/**
 * Override to add general import options. These will appear in the main import dock on the editor. Add options via `add_import_option` and `add_import_option_advanced`.
 * 
 * **Note:** All `EditorSceneFormatImporter` and `EditorScenePostImportPlugin` instances will add options for all files. It is good practice to check the file extension when `path` is non-empty.
 * When the user is editing project settings, `path` will be empty. It is recommended to add all options when `path` is empty to allow the user to customize Import Defaults.
 * @param path string
 */
  private getImportOptions(path: string): void;
/**
 * Should return `true` to show the given option, `false` to hide the given option, or `null` to ignore.
 * @param path string
 * @param forAnimation boolean
 * @param option string
 * @returns Variant
 */
  private getOptionVisibility(path: string, forAnimation: boolean, option: string): Variant;
/**
 * Perform the bulk of the scene import logic here, for example using `GLTFDocument` or `FBXDocument`.
 * @param path string
 * @param flags int
 * @param options GodotDictionary<any>
 * @returns Object
 */
  private importScene(path: string, flags: int, options: GodotDictionary<any>): Object;
  static readonly IMPORT_SCENE: int;
  static readonly IMPORT_ANIMATION: int;
  static readonly IMPORT_FAIL_ON_MISSING_DEPENDENCIES: int;
  static readonly IMPORT_GENERATE_TANGENT_ARRAYS: int;
  static readonly IMPORT_USE_NAMED_SKIN_BINDS: int;
  static readonly IMPORT_DISCARD_MESHES_AND_MATERIALS: int;
  static readonly IMPORT_FORCE_DISABLE_MESH_COMPRESSION: int;
}
