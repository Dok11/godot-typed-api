import type { ButtonGroup, Control, GodotArray, GodotDictionary, Shortcut, Signal, float, int } from "../index.d.ts";
/**
 * Abstract base class for GUI buttons.
 * 
 * `BaseButton` is an abstract base class for GUI buttons. It doesn't display anything by itself.
 */
export class BaseButton extends Control {
/**
 * Determines when the button is considered clicked, one of the `ActionMode` constants.
 */
  actionMode: int;
/**
 * The `ButtonGroup` associated with the button. Not to be confused with node groups.
 * 
 * **Note:** The button will be configured as a radio button if a `ButtonGroup` is assigned to it.
 */
  buttonGroup: ButtonGroup;
/**
 * Binary mask to choose which mouse buttons this button will respond to.
 * To allow both left-click and right-click, use `MOUSE_BUTTON_MASK_LEFT | MOUSE_BUTTON_MASK_RIGHT`.
 */
  buttonMask: int;
/**
 * If `true`, the button's state is pressed. Means the button is pressed down or toggled (if `toggle_mode` is active). Only works if `toggle_mode` is `true`.
 * 
 * **Note:** Changing the value of `button_pressed` will result in `toggled` to be emitted. If you want to change the pressed state without emitting that signal, use `set_pressed_no_signal`.
 */
  buttonPressed: boolean;
/**
 * If `true`, the button is in disabled state and can't be clicked or toggled.
 */
  disabled: boolean;
  focusMode: int;
/**
 * If `true`, the button stays pressed when moving the cursor outside the button while pressing it.
 * 
 * **Note:** This property only affects the button's visual appearance. Signals will be emitted at the same moment regardless of this property's value.
 */
  keepPressedOutside: boolean;
/**
 * `Shortcut` associated to the button.
 */
  shortcut: Shortcut;
/**
 * If `true`, the button will highlight for a short amount of time when its shortcut is activated. If `false` and `toggle_mode` is `false`, the shortcut will activate without any visual feedback.
 */
  shortcutFeedback: boolean;
/**
 * If `true`, the button will add information about its shortcut in the tooltip.
 * 
 * **Note:** This property does nothing when the tooltip control is customized using `Control._make_custom_tooltip`.
 */
  shortcutInTooltip: boolean;
/**
 * If `true`, the button is in toggle mode. Makes the button flip state between pressed and unpressed each time its area is clicked.
 */
  toggleMode: boolean;
/**
 * Returns the visual state used to draw the button. This is useful mainly when implementing your own draw code by either overriding _draw() or connecting to "draw" signal. The visual state of the button is defined by the `DrawMode` enum.
 * @returns int
 */
  getDrawMode(): int;
/**
 * Returns `true` if the mouse has entered the button and has not left it yet.
 * @returns boolean
 */
  isHovered(): boolean;
/**
 * Called when the button is pressed. If you need to know the button's pressed state (and `toggle_mode` is active), use `_toggled` instead.
 */
  private pressed(): void;
/**
 * Changes the `button_pressed` state of the button, without emitting `toggled`. Use when you just want to change the state of the button without sending the pressed event (e.g. when initializing scene). Only works if `toggle_mode` is `true`.
 * 
 * **Note:** This method doesn't unpress other buttons in `button_group`.
 * @param pressed boolean
 */
  setPressedNoSignal(pressed: boolean): void;
/**
 * Called when the button is toggled (only if `toggle_mode` is active).
 * @param toggledOn boolean
 */
  private toggled(toggledOn: boolean): void;
/**
 * Emitted when the button starts being held down.
 */
  buttonDown: Signal<[]>;
/**
 * Emitted when the button stops being held down.
 */
  buttonUp: Signal<[]>;
/**
 * Emitted when the button is toggled or pressed. This is on `button_down` if `action_mode` is `ACTION_MODE_BUTTON_PRESS` and on `button_up` otherwise.
 * If you need to know the button's pressed state (and `toggle_mode` is active), use `toggled` instead.
 */
  pressed: Signal<[]>;
/**
 * Emitted when the button was just toggled between pressed and normal states (only if `toggle_mode` is active). The new state is contained in the `toggled_on` argument.
 */
  toggled: Signal<[toggledOn: boolean]>;
/**
 * The normal state (i.e. not pressed, not hovered, not toggled and enabled) of buttons.
 */
  static readonly DRAW_NORMAL: int;
/**
 * The state of buttons are pressed.
 */
  static readonly DRAW_PRESSED: int;
/**
 * The state of buttons are hovered.
 */
  static readonly DRAW_HOVER: int;
/**
 * The state of buttons are disabled.
 */
  static readonly DRAW_DISABLED: int;
/**
 * The state of buttons are both hovered and pressed.
 */
  static readonly DRAW_HOVER_PRESSED: int;
/**
 * Require just a press to consider the button clicked.
 */
  static readonly ACTION_MODE_BUTTON_PRESS: int;
/**
 * Require a press and a subsequent release before considering the button clicked.
 */
  static readonly ACTION_MODE_BUTTON_RELEASE: int;
}
