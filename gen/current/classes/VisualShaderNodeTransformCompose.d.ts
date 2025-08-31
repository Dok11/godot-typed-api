import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Composes a `Transform3D` from four `Vector3`s within the visual shader graph.
 * 
 * Creates a 4×4 transform matrix using four vectors of type `vec3`. Each vector is one row in the matrix and the last column is a `vec4(0, 0, 0, 1)`.
 */
export class VisualShaderNodeTransformCompose extends VisualShaderNode {
}
