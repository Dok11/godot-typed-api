import type { ArrayMesh, GodotArray, GodotDictionary, Resource, float, int } from "../index.d.ts";
/**
 * Abstract base class for 3D shapes used for physics collision.
 * 
 * Abstract base class for all 3D shapes, intended for use in physics.
 * 
 * **Performance:** Primitive shapes, especially `SphereShape3D`, are fast to check collisions against. `ConvexPolygonShape3D` and `HeightMapShape3D` are slower, and `ConcavePolygonShape3D` is the slowest.
 */
export class Shape3D extends Resource {
/**
 * The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.
 * When set to `0`, the default value from `ProjectSettings.physics/3d/solver/default_contact_bias` is used.
 */
  customSolverBias: float;
/**
 * The collision margin for the shape. This is not used in Godot Physics.
 * Collision margins allow collision detection to be more efficient by adding an extra shell around shapes. Collision algorithms are more expensive when objects overlap by more than their margin, so a higher value for margins is better for performance, at the cost of accuracy around edges as it makes them less sharp.
 */
  margin: float;
/**
 * Returns the `ArrayMesh` used to draw the debug collision for this `Shape3D`.
 * @returns ArrayMesh
 */
  getDebugMesh(): ArrayMesh;
}
