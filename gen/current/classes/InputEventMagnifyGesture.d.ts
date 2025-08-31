import type { GodotArray, GodotDictionary, InputEventGesture, float, int } from "../index.d.ts";
/**
 * Represents a magnifying touch gesture.
 * 
 * Stores the factor of a magnifying touch gesture. This is usually performed when the user pinches the touch screen and used for zooming in/out.
 * 
 * **Note:** On Android, this requires the `ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures` project setting to be enabled.
 */
export class InputEventMagnifyGesture extends InputEventGesture {
/**
 * The amount (or delta) of the event. This value is closer to `1.0` the slower the gesture is performed.
 */
  factor: float;
}
