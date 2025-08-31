import type { Color, Font, GodotArray, GodotDictionary, InputEvent, Node, PackedStringArray, PackedVector2Array, Rect2i, Signal, StringName, StyleBox, Texture2D, Theme, Vector2, Vector2i, Viewport, float, int } from "../index.d.ts";
/**
 * Base class for all windows, dialogs, and popups.
 * 
 * A node that creates a window. The window can either be a native system window or embedded inside another `Window` (see `Viewport.gui_embed_subwindows`).
 * At runtime, `Window`s will not close automatically when requested. You need to handle it manually using the `close_requested` signal (this applies both to pressing the close button and clicking outside of a popup).
 */
export class Window extends Viewport {
/**
 * If `true`, the window will be on top of all other windows. Does not work if `transient` is enabled.
 */
  alwaysOnTop: boolean;
/**
 * Toggles if any text should automatically change to its translated version depending on the current locale.
 * @deprecated Use `Node.auto_translate_mode` instead.
 */
  autoTranslate: boolean;
/**
 * If `true`, the window will have no borders.
 */
  borderless: boolean;
/**
 * Specifies how the content's aspect behaves when the `Window` is resized. The base aspect is determined by `content_scale_size`.
 */
  contentScaleAspect: int;
/**
 * Specifies the base scale of `Window`'s content when its `size` is equal to `content_scale_size`. See also `Viewport.get_stretch_transform`.
 */
  contentScaleFactor: float;
/**
 * Specifies how the content is scaled when the `Window` is resized.
 */
  contentScaleMode: int;
/**
 * Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, `Window`'s content will be scaled when the window is resized to a different size.
 */
  contentScaleSize: Vector2i;
/**
 * The policy to use to determine the final scale factor for 2D elements. This affects how `content_scale_factor` is applied, in addition to the automatic scale factor determined by `content_scale_size`.
 */
  contentScaleStretch: int;
/**
 * The screen the window is currently on.
 */
  currentScreen: int;
/**
 * Windows is excluded from screenshots taken by `DisplayServer.screen_get_image`, `DisplayServer.screen_get_image_rect`, and `DisplayServer.screen_get_pixel`.
 */
  excludeFromCapture: boolean;
/**
 * If `true`, the `Window` will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent `Window`.
 * Needs `transient` enabled to work.
 */
  exclusive: boolean;
/**
 * If `true`, the `Window` contents is expanded to the full size of the window, window title bar is transparent.
 * 
 * **Note:** This property is implemented only on macOS.
 * 
 * **Note:** This property only works with native windows.
 */
  extendToTitle: boolean;
/**
 * If `true`, native window will be used regardless of parent viewport and project settings.
 */
  forceNative: boolean;
/**
 * Specifies the initial type of position for the `Window`. See `WindowInitialPosition` constants.
 */
  initialPosition: int;
/**
 * If `true`, the `Window` width is expanded to keep the title bar text fully visible.
 */
  keepTitleVisible: boolean;
/**
 * If non-zero, the `Window` can't be resized to be bigger than this size.
 * 
 * **Note:** This property will be ignored if the value is lower than `min_size`.
 */
  maxSize: Vector2i;
/**
 * If non-zero, the `Window` can't be resized to be smaller than this size.
 * 
 * **Note:** This property will be ignored in favor of `get_contents_minimum_size` if `wrap_controls` is enabled and if its size is bigger.
 */
  minSize: Vector2i;
/**
 * Set's the window's current mode.
 * 
 * **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.
 * 
 * **Note:** This method only works with native windows, i.e. the main window and `Window`-derived nodes when `Viewport.gui_embed_subwindows` is disabled in the main viewport.
 */
  mode: int;
/**
 * If `true`, all mouse events will be passed to the underlying window of the same application. See also `mouse_passthrough_polygon`.
 * 
 * **Note:** This property is implemented on Linux (X11), macOS and Windows.
 * 
 * **Note:** This property only works with native windows.
 */
  mousePassthrough: boolean;
/**
 * Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.
 * Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).
 * 
 * 			```gdscript
 * 
 * 			# Set region, using Path2D node.
 * 			$Window.mouse_passthrough_polygon = $Path2D.curve.get_baked_points()
 * 
 * 			# Set region, using Polygon2D node.
 * 			$Window.mouse_passthrough_polygon = $Polygon2D.polygon
 * 
 * 			# Reset region to default.
 * 			$Window.mouse_passthrough_polygon = []
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			// Set region, using Path2D node.
 * 			GetNode<Window>("Window").MousePassthroughPolygon = GetNode<Path2D>("Path2D").Curve.GetBakedPoints();
 * 
 * 			// Set region, using Polygon2D node.
 * 			GetNode<Window>("Window").MousePassthroughPolygon = GetNode<Polygon2D>("Polygon2D").Polygon;
 * 
 * 			// Reset region to default.
 * 			GetNode<Window>("Window").MousePassthroughPolygon = [];
 * 			
 * 
 * ```
 * 
 * **Note:** This property is ignored if `mouse_passthrough` is set to `true`.
 * 
 * **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.
 * 
 * **Note:** This property is implemented on Linux (X11), macOS and Windows.
 */
  mousePassthroughPolygon: PackedVector2Array;
/**
 * If `true`, the `Window` will be considered a popup. Popups are sub-windows that don't show as separate windows in system's window manager's window list and will send close request when anything is clicked outside of them (unless `exclusive` is enabled).
 */
  popupWindow: boolean;
/**
 * The window's position in pixels.
 * If `ProjectSettings.display/window/subwindows/embed_subwindows` is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent `Viewport`.
 * 
 * **Note:** This property only works if `initial_position` is set to `WINDOW_INITIAL_POSITION_ABSOLUTE`.
 */
  position: Vector2i;
/**
 * If `true`, the `Window` will override the OS window style to display sharp corners.
 * 
 * **Note:** This property is implemented only on Windows (11).
 * 
 * **Note:** This property only works with native windows.
 */
  sharpCorners: boolean;
/**
 * The window's size in pixels.
 */
  size: Vector2i;
/**
 * The `Theme` resource this node and all its `Control` and `Window` children use. If a child node has its own `Theme` resource set, theme items are merged with child's definitions having higher priority.
 * 
 * **Note:** `Window` styles will have no effect unless the window is embedded.
 */
  theme: Theme;
/**
 * The name of a theme type variation used by this `Window` to look up its own theme items. See `Control.theme_type_variation` for more details.
 */
  themeTypeVariation: StringName;
/**
 * The window's title. If the `Window` is native, title styles set in `Theme` will have no effect.
 */
  title: string;
/**
 * If `true`, the `Window` is transient, i.e. it's considered a child of another `Window`. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.
 * Note that behavior might be different depending on the platform.
 */
  transient: boolean;
/**
 * If `true`, and the `Window` is `transient`, this window will (at the time of becoming visible) become transient to the currently focused window instead of the immediate parent window in the hierarchy. Note that the transient parent is assigned at the time this window becomes visible, so changing it afterwards has no effect until re-shown.
 */
  transientToFocused: boolean;
/**
 * If `true`, the `Window`'s background can be transparent. This is best used with embedded windows.
 * 
 * **Note:** Transparency support is implemented on Linux, macOS and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.
 * 
 * **Note:** This property has no effect if `ProjectSettings.display/window/per_pixel_transparency/allowed` is set to `false`.
 */
  transparent: boolean;
/**
 * If `true`, the `Window` can't be focused nor interacted with. It can still be visible.
 */
  unfocusable: boolean;
/**
 * If `true`, the window can't be resized. Minimize and maximize buttons are disabled.
 */
  unresizable: boolean;
/**
 * If `true`, the window is visible.
 */
  visible: boolean;
/**
 * If `true`, the window's size will automatically update when a child node is added or removed, ignoring `min_size` if the new size is bigger.
 * If `false`, you need to call `child_controls_changed` manually.
 */
  wrapControls: boolean;
/**
 * Creates a local override for a theme `Color` with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with `remove_theme_color_override`.
 * See also `get_theme_color` and `Control.add_theme_color_override` for more details.
 * @param name StringName
 * @param color Color
 */
  addThemeColorOverride(name: StringName, color: Color): void;
/**
 * Creates a local override for a theme constant with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with `remove_theme_constant_override`.
 * See also `get_theme_constant`.
 * @param name StringName
 * @param constant int
 */
  addThemeConstantOverride(name: StringName, constant: int): void;
/**
 * Creates a local override for a theme `Font` with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with `remove_theme_font_override`.
 * See also `get_theme_font`.
 * @param name StringName
 * @param font Font
 */
  addThemeFontOverride(name: StringName, font: Font): void;
/**
 * Creates a local override for a theme font size with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with `remove_theme_font_size_override`.
 * See also `get_theme_font_size`.
 * @param name StringName
 * @param fontSize int
 */
  addThemeFontSizeOverride(name: StringName, fontSize: int): void;
/**
 * Creates a local override for a theme icon with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with `remove_theme_icon_override`.
 * See also `get_theme_icon`.
 * @param name StringName
 * @param texture Texture2D
 */
  addThemeIconOverride(name: StringName, texture: Texture2D): void;
/**
 * Creates a local override for a theme `StyleBox` with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with `remove_theme_stylebox_override`.
 * See also `get_theme_stylebox` and `Control.add_theme_stylebox_override` for more details.
 * @param name StringName
 * @param stylebox StyleBox
 */
  addThemeStyleboxOverride(name: StringName, stylebox: StyleBox): void;
/**
 * Prevents `*_theme_*_override` methods from emitting `NOTIFICATION_THEME_CHANGED` until `end_bulk_theme_override` is called.
 */
  beginBulkThemeOverride(): void;
/**
 * Returns whether the window is being drawn to the screen.
 * @returns boolean
 */
  canDraw(): boolean;
/**
 * Requests an update of the `Window` size to fit underlying `Control` nodes.
 */
  childControlsChanged(): void;
/**
 * Ends a bulk theme override update. See `begin_bulk_theme_override`.
 */
  endBulkThemeOverride(): void;
/**
 * Returns the combined minimum size from the child `Control` nodes of the window. Use `child_controls_changed` to update it when child nodes have changed.
 * The value returned by this method can be overridden with `_get_contents_minimum_size`.
 * @returns Vector2
 */
  getContentsMinimumSize(): Vector2;
/**
 * Virtual method to be implemented by the user. Overrides the value returned by `get_contents_minimum_size`.
 * @returns Vector2
 */
  private getContentsMinimumSize(): Vector2;
/**
 * Returns `true` if the `flag` is set.
 * @param flag int
 * @returns boolean
 */
  getFlag(flag: int): boolean;
/**
 * Returns layout direction and text writing direction.
 * @returns int
 */
  getLayoutDirection(): int;
/**
 * Returns the window's position including its border.
 * 
 * **Note:** If `visible` is `false`, this method returns the same value as `position`.
 * @returns Vector2i
 */
  getPositionWithDecorations(): Vector2i;
/**
 * Returns the window's size including its border.
 * 
 * **Note:** If `visible` is `false`, this method returns the same value as `size`.
 * @returns Vector2i
 */
  getSizeWithDecorations(): Vector2i;
/**
 * Returns a `Color` from the first matching `Theme` in the tree if that `Theme` has a color item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for more details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns Color
 */
  getThemeColor(name: StringName, themeType?: StringName): Color;
/**
 * Returns a constant from the first matching `Theme` in the tree if that `Theme` has a constant item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for more details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns int
 */
  getThemeConstant(name: StringName, themeType?: StringName): int;
/**
 * Returns the default base scale value from the first matching `Theme` in the tree if that `Theme` has a valid `Theme.default_base_scale` value.
 * See `Control.get_theme_color` for details.
 * @returns float
 */
  getThemeDefaultBaseScale(): float;
/**
 * Returns the default font from the first matching `Theme` in the tree if that `Theme` has a valid `Theme.default_font` value.
 * See `Control.get_theme_color` for details.
 * @returns Font
 */
  getThemeDefaultFont(): Font;
/**
 * Returns the default font size value from the first matching `Theme` in the tree if that `Theme` has a valid `Theme.default_font_size` value.
 * See `Control.get_theme_color` for details.
 * @returns int
 */
  getThemeDefaultFontSize(): int;
/**
 * Returns a `Font` from the first matching `Theme` in the tree if that `Theme` has a font item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns Font
 */
  getThemeFont(name: StringName, themeType?: StringName): Font;
/**
 * Returns a font size from the first matching `Theme` in the tree if that `Theme` has a font size item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns int
 */
  getThemeFontSize(name: StringName, themeType?: StringName): int;
/**
 * Returns an icon from the first matching `Theme` in the tree if that `Theme` has an icon item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns Texture2D
 */
  getThemeIcon(name: StringName, themeType?: StringName): Texture2D;
/**
 * Returns a `StyleBox` from the first matching `Theme` in the tree if that `Theme` has a stylebox item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns StyleBox
 */
  getThemeStylebox(name: StringName, themeType?: StringName): StyleBox;
/**
 * Returns the ID of the window.
 * @returns int
 */
  getWindowId(): int;
/**
 * Causes the window to grab focus, allowing it to receive user input.
 */
  grabFocus(): void;
/**
 * Returns `true` if the window is focused.
 * @returns boolean
 */
  hasFocus(): boolean;
/**
 * Returns `true` if there is a matching `Theme` in the tree that has a color item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns boolean
 */
  hasThemeColor(name: StringName, themeType?: StringName): boolean;
/**
 * Returns `true` if there is a local override for a theme `Color` with the specified `name` in this `Control` node.
 * See `add_theme_color_override`.
 * @param name StringName
 * @returns boolean
 */
  hasThemeColorOverride(name: StringName): boolean;
/**
 * Returns `true` if there is a matching `Theme` in the tree that has a constant item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns boolean
 */
  hasThemeConstant(name: StringName, themeType?: StringName): boolean;
/**
 * Returns `true` if there is a local override for a theme constant with the specified `name` in this `Control` node.
 * See `add_theme_constant_override`.
 * @param name StringName
 * @returns boolean
 */
  hasThemeConstantOverride(name: StringName): boolean;
/**
 * Returns `true` if there is a matching `Theme` in the tree that has a font item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns boolean
 */
  hasThemeFont(name: StringName, themeType?: StringName): boolean;
/**
 * Returns `true` if there is a local override for a theme `Font` with the specified `name` in this `Control` node.
 * See `add_theme_font_override`.
 * @param name StringName
 * @returns boolean
 */
  hasThemeFontOverride(name: StringName): boolean;
/**
 * Returns `true` if there is a matching `Theme` in the tree that has a font size item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns boolean
 */
  hasThemeFontSize(name: StringName, themeType?: StringName): boolean;
/**
 * Returns `true` if there is a local override for a theme font size with the specified `name` in this `Control` node.
 * See `add_theme_font_size_override`.
 * @param name StringName
 * @returns boolean
 */
  hasThemeFontSizeOverride(name: StringName): boolean;
/**
 * Returns `true` if there is a matching `Theme` in the tree that has an icon item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns boolean
 */
  hasThemeIcon(name: StringName, themeType?: StringName): boolean;
/**
 * Returns `true` if there is a local override for a theme icon with the specified `name` in this `Control` node.
 * See `add_theme_icon_override`.
 * @param name StringName
 * @returns boolean
 */
  hasThemeIconOverride(name: StringName): boolean;
/**
 * Returns `true` if there is a matching `Theme` in the tree that has a stylebox item with the specified `name` and `theme_type`.
 * See `Control.get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns boolean
 */
  hasThemeStylebox(name: StringName, themeType?: StringName): boolean;
/**
 * Returns `true` if there is a local override for a theme `StyleBox` with the specified `name` in this `Control` node.
 * See `add_theme_stylebox_override`.
 * @param name StringName
 * @returns boolean
 */
  hasThemeStyleboxOverride(name: StringName): boolean;
/**
 * Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with `show`.
 */
  hide(): void;
/**
 * Returns `true` if the window is currently embedded in another window.
 * @returns boolean
 */
  isEmbedded(): boolean;
/**
 * Returns `true` if layout is right-to-left.
 * @returns boolean
 */
  isLayoutRtl(): boolean;
/**
 * Returns `true` if the window can be maximized (the maximize button is enabled).
 * @returns boolean
 */
  isMaximizeAllowed(): boolean;
/**
 * Returns `true` if font oversampling is enabled. See `set_use_font_oversampling`.
 * @returns boolean
 */
  isUsingFontOversampling(): boolean;
/**
 * Centers a native window on the current screen and an embedded window on its embedder `Viewport`.
 */
  moveToCenter(): void;
/**
 * Causes the window to grab focus, allowing it to receive user input.
 * @deprecated Use `Window.grab_focus` instead.
 */
  moveToForeground(): void;
/**
 * Shows the `Window` and makes it transient (see `transient`). If `rect` is provided, it will be set as the `Window`'s size. Fails if called on the main window.
 * If `ProjectSettings.display/window/subwindows/embed_subwindows` is `true` (single-window mode), `rect`'s coordinates are global and relative to the main window's top-left corner (excluding window decorations). If `rect`'s position coordinates are negative, the window will be located outside the main window and may not be visible as a result.
 * If `ProjectSettings.display/window/subwindows/embed_subwindows` is `false` (multi-window mode), `rect`'s coordinates are global and relative to the top-left corner of the leftmost screen. If `rect`'s position coordinates are negative, the window will be placed at the top-left corner of the screen.
 * 
 * **Note:** `rect` must be in global coordinates if specified.
 * @param rect Rect2i (optional, default: Rect2i(0, 0, 0, 0))
 */
  popup(rect?: Rect2i): void;
/**
 * Popups the `Window` at the center of the current screen, with optionally given minimum size. If the `Window` is embedded, it will be centered in the parent `Viewport` instead.
 * 
 * **Note:** Calling it with the default value of `minsize` is equivalent to calling it with `size`.
 * @param minsize Vector2i (optional, default: Vector2i(0, 0))
 */
  popupCentered(minsize?: Vector2i): void;
/**
 * Popups the `Window` centered inside its parent `Window`. `fallback_ratio` determines the maximum size of the `Window`, in relation to its parent.
 * 
 * **Note:** Calling it with the default value of `minsize` is equivalent to calling it with `size`.
 * @param minsize Vector2i (optional, default: Vector2i(0, 0))
 * @param fallbackRatio float (optional, default: 0.75)
 */
  popupCenteredClamped(minsize?: Vector2i, fallbackRatio?: float): void;
/**
 * If `Window` is embedded, popups the `Window` centered inside its embedder and sets its size as a `ratio` of embedder's size.
 * If `Window` is a native window, popups the `Window` centered inside the screen of its parent `Window` and sets its size as a `ratio` of the screen size.
 * @param ratio float (optional, default: 0.8)
 */
  popupCenteredRatio(ratio?: float): void;
/**
 * Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls `Window.popup` on it. The dialog must have no current parent, otherwise the method fails.
 * See also `set_unparent_when_invisible` and `Node.get_last_exclusive_window`.
 * @param fromNode Node
 * @param rect Rect2i (optional, default: Rect2i(0, 0, 0, 0))
 */
  popupExclusive(fromNode: Node, rect?: Rect2i): void;
/**
 * Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls `Window.popup_centered` on it. The dialog must have no current parent, otherwise the method fails.
 * See also `set_unparent_when_invisible` and `Node.get_last_exclusive_window`.
 * @param fromNode Node
 * @param minsize Vector2i (optional, default: Vector2i(0, 0))
 */
  popupExclusiveCentered(fromNode: Node, minsize?: Vector2i): void;
/**
 * Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls `Window.popup_centered_clamped` on it. The dialog must have no current parent, otherwise the method fails.
 * See also `set_unparent_when_invisible` and `Node.get_last_exclusive_window`.
 * @param fromNode Node
 * @param minsize Vector2i (optional, default: Vector2i(0, 0))
 * @param fallbackRatio float (optional, default: 0.75)
 */
  popupExclusiveCenteredClamped(fromNode: Node, minsize?: Vector2i, fallbackRatio?: float): void;
/**
 * Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls `Window.popup_centered_ratio` on it. The dialog must have no current parent, otherwise the method fails.
 * See also `set_unparent_when_invisible` and `Node.get_last_exclusive_window`.
 * @param fromNode Node
 * @param ratio float (optional, default: 0.8)
 */
  popupExclusiveCenteredRatio(fromNode: Node, ratio?: float): void;
/**
 * Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls `Window.popup_on_parent` on it. The dialog must have no current parent, otherwise the method fails.
 * See also `set_unparent_when_invisible` and `Node.get_last_exclusive_window`.
 * @param fromNode Node
 * @param parentRect Rect2i
 */
  popupExclusiveOnParent(fromNode: Node, parentRect: Rect2i): void;
/**
 * Popups the `Window` with a position shifted by parent `Window`'s position. If the `Window` is embedded, has the same effect as `popup`.
 * @param parentRect Rect2i
 */
  popupOnParent(parentRect: Rect2i): void;
/**
 * Removes a local override for a theme `Color` with the specified `name` previously added by `add_theme_color_override` or via the Inspector dock.
 * @param name StringName
 */
  removeThemeColorOverride(name: StringName): void;
/**
 * Removes a local override for a theme constant with the specified `name` previously added by `add_theme_constant_override` or via the Inspector dock.
 * @param name StringName
 */
  removeThemeConstantOverride(name: StringName): void;
/**
 * Removes a local override for a theme `Font` with the specified `name` previously added by `add_theme_font_override` or via the Inspector dock.
 * @param name StringName
 */
  removeThemeFontOverride(name: StringName): void;
/**
 * Removes a local override for a theme font size with the specified `name` previously added by `add_theme_font_size_override` or via the Inspector dock.
 * @param name StringName
 */
  removeThemeFontSizeOverride(name: StringName): void;
/**
 * Removes a local override for a theme icon with the specified `name` previously added by `add_theme_icon_override` or via the Inspector dock.
 * @param name StringName
 */
  removeThemeIconOverride(name: StringName): void;
/**
 * Removes a local override for a theme `StyleBox` with the specified `name` previously added by `add_theme_stylebox_override` or via the Inspector dock.
 * @param name StringName
 */
  removeThemeStyleboxOverride(name: StringName): void;
/**
 * Tells the OS that the `Window` needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar.
 */
  requestAttention(): void;
/**
 * Resets the size to the minimum size, which is the max of `min_size` and (if `wrap_controls` is enabled) `get_contents_minimum_size`. This is equivalent to calling `set_size(Vector2i())` (or any size below the minimum).
 */
  resetSize(): void;
/**
 * Sets a specified window flag.
 * @param flag int
 * @param enabled boolean
 */
  setFlag(flag: int, enabled: boolean): void;
/**
 * If `active` is `true`, enables system's native IME (Input Method Editor).
 * @param active boolean
 */
  setImeActive(active: boolean): void;
/**
 * Moves IME to the given position.
 * @param position Vector2i
 */
  setImePosition(position: Vector2i): void;
/**
 * Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew).
 * @param direction int
 */
  setLayoutDirection(direction: int): void;
/**
 * If `unparent` is `true`, the window is automatically unparented when going invisible.
 * 
 * **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call `Node.queue_free` to free the window if it's not parented.
 * @param unparent boolean
 */
  setUnparentWhenInvisible(unparent: boolean): void;
/**
 * Enables font oversampling. This makes fonts look better when they are scaled up.
 * @param enable boolean
 */
  setUseFontOversampling(enable: boolean): void;
/**
 * Makes the `Window` appear. This enables interactions with the `Window` and doesn't change any of its property other than visibility (unlike e.g. `popup`).
 */
  show(): void;
/**
 * Starts an interactive drag operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's title bar. Using this method allows the window to participate in space switching, tiling, and other system features.
 */
  startDrag(): void;
/**
 * Starts an interactive resize operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's edge.
 * @param edge int
 */
  startResize(edge: int): void;
/**
 * Emitted right after `popup` call, before the `Window` appears or does anything.
 */
  aboutToPopup: Signal<[]>;
/**
 * Emitted when the `Window`'s close button is pressed or when `popup_window` is enabled and user clicks outside the window.
 * This signal can be used to handle window closing, e.g. by connecting it to `hide`.
 */
  closeRequested: Signal<[]>;
/**
 * Emitted when the `Window`'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).
 * 
 * **Note:** Only implemented on macOS.
 */
  dpiChanged: Signal<[]>;
/**
 * Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    get_window().files_dropped.connect(on_files_dropped)
 * 
 * 				func on_files_dropped(files):
 * 				    print(files)
 * 				
 * 
 * ```
 * 
 * **Note:** This signal only works with native windows, i.e. the main window and `Window`-derived nodes when `Viewport.gui_embed_subwindows` is disabled in the main viewport.
 */
  filesDropped: Signal<[files: PackedStringArray]>;
/**
 * Emitted when the `Window` gains focus.
 */
  focusEntered: Signal<[]>;
/**
 * Emitted when the `Window` loses its focus.
 */
  focusExited: Signal<[]>;
/**
 * Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after `Node.NOTIFICATION_WM_GO_BACK_REQUEST`.
 */
  goBackRequested: Signal<[]>;
/**
 * Emitted when the mouse cursor enters the `Window`'s visible area, that is not occluded behind other `Control`s or windows, provided its `Viewport.gui_disable_input` is `false` and regardless if it's currently focused or not.
 */
  mouseEntered: Signal<[]>;
/**
 * Emitted when the mouse cursor leaves the `Window`'s visible area, that is not occluded behind other `Control`s or windows, provided its `Viewport.gui_disable_input` is `false` and regardless if it's currently focused or not.
 */
  mouseExited: Signal<[]>;
/**
 * Emitted when the `NOTIFICATION_THEME_CHANGED` notification is sent.
 */
  themeChanged: Signal<[]>;
/**
 * Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed.
 */
  titlebarChanged: Signal<[]>;
/**
 * Emitted when window title bar text is changed.
 */
  titleChanged: Signal<[]>;
/**
 * Emitted when `Window` is made visible or disappears.
 */
  visibilityChanged: Signal<[]>;
/**
 * Emitted when the `Window` is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system.
 */
  windowInput: Signal<[event: InputEvent]>;
/**
 * Emitted when `Window`'s visibility changes, right before `visibility_changed`.
 */
  static readonly NOTIFICATION_VISIBILITY_CHANGED: int;
/**
 * Sent when the node needs to refresh its theme items. This happens in one of the following cases:
 * - The `theme` property is changed on this node or any of its ancestors.
 * - The `theme_type_variation` property is changed on this node.
 * - The node enters the scene tree.
 * 
 * **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.
 */
  static readonly NOTIFICATION_THEME_CHANGED: int;
/**
 * Windowed mode, i.e. `Window` doesn't occupy the whole screen (unless set to the size of the screen).
 */
  static readonly MODE_WINDOWED: int;
/**
 * Minimized window mode, i.e. `Window` is not visible and available on window manager's window list. Normally happens when the minimize button is pressed.
 */
  static readonly MODE_MINIMIZED: int;
/**
 * Maximized window mode, i.e. `Window` will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed.
 */
  static readonly MODE_MAXIMIZED: int;
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
  static readonly MODE_FULLSCREEN: int;
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
 * **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports multiple resolutions (https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html) when enabling full screen mode.
 */
  static readonly MODE_EXCLUSIVE_FULLSCREEN: int;
/**
 * The window can't be resized by dragging its resize grip. It's still possible to resize the window using `size`. This flag is ignored for full screen windows. Set with `unresizable`.
 */
  static readonly FLAG_RESIZE_DISABLED: int;
/**
 * The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. Set with `borderless`.
 */
  static readonly FLAG_BORDERLESS: int;
/**
 * The window is floating on top of all other windows. This flag is ignored for full-screen windows. Set with `always_on_top`.
 */
  static readonly FLAG_ALWAYS_ON_TOP: int;
/**
 * The window background can be transparent. Set with `transparent`.
 * 
 * **Note:** This flag has no effect if either `ProjectSettings.display/window/per_pixel_transparency/allowed`, or the window's `Viewport.transparent_bg` is set to `false`.
 */
  static readonly FLAG_TRANSPARENT: int;
/**
 * The window can't be focused. No-focus window will ignore all input, except mouse clicks. Set with `unfocusable`.
 */
  static readonly FLAG_NO_FOCUS: int;
/**
 * Window is part of menu or `OptionButton` dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see `transient`).
 * 
 * **Note:** This flag has no effect in embedded windows (unless said window is a `Popup`).
 */
  static readonly FLAG_POPUP: int;
/**
 * Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons. Set with `extend_to_title`.
 * 
 * **Note:** This flag is implemented only on macOS.
 * 
 * **Note:** This flag has no effect in embedded windows.
 */
  static readonly FLAG_EXTEND_TO_TITLE: int;
/**
 * All mouse events are passed to the underlying window of the same application.
 * 
 * **Note:** This flag has no effect in embedded windows.
 */
  static readonly FLAG_MOUSE_PASSTHROUGH: int;
/**
 * Window style is overridden, forcing sharp corners.
 * 
 * **Note:** This flag has no effect in embedded windows.
 * 
 * **Note:** This flag is implemented only on Windows (11).
 */
  static readonly FLAG_SHARP_CORNERS: int;
/**
 * Windows is excluded from screenshots taken by `DisplayServer.screen_get_image`, `DisplayServer.screen_get_image_rect`, and `DisplayServer.screen_get_pixel`.
 * 
 * **Note:** This flag is implemented on macOS and Windows.
 * 
 * **Note:** Setting this flag will **NOT** prevent other apps from capturing an image, it should not be used as a security measure.
 */
  static readonly FLAG_EXCLUDE_FROM_CAPTURE: int;
/**
 * Max value of the `Flags`.
 */
  static readonly FLAG_MAX: int;
/**
 * The content will not be scaled to match the `Window`'s size.
 */
  static readonly CONTENT_SCALE_MODE_DISABLED: int;
/**
 * The content will be rendered at the target size. This is more performance-expensive than `CONTENT_SCALE_MODE_VIEWPORT`, but provides better results.
 */
  static readonly CONTENT_SCALE_MODE_CANVAS_ITEMS: int;
/**
 * The content will be rendered at the base size and then scaled to the target size. More performant than `CONTENT_SCALE_MODE_CANVAS_ITEMS`, but results in pixelated image.
 */
  static readonly CONTENT_SCALE_MODE_VIEWPORT: int;
/**
 * The aspect will be ignored. Scaling will simply stretch the content to fit the target size.
 */
  static readonly CONTENT_SCALE_ASPECT_IGNORE: int;
/**
 * The content's aspect will be preserved. If the target size has different aspect from the base one, the image will be centered and black bars will appear on left and right sides.
 */
  static readonly CONTENT_SCALE_ASPECT_KEEP: int;
/**
 * The content can be expanded vertically. Scaling horizontally will result in keeping the width ratio and then black bars on left and right sides.
 */
  static readonly CONTENT_SCALE_ASPECT_KEEP_WIDTH: int;
/**
 * The content can be expanded horizontally. Scaling vertically will result in keeping the height ratio and then black bars on top and bottom sides.
 */
  static readonly CONTENT_SCALE_ASPECT_KEEP_HEIGHT: int;
/**
 * The content's aspect will be preserved. If the target size has different aspect from the base one, the content will stay in the top-left corner and add an extra visible area in the stretched space.
 */
  static readonly CONTENT_SCALE_ASPECT_EXPAND: int;
/**
 * The content will be stretched according to a fractional factor. This fills all the space available in the window, but allows "pixel wobble" to occur due to uneven pixel scaling.
 */
  static readonly CONTENT_SCALE_STRETCH_FRACTIONAL: int;
/**
 * The content will be stretched only according to an integer factor, preserving sharp pixels. This may leave a black background visible on the window's edges depending on the window size.
 */
  static readonly CONTENT_SCALE_STRETCH_INTEGER: int;
/**
 * Automatic layout direction, determined from the parent window layout direction.
 */
  static readonly LAYOUT_DIRECTION_INHERITED: int;
/**
 * Automatic layout direction, determined from the current locale.
 */
  static readonly LAYOUT_DIRECTION_APPLICATION_LOCALE: int;
/**
 * Left-to-right layout direction.
 */
  static readonly LAYOUT_DIRECTION_LTR: int;
/**
 * Right-to-left layout direction.
 */
  static readonly LAYOUT_DIRECTION_RTL: int;
/**
 * Automatic layout direction, determined from the system locale.
 */
  static readonly LAYOUT_DIRECTION_SYSTEM_LOCALE: int;
/**
 * Represents the size of the `LayoutDirection` enum.
 */
  static readonly LAYOUT_DIRECTION_MAX: int;
/**
 * @deprecated Use `LAYOUT_DIRECTION_APPLICATION_LOCALE` instead.
 */
  static readonly LAYOUT_DIRECTION_LOCALE: int;
/**
 * Initial window position is determined by `position`.
 */
  static readonly WINDOW_INITIAL_POSITION_ABSOLUTE: int;
/**
 * Initial window position is the center of the primary screen.
 */
  static readonly WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN: int;
/**
 * Initial window position is the center of the main window screen.
 */
  static readonly WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN: int;
/**
 * Initial window position is the center of `current_screen` screen.
 */
  static readonly WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN: int;
/**
 * Initial window position is the center of the screen containing the mouse pointer.
 */
  static readonly WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS: int;
/**
 * Initial window position is the center of the screen containing the window with the keyboard focus.
 */
  static readonly WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS: int;
}
