import type { AABB, GodotArray, GodotDictionary, PackedByteArray, PackedInt32Array, Resource, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Contains baked voxel global illumination data for use in a `VoxelGI` node.
 * 
 * `VoxelGIData` contains baked voxel global illumination for use in a `VoxelGI` node. `VoxelGIData` also offers several properties to adjust the final appearance of the global illumination. These properties can be adjusted at run-time without having to bake the `VoxelGI` node again.
 * 
 * **Note:** To prevent text-based scene files (`.tscn`) from growing too much and becoming slow to load and save, always save `VoxelGIData` to an external binary resource file (`.res`) instead of embedding it within the scene. This can be done by clicking the dropdown arrow next to the `VoxelGIData` resource, choosing **Edit**, clicking the floppy disk icon at the top of the Inspector then choosing **Save As...**.
 */
export class VoxelGIData extends Resource {
/**
 * The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set `bias` to `0.0` and `normal_bias` to a value between `1.0` and `2.0`.
 */
  bias: float;
/**
 * The dynamic range to use (`1.0` represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping.
 */
  dynamicRange: float;
/**
 * The energy of the indirect lighting and reflections produced by the `VoxelGI` node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing `propagation` while increasing `energy` at the same time. See also `use_two_bounces` which influences the indirect lighting's effective brightness.
 */
  energy: float;
/**
 * If `true`, `Environment` lighting is ignored by the `VoxelGI` node. If `false`, `Environment` lighting is taken into account by the `VoxelGI` node. `Environment` lighting updates in real-time, which means it can be changed without having to bake the `VoxelGI` node again.
 */
  interior: boolean;
/**
 * The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also `bias`. To prioritize hiding self-reflections over lighting quality, set `bias` to `0.0` and `normal_bias` to a value between `1.0` and `2.0`.
 */
  normalBias: float;
/**
 * The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing `propagation` while increasing `energy` at the same time. See also `use_two_bounces` which influences the indirect lighting's effective brightness.
 */
  propagation: float;
/**
 * If `true`, performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling `use_two_bounces`, adjust `propagation` and `energy`.
 */
  useTwoBounces: boolean;
/**
 * @param toCellXform Transform3D
 * @param aabb AABB
 * @param octreeSize Vector3
 * @param octreeCells PackedByteArray
 * @param dataCells PackedByteArray
 * @param distanceField PackedByteArray
 * @param levelCounts PackedInt32Array
 */
  allocate(toCellXform: Transform3D, aabb: AABB, octreeSize: Vector3, octreeCells: PackedByteArray, dataCells: PackedByteArray, distanceField: PackedByteArray, levelCounts: PackedInt32Array): void;
/**
 * Returns the bounds of the baked voxel data as an `AABB`, which should match `VoxelGI.size` after being baked (which only contains the size as a `Vector3`).
 * 
 * **Note:** If the size was modified without baking the VoxelGI data, then the value of `get_bounds` and `VoxelGI.size` will not match.
 * @returns AABB
 */
  getBounds(): AABB;
/**
 * @returns PackedByteArray
 */
  getDataCells(): PackedByteArray;
/**
 * @returns PackedInt32Array
 */
  getLevelCounts(): PackedInt32Array;
/**
 * @returns PackedByteArray
 */
  getOctreeCells(): PackedByteArray;
/**
 * @returns Vector3
 */
  getOctreeSize(): Vector3;
/**
 * @returns Transform3D
 */
  getToCellXform(): Transform3D;
}
