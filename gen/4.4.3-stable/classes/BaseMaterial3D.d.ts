import type { Color, GodotArray, GodotDictionary, Material, Texture2D, Vector3, float, int } from "../index.d.ts";
/**
 * Abstract base class for defining the 3D rendering properties of meshes.
 * 
 * This class serves as a default material with a wide variety of rendering features and properties without the need to write shader code. See the tutorial below for details.
 */
export class BaseMaterial3D extends Material {
/**
 * The material's base color.
 * 
 * **Note:** If `detail_enabled` is `true` and a `detail_albedo` texture is specified, `albedo_color` will *not* modulate the detail texture. This can be used to color partial areas of a material by not specifying an albedo texture and using a transparent `detail_albedo` texture instead.
 */
  albedoColor: Color;
/**
 * Texture to multiply by `albedo_color`. Used for basic texturing of objects.
 * If the texture appears unexpectedly too dark or too bright, check `albedo_texture_force_srgb`.
 */
  albedoTexture: Texture2D;
/**
 * If `true`, forces a conversion of the `albedo_texture` from sRGB color space to linear color space. See also `vertex_color_is_srgb`.
 * This should only be enabled when needed (typically when using a `ViewportTexture` as `albedo_texture`). If `albedo_texture_force_srgb` is `true` when it shouldn't be, the texture will appear to be too dark. If `albedo_texture_force_srgb` is `false` when it shouldn't be, the texture will appear to be too bright.
 */
  albedoTextureForceSrgb: boolean;
/**
 * Enables multichannel signed distance field rendering shader. Use `msdf_pixel_range` and `msdf_outline_size` to configure MSDF parameters.
 */
  albedoTextureMsdf: boolean;
/**
 * Threshold at which antialiasing will be applied on the alpha channel.
 */
  alphaAntialiasingEdge: float;
/**
 * The type of alpha antialiasing to apply. See `AlphaAntiAliasing`.
 */
  alphaAntialiasingMode: int;
/**
 * The hashing scale for Alpha Hash. Recommended values between `0` and `2`.
 */
  alphaHashScale: float;
/**
 * Threshold at which the alpha scissor will discard values. Higher values will result in more pixels being discarded. If the material becomes too opaque at a distance, try increasing `alpha_scissor_threshold`. If the material disappears at a distance, try decreasing `alpha_scissor_threshold`.
 */
  alphaScissorThreshold: float;
/**
 * The strength of the anisotropy effect. This is multiplied by `anisotropy_flowmap`'s alpha channel if a texture is defined there and the texture contains an alpha channel.
 */
  anisotropy: float;
/**
 * If `true`, anisotropy is enabled. Anisotropy changes the shape of the specular blob and aligns it to tangent space. This is useful for brushed aluminum and hair reflections.
 * 
 * **Note:** Mesh tangents are needed for anisotropy to work. If the mesh does not contain tangents, the anisotropy effect will appear broken.
 * 
 * **Note:** Material anisotropy should not to be confused with anisotropic texture filtering, which can be enabled by setting `texture_filter` to `TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC`.
 */
  anisotropyEnabled: boolean;
/**
 * Texture that offsets the tangent map for anisotropy calculations and optionally controls the anisotropy effect (if an alpha channel is present). The flowmap texture is expected to be a derivative map, with the red channel representing distortion on the X axis and green channel representing distortion on the Y axis. Values below 0.5 will result in negative distortion, whereas values above 0.5 will result in positive distortion.
 * If present, the texture's alpha channel will be used to multiply the strength of the `anisotropy` effect. Fully opaque pixels will keep the anisotropy effect's original strength while fully transparent pixels will disable the anisotropy effect entirely. The flowmap texture's blue channel is ignored.
 */
  anisotropyFlowmap: Texture2D;
/**
 * If `true`, ambient occlusion is enabled. Ambient occlusion darkens areas based on the `ao_texture`.
 */
  aoEnabled: boolean;
/**
 * Amount that ambient occlusion affects lighting from lights. If `0`, ambient occlusion only affects ambient light. If `1`, ambient occlusion affects lights just as much as it affects ambient light. This can be used to impact the strength of the ambient occlusion effect, but typically looks unrealistic.
 */
  aoLightAffect: float;
/**
 * If `true`, use `UV2` coordinates to look up from the `ao_texture`.
 */
  aoOnUv2: boolean;
/**
 * Texture that defines the amount of ambient occlusion for a given point on the object.
 */
  aoTexture: Texture2D;
/**
 * Specifies the channel of the `ao_texture` in which the ambient occlusion information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.
 */
  aoTextureChannel: int;
/**
 * The color used by the backlight effect. Represents the light passing through an object.
 */
  backlight: Color;
/**
 * If `true`, the backlight effect is enabled. See also `subsurf_scatter_transmittance_enabled`.
 */
  backlightEnabled: boolean;
/**
 * Texture used to control the backlight effect per-pixel. Added to `backlight`.
 */
  backlightTexture: Texture2D;
/**
 * If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. Only applies when `billboard_mode` is not `BILLBOARD_DISABLED`.
 */
  billboardKeepScale: boolean;
/**
 * Controls how the object faces the camera. See `BillboardMode`.
 * 
 * **Note:** Billboard mode is not suitable for VR because the left-right vector of the camera is not horizontal when the screen is attached to your head instead of on the table. See GitHub issue #41567 (https://github.com/godotengine/godot/issues/41567) for details.
 */
  billboardMode: int;
/**
 * The material's blend mode.
 * 
 * **Note:** Values other than `Mix` force the object into the transparent pipeline. See `BlendMode`.
 */
  blendMode: int;
/**
 * Sets the strength of the clearcoat effect. Setting to `0` looks the same as disabling the clearcoat effect.
 */
  clearcoat: float;
/**
 * If `true`, clearcoat rendering is enabled. Adds a secondary transparent pass to the lighting calculation resulting in an added specular blob. This makes materials appear as if they have a clear layer on them that can be either glossy or rough.
 * 
 * **Note:** Clearcoat rendering is not visible if the material's `shading_mode` is `SHADING_MODE_UNSHADED`.
 */
  clearcoatEnabled: boolean;
/**
 * Sets the roughness of the clearcoat pass. A higher value results in a rougher clearcoat while a lower value results in a smoother clearcoat.
 */
  clearcoatRoughness: float;
/**
 * Texture that defines the strength of the clearcoat effect and the glossiness of the clearcoat. Strength is specified in the red channel while glossiness is specified in the green channel.
 */
  clearcoatTexture: Texture2D;
/**
 * Determines which side of the triangle to cull depending on whether the triangle faces towards or away from the camera. See `CullMode`.
 */
  cullMode: int;
/**
 * Determines when depth rendering takes place. See `DepthDrawMode`. See also `transparency`.
 */
  depthDrawMode: int;
/**
 * Texture that specifies the color of the detail overlay. `detail_albedo`'s alpha channel is used as a mask, even when the material is opaque. To use a dedicated texture as a mask, see `detail_mask`.
 * 
 * **Note:** `detail_albedo` is *not* modulated by `albedo_color`.
 */
  detailAlbedo: Texture2D;
/**
 * Specifies how the `detail_albedo` should blend with the current `ALBEDO`. See `BlendMode` for options.
 */
  detailBlendMode: int;
/**
 * If `true`, enables the detail overlay. Detail is a second texture that gets mixed over the surface of the object based on `detail_mask` and `detail_albedo`'s alpha channel. This can be used to add variation to objects, or to blend between two different albedo/normal textures.
 */
  detailEnabled: boolean;
/**
 * Texture used to specify how the detail textures get blended with the base textures. `detail_mask` can be used together with `detail_albedo`'s alpha channel (if any).
 */
  detailMask: Texture2D;
/**
 * Texture that specifies the per-pixel normal of the detail overlay. The `detail_normal` texture only uses the red and green channels; the blue and alpha channels are ignored. The normal read from `detail_normal` is oriented around the surface normal provided by the `Mesh`.
 * 
 * **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See this page (http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates) for a comparison of normal map coordinates expected by popular engines.
 */
  detailNormal: Texture2D;
/**
 * Specifies whether to use `UV` or `UV2` for the detail layer. See `DetailUV` for options.
 */
  detailUvLayer: int;
/**
 * The algorithm used for diffuse light scattering. See `DiffuseMode`.
 */
  diffuseMode: int;
/**
 * If `true`, the object receives no ambient light.
 */
  disableAmbientLight: boolean;
/**
 * If `true`, the object will not be affected by fog (neither volumetric nor depth fog). This is useful for unshaded or transparent materials (e.g. particles), which without this setting will be affected even if fully transparent.
 */
  disableFog: boolean;
/**
 * If `true`, the object receives no shadow that would otherwise be cast onto it.
 */
  disableReceiveShadows: boolean;
/**
 * Distance at which the object appears fully opaque.
 * 
 * **Note:** If `distance_fade_max_distance` is less than `distance_fade_min_distance`, the behavior will be reversed. The object will start to fade away at `distance_fade_max_distance` and will fully disappear once it reaches `distance_fade_min_distance`.
 */
  distanceFadeMaxDistance: float;
/**
 * Distance at which the object starts to become visible. If the object is less than this distance away, it will be invisible.
 * 
 * **Note:** If `distance_fade_min_distance` is greater than `distance_fade_max_distance`, the behavior will be reversed. The object will start to fade away at `distance_fade_max_distance` and will fully disappear once it reaches `distance_fade_min_distance`.
 */
  distanceFadeMinDistance: float;
/**
 * Specifies which type of fade to use. Can be any of the `DistanceFadeMode`s.
 */
  distanceFadeMode: int;
/**
 * The emitted light's color. See `emission_enabled`.
 */
  emission: Color;
/**
 * If `true`, the body emits light. Emitting light makes the object appear brighter. The object can also cast light on other objects if a `VoxelGI`, SDFGI, or `LightmapGI` is used and this object is used in baked lighting.
 */
  emissionEnabled: boolean;
/**
 * Multiplier for emitted light. See `emission_enabled`.
 */
  emissionEnergyMultiplier: float;
/**
 * Luminance of emitted light, measured in nits (candela per square meter). Only available when `ProjectSettings.rendering/lights_and_shadows/use_physical_light_units` is enabled. The default is roughly equivalent to an indoor lightbulb.
 */
  emissionIntensity: float;
/**
 * Use `UV2` to read from the `emission_texture`.
 */
  emissionOnUv2: boolean;
/**
 * Sets how `emission` interacts with `emission_texture`. Can either add or multiply. See `EmissionOperator` for options.
 */
  emissionOperator: int;
/**
 * Texture that specifies how much surface emits light at a given point.
 */
  emissionTexture: Texture2D;
/**
 * If `true`, the object is rendered at the same size regardless of distance.
 */
  fixedSize: boolean;
/**
 * If `true`, enables the vertex grow setting. This can be used to create mesh-based outlines using a second material pass and its `cull_mode` set to `CULL_FRONT`. See also `grow_amount`.
 * 
 * **Note:** Vertex growth cannot create new vertices, which means that visible gaps may occur in sharp corners. This can be alleviated by designing the mesh to use smooth normals exclusively using face weighted normals (http://wiki.polycount.com/wiki/Face_weighted_normals) in the 3D authoring software. In this case, grow will be able to join every outline together, just like in the original mesh.
 */
  grow: boolean;
/**
 * Grows object vertices in the direction of their normals. Only effective if `grow` is `true`.
 */
  growAmount: float;
/**
 * If `true`, uses parallax occlusion mapping to represent depth in the material instead of simple offset mapping (see `heightmap_enabled`). This results in a more convincing depth effect, but is much more expensive on the GPU. Only enable this on materials where it makes a significant visual difference.
 */
  heightmapDeepParallax: boolean;
/**
 * If `true`, height mapping is enabled (also called "parallax mapping" or "depth mapping"). See also `normal_enabled`. Height mapping is a demanding feature on the GPU, so it should only be used on materials where it makes a significant visual difference.
 * 
 * **Note:** Height mapping is not supported if triplanar mapping is used on the same material. The value of `heightmap_enabled` will be ignored if `uv1_triplanar` is enabled.
 */
  heightmapEnabled: boolean;
/**
 * If `true`, flips the mesh's binormal vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable `heightmap_scale`), try setting this to `true`.
 */
  heightmapFlipBinormal: boolean;
/**
 * If `true`, flips the mesh's tangent vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable `heightmap_scale`), try setting this to `true`.
 */
  heightmapFlipTangent: boolean;
/**
 * If `true`, interprets the height map texture as a depth map, with brighter values appearing to be "lower" in altitude compared to darker values.
 * This can be enabled for compatibility with some materials authored for Godot 3.x. This is not necessary if the Invert import option was used to invert the depth map in Godot 3.x, in which case `heightmap_flip_texture` should remain `false`.
 */
  heightmapFlipTexture: boolean;
/**
 * The number of layers to use for parallax occlusion mapping when the camera is up close to the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.
 * 
 * **Note:** Only effective if `heightmap_deep_parallax` is `true`.
 */
  heightmapMaxLayers: int;
/**
 * The number of layers to use for parallax occlusion mapping when the camera is far away from the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.
 * 
 * **Note:** Only effective if `heightmap_deep_parallax` is `true`.
 */
  heightmapMinLayers: int;
/**
 * The heightmap scale to use for the parallax effect (see `heightmap_enabled`). The default value is tuned so that the highest point (value = 255) appears to be 5 cm higher than the lowest point (value = 0). Higher values result in a deeper appearance, but may result in artifacts appearing when looking at the material from oblique angles, especially when the camera moves. Negative values can be used to invert the parallax effect, but this is different from inverting the texture using `heightmap_flip_texture` as the material will also appear to be "closer" to the camera. In most cases, `heightmap_scale` should be kept to a positive value.
 * 
 * **Note:** If the height map effect looks strange regardless of this value, try adjusting `heightmap_flip_binormal` and `heightmap_flip_tangent`. See also `heightmap_texture` for recommendations on authoring heightmap textures, as the way the heightmap texture is authored affects how `heightmap_scale` behaves.
 */
  heightmapScale: float;
/**
 * The texture to use as a height map. See also `heightmap_enabled`.
 * For best results, the texture should be normalized (with `heightmap_scale` reduced to compensate). In GIMP (https://gimp.org), this can be done using **Colors > Auto > Equalize**. If the texture only uses a small part of its available range, the parallax effect may look strange, especially when the camera moves.
 * 
 * **Note:** To reduce memory usage and improve loading times, you may be able to use a lower-resolution heightmap texture as most heightmaps are only comprised of low-frequency data.
 */
  heightmapTexture: Texture2D;
/**
 * A high value makes the material appear more like a metal. Non-metals use their albedo as the diffuse color and add diffuse to the specular reflection. With non-metals, the reflection appears on top of the albedo color. Metals use their albedo as a multiplier to the specular reflection and set the diffuse color to black resulting in a tinted reflection. Materials work better when fully metal or fully non-metal, values between `0` and `1` should only be used for blending between metal and non-metal sections. To alter the amount of reflection use `roughness`.
 */
  metallic: float;
/**
 * Adjusts the strength of specular reflections. Specular reflections are composed of scene reflections and the specular lobe which is the bright spot that is reflected from light sources. When set to `0.0`, no specular reflections will be visible. This differs from the `SPECULAR_DISABLED` `SpecularMode` as `SPECULAR_DISABLED` only applies to the specular lobe from the light source.
 * 
 * **Note:** Unlike `metallic`, this is not energy-conserving, so it should be left at `0.5` in most cases. See also `roughness`.
 */
  metallicSpecular: float;
/**
 * Texture used to specify metallic for an object. This is multiplied by `metallic`.
 */
  metallicTexture: Texture2D;
/**
 * Specifies the channel of the `metallic_texture` in which the metallic information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.
 */
  metallicTextureChannel: int;
/**
 * The width of the shape outline.
 */
  msdfOutlineSize: float;
/**
 * The width of the range around the shape between the minimum and maximum representable signed distance.
 */
  msdfPixelRange: float;
/**
 * If `true`, depth testing is disabled and the object will be drawn in render order.
 */
  noDepthTest: boolean;
/**
 * If `true`, normal mapping is enabled. This has a slight performance cost, especially on mobile GPUs.
 */
  normalEnabled: boolean;
/**
 * The strength of the normal map's effect.
 */
  normalScale: float;
/**
 * Texture used to specify the normal at a given pixel. The `normal_texture` only uses the red and green channels; the blue and alpha channels are ignored. The normal read from `normal_texture` is oriented around the surface normal provided by the `Mesh`.
 * 
 * **Note:** The mesh must have both normals and tangents defined in its vertex data. Otherwise, the normal map won't render correctly and will only appear to darken the whole surface. If creating geometry with `SurfaceTool`, you can use `SurfaceTool.generate_normals` and `SurfaceTool.generate_tangents` to automatically generate normals and tangents respectively.
 * 
 * **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See this page (http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates) for a comparison of normal map coordinates expected by popular engines.
 * 
 * **Note:** If `detail_enabled` is `true`, the `detail_albedo` texture is drawn *below* the `normal_texture`. To display a normal map *above* the `detail_albedo` texture, use `detail_normal` instead.
 */
  normalTexture: Texture2D;
/**
 * The Occlusion/Roughness/Metallic texture to use. This is a more efficient replacement of `ao_texture`, `roughness_texture` and `metallic_texture` in `ORMMaterial3D`. Ambient occlusion is stored in the red channel. Roughness map is stored in the green channel. Metallic map is stored in the blue channel. The alpha channel is ignored.
 */
  ormTexture: Texture2D;
/**
 * The number of horizontal frames in the particle sprite sheet. Only enabled when using `BILLBOARD_PARTICLES`. See `billboard_mode`.
 */
  particlesAnimHFrames: int;
/**
 * If `true`, particle animations are looped. Only enabled when using `BILLBOARD_PARTICLES`. See `billboard_mode`.
 */
  particlesAnimLoop: boolean;
/**
 * The number of vertical frames in the particle sprite sheet. Only enabled when using `BILLBOARD_PARTICLES`. See `billboard_mode`.
 */
  particlesAnimVFrames: int;
/**
 * The point size in pixels. See `use_point_size`.
 */
  pointSize: float;
/**
 * Distance over which the fade effect takes place. The larger the distance the longer it takes for an object to fade.
 */
  proximityFadeDistance: float;
/**
 * If `true`, the proximity fade effect is enabled. The proximity fade effect fades out each pixel based on its distance to another object.
 */
  proximityFadeEnabled: boolean;
/**
 * If `true`, the refraction effect is enabled. Distorts transparency based on light from behind the object.
 * 
 * **Note:** Refraction is implemented using the screen texture. Only opaque materials will appear in the refraction, since transparent materials do not appear in the screen texture.
 */
  refractionEnabled: boolean;
/**
 * The strength of the refraction effect.
 */
  refractionScale: float;
/**
 * Texture that controls the strength of the refraction per-pixel. Multiplied by `refraction_scale`.
 */
  refractionTexture: Texture2D;
/**
 * Specifies the channel of the `refraction_texture` in which the refraction information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored refraction in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.
 */
  refractionTextureChannel: int;
/**
 * Sets the strength of the rim lighting effect.
 */
  rim: float;
/**
 * If `true`, rim effect is enabled. Rim lighting increases the brightness at glancing angles on an object.
 * 
 * **Note:** Rim lighting is not visible if the material's `shading_mode` is `SHADING_MODE_UNSHADED`.
 */
  rimEnabled: boolean;
/**
 * Texture used to set the strength of the rim lighting effect per-pixel. Multiplied by `rim`.
 */
  rimTexture: Texture2D;
/**
 * The amount of to blend light and albedo color when rendering rim effect. If `0` the light color is used, while `1` means albedo color is used. An intermediate value generally works best.
 */
  rimTint: float;
/**
 * Surface reflection. A value of `0` represents a perfect mirror while a value of `1` completely blurs the reflection. See also `metallic`.
 */
  roughness: float;
/**
 * Texture used to control the roughness per-pixel. Multiplied by `roughness`.
 */
  roughnessTexture: Texture2D;
/**
 * Specifies the channel of the `roughness_texture` in which the roughness information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.
 */
  roughnessTextureChannel: int;
/**
 * Sets whether the shading takes place, per-pixel, per-vertex or unshaded. Per-vertex lighting is faster, making it the best choice for mobile applications, however it looks considerably worse than per-pixel. Unshaded rendering is the fastest, but disables all interactions with lights.
 */
  shadingMode: int;
/**
 * If `true`, enables the "shadow to opacity" render mode where lighting modifies the alpha so shadowed areas are opaque and non-shadowed areas are transparent. Useful for overlaying shadows onto a camera feed in AR.
 */
  shadowToOpacity: boolean;
/**
 * The method for rendering the specular blob. See `SpecularMode`.
 * 
 * **Note:** `specular_mode` only applies to the specular blob. It does not affect specular reflections from the sky, screen-space reflections, `VoxelGI`, SDFGI or `ReflectionProbe`s. To disable reflections from these sources as well, set `metallic_specular` to `0.0` instead.
 */
  specularMode: int;
/**
 * If `true`, subsurface scattering is enabled. Emulates light that penetrates an object's surface, is scattered, and then emerges. Subsurface scattering quality is controlled by `ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality`.
 */
  subsurfScatterEnabled: boolean;
/**
 * If `true`, subsurface scattering will use a special mode optimized for the color and density of human skin, such as boosting the intensity of the red channel in subsurface scattering.
 */
  subsurfScatterSkinMode: boolean;
/**
 * The strength of the subsurface scattering effect. The depth of the effect is also controlled by `ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale`, which is set globally.
 */
  subsurfScatterStrength: float;
/**
 * Texture used to control the subsurface scattering strength. Stored in the red texture channel. Multiplied by `subsurf_scatter_strength`.
 */
  subsurfScatterTexture: Texture2D;
/**
 * The intensity of the subsurface scattering transmittance effect.
 */
  subsurfScatterTransmittanceBoost: float;
/**
 * The color to multiply the subsurface scattering transmittance effect with. Ignored if `subsurf_scatter_skin_mode` is `true`.
 */
  subsurfScatterTransmittanceColor: Color;
/**
 * The depth of the subsurface scattering transmittance effect.
 */
  subsurfScatterTransmittanceDepth: float;
/**
 * If `true`, enables subsurface scattering transmittance. Only effective if `subsurf_scatter_enabled` is `true`. See also `backlight_enabled`.
 */
  subsurfScatterTransmittanceEnabled: boolean;
/**
 * The texture to use for multiplying the intensity of the subsurface scattering transmittance intensity. See also `subsurf_scatter_texture`. Ignored if `subsurf_scatter_skin_mode` is `true`.
 */
  subsurfScatterTransmittanceTexture: Texture2D;
/**
 * Filter flags for the texture. See `TextureFilter` for options.
 * 
 * **Note:** `heightmap_texture` is always sampled with linear filtering, even if nearest-neighbor filtering is selected here. This is to ensure the heightmap effect looks as intended. If you need sharper height transitions between pixels, resize the heightmap texture in an image editor with nearest-neighbor filtering.
 */
  textureFilter: int;
/**
 * Repeat flags for the texture. See `TextureFilter` for options.
 */
  textureRepeat: boolean;
/**
 * The material's transparency mode. Some transparency modes will disable shadow casting. Any transparency mode other than `TRANSPARENCY_DISABLED` has a greater performance impact compared to opaque rendering. See also `blend_mode`.
 */
  transparency: int;
/**
 * If `true`, enables parts of the shader required for `GPUParticles3D` trails to function. This also requires using a mesh with appropriate skinning, such as `RibbonTrailMesh` or `TubeTrailMesh`. Enabling this feature outside of materials used in `GPUParticles3D` meshes will break material rendering.
 */
  useParticleTrails: boolean;
/**
 * If `true`, render point size can be changed.
 * 
 * **Note:** This is only effective for objects whose geometry is point-based rather than triangle-based. See also `point_size`.
 */
  usePointSize: boolean;
/**
 * How much to offset the `UV` coordinates. This amount will be added to `UV` in the vertex function. This can be used to offset a texture. The Z component is used when `uv1_triplanar` is enabled, but it is not used anywhere else.
 */
  uv1Offset: Vector3;
/**
 * How much to scale the `UV` coordinates. This is multiplied by `UV` in the vertex function. The Z component is used when `uv1_triplanar` is enabled, but it is not used anywhere else.
 */
  uv1Scale: Vector3;
/**
 * If `true`, instead of using `UV` textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing.
 */
  uv1Triplanar: boolean;
/**
 * A lower number blends the texture more softly while a higher number blends the texture more sharply.
 * 
 * **Note:** `uv1_triplanar_sharpness` is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.
 */
  uv1TriplanarSharpness: float;
/**
 * If `true`, triplanar mapping for `UV` is calculated in world space rather than object local space. See also `uv1_triplanar`.
 */
  uv1WorldTriplanar: boolean;
/**
 * How much to offset the `UV2` coordinates. This amount will be added to `UV2` in the vertex function. This can be used to offset a texture. The Z component is used when `uv2_triplanar` is enabled, but it is not used anywhere else.
 */
  uv2Offset: Vector3;
/**
 * How much to scale the `UV2` coordinates. This is multiplied by `UV2` in the vertex function. The Z component is used when `uv2_triplanar` is enabled, but it is not used anywhere else.
 */
  uv2Scale: Vector3;
/**
 * If `true`, instead of using `UV2` textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing.
 */
  uv2Triplanar: boolean;
/**
 * A lower number blends the texture more softly while a higher number blends the texture more sharply.
 * 
 * **Note:** `uv2_triplanar_sharpness` is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.
 */
  uv2TriplanarSharpness: float;
/**
 * If `true`, triplanar mapping for `UV2` is calculated in world space rather than object local space. See also `uv2_triplanar`.
 */
  uv2WorldTriplanar: boolean;
/**
 * If `true`, vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. If `false`, vertex colors are considered to be stored in linear color space and are rendered as-is. See also `albedo_texture_force_srgb`.
 * 
 * **Note:** Only effective when using the Forward+ and Mobile rendering methods, not Compatibility.
 */
  vertexColorIsSrgb: boolean;
/**
 * If `true`, the vertex color is used as albedo color.
 */
  vertexColorUseAsAlbedo: boolean;
/**
 * Returns `true`, if the specified `Feature` is enabled.
 * @param feature int
 * @returns boolean
 */
  getFeature(feature: int): boolean;
/**
 * Returns `true`, if the specified flag is enabled. See `Flags` enumerator for options.
 * @param flag int
 * @returns boolean
 */
  getFlag(flag: int): boolean;
/**
 * Returns the `Texture2D` associated with the specified `TextureParam`.
 * @param param int
 * @returns Texture2D
 */
  getTexture(param: int): Texture2D;
/**
 * If `true`, enables the specified `Feature`. Many features that are available in `BaseMaterial3D`s need to be enabled before use. This way the cost for using the feature is only incurred when specified. Features can also be enabled by setting the corresponding member to `true`.
 * @param feature int
 * @param enable boolean
 */
  setFeature(feature: int, enable: boolean): void;
/**
 * If `true`, enables the specified flag. Flags are optional behavior that can be turned on and off. Only one flag can be enabled at a time with this function, the flag enumerators cannot be bit-masked together to enable or disable multiple flags at once. Flags can also be enabled by setting the corresponding member to `true`. See `Flags` enumerator for options.
 * @param flag int
 * @param enable boolean
 */
  setFlag(flag: int, enable: boolean): void;
/**
 * Sets the texture for the slot specified by `param`. See `TextureParam` for available slots.
 * @param param int
 * @param texture Texture2D
 */
  setTexture(param: int, texture: Texture2D): void;
/**
 * Texture specifying per-pixel color.
 */
  static readonly TEXTURE_ALBEDO: int;
/**
 * Texture specifying per-pixel metallic value.
 */
  static readonly TEXTURE_METALLIC: int;
/**
 * Texture specifying per-pixel roughness value.
 */
  static readonly TEXTURE_ROUGHNESS: int;
/**
 * Texture specifying per-pixel emission color.
 */
  static readonly TEXTURE_EMISSION: int;
/**
 * Texture specifying per-pixel normal vector.
 */
  static readonly TEXTURE_NORMAL: int;
/**
 * Texture specifying per-pixel rim value.
 */
  static readonly TEXTURE_RIM: int;
/**
 * Texture specifying per-pixel clearcoat value.
 */
  static readonly TEXTURE_CLEARCOAT: int;
/**
 * Texture specifying per-pixel flowmap direction for use with `anisotropy`.
 */
  static readonly TEXTURE_FLOWMAP: int;
/**
 * Texture specifying per-pixel ambient occlusion value.
 */
  static readonly TEXTURE_AMBIENT_OCCLUSION: int;
/**
 * Texture specifying per-pixel height.
 */
  static readonly TEXTURE_HEIGHTMAP: int;
/**
 * Texture specifying per-pixel subsurface scattering.
 */
  static readonly TEXTURE_SUBSURFACE_SCATTERING: int;
/**
 * Texture specifying per-pixel transmittance for subsurface scattering.
 */
  static readonly TEXTURE_SUBSURFACE_TRANSMITTANCE: int;
/**
 * Texture specifying per-pixel backlight color.
 */
  static readonly TEXTURE_BACKLIGHT: int;
/**
 * Texture specifying per-pixel refraction strength.
 */
  static readonly TEXTURE_REFRACTION: int;
/**
 * Texture specifying per-pixel detail mask blending value.
 */
  static readonly TEXTURE_DETAIL_MASK: int;
/**
 * Texture specifying per-pixel detail color.
 */
  static readonly TEXTURE_DETAIL_ALBEDO: int;
/**
 * Texture specifying per-pixel detail normal.
 */
  static readonly TEXTURE_DETAIL_NORMAL: int;
/**
 * Texture holding ambient occlusion, roughness, and metallic.
 */
  static readonly TEXTURE_ORM: int;
/**
 * Represents the size of the `TextureParam` enum.
 */
  static readonly TEXTURE_MAX: int;
/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly TEXTURE_FILTER_NEAREST: int;
/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly TEXTURE_FILTER_LINEAR: int;
/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 */
  static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: int;
/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 */
  static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: int;
/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: int;
/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: int;
/**
 * Represents the size of the `TextureFilter` enum.
 */
  static readonly TEXTURE_FILTER_MAX: int;
/**
 * Use `UV` with the detail texture.
 */
  static readonly DETAIL_UV_1: int;
/**
 * Use `UV2` with the detail texture.
 */
  static readonly DETAIL_UV_2: int;
/**
 * The material will not use transparency. This is the fastest to render.
 */
  static readonly TRANSPARENCY_DISABLED: int;
/**
 * The material will use the texture's alpha values for transparency. This is the slowest to render, and disables shadow casting.
 */
  static readonly TRANSPARENCY_ALPHA: int;
/**
 * The material will cut off all values below a threshold, the rest will remain opaque. The opaque portions will be rendered in the depth prepass. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows.
 */
  static readonly TRANSPARENCY_ALPHA_SCISSOR: int;
/**
 * The material will cut off all values below a spatially-deterministic threshold, the rest will remain opaque. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. Alpha hashing is suited for hair rendering.
 */
  static readonly TRANSPARENCY_ALPHA_HASH: int;
/**
 * The material will use the texture's alpha value for transparency, but will discard fragments with an alpha of less than 0.99 during the depth prepass and fragments with an alpha less than 0.1 during the shadow pass. This also supports casting shadows.
 */
  static readonly TRANSPARENCY_ALPHA_DEPTH_PRE_PASS: int;
/**
 * Represents the size of the `Transparency` enum.
 */
  static readonly TRANSPARENCY_MAX: int;
/**
 * The object will not receive shadows. This is the fastest to render, but it disables all interactions with lights.
 */
  static readonly SHADING_MODE_UNSHADED: int;
/**
 * The object will be shaded per pixel. Useful for realistic shading effects.
 */
  static readonly SHADING_MODE_PER_PIXEL: int;
/**
 * The object will be shaded per vertex. Useful when you want cheaper shaders and do not care about visual quality.
 */
  static readonly SHADING_MODE_PER_VERTEX: int;
/**
 * Represents the size of the `ShadingMode` enum.
 */
  static readonly SHADING_MODE_MAX: int;
/**
 * Constant for setting `emission_enabled`.
 */
  static readonly FEATURE_EMISSION: int;
/**
 * Constant for setting `normal_enabled`.
 */
  static readonly FEATURE_NORMAL_MAPPING: int;
/**
 * Constant for setting `rim_enabled`.
 */
  static readonly FEATURE_RIM: int;
/**
 * Constant for setting `clearcoat_enabled`.
 */
  static readonly FEATURE_CLEARCOAT: int;
/**
 * Constant for setting `anisotropy_enabled`.
 */
  static readonly FEATURE_ANISOTROPY: int;
/**
 * Constant for setting `ao_enabled`.
 */
  static readonly FEATURE_AMBIENT_OCCLUSION: int;
/**
 * Constant for setting `heightmap_enabled`.
 */
  static readonly FEATURE_HEIGHT_MAPPING: int;
/**
 * Constant for setting `subsurf_scatter_enabled`.
 */
  static readonly FEATURE_SUBSURFACE_SCATTERING: int;
/**
 * Constant for setting `subsurf_scatter_transmittance_enabled`.
 */
  static readonly FEATURE_SUBSURFACE_TRANSMITTANCE: int;
/**
 * Constant for setting `backlight_enabled`.
 */
  static readonly FEATURE_BACKLIGHT: int;
/**
 * Constant for setting `refraction_enabled`.
 */
  static readonly FEATURE_REFRACTION: int;
/**
 * Constant for setting `detail_enabled`.
 */
  static readonly FEATURE_DETAIL: int;
/**
 * Represents the size of the `Feature` enum.
 */
  static readonly FEATURE_MAX: int;
/**
 * Default blend mode. The color of the object is blended over the background based on the object's alpha value.
 */
  static readonly BLEND_MODE_MIX: int;
/**
 * The color of the object is added to the background.
 */
  static readonly BLEND_MODE_ADD: int;
/**
 * The color of the object is subtracted from the background.
 */
  static readonly BLEND_MODE_SUB: int;
/**
 * The color of the object is multiplied by the background.
 */
  static readonly BLEND_MODE_MUL: int;
/**
 * The color of the object is added to the background and the alpha channel is used to mask out the background. This is effectively a hybrid of the blend mix and add modes, useful for effects like fire where you want the flame to add but the smoke to mix. By default, this works with unshaded materials using premultiplied textures. For shaded materials, use the `PREMUL_ALPHA_FACTOR` built-in so that lighting can be modulated as well.
 */
  static readonly BLEND_MODE_PREMULT_ALPHA: int;
/**
 * Disables Alpha AntiAliasing for the material.
 */
  static readonly ALPHA_ANTIALIASING_OFF: int;
/**
 * Enables AlphaToCoverage. Alpha values in the material are passed to the AntiAliasing sample mask.
 */
  static readonly ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE: int;
/**
 * Enables AlphaToCoverage and forces all non-zero alpha values to `1`. Alpha values in the material are passed to the AntiAliasing sample mask.
 */
  static readonly ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE: int;
/**
 * Default depth draw mode. Depth is drawn only for opaque objects during the opaque prepass (if any) and during the opaque pass.
 */
  static readonly DEPTH_DRAW_OPAQUE_ONLY: int;
/**
 * Objects will write to depth during the opaque and the transparent passes. Transparent objects that are close to the camera may obscure other transparent objects behind them.
 * 
 * **Note:** This does not influence whether transparent objects are included in the depth prepass or not. For that, see `Transparency`.
 */
  static readonly DEPTH_DRAW_ALWAYS: int;
/**
 * Objects will not write their depth to the depth buffer, even during the depth prepass (if enabled).
 */
  static readonly DEPTH_DRAW_DISABLED: int;
/**
 * Default cull mode. The back of the object is culled when not visible. Back face triangles will be culled when facing the camera. This results in only the front side of triangles being drawn. For closed-surface meshes, this means that only the exterior of the mesh will be visible.
 */
  static readonly CULL_BACK: int;
/**
 * Front face triangles will be culled when facing the camera. This results in only the back side of triangles being drawn. For closed-surface meshes, this means that the interior of the mesh will be drawn instead of the exterior.
 */
  static readonly CULL_FRONT: int;
/**
 * No face culling is performed; both the front face and back face will be visible.
 */
  static readonly CULL_DISABLED: int;
/**
 * Disables the depth test, so this object is drawn on top of all others drawn before it. This puts the object in the transparent draw pass where it is sorted based on distance to camera. Objects drawn after it in the draw order may cover it. This also disables writing to depth.
 */
  static readonly FLAG_DISABLE_DEPTH_TEST: int;
/**
 * Set `ALBEDO` to the per-vertex color specified in the mesh.
 */
  static readonly FLAG_ALBEDO_FROM_VERTEX_COLOR: int;
/**
 * Vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. See also `vertex_color_is_srgb`.
 * 
 * **Note:** Only effective when using the Forward+ and Mobile rendering methods.
 */
  static readonly FLAG_SRGB_VERTEX_COLOR: int;
/**
 * Uses point size to alter the size of primitive points. Also changes the albedo texture lookup to use `POINT_COORD` instead of `UV`.
 */
  static readonly FLAG_USE_POINT_SIZE: int;
/**
 * Object is scaled by depth so that it always appears the same size on screen.
 */
  static readonly FLAG_FIXED_SIZE: int;
/**
 * Shader will keep the scale set for the mesh. Otherwise the scale is lost when billboarding. Only applies when `billboard_mode` is `BILLBOARD_ENABLED`.
 */
  static readonly FLAG_BILLBOARD_KEEP_SCALE: int;
/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV`.
 */
  static readonly FLAG_UV1_USE_TRIPLANAR: int;
/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV2`.
 */
  static readonly FLAG_UV2_USE_TRIPLANAR: int;
/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV`.
 */
  static readonly FLAG_UV1_USE_WORLD_TRIPLANAR: int;
/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV2`.
 */
  static readonly FLAG_UV2_USE_WORLD_TRIPLANAR: int;
/**
 * Use `UV2` coordinates to look up from the `ao_texture`.
 */
  static readonly FLAG_AO_ON_UV2: int;
/**
 * Use `UV2` coordinates to look up from the `emission_texture`.
 */
  static readonly FLAG_EMISSION_ON_UV2: int;
/**
 * Forces the shader to convert albedo from sRGB space to linear space. See also `albedo_texture_force_srgb`.
 */
  static readonly FLAG_ALBEDO_TEXTURE_FORCE_SRGB: int;
/**
 * Disables receiving shadows from other objects.
 */
  static readonly FLAG_DONT_RECEIVE_SHADOWS: int;
/**
 * Disables receiving ambient light.
 */
  static readonly FLAG_DISABLE_AMBIENT_LIGHT: int;
/**
 * Enables the shadow to opacity feature.
 */
  static readonly FLAG_USE_SHADOW_TO_OPACITY: int;
/**
 * Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.
 */
  static readonly FLAG_USE_TEXTURE_REPEAT: int;
/**
 * Invert values read from a depth texture to convert them to height values (heightmap).
 */
  static readonly FLAG_INVERT_HEIGHTMAP: int;
/**
 * Enables the skin mode for subsurface scattering which is used to improve the look of subsurface scattering when used for human skin.
 */
  static readonly FLAG_SUBSURFACE_MODE_SKIN: int;
/**
 * Enables parts of the shader required for `GPUParticles3D` trails to function. This also requires using a mesh with appropriate skinning, such as `RibbonTrailMesh` or `TubeTrailMesh`. Enabling this feature outside of materials used in `GPUParticles3D` meshes will break material rendering.
 */
  static readonly FLAG_PARTICLE_TRAILS_MODE: int;
/**
 * Enables multichannel signed distance field rendering shader.
 */
  static readonly FLAG_ALBEDO_TEXTURE_MSDF: int;
/**
 * Disables receiving depth-based or volumetric fog.
 */
  static readonly FLAG_DISABLE_FOG: int;
/**
 * Represents the size of the `Flags` enum.
 */
  static readonly FLAG_MAX: int;
/**
 * Default diffuse scattering algorithm.
 */
  static readonly DIFFUSE_BURLEY: int;
/**
 * Diffuse scattering ignores roughness.
 */
  static readonly DIFFUSE_LAMBERT: int;
/**
 * Extends Lambert to cover more than 90 degrees when roughness increases.
 */
  static readonly DIFFUSE_LAMBERT_WRAP: int;
/**
 * Uses a hard cut for lighting, with smoothing affected by roughness.
 */
  static readonly DIFFUSE_TOON: int;
/**
 * Default specular blob.
 */
  static readonly SPECULAR_SCHLICK_GGX: int;
/**
 * Toon blob which changes size based on roughness.
 */
  static readonly SPECULAR_TOON: int;
/**
 * No specular blob. This is slightly faster to render than other specular modes.
 */
  static readonly SPECULAR_DISABLED: int;
/**
 * Billboard mode is disabled.
 */
  static readonly BILLBOARD_DISABLED: int;
/**
 * The object's Z axis will always face the camera.
 */
  static readonly BILLBOARD_ENABLED: int;
/**
 * The object's X axis will always face the camera.
 */
  static readonly BILLBOARD_FIXED_Y: int;
/**
 * Used for particle systems when assigned to `GPUParticles3D` and `CPUParticles3D` nodes (flipbook animation). Enables `particles_anim_*` properties.
 * The `ParticleProcessMaterial.anim_speed_min` or `CPUParticles3D.anim_speed_min` should also be set to a value bigger than zero for the animation to play.
 */
  static readonly BILLBOARD_PARTICLES: int;
/**
 * Used to read from the red channel of a texture.
 */
  static readonly TEXTURE_CHANNEL_RED: int;
/**
 * Used to read from the green channel of a texture.
 */
  static readonly TEXTURE_CHANNEL_GREEN: int;
/**
 * Used to read from the blue channel of a texture.
 */
  static readonly TEXTURE_CHANNEL_BLUE: int;
/**
 * Used to read from the alpha channel of a texture.
 */
  static readonly TEXTURE_CHANNEL_ALPHA: int;
/**
 * Used to read from the linear (non-perceptual) average of the red, green and blue channels of a texture.
 */
  static readonly TEXTURE_CHANNEL_GRAYSCALE: int;
/**
 * Adds the emission color to the color from the emission texture.
 */
  static readonly EMISSION_OP_ADD: int;
/**
 * Multiplies the emission color by the color from the emission texture.
 */
  static readonly EMISSION_OP_MULTIPLY: int;
/**
 * Do not use distance fade.
 */
  static readonly DISTANCE_FADE_DISABLED: int;
/**
 * Smoothly fades the object out based on each pixel's distance from the camera using the alpha channel.
 */
  static readonly DISTANCE_FADE_PIXEL_ALPHA: int;
/**
 * Smoothly fades the object out based on each pixel's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than `DISTANCE_FADE_PIXEL_ALPHA`.
 */
  static readonly DISTANCE_FADE_PIXEL_DITHER: int;
/**
 * Smoothly fades the object out based on the object's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than `DISTANCE_FADE_PIXEL_ALPHA` and `DISTANCE_FADE_PIXEL_DITHER`.
 */
  static readonly DISTANCE_FADE_OBJECT_DITHER: int;
}
