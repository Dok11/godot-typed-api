import type { GodotArray, GodotDictionary, PrimitiveMesh, Vector2, Vector3, float, int } from "../index.d.ts";
/**
 * Class representing a planar `PrimitiveMesh`.
 * 
 * Class representing a planar `PrimitiveMesh`. This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Z axes; this default rotation isn't suited for use with billboarded materials. For billboarded materials, change `orientation` to `FACE_Z`.
 * 
 * **Note:** When using a large textured `PlaneMesh` (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase `subdivide_depth` and `subdivide_width` until you no longer notice UV jittering.
 */
export class PlaneMesh extends PrimitiveMesh {
/**
 * Offset of the generated plane. Useful for particles.
 */
  centerOffset: Vector3;
/**
 * Direction that the `PlaneMesh` is facing. See `Orientation` for options.
 */
  orientation: int;
/**
 * Size of the generated plane.
 */
  size: Vector2;
/**
 * Number of subdivision along the Z axis.
 */
  subdivideDepth: int;
/**
 * Number of subdivision along the X axis.
 */
  subdivideWidth: int;
/**
 * `PlaneMesh` will face the positive X-axis.
 */
  static readonly FACE_X: int;
/**
 * `PlaneMesh` will face the positive Y-axis. This matches the behavior of the `PlaneMesh` in Godot 3.x.
 */
  static readonly FACE_Y: int;
/**
 * `PlaneMesh` will face the positive Z-axis. This matches the behavior of the QuadMesh in Godot 3.x.
 */
  static readonly FACE_Z: int;
}
