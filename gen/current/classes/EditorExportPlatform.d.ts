import type { Callable, EditorExportPreset, GodotArray, GodotDictionary, PackedStringArray, RefCounted, float, int } from "../index.d.ts";
/**
 * Identifies a supported export platform, and internally provides the functionality of exporting to that platform.
 * 
 * Base resource that provides the functionality of exporting a release build of a project to a platform, from the editor. Stores platform-specific metadata such as the name and supported features of the platform, and performs the exporting of projects, PCK files, and ZIP files. Uses an export template for the platform provided at the time of project exporting.
 * Used in scripting by `EditorExportPlugin` to configure platform-specific customization of scenes and resources. See `EditorExportPlugin._begin_customize_scenes` and `EditorExportPlugin._begin_customize_resources` for more details.
 */
export class EditorExportPlatform extends RefCounted {
/**
 * Adds a message to the export log that will be displayed when exporting ends.
 * @param type_ int
 * @param category string
 * @param message string
 */
  addMessage(type_: int, category: string, message: string): void;
/**
 * Clears the export log.
 */
  clearMessages(): void;
/**
 * Create a new preset for this platform.
 * @returns EditorExportPreset
 */
  createPreset(): EditorExportPreset;
/**
 * Creates a PCK archive at `path` for the specified `preset`.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param flags int (optional, default: 0)
 * @returns int
 */
  exportPack(preset: EditorExportPreset, debug: boolean, path: string, flags?: int): int;
/**
 * Creates a patch PCK archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.
 * 
 * **Note:** `patches` is an optional override of the set of patches defined in the export preset. When empty the patches defined in the export preset will be used instead.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param patches PackedStringArray (optional, default: PackedStringArray())
 * @param flags int (optional, default: 0)
 * @returns int
 */
  exportPackPatch(preset: EditorExportPreset, debug: boolean, path: string, patches?: PackedStringArray, flags?: int): int;
/**
 * Creates a full project at `path` for the specified `preset`.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param flags int (optional, default: 0)
 * @returns int
 */
  exportProject(preset: EditorExportPreset, debug: boolean, path: string, flags?: int): int;
/**
 * Exports project files for the specified preset. This method can be used to implement custom export format, other than PCK and ZIP. One of the callbacks is called for each exported file.
 * `save_cb` is called for all exported files and have the following arguments: `file_path: String`, `file_data: PackedByteArray`, `file_index: int`, `file_count: int`, `encryption_include_filters: PackedStringArray`, `encryption_exclude_filters: PackedStringArray`, `encryption_key: PackedByteArray`.
 * `shared_cb` is called for exported native shared/static libraries and have the following arguments: `file_path: String`, `tags: PackedStringArray`, `target_folder: String`.
 * 
 * **Note:** `file_index` and `file_count` are intended for progress tracking only and aren't necessarily unique and precise.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param saveCb Callable
 * @param sharedCb Callable (optional, default: Callable())
 * @returns int
 */
  exportProjectFiles(preset: EditorExportPreset, debug: boolean, saveCb: Callable, sharedCb?: Callable): int;
/**
 * Create a ZIP archive at `path` for the specified `preset`.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param flags int (optional, default: 0)
 * @returns int
 */
  exportZip(preset: EditorExportPreset, debug: boolean, path: string, flags?: int): int;
/**
 * Create a patch ZIP archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.
 * 
 * **Note:** `patches` is an optional override of the set of patches defined in the export preset. When empty the patches defined in the export preset will be used instead.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param patches PackedStringArray (optional, default: PackedStringArray())
 * @param flags int (optional, default: 0)
 * @returns int
 */
  exportZipPatch(preset: EditorExportPreset, debug: boolean, path: string, patches?: PackedStringArray, flags?: int): int;
/**
 * Locates export template for the platform, and returns `Dictionary` with the following keys: `path: String` and `error: String`. This method is provided for convenience and custom export platforms aren't required to use it or keep export templates stored in the same way official templates are.
 * @param templateFileName string
 * @returns GodotDictionary<any>
 */
  findExportTemplate(templateFileName: string): GodotDictionary<any>;
/**
 * Generates array of command line arguments for the default export templates for the debug flags and editor settings.
 * @param flags int
 * @returns PackedStringArray
 */
  genExportFlags(flags: int): PackedStringArray;
/**
 * Returns array of `EditorExportPreset`s for this platform.
 * @returns GodotArray<any>
 */
  getCurrentPresets(): GodotArray<any>;
/**
 * Returns array of core file names that always should be exported regardless of preset config.
 * @returns PackedStringArray
 */
  getForcedExportFiles(): PackedStringArray;
/**
 * Returns additional files that should always be exported regardless of preset configuration, and are not part of the project source. The returned `Dictionary` contains filename keys (`String`) and their corresponding raw data (`PackedByteArray`).
 * @param preset EditorExportPreset
 * @param debug boolean
 * @returns GodotDictionary<any>
 */
  getInternalExportFiles(preset: EditorExportPreset, debug: boolean): GodotDictionary<any>;
/**
 * Returns message category, for the message with `index`.
 * @param index int
 * @returns string
 */
  getMessageCategory(index: int): string;
/**
 * Returns number of messages in the export log.
 * @returns int
 */
  getMessageCount(): int;
/**
 * Returns message text, for the message with `index`.
 * @param index int
 * @returns string
 */
  getMessageText(index: int): string;
/**
 * Returns message type, for the message with `index`.
 * @param index int
 * @returns int
 */
  getMessageType(index: int): int;
/**
 * Returns the name of the export operating system handled by this `EditorExportPlatform` class, as a friendly string. Possible return values are `Windows`, `Linux`, `macOS`, `Android`, `iOS`, and `Web`.
 * @returns string
 */
  getOsName(): string;
/**
 * Returns most severe message type currently present in the export log.
 * @returns int
 */
  getWorstMessageType(): int;
/**
 * Saves PCK archive and returns `Dictionary` with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).
 * If `embed` is `true`, PCK content is appended to the end of `path` file and return `Dictionary` additionally include following keys: `embedded_start: int` (embedded PCK offset) and `embedded_size: int` (embedded PCK size).
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param embed boolean (optional, default: false)
 * @returns GodotDictionary<any>
 */
  savePack(preset: EditorExportPreset, debug: boolean, path: string, embed?: boolean): GodotDictionary<any>;
/**
 * Saves patch PCK archive and returns `Dictionary` with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @returns GodotDictionary<any>
 */
  savePackPatch(preset: EditorExportPreset, debug: boolean, path: string): GodotDictionary<any>;
/**
 * Saves ZIP archive and returns `Dictionary` with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @returns GodotDictionary<any>
 */
  saveZip(preset: EditorExportPreset, debug: boolean, path: string): GodotDictionary<any>;
/**
 * Saves patch ZIP archive and returns `Dictionary` with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @returns GodotDictionary<any>
 */
  saveZipPatch(preset: EditorExportPreset, debug: boolean, path: string): GodotDictionary<any>;
/**
 * Uploads specified file over SCP protocol to the remote host.
 * @param host string
 * @param port string
 * @param scpArgs PackedStringArray
 * @param srcFile string
 * @param dstFile string
 * @returns int
 */
  sshPushToRemote(host: string, port: string, scpArgs: PackedStringArray, srcFile: string, dstFile: string): int;
/**
 * Executes specified command on the remote host via SSH protocol and returns command output in the `output`.
 * @param host string
 * @param port string
 * @param sshArg PackedStringArray
 * @param cmdArgs string
 * @param output GodotArray<any> (optional, default: [])
 * @param portFwd int (optional, default: -1)
 * @returns int
 */
  sshRunOnRemote(host: string, port: string, sshArg: PackedStringArray, cmdArgs: string, output?: GodotArray<any>, portFwd?: int): int;
/**
 * Executes specified command on the remote host via SSH protocol and returns process ID (on the remote host) without waiting for command to finish.
 * @param host string
 * @param port string
 * @param sshArgs PackedStringArray
 * @param cmdArgs string
 * @param portFwd int (optional, default: -1)
 * @returns int
 */
  sshRunOnRemoteNoWait(host: string, port: string, sshArgs: PackedStringArray, cmdArgs: string, portFwd?: int): int;
/**
 * Invalid message type used as the default value when no type is specified.
 */
  static readonly EXPORT_MESSAGE_NONE: int;
/**
 * Message type for informational messages that have no effect on the export.
 */
  static readonly EXPORT_MESSAGE_INFO: int;
/**
 * Message type for warning messages that should be addressed but still allow to complete the export.
 */
  static readonly EXPORT_MESSAGE_WARNING: int;
/**
 * Message type for error messages that must be addressed and fail the export.
 */
  static readonly EXPORT_MESSAGE_ERROR: int;
/**
 * Flag is set if remotely debugged project is expected to use remote file system. If set, `gen_export_flags` will add `--remote-fs` and `--remote-fs-password` (if password is set in the editor settings) command line arguments to the list.
 */
  static readonly DEBUG_FLAG_DUMB_CLIENT: int;
/**
 * Flag is set if remote debug is enabled. If set, `gen_export_flags` will add `--remote-debug` and `--breakpoints` (if breakpoints are selected in the script editor or added by the plugin) command line arguments to the list.
 */
  static readonly DEBUG_FLAG_REMOTE_DEBUG: int;
/**
 * Flag is set if remotely debugged project is running on the localhost. If set, `gen_export_flags` will use `localhost` instead of `EditorSettings.network/debug/remote_host` as remote debugger host.
 */
  static readonly DEBUG_FLAG_REMOTE_DEBUG_LOCALHOST: int;
/**
 * Flag is set if "Visible Collision Shapes" remote debug option is enabled. If set, `gen_export_flags` will add `--debug-collisions` command line arguments to the list.
 */
  static readonly DEBUG_FLAG_VIEW_COLLISIONS: int;
/**
 * Flag is set if Visible Navigation" remote debug option is enabled. If set, `gen_export_flags` will add `--debug-navigation` command line arguments to the list.
 */
  static readonly DEBUG_FLAG_VIEW_NAVIGATION: int;
}
