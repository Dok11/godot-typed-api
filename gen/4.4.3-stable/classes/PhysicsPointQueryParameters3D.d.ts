import type { GodotArray, GodotDictionary, RID, RefCounted, Vector3, float, int } from "../index.d.ts";
/**
 * Provides parameters for `PhysicsDirectSpaceState3D.intersect_point`.
 * 
 * By changing various properties of this object, such as the point position, you can configure the parameters for `PhysicsDirectSpaceState3D.intersect_point`.
 */
export class PhysicsPointQueryParameters3D extends RefCounted {
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
 * The position being queried for, in global coordinates.
 */
  position: Vector3;
}
