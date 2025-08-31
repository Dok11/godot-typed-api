import type { GodotArray, GodotDictionary, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * Performs a uniform texture lookup within the visual shader graph.
 * 
 * Performs a lookup operation on the texture provided as a uniform for the shader.
 */
export class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
/**
 * Sets the default color if no texture is assigned to the uniform.
 */
  colorDefault: int;
/**
 * Sets the texture filtering mode. See `TextureFilter` for options.
 */
  textureFilter: int;
/**
 * Sets the texture repeating mode. See `TextureRepeat` for options.
 */
  textureRepeat: int;
/**
 * Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. See `TextureSource` for options.
 */
  textureSource: int;
/**
 * Defines the type of data provided by the source texture. See `TextureType` for options.
 */
  textureType: int;
/**
 * No hints are added to the uniform declaration.
 */
  static readonly TYPE_DATA: int;
/**
 * Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion.
 */
  static readonly TYPE_COLOR: int;
/**
 * Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map.
 */
  static readonly TYPE_NORMAL_MAP: int;
/**
 * Adds `hint_anisotropy` as hint to the uniform declaration to use for a flowmap.
 */
  static readonly TYPE_ANISOTROPY: int;
/**
 * Represents the size of the `TextureType` enum.
 */
  static readonly TYPE_MAX: int;
/**
 * Defaults to fully opaque white color.
 */
  static readonly COLOR_DEFAULT_WHITE: int;
/**
 * Defaults to fully opaque black color.
 */
  static readonly COLOR_DEFAULT_BLACK: int;
/**
 * Defaults to fully transparent black color.
 */
  static readonly COLOR_DEFAULT_TRANSPARENT: int;
/**
 * Represents the size of the `ColorDefault` enum.
 */
  static readonly COLOR_DEFAULT_MAX: int;
/**
 * Sample the texture using the filter determined by the node this shader is attached to.
 */
  static readonly FILTER_DEFAULT: int;
/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly FILTER_NEAREST: int;
/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly FILTER_LINEAR: int;
/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly FILTER_NEAREST_MIPMAP: int;
/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly FILTER_LINEAR_MIPMAP: int;
/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 * 
 * **Note:** This texture filter is rarely useful in 2D projects. `FILTER_NEAREST_MIPMAP` is usually more appropriate in this case.
 */
  static readonly FILTER_NEAREST_MIPMAP_ANISOTROPIC: int;
/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 * 
 * **Note:** This texture filter is rarely useful in 2D projects. `FILTER_LINEAR_MIPMAP` is usually more appropriate in this case.
 */
  static readonly FILTER_LINEAR_MIPMAP_ANISOTROPIC: int;
/**
 * Represents the size of the `TextureFilter` enum.
 */
  static readonly FILTER_MAX: int;
/**
 * Sample the texture using the repeat mode determined by the node this shader is attached to.
 */
  static readonly REPEAT_DEFAULT: int;
/**
 * Texture will repeat normally.
 */
  static readonly REPEAT_ENABLED: int;
/**
 * Texture will not repeat.
 */
  static readonly REPEAT_DISABLED: int;
/**
 * Represents the size of the `TextureRepeat` enum.
 */
  static readonly REPEAT_MAX: int;
/**
 * The texture source is not specified in the shader.
 */
  static readonly SOURCE_NONE: int;
/**
 * The texture source is the screen texture which captures all opaque objects drawn this frame.
 */
  static readonly SOURCE_SCREEN: int;
/**
 * The texture source is the depth texture from the depth prepass.
 */
  static readonly SOURCE_DEPTH: int;
/**
 * The texture source is the normal-roughness buffer from the depth prepass.
 */
  static readonly SOURCE_NORMAL_ROUGHNESS: int;
/**
 * Represents the size of the `TextureSource` enum.
 */
  static readonly SOURCE_MAX: int;
}
