import type { GodotArray, GodotDictionary, Node2D, Rect2, Signal, float, int } from "../index.d.ts";
/**
 * A rectangular region of 2D space that detects whether it is visible on screen.
 * 
 * `VisibleOnScreenNotifier2D` represents a rectangular region of 2D space. When any part of this region becomes visible on screen or in a viewport, it will emit a `screen_entered` signal, and likewise it will emit a `screen_exited` signal when no part of it remains visible.
 * If you want a node to be enabled automatically when this region is visible on screen, use `VisibleOnScreenEnabler2D`.
 * 
 * **Note:** `VisibleOnScreenNotifier2D` uses the render culling code to determine whether it's visible on screen, so it won't function unless `CanvasItem.visible` is set to `true`.
 */
export class VisibleOnScreenNotifier2D extends Node2D {
/**
 * The VisibleOnScreenNotifier2D's bounding rectangle.
 */
  rect: Rect2;
/**
 * If `true`, the bounding rectangle is on the screen.
 * 
 * **Note:** It takes one frame for the `VisibleOnScreenNotifier2D`'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.
 * @returns boolean
 */
  isOnScreen(): boolean;
/**
 * Emitted when the VisibleOnScreenNotifier2D enters the screen.
 */
  screenEntered: Signal<[]>;
/**
 * Emitted when the VisibleOnScreenNotifier2D exits the screen.
 */
  screenExited: Signal<[]>;
}
