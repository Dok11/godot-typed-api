import type { GodotArray, GodotDictionary, InputEvent, StringName, float, int } from "../index.d.ts";
/**
 * An input event type for actions.
 * 
 * Contains a generic action which can be targeted from several types of inputs. Actions and their events can be set in the **Input Map** tab in **Project > Project Settings**, or with the `InputMap` class.
 * 
 * **Note:** Unlike the other `InputEvent` subclasses which map to unique physical events, this virtual one is not emitted by the engine. This class is useful to emit actions manually with `Input.parse_input_event`, which are then received in `Node._input`. To check if a physical event matches an action from the Input Map, use `InputEvent.is_action` and `InputEvent.is_action_pressed`.
 */
export class InputEventAction extends InputEvent {
/**
 * The action's name. Actions are accessed via this `String`.
 */
  action: StringName;
/**
 * The real event index in action this event corresponds to (from events defined for this action in the `InputMap`). If `-1`, a unique ID will be used and actions pressed with this ID will need to be released with another `InputEventAction`.
 */
  eventIndex: int;
/**
 * If `true`, the action's state is pressed. If `false`, the action's state is released.
 */
  pressed: boolean;
/**
 * The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is `false`. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed.
 */
  strength: float;
}
