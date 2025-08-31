import type { GodotArray, GodotDictionary, Joint2D, float, int } from "../index.d.ts";
/**
 * A physics joint that restricts the movement of two 2D physics bodies to a fixed axis.
 * 
 * A physics joint that restricts the movement of two 2D physics bodies to a fixed axis. For example, a `StaticBody2D` representing a piston base can be attached to a `RigidBody2D` representing the piston head, moving up and down.
 */
export class GrooveJoint2D extends Joint2D {
/**
 * The body B's initial anchor position defined by the joint's origin and a local offset `initial_offset` along the joint's Y axis (along the groove).
 */
  initialOffset: float;
/**
 * The groove's length. The groove is from the joint's origin towards `length` along the joint's local Y axis.
 */
  length: float;
}
