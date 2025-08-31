import type { Button, GodotArray, GodotDictionary, Label, LineEdit, Signal, StringName, Window, float, int } from "../index.d.ts";
/**
 * A base dialog used for user notification.
 * 
 * The default use of `AcceptDialog` is to allow it to only be accepted or closed, with the same result. However, the `confirmed` and `canceled` signals allow to make the two actions different, and the `add_button` method allows to add custom buttons and actions.
 */
export class AcceptDialog extends Window {
/**
 * Sets autowrapping for the text in the dialog.
 */
  dialogAutowrap: boolean;
/**
 * If `true`, the dialog will be hidden when the escape key (`KEY_ESCAPE`) is pressed.
 */
  dialogCloseOnEscape: boolean;
/**
 * If `true`, the dialog is hidden when the OK button is pressed. You can set it to `false` if you want to do e.g. input validation when receiving the `confirmed` signal, and handle hiding the dialog in your own logic.
 * 
 * **Note:** Some nodes derived from this class can have a different default value, and potentially their own built-in logic overriding this setting. For example `FileDialog` defaults to `false`, and has its own input validation code that is called when you press OK, which eventually hides the dialog if the input is valid. As such, this property can't be used in `FileDialog` to disable hiding the dialog when pressing OK.
 */
  dialogHideOnOk: boolean;
/**
 * The text displayed by the dialog.
 */
  dialogText: string;
  exclusive: boolean;
  keepTitleVisible: boolean;
/**
 * The text displayed by the OK button (see `get_ok_button`).
 */
  okButtonText: string;
  title: string;
  transient: boolean;
  visible: boolean;
  wrapControls: boolean;
/**
 * Adds a button with label `text` and a custom `action` to the dialog and returns the created button. `action` will be passed to the `custom_action` signal when pressed.
 * If `true`, `right` will place the button to the right of any sibling buttons.
 * You can use `remove_button` method to remove a button created with this method from the dialog.
 * @param text string
 * @param right boolean (optional, default: false)
 * @param action string (optional, default: "")
 * @returns Button
 */
  addButton(text: string, right?: boolean, action?: string): Button;
/**
 * Adds a button with label `name` and a cancel action to the dialog and returns the created button.
 * You can use `remove_button` method to remove a button created with this method from the dialog.
 * @param name string
 * @returns Button
 */
  addCancelButton(name: string): Button;
/**
 * Returns the label used for built-in text.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns Label
 */
  getLabel(): Label;
/**
 * Returns the OK `Button` instance.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns Button
 */
  getOkButton(): Button;
/**
 * Registers a `LineEdit` in the dialog. When the enter key is pressed, the dialog will be accepted.
 * @param lineEdit LineEdit
 */
  registerTextEnter(lineEdit: LineEdit): void;
/**
 * Removes the `button` from the dialog. Does NOT free the `button`. The `button` must be a `Button` added with `add_button` or `add_cancel_button` method. After removal, pressing the `button` will no longer emit this dialog's `custom_action` or `canceled` signals.
 * @param button Button
 */
  removeButton(button: Button): void;
/**
 * Emitted when the dialog is closed or the button created with `add_cancel_button` is pressed.
 */
  canceled: Signal<[]>;
/**
 * Emitted when the dialog is accepted, i.e. the OK button is pressed.
 */
  confirmed: Signal<[]>;
/**
 * Emitted when a custom button is pressed. See `add_button`.
 */
  customAction: Signal<[action: StringName]>;
}
