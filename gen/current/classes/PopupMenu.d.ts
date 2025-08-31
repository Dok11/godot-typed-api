import type { Color, GodotArray, GodotDictionary, InputEvent, Popup, Shortcut, Signal, Texture2D, Variant, float, int } from "../index.d.ts";
/**
 * A modal window used to display a list of options.
 * 
 * `PopupMenu` is a modal window used to display a list of options. Useful for toolbars and context menus.
 * The size of a `PopupMenu` can be limited by using `Window.max_size`. If the height of the list of items is larger than the maximum height of the `PopupMenu`, a `ScrollContainer` within the popup will allow the user to scroll the contents. If no maximum size is set, or if it is set to `0`, the `PopupMenu` height will be limited by its parent rect.
 * All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.
 * 
 * **Incremental search:** Like `ItemList` and `Tree`, `PopupMenu` supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing `ProjectSettings.gui/timers/incremental_search_max_interval_msec`.
 * 
 * **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [int]. This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.
 */
export class PopupMenu extends Popup {
/**
 * If `true`, allows navigating `PopupMenu` with letter keys.
 */
  allowSearch: boolean;
/**
 * If `true`, hides the `PopupMenu` when a checkbox or radio button is selected.
 */
  hideOnCheckableItemSelection: boolean;
/**
 * If `true`, hides the `PopupMenu` when an item is selected.
 */
  hideOnItemSelection: boolean;
/**
 * If `true`, hides the `PopupMenu` when a state item is selected.
 */
  hideOnStateItemSelection: boolean;
/**
 * The number of items currently in the list.
 */
  itemCount: int;
/**
 * If `true`, `MenuBar` will use native menu when supported.
 * 
 * **Note:** If `PopupMenu` is linked to `StatusIndicator`, `MenuBar`, or another `PopupMenu` item it can use native menu regardless of this property, use `is_native_menu` to check it.
 */
  preferNativeMenu: boolean;
/**
 * Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item.
 */
  submenuPopupDelay: float;
/**
 * If set to one of the values of `NativeMenu.SystemMenus`, this `PopupMenu` is bound to the special system menu. Only one `PopupMenu` can be bound to each special menu at a time.
 */
  systemMenuId: int;
  transparent: boolean;
  transparentBg: boolean;
/**
 * Checks the provided `event` against the `PopupMenu`'s shortcuts and accelerators, and activates the first item with matching events. If `for_global_only` is `true`, only shortcuts and accelerators with `global` set to `true` will be called.
 * Returns `true` if an item was successfully activated.
 * 
 * **Note:** Certain `Control`s, such as `MenuButton`, will call this method automatically.
 * @param event InputEvent
 * @param forGlobalOnly boolean (optional, default: false)
 * @returns boolean
 */
  activateItemByEvent(event: InputEvent, forGlobalOnly?: boolean): boolean;
/**
 * Adds a new checkable item with text `label`.
 * An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to `@GlobalScope.KEY_NONE`) will be assigned to the item (which means it won't have any accelerator). See `get_item_accelerator` for more info on accelerators.
 * 
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * @param label string
 * @param id int (optional, default: -1)
 * @param accel int (optional, default: 0)
 */
  addCheckItem(label: string, id?: int, accel?: int): void;
/**
 * Adds a new checkable item and assigns the specified `Shortcut` to it. Sets the label of the checkbox to the `Shortcut`'s name.
 * An `id` can optionally be provided. If no `id` is provided, one will be created from the index.
 * 
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * @param shortcut Shortcut
 * @param id int (optional, default: -1)
 * @param global boolean (optional, default: false)
 */
  addCheckShortcut(shortcut: Shortcut, id?: int, global?: boolean): void;
/**
 * Adds a new checkable item with text `label` and icon `texture`.
 * An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to `@GlobalScope.KEY_NONE`) will be assigned to the item (which means it won't have any accelerator). See `get_item_accelerator` for more info on accelerators.
 * 
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * @param texture Texture2D
 * @param label string
 * @param id int (optional, default: -1)
 * @param accel int (optional, default: 0)
 */
  addIconCheckItem(texture: Texture2D, label: string, id?: int, accel?: int): void;
/**
 * Adds a new checkable item and assigns the specified `Shortcut` and icon `texture` to it. Sets the label of the checkbox to the `Shortcut`'s name.
 * An `id` can optionally be provided. If no `id` is provided, one will be created from the index.
 * 
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * @param texture Texture2D
 * @param shortcut Shortcut
 * @param id int (optional, default: -1)
 * @param global boolean (optional, default: false)
 */
  addIconCheckShortcut(texture: Texture2D, shortcut: Shortcut, id?: int, global?: boolean): void;
/**
 * Adds a new item with text `label` and icon `texture`.
 * An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to `@GlobalScope.KEY_NONE`) will be assigned to the item (which means it won't have any accelerator). See `get_item_accelerator` for more info on accelerators.
 * @param texture Texture2D
 * @param label string
 * @param id int (optional, default: -1)
 * @param accel int (optional, default: 0)
 */
  addIconItem(texture: Texture2D, label: string, id?: int, accel?: int): void;
/**
 * Same as `add_icon_check_item`, but uses a radio check button.
 * @param texture Texture2D
 * @param label string
 * @param id int (optional, default: -1)
 * @param accel int (optional, default: 0)
 */
  addIconRadioCheckItem(texture: Texture2D, label: string, id?: int, accel?: int): void;
/**
 * Same as `add_icon_check_shortcut`, but uses a radio check button.
 * @param texture Texture2D
 * @param shortcut Shortcut
 * @param id int (optional, default: -1)
 * @param global boolean (optional, default: false)
 */
  addIconRadioCheckShortcut(texture: Texture2D, shortcut: Shortcut, id?: int, global?: boolean): void;
/**
 * Adds a new item and assigns the specified `Shortcut` and icon `texture` to it. Sets the label of the checkbox to the `Shortcut`'s name.
 * An `id` can optionally be provided. If no `id` is provided, one will be created from the index.
 * If `allow_echo` is `true`, the shortcut can be activated with echo events.
 * @param texture Texture2D
 * @param shortcut Shortcut
 * @param id int (optional, default: -1)
 * @param global boolean (optional, default: false)
 * @param allowEcho boolean (optional, default: false)
 */
  addIconShortcut(texture: Texture2D, shortcut: Shortcut, id?: int, global?: boolean, allowEcho?: boolean): void;
/**
 * Adds a new item with text `label`.
 * An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to `@GlobalScope.KEY_NONE`) will be assigned to the item (which means it won't have any accelerator). See `get_item_accelerator` for more info on accelerators.
 * 
 * **Note:** The provided `id` is used only in `id_pressed` and `id_focused` signals. It's not related to the `index` arguments in e.g. `set_item_checked`.
 * @param label string
 * @param id int (optional, default: -1)
 * @param accel int (optional, default: 0)
 */
  addItem(label: string, id?: int, accel?: int): void;
/**
 * Adds a new multistate item with text `label`.
 * Contrarily to normal binary items, multistate items can have more than two states, as defined by `max_states`. The default value is defined by `default_state`.
 * An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to `@GlobalScope.KEY_NONE`) will be assigned to the item (which means it won't have any accelerator). See `get_item_accelerator` for more info on accelerators.
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    add_multistate_item("Item", 3, 0)
 * 
 * 				    index_pressed.connect(func(index: int):
 * 				            toggle_item_multistate(index)
 * 				            match get_item_multistate(index):
 * 				                0:
 * 				                    print("First state")
 * 				                1:
 * 				                    print("Second state")
 * 				                2:
 * 				                    print("Third state")
 * 				        )
 * 				
 * 
 * ```
 * 
 * **Note:** Multistate items don't update their state automatically and must be done manually. See `toggle_item_multistate`, `set_item_multistate` and `get_item_multistate` for more info on how to control it.
 * @param label string
 * @param maxStates int
 * @param defaultState int (optional, default: 0)
 * @param id int (optional, default: -1)
 * @param accel int (optional, default: 0)
 */
  addMultistateItem(label: string, maxStates: int, defaultState?: int, id?: int, accel?: int): void;
/**
 * Adds a new radio check button with text `label`.
 * An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to `@GlobalScope.KEY_NONE`) will be assigned to the item (which means it won't have any accelerator). See `get_item_accelerator` for more info on accelerators.
 * 
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * @param label string
 * @param id int (optional, default: -1)
 * @param accel int (optional, default: 0)
 */
  addRadioCheckItem(label: string, id?: int, accel?: int): void;
/**
 * Adds a new radio check button and assigns a `Shortcut` to it. Sets the label of the checkbox to the `Shortcut`'s name.
 * An `id` can optionally be provided. If no `id` is provided, one will be created from the index.
 * 
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * @param shortcut Shortcut
 * @param id int (optional, default: -1)
 * @param global boolean (optional, default: false)
 */
  addRadioCheckShortcut(shortcut: Shortcut, id?: int, global?: boolean): void;
/**
 * Adds a separator between items. Separators also occupy an index, which you can set by using the `id` parameter.
 * A `label` can optionally be provided, which will appear at the center of the separator.
 * @param label string (optional, default: "")
 * @param id int (optional, default: -1)
 */
  addSeparator(label?: string, id?: int): void;
/**
 * Adds a `Shortcut`.
 * An `id` can optionally be provided. If no `id` is provided, one will be created from the index.
 * If `allow_echo` is `true`, the shortcut can be activated with echo events.
 * @param shortcut Shortcut
 * @param id int (optional, default: -1)
 * @param global boolean (optional, default: false)
 * @param allowEcho boolean (optional, default: false)
 */
  addShortcut(shortcut: Shortcut, id?: int, global?: boolean, allowEcho?: boolean): void;
/**
 * Adds an item that will act as a submenu of the parent `PopupMenu` node when clicked. The `submenu` argument must be the name of an existing `PopupMenu` that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.
 * An `id` can optionally be provided. If no `id` is provided, one will be created from the index.
 * @param label string
 * @param submenu string
 * @param id int (optional, default: -1)
 * @deprecated Prefer using `add_submenu_node_item` instead.
 */
  addSubmenuItem(label: string, submenu: string, id?: int): void;
/**
 * Adds an item that will act as a submenu of the parent `PopupMenu` node when clicked. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.
 * `submenu` must be either child of this `PopupMenu` or has no parent node (in which case it will be automatically added as a child). If the `submenu` popup has another parent, this method will fail.
 * An `id` can optionally be provided. If no `id` is provided, one will be created from the index.
 * @param label string
 * @param submenu PopupMenu
 * @param id int (optional, default: -1)
 */
  addSubmenuNodeItem(label: string, submenu: PopupMenu, id?: int): void;
/**
 * Removes all items from the `PopupMenu`. If `free_submenus` is `true`, the submenu nodes are automatically freed.
 * @param freeSubmenus boolean (optional, default: false)
 */
  clear(freeSubmenus?: boolean): void;
/**
 * Returns the index of the currently focused item. Returns `-1` if no item is focused.
 * @returns int
 */
  getFocusedItem(): int;
/**
 * Returns the accelerator of the item at the given `index`. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`). If no accelerator is defined for the specified `index`, `get_item_accelerator` returns `0` (corresponding to `@GlobalScope.KEY_NONE`).
 * @param index int
 * @returns int
 */
  getItemAccelerator(index: int): int;
/**
 * Returns the icon of the item at the given `index`.
 * @param index int
 * @returns Texture2D
 */
  getItemIcon(index: int): Texture2D;
/**
 * Returns the maximum allowed width of the icon for the item at the given `index`.
 * @param index int
 * @returns int
 */
  getItemIconMaxWidth(index: int): int;
/**
 * Returns a `Color` modulating the item's icon at the given `index`.
 * @param index int
 * @returns Color
 */
  getItemIconModulate(index: int): Color;
/**
 * Returns the ID of the item at the given `index`. `id` can be manually assigned, while index can not.
 * @param index int
 * @returns int
 */
  getItemId(index: int): int;
/**
 * Returns the horizontal offset of the item at the given `index`.
 * @param index int
 * @returns int
 */
  getItemIndent(index: int): int;
/**
 * Returns the index of the item containing the specified `id`. Index is automatically assigned to each item by the engine and can not be set manually.
 * @param id int
 * @returns int
 */
  getItemIndex(id: int): int;
/**
 * Returns item's text language code.
 * @param index int
 * @returns string
 */
  getItemLanguage(index: int): string;
/**
 * Returns the metadata of the specified item, which might be of any type. You can set it with `set_item_metadata`, which provides a simple way of assigning context data to items.
 * @param index int
 * @returns Variant
 */
  getItemMetadata(index: int): Variant;
/**
 * Returns the state of the item at the given `index`.
 * @param index int
 * @returns int
 */
  getItemMultistate(index: int): int;
/**
 * Returns the max states of the item at the given `index`.
 * @param index int
 * @returns int
 */
  getItemMultistateMax(index: int): int;
/**
 * Returns the `Shortcut` associated with the item at the given `index`.
 * @param index int
 * @returns Shortcut
 */
  getItemShortcut(index: int): Shortcut;
/**
 * Returns the submenu name of the item at the given `index`. See `add_submenu_item` for more info on how to add a submenu.
 * @param index int
 * @returns string
 * @deprecated Prefer using `get_item_submenu_node` instead.
 */
  getItemSubmenu(index: int): string;
/**
 * Returns the submenu of the item at the given `index`, or `null` if no submenu was added. See `add_submenu_node_item` for more info on how to add a submenu.
 * @param index int
 * @returns PopupMenu
 */
  getItemSubmenuNode(index: int): PopupMenu;
/**
 * Returns the text of the item at the given `index`.
 * @param index int
 * @returns string
 */
  getItemText(index: int): string;
/**
 * Returns item's text base writing direction.
 * @param index int
 * @returns int
 */
  getItemTextDirection(index: int): int;
/**
 * Returns the tooltip associated with the item at the given `index`.
 * @param index int
 * @returns string
 */
  getItemTooltip(index: int): string;
/**
 * Returns `true` if the item at the given `index` is checkable in some way, i.e. if it has a checkbox or radio button.
 * 
 * **Note:** Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.
 * @param index int
 * @returns boolean
 */
  isItemCheckable(index: int): boolean;
/**
 * Returns `true` if the item at the given `index` is checked.
 * @param index int
 * @returns boolean
 */
  isItemChecked(index: int): boolean;
/**
 * Returns `true` if the item at the given `index` is disabled. When it is disabled it can't be selected, or its action invoked.
 * See `set_item_disabled` for more info on how to disable an item.
 * @param index int
 * @returns boolean
 */
  isItemDisabled(index: int): boolean;
/**
 * Returns `true` if the item at the given `index` has radio button-style checkability.
 * 
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 * @param index int
 * @returns boolean
 */
  isItemRadioCheckable(index: int): boolean;
/**
 * Returns `true` if the item is a separator. If it is, it will be displayed as a line. See `add_separator` for more info on how to add a separator.
 * @param index int
 * @returns boolean
 */
  isItemSeparator(index: int): boolean;
/**
 * Returns `true` if the specified item's shortcut is disabled.
 * @param index int
 * @returns boolean
 */
  isItemShortcutDisabled(index: int): boolean;
/**
 * Returns `true` if the system native menu is supported and currently used by this `PopupMenu`.
 * @returns boolean
 */
  isNativeMenu(): boolean;
/**
 * Returns `true` if the menu is bound to the special system menu.
 * @returns boolean
 */
  isSystemMenu(): boolean;
/**
 * Removes the item at the given `index` from the menu.
 * 
 * **Note:** The indices of items after the removed item will be shifted by one.
 * @param index int
 */
  removeItem(index: int): void;
/**
 * Moves the scroll view to make the item at the given `index` visible.
 * @param index int
 */
  scrollToItem(index: int): void;
/**
 * Sets the currently focused item as the given `index`.
 * Passing `-1` as the index makes so that no item is focused.
 * @param index int
 */
  setFocusedItem(index: int): void;
/**
 * Sets the accelerator of the item at the given `index`. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. `accel` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * @param index int
 * @param accel int
 */
  setItemAccelerator(index: int, accel: int): void;
/**
 * Sets whether the item at the given `index` has a checkbox. If `false`, sets the type of the item to plain text.
 * 
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.
 * @param index int
 * @param enable boolean
 */
  setItemAsCheckable(index: int, enable: boolean): void;
/**
 * Sets the type of the item at the given `index` to radio button. If `false`, sets the type of the item to plain text.
 * @param index int
 * @param enable boolean
 */
  setItemAsRadioCheckable(index: int, enable: boolean): void;
/**
 * Mark the item at the given `index` as a separator, which means that it would be displayed as a line. If `false`, sets the type of the item to plain text.
 * @param index int
 * @param enable boolean
 */
  setItemAsSeparator(index: int, enable: boolean): void;
/**
 * Sets the checkstate status of the item at the given `index`.
 * @param index int
 * @param checked boolean
 */
  setItemChecked(index: int, checked: boolean): void;
/**
 * Enables/disables the item at the given `index`. When it is disabled, it can't be selected and its action can't be invoked.
 * @param index int
 * @param disabled boolean
 */
  setItemDisabled(index: int, disabled: boolean): void;
/**
 * Replaces the `Texture2D` icon of the item at the given `index`.
 * @param index int
 * @param icon Texture2D
 */
  setItemIcon(index: int, icon: Texture2D): void;
/**
 * Sets the maximum allowed width of the icon for the item at the given `index`. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio.
 * @param index int
 * @param width int
 */
  setItemIconMaxWidth(index: int, width: int): void;
/**
 * Sets a modulating `Color` of the item's icon at the given `index`.
 * @param index int
 * @param modulate Color
 */
  setItemIconModulate(index: int, modulate: Color): void;
/**
 * Sets the `id` of the item at the given `index`.
 * The `id` is used in `id_pressed` and `id_focused` signals.
 * @param index int
 * @param id int
 */
  setItemId(index: int, id: int): void;
/**
 * Sets the horizontal offset of the item at the given `index`.
 * @param index int
 * @param indent int
 */
  setItemIndent(index: int, indent: int): void;
/**
 * Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 * @param index int
 * @param language string
 */
  setItemLanguage(index: int, language: string): void;
/**
 * Sets the metadata of an item, which may be of any type. You can later get it with `get_item_metadata`, which provides a simple way of assigning context data to items.
 * @param index int
 * @param metadata Variant
 */
  setItemMetadata(index: int, metadata: Variant): void;
/**
 * Sets the state of a multistate item. See `add_multistate_item` for details.
 * @param index int
 * @param state int
 */
  setItemMultistate(index: int, state: int): void;
/**
 * Sets the max states of a multistate item. See `add_multistate_item` for details.
 * @param index int
 * @param maxStates int
 */
  setItemMultistateMax(index: int, maxStates: int): void;
/**
 * Sets a `Shortcut` for the item at the given `index`.
 * @param index int
 * @param shortcut Shortcut
 * @param global boolean (optional, default: false)
 */
  setItemShortcut(index: int, shortcut: Shortcut, global?: boolean): void;
/**
 * Disables the `Shortcut` of the item at the given `index`.
 * @param index int
 * @param disabled boolean
 */
  setItemShortcutDisabled(index: int, disabled: boolean): void;
/**
 * Sets the submenu of the item at the given `index`. The submenu is the name of a child `PopupMenu` node that would be shown when the item is clicked.
 * @param index int
 * @param submenu string
 * @deprecated Prefer using `set_item_submenu_node` instead.
 */
  setItemSubmenu(index: int, submenu: string): void;
/**
 * Sets the submenu of the item at the given `index`. The submenu is a `PopupMenu` node that would be shown when the item is clicked. It must either be a child of this `PopupMenu` or has no parent (in which case it will be automatically added as a child). If the `submenu` popup has another parent, this method will fail.
 * @param index int
 * @param submenu PopupMenu
 */
  setItemSubmenuNode(index: int, submenu: PopupMenu): void;
/**
 * Sets the text of the item at the given `index`.
 * @param index int
 * @param text string
 */
  setItemText(index: int, text: string): void;
/**
 * Sets item's text base writing direction.
 * @param index int
 * @param direction int
 */
  setItemTextDirection(index: int, direction: int): void;
/**
 * Sets the `String` tooltip of the item at the given `index`.
 * @param index int
 * @param tooltip string
 */
  setItemTooltip(index: int, tooltip: string): void;
/**
 * Toggles the check state of the item at the given `index`.
 * @param index int
 */
  toggleItemChecked(index: int): void;
/**
 * Cycle to the next state of a multistate item. See `add_multistate_item` for details.
 * @param index int
 */
  toggleItemMultistate(index: int): void;
/**
 * Emitted when the user navigated to an item of some `id` using the `ProjectSettings.input/ui_up` or `ProjectSettings.input/ui_down` input action.
 */
  idFocused: Signal<[id: int]>;
/**
 * Emitted when an item of some `id` is pressed or its accelerator is activated.
 * 
 * **Note:** If `id` is negative (either explicitly or due to overflow), this will return the corresponding index instead.
 */
  idPressed: Signal<[id: int]>;
/**
 * Emitted when an item of some `index` is pressed or its accelerator is activated.
 */
  indexPressed: Signal<[index: int]>;
/**
 * Emitted when any item is added, modified or removed.
 */
  menuChanged: Signal<[]>;
}
