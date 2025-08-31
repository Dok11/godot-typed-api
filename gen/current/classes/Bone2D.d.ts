import type { GodotArray, GodotDictionary, Node2D, Transform2D, float, int } from "../index.d.ts";
/**
 * A joint used with `Skeleton2D` to control and animate other nodes.
 * 
 * A hierarchy of `Bone2D`s can be bound to a `Skeleton2D` to control and animate other `Node2D` nodes.
 * You can use `Bone2D` and `Skeleton2D` nodes to animate 2D meshes created with the `Polygon2D` UV editor.
 * Each bone has a `rest` transform that you can reset to with `apply_rest`. These rest poses are relative to the bone's parent.
 * If in the editor, you can set the rest pose of an entire skeleton using a menu option, from the code, you need to iterate over the bones to set their individual rest poses.
 */
export class Bone2D extends Node2D {
/**
 * Rest transform of the bone. You can reset the node's transforms to this value using `apply_rest`.
 */
  rest: Transform2D;
/**
 * Resets the bone to the rest pose. This is equivalent to setting `Node2D.transform` to `rest`.
 */
  applyRest(): void;
/**
 * Returns whether this `Bone2D` is going to autocalculate its length and bone angle using its first `Bone2D` child node, if one exists. If there are no `Bone2D` children, then it cannot autocalculate these values and will print a warning.
 * @returns boolean
 */
  getAutocalculateLengthAndAngle(): boolean;
/**
 * Returns the angle of the bone in the `Bone2D`.
 * 
 * **Note:** This is different from the `Bone2D`'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the `Bone2D`'s `Node2D.transform`.
 * @returns float
 */
  getBoneAngle(): float;
/**
 * Returns the node's index as part of the entire skeleton. See `Skeleton2D`.
 * @returns int
 */
  getIndexInSkeleton(): int;
/**
 * Returns the length of the bone in the `Bone2D` node.
 * @returns float
 */
  getLength(): float;
/**
 * Returns the node's `rest` `Transform2D` if it doesn't have a parent, or its rest pose relative to its parent.
 * @returns Transform2D
 */
  getSkeletonRest(): Transform2D;
/**
 * When set to `true`, the `Bone2D` node will attempt to automatically calculate the bone angle and length using the first child `Bone2D` node, if one exists. If none exist, the `Bone2D` cannot automatically calculate these values and will print a warning.
 * @param autoCalculate boolean
 */
  setAutocalculateLengthAndAngle(autoCalculate: boolean): void;
/**
 * Sets the bone angle for the `Bone2D`. This is typically set to the rotation from the `Bone2D` to a child `Bone2D` node.
 * 
 * **Note:** This is different from the `Bone2D`'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the `Bone2D`'s `Node2D.transform`.
 * @param angle float
 */
  setBoneAngle(angle: float): void;
/**
 * Sets the length of the bone in the `Bone2D`.
 * @param length float
 */
  setLength(length: float): void;
}
