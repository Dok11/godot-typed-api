import type { GodotArray, GodotDictionary, PackedInt32Array, PackedVector3Array, Resource, float, int } from "../index.d.ts";
/**
 * Occluder shape resource for use with occlusion culling in `OccluderInstance3D`.
 * 
 * `Occluder3D` stores an occluder shape that can be used by the engine's occlusion culling system.
 * See `OccluderInstance3D`'s documentation for instructions on setting up occlusion culling.
 */
export class Occluder3D extends Resource {
/**
 * Returns the occluder shape's vertex indices.
 * @returns PackedInt32Array
 */
  getIndices(): PackedInt32Array;
/**
 * Returns the occluder shape's vertex positions.
 * @returns PackedVector3Array
 */
  getVertices(): PackedVector3Array;
}
