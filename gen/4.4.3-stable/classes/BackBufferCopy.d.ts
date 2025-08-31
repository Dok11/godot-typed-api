import type { GodotArray, GodotDictionary, Node2D, Rect2, float, int } from "../index.d.ts";
/**
 * A node that copies a region of the screen to a buffer for access in shader code.
 * 
 * Node for back-buffering the currently-displayed screen. The region defined in the `BackBufferCopy` node is buffered with the content of the screen it covers, or the entire screen according to the `copy_mode`. It can be accessed in shader scripts using the screen texture (i.e. a uniform sampler with `hint_screen_texture`).
 * 
 * **Note:** Since this node inherits from `Node2D` (and not `Control`), anchors and margins won't apply to child `Control`-derived nodes. This can be problematic when resizing the window. To avoid this, add `Control`-derived nodes as *siblings* to the `BackBufferCopy` node instead of adding them as children.
 */
export class BackBufferCopy extends Node2D {
/**
 * Buffer mode. See `CopyMode` constants.
 */
  copyMode: int;
/**
 * The area covered by the `BackBufferCopy`. Only used if `copy_mode` is `COPY_MODE_RECT`.
 */
  rect: Rect2;
/**
 * Disables the buffering mode. This means the `BackBufferCopy` node will directly use the portion of screen it covers.
 */
  static readonly COPY_MODE_DISABLED: int;
/**
 * `BackBufferCopy` buffers a rectangular region.
 */
  static readonly COPY_MODE_RECT: int;
/**
 * `BackBufferCopy` buffers the entire screen.
 */
  static readonly COPY_MODE_VIEWPORT: int;
}
