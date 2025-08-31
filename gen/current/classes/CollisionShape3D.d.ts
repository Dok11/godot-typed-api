import type { Color, GodotArray, GodotDictionary, Node3D, Resource, Shape3D, float, int } from "../index.d.ts";
/**
 * A node that provides a `Shape3D` to a `CollisionObject3D` parent.
 * 
 * A node that provides a `Shape3D` to a `CollisionObject3D` parent and allows to edit it. This can give a detection shape to an `Area3D` or turn a `PhysicsBody3D` into a solid object.
 * 
 * **Warning:** A non-uniformly scaled `CollisionShape3D` will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its `shape` resource instead.
 */
export class CollisionShape3D extends Node3D {
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
 * A disabled collision shape has no effect in the world.
 */
  disabled: boolean;
/**
 * The actual shape owned by this collision shape.
 */
  shape: Shape3D;
/**
 * Sets the collision shape's shape to the addition of all its convexed `MeshInstance3D` siblings geometry.
 */
  makeConvexFromSiblings(): void;
/**
 * This method does nothing.
 * @param resource Resource
 * @deprecated Use `Resource.changed` instead.
 */
  resourceChanged(resource: Resource): void;
}
