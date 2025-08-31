import type { GodotArray, GodotDictionary, RefCounted, StringName, float, int } from "../index.d.ts";
/**
 * A tracked object.
 * 
 * This object is the base of all XR trackers.
 */
export class XRTracker extends RefCounted {
/**
 * The description of this tracker.
 */
  description: string;
/**
 * The unique name of this tracker. The trackers that are available differ between various XR runtimes and can often be configured by the user. Godot maintains a number of reserved names that it expects the `XRInterface` to implement if applicable:
 * - `head` identifies the `XRPositionalTracker` of the players head
 * - `left_hand` identifies the `XRControllerTracker` in the players left hand
 * - `right_hand` identifies the `XRControllerTracker` in the players right hand
 * - `/user/hand_tracker/left` identifies the `XRHandTracker` for the players left hand
 * - `/user/hand_tracker/right` identifies the `XRHandTracker` for the players right hand
 * - `/user/body_tracker` identifies the `XRBodyTracker` for the players body
 * - `/user/face_tracker` identifies the `XRFaceTracker` for the players face
 */
  name: StringName;
/**
 * The type of tracker.
 */
  type_: int;
}
