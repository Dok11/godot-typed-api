import type { GodotArray, GodotDictionary, Object, PhysicsDirectBodyState2D, PhysicsDirectSpaceState2D, RID, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Provides virtual methods that can be overridden to create custom `PhysicsDirectBodyState2D` implementations.
 * 
 * This class extends `PhysicsDirectBodyState2D` by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 * Intended for use with GDExtension to create custom implementations of `PhysicsDirectBodyState2D`.
 */
export class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
/**
 * Overridable version of `PhysicsDirectBodyState2D.add_constant_central_force`.
 * @param force Vector2
 */
  private addConstantCentralForce(force: Vector2): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.add_constant_force`.
 * @param force Vector2
 * @param position Vector2
 */
  private addConstantForce(force: Vector2, position: Vector2): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.add_constant_torque`.
 * @param torque float
 */
  private addConstantTorque(torque: float): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.apply_central_force`.
 * @param force Vector2
 */
  private applyCentralForce(force: Vector2): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.apply_central_impulse`.
 * @param impulse Vector2
 */
  private applyCentralImpulse(impulse: Vector2): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.apply_force`.
 * @param force Vector2
 * @param position Vector2
 */
  private applyForce(force: Vector2, position: Vector2): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.apply_impulse`.
 * @param impulse Vector2
 * @param position Vector2
 */
  private applyImpulse(impulse: Vector2, position: Vector2): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.apply_torque`.
 * @param torque float
 */
  private applyTorque(torque: float): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.apply_torque_impulse`.
 * @param impulse float
 */
  private applyTorqueImpulse(impulse: float): void;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.angular_velocity` and its respective getter.
 * @returns float
 */
  private getAngularVelocity(): float;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.center_of_mass` and its respective getter.
 * @returns Vector2
 */
  private getCenterOfMass(): Vector2;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.center_of_mass_local` and its respective getter.
 * @returns Vector2
 */
  private getCenterOfMassLocal(): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_constant_force`.
 * @returns Vector2
 */
  private getConstantForce(): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_constant_torque`.
 * @returns float
 */
  private getConstantTorque(): float;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_collider`.
 * @param contactIdx int
 * @returns RID
 */
  private getContactCollider(contactIdx: int): RID;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_collider_id`.
 * @param contactIdx int
 * @returns int
 */
  private getContactColliderId(contactIdx: int): int;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_collider_object`.
 * @param contactIdx int
 * @returns Object
 */
  private getContactColliderObject(contactIdx: int): Object;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_collider_position`.
 * @param contactIdx int
 * @returns Vector2
 */
  private getContactColliderPosition(contactIdx: int): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_collider_shape`.
 * @param contactIdx int
 * @returns int
 */
  private getContactColliderShape(contactIdx: int): int;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_collider_velocity_at_position`.
 * @param contactIdx int
 * @returns Vector2
 */
  private getContactColliderVelocityAtPosition(contactIdx: int): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_count`.
 * @returns int
 */
  private getContactCount(): int;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_impulse`.
 * @param contactIdx int
 * @returns Vector2
 */
  private getContactImpulse(contactIdx: int): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_local_normal`.
 * @param contactIdx int
 * @returns Vector2
 */
  private getContactLocalNormal(contactIdx: int): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_local_position`.
 * @param contactIdx int
 * @returns Vector2
 */
  private getContactLocalPosition(contactIdx: int): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_local_shape`.
 * @param contactIdx int
 * @returns int
 */
  private getContactLocalShape(contactIdx: int): int;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_contact_local_velocity_at_position`.
 * @param contactIdx int
 * @returns Vector2
 */
  private getContactLocalVelocityAtPosition(contactIdx: int): Vector2;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.inverse_inertia` and its respective getter.
 * @returns float
 */
  private getInverseInertia(): float;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.inverse_mass` and its respective getter.
 * @returns float
 */
  private getInverseMass(): float;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.linear_velocity` and its respective getter.
 * @returns Vector2
 */
  private getLinearVelocity(): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_space_state`.
 * @returns PhysicsDirectSpaceState2D
 */
  private getSpaceState(): PhysicsDirectSpaceState2D;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.step` and its respective getter.
 * @returns float
 */
  private getStep(): float;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.total_angular_damp` and its respective getter.
 * @returns float
 */
  private getTotalAngularDamp(): float;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.total_gravity` and its respective getter.
 * @returns Vector2
 */
  private getTotalGravity(): Vector2;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.total_linear_damp` and its respective getter.
 * @returns float
 */
  private getTotalLinearDamp(): float;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.transform` and its respective getter.
 * @returns Transform2D
 */
  private getTransform(): Transform2D;
/**
 * Overridable version of `PhysicsDirectBodyState2D.get_velocity_at_local_position`.
 * @param localPosition Vector2
 * @returns Vector2
 */
  private getVelocityAtLocalPosition(localPosition: Vector2): Vector2;
/**
 * Overridable version of `PhysicsDirectBodyState2D.integrate_forces`.
 */
  private integrateForces(): void;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.sleeping` and its respective getter.
 * @returns boolean
 */
  private isSleeping(): boolean;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.angular_velocity` and its respective setter.
 * @param velocity float
 */
  private setAngularVelocity(velocity: float): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.set_constant_force`.
 * @param force Vector2
 */
  private setConstantForce(force: Vector2): void;
/**
 * Overridable version of `PhysicsDirectBodyState2D.set_constant_torque`.
 * @param torque float
 */
  private setConstantTorque(torque: float): void;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.linear_velocity` and its respective setter.
 * @param velocity Vector2
 */
  private setLinearVelocity(velocity: Vector2): void;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.sleeping` and its respective setter.
 * @param enabled boolean
 */
  private setSleepState(enabled: boolean): void;
/**
 * Implement to override the behavior of `PhysicsDirectBodyState2D.transform` and its respective setter.
 * @param transform Transform2D
 */
  private setTransform(transform: Transform2D): void;
}
