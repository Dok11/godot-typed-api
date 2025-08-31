import type { GodotArray, GodotDictionary, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * An unsigned scalar integer constant to be used within the visual shader graph.
 * 
 * Translated to `uint` in the shader language.
 */
export class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
/**
 * An unsigned integer constant which represents a state of this node.
 */
  constant: int;
}
