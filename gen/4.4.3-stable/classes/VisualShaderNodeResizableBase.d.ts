import type { GodotArray, GodotDictionary, Vector2, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Base class for resizable nodes in a visual shader graph.
 * 
 * Resizable nodes have a handle that allows the user to adjust their size as needed.
 */
export class VisualShaderNodeResizableBase extends VisualShaderNode {
/**
 * The size of the node in the visual shader graph.
 */
  size: Vector2;
}
