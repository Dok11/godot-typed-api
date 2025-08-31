import type { GodotArray, GodotDictionary, RID, RefCounted, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Provides parameters for `PhysicsServer2D.body_test_motion`.
 * 
 * By changing various properties of this object, such as the motion, you can configure the parameters for `PhysicsServer2D.body_test_motion`.
 */
export class PhysicsTestMotionParameters2D extends RefCounted {
/**
 * If set to `true`, shapes of type `PhysicsServer2D.SHAPE_SEPARATION_RAY` are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.
 * If set to `false`, shapes of type `PhysicsServer2D.SHAPE_SEPARATION_RAY` are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.
 */
  collideSeparationRay: boolean;
/**
 * Optional array of body `RID` to exclude from collision. Use `CollisionObject2D.get_rid` to get the `RID` associated with a `CollisionObject2D`-derived node.
 */
  excludeBodies: RID[];
/**
 * Optional array of object unique instance ID to exclude from collision. See `Object.get_instance_id`.
 */
  excludeObjects: int[];
/**
 * Transform in global space where the motion should start. Usually set to `Node2D.global_transform` for the current body's transform.
 */
  from_: Transform2D;
/**
 * Increases the size of the shapes involved in the collision detection.
 */
  margin: float;
/**
 * Motion vector to define the length and direction of the motion to test.
 */
  motion: Vector2;
/**
 * If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by `CharacterBody2D` for improving floor detection during floor snapping.
 * If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.
 */
  recoveryAsCollision: boolean;
}
