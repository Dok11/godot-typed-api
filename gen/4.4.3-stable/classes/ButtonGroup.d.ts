import type { BaseButton, GodotArray, GodotDictionary, Resource, Signal, float, int } from "../index.d.ts";
/**
 * A group of buttons that doesn't allow more than one button to be pressed at a time.
 * 
 * A group of `BaseButton`-derived buttons. The buttons in a `ButtonGroup` are treated like radio buttons: No more than one button can be pressed at a time. Some types of buttons (such as `CheckBox`) may have a special appearance in this state.
 * Every member of a `ButtonGroup` should have `BaseButton.toggle_mode` set to `true`.
 */
export class ButtonGroup extends Resource {
/**
 * If `true`, it is possible to unpress all buttons in this `ButtonGroup`.
 */
  allowUnpress: boolean;
  resourceLocalToScene: boolean;
/**
 * Returns an `Array` of `Button`s who have this as their `ButtonGroup` (see `BaseButton.button_group`).
 * @returns BaseButton[]
 */
  getButtons(): BaseButton[];
/**
 * Returns the current pressed button.
 * @returns BaseButton
 */
  getPressedButton(): BaseButton;
/**
 * Emitted when one of the buttons of the group is pressed.
 */
  pressed: Signal<[button: BaseButton]>;
}
