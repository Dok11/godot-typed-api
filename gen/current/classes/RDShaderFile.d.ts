import type { GodotArray, GodotDictionary, RDShaderSPIRV, Resource, StringName, float, int } from "../index.d.ts";
/**
 * Compiled shader file in SPIR-V form (used by `RenderingDevice`). Not to be confused with Godot's own `Shader`.
 * 
 * Compiled shader file in SPIR-V form.
 * See also `RDShaderSource`. `RDShaderFile` is only meant to be used with the `RenderingDevice` API. It should not be confused with Godot's own `Shader` resource, which is what Godot's various nodes use for high-level shader programming.
 */
export class RDShaderFile extends Resource {
/**
 * The base compilation error message, which indicates errors not related to a specific shader stage if non-empty. If empty, shader compilation is not necessarily successful (check `RDShaderSPIRV`'s error message members).
 */
  baseError: string;
/**
 * Returns the SPIR-V intermediate representation for the specified shader `version`.
 * @param version StringName (optional, default: &"")
 * @returns RDShaderSPIRV
 */
  getSpirv(version?: StringName): RDShaderSPIRV;
/**
 * Returns the list of compiled versions for this shader.
 * @returns StringName[]
 */
  getVersionList(): StringName[];
/**
 * Sets the SPIR-V `bytecode` that will be compiled for the specified `version`.
 * @param bytecode RDShaderSPIRV
 * @param version StringName (optional, default: &"")
 */
  setBytecode(bytecode: RDShaderSPIRV, version?: StringName): void;
}
