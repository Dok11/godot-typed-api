import type { Color, Control, GodotArray, GodotDictionary, HScrollBar, PackedInt32Array, Rect2, Signal, Texture2D, VScrollBar, Variant, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * A vertical list of selectable items with one or multiple columns.
 * 
 * This control provides a vertical list of selectable items that may be in a single or in multiple columns, with each item having options for text and an icon. Tooltips are supported and may be different for every item in the list.
 * Selectable items in the list may be selected or deselected and multiple selection may be enabled. Selection with right mouse button may also be enabled to allow use of popup context menus. Items may also be "activated" by double-clicking them or by pressing `Enter`.
 * Item text only supports single-line strings. Newline characters (e.g. `\n`) in the string won't produce a newline. Text wrapping is enabled in `ICON_MODE_TOP` mode, but the column's width is adjusted to fully fit its content by default. You need to set `fixed_column_width` greater than zero to wrap the text.
 * All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.
 * 
 * **Incremental search:** Like `PopupMenu` and `Tree`, `ItemList` supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing `ProjectSettings.gui/timers/incremental_search_max_interval_msec`.
 */
export class ItemList extends Control {
/**
 * If `true`, the currently selected item can be selected again.
 */
  allowReselect: boolean;
/**
 * If `true`, right mouse button click can select items.
 */
  allowRmbSelect: boolean;
/**
 * If `true`, allows navigating the `ItemList` with letter keys through incremental search.
 */
  allowSearch: boolean;
/**
 * If `true`, the control will automatically resize the height to fit its content.
 */
  autoHeight: boolean;
/**
 * If `true`, the control will automatically resize the width to fit its content.
 */
  autoWidth: boolean;
  clipContents: boolean;
/**
 * The width all columns will be adjusted to.
 * A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.
 */
  fixedColumnWidth: int;
/**
 * The size all icons will be adjusted to.
 * If either X or Y component is not greater than zero, icon size won't be affected.
 */
  fixedIconSize: Vector2i;
  focusMode: int;
/**
 * The icon position, whether above or to the left of the text. See the `IconMode` constants.
 */
  iconMode: int;
/**
 * The scale of icon applied after `fixed_icon_size` and transposing takes effect.
 */
  iconScale: float;
/**
 * The number of items currently in the list.
 */
  itemCount: int;
/**
 * Maximum columns the list will have.
 * If greater than zero, the content will be split among the specified columns.
 * A value of zero means unlimited columns, i.e. all items will be put in the same row.
 */
  maxColumns: int;
/**
 * Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.
 * 
 * **Note:** This property takes effect only when `icon_mode` is `ICON_MODE_TOP`. To make the text wrap, `fixed_column_width` should be greater than zero.
 */
  maxTextLines: int;
/**
 * Whether all columns will have the same width.
 * If `true`, the width is equal to the largest column width of all columns.
 */
  sameColumnWidth: boolean;
/**
 * Allows single or multiple item selection. See the `SelectMode` constants.
 */
  selectMode: int;
/**
 * Sets the clipping behavior when the text exceeds an item's bounding rectangle. See `TextServer.OverrunBehavior` for a description of all modes.
 */
  textOverrunBehavior: int;
/**
 * If `true`, the control will automatically move items into a new row to fit its content. See also `HFlowContainer` for this behavior.
 * If `false`, the control will add a horizontal scrollbar to make all items visible.
 */
  wraparoundItems: boolean;
/**
 * Adds an item to the item list with no text, only an icon. Returns the index of an added item.
 * @param icon Texture2D
 * @param selectable boolean (optional, default: true)
 * @returns int
 */
  addIconItem(icon: Texture2D, selectable?: boolean): int;
/**
 * Adds an item to the item list with specified text. Returns the index of an added item.
 * Specify an `icon`, or use `null` as the `icon` for a list item with no icon.
 * If `selectable` is `true`, the list item will be selectable.
 * @param text string
 * @param icon Texture2D (optional, default: null)
 * @param selectable boolean (optional, default: true)
 * @returns int
 */
  addItem(text: string, icon?: Texture2D, selectable?: boolean): int;
/**
 * Removes all items from the list.
 */
  clear(): void;
/**
 * Ensures the item associated with the specified index is not selected.
 * @param idx int
 */
  deselect(idx: int): void;
/**
 * Ensures there are no items selected.
 */
  deselectAll(): void;
/**
 * Ensure current selection is visible, adjusting the scroll position as necessary.
 */
  ensureCurrentIsVisible(): void;
/**
 * Forces an update to the list size based on its items. This happens automatically whenever size of the items, or other relevant settings like `auto_height`, change. The method can be used to trigger the update ahead of next drawing pass.
 */
  forceUpdateListSize(): void;
/**
 * Returns the horizontal scrollbar.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns HScrollBar
 */
  getHScrollBar(): HScrollBar;
/**
 * Returns the item index at the given `position`.
 * When there is no item at that point, -1 will be returned if `exact` is `true`, and the closest item index will be returned otherwise.
 * 
 * **Note:** The returned value is unreliable if called right after modifying the `ItemList`, before it redraws in the next frame.
 * @param position Vector2
 * @param exact boolean (optional, default: false)
 * @returns int
 */
  getItemAtPosition(position: Vector2, exact?: boolean): int;
/**
 * Returns item's auto translate mode.
 * @param idx int
 * @returns int
 */
  getItemAutoTranslateMode(idx: int): int;
/**
 * Returns the custom background color of the item specified by `idx` index.
 * @param idx int
 * @returns Color
 */
  getItemCustomBgColor(idx: int): Color;
/**
 * Returns the custom foreground color of the item specified by `idx` index.
 * @param idx int
 * @returns Color
 */
  getItemCustomFgColor(idx: int): Color;
/**
 * Returns the icon associated with the specified index.
 * @param idx int
 * @returns Texture2D
 */
  getItemIcon(idx: int): Texture2D;
/**
 * Returns a `Color` modulating item's icon at the specified index.
 * @param idx int
 * @returns Color
 */
  getItemIconModulate(idx: int): Color;
/**
 * Returns the region of item's icon used. The whole icon will be used if the region has no area.
 * @param idx int
 * @returns Rect2
 */
  getItemIconRegion(idx: int): Rect2;
/**
 * Returns item's text language code.
 * @param idx int
 * @returns string
 */
  getItemLanguage(idx: int): string;
/**
 * Returns the metadata value of the specified index.
 * @param idx int
 * @returns Variant
 */
  getItemMetadata(idx: int): Variant;
/**
 * Returns the position and size of the item with the specified index, in the coordinate system of the `ItemList` node. If `expand` is `true` the last column expands to fill the rest of the row.
 * 
 * **Note:** The returned value is unreliable if called right after modifying the `ItemList`, before it redraws in the next frame.
 * @param idx int
 * @param expand boolean (optional, default: true)
 * @returns Rect2
 */
  getItemRect(idx: int, expand?: boolean): Rect2;
/**
 * Returns the text associated with the specified index.
 * @param idx int
 * @returns string
 */
  getItemText(idx: int): string;
/**
 * Returns item's text base writing direction.
 * @param idx int
 * @returns int
 */
  getItemTextDirection(idx: int): int;
/**
 * Returns the tooltip hint associated with the specified index.
 * @param idx int
 * @returns string
 */
  getItemTooltip(idx: int): string;
/**
 * Returns an array with the indexes of the selected items.
 * @returns PackedInt32Array
 */
  getSelectedItems(): PackedInt32Array;
/**
 * Returns the vertical scrollbar.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns VScrollBar
 */
  getVScrollBar(): VScrollBar;
/**
 * Returns `true` if one or more items are selected.
 * @returns boolean
 */
  isAnythingSelected(): boolean;
/**
 * Returns `true` if the item at the specified index is disabled.
 * @param idx int
 * @returns boolean
 */
  isItemDisabled(idx: int): boolean;
/**
 * Returns `true` if the item icon will be drawn transposed, i.e. the X and Y axes are swapped.
 * @param idx int
 * @returns boolean
 */
  isItemIconTransposed(idx: int): boolean;
/**
 * Returns `true` if the item at the specified index is selectable.
 * @param idx int
 * @returns boolean
 */
  isItemSelectable(idx: int): boolean;
/**
 * Returns `true` if the tooltip is enabled for specified item index.
 * @param idx int
 * @returns boolean
 */
  isItemTooltipEnabled(idx: int): boolean;
/**
 * Returns `true` if the item at the specified index is currently selected.
 * @param idx int
 * @returns boolean
 */
  isSelected(idx: int): boolean;
/**
 * Moves item from index `from_idx` to `to_idx`.
 * @param fromIdx int
 * @param toIdx int
 */
  moveItem(fromIdx: int, toIdx: int): void;
/**
 * Removes the item specified by `idx` index from the list.
 * @param idx int
 */
  removeItem(idx: int): void;
/**
 * Select the item at the specified index.
 * 
 * **Note:** This method does not trigger the item selection signal.
 * @param idx int
 * @param single boolean (optional, default: true)
 */
  select(idx: int, single?: boolean): void;
/**
 * Sets the auto translate mode of the item associated with the specified index.
 * Items use `Node.AUTO_TRANSLATE_MODE_INHERIT` by default, which uses the same auto translate mode as the `ItemList` itself.
 * @param idx int
 * @param mode int
 */
  setItemAutoTranslateMode(idx: int, mode: int): void;
/**
 * Sets the background color of the item specified by `idx` index to the specified `Color`.
 * @param idx int
 * @param customBgColor Color
 */
  setItemCustomBgColor(idx: int, customBgColor: Color): void;
/**
 * Sets the foreground color of the item specified by `idx` index to the specified `Color`.
 * @param idx int
 * @param customFgColor Color
 */
  setItemCustomFgColor(idx: int, customFgColor: Color): void;
/**
 * Disables (or enables) the item at the specified index.
 * Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing `Enter`).
 * @param idx int
 * @param disabled boolean
 */
  setItemDisabled(idx: int, disabled: boolean): void;
/**
 * Sets (or replaces) the icon's `Texture2D` associated with the specified index.
 * @param idx int
 * @param icon Texture2D
 */
  setItemIcon(idx: int, icon: Texture2D): void;
/**
 * Sets a modulating `Color` of the item associated with the specified index.
 * @param idx int
 * @param modulate Color
 */
  setItemIconModulate(idx: int, modulate: Color): void;
/**
 * Sets the region of item's icon used. The whole icon will be used if the region has no area.
 * @param idx int
 * @param rect Rect2
 */
  setItemIconRegion(idx: int, rect: Rect2): void;
/**
 * Sets whether the item icon will be drawn transposed.
 * @param idx int
 * @param transposed boolean
 */
  setItemIconTransposed(idx: int, transposed: boolean): void;
/**
 * Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 * @param idx int
 * @param language string
 */
  setItemLanguage(idx: int, language: string): void;
/**
 * Sets a value (of any type) to be stored with the item associated with the specified index.
 * @param idx int
 * @param metadata Variant
 */
  setItemMetadata(idx: int, metadata: Variant): void;
/**
 * Allows or disallows selection of the item associated with the specified index.
 * @param idx int
 * @param selectable boolean
 */
  setItemSelectable(idx: int, selectable: boolean): void;
/**
 * Sets text of the item associated with the specified index.
 * @param idx int
 * @param text string
 */
  setItemText(idx: int, text: string): void;
/**
 * Sets item's text base writing direction.
 * @param idx int
 * @param direction int
 */
  setItemTextDirection(idx: int, direction: int): void;
/**
 * Sets the tooltip hint for the item associated with the specified index.
 * @param idx int
 * @param tooltip string
 */
  setItemTooltip(idx: int, tooltip: string): void;
/**
 * Sets whether the tooltip hint is enabled for specified item index.
 * @param idx int
 * @param enable boolean
 */
  setItemTooltipEnabled(idx: int, enable: boolean): void;
/**
 * Sorts items in the list by their text.
 */
  sortItemsByText(): void;
/**
 * Emitted when any mouse click is issued within the rect of the list but on empty space.
 * `at_position` is the click position in this control's local coordinate system.
 */
  emptyClicked: Signal<[atPosition: Vector2, mouseButtonIndex: int]>;
/**
 * Emitted when specified list item is activated via double-clicking or by pressing `Enter`.
 */
  itemActivated: Signal<[index: int]>;
/**
 * Emitted when specified list item has been clicked with any mouse button.
 * `at_position` is the click position in this control's local coordinate system.
 */
  itemClicked: Signal<[index: int, atPosition: Vector2, mouseButtonIndex: int]>;
/**
 * Emitted when specified item has been selected. Only applicable in single selection mode.
 * `allow_reselect` must be enabled to reselect an item.
 */
  itemSelected: Signal<[index: int]>;
/**
 * Emitted when a multiple selection is altered on a list allowing multiple selection.
 */
  multiSelected: Signal<[index: int, selected: boolean]>;
/**
 * Icon is drawn above the text.
 */
  static readonly ICON_MODE_TOP: int;
/**
 * Icon is drawn to the left of the text.
 */
  static readonly ICON_MODE_LEFT: int;
/**
 * Only allow selecting a single item.
 */
  static readonly SELECT_SINGLE: int;
/**
 * Allows selecting multiple items by holding `Ctrl` or `Shift`.
 */
  static readonly SELECT_MULTI: int;
/**
 * Allows selecting multiple items by toggling them on and off.
 */
  static readonly SELECT_TOGGLE: int;
}
