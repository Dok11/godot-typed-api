import type { GodotArray, GodotDictionary, ScrollBar, float, int } from "../index.d.ts";
/**
 * A vertical scrollbar that goes from top (min) to bottom (max).
 * 
 * A vertical scrollbar, typically used to navigate through content that extends beyond the visible height of a control. It is a `Range`-based control and goes from top (min) to bottom (max). Note that this direction is the opposite of `VSlider`'s.
 */
export class VScrollBar extends ScrollBar {
  sizeFlagsHorizontal: int;
  sizeFlagsVertical: int;
}
