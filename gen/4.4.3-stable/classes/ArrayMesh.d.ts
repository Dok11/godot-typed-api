import type { AABB, GodotArray, GodotDictionary, Mesh, PackedByteArray, StringName, Transform3D, float, int } from "../index.d.ts";
/**
 * `Mesh` type that provides utility for constructing a surface from arrays.
 * 
 * The `ArrayMesh` is used to construct a `Mesh` by specifying the attributes as arrays.
 * The most basic example is the creation of a single triangle:
 * 
 * 		```gdscript
 * 
 * 		var vertices = PackedVector3Array()
 * 		vertices.push_back(Vector3(0, 1, 0))
 * 		vertices.push_back(Vector3(1, 0, 0))
 * 		vertices.push_back(Vector3(0, 0, 1))
 * 
 * 		# Initialize the ArrayMesh.
 * 		var arr_mesh = ArrayMesh.new()
 * 		var arrays = []
 * 		arrays.resize(Mesh.ARRAY_MAX)
 * 		arrays`Mesh.ARRAY_VERTEX` = vertices
 * 
 * 		# Create the Mesh.
 * 		arr_mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, arrays)
 * 		var m = MeshInstance3D.new()
 * 		m.mesh = arr_mesh
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		Vector3[] vertices =
 * 		[
 * 		    new Vector3(0, 1, 0),
 * 		    new Vector3(1, 0, 0),
 * 		    new Vector3(0, 0, 1),
 * 		];
 * 
 * 		// Initialize the ArrayMesh.
 * 		var arrMesh = new ArrayMesh();
 * 		Godot.Collections.Array arrays = [];
 * 		arrays.Resize((int)Mesh.ArrayType.Max);
 * 		arrays[(int)Mesh.ArrayType.Vertex] = vertices;
 * 
 * 		// Create the Mesh.
 * 		arrMesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, arrays);
 * 		var m = new MeshInstance3D();
 * 		m.Mesh = arrMesh;
 * 		
 * 
 * ```
 * 
 * The `MeshInstance3D` is ready to be added to the `SceneTree` to be shown.
 * See also `ImmediateMesh`, `MeshDataTool` and `SurfaceTool` for procedural geometry generation.
 * 
 * **Note:** Godot uses clockwise winding order (https://learnopengl.com/Advanced-OpenGL/Face-culling) for front faces of triangle primitive modes.
 */
export class ArrayMesh extends Mesh {
/**
 * Sets the blend shape mode to one of `Mesh.BlendShapeMode`.
 */
  blendShapeMode: int;
/**
 * Overrides the `AABB` with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices.
 */
  customAabb: AABB;
/**
 * An optional mesh which can be used for rendering shadows and the depth prepass. Can be used to increase performance by supplying a mesh with fused vertices and only vertex position data (without normals, UVs, colors, etc.).
 * 
 * **Note:** This mesh must have exactly the same vertex positions as the source mesh (including the source mesh's LODs, if present). If vertex positions differ, then the mesh will not draw correctly.
 */
  shadowMesh: ArrayMesh;
/**
 * Adds name for a blend shape that will be added with `add_surface_from_arrays`. Must be called before surface is added.
 * @param name StringName
 */
  addBlendShape(name: StringName): void;
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
 * @param flags int (optional, default: 0)
 */
  addSurfaceFromArrays(primitive: int, arrays: GodotArray<any>, blendShapes?: GodotArray<any>, lods?: GodotDictionary<any>, flags?: int): void;
/**
 * Removes all blend shapes from this `ArrayMesh`.
 */
  clearBlendShapes(): void;
/**
 * Removes all surfaces from this `ArrayMesh`.
 */
  clearSurfaces(): void;
/**
 * Returns the number of blend shapes that the `ArrayMesh` holds.
 * @returns int
 */
  getBlendShapeCount(): int;
/**
 * Returns the name of the blend shape at this index.
 * @param index int
 * @returns StringName
 */
  getBlendShapeName(index: int): StringName;
/**
 * Performs a UV unwrap on the `ArrayMesh` to prepare the mesh for lightmapping.
 * @param transform Transform3D
 * @param texelSize float
 * @returns int
 */
  lightmapUnwrap(transform: Transform3D, texelSize: float): int;
/**
 * Regenerates tangents for each of the `ArrayMesh`'s surfaces.
 */
  regenNormalMaps(): void;
/**
 * Sets the name of the blend shape at this index.
 * @param index int
 * @param name StringName
 */
  setBlendShapeName(index: int, name: StringName): void;
/**
 * Returns the index of the first surface with this name held within this `ArrayMesh`. If none are found, -1 is returned.
 * @param name string
 * @returns int
 */
  surfaceFindByName(name: string): int;
/**
 * Returns the length in indices of the index array in the requested surface (see `add_surface_from_arrays`).
 * @param surfIdx int
 * @returns int
 */
  surfaceGetArrayIndexLen(surfIdx: int): int;
/**
 * Returns the length in vertices of the vertex array in the requested surface (see `add_surface_from_arrays`).
 * @param surfIdx int
 * @returns int
 */
  surfaceGetArrayLen(surfIdx: int): int;
/**
 * Returns the format mask of the requested surface (see `add_surface_from_arrays`).
 * @param surfIdx int
 * @returns int
 */
  surfaceGetFormat(surfIdx: int): int;
/**
 * Gets the name assigned to this surface.
 * @param surfIdx int
 * @returns string
 */
  surfaceGetName(surfIdx: int): string;
/**
 * Returns the primitive type of the requested surface (see `add_surface_from_arrays`).
 * @param surfIdx int
 * @returns int
 */
  surfaceGetPrimitiveType(surfIdx: int): int;
/**
 * Removes the surface at the given index from the Mesh, shifting surfaces with higher index down by one.
 * @param surfIdx int
 */
  surfaceRemove(surfIdx: int): void;
/**
 * Sets a name for a given surface.
 * @param surfIdx int
 * @param name string
 */
  surfaceSetName(surfIdx: int, name: string): void;
/**
 * @param surfIdx int
 * @param offset int
 * @param data PackedByteArray
 */
  surfaceUpdateAttributeRegion(surfIdx: int, offset: int, data: PackedByteArray): void;
/**
 * @param surfIdx int
 * @param offset int
 * @param data PackedByteArray
 */
  surfaceUpdateSkinRegion(surfIdx: int, offset: int, data: PackedByteArray): void;
/**
 * @param surfIdx int
 * @param offset int
 * @param data PackedByteArray
 */
  surfaceUpdateVertexRegion(surfIdx: int, offset: int, data: PackedByteArray): void;
}
