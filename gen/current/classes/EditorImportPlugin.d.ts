import type { Dictionary, GodotArray, GodotDictionary, PackedStringArray, ResourceImporter, String, StringName, Variant, float, int } from "../index.d.ts";
/**
 * Registers a custom resource importer in the editor. Use the class to parse any file and import it as a new resource type.
 * 
 * `EditorImportPlugin`s provide a way to extend the editor's resource import functionality. Use them to import resources from custom files or to provide alternatives to the editor's existing importers.
 * EditorImportPlugins work by associating with specific file extensions and a resource type. See `_get_recognized_extensions` and `_get_resource_type`. They may optionally specify some import presets that affect the import process. EditorImportPlugins are responsible for creating the resources and saving them in the `.godot/imported` directory (see `ProjectSettings.application/config/use_hidden_project_data_directory`).
 * Below is an example EditorImportPlugin that imports a `Mesh` from a file with the extension ".special" or ".spec":
 * 
 * 		```gdscript
 * 
 * 		@tool
 * 		extends EditorImportPlugin
 * 
 * 		func _get_importer_name():
 * 		    return "my.special.plugin"
 * 
 * 		func _get_visible_name():
 * 		    return "Special Mesh"
 * 
 * 		func _get_recognized_extensions():
 * 		    return ["special", "spec"]
 * 
 * 		func _get_save_extension():
 * 		    return "mesh"
 * 
 * 		func _get_resource_type():
 * 		    return "Mesh"
 * 
 * 		func _get_preset_count():
 * 		    return 1
 * 
 * 		func _get_preset_name(preset_index):
 * 		    return "Default"
 * 
 * 		func _get_import_options(path, preset_index):
 * 		    return [{"name": "my_option", "default_value": false}]
 * 
 * 		func _import(source_file, save_path, options, platform_variants, gen_files):
 * 		    var file = FileAccess.open(source_file, FileAccess.READ)
 * 		    if file == null:
 * 		        return FAILED
 * 		    var mesh = ArrayMesh.new()
 * 		    # Fill the Mesh with data read in "file", left as an exercise to the reader.
 * 
 * 		    var filename = save_path + "." + _get_save_extension()
 * 		    return ResourceSaver.save(mesh, filename)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		using Godot;
 * 
 * 		public partial class MySpecialPlugin : EditorImportPlugin
 * 		{
 * 		    public override string _GetImporterName()
 * 		    {
 * 		        return "my.special.plugin";
 * 		    }
 * 
 * 		    public override string _GetVisibleName()
 * 		    {
 * 		        return "Special Mesh";
 * 		    }
 * 
 * 		    public override string[] _GetRecognizedExtensions()
 * 		    {
 * 		        return ["special", "spec"];
 * 		    }
 * 
 * 		    public override string _GetSaveExtension()
 * 		    {
 * 		        return "mesh";
 * 		    }
 * 
 * 		    public override string _GetResourceType()
 * 		    {
 * 		        return "Mesh";
 * 		    }
 * 
 * 		    public override int _GetPresetCount()
 * 		    {
 * 		        return 1;
 * 		    }
 * 
 * 		    public override string _GetPresetName(int presetIndex)
 * 		    {
 * 		        return "Default";
 * 		    }
 * 
 * 		    public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetImportOptions(string path, int presetIndex)
 * 		    {
 * 		        return
 * 		        [
 * 		            new Godot.Collections.Dictionary
 * 		            {
 * 		                { "name", "myOption" },
 * 		                { "default_value", false },
 * 		            },
 * 		        ];
 * 		    }
 * 
 * 		    public override Error _Import(string sourceFile, string savePath, Godot.Collections.Dictionary options, Godot.Collections.Array<string> platformVariants, Godot.Collections.Array<string> genFiles)
 * 		    {
 * 		        using var file = FileAccess.Open(sourceFile, FileAccess.ModeFlags.Read);
 * 		        if (file.GetError() != Error.Ok)
 * 		        {
 * 		            return Error.Failed;
 * 		        }
 * 
 * 		        var mesh = new ArrayMesh();
 * 		        // Fill the Mesh with data read in "file", left as an exercise to the reader.
 * 		        string filename = $"{savePath}.{_GetSaveExtension()}";
 * 		        return ResourceSaver.Save(mesh, filename);
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 * To use `EditorImportPlugin`, register it using the `EditorPlugin.add_import_plugin` method first.
 */
export class EditorImportPlugin extends ResourceImporter {
/**
 * This function can only be called during the `_import` callback and it allows manually importing resources from it. This is useful when the imported file generates external resources that require importing (as example, images). Custom parameters for the ".import" file can be passed via the `custom_options`. Additionally, in cases where multiple importers can handle a file, the `custom_importer` can be specified to force a specific one. This function performs a resource import and returns immediately with a success or error code. `generator_parameters` defines optional extra metadata which will be stored as [code skip-lint]generator_parameters[/code] in the `remap` section of the `.import` file, for example to store a md5 hash of the source data.
 * @param path string
 * @param customOptions GodotDictionary<any> (optional, default: {})
 * @param customImporter string (optional, default: "")
 * @param generatorParameters Variant (optional, default: null)
 * @returns int
 */
  appendImportExternalResource(path: string, customOptions?: GodotDictionary<any>, customImporter?: string, generatorParameters?: Variant): int;
/**
 * Tells whether this importer can be run in parallel on threads, or, on the contrary, it's only safe for the editor to call it from the main thread, for one file at a time.
 * If this method is not overridden, it will return `false` by default.
 * If this importer's implementation is thread-safe and can be run in parallel, override this with `true` to optimize for concurrency.
 * @returns boolean
 */
  private canImportThreaded(): boolean;
/**
 * Gets the format version of this importer. Increment this version when making incompatible changes to the format of the imported resources.
 * @returns int
 */
  private getFormatVersion(): int;
/**
 * Gets the unique name of the importer.
 * @returns string
 */
  private getImporterName(): string;
/**
 * Gets the options and default values for the preset at this index. Returns an Array of Dictionaries with the following keys: `name`, `default_value`, `property_hint` (optional), `hint_string` (optional), `usage` (optional).
 * @param path string
 * @param presetIndex int
 * @returns Dictionary[]
 */
  private getImportOptions(path: string, presetIndex: int): Dictionary[];
/**
 * Gets the order of this importer to be run when importing resources. Importers with *lower* import orders will be called first, and higher values will be called later. Use this to ensure the importer runs after the dependencies are already imported. The default import order is `0` unless overridden by a specific importer. See `ResourceImporter.ImportOrder` for some predefined values.
 * @returns int
 */
  private getImportOrder(): int;
/**
 * This method can be overridden to hide specific import options if conditions are met. This is mainly useful for hiding options that depend on others if one of them is disabled.
 * 
 * 				```gdscript
 * 
 * 				func _get_option_visibility(option, options):
 * 				    # Only show the lossy quality setting if the compression mode is set to "Lossy".
 * 				    if option == "compress/lossy_quality" and options.has("compress/mode"):
 * 				        return int(options["compress/mode"]) == COMPRESS_LOSSY # This is a constant that you set
 * 
 * 				    return true
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public void _GetOptionVisibility(string option, Godot.Collections.Dictionary options)
 * 				{
 * 				    // Only show the lossy quality setting if the compression mode is set to "Lossy".
 * 				    if (option == "compress/lossy_quality" && options.ContainsKey("compress/mode"))
 * 				    {
 * 				        return (int)options["compress/mode"] == CompressLossy; // This is a constant you set
 * 				    }
 * 
 * 				    return true;
 * 				}
 * 				
 * 
 * ```
 * 
 * Returns `true` to make all options always visible.
 * @param path string
 * @param optionName StringName
 * @param options GodotDictionary<any>
 * @returns boolean
 */
  private getOptionVisibility(path: string, optionName: StringName, options: GodotDictionary<any>): boolean;
/**
 * Gets the number of initial presets defined by the plugin. Use `_get_import_options` to get the default options for the preset and `_get_preset_name` to get the name of the preset.
 * @returns int
 */
  private getPresetCount(): int;
/**
 * Gets the name of the options preset at this index.
 * @param presetIndex int
 * @returns string
 */
  private getPresetName(presetIndex: int): string;
/**
 * Gets the priority of this plugin for the recognized extension. Higher priority plugins will be preferred. The default priority is `1.0`.
 * @returns float
 */
  private getPriority(): float;
/**
 * Gets the list of file extensions to associate with this loader (case-insensitive). e.g. `["obj"]`.
 * @returns PackedStringArray
 */
  private getRecognizedExtensions(): PackedStringArray;
/**
 * Gets the Godot resource type associated with this loader. e.g. `"Mesh"` or `"Animation"`.
 * @returns string
 */
  private getResourceType(): string;
/**
 * Gets the extension used to save this resource in the `.godot/imported` directory (see `ProjectSettings.application/config/use_hidden_project_data_directory`).
 * @returns string
 */
  private getSaveExtension(): string;
/**
 * Gets the name to display in the import window. You should choose this name as a continuation to "Import as", e.g. "Import as Special Mesh".
 * @returns string
 */
  private getVisibleName(): string;
/**
 * Imports `source_file` into `save_path` with the import `options` specified. The `platform_variants` and `gen_files` arrays will be modified by this function.
 * This method must be overridden to do the actual importing work. See this class' description for an example of overriding this method.
 * @param sourceFile string
 * @param savePath string
 * @param options GodotDictionary<any>
 * @param platformVariants String[]
 * @param genFiles String[]
 * @returns int
 */
  private import_(sourceFile: string, savePath: string, options: GodotDictionary<any>, platformVariants: String[], genFiles: String[]): int;
}
