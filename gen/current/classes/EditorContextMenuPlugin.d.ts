import type { Callable, GodotArray, GodotDictionary, PackedStringArray, PopupMenu, RefCounted, Shortcut, Texture2D, float, int } from "../index.d.ts";
/**
 * Plugin for adding custom context menus in the editor.
 * 
 * `EditorContextMenuPlugin` allows for the addition of custom options in the editor's context menu.
 * Currently, context menus are supported for three commonly used areas: the file system, scene tree, and editor script list panel.
 */
export class EditorContextMenuPlugin extends RefCounted {
/**
 * Add custom option to the context menu of the plugin's specified slot. When the option is activated, `callback` will be called. Callback should take single `Array` argument; array contents depend on context menu slot.
 * 
 * 				```gdscript
 * 
 * 				func _popup_menu(paths):
 * 				    add_context_menu_item("File Custom options", handle, ICON)
 * 				
 * 
 * ```
 * If you want to assign shortcut to the menu item, use `add_context_menu_item_from_shortcut` instead.
 * @param name string
 * @param callback Callable
 * @param icon Texture2D (optional, default: null)
 */
  addContextMenuItem(name: string, callback: Callable, icon?: Texture2D): void;
/**
 * Add custom option to the context menu of the plugin's specified slot. The option will have the `shortcut` assigned and reuse its callback. The shortcut has to be registered beforehand with `add_menu_shortcut`.
 * 
 * 				```gdscript
 * 
 * 				func _init():
 * 				    add_menu_shortcut(SHORTCUT, handle)
 * 
 * 				func _popup_menu(paths):
 * 				    add_context_menu_item_from_shortcut("File Custom options", SHORTCUT, ICON)
 * 				
 * 
 * ```
 * @param name string
 * @param shortcut Shortcut
 * @param icon Texture2D (optional, default: null)
 */
  addContextMenuItemFromShortcut(name: string, shortcut: Shortcut, icon?: Texture2D): void;
/**
 * Add a submenu to the context menu of the plugin's specified slot. The submenu is not automatically handled, you need to connect to its signals yourself. Also the submenu is freed on every popup, so provide a new `PopupMenu` every time.
 * 
 * 				```gdscript
 * 
 * 				func _popup_menu(paths):
 * 				    var popup_menu = PopupMenu.new()
 * 				    popup_menu.add_item("Blue")
 * 				    popup_menu.add_item("White")
 * 				    popup_menu.id_pressed.connect(_on_color_submenu_option)
 * 
 * 				    add_context_submenu_item("Set Node Color", popup_menu)
 * 				
 * 
 * ```
 * @param name string
 * @param menu PopupMenu
 * @param icon Texture2D (optional, default: null)
 */
  addContextSubmenuItem(name: string, menu: PopupMenu, icon?: Texture2D): void;
/**
 * Registers a shortcut associated with the plugin's context menu. This method should be called once (e.g. in plugin's `Object._init`). `callback` will be called when user presses the specified `shortcut` while the menu's context is in effect (e.g. FileSystem dock is focused). Callback should take single `Array` argument; array contents depend on context menu slot.
 * 
 * 				```gdscript
 * 
 * 				func _init():
 * 				    add_menu_shortcut(SHORTCUT, handle)
 * 				
 * 
 * ```
 * @param shortcut Shortcut
 * @param callback Callable
 */
  addMenuShortcut(shortcut: Shortcut, callback: Callable): void;
/**
 * Called when creating a context menu, custom options can be added by using the `add_context_menu_item` or `add_context_menu_item_from_shortcut` functions. `paths` contains currently selected paths (depending on menu), which can be used to conditionally add options.
 * @param paths PackedStringArray
 */
  private popupMenu(paths: PackedStringArray): void;
/**
 * Context menu of Scene dock. `_popup_menu` will be called with a list of paths to currently selected nodes, while option callback will receive the list of currently selected nodes.
 */
  static readonly CONTEXT_SLOT_SCENE_TREE: int;
/**
 * Context menu of FileSystem dock. `_popup_menu` and option callback will be called with list of paths of the currently selected files.
 */
  static readonly CONTEXT_SLOT_FILESYSTEM: int;
/**
 * Context menu of Script editor's script tabs. `_popup_menu` will be called with the path to the currently edited script, while option callback will receive reference to that script.
 */
  static readonly CONTEXT_SLOT_SCRIPT_EDITOR: int;
/**
 * The "Create..." submenu of FileSystem dock's context menu. `_popup_menu` and option callback will be called with list of paths of the currently selected files.
 */
  static readonly CONTEXT_SLOT_FILESYSTEM_CREATE: int;
/**
 * Context menu of Script editor's code editor. `_popup_menu` will be called with the path to the `CodeEdit` node. You can fetch it using this code:
 * 
 * 			```gdscript
 * 
 * 			func _popup_menu(paths):
 * 			    var code_edit = Engine.get_main_loop().root.get_node(paths[0]);
 * 			
 * 
 * ```
 * The option callback will receive reference to that node. You can use `CodeEdit` methods to perform symbol lookups etc.
 */
  static readonly CONTEXT_SLOT_SCRIPT_EDITOR_CODE: int;
/**
 * Context menu of scene tabs. `_popup_menu` will be called with the path of the clicked scene, or empty `PackedStringArray` if the menu was opened on empty space. The option callback will receive the path of the clicked scene, or empty `String` if none was clicked.
 */
  static readonly CONTEXT_SLOT_SCENE_TABS: int;
/**
 * Context menu of 2D editor's basic right-click menu. `_popup_menu` will be called with paths to all `CanvasItem` nodes under the cursor. You can fetch them using this code:
 * 
 * 			```gdscript
 * 
 * 			func _popup_menu(paths):
 * 			    var canvas_item = Engine.get_main_loop().root.get_node(paths[0]); # Replace 0 with the desired index.
 * 			
 * 
 * ```
 * The paths array is empty if there weren't any nodes under cursor. The option callback will receive a typed array of `CanvasItem` nodes.
 */
  static readonly CONTEXT_SLOT_2D_EDITOR: int;
}
