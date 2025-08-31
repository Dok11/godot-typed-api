import type { AABB, GodotArray, GodotDictionary, Material, Mesh, float, int } from "../index.d.ts";
/**
 * Base class for all primitive meshes. Handles applying a `Material` to a primitive mesh.
 * 
 * Base class for all primitive meshes. Handles applying a `Material` to a primitive mesh. Examples include `BoxMesh`, `CapsuleMesh`, `CylinderMesh`, `PlaneMesh`, `PrismMesh`, and `SphereMesh`.
 */
export class PrimitiveMesh extends Mesh {
/**
 * If set, generates UV2 UV coordinates applying a padding using the `uv2_padding` setting. UV2 is needed for lightmapping.
 */
  addUv2: boolean;
/**
 * Overrides the `AABB` with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices.
 */
  customAabb: AABB;
/**
 * If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn.
 * This gives the same result as using `BaseMaterial3D.CULL_FRONT` in `BaseMaterial3D.cull_mode`.
 */
  flipFaces: boolean;
/**
 * The current `Material` of the primitive mesh.
 */
  material: Material;
/**
 * If `add_uv2` is set, specifies the padding in pixels applied along seams of the mesh. Lower padding values allow making better use of the lightmap texture (resulting in higher texel density), but may introduce visible lightmap bleeding along edges.
 * If the size of the lightmap texture can't be determined when generating the mesh, UV2 is calculated assuming a texture size of 1024x1024.
 */
  uv2Padding: float;
/**
 * Override this method to customize how this primitive mesh should be generated. Should return an `Array` where each element is another Array of values required for the mesh (see the `Mesh.ArrayType` constants).
 * @returns GodotArray<any>
 */
  private createMeshArray(): GodotArray<any>;
/**
 * Returns the mesh arrays used to make up the surface of this primitive mesh.
 * 
 * **Example:** Pass the result to `ArrayMesh.add_surface_from_arrays` to create a new surface:
 * 
 * 				```gdscript
 * 
 * 				var c = CylinderMesh.new()
 * 				var arr_mesh = ArrayMesh.new()
 * 				arr_mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, c.get_mesh_arrays())
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var c = new CylinderMesh();
 * 				var arrMesh = new ArrayMesh();
 * 				arrMesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, c.GetMeshArrays());
 * 				
 * 
 * ```
 * 
 * @returns GodotArray<any>
 */
  getMeshArrays(): GodotArray<any>;
/**
 * Request an update of this primitive mesh based on its properties.
 */
  requestUpdate(): void;
}
