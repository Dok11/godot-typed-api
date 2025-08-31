import type { GodotArray, GodotDictionary, Range, Signal, float, int } from "../index.d.ts";
/**
 * Abstract base class for scrollbars.
 * 
 * Abstract base class for scrollbars, typically used to navigate through content that extends beyond the visible area of a control. Scrollbars are `Range`-based controls.
 */
export class ScrollBar extends Range {
/**
 * Overrides the step used when clicking increment and decrement buttons or when using arrow keys when the `ScrollBar` is focused.
 */
  customStep: float;
  step: float;
/**
 * Emitted when the scrollbar is being scrolled.
 */
  scrolling: Signal<[]>;
}
