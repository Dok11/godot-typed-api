import type { GodotArray, GodotDictionary, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A scalar integer constant to be used within the visual shader graph.
 * 
 * Translated to [code skip-lint]int[/code] in the shader language.
 */
export class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
/**
 * An integer constant which represents a state of this node.
 */
  constant: int;
}
