import type { Color, GodotArray, GodotDictionary, StyleBox, float, int } from "../index.d.ts";
/**
 * A `StyleBox` that displays a single line of a given color and thickness.
 * 
 * A `StyleBox` that displays a single line of a given color and thickness. The line can be either horizontal or vertical. Useful for separators.
 */
export class StyleBoxLine extends StyleBox {
/**
 * The line's color.
 */
  color: Color;
/**
 * The number of pixels the line will extend before the `StyleBoxLine`'s bounds. If set to a negative value, the line will begin inside the `StyleBoxLine`'s bounds.
 */
  growBegin: float;
/**
 * The number of pixels the line will extend past the `StyleBoxLine`'s bounds. If set to a negative value, the line will end inside the `StyleBoxLine`'s bounds.
 */
  growEnd: float;
/**
 * The line's thickness in pixels.
 */
  thickness: int;
/**
 * If `true`, the line will be vertical. If `false`, the line will be horizontal.
 */
  vertical: boolean;
}
