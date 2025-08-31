import type { CurveTexture, GodotArray, GodotDictionary, VisualShaderNodeResizableBase, float, int } from "../index.d.ts";
/**
 * Performs a `CurveTexture` lookup within the visual shader graph.
 * 
 * Comes with a built-in editor for texture's curves.
 */
export class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
/**
 * The source texture.
 */
  texture: CurveTexture;
}
