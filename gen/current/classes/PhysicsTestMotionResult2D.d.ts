import type { GodotArray, GodotDictionary, Object, RID, RefCounted, Vector2, float, int } from "../index.d.ts";
/**
 * Describes the motion and collision result from `PhysicsServer2D.body_test_motion`.
 * 
 * Describes the motion and collision result from `PhysicsServer2D.body_test_motion`.
 */
export class PhysicsTestMotionResult2D extends RefCounted {
/**
 * Returns the colliding body's attached `Object`, if a collision occurred.
 * @returns Object
 */
  getCollider(): Object;
/**
 * Returns the unique instance ID of the colliding body's attached `Object`, if a collision occurred. See `Object.get_instance_id`.
 * @returns int
 */
  getColliderId(): int;
/**
 * Returns the colliding body's `RID` used by the `PhysicsServer2D`, if a collision occurred.
 * @returns RID
 */
  getColliderRid(): RID;
/**
 * Returns the colliding body's shape index, if a collision occurred. See `CollisionObject2D`.
 * @returns int
 */
  getColliderShape(): int;
/**
 * Returns the colliding body's velocity, if a collision occurred.
 * @returns Vector2
 */
  getColliderVelocity(): Vector2;
/**
 * Returns the length of overlap along the collision normal, if a collision occurred.
 * @returns float
 */
  getCollisionDepth(): float;
/**
 * Returns the moving object's colliding shape, if a collision occurred.
 * @returns int
 */
  getCollisionLocalShape(): int;
/**
 * Returns the colliding body's shape's normal at the point of collision, if a collision occurred.
 * @returns Vector2
 */
  getCollisionNormal(): Vector2;
/**
 * Returns the point of collision in global coordinates, if a collision occurred.
 * @returns Vector2
 */
  getCollisionPoint(): Vector2;
/**
 * Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`.
 * @returns float
 */
  getCollisionSafeFraction(): float;
/**
 * Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`.
 * @returns float
 */
  getCollisionUnsafeFraction(): float;
/**
 * Returns the moving object's remaining movement vector.
 * @returns Vector2
 */
  getRemainder(): Vector2;
/**
 * Returns the moving object's travel before collision.
 * @returns Vector2
 */
  getTravel(): Vector2;
}
