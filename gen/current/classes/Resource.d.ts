import type { GodotArray, GodotDictionary, Node, RID, RefCounted, Signal, float, int } from "../index.d.ts";
/**
 * Base class for serializable objects.
 * 
 * Resource is the base class for all Godot-specific resource types, serving primarily as data containers. Since they inherit from `RefCounted`, resources are reference-counted and freed when no longer in use. They can also be nested within other resources, and saved on disk. `PackedScene`, one of the most common `Object`s in a Godot project, is also a resource, uniquely capable of storing and instantiating the `Node`s it contains as many times as desired.
 * In GDScript, resources can loaded from disk by their `resource_path` using `@GDScript.load` or `@GDScript.preload`.
 * The engine keeps a global cache of all loaded resources, referenced by paths (see `ResourceLoader.has_cached`). A resource will be cached when loaded for the first time and removed from cache once all references are released. When a resource is cached, subsequent loads using its path will return the cached reference.
 * 
 * **Note:** In C#, resources will not be freed instantly after they are no longer in use. Instead, garbage collection will run periodically and will free resources that are no longer in use. This means that unused resources will remain in memory for a while before being removed.
 */
export class Resource extends RefCounted {
/**
 * If `true`, the resource is duplicated for each instance of all scenes using it. At run-time, the resource can be modified in one scene without affecting other instances (see `PackedScene.instantiate`).
 * 
 * **Note:** Changing this property at run-time has no effect on already created duplicate resources.
 */
  resourceLocalToScene: boolean;
/**
 * An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.
 * 
 * **Note:** Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.
 */
  resourceName: string;
/**
 * The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the `PackedScene`'s filepath, followed by a unique identifier.
 * 
 * **Note:** Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use `take_over_path`.
 */
  resourcePath: string;
/**
 * An unique identifier relative to the this resource's scene. If left empty, the ID is automatically generated when this resource is saved inside a `PackedScene`. If the resource is not inside a scene, this property is empty by default.
 * 
 * **Note:** When the `PackedScene` is saved, if multiple resources in the same scene use the same ID, only the earliest resource in the scene hierarchy keeps the original ID. The other resources are assigned new IDs from `generate_scene_unique_id`.
 * 
 * **Note:** Setting this property does not emit the `changed` signal.
 * 
 * **Warning:** When setting, the ID must only consist of letters, numbers, and underscores. Otherwise, it will fail and default to a randomly generated ID.
 */
  resourceSceneUniqueId: string;
/**
 * Duplicates this resource, returning a new resource with its `export`ed or `PROPERTY_USAGE_STORAGE` properties copied from the original.
 * If `subresources` is `false`, a shallow copy is returned; nested resources within subresources are not duplicated and are shared with the original resource (with one exception; see below). If `subresources` is `true`, a deep copy is returned; nested subresources will be duplicated and are not shared (with two exceptions; see below).
 * `subresources` is usually respected, with the following exceptions:
 * - Subresource properties with the `PROPERTY_USAGE_ALWAYS_DUPLICATE` flag are always duplicated.
 * - Subresource properties with the `PROPERTY_USAGE_NEVER_DUPLICATE` flag are never duplicated.
 * - Subresources inside `Array` and `Dictionary` properties are never duplicated.
 * 
 * **Note:** For custom resources, this method will fail if `Object._init` has been defined with required parameters.
 * @param subresources boolean (optional, default: false)
 * @returns Resource
 */
  duplicate(subresources?: boolean): Resource;
/**
 * Emits the `changed` signal. This method is called automatically for some built-in resources.
 * 
 * **Note:** For custom resources, it's recommended to call this method whenever a meaningful change occurs, such as a modified property. This ensures that custom `Object`s depending on the resource are properly updated.
 * 
 * 				```gdscript
 * 
 * 				var damage:
 * 				    set(new_value):
 * 				        if damage != new_value:
 * 				            damage = new_value
 * 				            emit_changed()
 * 				
 * 
 * ```
 */
  emitChanged(): void;
/**
 * Generates a unique identifier for a resource to be contained inside a `PackedScene`, based on the current date, time, and a random value. The returned string is only composed of letters (`a` to `y`) and numbers (`0` to `8`). See also `resource_scene_unique_id`.
 * @returns string
 */
  generateSceneUniqueId(): string;
/**
 * Returns the unique identifier for the resource with the given `path` from the resource cache. If the resource is not loaded and cached, an empty string is returned.
 * 
 * **Note:** This method is only implemented when running in an editor context. At runtime, it returns an empty string.
 * @param path string
 * @returns string
 */
  getIdForPath(path: string): string;
/**
 * If `resource_local_to_scene` is set to `true` and the resource has been loaded from a `PackedScene` instantiation, returns the root `Node` of the scene where this resource is used. Otherwise, returns `null`.
 * @returns Node
 */
  getLocalScene(): Node;
/**
 * Returns the `RID` of this resource (or an empty RID). Many resources (such as `Texture2D`, `Mesh`, and so on) are high-level abstractions of resources stored in a specialized server (`DisplayServer`, `RenderingServer`, etc.), so this function will return the original `RID`.
 * @returns RID
 */
  getRid(): RID;
/**
 * Override this method to return a custom `RID` when `get_rid` is called.
 * @returns RID
 */
  private getRid(): RID;
/**
 * Returns `true` if the resource is built-in (from the engine) or `false` if it is user-defined.
 * @returns boolean
 */
  isBuiltIn(): boolean;
/**
 * For resources that use a variable number of properties, either via `Object._validate_property` or `Object._get_property_list`, override `_reset_state` to correctly clear the resource's state.
 */
  resetState(): void;
/**
 * For resources that use a variable number of properties, either via `Object._validate_property` or `Object._get_property_list`, this method should be implemented to correctly clear the resource's state.
 */
  private resetState(): void;
/**
 * Sets the unique identifier to `id` for the resource with the given `path` in the resource cache. If the unique identifier is empty, the cache entry using `path` is removed if it exists.
 * 
 * **Note:** This method is only implemented when running in an editor context.
 * @param path string
 * @param id string
 */
  setIdForPath(path: string, id: string): void;
/**
 * Sets the resource's path to `path` without involving the resource cache.
 * @param path string
 */
  setPathCache(path: string): void;
/**
 * Sets the resource's path to `path` without involving the resource cache.
 * @param path string
 */
  private setPathCache(path: string): void;
/**
 * Calls `_setup_local_to_scene`. If `resource_local_to_scene` is set to `true`, this method is automatically called from `PackedScene.instantiate` by the newly duplicated resource within the scene instance.
 * @deprecated This method should only be called internally.
 */
  setupLocalToScene(): void;
/**
 * Override this method to customize the newly duplicated resource created from `PackedScene.instantiate`, if the original's `resource_local_to_scene` is set to `true`.
 * 
 * **Example:** Set a random `damage` value to every local resource from an instantiated scene:
 * 
 * 				```gdscript
 * 
 * 				extends Resource
 * 
 * 				var damage = 0
 * 
 * 				func _setup_local_to_scene():
 * 				    damage = randi_range(10, 40)
 * 				
 * 
 * ```
 */
  private setupLocalToScene(): void;
/**
 * Sets the `resource_path` to `path`, potentially overriding an existing cache entry for this path. Further attempts to load an overridden resource by path will instead return this resource.
 * @param path string
 */
  takeOverPath(path: string): void;
/**
 * Emitted when the resource changes, usually when one of its properties is modified. See also `emit_changed`.
 * 
 * **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.
 */
  changed: Signal<[]>;
/**
 * Emitted by a newly duplicated resource with `resource_local_to_scene` set to `true`.
 * @deprecated This signal is only emitted when the resource is created. Override `_setup_local_to_scene` instead.
 */
  setupLocalToSceneRequested: Signal<[]>;
}
