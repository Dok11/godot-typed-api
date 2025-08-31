import type { GodotArray, GodotDictionary, Node3D, NodePath, RID, float, int } from "../index.d.ts";
/**
 * Abstract base class for all 3D physics joints.
 * 
 * Abstract base class for all joints in 3D physics. 3D joints bind together two physics bodies (`node_a` and `node_b`) and apply a constraint. If only one body is defined, it is attached to a fixed `StaticBody3D` without collision shapes.
 */
export class Joint3D extends Node3D {
/**
 * If `true`, the two bodies bound together do not collide with each other.
 */
  excludeNodesFromCollision: boolean;
/**
 * Path to the first node (A) attached to the joint. The node must inherit `PhysicsBody3D`.
 * If left empty and `node_b` is set, the body is attached to a fixed `StaticBody3D` without collision shapes.
 */
  nodeA: NodePath;
/**
 * Path to the second node (B) attached to the joint. The node must inherit `PhysicsBody3D`.
 * If left empty and `node_a` is set, the body is attached to a fixed `StaticBody3D` without collision shapes.
 */
  nodeB: NodePath;
/**
 * The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority.
 */
  solverPriority: int;
/**
 * Returns the joint's internal `RID` from the `PhysicsServer3D`.
 * @returns RID
 */
  getRid(): RID;
}
