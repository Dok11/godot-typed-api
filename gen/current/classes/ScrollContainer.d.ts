import type { Container, Control, GodotArray, GodotDictionary, HScrollBar, Signal, VScrollBar, float, int } from "../index.d.ts";
/**
 * A container used to provide scrollbars to a child control when needed.
 * 
 * A container used to provide a child control with scrollbars when needed. Scrollbars will automatically be drawn at the right (for vertical) or bottom (for horizontal) and will enable dragging to move the viewable Control (and its children) within the ScrollContainer. Scrollbars will also automatically resize the grabber based on the `Control.custom_minimum_size` of the Control relative to the ScrollContainer.
 */
export class ScrollContainer extends Container {
  clipContents: boolean;
/**
 * If `true`, [theme_item focus] is drawn when the ScrollContainer or one of its descendant nodes is focused.
 */
  drawFocusBorder: boolean;
/**
 * If `true`, the ScrollContainer will automatically scroll to focused children (including indirect children) to make sure they are fully visible.
 */
  followFocus: boolean;
/**
 * Controls whether horizontal scrollbar can be used and when it should be visible. See `ScrollMode` for options.
 */
  horizontalScrollMode: int;
/**
 * Deadzone for touch scrolling. Lower deadzone makes the scrolling more sensitive.
 */
  scrollDeadzone: int;
/**
 * The current horizontal scroll value.
 * 
 * **Note:** If you are setting this value in the `Node._ready` function or earlier, it needs to be wrapped with `Object.set_deferred`, since scroll bar's `Range.max_value` is not initialized yet.
 * 
 * 			```gdscript
 * 
 * 			func _ready():
 * 			    set_deferred("scroll_horizontal", 600)
 * 			
 * 
 * ```
 */
  scrollHorizontal: int;
/**
 * Overrides the `ScrollBar.custom_step` used when clicking the internal scroll bar's horizontal increment and decrement buttons or when using arrow keys when the `ScrollBar` is focused.
 */
  scrollHorizontalCustomStep: float;
/**
 * The current vertical scroll value.
 * 
 * **Note:** Setting it early needs to be deferred, just like in `scroll_horizontal`.
 * 
 * 			```gdscript
 * 
 * 			func _ready():
 * 			    set_deferred("scroll_vertical", 600)
 * 			
 * 
 * ```
 */
  scrollVertical: int;
/**
 * Overrides the `ScrollBar.custom_step` used when clicking the internal scroll bar's vertical increment and decrement buttons or when using arrow keys when the `ScrollBar` is focused.
 */
  scrollVerticalCustomStep: float;
/**
 * Controls whether vertical scrollbar can be used and when it should be visible. See `ScrollMode` for options.
 */
  verticalScrollMode: int;
/**
 * Ensures the given `control` is visible (must be a direct or indirect child of the ScrollContainer). Used by `follow_focus`.
 * 
 * **Note:** This will not work on a node that was just added during the same frame. If you want to scroll to a newly added child, you must wait until the next frame using `SceneTree.process_frame`:
 * 
 * 				```gdscript
 * 
 * 				add_child(child_node)
 * 				await get_tree().process_frame
 * 				ensure_control_visible(child_node)
 * 				
 * 
 * ```
 * @param control Control
 */
  ensureControlVisible(control: Control): void;
/**
 * Returns the horizontal scrollbar `HScrollBar` of this `ScrollContainer`.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use `horizontal_scroll_mode`.
 * @returns HScrollBar
 */
  getHScrollBar(): HScrollBar;
/**
 * Returns the vertical scrollbar `VScrollBar` of this `ScrollContainer`.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use `vertical_scroll_mode`.
 * @returns VScrollBar
 */
  getVScrollBar(): VScrollBar;
/**
 * Emitted when scrolling stops when dragging the scrollable area *with a touch event*. This signal is *not* emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 * 
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when `ProjectSettings.input_devices/pointing/emulate_touch_from_mouse` is enabled.
 */
  scrollEnded: Signal<[]>;
/**
 * Emitted when scrolling starts when dragging the scrollable area w*ith a touch event*. This signal is *not* emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 * 
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when `ProjectSettings.input_devices/pointing/emulate_touch_from_mouse` is enabled.
 */
  scrollStarted: Signal<[]>;
/**
 * Scrolling disabled, scrollbar will be invisible.
 */
  static readonly SCROLL_MODE_DISABLED: int;
/**
 * Scrolling enabled, scrollbar will be visible only if necessary, i.e. container's content is bigger than the container.
 */
  static readonly SCROLL_MODE_AUTO: int;
/**
 * Scrolling enabled, scrollbar will be always visible.
 */
  static readonly SCROLL_MODE_SHOW_ALWAYS: int;
/**
 * Scrolling enabled, scrollbar will be hidden.
 */
  static readonly SCROLL_MODE_SHOW_NEVER: int;
/**
 * Combines `SCROLL_MODE_AUTO` and `SCROLL_MODE_SHOW_ALWAYS`. The scrollbar is only visible if necessary, but the content size is adjusted as if it was always visible. It's useful for ensuring that content size stays the same regardless if the scrollbar is visible.
 */
  static readonly SCROLL_MODE_RESERVE: int;
}
