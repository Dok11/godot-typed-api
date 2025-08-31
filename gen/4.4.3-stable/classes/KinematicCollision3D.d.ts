import type { GodotArray, GodotDictionary, Object, RID, RefCounted, Vector3, float, int } from "../index.d.ts";
/**
 * Holds collision data from the movement of a `PhysicsBody3D`.
 * 
 * Holds collision data from the movement of a `PhysicsBody3D`, usually from `PhysicsBody3D.move_and_collide`. When a `PhysicsBody3D` is moved, it stops if it detects a collision with another body. If a collision is detected, a `KinematicCollision3D` object is returned.
 * The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.
 */
export class KinematicCollision3D extends RefCounted {
/**
 * Returns the collision angle according to `up_direction`, which is `Vector3.UP` by default. This value is always positive.
 * @param collisionIndex int (optional, default: 0)
 * @param upDirection Vector3 (optional, default: Vector3(0, 1, 0))
 * @returns float
 */
  getAngle(collisionIndex?: int, upDirection?: Vector3): float;
/**
 * Returns the colliding body's attached `Object` given a collision index (the deepest collision by default).
 * @param collisionIndex int (optional, default: 0)
 * @returns Object
 */
  getCollider(collisionIndex?: int): Object;
/**
 * Returns the unique instance ID of the colliding body's attached `Object` given a collision index (the deepest collision by default). See `Object.get_instance_id`.
 * @param collisionIndex int (optional, default: 0)
 * @returns int
 */
  getColliderId(collisionIndex?: int): int;
/**
 * Returns the colliding body's `RID` used by the `PhysicsServer3D` given a collision index (the deepest collision by default).
 * @param collisionIndex int (optional, default: 0)
 * @returns RID
 */
  getColliderRid(collisionIndex?: int): RID;
/**
 * Returns the colliding body's shape given a collision index (the deepest collision by default).
 * @param collisionIndex int (optional, default: 0)
 * @returns Object
 */
  getColliderShape(collisionIndex?: int): Object;
/**
 * Returns the colliding body's shape index given a collision index (the deepest collision by default). See `CollisionObject3D`.
 * @param collisionIndex int (optional, default: 0)
 * @returns int
 */
  getColliderShapeIndex(collisionIndex?: int): int;
/**
 * Returns the colliding body's velocity given a collision index (the deepest collision by default).
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
 * Returns the colliding body's length of overlap along the collision normal.
 * @returns float
 */
  getDepth(): float;
/**
 * Returns the moving object's colliding shape given a collision index (the deepest collision by default).
 * @param collisionIndex int (optional, default: 0)
 * @returns Object
 */
  getLocalShape(collisionIndex?: int): Object;
/**
 * Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default).
 * @param collisionIndex int (optional, default: 0)
 * @returns Vector3
 */
  getNormal(collisionIndex?: int): Vector3;
/**
 * Returns the point of collision in global coordinates given a collision index (the deepest collision by default).
 * @param collisionIndex int (optional, default: 0)
 * @returns Vector3
 */
  getPosition(collisionIndex?: int): Vector3;
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
