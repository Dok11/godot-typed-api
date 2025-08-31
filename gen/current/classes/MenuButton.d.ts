import type { Button, GodotArray, GodotDictionary, PopupMenu, Signal, float, int } from "../index.d.ts";
/**
 * A button that brings up a `PopupMenu` when clicked.
 * 
 * A button that brings up a `PopupMenu` when clicked. To create new items inside this `PopupMenu`, use `get_popup().add_item("My Item Name")`. You can also create them directly from Godot editor's inspector.
 * See also `BaseButton` which contains common properties and methods associated with this node.
 */
export class MenuButton extends Button {
  actionMode: int;
  flat: boolean;
  focusMode: int;
/**
 * The number of items currently in the list.
 */
  itemCount: int;
/**
 * If `true`, when the cursor hovers above another `MenuButton` within the same parent which also has `switch_on_hover` enabled, it will close the current `MenuButton` and open the other one.
 */
  switchOnHover: boolean;
  toggleMode: boolean;
/**
 * Returns the `PopupMenu` contained in this button.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `Window.visible` property.
 * @returns PopupMenu
 */
  getPopup(): PopupMenu;
/**
 * If `true`, shortcuts are disabled and cannot be used to trigger the button.
 * @param disabled boolean
 */
  setDisableShortcuts(disabled: boolean): void;
/**
 * Adjusts popup position and sizing for the `MenuButton`, then shows the `PopupMenu`. Prefer this over using `get_popup().popup()`.
 */
  showPopup(): void;
/**
 * Emitted when the `PopupMenu` of this MenuButton is about to show.
 */
  aboutToPopup: Signal<[]>;
}
