import type { GPUParticlesCollision3D, GodotArray, GodotDictionary, Vector3, float, int } from "../index.d.ts";
/**
 * A real-time heightmap-shaped 3D particle collision shape affecting `GPUParticles3D` nodes.
 * 
 * A real-time heightmap-shaped 3D particle collision shape affecting `GPUParticles3D` nodes.
 * Heightmap shapes allow for efficiently representing collisions for convex and concave objects with a single "floor" (such as terrain). This is less flexible than `GPUParticlesCollisionSDF3D`, but it doesn't require a baking step.
 * `GPUParticlesCollisionHeightField3D` can also be regenerated in real-time when it is moved, when the camera moves, or even continuously. This makes `GPUParticlesCollisionHeightField3D` a good choice for weather effects such as rain and snow and games with highly dynamic geometry. However, this class is limited since heightmaps cannot represent overhangs (e.g. indoors or caves).
 * 
 * **Note:** `ParticleProcessMaterial.collision_mode` must be `true` on the `GPUParticles3D`'s process material for collision to work.
 * 
 * **Note:** Particle collision only affects `GPUParticles3D`, not `CPUParticles3D`.
 */
export class GPUParticlesCollisionHeightField3D extends GPUParticlesCollision3D {
/**
 * If `true`, the `GPUParticlesCollisionHeightField3D` will follow the current camera in global space. The `GPUParticlesCollisionHeightField3D` does not need to be a child of the `Camera3D` node for this to work.
 * Following the camera has a performance cost, as it will force the heightmap to update whenever the camera moves. Consider lowering `resolution` to improve performance if `follow_camera_enabled` is `true`.
 */
  followCameraEnabled: boolean;
/**
 * The visual layers to account for when updating the heightmap. Only `MeshInstance3D`s whose `VisualInstance3D.layers` match with this `heightfield_mask` will be included in the heightmap collision update. By default, all 20 user-visible layers are taken into account for updating the heightmap collision.
 * 
 * **Note:** Since the `heightfield_mask` allows for 32 layers to be stored in total, there are an additional 12 layers that are only used internally by the engine and aren't exposed in the editor. Setting `heightfield_mask` using a script allows you to toggle those reserved layers, which can be useful for editor plugins.
 * To adjust `heightfield_mask` more easily using a script, use `get_heightfield_mask_value` and `set_heightfield_mask_value`.
 */
  heightfieldMask: int;
/**
 * Higher resolutions can represent small details more accurately in large scenes, at the cost of lower performance. If `update_mode` is `UPDATE_MODE_ALWAYS`, consider using the lowest resolution possible.
 */
  resolution: int;
/**
 * The collision heightmap's size in 3D units. To improve heightmap quality, `size` should be set as small as possible while covering the parts of the scene you need.
 */
  size: Vector3;
/**
 * The update policy to use for the generated heightmap.
 */
  updateMode: int;
/**
 * Returns `true` if the specified layer of the `heightfield_mask` is enabled, given a `layer_number` between `1` and `20`, inclusive.
 * @param layerNumber int
 * @returns boolean
 */
  getHeightfieldMaskValue(layerNumber: int): boolean;
/**
 * Based on `value`, enables or disables the specified layer in the `heightfield_mask`, given a `layer_number` between `1` and `20`, inclusive.
 * @param layerNumber int
 * @param value boolean
 */
  setHeightfieldMaskValue(layerNumber: int, value: boolean): void;
/**
 * Generate a 256×256 heightmap. Intended for small-scale scenes, or larger scenes with no distant particles.
 */
  static readonly RESOLUTION_256: int;
/**
 * Generate a 512×512 heightmap. Intended for medium-scale scenes, or larger scenes with no distant particles.
 */
  static readonly RESOLUTION_512: int;
/**
 * Generate a 1024×1024 heightmap. Intended for large scenes with distant particles.
 */
  static readonly RESOLUTION_1024: int;
/**
 * Generate a 2048×2048 heightmap. Intended for very large scenes with distant particles.
 */
  static readonly RESOLUTION_2048: int;
/**
 * Generate a 4096×4096 heightmap. Intended for huge scenes with distant particles.
 */
  static readonly RESOLUTION_4096: int;
/**
 * Generate a 8192×8192 heightmap. Intended for gigantic scenes with distant particles.
 */
  static readonly RESOLUTION_8192: int;
/**
 * Represents the size of the `Resolution` enum.
 */
  static readonly RESOLUTION_MAX: int;
/**
 * Only update the heightmap when the `GPUParticlesCollisionHeightField3D` node is moved, or when the camera moves if `follow_camera_enabled` is `true`. An update can be forced by slightly moving the `GPUParticlesCollisionHeightField3D` in any direction, or by calling `RenderingServer.particles_collision_height_field_update`.
 */
  static readonly UPDATE_MODE_WHEN_MOVED: int;
/**
 * Update the heightmap every frame. This has a significant performance cost. This update should only be used when geometry that particles can collide with changes significantly during gameplay.
 */
  static readonly UPDATE_MODE_ALWAYS: int;
}
