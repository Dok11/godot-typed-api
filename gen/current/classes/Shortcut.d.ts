import type { GodotArray, GodotDictionary, InputEvent, Resource, float, int } from "../index.d.ts";
/**
 * A shortcut for binding input.
 * 
 * Shortcuts are commonly used for interacting with a `Control` element from an `InputEvent` (also known as hotkeys).
 * One shortcut can contain multiple `InputEvent`s, allowing the possibility of triggering one action with multiple different inputs.
 */
export class Shortcut extends Resource {
/**
 * The shortcut's `InputEvent` array.
 * Generally the `InputEvent` used is an `InputEventKey`, though it can be any `InputEvent`, including an `InputEventAction`.
 */
  events: GodotArray<any>;
/**
 * Returns the shortcut's first valid `InputEvent` as a `String`.
 * @returns string
 */
  getAsText(): string;
/**
 * Returns whether `events` contains an `InputEvent` which is valid.
 * @returns boolean
 */
  hasValidEvent(): boolean;
/**
 * Returns whether any `InputEvent` in `events` equals `event`. This uses `InputEvent.is_match` to compare events.
 * @param event InputEvent
 * @returns boolean
 */
  matchesEvent(event: InputEvent): boolean;
}
