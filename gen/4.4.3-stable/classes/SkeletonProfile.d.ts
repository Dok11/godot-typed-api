import type { GodotArray, GodotDictionary, Resource, Signal, StringName, Texture2D, Transform3D, Vector2, float, int } from "../index.d.ts";
/**
 * Base class for a profile of a virtual skeleton used as a target for retargeting.
 * 
 * This resource is used in `EditorScenePostImport`. Some parameters are referring to bones in `Skeleton3D`, `Skin`, `Animation`, and some other nodes are rewritten based on the parameters of `SkeletonProfile`.
 * 
 * **Note:** These parameters need to be set only when creating a custom profile. In `SkeletonProfileHumanoid`, they are defined internally as read-only values.
 */
export class SkeletonProfile extends Resource {
/**
 * The amount of bones in retargeting section's `BoneMap` editor. For example, `SkeletonProfileHumanoid` has 56 bones.
 * The size of elements in `BoneMap` updates when changing this property in it's assigned `SkeletonProfile`.
 */
  boneSize: int;
/**
 * The amount of groups of bones in retargeting section's `BoneMap` editor. For example, `SkeletonProfileHumanoid` has 4 groups.
 * This property exists to separate the bone list into several sections in the editor.
 */
  groupSize: int;
/**
 * A bone name that will be used as the root bone in `AnimationTree`. This should be the bone of the parent of hips that exists at the world origin.
 */
  rootBone: StringName;
/**
 * A bone name which will use model's height as the coefficient for normalization. For example, `SkeletonProfileHumanoid` defines it as `Hips`.
 */
  scaleBaseBone: StringName;
/**
 * Returns the bone index that matches `bone_name` as its name.
 * @param boneName StringName
 * @returns int
 */
  findBone(boneName: StringName): int;
/**
 * Returns the name of the bone at `bone_idx` that will be the key name in the `BoneMap`.
 * In the retargeting process, the returned bone name is the bone name of the target skeleton.
 * @param boneIdx int
 * @returns StringName
 */
  getBoneName(boneIdx: int): StringName;
/**
 * Returns the name of the bone which is the parent to the bone at `bone_idx`. The result is empty if the bone has no parent.
 * @param boneIdx int
 * @returns StringName
 */
  getBoneParent(boneIdx: int): StringName;
/**
 * Returns the name of the bone which is the tail of the bone at `bone_idx`.
 * @param boneIdx int
 * @returns StringName
 */
  getBoneTail(boneIdx: int): StringName;
/**
 * Returns the group of the bone at `bone_idx`.
 * @param boneIdx int
 * @returns StringName
 */
  getGroup(boneIdx: int): StringName;
/**
 * Returns the name of the group at `group_idx` that will be the drawing group in the `BoneMap` editor.
 * @param groupIdx int
 * @returns StringName
 */
  getGroupName(groupIdx: int): StringName;
/**
 * Returns the offset of the bone at `bone_idx` that will be the button position in the `BoneMap` editor.
 * This is the offset with origin at the top left corner of the square.
 * @param boneIdx int
 * @returns Vector2
 */
  getHandleOffset(boneIdx: int): Vector2;
/**
 * Returns the reference pose transform for bone `bone_idx`.
 * @param boneIdx int
 * @returns Transform3D
 */
  getReferencePose(boneIdx: int): Transform3D;
/**
 * Returns the tail direction of the bone at `bone_idx`.
 * @param boneIdx int
 * @returns int
 */
  getTailDirection(boneIdx: int): int;
/**
 * Returns the texture of the group at `group_idx` that will be the drawing group background image in the `BoneMap` editor.
 * @param groupIdx int
 * @returns Texture2D
 */
  getTexture(groupIdx: int): Texture2D;
/**
 * Returns whether the bone at `bone_idx` is required for retargeting.
 * This value is used by the bone map editor. If this method returns `true`, and no bone is assigned, the handle color will be red on the bone map editor.
 * @param boneIdx int
 * @returns boolean
 */
  isRequired(boneIdx: int): boolean;
/**
 * Sets the name of the bone at `bone_idx` that will be the key name in the `BoneMap`.
 * In the retargeting process, the setting bone name is the bone name of the target skeleton.
 * @param boneIdx int
 * @param boneName StringName
 */
  setBoneName(boneIdx: int, boneName: StringName): void;
/**
 * Sets the bone with name `bone_parent` as the parent of the bone at `bone_idx`. If an empty string is passed, then the bone has no parent.
 * @param boneIdx int
 * @param boneParent StringName
 */
  setBoneParent(boneIdx: int, boneParent: StringName): void;
/**
 * Sets the bone with name `bone_tail` as the tail of the bone at `bone_idx`.
 * @param boneIdx int
 * @param boneTail StringName
 */
  setBoneTail(boneIdx: int, boneTail: StringName): void;
/**
 * Sets the group of the bone at `bone_idx`.
 * @param boneIdx int
 * @param group StringName
 */
  setGroup(boneIdx: int, group: StringName): void;
/**
 * Sets the name of the group at `group_idx` that will be the drawing group in the `BoneMap` editor.
 * @param groupIdx int
 * @param groupName StringName
 */
  setGroupName(groupIdx: int, groupName: StringName): void;
/**
 * Sets the offset of the bone at `bone_idx` that will be the button position in the `BoneMap` editor.
 * This is the offset with origin at the top left corner of the square.
 * @param boneIdx int
 * @param handleOffset Vector2
 */
  setHandleOffset(boneIdx: int, handleOffset: Vector2): void;
/**
 * Sets the reference pose transform for bone `bone_idx`.
 * @param boneIdx int
 * @param boneName Transform3D
 */
  setReferencePose(boneIdx: int, boneName: Transform3D): void;
/**
 * Sets the required status for bone `bone_idx` to `required`.
 * @param boneIdx int
 * @param required boolean
 */
  setRequired(boneIdx: int, required: boolean): void;
/**
 * Sets the tail direction of the bone at `bone_idx`.
 * 
 * **Note:** This only specifies the method of calculation. The actual coordinates required should be stored in an external skeleton, so the calculation itself needs to be done externally.
 * @param boneIdx int
 * @param tailDirection int
 */
  setTailDirection(boneIdx: int, tailDirection: int): void;
/**
 * Sets the texture of the group at `group_idx` that will be the drawing group background image in the `BoneMap` editor.
 * @param groupIdx int
 * @param texture Texture2D
 */
  setTexture(groupIdx: int, texture: Texture2D): void;
/**
 * This signal is emitted when change the value in profile. This is used to update key name in the `BoneMap` and to redraw the `BoneMap` editor.
 * 
 * **Note:** This signal is not connected directly to editor to simplify the reference, instead it is passed on to editor through the `BoneMap`.
 */
  profileUpdated: Signal<[]>;
/**
 * Direction to the average coordinates of bone children.
 */
  static readonly TAIL_DIRECTION_AVERAGE_CHILDREN: int;
/**
 * Direction to the coordinates of specified bone child.
 */
  static readonly TAIL_DIRECTION_SPECIFIC_CHILD: int;
/**
 * Direction is not calculated.
 */
  static readonly TAIL_DIRECTION_END: int;
}
