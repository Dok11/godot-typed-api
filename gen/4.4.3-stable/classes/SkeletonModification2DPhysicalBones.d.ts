import type { GodotArray, GodotDictionary, NodePath, SkeletonModification2D, StringName, float, int } from "../index.d.ts";
/**
 * A modification that applies the transforms of `PhysicalBone2D` nodes to `Bone2D` nodes.
 * 
 * This modification takes the transforms of `PhysicalBone2D` nodes and applies them to `Bone2D` nodes. This allows the `Bone2D` nodes to react to physics thanks to the linked `PhysicalBone2D` nodes.
 */
export class SkeletonModification2DPhysicalBones extends SkeletonModification2D {
/**
 * The number of `PhysicalBone2D` nodes linked in this modification.
 */
  physicalBoneChainLength: int;
/**
 * Empties the list of `PhysicalBone2D` nodes and populates it with all `PhysicalBone2D` nodes that are children of the `Skeleton2D`.
 */
  fetchPhysicalBones(): void;
/**
 * Returns the `PhysicalBone2D` node at `joint_idx`.
 * @param jointIdx int
 * @returns NodePath
 */
  getPhysicalBoneNode(jointIdx: int): NodePath;
/**
 * Sets the `PhysicalBone2D` node at `joint_idx`.
 * 
 * **Note:** This is just the index used for this modification, not the bone index used in the `Skeleton2D`.
 * @param jointIdx int
 * @param physicalbone2dNode NodePath
 */
  setPhysicalBoneNode(jointIdx: int, physicalbone2dNode: NodePath): void;
/**
 * Tell the `PhysicalBone2D` nodes to start simulating and interacting with the physics world.
 * Optionally, an array of bone names can be passed to this function, and that will cause only `PhysicalBone2D` nodes with those names to start simulating.
 * @param bones StringName[] (optional, default: [])
 */
  startSimulation(bones?: StringName[]): void;
/**
 * Tell the `PhysicalBone2D` nodes to stop simulating and interacting with the physics world.
 * Optionally, an array of bone names can be passed to this function, and that will cause only `PhysicalBone2D` nodes with those names to stop simulating.
 * @param bones StringName[] (optional, default: [])
 */
  stopSimulation(bones?: StringName[]): void;
}
