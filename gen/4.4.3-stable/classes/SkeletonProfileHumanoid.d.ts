import type { GodotArray, GodotDictionary, SkeletonProfile, StringName, float, int } from "../index.d.ts";
/**
 * A humanoid `SkeletonProfile` preset.
 * 
 * A `SkeletonProfile` as a preset that is optimized for the human form. This exists for standardization, so all parameters are read-only.
 * A humanoid skeleton profile contains 54 bones divided in 4 groups: `"Body"`, `"Face"`, `"LeftHand"`, and `"RightHand"`. It is structured as follows:
 * [codeblock lang=text]
 * Root
 * └─ Hips
 * ├─ LeftUpperLeg
 * │  └─ LeftLowerLeg
 * │     └─ LeftFoot
 * │        └─ LeftToes
 * ├─ RightUpperLeg
 * │  └─ RightLowerLeg
 * │     └─ RightFoot
 * │        └─ RightToes
 * └─ Spine
 * └─ Chest
 * └─ UpperChest
 * ├─ Neck
 * │   └─ Head
 * │       ├─ Jaw
 * │       ├─ LeftEye
 * │       └─ RightEye
 * ├─ LeftShoulder
 * │  └─ LeftUpperArm
 * │     └─ LeftLowerArm
 * │        └─ LeftHand
 * │           ├─ LeftThumbMetacarpal
 * │           │  └─ LeftThumbProximal
 * │           │    └─ LeftThumbDistal
 * │           ├─ LeftIndexProximal
 * │           │  └─ LeftIndexIntermediate
 * │           │    └─ LeftIndexDistal
 * │           ├─ LeftMiddleProximal
 * │           │  └─ LeftMiddleIntermediate
 * │           │    └─ LeftMiddleDistal
 * │           ├─ LeftRingProximal
 * │           │  └─ LeftRingIntermediate
 * │           │    └─ LeftRingDistal
 * │           └─ LeftLittleProximal
 * │              └─ LeftLittleIntermediate
 * │                └─ LeftLittleDistal
 * └─ RightShoulder
 * └─ RightUpperArm
 * └─ RightLowerArm
 * └─ RightHand
 * ├─ RightThumbMetacarpal
 * │  └─ RightThumbProximal
 * │     └─ RightThumbDistal
 * ├─ RightIndexProximal
 * │  └─ RightIndexIntermediate
 * │     └─ RightIndexDistal
 * ├─ RightMiddleProximal
 * │  └─ RightMiddleIntermediate
 * │     └─ RightMiddleDistal
 * ├─ RightRingProximal
 * │  └─ RightRingIntermediate
 * │     └─ RightRingDistal
 * └─ RightLittleProximal
 * └─ RightLittleIntermediate
 * └─ RightLittleDistal
 * [/codeblock]
 */
export class SkeletonProfileHumanoid extends SkeletonProfile {
  boneSize: int;
  groupSize: int;
  rootBone: StringName;
  scaleBaseBone: StringName;
}
