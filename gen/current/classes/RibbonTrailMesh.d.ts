import type { Curve, GodotArray, GodotDictionary, PrimitiveMesh, float, int } from "../index.d.ts";
/**
 * Represents a straight ribbon-shaped `PrimitiveMesh` with variable width.
 * 
 * `RibbonTrailMesh` represents a straight ribbon-shaped mesh with variable width. The ribbon is composed of a number of flat or cross-shaped sections, each with the same `section_length` and number of `section_segments`. A `curve` is sampled along the total length of the ribbon, meaning that the curve determines the size of the ribbon along its length.
 * This primitive mesh is usually used for particle trails.
 */
export class RibbonTrailMesh extends PrimitiveMesh {
/**
 * Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline `size` by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit `Curve`.
 */
  curve: Curve;
/**
 * The length of a section of the ribbon.
 */
  sectionLength: float;
/**
 * The total number of sections on the ribbon.
 */
  sections: int;
/**
 * The number of segments in a section. The `curve` is sampled on each segment to determine its size. Higher values result in a more detailed ribbon at the cost of performance.
 */
  sectionSegments: int;
/**
 * Determines the shape of the ribbon.
 */
  shape: int;
/**
 * The baseline size of the ribbon. The size of a particular section segment is obtained by multiplying this size by the value of the `curve` at the given distance.
 */
  size: float;
/**
 * Gives the mesh a single flat face.
 */
  static readonly SHAPE_FLAT: int;
/**
 * Gives the mesh two perpendicular flat faces, making a cross shape.
 */
  static readonly SHAPE_CROSS: int;
}
