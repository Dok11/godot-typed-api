import type { GodotArray, GodotDictionary, PrimitiveMesh, float, int } from "../index.d.ts";
/**
 * Class representing a torus `PrimitiveMesh`.
 * 
 * Class representing a torus `PrimitiveMesh`.
 */
export class TorusMesh extends PrimitiveMesh {
/**
 * The inner radius of the torus.
 */
  innerRadius: float;
/**
 * The outer radius of the torus.
 */
  outerRadius: float;
/**
 * The number of slices the torus is constructed of.
 */
  rings: int;
/**
 * The number of edges each ring of the torus is constructed of.
 */
  ringSegments: int;
}
