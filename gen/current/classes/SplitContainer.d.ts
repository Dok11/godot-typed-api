import type { Container, Control, GodotArray, GodotDictionary, Signal, float, int } from "../index.d.ts";
/**
 * A container that splits two child controls horizontally or vertically and provides a grabber for adjusting the split ratio.
 * 
 * A container that accepts only two child controls, then arranges them horizontally or vertically and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.
 */
export class SplitContainer extends Container {
/**
 * If `true`, the dragger will be disabled and the children will be sized as if the `split_offset` was `0`.
 */
  collapsed: boolean;
/**
 * Highlights the drag area `Rect2` so you can see where it is during development. The drag area is gold if `dragging_enabled` is `true`, and red if `false`.
 */
  dragAreaHighlightInEditor: boolean;
/**
 * Reduces the size of the drag area and split bar [theme_item split_bar_background] at the beginning of the container.
 */
  dragAreaMarginBegin: int;
/**
 * Reduces the size of the drag area and split bar [theme_item split_bar_background] at the end of the container.
 */
  dragAreaMarginEnd: int;
/**
 * Shifts the drag area in the axis of the container to prevent the drag area from overlapping the `ScrollBar` or other selectable `Control` of a child node.
 */
  dragAreaOffset: int;
/**
 * Determines the dragger's visibility. See `DraggerVisibility` for details. This property does not determine whether dragging is enabled or not. Use `dragging_enabled` for that.
 */
  draggerVisibility: int;
/**
 * Enables or disables split dragging.
 */
  draggingEnabled: boolean;
/**
 * The initial offset of the splitting between the two `Control`s, with `0` being at the end of the first `Control`.
 */
  splitOffset: int;
/**
 * If `true`, the `SplitContainer` will arrange its children vertically, rather than horizontally.
 * Can't be changed when using `HSplitContainer` and `VSplitContainer`.
 */
  vertical: boolean;
/**
 * Clamps the `split_offset` value to not go outside the currently possible minimal and maximum values.
 */
  clampSplitOffset(): void;
/**
 * Returns the drag area `Control`. For example, you can move a pre-configured button into the drag area `Control` so that it rides along with the split bar. Try setting the `Button` anchors to `center` prior to the `reparent()` call.
 * 
 * 				```gdscript
 * 
 * 				$BarnacleButton.reparent($SplitContainer.get_drag_area_control())
 * 				
 * 
 * ```
 * 
 * **Note:** The drag area `Control` is drawn over the `SplitContainer`'s children, so `CanvasItem` draw objects called from the `Control` and children added to the `Control` will also appear over the `SplitContainer`'s children. Try setting `Control.mouse_filter` of custom children to `Control.MOUSE_FILTER_IGNORE` to prevent blocking the mouse from dragging if desired.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash.
 * @returns Control
 */
  getDragAreaControl(): Control;
/**
 * Emitted when the user ends dragging.
 */
  dragEnded: Signal<[]>;
/**
 * Emitted when the dragger is dragged by user.
 */
  dragged: Signal<[offset: int]>;
/**
 * Emitted when the user starts dragging.
 */
  dragStarted: Signal<[]>;
/**
 * The split dragger icon is always visible when [theme_item autohide] is `false`, otherwise visible only when the cursor hovers it.
 * The size of the grabber icon determines the minimum [theme_item separation].
 * The dragger icon is automatically hidden if the length of the grabber icon is longer than the split bar.
 */
  static readonly DRAGGER_VISIBLE: int;
/**
 * The split dragger icon is never visible regardless of the value of [theme_item autohide].
 * The size of the grabber icon determines the minimum [theme_item separation].
 */
  static readonly DRAGGER_HIDDEN: int;
/**
 * The split dragger icon is not visible, and the split bar is collapsed to zero thickness.
 */
  static readonly DRAGGER_HIDDEN_COLLAPSED: int;
}
