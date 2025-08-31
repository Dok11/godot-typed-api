import type { GodotArray, GodotDictionary, Resource, StringName, Texture, float, int } from "../index.d.ts";
/**
 * A shader implemented in the Godot shading language.
 * 
 * A custom shader program implemented in the Godot shading language, saved with the `.gdshader` extension.
 * This class is used by a `ShaderMaterial` and allows you to write your own custom behavior for rendering visual items or updating particle information. For a detailed explanation and usage, please see the tutorials linked below.
 */
export class Shader extends Resource {
/**
 * Returns the shader's code as the user has written it, not the full generated code used internally.
 */
  code: string;
/**
 * Returns the texture that is set as default for the specified parameter.
 * 
 * **Note:** `name` must match the name of the uniform in the code exactly.
 * 
 * **Note:** If the sampler array is used use `index` to access the specified texture.
 * @param name StringName
 * @param index int (optional, default: 0)
 * @returns Texture
 */
  getDefaultTextureParameter(name: StringName, index?: int): Texture;
/**
 * Returns the shader mode for the shader.
 * @returns int
 */
  getMode(): int;
/**
 * Returns the list of shader uniforms that can be assigned to a `ShaderMaterial`, for use with `ShaderMaterial.set_shader_parameter` and `ShaderMaterial.get_shader_parameter`. The parameters returned are contained in dictionaries in a similar format to the ones returned by `Object.get_property_list`.
 * If argument `get_groups` is `true`, parameter grouping hints are also included in the list.
 * @param getGroups boolean (optional, default: false)
 * @returns GodotArray<any>
 */
  getShaderUniformList(getGroups?: boolean): GodotArray<any>;
/**
 * Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. See also `Material.inspect_native_shader_code`.
 */
  inspectNativeShaderCode(): void;
/**
 * Sets the default texture to be used with a texture uniform. The default is used if a texture is not set in the `ShaderMaterial`.
 * 
 * **Note:** `name` must match the name of the uniform in the code exactly.
 * 
 * **Note:** If the sampler array is used use `index` to access the specified texture.
 * @param name StringName
 * @param texture Texture
 * @param index int (optional, default: 0)
 */
  setDefaultTextureParameter(name: StringName, texture: Texture, index?: int): void;
/**
 * Mode used to draw all 3D objects.
 */
  static readonly MODE_SPATIAL: int;
/**
 * Mode used to draw all 2D objects.
 */
  static readonly MODE_CANVAS_ITEM: int;
/**
 * Mode used to calculate particle information on a per-particle basis. Not used for drawing.
 */
  static readonly MODE_PARTICLES: int;
/**
 * Mode used for drawing skies. Only works with shaders attached to `Sky` objects.
 */
  static readonly MODE_SKY: int;
/**
 * Mode used for setting the color and density of volumetric fog effect.
 */
  static readonly MODE_FOG: int;
}
