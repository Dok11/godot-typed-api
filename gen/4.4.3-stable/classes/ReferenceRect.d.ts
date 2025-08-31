import type { Color, Control, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A rectangle hint for designing UIs.
 * 
 * A rectangle box that displays only a colored border around its rectangle. It is used to visualize the extents of a `Control`.
 */
export class ReferenceRect extends Control {
/**
 * Sets the border color of the `ReferenceRect`.
 */
  borderColor: Color;
/**
 * Sets the border width of the `ReferenceRect`. The border grows both inwards and outwards with respect to the rectangle box.
 */
  borderWidth: float;
/**
 * If `true`, the `ReferenceRect` will only be visible while in editor. Otherwise, `ReferenceRect` will be visible in the running project.
 */
  editorOnly: boolean;
}
