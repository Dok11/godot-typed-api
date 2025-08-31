import type { GodotArray, GodotDictionary, Light3D, float, int } from "../index.d.ts";
/**
 * Directional light from a distance, as from the Sun.
 * 
 * A directional light is a type of `Light3D` node that models an infinite number of parallel rays covering the entire scene. It is used for lights with strong intensity that are located far away from the scene to model sunlight or moonlight. The worldspace location of the DirectionalLight3D transform (origin) is ignored. Only the basis is used to determine light direction.
 */
export class DirectionalLight3D extends Light3D {
/**
 * If `true`, shadow detail is sacrificed in exchange for smoother transitions between splits. Enabling shadow blend splitting also has a moderate performance cost. This is ignored when `directional_shadow_mode` is `SHADOW_ORTHOGONAL`.
 */
  directionalShadowBlendSplits: boolean;
/**
 * Proportion of `directional_shadow_max_distance` at which point the shadow starts to fade. At `directional_shadow_max_distance`, the shadow will disappear. The default value is a balance between smooth fading and distant shadow visibility. If the camera moves fast and the `directional_shadow_max_distance` is low, consider lowering `directional_shadow_fade_start` below `0.8` to make shadow transitions less noticeable. On the other hand, if you tuned `directional_shadow_max_distance` to cover the entire scene, you can set `directional_shadow_fade_start` to `1.0` to prevent the shadow from fading in the distance (it will suddenly cut off instead).
 */
  directionalShadowFadeStart: float;
/**
 * The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering).
 */
  directionalShadowMaxDistance: float;
/**
 * The light's shadow rendering algorithm. See `ShadowMode`.
 */
  directionalShadowMode: int;
/**
 * Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect.
 */
  directionalShadowPancakeSize: float;
/**
 * The distance from camera to shadow split 1. Relative to `directional_shadow_max_distance`. Only used when `directional_shadow_mode` is `SHADOW_PARALLEL_2_SPLITS` or `SHADOW_PARALLEL_4_SPLITS`.
 */
  directionalShadowSplit1: float;
/**
 * The distance from shadow split 1 to split 2. Relative to `directional_shadow_max_distance`. Only used when `directional_shadow_mode` is `SHADOW_PARALLEL_4_SPLITS`.
 */
  directionalShadowSplit2: float;
/**
 * The distance from shadow split 2 to split 3. Relative to `directional_shadow_max_distance`. Only used when `directional_shadow_mode` is `SHADOW_PARALLEL_4_SPLITS`.
 */
  directionalShadowSplit3: float;
/**
 * Set whether this `DirectionalLight3D` is visible in the sky, in the scene, or both in the sky and in the scene. See `SkyMode` for options.
 */
  skyMode: int;
/**
 * Renders the entire scene's shadow map from an orthogonal point of view. This is the fastest directional shadow mode. May result in blurrier shadows on close objects.
 */
  static readonly SHADOW_ORTHOGONAL: int;
/**
 * Splits the view frustum in 2 areas, each with its own shadow map. This shadow mode is a compromise between `SHADOW_ORTHOGONAL` and `SHADOW_PARALLEL_4_SPLITS` in terms of performance.
 */
  static readonly SHADOW_PARALLEL_2_SPLITS: int;
/**
 * Splits the view frustum in 4 areas, each with its own shadow map. This is the slowest directional shadow mode.
 */
  static readonly SHADOW_PARALLEL_4_SPLITS: int;
/**
 * Makes the light visible in both scene lighting and sky rendering.
 */
  static readonly SKY_MODE_LIGHT_AND_SKY: int;
/**
 * Makes the light visible in scene lighting only (including direct lighting and global illumination). When using this mode, the light will not be visible from sky shaders.
 */
  static readonly SKY_MODE_LIGHT_ONLY: int;
/**
 * Makes the light visible to sky shaders only. When using this mode the light will not cast light into the scene (either through direct lighting or through global illumination), but can be accessed through sky shaders. This can be useful, for example, when you want to control sky effects without illuminating the scene (during a night cycle, for example).
 */
  static readonly SKY_MODE_SKY_ONLY: int;
}
