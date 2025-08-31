import type { GodotArray, GodotDictionary, Occluder3D, Vector2, float, int } from "../index.d.ts";
/**
 * Flat plane shape for use with occlusion culling in `OccluderInstance3D`.
 * 
 * `QuadOccluder3D` stores a flat plane shape that can be used by the engine's occlusion culling system. See also `PolygonOccluder3D` if you need to customize the quad's shape.
 * See `OccluderInstance3D`'s documentation for instructions on setting up occlusion culling.
 */
export class QuadOccluder3D extends Occluder3D {
/**
 * The quad's size in 3D units.
 */
  size: Vector2;
}
