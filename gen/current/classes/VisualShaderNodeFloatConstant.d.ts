import type { GodotArray, GodotDictionary, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A scalar floating-point constant to be used within the visual shader graph.
 * 
 * Translated to [code skip-lint]float[/code] in the shader language.
 */
export class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
/**
 * A floating-point constant which represents a state of this node.
 */
  constant: float;
}
