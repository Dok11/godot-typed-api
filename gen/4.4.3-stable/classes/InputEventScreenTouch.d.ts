import type { GodotArray, GodotDictionary, InputEventFromWindow, Vector2, float, int } from "../index.d.ts";
/**
 * Represents a screen touch event.
 * 
 * Stores information about multi-touch press/release input events. Supports touch press, touch release and `index` for multi-touch count and order.
 */
export class InputEventScreenTouch extends InputEventFromWindow {
/**
 * If `true`, the touch event has been canceled.
 */
  canceled: boolean;
/**
 * If `true`, the touch's state is a double tap.
 */
  doubleTap: boolean;
/**
 * The touch index in the case of a multi-touch event. One index = one finger.
 */
  index: int;
/**
 * The touch position in the viewport the node is in, using the coordinate system of this viewport.
 */
  position: Vector2;
/**
 * If `true`, the touch's state is pressed. If `false`, the touch's state is released.
 */
  pressed: boolean;
}
