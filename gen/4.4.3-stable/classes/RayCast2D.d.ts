import type { CollisionObject2D, GodotArray, GodotDictionary, Node2D, Object, RID, Vector2, float, int } from "../index.d.ts";
/**
 * A ray in 2D space, used to find the first `CollisionObject2D` it intersects.
 * 
 * A raycast represents a ray from its origin to its `target_position` that finds the closest `CollisionObject2D` along its path, if it intersects any.
 * `RayCast2D` can ignore some objects by adding them to an exception list, by making its detection reporting ignore `Area2D`s (`collide_with_areas`) or `PhysicsBody2D`s (`collide_with_bodies`), or by configuring physics layers.
 * `RayCast2D` calculates intersection every physics frame, and it holds the result until the next physics frame. For an immediate raycast, or if you want to configure a `RayCast2D` multiple times within the same physics frame, use `force_raycast_update`.
 * To sweep over a region of 2D space, you can approximate the region with multiple `RayCast2D`s or use `ShapeCast2D`.
 */
export class RayCast2D extends Node2D {
/**
 * If `true`, collisions with `Area2D`s will be reported.
 */
  collideWithAreas: boolean;
/**
 * If `true`, collisions with `PhysicsBody2D`s will be reported.
 */
  collideWithBodies: boolean;
/**
 * The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * If `true`, collisions will be reported.
 */
  enabled: boolean;
/**
 * If `true`, the parent node will be excluded from collision detection.
 */
  excludeParent: boolean;
/**
 * If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes.
 */
  hitFromInside: boolean;
/**
 * The ray's destination point, relative to the RayCast's `position`.
 */
  targetPosition: Vector2;
/**
 * Adds a collision exception so the ray does not report collisions with the specified `CollisionObject2D` node.
 * @param node CollisionObject2D
 */
  addException(node: CollisionObject2D): void;
/**
 * Adds a collision exception so the ray does not report collisions with the specified `RID`.
 * @param rid RID
 */
  addExceptionRid(rid: RID): void;
/**
 * Removes all collision exceptions for this ray.
 */
  clearExceptions(): void;
/**
 * Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.
 * 
 * **Note:** `enabled` does not need to be `true` for this to work.
 */
  forceRaycastUpdate(): void;
/**
 * Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. `is_colliding` returns `false`).
 * @returns Object
 */
  getCollider(): Object;
/**
 * Returns the `RID` of the first object that the ray intersects, or an empty `RID` if no object is intersecting the ray (i.e. `is_colliding` returns `false`).
 * @returns RID
 */
  getColliderRid(): RID;
/**
 * Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. `is_colliding` returns `false`).
 * To get the intersected shape node, for a `CollisionObject2D` target, use:
 * 
 * 				```gdscript
 * 
 * 				var target = get_collider() # A CollisionObject2D.
 * 				var shape_id = get_collider_shape() # The shape index in the collider.
 * 				var owner_id = target.shape_find_owner(shape_id) # The owner ID in the collider.
 * 				var shape = target.shape_owner_get_owner(owner_id)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var target = (CollisionObject2D)GetCollider(); // A CollisionObject2D.
 * 				var shapeId = GetColliderShape(); // The shape index in the collider.
 * 				var ownerId = target.ShapeFindOwner(shapeId); // The owner ID in the collider.
 * 				var shape = target.ShapeOwnerGetOwner(ownerId);
 * 				
 * 
 * ```
 * 
 * @returns int
 */
  getColliderShape(): int;
/**
 * Returns whether or not the specified layer of the `collision_mask` is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getCollisionMaskValue(layerNumber: int): boolean;
/**
 * Returns the normal of the intersecting object's shape at the collision point, or `Vector2(0, 0)` if the ray starts inside the shape and `hit_from_inside` is `true`.
 * 
 * **Note:** Check that `is_colliding` returns `true` before calling this method to ensure the returned normal is valid and up-to-date.
 * @returns Vector2
 */
  getCollisionNormal(): Vector2;
/**
 * Returns the collision point at which the ray intersects the closest object, in the global coordinate system. If `hit_from_inside` is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.
 * 
 * **Note:** Check that `is_colliding` returns `true` before calling this method to ensure the returned point is valid and up-to-date.
 * @returns Vector2
 */
  getCollisionPoint(): Vector2;
/**
 * Returns whether any object is intersecting with the ray's vector (considering the vector length).
 * @returns boolean
 */
  isColliding(): boolean;
/**
 * Removes a collision exception so the ray does report collisions with the specified `CollisionObject2D` node.
 * @param node CollisionObject2D
 */
  removeException(node: CollisionObject2D): void;
/**
 * Removes a collision exception so the ray does report collisions with the specified `RID`.
 * @param rid RID
 */
  removeExceptionRid(rid: RID): void;
/**
 * Based on `value`, enables or disables the specified layer in the `collision_mask`, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setCollisionMaskValue(layerNumber: int, value: boolean): void;
}
