import type { GodotArray, GodotDictionary, Plane, Variant, Vector3, float, int } from "../index.d.ts";
/**
 * A 3D axis-aligned bounding box.
 * 
 * The `AABB` built-in `Variant` type represents an axis-aligned bounding box in a 3D space. It is defined by its `position` and `size`, which are `Vector3`. It is frequently used for fast overlap tests (see `intersects`). Although `AABB` itself is axis-aligned, it can be combined with `Transform3D` to represent a rotated or skewed bounding box.
 * It uses floating-point coordinates. The 2D counterpart to `AABB` is `Rect2`. There is no version of `AABB` that uses integer coordinates.
 * 
 * **Note:** Negative values for `size` are not supported. With negative size, most `AABB` methods do not work correctly. Use `abs` to get an equivalent `AABB` with a non-negative size.
 * 
 * **Note:** In a boolean context, a `AABB` evaluates to `false` if both `position` and `size` are zero (equal to `Vector3.ZERO`). Otherwise, it always evaluates to `true`.
 */
export class AABB {
/**
 * The ending point. This is usually the corner on the top-right and back of the bounding box, and is equivalent to `position + size`. Setting this point affects the `size`.
 */
  end: Vector3;
/**
 * The origin point. This is usually the corner on the bottom-left and forward of the bounding box.
 */
  position: Vector3;
/**
 * The bounding box's width, height, and depth starting from `position`. Setting this value also affects the `end` point.
 * 
 * **Note:** It's recommended setting the width, height, and depth to non-negative values. This is because most methods in Godot assume that the `position` is the bottom-left-forward corner, and the `end` is the top-right-back corner. To get an equivalent bounding box with non-negative size, use `abs`.
 */
  size: Vector3;
/**
 * Returns an `AABB` equivalent to this bounding box, with its width, height, and depth modified to be non-negative values.
 * 
 * 				```gdscript
 * 
 * 				var box = AABB(Vector3(5, 0, 5), Vector3(-20, -10, -5))
 * 				var absolute = box.abs()
 * 				print(absolute.position) # Prints (-15.0, -10.0, 0.0)
 * 				print(absolute.size)     # Prints (20.0, 10.0, 5.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var box = new Aabb(new Vector3(5, 0, 5), new Vector3(-20, -10, -5));
 * 				var absolute = box.Abs();
 * 				GD.Print(absolute.Position); // Prints (-15, -10, 0)
 * 				GD.Print(absolute.Size);     // Prints (20, 10, 5)
 * 				
 * 
 * ```
 * 
 * **Note:** It's recommended to use this method when `size` is negative, as most other methods in Godot assume that the `size`'s components are greater than `0`.
 * @returns AABB
 */
  abs(): AABB;
/**
 * Returns `true` if this bounding box *completely* encloses the `with` box. The edges of both boxes are included.
 * 
 * 				```gdscript
 * 
 * 				var a = AABB(Vector3(0, 0, 0), Vector3(4, 4, 4))
 * 				var b = AABB(Vector3(1, 1, 1), Vector3(3, 3, 3))
 * 				var c = AABB(Vector3(2, 2, 2), Vector3(8, 8, 8))
 * 
 * 				print(a.encloses(a)) # Prints true
 * 				print(a.encloses(b)) # Prints true
 * 				print(a.encloses(c)) # Prints false
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var a = new Aabb(new Vector3(0, 0, 0), new Vector3(4, 4, 4));
 * 				var b = new Aabb(new Vector3(1, 1, 1), new Vector3(3, 3, 3));
 * 				var c = new Aabb(new Vector3(2, 2, 2), new Vector3(8, 8, 8));
 * 
 * 				GD.Print(a.Encloses(a)); // Prints True
 * 				GD.Print(a.Encloses(b)); // Prints True
 * 				GD.Print(a.Encloses(c)); // Prints False
 * 				
 * 
 * ```
 * 
 * @param with_ AABB
 * @returns boolean
 */
  encloses(with_: AABB): boolean;
/**
 * Returns a copy of this bounding box expanded to align the edges with the given `to_point`, if necessary.
 * 
 * 				```gdscript
 * 
 * 				var box = AABB(Vector3(0, 0, 0), Vector3(5, 2, 5))
 * 
 * 				box = box.expand(Vector3(10, 0, 0))
 * 				print(box.position) # Prints (0.0, 0.0, 0.0)
 * 				print(box.size)     # Prints (10.0, 2.0, 5.0)
 * 
 * 				box = box.expand(Vector3(-5, 0, 5))
 * 				print(box.position) # Prints (-5.0, 0.0, 0.0)
 * 				print(box.size)     # Prints (15.0, 2.0, 5.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var box = new Aabb(new Vector3(0, 0, 0), new Vector3(5, 2, 5));
 * 
 * 				box = box.Expand(new Vector3(10, 0, 0));
 * 				GD.Print(box.Position); // Prints (0, 0, 0)
 * 				GD.Print(box.Size);     // Prints (10, 2, 5)
 * 
 * 				box = box.Expand(new Vector3(-5, 0, 5));
 * 				GD.Print(box.Position); // Prints (-5, 0, 0)
 * 				GD.Print(box.Size);     // Prints (15, 2, 5)
 * 				
 * 
 * ```
 * 
 * @param toPoint Vector3
 * @returns AABB
 */
  expand(toPoint: Vector3): AABB;
/**
 * Returns the center point of the bounding box. This is the same as `position + (size / 2.0)`.
 * @returns Vector3
 */
  getCenter(): Vector3;
/**
 * Returns the position of one of the 8 vertices that compose this bounding box. With a `idx` of `0` this is the same as `position`, and a `idx` of `7` is the same as `end`.
 * @param idx int
 * @returns Vector3
 */
  getEndpoint(idx: int): Vector3;
/**
 * Returns the longest normalized axis of this bounding box's `size`, as a `Vector3` (`Vector3.RIGHT`, `Vector3.UP`, or `Vector3.BACK`).
 * 
 * 				```gdscript
 * 
 * 				var box = AABB(Vector3(0, 0, 0), Vector3(2, 4, 8))
 * 
 * 				print(box.get_longest_axis())       # Prints (0.0, 0.0, 1.0)
 * 				print(box.get_longest_axis_index()) # Prints 2
 * 				print(box.get_longest_axis_size())  # Prints 8.0
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var box = new Aabb(new Vector3(0, 0, 0), new Vector3(2, 4, 8));
 * 
 * 				GD.Print(box.GetLongestAxis());      // Prints (0, 0, 1)
 * 				GD.Print(box.GetLongestAxisIndex()); // Prints Z
 * 				GD.Print(box.GetLongestAxisSize());  // Prints 8
 * 				
 * 
 * ```
 * 
 * See also `get_longest_axis_index` and `get_longest_axis_size`.
 * @returns Vector3
 */
  getLongestAxis(): Vector3;
/**
 * Returns the index to the longest axis of this bounding box's `size` (see `Vector3.AXIS_X`, `Vector3.AXIS_Y`, and `Vector3.AXIS_Z`).
 * For an example, see `get_longest_axis`.
 * @returns int
 */
  getLongestAxisIndex(): int;
/**
 * Returns the longest dimension of this bounding box's `size`.
 * For an example, see `get_longest_axis`.
 * @returns float
 */
  getLongestAxisSize(): float;
/**
 * Returns the shortest normalized axis of this bounding box's `size`, as a `Vector3` (`Vector3.RIGHT`, `Vector3.UP`, or `Vector3.BACK`).
 * 
 * 				```gdscript
 * 
 * 				var box = AABB(Vector3(0, 0, 0), Vector3(2, 4, 8))
 * 
 * 				print(box.get_shortest_axis())       # Prints (1.0, 0.0, 0.0)
 * 				print(box.get_shortest_axis_index()) # Prints 0
 * 				print(box.get_shortest_axis_size())  # Prints 2.0
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var box = new Aabb(new Vector3(0, 0, 0), new Vector3(2, 4, 8));
 * 
 * 				GD.Print(box.GetShortestAxis());      // Prints (1, 0, 0)
 * 				GD.Print(box.GetShortestAxisIndex()); // Prints X
 * 				GD.Print(box.GetShortestAxisSize());  // Prints 2
 * 				
 * 
 * ```
 * 
 * See also `get_shortest_axis_index` and `get_shortest_axis_size`.
 * @returns Vector3
 */
  getShortestAxis(): Vector3;
/**
 * Returns the index to the shortest axis of this bounding box's `size` (see `Vector3.AXIS_X`, `Vector3.AXIS_Y`, and `Vector3.AXIS_Z`).
 * For an example, see `get_shortest_axis`.
 * @returns int
 */
  getShortestAxisIndex(): int;
/**
 * Returns the shortest dimension of this bounding box's `size`.
 * For an example, see `get_shortest_axis`.
 * @returns float
 */
  getShortestAxisSize(): float;
/**
 * Returns the vertex's position of this bounding box that's the farthest in the given direction. This point is commonly known as the support point in collision detection algorithms.
 * @param direction Vector3
 * @returns Vector3
 */
  getSupport(direction: Vector3): Vector3;
/**
 * Returns the bounding box's volume. This is equivalent to `size.x * size.y * size.z`. See also `has_volume`.
 * @returns float
 */
  getVolume(): float;
/**
 * Returns a copy of this bounding box extended on all sides by the given amount `by`. A negative amount shrinks the box instead.
 * 
 * 				```gdscript
 * 
 * 				var a = AABB(Vector3(4, 4, 4), Vector3(8, 8, 8)).grow(4)
 * 				print(a.position) # Prints (0.0, 0.0, 0.0)
 * 				print(a.size)     # Prints (16.0, 16.0, 16.0)
 * 
 * 				var b = AABB(Vector3(0, 0, 0), Vector3(8, 4, 2)).grow(2)
 * 				print(b.position) # Prints (-2.0, -2.0, -2.0)
 * 				print(b.size)     # Prints (12.0, 8.0, 6.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var a = new Aabb(new Vector3(4, 4, 4), new Vector3(8, 8, 8)).Grow(4);
 * 				GD.Print(a.Position); // Prints (0, 0, 0)
 * 				GD.Print(a.Size);     // Prints (16, 16, 16)
 * 
 * 				var b = new Aabb(new Vector3(0, 0, 0), new Vector3(8, 4, 2)).Grow(2);
 * 				GD.Print(b.Position); // Prints (-2, -2, -2)
 * 				GD.Print(b.Size);     // Prints (12, 8, 6)
 * 				
 * 
 * ```
 * 
 * @param by float
 * @returns AABB
 */
  grow(by: float): AABB;
/**
 * Returns `true` if the bounding box contains the given `point`. By convention, points exactly on the right, top, and front sides are **not** included.
 * 
 * **Note:** This method is not reliable for `AABB` with a *negative* `size`. Use `abs` first to get a valid bounding box.
 * @param point Vector3
 * @returns boolean
 */
  hasPoint(point: Vector3): boolean;
/**
 * Returns `true` if this bounding box has a surface or a length, that is, at least one component of `size` is greater than `0`. Otherwise, returns `false`.
 * @returns boolean
 */
  hasSurface(): boolean;
/**
 * Returns `true` if this bounding box's width, height, and depth are all positive. See also `get_volume`.
 * @returns boolean
 */
  hasVolume(): boolean;
/**
 * Returns the intersection between this bounding box and `with`. If the boxes do not intersect, returns an empty `AABB`. If the boxes intersect at the edge, returns a flat `AABB` with no volume (see `has_surface` and `has_volume`).
 * 
 * 				```gdscript
 * 
 * 				var box1 = AABB(Vector3(0, 0, 0), Vector3(5, 2, 8))
 * 				var box2 = AABB(Vector3(2, 0, 2), Vector3(8, 4, 4))
 * 
 * 				var intersection = box1.intersection(box2)
 * 				print(intersection.position) # Prints (2.0, 0.0, 2.0)
 * 				print(intersection.size)     # Prints (3.0, 2.0, 4.0)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var box1 = new Aabb(new Vector3(0, 0, 0), new Vector3(5, 2, 8));
 * 				var box2 = new Aabb(new Vector3(2, 0, 2), new Vector3(8, 4, 4));
 * 
 * 				var intersection = box1.Intersection(box2);
 * 				GD.Print(intersection.Position); // Prints (2, 0, 2)
 * 				GD.Print(intersection.Size);     // Prints (3, 2, 4)
 * 				
 * 
 * ```
 * 
 * **Note:** If you only need to know whether two bounding boxes are intersecting, use `intersects`, instead.
 * @param with_ AABB
 * @returns AABB
 */
  intersection(with_: AABB): AABB;
/**
 * Returns `true` if this bounding box overlaps with the box `with`. The edges of both boxes are *always* excluded.
 * @param with_ AABB
 * @returns boolean
 */
  intersects(with_: AABB): boolean;
/**
 * Returns `true` if this bounding box is on both sides of the given `plane`.
 * @param plane Plane
 * @returns boolean
 */
  intersectsPlane(plane: Plane): boolean;
/**
 * Returns the first point where this bounding box and the given ray intersect, as a `Vector3`. If no intersection occurs, returns `null`.
 * The ray begin at `from`, faces `dir` and extends towards infinity.
 * @param from_ Vector3
 * @param dir Vector3
 * @returns Variant
 */
  intersectsRay(from_: Vector3, dir: Vector3): Variant;
/**
 * Returns the first point where this bounding box and the given segment intersect, as a `Vector3`. If no intersection occurs, returns `null`.
 * The segment begins at `from` and ends at `to`.
 * @param from_ Vector3
 * @param to Vector3
 * @returns Variant
 */
  intersectsSegment(from_: Vector3, to: Vector3): Variant;
/**
 * Returns `true` if this bounding box and `aabb` are approximately equal, by calling `Vector3.is_equal_approx` on the `position` and the `size`.
 * @param aabb AABB
 * @returns boolean
 */
  isEqualApprox(aabb: AABB): boolean;
/**
 * Returns `true` if this bounding box's values are finite, by calling `Vector3.is_finite` on the `position` and the `size`.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Returns an `AABB` that encloses both this bounding box and `with` around the edges. See also `encloses`.
 * @param with_ AABB
 * @returns AABB
 */
  merge(with_: AABB): AABB;
}
