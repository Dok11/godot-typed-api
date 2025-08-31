import type { GodotArray, GodotDictionary, Node3D, Signal, Skeleton3D, float, int } from "../index.d.ts";
/**
 * A node that may modify Skeleton3D's bone.
 * 
 * `SkeletonModifier3D` retrieves a target `Skeleton3D` by having a `Skeleton3D` parent.
 * If there is `AnimationMixer`, modification always performs after playback process of the `AnimationMixer`.
 * This node should be used to implement custom IK solvers, constraints, or skeleton physics.
 */
export class SkeletonModifier3D extends Node3D {
/**
 * If `true`, the `SkeletonModifier3D` will be processing.
 */
  active: boolean;
/**
 * Sets the influence of the modification.
 * 
 * **Note:** This value is used by `Skeleton3D` to blend, so the `SkeletonModifier3D` should always apply only 100% of the result without interpolation.
 */
  influence: float;
/**
 * Get parent `Skeleton3D` node if found.
 * @returns Skeleton3D
 */
  getSkeleton(): Skeleton3D;
/**
 * Override this virtual method to implement a custom skeleton modifier. You should do things like get the `Skeleton3D`'s current pose and apply the pose here.
 * `_process_modification` must not apply `influence` to bone poses because the `Skeleton3D` automatically applies influence to all bone poses set by the modifier.
 */
  private processModification(): void;
/**
 * Notifies when the modification have been finished.
 * 
 * **Note:** If you want to get the modified bone pose by the modifier, you must use `Skeleton3D.get_bone_pose` or `Skeleton3D.get_bone_global_pose` at the moment this signal is fired.
 */
  modificationProcessed: Signal<[]>;
/**
 * Enumerated value for the +X axis.
 */
  static readonly BONE_AXIS_PLUS_X: int;
/**
 * Enumerated value for the -X axis.
 */
  static readonly BONE_AXIS_MINUS_X: int;
/**
 * Enumerated value for the +Y axis.
 */
  static readonly BONE_AXIS_PLUS_Y: int;
/**
 * Enumerated value for the -Y axis.
 */
  static readonly BONE_AXIS_MINUS_Y: int;
/**
 * Enumerated value for the +Z axis.
 */
  static readonly BONE_AXIS_PLUS_Z: int;
/**
 * Enumerated value for the -Z axis.
 */
  static readonly BONE_AXIS_MINUS_Z: int;
}
