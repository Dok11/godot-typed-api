import type { GodotArray, GodotDictionary, SkeletonModifier3D, SkeletonProfile, float, int } from "../index.d.ts";
/**
 * A modifier to transfer parent skeleton poses (or global poses) to child skeletons in model space with different rests.
 * 
 * Retrieves the pose (or global pose) relative to the parent Skeleton's rest in model space and transfers it to the child Skeleton.
 * This modifier rewrites the pose of the child skeleton directly in the parent skeleton's update process. This means that it overwrites the mapped bone pose set in the normal process on the target skeleton. If you want to set the target skeleton bone pose after retargeting, you will need to add a `SkeletonModifier3D` child to the target skeleton and thereby modify the pose.
 * 
 * **Note:** When the `use_global_pose` is enabled, even if it is an unmapped bone, it can cause visual problems because the global pose is applied ignoring the parent bone's pose **if it has mapped bone children**. See also `use_global_pose`.
 */
export class RetargetModifier3D extends SkeletonModifier3D {
/**
 * Flags to control the process of the transform elements individually when `use_global_pose` is disabled.
 */
  enable: int;
/**
 * `SkeletonProfile` for retargeting bones with names matching the bone list.
 */
  profile: SkeletonProfile;
/**
 * If `false`, in case the target skeleton has fewer bones than the source skeleton, the source bone parent's transform will be ignored.
 * Instead, it is possible to retarget between models with different body shapes, and position, rotation, and scale can be retargeted separately.
 * If `true`, retargeting is performed taking into account global pose.
 * In case the target skeleton has fewer bones than the source skeleton, the source bone parent's transform is taken into account. However, bone length between skeletons must match exactly, if not, the bones will be forced to expand or shrink.
 * This is useful for using dummy bone with length `0` to match postures when retargeting between models with different number of bones.
 */
  useGlobalPose: boolean;
/**
 * Returns `true` if `enable` has `TRANSFORM_FLAG_POSITION`.
 * @returns boolean
 */
  isPositionEnabled(): boolean;
/**
 * Returns `true` if `enable` has `TRANSFORM_FLAG_ROTATION`.
 * @returns boolean
 */
  isRotationEnabled(): boolean;
/**
 * Returns `true` if `enable` has `TRANSFORM_FLAG_SCALE`.
 * @returns boolean
 */
  isScaleEnabled(): boolean;
/**
 * Sets `TRANSFORM_FLAG_POSITION` into `enable`.
 * @param enabled boolean
 */
  setPositionEnabled(enabled: boolean): void;
/**
 * Sets `TRANSFORM_FLAG_ROTATION` into `enable`.
 * @param enabled boolean
 */
  setRotationEnabled(enabled: boolean): void;
/**
 * Sets `TRANSFORM_FLAG_SCALE` into `enable`.
 * @param enabled boolean
 */
  setScaleEnabled(enabled: boolean): void;
/**
 * If set, allows to retarget the position.
 */
  static readonly TRANSFORM_FLAG_POSITION: int;
/**
 * If set, allows to retarget the rotation.
 */
  static readonly TRANSFORM_FLAG_ROTATION: int;
/**
 * If set, allows to retarget the scale.
 */
  static readonly TRANSFORM_FLAG_SCALE: int;
/**
 * If set, allows to retarget the position/rotation/scale.
 */
  static readonly TRANSFORM_FLAG_ALL: int;
}
