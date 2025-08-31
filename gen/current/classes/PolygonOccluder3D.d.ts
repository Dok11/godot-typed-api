import type { GodotArray, GodotDictionary, Occluder3D, PackedVector2Array, float, int } from "../index.d.ts";
/**
 * Flat 2D polygon shape for use with occlusion culling in `OccluderInstance3D`.
 * 
 * `PolygonOccluder3D` stores a polygon shape that can be used by the engine's occlusion culling system. When an `OccluderInstance3D` with a `PolygonOccluder3D` is selected in the editor, an editor will appear at the top of the 3D viewport so you can add/remove points. All points must be placed on the same 2D plane, which means it is not possible to create arbitrary 3D shapes with a single `PolygonOccluder3D`. To use arbitrary 3D shapes as occluders, use `ArrayOccluder3D` or `OccluderInstance3D`'s baking feature instead.
 * See `OccluderInstance3D`'s documentation for instructions on setting up occlusion culling.
 */
export class PolygonOccluder3D extends Occluder3D {
/**
 * The polygon to use for occlusion culling. The polygon can be convex or concave, but it should have as few points as possible to maximize performance.
 * The polygon must *not* have intersecting lines. Otherwise, triangulation will fail (with an error message printed).
 */
  polygon: PackedVector2Array;
}
