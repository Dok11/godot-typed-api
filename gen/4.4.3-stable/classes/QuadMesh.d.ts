import type { GodotArray, GodotDictionary, PlaneMesh, Vector2, float, int } from "../index.d.ts";
/**
 * Class representing a square mesh facing the camera.
 * 
 * Class representing a square `PrimitiveMesh`. This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Y axes; this rotation is more suited for use with billboarded materials. A `QuadMesh` is equivalent to a `PlaneMesh` except its default `PlaneMesh.orientation` is `PlaneMesh.FACE_Z`.
 */
export class QuadMesh extends PlaneMesh {
  orientation: int;
  size: Vector2;
}
