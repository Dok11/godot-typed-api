import type { GPUParticlesAttractor3D, GodotArray, GodotDictionary, Texture3D, Vector3, float, int } from "../index.d.ts";
/**
 * A box-shaped attractor with varying directions and strengths defined in it that influences particles from `GPUParticles3D` nodes.
 * 
 * A box-shaped attractor with varying directions and strengths defined in it that influences particles from `GPUParticles3D` nodes.
 * Unlike `GPUParticlesAttractorBox3D`, `GPUParticlesAttractorVectorField3D` uses a `texture` to affect attraction strength within the box. This can be used to create complex attraction scenarios where particles travel in different directions depending on their location. This can be useful for weather effects such as sandstorms.
 * Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.
 * 
 * **Note:** Particle attractors only affect `GPUParticles3D`, not `CPUParticles3D`.
 */
export class GPUParticlesAttractorVectorField3D extends GPUParticlesAttractor3D {
/**
 * The size of the vector field box in 3D units.
 */
  size: Vector3;
/**
 * The 3D texture to be used. Values are linearly interpolated between the texture's pixels.
 * 
 * **Note:** To get better performance, the 3D texture's resolution should reflect the `size` of the attractor. Since particle attraction is usually low-frequency data, the texture can be kept at a low resolution such as 64×64×64.
 */
  texture: Texture3D;
}
