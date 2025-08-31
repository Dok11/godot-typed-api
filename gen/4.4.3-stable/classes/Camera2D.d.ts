import type { GodotArray, GodotDictionary, Node, Node2D, Vector2, float, int } from "../index.d.ts";
/**
 * Camera node for 2D scenes.
 * 
 * Camera node for 2D scenes. It forces the screen (current layer) to scroll following this node. This makes it easier (and faster) to program scrollable scenes than manually changing the position of `CanvasItem`-based nodes.
 * Cameras register themselves in the nearest `Viewport` node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport.
 * This node is intended to be a simple helper to get things going quickly, but more functionality may be desired to change how the camera works. To make your own custom camera node, inherit it from `Node2D` and change the transform of the canvas by setting `Viewport.canvas_transform` in `Viewport` (you can obtain the current `Viewport` by using `Node.get_viewport`).
 * Note that the `Camera2D` node's `position` doesn't represent the actual position of the screen, which may differ due to applied smoothing or limits. You can use `get_screen_center_position` to get the real position.
 */
export class Camera2D extends Node2D {
/**
 * The Camera2D's anchor point. See `AnchorMode` constants.
 */
  anchorMode: int;
/**
 * The custom `Viewport` node attached to the `Camera2D`. If `null` or not a `Viewport`, uses the default viewport instead.
 */
  customViewport: Node;
/**
 * Bottom margin needed to drag the camera. A value of `1` makes the camera move only when reaching the bottom edge of the screen.
 */
  dragBottomMargin: float;
/**
 * If `true`, the camera only moves when reaching the horizontal (left and right) drag margins. If `false`, the camera moves horizontally regardless of margins.
 */
  dragHorizontalEnabled: boolean;
/**
 * The relative horizontal drag offset of the camera between the right (`-1`) and left (`1`) drag margins.
 * 
 * **Note:** Used to set the initial horizontal drag offset; determine the current offset; or force the current offset. It's not automatically updated when `drag_horizontal_enabled` is `true` or the drag margins are changed.
 */
  dragHorizontalOffset: float;
/**
 * Left margin needed to drag the camera. A value of `1` makes the camera move only when reaching the left edge of the screen.
 */
  dragLeftMargin: float;
/**
 * Right margin needed to drag the camera. A value of `1` makes the camera move only when reaching the right edge of the screen.
 */
  dragRightMargin: float;
/**
 * Top margin needed to drag the camera. A value of `1` makes the camera move only when reaching the top edge of the screen.
 */
  dragTopMargin: float;
/**
 * If `true`, the camera only moves when reaching the vertical (top and bottom) drag margins. If `false`, the camera moves vertically regardless of the drag margins.
 */
  dragVerticalEnabled: boolean;
/**
 * The relative vertical drag offset of the camera between the bottom (`-1`) and top (`1`) drag margins.
 * 
 * **Note:** Used to set the initial vertical drag offset; determine the current offset; or force the current offset. It's not automatically updated when `drag_vertical_enabled` is `true` or the drag margins are changed.
 */
  dragVerticalOffset: float;
/**
 * If `true`, draws the camera's drag margin rectangle in the editor.
 */
  editorDrawDragMargin: boolean;
/**
 * If `true`, draws the camera's limits rectangle in the editor.
 */
  editorDrawLimits: boolean;
/**
 * If `true`, draws the camera's screen rectangle in the editor.
 */
  editorDrawScreen: boolean;
/**
 * Controls whether the camera can be active or not. If `true`, the `Camera2D` will become the main camera when it enters the scene tree and there is no active camera currently (see `Viewport.get_camera_2d`).
 * When the camera is currently active and `enabled` is set to `false`, the next enabled `Camera2D` in the scene tree will become active.
 */
  enabled: boolean;
/**
 * If `true`, the camera's rendered view is not affected by its `Node2D.rotation` and `Node2D.global_rotation`.
 */
  ignoreRotation: boolean;
/**
 * Bottom scroll limit in pixels. The camera stops moving when reaching this value, but `offset` can push the view past the limit.
 */
  limitBottom: int;
/**
 * Left scroll limit in pixels. The camera stops moving when reaching this value, but `offset` can push the view past the limit.
 */
  limitLeft: int;
/**
 * Right scroll limit in pixels. The camera stops moving when reaching this value, but `offset` can push the view past the limit.
 */
  limitRight: int;
/**
 * If `true`, the camera smoothly stops when reaches its limits.
 * This property has no effect if `position_smoothing_enabled` is `false`.
 * 
 * **Note:** To immediately update the camera's position to be within limits without smoothing, even with this setting enabled, invoke `reset_smoothing`.
 */
  limitSmoothed: boolean;
/**
 * Top scroll limit in pixels. The camera stops moving when reaching this value, but `offset` can push the view past the limit.
 */
  limitTop: int;
/**
 * The camera's relative offset. Useful for looking around or camera shake animations. The offsetted camera can go past the limits defined in `limit_top`, `limit_bottom`, `limit_left` and `limit_right`.
 */
  offset: Vector2;
/**
 * If `true`, the camera's view smoothly moves towards its target position at `position_smoothing_speed`.
 */
  positionSmoothingEnabled: boolean;
/**
 * Speed in pixels per second of the camera's smoothing effect when `position_smoothing_enabled` is `true`.
 */
  positionSmoothingSpeed: float;
/**
 * The camera's process callback. See `Camera2DProcessCallback`.
 */
  processCallback: int;
/**
 * If `true`, the camera's view smoothly rotates, via asymptotic smoothing, to align with its target rotation at `rotation_smoothing_speed`.
 * 
 * **Note:** This property has no effect if `ignore_rotation` is `true`.
 */
  rotationSmoothingEnabled: boolean;
/**
 * The angular, asymptotic speed of the camera's rotation smoothing effect when `rotation_smoothing_enabled` is `true`.
 */
  rotationSmoothingSpeed: float;
/**
 * The camera's zoom. A zoom of `Vector(2, 2)` doubles the size seen in the viewport. A zoom of `Vector(0.5, 0.5)` halves the size seen in the viewport.
 * 
 * **Note:** `FontFile.oversampling` does *not* take `Camera2D` zoom into account. This means that zooming in/out will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated unless the font is part of a `CanvasLayer` that makes it ignore camera zoom. To ensure text remains crisp regardless of zoom, you can enable MSDF font rendering by enabling `ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field` (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, `SystemFont.multichannel_signed_distance_field` can be enabled in the inspector.
 */
  zoom: Vector2;
/**
 * Aligns the camera to the tracked node.
 */
  align(): void;
/**
 * Forces the camera to update scroll immediately.
 */
  forceUpdateScroll(): void;
/**
 * Returns the specified `Side`'s margin. See also `drag_bottom_margin`, `drag_top_margin`, `drag_left_margin`, and `drag_right_margin`.
 * @param margin int
 * @returns float
 */
  getDragMargin(margin: int): float;
/**
 * Returns the camera limit for the specified `Side`. See also `limit_bottom`, `limit_top`, `limit_left`, and `limit_right`.
 * @param margin int
 * @returns int
 */
  getLimit(margin: int): int;
/**
 * Returns the center of the screen from this camera's point of view, in global coordinates.
 * 
 * **Note:** The exact targeted position of the camera may be different. See `get_target_position`.
 * @returns Vector2
 */
  getScreenCenterPosition(): Vector2;
/**
 * Returns this camera's target position, in global coordinates.
 * 
 * **Note:** The returned value is not the same as `Node2D.global_position`, as it is affected by the drag properties. It is also not the same as the current position if `position_smoothing_enabled` is `true` (see `get_screen_center_position`).
 * @returns Vector2
 */
  getTargetPosition(): Vector2;
/**
 * Returns `true` if this `Camera2D` is the active camera (see `Viewport.get_camera_2d`).
 * @returns boolean
 */
  isCurrent(): boolean;
/**
 * Forces this `Camera2D` to become the current active one. `enabled` must be `true`.
 */
  makeCurrent(): void;
/**
 * Sets the camera's position immediately to its current smoothing destination.
 * This method has no effect if `position_smoothing_enabled` is `false`.
 */
  resetSmoothing(): void;
/**
 * Sets the specified `Side`'s margin. See also `drag_bottom_margin`, `drag_top_margin`, `drag_left_margin`, and `drag_right_margin`.
 * @param margin int
 * @param dragMargin float
 */
  setDragMargin(margin: int, dragMargin: float): void;
/**
 * Sets the camera limit for the specified `Side`. See also `limit_bottom`, `limit_top`, `limit_left`, and `limit_right`.
 * @param margin int
 * @param limit int
 */
  setLimit(margin: int, limit: int): void;
/**
 * The camera's position is fixed so that the top-left corner is always at the origin.
 */
  static readonly ANCHOR_MODE_FIXED_TOP_LEFT: int;
/**
 * The camera's position takes into account vertical/horizontal offsets and the screen size.
 */
  static readonly ANCHOR_MODE_DRAG_CENTER: int;
/**
 * The camera updates during physics frames (see `Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`).
 */
  static readonly CAMERA2D_PROCESS_PHYSICS: int;
/**
 * The camera updates during process frames (see `Node.NOTIFICATION_INTERNAL_PROCESS`).
 */
  static readonly CAMERA2D_PROCESS_IDLE: int;
}
