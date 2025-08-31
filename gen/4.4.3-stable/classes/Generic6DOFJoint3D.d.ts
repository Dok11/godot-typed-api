import type { GodotArray, GodotDictionary, Joint3D, float, int } from "../index.d.ts";
/**
 * A physics joint that allows for complex movement and rotation between two 3D physics bodies.
 * 
 * The `Generic6DOFJoint3D` (6 Degrees Of Freedom) joint allows for implementing custom types of joints by locking the rotation and translation of certain axes.
 * The first 3 DOF represent the linear motion of the physics bodies and the last 3 DOF represent the angular motion of the physics bodies. Each axis can be either locked, or limited.
 */
export class Generic6DOFJoint3D extends Joint3D {
/**
 * The amount of rotational damping across the X axis.
 * The lower, the longer an impulse from one side takes to travel to the other side.
 */
  angularLimitXDamping: float;
/**
 * If `true`, rotation across the X axis is limited.
 */
  angularLimitXEnabled: boolean;
/**
 * When rotating across the X axis, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.
 */
  angularLimitXErp: float;
/**
 * The maximum amount of force that can occur, when rotating around the X axis.
 */
  angularLimitXForceLimit: float;
/**
 * The minimum rotation in negative direction to break loose and rotate around the X axis.
 */
  angularLimitXLowerAngle: float;
/**
 * The amount of rotational restitution across the X axis. The lower, the more restitution occurs.
 */
  angularLimitXRestitution: float;
/**
 * The speed of all rotations across the X axis.
 */
  angularLimitXSoftness: float;
/**
 * The minimum rotation in positive direction to break loose and rotate around the X axis.
 */
  angularLimitXUpperAngle: float;
/**
 * The amount of rotational damping across the Y axis. The lower, the more damping occurs.
 */
  angularLimitYDamping: float;
/**
 * If `true`, rotation across the Y axis is limited.
 */
  angularLimitYEnabled: boolean;
/**
 * When rotating across the Y axis, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.
 */
  angularLimitYErp: float;
/**
 * The maximum amount of force that can occur, when rotating around the Y axis.
 */
  angularLimitYForceLimit: float;
/**
 * The minimum rotation in negative direction to break loose and rotate around the Y axis.
 */
  angularLimitYLowerAngle: float;
/**
 * The amount of rotational restitution across the Y axis. The lower, the more restitution occurs.
 */
  angularLimitYRestitution: float;
/**
 * The speed of all rotations across the Y axis.
 */
  angularLimitYSoftness: float;
/**
 * The minimum rotation in positive direction to break loose and rotate around the Y axis.
 */
  angularLimitYUpperAngle: float;
/**
 * The amount of rotational damping across the Z axis. The lower, the more damping occurs.
 */
  angularLimitZDamping: float;
/**
 * If `true`, rotation across the Z axis is limited.
 */
  angularLimitZEnabled: boolean;
/**
 * When rotating across the Z axis, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.
 */
  angularLimitZErp: float;
/**
 * The maximum amount of force that can occur, when rotating around the Z axis.
 */
  angularLimitZForceLimit: float;
/**
 * The minimum rotation in negative direction to break loose and rotate around the Z axis.
 */
  angularLimitZLowerAngle: float;
/**
 * The amount of rotational restitution across the Z axis. The lower, the more restitution occurs.
 */
  angularLimitZRestitution: float;
/**
 * The speed of all rotations across the Z axis.
 */
  angularLimitZSoftness: float;
/**
 * The minimum rotation in positive direction to break loose and rotate around the Z axis.
 */
  angularLimitZUpperAngle: float;
/**
 * If `true`, a rotating motor at the X axis is enabled.
 */
  angularMotorXEnabled: boolean;
/**
 * Maximum acceleration for the motor at the X axis.
 */
  angularMotorXForceLimit: float;
/**
 * Target speed for the motor at the X axis.
 */
  angularMotorXTargetVelocity: float;
/**
 * If `true`, a rotating motor at the Y axis is enabled.
 */
  angularMotorYEnabled: boolean;
/**
 * Maximum acceleration for the motor at the Y axis.
 */
  angularMotorYForceLimit: float;
/**
 * Target speed for the motor at the Y axis.
 */
  angularMotorYTargetVelocity: float;
/**
 * If `true`, a rotating motor at the Z axis is enabled.
 */
  angularMotorZEnabled: boolean;
/**
 * Maximum acceleration for the motor at the Z axis.
 */
  angularMotorZForceLimit: float;
/**
 * Target speed for the motor at the Z axis.
 */
  angularMotorZTargetVelocity: float;
  angularSpringXDamping: float;
  angularSpringXEnabled: boolean;
  angularSpringXEquilibriumPoint: float;
  angularSpringXStiffness: float;
  angularSpringYDamping: float;
  angularSpringYEnabled: boolean;
  angularSpringYEquilibriumPoint: float;
  angularSpringYStiffness: float;
  angularSpringZDamping: float;
  angularSpringZEnabled: boolean;
  angularSpringZEquilibriumPoint: float;
  angularSpringZStiffness: float;
/**
 * The amount of damping that happens at the X motion.
 */
  linearLimitXDamping: float;
/**
 * If `true`, the linear motion across the X axis is limited.
 */
  linearLimitXEnabled: boolean;
/**
 * The minimum difference between the pivot points' X axis.
 */
  linearLimitXLowerDistance: float;
/**
 * The amount of restitution on the X axis movement. The lower, the more momentum gets lost.
 */
  linearLimitXRestitution: float;
/**
 * A factor applied to the movement across the X axis. The lower, the slower the movement.
 */
  linearLimitXSoftness: float;
/**
 * The maximum difference between the pivot points' X axis.
 */
  linearLimitXUpperDistance: float;
/**
 * The amount of damping that happens at the Y motion.
 */
  linearLimitYDamping: float;
/**
 * If `true`, the linear motion across the Y axis is limited.
 */
  linearLimitYEnabled: boolean;
/**
 * The minimum difference between the pivot points' Y axis.
 */
  linearLimitYLowerDistance: float;
/**
 * The amount of restitution on the Y axis movement. The lower, the more momentum gets lost.
 */
  linearLimitYRestitution: float;
/**
 * A factor applied to the movement across the Y axis. The lower, the slower the movement.
 */
  linearLimitYSoftness: float;
/**
 * The maximum difference between the pivot points' Y axis.
 */
  linearLimitYUpperDistance: float;
/**
 * The amount of damping that happens at the Z motion.
 */
  linearLimitZDamping: float;
/**
 * If `true`, the linear motion across the Z axis is limited.
 */
  linearLimitZEnabled: boolean;
/**
 * The minimum difference between the pivot points' Z axis.
 */
  linearLimitZLowerDistance: float;
/**
 * The amount of restitution on the Z axis movement. The lower, the more momentum gets lost.
 */
  linearLimitZRestitution: float;
/**
 * A factor applied to the movement across the Z axis. The lower, the slower the movement.
 */
  linearLimitZSoftness: float;
/**
 * The maximum difference between the pivot points' Z axis.
 */
  linearLimitZUpperDistance: float;
/**
 * If `true`, then there is a linear motor on the X axis. It will attempt to reach the target velocity while staying within the force limits.
 */
  linearMotorXEnabled: boolean;
/**
 * The maximum force the linear motor can apply on the X axis while trying to reach the target velocity.
 */
  linearMotorXForceLimit: float;
/**
 * The speed that the linear motor will attempt to reach on the X axis.
 */
  linearMotorXTargetVelocity: float;
/**
 * If `true`, then there is a linear motor on the Y axis. It will attempt to reach the target velocity while staying within the force limits.
 */
  linearMotorYEnabled: boolean;
/**
 * The maximum force the linear motor can apply on the Y axis while trying to reach the target velocity.
 */
  linearMotorYForceLimit: float;
/**
 * The speed that the linear motor will attempt to reach on the Y axis.
 */
  linearMotorYTargetVelocity: float;
/**
 * If `true`, then there is a linear motor on the Z axis. It will attempt to reach the target velocity while staying within the force limits.
 */
  linearMotorZEnabled: boolean;
/**
 * The maximum force the linear motor can apply on the Z axis while trying to reach the target velocity.
 */
  linearMotorZForceLimit: float;
/**
 * The speed that the linear motor will attempt to reach on the Z axis.
 */
  linearMotorZTargetVelocity: float;
  linearSpringXDamping: float;
  linearSpringXEnabled: boolean;
  linearSpringXEquilibriumPoint: float;
  linearSpringXStiffness: float;
  linearSpringYDamping: float;
  linearSpringYEnabled: boolean;
  linearSpringYEquilibriumPoint: float;
  linearSpringYStiffness: float;
  linearSpringZDamping: float;
  linearSpringZEnabled: boolean;
  linearSpringZEquilibriumPoint: float;
  linearSpringZStiffness: float;
/**
 * @param flag int
 * @returns boolean
 */
  getFlagX(flag: int): boolean;
/**
 * @param flag int
 * @returns boolean
 */
  getFlagY(flag: int): boolean;
/**
 * @param flag int
 * @returns boolean
 */
  getFlagZ(flag: int): boolean;
/**
 * @param param int
 * @returns float
 */
  getParamX(param: int): float;
/**
 * @param param int
 * @returns float
 */
  getParamY(param: int): float;
/**
 * @param param int
 * @returns float
 */
  getParamZ(param: int): float;
/**
 * @param flag int
 * @param value boolean
 */
  setFlagX(flag: int, value: boolean): void;
/**
 * @param flag int
 * @param value boolean
 */
  setFlagY(flag: int, value: boolean): void;
/**
 * @param flag int
 * @param value boolean
 */
  setFlagZ(flag: int, value: boolean): void;
/**
 * @param param int
 * @param value float
 */
  setParamX(param: int, value: float): void;
/**
 * @param param int
 * @param value float
 */
  setParamY(param: int, value: float): void;
/**
 * @param param int
 * @param value float
 */
  setParamZ(param: int, value: float): void;
/**
 * The minimum difference between the pivot points' axes.
 */
  static readonly PARAM_LINEAR_LOWER_LIMIT: int;
/**
 * The maximum difference between the pivot points' axes.
 */
  static readonly PARAM_LINEAR_UPPER_LIMIT: int;
/**
 * A factor applied to the movement across the axes. The lower, the slower the movement.
 */
  static readonly PARAM_LINEAR_LIMIT_SOFTNESS: int;
/**
 * The amount of restitution on the axes' movement. The lower, the more momentum gets lost.
 */
  static readonly PARAM_LINEAR_RESTITUTION: int;
/**
 * The amount of damping that happens at the linear motion across the axes.
 */
  static readonly PARAM_LINEAR_DAMPING: int;
/**
 * The velocity the linear motor will try to reach.
 */
  static readonly PARAM_LINEAR_MOTOR_TARGET_VELOCITY: int;
/**
 * The maximum force the linear motor will apply while trying to reach the velocity target.
 */
  static readonly PARAM_LINEAR_MOTOR_FORCE_LIMIT: int;
  static readonly PARAM_LINEAR_SPRING_STIFFNESS: int;
  static readonly PARAM_LINEAR_SPRING_DAMPING: int;
  static readonly PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT: int;
/**
 * The minimum rotation in negative direction to break loose and rotate around the axes.
 */
  static readonly PARAM_ANGULAR_LOWER_LIMIT: int;
/**
 * The minimum rotation in positive direction to break loose and rotate around the axes.
 */
  static readonly PARAM_ANGULAR_UPPER_LIMIT: int;
/**
 * The speed of all rotations across the axes.
 */
  static readonly PARAM_ANGULAR_LIMIT_SOFTNESS: int;
/**
 * The amount of rotational damping across the axes. The lower, the more damping occurs.
 */
  static readonly PARAM_ANGULAR_DAMPING: int;
/**
 * The amount of rotational restitution across the axes. The lower, the more restitution occurs.
 */
  static readonly PARAM_ANGULAR_RESTITUTION: int;
/**
 * The maximum amount of force that can occur, when rotating around the axes.
 */
  static readonly PARAM_ANGULAR_FORCE_LIMIT: int;
/**
 * When rotating across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.
 */
  static readonly PARAM_ANGULAR_ERP: int;
/**
 * Target speed for the motor at the axes.
 */
  static readonly PARAM_ANGULAR_MOTOR_TARGET_VELOCITY: int;
/**
 * Maximum acceleration for the motor at the axes.
 */
  static readonly PARAM_ANGULAR_MOTOR_FORCE_LIMIT: int;
  static readonly PARAM_ANGULAR_SPRING_STIFFNESS: int;
  static readonly PARAM_ANGULAR_SPRING_DAMPING: int;
  static readonly PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT: int;
/**
 * Represents the size of the `Param` enum.
 */
  static readonly PARAM_MAX: int;
/**
 * If enabled, linear motion is possible within the given limits.
 */
  static readonly FLAG_ENABLE_LINEAR_LIMIT: int;
/**
 * If enabled, rotational motion is possible within the given limits.
 */
  static readonly FLAG_ENABLE_ANGULAR_LIMIT: int;
  static readonly FLAG_ENABLE_LINEAR_SPRING: int;
  static readonly FLAG_ENABLE_ANGULAR_SPRING: int;
/**
 * If enabled, there is a rotational motor across these axes.
 */
  static readonly FLAG_ENABLE_MOTOR: int;
/**
 * If enabled, there is a linear motor across these axes.
 */
  static readonly FLAG_ENABLE_LINEAR_MOTOR: int;
/**
 * Represents the size of the `Flag` enum.
 */
  static readonly FLAG_MAX: int;
}
