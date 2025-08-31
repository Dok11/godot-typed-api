import type { GodotArray, GodotDictionary, Node3D, PackedInt32Array, Quaternion, RID, Signal, Skin, SkinReference, StringName, Transform3D, Variant, Vector3, float, int } from "../index.d.ts";
/**
 * A node containing a bone hierarchy, used to create a 3D skeletal animation.
 * 
 * `Skeleton3D` provides an interface for managing a hierarchy of bones, including pose, rest and animation (see `Animation`). It can also use ragdoll physics.
 * The overall transform of a bone with respect to the skeleton is determined by bone pose. Bone rest defines the initial transform of the bone pose.
 * Note that "global pose" below refers to the overall transform of the bone with respect to skeleton, so it is not the actual global/world transform of the bone.
 */
export class Skeleton3D extends Node3D {
/**
 * If you follow the recommended workflow and explicitly have `PhysicalBoneSimulator3D` as a child of `Skeleton3D`, you can control whether it is affected by raycasting without running `physical_bones_start_simulation`, by its `SkeletonModifier3D.active`.
 * However, for old (deprecated) configurations, `Skeleton3D` has an internal virtual `PhysicalBoneSimulator3D` for compatibility. This property controls the internal virtual `PhysicalBoneSimulator3D`'s `SkeletonModifier3D.active`.
 */
  animatePhysicalBones: boolean;
/**
 * Sets the processing timing for the Modifier.
 */
  modifierCallbackModeProcess: int;
/**
 * Multiplies the 3D position track animation.
 * 
 * **Note:** Unless this value is `1.0`, the key value in animation will not match the actual position value.
 */
  motionScale: float;
/**
 * If `true`, forces the bones in their default rest pose, regardless of their values. In the editor, this also prevents the bones from being edited.
 */
  showRestOnly: boolean;
/**
 * Adds a new bone with the given name. Returns the new bone's index, or `-1` if this method fails.
 * 
 * **Note:** Bone names should be unique, non empty, and cannot include the `:` and `/` characters.
 * @param name string
 * @returns int
 */
  addBone(name: string): int;
/**
 * Clear all the bones in this skeleton.
 */
  clearBones(): void;
/**
 * Removes the global pose override on all bones in the skeleton.
 */
  clearBonesGlobalPoseOverride(): void;
/**
 * @returns Skin
 */
  createSkinFromRestTransforms(): Skin;
/**
 * Returns the bone index that matches `name` as its name. Returns `-1` if no bone with this name exists.
 * @param name string
 * @returns int
 */
  findBone(name: string): int;
/**
 * Force updates the bone transforms/poses for all bones in the skeleton.
 * @deprecated This method should only be called internally.
 */
  forceUpdateAllBoneTransforms(): void;
/**
 * Force updates the bone transform for the bone at `bone_idx` and all of its children.
 * @param boneIdx int
 */
  forceUpdateBoneChildTransform(boneIdx: int): void;
/**
 * Returns an array containing the bone indexes of all the child node of the passed in bone, `bone_idx`.
 * @param boneIdx int
 * @returns PackedInt32Array
 */
  getBoneChildren(boneIdx: int): PackedInt32Array;
/**
 * Returns the number of bones in the skeleton.
 * @returns int
 */
  getBoneCount(): int;
/**
 * Returns the overall transform of the specified bone, with respect to the skeleton. Being relative to the skeleton frame, this is not the actual "global" transform of the bone.
 * 
 * **Note:** This is the global pose you set to the skeleton in the process, the final global pose can get overridden by modifiers in the deferred process, if you want to access the final global pose, use `SkeletonModifier3D.modification_processed`.
 * @param boneIdx int
 * @returns Transform3D
 */
  getBoneGlobalPose(boneIdx: int): Transform3D;
/**
 * Returns the overall transform of the specified bone, with respect to the skeleton, but without any global pose overrides. Being relative to the skeleton frame, this is not the actual "global" transform of the bone.
 * @param boneIdx int
 * @returns Transform3D
 */
  getBoneGlobalPoseNoOverride(boneIdx: int): Transform3D;
/**
 * Returns the global pose override transform for `bone_idx`.
 * @param boneIdx int
 * @returns Transform3D
 */
  getBoneGlobalPoseOverride(boneIdx: int): Transform3D;
/**
 * Returns the global rest transform for `bone_idx`.
 * @param boneIdx int
 * @returns Transform3D
 */
  getBoneGlobalRest(boneIdx: int): Transform3D;
/**
 * Returns bone metadata for `bone_idx` with `key`.
 * @param boneIdx int
 * @param key StringName
 * @returns Variant
 */
  getBoneMeta(boneIdx: int, key: StringName): Variant;
/**
 * Returns a list of all metadata keys for `bone_idx`.
 * @param boneIdx int
 * @returns StringName[]
 */
  getBoneMetaList(boneIdx: int): StringName[];
/**
 * Returns the name of the bone at index `bone_idx`.
 * @param boneIdx int
 * @returns string
 */
  getBoneName(boneIdx: int): string;
/**
 * Returns the bone index which is the parent of the bone at `bone_idx`. If -1, then bone has no parent.
 * 
 * **Note:** The parent bone returned will always be less than `bone_idx`.
 * @param boneIdx int
 * @returns int
 */
  getBoneParent(boneIdx: int): int;
/**
 * Returns the pose transform of the specified bone.
 * 
 * **Note:** This is the pose you set to the skeleton in the process, the final pose can get overridden by modifiers in the deferred process, if you want to access the final pose, use `SkeletonModifier3D.modification_processed`.
 * @param boneIdx int
 * @returns Transform3D
 */
  getBonePose(boneIdx: int): Transform3D;
/**
 * Returns the pose position of the bone at `bone_idx`. The returned `Vector3` is in the local coordinate space of the `Skeleton3D` node.
 * @param boneIdx int
 * @returns Vector3
 */
  getBonePosePosition(boneIdx: int): Vector3;
/**
 * Returns the pose rotation of the bone at `bone_idx`. The returned `Quaternion` is local to the bone with respect to the rotation of any parent bones.
 * @param boneIdx int
 * @returns Quaternion
 */
  getBonePoseRotation(boneIdx: int): Quaternion;
/**
 * Returns the pose scale of the bone at `bone_idx`.
 * @param boneIdx int
 * @returns Vector3
 */
  getBonePoseScale(boneIdx: int): Vector3;
/**
 * Returns the rest transform for a bone `bone_idx`.
 * @param boneIdx int
 * @returns Transform3D
 */
  getBoneRest(boneIdx: int): Transform3D;
/**
 * Returns all bone names concatenated with commas (`,`) as a single `StringName`.
 * It is useful to set it as a hint for the enum property.
 * @returns StringName
 */
  getConcatenatedBoneNames(): StringName;
/**
 * Returns an array with all of the bones that are parentless. Another way to look at this is that it returns the indexes of all the bones that are not dependent or modified by other bones in the Skeleton.
 * @returns PackedInt32Array
 */
  getParentlessBones(): PackedInt32Array;
/**
 * Returns the number of times the bone hierarchy has changed within this skeleton, including renames.
 * The Skeleton version is not serialized: only use within a single instance of Skeleton3D.
 * Use for invalidating caches in IK solvers and other nodes which process bones.
 * @returns int
 */
  getVersion(): int;
/**
 * Returns whether there exists any bone metadata for `bone_idx` with key `key`.
 * @param boneIdx int
 * @param key StringName
 * @returns boolean
 */
  hasBoneMeta(boneIdx: int, key: StringName): boolean;
/**
 * Returns whether the bone pose for the bone at `bone_idx` is enabled.
 * @param boneIdx int
 * @returns boolean
 */
  isBoneEnabled(boneIdx: int): boolean;
/**
 * Returns all bones in the skeleton to their rest poses.
 */
  localizeRests(): void;
/**
 * Adds a collision exception to the physical bone.
 * Works just like the `RigidBody3D` node.
 * @param exception RID
 */
  physicalBonesAddCollisionException(exception: RID): void;
/**
 * Removes a collision exception to the physical bone.
 * Works just like the `RigidBody3D` node.
 * @param exception RID
 */
  physicalBonesRemoveCollisionException(exception: RID): void;
/**
 * Tells the `PhysicalBone3D` nodes in the Skeleton to start simulating and reacting to the physics world.
 * Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.
 * @param bones StringName[] (optional, default: [])
 */
  physicalBonesStartSimulation(bones?: StringName[]): void;
/**
 * Tells the `PhysicalBone3D` nodes in the Skeleton to stop simulating.
 */
  physicalBonesStopSimulation(): void;
/**
 * Binds the given Skin to the Skeleton.
 * @param skin Skin
 * @returns SkinReference
 */
  registerSkin(skin: Skin): SkinReference;
/**
 * Sets the bone pose to rest for `bone_idx`.
 * @param boneIdx int
 */
  resetBonePose(boneIdx: int): void;
/**
 * Sets all bone poses to rests.
 */
  resetBonePoses(): void;
/**
 * Disables the pose for the bone at `bone_idx` if `false`, enables the bone pose if `true`.
 * @param boneIdx int
 * @param enabled boolean (optional, default: true)
 */
  setBoneEnabled(boneIdx: int, enabled?: boolean): void;
/**
 * Sets the global pose transform, `pose`, for the bone at `bone_idx`.
 * 
 * **Note:** If other bone poses have been changed, this method executes a dirty poses recalculation and will cause performance to deteriorate. If you know that multiple global poses will be applied, consider using `set_bone_pose` with precalculation.
 * @param boneIdx int
 * @param pose Transform3D
 */
  setBoneGlobalPose(boneIdx: int, pose: Transform3D): void;
/**
 * Sets the global pose transform, `pose`, for the bone at `bone_idx`.
 * `amount` is the interpolation strength that will be used when applying the pose, and `persistent` determines if the applied pose will remain.
 * 
 * **Note:** The pose transform needs to be a global pose! To convert a world transform from a `Node3D` to a global bone pose, multiply the `Transform3D.affine_inverse` of the node's `Node3D.global_transform` by the desired world transform.
 * @param boneIdx int
 * @param pose Transform3D
 * @param amount float
 * @param persistent boolean (optional, default: false)
 */
  setBoneGlobalPoseOverride(boneIdx: int, pose: Transform3D, amount: float, persistent?: boolean): void;
/**
 * Sets bone metadata for `bone_idx`, will set the `key` meta to `value`.
 * @param boneIdx int
 * @param key StringName
 * @param value Variant
 */
  setBoneMeta(boneIdx: int, key: StringName, value: Variant): void;
/**
 * Sets the bone name, `name`, for the bone at `bone_idx`.
 * @param boneIdx int
 * @param name string
 */
  setBoneName(boneIdx: int, name: string): void;
/**
 * Sets the bone index `parent_idx` as the parent of the bone at `bone_idx`. If -1, then bone has no parent.
 * 
 * **Note:** `parent_idx` must be less than `bone_idx`.
 * @param boneIdx int
 * @param parentIdx int
 */
  setBoneParent(boneIdx: int, parentIdx: int): void;
/**
 * Sets the pose transform, `pose`, for the bone at `bone_idx`.
 * @param boneIdx int
 * @param pose Transform3D
 */
  setBonePose(boneIdx: int, pose: Transform3D): void;
/**
 * Sets the pose position of the bone at `bone_idx` to `position`. `position` is a `Vector3` describing a position local to the `Skeleton3D` node.
 * @param boneIdx int
 * @param position Vector3
 */
  setBonePosePosition(boneIdx: int, position: Vector3): void;
/**
 * Sets the pose rotation of the bone at `bone_idx` to `rotation`. `rotation` is a `Quaternion` describing a rotation in the bone's local coordinate space with respect to the rotation of any parent bones.
 * @param boneIdx int
 * @param rotation Quaternion
 */
  setBonePoseRotation(boneIdx: int, rotation: Quaternion): void;
/**
 * Sets the pose scale of the bone at `bone_idx` to `scale`.
 * @param boneIdx int
 * @param scale Vector3
 */
  setBonePoseScale(boneIdx: int, scale: Vector3): void;
/**
 * Sets the rest transform for bone `bone_idx`.
 * @param boneIdx int
 * @param rest Transform3D
 */
  setBoneRest(boneIdx: int, rest: Transform3D): void;
/**
 * Unparents the bone at `bone_idx` and sets its rest position to that of its parent prior to being reset.
 * @param boneIdx int
 */
  unparentBoneAndRest(boneIdx: int): void;
/**
 * Emitted when the bone at `bone_idx` is toggled with `set_bone_enabled`. Use `is_bone_enabled` to check the new value.
 */
  boneEnabledChanged: Signal<[boneIdx: int]>;
  boneListChanged: Signal<[]>;
/**
 * Emitted when the pose is updated.
 * 
 * **Note:** During the update process, this signal is not fired, so modification by `SkeletonModifier3D` is not detected.
 */
  poseUpdated: Signal<[]>;
/**
 * Emitted when the rest is updated.
 */
  restUpdated: Signal<[]>;
/**
 * Emitted when the value of `show_rest_only` changes.
 */
  showRestOnlyChanged: Signal<[]>;
/**
 * Emitted when the final pose has been calculated will be applied to the skin in the update process.
 * This means that all `SkeletonModifier3D` processing is complete. In order to detect the completion of the processing of each `SkeletonModifier3D`, use `SkeletonModifier3D.modification_processed`.
 */
  skeletonUpdated: Signal<[]>;
/**
 * Notification received when this skeleton's pose needs to be updated. In that case, this is called only once per frame in a deferred process.
 */
  static readonly NOTIFICATION_UPDATE_SKELETON: int;
/**
 * Set a flag to process modification during physics frames (see `Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`).
 */
  static readonly MODIFIER_CALLBACK_MODE_PROCESS_PHYSICS: int;
/**
 * Set a flag to process modification during process frames (see `Node.NOTIFICATION_INTERNAL_PROCESS`).
 */
  static readonly MODIFIER_CALLBACK_MODE_PROCESS_IDLE: int;
}
