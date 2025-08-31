import type { ArrayMesh, GodotArray, GodotDictionary, Material, PackedInt32Array, Resource, Vector2i, float, int } from "../index.d.ts";
/**
 * A `Resource` that contains vertex array-based geometry during the import process.
 * 
 * ImporterMesh is a type of `Resource` analogous to `ArrayMesh`. It contains vertex array-based geometry, divided in *surfaces*. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials.
 * Unlike its runtime counterpart, `ImporterMesh` contains mesh data before various import steps, such as lod and shadow mesh generation, have taken place. Modify surface data by calling `clear`, followed by `add_surface` for each surface.
 */
export class ImporterMesh extends Resource {
/**
 * Adds name for a blend shape that will be added with `add_surface`. Must be called before surface is added.
 * @param name string
 */
  addBlendShape(name: string): void;
/**
 * Creates a new surface. `Mesh.get_surface_count` will become the `surf_idx` for this new surface.
 * Surfaces are created to be rendered using a `primitive`, which may be any of the values defined in `Mesh.PrimitiveType`.
 * The `arrays` argument is an array of arrays. Each of the `Mesh.ARRAY_MAX` elements contains an array with some of the mesh data for this surface as described by the corresponding member of `Mesh.ArrayType` or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for `Mesh.ARRAY_INDEX` if it is used.
 * The `blend_shapes` argument is an array of vertex data for each blend shape. Each element is an array of the same structure as `arrays`, but `Mesh.ARRAY_VERTEX`, `Mesh.ARRAY_NORMAL`, and `Mesh.ARRAY_TANGENT` are set if and only if they are set in `arrays` and all other entries are `null`.
 * The `lods` argument is a dictionary with [float] keys and `PackedInt32Array` values. Each entry in the dictionary represents an LOD level of the surface, where the value is the `Mesh.ARRAY_INDEX` array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of an LOD also increases the distance that the objects has to be from the camera before the LOD is used.
 * The `flags` argument is the bitwise OR of, as required: One value of `Mesh.ArrayCustomFormat` left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, `Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE`, `Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS`, or `Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY`.
 * 
 * **Note:** When using indices, it is recommended to only use points, lines, or triangles.
 * @param primitive int
 * @param arrays GodotArray<any>
 * @param blendShapes GodotArray<any> (optional, default: [])
 * @param lods GodotDictionary<any> (optional, default: {})
 * @param material Material (optional, default: null)
 * @param name string (optional, default: "")
 * @param flags int (optional, default: 0)
 */
  addSurface(primitive: int, arrays: GodotArray<any>, blendShapes?: GodotArray<any>, lods?: GodotDictionary<any>, material?: Material, name?: string, flags?: int): void;
/**
 * Removes all surfaces and blend shapes from this `ImporterMesh`.
 */
  clear(): void;
/**
 * Generates all lods for this ImporterMesh.
 * `normal_merge_angle` is in degrees and used in the same way as the importer settings in `lods`.
 * `normal_split_angle` is not used and only remains for compatibility with older versions of the API.
 * The number of generated lods can be accessed using `get_surface_lod_count`, and each LOD is available in `get_surface_lod_size` and `get_surface_lod_indices`.
 * `bone_transform_array` is an `Array` which can be either empty or contain `Transform3D`s which, for each of the mesh's bone IDs, will apply mesh skinning when generating the LOD mesh variations. This is usually used to account for discrepancies in scale between the mesh itself and its skinning data.
 * @param normalMergeAngle float
 * @param normalSplitAngle float
 * @param boneTransformArray GodotArray<any>
 */
  generateLods(normalMergeAngle: float, normalSplitAngle: float, boneTransformArray: GodotArray<any>): void;
/**
 * Returns the number of blend shapes that the mesh holds.
 * @returns int
 */
  getBlendShapeCount(): int;
/**
 * Returns the blend shape mode for this Mesh.
 * @returns int
 */
  getBlendShapeMode(): int;
/**
 * Returns the name of the blend shape at this index.
 * @param blendShapeIdx int
 * @returns string
 */
  getBlendShapeName(blendShapeIdx: int): string;
/**
 * Returns the size hint of this mesh for lightmap-unwrapping in UV-space.
 * @returns Vector2i
 */
  getLightmapSizeHint(): Vector2i;
/**
 * Returns the mesh data represented by this `ImporterMesh` as a usable `ArrayMesh`.
 * This method caches the returned mesh, and subsequent calls will return the cached data until `clear` is called.
 * If not yet cached and `base_mesh` is provided, `base_mesh` will be used and mutated.
 * @param baseMesh ArrayMesh (optional, default: null)
 * @returns ArrayMesh
 */
  getMesh(baseMesh?: ArrayMesh): ArrayMesh;
/**
 * Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface. See `add_surface`.
 * @param surfaceIdx int
 * @returns GodotArray<any>
 */
  getSurfaceArrays(surfaceIdx: int): GodotArray<any>;
/**
 * Returns a single set of blend shape arrays for the requested blend shape index for a surface.
 * @param surfaceIdx int
 * @param blendShapeIdx int
 * @returns GodotArray<any>
 */
  getSurfaceBlendShapeArrays(surfaceIdx: int, blendShapeIdx: int): GodotArray<any>;
/**
 * Returns the number of surfaces that the mesh holds.
 * @returns int
 */
  getSurfaceCount(): int;
/**
 * Returns the format of the surface that the mesh holds.
 * @param surfaceIdx int
 * @returns int
 */
  getSurfaceFormat(surfaceIdx: int): int;
/**
 * Returns the number of lods that the mesh holds on a given surface.
 * @param surfaceIdx int
 * @returns int
 */
  getSurfaceLodCount(surfaceIdx: int): int;
/**
 * Returns the index buffer of a lod for a surface.
 * @param surfaceIdx int
 * @param lodIdx int
 * @returns PackedInt32Array
 */
  getSurfaceLodIndices(surfaceIdx: int, lodIdx: int): PackedInt32Array;
/**
 * Returns the screen ratio which activates a lod for a surface.
 * @param surfaceIdx int
 * @param lodIdx int
 * @returns float
 */
  getSurfaceLodSize(surfaceIdx: int, lodIdx: int): float;
/**
 * Returns a `Material` in a given surface. Surface is rendered using this material.
 * @param surfaceIdx int
 * @returns Material
 */
  getSurfaceMaterial(surfaceIdx: int): Material;
/**
 * Gets the name assigned to this surface.
 * @param surfaceIdx int
 * @returns string
 */
  getSurfaceName(surfaceIdx: int): string;
/**
 * Returns the primitive type of the requested surface (see `add_surface`).
 * @param surfaceIdx int
 * @returns int
 */
  getSurfacePrimitiveType(surfaceIdx: int): int;
/**
 * Sets the blend shape mode to one of `Mesh.BlendShapeMode`.
 * @param mode int
 */
  setBlendShapeMode(mode: int): void;
/**
 * Sets the size hint of this mesh for lightmap-unwrapping in UV-space.
 * @param size Vector2i
 */
  setLightmapSizeHint(size: Vector2i): void;
/**
 * Sets a `Material` for a given surface. Surface will be rendered using this material.
 * @param surfaceIdx int
 * @param material Material
 */
  setSurfaceMaterial(surfaceIdx: int, material: Material): void;
/**
 * Sets a name for a given surface.
 * @param surfaceIdx int
 * @param name string
 */
  setSurfaceName(surfaceIdx: int, name: string): void;
}
