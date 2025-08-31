import type { GodotArray, GodotDictionary, Shape3D, float, int } from "../index.d.ts";
/**
 * A 3D cylinder shape used for physics collision.
 * 
 * A 3D cylinder shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape3D`.
 * 
 * **Note:** There are several known bugs with cylinder collision shapes. Using `CapsuleShape3D` or `BoxShape3D` instead is recommended.
 * 
 * **Performance:** `CylinderShape3D` is fast to check collisions against, but it is slower than `CapsuleShape3D`, `BoxShape3D`, and `SphereShape3D`.
 */
export class CylinderShape3D extends Shape3D {
/**
 * The cylinder's height.
 */
  height: float;
/**
 * The cylinder's radius.
 */
  radius: float;
}
