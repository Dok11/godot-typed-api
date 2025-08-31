import type { GodotArray, GodotDictionary, PackedStringArray, RefCounted, StringName, Variant, float, int } from "../index.d.ts";
/**
 * Export preset configuration.
 * 
 * Export preset configuration. Instances of `EditorExportPreset` by editor UI and intended to be used a read-only configuration passed to the `EditorExportPlatform` methods when exporting the project.
 */
export class EditorExportPreset extends RefCounted {
/**
 * Returns `true` if "Advanced" toggle is enabled in the export dialog.
 * @returns boolean
 */
  areAdvancedOptionsEnabled(): boolean;
/**
 * Returns string with a comma separated list of custom features.
 * @returns string
 */
  getCustomFeatures(): string;
/**
 * Returns `Dictionary` of files selected in the "Resources" tab of the export dialog. Dictionary keys are file names and values are export mode - `"strip"`, `"keep"`, or `"remove"`. See also `get_file_export_mode`.
 * @returns GodotDictionary<any>
 */
  getCustomizedFiles(): GodotDictionary<any>;
/**
 * Returns number of files selected in the "Resources" tab of the export dialog.
 * @returns int
 */
  getCustomizedFilesCount(): int;
/**
 * Returns `true`, PCK directory encryption is enabled in the export dialog.
 * @returns boolean
 */
  getEncryptDirectory(): boolean;
/**
 * Returns file filters to exclude during PCK encryption.
 * @returns string
 */
  getEncryptionExFilter(): string;
/**
 * Returns file filters to include during PCK encryption.
 * @returns string
 */
  getEncryptionInFilter(): string;
/**
 * Returns PCK encryption key.
 * @returns string
 */
  getEncryptionKey(): string;
/**
 * Returns `true`, PCK encryption is enabled in the export dialog.
 * @returns boolean
 */
  getEncryptPck(): boolean;
/**
 * Returns file filters to exclude during export.
 * @returns string
 */
  getExcludeFilter(): string;
/**
 * Returns export file filter mode selected in the "Resources" tab of the export dialog.
 * @returns int
 */
  getExportFilter(): int;
/**
 * Returns export target path.
 * @returns string
 */
  getExportPath(): string;
/**
 * Returns file export mode for the specified file.
 * @param path string
 * @param default_ int (optional, default: 0)
 * @returns int
 */
  getFileExportMode(path: string, default_?: int): int;
/**
 * Returns array of files to export.
 * @returns PackedStringArray
 */
  getFilesToExport(): PackedStringArray;
/**
 * Returns file filters to include during export.
 * @returns string
 */
  getIncludeFilter(): string;
/**
 * Returns export option value or value of environment variable if it is set.
 * @param name StringName
 * @param envVar string
 * @returns Variant
 */
  getOrEnv(name: StringName, envVar: string): Variant;
/**
 * Returns the list of packs on which to base a patch export on.
 * @returns PackedStringArray
 */
  getPatches(): PackedStringArray;
/**
 * Returns export preset name.
 * @returns string
 */
  getPresetName(): string;
/**
 * Returns script export mode.
 * @returns int
 */
  getScriptExportMode(): int;
/**
 * Returns the preset's version number, or fall back to the `ProjectSettings.application/config/version` project setting if set to an empty string.
 * If `windows_version` is `true`, formats the returned version number to be compatible with Windows executable metadata.
 * @param name StringName
 * @param windowsVersion boolean
 * @returns string
 */
  getVersion(name: StringName, windowsVersion: boolean): string;
/**
 * Returns `true` if preset has specified property.
 * @param property StringName
 * @returns boolean
 */
  has(property: StringName): boolean;
/**
 * Returns `true` if specified file is exported.
 * @param path string
 * @returns boolean
 */
  hasExportFile(path: string): boolean;
/**
 * Returns `true` if dedicated server export mode is selected in the export dialog.
 * @returns boolean
 */
  isDedicatedServer(): boolean;
/**
 * Returns `true` if "Runnable" toggle is enabled in the export dialog.
 * @returns boolean
 */
  isRunnable(): boolean;
  static readonly EXPORT_ALL_RESOURCES: int;
  static readonly EXPORT_SELECTED_SCENES: int;
  static readonly EXPORT_SELECTED_RESOURCES: int;
  static readonly EXCLUDE_SELECTED_RESOURCES: int;
  static readonly EXPORT_CUSTOMIZED: int;
  static readonly MODE_FILE_NOT_CUSTOMIZED: int;
  static readonly MODE_FILE_STRIP: int;
  static readonly MODE_FILE_KEEP: int;
  static readonly MODE_FILE_REMOVE: int;
  static readonly MODE_SCRIPT_TEXT: int;
  static readonly MODE_SCRIPT_BINARY_TOKENS: int;
  static readonly MODE_SCRIPT_BINARY_TOKENS_COMPRESSED: int;
}
