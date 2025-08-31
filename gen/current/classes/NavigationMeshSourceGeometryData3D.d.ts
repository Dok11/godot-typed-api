import type { AABB, GodotArray, GodotDictionary, Mesh, PackedFloat32Array, PackedInt32Array, PackedVector3Array, Resource, Transform3D, float, int } from "../index.d.ts";
/**
 * Container for parsed source geometry data used in navigation mesh baking.
 * 
 * Container for parsed source geometry data used in navigation mesh baking.
 */
export class NavigationMeshSourceGeometryData3D extends Resource {
/**
 * Adds an array of vertex positions to the geometry data for navigation mesh baking to form triangulated faces. For each face the array must have three vertex positions in clockwise winding order. Since `NavigationMesh` resources have no transform, all vertex positions need to be offset by the node's transform using `xform`.
 * @param faces PackedVector3Array
 * @param xform Transform3D
 */
  addFaces(faces: PackedVector3Array, xform: Transform3D): void;
/**
 * Adds the geometry data of a `Mesh` resource to the navigation mesh baking data. The mesh must have valid triangulated mesh data to be considered. Since `NavigationMesh` resources have no transform, all vertex positions need to be offset by the node's transform using `xform`.
 * @param mesh Mesh
 * @param xform Transform3D
 */
  addMesh(mesh: Mesh, xform: Transform3D): void;
/**
 * Adds an `Array` the size of `Mesh.ARRAY_MAX` and with vertices at index `Mesh.ARRAY_VERTEX` and indices at index `Mesh.ARRAY_INDEX` to the navigation mesh baking data. The array must have valid triangulated mesh data to be considered. Since `NavigationMesh` resources have no transform, all vertex positions need to be offset by the node's transform using `xform`.
 * @param meshArray GodotArray<any>
 * @param xform Transform3D
 */
  addMeshArray(meshArray: GodotArray<any>, xform: Transform3D): void;
/**
 * Adds a projected obstruction shape to the source geometry. The `vertices` are considered projected on a xz-axes plane, placed at the global y-axis `elevation` and extruded by `height`. If `carve` is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process.
 * @param vertices PackedVector3Array
 * @param elevation float
 * @param height float
 * @param carve boolean
 */
  addProjectedObstruction(vertices: PackedVector3Array, elevation: float, height: float, carve: boolean): void;
/**
 * Appends arrays of `vertices` and `indices` at the end of the existing arrays. Adds the existing index as an offset to the appended indices.
 * @param vertices PackedFloat32Array
 * @param indices PackedInt32Array
 */
  appendArrays(vertices: PackedFloat32Array, indices: PackedInt32Array): void;
/**
 * Clears the internal data.
 */
  clear(): void;
/**
 * Clears all projected obstructions.
 */
  clearProjectedObstructions(): void;
/**
 * Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made.
 * @returns AABB
 */
  getBounds(): AABB;
/**
 * Returns the parsed source geometry data indices array.
 * @returns PackedInt32Array
 */
  getIndices(): PackedInt32Array;
/**
 * Returns the projected obstructions as an `Array` of dictionaries. Each `Dictionary` contains the following entries:
 * - `vertices` - A `PackedFloat32Array` that defines the outline points of the projected shape.
 * - `elevation` - A [float] that defines the projected shape placement on the y-axis.
 * - `height` - A [float] that defines how much the projected shape is extruded along the y-axis.
 * - `carve` - A [bool] that defines how the obstacle affects the navigation mesh baking. If `true` the projected shape will not be affected by addition offsets, e.g. agent radius.
 * @returns GodotArray<any>
 */
  getProjectedObstructions(): GodotArray<any>;
/**
 * Returns the parsed source geometry data vertices array.
 * @returns PackedFloat32Array
 */
  getVertices(): PackedFloat32Array;
/**
 * Returns `true` when parsed source geometry data exists.
 * @returns boolean
 */
  hasData(): boolean;
/**
 * Adds the geometry data of another `NavigationMeshSourceGeometryData3D` to the navigation mesh baking data.
 * @param otherGeometry NavigationMeshSourceGeometryData3D
 */
  merge(otherGeometry: NavigationMeshSourceGeometryData3D): void;
/**
 * Sets the parsed source geometry data indices. The indices need to be matched with appropriated vertices.
 * 
 * **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.
 * @param indices PackedInt32Array
 */
  setIndices(indices: PackedInt32Array): void;
/**
 * Sets the projected obstructions with an Array of Dictionaries with the following key value pairs:
 * 
 * 				```gdscript
 * 
 * 				"vertices" : PackedFloat32Array
 * 				"elevation" : float
 * 				"height" : float
 * 				"carve" : bool
 * 				
 * 
 * ```
 * 
 * @param projectedObstructions GodotArray<any>
 */
  setProjectedObstructions(projectedObstructions: GodotArray<any>): void;
/**
 * Sets the parsed source geometry data vertices. The vertices need to be matched with appropriated indices.
 * 
 * **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.
 * @param vertices PackedFloat32Array
 */
  setVertices(vertices: PackedFloat32Array): void;
}
