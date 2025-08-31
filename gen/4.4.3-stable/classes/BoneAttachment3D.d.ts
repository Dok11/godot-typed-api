import type { GodotArray, GodotDictionary, Node3D, NodePath, Skeleton3D, float, int } from "../index.d.ts";
/**
 * А node that dynamically copies or overrides the 3D transform of a bone in its parent `Skeleton3D`.
 * 
 * This node selects a bone in a `Skeleton3D` and attaches to it. This means that the `BoneAttachment3D` node will either dynamically copy or override the 3D transform of the selected bone.
 */
export class BoneAttachment3D extends Node3D {
/**
 * The index of the attached bone.
 */
  boneIdx: int;
/**
 * The name of the attached bone.
 */
  boneName: string;
/**
 * Whether the BoneAttachment3D node will override the bone pose of the bone it is attached to. When set to `true`, the BoneAttachment3D node can change the pose of the bone. When set to `false`, the BoneAttachment3D will always be set to the bone's transform.
 * 
 * **Note:** This override performs interruptively in the skeleton update process using signals due to the old design. It may cause unintended behavior when used at the same time with `SkeletonModifier3D`.
 */
  overridePose: boolean;
/**
 * Returns the `NodePath` to the external `Skeleton3D` node, if one has been set.
 * @returns NodePath
 */
  getExternalSkeleton(): NodePath;
/**
 * Get parent or external `Skeleton3D` node if found.
 * @returns Skeleton3D
 */
  getSkeleton(): Skeleton3D;
/**
 * Returns whether the BoneAttachment3D node is using an external `Skeleton3D` rather than attempting to use its parent node as the `Skeleton3D`.
 * @returns boolean
 */
  getUseExternalSkeleton(): boolean;
/**
 * A function that is called automatically when the `Skeleton3D` is updated. This function is where the `BoneAttachment3D` node updates its position so it is correctly bound when it is *not* set to override the bone pose.
 */
  onSkeletonUpdate(): void;
/**
 * Sets the `NodePath` to the external skeleton that the BoneAttachment3D node should use. See `set_use_external_skeleton` to enable the external `Skeleton3D` node.
 * @param externalSkeleton NodePath
 */
  setExternalSkeleton(externalSkeleton: NodePath): void;
/**
 * Sets whether the BoneAttachment3D node will use an external `Skeleton3D` node rather than attempting to use its parent node as the `Skeleton3D`. When set to `true`, the BoneAttachment3D node will use the external `Skeleton3D` node set in `set_external_skeleton`.
 * @param useExternalSkeleton boolean
 */
  setUseExternalSkeleton(useExternalSkeleton: boolean): void;
}
