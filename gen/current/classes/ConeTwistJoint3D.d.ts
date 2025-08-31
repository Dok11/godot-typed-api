import type { GodotArray, GodotDictionary, Joint3D, float, int } from "../index.d.ts";
/**
 * A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint.
 * 
 * A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint. The twist axis is initiated as the X axis of the `ConeTwistJoint3D`. Once the physics bodies swing, the twist axis is calculated as the middle of the X axes of the joint in the local space of the two physics bodies. Useful for limbs like shoulders and hips, lamps hanging off a ceiling, etc.
 */
export class ConeTwistJoint3D extends Joint3D {
/**
 * The speed with which the swing or twist will take place.
 * The higher, the faster.
 */
  bias: float;
/**
 * Defines, how fast the swing- and twist-speed-difference on both sides gets synced.
 */
  relaxation: float;
/**
 * The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint.
 */
  softness: float;
/**
 * Swing is rotation from side to side, around the axis perpendicular to the twist axis.
 * The swing span defines, how much rotation will not get corrected along the swing axis.
 * Could be defined as looseness in the `ConeTwistJoint3D`.
 * If below 0.05, this behavior is locked.
 */
  swingSpan: float;
/**
 * Twist is the rotation around the twist axis, this value defined how far the joint can twist.
 * Twist is locked if below 0.05.
 */
  twistSpan: float;
/**
 * Returns the value of the specified parameter.
 * @param param int
 * @returns float
 */
  getParam(param: int): float;
/**
 * Sets the value of the specified parameter.
 * @param param int
 * @param value float
 */
  setParam(param: int, value: float): void;
/**
 * Swing is rotation from side to side, around the axis perpendicular to the twist axis.
 * The swing span defines, how much rotation will not get corrected along the swing axis.
 * Could be defined as looseness in the `ConeTwistJoint3D`.
 * If below 0.05, this behavior is locked.
 */
  static readonly PARAM_SWING_SPAN: int;
/**
 * Twist is the rotation around the twist axis, this value defined how far the joint can twist.
 * Twist is locked if below 0.05.
 */
  static readonly PARAM_TWIST_SPAN: int;
/**
 * The speed with which the swing or twist will take place.
 * The higher, the faster.
 */
  static readonly PARAM_BIAS: int;
/**
 * The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint.
 */
  static readonly PARAM_SOFTNESS: int;
/**
 * Defines, how fast the swing- and twist-speed-difference on both sides gets synced.
 */
  static readonly PARAM_RELAXATION: int;
/**
 * Represents the size of the `Param` enum.
 */
  static readonly PARAM_MAX: int;
}
