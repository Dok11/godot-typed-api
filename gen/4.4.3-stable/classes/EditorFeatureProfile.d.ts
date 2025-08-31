import type { GodotArray, GodotDictionary, RefCounted, StringName, float, int } from "../index.d.ts";
/**
 * An editor feature profile which can be used to disable specific features.
 * 
 * An editor feature profile can be used to disable specific features of the Godot editor. When disabled, the features won't appear in the editor, which makes the editor less cluttered. This is useful in education settings to reduce confusion or when working in a team. For example, artists and level designers could use a feature profile that disables the script editor to avoid accidentally making changes to files they aren't supposed to edit.
 * To manage editor feature profiles visually, use **Editor > Manage Feature Profiles...** at the top of the editor window.
 */
export class EditorFeatureProfile extends RefCounted {
/**
 * Returns the specified `feature`'s human-readable name.
 * @param feature int
 * @returns string
 */
  getFeatureName(feature: int): string;
/**
 * Returns `true` if the class specified by `class_name` is disabled. When disabled, the class won't appear in the Create New Node dialog.
 * @param className StringName
 * @returns boolean
 */
  isClassDisabled(className: StringName): boolean;
/**
 * Returns `true` if editing for the class specified by `class_name` is disabled. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class.
 * @param className StringName
 * @returns boolean
 */
  isClassEditorDisabled(className: StringName): boolean;
/**
 * Returns `true` if `property` is disabled in the class specified by `class_name`. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by `class_name`.
 * @param className StringName
 * @param property StringName
 * @returns boolean
 */
  isClassPropertyDisabled(className: StringName, property: StringName): boolean;
/**
 * Returns `true` if the `feature` is disabled. When a feature is disabled, it will disappear from the editor entirely.
 * @param feature int
 * @returns boolean
 */
  isFeatureDisabled(feature: int): boolean;
/**
 * Loads an editor feature profile from a file. The file must follow the JSON format obtained by using the feature profile manager's **Export** button or the `save_to_file` method.
 * 
 * **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using `EditorPaths.get_config_dir`.
 * @param path string
 * @returns int
 */
  loadFromFile(path: string): int;
/**
 * Saves the editor feature profile to a file in JSON format. It can then be imported using the feature profile manager's **Import** button or the `load_from_file` method.
 * 
 * **Note:** Feature profiles created via the user interface are saved in the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using `EditorPaths.get_config_dir`.
 * @param path string
 * @returns int
 */
  saveToFile(path: string): int;
/**
 * If `disable` is `true`, disables the class specified by `class_name`. When disabled, the class won't appear in the Create New Node dialog.
 * @param className StringName
 * @param disable boolean
 */
  setDisableClass(className: StringName, disable: boolean): void;
/**
 * If `disable` is `true`, disables editing for the class specified by `class_name`. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class.
 * @param className StringName
 * @param disable boolean
 */
  setDisableClassEditor(className: StringName, disable: boolean): void;
/**
 * If `disable` is `true`, disables editing for `property` in the class specified by `class_name`. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by `class_name`.
 * @param className StringName
 * @param property StringName
 * @param disable boolean
 */
  setDisableClassProperty(className: StringName, property: StringName, disable: boolean): void;
/**
 * If `disable` is `true`, disables the editor feature specified in `feature`. When a feature is disabled, it will disappear from the editor entirely.
 * @param feature int
 * @param disable boolean
 */
  setDisableFeature(feature: int, disable: boolean): void;
/**
 * The 3D editor. If this feature is disabled, the 3D editor won't display but 3D nodes will still display in the Create New Node dialog.
 */
  static readonly FEATURE_3D: int;
/**
 * The Script tab, which contains the script editor and class reference browser. If this feature is disabled, the Script tab won't display.
 */
  static readonly FEATURE_SCRIPT: int;
/**
 * The AssetLib tab. If this feature is disabled, the AssetLib tab won't display.
 */
  static readonly FEATURE_ASSET_LIB: int;
/**
 * Scene tree editing. If this feature is disabled, the Scene tree dock will still be visible but will be read-only.
 */
  static readonly FEATURE_SCENE_TREE: int;
/**
 * The Node dock. If this feature is disabled, signals and groups won't be visible and modifiable from the editor.
 */
  static readonly FEATURE_NODE_DOCK: int;
/**
 * The FileSystem dock. If this feature is disabled, the FileSystem dock won't be visible.
 */
  static readonly FEATURE_FILESYSTEM_DOCK: int;
/**
 * The Import dock. If this feature is disabled, the Import dock won't be visible.
 */
  static readonly FEATURE_IMPORT_DOCK: int;
/**
 * The History dock. If this feature is disabled, the History dock won't be visible.
 */
  static readonly FEATURE_HISTORY_DOCK: int;
/**
 * The Game tab, which allows embedding the game window and selecting nodes by clicking inside of it. If this feature is disabled, the Game tab won't display.
 */
  static readonly FEATURE_GAME: int;
/**
 * Represents the size of the `Feature` enum.
 */
  static readonly FEATURE_MAX: int;
}
