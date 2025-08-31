import type { AnimationRootNode, GodotArray, GodotDictionary, Signal, Vector2, float, int } from "../index.d.ts";
/**
 * A set of `AnimationRootNode`s placed on 2D coordinates, crossfading between the three adjacent ones. Used by `AnimationTree`.
 * 
 * A resource used by `AnimationNodeBlendTree`.
 * `AnimationNodeBlendSpace2D` represents a virtual 2D space on which `AnimationRootNode`s are placed. Outputs the linear blend of the three adjacent animations using a `Vector2` weight. Adjacent in this context means the three `AnimationRootNode`s making up the triangle that contains the current value.
 * You can add vertices to the blend space with `add_blend_point` and automatically triangulate it by setting `auto_triangles` to `true`. Otherwise, use `add_triangle` and `remove_triangle` to triangulate the blend space by hand.
 */
export class AnimationNodeBlendSpace2D extends AnimationRootNode {
/**
 * If `true`, the blend space is triangulated automatically. The mesh updates every time you add or remove points with `add_blend_point` and `remove_blend_point`.
 */
  autoTriangles: boolean;
/**
 * Controls the interpolation between animations. See `BlendMode` constants.
 */
  blendMode: int;
/**
 * The blend space's X and Y axes' upper limit for the points' position. See `add_blend_point`.
 */
  maxSpace: Vector2;
/**
 * The blend space's X and Y axes' lower limit for the points' position. See `add_blend_point`.
 */
  minSpace: Vector2;
/**
 * Position increment to snap to when moving a point.
 */
  snap: Vector2;
/**
 * If `false`, the blended animations' frame are stopped when the blend value is `0`.
 * If `true`, forcing the blended animations to advance frame.
 */
  sync: boolean;
/**
 * Name of the blend space's X axis.
 */
  xLabel: string;
/**
 * Name of the blend space's Y axis.
 */
  yLabel: string;
/**
 * Adds a new point that represents a `node` at the position set by `pos`. You can insert it at a specific index using the `at_index` argument. If you use the default value for `at_index`, the point is inserted at the end of the blend points array.
 * @param node AnimationRootNode
 * @param pos Vector2
 * @param atIndex int (optional, default: -1)
 */
  addBlendPoint(node: AnimationRootNode, pos: Vector2, atIndex?: int): void;
/**
 * Creates a new triangle using three points `x`, `y`, and `z`. Triangles can overlap. You can insert the triangle at a specific index using the `at_index` argument. If you use the default value for `at_index`, the point is inserted at the end of the blend points array.
 * @param x int
 * @param y int
 * @param z int
 * @param atIndex int (optional, default: -1)
 */
  addTriangle(x: int, y: int, z: int, atIndex?: int): void;
/**
 * Returns the number of points in the blend space.
 * @returns int
 */
  getBlendPointCount(): int;
/**
 * Returns the `AnimationRootNode` referenced by the point at index `point`.
 * @param point int
 * @returns AnimationRootNode
 */
  getBlendPointNode(point: int): AnimationRootNode;
/**
 * Returns the position of the point at index `point`.
 * @param point int
 * @returns Vector2
 */
  getBlendPointPosition(point: int): Vector2;
/**
 * Returns the number of triangles in the blend space.
 * @returns int
 */
  getTriangleCount(): int;
/**
 * Returns the position of the point at index `point` in the triangle of index `triangle`.
 * @param triangle int
 * @param point int
 * @returns int
 */
  getTrianglePoint(triangle: int, point: int): int;
/**
 * Removes the point at index `point` from the blend space.
 * @param point int
 */
  removeBlendPoint(point: int): void;
/**
 * Removes the triangle at index `triangle` from the blend space.
 * @param triangle int
 */
  removeTriangle(triangle: int): void;
/**
 * Changes the `AnimationNode` referenced by the point at index `point`.
 * @param point int
 * @param node AnimationRootNode
 */
  setBlendPointNode(point: int, node: AnimationRootNode): void;
/**
 * Updates the position of the point at index `point` in the blend space.
 * @param point int
 * @param pos Vector2
 */
  setBlendPointPosition(point: int, pos: Vector2): void;
/**
 * Emitted every time the blend space's triangles are created, removed, or when one of their vertices changes position.
 */
  trianglesUpdated: Signal<[]>;
/**
 * The interpolation between animations is linear.
 */
  static readonly BLEND_MODE_INTERPOLATED: int;
/**
 * The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations.
 */
  static readonly BLEND_MODE_DISCRETE: int;
/**
 * Similar to `BLEND_MODE_DISCRETE`, but starts the new animation at the last animation's playback position.
 */
  static readonly BLEND_MODE_DISCRETE_CARRY: int;
}
