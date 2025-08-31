import type { Basis, GodotArray, GodotDictionary, Object, PhysicsDirectSpaceState3D, RID, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Provides direct access to a physics body in the `PhysicsServer3D`.
 * 
 * Provides direct access to a physics body in the `PhysicsServer3D`, allowing safe changes to physics properties. This object is passed via the direct state callback of `RigidBody3D`, and is intended for changing the direct state of that body. See `RigidBody3D._integrate_forces`.
 */
export class PhysicsDirectBodyState3D extends Object {
/**
 * The body's rotational velocity in *radians* per second.
 */
  angularVelocity: Vector3;
/**
 * The body's center of mass position relative to the body's center in the global coordinate system.
 */
  centerOfMass: Vector3;
/**
 * The body's center of mass position in the body's local coordinate system.
 */
  centerOfMassLocal: Vector3;
/**
 * The inverse of the inertia of the body.
 */
  inverseInertia: Vector3;
/**
 * The inverse of the inertia tensor of the body.
 */
  inverseInertiaTensor: Basis;
/**
 * The inverse of the mass of the body.
 */
  inverseMass: float;
/**
 * The body's linear velocity in units per second.
 */
  linearVelocity: Vector3;
  principalInertiaAxes: Basis;
/**
 * If `true`, this body is currently sleeping (not active).
 */
  sleeping: boolean;
/**
 * The timestep (delta) used for the simulation.
 */
  step: float;
/**
 * The rate at which the body stops rotating, if there are not any other forces moving it.
 */
  totalAngularDamp: float;
/**
 * The total gravity vector being currently applied to this body.
 */
  totalGravity: Vector3;
/**
 * The rate at which the body stops moving, if there are not any other forces moving it.
 */
  totalLinearDamp: float;
/**
 * The body's transformation matrix.
 */
  transform: Transform3D;
/**
 * Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.
 * This is equivalent to using `add_constant_force` at the body's center of mass.
 * @param force Vector3 (optional, default: Vector3(0, 0, 0))
 */
  addConstantCentralForce(force?: Vector3): void;
/**
 * Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.
 * `position` is the offset from the body origin in global coordinates.
 * @param force Vector3
 * @param position Vector3 (optional, default: Vector3(0, 0, 0))
 */
  addConstantForce(force: Vector3, position?: Vector3): void;
/**
 * Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`.
 * @param torque Vector3
 */
  addConstantTorque(torque: Vector3): void;
/**
 * Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.
 * This is equivalent to using `apply_force` at the body's center of mass.
 * @param force Vector3 (optional, default: Vector3(0, 0, 0))
 */
  applyCentralForce(force?: Vector3): void;
/**
 * Applies a directional impulse without affecting rotation.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * This is equivalent to using `apply_impulse` at the body's center of mass.
 * @param impulse Vector3 (optional, default: Vector3(0, 0, 0))
 */
  applyCentralImpulse(impulse?: Vector3): void;
/**
 * Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.
 * `position` is the offset from the body origin in global coordinates.
 * @param force Vector3
 * @param position Vector3 (optional, default: Vector3(0, 0, 0))
 */
  applyForce(force: Vector3, position?: Vector3): void;
/**
 * Applies a positioned impulse to the body.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * `position` is the offset from the body origin in global coordinates.
 * @param impulse Vector3
 * @param position Vector3 (optional, default: Vector3(0, 0, 0))
 */
  applyImpulse(impulse: Vector3, position?: Vector3): void;
/**
 * Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.
 * 
 * **Note:** `inverse_inertia` is required for this to work. To have `inverse_inertia`, an active `CollisionShape3D` must be a child of the node, or you can manually set `inverse_inertia`.
 * @param torque Vector3
 */
  applyTorque(torque: Vector3): void;
/**
 * Applies a rotational impulse to the body without affecting the position.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * 
 * **Note:** `inverse_inertia` is required for this to work. To have `inverse_inertia`, an active `CollisionShape3D` must be a child of the node, or you can manually set `inverse_inertia`.
 * @param impulse Vector3
 */
  applyTorqueImpulse(impulse: Vector3): void;
/**
 * Returns the body's total constant positional forces applied during each physics update.
 * See `add_constant_force` and `add_constant_central_force`.
 * @returns Vector3
 */
  getConstantForce(): Vector3;
/**
 * Returns the body's total constant rotational forces applied during each physics update.
 * See `add_constant_torque`.
 * @returns Vector3
 */
  getConstantTorque(): Vector3;
/**
 * Returns the collider's `RID`.
 * @param contactIdx int
 * @returns RID
 */
  getContactCollider(contactIdx: int): RID;
/**
 * Returns the collider's object id.
 * @param contactIdx int
 * @returns int
 */
  getContactColliderId(contactIdx: int): int;
/**
 * Returns the collider object.
 * @param contactIdx int
 * @returns Object
 */
  getContactColliderObject(contactIdx: int): Object;
/**
 * Returns the position of the contact point on the collider in the global coordinate system.
 * @param contactIdx int
 * @returns Vector3
 */
  getContactColliderPosition(contactIdx: int): Vector3;
/**
 * Returns the collider's shape index.
 * @param contactIdx int
 * @returns int
 */
  getContactColliderShape(contactIdx: int): int;
/**
 * Returns the linear velocity vector at the collider's contact point.
 * @param contactIdx int
 * @returns Vector3
 */
  getContactColliderVelocityAtPosition(contactIdx: int): Vector3;
/**
 * Returns the number of contacts this body has with other bodies.
 * 
 * **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See `RigidBody3D.contact_monitor`.
 * @returns int
 */
  getContactCount(): int;
/**
 * Impulse created by the contact.
 * @param contactIdx int
 * @returns Vector3
 */
  getContactImpulse(contactIdx: int): Vector3;
/**
 * Returns the local normal at the contact point.
 * @param contactIdx int
 * @returns Vector3
 */
  getContactLocalNormal(contactIdx: int): Vector3;
/**
 * Returns the position of the contact point on the body in the global coordinate system.
 * @param contactIdx int
 * @returns Vector3
 */
  getContactLocalPosition(contactIdx: int): Vector3;
/**
 * Returns the local shape index of the collision.
 * @param contactIdx int
 * @returns int
 */
  getContactLocalShape(contactIdx: int): int;
/**
 * Returns the linear velocity vector at the body's contact point.
 * @param contactIdx int
 * @returns Vector3
 */
  getContactLocalVelocityAtPosition(contactIdx: int): Vector3;
/**
 * Returns the current state of the space, useful for queries.
 * @returns PhysicsDirectSpaceState3D
 */
  getSpaceState(): PhysicsDirectSpaceState3D;
/**
 * Returns the body's velocity at the given relative position, including both translation and rotation.
 * @param localPosition Vector3
 * @returns Vector3
 */
  getVelocityAtLocalPosition(localPosition: Vector3): Vector3;
/**
 * Updates the body's linear and angular velocity by applying gravity and damping for the equivalent of one physics tick.
 */
  integrateForces(): void;
/**
 * Sets the body's total constant positional forces applied during each physics update.
 * See `add_constant_force` and `add_constant_central_force`.
 * @param force Vector3
 */
  setConstantForce(force: Vector3): void;
/**
 * Sets the body's total constant rotational forces applied during each physics update.
 * See `add_constant_torque`.
 * @param torque Vector3
 */
  setConstantTorque(torque: Vector3): void;
}
