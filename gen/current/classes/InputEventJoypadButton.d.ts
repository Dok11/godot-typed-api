import type { GodotArray, GodotDictionary, InputEvent, float, int } from "../index.d.ts";
/**
 * Represents a gamepad button being pressed or released.
 * 
 * Input event type for gamepad buttons. For gamepad analog sticks and joysticks, see `InputEventJoypadMotion`.
 */
export class InputEventJoypadButton extends InputEvent {
/**
 * Button identifier. One of the `JoyButton` button constants.
 */
  buttonIndex: int;
/**
 * If `true`, the button's state is pressed. If `false`, the button's state is released.
 */
  pressed: boolean;
/**
 * @deprecated This property is never set by the engine and is always `0`.
 */
  pressure: float;
}
