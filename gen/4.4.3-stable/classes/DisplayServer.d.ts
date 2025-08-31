import type { Callable, Color, Dictionary, GodotArray, GodotDictionary, Image, Object, PackedInt32Array, PackedStringArray, PackedVector2Array, RID, Rect2, Rect2i, Resource, Texture2D, Variant, Vector2, Vector2i, Vector3i, float, int } from "../index.d.ts";
/**
 * A server interface for low-level window management.
 * 
 * `DisplayServer` handles everything related to window management. It is separated from `OS` as a single operating system may support multiple display servers.
 * 
 * **Headless mode:** Starting the engine with the `--headless` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html) disables all rendering and window management functions. Most functions from `DisplayServer` will return dummy values in this case.
 */
export class DisplayServer extends Object {
/**
 * Plays the beep sound from the operative system, if possible. Because it comes from the OS, the beep sound will be audible even if the application is muted. It may also be disabled for the entire OS by the user.
 * 
 * **Note:** This method is implemented on macOS, Linux (X11/Wayland), and Windows.
 */
  beep(): void;
/**
 * Returns the user's clipboard as a string if possible.
 * @returns string
 */
  clipboardGet(): string;
/**
 * Returns the user's clipboard as an image if possible.
 * 
 * **Note:** This method uses the copied pixel data, e.g. from a image editing software or a web browser, not an image file copied from file explorer.
 * @returns Image
 */
  clipboardGetImage(): Image;
/**
 * Returns the user's primary (https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer) clipboard as a string if possible. This is the clipboard that is set when the user selects text in any application, rather than when pressing `Ctrl + C`. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.
 * 
 * **Note:** This method is only implemented on Linux (X11/Wayland).
 * @returns string
 */
  clipboardGetPrimary(): string;
/**
 * Returns `true` if there is a text content on the user's clipboard.
 * @returns boolean
 */
  clipboardHas(): boolean;
/**
 * Returns `true` if there is an image content on the user's clipboard.
 * @returns boolean
 */
  clipboardHasImage(): boolean;
/**
 * Sets the user's clipboard content to the given string.
 * @param clipboard string
 */
  clipboardSet(clipboard: string): void;
/**
 * Sets the user's primary (https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer) clipboard content to the given string. This is the clipboard that is set when the user selects text in any application, rather than when pressing `Ctrl + C`. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.
 * 
 * **Note:** This method is only implemented on Linux (X11/Wayland).
 * @param clipboardPrimary string
 */
  clipboardSetPrimary(clipboardPrimary: string): void;
/**
 * Creates a new application status indicator with the specified icon, tooltip, and activation callback.
 * `callback` should take two arguments: the pressed mouse button (one of the `MouseButton` constants) and the click position in screen coordinates (a `Vector2i`).
 * @param icon Texture2D
 * @param tooltip string
 * @param callback Callable
 * @returns int
 */
  createStatusIndicator(icon: Texture2D, tooltip: string, callback: Callable): int;
/**
 * Returns the default mouse cursor shape set by `cursor_set_shape`.
 * @returns int
 */
  cursorGetShape(): int;
/**
 * Sets a custom mouse cursor image for the given `shape`. This means the user's operating system and mouse cursor theme will no longer influence the mouse cursor's appearance.
 * `cursor` can be either a `Texture2D` or an `Image`, and it should not be larger than 256×256 to display correctly. Optionally, `hotspot` can be set to offset the image's position relative to the click point. By default, `hotspot` is set to the top-left corner of the image. See also `cursor_set_shape`.
 * @param cursor Resource
 * @param shape int (optional, default: 0)
 * @param hotspot Vector2 (optional, default: Vector2(0, 0))
 */
  cursorSetCustomImage(cursor: Resource, shape?: int, hotspot?: Vector2): void;
/**
 * Sets the default mouse cursor shape. The cursor's appearance will vary depending on the user's operating system and mouse cursor theme. See also `cursor_get_shape` and `cursor_set_custom_image`.
 * @param shape int
 */
  cursorSetShape(shape: int): void;
/**
 * Removes the application status indicator.
 * @param id int
 */
  deleteStatusIndicator(id: int): void;
/**
 * Shows a text input dialog which uses the operating system's native look-and-feel. `callback` should accept a single `String` parameter which contains the text field's contents.
 * 
 * **Note:** This method is implemented if the display server has the `FEATURE_NATIVE_DIALOG_INPUT` feature. Supported platforms include macOS, Windows, and Android.
 * @param title string
 * @param description string
 * @param existingText string
 * @param callback Callable
 * @returns int
 */
  dialogInputText(title: string, description: string, existingText: string, callback: Callable): int;
/**
 * Shows a text dialog which uses the operating system's native look-and-feel. `callback` should accept a single [int] parameter which corresponds to the index of the pressed button.
 * 
 * **Note:** This method is implemented if the display server has the `FEATURE_NATIVE_DIALOG` feature. Supported platforms include macOS, Windows, and Android.
 * @param title string
 * @param description string
 * @param buttons PackedStringArray
 * @param callback Callable
 * @returns int
 */
  dialogShow(title: string, description: string, buttons: PackedStringArray, callback: Callable): int;
/**
 * Allows the `process_id` PID to steal focus from this window. In other words, this disables the operating system's focus stealing protection for the specified PID.
 * 
 * **Note:** This method is implemented only on Windows.
 * @param processId int
 */
  enableForStealingFocus(processId: int): void;
/**
 * Displays OS native dialog for selecting files or directories in the file system.
 * Each filter string in the `filters` array should be formatted like this: `*.png,*.jpg,*.jpeg;Image Files;image/png,image/jpeg`. The description text of the filter is optional and can be omitted. It is recommended to set both file extension and MIME type. See also `FileDialog.filters`.
 * Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int`. **On Android,** callback argument `selected_filter_index` is always zero.
 * 
 * **Note:** This method is implemented if the display server has the `FEATURE_NATIVE_DIALOG_FILE` feature. Supported platforms include Linux (X11/Wayland), Windows, macOS, and Android.
 * 
 * **Note:** `current_directory` might be ignored.
 * 
 * **Note:** Embedded file dialog and Windows file dialog support only file extensions, while Android, Linux, and macOS file dialogs also support MIME types.
 * 
 * **Note:** On Android and Linux, `show_hidden` is ignored.
 * 
 * **Note:** On Android and macOS, native file dialogs have no title.
 * 
 * **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use `OS.get_granted_permissions` to get a list of saved bookmarks.
 * @param title string
 * @param currentDirectory string
 * @param filename string
 * @param showHidden boolean
 * @param mode int
 * @param filters PackedStringArray
 * @param callback Callable
 * @returns int
 */
  fileDialogShow(title: string, currentDirectory: string, filename: string, showHidden: boolean, mode: int, filters: PackedStringArray, callback: Callable): int;
/**
 * Displays OS native dialog for selecting files or directories in the file system with additional user selectable options.
 * Each filter string in the `filters` array should be formatted like this: `*.png,*.jpg,*.jpeg;Image Files;image/png,image/jpeg`. The description text of the filter is optional and can be omitted. It is recommended to set both file extension and MIME type. See also `FileDialog.filters`.
 * `options` is array of `Dictionary`s with the following keys:
 * - `"name"` - option's name `String`.
 * - `"values"` - `PackedStringArray` of values. If empty, boolean option (check box) is used.
 * - `"default"` - default selected option index ([int]) or default boolean value ([bool]).
 * Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int, selected_option: Dictionary`.
 * 
 * **Note:** This method is implemented if the display server has the `FEATURE_NATIVE_DIALOG_FILE_EXTRA` feature. Supported platforms include Linux (X11/Wayland), Windows, and macOS.
 * 
 * **Note:** `current_directory` might be ignored.
 * 
 * **Note:** Embedded file dialog and Windows file dialog support only file extensions, while Android, Linux, and macOS file dialogs also support MIME types.
 * 
 * **Note:** On Linux (X11), `show_hidden` is ignored.
 * 
 * **Note:** On macOS, native file dialogs have no title.
 * 
 * **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use `OS.get_granted_permissions` to get a list of saved bookmarks.
 * @param title string
 * @param currentDirectory string
 * @param root string
 * @param filename string
 * @param showHidden boolean
 * @param mode int
 * @param filters PackedStringArray
 * @param options Dictionary[]
 * @param callback Callable
 * @returns int
 */
  fileDialogWithOptionsShow(title: string, currentDirectory: string, root: string, filename: string, showHidden: boolean, mode: int, filters: PackedStringArray, options: Dictionary[], callback: Callable): int;
/**
 * Forces window manager processing while ignoring all `InputEvent`s. See also `process_events`.
 * 
 * **Note:** This method is implemented on Windows and macOS.
 */
  forceProcessAndDropEvents(): void;
/**
 * Returns OS theme accent color. Returns `Color(0, 0, 0, 0)`, if accent color is unknown.
 * 
 * **Note:** This method is implemented on macOS, Windows, and Android.
 * @returns Color
 */
  getAccentColor(): Color;
/**
 * Returns the OS theme base color (default control background). Returns `Color(0, 0, 0, 0)` if the base color is unknown.
 * 
 * **Note:** This method is implemented on macOS, Windows, and Android.
 * @returns Color
 */
  getBaseColor(): Color;
/**
 * Returns an `Array` of `Rect2`, each of which is the bounding rectangle for a display cutout or notch. These are non-functional areas on edge-to-edge screens used by cameras and sensors. Returns an empty array if the device does not have cutouts. See also `get_display_safe_area`.
 * 
 * **Note:** Currently only implemented on Android. Other platforms will return an empty array even if they do have display cutouts or notches.
 * @returns Rect2[]
 */
  getDisplayCutouts(): Rect2[];
/**
 * Returns the unobscured area of the display where interactive controls should be rendered. See also `get_display_cutouts`.
 * 
 * **Note:** Currently only implemented on Android and iOS. On other platforms, `screen_get_usable_rect(SCREEN_OF_MAIN_WINDOW)` will be returned as a fallback. See also `screen_get_usable_rect`.
 * @returns Rect2i
 */
  getDisplaySafeArea(): Rect2i;
/**
 * Returns the index of the screen containing the window with the keyboard focus, or the primary screen if there's no focused window.
 * @returns int
 */
  getKeyboardFocusScreen(): int;
/**
 * Returns the name of the `DisplayServer` currently in use. Most operating systems only have a single `DisplayServer`, but Linux has access to more than one `DisplayServer` (currently X11 and Wayland).
 * The names of built-in display servers are `Windows`, `macOS`, `X11` (Linux), `Wayland` (Linux), `Android`, `iOS`, `web` (HTML5), and `headless` (when started with the `--headless` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html)).
 * @returns string
 */
  getName(): string;
/**
 * Returns index of the primary screen.
 * @returns int
 */
  getPrimaryScreen(): int;
/**
 * Returns the number of displays available.
 * @returns int
 */
  getScreenCount(): int;
/**
 * Returns the index of the screen that overlaps the most with the given rectangle. Returns `-1` if the rectangle doesn't overlap with any screen or has no area.
 * @param rect Rect2
 * @returns int
 */
  getScreenFromRect(rect: Rect2): int;
/**
 * Returns `true` if positions of **OK** and **Cancel** buttons are swapped in dialogs. This is enabled by default on Windows to follow interface conventions, and be toggled by changing `ProjectSettings.gui/common/swap_cancel_ok`.
 * 
 * **Note:** This doesn't affect native dialogs such as the ones spawned by `DisplayServer.dialog_show`.
 * @returns boolean
 */
  getSwapCancelOk(): boolean;
/**
 * Returns the ID of the window at the specified screen `position` (in pixels). On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
 * [codeblock lang=text]
 * * (0, 0)        +-------+
 * |       |
 * +-------------+ |       |
 * |             | |       |
 * |             | |       |
 * +-------------+ +-------+
 * [/codeblock]
 * @param position Vector2i
 * @returns int
 */
  getWindowAtScreenPosition(position: Vector2i): int;
/**
 * Returns the list of Godot window IDs belonging to this process.
 * 
 * **Note:** Native dialogs are not included in this list.
 * @returns PackedInt32Array
 */
  getWindowList(): PackedInt32Array;
/**
 * Adds a new checkable item with text `label` to the global menu with ID `menu_root`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddCheckItem(menuRoot: string, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new checkable item with text `label` and icon `icon` to the global menu with ID `menu_root`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param icon Texture2D
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddIconCheckItem(menuRoot: string, icon: Texture2D, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new item with text `label` and icon `icon` to the global menu with ID `menu_root`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param icon Texture2D
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddIconItem(menuRoot: string, icon: Texture2D, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new radio-checkable item with text `label` and icon `icon` to the global menu with ID `menu_root`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `global_menu_set_item_checked` for more info on how to control it.
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param icon Texture2D
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddIconRadioCheckItem(menuRoot: string, icon: Texture2D, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new item with text `label` to the global menu with ID `menu_root`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddItem(menuRoot: string, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new item with text `label` to the global menu with ID `menu_root`.
 * Contrarily to normal binary items, multistate items can have more than two states, as defined by `max_states`. Each press or activate of the item will increase the state by one. The default value is defined by `default_state`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** By default, there's no indication of the current item state, it should be changed manually.
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param label string
 * @param maxStates int
 * @param defaultState int
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddMultistateItem(menuRoot: string, label: string, maxStates: int, defaultState: int, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a new radio-checkable item with text `label` to the global menu with ID `menu_root`.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See `global_menu_set_item_checked` for more info on how to control it.
 * 
 * **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param label string
 * @param callback Callable (optional, default: Callable())
 * @param keyCallback Callable (optional, default: Callable())
 * @param tag Variant (optional, default: null)
 * @param accelerator int (optional, default: 0)
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddRadioCheckItem(menuRoot: string, label: string, callback?: Callable, keyCallback?: Callable, tag?: Variant, accelerator?: int, index?: int): int;
/**
 * Adds a separator between items to the global menu with ID `menu_root`. Separators also occupy an index.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddSeparator(menuRoot: string, index?: int): int;
/**
 * Adds an item that will act as a submenu of the global menu `menu_root`. The `submenu` argument is the ID of the global menu root that will be shown when the item is clicked.
 * Returns index of the inserted item, it's not guaranteed to be the same as `index` value.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @param label string
 * @param submenu string
 * @param index int (optional, default: -1)
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuAddSubmenuItem(menuRoot: string, label: string, submenu: string, index?: int): int;
/**
 * Removes all items from the global menu with ID `menu_root`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Supported system menu IDs:**
 * [codeblock lang=text]
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * "_apple" - Apple menu (macOS, custom items added before "Services").
 * "_window" - Window menu (macOS, custom items added after "Bring All to Front").
 * "_help" - Help menu (macOS).
 * [/codeblock]
 * @param menuRoot string
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuClear(menuRoot: string): void;
/**
 * Returns the accelerator of the item at index `idx`. Accelerators are special combinations of keys that activate the item, no matter which control is focused.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemAccelerator(menuRoot: string, idx: int): int;
/**
 * Returns the callback of the item at index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns Callable
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemCallback(menuRoot: string, idx: int): Callable;
/**
 * Returns number of items in the global menu with ID `menu_root`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemCount(menuRoot: string): int;
/**
 * Returns the icon of the item at index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns Texture2D
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemIcon(menuRoot: string, idx: int): Texture2D;
/**
 * Returns the horizontal offset of the item at the given `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemIndentationLevel(menuRoot: string, idx: int): int;
/**
 * Returns the index of the item with the specified `tag`. Indices are automatically assigned to each item by the engine, and cannot be set manually.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param tag Variant
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemIndexFromTag(menuRoot: string, tag: Variant): int;
/**
 * Returns the index of the item with the specified `text`. Indices are automatically assigned to each item by the engine, and cannot be set manually.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param text string
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemIndexFromText(menuRoot: string, text: string): int;
/**
 * Returns the callback of the item accelerator at index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns Callable
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemKeyCallback(menuRoot: string, idx: int): Callable;
/**
 * Returns number of states of a multistate item. See `global_menu_add_multistate_item` for details.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemMaxStates(menuRoot: string, idx: int): int;
/**
 * Returns the state of a multistate item. See `global_menu_add_multistate_item` for details.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemState(menuRoot: string, idx: int): int;
/**
 * Returns the submenu ID of the item at index `idx`. See `global_menu_add_submenu_item` for more info on how to add a submenu.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns string
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemSubmenu(menuRoot: string, idx: int): string;
/**
 * Returns the metadata of the specified item, which might be of any type. You can set it with `global_menu_set_item_tag`, which provides a simple way of assigning context data to items.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns Variant
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemTag(menuRoot: string, idx: int): Variant;
/**
 * Returns the text of the item at index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns string
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemText(menuRoot: string, idx: int): string;
/**
 * Returns the tooltip associated with the specified index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns string
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetItemTooltip(menuRoot: string, idx: int): string;
/**
 * Returns Dictionary of supported system menu IDs and names.
 * 
 * **Note:** This method is implemented only on macOS.
 * @returns GodotDictionary<any>
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuGetSystemMenuRoots(): GodotDictionary<any>;
/**
 * Returns `true` if the item at index `idx` is checkable in some way, i.e. if it has a checkbox or radio button.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuIsItemCheckable(menuRoot: string, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` is checked.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuIsItemChecked(menuRoot: string, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` is disabled. When it is disabled it can't be selected, or its action invoked.
 * See `global_menu_set_item_disabled` for more info on how to disable an item.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuIsItemDisabled(menuRoot: string, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` is hidden.
 * See `global_menu_set_item_hidden` for more info on how to hide an item.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuIsItemHidden(menuRoot: string, idx: int): boolean;
/**
 * Returns `true` if the item at index `idx` has radio button-style checkability.
 * 
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @returns boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuIsItemRadioCheckable(menuRoot: string, idx: int): boolean;
/**
 * Removes the item at index `idx` from the global menu `menu_root`.
 * 
 * **Note:** The indices of items after the removed item will be shifted by one.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuRemoveItem(menuRoot: string, idx: int): void;
/**
 * Sets the accelerator of the item at index `idx`. `keycode` can be a single `Key`, or a combination of `KeyModifierMask`s and `Key`s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (`Ctrl + A`).
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param keycode int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemAccelerator(menuRoot: string, idx: int, keycode: int): void;
/**
 * Sets the callback of the item at index `idx`. Callback is emitted when an item is pressed.
 * 
 * **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param callback Callable
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemCallback(menuRoot: string, idx: int, callback: Callable): void;
/**
 * Sets whether the item at index `idx` has a checkbox. If `false`, sets the type of the item to plain text.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param checkable boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemCheckable(menuRoot: string, idx: int, checkable: boolean): void;
/**
 * Sets the checkstate status of the item at index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param checked boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemChecked(menuRoot: string, idx: int, checked: boolean): void;
/**
 * Enables/disables the item at index `idx`. When it is disabled, it can't be selected and its action can't be invoked.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param disabled boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemDisabled(menuRoot: string, idx: int, disabled: boolean): void;
/**
 * Hides/shows the item at index `idx`. When it is hidden, an item does not appear in a menu and its action cannot be invoked.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param hidden boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemHidden(menuRoot: string, idx: int, hidden: boolean): void;
/**
 * Sets the callback of the item at index `idx`. The callback is emitted when an item is hovered.
 * 
 * **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param callback Callable
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemHoverCallbacks(menuRoot: string, idx: int, callback: Callable): void;
/**
 * Replaces the `Texture2D` icon of the specified `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * 
 * **Note:** This method is not supported by macOS "_dock" menu items.
 * @param menuRoot string
 * @param idx int
 * @param icon Texture2D
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemIcon(menuRoot: string, idx: int, icon: Texture2D): void;
/**
 * Sets the horizontal offset of the item at the given `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param level int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemIndentationLevel(menuRoot: string, idx: int, level: int): void;
/**
 * Sets the callback of the item at index `idx`. Callback is emitted when its accelerator is activated.
 * 
 * **Note:** The `key_callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param keyCallback Callable
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemKeyCallback(menuRoot: string, idx: int, keyCallback: Callable): void;
/**
 * Sets number of state of a multistate item. See `global_menu_add_multistate_item` for details.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param maxStates int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemMaxStates(menuRoot: string, idx: int, maxStates: int): void;
/**
 * Sets the type of the item at the specified index `idx` to radio button. If `false`, sets the type of the item to plain text.
 * 
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param checkable boolean
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemRadioCheckable(menuRoot: string, idx: int, checkable: boolean): void;
/**
 * Sets the state of a multistate item. See `global_menu_add_multistate_item` for details.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param state int
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemState(menuRoot: string, idx: int, state: int): void;
/**
 * Sets the submenu of the item at index `idx`. The submenu is the ID of a global menu root that would be shown when the item is clicked.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param submenu string
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemSubmenu(menuRoot: string, idx: int, submenu: string): void;
/**
 * Sets the metadata of an item, which may be of any type. You can later get it with `global_menu_get_item_tag`, which provides a simple way of assigning context data to items.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param tag Variant
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemTag(menuRoot: string, idx: int, tag: Variant): void;
/**
 * Sets the text of the item at index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param text string
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemText(menuRoot: string, idx: int, text: string): void;
/**
 * Sets the `String` tooltip of the item at the specified index `idx`.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param menuRoot string
 * @param idx int
 * @param tooltip string
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetItemTooltip(menuRoot: string, idx: int, tooltip: string): void;
/**
 * Registers callables to emit when the menu is respectively about to show or closed. Callback methods should have zero arguments.
 * @param menuRoot string
 * @param openCallback Callable
 * @param closeCallback Callable
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  globalMenuSetPopupCallbacks(menuRoot: string, openCallback: Callable, closeCallback: Callable): void;
/**
 * Returns `true` if any additional outputs have been registered via `register_additional_output`.
 * @returns boolean
 */
  hasAdditionalOutputs(): boolean;
/**
 * Returns `true` if the specified `feature` is supported by the current `DisplayServer`, `false` otherwise.
 * @param feature int
 * @returns boolean
 */
  hasFeature(feature: int): boolean;
/**
 * Returns `true` if hardware keyboard is connected.
 * 
 * **Note:** This method is implemented on Android and iOS, on other platforms this method always returns `true`.
 * @returns boolean
 */
  hasHardwareKeyboard(): boolean;
/**
 * Sets native help system search callbacks.
 * `search_callback` has the following arguments: `String search_string, int result_limit` and return a `Dictionary` with "key, display name" pairs for the search results. Called when the user enters search terms in the `Help` menu.
 * `action_callback` has the following arguments: `String key`. Called when the user selects a search result in the `Help` menu.
 * 
 * **Note:** This method is implemented only on macOS.
 * @param searchCallback Callable
 * @param actionCallback Callable
 */
  helpSetSearchCallbacks(searchCallback: Callable, actionCallback: Callable): void;
/**
 * Returns the text selection in the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) composition string, with the `Vector2i`'s `x` component being the caret position and `y` being the length of the selection.
 * 
 * **Note:** This method is implemented only on macOS.
 * @returns Vector2i
 */
  imeGetSelection(): Vector2i;
/**
 * Returns the composition string contained within the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) window.
 * 
 * **Note:** This method is implemented only on macOS.
 * @returns string
 */
  imeGetText(): string;
/**
 * Returns `true` if OS is using dark mode.
 * 
 * **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).
 * @returns boolean
 */
  isDarkMode(): boolean;
/**
 * Returns `true` if OS supports dark mode.
 * 
 * **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).
 * @returns boolean
 */
  isDarkModeSupported(): boolean;
/**
 * Returns `true` if touch events are available (Android or iOS), the capability is detected on the Web platform or if `ProjectSettings.input_devices/pointing/emulate_touch_from_mouse` is `true`.
 * @returns boolean
 */
  isTouchscreenAvailable(): boolean;
/**
 * Returns `true` if the window background can be made transparent. This method returns `false` if `ProjectSettings.display/window/per_pixel_transparency/allowed` is set to `false`, or if transparency is not supported by the renderer or OS compositor.
 * @returns boolean
 */
  isWindowTransparencyAvailable(): boolean;
/**
 * Returns active keyboard layout index.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.
 * @returns int
 */
  keyboardGetCurrentLayout(): int;
/**
 * Converts a physical (US QWERTY) `keycode` to one in the active keyboard layout.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.
 * @param keycode int
 * @returns int
 */
  keyboardGetKeycodeFromPhysical(keycode: int): int;
/**
 * Converts a physical (US QWERTY) `keycode` to localized label printed on the key in the active keyboard layout.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.
 * @param keycode int
 * @returns int
 */
  keyboardGetLabelFromPhysical(keycode: int): int;
/**
 * Returns the number of keyboard layouts.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.
 * @returns int
 */
  keyboardGetLayoutCount(): int;
/**
 * Returns the ISO-639/BCP-47 language code of the keyboard layout at position `index`.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.
 * @param index int
 * @returns string
 */
  keyboardGetLayoutLanguage(index: int): string;
/**
 * Returns the localized name of the keyboard layout at position `index`.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.
 * @param index int
 * @returns string
 */
  keyboardGetLayoutName(index: int): string;
/**
 * Sets the active keyboard layout.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.
 * @param index int
 */
  keyboardSetCurrentLayout(index: int): void;
/**
 * Returns the current state of mouse buttons (whether each button is pressed) as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to `Input.get_mouse_button_mask`.
 * @returns int
 */
  mouseGetButtonState(): int;
/**
 * Returns the current mouse mode. See also `mouse_set_mode`.
 * @returns int
 */
  mouseGetMode(): int;
/**
 * Returns the mouse cursor's current position in screen coordinates.
 * @returns Vector2i
 */
  mouseGetPosition(): Vector2i;
/**
 * Sets the current mouse mode. See also `mouse_get_mode`.
 * @param mouseMode int
 */
  mouseSetMode(mouseMode: int): void;
/**
 * Perform window manager processing, including input flushing. See also `force_process_and_drop_events`, `Input.flush_buffered_events` and `Input.use_accumulated_input`.
 */
  processEvents(): void;
/**
 * Registers an `Object` which represents an additional output that will be rendered too, beyond normal windows. The `Object` is only used as an identifier, which can be later passed to `unregister_additional_output`.
 * This can be used to prevent Godot from skipping rendering when no normal windows are visible.
 * @param object Object
 */
  registerAdditionalOutput(object: Object): void;
/**
 * Returns the dots per inch density of the specified screen. If `screen` is `SCREEN_OF_MAIN_WINDOW` (the default value), a screen with the main window will be used.
 * 
 * **Note:** On macOS, returned value is inaccurate if fractional display scaling mode is used.
 * 
 * **Note:** On Android devices, the actual screen densities are grouped into six generalized densities:
 * [codeblock lang=text]
 * ldpi - 120 dpi
 * mdpi - 160 dpi
 * hdpi - 240 dpi
 * xhdpi - 320 dpi
 * xxhdpi - 480 dpi
 * xxxhdpi - 640 dpi
 * [/codeblock]
 * 
 * **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS and Windows. Returns `72` on unsupported platforms.
 * @param screen int (optional, default: -1)
 * @returns int
 */
  screenGetDpi(screen?: int): int;
/**
 * Returns screenshot of the `screen`.
 * 
 * **Note:** This method is implemented on Linux (X11), macOS, and Windows.
 * 
 * **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.
 * @param screen int (optional, default: -1)
 * @returns Image
 */
  screenGetImage(screen?: int): Image;
/**
 * Returns screenshot of the screen `rect`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * 
 * **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.
 * @param rect Rect2i
 * @returns Image
 */
  screenGetImageRect(rect: Rect2i): Image;
/**
 * Returns the greatest scale factor of all screens.
 * 
 * **Note:** On macOS returned value is `2.0` if there is at least one hiDPI (Retina) screen in the system, and `1.0` in all other cases.
 * 
 * **Note:** This method is implemented only on macOS.
 * @returns float
 */
  screenGetMaxScale(): float;
/**
 * Returns the `screen`'s current orientation. See also `screen_set_orientation`.
 * 
 * **Note:** This method is implemented on Android and iOS.
 * @param screen int (optional, default: -1)
 * @returns int
 */
  screenGetOrientation(screen?: int): int;
/**
 * Returns color of the display pixel at the `position`.
 * 
 * **Note:** This method is implemented on Linux (X11), macOS, and Windows.
 * 
 * **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.
 * @param position Vector2i
 * @returns Color
 */
  screenGetPixel(position: Vector2i): Color;
/**
 * Returns the screen's top-left corner position in pixels. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
 * [codeblock lang=text]
 * * (0, 0)        +-------+
 * |       |
 * +-------------+ |       |
 * |             | |       |
 * |             | |       |
 * +-------------+ +-------+
 * [/codeblock]
 * See also `screen_get_size`.
 * 
 * **Note:** On Linux (Wayland) this method always returns `(0, 0)`.
 * @param screen int (optional, default: -1)
 * @returns Vector2i
 */
  screenGetPosition(screen?: int): Vector2i;
/**
 * Returns the current refresh rate of the specified screen. If `screen` is `SCREEN_OF_MAIN_WINDOW` (the default value), a screen with the main window will be used.
 * 
 * **Note:** Returns `-1.0` if the DisplayServer fails to find the refresh rate for the specified screen. On Web, `screen_get_refresh_rate` will always return `-1.0` as there is no way to retrieve the refresh rate on that platform.
 * To fallback to a default refresh rate if the method fails, try:
 * 
 * 				```gdscript
 * 
 * 				var refresh_rate = DisplayServer.screen_get_refresh_rate()
 * 				if refresh_rate < 0:
 * 				    refresh_rate = 60.0
 * 				
 * 
 * ```
 * @param screen int (optional, default: -1)
 * @returns float
 */
  screenGetRefreshRate(screen?: int): float;
/**
 * Returns the scale factor of the specified screen by index.
 * 
 * **Note:** On macOS, the returned value is `2.0` for hiDPI (Retina) screens, and `1.0` for all other cases.
 * 
 * **Note:** On Linux (Wayland), the returned value is accurate only when `screen` is `SCREEN_OF_MAIN_WINDOW`. Due to API limitations, passing a direct index will return a rounded-up integer, if the screen has a fractional scale (e.g. `1.25` would get rounded up to `2.0`).
 * 
 * **Note:** This method is implemented on Android, iOS, Web, macOS, and Linux (Wayland).
 * @param screen int (optional, default: -1)
 * @returns float
 */
  screenGetScale(screen?: int): float;
/**
 * Returns the screen's size in pixels. See also `screen_get_position` and `screen_get_usable_rect`.
 * @param screen int (optional, default: -1)
 * @returns Vector2i
 */
  screenGetSize(screen?: int): Vector2i;
/**
 * Returns the portion of the screen that is not obstructed by a status bar in pixels. See also `screen_get_size`.
 * @param screen int (optional, default: -1)
 * @returns Rect2i
 */
  screenGetUsableRect(screen?: int): Rect2i;
/**
 * Returns `true` if the screen should never be turned off by the operating system's power-saving measures. See also `screen_set_keep_on`.
 * @returns boolean
 */
  screenIsKeptOn(): boolean;
/**
 * Sets whether the screen should never be turned off by the operating system's power-saving measures. See also `screen_is_kept_on`.
 * @param enable boolean
 */
  screenSetKeepOn(enable: boolean): void;
/**
 * Sets the `screen`'s `orientation`. See also `screen_get_orientation`.
 * 
 * **Note:** On iOS, this method has no effect if `ProjectSettings.display/window/handheld/orientation` is not set to `SCREEN_SENSOR`.
 * @param orientation int
 * @param screen int (optional, default: -1)
 */
  screenSetOrientation(orientation: int, screen?: int): void;
/**
 * Sets the window icon (usually displayed in the top-left corner) with an `Image`. To use icons in the operating system's native format, use `set_native_icon` instead.
 * 
 * **Note:** Requires support for `FEATURE_ICON`.
 * @param image Image
 */
  setIcon(image: Image): void;
/**
 * Sets the window icon (usually displayed in the top-left corner) in the operating system's *native* format. The file at `filename` must be in `.ico` format on Windows or `.icns` on macOS. By using specially crafted `.ico` or `.icns` icons, `set_native_icon` allows specifying different icons depending on the size the icon is displayed at. This size is determined by the operating system and user preferences (including the display scale factor). To use icons in other formats, use `set_icon` instead.
 * 
 * **Note:** Requires support for `FEATURE_NATIVE_ICON`.
 * @param filename string
 */
  setNativeIcon(filename: string): void;
/**
 * Sets the `callable` that should be called when system theme settings are changed. Callback method should have zero arguments.
 * 
 * **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).
 * @param callable Callable
 */
  setSystemThemeChangeCallback(callable: Callable): void;
/**
 * Opens system emoji and symbol picker.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 */
  showEmojiAndSymbolPicker(): void;
/**
 * Returns the rectangle for the given status indicator `id` in screen coordinates. If the status indicator is not visible, returns an empty `Rect2`.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param id int
 * @returns Rect2
 */
  statusIndicatorGetRect(id: int): Rect2;
/**
 * Sets the application status indicator activation callback. `callback` should take two arguments: [int] mouse button index (one of `MouseButton` values) and `Vector2i` click position in screen coordinates.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param id int
 * @param callback Callable
 */
  statusIndicatorSetCallback(id: int, callback: Callable): void;
/**
 * Sets the application status indicator icon.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param id int
 * @param icon Texture2D
 */
  statusIndicatorSetIcon(id: int, icon: Texture2D): void;
/**
 * Sets the application status indicator native popup menu.
 * 
 * **Note:** On macOS, the menu is activated by any mouse button. Its activation callback is *not* triggered.
 * 
 * **Note:** On Windows, the menu is activated by the right mouse button, selecting the status icon and pressing `Shift + F10`, or the applications key. The menu's activation callback for the other mouse buttons is still triggered.
 * 
 * **Note:** Native popup is only supported if `NativeMenu` supports the `NativeMenu.FEATURE_POPUP_MENU` feature.
 * @param id int
 * @param menuRid RID
 */
  statusIndicatorSetMenu(id: int, menuRid: RID): void;
/**
 * Sets the application status indicator tooltip.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param id int
 * @param tooltip string
 */
  statusIndicatorSetTooltip(id: int, tooltip: string): void;
/**
 * Returns current active tablet driver name.
 * 
 * **Note:** This method is implemented only on Windows.
 * @returns string
 */
  tabletGetCurrentDriver(): string;
/**
 * Returns the total number of available tablet drivers.
 * 
 * **Note:** This method is implemented only on Windows.
 * @returns int
 */
  tabletGetDriverCount(): int;
/**
 * Returns the tablet driver name for the given index.
 * 
 * **Note:** This method is implemented only on Windows.
 * @param idx int
 * @returns string
 */
  tabletGetDriverName(idx: int): string;
/**
 * Set active tablet driver name.
 * Supported drivers:
 * - `winink`: Windows Ink API, default (Windows 8.1+ required).
 * - `wintab`: Wacom Wintab API (compatible device driver required).
 * - `dummy`: Dummy driver, tablet input is disabled.
 * 
 * **Note:** This method is implemented only on Windows.
 * @param name string
 */
  tabletSetCurrentDriver(name: string): void;
/**
 * Returns an `Array` of voice information dictionaries.
 * Each `Dictionary` contains two `String` entries:
 * - `name` is voice name.
 * - `id` is voice identifier.
 * - `language` is language code in `lang_Variant` format. The `lang` part is a 2 or 3-letter code based on the ISO-639 standard, in lowercase. The [code skip-lint]Variant[/code] part is an engine-dependent string describing country, region or/and dialect.
 * Note that Godot depends on system libraries for text-to-speech functionality. These libraries are installed by default on Windows and macOS, but not on all Linux distributions. If they are not present, this method will return an empty list. This applies to both Godot users on Linux, as well as end-users on Linux running Godot games that use text-to-speech.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 * @returns Dictionary[]
 */
  ttsGetVoices(): Dictionary[];
/**
 * Returns an `PackedStringArray` of voice identifiers for the `language`.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 * @param language string
 * @returns PackedStringArray
 */
  ttsGetVoicesForLanguage(language: string): PackedStringArray;
/**
 * Returns `true` if the synthesizer is in a paused state.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 * @returns boolean
 */
  ttsIsPaused(): boolean;
/**
 * Returns `true` if the synthesizer is generating speech, or have utterance waiting in the queue.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 * @returns boolean
 */
  ttsIsSpeaking(): boolean;
/**
 * Puts the synthesizer into a paused state.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 */
  ttsPause(): void;
/**
 * Resumes the synthesizer if it was paused.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 */
  ttsResume(): void;
/**
 * Adds a callback, which is called when the utterance has started, finished, canceled or reached a text boundary.
 * - `TTS_UTTERANCE_STARTED`, `TTS_UTTERANCE_ENDED`, and `TTS_UTTERANCE_CANCELED` callable's method should take one [int] parameter, the utterance ID.
 * - `TTS_UTTERANCE_BOUNDARY` callable's method should take two [int] parameters, the index of the character and the utterance ID.
 * 
 * **Note:** The granularity of the boundary callbacks is engine dependent.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 * @param event int
 * @param callable Callable
 */
  ttsSetUtteranceCallback(event: int, callable: Callable): void;
/**
 * Adds an utterance to the queue. If `interrupt` is `true`, the queue is cleared first.
 * - `voice` identifier is one of the `"id"` values returned by `tts_get_voices` or one of the values returned by `tts_get_voices_for_language`.
 * - `volume` ranges from `0` (lowest) to `100` (highest).
 * - `pitch` ranges from `0.0` (lowest) to `2.0` (highest), `1.0` is default pitch for the current voice.
 * - `rate` ranges from `0.1` (lowest) to `10.0` (highest), `1.0` is a normal speaking rate. Other values act as a percentage relative.
 * - `utterance_id` is passed as a parameter to the callback functions.
 * 
 * **Note:** On Windows and Linux (X11/Wayland), utterance `text` can use SSML markup. SSML support is engine and voice dependent. If the engine does not support SSML, you should strip out all XML markup before calling `tts_speak`.
 * 
 * **Note:** The granularity of pitch, rate, and volume is engine and voice dependent. Values may be truncated.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 * @param text string
 * @param voice string
 * @param volume int (optional, default: 50)
 * @param pitch float (optional, default: 1.0)
 * @param rate float (optional, default: 1.0)
 * @param utteranceId int (optional, default: 0)
 * @param interrupt boolean (optional, default: false)
 */
  ttsSpeak(text: string, voice: string, volume?: int, pitch?: float, rate?: float, utteranceId?: int, interrupt?: boolean): void;
/**
 * Stops synthesis in progress and removes all utterances from the queue.
 * 
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Linux), macOS, and Windows.
 * 
 * **Note:** `ProjectSettings.audio/general/text_to_speech` should be `true` to use text-to-speech.
 */
  ttsStop(): void;
/**
 * Unregisters an `Object` representing an additional output, that was registered via `register_additional_output`.
 * @param object Object
 */
  unregisterAdditionalOutput(object: Object): void;
/**
 * Returns the on-screen keyboard's height in pixels. Returns 0 if there is no keyboard or if it is currently hidden.
 * @returns int
 */
  virtualKeyboardGetHeight(): int;
/**
 * Hides the virtual keyboard if it is shown, does nothing otherwise.
 */
  virtualKeyboardHide(): void;
/**
 * Shows the virtual keyboard if the platform has one.
 * `existing_text` parameter is useful for implementing your own `LineEdit` or `TextEdit`, as it tells the virtual keyboard what text has already been typed (the virtual keyboard uses it for auto-correct and predictions).
 * `position` parameter is the screen space `Rect2` of the edited text.
 * `type` parameter allows configuring which type of virtual keyboard to show.
 * `max_length` limits the number of characters that can be entered if different from `-1`.
 * `cursor_start` can optionally define the current text cursor position if `cursor_end` is not set.
 * `cursor_start` and `cursor_end` can optionally define the current text selection.
 * 
 * **Note:** This method is implemented on Android, iOS and Web.
 * @param existingText string
 * @param position Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param type_ int (optional, default: 0)
 * @param maxLength int (optional, default: -1)
 * @param cursorStart int (optional, default: -1)
 * @param cursorEnd int (optional, default: -1)
 */
  virtualKeyboardShow(existingText: string, position?: Rect2, type_?: int, maxLength?: int, cursorStart?: int, cursorEnd?: int): void;
/**
 * Sets the mouse cursor position to the given `position` relative to an origin at the upper left corner of the currently focused game Window Manager window.
 * 
 * **Note:** `warp_mouse` is only supported on Windows, macOS, and Linux (X11/Wayland). It has no effect on Android, iOS, and Web.
 * @param position Vector2i
 */
  warpMouse(position: Vector2i): void;
/**
 * Returns `true` if anything can be drawn in the window specified by `window_id`, `false` otherwise. Using the `--disable-render-loop` command line argument or a headless build will return `false`.
 * @param windowId int (optional, default: 0)
 * @returns boolean
 */
  windowCanDraw(windowId?: int): boolean;
/**
 * Returns ID of the active popup window, or `INVALID_WINDOW_ID` if there is none.
 * @returns int
 */
  windowGetActivePopup(): int;
/**
 * Returns the `Object.get_instance_id` of the `Window` the `window_id` is attached to.
 * @param windowId int (optional, default: 0)
 * @returns int
 */
  windowGetAttachedInstanceId(windowId?: int): int;
/**
 * Returns the screen the window specified by `window_id` is currently positioned on. If the screen overlaps multiple displays, the screen where the window's center is located is returned. See also `window_set_current_screen`.
 * @param windowId int (optional, default: 0)
 * @returns int
 */
  windowGetCurrentScreen(windowId?: int): int;
/**
 * Returns the current value of the given window's `flag`.
 * @param flag int
 * @param windowId int (optional, default: 0)
 * @returns boolean
 */
  windowGetFlag(flag: int, windowId?: int): boolean;
/**
 * Returns the window's maximum size (in pixels). See also `window_set_max_size`.
 * @param windowId int (optional, default: 0)
 * @returns Vector2i
 */
  windowGetMaxSize(windowId?: int): Vector2i;
/**
 * Returns the window's minimum size (in pixels). See also `window_set_min_size`.
 * @param windowId int (optional, default: 0)
 * @returns Vector2i
 */
  windowGetMinSize(windowId?: int): Vector2i;
/**
 * Returns the mode of the given window.
 * @param windowId int (optional, default: 0)
 * @returns int
 */
  windowGetMode(windowId?: int): int;
/**
 * Returns internal structure pointers for use in plugins.
 * 
 * **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS, and Windows.
 * @param handleType int
 * @param windowId int (optional, default: 0)
 * @returns int
 */
  windowGetNativeHandle(handleType: int, windowId?: int): int;
/**
 * Returns the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system.
 * @param window int
 * @returns Rect2i
 */
  windowGetPopupSafeRect(window: int): Rect2i;
/**
 * Returns the position of the client area of the given window on the screen.
 * @param windowId int (optional, default: 0)
 * @returns Vector2i
 */
  windowGetPosition(windowId?: int): Vector2i;
/**
 * Returns the position of the given window on the screen including the borders drawn by the operating system. See also `window_get_position`.
 * @param windowId int (optional, default: 0)
 * @returns Vector2i
 */
  windowGetPositionWithDecorations(windowId?: int): Vector2i;
/**
 * Returns left margins (`x`), right margins (`y`) and height (`z`) of the title that are safe to use (contains no buttons or other elements) when `WINDOW_FLAG_EXTEND_TO_TITLE` flag is set.
 * @param windowId int (optional, default: 0)
 * @returns Vector3i
 */
  windowGetSafeTitleMargins(windowId?: int): Vector3i;
/**
 * Returns the size of the window specified by `window_id` (in pixels), excluding the borders drawn by the operating system. This is also called the "client area". See also `window_get_size_with_decorations`, `window_set_size` and `window_get_position`.
 * @param windowId int (optional, default: 0)
 * @returns Vector2i
 */
  windowGetSize(windowId?: int): Vector2i;
/**
 * Returns the size of the window specified by `window_id` (in pixels), including the borders drawn by the operating system. See also `window_get_size`.
 * @param windowId int (optional, default: 0)
 * @returns Vector2i
 */
  windowGetSizeWithDecorations(windowId?: int): Vector2i;
/**
 * Returns the estimated window title bar size (including text and window buttons) for the window specified by `window_id` (in pixels). This method does not change the window title.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param title string
 * @param windowId int (optional, default: 0)
 * @returns Vector2i
 */
  windowGetTitleSize(title: string, windowId?: int): Vector2i;
/**
 * Returns the V-Sync mode of the given window.
 * @param windowId int (optional, default: 0)
 * @returns int
 */
  windowGetVsyncMode(windowId?: int): int;
/**
 * Returns `true` if the window specified by `window_id` is focused.
 * @param windowId int (optional, default: 0)
 * @returns boolean
 */
  windowIsFocused(windowId?: int): boolean;
/**
 * Returns `true` if the given window can be maximized (the maximize button is enabled).
 * @param windowId int (optional, default: 0)
 * @returns boolean
 */
  windowIsMaximizeAllowed(windowId?: int): boolean;
/**
 * Returns `true`, if double-click on a window title should maximize it.
 * 
 * **Note:** This method is implemented only on macOS.
 * @returns boolean
 */
  windowMaximizeOnTitleDblClick(): boolean;
/**
 * Returns `true`, if double-click on a window title should minimize it.
 * 
 * **Note:** This method is implemented only on macOS.
 * @returns boolean
 */
  windowMinimizeOnTitleDblClick(): boolean;
/**
 * Moves the window specified by `window_id` to the foreground, so that it is visible over other windows.
 * @param windowId int (optional, default: 0)
 */
  windowMoveToForeground(windowId?: int): void;
/**
 * Makes the window specified by `window_id` request attention, which is materialized by the window title and taskbar entry blinking until the window is focused. This usually has no visible effect if the window is currently focused. The exact behavior varies depending on the operating system.
 * @param windowId int (optional, default: 0)
 */
  windowRequestAttention(windowId?: int): void;
/**
 * Moves the window specified by `window_id` to the specified `screen`. See also `window_get_current_screen`.
 * @param screen int
 * @param windowId int (optional, default: 0)
 */
  windowSetCurrentScreen(screen: int, windowId?: int): void;
/**
 * Sets the `callback` that should be called when files are dropped from the operating system's file manager to the window specified by `window_id`. `callback` should take one `PackedStringArray` argument, which is the list of dropped files.
 * 
 * **Warning:** Advanced users only! Adding such a callback to a `Window` node will override its default implementation, which can introduce bugs.
 * 
 * **Note:** This method is implemented on Windows, macOS, Linux (X11/Wayland), and Web.
 * @param callback Callable
 * @param windowId int (optional, default: 0)
 */
  windowSetDropFilesCallback(callback: Callable, windowId?: int): void;
/**
 * If set to `true`, this window will always stay on top of its parent window, parent window will ignore input while this window is opened.
 * 
 * **Note:** On macOS, exclusive windows are confined to the same space (virtual desktop or screen) as the parent window.
 * 
 * **Note:** This method is implemented on macOS and Windows.
 * @param windowId int
 * @param exclusive boolean
 */
  windowSetExclusive(windowId: int, exclusive: boolean): void;
/**
 * Enables or disables the given window's given `flag`. See `WindowFlags` for possible values and their behavior.
 * @param flag int
 * @param enabled boolean
 * @param windowId int (optional, default: 0)
 */
  windowSetFlag(flag: int, enabled: boolean, windowId?: int): void;
/**
 * Sets whether Input Method Editor (https://en.wikipedia.org/wiki/Input_method) should be enabled for the window specified by `window_id`. See also `window_set_ime_position`.
 * @param active boolean
 * @param windowId int (optional, default: 0)
 */
  windowSetImeActive(active: boolean, windowId?: int): void;
/**
 * Sets the position of the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) popup for the specified `window_id`. Only effective if `window_set_ime_active` was set to `true` for the specified `window_id`.
 * @param position Vector2i
 * @param windowId int (optional, default: 0)
 */
  windowSetImePosition(position: Vector2i, windowId?: int): void;
/**
 * Sets the `callback` that should be called when any `InputEvent` is sent to the window specified by `window_id`.
 * 
 * **Warning:** Advanced users only! Adding such a callback to a `Window` node will override its default implementation, which can introduce bugs.
 * @param callback Callable
 * @param windowId int (optional, default: 0)
 */
  windowSetInputEventCallback(callback: Callable, windowId?: int): void;
/**
 * Sets the `callback` that should be called when text is entered using the virtual keyboard to the window specified by `window_id`.
 * 
 * **Warning:** Advanced users only! Adding such a callback to a `Window` node will override its default implementation, which can introduce bugs.
 * @param callback Callable
 * @param windowId int (optional, default: 0)
 */
  windowSetInputTextCallback(callback: Callable, windowId?: int): void;
/**
 * Sets the maximum size of the window specified by `window_id` in pixels. Normally, the user will not be able to drag the window to make it larger than the specified size. See also `window_get_max_size`.
 * 
 * **Note:** It's recommended to change this value using `Window.max_size` instead.
 * 
 * **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.
 * @param maxSize Vector2i
 * @param windowId int (optional, default: 0)
 */
  windowSetMaxSize(maxSize: Vector2i, windowId?: int): void;
/**
 * Sets the minimum size for the given window to `min_size` in pixels. Normally, the user will not be able to drag the window to make it smaller than the specified size. See also `window_get_min_size`.
 * 
 * **Note:** It's recommended to change this value using `Window.min_size` instead.
 * 
 * **Note:** By default, the main window has a minimum size of `Vector2i(64, 64)`. This prevents issues that can arise when the window is resized to a near-zero size.
 * 
 * **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.
 * @param minSize Vector2i
 * @param windowId int (optional, default: 0)
 */
  windowSetMinSize(minSize: Vector2i, windowId?: int): void;
/**
 * Sets window mode for the given window to `mode`. See `WindowMode` for possible values and how each mode behaves.
 * 
 * **Note:** On Android, setting it to `WINDOW_MODE_FULLSCREEN` or `WINDOW_MODE_EXCLUSIVE_FULLSCREEN` will enable immersive mode.
 * 
 * **Note:** Setting the window to full screen forcibly sets the borderless flag to `true`, so make sure to set it back to `false` when not wanted.
 * @param mode int
 * @param windowId int (optional, default: 0)
 */
  windowSetMode(mode: int, windowId?: int): void;
/**
 * Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.
 * Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).
 * 
 * 				```gdscript
 * 
 * 				# Set region, using Path2D node.
 * 				DisplayServer.window_set_mouse_passthrough($Path2D.curve.get_baked_points())
 * 
 * 				# Set region, using Polygon2D node.
 * 				DisplayServer.window_set_mouse_passthrough($Polygon2D.polygon)
 * 
 * 				# Reset region to default.
 * 				DisplayServer.window_set_mouse_passthrough([])
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				// Set region, using Path2D node.
 * 				DisplayServer.WindowSetMousePassthrough(GetNode<Path2D>("Path2D").Curve.GetBakedPoints());
 * 
 * 				// Set region, using Polygon2D node.
 * 				DisplayServer.WindowSetMousePassthrough(GetNode<Polygon2D>("Polygon2D").Polygon);
 * 
 * 				// Reset region to default.
 * 				DisplayServer.WindowSetMousePassthrough([]);
 * 				
 * 
 * ```
 * 
 * **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.
 * 
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 * @param region PackedVector2Array
 * @param windowId int (optional, default: 0)
 */
  windowSetMousePassthrough(region: PackedVector2Array, windowId?: int): void;
/**
 * Sets the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. Clicking this area will not auto-close this popup.
 * @param window int
 * @param rect Rect2i
 */
  windowSetPopupSafeRect(window: int, rect: Rect2i): void;
/**
 * Sets the position of the given window to `position`. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
 * [codeblock lang=text]
 * * (0, 0)        +-------+
 * |       |
 * +-------------+ |       |
 * |             | |       |
 * |             | |       |
 * +-------------+ +-------+
 * [/codeblock]
 * See also `window_get_position` and `window_set_size`.
 * 
 * **Note:** It's recommended to change this value using `Window.position` instead.
 * 
 * **Note:** On Linux (Wayland): this method is a no-op.
 * @param position Vector2i
 * @param windowId int (optional, default: 0)
 */
  windowSetPosition(position: Vector2i, windowId?: int): void;
/**
 * Sets the `callback` that will be called when the window specified by `window_id` is moved or resized.
 * 
 * **Warning:** Advanced users only! Adding such a callback to a `Window` node will override its default implementation, which can introduce bugs.
 * @param callback Callable
 * @param windowId int (optional, default: 0)
 */
  windowSetRectChangedCallback(callback: Callable, windowId?: int): void;
/**
 * Sets the size of the given window to `size` (in pixels). See also `window_get_size` and `window_get_position`.
 * 
 * **Note:** It's recommended to change this value using `Window.size` instead.
 * @param size Vector2i
 * @param windowId int (optional, default: 0)
 */
  windowSetSize(size: Vector2i, windowId?: int): void;
/**
 * Sets the title of the given window to `title`.
 * 
 * **Note:** It's recommended to change this value using `Window.title` instead.
 * 
 * **Note:** Avoid changing the window title every frame, as this can cause performance issues on certain window managers. Try to change the window title only a few times per second at most.
 * @param title string
 * @param windowId int (optional, default: 0)
 */
  windowSetTitle(title: string, windowId?: int): void;
/**
 * Sets window transient parent. Transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.
 * 
 * **Note:** It's recommended to change this value using `Window.transient` instead.
 * 
 * **Note:** The behavior might be different depending on the platform.
 * @param windowId int
 * @param parentWindowId int
 */
  windowSetTransient(windowId: int, parentWindowId: int): void;
/**
 * Sets the V-Sync mode of the given window. See also `ProjectSettings.display/window/vsync/vsync_mode`.
 * See `DisplayServer.VSyncMode` for possible values and how they affect the behavior of your application.
 * Depending on the platform and used renderer, the engine will fall back to `VSYNC_ENABLED` if the desired mode is not supported.
 * 
 * **Note:** V-Sync modes other than `VSYNC_ENABLED` are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 * @param vsyncMode int
 * @param windowId int (optional, default: 0)
 */
  windowSetVsyncMode(vsyncMode: int, windowId?: int): void;
/**
 * When `WINDOW_FLAG_EXTEND_TO_TITLE` flag is set, set offset to the center of the first titlebar button.
 * 
 * **Note:** This flag is implemented only on macOS.
 * @param offset Vector2i
 * @param windowId int (optional, default: 0)
 */
  windowSetWindowButtonsOffset(offset: Vector2i, windowId?: int): void;
/**
 * Sets the `callback` that will be called when an event occurs in the window specified by `window_id`.
 * 
 * **Warning:** Advanced users only! Adding such a callback to a `Window` node will override its default implementation, which can introduce bugs.
 * @param callback Callable
 * @param windowId int (optional, default: 0)
 */
  windowSetWindowEventCallback(callback: Callable, windowId?: int): void;
/**
 * Starts an interactive drag operation on the window with the given `window_id`, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's title bar. Using this method allows the window to participate in space switching, tiling, and other system features.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.
 * @param windowId int (optional, default: 0)
 */
  windowStartDrag(windowId?: int): void;
/**
 * Starts an interactive resize operation on the window with the given `window_id`, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's edge.
 * 
 * **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.
 * @param edge int
 * @param windowId int (optional, default: 0)
 */
  windowStartResize(edge: int, windowId?: int): void;
/**
 * Display server supports global menu. This allows the application to display its menu items in the operating system's top bar. **macOS**
 * @deprecated Use `NativeMenu` or `PopupMenu` instead.
 */
  static readonly FEATURE_GLOBAL_MENU: int;
/**
 * Display server supports multiple windows that can be moved outside of the main window. **Windows, macOS, Linux (X11)**
 */
  static readonly FEATURE_SUBWINDOWS: int;
/**
 * Display server supports touchscreen input. **Windows, Linux (X11), Android, iOS, Web**
 */
  static readonly FEATURE_TOUCHSCREEN: int;
/**
 * Display server supports mouse input. **Windows, macOS, Linux (X11/Wayland), Android, Web**
 */
  static readonly FEATURE_MOUSE: int;
/**
 * Display server supports warping mouse coordinates to keep the mouse cursor constrained within an area, but looping when one of the edges is reached. **Windows, macOS, Linux (X11/Wayland)**
 */
  static readonly FEATURE_MOUSE_WARP: int;
/**
 * Display server supports setting and getting clipboard data. See also `FEATURE_CLIPBOARD_PRIMARY`. **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web**
 */
  static readonly FEATURE_CLIPBOARD: int;
/**
 * Display server supports popping up a virtual keyboard when requested to input text without a physical keyboard. **Android, iOS, Web**
 */
  static readonly FEATURE_VIRTUAL_KEYBOARD: int;
/**
 * Display server supports setting the mouse cursor shape to be different from the default. **Windows, macOS, Linux (X11/Wayland), Android, Web**
 */
  static readonly FEATURE_CURSOR_SHAPE: int;
/**
 * Display server supports setting the mouse cursor shape to a custom image. **Windows, macOS, Linux (X11/Wayland), Web**
 */
  static readonly FEATURE_CUSTOM_CURSOR_SHAPE: int;
/**
 * Display server supports spawning text dialogs using the operating system's native look-and-feel. See `dialog_show`. **Windows, macOS**
 */
  static readonly FEATURE_NATIVE_DIALOG: int;
/**
 * Display server supports Input Method Editor (https://en.wikipedia.org/wiki/Input_method), which is commonly used for inputting Chinese/Japanese/Korean text. This is handled by the operating system, rather than by Godot. **Windows, macOS, Linux (X11)**
 */
  static readonly FEATURE_IME: int;
/**
 * Display server supports windows can use per-pixel transparency to make windows behind them partially or fully visible. **Windows, macOS, Linux (X11/Wayland)**
 */
  static readonly FEATURE_WINDOW_TRANSPARENCY: int;
/**
 * Display server supports querying the operating system's display scale factor. This allows for *reliable* automatic hiDPI display detection, as opposed to guessing based on the screen resolution and reported display DPI (which can be unreliable due to broken monitor EDID). **Windows, Linux (Wayland), macOS**
 */
  static readonly FEATURE_HIDPI: int;
/**
 * Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS, Linux (X11)**
 */
  static readonly FEATURE_ICON: int;
/**
 * Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS**
 */
  static readonly FEATURE_NATIVE_ICON: int;
/**
 * Display server supports changing the screen orientation. **Android, iOS**
 */
  static readonly FEATURE_ORIENTATION: int;
/**
 * Display server supports V-Sync status can be changed from the default (which is forced to be enabled platforms not supporting this feature). **Windows, macOS, Linux (X11/Wayland)**
 */
  static readonly FEATURE_SWAP_BUFFERS: int;
/**
 * Display server supports Primary clipboard can be used. This is a different clipboard from `FEATURE_CLIPBOARD`. **Linux (X11/Wayland)**
 */
  static readonly FEATURE_CLIPBOARD_PRIMARY: int;
/**
 * Display server supports text-to-speech. See `tts_*` methods. **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web**
 */
  static readonly FEATURE_TEXT_TO_SPEECH: int;
/**
 * Display server supports expanding window content to the title. See `WINDOW_FLAG_EXTEND_TO_TITLE`. **macOS**
 */
  static readonly FEATURE_EXTEND_TO_TITLE: int;
/**
 * Display server supports reading screen pixels. See `screen_get_pixel`.
 */
  static readonly FEATURE_SCREEN_CAPTURE: int;
/**
 * Display server supports application status indicators.
 */
  static readonly FEATURE_STATUS_INDICATOR: int;
/**
 * Display server supports native help system search callbacks. See `help_set_search_callbacks`.
 */
  static readonly FEATURE_NATIVE_HELP: int;
/**
 * Display server supports spawning text input dialogs using the operating system's native look-and-feel. See `dialog_input_text`. **Windows, macOS**
 */
  static readonly FEATURE_NATIVE_DIALOG_INPUT: int;
/**
 * Display server supports spawning dialogs for selecting files or directories using the operating system's native look-and-feel. See `file_dialog_show`. **Windows, macOS, Linux (X11/Wayland), Android**
 */
  static readonly FEATURE_NATIVE_DIALOG_FILE: int;
/**
 * The display server supports all features of `FEATURE_NATIVE_DIALOG_FILE`, with the added functionality of Options and native dialog file access to `res://` and `user://` paths. See `file_dialog_show` and `file_dialog_with_options_show`. **Windows, macOS, Linux (X11/Wayland)**
 */
  static readonly FEATURE_NATIVE_DIALOG_FILE_EXTRA: int;
/**
 * The display server supports initiating window drag and resize operations on demand. See `window_start_drag` and `window_start_resize`.
 */
  static readonly FEATURE_WINDOW_DRAG: int;
/**
 * Display server supports `WINDOW_FLAG_EXCLUDE_FROM_CAPTURE` window flag.
 */
  static readonly FEATURE_SCREEN_EXCLUDE_FROM_CAPTURE: int;
/**
 * Display server supports embedding a window from another process. **Windows, Linux (X11)**
 */
  static readonly FEATURE_WINDOW_EMBEDDING: int;
/**
 * Native file selection dialog supports MIME types as filters.
 */
  static readonly FEATURE_NATIVE_DIALOG_FILE_MIME: int;
/**
 * Display server supports system emoji and symbol picker. **Windows, macOS**
 */
  static readonly FEATURE_EMOJI_AND_SYMBOL_PICKER: int;
/**
 * Makes the mouse cursor visible if it is hidden.
 */
  static readonly MOUSE_MODE_VISIBLE: int;
/**
 * Makes the mouse cursor hidden if it is visible.
 */
  static readonly MOUSE_MODE_HIDDEN: int;
/**
 * Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.
 * 
 * **Note:** If you want to process the mouse's movement in this mode, you need to use `InputEventMouseMotion.relative`.
 */
  static readonly MOUSE_MODE_CAPTURED: int;
/**
 * Confines the mouse cursor to the game window, and make it visible.
 */
  static readonly MOUSE_MODE_CONFINED: int;
/**
 * Confines the mouse cursor to the game window, and make it hidden.
 */
  static readonly MOUSE_MODE_CONFINED_HIDDEN: int;
/**
 * Max value of the `MouseMode`.
 */
  static readonly MOUSE_MODE_MAX: int;
/**
 * Represents the screen containing the mouse pointer.
 * 
 * **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.
 */
  static readonly SCREEN_WITH_MOUSE_FOCUS: int;
/**
 * Represents the screen containing the window with the keyboard focus.
 * 
 * **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.
 */
  static readonly SCREEN_WITH_KEYBOARD_FOCUS: int;
/**
 * Represents the primary screen.
 * 
 * **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.
 */
  static readonly SCREEN_PRIMARY: int;
/**
 * Represents the screen where the main window is located. This is usually the default value in functions that allow specifying one of several screens.
 * 
 * **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.
 */
  static readonly SCREEN_OF_MAIN_WINDOW: int;
/**
 * The ID of the main window spawned by the engine, which can be passed to methods expecting a `window_id`.
 */
  static readonly MAIN_WINDOW_ID: int;
/**
 * The ID that refers to a nonexistent window. This is returned by some `DisplayServer` methods if no window matches the requested result.
 */
  static readonly INVALID_WINDOW_ID: int;
/**
 * The ID that refers to a nonexistent application status indicator.
 */
  static readonly INVALID_INDICATOR_ID: int;
/**
 * Default landscape orientation.
 */
  static readonly SCREEN_LANDSCAPE: int;
/**
 * Default portrait orientation.
 */
  static readonly SCREEN_PORTRAIT: int;
/**
 * Reverse landscape orientation (upside down).
 */
  static readonly SCREEN_REVERSE_LANDSCAPE: int;
/**
 * Reverse portrait orientation (upside down).
 */
  static readonly SCREEN_REVERSE_PORTRAIT: int;
/**
 * Automatic landscape orientation (default or reverse depending on sensor).
 */
  static readonly SCREEN_SENSOR_LANDSCAPE: int;
/**
 * Automatic portrait orientation (default or reverse depending on sensor).
 */
  static readonly SCREEN_SENSOR_PORTRAIT: int;
/**
 * Automatic landscape or portrait orientation (default or reverse depending on sensor).
 */
  static readonly SCREEN_SENSOR: int;
/**
 * Default text virtual keyboard.
 */
  static readonly KEYBOARD_TYPE_DEFAULT: int;
/**
 * Multiline virtual keyboard.
 */
  static readonly KEYBOARD_TYPE_MULTILINE: int;
/**
 * Virtual number keypad, useful for PIN entry.
 */
  static readonly KEYBOARD_TYPE_NUMBER: int;
/**
 * Virtual number keypad, useful for entering fractional numbers.
 */
  static readonly KEYBOARD_TYPE_NUMBER_DECIMAL: int;
/**
 * Virtual phone number keypad.
 */
  static readonly KEYBOARD_TYPE_PHONE: int;
/**
 * Virtual keyboard with additional keys to assist with typing email addresses.
 */
  static readonly KEYBOARD_TYPE_EMAIL_ADDRESS: int;
/**
 * Virtual keyboard for entering a password. On most platforms, this should disable autocomplete and autocapitalization.
 * 
 * **Note:** This is not supported on Web. Instead, this behaves identically to `KEYBOARD_TYPE_DEFAULT`.
 */
  static readonly KEYBOARD_TYPE_PASSWORD: int;
/**
 * Virtual keyboard with additional keys to assist with typing URLs.
 */
  static readonly KEYBOARD_TYPE_URL: int;
/**
 * Arrow cursor shape. This is the default when not pointing anything that overrides the mouse cursor, such as a `LineEdit` or `TextEdit`.
 */
  static readonly CURSOR_ARROW: int;
/**
 * I-beam cursor shape. This is used by default when hovering a control that accepts text input, such as `LineEdit` or `TextEdit`.
 */
  static readonly CURSOR_IBEAM: int;
/**
 * Pointing hand cursor shape. This is used by default when hovering a `LinkButton` or a URL tag in a `RichTextLabel`.
 */
  static readonly CURSOR_POINTING_HAND: int;
/**
 * Crosshair cursor. This is intended to be displayed when the user needs precise aim over an element, such as a rectangle selection tool or a color picker.
 */
  static readonly CURSOR_CROSS: int;
/**
 * Wait cursor. On most cursor themes, this displays a spinning icon *besides* the arrow. Intended to be used for non-blocking operations (when the user can do something else at the moment). See also `CURSOR_BUSY`.
 */
  static readonly CURSOR_WAIT: int;
/**
 * Wait cursor. On most cursor themes, this *replaces* the arrow with a spinning icon. Intended to be used for blocking operations (when the user can't do anything else at the moment). See also `CURSOR_WAIT`.
 */
  static readonly CURSOR_BUSY: int;
/**
 * Dragging hand cursor. This is displayed during drag-and-drop operations. See also `CURSOR_CAN_DROP`.
 */
  static readonly CURSOR_DRAG: int;
/**
 * "Can drop" cursor. This is displayed during drag-and-drop operations if hovering over a `Control` that can accept the drag-and-drop event. On most cursor themes, this displays a dragging hand with an arrow symbol besides it. See also `CURSOR_DRAG`.
 */
  static readonly CURSOR_CAN_DROP: int;
/**
 * Forbidden cursor. This is displayed during drag-and-drop operations if the hovered `Control` can't accept the drag-and-drop event.
 */
  static readonly CURSOR_FORBIDDEN: int;
/**
 * Vertical resize cursor. Intended to be displayed when the hovered `Control` can be vertically resized using the mouse. See also `CURSOR_VSPLIT`.
 */
  static readonly CURSOR_VSIZE: int;
/**
 * Horizontal resize cursor. Intended to be displayed when the hovered `Control` can be horizontally resized using the mouse. See also `CURSOR_HSPLIT`.
 */
  static readonly CURSOR_HSIZE: int;
/**
 * Secondary diagonal resize cursor (top-right/bottom-left). Intended to be displayed when the hovered `Control` can be resized on both axes at once using the mouse.
 */
  static readonly CURSOR_BDIAGSIZE: int;
/**
 * Main diagonal resize cursor (top-left/bottom-right). Intended to be displayed when the hovered `Control` can be resized on both axes at once using the mouse.
 */
  static readonly CURSOR_FDIAGSIZE: int;
/**
 * Move cursor. Intended to be displayed when the hovered `Control` can be moved using the mouse.
 */
  static readonly CURSOR_MOVE: int;
/**
 * Vertical split cursor. This is displayed when hovering a `Control` with splits that can be vertically resized using the mouse, such as `VSplitContainer`. On some cursor themes, this cursor may have the same appearance as `CURSOR_VSIZE`.
 */
  static readonly CURSOR_VSPLIT: int;
/**
 * Horizontal split cursor. This is displayed when hovering a `Control` with splits that can be horizontally resized using the mouse, such as `HSplitContainer`. On some cursor themes, this cursor may have the same appearance as `CURSOR_HSIZE`.
 */
  static readonly CURSOR_HSPLIT: int;
/**
 * Help cursor. On most cursor themes, this displays a question mark icon instead of the mouse cursor. Intended to be used when the user has requested help on the next element that will be clicked.
 */
  static readonly CURSOR_HELP: int;
/**
 * Represents the size of the `CursorShape` enum.
 */
  static readonly CURSOR_MAX: int;
/**
 * The native file dialog allows selecting one, and only one file.
 */
  static readonly FILE_DIALOG_MODE_OPEN_FILE: int;
/**
 * The native file dialog allows selecting multiple files.
 */
  static readonly FILE_DIALOG_MODE_OPEN_FILES: int;
/**
 * The native file dialog only allows selecting a directory, disallowing the selection of any file.
 */
  static readonly FILE_DIALOG_MODE_OPEN_DIR: int;
/**
 * The native file dialog allows selecting one file or directory.
 */
  static readonly FILE_DIALOG_MODE_OPEN_ANY: int;
/**
 * The native file dialog will warn when a file exists.
 */
  static readonly FILE_DIALOG_MODE_SAVE_FILE: int;
/**
 * Windowed mode, i.e. `Window` doesn't occupy the whole screen (unless set to the size of the screen).
 */
  static readonly WINDOW_MODE_WINDOWED: int;
/**
 * Minimized window mode, i.e. `Window` is not visible and available on window manager's window list. Normally happens when the minimize button is pressed.
 */
  static readonly WINDOW_MODE_MINIMIZED: int;
/**
 * Maximized window mode, i.e. `Window` will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed.
 */
  static readonly WINDOW_MODE_MAXIMIZED: int;
/**
 * Full screen mode with full multi-window support.
 * Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.
 * 
 * **On Android:** This enables immersive mode.
 * 
 * **On Windows:** Multi-window full-screen mode has a 1px border of the `ProjectSettings.rendering/environment/defaults/default_clear_color` color.
 * 
 * **On macOS:** A new desktop is used to display the running project.
 * 
 * **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports multiple resolutions (https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html) when enabling full screen mode.
 */
  static readonly WINDOW_MODE_FULLSCREEN: int;
/**
 * A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).
 * Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.
 * 
 * **On Android:** This enables immersive mode.
 * 
 * **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.
 * 
 * **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.
 * 
 * **On Linux (X11):** Exclusive full screen mode bypasses compositor.
 * 
 * **On Linux (Wayland):** Equivalent to `WINDOW_MODE_FULLSCREEN`.
 * 
 * **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports multiple resolutions (https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html) when enabling full screen mode.
 */
  static readonly WINDOW_MODE_EXCLUSIVE_FULLSCREEN: int;
/**
 * The window can't be resized by dragging its resize grip. It's still possible to resize the window using `window_set_size`. This flag is ignored for full screen windows.
 */
  static readonly WINDOW_FLAG_RESIZE_DISABLED: int;
/**
 * The window do not have native title bar and other decorations. This flag is ignored for full-screen windows.
 */
  static readonly WINDOW_FLAG_BORDERLESS: int;
/**
 * The window is floating on top of all other windows. This flag is ignored for full-screen windows.
 */
  static readonly WINDOW_FLAG_ALWAYS_ON_TOP: int;
/**
 * The window background can be transparent.
 * 
 * **Note:** This flag has no effect if `is_window_transparency_available` returns `false`.
 * 
 * **Note:** Transparency support is implemented on Linux (X11/Wayland), macOS, and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.
 */
  static readonly WINDOW_FLAG_TRANSPARENT: int;
/**
 * The window can't be focused. No-focus window will ignore all input, except mouse clicks.
 */
  static readonly WINDOW_FLAG_NO_FOCUS: int;
/**
 * Window is part of menu or `OptionButton` dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see `window_set_transient`).
 */
  static readonly WINDOW_FLAG_POPUP: int;
/**
 * Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons.
 * Use `window_set_window_buttons_offset` to adjust minimize/maximize/close buttons offset.
 * Use `window_get_safe_title_margins` to determine area under the title bar that is not covered by decorations.
 * 
 * **Note:** This flag is implemented only on macOS.
 */
  static readonly WINDOW_FLAG_EXTEND_TO_TITLE: int;
/**
 * All mouse events are passed to the underlying window of the same application.
 */
  static readonly WINDOW_FLAG_MOUSE_PASSTHROUGH: int;
/**
 * Window style is overridden, forcing sharp corners.
 * 
 * **Note:** This flag is implemented only on Windows (11).
 */
  static readonly WINDOW_FLAG_SHARP_CORNERS: int;
/**
 * Windows is excluded from screenshots taken by `screen_get_image`, `screen_get_image_rect`, and `screen_get_pixel`.
 * 
 * **Note:** This flag is implemented on macOS and Windows.
 * 
 * **Note:** Setting this flag will **NOT** prevent other apps from capturing an image, it should not be used as a security measure.
 */
  static readonly WINDOW_FLAG_EXCLUDE_FROM_CAPTURE: int;
/**
 * Max value of the `WindowFlags`.
 */
  static readonly WINDOW_FLAG_MAX: int;
/**
 * Sent when the mouse pointer enters the window.
 */
  static readonly WINDOW_EVENT_MOUSE_ENTER: int;
/**
 * Sent when the mouse pointer exits the window.
 */
  static readonly WINDOW_EVENT_MOUSE_EXIT: int;
/**
 * Sent when the window grabs focus.
 */
  static readonly WINDOW_EVENT_FOCUS_IN: int;
/**
 * Sent when the window loses focus.
 */
  static readonly WINDOW_EVENT_FOCUS_OUT: int;
/**
 * Sent when the user has attempted to close the window (e.g. close button is pressed).
 */
  static readonly WINDOW_EVENT_CLOSE_REQUEST: int;
/**
 * Sent when the device "Back" button is pressed.
 * 
 * **Note:** This event is implemented only on Android.
 */
  static readonly WINDOW_EVENT_GO_BACK_REQUEST: int;
/**
 * Sent when the window is moved to the display with different DPI, or display DPI is changed.
 * 
 * **Note:** This flag is implemented only on macOS.
 */
  static readonly WINDOW_EVENT_DPI_CHANGE: int;
/**
 * Sent when the window title bar decoration is changed (e.g. `WINDOW_FLAG_EXTEND_TO_TITLE` is set or window entered/exited full screen mode).
 * 
 * **Note:** This flag is implemented only on macOS.
 */
  static readonly WINDOW_EVENT_TITLEBAR_CHANGE: int;
/**
 * Top-left edge of a window.
 */
  static readonly WINDOW_EDGE_TOP_LEFT: int;
/**
 * Top edge of a window.
 */
  static readonly WINDOW_EDGE_TOP: int;
/**
 * Top-right edge of a window.
 */
  static readonly WINDOW_EDGE_TOP_RIGHT: int;
/**
 * Left edge of a window.
 */
  static readonly WINDOW_EDGE_LEFT: int;
/**
 * Right edge of a window.
 */
  static readonly WINDOW_EDGE_RIGHT: int;
/**
 * Bottom-left edge of a window.
 */
  static readonly WINDOW_EDGE_BOTTOM_LEFT: int;
/**
 * Bottom edge of a window.
 */
  static readonly WINDOW_EDGE_BOTTOM: int;
/**
 * Bottom-right edge of a window.
 */
  static readonly WINDOW_EDGE_BOTTOM_RIGHT: int;
/**
 * Represents the size of the `WindowResizeEdge` enum.
 */
  static readonly WINDOW_EDGE_MAX: int;
/**
 * No vertical synchronization, which means the engine will display frames as fast as possible (tearing may be visible). Framerate is unlimited (regardless of `Engine.max_fps`).
 */
  static readonly VSYNC_DISABLED: int;
/**
 * Default vertical synchronization mode, the image is displayed only on vertical blanking intervals (no tearing is visible). Framerate is limited by the monitor refresh rate (regardless of `Engine.max_fps`).
 */
  static readonly VSYNC_ENABLED: int;
/**
 * Behaves like `VSYNC_DISABLED` when the framerate drops below the screen's refresh rate to reduce stuttering (tearing may be visible). Otherwise, vertical synchronization is enabled to avoid tearing. Framerate is limited by the monitor refresh rate (regardless of `Engine.max_fps`). Behaves like `VSYNC_ENABLED` when using the Compatibility rendering method.
 */
  static readonly VSYNC_ADAPTIVE: int;
/**
 * Displays the most recent image in the queue on vertical blanking intervals, while rendering to the other images (no tearing is visible). Framerate is unlimited (regardless of `Engine.max_fps`).
 * Although not guaranteed, the images can be rendered as fast as possible, which may reduce input lag (also called "Fast" V-Sync mode). `VSYNC_MAILBOX` works best when at least twice as many frames as the display refresh rate are rendered. Behaves like `VSYNC_ENABLED` when using the Compatibility rendering method.
 */
  static readonly VSYNC_MAILBOX: int;
/**
 * Display handle:
 * - Linux (X11): `X11::Display*` for the display.
 * - Linux (Wayland): `wl_display` for the display.
 * - Android: `EGLDisplay` for the display.
 */
  static readonly DISPLAY_HANDLE: int;
/**
 * Window handle:
 * - Windows: `HWND` for the window.
 * - Linux (X11): `X11::Window*` for the window.
 * - Linux (Wayland): `wl_surface` for the window.
 * - macOS: `NSWindow*` for the window.
 * - iOS: `UIViewController*` for the view controller.
 * - Android: `jObject` for the activity.
 */
  static readonly WINDOW_HANDLE: int;
/**
 * Window view:
 * - Windows: `HDC` for the window (only with the Compatibility renderer).
 * - macOS: `NSView*` for the window main view.
 * - iOS: `UIView*` for the window main view.
 */
  static readonly WINDOW_VIEW: int;
/**
 * OpenGL context (only with the Compatibility renderer):
 * - Windows: `HGLRC` for the window (native GL), or `EGLContext` for the window (ANGLE).
 * - Linux (X11): `GLXContext*` for the window.
 * - Linux (Wayland): `EGLContext` for the window.
 * - macOS: `NSOpenGLContext*` for the window (native GL), or `EGLContext` for the window (ANGLE).
 * - Android: `EGLContext` for the window.
 */
  static readonly OPENGL_CONTEXT: int;
/**
 * - Windows: `EGLDisplay` for the window (ANGLE).
 * - macOS: `EGLDisplay` for the window (ANGLE).
 * - Linux (Wayland): `EGLDisplay` for the window.
 */
  static readonly EGL_DISPLAY: int;
/**
 * - Windows: `EGLConfig` for the window (ANGLE).
 * - macOS: `EGLConfig` for the window (ANGLE).
 * - Linux (Wayland): `EGLConfig` for the window.
 */
  static readonly EGL_CONFIG: int;
/**
 * Utterance has begun to be spoken.
 */
  static readonly TTS_UTTERANCE_STARTED: int;
/**
 * Utterance was successfully finished.
 */
  static readonly TTS_UTTERANCE_ENDED: int;
/**
 * Utterance was canceled, or TTS service was unable to process it.
 */
  static readonly TTS_UTTERANCE_CANCELED: int;
/**
 * Utterance reached a word or sentence boundary.
 */
  static readonly TTS_UTTERANCE_BOUNDARY: int;
}
