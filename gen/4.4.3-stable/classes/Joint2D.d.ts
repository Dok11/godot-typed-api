import type { GodotArray, GodotDictionary, Node2D, NodePath, RID, float, int } from "../index.d.ts";
/**
 * Abstract base class for all 2D physics joints.
 * 
 * Abstract base class for all joints in 2D physics. 2D joints bind together two physics bodies (`node_a` and `node_b`) and apply a constraint.
 */
export class Joint2D extends Node2D {
/**
 * When `node_a` and `node_b` move in different directions the `bias` controls how fast the joint pulls them back to their original position. The lower the `bias` the more the two bodies can pull on the joint.
 * When set to `0`, the default value from `ProjectSettings.physics/2d/solver/default_constraint_bias` is used.
 */
  bias: float;
/**
 * If `true`, the two bodies bound together do not collide with each other.
 */
  disableCollision: boolean;
/**
 * Path to the first body (A) attached to the joint. The node must inherit `PhysicsBody2D`.
 */
  nodeA: NodePath;
/**
 * Path to the second body (B) attached to the joint. The node must inherit `PhysicsBody2D`.
 */
  nodeB: NodePath;
/**
 * Returns the joint's internal `RID` from the `PhysicsServer2D`.
 * @returns RID
 */
  getRid(): RID;
}
