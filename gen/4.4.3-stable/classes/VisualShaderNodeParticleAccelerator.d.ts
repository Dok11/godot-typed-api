import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A visual shader node that accelerates particles.
 * 
 * Particle accelerator can be used in "process" step of particle shader. It will accelerate the particles. Connect it to the Velocity output port.
 */
export class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
/**
 * Defines in what manner the particles will be accelerated.
 */
  mode: int;
/**
 * The particles will be accelerated based on their velocity.
 */
  static readonly MODE_LINEAR: int;
/**
 * The particles will be accelerated towards or away from the center.
 */
  static readonly MODE_RADIAL: int;
/**
 * The particles will be accelerated tangentially to the radius vector from center to their position.
 */
  static readonly MODE_TANGENTIAL: int;
/**
 * Represents the size of the `Mode` enum.
 */
  static readonly MODE_MAX: int;
}
