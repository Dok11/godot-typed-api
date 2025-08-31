import type { GodotArray, GodotDictionary, InputEventWithModifiers, Vector2, float, int } from "../index.d.ts";
/**
 * Abstract base class for touch gestures.
 * 
 * InputEventGestures are sent when a user performs a supported gesture on a touch screen. Gestures can't be emulated using mouse, because they typically require multi-touch.
 */
export class InputEventGesture extends InputEventWithModifiers {
/**
 * The local gesture position relative to the `Viewport`. If used in `Control._gui_input`, the position is relative to the current `Control` that received this gesture.
 */
  position: Vector2;
}
