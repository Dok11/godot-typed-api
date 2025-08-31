import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A base type for the parameters within the visual shader graph.
 * 
 * A parameter represents a variable in the shader which is set externally, i.e. from the `ShaderMaterial`. Parameters are exposed as properties in the `ShaderMaterial` and can be assigned from the Inspector or from a script.
 */
export class VisualShaderNodeParameter extends VisualShaderNode {
/**
 * Name of the parameter, by which it can be accessed through the `ShaderMaterial` properties.
 */
  parameterName: string;
/**
 * Defines the scope of the parameter.
 */
  qualifier: int;
/**
 * The parameter will be tied to the `ShaderMaterial` using this shader.
 */
  static readonly QUAL_NONE: int;
/**
 * The parameter will use a global value, defined in Project Settings.
 */
  static readonly QUAL_GLOBAL: int;
/**
 * The parameter will be tied to the node with attached `ShaderMaterial` using this shader.
 */
  static readonly QUAL_INSTANCE: int;
/**
 * Represents the size of the `Qualifier` enum.
 */
  static readonly QUAL_MAX: int;
}
