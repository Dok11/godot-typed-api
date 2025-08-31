import type { AABB, GodotArray, GodotDictionary, Object, Vector3, float, int } from "../index.d.ts";
/**
 * A class used to provide `PhysicsServer3DExtension._soft_body_update_rendering_server` with a rendering handler for soft bodies.
 */
export class PhysicsServer3DRenderingServerHandler extends Object {
/**
 * Sets the bounding box for the `SoftBody3D`.
 * @param aabb AABB
 */
  setAabb(aabb: AABB): void;
/**
 * Called by the `PhysicsServer3D` to set the bounding box for the `SoftBody3D`.
 * @param aabb AABB
 */
  private setAabb(aabb: AABB): void;
/**
 * Sets the normal for the `SoftBody3D` vertex at the index specified by `vertex_id`.
 * @param vertexId int
 * @param normal Vector3
 */
  setNormal(vertexId: int, normal: Vector3): void;
/**
 * Called by the `PhysicsServer3D` to set the normal for the `SoftBody3D` vertex at the index specified by `vertex_id`.
 * 
 * **Note:** The `normal` parameter used to be of type `const void*` prior to Godot 4.2.
 * @param vertexId int
 * @param normal Vector3
 */
  private setNormal(vertexId: int, normal: Vector3): void;
/**
 * Sets the position for the `SoftBody3D` vertex at the index specified by `vertex_id`.
 * @param vertexId int
 * @param vertex Vector3
 */
  setVertex(vertexId: int, vertex: Vector3): void;
/**
 * Called by the `PhysicsServer3D` to set the position for the `SoftBody3D` vertex at the index specified by `vertex_id`.
 * 
 * **Note:** The `vertex` parameter used to be of type `const void*` prior to Godot 4.2.
 * @param vertexId int
 * @param vertex Vector3
 */
  private setVertex(vertexId: int, vertex: Vector3): void;
}
