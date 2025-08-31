import type { GPUParticlesCollision3D, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A sphere-shaped 3D particle collision shape affecting `GPUParticles3D` nodes.
 * 
 * A sphere-shaped 3D particle collision shape affecting `GPUParticles3D` nodes.
 * Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is *not* supported.
 * 
 * **Note:** `ParticleProcessMaterial.collision_mode` must be `ParticleProcessMaterial.COLLISION_RIGID` or `ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT` on the `GPUParticles3D`'s process material for collision to work.
 * 
 * **Note:** Particle collision only affects `GPUParticles3D`, not `CPUParticles3D`.
 */
export class GPUParticlesCollisionSphere3D extends GPUParticlesCollision3D {
/**
 * The collision sphere's radius in 3D units.
 */
  radius: float;
}
