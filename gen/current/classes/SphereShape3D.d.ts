import type { GodotArray, GodotDictionary, Shape3D, float, int } from "../index.d.ts";
/**
 * A 3D sphere shape used for physics collision.
 * 
 * A 3D sphere shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape3D`.
 * 
 * **Performance:** `SphereShape3D` is fast to check collisions against. It is faster than `BoxShape3D`, `CapsuleShape3D`, and `CylinderShape3D`.
 */
export class SphereShape3D extends Shape3D {
/**
 * The sphere's radius. The shape's diameter is double the radius.
 */
  radius: float;
}
