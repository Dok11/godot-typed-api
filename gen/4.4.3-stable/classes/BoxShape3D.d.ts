import type { GodotArray, GodotDictionary, Shape3D, Vector3, float, int } from "../index.d.ts";
/**
 * A 3D box shape used for physics collision.
 * 
 * A 3D box shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape3D`.
 * 
 * **Performance:** `BoxShape3D` is fast to check collisions against. It is faster than `CapsuleShape3D` and `CylinderShape3D`, but slower than `SphereShape3D`.
 */
export class BoxShape3D extends Shape3D {
/**
 * The box's width, height and depth.
 */
  size: Vector3;
}
