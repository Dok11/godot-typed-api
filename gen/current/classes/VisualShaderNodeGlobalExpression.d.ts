import type { GodotArray, GodotDictionary, VisualShaderNodeExpression, float, int } from "../index.d.ts";
/**
 * A custom global visual shader graph expression written in Godot Shading Language.
 * 
 * Custom Godot Shader Language expression, which is placed on top of the generated shader. You can place various function definitions inside to call later in `VisualShaderNodeExpression`s (which are injected in the main shader functions). You can also declare varyings, uniforms and global constants.
 */
export class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
}
