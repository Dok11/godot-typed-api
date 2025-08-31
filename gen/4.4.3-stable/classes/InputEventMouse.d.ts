import type { GodotArray, GodotDictionary, InputEventWithModifiers, Vector2, float, int } from "../index.d.ts";
/**
 * Base input event type for mouse events.
 * 
 * Stores general information about mouse events.
 */
export class InputEventMouse extends InputEventWithModifiers {
/**
 * The mouse button mask identifier, one of or a bitwise combination of the `MouseButton` button masks.
 */
  buttonMask: int;
/**
 * When received in `Node._input` or `Node._unhandled_input`, returns the mouse's position in the root `Viewport` using the coordinate system of the root `Viewport`.
 * When received in `Control._gui_input`, returns the mouse's position in the `CanvasLayer` that the `Control` is in using the coordinate system of the `CanvasLayer`.
 */
  globalPosition: Vector2;
/**
 * When received in `Node._input` or `Node._unhandled_input`, returns the mouse's position in the `Viewport` this `Node` is in using the coordinate system of this `Viewport`.
 * When received in `Control._gui_input`, returns the mouse's position in the `Control` using the local coordinate system of the `Control`.
 */
  position: Vector2;
}
