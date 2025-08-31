import type { GodotArray, GodotDictionary, Mesh, NavigationMesh, PackedInt32Array, Resource, Texture2D, Transform3D, float, int } from "../index.d.ts";
/**
 * Library of meshes.
 * 
 * A library of meshes. Contains a list of `Mesh` resources, each with a name and ID. Each item can also include collision and navigation shapes. This resource is used in `GridMap`.
 */
export class MeshLibrary extends Resource {
/**
 * Clears the library.
 */
  clear(): void;
/**
 * Creates a new item in the library with the given ID.
 * You can get an unused ID from `get_last_unused_item_id`.
 * @param id int
 */
  createItem(id: int): void;
/**
 * Returns the first item with the given name, or `-1` if no item is found.
 * @param name string
 * @returns int
 */
  findItemByName(name: string): int;
/**
 * Returns the list of item IDs in use.
 * @returns PackedInt32Array
 */
  getItemList(): PackedInt32Array;
/**
 * Returns the item's mesh.
 * @param id int
 * @returns Mesh
 */
  getItemMesh(id: int): Mesh;
/**
 * Returns the item's shadow casting mode. See `RenderingServer.ShadowCastingSetting` for possible values.
 * @param id int
 * @returns int
 */
  getItemMeshCastShadow(id: int): int;
/**
 * Returns the transform applied to the item's mesh.
 * @param id int
 * @returns Transform3D
 */
  getItemMeshTransform(id: int): Transform3D;
/**
 * Returns the item's name.
 * @param id int
 * @returns string
 */
  getItemName(id: int): string;
/**
 * Returns the item's navigation layers bitmask.
 * @param id int
 * @returns int
 */
  getItemNavigationLayers(id: int): int;
/**
 * Returns the item's navigation mesh.
 * @param id int
 * @returns NavigationMesh
 */
  getItemNavigationMesh(id: int): NavigationMesh;
/**
 * Returns the transform applied to the item's navigation mesh.
 * @param id int
 * @returns Transform3D
 */
  getItemNavigationMeshTransform(id: int): Transform3D;
/**
 * When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using `set_item_preview`. Returns an empty `Texture2D` if no preview was manually set in a running project.
 * @param id int
 * @returns Texture2D
 */
  getItemPreview(id: int): Texture2D;
/**
 * Returns an item's collision shapes.
 * The array consists of each `Shape3D` followed by its `Transform3D`.
 * @param id int
 * @returns GodotArray<any>
 */
  getItemShapes(id: int): GodotArray<any>;
/**
 * Gets an unused ID for a new item.
 * @returns int
 */
  getLastUnusedItemId(): int;
/**
 * Removes the item.
 * @param id int
 */
  removeItem(id: int): void;
/**
 * Sets the item's mesh.
 * @param id int
 * @param mesh Mesh
 */
  setItemMesh(id: int, mesh: Mesh): void;
/**
 * Sets the item's shadow casting mode. See `RenderingServer.ShadowCastingSetting` for possible values.
 * @param id int
 * @param shadowCastingSetting int
 */
  setItemMeshCastShadow(id: int, shadowCastingSetting: int): void;
/**
 * Sets the transform to apply to the item's mesh.
 * @param id int
 * @param meshTransform Transform3D
 */
  setItemMeshTransform(id: int, meshTransform: Transform3D): void;
/**
 * Sets the item's name.
 * This name is shown in the editor. It can also be used to look up the item later using `find_item_by_name`.
 * @param id int
 * @param name string
 */
  setItemName(id: int, name: string): void;
/**
 * Sets the item's navigation layers bitmask.
 * @param id int
 * @param navigationLayers int
 */
  setItemNavigationLayers(id: int, navigationLayers: int): void;
/**
 * Sets the item's navigation mesh.
 * @param id int
 * @param navigationMesh NavigationMesh
 */
  setItemNavigationMesh(id: int, navigationMesh: NavigationMesh): void;
/**
 * Sets the transform to apply to the item's navigation mesh.
 * @param id int
 * @param navigationMesh Transform3D
 */
  setItemNavigationMeshTransform(id: int, navigationMesh: Transform3D): void;
/**
 * Sets a texture to use as the item's preview icon in the editor.
 * @param id int
 * @param texture Texture2D
 */
  setItemPreview(id: int, texture: Texture2D): void;
/**
 * Sets an item's collision shapes.
 * The array should consist of `Shape3D` objects, each followed by a `Transform3D` that will be applied to it. For shapes that should not have a transform, use `Transform3D.IDENTITY`.
 * @param id int
 * @param shapes GodotArray<any>
 */
  setItemShapes(id: int, shapes: GodotArray<any>): void;
}
