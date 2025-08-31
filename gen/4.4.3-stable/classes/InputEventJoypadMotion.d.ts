import type { GodotArray, GodotDictionary, InputEvent, float, int } from "../index.d.ts";
/**
 * Represents axis motions (such as joystick or analog triggers) from a gamepad.
 * 
 * Stores information about joystick motions. One `InputEventJoypadMotion` represents one axis at a time. For gamepad buttons, see `InputEventJoypadButton`.
 */
export class InputEventJoypadMotion extends InputEvent {
/**
 * Axis identifier. Use one of the `JoyAxis` axis constants.
 */
  axis: int;
/**
 * Current position of the joystick on the given axis. The value ranges from `-1.0` to `1.0`. A value of `0` means the axis is in its resting position.
 */
  axisValue: float;
}
