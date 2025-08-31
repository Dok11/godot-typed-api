import type { GodotArray, GodotDictionary, Resource, float, int } from "../index.d.ts";
/**
 * Parent class for camera settings.
 * 
 * Controls camera-specific attributes such as depth of field and exposure override.
 * When used in a `WorldEnvironment` it provides default settings for exposure, auto-exposure, and depth of field that will be used by all cameras without their own `CameraAttributes`, including the editor camera. When used in a `Camera3D` it will override any `CameraAttributes` set in the `WorldEnvironment`. When used in `VoxelGI` or `LightmapGI`, only the exposure settings will be used.
 * See also `Environment` for general 3D environment settings.
 * This is a pure virtual class that is inherited by `CameraAttributesPhysical` and `CameraAttributesPractical`.
 */
export class CameraAttributes extends Resource {
/**
 * If `true`, enables the tonemapping auto exposure mode of the scene renderer. If `true`, the renderer will automatically determine the exposure setting to adapt to the scene's illumination and the observed light.
 */
  autoExposureEnabled: boolean;
/**
 * The scale of the auto exposure effect. Affects the intensity of auto exposure.
 */
  autoExposureScale: float;
/**
 * The speed of the auto exposure effect. Affects the time needed for the camera to perform auto exposure.
 */
  autoExposureSpeed: float;
/**
 * Multiplier for the exposure amount. A higher value results in a brighter image.
 */
  exposureMultiplier: float;
/**
 * Sensitivity of camera sensors, measured in ISO. A higher sensitivity results in a brighter image.
 * If `auto_exposure_enabled` is `true`, this can be used as a method of exposure compensation, doubling the value will increase the exposure value (measured in EV100) by 1 stop.
 * 
 * **Note:** Only available when `ProjectSettings.rendering/lights_and_shadows/use_physical_light_units` is enabled.
 */
  exposureSensitivity: float;
}
