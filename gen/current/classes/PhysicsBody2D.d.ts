import type { CollisionObject2D, GodotArray, GodotDictionary, KinematicCollision2D, Node, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Abstract base class for 2D game objects affected by physics.
 * 
 * `PhysicsBody2D` is an abstract base class for 2D game objects affected by physics. All 2D physics bodies inherit from it.
 */
export class PhysicsBody2D extends CollisionObject2D {
  inputPickable: boolean;
/**
 * Adds a body to the list of bodies that this body can't collide with.
 * @param body Node
 */
  addCollisionExceptionWith(body: Node): void;
/**
 * Returns an array of nodes that were added as collision exceptions for this body.
 * @returns PhysicsBody2D[]
 */
  getCollisionExceptions(): PhysicsBody2D[];
/**
 * Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from `Area2D` nodes and the global world gravity.
 * @returns Vector2
 */
  getGravity(): Vector2;
/**
 * Moves the body along the vector `motion`. In order to be frame rate independent in `Node._physics_process` or `Node._process`, `motion` should be computed using `delta`.
 * Returns a `KinematicCollision2D`, which contains information about the collision when stopped, or when touching another body along the motion.
 * If `test_only` is `true`, the body does not move but the would-be collision information is given.
 * `safe_margin` is the extra margin used for collision recovery (see `CharacterBody2D.safe_margin` for more details).
 * If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by `CharacterBody2D` for improving floor detection during floor snapping.
 * @param motion Vector2
 * @param testOnly boolean (optional, default: false)
 * @param safeMargin float (optional, default: 0.08)
 * @param recoveryAsCollision boolean (optional, default: false)
 * @returns KinematicCollision2D
 */
  moveAndCollide(motion: Vector2, testOnly?: boolean, safeMargin?: float, recoveryAsCollision?: boolean): KinematicCollision2D;
/**
 * Removes a body from the list of bodies that this body can't collide with.
 * @param body Node
 */
  removeCollisionExceptionWith(body: Node): void;
/**
 * Checks for collisions without moving the body. In order to be frame rate independent in `Node._physics_process` or `Node._process`, `motion` should be computed using `delta`.
 * Virtually sets the node's position, scale and rotation to that of the given `Transform2D`, then tries to move the body along the vector `motion`. Returns `true` if a collision would stop the body from moving along the whole path.
 * `collision` is an optional object of type `KinematicCollision2D`, which contains additional information about the collision when stopped, or when touching another body along the motion.
 * `safe_margin` is the extra margin used for collision recovery (see `CharacterBody2D.safe_margin` for more details).
 * If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would *touch* any other bodies.
 * @param from_ Transform2D
 * @param motion Vector2
 * @param collision KinematicCollision2D (optional, default: null)
 * @param safeMargin float (optional, default: 0.08)
 * @param recoveryAsCollision boolean (optional, default: false)
 * @returns boolean
 */
  testMove(from_: Transform2D, motion: Vector2, collision?: KinematicCollision2D, safeMargin?: float, recoveryAsCollision?: boolean): boolean;
}
