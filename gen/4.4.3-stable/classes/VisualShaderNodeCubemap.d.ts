import type { GodotArray, GodotDictionary, TextureLayered, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A `Cubemap` sampling node to be used within the visual shader graph.
 * 
 * Translated to `texture(cubemap, vec3)` in the shader language. Returns a color vector and alpha channel as scalar.
 */
export class VisualShaderNodeCubemap extends VisualShaderNode {
/**
 * The `Cubemap` texture to sample when using `SOURCE_TEXTURE` as `source`.
 */
  cubeMap: TextureLayered;
/**
 * Defines which source should be used for the sampling. See `Source` for options.
 */
  source: int;
/**
 * Defines the type of data provided by the source texture. See `TextureType` for options.
 */
  textureType: int;
/**
 * Use the `Cubemap` set via `cube_map`. If this is set to `source`, the `samplerCube` port is ignored.
 */
  static readonly SOURCE_TEXTURE: int;
/**
 * Use the `Cubemap` sampler reference passed via the `samplerCube` port. If this is set to `source`, the `cube_map` texture is ignored.
 */
  static readonly SOURCE_PORT: int;
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
