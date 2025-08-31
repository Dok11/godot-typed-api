import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A visual shader node that forces to emit a particle from a sub-emitter.
 * 
 * This node internally calls `emit_subparticle` shader method. It will emit a particle from the configured sub-emitter and also allows to customize how its emitted. Requires a sub-emitter assigned to the particles node with this shader.
 */
export class VisualShaderNodeParticleEmit extends VisualShaderNode {
/**
 * Flags used to override the properties defined in the sub-emitter's process material.
 */
  flags: int;
/**
 * If enabled, the particle starts with the position defined by this node.
 */
  static readonly EMIT_FLAG_POSITION: int;
/**
 * If enabled, the particle starts with the rotation and scale defined by this node.
 */
  static readonly EMIT_FLAG_ROT_SCALE: int;
/**
 * If enabled,the particle starts with the velocity defined by this node.
 */
  static readonly EMIT_FLAG_VELOCITY: int;
/**
 * If enabled, the particle starts with the color defined by this node.
 */
  static readonly EMIT_FLAG_COLOR: int;
/**
 * If enabled, the particle starts with the `CUSTOM` data defined by this node.
 */
  static readonly EMIT_FLAG_CUSTOM: int;
}
