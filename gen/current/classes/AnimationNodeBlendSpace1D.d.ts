import type { AnimationRootNode, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A set of `AnimationRootNode`s placed on a virtual axis, crossfading between the two adjacent ones. Used by `AnimationTree`.
 * 
 * A resource used by `AnimationNodeBlendTree`.
 * `AnimationNodeBlendSpace1D` represents a virtual axis on which any type of `AnimationRootNode`s can be added using `add_blend_point`. Outputs the linear blend of the two `AnimationRootNode`s adjacent to the current value.
 * You can set the extents of the axis with `min_space` and `max_space`.
 */
export class AnimationNodeBlendSpace1D extends AnimationRootNode {
/**
 * Controls the interpolation between animations. See `BlendMode` constants.
 */
  blendMode: int;
/**
 * The blend space's axis's upper limit for the points' position. See `add_blend_point`.
 */
  maxSpace: float;
/**
 * The blend space's axis's lower limit for the points' position. See `add_blend_point`.
 */
  minSpace: float;
/**
 * Position increment to snap to when moving a point on the axis.
 */
  snap: float;
/**
 * If `false`, the blended animations' frame are stopped when the blend value is `0`.
 * If `true`, forcing the blended animations to advance frame.
 */
  sync: boolean;
/**
 * Label of the virtual axis of the blend space.
 */
  valueLabel: string;
/**
 * Adds a new point that represents a `node` on the virtual axis at a given position set by `pos`. You can insert it at a specific index using the `at_index` argument. If you use the default value for `at_index`, the point is inserted at the end of the blend points array.
 * @param node AnimationRootNode
 * @param pos float
 * @param atIndex int (optional, default: -1)
 */
  addBlendPoint(node: AnimationRootNode, pos: float, atIndex?: int): void;
/**
 * Returns the number of points on the blend axis.
 * @returns int
 */
  getBlendPointCount(): int;
/**
 * Returns the `AnimationNode` referenced by the point at index `point`.
 * @param point int
 * @returns AnimationRootNode
 */
  getBlendPointNode(point: int): AnimationRootNode;
/**
 * Returns the position of the point at index `point`.
 * @param point int
 * @returns float
 */
  getBlendPointPosition(point: int): float;
/**
 * Removes the point at index `point` from the blend axis.
 * @param point int
 */
  removeBlendPoint(point: int): void;
/**
 * Changes the `AnimationNode` referenced by the point at index `point`.
 * @param point int
 * @param node AnimationRootNode
 */
  setBlendPointNode(point: int, node: AnimationRootNode): void;
/**
 * Updates the position of the point at index `point` on the blend axis.
 * @param point int
 * @param pos float
 */
  setBlendPointPosition(point: int, pos: float): void;
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
