import type { GodotArray, GodotDictionary, Node3D, Quaternion, Skeleton3D, Vector3, float, int } from "../index.d.ts";
/**
 * A base class of the collision that interacts with `SpringBoneSimulator3D`.
 * 
 * A collision can be a child of `SpringBoneSimulator3D`. If it is not a child of `SpringBoneSimulator3D`, it has no effect.
 * The colliding and sliding are done in the `SpringBoneSimulator3D`'s modification process in order of its collision list which is set by `SpringBoneSimulator3D.set_collision_path`. If `SpringBoneSimulator3D.are_all_child_collisions_enabled` is `true`, the order matches `SceneTree`.
 * If `bone` is set, it synchronizes with the bone pose of the ancestor `Skeleton3D`, which is done in before the `SpringBoneSimulator3D`'s modification process as the pre-process.
 * 
 * **Warning:** A scaled `SpringBoneCollision3D` will likely not behave as expected. Make sure that the parent `Skeleton3D` and its bones are not scaled.
 */
export class SpringBoneCollision3D extends Node3D {
/**
 * The index of the attached bone.
 */
  bone: int;
/**
 * The name of the attached bone.
 */
  boneName: string;
/**
 * The offset of the position from `Skeleton3D`'s `bone` pose position.
 */
  positionOffset: Vector3;
/**
 * The offset of the rotation from `Skeleton3D`'s `bone` pose rotation.
 */
  rotationOffset: Quaternion;
/**
 * Get parent `Skeleton3D` node of the parent `SpringBoneSimulator3D` if found.
 * @returns Skeleton3D
 */
  getSkeleton(): Skeleton3D;
}
