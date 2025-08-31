import type { GodotArray, GodotDictionary, RefCounted, StringName, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * This object contains all data related to a pose on a tracked object.
 * 
 * XR runtimes often identify multiple locations on devices such as controllers that are spatially tracked.
 * Orientation, location, linear velocity and angular velocity are all provided for each pose by the XR runtime. This object contains this state of a pose.
 */
export class XRPose extends RefCounted {
/**
 * The angular velocity for this pose.
 */
  angularVelocity: Vector3;
/**
 * If `true` our tracking data is up to date. If `false` we're no longer receiving new tracking data and our state is whatever that last valid state was.
 */
  hasTrackingData: boolean;
/**
 * The linear velocity of this pose.
 */
  linearVelocity: Vector3;
/**
 * The name of this pose. Usually, this name is derived from an action map set up by the user. Godot also suggests some pose names that `XRInterface` objects are expected to implement:
 * - `root` is the root location, often used for tracked objects that do not have further nodes.
 * - `aim` is the tip of a controller with its orientation pointing outwards, often used for raycasts.
 * - `grip` is the location where the user grips the controller.
 * - `skeleton` is the root location for a hand mesh, when using hand tracking and an animated skeleton is supplied by the XR runtime.
 */
  name: StringName;
/**
 * The tracking confidence for this pose, provides insight on how accurate the spatial positioning of this record is.
 */
  trackingConfidence: int;
/**
 * The transform containing the original and transform as reported by the XR runtime.
 */
  transform: Transform3D;
/**
 * Returns the `transform` with world scale and our reference frame applied. This is the transform used to position `XRNode3D` objects.
 * @returns Transform3D
 */
  getAdjustedTransform(): Transform3D;
/**
 * No tracking information is available for this pose.
 */
  static readonly XR_TRACKING_CONFIDENCE_NONE: int;
/**
 * Tracking information may be inaccurate or estimated. For example, with inside out tracking this would indicate a controller may be (partially) obscured.
 */
  static readonly XR_TRACKING_CONFIDENCE_LOW: int;
/**
 * Tracking information is considered accurate and up to date.
 */
  static readonly XR_TRACKING_CONFIDENCE_HIGH: int;
}
