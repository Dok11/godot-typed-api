import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A base type for the nodes that perform vector operations within the visual shader graph.
 * 
 * This is an abstract class. See the derived types for descriptions of the possible operations.
 */
export class VisualShaderNodeVectorBase extends VisualShaderNode {
/**
 * A vector type that this operation is performed on.
 */
  opType: int;
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
