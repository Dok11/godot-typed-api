import type { GodotArray, GodotDictionary, Joint3D, float, int } from "../index.d.ts";
/**
 * A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body.
 * 
 * A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body. For example, Body A can be a `StaticBody3D` representing a door hinge that a `RigidBody3D` rotates around.
 */
export class HingeJoint3D extends Joint3D {
/**
 * The speed with which the rotation across the axis perpendicular to the hinge gets corrected.
 */
  angularLimitBias: float;
/**
 * If `true`, the hinges maximum and minimum rotation, defined by `angular_limit/lower` and `angular_limit/upper` has effects.
 */
  angularLimitEnable: boolean;
/**
 * The minimum rotation. Only active if `angular_limit/enable` is `true`.
 */
  angularLimitLower: float;
/**
 * The lower this value, the more the rotation gets slowed down.
 */
  angularLimitRelaxation: float;
/**
 * @deprecated This property is never set by the engine and is kept for compatibility purposes.
 */
  angularLimitSoftness: float;
/**
 * The maximum rotation. Only active if `angular_limit/enable` is `true`.
 */
  angularLimitUpper: float;
/**
 * When activated, a motor turns the hinge.
 */
  motorEnable: boolean;
/**
 * Maximum acceleration for the motor.
 */
  motorMaxImpulse: float;
/**
 * Target speed for the motor.
 */
  motorTargetVelocity: float;
/**
 * The speed with which the two bodies get pulled together when they move in different directions.
 */
  paramsBias: float;
/**
 * Returns the value of the specified flag.
 * @param flag int
 * @returns boolean
 */
  getFlag(flag: int): boolean;
/**
 * Returns the value of the specified parameter.
 * @param param int
 * @returns float
 */
  getParam(param: int): float;
/**
 * If `true`, enables the specified flag.
 * @param flag int
 * @param enabled boolean
 */
  setFlag(flag: int, enabled: boolean): void;
/**
 * Sets the value of the specified parameter.
 * @param param int
 * @param value float
 */
  setParam(param: int, value: float): void;
/**
 * The speed with which the two bodies get pulled together when they move in different directions.
 */
  static readonly PARAM_BIAS: int;
/**
 * The maximum rotation. Only active if `angular_limit/enable` is `true`.
 */
  static readonly PARAM_LIMIT_UPPER: int;
/**
 * The minimum rotation. Only active if `angular_limit/enable` is `true`.
 */
  static readonly PARAM_LIMIT_LOWER: int;
/**
 * The speed with which the rotation across the axis perpendicular to the hinge gets corrected.
 */
  static readonly PARAM_LIMIT_BIAS: int;
/**
 * @deprecated This property is never used by the engine and is kept for compatibility purpose.
 */
  static readonly PARAM_LIMIT_SOFTNESS: int;
/**
 * The lower this value, the more the rotation gets slowed down.
 */
  static readonly PARAM_LIMIT_RELAXATION: int;
/**
 * Target speed for the motor.
 */
  static readonly PARAM_MOTOR_TARGET_VELOCITY: int;
/**
 * Maximum acceleration for the motor.
 */
  static readonly PARAM_MOTOR_MAX_IMPULSE: int;
/**
 * Represents the size of the `Param` enum.
 */
  static readonly PARAM_MAX: int;
/**
 * If `true`, the hinges maximum and minimum rotation, defined by `angular_limit/lower` and `angular_limit/upper` has effects.
 */
  static readonly FLAG_USE_LIMIT: int;
/**
 * When activated, a motor turns the hinge.
 */
  static readonly FLAG_ENABLE_MOTOR: int;
/**
 * Represents the size of the `Flag` enum.
 */
  static readonly FLAG_MAX: int;
}
