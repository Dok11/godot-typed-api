import type { Dictionary, EditorExportPlatform, EditorExportPreset, GodotArray, GodotDictionary, Node, PackedByteArray, PackedStringArray, RefCounted, Resource, StringName, Variant, float, int } from "../index.d.ts";
/**
 * A script that is executed when exporting the project.
 * 
 * `EditorExportPlugin`s are automatically invoked whenever the user exports the project. Their most common use is to determine what files are being included in the exported project. For each plugin, `_export_begin` is called at the beginning of the export process and then `_export_file` is called for each exported file.
 * To use `EditorExportPlugin`, register it using the `EditorPlugin.add_export_plugin` method first.
 */
export class EditorExportPlugin extends RefCounted {
/**
 * Adds a custom file to be exported. `path` is the virtual path that can be used to load the file, `file` is the binary data of the file.
 * When called inside `_export_file` and `remap` is `true`, the current file will not be exported, but instead remapped to this custom file. `remap` is ignored when called in other places.
 * `file` will not be imported, so consider using `_customize_resource` to remap imported resources.
 * @param path string
 * @param file PackedByteArray
 * @param remap boolean
 */
  addFile(path: string, file: PackedByteArray, remap: boolean): void;
/**
 * Adds an iOS bundle file from the given `path` to the exported project.
 * @param path string
 */
  addIosBundleFile(path: string): void;
/**
 * Adds a C++ code to the iOS export. The final code is created from the code appended by each active export plugin.
 * @param code string
 */
  addIosCppCode(code: string): void;
/**
 * Adds a dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project and embeds it into resulting binary.
 * 
 * **Note:** For static libraries (*.a) works in same way as `add_ios_framework`.
 * 
 * **Note:** This method should not be used for System libraries as they are already present on the device.
 * @param path string
 */
  addIosEmbeddedFramework(path: string): void;
/**
 * Adds a static library (*.a) or dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project.
 * @param path string
 */
  addIosFramework(path: string): void;
/**
 * Adds linker flags for the iOS export.
 * @param flags string
 */
  addIosLinkerFlags(flags: string): void;
/**
 * Adds content for iOS Property List files.
 * @param plistContent string
 */
  addIosPlistContent(plistContent: string): void;
/**
 * Adds a static lib from the given `path` to the iOS project.
 * @param path string
 */
  addIosProjectStaticLib(path: string): void;
/**
 * Adds file or directory matching `path` to `PlugIns` directory of macOS app bundle.
 * 
 * **Note:** This is useful only for macOS exports.
 * @param path string
 */
  addMacosPluginFile(path: string): void;
/**
 * Adds a shared object or a directory containing only shared objects with the given `tags` and destination `path`.
 * 
 * **Note:** In case of macOS exports, those shared objects will be added to `Frameworks` directory of app bundle.
 * In case of a directory code-sign will error if you place non code object in directory.
 * @param path string
 * @param tags PackedStringArray
 * @param target string
 */
  addSharedObject(path: string, tags: PackedStringArray, target: string): void;
/**
 * Return `true` if this plugin will customize resources based on the platform and features used.
 * When enabled, `_get_customization_configuration_hash` and `_customize_resource` will be called and must be implemented.
 * @param platform EditorExportPlatform
 * @param features PackedStringArray
 * @returns boolean
 */
  private beginCustomizeResources(platform: EditorExportPlatform, features: PackedStringArray): boolean;
/**
 * Return `true` if this plugin will customize scenes based on the platform and features used.
 * When enabled, `_get_customization_configuration_hash` and `_customize_scene` will be called and must be implemented.
 * 
 * **Note:** `_customize_scene` will only be called for scenes that have been modified since the last export.
 * @param platform EditorExportPlatform
 * @param features PackedStringArray
 * @returns boolean
 */
  private beginCustomizeScenes(platform: EditorExportPlatform, features: PackedStringArray): boolean;
/**
 * Customize a resource. If changes are made to it, return the same or a new resource. Otherwise, return `null`. When a new resource is returned, `resource` will be replaced by a copy of the new resource.
 * The `path` argument is only used when customizing an actual file, otherwise this means that this resource is part of another one and it will be empty.
 * Implementing this method is required if `_begin_customize_resources` returns `true`.
 * 
 * **Note:** When customizing any of the following types and returning another resource, the other resource should not be skipped using `skip` in `_export_file`:
 * - `AtlasTexture`
 * - `CompressedCubemap`
 * - `CompressedCubemapArray`
 * - `CompressedTexture2D`
 * - `CompressedTexture2DArray`
 * - `CompressedTexture3D`
 * @param resource Resource
 * @param path string
 * @returns Resource
 */
  private customizeResource(resource: Resource, path: string): Resource;
/**
 * Customize a scene. If changes are made to it, return the same or a new scene. Otherwise, return `null`. If a new scene is returned, it is up to you to dispose of the old one.
 * Implementing this method is required if `_begin_customize_scenes` returns `true`.
 * @param scene Node
 * @param path string
 * @returns Node
 */
  private customizeScene(scene: Node, path: string): Node;
/**
 * This is called when the customization process for resources ends.
 */
  private endCustomizeResources(): void;
/**
 * This is called when the customization process for scenes ends.
 */
  private endCustomizeScenes(): void;
/**
 * Virtual method to be overridden by the user. It is called when the export starts and provides all information about the export. `features` is the list of features for the export, `is_debug` is `true` for debug builds, `path` is the target path for the exported project. `flags` is only used when running a runnable profile, e.g. when using native run on Android.
 * @param features PackedStringArray
 * @param isDebug boolean
 * @param path string
 * @param flags int
 */
  private exportBegin(features: PackedStringArray, isDebug: boolean, path: string, flags: int): void;
/**
 * Virtual method to be overridden by the user. Called when the export is finished.
 */
  private exportEnd(): void;
/**
 * Virtual method to be overridden by the user. Called for each exported file before `_customize_resource` and `_customize_scene`. The arguments can be used to identify the file. `path` is the path of the file, `type` is the `Resource` represented by the file (e.g. `PackedScene`), and `features` is the list of features for the export.
 * Calling `skip` inside this callback will make the file not included in the export.
 * @param path string
 * @param type_ string
 * @param features PackedStringArray
 */
  private exportFile(path: string, type_: string, features: PackedStringArray): void;
/**
 * Virtual method to be overridden by the user. This is called to retrieve the set of Android dependencies provided by this plugin. Each returned Android dependency should have the format of an Android remote binary dependency: `org.godot.example:my-plugin:0.0.0`
 * For more information see Android documentation on dependencies (https://developer.android.com/build/dependencies?agpversion=4.1#dependency-types).
 * 
 * **Note:** Only supported on Android and requires `EditorExportPlatformAndroid.gradle_build/use_gradle_build` to be enabled.
 * @param platform EditorExportPlatform
 * @param debug boolean
 * @returns PackedStringArray
 */
  private getAndroidDependencies(platform: EditorExportPlatform, debug: boolean): PackedStringArray;
/**
 * Virtual method to be overridden by the user. This is called to retrieve the URLs of Maven repositories for the set of Android dependencies provided by this plugin.
 * For more information see Gradle documentation on dependency management (https://docs.gradle.org/current/userguide/dependency_management.html#sec:maven_repo).
 * 
 * **Note:** Google's Maven repo and the Maven Central repo are already included by default.
 * 
 * **Note:** Only supported on Android and requires `EditorExportPlatformAndroid.gradle_build/use_gradle_build` to be enabled.
 * @param platform EditorExportPlatform
 * @param debug boolean
 * @returns PackedStringArray
 */
  private getAndroidDependenciesMavenRepos(platform: EditorExportPlatform, debug: boolean): PackedStringArray;
/**
 * Virtual method to be overridden by the user. This is called to retrieve the local paths of the Android libraries archive (AAR) files provided by this plugin.
 * 
 * **Note:** Relative paths **must** be relative to Godot's `res://addons/` directory. For example, an AAR file located under `res://addons/hello_world_plugin/HelloWorld.release.aar` can be returned as an absolute path using `res://addons/hello_world_plugin/HelloWorld.release.aar` or a relative path using `hello_world_plugin/HelloWorld.release.aar`.
 * 
 * **Note:** Only supported on Android and requires `EditorExportPlatformAndroid.gradle_build/use_gradle_build` to be enabled.
 * @param platform EditorExportPlatform
 * @param debug boolean
 * @returns PackedStringArray
 */
  private getAndroidLibraries(platform: EditorExportPlatform, debug: boolean): PackedStringArray;
/**
 * Virtual method to be overridden by the user. This is used at export time to update the contents of the `activity` element in the generated Android manifest.
 * 
 * **Note:** Only supported on Android and requires `EditorExportPlatformAndroid.gradle_build/use_gradle_build` to be enabled.
 * @param platform EditorExportPlatform
 * @param debug boolean
 * @returns string
 */
  private getAndroidManifestActivityElementContents(platform: EditorExportPlatform, debug: boolean): string;
/**
 * Virtual method to be overridden by the user. This is used at export time to update the contents of the `application` element in the generated Android manifest.
 * 
 * **Note:** Only supported on Android and requires `EditorExportPlatformAndroid.gradle_build/use_gradle_build` to be enabled.
 * @param platform EditorExportPlatform
 * @param debug boolean
 * @returns string
 */
  private getAndroidManifestApplicationElementContents(platform: EditorExportPlatform, debug: boolean): string;
/**
 * Virtual method to be overridden by the user. This is used at export time to update the contents of the `manifest` element in the generated Android manifest.
 * 
 * **Note:** Only supported on Android and requires `EditorExportPlatformAndroid.gradle_build/use_gradle_build` to be enabled.
 * @param platform EditorExportPlatform
 * @param debug boolean
 * @returns string
 */
  private getAndroidManifestElementContents(platform: EditorExportPlatform, debug: boolean): string;
/**
 * Return a hash based on the configuration passed (for both scenes and resources). This helps keep separate caches for separate export configurations.
 * Implementing this method is required if `_begin_customize_resources` returns `true`.
 * @returns int
 */
  private getCustomizationConfigurationHash(): int;
/**
 * Return a `PackedStringArray` of additional features this preset, for the given `platform`, should have.
 * @param platform EditorExportPlatform
 * @param debug boolean
 * @returns PackedStringArray
 */
  private getExportFeatures(platform: EditorExportPlatform, debug: boolean): PackedStringArray;
/**
 * Return a list of export options that can be configured for this export plugin.
 * Each element in the return value is a `Dictionary` with the following keys:
 * - `option`: A dictionary with the structure documented by `Object.get_property_list`, but all keys are optional.
 * - `default_value`: The default value for this option.
 * - `update_visibility`: An optional boolean value. If set to `true`, the preset will emit `Object.property_list_changed` when the option is changed.
 * @param platform EditorExportPlatform
 * @returns Dictionary[]
 */
  private getExportOptions(platform: EditorExportPlatform): Dictionary[];
/**
 * Return a `Dictionary` of override values for export options, that will be used instead of user-provided values. Overridden options will be hidden from the user interface.
 * 
 * 				```gdscript
 * 
 * 				class MyExportPlugin extends EditorExportPlugin:
 * 				    func _get_name() -> String:
 * 				        return "MyExportPlugin"
 * 
 * 				    func _supports_platform(platform) -> bool:
 * 				        if platform is EditorExportPlatformPC:
 * 				            # Run on all desktop platforms including Windows, MacOS and Linux.
 * 				            return true
 * 				        return false
 * 
 * 				    func _get_export_options_overrides(platform) -> Dictionary:
 * 				        # Override "Embed PCK" to always be enabled.
 * 				        return {
 * 				            "binary_format/embed_pck": true,
 * 				        }
 * 				
 * 
 * ```
 * @param platform EditorExportPlatform
 * @returns GodotDictionary<any>
 */
  private getExportOptionsOverrides(platform: EditorExportPlatform): GodotDictionary<any>;
/**
 * **Optional.**
 * Validates `option` and returns the visibility for the specified `platform`. The default implementation returns `true` for all options.
 * @param platform EditorExportPlatform
 * @param option string
 * @returns boolean
 */
  private getExportOptionVisibility(platform: EditorExportPlatform, option: string): boolean;
/**
 * Check the requirements for the given `option` and return a non-empty warning string if they are not met.
 * 
 * **Note:** Use `get_option` to check the value of the export options.
 * @param platform EditorExportPlatform
 * @param option string
 * @returns string
 */
  private getExportOptionWarning(platform: EditorExportPlatform, option: string): string;
/**
 * Returns currently used export platform.
 * @returns EditorExportPlatform
 */
  getExportPlatform(): EditorExportPlatform;
/**
 * Returns currently used export preset.
 * @returns EditorExportPreset
 */
  getExportPreset(): EditorExportPreset;
/**
 * Return the name identifier of this plugin (for future identification by the exporter). The plugins are sorted by name before exporting.
 * Implementing this method is required.
 * @returns string
 */
  private getName(): string;
/**
 * Returns the current value of an export option supplied by `_get_export_options`.
 * @param name StringName
 * @returns Variant
 */
  getOption(name: StringName): Variant;
/**
 * Return `true`, if the result of `_get_export_options` has changed and the export options of preset corresponding to `platform` should be updated.
 * @param platform EditorExportPlatform
 * @returns boolean
 */
  private shouldUpdateExportOptions(platform: EditorExportPlatform): boolean;
/**
 * To be called inside `_export_file`. Skips the current file, so it's not included in the export.
 */
  skip(): void;
/**
 * Return `true` if the plugin supports the given `platform`.
 * @param platform EditorExportPlatform
 * @returns boolean
 */
  private supportsPlatform(platform: EditorExportPlatform): boolean;
}
