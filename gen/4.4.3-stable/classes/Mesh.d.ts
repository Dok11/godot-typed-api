import type { AABB, ConcavePolygonShape3D, ConvexPolygonShape3D, GodotArray, GodotDictionary, Material, PackedVector3Array, Resource, StringName, TriangleMesh, Vector2i, float, int } from "../index.d.ts";
/**
 * A `Resource` that contains vertex array-based geometry.
 * 
 * Mesh is a type of `Resource` that contains vertex array-based geometry, divided in *surfaces*. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials. The maximum number of surfaces per mesh is `RenderingServer.MAX_MESH_SURFACES`.
 */
export class Mesh extends Resource {
/**
 * Sets a hint to be used for lightmap resolution.
 */
  lightmapSizeHint: Vector2i;
/**
 * Calculate a `ConvexPolygonShape3D` from the mesh.
 * If `clean` is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.
 * If `simplify` is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.
 * @param clean boolean (optional, default: true)
 * @param simplify boolean (optional, default: false)
 * @returns ConvexPolygonShape3D
 */
  createConvexShape(clean?: boolean, simplify?: boolean): ConvexPolygonShape3D;
/**
 * Calculate an outline mesh at a defined offset (margin) from the original mesh.
 * 
 * **Note:** This method typically returns the vertices in reverse order (e.g. clockwise to counterclockwise).
 * @param margin float
 * @returns Mesh
 */
  createOutline(margin: float): Mesh;
/**
 * Creates a placeholder version of this resource (`PlaceholderMesh`).
 * @returns Resource
 */
  createPlaceholder(): Resource;
/**
 * Calculate a `ConcavePolygonShape3D` from the mesh.
 * @returns ConcavePolygonShape3D
 */
  createTrimeshShape(): ConcavePolygonShape3D;
/**
 * Generate a `TriangleMesh` from the mesh. Considers only surfaces using one of these primitive types: `PRIMITIVE_TRIANGLES`, `PRIMITIVE_TRIANGLE_STRIP`.
 * @returns TriangleMesh
 */
  generateTriangleMesh(): TriangleMesh;
/**
 * Returns the smallest `AABB` enclosing this mesh in local space. Not affected by `custom_aabb`.
 * 
 * **Note:** This is only implemented for `ArrayMesh` and `PrimitiveMesh`.
 * @returns AABB
 */
  getAabb(): AABB;
/**
 * Virtual method to override the `AABB` for a custom class extending `Mesh`.
 * @returns AABB
 */
  private getAabb(): AABB;
/**
 * Virtual method to override the number of blend shapes for a custom class extending `Mesh`.
 * @returns int
 */
  private getBlendShapeCount(): int;
/**
 * Virtual method to override the retrieval of blend shape names for a custom class extending `Mesh`.
 * @param index int
 * @returns StringName
 */
  private getBlendShapeName(index: int): StringName;
/**
 * Returns all the vertices that make up the faces of the mesh. Each three vertices represent one triangle.
 * @returns PackedVector3Array
 */
  getFaces(): PackedVector3Array;
/**
 * Returns the number of surfaces that the `Mesh` holds. This is equivalent to `MeshInstance3D.get_surface_override_material_count`.
 * @returns int
 */
  getSurfaceCount(): int;
/**
 * Virtual method to override the surface count for a custom class extending `Mesh`.
 * @returns int
 */
  private getSurfaceCount(): int;
/**
 * Virtual method to override the names of blend shapes for a custom class extending `Mesh`.
 * @param index int
 * @param name StringName
 */
  private setBlendShapeName(index: int, name: StringName): void;
/**
 * Virtual method to override the surface array index length for a custom class extending `Mesh`.
 * @param index int
 * @returns int
 */
  private surfaceGetArrayIndexLen(index: int): int;
/**
 * Virtual method to override the surface array length for a custom class extending `Mesh`.
 * @param index int
 * @returns int
 */
  private surfaceGetArrayLen(index: int): int;
/**
 * Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see `ArrayMesh.add_surface_from_arrays`).
 * @param surfIdx int
 * @returns GodotArray<any>
 */
  surfaceGetArrays(surfIdx: int): GodotArray<any>;
/**
 * Virtual method to override the surface arrays for a custom class extending `Mesh`.
 * @param index int
 * @returns GodotArray<any>
 */
  private surfaceGetArrays(index: int): GodotArray<any>;
/**
 * Returns the blend shape arrays for the requested surface.
 * @param surfIdx int
 * @returns GodotArray<any>
 */
  surfaceGetBlendShapeArrays(surfIdx: int): GodotArray<any>;
/**
 * Virtual method to override the blend shape arrays for a custom class extending `Mesh`.
 * @param index int
 * @returns GodotArray<any>
 */
  private surfaceGetBlendShapeArrays(index: int): GodotArray<any>;
/**
 * Virtual method to override the surface format for a custom class extending `Mesh`.
 * @param index int
 * @returns int
 */
  private surfaceGetFormat(index: int): int;
/**
 * Virtual method to override the surface LODs for a custom class extending `Mesh`.
 * @param index int
 * @returns GodotDictionary<any>
 */
  private surfaceGetLods(index: int): GodotDictionary<any>;
/**
 * Returns a `Material` in a given surface. Surface is rendered using this material.
 * 
 * **Note:** This returns the material within the `Mesh` resource, not the `Material` associated to the `MeshInstance3D`'s Surface Material Override properties. To get the `Material` associated to the `MeshInstance3D`'s Surface Material Override properties, use `MeshInstance3D.get_surface_override_material` instead.
 * @param surfIdx int
 * @returns Material
 */
  surfaceGetMaterial(surfIdx: int): Material;
/**
 * Virtual method to override the surface material for a custom class extending `Mesh`.
 * @param index int
 * @returns Material
 */
  private surfaceGetMaterial(index: int): Material;
/**
 * Virtual method to override the surface primitive type for a custom class extending `Mesh`.
 * @param index int
 * @returns int
 */
  private surfaceGetPrimitiveType(index: int): int;
/**
 * Sets a `Material` for a given surface. Surface will be rendered using this material.
 * 
 * **Note:** This assigns the material within the `Mesh` resource, not the `Material` associated to the `MeshInstance3D`'s Surface Material Override properties. To set the `Material` associated to the `MeshInstance3D`'s Surface Material Override properties, use `MeshInstance3D.set_surface_override_material` instead.
 * @param surfIdx int
 * @param material Material
 */
  surfaceSetMaterial(surfIdx: int, material: Material): void;
/**
 * Virtual method to override the setting of a `material` at the given `index` for a custom class extending `Mesh`.
 * @param index int
 * @param material Material
 */
  private surfaceSetMaterial(index: int, material: Material): void;
/**
 * Render array as points (one vertex equals one point).
 */
  static readonly PRIMITIVE_POINTS: int;
/**
 * Render array as lines (every two vertices a line is created).
 */
  static readonly PRIMITIVE_LINES: int;
/**
 * Render array as line strip.
 */
  static readonly PRIMITIVE_LINE_STRIP: int;
/**
 * Render array as triangles (every three vertices a triangle is created).
 */
  static readonly PRIMITIVE_TRIANGLES: int;
/**
 * Render array as triangle strips.
 */
  static readonly PRIMITIVE_TRIANGLE_STRIP: int;
/**
 * `PackedVector3Array`, `PackedVector2Array`, or `Array` of vertex positions.
 */
  static readonly ARRAY_VERTEX: int;
/**
 * `PackedVector3Array` of vertex normals.
 * 
 * **Note:** The array has to consist of normal vectors, otherwise they will be normalized by the engine, potentially causing visual discrepancies.
 */
  static readonly ARRAY_NORMAL: int;
/**
 * `PackedFloat32Array` of vertex tangents. Each element in groups of 4 floats, first 3 floats determine the tangent, and the last the binormal direction as -1 or 1.
 */
  static readonly ARRAY_TANGENT: int;
/**
 * `PackedColorArray` of vertex colors.
 */
  static readonly ARRAY_COLOR: int;
/**
 * `PackedVector2Array` for UV coordinates.
 */
  static readonly ARRAY_TEX_UV: int;
/**
 * `PackedVector2Array` for second UV coordinates.
 */
  static readonly ARRAY_TEX_UV2: int;
/**
 * Contains custom color channel 0. `PackedByteArray` if `(format >> Mesh.ARRAY_FORMAT_CUSTOM0_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is `ARRAY_CUSTOM_RGBA8_UNORM`, `ARRAY_CUSTOM_RGBA8_SNORM`, `ARRAY_CUSTOM_RG_HALF`, or `ARRAY_CUSTOM_RGBA_HALF`. `PackedFloat32Array` otherwise.
 */
  static readonly ARRAY_CUSTOM0: int;
/**
 * Contains custom color channel 1. `PackedByteArray` if `(format >> Mesh.ARRAY_FORMAT_CUSTOM1_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is `ARRAY_CUSTOM_RGBA8_UNORM`, `ARRAY_CUSTOM_RGBA8_SNORM`, `ARRAY_CUSTOM_RG_HALF`, or `ARRAY_CUSTOM_RGBA_HALF`. `PackedFloat32Array` otherwise.
 */
  static readonly ARRAY_CUSTOM1: int;
/**
 * Contains custom color channel 2. `PackedByteArray` if `(format >> Mesh.ARRAY_FORMAT_CUSTOM2_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is `ARRAY_CUSTOM_RGBA8_UNORM`, `ARRAY_CUSTOM_RGBA8_SNORM`, `ARRAY_CUSTOM_RG_HALF`, or `ARRAY_CUSTOM_RGBA_HALF`. `PackedFloat32Array` otherwise.
 */
  static readonly ARRAY_CUSTOM2: int;
/**
 * Contains custom color channel 3. `PackedByteArray` if `(format >> Mesh.ARRAY_FORMAT_CUSTOM3_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is `ARRAY_CUSTOM_RGBA8_UNORM`, `ARRAY_CUSTOM_RGBA8_SNORM`, `ARRAY_CUSTOM_RG_HALF`, or `ARRAY_CUSTOM_RGBA_HALF`. `PackedFloat32Array` otherwise.
 */
  static readonly ARRAY_CUSTOM3: int;
/**
 * `PackedFloat32Array` or `PackedInt32Array` of bone indices. Contains either 4 or 8 numbers per vertex depending on the presence of the `ARRAY_FLAG_USE_8_BONE_WEIGHTS` flag.
 */
  static readonly ARRAY_BONES: int;
/**
 * `PackedFloat32Array` or `PackedFloat64Array` of bone weights in the range `0.0` to `1.0` (inclusive). Contains either 4 or 8 numbers per vertex depending on the presence of the `ARRAY_FLAG_USE_8_BONE_WEIGHTS` flag.
 */
  static readonly ARRAY_WEIGHTS: int;
/**
 * `PackedInt32Array` of integers used as indices referencing vertices, colors, normals, tangents, and textures. All of those arrays must have the same number of elements as the vertex array. No index can be beyond the vertex array size. When this index array is present, it puts the function into "index mode," where the index selects the *i*'th vertex, normal, tangent, color, UV, etc. This means if you want to have different normals or colors along an edge, you have to duplicate the vertices.
 * For triangles, the index array is interpreted as triples, referring to the vertices of each triangle. For lines, the index array is in pairs indicating the start and end of each line.
 */
  static readonly ARRAY_INDEX: int;
/**
 * Represents the size of the `ArrayType` enum.
 */
  static readonly ARRAY_MAX: int;
/**
 * Indicates this custom channel contains unsigned normalized byte colors from 0 to 1, encoded as `PackedByteArray`.
 */
  static readonly ARRAY_CUSTOM_RGBA8_UNORM: int;
/**
 * Indicates this custom channel contains signed normalized byte colors from -1 to 1, encoded as `PackedByteArray`.
 */
  static readonly ARRAY_CUSTOM_RGBA8_SNORM: int;
/**
 * Indicates this custom channel contains half precision float colors, encoded as `PackedByteArray`. Only red and green channels are used.
 */
  static readonly ARRAY_CUSTOM_RG_HALF: int;
/**
 * Indicates this custom channel contains half precision float colors, encoded as `PackedByteArray`.
 */
  static readonly ARRAY_CUSTOM_RGBA_HALF: int;
/**
 * Indicates this custom channel contains full float colors, in a `PackedFloat32Array`. Only the red channel is used.
 */
  static readonly ARRAY_CUSTOM_R_FLOAT: int;
/**
 * Indicates this custom channel contains full float colors, in a `PackedFloat32Array`. Only red and green channels are used.
 */
  static readonly ARRAY_CUSTOM_RG_FLOAT: int;
/**
 * Indicates this custom channel contains full float colors, in a `PackedFloat32Array`. Only red, green and blue channels are used.
 */
  static readonly ARRAY_CUSTOM_RGB_FLOAT: int;
/**
 * Indicates this custom channel contains full float colors, in a `PackedFloat32Array`.
 */
  static readonly ARRAY_CUSTOM_RGBA_FLOAT: int;
/**
 * Represents the size of the `ArrayCustomFormat` enum.
 */
  static readonly ARRAY_CUSTOM_MAX: int;
/**
 * Mesh array contains vertices. All meshes require a vertex array so this should always be present.
 */
  static readonly ARRAY_FORMAT_VERTEX: int;
/**
 * Mesh array contains normals.
 */
  static readonly ARRAY_FORMAT_NORMAL: int;
/**
 * Mesh array contains tangents.
 */
  static readonly ARRAY_FORMAT_TANGENT: int;
/**
 * Mesh array contains colors.
 */
  static readonly ARRAY_FORMAT_COLOR: int;
/**
 * Mesh array contains UVs.
 */
  static readonly ARRAY_FORMAT_TEX_UV: int;
/**
 * Mesh array contains second UV.
 */
  static readonly ARRAY_FORMAT_TEX_UV2: int;
/**
 * Mesh array contains custom channel index 0.
 */
  static readonly ARRAY_FORMAT_CUSTOM0: int;
/**
 * Mesh array contains custom channel index 1.
 */
  static readonly ARRAY_FORMAT_CUSTOM1: int;
/**
 * Mesh array contains custom channel index 2.
 */
  static readonly ARRAY_FORMAT_CUSTOM2: int;
/**
 * Mesh array contains custom channel index 3.
 */
  static readonly ARRAY_FORMAT_CUSTOM3: int;
/**
 * Mesh array contains bones.
 */
  static readonly ARRAY_FORMAT_BONES: int;
/**
 * Mesh array contains bone weights.
 */
  static readonly ARRAY_FORMAT_WEIGHTS: int;
/**
 * Mesh array uses indices.
 */
  static readonly ARRAY_FORMAT_INDEX: int;
/**
 * Mask of mesh channels permitted in blend shapes.
 */
  static readonly ARRAY_FORMAT_BLEND_SHAPE_MASK: int;
/**
 * Shift of first custom channel.
 */
  static readonly ARRAY_FORMAT_CUSTOM_BASE: int;
/**
 * Number of format bits per custom channel. See `ArrayCustomFormat`.
 */
  static readonly ARRAY_FORMAT_CUSTOM_BITS: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 0.
 */
  static readonly ARRAY_FORMAT_CUSTOM0_SHIFT: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 1.
 */
  static readonly ARRAY_FORMAT_CUSTOM1_SHIFT: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 2.
 */
  static readonly ARRAY_FORMAT_CUSTOM2_SHIFT: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 3.
 */
  static readonly ARRAY_FORMAT_CUSTOM3_SHIFT: int;
/**
 * Mask of custom format bits per custom channel. Must be shifted by one of the SHIFT constants. See `ArrayCustomFormat`.
 */
  static readonly ARRAY_FORMAT_CUSTOM_MASK: int;
/**
 * Shift of first compress flag. Compress flags should be passed to `ArrayMesh.add_surface_from_arrays` and `SurfaceTool.commit`.
 */
  static readonly ARRAY_COMPRESS_FLAGS_BASE: int;
/**
 * Flag used to mark that the array contains 2D vertices.
 */
  static readonly ARRAY_FLAG_USE_2D_VERTICES: int;
/**
 * Flag indices that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan.
 */
  static readonly ARRAY_FLAG_USE_DYNAMIC_UPDATE: int;
/**
 * Flag used to mark that the mesh contains up to 8 bone influences per vertex. This flag indicates that `ARRAY_BONES` and `ARRAY_WEIGHTS` elements will have double length.
 */
  static readonly ARRAY_FLAG_USE_8_BONE_WEIGHTS: int;
/**
 * Flag used to mark that the mesh intentionally contains no vertex array.
 */
  static readonly ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY: int;
/**
 * Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can.
 */
  static readonly ARRAY_FLAG_COMPRESS_ATTRIBUTES: int;
/**
 * Blend shapes are normalized.
 */
  static readonly BLEND_SHAPE_MODE_NORMALIZED: int;
/**
 * Blend shapes are relative to base weight.
 */
  static readonly BLEND_SHAPE_MODE_RELATIVE: int;
}
