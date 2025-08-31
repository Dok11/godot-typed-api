import type { GodotArray, GodotDictionary, VisualShaderNodeGroupBase, float, int } from "../index.d.ts";
/**
 * A custom visual shader graph expression written in Godot Shading Language.
 * 
 * Custom Godot Shading Language expression, with a custom number of input and output ports.
 * The provided code is directly injected into the graph's matching shader function (`vertex`, `fragment`, or `light`), so it cannot be used to declare functions, varyings, uniforms, or global constants. See `VisualShaderNodeGlobalExpression` for such global definitions.
 */
export class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
/**
 * An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function (`vertex`, `fragment`, or `light`), and thus cannot be used to declare functions, varyings, uniforms, or global constants.
 */
  expression: string;
}
