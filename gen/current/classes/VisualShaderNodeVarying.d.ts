import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A visual shader node that represents a "varying" shader value.
 * 
 * Varying values are shader variables that can be passed between shader functions, e.g. from Vertex shader to Fragment shader.
 */
export class VisualShaderNodeVarying extends VisualShaderNode {
/**
 * Name of the variable. Must be unique.
 */
  varyingName: string;
/**
 * Type of the variable. Determines where the variable can be accessed.
 */
  varyingType: int;
}
