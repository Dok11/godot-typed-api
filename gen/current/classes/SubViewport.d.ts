import type { GodotArray, GodotDictionary, Vector2i, Viewport, float, int } from "../index.d.ts";
/**
 * An interface to a game world that doesn't create a window or draw to the screen directly.
 * 
 * `SubViewport` Isolates a rectangular region of a scene to be displayed independently. This can be used, for example, to display UI in 3D space.
 * 
 * **Note:** `SubViewport` is a `Viewport` that isn't a `Window`, i.e. it doesn't draw anything by itself. To display anything, `SubViewport` must have a non-zero size and be either put inside a `SubViewportContainer` or assigned to a `ViewportTexture`.
 * 
 * **Note:** `InputEvent`s are not passed to a standalone `SubViewport` by default. To ensure `InputEvent` propagation, a `SubViewport` can be placed inside of a `SubViewportContainer`.
 */
export class SubViewport extends Viewport {
/**
 * The clear mode when the sub-viewport is used as a render target.
 * 
 * **Note:** This property is intended for 2D usage.
 */
  renderTargetClearMode: int;
/**
 * The update mode when the sub-viewport is used as a render target.
 */
  renderTargetUpdateMode: int;
/**
 * The width and height of the sub-viewport. Must be set to a value greater than or equal to 2 pixels on both dimensions. Otherwise, nothing will be displayed.
 * 
 * **Note:** If the parent node is a `SubViewportContainer` and its `SubViewportContainer.stretch` is `true`, the viewport size cannot be changed manually.
 */
  size: Vector2i;
/**
 * The 2D size override of the sub-viewport. If either the width or height is `0`, the override is disabled.
 */
  size2dOverride: Vector2i;
/**
 * If `true`, the 2D size override affects stretch as well.
 */
  size2dOverrideStretch: boolean;
/**
 * Always clear the render target before drawing.
 */
  static readonly CLEAR_MODE_ALWAYS: int;
/**
 * Never clear the render target.
 */
  static readonly CLEAR_MODE_NEVER: int;
/**
 * Clear the render target on the next frame, then switch to `CLEAR_MODE_NEVER`.
 */
  static readonly CLEAR_MODE_ONCE: int;
/**
 * Do not update the render target.
 */
  static readonly UPDATE_DISABLED: int;
/**
 * Update the render target once, then switch to `UPDATE_DISABLED`.
 */
  static readonly UPDATE_ONCE: int;
/**
 * Update the render target only when it is visible. This is the default value.
 */
  static readonly UPDATE_WHEN_VISIBLE: int;
/**
 * Update the render target only when its parent is visible.
 */
  static readonly UPDATE_WHEN_PARENT_VISIBLE: int;
/**
 * Always update the render target.
 */
  static readonly UPDATE_ALWAYS: int;
}
