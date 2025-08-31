import type { GodotArray, GodotDictionary, SpringBoneCollision3D, float, int } from "../index.d.ts";
/**
 * A capsule shape collision that interacts with `SpringBoneSimulator3D`.
 * 
 * A capsule shape collision that interacts with `SpringBoneSimulator3D`.
 */
export class SpringBoneCollisionCapsule3D extends SpringBoneCollision3D {
/**
 * The capsule's height.
 */
  height: float;
/**
 * If `true`, the collision acts to trap the joint within the collision.
 */
  inside: boolean;
/**
 * The capsule's radius.
 */
  radius: float;
}
