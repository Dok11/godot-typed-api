import type { GodotArray, GodotDictionary, PrimitiveMesh, float, int } from "../index.d.ts";
/**
 * Class representing a spherical `PrimitiveMesh`.
 * 
 * Class representing a spherical `PrimitiveMesh`.
 */
export class SphereMesh extends PrimitiveMesh {
/**
 * Full height of the sphere.
 */
  height: float;
/**
 * If `true`, a hemisphere is created rather than a full sphere.
 * 
 * **Note:** To get a regular hemisphere, the height and radius of the sphere must be equal.
 */
  isHemisphere: boolean;
/**
 * Number of radial segments on the sphere.
 */
  radialSegments: int;
/**
 * Radius of sphere.
 */
  radius: float;
/**
 * Number of segments along the height of the sphere.
 */
  rings: int;
}
