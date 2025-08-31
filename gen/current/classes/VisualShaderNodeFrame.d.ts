import type { Color, GodotArray, GodotDictionary, PackedInt32Array, VisualShaderNodeResizableBase, float, int } from "../index.d.ts";
/**
 * A frame other visual shader nodes can be attached to for better organization.
 * 
 * A rectangular frame that can be used to group visual shader nodes together to improve organization.
 * Nodes attached to the frame will move with it when it is dragged and it can automatically resize to enclose all attached nodes.
 * Its title, description and color can be customized.
 */
export class VisualShaderNodeFrame extends VisualShaderNodeResizableBase {
/**
 * The list of nodes attached to the frame.
 */
  attachedNodes: PackedInt32Array;
/**
 * If `true`, the frame will automatically resize to enclose all attached nodes.
 */
  autoshrink: boolean;
/**
 * The color of the frame when `tint_color_enabled` is `true`.
 */
  tintColor: Color;
/**
 * If `true`, the frame will be tinted with the color specified in `tint_color`.
 */
  tintColorEnabled: boolean;
/**
 * The title of the node.
 */
  title: string;
/**
 * Adds a node to the list of nodes attached to the frame. Should not be called directly, use the `VisualShader.attach_node_to_frame` method instead.
 * @param node int
 */
  addAttachedNode(node: int): void;
/**
 * Removes a node from the list of nodes attached to the frame. Should not be called directly, use the `VisualShader.detach_node_from_frame` method instead.
 * @param node int
 */
  removeAttachedNode(node: int): void;
}
