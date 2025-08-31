import type { EditorResourcePreviewGenerator, GodotArray, GodotDictionary, Node, Object, Resource, Signal, StringName, Variant, float, int } from "../index.d.ts";
/**
 * A node used to generate previews of resources or files.
 * 
 * This node is used to generate previews for resources or files.
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using `EditorInterface.get_resource_previewer`.
 */
export class EditorResourcePreview extends Node {
/**
 * Create an own, custom preview generator.
 * @param generator EditorResourcePreviewGenerator
 */
  addPreviewGenerator(generator: EditorResourcePreviewGenerator): void;
/**
 * Check if the resource changed, if so, it will be invalidated and the corresponding signal emitted.
 * @param path string
 */
  checkForInvalidation(path: string): void;
/**
 * Queue the `resource` being edited for preview. Once the preview is ready, the `receiver`'s `receiver_func` will be called. The `receiver_func` must take the following four arguments: `String` path, `Texture2D` preview, `Texture2D` thumbnail_preview, `Variant` userdata. `userdata` can be anything, and will be returned when `receiver_func` is called.
 * 
 * **Note:** If it was not possible to create the preview the `receiver_func` will still be called, but the preview will be `null`.
 * @param resource Resource
 * @param receiver Object
 * @param receiverFunc StringName
 * @param userdata Variant
 */
  queueEditedResourcePreview(resource: Resource, receiver: Object, receiverFunc: StringName, userdata: Variant): void;
/**
 * Queue a resource file located at `path` for preview. Once the preview is ready, the `receiver`'s `receiver_func` will be called. The `receiver_func` must take the following four arguments: `String` path, `Texture2D` preview, `Texture2D` thumbnail_preview, `Variant` userdata. `userdata` can be anything, and will be returned when `receiver_func` is called.
 * 
 * **Note:** If it was not possible to create the preview the `receiver_func` will still be called, but the preview will be `null`.
 * @param path string
 * @param receiver Object
 * @param receiverFunc StringName
 * @param userdata Variant
 */
  queueResourcePreview(path: string, receiver: Object, receiverFunc: StringName, userdata: Variant): void;
/**
 * Removes a custom preview generator.
 * @param generator EditorResourcePreviewGenerator
 */
  removePreviewGenerator(generator: EditorResourcePreviewGenerator): void;
/**
 * Emitted if a preview was invalidated (changed). `path` corresponds to the path of the preview.
 */
  previewInvalidated: Signal<[path: string]>;
}
