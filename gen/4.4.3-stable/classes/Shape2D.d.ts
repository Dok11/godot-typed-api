import type { Color, GodotArray, GodotDictionary, PackedVector2Array, RID, Rect2, Resource, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Abstract base class for 2D shapes used for physics collision.
 * 
 * Abstract base class for all 2D shapes, intended for use in physics.
 * 
 * **Performance:** Primitive shapes, especially `CircleShape2D`, are fast to check collisions against. `ConvexPolygonShape2D` is slower, and `ConcavePolygonShape2D` is the slowest.
 */
export class Shape2D extends Resource {
/**
 * The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.
 * When set to `0`, the default value from `ProjectSettings.physics/2d/solver/default_contact_bias` is used.
 */
  customSolverBias: float;
/**
 * Returns `true` if this shape is colliding with another.
 * This method needs the transformation matrix for this shape (`local_xform`), the shape to check collisions with (`with_shape`), and the transformation matrix of that shape (`shape_xform`).
 * @param localXform Transform2D
 * @param withShape Shape2D
 * @param shapeXform Transform2D
 * @returns boolean
 */
  collide(localXform: Transform2D, withShape: Shape2D, shapeXform: Transform2D): boolean;
/**
 * Returns a list of contact point pairs where this shape touches another.
 * If there are no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of `with_shape`.
 * A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.
 * This method needs the transformation matrix for this shape (`local_xform`), the shape to check collisions with (`with_shape`), and the transformation matrix of that shape (`shape_xform`).
 * @param localXform Transform2D
 * @param withShape Shape2D
 * @param shapeXform Transform2D
 * @returns PackedVector2Array
 */
  collideAndGetContacts(localXform: Transform2D, withShape: Shape2D, shapeXform: Transform2D): PackedVector2Array;
/**
 * Returns whether this shape would collide with another, if a given movement was applied.
 * This method needs the transformation matrix for this shape (`local_xform`), the movement to test on this shape (`local_motion`), the shape to check collisions with (`with_shape`), the transformation matrix of that shape (`shape_xform`), and the movement to test onto the other object (`shape_motion`).
 * @param localXform Transform2D
 * @param localMotion Vector2
 * @param withShape Shape2D
 * @param shapeXform Transform2D
 * @param shapeMotion Vector2
 * @returns boolean
 */
  collideWithMotion(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): boolean;
/**
 * Returns a list of contact point pairs where this shape would touch another, if a given movement was applied.
 * If there would be no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of `with_shape`.
 * A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.
 * This method needs the transformation matrix for this shape (`local_xform`), the movement to test on this shape (`local_motion`), the shape to check collisions with (`with_shape`), the transformation matrix of that shape (`shape_xform`), and the movement to test onto the other object (`shape_motion`).
 * @param localXform Transform2D
 * @param localMotion Vector2
 * @param withShape Shape2D
 * @param shapeXform Transform2D
 * @param shapeMotion Vector2
 * @returns PackedVector2Array
 */
  collideWithMotionAndGetContacts(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): PackedVector2Array;
/**
 * Draws a solid shape onto a `CanvasItem` with the `RenderingServer` API filled with the specified `color`. The exact drawing method is specific for each shape and cannot be configured.
 * @param canvasItem RID
 * @param color Color
 */
  draw(canvasItem: RID, color: Color): void;
/**
 * Returns a `Rect2` representing the shapes boundary.
 * @returns Rect2
 */
  getRect(): Rect2;
}
