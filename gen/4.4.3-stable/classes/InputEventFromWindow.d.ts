import type { GodotArray, GodotDictionary, InputEvent, float, int } from "../index.d.ts";
/**
 * Abstract base class for `Viewport`-based input events.
 * 
 * InputEventFromWindow represents events specifically received by windows. This includes mouse events, keyboard events in focused windows or touch screen actions.
 */
export class InputEventFromWindow extends InputEvent {
/**
 * The ID of a `Window` that received this event.
 */
  windowId: int;
}
