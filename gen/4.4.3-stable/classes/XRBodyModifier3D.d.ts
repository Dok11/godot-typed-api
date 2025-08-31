import type { GodotArray, GodotDictionary, SkeletonModifier3D, StringName, float, int } from "../index.d.ts";
/**
 * A node for driving body meshes from `XRBodyTracker` data.
 * 
 * This node uses body tracking data from an `XRBodyTracker` to pose the skeleton of a body mesh.
 * Positioning of the body is performed by creating an `XRNode3D` ancestor of the body mesh driven by the same `XRBodyTracker`.
 * The body tracking position-data is scaled by `Skeleton3D.motion_scale` when applied to the skeleton, which can be used to adjust the tracked body to match the scale of the body model.
 */
export class XRBodyModifier3D extends SkeletonModifier3D {
/**
 * The name of the `XRBodyTracker` registered with `XRServer` to obtain the body tracking data from.
 */
  bodyTracker: StringName;
/**
 * Specifies the body parts to update.
 */
  bodyUpdate: int;
/**
 * Specifies the type of updates to perform on the bones.
 */
  boneUpdate: int;
/**
 * The skeleton's upper body joints are updated.
 */
  static readonly BODY_UPDATE_UPPER_BODY: int;
/**
 * The skeleton's lower body joints are updated.
 */
  static readonly BODY_UPDATE_LOWER_BODY: int;
/**
 * The skeleton's hand joints are updated.
 */
  static readonly BODY_UPDATE_HANDS: int;
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
