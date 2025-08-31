import type { Color, GodotArray, GodotDictionary, Texture2D, VisualInstance3D, float, int } from "../index.d.ts";
/**
 * Provides a base class for different kinds of light nodes.
 * 
 * Light3D is the *abstract* base class for light nodes. As it can't be instantiated, it shouldn't be used directly. Other types of light nodes inherit from it. Light3D contains the common variables and parameters used for lighting.
 */
export class Light3D extends VisualInstance3D {
/**
 * The distance from the camera at which the light begins to fade away (in 3D units).
 * 
 * **Note:** Only effective for `OmniLight3D` and `SpotLight3D`.
 */
  distanceFadeBegin: float;
/**
 * If `true`, the light will smoothly fade away when far from the active `Camera3D` starting at `distance_fade_begin`. This acts as a form of level of detail (LOD). The light will fade out over `distance_fade_begin` + `distance_fade_length`, after which it will be culled and not sent to the shader at all. Use this to reduce the number of active lights in a scene and thus improve performance.
 * 
 * **Note:** Only effective for `OmniLight3D` and `SpotLight3D`.
 */
  distanceFadeEnabled: boolean;
/**
 * Distance over which the light and its shadow fades. The light's energy and shadow's opacity is progressively reduced over this distance and is completely invisible at the end.
 * 
 * **Note:** Only effective for `OmniLight3D` and `SpotLight3D`.
 */
  distanceFadeLength: float;
/**
 * The distance from the camera at which the light's shadow cuts off (in 3D units). Set this to a value lower than `distance_fade_begin` + `distance_fade_length` to further improve performance, as shadow rendering is often more expensive than light rendering itself.
 * 
 * **Note:** Only effective for `OmniLight3D` and `SpotLight3D`, and only when `shadow_enabled` is `true`.
 */
  distanceFadeShadow: float;
/**
 * If `true`, the light only appears in the editor and will not be visible at runtime. If `true`, the light will never be baked in `LightmapGI` regardless of its `light_bake_mode`.
 */
  editorOnly: boolean;
/**
 * The light's angular size in degrees. Increasing this will make shadows softer at greater distances (also called percentage-closer soft shadows, or PCSS). Only available for `DirectionalLight3D`s. For reference, the Sun from the Earth is approximately `0.5`. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.
 * 
 * **Note:** `light_angular_distance` is not affected by `Node3D.scale` (the light's scale or its parent's scale).
 * 
 * **Note:** PCSS for directional lights is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 */
  lightAngularDistance: float;
/**
 * The light's bake mode. This will affect the global illumination techniques that have an effect on the light's rendering. See `BakeMode`.
 * 
 * **Note:** Meshes' global illumination mode will also affect the global illumination rendering. See `GeometryInstance3D.gi_mode`.
 */
  lightBakeMode: int;
/**
 * The light's color. An *overbright* color can be used to achieve a result equivalent to increasing the light's `light_energy`.
 */
  lightColor: Color;
/**
 * The light will affect objects in the selected layers.
 */
  lightCullMask: int;
/**
 * The light's strength multiplier (this is not a physical unit). For `OmniLight3D` and `SpotLight3D`, changing this value will only change the light color's intensity, not the light's radius.
 */
  lightEnergy: float;
/**
 * Secondary multiplier used with indirect light (light bounces). Used with `VoxelGI` and SDFGI (see `Environment.sdfgi_enabled`).
 * 
 * **Note:** This property is ignored if `light_energy` is equal to `0.0`, as the light won't be present at all in the GI shader.
 */
  lightIndirectEnergy: float;
/**
 * Used by positional lights (`OmniLight3D` and `SpotLight3D`) when `ProjectSettings.rendering/lights_and_shadows/use_physical_light_units` is `true`. Sets the intensity of the light source measured in Lumens. Lumens are a measure of luminous flux, which is the total amount of visible light emitted by a light source per unit of time.
 * For `SpotLight3D`s, we assume that the area outside the visible cone is surrounded by a perfect light absorbing material. Accordingly, the apparent brightness of the cone area does not change as the cone increases and decreases in size.
 * A typical household lightbulb can range from around 600 lumens to 1,200 lumens, a candle is about 13 lumens, while a streetlight can be approximately 60,000 lumens.
 */
  lightIntensityLumens: float;
/**
 * Used by `DirectionalLight3D`s when `ProjectSettings.rendering/lights_and_shadows/use_physical_light_units` is `true`. Sets the intensity of the light source measured in Lux. Lux is a measure of luminous flux per unit area, it is equal to one lumen per square meter. Lux is the measure of how much light hits a surface at a given time.
 * On a clear sunny day a surface in direct sunlight may be approximately 100,000 lux, a typical room in a home may be approximately 50 lux, while the moonlit ground may be approximately 0.1 lux.
 */
  lightIntensityLux: float;
/**
 * If `true`, the light's effect is reversed, darkening areas and casting bright shadows.
 */
  lightNegative: boolean;
/**
 * `Texture2D` projected by light. `shadow_enabled` must be on for the projector to work. Light projectors make the light appear as if it is shining through a colored but transparent object, almost like light shining through stained-glass.
 * 
 * **Note:** Unlike `BaseMaterial3D` whose filter mode can be adjusted on a per-material basis, the filter mode for light projector textures is set globally with `ProjectSettings.rendering/textures/light_projectors/filter`.
 * 
 * **Note:** Light projector textures are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 */
  lightProjector: Texture2D;
/**
 * The size of the light in Godot units. Only available for `OmniLight3D`s and `SpotLight3D`s. Increasing this value will make the light fade out slower and shadows appear blurrier (also called percentage-closer soft shadows, or PCSS). This can be used to simulate area lights to an extent. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.
 * 
 * **Note:** `light_size` is not affected by `Node3D.scale` (the light's scale or its parent's scale).
 * 
 * **Note:** PCSS for positional lights is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 */
  lightSize: float;
/**
 * The intensity of the specular blob in objects affected by the light. At `0`, the light becomes a pure diffuse light. When not baking emission, this can be used to avoid unrealistic reflections when placing lights above an emissive surface.
 */
  lightSpecular: float;
/**
 * Sets the color temperature of the light source, measured in Kelvin. This is used to calculate a correlated color temperature which tints the `light_color`.
 * The sun on a cloudy day is approximately 6500 Kelvin, on a clear day it is between 5500 to 6000 Kelvin, and on a clear day at sunrise or sunset it ranges to around 1850 Kelvin.
 */
  lightTemperature: float;
/**
 * Secondary multiplier multiplied with `light_energy` then used with the `Environment`'s volumetric fog (if enabled). If set to `0.0`, computing volumetric fog will be skipped for this light, which can improve performance for large amounts of lights when volumetric fog is enabled.
 * 
 * **Note:** To prevent short-lived dynamic light effects from poorly interacting with volumetric fog, lights used in those effects should have `light_volumetric_fog_energy` set to `0.0` unless `Environment.volumetric_fog_temporal_reprojection_enabled` is disabled (or unless the reprojection amount is significantly lowered).
 */
  lightVolumetricFogEnergy: float;
/**
 * Used to adjust shadow appearance. Too small a value results in self-shadowing ("shadow acne"), while too large a value causes shadows to separate from casters ("peter-panning"). Adjust as needed.
 */
  shadowBias: float;
/**
 * Blurs the edges of the shadow. Can be used to hide pixel artifacts in low-resolution shadow maps. A high value can impact performance, make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible.
 */
  shadowBlur: float;
/**
 * The light will only cast shadows using objects in the selected layers.
 */
  shadowCasterMask: int;
/**
 * If `true`, the light will cast real-time shadows. This has a significant performance cost. Only enable shadow rendering when it makes a noticeable difference in the scene's appearance, and consider using `distance_fade_enabled` to hide the light when far away from the `Camera3D`.
 */
  shadowEnabled: boolean;
/**
 * Offsets the lookup into the shadow map by the object's normal. This can be used to reduce self-shadowing artifacts without using `shadow_bias`. In practice, this value should be tweaked along with `shadow_bias` to reduce artifacts as much as possible.
 */
  shadowNormalBias: float;
/**
 * The opacity to use when rendering the light's shadow map. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost.
 */
  shadowOpacity: float;
/**
 * If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with `GeometryInstance3D.SHADOW_CASTING_SETTING_DOUBLE_SIDED`.
 */
  shadowReverseCullFace: boolean;
  shadowTransmittanceBias: float;
/**
 * Returns the `Color` of an idealized blackbody at the given `light_temperature`. This value is calculated internally based on the `light_temperature`. This `Color` is multiplied by `light_color` before being sent to the `RenderingServer`.
 * @returns Color
 */
  getCorrelatedColor(): Color;
/**
 * Returns the value of the specified `Light3D.Param` parameter.
 * @param param int
 * @returns float
 */
  getParam(param: int): float;
/**
 * Sets the value of the specified `Light3D.Param` parameter.
 * @param param int
 * @param value float
 */
  setParam(param: int, value: float): void;
/**
 * Constant for accessing `light_energy`.
 */
  static readonly PARAM_ENERGY: int;
/**
 * Constant for accessing `light_indirect_energy`.
 */
  static readonly PARAM_INDIRECT_ENERGY: int;
/**
 * Constant for accessing `light_volumetric_fog_energy`.
 */
  static readonly PARAM_VOLUMETRIC_FOG_ENERGY: int;
/**
 * Constant for accessing `light_specular`.
 */
  static readonly PARAM_SPECULAR: int;
/**
 * Constant for accessing `OmniLight3D.omni_range` or `SpotLight3D.spot_range`.
 */
  static readonly PARAM_RANGE: int;
/**
 * Constant for accessing `light_size`.
 */
  static readonly PARAM_SIZE: int;
/**
 * Constant for accessing `OmniLight3D.omni_attenuation` or `SpotLight3D.spot_attenuation`.
 */
  static readonly PARAM_ATTENUATION: int;
/**
 * Constant for accessing `SpotLight3D.spot_angle`.
 */
  static readonly PARAM_SPOT_ANGLE: int;
/**
 * Constant for accessing `SpotLight3D.spot_angle_attenuation`.
 */
  static readonly PARAM_SPOT_ATTENUATION: int;
/**
 * Constant for accessing `DirectionalLight3D.directional_shadow_max_distance`.
 */
  static readonly PARAM_SHADOW_MAX_DISTANCE: int;
/**
 * Constant for accessing `DirectionalLight3D.directional_shadow_split_1`.
 */
  static readonly PARAM_SHADOW_SPLIT_1_OFFSET: int;
/**
 * Constant for accessing `DirectionalLight3D.directional_shadow_split_2`.
 */
  static readonly PARAM_SHADOW_SPLIT_2_OFFSET: int;
/**
 * Constant for accessing `DirectionalLight3D.directional_shadow_split_3`.
 */
  static readonly PARAM_SHADOW_SPLIT_3_OFFSET: int;
/**
 * Constant for accessing `DirectionalLight3D.directional_shadow_fade_start`.
 */
  static readonly PARAM_SHADOW_FADE_START: int;
/**
 * Constant for accessing `shadow_normal_bias`.
 */
  static readonly PARAM_SHADOW_NORMAL_BIAS: int;
/**
 * Constant for accessing `shadow_bias`.
 */
  static readonly PARAM_SHADOW_BIAS: int;
/**
 * Constant for accessing `DirectionalLight3D.directional_shadow_pancake_size`.
 */
  static readonly PARAM_SHADOW_PANCAKE_SIZE: int;
/**
 * Constant for accessing `shadow_opacity`.
 */
  static readonly PARAM_SHADOW_OPACITY: int;
/**
 * Constant for accessing `shadow_blur`.
 */
  static readonly PARAM_SHADOW_BLUR: int;
/**
 * Constant for accessing `shadow_transmittance_bias`.
 */
  static readonly PARAM_TRANSMITTANCE_BIAS: int;
/**
 * Constant for accessing `light_intensity_lumens` and `light_intensity_lux`. Only used when `ProjectSettings.rendering/lights_and_shadows/use_physical_light_units` is `true`.
 */
  static readonly PARAM_INTENSITY: int;
/**
 * Represents the size of the `Param` enum.
 */
  static readonly PARAM_MAX: int;
/**
 * Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.
 * 
 * **Note:** Hiding a light does *not* affect baking `LightmapGI`. Hiding a light will still affect baking `VoxelGI` and SDFGI (see `Environment.sdfgi_enabled`).
 */
  static readonly BAKE_DISABLED: int;
/**
 * Light is taken into account in static baking (`VoxelGI`, `LightmapGI`, SDFGI (`Environment.sdfgi_enabled`)). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off.
 * 
 * **Note:** The light is not baked in `LightmapGI` if `editor_only` is `true`.
 */
  static readonly BAKE_STATIC: int;
/**
 * Light is taken into account in dynamic baking (`VoxelGI` and SDFGI (`Environment.sdfgi_enabled`) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to `BAKE_STATIC`. This has a greater performance cost compared to `BAKE_STATIC`. When using SDFGI, the update speed of dynamic lights is affected by `ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights`.
 */
  static readonly BAKE_DYNAMIC: int;
}
