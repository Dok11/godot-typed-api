import type { GodotArray, GodotDictionary, Signal, Window, float, int } from "../index.d.ts";
/**
 * Base class for contextual windows and panels with fixed position.
 * 
 * `Popup` is a base class for contextual windows and panels with fixed position. It's a modal by default (see `Window.popup_window`) and provides methods for implementing custom popup behavior.
 */
export class Popup extends Window {
  borderless: boolean;
  popupWindow: boolean;
  transient: boolean;
  unresizable: boolean;
  visible: boolean;
  wrapControls: boolean;
/**
 * Emitted when the popup is hidden.
 */
  popupHide: Signal<[]>;
}
