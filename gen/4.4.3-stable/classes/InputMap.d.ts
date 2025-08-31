import type { GodotArray, GodotDictionary, InputEvent, Object, StringName, float, int } from "../index.d.ts";
/**
 * A singleton that manages all `InputEventAction`s.
 * 
 * Manages all `InputEventAction` which can be created/modified from the project settings menu **Project > Project Settings > Input Map** or in code with `add_action` and `action_add_event`. See `Node._input`.
 */
export class InputMap extends Object {
/**
 * Adds an `InputEvent` to an action. This `InputEvent` will trigger the action.
 * @param action StringName
 * @param event InputEvent
 */
  actionAddEvent(action: StringName, event: InputEvent): void;
/**
 * Removes an `InputEvent` from an action.
 * @param action StringName
 * @param event InputEvent
 */
  actionEraseEvent(action: StringName, event: InputEvent): void;
/**
 * Removes all events from an action.
 * @param action StringName
 */
  actionEraseEvents(action: StringName): void;
/**
 * Returns a deadzone value for the action.
 * @param action StringName
 * @returns float
 */
  actionGetDeadzone(action: StringName): float;
/**
 * Returns an array of `InputEvent`s associated with a given action.
 * 
 * **Note:** When used in the editor (e.g. a tool script or `EditorPlugin`), this method will return events for the editor action. If you want to access your project's input binds from the editor, read the `input/*` settings from `ProjectSettings`.
 * @param action StringName
 * @returns InputEvent[]
 */
  actionGetEvents(action: StringName): InputEvent[];
/**
 * Returns `true` if the action has the given `InputEvent` associated with it.
 * @param action StringName
 * @param event InputEvent
 * @returns boolean
 */
  actionHasEvent(action: StringName, event: InputEvent): boolean;
/**
 * Sets a deadzone value for the action.
 * @param action StringName
 * @param deadzone float
 */
  actionSetDeadzone(action: StringName, deadzone: float): void;
/**
 * Adds an empty action to the `InputMap` with a configurable `deadzone`.
 * An `InputEvent` can then be added to this action with `action_add_event`.
 * @param action StringName
 * @param deadzone float (optional, default: 0.2)
 */
  addAction(action: StringName, deadzone?: float): void;
/**
 * Removes an action from the `InputMap`.
 * @param action StringName
 */
  eraseAction(action: StringName): void;
/**
 * Returns `true` if the given event is part of an existing action. This method ignores keyboard modifiers if the given `InputEvent` is not pressed (for proper release detection). See `action_has_event` if you don't want this behavior.
 * If `exact_match` is `false`, it ignores additional input modifiers for `InputEventKey` and `InputEventMouseButton` events, and the direction for `InputEventJoypadMotion` events.
 * @param event InputEvent
 * @param action StringName
 * @param exactMatch boolean (optional, default: false)
 * @returns boolean
 */
  eventIsAction(event: InputEvent, action: StringName, exactMatch?: boolean): boolean;
/**
 * Returns an array of all actions in the `InputMap`.
 * @returns StringName[]
 */
  getActions(): StringName[];
/**
 * Returns `true` if the `InputMap` has a registered action with the given name.
 * @param action StringName
 * @returns boolean
 */
  hasAction(action: StringName): boolean;
/**
 * Clears all `InputEventAction` in the `InputMap` and load it anew from `ProjectSettings`.
 */
  loadFromProjectSettings(): void;
}
