import type { Color, GodotArray, GodotDictionary, Node3D, PackedVector2Array, float, int } from "../index.d.ts";
/**
 * A node that provides a thickened polygon shape (a prism) to a `CollisionObject3D` parent.
 * 
 * A node that provides a thickened polygon shape (a prism) to a `CollisionObject3D` parent and allows to edit it. The polygon can be concave or convex. This can give a detection shape to an `Area3D` or turn `PhysicsBody3D` into a solid object.
 * 
 * **Warning:** A non-uniformly scaled `CollisionShape3D` will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its shape resource instead.
 */
export class CollisionPolygon3D extends Node3D {
/**
 * The collision shape color that is displayed in the editor, or in the running project if **Debug > Visible Collision Shapes** is checked at the top of the editor.
 * 
 * **Note:** The default value is `ProjectSettings.debug/shapes/collision/shape_color`. The `Color(0, 0, 0, 0)` value documented here is a placeholder, and not the actual default debug color.
 */
  debugColor: Color;
/**
 * If `true`, when the shape is displayed, it will show a solid fill color in addition to its wireframe.
 */
  debugFill: boolean;
/**
 * Length that the resulting collision extends in either direction perpendicular to its 2D polygon.
 */
  depth: float;
/**
 * If `true`, no collision will be produced.
 */
  disabled: boolean;
/**
 * The collision margin for the generated `Shape3D`. See `Shape3D.margin` for more details.
 */
  margin: float;
/**
 * Array of vertices which define the 2D polygon in the local XY plane.
 */
  polygon: PackedVector2Array;
}
