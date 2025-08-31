import type { ConfirmationDialog, GodotArray, GodotDictionary, LineEdit, PackedStringArray, Signal, VBoxContainer, Vector2i, float, int } from "../index.d.ts";
/**
 * A dialog for selecting files or directories in the filesystem.
 * 
 * `FileDialog` is a preset dialog used to choose files and directories in the filesystem. It supports filter masks. `FileDialog` automatically sets its window title according to the `file_mode`. If you want to use a custom title, disable this by setting `mode_overrides_title` to `false`.
 */
export class FileDialog extends ConfirmationDialog {
/**
 * The file system access scope. See `Access` constants.
 * 
 * **Warning:** In Web builds, FileDialog cannot access the host file system. In sandboxed Linux and macOS environments, `use_native_dialog` is automatically used to allow limited access to host file system.
 */
  access: int;
/**
 * The current working directory of the file dialog.
 * 
 * **Note:** For native file dialogs, this property is only treated as a hint and may not be respected by specific OS implementations.
 */
  currentDir: string;
/**
 * The currently selected file of the file dialog.
 */
  currentFile: string;
/**
 * The currently selected file path of the file dialog.
 */
  currentPath: string;
  dialogHideOnOk: boolean;
/**
 * The dialog's open or save mode, which affects the selection behavior. See `FileMode`.
 */
  fileMode: int;
/**
 * The filter for file names (case-insensitive). When set to a non-empty string, only files that contains the substring will be shown. `filename_filter` can be edited by the user with the filter button at the top of the file dialog.
 * See also `filters`, which should be used to restrict the file types that can be selected instead of `filename_filter` which is meant to be set by the user.
 */
  filenameFilter: string;
/**
 * The available file type filters. Each filter string in the array should be formatted like this: `*.png,*.jpg,*.jpeg;Image Files;image/png,image/jpeg`. The description text of the filter is optional and can be omitted. Both file extensions and MIME type should be always set.
 * 
 * **Note:** Embedded file dialog and Windows file dialog support only file extensions, while Android, Linux, and macOS file dialogs also support MIME types.
 */
  filters: PackedStringArray;
/**
 * If `true`, changing the `file_mode` property will set the window title accordingly (e.g. setting `file_mode` to `FILE_MODE_OPEN_FILE` will change the window title to "Open a File").
 */
  modeOverridesTitle: boolean;
  okButtonText: string;
/**
 * The number of additional `OptionButton`s and `CheckBox`es in the dialog.
 */
  optionCount: int;
/**
 * If non-empty, the given sub-folder will be "root" of this `FileDialog`, i.e. user won't be able to go to its parent directory.
 * 
 * **Note:** This property is ignored by native file dialogs.
 */
  rootSubfolder: string;
/**
 * If `true`, the dialog will show hidden files.
 * 
 * **Note:** This property is ignored by native file dialogs on Android and Linux.
 */
  showHiddenFiles: boolean;
  size: Vector2i;
  title: string;
/**
 * If `true`, and if supported by the current `DisplayServer`, OS native dialog will be used instead of custom one.
 * 
 * **Note:** On Android, it is only supported when using `ACCESS_FILESYSTEM`. For access mode `ACCESS_RESOURCES` and `ACCESS_USERDATA`, the system will fall back to custom FileDialog.
 * 
 * **Note:** On Linux and macOS, sandboxed apps always use native dialogs to access the host file system.
 * 
 * **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use `OS.get_granted_permissions` to get a list of saved bookmarks.
 * 
 * **Note:** Native dialogs are isolated from the base process, file dialog properties can't be modified once the dialog is shown.
 */
  useNativeDialog: boolean;
/**
 * Adds a comma-delimited file name `filter` option to the `FileDialog` with an optional `description`, which restricts what files can be picked.
 * A `filter` should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.
 * For example, a `filter` of `"*.png, *.jpg"` and a `description` of `"Images"` results in filter text "Images (*.png, *.jpg)".
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
 * Clear the filter for file names.
 */
  clearFilenameFilter(): void;
/**
 * Clear all the added filters in the dialog.
 */
  clearFilters(): void;
/**
 * Clear all currently selected items in the dialog.
 */
  deselectAll(): void;
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
 * Returns the vertical box container of the dialog, custom controls can be added to it.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * 
 * **Note:** Changes to this node are ignored by native file dialogs, use `add_option` to add custom elements to the dialog instead.
 * @returns VBoxContainer
 */
  getVbox(): VBoxContainer;
/**
 * Invalidate and update the current dialog content list.
 * 
 * **Note:** This method does nothing on native file dialogs.
 */
  invalidate(): void;
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
 * Emitted when the user selects a directory.
 */
  dirSelected: Signal<[dir: string]>;
/**
 * Emitted when the filter for file names changes.
 */
  filenameFilterChanged: Signal<[filter: string]>;
/**
 * Emitted when the user selects a file by double-clicking it or pressing the **OK** button.
 */
  fileSelected: Signal<[path: string]>;
/**
 * Emitted when the user selects multiple files.
 */
  filesSelected: Signal<[paths: PackedStringArray]>;
/**
 * The dialog allows selecting one, and only one file.
 */
  static readonly FILE_MODE_OPEN_FILE: int;
/**
 * The dialog allows selecting multiple files.
 */
  static readonly FILE_MODE_OPEN_FILES: int;
/**
 * The dialog only allows selecting a directory, disallowing the selection of any file.
 */
  static readonly FILE_MODE_OPEN_DIR: int;
/**
 * The dialog allows selecting one file or directory.
 */
  static readonly FILE_MODE_OPEN_ANY: int;
/**
 * The dialog will warn when a file exists.
 */
  static readonly FILE_MODE_SAVE_FILE: int;
/**
 * The dialog only allows accessing files under the `Resource` path (`res://`).
 */
  static readonly ACCESS_RESOURCES: int;
/**
 * The dialog only allows accessing files under user data path (`user://`).
 */
  static readonly ACCESS_USERDATA: int;
/**
 * The dialog allows accessing files on the whole file system.
 */
  static readonly ACCESS_FILESYSTEM: int;
}
