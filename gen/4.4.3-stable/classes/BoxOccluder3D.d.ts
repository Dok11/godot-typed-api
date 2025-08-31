import type { GodotArray, GodotDictionary, Occluder3D, Vector3, float, int } from "../index.d.ts";
/**
 * Cuboid shape for use with occlusion culling in `OccluderInstance3D`.
 * 
 * `BoxOccluder3D` stores a cuboid shape that can be used by the engine's occlusion culling system.
 * See `OccluderInstance3D`'s documentation for instructions on setting up occlusion culling.
 */
export class BoxOccluder3D extends Occluder3D {
/**
 * The box's size in 3D units.
 */
  size: Vector3;
}
