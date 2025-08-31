import type { GodotArray, GodotDictionary, InputEventGesture, Vector2, float, int } from "../index.d.ts";
/**
 * Represents a panning touch gesture.
 * 
 * Stores information about pan gestures. A pan gesture is performed when the user swipes the touch screen with two fingers. It's typically used for panning/scrolling.
 * 
 * **Note:** On Android, this requires the `ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures` project setting to be enabled.
 */
export class InputEventPanGesture extends InputEventGesture {
/**
 * Panning amount since last pan event.
 */
  delta: Vector2;
}
