import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Parameters to be used with a `Mesh` convex decomposition operation.
 * 
 * Parameters to be used with a `Mesh` convex decomposition operation.
 */
export class MeshConvexDecompositionSettings extends RefCounted {
/**
 * If `true`, uses approximation for computing convex hulls.
 */
  convexHullApproximation: boolean;
/**
 * Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from `1` to `16`.
 */
  convexHullDownsampling: int;
/**
 * Maximum concavity. Ranges from `0.0` to `1.0`.
 */
  maxConcavity: float;
/**
 * The maximum number of convex hulls to produce from the merge operation.
 */
  maxConvexHulls: int;
/**
 * Controls the maximum number of triangles per convex-hull. Ranges from `4` to `1024`.
 */
  maxNumVerticesPerConvexHull: int;
/**
 * Controls the adaptive sampling of the generated convex-hulls. Ranges from `0.0` to `0.01`.
 */
  minVolumePerConvexHull: float;
/**
 * Mode for the approximate convex decomposition.
 */
  mode: int;
/**
 * If `true`, normalizes the mesh before applying the convex decomposition.
 */
  normalizeMesh: boolean;
/**
 * Controls the granularity of the search for the "best" clipping plane. Ranges from `1` to `16`.
 */
  planeDownsampling: int;
/**
 * If `true`, projects output convex hull vertices onto the original source mesh to increase floating-point accuracy of the results.
 */
  projectHullVertices: boolean;
/**
 * Maximum number of voxels generated during the voxelization stage.
 */
  resolution: int;
/**
 * Controls the bias toward clipping along revolution axes. Ranges from `0.0` to `1.0`.
 */
  revolutionAxesClippingBias: float;
/**
 * Controls the bias toward clipping along symmetry planes. Ranges from `0.0` to `1.0`.
 */
  symmetryPlanesClippingBias: float;
/**
 * Constant for voxel-based approximate convex decomposition.
 */
  static readonly CONVEX_DECOMPOSITION_MODE_VOXEL: int;
/**
 * Constant for tetrahedron-based approximate convex decomposition.
 */
  static readonly CONVEX_DECOMPOSITION_MODE_TETRAHEDRON: int;
}
