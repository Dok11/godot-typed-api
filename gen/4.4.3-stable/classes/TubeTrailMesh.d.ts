import type { Curve, GodotArray, GodotDictionary, PrimitiveMesh, float, int } from "../index.d.ts";
/**
 * Represents a straight tube-shaped `PrimitiveMesh` with variable width.
 * 
 * `TubeTrailMesh` represents a straight tube-shaped mesh with variable width. The tube is composed of a number of cylindrical sections, each with the same `section_length` and number of `section_rings`. A `curve` is sampled along the total length of the tube, meaning that the curve determines the radius of the tube along its length.
 * This primitive mesh is usually used for particle trails.
 */
export class TubeTrailMesh extends PrimitiveMesh {
/**
 * If `true`, generates a cap at the bottom of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera.
 */
  capBottom: boolean;
/**
 * If `true`, generates a cap at the top of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera.
 */
  capTop: boolean;
/**
 * Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline `radius` by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit `Curve`.
 */
  curve: Curve;
/**
 * The number of sides on the tube. For example, a value of `5` means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance.
 */
  radialSteps: int;
/**
 * The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the `curve` at the given distance.
 */
  radius: float;
/**
 * The length of a section of the tube.
 */
  sectionLength: float;
/**
 * The number of rings in a section. The `curve` is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance.
 */
  sectionRings: int;
/**
 * The total number of sections on the tube.
 */
  sections: int;
}
