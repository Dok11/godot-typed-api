import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A base class for particle emitters.
 * 
 * Particle emitter nodes can be used in "start" step of particle shaders and they define the starting position of the particles. Connect them to the Position output port.
 */
export class VisualShaderNodeParticleEmitter extends VisualShaderNode {
/**
 * If `true`, the result of this emitter is projected to 2D space. By default it is `false` and meant for use in 3D space.
 */
  mode2d: boolean;
}
