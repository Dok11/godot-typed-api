import type { Control, GodotArray, GodotDictionary, Rect2, Signal, TreeItem, Vector2, float, int } from "../index.d.ts";
/**
 * A control used to show a set of internal `TreeItem`s in a hierarchical structure.
 * 
 * A control used to show a set of internal `TreeItem`s in a hierarchical structure. The tree items can be selected, expanded and collapsed. The tree can have multiple columns with custom controls like `LineEdit`s, buttons and popups. It can be useful for structured displays and interactions.
 * Trees are built via code, using `TreeItem` objects to create the structure. They have a single root, but multiple roots can be simulated with `hide_root`:
 * 
 * 		```gdscript
 * 
 * 		func _ready():
 * 		    var tree = Tree.new()
 * 		    var root = tree.create_item()
 * 		    tree.hide_root = true
 * 		    var child1 = tree.create_item(root)
 * 		    var child2 = tree.create_item(root)
 * 		    var subchild1 = tree.create_item(child1)
 * 		    subchild1.set_text(0, "Subchild1")
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		public override void _Ready()
 * 		{
 * 		    var tree = new Tree();
 * 		    TreeItem root = tree.CreateItem();
 * 		    tree.HideRoot = true;
 * 		    TreeItem child1 = tree.CreateItem(root);
 * 		    TreeItem child2 = tree.CreateItem(root);
 * 		    TreeItem subchild1 = tree.CreateItem(child1);
 * 		    subchild1.SetText(0, "Subchild1");
 * 		}
 * 		
 * 
 * ```
 * 
 * To iterate over all the `TreeItem` objects in a `Tree` object, use `TreeItem.get_next` and `TreeItem.get_first_child` after getting the root through `get_root`. You can use `Object.free` on a `TreeItem` to remove it from the `Tree`.
 * 
 * **Incremental search:** Like `ItemList` and `PopupMenu`, `Tree` supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing `ProjectSettings.gui/timers/incremental_search_max_interval_msec`.
 */
export class Tree extends Control {
/**
 * If `true`, the currently selected cell may be selected again.
 */
  allowReselect: boolean;
/**
 * If `true`, a right mouse button click can select items.
 */
  allowRmbSelect: boolean;
/**
 * If `true`, allows navigating the `Tree` with letter keys through incremental search.
 */
  allowSearch: boolean;
/**
 * If `true`, tree items with no tooltip assigned display their text as their tooltip. See also `TreeItem.get_tooltip_text` and `TreeItem.get_button_tooltip_text`.
 */
  autoTooltip: boolean;
  clipContents: boolean;
/**
 * The number of columns.
 */
  columns: int;
/**
 * If `true`, column titles are visible.
 */
  columnTitlesVisible: boolean;
/**
 * The drop mode as an OR combination of flags. See `DropModeFlags` constants. Once dropping is done, reverts to `DROP_MODE_DISABLED`. Setting this during `Control._can_drop_data` is recommended.
 * This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.
 */
  dropModeFlags: int;
/**
 * If `true`, recursive folding is enabled for this `Tree`. Holding down `Shift` while clicking the fold arrow or using `ui_right`/`ui_left` shortcuts collapses or uncollapses the `TreeItem` and all its descendants.
 */
  enableRecursiveFolding: boolean;
  focusMode: int;
/**
 * If `true`, the folding arrow is hidden.
 */
  hideFolding: boolean;
/**
 * If `true`, the tree's root is hidden.
 */
  hideRoot: boolean;
/**
 * If `true`, enables horizontal scrolling.
 */
  scrollHorizontalEnabled: boolean;
/**
 * If `true`, enables vertical scrolling.
 */
  scrollVerticalEnabled: boolean;
/**
 * Allows single or multiple selection. See the `SelectMode` constants.
 */
  selectMode: int;
/**
 * Clears the tree. This removes all items.
 */
  clear(): void;
/**
 * Creates an item in the tree and adds it as a child of `parent`, which can be either a valid `TreeItem` or `null`.
 * If `parent` is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.
 * The new item will be the `index`-th child of parent, or it will be the last child if there are not enough siblings.
 * @param parent TreeItem (optional, default: null)
 * @param index int (optional, default: -1)
 * @returns TreeItem
 */
  createItem(parent?: TreeItem, index?: int): TreeItem;
/**
 * Deselects all tree items (rows and columns). In `SELECT_MULTI` mode also removes selection cursor.
 */
  deselectAll(): void;
/**
 * Edits the selected tree item as if it was clicked.
 * Either the item must be set editable with `TreeItem.set_editable` or `force_edit` must be `true`.
 * Returns `true` if the item could be edited. Fails if no item is selected.
 * @param forceEdit boolean (optional, default: false)
 * @returns boolean
 */
  editSelected(forceEdit?: boolean): boolean;
/**
 * Makes the currently focused cell visible.
 * This will scroll the tree if necessary. In `SELECT_ROW` mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.
 * 
 * **Note:** Despite the name of this method, the focus cursor itself is only visible in `SELECT_MULTI` mode.
 */
  ensureCursorIsVisible(): void;
/**
 * Returns the button ID at `position`, or -1 if no button is there.
 * @param position Vector2
 * @returns int
 */
  getButtonIdAtPosition(position: Vector2): int;
/**
 * Returns the column index at `position`, or -1 if no item is there.
 * @param position Vector2
 * @returns int
 */
  getColumnAtPosition(position: Vector2): int;
/**
 * Returns the expand ratio assigned to the column.
 * @param column int
 * @returns int
 */
  getColumnExpandRatio(column: int): int;
/**
 * Returns the column's title.
 * @param column int
 * @returns string
 */
  getColumnTitle(column: int): string;
/**
 * Returns the column title alignment.
 * @param column int
 * @returns int
 */
  getColumnTitleAlignment(column: int): int;
/**
 * Returns column title base writing direction.
 * @param column int
 * @returns int
 */
  getColumnTitleDirection(column: int): int;
/**
 * Returns column title language code.
 * @param column int
 * @returns string
 */
  getColumnTitleLanguage(column: int): string;
/**
 * Returns the column's width in pixels.
 * @param column int
 * @returns int
 */
  getColumnWidth(column: int): int;
/**
 * Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See `TreeItem.set_cell_mode`.
 * @returns Rect2
 */
  getCustomPopupRect(): Rect2;
/**
 * Returns the drop section at `position`, or -100 if no item is there.
 * Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See `DropModeFlags` for a description of each drop section.
 * To get the item which the returned drop section is relative to, use `get_item_at_position`.
 * @param position Vector2
 * @returns int
 */
  getDropSectionAtPosition(position: Vector2): int;
/**
 * Returns the currently edited item. Can be used with `item_edited` to get the item that was modified.
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    $Tree.item_edited.connect(on_Tree_item_edited)
 * 
 * 				func on_Tree_item_edited():
 * 				    print($Tree.get_edited()) # This item just got edited (e.g. checked).
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Ready()
 * 				{
 * 				    GetNode<Tree>("Tree").ItemEdited += OnTreeItemEdited;
 * 				}
 * 
 * 				public void OnTreeItemEdited()
 * 				{
 * 				    GD.Print(GetNode<Tree>("Tree").GetEdited()); // This item just got edited (e.g. checked).
 * 				}
 * 				
 * 
 * ```
 * 
 * @returns TreeItem
 */
  getEdited(): TreeItem;
/**
 * Returns the column for the currently edited item.
 * @returns int
 */
  getEditedColumn(): int;
/**
 * Returns the rectangle area for the specified `TreeItem`. If `column` is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned.
 * @param item TreeItem
 * @param column int (optional, default: -1)
 * @param buttonIndex int (optional, default: -1)
 * @returns Rect2
 */
  getItemAreaRect(item: TreeItem, column?: int, buttonIndex?: int): Rect2;
/**
 * Returns the tree item at the specified position (relative to the tree origin position).
 * @param position Vector2
 * @returns TreeItem
 */
  getItemAtPosition(position: Vector2): TreeItem;
/**
 * Returns the next selected `TreeItem` after the given one, or `null` if the end is reached.
 * If `from` is `null`, this returns the first selected item.
 * @param from_ TreeItem
 * @returns TreeItem
 */
  getNextSelected(from_: TreeItem): TreeItem;
/**
 * Returns the last pressed button's index.
 * @returns int
 */
  getPressedButton(): int;
/**
 * Returns the tree's root item, or `null` if the tree is empty.
 * @returns TreeItem
 */
  getRoot(): TreeItem;
/**
 * Returns the current scrolling position.
 * @returns Vector2
 */
  getScroll(): Vector2;
/**
 * Returns the currently focused item, or `null` if no item is focused.
 * In `SELECT_ROW` and `SELECT_SINGLE` modes, the focused item is same as the selected item. In `SELECT_MULTI` mode, the focused item is the item under the focus cursor, not necessarily selected.
 * To get the currently selected item(s), use `get_next_selected`.
 * @returns TreeItem
 */
  getSelected(): TreeItem;
/**
 * Returns the currently focused column, or -1 if no column is focused.
 * In `SELECT_SINGLE` mode, the focused column is the selected column. In `SELECT_ROW` mode, the focused column is always 0 if any item is selected. In `SELECT_MULTI` mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.
 * To tell whether a column of an item is selected, use `TreeItem.is_selected`.
 * @returns int
 */
  getSelectedColumn(): int;
/**
 * Returns `true` if the column has enabled clipping (see `set_column_clip_content`).
 * @param column int
 * @returns boolean
 */
  isColumnClippingContent(column: int): boolean;
/**
 * Returns `true` if the column has enabled expanding (see `set_column_expand`).
 * @param column int
 * @returns boolean
 */
  isColumnExpanding(column: int): boolean;
/**
 * Causes the `Tree` to jump to the specified `TreeItem`.
 * @param item TreeItem
 * @param centerOnItem boolean (optional, default: false)
 */
  scrollToItem(item: TreeItem, centerOnItem?: boolean): void;
/**
 * Allows to enable clipping for column's content, making the content size ignored.
 * @param column int
 * @param enable boolean
 */
  setColumnClipContent(column: int, enable: boolean): void;
/**
 * Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to `Control.size_flags_stretch_ratio`.
 * @param column int
 * @param minWidth int
 */
  setColumnCustomMinimumWidth(column: int, minWidth: int): void;
/**
 * If `true`, the column will have the "Expand" flag of `Control`. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to `Control.size_flags_stretch_ratio` (see `set_column_expand_ratio`).
 * @param column int
 * @param expand boolean
 */
  setColumnExpand(column: int, expand: boolean): void;
/**
 * Sets the relative expand ratio for a column. See `set_column_expand`.
 * @param column int
 * @param ratio int
 */
  setColumnExpandRatio(column: int, ratio: int): void;
/**
 * Sets the title of a column.
 * @param column int
 * @param title string
 */
  setColumnTitle(column: int, title: string): void;
/**
 * Sets the column title alignment. Note that `@GlobalScope.HORIZONTAL_ALIGNMENT_FILL` is not supported for column titles.
 * @param column int
 * @param titleAlignment int
 */
  setColumnTitleAlignment(column: int, titleAlignment: int): void;
/**
 * Sets column title base writing direction.
 * @param column int
 * @param direction int
 */
  setColumnTitleDirection(column: int, direction: int): void;
/**
 * Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 * @param column int
 * @param language string
 */
  setColumnTitleLanguage(column: int, language: string): void;
/**
 * Selects the specified `TreeItem` and column.
 * @param item TreeItem
 * @param column int
 */
  setSelected(item: TreeItem, column: int): void;
/**
 * Emitted when a button on the tree was pressed (see `TreeItem.add_button`).
 */
  buttonClicked: Signal<[item: TreeItem, column: int, id: int, mouseButtonIndex: int]>;
/**
 * Emitted when a cell is selected.
 */
  cellSelected: Signal<[]>;
/**
 * Emitted when `TreeItem.propagate_check` is called. Connect to this signal to process the items that are affected when `TreeItem.propagate_check` is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item.
 */
  checkPropagatedToItem: Signal<[item: TreeItem, column: int]>;
/**
 * Emitted when a column's title is clicked with either `MOUSE_BUTTON_LEFT` or `MOUSE_BUTTON_RIGHT`.
 */
  columnTitleClicked: Signal<[column: int, mouseButtonIndex: int]>;
/**
 * Emitted when an item with `TreeItem.CELL_MODE_CUSTOM` is clicked with a mouse button.
 */
  customItemClicked: Signal<[mouseButtonIndex: int]>;
/**
 * Emitted when a cell with the `TreeItem.CELL_MODE_CUSTOM` is clicked to be edited.
 */
  customPopupEdited: Signal<[arrowClicked: boolean]>;
/**
 * Emitted when a mouse button is clicked in the empty space of the tree.
 */
  emptyClicked: Signal<[clickPosition: Vector2, mouseButtonIndex: int]>;
/**
 * Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using `Enter` or `Space` on the keyboard).
 */
  itemActivated: Signal<[]>;
/**
 * Emitted when an item is collapsed by a click on the folding arrow.
 */
  itemCollapsed: Signal<[item: TreeItem]>;
/**
 * Emitted when an item is edited.
 */
  itemEdited: Signal<[]>;
/**
 * Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see `item_activated`.
 */
  itemIconDoubleClicked: Signal<[]>;
/**
 * Emitted when an item is selected with a mouse button.
 */
  itemMouseSelected: Signal<[mousePosition: Vector2, mouseButtonIndex: int]>;
/**
 * Emitted when an item is selected.
 */
  itemSelected: Signal<[]>;
/**
 * Emitted instead of `item_selected` if `select_mode` is set to `SELECT_MULTI`.
 */
  multiSelected: Signal<[item: TreeItem, column: int, selected: boolean]>;
/**
 * Emitted when a left mouse button click does not select any item.
 */
  nothingSelected: Signal<[]>;
/**
 * Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.
 * The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.
 */
  static readonly SELECT_SINGLE: int;
/**
 * Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.
 * The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.
 */
  static readonly SELECT_ROW: int;
/**
 * Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.
 * The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.
 */
  static readonly SELECT_MULTI: int;
/**
 * Disables all drop sections, but still allows to detect the "on item" drop section by `get_drop_section_at_position`.
 * 
 * **Note:** This is the default flag, it has no effect when combined with other flags.
 */
  static readonly DROP_MODE_DISABLED: int;
/**
 * Enables the "on item" drop section. This drop section covers the entire item.
 * When combined with `DROP_MODE_INBETWEEN`, this drop section halves the height and stays centered vertically.
 */
  static readonly DROP_MODE_ON_ITEM: int;
/**
 * Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.
 * When combined with `DROP_MODE_ON_ITEM`, these drop sections halves the height and stays on top / bottom accordingly.
 */
  static readonly DROP_MODE_INBETWEEN: int;
}
