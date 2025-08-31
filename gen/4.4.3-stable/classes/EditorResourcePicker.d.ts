import type { GodotArray, GodotDictionary, HBoxContainer, Object, PackedStringArray, Resource, Signal, float, int } from "../index.d.ts";
/**
 * Godot editor's control for selecting `Resource` type properties.
 * 
 * This `Control` node is used in the editor's Inspector dock to allow editing of `Resource` type properties. It provides options for creating, loading, saving and converting resources. Can be used with `EditorInspectorPlugin` to recreate the same behavior.
 * 
 * **Note:** This `Control` does not include any editor for the resource, as editing is controlled by the Inspector dock itself or sub-Inspectors.
 */
export class EditorResourcePicker extends HBoxContainer {
/**
 * The base type of allowed resource types. Can be a comma-separated list of several options.
 */
  baseType: string;
/**
 * If `true`, the value can be selected and edited.
 */
  editable: boolean;
/**
 * The edited resource value.
 */
  editedResource: Resource;
/**
 * If `true`, the main button with the resource preview works in the toggle mode. Use `set_toggle_pressed` to manually set the state.
 */
  toggleMode: boolean;
/**
 * Returns a list of all allowed types and subtypes corresponding to the `base_type`. If the `base_type` is empty, an empty list is returned.
 * @returns PackedStringArray
 */
  getAllowedTypes(): PackedStringArray;
/**
 * This virtual method can be implemented to handle context menu items not handled by default. See `_set_create_options`.
 * @param id int
 * @returns boolean
 */
  private handleMenuSelected(id: int): boolean;
/**
 * This virtual method is called when updating the context menu of `EditorResourcePicker`. Implement this method to override the "New ..." items with your own options. `menu_node` is a reference to the `PopupMenu` node.
 * 
 * **Note:** Implement `_handle_menu_selected` to handle these custom items.
 * @param menuNode Object
 */
  private setCreateOptions(menuNode: Object): void;
/**
 * Sets the toggle mode state for the main button. Works only if `toggle_mode` is set to `true`.
 * @param pressed boolean
 */
  setTogglePressed(pressed: boolean): void;
/**
 * Emitted when the value of the edited resource was changed.
 */
  resourceChanged: Signal<[resource: Resource]>;
/**
 * Emitted when the resource value was set and user clicked to edit it. When `inspect` is `true`, the signal was caused by the context menu "Edit" or "Inspect" option.
 */
  resourceSelected: Signal<[resource: Resource, inspect: boolean]>;
}
