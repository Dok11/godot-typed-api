import type { AABB, ArrayMesh, Color, GodotArray, GodotDictionary, Material, Mesh, PackedColorArray, PackedFloat32Array, PackedInt32Array, PackedVector2Array, PackedVector3Array, Plane, RefCounted, Transform3D, Vector2, Vector3, float, int } from "../index.d.ts";
/**
 * Helper tool to create geometry.
 * 
 * The `SurfaceTool` is used to construct a `Mesh` by specifying vertex attributes individually. It can be used to construct a `Mesh` from a script. All properties except indices need to be added before calling `add_vertex`. For example, to add vertex colors and UVs:
 * 
 * 		```gdscript
 * 
 * 		var st = SurfaceTool.new()
 * 		st.begin(Mesh.PRIMITIVE_TRIANGLES)
 * 		st.set_color(Color(1, 0, 0))
 * 		st.set_uv(Vector2(0, 0))
 * 		st.add_vertex(Vector3(0, 0, 0))
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var st = new SurfaceTool();
 * 		st.Begin(Mesh.PrimitiveType.Triangles);
 * 		st.SetColor(new Color(1, 0, 0));
 * 		st.SetUV(new Vector2(0, 0));
 * 		st.AddVertex(new Vector3(0, 0, 0));
 * 		
 * 
 * ```
 * 
 * The above `SurfaceTool` now contains one vertex of a triangle which has a UV coordinate and a specified `Color`. If another vertex were added without calling `set_uv` or `set_color`, then the last values would be used.
 * Vertex attributes must be passed **before** calling `add_vertex`. Failure to do so will result in an error when committing the vertex information to a mesh.
 * Additionally, the attributes used before the first vertex is added determine the format of the mesh. For example, if you only add UVs to the first vertex, you cannot add color to any of the subsequent vertices.
 * See also `ArrayMesh`, `ImmediateMesh` and `MeshDataTool` for procedural geometry generation.
 * 
 * **Note:** Godot uses clockwise winding order (https://learnopengl.com/Advanced-OpenGL/Face-culling) for front faces of triangle primitive modes.
 */
export class SurfaceTool extends RefCounted {
/**
 * Adds a vertex to index array if you are using indexed vertices. Does not need to be called before adding vertices.
 * @param index int
 */
  addIndex(index: int): void;
/**
 * Inserts a triangle fan made of array data into `Mesh` being constructed.
 * Requires the primitive type be set to `Mesh.PRIMITIVE_TRIANGLES`.
 * @param vertices PackedVector3Array
 * @param uvs PackedVector2Array (optional, default: PackedVector2Array())
 * @param colors PackedColorArray (optional, default: PackedColorArray())
 * @param uv2s PackedVector2Array (optional, default: PackedVector2Array())
 * @param normals PackedVector3Array (optional, default: PackedVector3Array())
 * @param tangents Plane[] (optional, default: [])
 */
  addTriangleFan(vertices: PackedVector3Array, uvs?: PackedVector2Array, colors?: PackedColorArray, uv2s?: PackedVector2Array, normals?: PackedVector3Array, tangents?: Plane[]): void;
/**
 * Specifies the position of current vertex. Should be called after specifying other vertex properties (e.g. Color, UV).
 * @param vertex Vector3
 */
  addVertex(vertex: Vector3): void;
/**
 * Append vertices from a given `Mesh` surface onto the current vertex array with specified `Transform3D`.
 * @param existing Mesh
 * @param surface int
 * @param transform Transform3D
 */
  appendFrom(existing: Mesh, surface: int, transform: Transform3D): void;
/**
 * Called before adding any vertices. Takes the primitive type as an argument (e.g. `Mesh.PRIMITIVE_TRIANGLES`).
 * @param primitive int
 */
  begin(primitive: int): void;
/**
 * Clear all information passed into the surface tool so far.
 */
  clear(): void;
/**
 * Returns a constructed `ArrayMesh` from current information passed in. If an existing `ArrayMesh` is passed in as an argument, will add an extra surface to the existing `ArrayMesh`.
 * The `flags` argument can be the bitwise OR of `Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE`, `Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS`, or `Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY`.
 * @param existing ArrayMesh (optional, default: null)
 * @param flags int (optional, default: 0)
 * @returns ArrayMesh
 */
  commit(existing?: ArrayMesh, flags?: int): ArrayMesh;
/**
 * Commits the data to the same format used by `ArrayMesh.add_surface_from_arrays`, `ImporterMesh.add_surface`, and `create_from_arrays`. This way you can further process the mesh data using the `ArrayMesh` or `ImporterMesh` APIs.
 * @returns GodotArray<any>
 */
  commitToArrays(): GodotArray<any>;
/**
 * Creates a vertex array from an existing `Mesh`.
 * @param existing Mesh
 * @param surface int
 */
  createFrom(existing: Mesh, surface: int): void;
/**
 * Creates this SurfaceTool from existing vertex arrays such as returned by `commit_to_arrays`, `Mesh.surface_get_arrays`, `Mesh.surface_get_blend_shape_arrays`, `ImporterMesh.get_surface_arrays`, and `ImporterMesh.get_surface_blend_shape_arrays`. `primitive_type` controls the type of mesh data, defaulting to `Mesh.PRIMITIVE_TRIANGLES`.
 * @param arrays GodotArray<any>
 * @param primitiveType int (optional, default: 3)
 */
  createFromArrays(arrays: GodotArray<any>, primitiveType?: int): void;
/**
 * Creates a vertex array from the specified blend shape of an existing `Mesh`. This can be used to extract a specific pose from a blend shape.
 * @param existing Mesh
 * @param surface int
 * @param blendShape string
 */
  createFromBlendShape(existing: Mesh, surface: int, blendShape: string): void;
/**
 * Removes the index array by expanding the vertex array.
 */
  deindex(): void;
/**
 * Generates an LOD for a given `nd_threshold` in linear units (square root of quadric error metric), using at most `target_index_count` indices.
 * @param ndThreshold float
 * @param targetIndexCount int (optional, default: 3)
 * @returns PackedInt32Array
 * @deprecated This method is unused internally, as it does not preserve normals or UVs. Consider using `ImporterMesh.generate_lods` instead.
 */
  generateLod(ndThreshold: float, targetIndexCount?: int): PackedInt32Array;
/**
 * Generates normals from vertices so you do not have to do it manually. If `flip` is `true`, the resulting normals will be inverted. `generate_normals` should be called *after* generating geometry and *before* committing the mesh using `commit` or `commit_to_arrays`. For correct display of normal-mapped surfaces, you will also have to generate tangents using `generate_tangents`.
 * 
 * **Note:** `generate_normals` only works if the primitive type is set to `Mesh.PRIMITIVE_TRIANGLES`.
 * 
 * **Note:** `generate_normals` takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to `0` using `set_smooth_group` or leave the smooth group at the default of `0`. To generate flat normals, set the smooth group to `-1` using `set_smooth_group` prior to adding vertices.
 * @param flip boolean (optional, default: false)
 */
  generateNormals(flip?: boolean): void;
/**
 * Generates a tangent vector for each vertex. Requires that each vertex already has UVs and normals set (see `generate_normals`).
 */
  generateTangents(): void;
/**
 * Returns the axis-aligned bounding box of the vertex positions.
 * @returns AABB
 */
  getAabb(): AABB;
/**
 * Returns the format for custom `channel_index` (currently up to 4). Returns `CUSTOM_MAX` if this custom channel is unused.
 * @param channelIndex int
 * @returns int
 */
  getCustomFormat(channelIndex: int): int;
/**
 * Returns the type of mesh geometry, such as `Mesh.PRIMITIVE_TRIANGLES`.
 * @returns int
 */
  getPrimitiveType(): int;
/**
 * By default, returns `SKIN_4_WEIGHTS` to indicate only 4 bone influences per vertex are used.
 * Returns `SKIN_8_WEIGHTS` if up to 8 influences are used.
 * 
 * **Note:** This function returns an enum, not the exact number of weights.
 * @returns int
 */
  getSkinWeightCount(): int;
/**
 * Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse.
 */
  index(): void;
/**
 * Optimizes triangle sorting for performance. Requires that `get_primitive_type` is `Mesh.PRIMITIVE_TRIANGLES`.
 */
  optimizeIndicesForCache(): void;
/**
 * Specifies an array of bones to use for the *next* vertex. `bones` must contain 4 integers.
 * @param bones PackedInt32Array
 */
  setBones(bones: PackedInt32Array): void;
/**
 * Specifies a `Color` to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.
 * 
 * **Note:** The material must have `BaseMaterial3D.vertex_color_use_as_albedo` enabled for the vertex color to be visible.
 * @param color Color
 */
  setColor(color: Color): void;
/**
 * Sets the custom value on this vertex for `channel_index`.
 * `set_custom_format` must be called first for this `channel_index`. Formats which are not RGBA will ignore other color channels.
 * @param channelIndex int
 * @param customColor Color
 */
  setCustom(channelIndex: int, customColor: Color): void;
/**
 * Sets the color format for this custom `channel_index`. Use `CUSTOM_MAX` to disable.
 * Must be invoked after `begin` and should be set before `commit` or `commit_to_arrays`.
 * @param channelIndex int
 * @param format int
 */
  setCustomFormat(channelIndex: int, format: int): void;
/**
 * Sets `Material` to be used by the `Mesh` you are constructing.
 * @param material Material
 */
  setMaterial(material: Material): void;
/**
 * Specifies a normal to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.
 * @param normal Vector3
 */
  setNormal(normal: Vector3): void;
/**
 * Set to `SKIN_8_WEIGHTS` to indicate that up to 8 bone influences per vertex may be used.
 * By default, only 4 bone influences are used (`SKIN_4_WEIGHTS`).
 * 
 * **Note:** This function takes an enum, not the exact number of weights.
 * @param count int
 */
  setSkinWeightCount(count: int): void;
/**
 * Specifies the smooth group to use for the *next* vertex. If this is never called, all vertices will have the default smooth group of `0` and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to `-1`.
 * 
 * **Note:** This function actually takes a `uint32_t`, so C# users should use `uint32.MaxValue` instead of `-1` to produce a mesh with flat normals.
 * @param index int
 */
  setSmoothGroup(index: int): void;
/**
 * Specifies a tangent to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.
 * @param tangent Plane
 */
  setTangent(tangent: Plane): void;
/**
 * Specifies a set of UV coordinates to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.
 * @param uv Vector2
 */
  setUv(uv: Vector2): void;
/**
 * Specifies an optional second set of UV coordinates to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.
 * @param uv2 Vector2
 */
  setUv2(uv2: Vector2): void;
/**
 * Specifies weight values to use for the *next* vertex. `weights` must contain 4 values. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.
 * @param weights PackedFloat32Array
 */
  setWeights(weights: PackedFloat32Array): void;
/**
 * Limits range of data passed to `set_custom` to unsigned normalized 0 to 1 stored in 8 bits per channel. See `Mesh.ARRAY_CUSTOM_RGBA8_UNORM`.
 */
  static readonly CUSTOM_RGBA8_UNORM: int;
/**
 * Limits range of data passed to `set_custom` to signed normalized -1 to 1 stored in 8 bits per channel. See `Mesh.ARRAY_CUSTOM_RGBA8_SNORM`.
 */
  static readonly CUSTOM_RGBA8_SNORM: int;
/**
 * Stores data passed to `set_custom` as half precision floats, and uses only red and green color channels. See `Mesh.ARRAY_CUSTOM_RG_HALF`.
 */
  static readonly CUSTOM_RG_HALF: int;
/**
 * Stores data passed to `set_custom` as half precision floats and uses all color channels. See `Mesh.ARRAY_CUSTOM_RGBA_HALF`.
 */
  static readonly CUSTOM_RGBA_HALF: int;
/**
 * Stores data passed to `set_custom` as full precision floats, and uses only red color channel. See `Mesh.ARRAY_CUSTOM_R_FLOAT`.
 */
  static readonly CUSTOM_R_FLOAT: int;
/**
 * Stores data passed to `set_custom` as full precision floats, and uses only red and green color channels. See `Mesh.ARRAY_CUSTOM_RG_FLOAT`.
 */
  static readonly CUSTOM_RG_FLOAT: int;
/**
 * Stores data passed to `set_custom` as full precision floats, and uses only red, green and blue color channels. See `Mesh.ARRAY_CUSTOM_RGB_FLOAT`.
 */
  static readonly CUSTOM_RGB_FLOAT: int;
/**
 * Stores data passed to `set_custom` as full precision floats, and uses all color channels. See `Mesh.ARRAY_CUSTOM_RGBA_FLOAT`.
 */
  static readonly CUSTOM_RGBA_FLOAT: int;
/**
 * Used to indicate a disabled custom channel.
 */
  static readonly CUSTOM_MAX: int;
/**
 * Each individual vertex can be influenced by only 4 bone weights.
 */
  static readonly SKIN_4_WEIGHTS: int;
/**
 * Each individual vertex can be influenced by up to 8 bone weights.
 */
  static readonly SKIN_8_WEIGHTS: int;
}
