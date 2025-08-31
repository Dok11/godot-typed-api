import type { GodotArray, GodotDictionary, Image, PackedVector2Array, Rect2i, Resource, Vector2i, float, int } from "../index.d.ts";
/**
 * Boolean matrix.
 * 
 * A two-dimensional array of boolean values, can be used to efficiently store a binary matrix (every matrix element takes only one bit) and query the values using natural cartesian coordinates.
 */
export class BitMap extends Resource {
/**
 * Returns an image of the same size as the bitmap and with a `Image.Format` of type `Image.FORMAT_L8`. `true` bits of the bitmap are being converted into white pixels, and `false` bits into black.
 * @returns Image
 */
  convertToImage(): Image;
/**
 * Creates a bitmap with the specified size, filled with `false`.
 * @param size Vector2i
 */
  create(size: Vector2i): void;
/**
 * Creates a bitmap that matches the given image dimensions, every element of the bitmap is set to `false` if the alpha value of the image at that position is equal to `threshold` or less, and `true` in other case.
 * @param image Image
 * @param threshold float (optional, default: 0.1)
 */
  createFromImageAlpha(image: Image, threshold?: float): void;
/**
 * Returns bitmap's value at the specified position.
 * @param x int
 * @param y int
 * @returns boolean
 */
  getBit(x: int, y: int): boolean;
/**
 * Returns bitmap's value at the specified position.
 * @param position Vector2i
 * @returns boolean
 */
  getBitv(position: Vector2i): boolean;
/**
 * Returns bitmap's dimensions.
 * @returns Vector2i
 */
  getSize(): Vector2i;
/**
 * Returns the number of bitmap elements that are set to `true`.
 * @returns int
 */
  getTrueBitCount(): int;
/**
 * Applies morphological dilation or erosion to the bitmap. If `pixels` is positive, dilation is applied to the bitmap. If `pixels` is negative, erosion is applied to the bitmap. `rect` defines the area where the morphological operation is applied. Pixels located outside the `rect` are unaffected by `grow_mask`.
 * @param pixels int
 * @param rect Rect2i
 */
  growMask(pixels: int, rect: Rect2i): void;
/**
 * Creates an `Array` of polygons covering a rectangular portion of the bitmap. It uses a marching squares algorithm, followed by Ramer-Douglas-Peucker (RDP) reduction of the number of vertices. Each polygon is described as a `PackedVector2Array` of its vertices.
 * To get polygons covering the whole bitmap, pass:
 * 
 * 				```gdscript
 * 
 * 				Rect2(Vector2(), get_size())
 * 				
 * 
 * ```
 * `epsilon` is passed to RDP to control how accurately the polygons cover the bitmap: a lower `epsilon` corresponds to more points in the polygons.
 * @param rect Rect2i
 * @param epsilon float (optional, default: 2.0)
 * @returns PackedVector2Array[]
 */
  opaqueToPolygons(rect: Rect2i, epsilon?: float): PackedVector2Array[];
/**
 * Resizes the image to `new_size`.
 * @param newSize Vector2i
 */
  resize(newSize: Vector2i): void;
/**
 * Sets the bitmap's element at the specified position, to the specified value.
 * @param x int
 * @param y int
 * @param bit boolean
 */
  setBit(x: int, y: int, bit: boolean): void;
/**
 * Sets a rectangular portion of the bitmap to the specified value.
 * @param rect Rect2i
 * @param bit boolean
 */
  setBitRect(rect: Rect2i, bit: boolean): void;
/**
 * Sets the bitmap's element at the specified position, to the specified value.
 * @param position Vector2i
 * @param bit boolean
 */
  setBitv(position: Vector2i, bit: boolean): void;
}
