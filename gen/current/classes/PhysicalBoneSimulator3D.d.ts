import type { GodotArray, GodotDictionary, RID, SkeletonModifier3D, StringName, float, int } from "../index.d.ts";
/**
 * Node that can be the parent of `PhysicalBone3D` and can apply the simulation results to `Skeleton3D`.
 * 
 * Node that can be the parent of `PhysicalBone3D` and can apply the simulation results to `Skeleton3D`.
 */
export class PhysicalBoneSimulator3D extends SkeletonModifier3D {
/**
 * Returns a boolean that indicates whether the `PhysicalBoneSimulator3D` is running and simulating.
 * @returns boolean
 */
  isSimulatingPhysics(): boolean;
/**
 * Adds a collision exception to the physical bone.
 * Works just like the `RigidBody3D` node.
 * @param exception RID
 */
  physicalBonesAddCollisionException(exception: RID): void;
/**
 * Removes a collision exception to the physical bone.
 * Works just like the `RigidBody3D` node.
 * @param exception RID
 */
  physicalBonesRemoveCollisionException(exception: RID): void;
/**
 * Tells the `PhysicalBone3D` nodes in the Skeleton to start simulating and reacting to the physics world.
 * Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.
 * @param bones StringName[] (optional, default: [])
 */
  physicalBonesStartSimulation(bones?: StringName[]): void;
/**
 * Tells the `PhysicalBone3D` nodes in the Skeleton to stop simulating.
 */
  physicalBonesStopSimulation(): void;
}
