import type { GodotArray, GodotDictionary, Node, NodePath, Rect2, Signal, Texture2D, Vector2i, float, int } from "../index.d.ts";
/**
 * Application status indicator (aka notification area icon).
 * 
 * **Note:** Status indicator is implemented on macOS and Windows.
 */
export class StatusIndicator extends Node {
/**
 * Status indicator icon.
 */
  icon: Texture2D;
/**
 * Status indicator native popup menu. If this is set, the `pressed` signal is not emitted.
 * 
 * **Note:** Native popup is only supported if `NativeMenu` supports `NativeMenu.FEATURE_POPUP_MENU` feature.
 */
  menu: NodePath;
/**
 * Status indicator tooltip.
 */
  tooltip: string;
/**
 * If `true`, the status indicator is visible.
 */
  visible: boolean;
/**
 * Returns the status indicator rectangle in screen coordinates. If this status indicator is not visible, returns an empty `Rect2`.
 * @returns Rect2
 */
  getRect(): Rect2;
/**
 * Emitted when the status indicator is pressed.
 */
  pressed: Signal<[mouseButton: int, mousePosition: Vector2i]>;
}
