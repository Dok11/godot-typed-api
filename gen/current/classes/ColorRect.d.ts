import type { Color, Control, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A control that displays a solid color rectangle.
 * 
 * Displays a rectangle filled with a solid `color`. If you need to display the border alone, consider using a `Panel` instead.
 */
export class ColorRect extends Control {
/**
 * The fill color of the rectangle.
 */
  color: Color;
}
