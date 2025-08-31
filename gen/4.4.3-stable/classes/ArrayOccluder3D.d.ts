import type { GodotArray, GodotDictionary, Occluder3D, PackedInt32Array, PackedVector3Array, float, int } from "../index.d.ts";
/**
 * 3D polygon shape for use with occlusion culling in `OccluderInstance3D`.
 * 
 * `ArrayOccluder3D` stores an arbitrary 3D polygon shape that can be used by the engine's occlusion culling system. This is analogous to `ArrayMesh`, but for occluders.
 * See `OccluderInstance3D`'s documentation for instructions on setting up occlusion culling.
 */
export class ArrayOccluder3D extends Occluder3D {
/**
 * The occluder's index position. Indices determine which points from the `vertices` array should be drawn, and in which order.
 * 
 * **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using `set_arrays` instead to avoid updating the occluder twice when it's created.
 */
  indices: PackedInt32Array;
/**
 * The occluder's vertex positions in local 3D coordinates.
 * 
 * **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using `set_arrays` instead to avoid updating the occluder twice when it's created.
 */
  vertices: PackedVector3Array;
/**
 * Sets `indices` and `vertices`, while updating the final occluder only once after both values are set.
 * @param vertices PackedVector3Array
 * @param indices PackedInt32Array
 */
  setArrays(vertices: PackedVector3Array, indices: PackedInt32Array): void;
}
