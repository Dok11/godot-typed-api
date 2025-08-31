import type { GodotArray, GodotDictionary, Node3D, RID, Shape3D, float, int } from "../index.d.ts";
/**
 * A 3D raycast that dynamically moves its children near the collision point.
 * 
 * `SpringArm3D` casts a ray or a shape along its Z axis and moves all its direct children to the collision point, with an optional margin. This is useful for 3rd person cameras that move closer to the player when inside a tight space (you may need to exclude the player's collider from the `SpringArm3D`'s collision check).
 */
export class SpringArm3D extends Node3D {
/**
 * The layers against which the collision check shall be done. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * When the collision check is made, a candidate length for the SpringArm3D is given.
 * The margin is then subtracted to this length and the translation is applied to the child objects of the SpringArm3D.
 * This margin is useful for when the SpringArm3D has a `Camera3D` as a child node: without the margin, the `Camera3D` would be placed on the exact point of collision, while with the margin the `Camera3D` would be placed close to the point of collision.
 */
  margin: float;
/**
 * The `Shape3D` to use for the SpringArm3D.
 * When the shape is set, the SpringArm3D will cast the `Shape3D` on its z axis instead of performing a ray cast.
 */
  shape: Shape3D;
/**
 * The maximum extent of the SpringArm3D. This is used as a length for both the ray and the shape cast used internally to calculate the desired position of the SpringArm3D's child nodes.
 * To know more about how to perform a shape cast or a ray cast, please consult the `PhysicsDirectSpaceState3D` documentation.
 */
  springLength: float;
/**
 * Adds the `PhysicsBody3D` object with the given `RID` to the list of `PhysicsBody3D` objects excluded from the collision check.
 * @param RID RID
 */
  addExcludedObject(RID: RID): void;
/**
 * Clears the list of `PhysicsBody3D` objects excluded from the collision check.
 */
  clearExcludedObjects(): void;
/**
 * Returns the spring arm's current length.
 * @returns float
 */
  getHitLength(): float;
/**
 * Removes the given `RID` from the list of `PhysicsBody3D` objects excluded from the collision check.
 * @param RID RID
 * @returns boolean
 */
  removeExcludedObject(RID: RID): boolean;
}
