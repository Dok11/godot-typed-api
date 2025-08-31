import type { BitMap, GodotArray, GodotDictionary, Node2D, Shape2D, Signal, Texture2D, float, int } from "../index.d.ts";
/**
 * Button for touch screen devices for gameplay use.
 * 
 * TouchScreenButton allows you to create on-screen buttons for touch devices. It's intended for gameplay use, such as a unit you have to touch to move. Unlike `Button`, TouchScreenButton supports multitouch out of the box. Several TouchScreenButtons can be pressed at the same time with touch input.
 * This node inherits from `Node2D`. Unlike with `Control` nodes, you cannot set anchors on it. If you want to create menus or user interfaces, you may want to use `Button` nodes instead. To make button nodes react to touch events, you can enable `ProjectSettings.input_devices/pointing/emulate_mouse_from_touch` in the Project Settings.
 * You can configure TouchScreenButton to be visible only on touch devices, helping you develop your game both for desktop and mobile devices.
 */
export class TouchScreenButton extends Node2D {
/**
 * The button's action. Actions can be handled with `InputEventAction`.
 */
  action: string;
/**
 * The button's bitmask.
 */
  bitmask: BitMap;
/**
 * If `true`, the `pressed` and `released` signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.
 * 
 * **Note:** This is a "pass-by" (not "bypass") press mode.
 */
  passbyPress: boolean;
/**
 * The button's shape.
 */
  shape: Shape2D;
/**
 * If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect.
 */
  shapeCentered: boolean;
/**
 * If `true`, the button's shape is visible in the editor.
 */
  shapeVisible: boolean;
/**
 * The button's texture for the normal state.
 */
  textureNormal: Texture2D;
/**
 * The button's texture for the pressed state.
 */
  texturePressed: Texture2D;
/**
 * The button's visibility mode. See `VisibilityMode` for possible values.
 */
  visibilityMode: int;
/**
 * Returns `true` if this button is currently pressed.
 * @returns boolean
 */
  isPressed(): boolean;
/**
 * Emitted when the button is pressed (down).
 */
  pressed: Signal<[]>;
/**
 * Emitted when the button is released (up).
 */
  released: Signal<[]>;
/**
 * Always visible.
 */
  static readonly VISIBILITY_ALWAYS: int;
/**
 * Visible on touch screens only.
 */
  static readonly VISIBILITY_TOUCHSCREEN_ONLY: int;
}
