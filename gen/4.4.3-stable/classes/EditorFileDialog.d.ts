import type { ConfirmationDialog, Control, GodotArray, GodotDictionary, LineEdit, PackedStringArray, Signal, VBoxContainer, float, int } from "../index.d.ts";
/**
 * A modified version of `FileDialog` used by the editor.
 * 
 * `EditorFileDialog` is an enhanced version of `FileDialog` available only to editor plugins. Additional features include list of favorited/recent files and the ability to see files as thumbnails grid instead of list.
 * Unlike `FileDialog`, `EditorFileDialog` does not have a property for using native dialogs. Instead, native dialogs can be enabled globally via the `EditorSettings.interface/editor/use_native_file_dialogs` editor setting. They are also enabled automatically when running in sandbox (e.g. on macOS).
 */
export class EditorFileDialog extends ConfirmationDialog {
/**
 * The location from which the user may select a file, including `res://`, `user://`, and the local file system.
 */
  access: int;
/**
 * The currently occupied directory.
 */
  currentDir: string;
/**
 * The currently selected file.
 */
  currentFile: string;
/**
 * The file system path in the address bar.
 */
  currentPath: string;
  dialogHideOnOk: boolean;
/**
 * If `true`, the `EditorFileDialog` will not warn the user before overwriting files.
 */
  disableOverwriteWarning: boolean;
/**
 * The view format in which the `EditorFileDialog` displays resources to the user.
 */
  displayMode: int;
/**
 * The dialog's open or save mode, which affects the selection behavior. See `FileMode`.
 */
  fileMode: int;
/**
 * The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected.
 */
  filters: PackedStringArray;
/**
 * The number of additional `OptionButton`s and `CheckBox`es in the dialog.
 */
  optionCount: int;
/**
 * If `true`, hidden files and directories will be visible in the `EditorFileDialog`. This property is synchronized with `EditorSettings.filesystem/file_dialog/show_hidden_files`.
 */
  showHiddenFiles: boolean;
  title: string;
/**
 * Adds a comma-delimited file name `filter` option to the `EditorFileDialog` with an optional `description`, which restricts what files can be picked.
 * A `filter` should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.
 * For example, a `filter` of `"*.tscn, *.scn"` and a `description` of `"Scenes"` results in filter text "Scenes (*.tscn, *.scn)".
 * @param filter string
 * @param description string (optional, default: "")
 */
  addFilter(filter: string, description?: string): void;
/**
 * Adds an additional `OptionButton` to the file dialog. If `values` is empty, a `CheckBox` is added instead.
 * `default_value_index` should be an index of the value in the `values`. If `values` is empty it should be either `1` (checked), or `0` (unchecked).
 * @param name string
 * @param values PackedStringArray
 * @param defaultValueIndex int
 */
  addOption(name: string, values: PackedStringArray, defaultValueIndex: int): void;
/**
 * Adds the given `menu` to the side of the file dialog with the given `title` text on top. Only one side menu is allowed.
 * @param menu Control
 * @param title string (optional, default: "")
 */
  addSideMenu(menu: Control, title?: string): void;
/**
 * Clear the filter for file names.
 */
  clearFilenameFilter(): void;
/**
 * Removes all filters except for "All Files (*.*)".
 */
  clearFilters(): void;
/**
 * Returns the value of the filter for file names.
 * @returns string
 */
  getFilenameFilter(): string;
/**
 * Returns the LineEdit for the selected file.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns LineEdit
 */
  getLineEdit(): LineEdit;
/**
 * Returns the default value index of the `OptionButton` or `CheckBox` with index `option`.
 * @param option int
 * @returns int
 */
  getOptionDefault(option: int): int;
/**
 * Returns the name of the `OptionButton` or `CheckBox` with index `option`.
 * @param option int
 * @returns string
 */
  getOptionName(option: int): string;
/**
 * Returns an array of values of the `OptionButton` with index `option`.
 * @param option int
 * @returns PackedStringArray
 */
  getOptionValues(option: int): PackedStringArray;
/**
 * Returns a `Dictionary` with the selected values of the additional `OptionButton`s and/or `CheckBox`es. `Dictionary` keys are names and values are selected value indices.
 * @returns GodotDictionary<any>
 */
  getSelectedOptions(): GodotDictionary<any>;
/**
 * Returns the `VBoxContainer` used to display the file system.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns VBoxContainer
 */
  getVbox(): VBoxContainer;
/**
 * Notify the `EditorFileDialog` that its view of the data is no longer accurate. Updates the view contents on next view update.
 */
  invalidate(): void;
/**
 * Shows the `EditorFileDialog` at the default size and position for file dialogs in the editor, and selects the file name if there is a current file.
 */
  popupFileDialog(): void;
/**
 * Sets the value of the filter for file names.
 * @param filter string
 */
  setFilenameFilter(filter: string): void;
/**
 * Sets the default value index of the `OptionButton` or `CheckBox` with index `option`.
 * @param option int
 * @param defaultValueIndex int
 */
  setOptionDefault(option: int, defaultValueIndex: int): void;
/**
 * Sets the name of the `OptionButton` or `CheckBox` with index `option`.
 * @param option int
 * @param name string
 */
  setOptionName(option: int, name: string): void;
/**
 * Sets the option values of the `OptionButton` with index `option`.
 * @param option int
 * @param values PackedStringArray
 */
  setOptionValues(option: int, values: PackedStringArray): void;
/**
 * Emitted when a directory is selected.
 */
  dirSelected: Signal<[dir: string]>;
/**
 * Emitted when the filter for file names changes.
 */
  filenameFilterChanged: Signal<[filter: string]>;
/**
 * Emitted when a file is selected.
 */
  fileSelected: Signal<[path: string]>;
/**
 * Emitted when multiple files are selected.
 */
  filesSelected: Signal<[paths: PackedStringArray]>;
/**
 * The `EditorFileDialog` can select only one file. Accepting the window will open the file.
 */
  static readonly FILE_MODE_OPEN_FILE: int;
/**
 * The `EditorFileDialog` can select multiple files. Accepting the window will open all files.
 */
  static readonly FILE_MODE_OPEN_FILES: int;
/**
 * The `EditorFileDialog` can select only one directory. Accepting the window will open the directory.
 */
  static readonly FILE_MODE_OPEN_DIR: int;
/**
 * The `EditorFileDialog` can select a file or directory. Accepting the window will open it.
 */
  static readonly FILE_MODE_OPEN_ANY: int;
/**
 * The `EditorFileDialog` can select only one file. Accepting the window will save the file.
 */
  static readonly FILE_MODE_SAVE_FILE: int;
/**
 * The `EditorFileDialog` can only view `res://` directory contents.
 */
  static readonly ACCESS_RESOURCES: int;
/**
 * The `EditorFileDialog` can only view `user://` directory contents.
 */
  static readonly ACCESS_USERDATA: int;
/**
 * The `EditorFileDialog` can view the entire local file system.
 */
  static readonly ACCESS_FILESYSTEM: int;
/**
 * The `EditorFileDialog` displays resources as thumbnails.
 */
  static readonly DISPLAY_THUMBNAILS: int;
/**
 * The `EditorFileDialog` displays resources as a list of filenames.
 */
  static readonly DISPLAY_LIST: int;
}
