import type { Basis, GodotArray, GodotDictionary, Object, PhysicsDirectBodyState3D, PhysicsDirectSpaceState3D, RID, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Provides virtual methods that can be overridden to create custom `PhysicsDirectBodyState3D` implementations.
 * 
 * This class extends `PhysicsDirectBodyState3D` by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 * Intended for use with GDExtension to create custom implementations of `PhysicsDirectBodyState3D`.
 */
export class PhysicsDirectBodyState3DExtension extends PhysicsDirectBodyState3D {
/**
 * @param force Vector3
 */
  private addConstantCentralForce(force: Vector3): void;
/**
 * @param force Vector3
 * @param position Vector3
 */
  private addConstantForce(force: Vector3, position: Vector3): void;
/**
 * @param torque Vector3
 */
  private addConstantTorque(torque: Vector3): void;
/**
 * @param force Vector3
 */
  private applyCentralForce(force: Vector3): void;
/**
 * @param impulse Vector3
 */
  private applyCentralImpulse(impulse: Vector3): void;
/**
 * @param force Vector3
 * @param position Vector3
 */
  private applyForce(force: Vector3, position: Vector3): void;
/**
 * @param impulse Vector3
 * @param position Vector3
 */
  private applyImpulse(impulse: Vector3, position: Vector3): void;
/**
 * @param torque Vector3
 */
  private applyTorque(torque: Vector3): void;
/**
 * @param impulse Vector3
 */
  private applyTorqueImpulse(impulse: Vector3): void;
/**
 * @returns Vector3
 */
  private getAngularVelocity(): Vector3;
/**
 * @returns Vector3
 */
  private getCenterOfMass(): Vector3;
/**
 * @returns Vector3
 */
  private getCenterOfMassLocal(): Vector3;
/**
 * @returns Vector3
 */
  private getConstantForce(): Vector3;
/**
 * @returns Vector3
 */
  private getConstantTorque(): Vector3;
/**
 * @param contactIdx int
 * @returns RID
 */
  private getContactCollider(contactIdx: int): RID;
/**
 * @param contactIdx int
 * @returns int
 */
  private getContactColliderId(contactIdx: int): int;
/**
 * @param contactIdx int
 * @returns Object
 */
  private getContactColliderObject(contactIdx: int): Object;
/**
 * @param contactIdx int
 * @returns Vector3
 */
  private getContactColliderPosition(contactIdx: int): Vector3;
/**
 * @param contactIdx int
 * @returns int
 */
  private getContactColliderShape(contactIdx: int): int;
/**
 * @param contactIdx int
 * @returns Vector3
 */
  private getContactColliderVelocityAtPosition(contactIdx: int): Vector3;
/**
 * @returns int
 */
  private getContactCount(): int;
/**
 * @param contactIdx int
 * @returns Vector3
 */
  private getContactImpulse(contactIdx: int): Vector3;
/**
 * @param contactIdx int
 * @returns Vector3
 */
  private getContactLocalNormal(contactIdx: int): Vector3;
/**
 * @param contactIdx int
 * @returns Vector3
 */
  private getContactLocalPosition(contactIdx: int): Vector3;
/**
 * @param contactIdx int
 * @returns int
 */
  private getContactLocalShape(contactIdx: int): int;
/**
 * @param contactIdx int
 * @returns Vector3
 */
  private getContactLocalVelocityAtPosition(contactIdx: int): Vector3;
/**
 * @returns Vector3
 */
  private getInverseInertia(): Vector3;
/**
 * @returns Basis
 */
  private getInverseInertiaTensor(): Basis;
/**
 * @returns float
 */
  private getInverseMass(): float;
/**
 * @returns Vector3
 */
  private getLinearVelocity(): Vector3;
/**
 * @returns Basis
 */
  private getPrincipalInertiaAxes(): Basis;
/**
 * @returns PhysicsDirectSpaceState3D
 */
  private getSpaceState(): PhysicsDirectSpaceState3D;
/**
 * @returns float
 */
  private getStep(): float;
/**
 * @returns float
 */
  private getTotalAngularDamp(): float;
/**
 * @returns Vector3
 */
  private getTotalGravity(): Vector3;
/**
 * @returns float
 */
  private getTotalLinearDamp(): float;
/**
 * @returns Transform3D
 */
  private getTransform(): Transform3D;
/**
 * @param localPosition Vector3
 * @returns Vector3
 */
  private getVelocityAtLocalPosition(localPosition: Vector3): Vector3;
  private integrateForces(): void;
/**
 * @returns boolean
 */
  private isSleeping(): boolean;
/**
 * @param velocity Vector3
 */
  private setAngularVelocity(velocity: Vector3): void;
/**
 * @param force Vector3
 */
  private setConstantForce(force: Vector3): void;
/**
 * @param torque Vector3
 */
  private setConstantTorque(torque: Vector3): void;
/**
 * @param velocity Vector3
 */
  private setLinearVelocity(velocity: Vector3): void;
/**
 * @param enabled boolean
 */
  private setSleepState(enabled: boolean): void;
/**
 * @param transform Transform3D
 */
  private setTransform(transform: Transform3D): void;
}
