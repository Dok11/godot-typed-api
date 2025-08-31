import type { AABB, GodotArray, GodotDictionary, Signal, VisualInstance3D, float, int } from "../index.d.ts";
/**
 * A box-shaped region of 3D space that detects whether it is visible on screen.
 * 
 * `VisibleOnScreenNotifier3D` represents a box-shaped region of 3D space. When any part of this region becomes visible on screen or in a `Camera3D`'s view, it will emit a `screen_entered` signal, and likewise it will emit a `screen_exited` signal when no part of it remains visible.
 * If you want a node to be enabled automatically when this region is visible on screen, use `VisibleOnScreenEnabler3D`.
 * 
 * **Note:** `VisibleOnScreenNotifier3D` uses an approximate heuristic that doesn't take walls and other occlusion into account, unless occlusion culling is used. It also won't function unless `Node3D.visible` is set to `true`.
 */
export class VisibleOnScreenNotifier3D extends VisualInstance3D {
/**
 * The `VisibleOnScreenNotifier3D`'s bounding box.
 */
  aabb: AABB;
/**
 * Returns `true` if the bounding box is on the screen.
 * 
 * **Note:** It takes one frame for the `VisibleOnScreenNotifier3D`'s visibility to be assessed once added to the scene tree, so this method will always return `false` right after it is instantiated.
 * @returns boolean
 */
  isOnScreen(): boolean;
/**
 * Emitted when the `VisibleOnScreenNotifier3D` enters the screen.
 */
  screenEntered: Signal<[]>;
/**
 * Emitted when the `VisibleOnScreenNotifier3D` exits the screen.
 */
  screenExited: Signal<[]>;
}
