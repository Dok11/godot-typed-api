import type { GodotArray, GodotDictionary, Object, RID, RefCounted, Vector3, float, int } from "../index.d.ts";
/**
 * Describes the motion and collision result from `PhysicsServer3D.body_test_motion`.
 * 
 * Describes the motion and collision result from `PhysicsServer3D.body_test_motion`.
 */
export class PhysicsTestMotionResult3D extends RefCounted {
/**
 * Returns the colliding body's attached `Object` given a collision index (the deepest collision by default), if a collision occurred.
 * @param collisionIndex int (optional, default: 0)
 * @returns Object
 */
  getCollider(collisionIndex?: int): Object;
/**
 * Returns the unique instance ID of the colliding body's attached `Object` given a collision index (the deepest collision by default), if a collision occurred. See `Object.get_instance_id`.
 * @param collisionIndex int (optional, default: 0)
 * @returns int
 */
  getColliderId(collisionIndex?: int): int;
/**
 * Returns the colliding body's `RID` used by the `PhysicsServer3D` given a collision index (the deepest collision by default), if a collision occurred.
 * @param collisionIndex int (optional, default: 0)
 * @returns RID
 */
  getColliderRid(collisionIndex?: int): RID;
/**
 * Returns the colliding body's shape index given a collision index (the deepest collision by default), if a collision occurred. See `CollisionObject3D`.
 * @param collisionIndex int (optional, default: 0)
 * @returns int
 */
  getColliderShape(collisionIndex?: int): int;
/**
 * Returns the colliding body's velocity given a collision index (the deepest collision by default), if a collision occurred.
 * @param collisionIndex int (optional, default: 0)
 * @returns Vector3
 */
  getColliderVelocity(collisionIndex?: int): Vector3;
/**
 * Returns the number of detected collisions.
 * @returns int
 */
  getCollisionCount(): int;
/**
 * Returns the length of overlap along the collision normal given a collision index (the deepest collision by default), if a collision occurred.
 * @param collisionIndex int (optional, default: 0)
 * @returns float
 */
  getCollisionDepth(collisionIndex?: int): float;
/**
 * Returns the moving object's colliding shape given a collision index (the deepest collision by default), if a collision occurred.
 * @param collisionIndex int (optional, default: 0)
 * @returns int
 */
  getCollisionLocalShape(collisionIndex?: int): int;
/**
 * Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default), if a collision occurred.
 * @param collisionIndex int (optional, default: 0)
 * @returns Vector3
 */
  getCollisionNormal(collisionIndex?: int): Vector3;
/**
 * Returns the point of collision in global coordinates given a collision index (the deepest collision by default), if a collision occurred.
 * @param collisionIndex int (optional, default: 0)
 * @returns Vector3
 */
  getCollisionPoint(collisionIndex?: int): Vector3;
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
 * @returns Vector3
 */
  getRemainder(): Vector3;
/**
 * Returns the moving object's travel before collision.
 * @returns Vector3
 */
  getTravel(): Vector3;
}
