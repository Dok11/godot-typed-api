import type { Button, GodotArray, GodotDictionary, PopupMenu, Signal, Texture2D, Variant, float, int } from "../index.d.ts";
/**
 * A button that brings up a dropdown with selectable options when pressed.
 * 
 * `OptionButton` is a type of button that brings up a dropdown with selectable items when pressed. The item selected becomes the "current" item and is displayed as the button text.
 * See also `BaseButton` which contains common properties and methods associated with this node.
 * 
 * **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [int]. This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.
 * 
 * **Note:** The `Button.text` and `Button.icon` properties are set automatically based on the selected item. They shouldn't be changed manually.
 */
export class OptionButton extends Button {
  actionMode: int;
  alignment: int;
/**
 * If `true`, the currently selected item can be selected again.
 */
  allowReselect: boolean;
/**
 * If `true`, minimum size will be determined by the longest item's text, instead of the currently selected one's.
 * 
 * **Note:** For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.
 */
  fitToLongestItem: boolean;
/**
 * The number of items to select from.
 */
  itemCount: int;
/**
 * The index of the currently selected item, or `-1` if no item is selected.
 */
  selected: int;
  toggleMode: boolean;
/**
 * Adds an item, with a `texture` icon, text `label` and (optionally) `id`. If no `id` is passed, the item index will be used as the item's ID. New items are appended at the end.
 * @param texture Texture2D
 * @param label string
 * @param id int (optional, default: -1)
 */
  addIconItem(texture: Texture2D, label: string, id?: int): void;
/**
 * Adds an item, with text `label` and (optionally) `id`. If no `id` is passed, the item index will be used as the item's ID. New items are appended at the end.
 * @param label string
 * @param id int (optional, default: -1)
 */
  addItem(label: string, id?: int): void;
/**
 * Adds a separator to the list of items. Separators help to group items, and can optionally be given a `text` header. A separator also gets an index assigned, and is appended at the end of the item list.
 * @param text string (optional, default: "")
 */
  addSeparator(text?: string): void;
/**
 * Clears all the items in the `OptionButton`.
 */
  clear(): void;
/**
 * Returns the icon of the item at index `idx`.
 * @param idx int
 * @returns Texture2D
 */
  getItemIcon(idx: int): Texture2D;
/**
 * Returns the ID of the item at index `idx`.
 * @param idx int
 * @returns int
 */
  getItemId(idx: int): int;
/**
 * Returns the index of the item with the given `id`.
 * @param id int
 * @returns int
 */
  getItemIndex(id: int): int;
/**
 * Retrieves the metadata of an item. Metadata may be any type and can be used to store extra information about an item, such as an external string ID.
 * @param idx int
 * @returns Variant
 */
  getItemMetadata(idx: int): Variant;
/**
 * Returns the text of the item at index `idx`.
 * @param idx int
 * @returns string
 */
  getItemText(idx: int): string;
/**
 * Returns the tooltip of the item at index `idx`.
 * @param idx int
 * @returns string
 */
  getItemTooltip(idx: int): string;
/**
 * Returns the `PopupMenu` contained in this button.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `Window.visible` property.
 * @returns PopupMenu
 */
  getPopup(): PopupMenu;
/**
 * Returns the index of the first item which is not disabled, or marked as a separator. If `from_last` is `true`, the items will be searched in reverse order.
 * Returns `-1` if no item is found.
 * @param fromLast boolean (optional, default: false)
 * @returns int
 */
  getSelectableItem(fromLast?: boolean): int;
/**
 * Returns the ID of the selected item, or `-1` if no item is selected.
 * @returns int
 */
  getSelectedId(): int;
/**
 * Gets the metadata of the selected item. Metadata for items can be set using `set_item_metadata`.
 * @returns Variant
 */
  getSelectedMetadata(): Variant;
/**
 * Returns `true` if this button contains at least one item which is not disabled, or marked as a separator.
 * @returns boolean
 */
  hasSelectableItems(): boolean;
/**
 * Returns `true` if the item at index `idx` is disabled.
 * @param idx int
 * @returns boolean
 */
  isItemDisabled(idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` is marked as a separator.
 * @param idx int
 * @returns boolean
 */
  isItemSeparator(idx: int): boolean;
/**
 * Removes the item at index `idx`.
 * @param idx int
 */
  removeItem(idx: int): void;
/**
 * Selects an item by index and makes it the current item. This will work even if the item is disabled.
 * Passing `-1` as the index deselects any currently selected item.
 * @param idx int
 */
  select(idx: int): void;
/**
 * If `true`, shortcuts are disabled and cannot be used to trigger the button.
 * @param disabled boolean
 */
  setDisableShortcuts(disabled: boolean): void;
/**
 * Sets whether the item at index `idx` is disabled.
 * Disabled items are drawn differently in the dropdown and are not selectable by the user. If the current selected item is set as disabled, it will remain selected.
 * @param idx int
 * @param disabled boolean
 */
  setItemDisabled(idx: int, disabled: boolean): void;
/**
 * Sets the icon of the item at index `idx`.
 * @param idx int
 * @param texture Texture2D
 */
  setItemIcon(idx: int, texture: Texture2D): void;
/**
 * Sets the ID of the item at index `idx`.
 * @param idx int
 * @param id int
 */
  setItemId(idx: int, id: int): void;
/**
 * Sets the metadata of an item. Metadata may be of any type and can be used to store extra information about an item, such as an external string ID.
 * @param idx int
 * @param metadata Variant
 */
  setItemMetadata(idx: int, metadata: Variant): void;
/**
 * Sets the text of the item at index `idx`.
 * @param idx int
 * @param text string
 */
  setItemText(idx: int, text: string): void;
/**
 * Sets the tooltip of the item at index `idx`.
 * @param idx int
 * @param tooltip string
 */
  setItemTooltip(idx: int, tooltip: string): void;
/**
 * Adjusts popup position and sizing for the `OptionButton`, then shows the `PopupMenu`. Prefer this over using `get_popup().popup()`.
 */
  showPopup(): void;
/**
 * Emitted when the user navigates to an item using the `ProjectSettings.input/ui_up` or `ProjectSettings.input/ui_down` input actions. The index of the item selected is passed as argument.
 */
  itemFocused: Signal<[index: int]>;
/**
 * Emitted when the current item has been changed by the user. The index of the item selected is passed as argument.
 * `allow_reselect` must be enabled to reselect an item.
 */
  itemSelected: Signal<[index: int]>;
}
