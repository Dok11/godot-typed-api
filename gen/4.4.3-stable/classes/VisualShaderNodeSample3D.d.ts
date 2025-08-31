import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A base node for nodes which samples 3D textures in the visual shader graph.
 * 
 * A virtual class, use the descendants instead.
 */
export class VisualShaderNodeSample3D extends VisualShaderNode {
/**
 * An input source type.
 */
  source: int;
/**
 * Creates internal uniform and provides a way to assign it within node.
 */
  static readonly SOURCE_TEXTURE: int;
/**
 * Use the uniform texture from sampler port.
 */
  static readonly SOURCE_PORT: int;
/**
 * Represents the size of the `Source` enum.
 */
  static readonly SOURCE_MAX: int;
}
