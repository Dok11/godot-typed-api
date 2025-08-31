import type { GodotArray, GodotDictionary, Range, Signal, float, int } from "../index.d.ts";
/**
 * Abstract base class for sliders.
 * 
 * Abstract base class for sliders, used to adjust a value by moving a grabber along a horizontal or vertical axis. Sliders are `Range`-based controls.
 */
export class Slider extends Range {
/**
 * If `true`, the slider can be interacted with. If `false`, the value can be changed only by code.
 */
  editable: boolean;
  focusMode: int;
/**
 * If `true`, the value can be changed using the mouse wheel.
 */
  scrollable: boolean;
  step: float;
/**
 * Number of ticks displayed on the slider, including border ticks. Ticks are uniformly-distributed value markers.
 */
  tickCount: int;
/**
 * If `true`, the slider will display ticks for minimum and maximum values.
 */
  ticksOnBorders: boolean;
/**
 * Emitted when the grabber stops being dragged. If `value_changed` is `true`, `Range.value` is different from the value when the dragging was started.
 */
  dragEnded: Signal<[valueChanged: boolean]>;
/**
 * Emitted when the grabber starts being dragged. This is emitted before the corresponding `Range.value_changed` signal.
 */
  dragStarted: Signal<[]>;
}
