import type { GodotArray, GodotDictionary, RefCounted, Resource, float, int } from "../index.d.ts";
/**
 * Plugin for adding custom converters from one resource format to another in the editor resource picker context menu; for example, converting a `StandardMaterial3D` to a `ShaderMaterial`.
 * 
 * `EditorResourceConversionPlugin` is invoked when the context menu is brought up for a resource in the editor inspector. Relevant conversion plugins will appear as menu options to convert the given resource to a target type.
 * Below shows an example of a basic plugin that will convert an `ImageTexture` to a `PortableCompressedTexture2D`.
 * 
 * 		```gdscript
 * 
 * 		extends EditorResourceConversionPlugin
 * 
 * 		func _handles(resource: Resource):
 * 		    return resource is ImageTexture
 * 
 * 		func _converts_to():
 * 		    return "PortableCompressedTexture2D"
 * 
 * 		func _convert(itex: Resource):
 * 		    var ptex = PortableCompressedTexture2D.new()
 * 		    ptex.create_from_image(itex.get_image(), PortableCompressedTexture2D.COMPRESSION_MODE_LOSSLESS)
 * 		    return ptex
 * 		
 * 
 * ```
 * 
 * To use an `EditorResourceConversionPlugin`, register it using the `EditorPlugin.add_resource_conversion_plugin` method first.
 */
export class EditorResourceConversionPlugin extends RefCounted {
/**
 * Takes an input `Resource` and converts it to the type given in `_converts_to`. The returned `Resource` is the result of the conversion, and the input `Resource` remains unchanged.
 * @param resource Resource
 * @returns Resource
 */
  private convert(resource: Resource): Resource;
/**
 * Returns the class name of the target type of `Resource` that this plugin converts source resources to.
 * @returns string
 */
  private convertsTo(): string;
/**
 * Called to determine whether a particular `Resource` can be converted to the target resource type by this plugin.
 * @param resource Resource
 * @returns boolean
 */
  private handles(resource: Resource): boolean;
}
