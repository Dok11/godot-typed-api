import type { GodotArray, GodotDictionary, Material, Resource, float, int } from "../index.d.ts";
/**
 * Defines a 3D environment's background by using a `Material`.
 * 
 * The `Sky` class uses a `Material` to render a 3D environment's background and the light it emits by updating the reflection/radiance cubemaps.
 */
export class Sky extends Resource {
/**
 * Sets the method for generating the radiance map from the sky. The radiance map is a cubemap with increasingly blurry versions of the sky corresponding to different levels of roughness. Radiance maps can be expensive to calculate. See `ProcessMode` for options.
 */
  processMode: int;
/**
 * The `Sky`'s radiance map size. The higher the radiance map size, the more detailed the lighting from the `Sky` will be.
 * See `RadianceSize` constants for values.
 * 
 * **Note:** Some hardware will have trouble with higher radiance sizes, especially `RADIANCE_SIZE_512` and above. Only use such high values on high-end hardware.
 */
  radianceSize: int;
/**
 * `Material` used to draw the background. Can be `PanoramaSkyMaterial`, `ProceduralSkyMaterial`, `PhysicalSkyMaterial`, or even a `ShaderMaterial` if you want to use your own custom shader.
 */
  skyMaterial: Material;
/**
 * Radiance texture size is 32×32 pixels.
 */
  static readonly RADIANCE_SIZE_32: int;
/**
 * Radiance texture size is 64×64 pixels.
 */
  static readonly RADIANCE_SIZE_64: int;
/**
 * Radiance texture size is 128×128 pixels.
 */
  static readonly RADIANCE_SIZE_128: int;
/**
 * Radiance texture size is 256×256 pixels.
 */
  static readonly RADIANCE_SIZE_256: int;
/**
 * Radiance texture size is 512×512 pixels.
 */
  static readonly RADIANCE_SIZE_512: int;
/**
 * Radiance texture size is 1024×1024 pixels.
 */
  static readonly RADIANCE_SIZE_1024: int;
/**
 * Radiance texture size is 2048×2048 pixels.
 */
  static readonly RADIANCE_SIZE_2048: int;
/**
 * Represents the size of the `RadianceSize` enum.
 */
  static readonly RADIANCE_SIZE_MAX: int;
/**
 * Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use `PROCESS_MODE_REALTIME`. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses `PROCESS_MODE_INCREMENTAL`. Otherwise, this defaults to `PROCESS_MODE_QUALITY`.
 */
  static readonly PROCESS_MODE_AUTOMATIC: int;
/**
 * Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than `PROCESS_MODE_REALTIME` but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing `ProjectSettings.rendering/reflections/sky_reflections/ggx_samples`.
 */
  static readonly PROCESS_MODE_QUALITY: int;
/**
 * Uses the same high quality importance sampling to process the radiance map as `PROCESS_MODE_QUALITY`, but updates over several frames. The number of frames is determined by `ProjectSettings.rendering/reflections/sky_reflections/roughness_layers`. Use this when you need highest quality radiance maps, but have a sky that updates slowly.
 */
  static readonly PROCESS_MODE_INCREMENTAL: int;
/**
 * Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on `ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality`.
 * 
 * **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so `radiance_size` must be set to `RADIANCE_SIZE_256`. Otherwise, a warning is printed and the overridden radiance size is ignored.
 */
  static readonly PROCESS_MODE_REALTIME: int;
}
