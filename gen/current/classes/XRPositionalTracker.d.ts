import type { GodotArray, GodotDictionary, Signal, StringName, Transform3D, Variant, Vector2, Vector3, XRPose, XRTracker, float, int } from "../index.d.ts";
/**
 * A tracked object.
 * 
 * An instance of this object represents a device that is tracked, such as a controller or anchor point. HMDs aren't represented here as they are handled internally.
 * As controllers are turned on and the `XRInterface` detects them, instances of this object are automatically added to this list of active tracking objects accessible through the `XRServer`.
 * The `XRNode3D` and `XRAnchor3D` both consume objects of this type and should be used in your project. The positional trackers are just under-the-hood objects that make this all work. These are mostly exposed so that GDExtension-based interfaces can interact with them.
 */
export class XRPositionalTracker extends XRTracker {
/**
 * Defines which hand this tracker relates to.
 */
  hand: int;
/**
 * The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked.
 */
  profile: string;
/**
 * Returns an input for this tracker. It can return a boolean, float or `Vector2` value depending on whether the input is a button, trigger or thumbstick/thumbpad.
 * @param name StringName
 * @returns Variant
 * @deprecated Use through `XRControllerTracker`.
 */
  getInput(name: StringName): Variant;
/**
 * Returns the current `XRPose` state object for the bound `name` pose.
 * @param name StringName
 * @returns XRPose
 */
  getPose(name: StringName): XRPose;
/**
 * Returns `true` if the tracker is available and is currently tracking the bound `name` pose.
 * @param name StringName
 * @returns boolean
 */
  hasPose(name: StringName): boolean;
/**
 * Marks this pose as invalid, we don't clear the last reported state but it allows users to decide if trackers need to be hidden if we lose tracking or just remain at their last known position.
 * @param name StringName
 */
  invalidatePose(name: StringName): void;
/**
 * Changes the value for the given input. This method is called by a `XRInterface` implementation and should not be used directly.
 * @param name StringName
 * @param value Variant
 * @deprecated Use through `XRControllerTracker`.
 */
  setInput(name: StringName, value: Variant): void;
/**
 * Sets the transform, linear velocity, angular velocity and tracking confidence for the given pose. This method is called by a `XRInterface` implementation and should not be used directly.
 * @param name StringName
 * @param transform Transform3D
 * @param linearVelocity Vector3
 * @param angularVelocity Vector3
 * @param trackingConfidence int
 */
  setPose(name: StringName, transform: Transform3D, linearVelocity: Vector3, angularVelocity: Vector3, trackingConfidence: int): void;
/**
 * Emitted when a button on this tracker is pressed. Note that many XR runtimes allow other inputs to be mapped to buttons.
 */
  buttonPressed: Signal<[name: string]>;
/**
 * Emitted when a button on this tracker is released.
 */
  buttonReleased: Signal<[name: string]>;
/**
 * Emitted when a trigger or similar input on this tracker changes value.
 */
  inputFloatChanged: Signal<[name: string, value: float]>;
/**
 * Emitted when a thumbstick or thumbpad on this tracker moves.
 */
  inputVector2Changed: Signal<[name: string, vector: Vector2]>;
/**
 * Emitted when the state of a pose tracked by this tracker changes.
 */
  poseChanged: Signal<[pose: XRPose]>;
/**
 * Emitted when a pose tracked by this tracker stops getting updated tracking data.
 */
  poseLostTracking: Signal<[pose: XRPose]>;
/**
 * Emitted when the profile of our tracker changes.
 */
  profileChanged: Signal<[role: string]>;
/**
 * The hand this tracker is held in is unknown or not applicable.
 */
  static readonly TRACKER_HAND_UNKNOWN: int;
/**
 * This tracker is the left hand controller.
 */
  static readonly TRACKER_HAND_LEFT: int;
/**
 * This tracker is the right hand controller.
 */
  static readonly TRACKER_HAND_RIGHT: int;
/**
 * Represents the size of the `TrackerHand` enum.
 */
  static readonly TRACKER_HAND_MAX: int;
}
