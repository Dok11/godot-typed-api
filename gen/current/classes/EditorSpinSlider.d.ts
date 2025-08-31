import type { GodotArray, GodotDictionary, Range, Signal, float, int } from "../index.d.ts";
/**
 * Godot editor's control for editing numeric values.
 * 
 * This `Control` node is used in the editor's Inspector dock to allow editing of numeric values. Can be used with `EditorInspectorPlugin` to recreate the same behavior.
 * If the `Range.step` value is `1`, the `EditorSpinSlider` will display up/down arrows, similar to `SpinBox`. If the `Range.step` value is not `1`, a slider will be displayed instead.
 */
export class EditorSpinSlider extends Range {
/**
 * If `true`, the `EditorSpinSlider` is considered to be editing an integer value. If `false`, the `EditorSpinSlider` is considered to be editing a floating-point value. This is used to determine whether a slider should be drawn. The slider is only drawn for floats; integers use up-down arrows similar to `SpinBox` instead.
 */
  editingInteger: boolean;
/**
 * If `true`, the slider will not draw background.
 */
  flat: boolean;
  focusMode: int;
/**
 * If `true`, the slider and up/down arrows are hidden.
 */
  hideSlider: boolean;
/**
 * The text that displays to the left of the value.
 */
  label: string;
/**
 * If `true`, the slider can't be interacted with.
 */
  readOnly: boolean;
  sizeFlagsVertical: int;
  step: float;
/**
 * The suffix to display after the value (in a faded color). This should generally be a plural word. You may have to use an abbreviation if the suffix is too long to be displayed.
 */
  suffix: string;
/**
 * Emitted when the spinner/slider is grabbed.
 */
  grabbed: Signal<[]>;
/**
 * Emitted when the spinner/slider is ungrabbed.
 */
  ungrabbed: Signal<[]>;
/**
 * Emitted when the updown button is pressed.
 */
  updownPressed: Signal<[]>;
/**
 * Emitted when the value form gains focus.
 */
  valueFocusEntered: Signal<[]>;
/**
 * Emitted when the value form loses focus.
 */
  valueFocusExited: Signal<[]>;
}
