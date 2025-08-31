import type { GodotArray, GodotDictionary, InputEventMouse, float, int } from "../index.d.ts";
/**
 * Represents a mouse button being pressed or released.
 * 
 * Stores information about mouse click events. See `Node._input`.
 * 
 * **Note:** On Wear OS devices, rotary input is mapped to `MOUSE_BUTTON_WHEEL_UP` and `MOUSE_BUTTON_WHEEL_DOWN`. This can be changed to `MOUSE_BUTTON_WHEEL_LEFT` and `MOUSE_BUTTON_WHEEL_RIGHT` with the `ProjectSettings.input_devices/pointing/android/rotary_input_scroll_axis` setting.
 */
export class InputEventMouseButton extends InputEventMouse {
/**
 * The mouse button identifier, one of the `MouseButton` button or button wheel constants.
 */
  buttonIndex: int;
/**
 * If `true`, the mouse button event has been canceled.
 */
  canceled: boolean;
/**
 * If `true`, the mouse button's state is a double-click.
 */
  doubleClick: boolean;
/**
 * The amount (or delta) of the event. When used for high-precision scroll events, this indicates the scroll amount (vertical or horizontal). This is only supported on some platforms; the reported sensitivity varies depending on the platform. May be `0` if not supported.
 */
  factor: float;
/**
 * If `true`, the mouse button's state is pressed. If `false`, the mouse button's state is released.
 */
  pressed: boolean;
}
