import type { Color, GodotArray, GodotDictionary, Node2D, Shape2D, float, int } from "../index.d.ts";
/**
 * A node that provides a `Shape2D` to a `CollisionObject2D` parent.
 * 
 * A node that provides a `Shape2D` to a `CollisionObject2D` parent and allows to edit it. This can give a detection shape to an `Area2D` or turn a `PhysicsBody2D` into a solid object.
 */
export class CollisionShape2D extends Node2D {
/**
 * The collision shape color that is displayed in the editor, or in the running project if **Debug > Visible Collision Shapes** is checked at the top of the editor.
 * 
 * **Note:** The default value is `ProjectSettings.debug/shapes/collision/shape_color`. The `Color(0, 0, 0, 0)` value documented here is a placeholder, and not the actual default debug color.
 */
  debugColor: Color;
/**
 * A disabled collision shape has no effect in the world. This property should be changed with `Object.set_deferred`.
 */
  disabled: boolean;
/**
 * Sets whether this collision shape should only detect collision on one side (top or bottom).
 * 
 * **Note:** This property has no effect if this `CollisionShape2D` is a child of an `Area2D` node.
 */
  oneWayCollision: boolean;
/**
 * The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the shape at a high velocity.
 */
  oneWayCollisionMargin: float;
/**
 * The actual shape owned by this collision shape.
 */
  shape: Shape2D;
}
