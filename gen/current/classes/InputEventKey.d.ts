import type { GodotArray, GodotDictionary, InputEventWithModifiers, float, int } from "../index.d.ts";
/**
 * Represents a key on a keyboard being pressed or released.
 * 
 * An input event for keys on a keyboard. Supports key presses, key releases and `echo` events. It can also be received in `Node._unhandled_key_input`.
 * 
 * **Note:** Events received from the keyboard usually have all properties set. Event mappings should have only one of the `keycode`, `physical_keycode` or `unicode` set.
 * When events are compared, properties are checked in the following priority - `keycode`, `physical_keycode` and `unicode`. Events with the first matching value will be considered equal.
 */
export class InputEventKey extends InputEventWithModifiers {
/**
 * If `true`, the key was already pressed before this event. An echo event is a repeated key event sent when the user is holding down the key.
 * 
 * **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.
 */
  echo: boolean;
/**
 * Latin label printed on the key in the current keyboard layout, which corresponds to one of the `Key` constants.
 * To get a human-readable representation of the `InputEventKey`, use `OS.get_keycode_string(event.keycode)` where `event` is the `InputEventKey`.
 * [codeblock lang=text]
 * +-----+ +-----+
 * | Q   | | Q   | - "Q" - keycode
 * |   Й | |  ض | - "Й" and "ض" - key_label
 * +-----+ +-----+
 * [/codeblock]
 */
  keycode: int;
/**
 * Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the `Key` constants or any valid Unicode character.
 * For keyboard layouts with a single label on the key, it is equivalent to `keycode`.
 * To get a human-readable representation of the `InputEventKey`, use `OS.get_keycode_string(event.key_label)` where `event` is the `InputEventKey`.
 * [codeblock lang=text]
 * +-----+ +-----+
 * | Q   | | Q   | - "Q" - keycode
 * |   Й | |  ض | - "Й" and "ض" - key_label
 * +-----+ +-----+
 * [/codeblock]
 */
  keyLabel: int;
/**
 * Represents the location of a key which has both left and right versions, such as `Shift` or `Alt`.
 */
  location: int;
/**
 * Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the `Key` constants.
 * To get a human-readable representation of the `InputEventKey`, use `OS.get_keycode_string` in combination with `DisplayServer.keyboard_get_keycode_from_physical`:
 * 
 * 			```gdscript
 * 
 * 			func _input(event):
 * 			    if event is InputEventKey:
 * 			        var keycode = DisplayServer.keyboard_get_keycode_from_physical(event.physical_keycode)
 * 			        print(OS.get_keycode_string(keycode))
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			public override void _Input(InputEvent @event)
 * 			{
 * 			    if (@event is InputEventKey inputEventKey)
 * 			    {
 * 			        var keycode = DisplayServer.KeyboardGetKeycodeFromPhysical(inputEventKey.PhysicalKeycode);
 * 			        GD.Print(OS.GetKeycodeString(keycode));
 * 			    }
 * 			}
 * 			
 * 
 * ```
 * 
 */
  physicalKeycode: int;
/**
 * If `true`, the key's state is pressed. If `false`, the key's state is released.
 */
  pressed: boolean;
/**
 * The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See `Window.set_ime_active` for more information.
 */
  unicode: int;
/**
 * Returns a `String` representation of the event's `keycode` and modifiers.
 * @returns string
 */
  asTextKeycode(): string;
/**
 * Returns a `String` representation of the event's `key_label` and modifiers.
 * @returns string
 */
  asTextKeyLabel(): string;
/**
 * Returns a `String` representation of the event's `location`. This will be a blank string if the event is not specific to a location.
 * @returns string
 */
  asTextLocation(): string;
/**
 * Returns a `String` representation of the event's `physical_keycode` and modifiers.
 * @returns string
 */
  asTextPhysicalKeycode(): string;
/**
 * Returns the Latin keycode combined with modifier keys such as `Shift` or `Alt`. See also `InputEventWithModifiers`.
 * To get a human-readable representation of the `InputEventKey` with modifiers, use `OS.get_keycode_string(event.get_keycode_with_modifiers())` where `event` is the `InputEventKey`.
 * @returns int
 */
  getKeycodeWithModifiers(): int;
/**
 * Returns the localized key label combined with modifier keys such as `Shift` or `Alt`. See also `InputEventWithModifiers`.
 * To get a human-readable representation of the `InputEventKey` with modifiers, use `OS.get_keycode_string(event.get_key_label_with_modifiers())` where `event` is the `InputEventKey`.
 * @returns int
 */
  getKeyLabelWithModifiers(): int;
/**
 * Returns the physical keycode combined with modifier keys such as `Shift` or `Alt`. See also `InputEventWithModifiers`.
 * To get a human-readable representation of the `InputEventKey` with modifiers, use `OS.get_keycode_string(event.get_physical_keycode_with_modifiers())` where `event` is the `InputEventKey`.
 * @returns int
 */
  getPhysicalKeycodeWithModifiers(): int;
}
