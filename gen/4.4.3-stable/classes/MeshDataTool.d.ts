import type { ArrayMesh, Color, GodotArray, GodotDictionary, Material, PackedFloat32Array, PackedInt32Array, Plane, RefCounted, Variant, Vector2, Vector3, float, int } from "../index.d.ts";
/**
 * Helper tool to access and edit `Mesh` data.
 * 
 * MeshDataTool provides access to individual vertices in a `Mesh`. It allows users to read and edit vertex data of meshes. It also creates an array of faces and edges.
 * To use MeshDataTool, load a mesh with `create_from_surface`. When you are finished editing the data commit the data to a mesh with `commit_to_surface`.
 * Below is an example of how MeshDataTool may be used.
 * 
 * 		```gdscript
 * 
 * 		var mesh = ArrayMesh.new()
 * 		mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, BoxMesh.new().get_mesh_arrays())
 * 		var mdt = MeshDataTool.new()
 * 		mdt.create_from_surface(mesh, 0)
 * 		for i in range(mdt.get_vertex_count()):
 * 		    var vertex = mdt.get_vertex(i)
 * 		    # In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
 * 		    vertex += mdt.get_vertex_normal(i)
 * 		    # Save your change.
 * 		    mdt.set_vertex(i, vertex)
 * 		mesh.clear_surfaces()
 * 		mdt.commit_to_surface(mesh)
 * 		var mi = MeshInstance.new()
 * 		mi.mesh = mesh
 * 		add_child(mi)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var mesh = new ArrayMesh();
 * 		mesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, new BoxMesh().GetMeshArrays());
 * 		var mdt = new MeshDataTool();
 * 		mdt.CreateFromSurface(mesh, 0);
 * 		for (var i = 0; i < mdt.GetVertexCount(); i++)
 * 		{
 * 		    Vector3 vertex = mdt.GetVertex(i);
 * 		    // In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
 * 		    vertex += mdt.GetVertexNormal(i);
 * 		    // Save your change.
 * 		    mdt.SetVertex(i, vertex);
 * 		}
 * 		mesh.ClearSurfaces();
 * 		mdt.CommitToSurface(mesh);
 * 		var mi = new MeshInstance();
 * 		mi.Mesh = mesh;
 * 		AddChild(mi);
 * 		
 * 
 * ```
 * 
 * See also `ArrayMesh`, `ImmediateMesh` and `SurfaceTool` for procedural geometry generation.
 * 
 * **Note:** Godot uses clockwise winding order (https://learnopengl.com/Advanced-OpenGL/Face-culling) for front faces of triangle primitive modes.
 */
export class MeshDataTool extends RefCounted {
/**
 * Clears all data currently in MeshDataTool.
 */
  clear(): void;
/**
 * Adds a new surface to specified `Mesh` with edited data.
 * @param mesh ArrayMesh
 * @param compressionFlags int (optional, default: 0)
 * @returns int
 */
  commitToSurface(mesh: ArrayMesh, compressionFlags?: int): int;
/**
 * Uses specified surface of given `Mesh` to populate data for MeshDataTool.
 * Requires `Mesh` with primitive type `Mesh.PRIMITIVE_TRIANGLES`.
 * @param mesh ArrayMesh
 * @param surface int
 * @returns int
 */
  createFromSurface(mesh: ArrayMesh, surface: int): int;
/**
 * Returns the number of edges in this `Mesh`.
 * @returns int
 */
  getEdgeCount(): int;
/**
 * Returns array of faces that touch given edge.
 * @param idx int
 * @returns PackedInt32Array
 */
  getEdgeFaces(idx: int): PackedInt32Array;
/**
 * Returns meta information assigned to given edge.
 * @param idx int
 * @returns Variant
 */
  getEdgeMeta(idx: int): Variant;
/**
 * Returns index of specified vertex connected to given edge.
 * Vertex argument can only be 0 or 1 because edges are comprised of two vertices.
 * @param idx int
 * @param vertex int
 * @returns int
 */
  getEdgeVertex(idx: int, vertex: int): int;
/**
 * Returns the number of faces in this `Mesh`.
 * @returns int
 */
  getFaceCount(): int;
/**
 * Returns specified edge associated with given face.
 * Edge argument must be either 0, 1, or 2 because a face only has three edges.
 * @param idx int
 * @param edge int
 * @returns int
 */
  getFaceEdge(idx: int, edge: int): int;
/**
 * Returns the metadata associated with the given face.
 * @param idx int
 * @returns Variant
 */
  getFaceMeta(idx: int): Variant;
/**
 * Calculates and returns the face normal of the given face.
 * @param idx int
 * @returns Vector3
 */
  getFaceNormal(idx: int): Vector3;
/**
 * Returns the specified vertex index of the given face.
 * `vertex` must be either `0`, `1`, or `2` because faces contain three vertices.
 * 
 * 				```gdscript
 * 
 * 				var index = mesh_data_tool.get_face_vertex(0, 1) # Gets the index of the second vertex of the first face.
 * 				var position = mesh_data_tool.get_vertex(index)
 * 				var normal = mesh_data_tool.get_vertex_normal(index)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				int index = meshDataTool.GetFaceVertex(0, 1); // Gets the index of the second vertex of the first face.
 * 				Vector3 position = meshDataTool.GetVertex(index);
 * 				Vector3 normal = meshDataTool.GetVertexNormal(index);
 * 				
 * 
 * ```
 * 
 * @param idx int
 * @param vertex int
 * @returns int
 */
  getFaceVertex(idx: int, vertex: int): int;
/**
 * Returns the `Mesh`'s format as a combination of the `Mesh.ArrayFormat` flags. For example, a mesh containing both vertices and normals would return a format of `3` because `Mesh.ARRAY_FORMAT_VERTEX` is `1` and `Mesh.ARRAY_FORMAT_NORMAL` is `2`.
 * @returns int
 */
  getFormat(): int;
/**
 * Returns the material assigned to the `Mesh`.
 * @returns Material
 */
  getMaterial(): Material;
/**
 * Returns the position of the given vertex.
 * @param idx int
 * @returns Vector3
 */
  getVertex(idx: int): Vector3;
/**
 * Returns the bones of the given vertex.
 * @param idx int
 * @returns PackedInt32Array
 */
  getVertexBones(idx: int): PackedInt32Array;
/**
 * Returns the color of the given vertex.
 * @param idx int
 * @returns Color
 */
  getVertexColor(idx: int): Color;
/**
 * Returns the total number of vertices in `Mesh`.
 * @returns int
 */
  getVertexCount(): int;
/**
 * Returns an array of edges that share the given vertex.
 * @param idx int
 * @returns PackedInt32Array
 */
  getVertexEdges(idx: int): PackedInt32Array;
/**
 * Returns an array of faces that share the given vertex.
 * @param idx int
 * @returns PackedInt32Array
 */
  getVertexFaces(idx: int): PackedInt32Array;
/**
 * Returns the metadata associated with the given vertex.
 * @param idx int
 * @returns Variant
 */
  getVertexMeta(idx: int): Variant;
/**
 * Returns the normal of the given vertex.
 * @param idx int
 * @returns Vector3
 */
  getVertexNormal(idx: int): Vector3;
/**
 * Returns the tangent of the given vertex.
 * @param idx int
 * @returns Plane
 */
  getVertexTangent(idx: int): Plane;
/**
 * Returns the UV of the given vertex.
 * @param idx int
 * @returns Vector2
 */
  getVertexUv(idx: int): Vector2;
/**
 * Returns the UV2 of the given vertex.
 * @param idx int
 * @returns Vector2
 */
  getVertexUv2(idx: int): Vector2;
/**
 * Returns bone weights of the given vertex.
 * @param idx int
 * @returns PackedFloat32Array
 */
  getVertexWeights(idx: int): PackedFloat32Array;
/**
 * Sets the metadata of the given edge.
 * @param idx int
 * @param meta Variant
 */
  setEdgeMeta(idx: int, meta: Variant): void;
/**
 * Sets the metadata of the given face.
 * @param idx int
 * @param meta Variant
 */
  setFaceMeta(idx: int, meta: Variant): void;
/**
 * Sets the material to be used by newly-constructed `Mesh`.
 * @param material Material
 */
  setMaterial(material: Material): void;
/**
 * Sets the position of the given vertex.
 * @param idx int
 * @param vertex Vector3
 */
  setVertex(idx: int, vertex: Vector3): void;
/**
 * Sets the bones of the given vertex.
 * @param idx int
 * @param bones PackedInt32Array
 */
  setVertexBones(idx: int, bones: PackedInt32Array): void;
/**
 * Sets the color of the given vertex.
 * @param idx int
 * @param color Color
 */
  setVertexColor(idx: int, color: Color): void;
/**
 * Sets the metadata associated with the given vertex.
 * @param idx int
 * @param meta Variant
 */
  setVertexMeta(idx: int, meta: Variant): void;
/**
 * Sets the normal of the given vertex.
 * @param idx int
 * @param normal Vector3
 */
  setVertexNormal(idx: int, normal: Vector3): void;
/**
 * Sets the tangent of the given vertex.
 * @param idx int
 * @param tangent Plane
 */
  setVertexTangent(idx: int, tangent: Plane): void;
/**
 * Sets the UV of the given vertex.
 * @param idx int
 * @param uv Vector2
 */
  setVertexUv(idx: int, uv: Vector2): void;
/**
 * Sets the UV2 of the given vertex.
 * @param idx int
 * @param uv2 Vector2
 */
  setVertexUv2(idx: int, uv2: Vector2): void;
/**
 * Sets the bone weights of the given vertex.
 * @param idx int
 * @param weights PackedFloat32Array
 */
  setVertexWeights(idx: int, weights: PackedFloat32Array): void;
}
