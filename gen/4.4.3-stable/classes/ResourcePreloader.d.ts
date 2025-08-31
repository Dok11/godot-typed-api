import type { GodotArray, GodotDictionary, Node, PackedStringArray, Resource, StringName, float, int } from "../index.d.ts";
/**
 * A node used to preload sub-resources inside a scene.
 * 
 * This node is used to preload sub-resources inside a scene, so when the scene is loaded, all the resources are ready to use and can be retrieved from the preloader. You can add the resources using the ResourcePreloader tab when the node is selected.
 * GDScript has a simplified `@GDScript.preload` built-in method which can be used in most situations, leaving the use of `ResourcePreloader` for more advanced scenarios.
 */
export class ResourcePreloader extends Node {
/**
 * Adds a resource to the preloader with the given `name`. If a resource with the given `name` already exists, the new resource will be renamed to "`name` N" where N is an incrementing number starting from 2.
 * @param name StringName
 * @param resource Resource
 */
  addResource(name: StringName, resource: Resource): void;
/**
 * Returns the resource associated to `name`.
 * @param name StringName
 * @returns Resource
 */
  getResource(name: StringName): Resource;
/**
 * Returns the list of resources inside the preloader.
 * @returns PackedStringArray
 */
  getResourceList(): PackedStringArray;
/**
 * Returns `true` if the preloader contains a resource associated to `name`.
 * @param name StringName
 * @returns boolean
 */
  hasResource(name: StringName): boolean;
/**
 * Removes the resource associated to `name` from the preloader.
 * @param name StringName
 */
  removeResource(name: StringName): void;
/**
 * Renames a resource inside the preloader from `name` to `newname`.
 * @param name StringName
 * @param newname StringName
 */
  renameResource(name: StringName, newname: StringName): void;
}
