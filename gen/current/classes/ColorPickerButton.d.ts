import type { Button, Color, ColorPicker, GodotArray, GodotDictionary, PopupPanel, Signal, float, int } from "../index.d.ts";
/**
 * A button that brings up a `ColorPicker` when pressed.
 * 
 * Encapsulates a `ColorPicker`, making it accessible by pressing a button. Pressing the button will toggle the `ColorPicker`'s visibility.
 * See also `BaseButton` which contains common properties and methods associated with this node.
 * 
 * **Note:** By default, the button may not be wide enough for the color preview swatch to be visible. Make sure to set `Control.custom_minimum_size` to a big enough value to give the button enough space.
 */
export class ColorPickerButton extends Button {
/**
 * The currently selected color.
 */
  color: Color;
/**
 * If `true`, the alpha channel in the displayed `ColorPicker` will be visible.
 */
  editAlpha: boolean;
  toggleMode: boolean;
/**
 * Returns the `ColorPicker` that this node toggles.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns ColorPicker
 */
  getPicker(): ColorPicker;
/**
 * Returns the control's `PopupPanel` which allows you to connect to popup signals. This allows you to handle events when the ColorPicker is shown or hidden.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `Window.visible` property.
 * @returns PopupPanel
 */
  getPopup(): PopupPanel;
/**
 * Emitted when the color changes.
 */
  colorChanged: Signal<[color: Color]>;
/**
 * Emitted when the `ColorPicker` is created (the button is pressed for the first time).
 */
  pickerCreated: Signal<[]>;
/**
 * Emitted when the `ColorPicker` is closed.
 */
  popupClosed: Signal<[]>;
}
