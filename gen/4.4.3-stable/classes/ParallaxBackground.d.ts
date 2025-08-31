import type { CanvasLayer, GodotArray, GodotDictionary, Vector2, float, int } from "../index.d.ts";
/**
 * A node used to create a parallax scrolling background.
 * 
 * A ParallaxBackground uses one or more `ParallaxLayer` child nodes to create a parallax effect. Each `ParallaxLayer` can move at a different speed using `ParallaxLayer.motion_offset`. This creates an illusion of depth in a 2D game. If not used with a `Camera2D`, you must manually calculate the `scroll_offset`.
 * 
 * **Note:** Each `ParallaxBackground` is drawn on one specific `Viewport` and cannot be shared between multiple `Viewport`s, see `CanvasLayer.custom_viewport`. When using multiple `Viewport`s, for example in a split-screen game, you need create an individual `ParallaxBackground` for each `Viewport` you want it to be drawn on.
 */
export class ParallaxBackground extends CanvasLayer {
  layer: int;
/**
 * The base position offset for all `ParallaxLayer` children.
 */
  scrollBaseOffset: Vector2;
/**
 * The base motion scale for all `ParallaxLayer` children.
 */
  scrollBaseScale: Vector2;
/**
 * If `true`, elements in `ParallaxLayer` child aren't affected by the zoom level of the camera.
 */
  scrollIgnoreCameraZoom: boolean;
/**
 * Top-left limits for scrolling to begin. If the camera is outside of this limit, the background will stop scrolling. Must be lower than `scroll_limit_end` to work.
 */
  scrollLimitBegin: Vector2;
/**
 * Bottom-right limits for scrolling to end. If the camera is outside of this limit, the background will stop scrolling. Must be higher than `scroll_limit_begin` to work.
 */
  scrollLimitEnd: Vector2;
/**
 * The ParallaxBackground's scroll value. Calculated automatically when using a `Camera2D`, but can be used to manually manage scrolling when no camera is present.
 */
  scrollOffset: Vector2;
}
