import type { GodotArray, GodotDictionary, RID, RefCounted, Vector2, float, int } from "../index.d.ts";
/**
 * Provides parameters for `PhysicsDirectSpaceState2D.intersect_ray`.
 * 
 * By changing various properties of this object, such as the ray position, you can configure the parameters for `PhysicsDirectSpaceState2D.intersect_ray`.
 */
export class PhysicsRayQueryParameters2D extends RefCounted {
/**
 * If `true`, the query will take `Area2D`s into account.
 */
  collideWithAreas: boolean;
/**
 * If `true`, the query will take `PhysicsBody2D`s into account.
 */
  collideWithBodies: boolean;
/**
 * The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * The list of object `RID`s that will be excluded from collisions. Use `CollisionObject2D.get_rid` to get the `RID` associated with a `CollisionObject2D`-derived node.
 * 
 * **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.
 */
  exclude: RID[];
/**
 * The starting point of the ray being queried for, in global coordinates.
 */
  from_: Vector2;
/**
 * If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes.
 */
  hitFromInside: boolean;
/**
 * The ending point of the ray being queried for, in global coordinates.
 */
  to: Vector2;
/**
 * Returns a new, pre-configured `PhysicsRayQueryParameters2D` object. Use it to quickly create query parameters using the most common options.
 * 
 * 				```gdscript
 * 
 * 				var query = PhysicsRayQueryParameters2D.create(global_position, global_position + Vector2(0, 100))
 * 				var collision = get_world_2d().direct_space_state.intersect_ray(query)
 * 				
 * 
 * ```
 * @param from_ Vector2
 * @param to Vector2
 * @param collisionMask int (optional, default: 4294967295)
 * @param exclude RID[] (optional, default: [])
 * @returns PhysicsRayQueryParameters2D
 */
  create(from_: Vector2, to: Vector2, collisionMask?: int, exclude?: RID[]): PhysicsRayQueryParameters2D;
}
