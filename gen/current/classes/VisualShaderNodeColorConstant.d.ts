import type { Color, GodotArray, GodotDictionary, VisualShaderNodeConstant, float, int } from "../index.d.ts";
/**
 * A `Color` constant to be used within the visual shader graph.
 * 
 * Has two output ports representing RGB and alpha channels of `Color`.
 * Translated to `vec3 rgb` and `float alpha` in the shader language.
 */
export class VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
/**
 * A `Color` constant which represents a state of this node.
 */
  constant: Color;
}
