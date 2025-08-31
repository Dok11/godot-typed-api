import type { GodotArray, GodotDictionary, PrimitiveMesh, Vector3, float, int } from "../index.d.ts";
/**
 * Class representing a prism-shaped `PrimitiveMesh`.
 * 
 * Class representing a prism-shaped `PrimitiveMesh`.
 */
export class PrismMesh extends PrimitiveMesh {
/**
 * Displacement of the upper edge along the X axis. 0.0 positions edge straight above the bottom-left edge.
 */
  leftToRight: float;
/**
 * Size of the prism.
 */
  size: Vector3;
/**
 * Number of added edge loops along the Z axis.
 */
  subdivideDepth: int;
/**
 * Number of added edge loops along the Y axis.
 */
  subdivideHeight: int;
/**
 * Number of added edge loops along the X axis.
 */
  subdivideWidth: int;
}
