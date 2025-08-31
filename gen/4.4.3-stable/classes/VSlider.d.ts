import type { GodotArray, GodotDictionary, Slider, float, int } from "../index.d.ts";
/**
 * A vertical slider that goes from bottom (min) to top (max).
 * 
 * A vertical slider, used to adjust a value by moving a grabber along a vertical axis. It is a `Range`-based control and goes from bottom (min) to top (max). Note that this direction is the opposite of `VScrollBar`'s.
 */
export class VSlider extends Slider {
  sizeFlagsHorizontal: int;
  sizeFlagsVertical: int;
}
