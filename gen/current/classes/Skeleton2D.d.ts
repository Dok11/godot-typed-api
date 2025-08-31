import type { Bone2D, GodotArray, GodotDictionary, Node2D, RID, Signal, SkeletonModificationStack2D, Transform2D, float, int } from "../index.d.ts";
/**
 * The parent of a hierarchy of `Bone2D`s, used to create a 2D skeletal animation.
 * 
 * `Skeleton2D` parents a hierarchy of `Bone2D` nodes. It holds a reference to each `Bone2D`'s rest pose and acts as a single point of access to its bones.
 * To set up different types of inverse kinematics for the given Skeleton2D, a `SkeletonModificationStack2D` should be created. The inverse kinematics be applied by increasing `SkeletonModificationStack2D.modification_count` and creating the desired number of modifications.
 */
export class Skeleton2D extends Node2D {
/**
 * Executes all the modifications on the `SkeletonModificationStack2D`, if the Skeleton2D has one assigned.
 * @param delta float
 * @param executionMode int
 */
  executeModifications(delta: float, executionMode: int): void;
/**
 * Returns a `Bone2D` from the node hierarchy parented by Skeleton2D. The object to return is identified by the parameter `idx`. Bones are indexed by descending the node hierarchy from top to bottom, adding the children of each branch before moving to the next sibling.
 * @param idx int
 * @returns Bone2D
 */
  getBone(idx: int): Bone2D;
/**
 * Returns the number of `Bone2D` nodes in the node hierarchy parented by Skeleton2D.
 * @returns int
 */
  getBoneCount(): int;
/**
 * Returns the local pose override transform for `bone_idx`.
 * @param boneIdx int
 * @returns Transform2D
 */
  getBoneLocalPoseOverride(boneIdx: int): Transform2D;
/**
 * Returns the `SkeletonModificationStack2D` attached to this skeleton, if one exists.
 * @returns SkeletonModificationStack2D
 */
  getModificationStack(): SkeletonModificationStack2D;
/**
 * Returns the `RID` of a Skeleton2D instance.
 * @returns RID
 */
  getSkeleton(): RID;
/**
 * Sets the local pose transform, `override_pose`, for the bone at `bone_idx`.
 * `strength` is the interpolation strength that will be used when applying the pose, and `persistent` determines if the applied pose will remain.
 * 
 * **Note:** The pose transform needs to be a local transform relative to the `Bone2D` node at `bone_idx`!
 * @param boneIdx int
 * @param overridePose Transform2D
 * @param strength float
 * @param persistent boolean
 */
  setBoneLocalPoseOverride(boneIdx: int, overridePose: Transform2D, strength: float, persistent: boolean): void;
/**
 * Sets the `SkeletonModificationStack2D` attached to this skeleton.
 * @param modificationStack SkeletonModificationStack2D
 */
  setModificationStack(modificationStack: SkeletonModificationStack2D): void;
/**
 * Emitted when the `Bone2D` setup attached to this skeletons changes. This is primarily used internally within the skeleton.
 */
  boneSetupChanged: Signal<[]>;
}
