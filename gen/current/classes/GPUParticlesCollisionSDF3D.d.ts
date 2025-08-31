import type { GPUParticlesCollision3D, GodotArray, GodotDictionary, Texture3D, Vector3, float, int } from "../index.d.ts";
/**
 * A baked signed distance field 3D particle collision shape affecting `GPUParticles3D` nodes.
 * 
 * A baked signed distance field 3D particle collision shape affecting `GPUParticles3D` nodes.
 * Signed distance fields (SDF) allow for efficiently representing approximate collision shapes for convex and concave objects of any shape. This is more flexible than `GPUParticlesCollisionHeightField3D`, but it requires a baking step.
 * 
 * **Baking:** The signed distance field texture can be baked by selecting the `GPUParticlesCollisionSDF3D` node in the editor, then clicking **Bake SDF** at the top of the 3D viewport. Any *visible* `MeshInstance3D`s within the `size` will be taken into account for baking, regardless of their `GeometryInstance3D.gi_mode`.
 * 
 * **Note:** Baking a `GPUParticlesCollisionSDF3D`'s `texture` is only possible within the editor, as there is no bake method exposed for use in exported projects. However, it's still possible to load pre-baked `Texture3D`s into its `texture` property in an exported project.
 * 
 * **Note:** `ParticleProcessMaterial.collision_mode` must be `ParticleProcessMaterial.COLLISION_RIGID` or `ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT` on the `GPUParticles3D`'s process material for collision to work.
 * 
 * **Note:** Particle collision only affects `GPUParticles3D`, not `CPUParticles3D`.
 */
export class GPUParticlesCollisionSDF3D extends GPUParticlesCollision3D {
/**
 * The visual layers to account for when baking the particle collision SDF. Only `MeshInstance3D`s whose `VisualInstance3D.layers` match with this `bake_mask` will be included in the generated particle collision SDF. By default, all objects are taken into account for the particle collision SDF baking.
 */
  bakeMask: int;
/**
 * The bake resolution to use for the signed distance field `texture`. The texture must be baked again for changes to the `resolution` property to be effective. Higher resolutions have a greater performance cost and take more time to bake. Higher resolutions also result in larger baked textures, leading to increased VRAM and storage space requirements. To improve performance and reduce bake times, use the lowest resolution possible for the object you're representing the collision of.
 */
  resolution: int;
/**
 * The collision SDF's size in 3D units. To improve SDF quality, the `size` should be set as small as possible while covering the parts of the scene you need.
 */
  size: Vector3;
/**
 * The 3D texture representing the signed distance field.
 */
  texture: Texture3D;
/**
 * The collision shape's thickness. Unlike other particle colliders, `GPUParticlesCollisionSDF3D` is actually hollow on the inside. `thickness` can be increased to prevent particles from tunneling through the collision shape at high speeds, or when the `GPUParticlesCollisionSDF3D` is moved.
 */
  thickness: float;
/**
 * Returns whether or not the specified layer of the `bake_mask` is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getBakeMaskValue(layerNumber: int): boolean;
/**
 * Based on `value`, enables or disables the specified layer in the `bake_mask`, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setBakeMaskValue(layerNumber: int, value: boolean): void;
/**
 * Bake a 16×16×16 signed distance field. This is the fastest option, but also the least precise.
 */
  static readonly RESOLUTION_16: int;
/**
 * Bake a 32×32×32 signed distance field.
 */
  static readonly RESOLUTION_32: int;
/**
 * Bake a 64×64×64 signed distance field.
 */
  static readonly RESOLUTION_64: int;
/**
 * Bake a 128×128×128 signed distance field.
 */
  static readonly RESOLUTION_128: int;
/**
 * Bake a 256×256×256 signed distance field.
 */
  static readonly RESOLUTION_256: int;
/**
 * Bake a 512×512×512 signed distance field. This is the slowest option, but also the most precise.
 */
  static readonly RESOLUTION_512: int;
/**
 * Represents the size of the `Resolution` enum.
 */
  static readonly RESOLUTION_MAX: int;
}
