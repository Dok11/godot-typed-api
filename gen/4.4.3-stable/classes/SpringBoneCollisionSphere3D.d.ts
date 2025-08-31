import type { GodotArray, GodotDictionary, SpringBoneCollision3D, float, int } from "../index.d.ts";
/**
 * A sphere shape collision that interacts with `SpringBoneSimulator3D`.
 * 
 * A sphere shape collision that interacts with `SpringBoneSimulator3D`.
 */
export class SpringBoneCollisionSphere3D extends SpringBoneCollision3D {
/**
 * If `true`, the collision acts to trap the joint within the collision.
 */
  inside: boolean;
/**
 * The sphere's radius.
 */
  radius: float;
}
