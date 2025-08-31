import type { GodotArray, GodotDictionary, PhysicsBody2D, PhysicsMaterial, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.
 * 
 * A static 2D physics body. It can't be moved by external forces or contacts, but can be moved manually by other means such as code, `AnimationMixer`s (with `AnimationMixer.callback_mode_process` set to `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`), and `RemoteTransform2D`.
 * When `StaticBody2D` is moved, it is teleported to its new position without affecting other physics bodies in its path. If this is not desired, use `AnimatableBody2D` instead.
 * `StaticBody2D` is useful for completely static objects like floors and walls, as well as moving surfaces like conveyor belts and circular revolving platforms (by using `constant_linear_velocity` and `constant_angular_velocity`).
 */
export class StaticBody2D extends PhysicsBody2D {
/**
 * The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating.
 */
  constantAngularVelocity: float;
/**
 * The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving.
 */
  constantLinearVelocity: Vector2;
/**
 * The physics material override for the body.
 * If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.
 */
  physicsMaterialOverride: PhysicsMaterial;
}
