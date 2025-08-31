import type { GodotArray, GodotDictionary, Object, RID, RefCounted, Vector2, float, int } from "../index.d.ts";
/**
 * Holds collision data from the movement of a `PhysicsBody2D`.
 * 
 * Holds collision data from the movement of a `PhysicsBody2D`, usually from `PhysicsBody2D.move_and_collide`. When a `PhysicsBody2D` is moved, it stops if it detects a collision with another body. If a collision is detected, a `KinematicCollision2D` object is returned.
 * The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.
 */
export class KinematicCollision2D extends RefCounted {
/**
 * Returns the collision angle according to `up_direction`, which is `Vector2.UP` by default. This value is always positive.
 * @param upDirection Vector2 (optional, default: Vector2(0, -1))
 * @returns float
 */
  getAngle(upDirection?: Vector2): float;
/**
 * Returns the colliding body's attached `Object`.
 * @returns Object
 */
  getCollider(): Object;
/**
 * Returns the unique instance ID of the colliding body's attached `Object`. See `Object.get_instance_id`.
 * @returns int
 */
  getColliderId(): int;
/**
 * Returns the colliding body's `RID` used by the `PhysicsServer2D`.
 * @returns RID
 */
  getColliderRid(): RID;
/**
 * Returns the colliding body's shape.
 * @returns Object
 */
  getColliderShape(): Object;
/**
 * Returns the colliding body's shape index. See `CollisionObject2D`.
 * @returns int
 */
  getColliderShapeIndex(): int;
/**
 * Returns the colliding body's velocity.
 * @returns Vector2
 */
  getColliderVelocity(): Vector2;
/**
 * Returns the colliding body's length of overlap along the collision normal.
 * @returns float
 */
  getDepth(): float;
/**
 * Returns the moving object's colliding shape.
 * @returns Object
 */
  getLocalShape(): Object;
/**
 * Returns the colliding body's shape's normal at the point of collision.
 * @returns Vector2
 */
  getNormal(): Vector2;
/**
 * Returns the point of collision in global coordinates.
 * @returns Vector2
 */
  getPosition(): Vector2;
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
