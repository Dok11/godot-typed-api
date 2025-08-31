import type { GodotArray, GodotDictionary, Resource, StringName, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Abstract base class for input events.
 * 
 * Abstract base class of all types of input events. See `Node._input`.
 */
export class InputEvent extends Resource {
/**
 * The event's device ID.
 * 
 * **Note:** `device` can be negative for special use cases that don't refer to devices physically present on the system. See `DEVICE_ID_EMULATION`.
 */
  device: int;
/**
 * Returns `true` if the given input event and this input event can be added together (only for events of type `InputEventMouseMotion`).
 * The given input event's position, global position and speed will be copied. The resulting `relative` is a sum of both events. Both events' modifiers have to be identical.
 * @param withEvent InputEvent
 * @returns boolean
 */
  accumulate(withEvent: InputEvent): boolean;
/**
 * Returns a `String` representation of the event.
 * @returns string
 */
  asText(): string;
/**
 * Returns a value between 0.0 and 1.0 depending on the given actions' state. Useful for getting the value of events of type `InputEventJoypadMotion`.
 * If `exact_match` is `false`, it ignores additional input modifiers for `InputEventKey` and `InputEventMouseButton` events, and the direction for `InputEventJoypadMotion` events.
 * @param action StringName
 * @param exactMatch boolean (optional, default: false)
 * @returns float
 */
  getActionStrength(action: StringName, exactMatch?: boolean): float;
/**
 * Returns `true` if this input event matches a pre-defined action of any type.
 * If `exact_match` is `false`, it ignores additional input modifiers for `InputEventKey` and `InputEventMouseButton` events, and the direction for `InputEventJoypadMotion` events.
 * @param action StringName
 * @param exactMatch boolean (optional, default: false)
 * @returns boolean
 */
  isAction(action: StringName, exactMatch?: boolean): boolean;
/**
 * Returns `true` if the given action is being pressed (and is not an echo event for `InputEventKey` events, unless `allow_echo` is `true`). Not relevant for events of type `InputEventMouseMotion` or `InputEventScreenDrag`.
 * If `exact_match` is `false`, it ignores additional input modifiers for `InputEventKey` and `InputEventMouseButton` events, and the direction for `InputEventJoypadMotion` events.
 * 
 * **Note:** Due to keyboard ghosting, `is_action_pressed` may return `false` even if one of the action's keys is pressed. See Input examples (https://docs.godotengine.org/en/stable/tutorials/inputs/input_examples.html#keyboard-events) in the documentation for more information.
 * @param action StringName
 * @param allowEcho boolean (optional, default: false)
 * @param exactMatch boolean (optional, default: false)
 * @returns boolean
 */
  isActionPressed(action: StringName, allowEcho?: boolean, exactMatch?: boolean): boolean;
/**
 * Returns `true` if the given action is released (i.e. not pressed). Not relevant for events of type `InputEventMouseMotion` or `InputEventScreenDrag`.
 * If `exact_match` is `false`, it ignores additional input modifiers for `InputEventKey` and `InputEventMouseButton` events, and the direction for `InputEventJoypadMotion` events.
 * @param action StringName
 * @param exactMatch boolean (optional, default: false)
 * @returns boolean
 */
  isActionReleased(action: StringName, exactMatch?: boolean): boolean;
/**
 * Returns `true` if this input event's type is one that can be assigned to an input action.
 * @returns boolean
 */
  isActionType(): boolean;
/**
 * Returns `true` if this input event has been canceled.
 * @returns boolean
 */
  isCanceled(): boolean;
/**
 * Returns `true` if this input event is an echo event (only for events of type `InputEventKey`). An echo event is a repeated key event sent when the user is holding down the key. Any other event type returns `false`.
 * 
 * **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.
 * @returns boolean
 */
  isEcho(): boolean;
/**
 * Returns `true` if the specified `event` matches this event. Only valid for action events i.e key (`InputEventKey`), button (`InputEventMouseButton` or `InputEventJoypadButton`), axis `InputEventJoypadMotion` or action (`InputEventAction`) events.
 * If `exact_match` is `false`, it ignores additional input modifiers for `InputEventKey` and `InputEventMouseButton` events, and the direction for `InputEventJoypadMotion` events.
 * 
 * **Note:** Only considers the event configuration (such as the keyboard key or joypad axis), not state information like `is_pressed`, `is_released`, `is_echo`, or `is_canceled`.
 * @param event InputEvent
 * @param exactMatch boolean (optional, default: true)
 * @returns boolean
 */
  isMatch(event: InputEvent, exactMatch?: boolean): boolean;
/**
 * Returns `true` if this input event is pressed. Not relevant for events of type `InputEventMouseMotion` or `InputEventScreenDrag`.
 * 
 * **Note:** Due to keyboard ghosting, `is_pressed` may return `false` even if one of the action's keys is pressed. See Input examples (https://docs.godotengine.org/en/stable/tutorials/inputs/input_examples.html#keyboard-events) in the documentation for more information.
 * @returns boolean
 */
  isPressed(): boolean;
/**
 * Returns `true` if this input event is released. Not relevant for events of type `InputEventMouseMotion` or `InputEventScreenDrag`.
 * @returns boolean
 */
  isReleased(): boolean;
/**
 * Returns a copy of the given input event which has been offset by `local_ofs` and transformed by `xform`. Relevant for events of type `InputEventMouseButton`, `InputEventMouseMotion`, `InputEventScreenTouch`, `InputEventScreenDrag`, `InputEventMagnifyGesture` and `InputEventPanGesture`.
 * @param xform Transform2D
 * @param localOfs Vector2 (optional, default: Vector2(0, 0))
 * @returns InputEvent
 */
  xformedBy(xform: Transform2D, localOfs?: Vector2): InputEvent;
/**
 * Device ID used for emulated mouse input from a touchscreen, or for emulated touch input from a mouse. This can be used to distinguish emulated mouse input from physical mouse input, or emulated touch input from physical touch input.
 */
  static readonly DEVICE_ID_EMULATION: int;
}
