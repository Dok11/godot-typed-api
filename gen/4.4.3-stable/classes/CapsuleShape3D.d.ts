import type { GodotArray, GodotDictionary, Shape3D, float, int } from "../index.d.ts";
/**
 * A 3D capsule shape used for physics collision.
 * 
 * A 3D capsule shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape3D`.
 * 
 * **Performance:** `CapsuleShape3D` is fast to check collisions against. It is faster than `CylinderShape3D`, but slower than `SphereShape3D` and `BoxShape3D`.
 */
export class CapsuleShape3D extends Shape3D {
/**
 * The capsule's height.
 */
  height: float;
/**
 * The capsule's radius.
 */
  radius: float;
}
