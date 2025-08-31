import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Visual shader node for randomizing particle values.
 * 
 * Randomness node will output pseudo-random values of the given type based on the specified minimum and maximum values.
 */
export class VisualShaderNodeParticleRandomness extends VisualShaderNode {
/**
 * A type of operands and returned value.
 */
  opType: int;
/**
 * A floating-point scalar.
 */
  static readonly OP_TYPE_SCALAR: int;
/**
 * A 2D vector type.
 */
  static readonly OP_TYPE_VECTOR_2D: int;
/**
 * A 3D vector type.
 */
  static readonly OP_TYPE_VECTOR_3D: int;
/**
 * A 4D vector type.
 */
  static readonly OP_TYPE_VECTOR_4D: int;
/**
 * Represents the size of the `OpType` enum.
 */
  static readonly OP_TYPE_MAX: int;
}
