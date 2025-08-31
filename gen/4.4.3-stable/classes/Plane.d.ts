import type { GodotArray, GodotDictionary, Variant, Vector3, float, int } from "../index.d.ts";
/**
 * A plane in Hessian normal form.
 * 
 * Represents a normalized plane equation. `normal` is the normal of the plane (a, b, c normalized), and `d` is the distance from the origin to the plane (in the direction of "normal"). "Over" or "Above" the plane is considered the side of the plane towards where the normal is pointing.
 */
export class Plane {
/**
 * The distance from the origin to the plane, expressed in terms of `normal` (according to its direction and magnitude). Actual absolute distance from the origin to the plane can be calculated as `abs(d) / normal.length()` (if `normal` has zero length then this `Plane` does not represent a valid plane).
 * In the scalar equation of the plane `ax + by + cz = d`, this is [code skip-lint]d[/code], while the `(a, b, c)` coordinates are represented by the `normal` property.
 */
  d: float;
/**
 * The normal of the plane, typically a unit vector. Shouldn't be a zero vector as `Plane` with such `normal` does not represent a valid plane.
 * In the scalar equation of the plane `ax + by + cz = d`, this is the vector `(a, b, c)`, where [code skip-lint]d[/code] is the `d` property.
 */
  normal: Vector3;
/**
 * The X component of the plane's `normal` vector.
 */
  x: float;
/**
 * The Y component of the plane's `normal` vector.
 */
  y: float;
/**
 * The Z component of the plane's `normal` vector.
 */
  z: float;
/**
 * Returns the shortest distance from the plane to the position `point`. If the point is above the plane, the distance will be positive. If below, the distance will be negative.
 * @param point Vector3
 * @returns float
 */
  distanceTo(point: Vector3): float;
/**
 * Returns the center of the plane.
 * @returns Vector3
 */
  getCenter(): Vector3;
/**
 * Returns `true` if `point` is inside the plane. Comparison uses a custom minimum `tolerance` threshold.
 * @param point Vector3
 * @param tolerance float (optional, default: 1e-05)
 * @returns boolean
 */
  hasPoint(point: Vector3, tolerance?: float): boolean;
/**
 * Returns the intersection point of the three planes `b`, `c` and this plane. If no intersection is found, `null` is returned.
 * @param b Plane
 * @param c Plane
 * @returns Variant
 */
  intersect3(b: Plane, c: Plane): Variant;
/**
 * Returns the intersection point of a ray consisting of the position `from` and the direction normal `dir` with this plane. If no intersection is found, `null` is returned.
 * @param from_ Vector3
 * @param dir Vector3
 * @returns Variant
 */
  intersectsRay(from_: Vector3, dir: Vector3): Variant;
/**
 * Returns the intersection point of a segment from position `from` to position `to` with this plane. If no intersection is found, `null` is returned.
 * @param from_ Vector3
 * @param to Vector3
 * @returns Variant
 */
  intersectsSegment(from_: Vector3, to: Vector3): Variant;
/**
 * Returns `true` if this plane and `to_plane` are approximately equal, by running `@GlobalScope.is_equal_approx` on each component.
 * @param toPlane Plane
 * @returns boolean
 */
  isEqualApprox(toPlane: Plane): boolean;
/**
 * Returns `true` if this plane is finite, by calling `@GlobalScope.is_finite` on each component.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Returns `true` if `point` is located above the plane.
 * @param point Vector3
 * @returns boolean
 */
  isPointOver(point: Vector3): boolean;
/**
 * Returns a copy of the plane, with normalized `normal` (so it's a unit vector). Returns `Plane(0, 0, 0, 0)` if `normal` can't be normalized (it has zero length).
 * @returns Plane
 */
  normalized(): Plane;
/**
 * Returns the orthogonal projection of `point` into a point in the plane.
 * @param point Vector3
 * @returns Vector3
 */
  project(point: Vector3): Vector3;
/**
 * A plane that extends in the Y and Z axes (normal vector points +X).
 */
  static readonly PLANE_YZ: int;
/**
 * A plane that extends in the X and Z axes (normal vector points +Y).
 */
  static readonly PLANE_XZ: int;
/**
 * A plane that extends in the X and Y axes (normal vector points +Z).
 */
  static readonly PLANE_XY: int;
}
