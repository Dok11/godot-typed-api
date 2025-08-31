import type { Callable, Color, Font, GodotArray, GodotDictionary, Object, Rect2, StringName, Texture2D, Tree, Variant, float, int } from "../index.d.ts";
/**
 * An internal control for a single item inside `Tree`.
 * 
 * A single item of a `Tree` control. It can contain other `TreeItem`s as children, which allows it to create a hierarchy. It can also contain text and buttons. `TreeItem` is not a `Node`, it is internal to the `Tree`.
 * To create a `TreeItem`, use `Tree.create_item` or `TreeItem.create_child`. To remove a `TreeItem`, use `Object.free`.
 * 
 * **Note:** The ID values used for buttons are 32-bit, unlike [int] which is always 64-bit. They go from `-2147483648` to `2147483647`.
 */
export class TreeItem extends Object {
/**
 * If `true`, the TreeItem is collapsed.
 */
  collapsed: boolean;
/**
 * The custom minimum height.
 */
  customMinimumHeight: int;
/**
 * If `true`, folding is disabled for this TreeItem.
 */
  disableFolding: boolean;
/**
 * If `true`, the `TreeItem` is visible (default).
 * Note that if a `TreeItem` is set to not be visible, none of its children will be visible either.
 */
  visible: boolean;
/**
 * Adds a button with `Texture2D` `button` to the end of the cell at column `column`. The `id` is used to identify the button in the according `Tree.button_clicked` signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling `get_button_count` immediately before this method. Optionally, the button can be `disabled` and have a `tooltip_text`.
 * @param column int
 * @param button Texture2D
 * @param id int (optional, default: -1)
 * @param disabled boolean (optional, default: false)
 * @param tooltipText string (optional, default: "")
 */
  addButton(column: int, button: Texture2D, id?: int, disabled?: boolean, tooltipText?: string): void;
/**
 * Adds a previously unparented `TreeItem` as a direct child of this one. The `child` item must not be a part of any `Tree` or parented to any `TreeItem`. See also `remove_child`.
 * @param child TreeItem
 */
  addChild(child: TreeItem): void;
/**
 * Calls the `method` on the actual TreeItem and its children recursively. Pass parameters as a comma separated list.
 * @param method StringName
 */
  callRecursive(method: StringName): void;
/**
 * Removes all buttons from all columns of this item.
 */
  clearButtons(): void;
/**
 * Resets the background color for the given column to default.
 * @param column int
 */
  clearCustomBgColor(column: int): void;
/**
 * Resets the color for the given column to default.
 * @param column int
 */
  clearCustomColor(column: int): void;
/**
 * Creates an item and adds it as a child.
 * The new item will be inserted as position `index` (the default value `-1` means the last position), or it will be the last child if `index` is higher than the child count.
 * @param index int (optional, default: -1)
 * @returns TreeItem
 */
  createChild(index?: int): TreeItem;
/**
 * Deselects the given column.
 * @param column int
 */
  deselect(column: int): void;
/**
 * Removes the button at index `button_index` in column `column`.
 * @param column int
 * @param buttonIndex int
 */
  eraseButton(column: int, buttonIndex: int): void;
/**
 * Returns the column's auto translate mode.
 * @param column int
 * @returns int
 */
  getAutoTranslateMode(column: int): int;
/**
 * Returns the text autowrap mode in the given `column`. By default it is `TextServer.AUTOWRAP_OFF`.
 * @param column int
 * @returns int
 */
  getAutowrapMode(column: int): int;
/**
 * Returns the `Texture2D` of the button at index `button_index` in column `column`.
 * @param column int
 * @param buttonIndex int
 * @returns Texture2D
 */
  getButton(column: int, buttonIndex: int): Texture2D;
/**
 * Returns the button index if there is a button with ID `id` in column `column`, otherwise returns -1.
 * @param column int
 * @param id int
 * @returns int
 */
  getButtonById(column: int, id: int): int;
/**
 * Returns the color of the button with ID `id` in column `column`. If the specified button does not exist, returns `Color.BLACK`.
 * @param column int
 * @param id int
 * @returns Color
 */
  getButtonColor(column: int, id: int): Color;
/**
 * Returns the number of buttons in column `column`.
 * @param column int
 * @returns int
 */
  getButtonCount(column: int): int;
/**
 * Returns the ID for the button at index `button_index` in column `column`.
 * @param column int
 * @param buttonIndex int
 * @returns int
 */
  getButtonId(column: int, buttonIndex: int): int;
/**
 * Returns the tooltip text for the button at index `button_index` in column `column`.
 * @param column int
 * @param buttonIndex int
 * @returns string
 */
  getButtonTooltipText(column: int, buttonIndex: int): string;
/**
 * Returns the column's cell mode.
 * @param column int
 * @returns int
 */
  getCellMode(column: int): int;
/**
 * Returns a child item by its `index` (see `get_child_count`). This method is often used for iterating all children of an item.
 * Negative indices access the children from the last one.
 * @param index int
 * @returns TreeItem
 */
  getChild(index: int): TreeItem;
/**
 * Returns the number of child items.
 * @returns int
 */
  getChildCount(): int;
/**
 * Returns an array of references to the item's children.
 * @returns TreeItem[]
 */
  getChildren(): TreeItem[];
/**
 * Returns the custom background color of column `column`.
 * @param column int
 * @returns Color
 */
  getCustomBgColor(column: int): Color;
/**
 * Returns the custom color of column `column`.
 * @param column int
 * @returns Color
 */
  getCustomColor(column: int): Color;
/**
 * Returns the custom callback of column `column`.
 * @param column int
 * @returns Callable
 */
  getCustomDrawCallback(column: int): Callable;
/**
 * Returns custom font used to draw text in the column `column`.
 * @param column int
 * @returns Font
 */
  getCustomFont(column: int): Font;
/**
 * Returns custom font size used to draw text in the column `column`.
 * @param column int
 * @returns int
 */
  getCustomFontSize(column: int): int;
/**
 * Returns `true` if `expand_right` is set.
 * @param column int
 * @returns boolean
 */
  getExpandRight(column: int): boolean;
/**
 * Returns the TreeItem's first child.
 * @returns TreeItem
 */
  getFirstChild(): TreeItem;
/**
 * Returns the given column's icon `Texture2D`. Error if no icon is set.
 * @param column int
 * @returns Texture2D
 */
  getIcon(column: int): Texture2D;
/**
 * Returns the maximum allowed width of the icon in the given `column`.
 * @param column int
 * @returns int
 */
  getIconMaxWidth(column: int): int;
/**
 * Returns the `Color` modulating the column's icon.
 * @param column int
 * @returns Color
 */
  getIconModulate(column: int): Color;
/**
 * Returns the given column's icon overlay `Texture2D`.
 * @param column int
 * @returns Texture2D
 */
  getIconOverlay(column: int): Texture2D;
/**
 * Returns the icon `Texture2D` region as `Rect2`.
 * @param column int
 * @returns Rect2
 */
  getIconRegion(column: int): Rect2;
/**
 * Returns the node's order in the tree. For example, if called on the first child item the position is `0`.
 * @returns int
 */
  getIndex(): int;
/**
 * Returns item's text language code.
 * @param column int
 * @returns string
 */
  getLanguage(column: int): string;
/**
 * Returns the metadata value that was set for the given column using `set_metadata`.
 * @param column int
 * @returns Variant
 */
  getMetadata(column: int): Variant;
/**
 * Returns the next sibling TreeItem in the tree or a `null` object if there is none.
 * @returns TreeItem
 */
  getNext(): TreeItem;
/**
 * Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 * If `wrap` is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.
 * @param wrap boolean (optional, default: false)
 * @returns TreeItem
 */
  getNextInTree(wrap?: boolean): TreeItem;
/**
 * Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 * If `wrap` is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.
 * @param wrap boolean (optional, default: false)
 * @returns TreeItem
 */
  getNextVisible(wrap?: boolean): TreeItem;
/**
 * Returns the parent TreeItem or a `null` object if there is none.
 * @returns TreeItem
 */
  getParent(): TreeItem;
/**
 * Returns the previous sibling TreeItem in the tree or a `null` object if there is none.
 * @returns TreeItem
 */
  getPrev(): TreeItem;
/**
 * Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 * If `wrap` is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.
 * @param wrap boolean (optional, default: false)
 * @returns TreeItem
 */
  getPrevInTree(wrap?: boolean): TreeItem;
/**
 * Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 * If `wrap` is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.
 * @param wrap boolean (optional, default: false)
 * @returns TreeItem
 */
  getPrevVisible(wrap?: boolean): TreeItem;
/**
 * Returns the value of a `CELL_MODE_RANGE` column.
 * @param column int
 * @returns float
 */
  getRange(column: int): float;
/**
 * Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr".
 * @param column int
 * @returns GodotDictionary<any>
 */
  getRangeConfig(column: int): GodotDictionary<any>;
/**
 * Returns the BiDi algorithm override set for this cell.
 * @param column int
 * @returns int
 */
  getStructuredTextBidiOverride(column: int): int;
/**
 * Returns the additional BiDi options set for this cell.
 * @param column int
 * @returns GodotArray<any>
 */
  getStructuredTextBidiOverrideOptions(column: int): GodotArray<any>;
/**
 * Gets the suffix string shown after the column value.
 * @param column int
 * @returns string
 */
  getSuffix(column: int): string;
/**
 * Returns the given column's text.
 * @param column int
 * @returns string
 */
  getText(column: int): string;
/**
 * Returns the given column's text alignment.
 * @param column int
 * @returns int
 */
  getTextAlignment(column: int): int;
/**
 * Returns item's text base writing direction.
 * @param column int
 * @returns int
 */
  getTextDirection(column: int): int;
/**
 * Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given `column`. By default it is `TextServer.OVERRUN_TRIM_ELLIPSIS`.
 * @param column int
 * @returns int
 */
  getTextOverrunBehavior(column: int): int;
/**
 * Returns the given column's tooltip text.
 * @param column int
 * @returns string
 */
  getTooltipText(column: int): string;
/**
 * Returns the `Tree` that owns this TreeItem.
 * @returns Tree
 */
  getTree(): Tree;
/**
 * Returns `true` if this `TreeItem`, or any of its descendants, is collapsed.
 * If `only_visible` is `true` it ignores non-visible `TreeItem`s.
 * @param onlyVisible boolean (optional, default: false)
 * @returns boolean
 */
  isAnyCollapsed(onlyVisible?: boolean): boolean;
/**
 * Returns `true` if the button at index `button_index` for the given `column` is disabled.
 * @param column int
 * @param buttonIndex int
 * @returns boolean
 */
  isButtonDisabled(column: int, buttonIndex: int): boolean;
/**
 * Returns `true` if the given `column` is checked.
 * @param column int
 * @returns boolean
 */
  isChecked(column: int): boolean;
/**
 * Returns `true` if the cell was made into a button with `set_custom_as_button`.
 * @param column int
 * @returns boolean
 */
  isCustomSetAsButton(column: int): boolean;
/**
 * Returns `true` if the given `column` is editable.
 * @param column int
 * @returns boolean
 */
  isEditable(column: int): boolean;
/**
 * Returns `true` if the given `column` is multiline editable.
 * @param column int
 * @returns boolean
 */
  isEditMultiline(column: int): boolean;
/**
 * Returns `true` if the given `column` is indeterminate.
 * @param column int
 * @returns boolean
 */
  isIndeterminate(column: int): boolean;
/**
 * Returns `true` if the given `column` is selectable.
 * @param column int
 * @returns boolean
 */
  isSelectable(column: int): boolean;
/**
 * Returns `true` if the given `column` is selected.
 * @param column int
 * @returns boolean
 */
  isSelected(column: int): boolean;
/**
 * Returns `true` if `visible` is `true` and all its ancestors are also visible.
 * @returns boolean
 */
  isVisibleInTree(): boolean;
/**
 * Moves this TreeItem right after the given `item`.
 * 
 * **Note:** You can't move to the root or move the root.
 * @param item TreeItem
 */
  moveAfter(item: TreeItem): void;
/**
 * Moves this TreeItem right before the given `item`.
 * 
 * **Note:** You can't move to the root or move the root.
 * @param item TreeItem
 */
  moveBefore(item: TreeItem): void;
/**
 * Propagates this item's checked status to its children and parents for the given `column`. It is possible to process the items affected by this method call by connecting to `Tree.check_propagated_to_item`. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If `emit_signal` is `false`, then `Tree.check_propagated_to_item` will not be emitted.
 * @param column int
 * @param emitSignal boolean (optional, default: true)
 */
  propagateCheck(column: int, emitSignal?: boolean): void;
/**
 * Removes the given child `TreeItem` and all its children from the `Tree`. Note that it doesn't free the item from memory, so it can be reused later (see `add_child`). To completely remove a `TreeItem` use `Object.free`.
 * 
 * **Note:** If you want to move a child from one `Tree` to another, then instead of removing and adding it manually you can use `move_before` or `move_after`.
 * @param child TreeItem
 */
  removeChild(child: TreeItem): void;
/**
 * Selects the given `column`.
 * @param column int
 */
  select(column: int): void;
/**
 * Sets the given column's auto translate mode to `mode`.
 * All columns use `Node.AUTO_TRANSLATE_MODE_INHERIT` by default, which uses the same auto translate mode as the `Tree` itself.
 * @param column int
 * @param mode int
 */
  setAutoTranslateMode(column: int, mode: int): void;
/**
 * Sets the autowrap mode in the given `column`. If set to something other than `TextServer.AUTOWRAP_OFF`, the text gets wrapped inside the cell's bounding rectangle.
 * @param column int
 * @param autowrapMode int
 */
  setAutowrapMode(column: int, autowrapMode: int): void;
/**
 * Sets the given column's button `Texture2D` at index `button_index` to `button`.
 * @param column int
 * @param buttonIndex int
 * @param button Texture2D
 */
  setButton(column: int, buttonIndex: int, button: Texture2D): void;
/**
 * Sets the given column's button color at index `button_index` to `color`.
 * @param column int
 * @param buttonIndex int
 * @param color Color
 */
  setButtonColor(column: int, buttonIndex: int, color: Color): void;
/**
 * If `true`, disables the button at index `button_index` in the given `column`.
 * @param column int
 * @param buttonIndex int
 * @param disabled boolean
 */
  setButtonDisabled(column: int, buttonIndex: int, disabled: boolean): void;
/**
 * Sets the tooltip text for the button at index `button_index` in the given `column`.
 * @param column int
 * @param buttonIndex int
 * @param tooltip string
 */
  setButtonTooltipText(column: int, buttonIndex: int, tooltip: string): void;
/**
 * Sets the given column's cell mode to `mode`. This determines how the cell is displayed and edited. See `TreeCellMode` constants for details.
 * @param column int
 * @param mode int
 */
  setCellMode(column: int, mode: int): void;
/**
 * If `checked` is `true`, the given `column` is checked. Clears column's indeterminate status.
 * @param column int
 * @param checked boolean
 */
  setChecked(column: int, checked: boolean): void;
/**
 * Collapses or uncollapses this `TreeItem` and all the descendants of this item.
 * @param enable boolean
 */
  setCollapsedRecursive(enable: boolean): void;
/**
 * Makes a cell with `CELL_MODE_CUSTOM` display as a non-flat button with a `StyleBox`.
 * @param column int
 * @param enable boolean
 */
  setCustomAsButton(column: int, enable: boolean): void;
/**
 * Sets the given column's custom background color and whether to just use it as an outline.
 * @param column int
 * @param color Color
 * @param justOutline boolean (optional, default: false)
 */
  setCustomBgColor(column: int, color: Color, justOutline?: boolean): void;
/**
 * Sets the given column's custom color.
 * @param column int
 * @param color Color
 */
  setCustomColor(column: int, color: Color): void;
/**
 * Sets the given column's custom draw callback to the `callback` method on `object`.
 * The method named `callback` should accept two arguments: the `TreeItem` that is drawn and its position and size as a `Rect2`.
 * @param column int
 * @param object Object
 * @param callback StringName
 * @deprecated Use `TreeItem.set_custom_draw_callback` instead.
 */
  setCustomDraw(column: int, object: Object, callback: StringName): void;
/**
 * Sets the given column's custom draw callback. Use an empty `Callable` ([code skip-lint]Callable()[/code]) to clear the custom callback. The cell has to be in `CELL_MODE_CUSTOM` to use this feature.
 * The `callback` should accept two arguments: the `TreeItem` that is drawn and its position and size as a `Rect2`.
 * @param column int
 * @param callback Callable
 */
  setCustomDrawCallback(column: int, callback: Callable): void;
/**
 * Sets custom font used to draw text in the given `column`.
 * @param column int
 * @param font Font
 */
  setCustomFont(column: int, font: Font): void;
/**
 * Sets custom font size used to draw text in the given `column`.
 * @param column int
 * @param fontSize int
 */
  setCustomFontSize(column: int, fontSize: int): void;
/**
 * If `enabled` is `true`, the given `column` is editable.
 * @param column int
 * @param enabled boolean
 */
  setEditable(column: int, enabled: boolean): void;
/**
 * If `multiline` is `true`, the given `column` is multiline editable.
 * 
 * **Note:** This option only affects the type of control (`LineEdit` or `TextEdit`) that appears when editing the column. You can set multiline values with `set_text` even if the column is not multiline editable.
 * @param column int
 * @param multiline boolean
 */
  setEditMultiline(column: int, multiline: boolean): void;
/**
 * If `enable` is `true`, the given `column` is expanded to the right.
 * @param column int
 * @param enable boolean
 */
  setExpandRight(column: int, enable: boolean): void;
/**
 * Sets the given cell's icon `Texture2D`. If the cell is in `CELL_MODE_ICON` mode, the icon is displayed in the center of the cell. Otherwise, the icon is displayed before the cell's text. `CELL_MODE_RANGE` does not display an icon.
 * @param column int
 * @param texture Texture2D
 */
  setIcon(column: int, texture: Texture2D): void;
/**
 * Sets the maximum allowed width of the icon in the given `column`. This limit is applied on top of the default size of the icon and on top of [theme_item Tree.icon_max_width]. The height is adjusted according to the icon's ratio.
 * @param column int
 * @param width int
 */
  setIconMaxWidth(column: int, width: int): void;
/**
 * Modulates the given column's icon with `modulate`.
 * @param column int
 * @param modulate Color
 */
  setIconModulate(column: int, modulate: Color): void;
/**
 * Sets the given cell's icon overlay `Texture2D`. The cell has to be in `CELL_MODE_ICON` mode, and icon has to be set. Overlay is drawn on top of icon, in the bottom left corner.
 * @param column int
 * @param texture Texture2D
 */
  setIconOverlay(column: int, texture: Texture2D): void;
/**
 * Sets the given column's icon's texture region.
 * @param column int
 * @param region Rect2
 */
  setIconRegion(column: int, region: Rect2): void;
/**
 * If `indeterminate` is `true`, the given `column` is marked indeterminate.
 * 
 * **Note:** If set `true` from `false`, then column is cleared of checked status.
 * @param column int
 * @param indeterminate boolean
 */
  setIndeterminate(column: int, indeterminate: boolean): void;
/**
 * Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 * @param column int
 * @param language string
 */
  setLanguage(column: int, language: string): void;
/**
 * Sets the metadata value for the given column, which can be retrieved later using `get_metadata`. This can be used, for example, to store a reference to the original data.
 * @param column int
 * @param meta Variant
 */
  setMetadata(column: int, meta: Variant): void;
/**
 * Sets the value of a `CELL_MODE_RANGE` column.
 * @param column int
 * @param value float
 */
  setRange(column: int, value: float): void;
/**
 * Sets the range of accepted values for a column. The column must be in the `CELL_MODE_RANGE` mode.
 * If `expr` is `true`, the edit mode slider will use an exponential scale as with `Range.exp_edit`.
 * @param column int
 * @param min float
 * @param max float
 * @param step float
 * @param expr boolean (optional, default: false)
 */
  setRangeConfig(column: int, min: float, max: float, step: float, expr?: boolean): void;
/**
 * If `selectable` is `true`, the given `column` is selectable.
 * @param column int
 * @param selectable boolean
 */
  setSelectable(column: int, selectable: boolean): void;
/**
 * Set BiDi algorithm override for the structured text. Has effect for cells that display text.
 * @param column int
 * @param parser int
 */
  setStructuredTextBidiOverride(column: int, parser: int): void;
/**
 * Set additional options for BiDi override. Has effect for cells that display text.
 * @param column int
 * @param args GodotArray<any>
 */
  setStructuredTextBidiOverrideOptions(column: int, args: GodotArray<any>): void;
/**
 * Sets a string to be shown after a column's value (for example, a unit abbreviation).
 * @param column int
 * @param text string
 */
  setSuffix(column: int, text: string): void;
/**
 * Sets the given column's text value.
 * @param column int
 * @param text string
 */
  setText(column: int, text: string): void;
/**
 * Sets the given column's text alignment. See `HorizontalAlignment` for possible values.
 * @param column int
 * @param textAlignment int
 */
  setTextAlignment(column: int, textAlignment: int): void;
/**
 * Sets item's text base writing direction.
 * @param column int
 * @param direction int
 */
  setTextDirection(column: int, direction: int): void;
/**
 * Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given `column`.
 * @param column int
 * @param overrunBehavior int
 */
  setTextOverrunBehavior(column: int, overrunBehavior: int): void;
/**
 * Sets the given column's tooltip text.
 * @param column int
 * @param tooltip string
 */
  setTooltipText(column: int, tooltip: string): void;
/**
 * Uncollapses all `TreeItem`s necessary to reveal this `TreeItem`, i.e. all ancestor `TreeItem`s.
 */
  uncollapseTree(): void;
/**
 * Cell shows a string label, optionally with an icon. When editable, the text can be edited using a `LineEdit`, or a `TextEdit` popup if `set_edit_multiline` is used.
 */
  static readonly CELL_MODE_STRING: int;
/**
 * Cell shows a checkbox, optionally with text and an icon. The checkbox can be pressed, released, or indeterminate (via `set_indeterminate`). The checkbox can't be clicked unless the cell is editable.
 */
  static readonly CELL_MODE_CHECK: int;
/**
 * Cell shows a numeric range. When editable, it can be edited using a range slider. Use `set_range` to set the value and `set_range_config` to configure the range.
 * This cell can also be used in a text dropdown mode when you assign a text with `set_text`. Separate options with a comma, e.g. `"Option1,Option2,Option3"`.
 */
  static readonly CELL_MODE_RANGE: int;
/**
 * Cell shows an icon. It can't be edited nor display text. The icon is always centered within the cell.
 */
  static readonly CELL_MODE_ICON: int;
/**
 * Cell shows as a clickable button. It will display an arrow similar to `OptionButton`, but doesn't feature a dropdown (for that you can use `CELL_MODE_RANGE`). Clicking the button emits the `Tree.item_edited` signal. The button is flat by default, you can use `set_custom_as_button` to display it with a `StyleBox`.
 * This mode also supports custom drawing using `set_custom_draw_callback`.
 */
  static readonly CELL_MODE_CUSTOM: int;
}
