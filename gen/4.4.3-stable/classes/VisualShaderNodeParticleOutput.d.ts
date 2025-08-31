import type { GodotArray, GodotDictionary, VisualShaderNodeOutput, float, int } from "../index.d.ts";
/**
 * Visual shader node that defines output values for particle emitting.
 * 
 * This node defines how particles are emitted. It allows to customize e.g. position and velocity. Available ports are different depending on which function this node is inside (start, process, collision) and whether custom data is enabled.
 */
export class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
}
