import type { GodotArray, GodotDictionary, SkeletonModifier3D, StringName, float, int } from "../index.d.ts";
/**
 * A node for driving hand meshes from `XRHandTracker` data.
 * 
 * This node uses hand tracking data from an `XRHandTracker` to pose the skeleton of a hand mesh.
 * Positioning of hands is performed by creating an `XRNode3D` ancestor of the hand mesh driven by the same `XRHandTracker`.
 * The hand tracking position-data is scaled by `Skeleton3D.motion_scale` when applied to the skeleton, which can be used to adjust the tracked hand to match the scale of the hand model.
 */
export class XRHandModifier3D extends SkeletonModifier3D {
/**
 * Specifies the type of updates to perform on the bones.
 */
  boneUpdate: int;
/**
 * The name of the `XRHandTracker` registered with `XRServer` to obtain the hand tracking data from.
 */
  handTracker: StringName;
/**
 * The skeleton's bones are fully updated (both position and rotation) to match the tracked bones.
 */
  static readonly BONE_UPDATE_FULL: int;
/**
 * The skeleton's bones are only rotated to align with the tracked bones, preserving bone length.
 */
  static readonly BONE_UPDATE_ROTATION_ONLY: int;
/**
 * Represents the size of the `BoneUpdate` enum.
 */
  static readonly BONE_UPDATE_MAX: int;
}
