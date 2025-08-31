import type { GodotArray, GodotDictionary, Material, Shader, StringName, Variant, float, int } from "../index.d.ts";
/**
 * A material defined by a custom `Shader` program and the values of its shader parameters.
 * 
 * A material that uses a custom `Shader` program to render visual items (canvas items, meshes, skies, fog), or to process particles. Compared to other materials, `ShaderMaterial` gives deeper control over the generated shader code. For more information, see the shaders documentation index below.
 * Multiple `ShaderMaterial`s can use the same shader and configure different values for the shader uniforms.
 * 
 * **Note:** For performance reasons, the `Resource.changed` signal is only emitted when the `Resource.resource_name` changes. Only in editor, it is also emitted for `shader` changes.
 */
export class ShaderMaterial extends Material {
/**
 * The `Shader` program used to render this material.
 */
  shader: Shader;
/**
 * Returns the current value set for this material of a uniform in the shader.
 * @param param StringName
 * @returns Variant
 */
  getShaderParameter(param: StringName): Variant;
/**
 * Changes the value set for this material of a uniform in the shader.
 * 
 * **Note:** `param` is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).
 * 
 * **Note:** Changes to the shader uniform will be effective on all instances using this `ShaderMaterial`. To prevent this, use per-instance uniforms with `GeometryInstance3D.set_instance_shader_parameter` or duplicate the `ShaderMaterial` resource using `Resource.duplicate`. Per-instance uniforms allow for better shader reuse and are therefore faster, so they should be preferred over duplicating the `ShaderMaterial` when possible.
 * @param param StringName
 * @param value Variant
 */
  setShaderParameter(param: StringName, value: Variant): void;
}
