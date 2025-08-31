import type { Dictionary, EditorExportPlatform, EditorExportPreset, GodotArray, GodotDictionary, ImageTexture, PackedStringArray, StringName, Texture2D, float, int } from "../index.d.ts";
/**
 * Base class for custom `EditorExportPlatform` implementations (plugins).
 * 
 * External `EditorExportPlatform` implementations should inherit from this class.
 * To use `EditorExportPlatform`, register it using the `EditorPlugin.add_export_platform` method first.
 */
export class EditorExportPlatformExtension extends EditorExportPlatform {
/**
 * **Optional.**
 * Returns `true`, if specified `preset` is valid and can be exported. Use `set_config_error` and `set_config_missing_templates` to set error details.
 * Usual implementation can call `_has_valid_export_configuration` and `_has_valid_project_configuration` to determine if export is possible.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @returns boolean
 */
  private canExport(preset: EditorExportPreset, debug: boolean): boolean;
/**
 * **Optional.**
 * Called by the editor before platform is unregistered.
 */
  private cleanup(): void;
/**
 * **Optional.**
 * Creates a PCK archive at `path` for the specified `preset`.
 * This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" disabled, and PCK is selected as a file type.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param flags int
 * @returns int
 */
  private exportPack(preset: EditorExportPreset, debug: boolean, path: string, flags: int): int;
/**
 * **Optional.**
 * Creates a patch PCK archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.
 * This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" enabled, and PCK is selected as a file type.
 * 
 * **Note:** The patches provided in `patches` have already been loaded when this method is called and are merely provided as context. When empty the patches defined in the export preset have been loaded instead.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param patches PackedStringArray
 * @param flags int
 * @returns int
 */
  private exportPackPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray, flags: int): int;
/**
 * **Required.**
 * Creates a full project at `path` for the specified `preset`.
 * This method is called when "Export" button is pressed in the export dialog.
 * This method implementation can call `EditorExportPlatform.save_pack` or `EditorExportPlatform.save_zip` to use default PCK/ZIP export process, or calls `EditorExportPlatform.export_project_files` and implement custom callback for processing each exported file.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param flags int
 * @returns int
 */
  private exportProject(preset: EditorExportPreset, debug: boolean, path: string, flags: int): int;
/**
 * **Optional.**
 * Create a ZIP archive at `path` for the specified `preset`.
 * This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" disabled, and ZIP is selected as a file type.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param flags int
 * @returns int
 */
  private exportZip(preset: EditorExportPreset, debug: boolean, path: string, flags: int): int;
/**
 * **Optional.**
 * Create a ZIP archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.
 * This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" enabled, and ZIP is selected as a file type.
 * 
 * **Note:** The patches provided in `patches` have already been loaded when this method is called and are merely provided as context. When empty the patches defined in the export preset have been loaded instead.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @param path string
 * @param patches PackedStringArray
 * @param flags int
 * @returns int
 */
  private exportZipPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray, flags: int): int;
/**
 * **Required.**
 * Returns array of supported binary extensions for the full project export.
 * @param preset EditorExportPreset
 * @returns PackedStringArray
 */
  private getBinaryExtensions(preset: EditorExportPreset): PackedStringArray;
/**
 * Returns current configuration error message text. This method should be called only from the `_can_export`, `_has_valid_export_configuration`, or `_has_valid_project_configuration` implementations.
 * @returns string
 */
  getConfigError(): string;
/**
 * Returns `true` is export templates are missing from the current configuration. This method should be called only from the `_can_export`, `_has_valid_export_configuration`, or `_has_valid_project_configuration` implementations.
 * @returns boolean
 */
  getConfigMissingTemplates(): boolean;
/**
 * **Optional.**
 * Returns protocol used for remote debugging. Default implementation return `tcp://`.
 * @returns string
 */
  private getDebugProtocol(): string;
/**
 * **Optional.**
 * Returns device architecture for one-click deploy.
 * @param device int
 * @returns string
 */
  private getDeviceArchitecture(device: int): string;
/**
 * **Optional.**
 * Returns a property list, as an `Array` of dictionaries. Each `Dictionary` must at least contain the `name: StringName` and `type: Variant.Type` entries.
 * Additionally, the following keys are supported:
 * - `hint: PropertyHint`
 * - `hint_string: String`
 * - `usage: PropertyUsageFlags`
 * - `class_name: StringName`
 * - `default_value: Variant`, default value of the property.
 * - `update_visibility: bool`, if set to `true`, `_get_export_option_visibility` is called for each property when this property is changed.
 * - `required: bool`, if set to `true`, this property warnings are critical, and should be resolved to make export possible. This value is a hint for the `_has_valid_export_configuration` implementation, and not used by the engine directly.
 * See also `Object._get_property_list`.
 * @returns Dictionary[]
 */
  private getExportOptions(): Dictionary[];
/**
 * **Optional.**
 * Validates `option` and returns visibility for the specified `preset`. Default implementation return `true` for all options.
 * @param preset EditorExportPreset
 * @param option string
 * @returns boolean
 */
  private getExportOptionVisibility(preset: EditorExportPreset, option: string): boolean;
/**
 * **Optional.**
 * Validates `option` and returns warning message for the specified `preset`. Default implementation return empty string for all options.
 * @param preset EditorExportPreset
 * @param option StringName
 * @returns string
 */
  private getExportOptionWarning(preset: EditorExportPreset, option: StringName): string;
/**
 * **Required.**
 * Returns platform logo displayed in the export dialog, logo should be 32x32 adjusted to the current editor scale, see `EditorInterface.get_editor_scale`.
 * @returns Texture2D
 */
  private getLogo(): Texture2D;
/**
 * **Required.**
 * Returns export platform name.
 * @returns string
 */
  private getName(): string;
/**
 * **Optional.**
 * Returns one-click deploy menu item icon for the specified `device`, icon should be 16x16 adjusted to the current editor scale, see `EditorInterface.get_editor_scale`.
 * @param device int
 * @returns ImageTexture
 */
  private getOptionIcon(device: int): ImageTexture;
/**
 * **Optional.**
 * Returns one-click deploy menu item label for the specified `device`.
 * @param device int
 * @returns string
 */
  private getOptionLabel(device: int): string;
/**
 * **Optional.**
 * Returns number one-click deploy devices (or other one-click option displayed in the menu).
 * @returns int
 */
  private getOptionsCount(): int;
/**
 * **Optional.**
 * Returns tooltip of the one-click deploy menu button.
 * @returns string
 */
  private getOptionsTooltip(): string;
/**
 * **Optional.**
 * Returns one-click deploy menu item tooltip for the specified `device`.
 * @param device int
 * @returns string
 */
  private getOptionTooltip(device: int): string;
/**
 * **Required.**
 * Returns target OS name.
 * @returns string
 */
  private getOsName(): string;
/**
 * **Required.**
 * Returns array of platform specific features.
 * @returns PackedStringArray
 */
  private getPlatformFeatures(): PackedStringArray;
/**
 * **Required.**
 * Returns array of platform specific features for the specified `preset`.
 * @param preset EditorExportPreset
 * @returns PackedStringArray
 */
  private getPresetFeatures(preset: EditorExportPreset): PackedStringArray;
/**
 * **Optional.**
 * Returns icon of the one-click deploy menu button, icon should be 16x16 adjusted to the current editor scale, see `EditorInterface.get_editor_scale`.
 * @returns Texture2D
 */
  private getRunIcon(): Texture2D;
/**
 * **Required.**
 * Returns `true` if export configuration is valid.
 * @param preset EditorExportPreset
 * @param debug boolean
 * @returns boolean
 */
  private hasValidExportConfiguration(preset: EditorExportPreset, debug: boolean): boolean;
/**
 * **Required.**
 * Returns `true` if project configuration is valid.
 * @param preset EditorExportPreset
 * @returns boolean
 */
  private hasValidProjectConfiguration(preset: EditorExportPreset): boolean;
/**
 * **Optional.**
 * Returns `true` if specified file is a valid executable (native executable or script) for the target platform.
 * @param path string
 * @returns boolean
 */
  private isExecutable(path: string): boolean;
/**
 * **Optional.**
 * Returns `true` if one-click deploy options are changed and editor interface should be updated.
 * @returns boolean
 */
  private pollExport(): boolean;
/**
 * **Optional.**
 * This method is called when `device` one-click deploy menu option is selected.
 * Implementation should export project to a temporary location, upload and run it on the specific `device`, or perform another action associated with the menu item.
 * @param preset EditorExportPreset
 * @param device int
 * @param debugFlags int
 * @returns int
 */
  private run(preset: EditorExportPreset, device: int, debugFlags: int): int;
/**
 * Sets current configuration error message text. This method should be called only from the `_can_export`, `_has_valid_export_configuration`, or `_has_valid_project_configuration` implementations.
 * @param errorText string
 */
  setConfigError(errorText: string): void;
/**
 * Set to `true` is export templates are missing from the current configuration. This method should be called only from the `_can_export`, `_has_valid_export_configuration`, or `_has_valid_project_configuration` implementations.
 * @param missingTemplates boolean
 */
  setConfigMissingTemplates(missingTemplates: boolean): void;
/**
 * **Optional.**
 * Returns `true` if export options list is changed and presets should be updated.
 * @returns boolean
 */
  private shouldUpdateExportOptions(): boolean;
}
