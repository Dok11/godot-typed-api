import type { GodotArray, GodotDictionary, NodePath, SkeletonModification2D, float, int } from "../index.d.ts";
/**
 * A modification that uses CCDIK to manipulate a series of bones to reach a target in 2D.
 * 
 * This `SkeletonModification2D` uses an algorithm called Cyclic Coordinate Descent Inverse Kinematics, or CCDIK, to manipulate a chain of bones in a `Skeleton2D` so it reaches a defined target.
 * CCDIK works by rotating a set of bones, typically called a "bone chain", on a single axis. Each bone is rotated to face the target from the tip (by default), which over a chain of bones allow it to rotate properly to reach the target. Because the bones only rotate on a single axis, CCDIK *can* look more robotic than other IK solvers.
 * 
 * **Note:** The CCDIK modifier has `ccdik_joints`, which are the data objects that hold the data for each joint in the CCDIK chain. This is different from a bone! CCDIK joints hold the data needed for each bone in the bone chain used by CCDIK.
 * CCDIK also fully supports angle constraints, allowing for more control over how a solution is met.
 */
export class SkeletonModification2DCCDIK extends SkeletonModification2D {
/**
 * The number of CCDIK joints in the CCDIK modification.
 */
  ccdikDataChainLength: int;
/**
 * The NodePath to the node that is the target for the CCDIK modification. This node is what the CCDIK chain will attempt to rotate the bone chain to.
 */
  targetNodepath: NodePath;
/**
 * The end position of the CCDIK chain. Typically, this should be a child of a `Bone2D` node attached to the final `Bone2D` in the CCDIK chain.
 */
  tipNodepath: NodePath;
/**
 * Returns the `Bone2D` node assigned to the CCDIK joint at `joint_idx`.
 * @param jointIdx int
 * @returns NodePath
 */
  getCcdikJointBone2dNode(jointIdx: int): NodePath;
/**
 * Returns the index of the `Bone2D` node assigned to the CCDIK joint at `joint_idx`.
 * @param jointIdx int
 * @returns int
 */
  getCcdikJointBoneIndex(jointIdx: int): int;
/**
 * Returns whether the CCDIK joint at `joint_idx` uses an inverted joint constraint. See `set_ccdik_joint_constraint_angle_invert` for details.
 * @param jointIdx int
 * @returns boolean
 */
  getCcdikJointConstraintAngleInvert(jointIdx: int): boolean;
/**
 * Returns the maximum angle constraint for the joint at `joint_idx`.
 * @param jointIdx int
 * @returns float
 */
  getCcdikJointConstraintAngleMax(jointIdx: int): float;
/**
 * Returns the minimum angle constraint for the joint at `joint_idx`.
 * @param jointIdx int
 * @returns float
 */
  getCcdikJointConstraintAngleMin(jointIdx: int): float;
/**
 * Returns whether angle constraints on the CCDIK joint at `joint_idx` are enabled.
 * @param jointIdx int
 * @returns boolean
 */
  getCcdikJointEnableConstraint(jointIdx: int): boolean;
/**
 * Returns whether the joint at `joint_idx` is set to rotate from the joint, `true`, or to rotate from the tip, `false`. The default is to rotate from the tip.
 * @param jointIdx int
 * @returns boolean
 */
  getCcdikJointRotateFromJoint(jointIdx: int): boolean;
/**
 * Sets the `Bone2D` node assigned to the CCDIK joint at `joint_idx`.
 * @param jointIdx int
 * @param bone2dNodepath NodePath
 */
  setCcdikJointBone2dNode(jointIdx: int, bone2dNodepath: NodePath): void;
/**
 * Sets the bone index, `bone_idx`, of the CCDIK joint at `joint_idx`. When possible, this will also update the `bone2d_node` of the CCDIK joint based on data provided by the linked skeleton.
 * @param jointIdx int
 * @param boneIdx int
 */
  setCcdikJointBoneIndex(jointIdx: int, boneIdx: int): void;
/**
 * Sets whether the CCDIK joint at `joint_idx` uses an inverted joint constraint.
 * An inverted joint constraint only constraints the CCDIK joint to the angles *outside of* the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.
 * @param jointIdx int
 * @param invert boolean
 */
  setCcdikJointConstraintAngleInvert(jointIdx: int, invert: boolean): void;
/**
 * Sets the maximum angle constraint for the joint at `joint_idx`.
 * @param jointIdx int
 * @param angleMax float
 */
  setCcdikJointConstraintAngleMax(jointIdx: int, angleMax: float): void;
/**
 * Sets the minimum angle constraint for the joint at `joint_idx`.
 * @param jointIdx int
 * @param angleMin float
 */
  setCcdikJointConstraintAngleMin(jointIdx: int, angleMin: float): void;
/**
 * Determines whether angle constraints on the CCDIK joint at `joint_idx` are enabled. When `true`, constraints will be enabled and taken into account when solving.
 * @param jointIdx int
 * @param enableConstraint boolean
 */
  setCcdikJointEnableConstraint(jointIdx: int, enableConstraint: boolean): void;
/**
 * Sets whether the joint at `joint_idx` is set to rotate from the joint, `true`, or to rotate from the tip, `false`.
 * @param jointIdx int
 * @param rotateFromJoint boolean
 */
  setCcdikJointRotateFromJoint(jointIdx: int, rotateFromJoint: boolean): void;
}
