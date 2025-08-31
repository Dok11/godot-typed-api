import type { GodotArray, GodotDictionary, Node3D, Transform3D, float, int } from "../index.d.ts";
/**
 * Point sampler for a `Path3D`.
 * 
 * This node takes its parent `Path3D`, and returns the coordinates of a point within it, given a distance from the first vertex.
 * It is useful for making other nodes follow a path, without coding the movement pattern. For that, the nodes must be children of this node. The descendant nodes will then move accordingly when setting the `progress` in this node.
 */
export class PathFollow3D extends Node3D {
/**
 * If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.
 * The points along the `Curve3D` of the `Path3D` are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.
 * There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.
 */
  cubicInterp: boolean;
/**
 * The node's offset along the curve.
 */
  hOffset: float;
/**
 * If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths.
 */
  loop: boolean;
/**
 * The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path.
 */
  progress: float;
/**
 * The distance from the first vertex, considering 0.0 as the first vertex and 1.0 as the last. This is just another way of expressing the progress within the path, as the progress supplied is multiplied internally by the path's length.
 * It can be set or get only if the `PathFollow3D` is the child of a `Path3D` which is part of the scene tree, and that this `Path3D` has a `Curve3D` with a non-zero length. Otherwise, trying to set this field will print an error, and getting this field will return `0.0`.
 */
  progressRatio: float;
/**
 * Allows or forbids rotation on one or more axes, depending on the `RotationMode` constants being used.
 */
  rotationMode: int;
/**
 * If `true`, the tilt property of `Curve3D` takes effect.
 */
  tiltEnabled: boolean;
/**
 * If `true`, the node moves on the travel path with orienting the +Z axis as forward. See also `Vector3.FORWARD` and `Vector3.MODEL_FRONT`.
 */
  useModelFront: boolean;
/**
 * The node's offset perpendicular to the curve.
 */
  vOffset: float;
/**
 * Correct the `transform`. `rotation_mode` implicitly specifies how posture (forward, up and sideway direction) is calculated.
 * @param transform Transform3D
 * @param rotationMode int
 * @returns Transform3D
 */
  correctPosture(transform: Transform3D, rotationMode: int): Transform3D;
/**
 * Forbids the PathFollow3D to rotate.
 */
  static readonly ROTATION_NONE: int;
/**
 * Allows the PathFollow3D to rotate in the Y axis only.
 */
  static readonly ROTATION_Y: int;
/**
 * Allows the PathFollow3D to rotate in both the X, and Y axes.
 */
  static readonly ROTATION_XY: int;
/**
 * Allows the PathFollow3D to rotate in any axis.
 */
  static readonly ROTATION_XYZ: int;
/**
 * Uses the up vector information in a `Curve3D` to enforce orientation. This rotation mode requires the `Path3D`'s `Curve3D.up_vector_enabled` property to be set to `true`.
 */
  static readonly ROTATION_ORIENTED: int;
}
