import type { Control, GodotArray, GodotDictionary, Node, Signal, float, int } from "../index.d.ts";
/**
 * Abstract base class for controls that represent a number within a range.
 * 
 * Range is an abstract base class for controls that represent a number within a range, using a configured `step` and `page` size. See e.g. `ScrollBar` and `Slider` for examples of higher-level nodes using Range.
 */
export class Range extends Control {
/**
 * If `true`, `value` may be greater than `max_value`.
 */
  allowGreater: boolean;
/**
 * If `true`, `value` may be less than `min_value`.
 */
  allowLesser: boolean;
/**
 * If `true`, and `min_value` is greater than 0, `value` will be represented exponentially rather than linearly.
 */
  expEdit: boolean;
/**
 * Maximum value. Range is clamped if `value` is greater than `max_value`.
 */
  maxValue: float;
/**
 * Minimum value. Range is clamped if `value` is less than `min_value`.
 */
  minValue: float;
/**
 * Page size. Used mainly for `ScrollBar`. A `ScrollBar`'s grabber length is the `ScrollBar`'s size multiplied by `page` over the difference between `min_value` and `max_value`.
 */
  page: float;
/**
 * The value mapped between 0 and 1.
 */
  ratio: float;
/**
 * If `true`, `value` will always be rounded to the nearest integer.
 */
  rounded: boolean;
  sizeFlagsVertical: int;
/**
 * If greater than 0, `value` will always be rounded to a multiple of this property's value. If `rounded` is also `true`, `value` will first be rounded to a multiple of this property's value, then rounded to the nearest integer.
 */
  step: float;
/**
 * Range's current value. Changing this property (even via code) will trigger `value_changed` signal. Use `set_value_no_signal` if you want to avoid it.
 */
  value: float;
/**
 * Sets the `Range`'s current value to the specified `value`, without emitting the `value_changed` signal.
 * @param value float
 */
  setValueNoSignal(value: float): void;
/**
 * Binds two `Range`s together along with any ranges previously grouped with either of them. When any of range's member variables change, it will share the new value with all other ranges in its group.
 * @param with_ Node
 */
  share(with_: Node): void;
/**
 * Stops the `Range` from sharing its member variables with any other.
 */
  unshare(): void;
/**
 * Called when the `Range`'s value is changed (following the same conditions as `value_changed`).
 * @param newValue float
 */
  private valueChanged(newValue: float): void;
/**
 * Emitted when `min_value`, `max_value`, `page`, or `step` change.
 */
  changed: Signal<[]>;
/**
 * Emitted when `value` changes. When used on a `Slider`, this is called continuously while dragging (potentially every frame). If you are performing an expensive operation in a function connected to `value_changed`, consider using a *debouncing* `Timer` to call the function less often.
 * 
 * **Note:** Unlike signals such as `LineEdit.text_changed`, `value_changed` is also emitted when `value` is set directly via code.
 */
  valueChanged: Signal<[value: float]>;
}
