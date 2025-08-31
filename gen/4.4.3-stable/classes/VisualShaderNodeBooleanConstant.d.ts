import type { GodotArray, GodotDictionary, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A boolean constant to be used within the visual shader graph.
 * 
 * Has only one output port and no inputs.
 * Translated to [code skip-lint]bool[/code] in the shader language.
 */
export class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
/**
 * A boolean constant which represents a state of this node.
 */
  constant: boolean;
}
