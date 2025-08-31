import type { GodotArray, GodotDictionary, PrimitiveMesh, float, int } from "../index.d.ts";
/**
 * Class representing a capsule-shaped `PrimitiveMesh`.
 * 
 * Class representing a capsule-shaped `PrimitiveMesh`.
 */
export class CapsuleMesh extends PrimitiveMesh {
/**
 * Total height of the capsule mesh (including the hemispherical ends).
 */
  height: float;
/**
 * Number of radial segments on the capsule mesh.
 */
  radialSegments: int;
/**
 * Radius of the capsule mesh.
 */
  radius: float;
/**
 * Number of rings along the height of the capsule.
 */
  rings: int;
}
