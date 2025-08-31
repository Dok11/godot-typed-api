import type { GodotArray, GodotDictionary, Transform3D, XRPositionalTracker, float, int } from "../index.d.ts";
/**
 * A tracked body in XR.
 * 
 * A body tracking system will create an instance of this object and add it to the `XRServer`. This tracking system will then obtain skeleton data, convert it to the Godot Humanoid skeleton and store this data on the `XRBodyTracker` object.
 * Use `XRBodyModifier3D` to animate a body mesh using body tracking data.
 */
export class XRBodyTracker extends XRPositionalTracker {
/**
 * The type of body tracking data captured.
 */
  bodyFlags: int;
/**
 * If `true`, the body tracking data is valid.
 */
  hasTrackingData: boolean;
  type_: int;
/**
 * Returns flags about the validity of the tracking data for the given body joint (see `XRBodyTracker.JointFlags`).
 * @param joint int
 * @returns int
 */
  getJointFlags(joint: int): int;
/**
 * Returns the transform for the given body joint.
 * @param joint int
 * @returns Transform3D
 */
  getJointTransform(joint: int): Transform3D;
/**
 * Sets flags about the validity of the tracking data for the given body joint.
 * @param joint int
 * @param flags int
 */
  setJointFlags(joint: int, flags: int): void;
/**
 * Sets the transform for the given body joint.
 * @param joint int
 * @param transform Transform3D
 */
  setJointTransform(joint: int, transform: Transform3D): void;
/**
 * Upper body tracking supported.
 */
  static readonly BODY_FLAG_UPPER_BODY_SUPPORTED: int;
/**
 * Lower body tracking supported.
 */
  static readonly BODY_FLAG_LOWER_BODY_SUPPORTED: int;
/**
 * Hand tracking supported.
 */
  static readonly BODY_FLAG_HANDS_SUPPORTED: int;
/**
 * Root joint.
 */
  static readonly JOINT_ROOT: int;
/**
 * Hips joint.
 */
  static readonly JOINT_HIPS: int;
/**
 * Spine joint.
 */
  static readonly JOINT_SPINE: int;
/**
 * Chest joint.
 */
  static readonly JOINT_CHEST: int;
/**
 * Upper chest joint.
 */
  static readonly JOINT_UPPER_CHEST: int;
/**
 * Neck joint.
 */
  static readonly JOINT_NECK: int;
/**
 * Head joint.
 */
  static readonly JOINT_HEAD: int;
/**
 * Head tip joint.
 */
  static readonly JOINT_HEAD_TIP: int;
/**
 * Left shoulder joint.
 */
  static readonly JOINT_LEFT_SHOULDER: int;
/**
 * Left upper arm joint.
 */
  static readonly JOINT_LEFT_UPPER_ARM: int;
/**
 * Left lower arm joint.
 */
  static readonly JOINT_LEFT_LOWER_ARM: int;
/**
 * Right shoulder joint.
 */
  static readonly JOINT_RIGHT_SHOULDER: int;
/**
 * Right upper arm joint.
 */
  static readonly JOINT_RIGHT_UPPER_ARM: int;
/**
 * Right lower arm joint.
 */
  static readonly JOINT_RIGHT_LOWER_ARM: int;
/**
 * Left upper leg joint.
 */
  static readonly JOINT_LEFT_UPPER_LEG: int;
/**
 * Left lower leg joint.
 */
  static readonly JOINT_LEFT_LOWER_LEG: int;
/**
 * Left foot joint.
 */
  static readonly JOINT_LEFT_FOOT: int;
/**
 * Left toes joint.
 */
  static readonly JOINT_LEFT_TOES: int;
/**
 * Right upper leg joint.
 */
  static readonly JOINT_RIGHT_UPPER_LEG: int;
/**
 * Right lower leg joint.
 */
  static readonly JOINT_RIGHT_LOWER_LEG: int;
/**
 * Right foot joint.
 */
  static readonly JOINT_RIGHT_FOOT: int;
/**
 * Right toes joint.
 */
  static readonly JOINT_RIGHT_TOES: int;
/**
 * Left hand joint.
 */
  static readonly JOINT_LEFT_HAND: int;
/**
 * Left palm joint.
 */
  static readonly JOINT_LEFT_PALM: int;
/**
 * Left wrist joint.
 */
  static readonly JOINT_LEFT_WRIST: int;
/**
 * Left thumb metacarpal joint.
 */
  static readonly JOINT_LEFT_THUMB_METACARPAL: int;
/**
 * Left thumb phalanx proximal joint.
 */
  static readonly JOINT_LEFT_THUMB_PHALANX_PROXIMAL: int;
/**
 * Left thumb phalanx distal joint.
 */
  static readonly JOINT_LEFT_THUMB_PHALANX_DISTAL: int;
/**
 * Left thumb tip joint.
 */
  static readonly JOINT_LEFT_THUMB_TIP: int;
/**
 * Left index finger metacarpal joint.
 */
  static readonly JOINT_LEFT_INDEX_FINGER_METACARPAL: int;
/**
 * Left index finger phalanx proximal joint.
 */
  static readonly JOINT_LEFT_INDEX_FINGER_PHALANX_PROXIMAL: int;
/**
 * Left index finger phalanx intermediate joint.
 */
  static readonly JOINT_LEFT_INDEX_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Left index finger phalanx distal joint.
 */
  static readonly JOINT_LEFT_INDEX_FINGER_PHALANX_DISTAL: int;
/**
 * Left index finger tip joint.
 */
  static readonly JOINT_LEFT_INDEX_FINGER_TIP: int;
/**
 * Left middle finger metacarpal joint.
 */
  static readonly JOINT_LEFT_MIDDLE_FINGER_METACARPAL: int;
/**
 * Left middle finger phalanx proximal joint.
 */
  static readonly JOINT_LEFT_MIDDLE_FINGER_PHALANX_PROXIMAL: int;
/**
 * Left middle finger phalanx intermediate joint.
 */
  static readonly JOINT_LEFT_MIDDLE_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Left middle finger phalanx distal joint.
 */
  static readonly JOINT_LEFT_MIDDLE_FINGER_PHALANX_DISTAL: int;
/**
 * Left middle finger tip joint.
 */
  static readonly JOINT_LEFT_MIDDLE_FINGER_TIP: int;
/**
 * Left ring finger metacarpal joint.
 */
  static readonly JOINT_LEFT_RING_FINGER_METACARPAL: int;
/**
 * Left ring finger phalanx proximal joint.
 */
  static readonly JOINT_LEFT_RING_FINGER_PHALANX_PROXIMAL: int;
/**
 * Left ring finger phalanx intermediate joint.
 */
  static readonly JOINT_LEFT_RING_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Left ring finger phalanx distal joint.
 */
  static readonly JOINT_LEFT_RING_FINGER_PHALANX_DISTAL: int;
/**
 * Left ring finger tip joint.
 */
  static readonly JOINT_LEFT_RING_FINGER_TIP: int;
/**
 * Left pinky finger metacarpal joint.
 */
  static readonly JOINT_LEFT_PINKY_FINGER_METACARPAL: int;
/**
 * Left pinky finger phalanx proximal joint.
 */
  static readonly JOINT_LEFT_PINKY_FINGER_PHALANX_PROXIMAL: int;
/**
 * Left pinky finger phalanx intermediate joint.
 */
  static readonly JOINT_LEFT_PINKY_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Left pinky finger phalanx distal joint.
 */
  static readonly JOINT_LEFT_PINKY_FINGER_PHALANX_DISTAL: int;
/**
 * Left pinky finger tip joint.
 */
  static readonly JOINT_LEFT_PINKY_FINGER_TIP: int;
/**
 * Right hand joint.
 */
  static readonly JOINT_RIGHT_HAND: int;
/**
 * Right palm joint.
 */
  static readonly JOINT_RIGHT_PALM: int;
/**
 * Right wrist joint.
 */
  static readonly JOINT_RIGHT_WRIST: int;
/**
 * Right thumb metacarpal joint.
 */
  static readonly JOINT_RIGHT_THUMB_METACARPAL: int;
/**
 * Right thumb phalanx proximal joint.
 */
  static readonly JOINT_RIGHT_THUMB_PHALANX_PROXIMAL: int;
/**
 * Right thumb phalanx distal joint.
 */
  static readonly JOINT_RIGHT_THUMB_PHALANX_DISTAL: int;
/**
 * Right thumb tip joint.
 */
  static readonly JOINT_RIGHT_THUMB_TIP: int;
/**
 * Right index finger metacarpal joint.
 */
  static readonly JOINT_RIGHT_INDEX_FINGER_METACARPAL: int;
/**
 * Right index finger phalanx proximal joint.
 */
  static readonly JOINT_RIGHT_INDEX_FINGER_PHALANX_PROXIMAL: int;
/**
 * Right index finger phalanx intermediate joint.
 */
  static readonly JOINT_RIGHT_INDEX_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Right index finger phalanx distal joint.
 */
  static readonly JOINT_RIGHT_INDEX_FINGER_PHALANX_DISTAL: int;
/**
 * Right index finger tip joint.
 */
  static readonly JOINT_RIGHT_INDEX_FINGER_TIP: int;
/**
 * Right middle finger metacarpal joint.
 */
  static readonly JOINT_RIGHT_MIDDLE_FINGER_METACARPAL: int;
/**
 * Right middle finger phalanx proximal joint.
 */
  static readonly JOINT_RIGHT_MIDDLE_FINGER_PHALANX_PROXIMAL: int;
/**
 * Right middle finger phalanx intermediate joint.
 */
  static readonly JOINT_RIGHT_MIDDLE_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Right middle finger phalanx distal joint.
 */
  static readonly JOINT_RIGHT_MIDDLE_FINGER_PHALANX_DISTAL: int;
/**
 * Right middle finger tip joint.
 */
  static readonly JOINT_RIGHT_MIDDLE_FINGER_TIP: int;
/**
 * Right ring finger metacarpal joint.
 */
  static readonly JOINT_RIGHT_RING_FINGER_METACARPAL: int;
/**
 * Right ring finger phalanx proximal joint.
 */
  static readonly JOINT_RIGHT_RING_FINGER_PHALANX_PROXIMAL: int;
/**
 * Right ring finger phalanx intermediate joint.
 */
  static readonly JOINT_RIGHT_RING_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Right ring finger phalanx distal joint.
 */
  static readonly JOINT_RIGHT_RING_FINGER_PHALANX_DISTAL: int;
/**
 * Right ring finger tip joint.
 */
  static readonly JOINT_RIGHT_RING_FINGER_TIP: int;
/**
 * Right pinky finger metacarpal joint.
 */
  static readonly JOINT_RIGHT_PINKY_FINGER_METACARPAL: int;
/**
 * Right pinky finger phalanx proximal joint.
 */
  static readonly JOINT_RIGHT_PINKY_FINGER_PHALANX_PROXIMAL: int;
/**
 * Right pinky finger phalanx intermediate joint.
 */
  static readonly JOINT_RIGHT_PINKY_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Right pinky finger phalanx distal joint.
 */
  static readonly JOINT_RIGHT_PINKY_FINGER_PHALANX_DISTAL: int;
/**
 * Right pinky finger tip joint.
 */
  static readonly JOINT_RIGHT_PINKY_FINGER_TIP: int;
/**
 * Represents the size of the `Joint` enum.
 */
  static readonly JOINT_MAX: int;
/**
 * The joint's orientation data is valid.
 */
  static readonly JOINT_FLAG_ORIENTATION_VALID: int;
/**
 * The joint's orientation is actively tracked. May not be set if tracking has been temporarily lost.
 */
  static readonly JOINT_FLAG_ORIENTATION_TRACKED: int;
/**
 * The joint's position data is valid.
 */
  static readonly JOINT_FLAG_POSITION_VALID: int;
/**
 * The joint's position is actively tracked. May not be set if tracking has been temporarily lost.
 */
  static readonly JOINT_FLAG_POSITION_TRACKED: int;
}
