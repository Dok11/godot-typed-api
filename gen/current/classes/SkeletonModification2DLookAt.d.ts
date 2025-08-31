import type { GodotArray, GodotDictionary, NodePath, SkeletonModification2D, float, int } from "../index.d.ts";
/**
 * A modification that rotates a `Bone2D` node to look at a target.
 * 
 * This `SkeletonModification2D` rotates a bone to look a target. This is extremely helpful for moving character's head to look at the player, rotating a turret to look at a target, or any other case where you want to make a bone rotate towards something quickly and easily.
 */
export class SkeletonModification2DLookAt extends SkeletonModification2D {
/**
 * The `Bone2D` node that the modification will operate on.
 */
  bone2dNode: NodePath;
/**
 * The index of the `Bone2D` node that the modification will operate on.
 */
  boneIndex: int;
/**
 * The NodePath to the node that is the target for the LookAt modification. This node is what the modification will rotate the `Bone2D` to.
 */
  targetNodepath: NodePath;
/**
 * Returns the amount of additional rotation that is applied after the LookAt modification executes.
 * @returns float
 */
  getAdditionalRotation(): float;
/**
 * Returns whether the constraints to this modification are inverted or not.
 * @returns boolean
 */
  getConstraintAngleInvert(): boolean;
/**
 * Returns the constraint's maximum allowed angle.
 * @returns float
 */
  getConstraintAngleMax(): float;
/**
 * Returns the constraint's minimum allowed angle.
 * @returns float
 */
  getConstraintAngleMin(): float;
/**
 * Returns `true` if the LookAt modification is using constraints.
 * @returns boolean
 */
  getEnableConstraint(): boolean;
/**
 * Sets the amount of additional rotation that is to be applied after executing the modification. This allows for offsetting the results by the inputted rotation amount.
 * @param rotation float
 */
  setAdditionalRotation(rotation: float): void;
/**
 * When `true`, the modification will use an inverted joint constraint.
 * An inverted joint constraint only constraints the `Bone2D` to the angles *outside of* the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.
 * @param invert boolean
 */
  setConstraintAngleInvert(invert: boolean): void;
/**
 * Sets the constraint's maximum allowed angle.
 * @param angleMax float
 */
  setConstraintAngleMax(angleMax: float): void;
/**
 * Sets the constraint's minimum allowed angle.
 * @param angleMin float
 */
  setConstraintAngleMin(angleMin: float): void;
/**
 * Sets whether this modification will use constraints or not. When `true`, constraints will be applied when solving the LookAt modification.
 * @param enableConstraint boolean
 */
  setEnableConstraint(enableConstraint: boolean): void;
}
