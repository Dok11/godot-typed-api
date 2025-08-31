import type { GodotArray, GodotDictionary, PrimitiveMesh, Vector3, float, int } from "../index.d.ts";
/**
 * Generate an axis-aligned box `PrimitiveMesh`.
 * 
 * Generate an axis-aligned box `PrimitiveMesh`.
 * The box's UV layout is arranged in a 3×2 layout that allows texturing each face individually. To apply the same texture on all faces, change the material's UV property to `Vector3(3, 2, 1)`. This is equivalent to adding `UV *= vec2(3.0, 2.0)` in a vertex shader.
 * 
 * **Note:** When using a large textured `BoxMesh` (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase `subdivide_depth`, `subdivide_height` and `subdivide_width` until you no longer notice UV jittering.
 */
export class BoxMesh extends PrimitiveMesh {
/**
 * The box's width, height and depth.
 */
  size: Vector3;
/**
 * Number of extra edge loops inserted along the Z axis.
 */
  subdivideDepth: int;
/**
 * Number of extra edge loops inserted along the Y axis.
 */
  subdivideHeight: int;
/**
 * Number of extra edge loops inserted along the X axis.
 */
  subdivideWidth: int;
}
