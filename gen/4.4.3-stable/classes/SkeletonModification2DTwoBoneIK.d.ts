import type { GodotArray, GodotDictionary, NodePath, SkeletonModification2D, float, int } from "../index.d.ts";
/**
 * A modification that rotates two bones using the law of cosines to reach the target.
 * 
 * This `SkeletonModification2D` uses an algorithm typically called TwoBoneIK. This algorithm works by leveraging the law of cosines and the lengths of the bones to figure out what rotation the bones currently have, and what rotation they need to make a complete triangle, where the first bone, the second bone, and the target form the three vertices of the triangle. Because the algorithm works by making a triangle, it can only operate on two bones.
 * TwoBoneIK is great for arms, legs, and really any joints that can be represented by just two bones that bend to reach a target. This solver is more lightweight than `SkeletonModification2DFABRIK`, but gives similar, natural looking results.
 */
export class SkeletonModification2DTwoBoneIK extends SkeletonModification2D {
/**
 * If `true`, the bones in the modification will bend outward as opposed to inwards when contracting. If `false`, the bones will bend inwards when contracting.
 */
  flipBendDirection: boolean;
/**
 * The maximum distance the target can be at. If the target is farther than this distance, the modification will solve as if it's at this maximum distance. When set to `0`, the modification will solve without distance constraints.
 */
  targetMaximumDistance: float;
/**
 * The minimum distance the target can be at. If the target is closer than this distance, the modification will solve as if it's at this minimum distance. When set to `0`, the modification will solve without distance constraints.
 */
  targetMinimumDistance: float;
/**
 * The NodePath to the node that is the target for the TwoBoneIK modification. This node is what the modification will use when bending the `Bone2D` nodes.
 */
  targetNodepath: NodePath;
/**
 * Returns the `Bone2D` node that is being used as the first bone in the TwoBoneIK modification.
 * @returns NodePath
 */
  getJointOneBone2dNode(): NodePath;
/**
 * Returns the index of the `Bone2D` node that is being used as the first bone in the TwoBoneIK modification.
 * @returns int
 */
  getJointOneBoneIdx(): int;
/**
 * Returns the `Bone2D` node that is being used as the second bone in the TwoBoneIK modification.
 * @returns NodePath
 */
  getJointTwoBone2dNode(): NodePath;
/**
 * Returns the index of the `Bone2D` node that is being used as the second bone in the TwoBoneIK modification.
 * @returns int
 */
  getJointTwoBoneIdx(): int;
/**
 * Sets the `Bone2D` node that is being used as the first bone in the TwoBoneIK modification.
 * @param bone2dNode NodePath
 */
  setJointOneBone2dNode(bone2dNode: NodePath): void;
/**
 * Sets the index of the `Bone2D` node that is being used as the first bone in the TwoBoneIK modification.
 * @param boneIdx int
 */
  setJointOneBoneIdx(boneIdx: int): void;
/**
 * Sets the `Bone2D` node that is being used as the second bone in the TwoBoneIK modification.
 * @param bone2dNode NodePath
 */
  setJointTwoBone2dNode(bone2dNode: NodePath): void;
/**
 * Sets the index of the `Bone2D` node that is being used as the second bone in the TwoBoneIK modification.
 * @param boneIdx int
 */
  setJointTwoBoneIdx(boneIdx: int): void;
}
