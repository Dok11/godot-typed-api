import type { CollisionObject3D, GodotArray, GodotDictionary, KinematicCollision3D, Node, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Abstract base class for 3D game objects affected by physics.
 * 
 * `PhysicsBody3D` is an abstract base class for 3D game objects affected by physics. All 3D physics bodies inherit from it.
 * 
 * **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.
 */
export class PhysicsBody3D extends CollisionObject3D {
/**
 * Lock the body's rotation in the X axis.
 */
  axisLockAngularX: boolean;
/**
 * Lock the body's rotation in the Y axis.
 */
  axisLockAngularY: boolean;
/**
 * Lock the body's rotation in the Z axis.
 */
  axisLockAngularZ: boolean;
/**
 * Lock the body's linear movement in the X axis.
 */
  axisLockLinearX: boolean;
/**
 * Lock the body's linear movement in the Y axis.
 */
  axisLockLinearY: boolean;
/**
 * Lock the body's linear movement in the Z axis.
 */
  axisLockLinearZ: boolean;
/**
 * Adds a body to the list of bodies that this body can't collide with.
 * @param body Node
 */
  addCollisionExceptionWith(body: Node): void;
/**
 * Returns `true` if the specified linear or rotational `axis` is locked.
 * @param axis int
 * @returns boolean
 */
  getAxisLock(axis: int): boolean;
/**
 * Returns an array of nodes that were added as collision exceptions for this body.
 * @returns PhysicsBody3D[]
 */
  getCollisionExceptions(): PhysicsBody3D[];
/**
 * Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from `Area3D` nodes and the global world gravity.
 * @returns Vector3
 */
  getGravity(): Vector3;
/**
 * Moves the body along the vector `motion`. In order to be frame rate independent in `Node._physics_process` or `Node._process`, `motion` should be computed using `delta`.
 * The body will stop if it collides. Returns a `KinematicCollision3D`, which contains information about the collision when stopped, or when touching another body along the motion.
 * If `test_only` is `true`, the body does not move but the would-be collision information is given.
 * `safe_margin` is the extra margin used for collision recovery (see `CharacterBody3D.safe_margin` for more details).
 * If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by `CharacterBody3D` for improving floor detection during floor snapping.
 * `max_collisions` allows to retrieve more than one collision result.
 * @param motion Vector3
 * @param testOnly boolean (optional, default: false)
 * @param safeMargin float (optional, default: 0.001)
 * @param recoveryAsCollision boolean (optional, default: false)
 * @param maxCollisions int (optional, default: 1)
 * @returns KinematicCollision3D
 */
  moveAndCollide(motion: Vector3, testOnly?: boolean, safeMargin?: float, recoveryAsCollision?: boolean, maxCollisions?: int): KinematicCollision3D;
/**
 * Removes a body from the list of bodies that this body can't collide with.
 * @param body Node
 */
  removeCollisionExceptionWith(body: Node): void;
/**
 * Locks or unlocks the specified linear or rotational `axis` depending on the value of `lock`.
 * @param axis int
 * @param lock boolean
 */
  setAxisLock(axis: int, lock: boolean): void;
/**
 * Checks for collisions without moving the body. In order to be frame rate independent in `Node._physics_process` or `Node._process`, `motion` should be computed using `delta`.
 * Virtually sets the node's position, scale and rotation to that of the given `Transform3D`, then tries to move the body along the vector `motion`. Returns `true` if a collision would stop the body from moving along the whole path.
 * `collision` is an optional object of type `KinematicCollision3D`, which contains additional information about the collision when stopped, or when touching another body along the motion.
 * `safe_margin` is the extra margin used for collision recovery (see `CharacterBody3D.safe_margin` for more details).
 * If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would *touch* any other bodies.
 * `max_collisions` allows to retrieve more than one collision result.
 * @param from_ Transform3D
 * @param motion Vector3
 * @param collision KinematicCollision3D (optional, default: null)
 * @param safeMargin float (optional, default: 0.001)
 * @param recoveryAsCollision boolean (optional, default: false)
 * @param maxCollisions int (optional, default: 1)
 * @returns boolean
 */
  testMove(from_: Transform3D, motion: Vector3, collision?: KinematicCollision3D, safeMargin?: float, recoveryAsCollision?: boolean, maxCollisions?: int): boolean;
}
