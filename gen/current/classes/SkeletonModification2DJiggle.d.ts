import type { GodotArray, GodotDictionary, NodePath, SkeletonModification2D, Vector2, float, int } from "../index.d.ts";
/**
 * A modification that jiggles `Bone2D` nodes as they move towards a target.
 * 
 * This modification moves a series of bones, typically called a bone chain, towards a target. What makes this modification special is that it calculates the velocity and acceleration for each bone in the bone chain, and runs a very light physics-like calculation using the inputted values. This allows the bones to overshoot the target and "jiggle" around. It can be configured to act more like a spring, or sway around like cloth might.
 * This modification is useful for adding additional motion to things like hair, the edges of clothing, and more. It has several settings to that allow control over how the joint moves when the target moves.
 * 
 * **Note:** The Jiggle modifier has `jiggle_joints`, which are the data objects that hold the data for each joint in the Jiggle chain. This is different from than `Bone2D` nodes! Jiggle joints hold the data needed for each `Bone2D` in the bone chain used by the Jiggle modification.
 */
export class SkeletonModification2DJiggle extends SkeletonModification2D {
/**
 * The default amount of damping applied to the Jiggle joints, if they are not overridden. Higher values lead to more of the calculated velocity being applied.
 */
  damping: float;
/**
 * The default amount of gravity applied to the Jiggle joints, if they are not overridden.
 */
  gravity: Vector2;
/**
 * The amount of Jiggle joints in the Jiggle modification.
 */
  jiggleDataChainLength: int;
/**
 * The default amount of mass assigned to the Jiggle joints, if they are not overridden. Higher values lead to faster movements and more overshooting.
 */
  mass: float;
/**
 * The default amount of stiffness assigned to the Jiggle joints, if they are not overridden. Higher values act more like springs, quickly moving into the correct position.
 */
  stiffness: float;
/**
 * The NodePath to the node that is the target for the Jiggle modification. This node is what the Jiggle chain will attempt to rotate the bone chain to.
 */
  targetNodepath: NodePath;
/**
 * Whether the gravity vector, `gravity`, should be applied to the Jiggle joints, assuming they are not overriding the default settings.
 */
  useGravity: boolean;
/**
 * Returns the collision mask used by the Jiggle modifier when collisions are enabled.
 * @returns int
 */
  getCollisionMask(): int;
/**
 * Returns the `Bone2D` node assigned to the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @returns NodePath
 */
  getJiggleJointBone2dNode(jointIdx: int): NodePath;
/**
 * Returns the index of the `Bone2D` node assigned to the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @returns int
 */
  getJiggleJointBoneIndex(jointIdx: int): int;
/**
 * Returns the amount of damping of the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @returns float
 */
  getJiggleJointDamping(jointIdx: int): float;
/**
 * Returns a `Vector2` representing the amount of gravity the Jiggle joint at `joint_idx` is influenced by.
 * @param jointIdx int
 * @returns Vector2
 */
  getJiggleJointGravity(jointIdx: int): Vector2;
/**
 * Returns the amount of mass of the jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @returns float
 */
  getJiggleJointMass(jointIdx: int): float;
/**
 * Returns a boolean that indicates whether the joint at `joint_idx` is overriding the default Jiggle joint data defined in the modification.
 * @param jointIdx int
 * @returns boolean
 */
  getJiggleJointOverride(jointIdx: int): boolean;
/**
 * Returns the stiffness of the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @returns float
 */
  getJiggleJointStiffness(jointIdx: int): float;
/**
 * Returns a boolean that indicates whether the joint at `joint_idx` is using gravity or not.
 * @param jointIdx int
 * @returns boolean
 */
  getJiggleJointUseGravity(jointIdx: int): boolean;
/**
 * Returns whether the jiggle modifier is taking physics colliders into account when solving.
 * @returns boolean
 */
  getUseColliders(): boolean;
/**
 * Sets the collision mask that the Jiggle modifier will use when reacting to colliders, if the Jiggle modifier is set to take colliders into account.
 * @param collisionMask int
 */
  setCollisionMask(collisionMask: int): void;
/**
 * Sets the `Bone2D` node assigned to the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @param bone2dNode NodePath
 */
  setJiggleJointBone2dNode(jointIdx: int, bone2dNode: NodePath): void;
/**
 * Sets the bone index, `bone_idx`, of the Jiggle joint at `joint_idx`. When possible, this will also update the `bone2d_node` of the Jiggle joint based on data provided by the linked skeleton.
 * @param jointIdx int
 * @param boneIdx int
 */
  setJiggleJointBoneIndex(jointIdx: int, boneIdx: int): void;
/**
 * Sets the amount of damping of the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @param damping float
 */
  setJiggleJointDamping(jointIdx: int, damping: float): void;
/**
 * Sets the gravity vector of the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @param gravity Vector2
 */
  setJiggleJointGravity(jointIdx: int, gravity: Vector2): void;
/**
 * Sets the of mass of the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @param mass float
 */
  setJiggleJointMass(jointIdx: int, mass: float): void;
/**
 * Sets whether the Jiggle joint at `joint_idx` should override the default Jiggle joint settings. Setting this to `true` will make the joint use its own settings rather than the default ones attached to the modification.
 * @param jointIdx int
 * @param override boolean
 */
  setJiggleJointOverride(jointIdx: int, override: boolean): void;
/**
 * Sets the of stiffness of the Jiggle joint at `joint_idx`.
 * @param jointIdx int
 * @param stiffness float
 */
  setJiggleJointStiffness(jointIdx: int, stiffness: float): void;
/**
 * Sets whether the Jiggle joint at `joint_idx` should use gravity.
 * @param jointIdx int
 * @param useGravity boolean
 */
  setJiggleJointUseGravity(jointIdx: int, useGravity: boolean): void;
/**
 * If `true`, the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects.
 * @param useColliders boolean
 */
  setUseColliders(useColliders: boolean): void;
}
