import type { Color, Curve, GodotArray, GodotDictionary, Gradient, Node2D, PackedVector2Array, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D polyline that can optionally be textured.
 * 
 * This node draws a 2D polyline, i.e. a shape consisting of several points connected by segments. `Line2D` is not a mathematical polyline, i.e. the segments are not infinitely thin. It is intended for rendering and it can be colored and optionally textured.
 * 
 * **Warning:** Certain configurations may be impossible to draw nicely, such as very sharp angles. In these situations, the node uses fallback drawing logic to look decent.
 * 
 * **Note:** `Line2D` is drawn using a 2D mesh.
 */
export class Line2D extends Node2D {
/**
 * If `true`, the polyline's border will be anti-aliased.
 * 
 * **Note:** `Line2D` is not accelerated by batching when being anti-aliased.
 */
  antialiased: boolean;
/**
 * The style of the beginning of the polyline, if `closed` is `false`. Use `LineCapMode` constants.
 */
  beginCapMode: int;
/**
 * If `true` and the polyline has more than 2 points, the last point and the first one will be connected by a segment.
 * 
 * **Note:** The shape of the closing segment is not guaranteed to be seamless if a `width_curve` is provided.
 * 
 * **Note:** The joint between the closing segment and the first segment is drawn first and it samples the `gradient` and the `width_curve` at the beginning. This is an implementation detail that might change in a future version.
 */
  closed: boolean;
/**
 * The color of the polyline. Will not be used if a gradient is set.
 */
  defaultColor: Color;
/**
 * The style of the end of the polyline, if `closed` is `false`. Use `LineCapMode` constants.
 */
  endCapMode: int;
/**
 * The gradient is drawn through the whole line from start to finish. The `default_color` will not be used if this property is set.
 */
  gradient: Gradient;
/**
 * The style of the connections between segments of the polyline. Use `LineJointMode` constants.
 */
  jointMode: int;
/**
 * The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array.
 */
  points: PackedVector2Array;
/**
 * The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update.
 */
  roundPrecision: int;
/**
 * Determines the miter limit of the polyline. Normally, when `joint_mode` is set to `LINE_JOINT_SHARP`, sharp angles fall back to using the logic of `LINE_JOINT_BEVEL` joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles.
 */
  sharpLimit: float;
/**
 * The texture used for the polyline. Uses `texture_mode` for drawing style.
 */
  texture: Texture2D;
/**
 * The style to render the `texture` of the polyline. Use `LineTextureMode` constants.
 */
  textureMode: int;
/**
 * The polyline's width.
 */
  width: float;
/**
 * The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain. The width curve should be a unit `Curve`.
 */
  widthCurve: Curve;
/**
 * Adds a point with the specified `position` relative to the polyline's own position. If no `index` is provided, the new point will be added to the end of the points array.
 * If `index` is given, the new point is inserted before the existing point identified by index `index`. The indices of the points after the new point get increased by 1. The provided `index` must not exceed the number of existing points in the polyline. See `get_point_count`.
 * @param position Vector2
 * @param index int (optional, default: -1)
 */
  addPoint(position: Vector2, index?: int): void;
/**
 * Removes all points from the polyline, making it empty.
 */
  clearPoints(): void;
/**
 * Returns the number of points in the polyline.
 * @returns int
 */
  getPointCount(): int;
/**
 * Returns the position of the point at index `index`.
 * @param index int
 * @returns Vector2
 */
  getPointPosition(index: int): Vector2;
/**
 * Removes the point at index `index` from the polyline.
 * @param index int
 */
  removePoint(index: int): void;
/**
 * Overwrites the position of the point at the given `index` with the supplied `position`.
 * @param index int
 * @param position Vector2
 */
  setPointPosition(index: int, position: Vector2): void;
/**
 * Makes the polyline's joints pointy, connecting the sides of the two segments by extending them until they intersect. If the rotation of a joint is too big (based on `sharp_limit`), the joint falls back to `LINE_JOINT_BEVEL` to prevent very long miters.
 */
  static readonly LINE_JOINT_SHARP: int;
/**
 * Makes the polyline's joints bevelled/chamfered, connecting the sides of the two segments with a simple line.
 */
  static readonly LINE_JOINT_BEVEL: int;
/**
 * Makes the polyline's joints rounded, connecting the sides of the two segments with an arc. The detail of this arc depends on `round_precision`.
 */
  static readonly LINE_JOINT_ROUND: int;
/**
 * Draws no line cap.
 */
  static readonly LINE_CAP_NONE: int;
/**
 * Draws the line cap as a box, slightly extending the first/last segment.
 */
  static readonly LINE_CAP_BOX: int;
/**
 * Draws the line cap as a semicircle attached to the first/last segment.
 */
  static readonly LINE_CAP_ROUND: int;
/**
 * Takes the left pixels of the texture and renders them over the whole polyline.
 */
  static readonly LINE_TEXTURE_NONE: int;
/**
 * Tiles the texture over the polyline. `CanvasItem.texture_repeat` of the `Line2D` node must be `CanvasItem.TEXTURE_REPEAT_ENABLED` or `CanvasItem.TEXTURE_REPEAT_MIRROR` for it to work properly.
 */
  static readonly LINE_TEXTURE_TILE: int;
/**
 * Stretches the texture across the polyline. `CanvasItem.texture_repeat` of the `Line2D` node must be `CanvasItem.TEXTURE_REPEAT_DISABLED` for best results.
 */
  static readonly LINE_TEXTURE_STRETCH: int;
}
