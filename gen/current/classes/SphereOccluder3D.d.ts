import type { GodotArray, GodotDictionary, Occluder3D, float, int } from "../index.d.ts";
/**
 * Spherical shape for use with occlusion culling in `OccluderInstance3D`.
 * 
 * `SphereOccluder3D` stores a sphere shape that can be used by the engine's occlusion culling system.
 * See `OccluderInstance3D`'s documentation for instructions on setting up occlusion culling.
 */
export class SphereOccluder3D extends Occluder3D {
/**
 * The sphere's radius in 3D units.
 */
  radius: float;
}
