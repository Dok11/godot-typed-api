import type { CollisionObject2D, GodotArray, GodotDictionary, Node2D, Object, RID, Shape2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D shape that sweeps a region of space to detect `CollisionObject2D`s.
 * 
 * Shape casting allows to detect collision objects by sweeping its `shape` along the cast direction determined by `target_position`. This is similar to `RayCast2D`, but it allows for sweeping a region of space, rather than just a straight line. `ShapeCast2D` can detect multiple collision objects. It is useful for things like wide laser beams or snapping a simple shape to a floor.
 * Immediate collision overlaps can be done with the `target_position` set to `Vector2(0, 0)` and by calling `force_shapecast_update` within the same physics frame. This helps to overcome some limitations of `Area2D` when used as an instantaneous detection area, as collision information isn't immediately available to it.
 * 
 * **Note:** Shape casting is more computationally expensive than ray casting.
 */
export class ShapeCast2D extends Node2D {
/**
 * If `true`, collisions with `Area2D`s will be reported.
 */
  collideWithAreas: boolean;
/**
 * If `true`, collisions with `PhysicsBody2D`s will be reported.
 */
  collideWithBodies: boolean;
/**
 * The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * Returns the complete collision information from the collision sweep. The data returned is the same as in the `PhysicsDirectSpaceState2D.get_rest_info` method.
 */
  collisionResult: GodotArray<any>;
/**
 * If `true`, collisions will be reported.
 */
  enabled: boolean;
/**
 * If `true`, the parent node will be excluded from collision detection.
 */
  excludeParent: boolean;
/**
 * The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision.
 */
  margin: float;
/**
 * The number of intersections can be limited with this parameter, to reduce the processing time.
 */
  maxResults: int;
/**
 * The shape to be used for collision queries.
 */
  shape: Shape2D;
/**
 * The shape's destination point, relative to this node's `Node2D.position`.
 */
  targetPosition: Vector2;
/**
 * Adds a collision exception so the shape does not report collisions with the specified node.
 * @param node CollisionObject2D
 */
  addException(node: CollisionObject2D): void;
/**
 * Adds a collision exception so the shape does not report collisions with the specified `RID`.
 * @param rid RID
 */
  addExceptionRid(rid: RID): void;
/**
 * Removes all collision exceptions for this shape.
 */
  clearExceptions(): void;
/**
 * Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.
 * 
 * **Note:** Setting `enabled` to `true` is not required for this to work.
 */
  forceShapecastUpdate(): void;
/**
 * Returns the fraction from this cast's origin to its `target_position` of how far the shape can move without triggering a collision, as a value between `0.0` and `1.0`.
 * @returns float
 */
  getClosestCollisionSafeFraction(): float;
/**
 * Returns the fraction from this cast's origin to its `target_position` of how far the shape must move to trigger a collision, as a value between `0.0` and `1.0`.
 * In ideal conditions this would be the same as `get_closest_collision_safe_fraction`, however shape casting is calculated in discrete steps, so the precise point of collision can occur between two calculated positions.
 * @returns float
 */
  getClosestCollisionUnsafeFraction(): float;
/**
 * Returns the collided `Object` of one of the multiple collisions at `index`, or `null` if no object is intersecting the shape (i.e. `is_colliding` returns `false`).
 * @param index int
 * @returns Object
 */
  getCollider(index: int): Object;
/**
 * Returns the `RID` of the collided object of one of the multiple collisions at `index`.
 * @param index int
 * @returns RID
 */
  getColliderRid(index: int): RID;
/**
 * Returns the shape ID of the colliding shape of one of the multiple collisions at `index`, or `0` if no object is intersecting the shape (i.e. `is_colliding` returns `false`).
 * @param index int
 * @returns int
 */
  getColliderShape(index: int): int;
/**
 * The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by `get_collider`, `get_collider_shape`, `get_collision_point`, and `get_collision_normal` methods.
 * @returns int
 */
  getCollisionCount(): int;
/**
 * Returns whether or not the specified layer of the `collision_mask` is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getCollisionMaskValue(layerNumber: int): boolean;
/**
 * Returns the normal of one of the multiple collisions at `index` of the intersecting object.
 * @param index int
 * @returns Vector2
 */
  getCollisionNormal(index: int): Vector2;
/**
 * Returns the collision point of one of the multiple collisions at `index` where the shape intersects the colliding object.
 * 
 * **Note:** This point is in the **global** coordinate system.
 * @param index int
 * @returns Vector2
 */
  getCollisionPoint(index: int): Vector2;
/**
 * Returns whether any object is intersecting with the shape's vector (considering the vector length).
 * @returns boolean
 */
  isColliding(): boolean;
/**
 * Removes a collision exception so the shape does report collisions with the specified node.
 * @param node CollisionObject2D
 */
  removeException(node: CollisionObject2D): void;
/**
 * Removes a collision exception so the shape does report collisions with the specified `RID`.
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
