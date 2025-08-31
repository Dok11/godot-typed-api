import type { GodotArray, GodotDictionary, Resource, Signal, SkeletonProfile, StringName, float, int } from "../index.d.ts";
/**
 * Describes a mapping of bone names for retargeting `Skeleton3D` into common names defined by a `SkeletonProfile`.
 * 
 * This class contains a dictionary that uses a list of bone names in `SkeletonProfile` as key names.
 * By assigning the actual `Skeleton3D` bone name as the key value, it maps the `Skeleton3D` to the `SkeletonProfile`.
 */
export class BoneMap extends Resource {
/**
 * A `SkeletonProfile` of the mapping target. Key names in the `BoneMap` are synchronized with it.
 */
  profile: SkeletonProfile;
/**
 * Returns a profile bone name having `skeleton_bone_name`. If not found, an empty `StringName` will be returned.
 * In the retargeting process, the returned bone name is the bone name of the target skeleton.
 * @param skeletonBoneName StringName
 * @returns StringName
 */
  findProfileBoneName(skeletonBoneName: StringName): StringName;
/**
 * Returns a skeleton bone name is mapped to `profile_bone_name`.
 * In the retargeting process, the returned bone name is the bone name of the source skeleton.
 * @param profileBoneName StringName
 * @returns StringName
 */
  getSkeletonBoneName(profileBoneName: StringName): StringName;
/**
 * Maps a skeleton bone name to `profile_bone_name`.
 * In the retargeting process, the setting bone name is the bone name of the source skeleton.
 * @param profileBoneName StringName
 * @param skeletonBoneName StringName
 */
  setSkeletonBoneName(profileBoneName: StringName, skeletonBoneName: StringName): void;
/**
 * This signal is emitted when change the key value in the `BoneMap`. This is used to validate mapping and to update `BoneMap` editor.
 */
  boneMapUpdated: Signal<[]>;
/**
 * This signal is emitted when change the value in profile or change the reference of profile. This is used to update key names in the `BoneMap` and to redraw the `BoneMap` editor.
 */
  profileUpdated: Signal<[]>;
}
