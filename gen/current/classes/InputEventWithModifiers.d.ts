import type { GodotArray, GodotDictionary, InputEventFromWindow, float, int } from "../index.d.ts";
/**
 * Abstract base class for input events affected by modifier keys like `Shift` and `Alt`.
 * 
 * Stores information about mouse, keyboard, and touch gesture input events. This includes information about which modifier keys are pressed, such as `Shift` or `Alt`. See `Node._input`.
 * 
 * **Note:** Modifier keys are considered modifiers only when used in combination with another key. As a result, their corresponding member variables, such as `ctrl_pressed`, will return `false` if the key is pressed on its own.
 */
export class InputEventWithModifiers extends InputEventFromWindow {
/**
 * State of the `Alt` modifier.
 */
  altPressed: boolean;
/**
 * Automatically use `Meta` (`Cmd`) on macOS and `Ctrl` on other platforms. If `true`, `ctrl_pressed` and `meta_pressed` cannot be set.
 */
  commandOrControlAutoremap: boolean;
/**
 * State of the `Ctrl` modifier.
 */
  ctrlPressed: boolean;
/**
 * State of the `Meta` modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key.
 */
  metaPressed: boolean;
/**
 * State of the `Shift` modifier.
 */
  shiftPressed: boolean;
/**
 * Returns the keycode combination of modifier keys.
 * @returns int
 */
  getModifiersMask(): int;
/**
 * On macOS, returns `true` if `Meta` (`Cmd`) is pressed.
 * On other platforms, returns `true` if `Ctrl` is pressed.
 * @returns boolean
 */
  isCommandOrControlPressed(): boolean;
}
