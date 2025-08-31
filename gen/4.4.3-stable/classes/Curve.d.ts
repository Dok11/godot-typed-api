import type { GodotArray, GodotDictionary, Resource, Signal, Vector2, float, int } from "../index.d.ts";
/**
 * A mathematical curve.
 * 
 * This resource describes a mathematical curve by defining a set of points and tangents at each point. By default, it ranges between `0` and `1` on the X and Y axes, but these ranges can be changed.
 * Please note that many resources and nodes assume they are given *unit curves*. A unit curve is a curve whose domain (the X axis) is between `0` and `1`. Some examples of unit curve usage are `CPUParticles2D.angle_curve` and `Line2D.width_curve`.
 */
export class Curve extends Resource {
/**
 * The number of points to include in the baked (i.e. cached) curve data.
 */
  bakeResolution: int;
/**
 * The maximum domain (x-coordinate) that points can have.
 */
  maxDomain: float;
/**
 * The maximum value (y-coordinate) that points can have. Tangents can cause higher values between points.
 */
  maxValue: float;
/**
 * The minimum domain (x-coordinate) that points can have.
 */
  minDomain: float;
/**
 * The minimum value (y-coordinate) that points can have. Tangents can cause lower values between points.
 */
  minValue: float;
/**
 * The number of points describing the curve.
 */
  pointCount: int;
/**
 * Adds a point to the curve. For each side, if the `*_mode` is `TANGENT_LINEAR`, the `*_tangent` angle (in degrees) uses the slope of the curve halfway to the adjacent point. Allows custom assignments to the `*_tangent` angle if `*_mode` is set to `TANGENT_FREE`.
 * @param position Vector2
 * @param leftTangent float (optional, default: 0)
 * @param rightTangent float (optional, default: 0)
 * @param leftMode int (optional, default: 0)
 * @param rightMode int (optional, default: 0)
 * @returns int
 */
  addPoint(position: Vector2, leftTangent?: float, rightTangent?: float, leftMode?: int, rightMode?: int): int;
/**
 * Recomputes the baked cache of points for the curve.
 */
  bake(): void;
/**
 * Removes duplicate points, i.e. points that are less than 0.00001 units (engine epsilon value) away from their neighbor on the curve.
 */
  cleanDupes(): void;
/**
 * Removes all points from the curve.
 */
  clearPoints(): void;
/**
 * Returns the difference between `min_domain` and `max_domain`.
 * @returns float
 */
  getDomainRange(): float;
/**
 * Returns the left `TangentMode` for the point at `index`.
 * @param index int
 * @returns int
 */
  getPointLeftMode(index: int): int;
/**
 * Returns the left tangent angle (in degrees) for the point at `index`.
 * @param index int
 * @returns float
 */
  getPointLeftTangent(index: int): float;
/**
 * Returns the curve coordinates for the point at `index`.
 * @param index int
 * @returns Vector2
 */
  getPointPosition(index: int): Vector2;
/**
 * Returns the right `TangentMode` for the point at `index`.
 * @param index int
 * @returns int
 */
  getPointRightMode(index: int): int;
/**
 * Returns the right tangent angle (in degrees) for the point at `index`.
 * @param index int
 * @returns float
 */
  getPointRightTangent(index: int): float;
/**
 * Returns the difference between `min_value` and `max_value`.
 * @returns float
 */
  getValueRange(): float;
/**
 * Removes the point at `index` from the curve.
 * @param index int
 */
  removePoint(index: int): void;
/**
 * Returns the Y value for the point that would exist at the X position `offset` along the curve.
 * @param offset float
 * @returns float
 */
  sample(offset: float): float;
/**
 * Returns the Y value for the point that would exist at the X position `offset` along the curve using the baked cache. Bakes the curve's points if not already baked.
 * @param offset float
 * @returns float
 */
  sampleBaked(offset: float): float;
/**
 * Sets the left `TangentMode` for the point at `index` to `mode`.
 * @param index int
 * @param mode int
 */
  setPointLeftMode(index: int, mode: int): void;
/**
 * Sets the left tangent angle for the point at `index` to `tangent`.
 * @param index int
 * @param tangent float
 */
  setPointLeftTangent(index: int, tangent: float): void;
/**
 * Sets the offset from `0.5`.
 * @param index int
 * @param offset float
 * @returns int
 */
  setPointOffset(index: int, offset: float): int;
/**
 * Sets the right `TangentMode` for the point at `index` to `mode`.
 * @param index int
 * @param mode int
 */
  setPointRightMode(index: int, mode: int): void;
/**
 * Sets the right tangent angle for the point at `index` to `tangent`.
 * @param index int
 * @param tangent float
 */
  setPointRightTangent(index: int, tangent: float): void;
/**
 * Assigns the vertical position `y` to the point at `index`.
 * @param index int
 * @param y float
 */
  setPointValue(index: int, y: float): void;
/**
 * Emitted when `max_domain` or `min_domain` is changed.
 */
  domainChanged: Signal<[]>;
/**
 * Emitted when `max_value` or `min_value` is changed.
 */
  rangeChanged: Signal<[]>;
/**
 * The tangent on this side of the point is user-defined.
 */
  static readonly TANGENT_FREE: int;
/**
 * The curve calculates the tangent on this side of the point as the slope halfway towards the adjacent point.
 */
  static readonly TANGENT_LINEAR: int;
/**
 * The total number of available tangent modes.
 */
  static readonly TANGENT_MODE_COUNT: int;
}
