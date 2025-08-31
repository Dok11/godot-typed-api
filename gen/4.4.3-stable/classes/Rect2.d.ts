import type { GodotArray, GodotDictionary, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D axis-aligned bounding box using floating-point coordinates.
 * 
 * The `Rect2` built-in `Variant` type represents an axis-aligned rectangle in a 2D space. It is defined by its `position` and `size`, which are `Vector2`. It is frequently used for fast overlap tests (see `intersects`). Although `Rect2` itself is axis-aligned, it can be combined with `Transform2D` to represent a rotated or skewed rectangle.
 * For integer coordinates, use `Rect2i`. The 3D equivalent to `Rect2` is `AABB`.
 * 
 * **Note:** Negative values for `size` are not supported. With negative size, most `Rect2` methods do not work correctly. Use `abs` to get an equivalent `Rect2` with a non-negative size.
 * 
 * **Note:** In a boolean context, a `Rect2` evaluates to `false` if both `position` and `size` are zero (equal to `Vector2.ZERO`). Otherwise, it always evaluates to `true`.
 */
export class Rect2 {
/**
 * The ending point. This is usually the bottom-right corner of the rectangle, and is equivalent to `position + size`. Setting this point affects the `size`.
 */
  end: Vector2;
/**
 * The origin point. This is usually the top-left corner of the rectangle.
 */
  position: Vector2;
/**
 * The rectangle's width and height, starting from `position`. Setting this value also affects the `end` point.
 * 
 * **Note:** It's recommended setting the width and height to non-negative values, as most methods in Godot assume that the `position` is the top-left corner, and the `end` is the bottom-right corner. To get an equivalent rectangle with non-negative size, use `abs`.
 */
  size: Vector2;
/**
 * Returns a `Rect2` equivalent to this rectangle, with its width and height modified to be non-negative values, and with its `position` being the top-left corner of the rectangle.
 * 
 * 				```gdscript
 * 
 * 				var rect = Rect2(25, 25, -100, -50)
 * 				var absolute = rect.abs() # absolute is Rect2(-75, -25, 100, 50)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var rect = new Rect2(25, 25, -100, -50);
 * 				var absolute = rect.Abs(); // absolute is Rect2(-75, -25, 100, 50)
 * 				
 * 
 * ```
 * 
 * **Note:** It's recommended to use this method when `size` is negative, as most other methods in Godot assume that the `position` is the top-left corner, and the `end` is the bottom-right corner.
 * @returns Rect2
 */
  abs(): Rect2;
/**
 * Returns `true` if this rectangle *completely* encloses the `b` rectangle.
 * @param b Rect2
 * @returns boolean
 */
  encloses(b: Rect2): boolean;
/**
 * Returns a copy of this rectangle expanded to align the edges with the given `to` point, if necessary.
 * 
 * 				```gdscript
 * 
 * 				var rect = Rect2(0, 0, 5, 2)
 * 
 * 				rect = rect.expand(Vector2(10, 0)) # rect is Rect2(0, 0, 10, 2)
 * 				rect = rect.expand(Vector2(-5, 5)) # rect is Rect2(-5, 0, 15, 5)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var rect = new Rect2(0, 0, 5, 2);
 * 
 * 				rect = rect.Expand(new Vector2(10, 0)); // rect is Rect2(0, 0, 10, 2)
 * 				rect = rect.Expand(new Vector2(-5, 5)); // rect is Rect2(-5, 0, 15, 5)
 * 				
 * 
 * ```
 * 
 * @param to Vector2
 * @returns Rect2
 */
  expand(to: Vector2): Rect2;
/**
 * Returns the rectangle's area. This is equivalent to `size.x * size.y`. See also `has_area`.
 * @returns float
 */
  getArea(): float;
/**
 * Returns the center point of the rectangle. This is the same as `position + (size / 2.0)`.
 * @returns Vector2
 */
  getCenter(): Vector2;
/**
 * Returns the vertex's position of this rect that's the farthest in the given direction. This point is commonly known as the support point in collision detection algorithms.
 * @param direction Vector2
 * @returns Vector2
 */
  getSupport(direction: Vector2): Vector2;
/**
 * Returns a copy of this rectangle extended on all sides by the given `amount`. A negative `amount` shrinks the rectangle instead. See also `grow_individual` and `grow_side`.
 * 
 * 				```gdscript
 * 
 * 				var a = Rect2(4, 4, 8, 8).grow(4) # a is Rect2(0, 0, 16, 16)
 * 				var b = Rect2(0, 0, 8, 4).grow(2) # b is Rect2(-2, -2, 12, 8)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var a = new Rect2(4, 4, 8, 8).Grow(4); // a is Rect2(0, 0, 16, 16)
 * 				var b = new Rect2(0, 0, 8, 4).Grow(2); // b is Rect2(-2, -2, 12, 8)
 * 				
 * 
 * ```
 * 
 * @param amount float
 * @returns Rect2
 */
  grow(amount: float): Rect2;
/**
 * Returns a copy of this rectangle with its `left`, `top`, `right`, and `bottom` sides extended by the given amounts. Negative values shrink the sides, instead. See also `grow` and `grow_side`.
 * @param left float
 * @param top float
 * @param right float
 * @param bottom float
 * @returns Rect2
 */
  growIndividual(left: float, top: float, right: float, bottom: float): Rect2;
/**
 * Returns a copy of this rectangle with its `side` extended by the given `amount` (see `Side` constants). A negative `amount` shrinks the rectangle, instead. See also `grow` and `grow_individual`.
 * @param side int
 * @param amount float
 * @returns Rect2
 */
  growSide(side: int, amount: float): Rect2;
/**
 * Returns `true` if this rectangle has positive width and height. See also `get_area`.
 * @returns boolean
 */
  hasArea(): boolean;
/**
 * Returns `true` if the rectangle contains the given `point`. By convention, points on the right and bottom edges are **not** included.
 * 
 * **Note:** This method is not reliable for `Rect2` with a *negative* `size`. Use `abs` first to get a valid rectangle.
 * @param point Vector2
 * @returns boolean
 */
  hasPoint(point: Vector2): boolean;
/**
 * Returns the intersection between this rectangle and `b`. If the rectangles do not intersect, returns an empty `Rect2`.
 * 
 * 				```gdscript
 * 
 * 				var rect1 = Rect2(0, 0, 5, 10)
 * 				var rect2 = Rect2(2, 0, 8, 4)
 * 
 * 				var a = rect1.intersection(rect2) # a is Rect2(2, 0, 3, 4)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var rect1 = new Rect2(0, 0, 5, 10);
 * 				var rect2 = new Rect2(2, 0, 8, 4);
 * 
 * 				var a = rect1.Intersection(rect2); // a is Rect2(2, 0, 3, 4)
 * 				
 * 
 * ```
 * 
 * **Note:** If you only need to know whether two rectangles are overlapping, use `intersects`, instead.
 * @param b Rect2
 * @returns Rect2
 */
  intersection(b: Rect2): Rect2;
/**
 * Returns `true` if this rectangle overlaps with the `b` rectangle. The edges of both rectangles are excluded, unless `include_borders` is `true`.
 * @param b Rect2
 * @param includeBorders boolean (optional, default: false)
 * @returns boolean
 */
  intersects(b: Rect2, includeBorders?: boolean): boolean;
/**
 * Returns `true` if this rectangle and `rect` are approximately equal, by calling `Vector2.is_equal_approx` on the `position` and the `size`.
 * @param rect Rect2
 * @returns boolean
 */
  isEqualApprox(rect: Rect2): boolean;
/**
 * Returns `true` if this rectangle's values are finite, by calling `Vector2.is_finite` on the `position` and the `size`.
 * @returns boolean
 */
  isFinite(): boolean;
/**
 * Returns a `Rect2` that encloses both this rectangle and `b` around the edges. See also `encloses`.
 * @param b Rect2
 * @returns Rect2
 */
  merge(b: Rect2): Rect2;
}
