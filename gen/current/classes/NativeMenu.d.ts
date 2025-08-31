import type { Callable, GodotArray, GodotDictionary, Object, RID, Texture2D, Variant, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * A server interface for OS native menus.
 * 
 * `NativeMenu` handles low-level access to the OS native global menu bar and popup menus.
 * 
 * **Note:** This is low-level API, consider using `MenuBar` with `MenuBar.prefer_global_menu` set to `true`, and `PopupMenu` with `PopupMenu.prefer_native_menu` set to `true`.
 * To create a menu, use `create_menu`, add menu items using `add_*_item` methods. To remove a menu, use `free_menu`.
 * 
 * 		```gdscript
 * 
 * 		var menu
 * 
 * 		func _menu_callback(item_id):
 * 		    if item_id == "ITEM_CUT":
 * 		        cut()
 * 		    elif item_id == "ITEM_COPY":
 * 		        copy()
 * 		    elif item_id == "ITEM_PASTE":
 * 		        paste()
 * 
 * 		func _enter_tree():
 * 		    # Create new menu and add items:
 * 		    menu = NativeMenu.create_menu()
 * 		    NativeMenu.add_item(menu, "Cut", _menu_callback, Callable(), "ITEM_CUT")
 * 		    NativeMenu.add_item(menu, "Copy", _menu_callback, Callable(), "ITEM_COPY")
 * 		    NativeMenu.add_separator(menu)
 * 		    NativeMenu.add_item(menu, "Paste", _menu_callback, Callable(), "ITEM_PASTE")
 * 
 * 		func _on_button_pressed():
 * 		    # Show popup menu at mouse position:
 * 		    NativeMenu.popup(menu, DisplayServer.mouse_get_position())
 * 
 * 		func _exit_tree():
 * 		    # Remove menu when it's no longer needed:
 * 		    NativeMenu.free_menu(menu)
 * 		
 * 
 * ```
 */
export class NativeMenu extends Object {
/**
 * Adds a new checkable item with text `label` to the global menu `rid`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On Windows, `accelerator` and `key_callback` are ignored.
 * @param rid RID
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addCheckItem(rid: RID, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new checkable item with text `label` and icon `icon` to the global menu `rid`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On Windows, `accelerator` and `key_callback` are ignored.
 * @param rid RID
 * @param icon Texture2D
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addIconCheckItem(rid: RID, icon: Texture2D, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new item with text `label` and icon `icon` to the global menu `rid`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On Windows, `accelerator` and `key_callback` are ignored.
 * @param rid RID
 * @param icon Texture2D
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addIconItem(rid: RID, icon: Texture2D, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new radio-checkable item with text `label` and icon `icon` to the global menu `rid`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On Windows, `accelerator` and `key_callback` are ignored.
 * @param rid RID
 * @param icon Texture2D
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addIconRadioCheckItem(rid: RID, icon: Texture2D, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new item with text `label` to the global menu `rid`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On Windows, `accelerator` and `key_callback` are ignored.
 * @param rid RID
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addItem(rid: RID, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new item with text `label` to the global menu `rid`.
 * Contrarily to normal binary items, multistate items can have more than two states, as defined by `max_states`. Each press or activate of the item will increase the state by one. The default value is defined by `default_state`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** By default, there's no indication of the current item state, it should be changed manually.
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On Windows, `accelerator` and `key_callback` are ignored.
 * @param rid RID
 * @param label string
 * @param maxStates int
 * @param defaultState int
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addMultistateItem(rid: RID, label: string, maxStates: int, defaultState: int, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new radio-checkable item with text `label` to the global menu `rid`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `set_item_checked` for more info on how to control it.
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On Windows, `accelerator` and `key_callback` are ignored.
 * @param rid RID
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addRadioCheckItem(rid: RID, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a separator between items to the global menu `rid`. Separators also occupy an index.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param index int (optional, default: -1)
 * @returns int
 */
  addSeparator(rid: RID, index?: int): int;
/**
 * Adds an item that will act as a submenu of the global menu `rid`. The `submenu_rid` argument is the RID of the global menu that will be shown when the item is clicked.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param label string
 * @param submenuRid RID
 * @param tag Variant (optional, default: null)
 * @param index int (optional, default: -1)
 * @returns int
 */
  addSubmenuItem(rid: RID, label: string, submenuRid: RID, tag?: Variant, index?: int): int;
/**
 * Removes all items from the global menu `rid`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 */
  clear(rid: RID): void;
/**
 * Creates a new global menu object.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @returns RID
 */
  createMenu(): RID;
/**
 * Returns the index of the item with the submenu specified by `submenu_rid`. Indices are automatically assigned to each item by the engine, and cannot be set manually.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param submenuRid RID
 * @returns int
 */
  findItemIndexWithSubmenu(rid: RID, submenuRid: RID): int;
/**
 * Returns the index of the item with the specified `tag`. Indices are automatically assigned to each item by the engine, and cannot be set manually.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param tag Variant
 * @returns int
 */
  findItemIndexWithTag(rid: RID, tag: Variant): int;
/**
 * Returns the index of the item with the specified `text`. Indices are automatically assigned to each item by the engine, and cannot be set manually.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param text string
 * @returns int
 */
  findItemIndexWithText(rid: RID, text: string): int;
/**
 * Frees a global menu object created by this `NativeMenu`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 */
  freeMenu(rid: RID): void;
/**
 * Returns the accelerator of the item at index `idx`. Accelerators are special combinations of keys that activate the item, no matter which control is focused.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @returns int
 */
  getItemAccelerator(rid: RID, idx: int): int;
/**
 * Returns the callback of the item at index `idx`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns Callable
 */
  getItemCallback(rid: RID, idx: int): Callable;
/**
 * Returns number of items in the global menu `rid`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @returns int
 */
  getItemCount(rid: RID): int;
/**
 * Returns the icon of the item at index `idx`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns Texture2D
 */
  getItemIcon(rid: RID, idx: int): Texture2D;
/**
 * Returns the horizontal offset of the item at the given `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @returns int
 */
  getItemIndentationLevel(rid: RID, idx: int): int;
/**
 * Returns the callback of the item accelerator at index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @returns Callable
 */
  getItemKeyCallback(rid: RID, idx: int): Callable;
/**
 * Returns number of states of a multistate item. See `add_multistate_item` for details.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns int
 */
  getItemMaxStates(rid: RID, idx: int): int;
/**
 * Returns the state of a multistate item. See `add_multistate_item` for details.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns int
 */
  getItemState(rid: RID, idx: int): int;
/**
 * Returns the submenu ID of the item at index `idx`. See `add_submenu_item` for more info on how to add a submenu.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns RID
 */
  getItemSubmenu(rid: RID, idx: int): RID;
/**
 * Returns the metadata of the specified item, which might be of any type. You can set it with `set_item_tag`, which provides a simple way of assigning context data to items.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns Variant
 */
  getItemTag(rid: RID, idx: int): Variant;
/**
 * Returns the text of the item at index `idx`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns string
 */
  getItemText(rid: RID, idx: int): string;
/**
 * Returns the tooltip associated with the specified index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @returns string
 */
  getItemTooltip(rid: RID, idx: int): string;
/**
 * Returns global menu minimum width.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @returns float
 */
  getMinimumWidth(rid: RID): float;
/**
 * Returns global menu close callback.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @returns Callable
 */
  getPopupCloseCallback(rid: RID): Callable;
/**
 * Returns global menu open callback.
 * b]Note:[/b] This method is implemented only on macOS.
 * @param rid RID
 * @returns Callable
 */
  getPopupOpenCallback(rid: RID): Callable;
/**
 * Returns global menu size.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @returns Vector2
 */
  getSize(rid: RID): Vector2;
/**
 * Returns RID of a special system menu.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuId int
 * @returns RID
 */
  getSystemMenu(menuId: int): RID;
/**
 * Returns readable name of a special system menu.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuId int
 * @returns string
 */
  getSystemMenuName(menuId: int): string;
/**
 * Returns `true` if the specified `feature` is supported by the current `NativeMenu`, `false` otherwise.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param feature int
 * @returns boolean
 */
  hasFeature(feature: int): boolean;
/**
 * Returns `true` if `rid` is valid global menu.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @returns boolean
 */
  hasMenu(rid: RID): boolean;
/**
 * Returns `true` if a special system menu is supported.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuId int
 * @returns boolean
 */
  hasSystemMenu(menuId: int): boolean;
/**
 * Returns `true` if the item at index `idx` is checkable in some way, i.e. if it has a checkbox or radio button.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns boolean
 */
  isItemCheckable(rid: RID, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` is checked.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns boolean
 */
  isItemChecked(rid: RID, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` is disabled. When it is disabled it can't be selected, or its action invoked.
 * See `set_item_disabled` for more info on how to disable an item.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns boolean
 */
  isItemDisabled(rid: RID, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` is hidden.
 * See `set_item_hidden` for more info on how to hide an item.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @returns boolean
 */
  isItemHidden(rid: RID, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` has radio button-style checkability.
 * 
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @returns boolean
 */
  isItemRadioCheckable(rid: RID, idx: int): boolean;
/**
 * Returns `true` if the menu is currently opened.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @returns boolean
 */
  isOpened(rid: RID): boolean;
/**
 * Return `true` is global menu is a special system menu.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @returns boolean
 */
  isSystemMenu(rid: RID): boolean;
/**
 * Shows the global menu at `position` in the screen coordinates.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param position Vector2i
 */
  popup(rid: RID, position: Vector2i): void;
/**
 * Removes the item at index `idx` from the global menu `rid`.
 * 
 * **Note:** The indices of items after the removed item will be shifted by one.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 */
  removeItem(rid: RID, idx: int): void;
/**
 * Sets the menu text layout direction from right-to-left if `is_rtl` is `true`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param isRtl boolean
 */
  setInterfaceDirection(rid: RID, isRtl: boolean): void;
/**
 * Sets the accelerator of the item at index `idx`. `keycode` can be a single `Key`, or a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @param keycode int
 */
  setItemAccelerator(rid: RID, idx: int, keycode: int): void;
/**
 * Sets the callback of the item at index `idx`. Callback is emitted when an item is pressed.
 * 
 * **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param callback Callable
 */
  setItemCallback(rid: RID, idx: int, callback: Callable): void;
/**
 * Sets whether the item at index `idx` has a checkbox. If `false`, sets the type of the item to plain text.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param checkable boolean
 */
  setItemCheckable(rid: RID, idx: int, checkable: boolean): void;
/**
 * Sets the checkstate status of the item at index `idx`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param checked boolean
 */
  setItemChecked(rid: RID, idx: int, checked: boolean): void;
/**
 * Enables/disables the item at index `idx`. When it is disabled, it can't be selected and its action can't be invoked.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param disabled boolean
 */
  setItemDisabled(rid: RID, idx: int, disabled: boolean): void;
/**
 * Hides/shows the item at index `idx`. When it is hidden, an item does not appear in a menu and its action cannot be invoked.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @param hidden boolean
 */
  setItemHidden(rid: RID, idx: int, hidden: boolean): void;
/**
 * Sets the callback of the item at index `idx`. The callback is emitted when an item is hovered.
 * 
 * **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @param callback Callable
 */
  setItemHoverCallbacks(rid: RID, idx: int, callback: Callable): void;
/**
 * Replaces the `Texture2D` icon of the specified `idx`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** This method is not supported by macOS Dock menu items.
 * @param rid RID
 * @param idx int
 * @param icon Texture2D
 */
  setItemIcon(rid: RID, idx: int, icon: Texture2D): void;
/**
 * Sets the horizontal offset of the item at the given `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @param level int
 */
  setItemIndentationLevel(rid: RID, idx: int, level: int): void;
/**
 * Sets the callback of the item at index `idx`. Callback is emitted when its accelerator is activated.
 * 
 * **Note:** The `key_callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @param keyCallback Callable
 */
  setItemKeyCallback(rid: RID, idx: int, keyCallback: Callable): void;
/**
 * Sets number of state of a multistate item. See `add_multistate_item` for details.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param maxStates int
 */
  setItemMaxStates(rid: RID, idx: int, maxStates: int): void;
/**
 * Sets the type of the item at the specified index `idx` to radio button. If `false`, sets the type of the item to plain text.
 * 
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param checkable boolean
 */
  setItemRadioCheckable(rid: RID, idx: int, checkable: boolean): void;
/**
 * Sets the state of a multistate item. See `add_multistate_item` for details.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param state int
 */
  setItemState(rid: RID, idx: int, state: int): void;
/**
 * Sets the submenu RID of the item at index `idx`. The submenu is a global menu that would be shown when the item is clicked.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param submenuRid RID
 */
  setItemSubmenu(rid: RID, idx: int, submenuRid: RID): void;
/**
 * Sets the metadata of an item, which may be of any type. You can later get it with `get_item_tag`, which provides a simple way of assigning context data to items.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param tag Variant
 */
  setItemTag(rid: RID, idx: int, tag: Variant): void;
/**
 * Sets the text of the item at index `idx`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param idx int
 * @param text string
 */
  setItemText(rid: RID, idx: int, text: string): void;
/**
 * Sets the `String` tooltip of the item at the specified index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param idx int
 * @param tooltip string
 */
  setItemTooltip(rid: RID, idx: int, tooltip: string): void;
/**
 * Sets the minimum width of the global menu.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param width float
 */
  setMinimumWidth(rid: RID, width: float): void;
/**
 * Registers callable to emit when the menu is about to show.
 * 
 * **Note:** The OS can simulate menu opening to track menu item changes and global shortcuts, in which case the corresponding close callback is not triggered. Use `is_opened` to check if the menu is currently opened.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param rid RID
 * @param callback Callable
 */
  setPopupCloseCallback(rid: RID, callback: Callable): void;
/**
 * Registers callable to emit after the menu is closed.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param rid RID
 * @param callback Callable
 */
  setPopupOpenCallback(rid: RID, callback: Callable): void;
/**
 * `NativeMenu` supports native global main menu.
 */
  static readonly FEATURE_GLOBAL_MENU: int;
/**
 * `NativeMenu` supports native popup menus.
 */
  static readonly FEATURE_POPUP_MENU: int;
/**
 * `NativeMenu` supports menu open and close callbacks.
 */
  static readonly FEATURE_OPEN_CLOSE_CALLBACK: int;
/**
 * `NativeMenu` supports menu item hover callback.
 */
  static readonly FEATURE_HOVER_CALLBACK: int;
/**
 * `NativeMenu` supports menu item accelerator/key callback.
 */
  static readonly FEATURE_KEY_CALLBACK: int;
/**
 * Invalid special system menu ID.
 */
  static readonly INVALID_MENU_ID: int;
/**
 * Global main menu ID.
 */
  static readonly MAIN_MENU_ID: int;
/**
 * Application (first menu after "Apple" menu on macOS) menu ID.
 */
  static readonly APPLICATION_MENU_ID: int;
/**
 * "Window" menu ID (on macOS this menu includes standard window control items and a list of open windows).
 */
  static readonly WINDOW_MENU_ID: int;
/**
 * "Help" menu ID (on macOS this menu includes help search bar).
 */
  static readonly HELP_MENU_ID: int;
/**
 * Dock icon right-click menu ID (on macOS this menu include standard application control items and a list of open windows).
 */
  static readonly DOCK_MENU_ID: int;
}
