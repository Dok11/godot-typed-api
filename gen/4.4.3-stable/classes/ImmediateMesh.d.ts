import type { Color, GodotArray, GodotDictionary, Material, Mesh, Plane, Vector2, Vector3, float, int } from "../index.d.ts";
/**
 * Mesh optimized for creating geometry manually.
 * 
 * A mesh type optimized for creating geometry manually, similar to OpenGL 1.x immediate mode.
 * Here's a sample on how to generate a triangular face:
 * 
 * 		```gdscript
 * 
 * 		var mesh = ImmediateMesh.new()
 * 		mesh.surface_begin(Mesh.PRIMITIVE_TRIANGLES)
 * 		mesh.surface_add_vertex(Vector3.LEFT)
 * 		mesh.surface_add_vertex(Vector3.FORWARD)
 * 		mesh.surface_add_vertex(Vector3.ZERO)
 * 		mesh.surface_end()
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var mesh = new ImmediateMesh();
 * 		mesh.SurfaceBegin(Mesh.PrimitiveType.Triangles);
 * 		mesh.SurfaceAddVertex(Vector3.Left);
 * 		mesh.SurfaceAddVertex(Vector3.Forward);
 * 		mesh.SurfaceAddVertex(Vector3.Zero);
 * 		mesh.SurfaceEnd();
 * 		
 * 
 * ```
 * 
 * **Note:** Generating complex geometries with `ImmediateMesh` is highly inefficient. Instead, it is designed to generate simple geometry that changes often.
 */
export class ImmediateMesh extends Mesh {
/**
 * Clear all surfaces.
 */
  clearSurfaces(): void;
/**
 * Add a 3D vertex using the current attributes previously set.
 * @param vertex Vector3
 */
  surfaceAddVertex(vertex: Vector3): void;
/**
 * Add a 2D vertex using the current attributes previously set.
 * @param vertex Vector2
 */
  surfaceAddVertex2d(vertex: Vector2): void;
/**
 * Begin a new surface.
 * @param primitive int
 * @param material Material (optional, default: null)
 */
  surfaceBegin(primitive: int, material?: Material): void;
/**
 * End and commit current surface. Note that surface being created will not be visible until this function is called.
 */
  surfaceEnd(): void;
/**
 * Set the color attribute that will be pushed with the next vertex.
 * @param color Color
 */
  surfaceSetColor(color: Color): void;
/**
 * Set the normal attribute that will be pushed with the next vertex.
 * @param normal Vector3
 */
  surfaceSetNormal(normal: Vector3): void;
/**
 * Set the tangent attribute that will be pushed with the next vertex.
 * @param tangent Plane
 */
  surfaceSetTangent(tangent: Plane): void;
/**
 * Set the UV attribute that will be pushed with the next vertex.
 * @param uv Vector2
 */
  surfaceSetUv(uv: Vector2): void;
/**
 * Set the UV2 attribute that will be pushed with the next vertex.
 * @param uv2 Vector2
 */
  surfaceSetUv2(uv2: Vector2): void;
}
