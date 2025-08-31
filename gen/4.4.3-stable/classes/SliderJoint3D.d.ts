import type { GodotArray, GodotDictionary, Joint3D, float, int } from "../index.d.ts";
/**
 * A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body.
 * 
 * A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body. For example, Body A could be a `StaticBody3D` representing a piston base, while Body B could be a `RigidBody3D` representing the piston head, moving up and down.
 */
export class SliderJoint3D extends Joint3D {
/**
 * The amount of damping of the rotation when the limit is surpassed.
 * A lower damping value allows a rotation initiated by body A to travel to body B slower.
 */
  angularLimitDamping: float;
/**
 * The lower limit of rotation in the slider.
 */
  angularLimitLowerAngle: float;
/**
 * The amount of restitution of the rotation when the limit is surpassed.
 * Does not affect damping.
 */
  angularLimitRestitution: float;
/**
 * A factor applied to the all rotation once the limit is surpassed.
 * Makes all rotation slower when between 0 and 1.
 */
  angularLimitSoftness: float;
/**
 * The upper limit of rotation in the slider.
 */
  angularLimitUpperAngle: float;
/**
 * The amount of damping of the rotation in the limits.
 */
  angularMotionDamping: float;
/**
 * The amount of restitution of the rotation in the limits.
 */
  angularMotionRestitution: float;
/**
 * A factor applied to the all rotation in the limits.
 */
  angularMotionSoftness: float;
/**
 * The amount of damping of the rotation across axes orthogonal to the slider.
 */
  angularOrthoDamping: float;
/**
 * The amount of restitution of the rotation across axes orthogonal to the slider.
 */
  angularOrthoRestitution: float;
/**
 * A factor applied to the all rotation across axes orthogonal to the slider.
 */
  angularOrthoSoftness: float;
/**
 * The amount of damping that happens once the limit defined by `linear_limit/lower_distance` and `linear_limit/upper_distance` is surpassed.
 */
  linearLimitDamping: float;
/**
 * The minimum difference between the pivot points on their X axis before damping happens.
 */
  linearLimitLowerDistance: float;
/**
 * The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost.
 */
  linearLimitRestitution: float;
/**
 * A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement.
 */
  linearLimitSoftness: float;
/**
 * The maximum difference between the pivot points on their X axis before damping happens.
 */
  linearLimitUpperDistance: float;
/**
 * The amount of damping inside the slider limits.
 */
  linearMotionDamping: float;
/**
 * The amount of restitution inside the slider limits.
 */
  linearMotionRestitution: float;
/**
 * A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement.
 */
  linearMotionSoftness: float;
/**
 * The amount of damping when movement is across axes orthogonal to the slider.
 */
  linearOrthoDamping: float;
/**
 * The amount of restitution when movement is across axes orthogonal to the slider.
 */
  linearOrthoRestitution: float;
/**
 * A factor applied to the movement across axes orthogonal to the slider.
 */
  linearOrthoSoftness: float;
/**
 * Returns the value of the given parameter (see `Param` constants).
 * @param param int
 * @returns float
 */
  getParam(param: int): float;
/**
 * Assigns `value` to the given parameter (see `Param` constants).
 * @param param int
 * @param value float
 */
  setParam(param: int, value: float): void;
/**
 * Constant for accessing `linear_limit/upper_distance`. The maximum difference between the pivot points on their X axis before damping happens.
 */
  static readonly PARAM_LINEAR_LIMIT_UPPER: int;
/**
 * Constant for accessing `linear_limit/lower_distance`. The minimum difference between the pivot points on their X axis before damping happens.
 */
  static readonly PARAM_LINEAR_LIMIT_LOWER: int;
/**
 * Constant for accessing `linear_limit/softness`. A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement.
 */
  static readonly PARAM_LINEAR_LIMIT_SOFTNESS: int;
/**
 * Constant for accessing `linear_limit/restitution`. The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost.
 */
  static readonly PARAM_LINEAR_LIMIT_RESTITUTION: int;
/**
 * Constant for accessing `linear_limit/damping`. The amount of damping once the slider limits are surpassed.
 */
  static readonly PARAM_LINEAR_LIMIT_DAMPING: int;
/**
 * Constant for accessing `linear_motion/softness`. A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement.
 */
  static readonly PARAM_LINEAR_MOTION_SOFTNESS: int;
/**
 * Constant for accessing `linear_motion/restitution`. The amount of restitution inside the slider limits.
 */
  static readonly PARAM_LINEAR_MOTION_RESTITUTION: int;
/**
 * Constant for accessing `linear_motion/damping`. The amount of damping inside the slider limits.
 */
  static readonly PARAM_LINEAR_MOTION_DAMPING: int;
/**
 * Constant for accessing `linear_ortho/softness`. A factor applied to the movement across axes orthogonal to the slider.
 */
  static readonly PARAM_LINEAR_ORTHOGONAL_SOFTNESS: int;
/**
 * Constant for accessing `linear_motion/restitution`. The amount of restitution when movement is across axes orthogonal to the slider.
 */
  static readonly PARAM_LINEAR_ORTHOGONAL_RESTITUTION: int;
/**
 * Constant for accessing `linear_motion/damping`. The amount of damping when movement is across axes orthogonal to the slider.
 */
  static readonly PARAM_LINEAR_ORTHOGONAL_DAMPING: int;
/**
 * Constant for accessing `angular_limit/upper_angle`. The upper limit of rotation in the slider.
 */
  static readonly PARAM_ANGULAR_LIMIT_UPPER: int;
/**
 * Constant for accessing `angular_limit/lower_angle`. The lower limit of rotation in the slider.
 */
  static readonly PARAM_ANGULAR_LIMIT_LOWER: int;
/**
 * Constant for accessing `angular_limit/softness`. A factor applied to the all rotation once the limit is surpassed.
 */
  static readonly PARAM_ANGULAR_LIMIT_SOFTNESS: int;
/**
 * Constant for accessing `angular_limit/restitution`. The amount of restitution of the rotation when the limit is surpassed.
 */
  static readonly PARAM_ANGULAR_LIMIT_RESTITUTION: int;
/**
 * Constant for accessing `angular_limit/damping`. The amount of damping of the rotation when the limit is surpassed.
 */
  static readonly PARAM_ANGULAR_LIMIT_DAMPING: int;
/**
 * Constant for accessing `angular_motion/softness`. A factor applied to the all rotation in the limits.
 */
  static readonly PARAM_ANGULAR_MOTION_SOFTNESS: int;
/**
 * Constant for accessing `angular_motion/restitution`. The amount of restitution of the rotation in the limits.
 */
  static readonly PARAM_ANGULAR_MOTION_RESTITUTION: int;
/**
 * Constant for accessing `angular_motion/damping`. The amount of damping of the rotation in the limits.
 */
  static readonly PARAM_ANGULAR_MOTION_DAMPING: int;
/**
 * Constant for accessing `angular_ortho/softness`. A factor applied to the all rotation across axes orthogonal to the slider.
 */
  static readonly PARAM_ANGULAR_ORTHOGONAL_SOFTNESS: int;
/**
 * Constant for accessing `angular_ortho/restitution`. The amount of restitution of the rotation across axes orthogonal to the slider.
 */
  static readonly PARAM_ANGULAR_ORTHOGONAL_RESTITUTION: int;
/**
 * Constant for accessing `angular_ortho/damping`. The amount of damping of the rotation across axes orthogonal to the slider.
 */
  static readonly PARAM_ANGULAR_ORTHOGONAL_DAMPING: int;
/**
 * Represents the size of the `Param` enum.
 */
  static readonly PARAM_MAX: int;
}
