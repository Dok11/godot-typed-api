import type { GodotArray, GodotDictionary, Texture2D, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Performs a 2D texture lookup within the visual shader graph.
 * 
 * Performs a lookup operation on the provided texture, with support for multiple texture sources to choose from.
 */
export class VisualShaderNodeTexture extends VisualShaderNode {
/**
 * Determines the source for the lookup. See `Source` for options.
 */
  source: int;
/**
 * The source texture, if needed for the selected `source`.
 */
  texture: Texture2D;
/**
 * Specifies the type of the texture if `source` is set to `SOURCE_TEXTURE`. See `TextureType` for options.
 */
  textureType: int;
/**
 * Use the texture given as an argument for this function.
 */
  static readonly SOURCE_TEXTURE: int;
/**
 * Use the current viewport's texture as the source.
 */
  static readonly SOURCE_SCREEN: int;
/**
 * Use the texture from this shader's texture built-in (e.g. a texture of a `Sprite2D`).
 */
  static readonly SOURCE_2D_TEXTURE: int;
/**
 * Use the texture from this shader's normal map built-in.
 */
  static readonly SOURCE_2D_NORMAL: int;
/**
 * Use the depth texture captured during the depth prepass. Only available when the depth prepass is used (i.e. in spatial shaders and in the forward_plus or gl_compatibility renderers).
 */
  static readonly SOURCE_DEPTH: int;
/**
 * Use the texture provided in the input port for this function.
 */
  static readonly SOURCE_PORT: int;
/**
 * Use the normal buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer).
 */
  static readonly SOURCE_3D_NORMAL: int;
/**
 * Use the roughness buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer).
 */
  static readonly SOURCE_ROUGHNESS: int;
/**
 * Represents the size of the `Source` enum.
 */
  static readonly SOURCE_MAX: int;
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
 * Represents the size of the `TextureType` enum.
 */
  static readonly TYPE_MAX: int;
}
