import type { GeometryInstance3D, GodotArray, GodotDictionary, MultiMesh, float, int } from "../index.d.ts";
/**
 * Node that instances a `MultiMesh`.
 * 
 * `MultiMeshInstance3D` is a specialized node to instance `GeometryInstance3D`s based on a `MultiMesh` resource.
 * This is useful to optimize the rendering of a high number of instances of a given mesh (for example trees in a forest or grass strands).
 */
export class MultiMeshInstance3D extends GeometryInstance3D {
/**
 * The `MultiMesh` resource that will be used and shared among all instances of the `MultiMeshInstance3D`.
 */
  multimesh: MultiMesh;
}
