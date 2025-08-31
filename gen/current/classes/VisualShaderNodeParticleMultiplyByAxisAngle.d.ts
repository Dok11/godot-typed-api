import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A visual shader helper node for multiplying position and rotation of particles.
 * 
 * This node helps to multiply a position input vector by rotation using specific axis. Intended to work with emitters.
 */
export class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
/**
 * If `true`, the angle will be interpreted in degrees instead of radians.
 */
  degreesMode: boolean;
}
