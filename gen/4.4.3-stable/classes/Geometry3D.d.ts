import type { GodotArray, GodotDictionary, Object, PackedInt32Array, PackedVector3Array, Plane, Variant, Vector3, float, int } from "../index.d.ts";
/**
 * Provides methods for some common 3D geometric operations.
 * 
 * Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 3D.
 */
export class Geometry3D extends Object {
/**
 * Returns an array with 6 `Plane`s that describe the sides of a box centered at the origin. The box size is defined by `extents`, which represents one (positive) corner of the box (i.e. half its actual size).
 * @param extents Vector3
 * @returns Plane[]
 */
  buildBoxPlanes(extents: Vector3): Plane[];
/**
 * Returns an array of `Plane`s closely bounding a faceted capsule centered at the origin with radius `radius` and height `height`. The parameter `sides` defines how many planes will be generated for the side part of the capsule, whereas `lats` gives the number of latitudinal steps at the bottom and top of the capsule. The parameter `axis` describes the axis along which the capsule is oriented (0 for X, 1 for Y, 2 for Z).
 * @param radius float
 * @param height float
 * @param sides int
 * @param lats int
 * @param axis int (optional, default: 2)
 * @returns Plane[]
 */
  buildCapsulePlanes(radius: float, height: float, sides: int, lats: int, axis?: int): Plane[];
/**
 * Returns an array of `Plane`s closely bounding a faceted cylinder centered at the origin with radius `radius` and height `height`. The parameter `sides` defines how many planes will be generated for the round part of the cylinder. The parameter `axis` describes the axis along which the cylinder is oriented (0 for X, 1 for Y, 2 for Z).
 * @param radius float
 * @param height float
 * @param sides int
 * @param axis int (optional, default: 2)
 * @returns Plane[]
 */
  buildCylinderPlanes(radius: float, height: float, sides: int, axis?: int): Plane[];
/**
 * Clips the polygon defined by the points in `points` against the `plane` and returns the points of the clipped polygon.
 * @param points PackedVector3Array
 * @param plane Plane
 * @returns PackedVector3Array
 */
  clipPolygon(points: PackedVector3Array, plane: Plane): PackedVector3Array;
/**
 * Calculates and returns all the vertex points of a convex shape defined by an array of `planes`.
 * @param planes Plane[]
 * @returns PackedVector3Array
 */
  computeConvexMeshPoints(planes: Plane[]): PackedVector3Array;
/**
 * Given the two 3D segments (`p1`, `p2`) and (`q1`, `q2`), finds those two points on the two segments that are closest to each other. Returns a `PackedVector3Array` that contains this point on (`p1`, `p2`) as well the accompanying point on (`q1`, `q2`).
 * @param p1 Vector3
 * @param p2 Vector3
 * @param q1 Vector3
 * @param q2 Vector3
 * @returns PackedVector3Array
 */
  getClosestPointsBetweenSegments(p1: Vector3, p2: Vector3, q1: Vector3, q2: Vector3): PackedVector3Array;
/**
 * Returns the 3D point on the 3D segment (`s1`, `s2`) that is closest to `point`. The returned point will always be inside the specified segment.
 * @param point Vector3
 * @param s1 Vector3
 * @param s2 Vector3
 * @returns Vector3
 */
  getClosestPointToSegment(point: Vector3, s1: Vector3, s2: Vector3): Vector3;
/**
 * Returns the 3D point on the 3D line defined by (`s1`, `s2`) that is closest to `point`. The returned point can be inside the segment (`s1`, `s2`) or outside of it, i.e. somewhere on the line extending from the segment.
 * @param point Vector3
 * @param s1 Vector3
 * @param s2 Vector3
 * @returns Vector3
 */
  getClosestPointToSegmentUncapped(point: Vector3, s1: Vector3, s2: Vector3): Vector3;
/**
 * Returns a `Vector3` containing weights based on how close a 3D position (`point`) is to a triangle's different vertices (`a`, `b` and `c`). This is useful for interpolating between the data of different vertices in a triangle. One example use case is using this to smoothly rotate over a mesh instead of relying solely on face normals.
 * Here is a more detailed explanation of barycentric coordinates. (https://en.wikipedia.org/wiki/Barycentric_coordinate_system)
 * @param point Vector3
 * @param a Vector3
 * @param b Vector3
 * @param c Vector3
 * @returns Vector3
 */
  getTriangleBarycentricCoords(point: Vector3, a: Vector3, b: Vector3, c: Vector3): Vector3;
/**
 * Tests if the 3D ray starting at `from` with the direction of `dir` intersects the triangle specified by `a`, `b` and `c`. If yes, returns the point of intersection as `Vector3`. If no intersection takes place, returns `null`.
 * @param from_ Vector3
 * @param dir Vector3
 * @param a Vector3
 * @param b Vector3
 * @param c Vector3
 * @returns Variant
 */
  rayIntersectsTriangle(from_: Vector3, dir: Vector3, a: Vector3, b: Vector3, c: Vector3): Variant;
/**
 * Given a convex hull defined though the `Plane`s in the array `planes`, tests if the segment (`from`, `to`) intersects with that hull. If an intersection is found, returns a `PackedVector3Array` containing the point the intersection and the hull's normal. Otherwise, returns an empty array.
 * @param from_ Vector3
 * @param to Vector3
 * @param planes Plane[]
 * @returns PackedVector3Array
 */
  segmentIntersectsConvex(from_: Vector3, to: Vector3, planes: Plane[]): PackedVector3Array;
/**
 * Checks if the segment (`from`, `to`) intersects the cylinder with height `height` that is centered at the origin and has radius `radius`. If no, returns an empty `PackedVector3Array`. If an intersection takes place, the returned array contains the point of intersection and the cylinder's normal at the point of intersection.
 * @param from_ Vector3
 * @param to Vector3
 * @param height float
 * @param radius float
 * @returns PackedVector3Array
 */
  segmentIntersectsCylinder(from_: Vector3, to: Vector3, height: float, radius: float): PackedVector3Array;
/**
 * Checks if the segment (`from`, `to`) intersects the sphere that is located at `sphere_position` and has radius `sphere_radius`. If no, returns an empty `PackedVector3Array`. If yes, returns a `PackedVector3Array` containing the point of intersection and the sphere's normal at the point of intersection.
 * @param from_ Vector3
 * @param to Vector3
 * @param spherePosition Vector3
 * @param sphereRadius float
 * @returns PackedVector3Array
 */
  segmentIntersectsSphere(from_: Vector3, to: Vector3, spherePosition: Vector3, sphereRadius: float): PackedVector3Array;
/**
 * Tests if the segment (`from`, `to`) intersects the triangle `a`, `b`, `c`. If yes, returns the point of intersection as `Vector3`. If no intersection takes place, returns `null`.
 * @param from_ Vector3
 * @param to Vector3
 * @param a Vector3
 * @param b Vector3
 * @param c Vector3
 * @returns Variant
 */
  segmentIntersectsTriangle(from_: Vector3, to: Vector3, a: Vector3, b: Vector3, c: Vector3): Variant;
/**
 * Tetrahedralizes the volume specified by a discrete set of `points` in 3D space, ensuring that no point lies within the circumsphere of any resulting tetrahedron. The method returns a `PackedInt32Array` where each tetrahedron consists of four consecutive point indices into the `points` array (resulting in an array with `n * 4` elements, where `n` is the number of tetrahedra found). If the tetrahedralization is unsuccessful, an empty `PackedInt32Array` is returned.
 * @param points PackedVector3Array
 * @returns PackedInt32Array
 */
  tetrahedralizeDelaunay(points: PackedVector3Array): PackedInt32Array;
}
