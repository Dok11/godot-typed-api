import type { GodotArray, GodotDictionary, RID, RefCounted, Vector3, float, int } from "../index.d.ts";
/**
 * Provides parameters for `PhysicsDirectSpaceState3D.intersect_ray`.
 * 
 * By changing various properties of this object, such as the ray position, you can configure the parameters for `PhysicsDirectSpaceState3D.intersect_ray`.
 */
export class PhysicsRayQueryParameters3D extends RefCounted {
/**
 * If `true`, the query will take `Area3D`s into account.
 */
  collideWithAreas: boolean;
/**
 * If `true`, the query will take `PhysicsBody3D`s into account.
 */
  collideWithBodies: boolean;
/**
 * The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * The list of object `RID`s that will be excluded from collisions. Use `CollisionObject3D.get_rid` to get the `RID` associated with a `CollisionObject3D`-derived node.
 * 
 * **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.
 */
  exclude: RID[];
/**
 * The starting point of the ray being queried for, in global coordinates.
 */
  from_: Vector3;
/**
 * If `true`, the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes.
 */
  hitBackFaces: boolean;
/**
 * If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect concave polygon shapes or heightmap shapes.
 */
  hitFromInside: boolean;
/**
 * The ending point of the ray being queried for, in global coordinates.
 */
  to: Vector3;
/**
 * Returns a new, pre-configured `PhysicsRayQueryParameters3D` object. Use it to quickly create query parameters using the most common options.
 * 
 * 				```gdscript
 * 
 * 				var query = PhysicsRayQueryParameters3D.create(position, position + Vector3(0, -10, 0))
 * 				var collision = get_world_3d().direct_space_state.intersect_ray(query)
 * 				
 * 
 * ```
 * @param from_ Vector3
 * @param to Vector3
 * @param collisionMask int (optional, default: 4294967295)
 * @param exclude RID[] (optional, default: [])
 * @returns PhysicsRayQueryParameters3D
 */
  create(from_: Vector3, to: Vector3, collisionMask?: int, exclude?: RID[]): PhysicsRayQueryParameters3D;
}
