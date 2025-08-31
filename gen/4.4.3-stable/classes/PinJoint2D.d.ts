import type { GodotArray, GodotDictionary, Joint2D, float, int } from "../index.d.ts";
/**
 * A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate.
 * 
 * A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate. For example, a `RigidBody2D` can be attached to a `StaticBody2D` to create a pendulum or a seesaw.
 */
export class PinJoint2D extends Joint2D {
/**
 * If `true`, the pin maximum and minimum rotation, defined by `angular_limit_lower` and `angular_limit_upper` are applied.
 */
  angularLimitEnabled: boolean;
/**
 * The minimum rotation. Only active if `angular_limit_enabled` is `true`.
 */
  angularLimitLower: float;
/**
 * The maximum rotation. Only active if `angular_limit_enabled` is `true`.
 */
  angularLimitUpper: float;
/**
 * When activated, a motor turns the pin.
 */
  motorEnabled: boolean;
/**
 * Target speed for the motor. In radians per second.
 */
  motorTargetVelocity: float;
/**
 * The higher this value, the more the bond to the pinned partner can flex.
 */
  softness: float;
}
