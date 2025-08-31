import type { Control, GodotArray, GodotDictionary, PopupMenu, float, int } from "../index.d.ts";
/**
 * A horizontal menu bar that creates a menu for each `PopupMenu` child.
 * 
 * A horizontal menu bar that creates a menu for each `PopupMenu` child. New items are created by adding `PopupMenu`s to this node. Item title is determined by `Window.title`, or node name if `Window.title` is empty. Item title can be overridden using `set_menu_title`.
 */
export class MenuBar extends Control {
/**
 * Flat `MenuBar` don't display item decoration.
 */
  flat: boolean;
/**
 * Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
/**
 * If `true`, `MenuBar` will use system global menu when supported.
 * 
 * **Note:** If `true` and global menu is supported, this node is not displayed, has zero size, and all its child nodes except `PopupMenu`s are inaccessible.
 * 
 * **Note:** This property overrides the value of the `PopupMenu.prefer_native_menu` property of the child nodes.
 */
  preferGlobalMenu: boolean;
/**
 * Position order in the global menu to insert `MenuBar` items at. All menu items in the `MenuBar` are always inserted as a continuous range. Menus with lower `start_index` are inserted first. Menus with `start_index` equal to `-1` are inserted last.
 */
  startIndex: int;
/**
 * If `true`, when the cursor hovers above menu item, it will close the current `PopupMenu` and open the other one.
 */
  switchOnHover: boolean;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * Returns number of menu items.
 * @returns int
 */
  getMenuCount(): int;
/**
 * Returns `PopupMenu` associated with menu item.
 * @param menu int
 * @returns PopupMenu
 */
  getMenuPopup(menu: int): PopupMenu;
/**
 * Returns menu item title.
 * @param menu int
 * @returns string
 */
  getMenuTitle(menu: int): string;
/**
 * Returns menu item tooltip.
 * @param menu int
 * @returns string
 */
  getMenuTooltip(menu: int): string;
/**
 * Returns `true`, if menu item is disabled.
 * @param menu int
 * @returns boolean
 */
  isMenuDisabled(menu: int): boolean;
/**
 * Returns `true`, if menu item is hidden.
 * @param menu int
 * @returns boolean
 */
  isMenuHidden(menu: int): boolean;
/**
 * Returns `true`, if system global menu is supported and used by this `MenuBar`.
 * @returns boolean
 */
  isNativeMenu(): boolean;
/**
 * If `true`, shortcuts are disabled and cannot be used to trigger the button.
 * @param disabled boolean
 */
  setDisableShortcuts(disabled: boolean): void;
/**
 * If `true`, menu item is disabled.
 * @param menu int
 * @param disabled boolean
 */
  setMenuDisabled(menu: int, disabled: boolean): void;
/**
 * If `true`, menu item is hidden.
 * @param menu int
 * @param hidden boolean
 */
  setMenuHidden(menu: int, hidden: boolean): void;
/**
 * Sets menu item title.
 * @param menu int
 * @param title string
 */
  setMenuTitle(menu: int, title: string): void;
/**
 * Sets menu item tooltip.
 * @param menu int
 * @param tooltip string
 */
  setMenuTooltip(menu: int, tooltip: string): void;
}
