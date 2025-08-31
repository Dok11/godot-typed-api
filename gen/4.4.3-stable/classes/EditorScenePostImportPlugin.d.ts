import type { GodotArray, GodotDictionary, Node, RefCounted, Resource, StringName, Variant, float, int } from "../index.d.ts";
/**
 * Plugin to control and modifying the process of importing a scene.
 * 
 * This plugin type exists to modify the process of importing scenes, allowing to change the content as well as add importer options at every stage of the process.
 */
export class EditorScenePostImportPlugin extends RefCounted {
/**
 * Add a specific import option (name and default value only). This function can only be called from `_get_import_options` and `_get_internal_import_options`.
 * @param name string
 * @param value Variant
 */
  addImportOption(name: string, value: Variant): void;
/**
 * Add a specific import option. This function can only be called from `_get_import_options` and `_get_internal_import_options`.
 * @param type_ int
 * @param name string
 * @param defaultValue Variant
 * @param hint int (optional, default: 0)
 * @param hintString string (optional, default: "")
 * @param usageFlags int (optional, default: 6)
 */
  addImportOptionAdvanced(type_: int, name: string, defaultValue: Variant, hint?: int, hintString?: string, usageFlags?: int): void;
/**
 * Override to add general import options. These will appear in the main import dock on the editor. Add options via `add_import_option` and `add_import_option_advanced`.
 * @param path string
 */
  private getImportOptions(path: string): void;
/**
 * Override to add internal import options. These will appear in the 3D scene import dialog. Add options via `add_import_option` and `add_import_option_advanced`.
 * @param category int
 */
  private getInternalImportOptions(category: int): void;
/**
 * Should return `true` if the 3D view of the import dialog needs to update when changing the given option.
 * @param category int
 * @param option string
 * @returns Variant
 */
  private getInternalOptionUpdateViewRequired(category: int, option: string): Variant;
/**
 * Should return `true` to show the given option, `false` to hide the given option, or `null` to ignore.
 * @param category int
 * @param forAnimation boolean
 * @param option string
 * @returns Variant
 */
  private getInternalOptionVisibility(category: int, forAnimation: boolean, option: string): Variant;
/**
 * Query the value of an option. This function can only be called from those querying visibility, or processing.
 * @param name StringName
 * @returns Variant
 */
  getOptionValue(name: StringName): Variant;
/**
 * Should return `true` to show the given option, `false` to hide the given option, or `null` to ignore.
 * @param path string
 * @param forAnimation boolean
 * @param option string
 * @returns Variant
 */
  private getOptionVisibility(path: string, forAnimation: boolean, option: string): Variant;
/**
 * Process a specific node or resource for a given category.
 * @param category int
 * @param baseNode Node
 * @param node Node
 * @param resource Resource
 */
  private internalProcess(category: int, baseNode: Node, node: Node, resource: Resource): void;
/**
 * Post process the scene. This function is called after the final scene has been configured.
 * @param scene Node
 */
  private postProcess(scene: Node): void;
/**
 * Pre Process the scene. This function is called right after the scene format loader loaded the scene and no changes have been made.
 * Pre process may be used to adjust internal import options in the `"nodes"`, `"meshes"`, `"animations"` or `"materials"` keys inside `get_option_value("_subresources")`.
 * @param scene Node
 */
  private preProcess(scene: Node): void;
  static readonly INTERNAL_IMPORT_CATEGORY_NODE: int;
  static readonly INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE: int;
  static readonly INTERNAL_IMPORT_CATEGORY_MESH: int;
  static readonly INTERNAL_IMPORT_CATEGORY_MATERIAL: int;
  static readonly INTERNAL_IMPORT_CATEGORY_ANIMATION: int;
  static readonly INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE: int;
  static readonly INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE: int;
  static readonly INTERNAL_IMPORT_CATEGORY_MAX: int;
}
