import type { GodotArray, GodotDictionary, Transform3D, Vector3, XRPositionalTracker, float, int } from "../index.d.ts";
/**
 * A tracked hand in XR.
 * 
 * A hand tracking system will create an instance of this object and add it to the `XRServer`. This tracking system will then obtain skeleton data, convert it to the Godot Humanoid hand skeleton and store this data on the `XRHandTracker` object.
 * Use `XRHandModifier3D` to animate a hand mesh using hand tracking data.
 */
export class XRHandTracker extends XRPositionalTracker {
  hand: int;
/**
 * The source of the hand tracking data.
 */
  handTrackingSource: int;
/**
 * If `true`, the hand tracking data is valid.
 */
  hasTrackingData: boolean;
  type_: int;
/**
 * Returns the angular velocity for the given hand joint.
 * @param joint int
 * @returns Vector3
 */
  getHandJointAngularVelocity(joint: int): Vector3;
/**
 * Returns flags about the validity of the tracking data for the given hand joint (see `XRHandTracker.HandJointFlags`).
 * @param joint int
 * @returns int
 */
  getHandJointFlags(joint: int): int;
/**
 * Returns the linear velocity for the given hand joint.
 * @param joint int
 * @returns Vector3
 */
  getHandJointLinearVelocity(joint: int): Vector3;
/**
 * Returns the radius of the given hand joint.
 * @param joint int
 * @returns float
 */
  getHandJointRadius(joint: int): float;
/**
 * Returns the transform for the given hand joint.
 * @param joint int
 * @returns Transform3D
 */
  getHandJointTransform(joint: int): Transform3D;
/**
 * Sets the angular velocity for the given hand joint.
 * @param joint int
 * @param angularVelocity Vector3
 */
  setHandJointAngularVelocity(joint: int, angularVelocity: Vector3): void;
/**
 * Sets flags about the validity of the tracking data for the given hand joint.
 * @param joint int
 * @param flags int
 */
  setHandJointFlags(joint: int, flags: int): void;
/**
 * Sets the linear velocity for the given hand joint.
 * @param joint int
 * @param linearVelocity Vector3
 */
  setHandJointLinearVelocity(joint: int, linearVelocity: Vector3): void;
/**
 * Sets the radius of the given hand joint.
 * @param joint int
 * @param radius float
 */
  setHandJointRadius(joint: int, radius: float): void;
/**
 * Sets the transform for the given hand joint.
 * @param joint int
 * @param transform Transform3D
 */
  setHandJointTransform(joint: int, transform: Transform3D): void;
/**
 * The source of hand tracking data is unknown.
 */
  static readonly HAND_TRACKING_SOURCE_UNKNOWN: int;
/**
 * The source of hand tracking data is unobstructed, meaning that an accurate method of hand tracking is used. These include optical hand tracking, data gloves, etc.
 */
  static readonly HAND_TRACKING_SOURCE_UNOBSTRUCTED: int;
/**
 * The source of hand tracking data is a controller, meaning that joint positions are inferred from controller inputs.
 */
  static readonly HAND_TRACKING_SOURCE_CONTROLLER: int;
/**
 * No hand tracking data is tracked, this either means the hand is obscured, the controller is turned off, or tracking is not supported for the current input type.
 */
  static readonly HAND_TRACKING_SOURCE_NOT_TRACKED: int;
/**
 * Represents the size of the `HandTrackingSource` enum.
 */
  static readonly HAND_TRACKING_SOURCE_MAX: int;
/**
 * Palm joint.
 */
  static readonly HAND_JOINT_PALM: int;
/**
 * Wrist joint.
 */
  static readonly HAND_JOINT_WRIST: int;
/**
 * Thumb metacarpal joint.
 */
  static readonly HAND_JOINT_THUMB_METACARPAL: int;
/**
 * Thumb phalanx proximal joint.
 */
  static readonly HAND_JOINT_THUMB_PHALANX_PROXIMAL: int;
/**
 * Thumb phalanx distal joint.
 */
  static readonly HAND_JOINT_THUMB_PHALANX_DISTAL: int;
/**
 * Thumb tip joint.
 */
  static readonly HAND_JOINT_THUMB_TIP: int;
/**
 * Index finger metacarpal joint.
 */
  static readonly HAND_JOINT_INDEX_FINGER_METACARPAL: int;
/**
 * Index finger phalanx proximal joint.
 */
  static readonly HAND_JOINT_INDEX_FINGER_PHALANX_PROXIMAL: int;
/**
 * Index finger phalanx intermediate joint.
 */
  static readonly HAND_JOINT_INDEX_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Index finger phalanx distal joint.
 */
  static readonly HAND_JOINT_INDEX_FINGER_PHALANX_DISTAL: int;
/**
 * Index finger tip joint.
 */
  static readonly HAND_JOINT_INDEX_FINGER_TIP: int;
/**
 * Middle finger metacarpal joint.
 */
  static readonly HAND_JOINT_MIDDLE_FINGER_METACARPAL: int;
/**
 * Middle finger phalanx proximal joint.
 */
  static readonly HAND_JOINT_MIDDLE_FINGER_PHALANX_PROXIMAL: int;
/**
 * Middle finger phalanx intermediate joint.
 */
  static readonly HAND_JOINT_MIDDLE_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Middle finger phalanx distal joint.
 */
  static readonly HAND_JOINT_MIDDLE_FINGER_PHALANX_DISTAL: int;
/**
 * Middle finger tip joint.
 */
  static readonly HAND_JOINT_MIDDLE_FINGER_TIP: int;
/**
 * Ring finger metacarpal joint.
 */
  static readonly HAND_JOINT_RING_FINGER_METACARPAL: int;
/**
 * Ring finger phalanx proximal joint.
 */
  static readonly HAND_JOINT_RING_FINGER_PHALANX_PROXIMAL: int;
/**
 * Ring finger phalanx intermediate joint.
 */
  static readonly HAND_JOINT_RING_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Ring finger phalanx distal joint.
 */
  static readonly HAND_JOINT_RING_FINGER_PHALANX_DISTAL: int;
/**
 * Ring finger tip joint.
 */
  static readonly HAND_JOINT_RING_FINGER_TIP: int;
/**
 * Pinky finger metacarpal joint.
 */
  static readonly HAND_JOINT_PINKY_FINGER_METACARPAL: int;
/**
 * Pinky finger phalanx proximal joint.
 */
  static readonly HAND_JOINT_PINKY_FINGER_PHALANX_PROXIMAL: int;
/**
 * Pinky finger phalanx intermediate joint.
 */
  static readonly HAND_JOINT_PINKY_FINGER_PHALANX_INTERMEDIATE: int;
/**
 * Pinky finger phalanx distal joint.
 */
  static readonly HAND_JOINT_PINKY_FINGER_PHALANX_DISTAL: int;
/**
 * Pinky finger tip joint.
 */
  static readonly HAND_JOINT_PINKY_FINGER_TIP: int;
/**
 * Represents the size of the `HandJoint` enum.
 */
  static readonly HAND_JOINT_MAX: int;
/**
 * The hand joint's orientation data is valid.
 */
  static readonly HAND_JOINT_FLAG_ORIENTATION_VALID: int;
/**
 * The hand joint's orientation is actively tracked. May not be set if tracking has been temporarily lost.
 */
  static readonly HAND_JOINT_FLAG_ORIENTATION_TRACKED: int;
/**
 * The hand joint's position data is valid.
 */
  static readonly HAND_JOINT_FLAG_POSITION_VALID: int;
/**
 * The hand joint's position is actively tracked. May not be set if tracking has been temporarily lost.
 */
  static readonly HAND_JOINT_FLAG_POSITION_TRACKED: int;
/**
 * The hand joint's linear velocity data is valid.
 */
  static readonly HAND_JOINT_FLAG_LINEAR_VELOCITY_VALID: int;
/**
 * The hand joint's angular velocity data is valid.
 */
  static readonly HAND_JOINT_FLAG_ANGULAR_VELOCITY_VALID: int;
}
