import type { GodotArray, GodotDictionary, Joint3D, float, int } from "../index.d.ts";
/**
 * A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate.
 * 
 * A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate. For example, a `RigidBody3D` can be attached to a `StaticBody3D` to create a pendulum or a seesaw.
 */
export class PinJoint3D extends Joint3D {
/**
 * The force with which the pinned objects stay in positional relation to each other. The higher, the stronger.
 */
  paramsBias: float;
/**
 * The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger.
 */
  paramsDamping: float;
/**
 * If above 0, this value is the maximum value for an impulse that this Joint3D produces.
 */
  paramsImpulseClamp: float;
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
 * The force with which the pinned objects stay in positional relation to each other. The higher, the stronger.
 */
  static readonly PARAM_BIAS: int;
/**
 * The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger.
 */
  static readonly PARAM_DAMPING: int;
/**
 * If above 0, this value is the maximum value for an impulse that this Joint3D produces.
 */
  static readonly PARAM_IMPULSE_CLAMP: int;
}
