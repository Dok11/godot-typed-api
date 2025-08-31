import type { CanvasItem, GodotArray, GodotDictionary, RID, Rect2, Resource, Vector2, float, int } from "../index.d.ts";
/**
 * Abstract base class for defining stylized boxes for UI elements.
 * 
 * `StyleBox` is an abstract base class for drawing stylized boxes for UI elements. It is used for panels, buttons, `LineEdit` backgrounds, `Tree` backgrounds, etc. and also for testing a transparency mask for pointer signals. If mask test fails on a `StyleBox` assigned as mask to a control, clicks and motion signals will go through it to the one below.
 * 
 * **Note:** For control nodes that have *Theme Properties*, the `focus` `StyleBox` is displayed over the `normal`, `hover` or `pressed` `StyleBox`. This makes the `focus` `StyleBox` more reusable across different nodes.
 */
export class StyleBox extends Resource {
/**
 * The bottom margin for the contents of this style box. Increasing this value reduces the space available to the contents from the bottom.
 * If this value is negative, it is ignored and a child-specific margin is used instead. For example, for `StyleBoxFlat`, the border thickness (if any) is used instead.
 * It is up to the code using this style box to decide what these contents are: for example, a `Button` respects this content margin for the textual contents of the button.
 * `get_margin` should be used to fetch this value as consumer instead of reading these properties directly. This is because it correctly respects negative values and the fallback mentioned above.
 */
  contentMarginBottom: float;
/**
 * The left margin for the contents of this style box. Increasing this value reduces the space available to the contents from the left.
 * Refer to `content_margin_bottom` for extra considerations.
 */
  contentMarginLeft: float;
/**
 * The right margin for the contents of this style box. Increasing this value reduces the space available to the contents from the right.
 * Refer to `content_margin_bottom` for extra considerations.
 */
  contentMarginRight: float;
/**
 * The top margin for the contents of this style box. Increasing this value reduces the space available to the contents from the top.
 * Refer to `content_margin_bottom` for extra considerations.
 */
  contentMarginTop: float;
/**
 * Draws this stylebox using a canvas item identified by the given `RID`.
 * The `RID` value can either be the result of `CanvasItem.get_canvas_item` called on an existing `CanvasItem`-derived node, or directly from creating a canvas item in the `RenderingServer` with `RenderingServer.canvas_item_create`.
 * @param canvasItem RID
 * @param rect Rect2
 */
  draw(canvasItem: RID, rect: Rect2): void;
/**
 * @param toCanvasItem RID
 * @param rect Rect2
 */
  private draw(toCanvasItem: RID, rect: Rect2): void;
/**
 * Returns the default margin of the specified `Side`.
 * @param margin int
 * @returns float
 */
  getContentMargin(margin: int): float;
/**
 * Returns the `CanvasItem` that handles its `CanvasItem.NOTIFICATION_DRAW` or `CanvasItem._draw` callback at this moment.
 * @returns CanvasItem
 */
  getCurrentItemDrawn(): CanvasItem;
/**
 * @param rect Rect2
 * @returns Rect2
 */
  private getDrawRect(rect: Rect2): Rect2;
/**
 * Returns the content margin offset for the specified `Side`.
 * Positive values reduce size inwards, unlike `Control`'s margin values.
 * @param margin int
 * @returns float
 */
  getMargin(margin: int): float;
/**
 * Returns the minimum size that this stylebox can be shrunk to.
 * @returns Vector2
 */
  getMinimumSize(): Vector2;
/**
 * Virtual method to be implemented by the user. Returns a custom minimum size that the stylebox must respect when drawing. By default `get_minimum_size` only takes content margins into account. This method can be overridden to add another size restriction. A combination of the default behavior and the output of this method will be used, to account for both sizes.
 * @returns Vector2
 */
  private getMinimumSize(): Vector2;
/**
 * Returns the "offset" of a stylebox. This helper function returns a value equivalent to `Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))`.
 * @returns Vector2
 */
  getOffset(): Vector2;
/**
 * Sets the default value of the specified `Side` to `offset` pixels.
 * @param margin int
 * @param offset float
 */
  setContentMargin(margin: int, offset: float): void;
/**
 * Sets the default margin to `offset` pixels for all sides.
 * @param offset float
 */
  setContentMarginAll(offset: float): void;
/**
 * Test a position in a rectangle, return whether it passes the mask test.
 * @param point Vector2
 * @param rect Rect2
 * @returns boolean
 */
  testMask(point: Vector2, rect: Rect2): boolean;
/**
 * @param point Vector2
 * @param rect Rect2
 * @returns boolean
 */
  private testMask(point: Vector2, rect: Rect2): boolean;
}
