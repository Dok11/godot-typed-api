import type { Color, GodotArray, GodotDictionary, Resource, Sky, Texture, Vector3, float, int } from "../index.d.ts";
/**
 * Resource for environment nodes (like `WorldEnvironment`) that define multiple rendering options.
 * 
 * Resource for environment nodes (like `WorldEnvironment`) that define multiple environment operations (such as background `Sky` or `Color`, ambient light, fog, depth-of-field...). These parameters affect the final render of the scene. The order of these operations is:
 * - Depth of Field Blur
 * - Glow
 * - Tonemap (Auto Exposure)
 * - Adjustments
 */
export class Environment extends Resource {
/**
 * The global brightness value of the rendered scene. Effective only if `adjustment_enabled` is `true`.
 */
  adjustmentBrightness: float;
/**
 * The `Texture2D` or `Texture3D` lookup table (LUT) to use for the built-in post-process color grading. Can use a `GradientTexture1D` for a 1-dimensional LUT, or a `Texture3D` for a more complex LUT. Effective only if `adjustment_enabled` is `true`.
 */
  adjustmentColorCorrection: Texture;
/**
 * The global contrast value of the rendered scene (default value is 1). Effective only if `adjustment_enabled` is `true`.
 */
  adjustmentContrast: float;
/**
 * If `true`, enables the `adjustment_*` properties provided by this resource. If `false`, modifications to the `adjustment_*` properties will have no effect on the rendered scene.
 */
  adjustmentEnabled: boolean;
/**
 * The global color saturation value of the rendered scene (default value is 1). Effective only if `adjustment_enabled` is `true`.
 */
  adjustmentSaturation: float;
/**
 * The ambient light's `Color`. Only effective if `ambient_light_sky_contribution` is lower than `1.0` (exclusive).
 */
  ambientLightColor: Color;
/**
 * The ambient light's energy. The higher the value, the stronger the light. Only effective if `ambient_light_sky_contribution` is lower than `1.0` (exclusive).
 */
  ambientLightEnergy: float;
/**
 * Defines the amount of light that the sky brings on the scene. A value of `0.0` means that the sky's light emission has no effect on the scene illumination, thus all ambient illumination is provided by the ambient light. On the contrary, a value of `1.0` means that *all* the light that affects the scene is provided by the sky, thus the ambient light parameter has no effect on the scene.
 * 
 * **Note:** `ambient_light_sky_contribution` is internally clamped between `0.0` and `1.0` (inclusive).
 */
  ambientLightSkyContribution: float;
/**
 * The ambient light source to use for rendering materials and global illumination.
 */
  ambientLightSource: int;
/**
 * The ID of the camera feed to show in the background.
 */
  backgroundCameraFeedId: int;
/**
 * The maximum layer ID to display. Only effective when using the `BG_CANVAS` background mode.
 */
  backgroundCanvasMaxLayer: int;
/**
 * The `Color` displayed for clear areas of the scene. Only effective when using the `BG_COLOR` background mode.
 */
  backgroundColor: Color;
/**
 * Multiplier for background energy. Increase to make background brighter, decrease to make background dimmer.
 */
  backgroundEnergyMultiplier: float;
/**
 * Luminance of background measured in nits (candela per square meter). Only used when `ProjectSettings.rendering/lights_and_shadows/use_physical_light_units` is enabled. The default value is roughly equivalent to the sky at midday.
 */
  backgroundIntensity: float;
/**
 * The background mode. See `BGMode` for possible values.
 */
  backgroundMode: int;
/**
 * If set above `0.0` (exclusive), blends between the fog's color and the color of the background `Sky`, as read from the radiance cubemap. This has a small performance cost when set above `0.0`. Must have `background_mode` set to `BG_SKY`.
 * This is useful to simulate aerial perspective (https://en.wikipedia.org/wiki/Aerial_perspective) in large scenes with low density fog. However, it is not very useful for high-density fog, as the sky will shine through. When set to `1.0`, the fog color comes completely from the `Sky`. If set to `0.0`, aerial perspective is disabled.
 * Notice that this does not sample the `Sky` directly, but rather the radiance cubemap. The cubemap is sampled at a mipmap level depending on the depth of the rendered pixel; the farther away, the higher the resolution of the sampled mipmap. This results in the actual color being a blurred version of the sky, with more blur closer to the camera. The highest mipmap resolution is used at a depth of `Camera3D.far`.
 */
  fogAerialPerspective: float;
/**
 * The fog density to be used. This is demonstrated in different ways depending on the `fog_mode` mode chosen:
 * 
 * **Exponential Fog Mode:** Higher values result in denser fog. The fog rendering is exponential like in real life.
 * 
 * **Depth Fog mode:** The maximum intensity of the deep fog, effect will appear in the distance (relative to the camera). At `1.0` the fog will fully obscure the scene, at `0.0` the fog will not be visible.
 */
  fogDensity: float;
/**
 * The fog's depth starting distance from the camera. Only available when `fog_mode` is set to `FOG_MODE_DEPTH`.
 */
  fogDepthBegin: float;
/**
 * The fog depth's intensity curve. A number of presets are available in the Inspector by right-clicking the curve. Only available when `fog_mode` is set to `FOG_MODE_DEPTH`.
 */
  fogDepthCurve: float;
/**
 * The fog's depth end distance from the camera. If this value is set to `0`, it will be equal to the current camera's `Camera3D.far` value. Only available when `fog_mode` is set to `FOG_MODE_DEPTH`.
 */
  fogDepthEnd: float;
/**
 * If `true`, fog effects are enabled.
 */
  fogEnabled: boolean;
/**
 * The height at which the height fog effect begins.
 */
  fogHeight: float;
/**
 * The density used to increase fog as height decreases. To make fog increase as height increases, use a negative value.
 */
  fogHeightDensity: float;
/**
 * The fog's color.
 */
  fogLightColor: Color;
/**
 * The fog's brightness. Higher values result in brighter fog.
 */
  fogLightEnergy: float;
/**
 * The fog mode. See `FogMode` for possible values.
 */
  fogMode: int;
/**
 * The factor to use when affecting the sky with non-volumetric fog. `1.0` means that fog can fully obscure the sky. Lower values reduce the impact of fog on sky rendering, with `0.0` not affecting sky rendering at all.
 * 
 * **Note:** `fog_sky_affect` has no visual effect if `fog_aerial_perspective` is `1.0`.
 */
  fogSkyAffect: float;
/**
 * If set above `0.0`, renders the scene's directional light(s) in the fog color depending on the view angle. This can be used to give the impression that the sun is "piercing" through the fog.
 */
  fogSunScatter: float;
/**
 * The glow blending mode.
 * 
 * **Note:** `glow_blend_mode` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowBlendMode: int;
/**
 * The bloom's intensity. If set to a value higher than `0`, this will make glow visible in areas darker than the `glow_hdr_threshold`.
 */
  glowBloom: float;
/**
 * If `true`, the glow effect is enabled. This simulates real world eye/camera behavior where bright pixels bleed onto surrounding pixels.
 * 
 * **Note:** When using the Mobile rendering method, glow looks different due to the lower dynamic range available in the Mobile rendering method.
 * 
 * **Note:** When using the Compatibility rendering method, glow uses a different implementation with some properties being unavailable and hidden from the inspector: `glow_levels/*`, `glow_normalized`, `glow_strength`, `glow_blend_mode`, `glow_mix`, `glow_map`, and `glow_map_strength`. This implementation is optimized to run on low-end devices and is less flexible as a result.
 */
  glowEnabled: boolean;
/**
 * The higher threshold of the HDR glow. Areas brighter than this threshold will be clamped for the purposes of the glow effect.
 */
  glowHdrLuminanceCap: float;
/**
 * The bleed scale of the HDR glow.
 */
  glowHdrScale: float;
/**
 * The lower threshold of the HDR glow. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this may need to be below `1.0` for glow to be visible. A value of `0.9` works well in this case. This value also needs to be decreased below `1.0` when using glow in 2D, as 2D rendering is performed in SDR.
 */
  glowHdrThreshold: float;
/**
 * The overall brightness multiplier of the glow effect. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this should be increased to `1.5` to compensate.
 */
  glowIntensity: float;
/**
 * The intensity of the 1st level of glow. This is the most "local" level (least blurry).
 * 
 * **Note:** `glow_levels/1` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowLevels1: float;
/**
 * The intensity of the 2nd level of glow.
 * 
 * **Note:** `glow_levels/2` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowLevels2: float;
/**
 * The intensity of the 3rd level of glow.
 * 
 * **Note:** `glow_levels/3` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowLevels3: float;
/**
 * The intensity of the 4th level of glow.
 * 
 * **Note:** `glow_levels/4` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowLevels4: float;
/**
 * The intensity of the 5th level of glow.
 * 
 * **Note:** `glow_levels/5` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowLevels5: float;
/**
 * The intensity of the 6th level of glow.
 * 
 * **Note:** `glow_levels/6` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowLevels6: float;
/**
 * The intensity of the 7th level of glow. This is the most "global" level (blurriest).
 * 
 * **Note:** `glow_levels/7` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowLevels7: float;
/**
 * The texture that should be used as a glow map to *multiply* the resulting glow color according to `glow_map_strength`. This can be used to create a "lens dirt" effect. The texture's RGB color channels are used for modulation, but the alpha channel is ignored.
 * 
 * **Note:** The texture will be stretched to fit the screen. Therefore, it's recommended to use a texture with an aspect ratio that matches your project's base aspect ratio (typically 16:9).
 * 
 * **Note:** `glow_map` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowMap: Texture;
/**
 * How strong of an influence the `glow_map` should have on the overall glow effect. A strength of `0.0` means the glow map has no influence, while a strength of `1.0` means the glow map has full influence.
 * 
 * **Note:** If the glow map has black areas, a value of `1.0` can also turn off the glow effect entirely in specific areas of the screen.
 * 
 * **Note:** `glow_map_strength` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowMapStrength: float;
/**
 * When using the `GLOW_BLEND_MODE_MIX` `glow_blend_mode`, this controls how much the source image is blended with the glow layer. A value of `0.0` makes the glow rendering invisible, while a value of `1.0` is equivalent to `GLOW_BLEND_MODE_REPLACE`.
 * 
 * **Note:** `glow_mix` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowMix: float;
/**
 * If `true`, glow levels will be normalized so that summed together their intensities equal `1.0`.
 * 
 * **Note:** `glow_normalized` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowNormalized: boolean;
/**
 * The strength of the glow effect. This applies as the glow is blurred across the screen and increases the distance and intensity of the blur. When using the Mobile rendering method, this should be increased to compensate for the lower dynamic range.
 * 
 * **Note:** `glow_strength` has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.
 */
  glowStrength: float;
/**
 * The reflected (specular) light source.
 */
  reflectedLightSource: int;
/**
 * The energy multiplier applied to light every time it bounces from a surface when using SDFGI. Values greater than `0.0` will simulate multiple bounces, resulting in a more realistic appearance. Increasing `sdfgi_bounce_feedback` generally has no performance impact. See also `sdfgi_energy`.
 * 
 * **Note:** Values greater than `0.5` can cause infinite feedback loops and should be avoided in scenes with bright materials.
 * 
 * **Note:** If `sdfgi_bounce_feedback` is `0.0`, indirect lighting will not be represented in reflections as light will only bounce one time.
 */
  sdfgiBounceFeedback: float;
/**
 * **Note:** This property is linked to `sdfgi_min_cell_size` and `sdfgi_max_distance`. Changing its value will automatically change those properties as well.
 */
  sdfgiCascade0Distance: float;
/**
 * The number of cascades to use for SDFGI (between 1 and 8). A higher number of cascades allows displaying SDFGI further away while preserving detail up close, at the cost of performance. When using SDFGI on small-scale levels, `sdfgi_cascades` can often be decreased between `1` and `4` to improve performance.
 */
  sdfgiCascades: int;
/**
 * If `true`, enables signed distance field global illumination for meshes that have their `GeometryInstance3D.gi_mode` set to `GeometryInstance3D.GI_MODE_STATIC`. SDFGI is a real-time global illumination technique that works well with procedurally generated and user-built levels, including in situations where geometry is created during gameplay. The signed distance field is automatically generated around the camera as it moves. Dynamic lights are supported, but dynamic occluders and emissive surfaces are not.
 * 
 * **Note:** SDFGI is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 * 
 * **Performance:** SDFGI is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider `LightmapGI` instead). To improve SDFGI performance, enable `ProjectSettings.rendering/global_illumination/gi/use_half_resolution` in the Project Settings.
 * 
 * **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh.
 */
  sdfgiEnabled: boolean;
/**
 * The energy multiplier to use for SDFGI. Higher values will result in brighter indirect lighting and reflections. See also `sdfgi_bounce_feedback`.
 */
  sdfgiEnergy: float;
/**
 * The maximum distance at which SDFGI is visible. Beyond this distance, environment lighting or other sources of GI such as `ReflectionProbe` will be used as a fallback.
 * 
 * **Note:** This property is linked to `sdfgi_min_cell_size` and `sdfgi_cascade0_distance`. Changing its value will automatically change those properties as well.
 */
  sdfgiMaxDistance: float;
/**
 * The cell size to use for the closest SDFGI cascade (in 3D units). Lower values allow SDFGI to be more precise up close, at the cost of making SDFGI updates more demanding. This can cause stuttering when the camera moves fast. Higher values allow SDFGI to cover more ground, while also reducing the performance impact of SDFGI updates.
 * 
 * **Note:** This property is linked to `sdfgi_max_distance` and `sdfgi_cascade0_distance`. Changing its value will automatically change those properties as well.
 */
  sdfgiMinCellSize: float;
/**
 * The normal bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking.
 */
  sdfgiNormalBias: float;
/**
 * The constant bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking.
 */
  sdfgiProbeBias: float;
/**
 * If `true`, SDFGI takes the environment lighting into account. This should be set to `false` for interior scenes.
 */
  sdfgiReadSkyLight: boolean;
/**
 * If `true`, SDFGI uses an occlusion detection approach to reduce light leaking. Occlusion may however introduce dark blotches in certain spots, which may be undesired in mostly outdoor scenes. `sdfgi_use_occlusion` has a performance impact and should only be enabled when needed.
 */
  sdfgiUseOcclusion: boolean;
/**
 * The Y scale to use for SDFGI cells. Lower values will result in SDFGI cells being packed together more closely on the Y axis. This is used to balance between quality and covering a lot of vertical ground. `sdfgi_y_scale` should be set depending on how vertical your scene is (and how fast your camera may move on the Y axis).
 */
  sdfgiYScale: int;
/**
 * The `Sky` resource used for this `Environment`.
 */
  sky: Sky;
/**
 * If set to a value greater than `0.0`, overrides the field of view to use for sky rendering. If set to `0.0`, the same FOV as the current `Camera3D` is used for sky rendering.
 */
  skyCustomFov: float;
/**
 * The rotation to use for sky rendering.
 */
  skyRotation: Vector3;
/**
 * The screen-space ambient occlusion intensity on materials that have an AO texture defined. Values higher than `0` will make the SSAO effect visible in areas darkened by AO textures.
 */
  ssaoAoChannelAffect: float;
/**
 * Sets the strength of the additional level of detail for the screen-space ambient occlusion effect. A high value makes the detail pass more prominent, but it may contribute to aliasing in your final image.
 */
  ssaoDetail: float;
/**
 * If `true`, the screen-space ambient occlusion effect is enabled. This darkens objects' corners and cavities to simulate ambient light not reaching the entire object as in real life. This works well for small, dynamic objects, but baked lighting or ambient occlusion textures will do a better job at displaying ambient occlusion on large static objects. Godot uses a form of SSAO called Adaptive Screen Space Ambient Occlusion which is itself a form of Horizon Based Ambient Occlusion.
 * 
 * **Note:** SSAO is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 */
  ssaoEnabled: boolean;
/**
 * The threshold for considering whether a given point on a surface is occluded or not represented as an angle from the horizon mapped into the `0.0-1.0` range. A value of `1.0` results in no occlusion.
 */
  ssaoHorizon: float;
/**
 * The primary screen-space ambient occlusion intensity. Acts as a multiplier for the screen-space ambient occlusion effect. A higher value results in darker occlusion.
 */
  ssaoIntensity: float;
/**
 * The screen-space ambient occlusion intensity in direct light. In real life, ambient occlusion only applies to indirect light, which means its effects can't be seen in direct light. Values higher than `0` will make the SSAO effect visible in direct light.
 */
  ssaoLightAffect: float;
/**
 * The distribution of occlusion. A higher value results in darker occlusion, similar to `ssao_intensity`, but with a sharper falloff.
 */
  ssaoPower: float;
/**
 * The distance at which objects can occlude each other when calculating screen-space ambient occlusion. Higher values will result in occlusion over a greater distance at the cost of performance and quality.
 */
  ssaoRadius: float;
/**
 * The amount that the screen-space ambient occlusion effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry.
 */
  ssaoSharpness: float;
/**
 * If `true`, the screen-space indirect lighting effect is enabled. Screen space indirect lighting is a form of indirect lighting that allows diffuse light to bounce between nearby objects. Screen-space indirect lighting works very similarly to screen-space ambient occlusion, in that it only affects a limited range. It is intended to be used along with a form of proper global illumination like SDFGI or `VoxelGI`. Screen-space indirect lighting is not affected by individual light's `Light3D.light_indirect_energy`.
 * 
 * **Note:** SSIL is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 */
  ssilEnabled: boolean;
/**
 * The brightness multiplier for the screen-space indirect lighting effect. A higher value will result in brighter light.
 */
  ssilIntensity: float;
/**
 * Amount of normal rejection used when calculating screen-space indirect lighting. Normal rejection uses the normal of a given sample point to reject samples that are facing away from the current pixel. Normal rejection is necessary to avoid light leaking when only one side of an object is illuminated. However, normal rejection can be disabled if light leaking is desirable, such as when the scene mostly contains emissive objects that emit light from faces that cannot be seen from the camera.
 */
  ssilNormalRejection: float;
/**
 * The distance that bounced lighting can travel when using the screen space indirect lighting effect. A larger value will result in light bouncing further in a scene, but may result in under-sampling artifacts which look like long spikes surrounding light sources.
 */
  ssilRadius: float;
/**
 * The amount that the screen-space indirect lighting effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry.
 */
  ssilSharpness: float;
/**
 * The depth tolerance for screen-space reflections.
 */
  ssrDepthTolerance: float;
/**
 * If `true`, screen-space reflections are enabled. Screen-space reflections are more accurate than reflections from `VoxelGI`s or `ReflectionProbe`s, but are slower and can't reflect surfaces occluded by others.
 * 
 * **Note:** SSR is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 */
  ssrEnabled: boolean;
/**
 * The fade-in distance for screen-space reflections. Affects the area from the reflected material to the screen-space reflection. Only positive values are valid (negative values will be clamped to `0.0`).
 */
  ssrFadeIn: float;
/**
 * The fade-out distance for screen-space reflections. Affects the area from the screen-space reflection to the "global" reflection. Only positive values are valid (negative values will be clamped to `0.0`).
 */
  ssrFadeOut: float;
/**
 * The maximum number of steps for screen-space reflections. Higher values are slower.
 */
  ssrMaxSteps: int;
/**
 * Adjusts the brightness of values before they are provided to the tonemapper. Higher `tonemap_exposure` values result in a brighter image. See also `tonemap_white`.
 * 
 * **Note:** Values provided to the tonemapper will also be multiplied by `2.0` and `1.8` for `TONE_MAPPER_FILMIC` and `TONE_MAPPER_ACES` respectively to produce a similar apparent brightness as `TONE_MAPPER_LINEAR`.
 */
  tonemapExposure: float;
/**
 * The tonemapping mode to use. Tonemapping is the process that "converts" HDR values to be suitable for rendering on an LDR display. (Godot doesn't support rendering on HDR displays yet.)
 */
  tonemapMode: int;
/**
 * The white reference value for tonemapping, which indicates where bright white is located in the scale of values provided to the tonemapper. For photorealistic lighting, recommended values are between `6.0` and `8.0`. Higher values result in less blown out highlights, but may make the scene appear lower contrast. See also `tonemap_exposure`.
 * 
 * **Note:** `tonemap_white` is ignored when using `TONE_MAPPER_LINEAR` or `TONE_MAPPER_AGX`.
 */
  tonemapWhite: float;
/**
 * The `Color` of the volumetric fog when interacting with lights. Mist and fog have an albedo close to `Color(1, 1, 1, 1)` while smoke has a darker albedo.
 */
  volumetricFogAlbedo: Color;
/**
 * Scales the strength of ambient light used in the volumetric fog. A value of `0.0` means that ambient light will not impact the volumetric fog. `volumetric_fog_ambient_inject` has a small performance cost when set above `0.0`.
 * 
 * **Note:** This has no visible effect if `volumetric_fog_density` is `0.0` or if `volumetric_fog_albedo` is a fully black color.
 */
  volumetricFogAmbientInject: float;
/**
 * The direction of scattered light as it goes through the volumetric fog. A value close to `1.0` means almost all light is scattered forward. A value close to `0.0` means light is scattered equally in all directions. A value close to `-1.0` means light is scattered mostly backward. Fog and mist scatter light slightly forward, while smoke scatters light equally in all directions.
 */
  volumetricFogAnisotropy: float;
/**
 * The base *exponential* density of the volumetric fog. Set this to the lowest density you want to have globally. `FogVolume`s can be used to add to or subtract from this density in specific areas. Fog rendering is exponential as in real life.
 * A value of `0.0` disables global volumetric fog while allowing `FogVolume`s to display volumetric fog in specific areas.
 * To make volumetric fog work as a volumetric *lighting* solution, set `volumetric_fog_density` to the lowest non-zero value (`0.0001`) then increase lights' `Light3D.light_volumetric_fog_energy` to values between `10000` and `100000` to compensate for the very low density.
 */
  volumetricFogDensity: float;
/**
 * The distribution of size down the length of the froxel buffer. A higher value compresses the froxels closer to the camera and places more detail closer to the camera.
 */
  volumetricFogDetailSpread: float;
/**
 * The emitted light from the volumetric fog. Even with emission, volumetric fog will not cast light onto other surfaces. Emission is useful to establish an ambient color. As the volumetric fog effect uses single-scattering only, fog tends to need a little bit of emission to soften the harsh shadows.
 */
  volumetricFogEmission: Color;
/**
 * The brightness of the emitted light from the volumetric fog.
 */
  volumetricFogEmissionEnergy: float;
/**
 * Enables the volumetric fog effect. Volumetric fog uses a screen-aligned froxel buffer to calculate accurate volumetric scattering in the short to medium range. Volumetric fog interacts with `FogVolume`s and lights to calculate localized and global fog. Volumetric fog uses a PBR single-scattering model based on extinction, scattering, and emission which it exposes to users as density, albedo, and emission.
 * 
 * **Note:** Volumetric fog is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 */
  volumetricFogEnabled: boolean;
/**
 * Scales the strength of Global Illumination used in the volumetric fog's albedo color. A value of `0.0` means that Global Illumination will not impact the volumetric fog. `volumetric_fog_gi_inject` has a small performance cost when set above `0.0`.
 * 
 * **Note:** This has no visible effect if `volumetric_fog_density` is `0.0` or if `volumetric_fog_albedo` is a fully black color.
 * 
 * **Note:** Only `VoxelGI` and SDFGI (`Environment.sdfgi_enabled`) are taken into account when using `volumetric_fog_gi_inject`. Global illumination from `LightmapGI`, `ReflectionProbe` and SSIL (see `ssil_enabled`) will be ignored by volumetric fog.
 */
  volumetricFogGiInject: float;
/**
 * The distance over which the volumetric fog is computed. Increase to compute fog over a greater range, decrease to add more detail when a long range is not needed. For best quality fog, keep this as low as possible. See also `ProjectSettings.rendering/environment/volumetric_fog/volume_depth`.
 */
  volumetricFogLength: float;
/**
 * The factor to use when affecting the sky with volumetric fog. `1.0` means that volumetric fog can fully obscure the sky. Lower values reduce the impact of volumetric fog on sky rendering, with `0.0` not affecting sky rendering at all.
 * 
 * **Note:** `volumetric_fog_sky_affect` also affects `FogVolume`s, even if `volumetric_fog_density` is `0.0`. If you notice `FogVolume`s are disappearing when looking towards the sky, set `volumetric_fog_sky_affect` to `1.0`.
 */
  volumetricFogSkyAffect: float;
/**
 * The amount by which to blend the last frame with the current frame. A higher number results in smoother volumetric fog, but makes "ghosting" much worse. A lower value reduces ghosting but can result in the per-frame temporal jitter becoming visible.
 */
  volumetricFogTemporalReprojectionAmount: float;
/**
 * Enables temporal reprojection in the volumetric fog. Temporal reprojection blends the current frame's volumetric fog with the last frame's volumetric fog to smooth out jagged edges. The performance cost is minimal; however, it leads to moving `FogVolume`s and `Light3D`s "ghosting" and leaving a trail behind them. When temporal reprojection is enabled, try to avoid moving `FogVolume`s or `Light3D`s too fast. Short-lived dynamic lighting effects should have `Light3D.light_volumetric_fog_energy` set to `0.0` to avoid ghosting.
 */
  volumetricFogTemporalReprojectionEnabled: boolean;
/**
 * Returns the intensity of the glow level `idx`.
 * @param idx int
 * @returns float
 */
  getGlowLevel(idx: int): float;
/**
 * Sets the intensity of the glow level `idx`. A value above `0.0` enables the level. Each level relies on the previous level. This means that enabling higher glow levels will slow down the glow effect rendering, even if previous levels aren't enabled.
 * @param idx int
 * @param intensity float
 */
  setGlowLevel(idx: int, intensity: float): void;
/**
 * Clears the background using the clear color defined in `ProjectSettings.rendering/environment/defaults/default_clear_color`.
 */
  static readonly BG_CLEAR_COLOR: int;
/**
 * Clears the background using a custom clear color.
 */
  static readonly BG_COLOR: int;
/**
 * Displays a user-defined sky in the background.
 */
  static readonly BG_SKY: int;
/**
 * Displays a `CanvasLayer` in the background.
 */
  static readonly BG_CANVAS: int;
/**
 * Keeps on screen every pixel drawn in the background. This is the fastest background mode, but it can only be safely used in fully-interior scenes (no visible sky or sky reflections). If enabled in a scene where the background is visible, "ghost trail" artifacts will be visible when moving the camera.
 */
  static readonly BG_KEEP: int;
/**
 * Displays a camera feed in the background.
 */
  static readonly BG_CAMERA_FEED: int;
/**
 * Represents the size of the `BGMode` enum.
 */
  static readonly BG_MAX: int;
/**
 * Gather ambient light from whichever source is specified as the background.
 */
  static readonly AMBIENT_SOURCE_BG: int;
/**
 * Disable ambient light. This provides a slight performance boost over `AMBIENT_SOURCE_SKY`.
 */
  static readonly AMBIENT_SOURCE_DISABLED: int;
/**
 * Specify a specific `Color` for ambient light. This provides a slight performance boost over `AMBIENT_SOURCE_SKY`.
 */
  static readonly AMBIENT_SOURCE_COLOR: int;
/**
 * Gather ambient light from the `Sky` regardless of what the background is.
 */
  static readonly AMBIENT_SOURCE_SKY: int;
/**
 * Use the background for reflections.
 */
  static readonly REFLECTION_SOURCE_BG: int;
/**
 * Disable reflections. This provides a slight performance boost over other options.
 */
  static readonly REFLECTION_SOURCE_DISABLED: int;
/**
 * Use the `Sky` for reflections regardless of what the background is.
 */
  static readonly REFLECTION_SOURCE_SKY: int;
/**
 * Does not modify color data, resulting in a linear tonemapping curve which unnaturally clips bright values, causing bright lighting to look blown out. The simplest and fastest tonemapper.
 */
  static readonly TONE_MAPPER_LINEAR: int;
/**
 * A simple tonemapping curve that rolls off bright values to prevent clipping. This results in an image that can appear dull and low contrast. Slower than `TONE_MAPPER_LINEAR`.
 * 
 * **Note:** When `tonemap_white` is left at the default value of `1.0`, `TONE_MAPPER_REINHARDT` produces an identical image to `TONE_MAPPER_LINEAR`.
 */
  static readonly TONE_MAPPER_REINHARDT: int;
/**
 * Uses a film-like tonemapping curve to prevent clipping of bright values and provide better contrast than `TONE_MAPPER_REINHARDT`. Slightly slower than `TONE_MAPPER_REINHARDT`.
 */
  static readonly TONE_MAPPER_FILMIC: int;
/**
 * Uses a high-contrast film-like tonemapping curve and desaturates bright values for a more realistic appearance. Slightly slower than `TONE_MAPPER_FILMIC`.
 * 
 * **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.
 */
  static readonly TONE_MAPPER_ACES: int;
/**
 * Uses a film-like tonemapping curve and desaturates bright values for a more realistic appearance. Better than other tonemappers at maintaining the hue of colors as they become brighter. The slowest tonemapping option.
 * 
 * **Note:** `tonemap_white` is fixed at a value of `16.29`, which makes `TONE_MAPPER_AGX` unsuitable for use with the Mobile rendering method.
 */
  static readonly TONE_MAPPER_AGX: int;
/**
 * Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources.
 */
  static readonly GLOW_BLEND_MODE_ADDITIVE: int;
/**
 * Screen glow blending mode. Increases brightness, used frequently with bloom.
 */
  static readonly GLOW_BLEND_MODE_SCREEN: int;
/**
 * Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom).
 */
  static readonly GLOW_BLEND_MODE_SOFTLIGHT: int;
/**
 * Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness.
 */
  static readonly GLOW_BLEND_MODE_REPLACE: int;
/**
 * Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect.
 */
  static readonly GLOW_BLEND_MODE_MIX: int;
/**
 * Use a physically-based fog model defined primarily by fog density.
 */
  static readonly FOG_MODE_EXPONENTIAL: int;
/**
 * Use a simple fog model defined by start and end positions and a custom curve. While not physically accurate, this model can be useful when you need more artistic control.
 */
  static readonly FOG_MODE_DEPTH: int;
/**
 * Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality.
 */
  static readonly SDFGI_Y_SCALE_50_PERCENT: int;
/**
 * Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales.
 */
  static readonly SDFGI_Y_SCALE_75_PERCENT: int;
/**
 * Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings.
 */
  static readonly SDFGI_Y_SCALE_100_PERCENT: int;
}
