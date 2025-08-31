import type { GodotArray, GodotDictionary, PhysicsBody3D, PhysicsDirectBodyState3D, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * A physics body used to make bones in a `Skeleton3D` react to physics.
 * 
 * The `PhysicalBone3D` node is a physics body that can be used to make bones in a `Skeleton3D` react to physics.
 * 
 * **Note:** In order to detect physical bones with raycasts, the `SkeletonModifier3D.active` property of the parent `PhysicalBoneSimulator3D` must be `true` and the `Skeleton3D`'s bone must be assigned to `PhysicalBone3D` correctly; it means that `get_bone_id` should return a valid id (`>= 0`).
 */
export class PhysicalBone3D extends PhysicsBody3D {
/**
 * Damps the body's rotation. By default, the body will use the `ProjectSettings.physics/3d/default_angular_damp` project setting or any value override set by an `Area3D` the body is in. Depending on `angular_damp_mode`, you can set `angular_damp` to be added to or to replace the body's damping value.
 * See `ProjectSettings.physics/3d/default_angular_damp` for more details about damping.
 */
  angularDamp: float;
/**
 * Defines how `angular_damp` is applied. See `DampMode` for possible values.
 */
  angularDampMode: int;
/**
 * The PhysicalBone3D's rotational velocity in *radians* per second.
 */
  angularVelocity: Vector3;
/**
 * Sets the body's transform.
 */
  bodyOffset: Transform3D;
/**
 * The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).
 * 
 * **Note:** Even with `bounce` set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a `PhysicalBone3D` that preserves all its energy over time, set `bounce` to `1.0`, `linear_damp_mode` to `DAMP_MODE_REPLACE`, `linear_damp` to `0.0`, `angular_damp_mode` to `DAMP_MODE_REPLACE`, and `angular_damp` to `0.0`.
 */
  bounce: float;
/**
 * If `true`, the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force.
 */
  canSleep: boolean;
/**
 * If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the `_integrate_forces` method, if that virtual method is overridden.
 * Setting this property will call the method `PhysicsServer3D.body_set_omit_force_integration` internally.
 */
  customIntegrator: boolean;
/**
 * The body's friction, from `0` (frictionless) to `1` (max friction).
 */
  friction: float;
/**
 * This is multiplied by `ProjectSettings.physics/3d/default_gravity` to produce this body's gravity. For example, a value of `1.0` will apply normal gravity, `2.0` will apply double the gravity, and `0.5` will apply half the gravity to this body.
 */
  gravityScale: float;
/**
 * Sets the joint's transform.
 */
  jointOffset: Transform3D;
/**
 * Sets the joint's rotation in radians.
 */
  jointRotation: Vector3;
/**
 * Sets the joint type. See `JointType` for possible values.
 */
  jointType: int;
/**
 * Damps the body's movement. By default, the body will use `ProjectSettings.physics/3d/default_linear_damp` or any value override set by an `Area3D` the body is in. Depending on `linear_damp_mode`, `linear_damp` may be added to or replace the body's damping value.
 * See `ProjectSettings.physics/3d/default_linear_damp` for more details about damping.
 */
  linearDamp: float;
/**
 * Defines how `linear_damp` is applied. See `DampMode` for possible values.
 */
  linearDampMode: int;
/**
 * The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use `_integrate_forces` as your process loop for precise control of the body state.
 */
  linearVelocity: Vector3;
/**
 * The body's mass.
 */
  mass: float;
/**
 * Applies a directional impulse without affecting rotation.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_integrate_forces" functions otherwise).
 * This is equivalent to using `apply_impulse` at the body's center of mass.
 * @param impulse Vector3
 */
  applyCentralImpulse(impulse: Vector3): void;
/**
 * Applies a positioned impulse to the PhysicsBone3D.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_integrate_forces" functions otherwise).
 * `position` is the offset from the PhysicsBone3D origin in global coordinates.
 * @param impulse Vector3
 * @param position Vector3 (optional, default: Vector3(0, 0, 0))
 */
  applyImpulse(impulse: Vector3, position?: Vector3): void;
/**
 * Returns the unique identifier of the PhysicsBone3D.
 * @returns int
 */
  getBoneId(): int;
/**
 * Returns `true` if the PhysicsBone3D is allowed to simulate physics.
 * @returns boolean
 */
  getSimulatePhysics(): boolean;
/**
 * Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the `custom_integrator` property allows you to disable the standard force integration and do fully custom force integration for a body.
 * @param state PhysicsDirectBodyState3D
 */
  private integrateForces(state: PhysicsDirectBodyState3D): void;
/**
 * Returns `true` if the PhysicsBone3D is currently simulating physics.
 * @returns boolean
 */
  isSimulatingPhysics(): boolean;
/**
 * In this mode, the body's damping value is added to any value set in areas or the default value.
 */
  static readonly DAMP_MODE_COMBINE: int;
/**
 * In this mode, the body's damping value replaces any value set in areas or the default value.
 */
  static readonly DAMP_MODE_REPLACE: int;
/**
 * No joint is applied to the PhysicsBone3D.
 */
  static readonly JOINT_TYPE_NONE: int;
/**
 * A pin joint is applied to the PhysicsBone3D.
 */
  static readonly JOINT_TYPE_PIN: int;
/**
 * A cone joint is applied to the PhysicsBone3D.
 */
  static readonly JOINT_TYPE_CONE: int;
/**
 * A hinge joint is applied to the PhysicsBone3D.
 */
  static readonly JOINT_TYPE_HINGE: int;
/**
 * A slider joint is applied to the PhysicsBone3D.
 */
  static readonly JOINT_TYPE_SLIDER: int;
/**
 * A 6 degrees of freedom joint is applied to the PhysicsBone3D.
 */
  static readonly JOINT_TYPE_6DOF: int;
}
