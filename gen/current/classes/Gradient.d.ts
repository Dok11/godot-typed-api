import type { Color, GodotArray, GodotDictionary, PackedColorArray, PackedFloat32Array, Resource, float, int } from "../index.d.ts";
/**
 * A color transition.
 * 
 * This resource describes a color transition by defining a set of colored points and how to interpolate between them.
 * See also `Curve` which supports more complex easing methods, but does not support colors.
 */
export class Gradient extends Resource {
/**
 * Gradient's colors as a `PackedColorArray`.
 * 
 * **Note:** Setting this property updates all colors at once. To update any color individually use `set_color`.
 */
  colors: PackedColorArray;
/**
 * The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space. See `ColorSpace` for available modes.
 * 
 * **Note:** This setting has no effect when `interpolation_mode` is set to `GRADIENT_INTERPOLATE_CONSTANT`.
 */
  interpolationColorSpace: int;
/**
 * The algorithm used to interpolate between points of the gradient. See `InterpolationMode` for available modes.
 */
  interpolationMode: int;
/**
 * Gradient's offsets as a `PackedFloat32Array`.
 * 
 * **Note:** Setting this property updates all offsets at once. To update any offset individually use `set_offset`.
 */
  offsets: PackedFloat32Array;
/**
 * Adds the specified color to the gradient, with the specified offset.
 * @param offset float
 * @param color Color
 */
  addPoint(offset: float, color: Color): void;
/**
 * Returns the color of the gradient color at index `point`.
 * @param point int
 * @returns Color
 */
  getColor(point: int): Color;
/**
 * Returns the offset of the gradient color at index `point`.
 * @param point int
 * @returns float
 */
  getOffset(point: int): float;
/**
 * Returns the number of colors in the gradient.
 * @returns int
 */
  getPointCount(): int;
/**
 * Removes the color at index `point`.
 * @param point int
 */
  removePoint(point: int): void;
/**
 * Reverses/mirrors the gradient.
 * 
 * **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when `interpolation_mode` is set to `GRADIENT_INTERPOLATE_CONSTANT`.
 */
  reverse(): void;
/**
 * Returns the interpolated color specified by `offset`.
 * @param offset float
 * @returns Color
 */
  sample(offset: float): Color;
/**
 * Sets the color of the gradient color at index `point`.
 * @param point int
 * @param color Color
 */
  setColor(point: int, color: Color): void;
/**
 * Sets the offset for the gradient color at index `point`.
 * @param point int
 * @param offset float
 */
  setOffset(point: int, offset: float): void;
/**
 * Linear interpolation.
 */
  static readonly GRADIENT_INTERPOLATE_LINEAR: int;
/**
 * Constant interpolation, color changes abruptly at each point and stays uniform between. This might cause visible aliasing when used for a gradient texture in some cases.
 */
  static readonly GRADIENT_INTERPOLATE_CONSTANT: int;
/**
 * Cubic interpolation.
 */
  static readonly GRADIENT_INTERPOLATE_CUBIC: int;
/**
 * sRGB color space.
 */
  static readonly GRADIENT_COLOR_SPACE_SRGB: int;
/**
 * Linear sRGB color space.
 */
  static readonly GRADIENT_COLOR_SPACE_LINEAR_SRGB: int;
/**
 * Oklab (https://bottosson.github.io/posts/oklab/) color space. This color space provides a smooth and uniform-looking transition between colors.
 */
  static readonly GRADIENT_COLOR_SPACE_OKLAB: int;
}
