import type { Callable, CanvasItem, Color, Font, GodotArray, GodotDictionary, InputEvent, Node, NodePath, Object, Rect2, Signal, StringName, StyleBox, Texture2D, Theme, Variant, Vector2, Vector3i, float, int } from "../index.d.ts";
/**
 * Base class for all GUI controls. Adapts its position and size based on its parent control.
 * 
 * Base class for all UI-related nodes. `Control` features a bounding rectangle that defines its extents, an anchor position relative to its parent control or the current viewport, and offsets relative to the anchor. The offsets update automatically when the node, any of its parents, or the screen size change.
 * For more information on Godot's UI system, anchors, offsets, and containers, see the related tutorials in the manual. To build flexible UIs, you'll need a mix of UI elements that inherit from `Control` and `Container` nodes.
 * 
 * **Note:** Since both `Node2D` and `Control` inherit from `CanvasItem`, they share several concepts from the class such as the `CanvasItem.z_index` and `CanvasItem.visible` properties.
 * 
 * **User Interface nodes and input**
 * Godot propagates input events via viewports. Each `Viewport` is responsible for propagating `InputEvent`s to their child nodes. As the `SceneTree.root` is a `Window`, this already happens automatically for all UI elements in your game.
 * Input events are propagated through the `SceneTree` from the root node to all child nodes by calling `Node._input`. For UI elements specifically, it makes more sense to override the virtual method `_gui_input`, which filters out unrelated input events, such as by checking z-order, `mouse_filter`, focus, or if the event was inside of the control's bounding box.
 * Call `accept_event` so no other node receives the event. Once you accept an input, it becomes handled so `Node._unhandled_input` will not process it.
 * Only one `Control` node can be in focus. Only the node in focus will receive events. To get the focus, call `grab_focus`. `Control` nodes lose focus when another node grabs it, or if you hide the node in focus.
 * Sets `mouse_filter` to `MOUSE_FILTER_IGNORE` to tell a `Control` node to ignore mouse or touch events. You'll need it if you place an icon on top of a button.
 * `Theme` resources change the control's appearance. The `theme` of a `Control` node affects all of its direct and indirect children (as long as a chain of controls is uninterrupted). To override some of the theme items, call one of the `add_theme_*_override` methods, like `add_theme_font_override`. You can also override theme items in the Inspector.
 * 
 * **Note:** Theme items are *not* `Object` properties. This means you can't access their values using `Object.get` and `Object.set`. Instead, use the `get_theme_*` and `add_theme_*_override` methods provided by this class.
 */
export class Control extends CanvasItem {
/**
 * Anchors the bottom edge of the node to the origin, the center, or the end of its parent control. It changes how the bottom offset updates when the node moves or changes size. You can use one of the `Anchor` constants for convenience.
 */
  anchorBottom: float;
/**
 * Anchors the left edge of the node to the origin, the center or the end of its parent control. It changes how the left offset updates when the node moves or changes size. You can use one of the `Anchor` constants for convenience.
 */
  anchorLeft: float;
/**
 * Anchors the right edge of the node to the origin, the center or the end of its parent control. It changes how the right offset updates when the node moves or changes size. You can use one of the `Anchor` constants for convenience.
 */
  anchorRight: float;
/**
 * Anchors the top edge of the node to the origin, the center or the end of its parent control. It changes how the top offset updates when the node moves or changes size. You can use one of the `Anchor` constants for convenience.
 */
  anchorTop: float;
/**
 * Toggles if any text should automatically change to its translated version depending on the current locale.
 * @deprecated Use `Node.auto_translate_mode` instead.
 */
  autoTranslate: boolean;
/**
 * Enables whether rendering of `CanvasItem` based children should be clipped to this control's rectangle. If `true`, parts of a child which would be visibly outside of this control's rectangle will not be rendered and won't receive input.
 */
  clipContents: boolean;
/**
 * The minimum size of the node's bounding rectangle. If you set it to a value greater than `(0, 0)`, the node's bounding rectangle will always have at least this size. Note that `Control` nodes have their internal minimum size returned by `get_minimum_size`. It depends on the control's contents, like text, textures, or style boxes. The actual minimum size is the maximum value of this property and the internal minimum size (see `get_combined_minimum_size`).
 */
  customMinimumSize: Vector2;
/**
 * The focus access mode for the control (None, Click or All). Only one Control can be focused at the same time, and it will receive keyboard, gamepad, and mouse signals.
 */
  focusMode: int;
/**
 * Tells Godot which node it should give focus to if the user presses the down arrow on the keyboard or down on a gamepad by default. You can change the key by editing the `ProjectSettings.input/ui_down` input action. The node must be a `Control`. If this property is not set, Godot will give focus to the closest `Control` to the bottom of this one.
 */
  focusNeighborBottom: NodePath;
/**
 * Tells Godot which node it should give focus to if the user presses the left arrow on the keyboard or left on a gamepad by default. You can change the key by editing the `ProjectSettings.input/ui_left` input action. The node must be a `Control`. If this property is not set, Godot will give focus to the closest `Control` to the left of this one.
 */
  focusNeighborLeft: NodePath;
/**
 * Tells Godot which node it should give focus to if the user presses the right arrow on the keyboard or right on a gamepad by default. You can change the key by editing the `ProjectSettings.input/ui_right` input action. The node must be a `Control`. If this property is not set, Godot will give focus to the closest `Control` to the right of this one.
 */
  focusNeighborRight: NodePath;
/**
 * Tells Godot which node it should give focus to if the user presses the top arrow on the keyboard or top on a gamepad by default. You can change the key by editing the `ProjectSettings.input/ui_up` input action. The node must be a `Control`. If this property is not set, Godot will give focus to the closest `Control` to the top of this one.
 */
  focusNeighborTop: NodePath;
/**
 * Tells Godot which node it should give focus to if the user presses `Tab` on a keyboard by default. You can change the key by editing the `ProjectSettings.input/ui_focus_next` input action.
 * If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.
 */
  focusNext: NodePath;
/**
 * Tells Godot which node it should give focus to if the user presses `Shift + Tab` on a keyboard by default. You can change the key by editing the `ProjectSettings.input/ui_focus_prev` input action.
 * If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.
 */
  focusPrevious: NodePath;
/**
 * The node's global position, relative to the world (usually to the `CanvasLayer`).
 */
  globalPosition: Vector2;
/**
 * Controls the direction on the horizontal axis in which the control should grow if its horizontal minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size.
 */
  growHorizontal: int;
/**
 * Controls the direction on the vertical axis in which the control should grow if its vertical minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size.
 */
  growVertical: int;
/**
 * Controls layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). See also `is_layout_rtl`.
 */
  layoutDirection: int;
/**
 * If `true`, automatically converts code line numbers, list indices, `SpinBox` and `ProgressBar` values from the Western Arabic (0..9) to the numeral systems used in current locale.
 * 
 * **Note:** Numbers within the text are not automatically converted, it can be done manually, using `TextServer.format_number`.
 */
  localizeNumeralSystem: boolean;
/**
 * The default cursor shape for this control. Useful for Godot plugins and applications or games that use the system's mouse cursors.
 * 
 * **Note:** On Linux, shapes may vary depending on the cursor theme of the system.
 */
  mouseDefaultCursorShape: int;
/**
 * Controls whether the control will be able to receive mouse button input events through `_gui_input` and how these events should be handled. Also controls whether the control can receive the `mouse_entered`, and `mouse_exited` signals. See the constants to learn what each does.
 */
  mouseFilter: int;
/**
 * When enabled, scroll wheel events processed by `_gui_input` will be passed to the parent control even if `mouse_filter` is set to `MOUSE_FILTER_STOP`.
 * You should disable it on the root of your UI if you do not want scroll events to go to the `Node._unhandled_input` processing.
 * 
 * **Note:** Because this property defaults to `true`, this allows nested scrollable containers to work out of the box.
 */
  mouseForcePassScrollEvents: boolean;
/**
 * Distance between the node's bottom edge and its parent control, based on `anchor_bottom`.
 * Offsets are often controlled by one or multiple parent `Container` nodes, so you should not modify them manually if your node is a direct child of a `Container`. Offsets update automatically when you move or resize the node.
 */
  offsetBottom: float;
/**
 * Distance between the node's left edge and its parent control, based on `anchor_left`.
 * Offsets are often controlled by one or multiple parent `Container` nodes, so you should not modify them manually if your node is a direct child of a `Container`. Offsets update automatically when you move or resize the node.
 */
  offsetLeft: float;
/**
 * Distance between the node's right edge and its parent control, based on `anchor_right`.
 * Offsets are often controlled by one or multiple parent `Container` nodes, so you should not modify them manually if your node is a direct child of a `Container`. Offsets update automatically when you move or resize the node.
 */
  offsetRight: float;
/**
 * Distance between the node's top edge and its parent control, based on `anchor_top`.
 * Offsets are often controlled by one or multiple parent `Container` nodes, so you should not modify them manually if your node is a direct child of a `Container`. Offsets update automatically when you move or resize the node.
 */
  offsetTop: float;
  physicsInterpolationMode: int;
/**
 * By default, the node's pivot is its top-left corner. When you change its `rotation` or `scale`, it will rotate or scale around this pivot. Set this property to `size` / 2 to pivot around the Control's center.
 */
  pivotOffset: Vector2;
/**
 * The node's position, relative to its containing node. It corresponds to the rectangle's top-left corner. The property is not affected by `pivot_offset`.
 */
  position: Vector2;
/**
 * The node's rotation around its pivot, in radians. See `pivot_offset` to change the pivot's position.
 * 
 * **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use `rotation_degrees`.
 */
  rotation: float;
/**
 * Helper property to access `rotation` in degrees instead of radians.
 */
  rotationDegrees: float;
/**
 * The node's scale, relative to its `size`. Change this property to scale the node around its `pivot_offset`. The Control's `tooltip_text` will also scale according to this value.
 * 
 * **Note:** This property is mainly intended to be used for animation purposes. To support multiple resolutions in your project, use an appropriate viewport stretch mode as described in the documentation (https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html) instead of scaling Controls individually.
 * 
 * **Note:** `FontFile.oversampling` does *not* take `Control` `scale` into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling `ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field` (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, `SystemFont.multichannel_signed_distance_field` can be enabled in the inspector.
 * 
 * **Note:** If the Control node is a child of a `Container` node, the scale will be reset to `Vector2(1, 1)` when the scene is instantiated. To set the Control's scale when it's instantiated, wait for one frame using `await get_tree().process_frame` then set its `scale` property.
 */
  scale: Vector2;
/**
 * The `Node` which must be a parent of the focused `Control` for the shortcut to be activated. If `null`, the shortcut can be activated when any control is focused (a global shortcut). This allows shortcuts to be accepted only when the user has a certain area of the GUI focused.
 */
  shortcutContext: Node;
/**
 * The size of the node's bounding rectangle, in the node's coordinate system. `Container` nodes update this property automatically.
 */
  size: Vector2;
/**
 * Tells the parent `Container` nodes how they should resize and place the node on the X axis. Use a combination of the `SizeFlags` constants to change the flags. See the constants to learn what each does.
 */
  sizeFlagsHorizontal: int;
/**
 * If the node and at least one of its neighbors uses the `SIZE_EXPAND` size flag, the parent `Container` will let it take more or less space depending on this property. If this node has a stretch ratio of 2 and its neighbor a ratio of 1, this node will take two thirds of the available space.
 */
  sizeFlagsStretchRatio: float;
/**
 * Tells the parent `Container` nodes how they should resize and place the node on the Y axis. Use a combination of the `SizeFlags` constants to change the flags. See the constants to learn what each does.
 */
  sizeFlagsVertical: int;
/**
 * The `Theme` resource this node and all its `Control` and `Window` children use. If a child node has its own `Theme` resource set, theme items are merged with child's definitions having higher priority.
 * 
 * **Note:** `Window` styles will have no effect unless the window is embedded.
 */
  theme: Theme;
/**
 * The name of a theme type variation used by this `Control` to look up its own theme items. When empty, the class name of the node is used (e.g. [code skip-lint]Button[/code] for the `Button` control), as well as the class names of all parent classes (in order of inheritance).
 * When set, this property gives the highest priority to the type of the specified name. This type can in turn extend another type, forming a dependency chain. See `Theme.set_type_variation`. If the theme item cannot be found using this type or its base types, lookup falls back on the class names.
 * 
 * **Note:** To look up `Control`'s own items use various `get_theme_*` methods without specifying `theme_type`.
 * 
 * **Note:** Theme items are looked for in the tree order, from branch to root, where each `Control` node is checked for its `theme` property. The earliest match against any type/class name is returned. The project-level Theme and the default Theme are checked last.
 */
  themeTypeVariation: StringName;
/**
 * Defines if tooltip text should automatically change to its translated version depending on the current locale. Uses the same auto translate mode as this control when set to `Node.AUTO_TRANSLATE_MODE_INHERIT`.
 * 
 * **Note:** Tooltips customized using `_make_custom_tooltip` do not use this auto translate mode automatically.
 */
  tooltipAutoTranslateMode: int;
/**
 * The default tooltip text. The tooltip appears when the user's mouse cursor stays idle over this control for a few moments, provided that the `mouse_filter` property is not `MOUSE_FILTER_IGNORE`. The time required for the tooltip to appear can be changed with the `ProjectSettings.gui/timers/tooltip_delay_sec` setting.
 * This string is the default return value of `get_tooltip`. Override `_get_tooltip` to generate tooltip text dynamically. Override `_make_custom_tooltip` to customize the tooltip interface and behavior.
 * The tooltip popup will use either a default implementation, or a custom one that you can provide by overriding `_make_custom_tooltip`. The default tooltip includes a `PopupPanel` and `Label` whose theme properties can be customized using `Theme` methods with the `"TooltipPanel"` and `"TooltipLabel"` respectively. For example:
 * 
 * 			```gdscript
 * 
 * 			var style_box = StyleBoxFlat.new()
 * 			style_box.set_bg_color(Color(1, 1, 0))
 * 			style_box.set_border_width_all(2)
 * 			# We assume here that the `theme` property has been assigned a custom Theme beforehand.
 * 			theme.set_stylebox("panel", "TooltipPanel", style_box)
 * 			theme.set_color("font_color", "TooltipLabel", Color(0, 1, 1))
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			var styleBox = new StyleBoxFlat();
 * 			styleBox.SetBgColor(new Color(1, 1, 0));
 * 			styleBox.SetBorderWidthAll(2);
 * 			// We assume here that the `Theme` property has been assigned a custom Theme beforehand.
 * 			Theme.SetStyleBox("panel", "TooltipPanel", styleBox);
 * 			Theme.SetColor("font_color", "TooltipLabel", new Color(0, 1, 1));
 * 			
 * 
 * ```
 * 
 */
  tooltipText: string;
/**
 * Marks an input event as handled. Once you accept an input event, it stops propagating, even to nodes listening to `Node._unhandled_input` or `Node._unhandled_key_input`.
 * 
 * **Note:** This does not affect the methods in `Input`, only the way events are propagated.
 */
  acceptEvent(): void;
/**
 * Creates a local override for a theme `Color` with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with `remove_theme_color_override`.
 * See also `get_theme_color`.
 * 
 * **Example:** Override a `Label`'s color and reset it later:
 * 
 * 				```gdscript
 * 
 * 				# Given the child Label node "MyLabel", override its font color with a custom value.
 * 				$MyLabel.add_theme_color_override("font_color", Color(1, 0.5, 0))
 * 				# Reset the font color of the child label.
 * 				$MyLabel.remove_theme_color_override("font_color")
 * 				# Alternatively it can be overridden with the default value from the Label type.
 * 				$MyLabel.add_theme_color_override("font_color", get_theme_color("font_color", "Label"))
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				// Given the child Label node "MyLabel", override its font color with a custom value.
 * 				GetNode<Label>("MyLabel").AddThemeColorOverride("font_color", new Color(1, 0.5f, 0));
 * 				// Reset the font color of the child label.
 * 				GetNode<Label>("MyLabel").RemoveThemeColorOverride("font_color");
 * 				// Alternatively it can be overridden with the default value from the Label type.
 * 				GetNode<Label>("MyLabel").AddThemeColorOverride("font_color", GetThemeColor("font_color", "Label"));
 * 				
 * 
 * ```
 * 
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
 * See also `get_theme_stylebox`.
 * 
 * **Example:** Modify a property in a `StyleBox` by duplicating it:
 * 
 * 				```gdscript
 * 
 * 				# The snippet below assumes the child node "MyButton" has a StyleBoxFlat assigned.
 * 				# Resources are shared across instances, so we need to duplicate it
 * 				# to avoid modifying the appearance of all other buttons.
 * 				var new_stylebox_normal = $MyButton.get_theme_stylebox("normal").duplicate()
 * 				new_stylebox_normal.border_width_top = 3
 * 				new_stylebox_normal.border_color = Color(0, 1, 0.5)
 * 				$MyButton.add_theme_stylebox_override("normal", new_stylebox_normal)
 * 				# Remove the stylebox override.
 * 				$MyButton.remove_theme_stylebox_override("normal")
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				// The snippet below assumes the child node "MyButton" has a StyleBoxFlat assigned.
 * 				// Resources are shared across instances, so we need to duplicate it
 * 				// to avoid modifying the appearance of all other buttons.
 * 				StyleBoxFlat newStyleboxNormal = GetNode<Button>("MyButton").GetThemeStylebox("normal").Duplicate() as StyleBoxFlat;
 * 				newStyleboxNormal.BorderWidthTop = 3;
 * 				newStyleboxNormal.BorderColor = new Color(0, 1, 0.5f);
 * 				GetNode<Button>("MyButton").AddThemeStyleboxOverride("normal", newStyleboxNormal);
 * 				// Remove the stylebox override.
 * 				GetNode<Button>("MyButton").RemoveThemeStyleboxOverride("normal");
 * 				
 * 
 * ```
 * 
 * @param name StringName
 * @param stylebox StyleBox
 */
  addThemeStyleboxOverride(name: StringName, stylebox: StyleBox): void;
/**
 * Prevents `*_theme_*_override` methods from emitting `NOTIFICATION_THEME_CHANGED` until `end_bulk_theme_override` is called.
 */
  beginBulkThemeOverride(): void;
/**
 * Godot calls this method to test if `data` from a control's `_get_drag_data` can be dropped at `at_position`. `at_position` is local to this control.
 * This method should only be used to test the data. Process the data in `_drop_data`.
 * 
 * 				```gdscript
 * 
 * 				func _can_drop_data(position, data):
 * 				    # Check position if it is relevant to you
 * 				    # Otherwise, just check data
 * 				    return typeof(data) == TYPE_DICTIONARY and data.has("expected")
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override bool _CanDropData(Vector2 atPosition, Variant data)
 * 				{
 * 				    // Check position if it is relevant to you
 * 				    // Otherwise, just check data
 * 				    return data.VariantType == Variant.Type.Dictionary && data.AsGodotDictionary().ContainsKey("expected");
 * 				}
 * 				
 * 
 * ```
 * 
 * @param atPosition Vector2
 * @param data Variant
 * @returns boolean
 */
  private canDropData(atPosition: Vector2, data: Variant): boolean;
/**
 * Godot calls this method to pass you the `data` from a control's `_get_drag_data` result. Godot first calls `_can_drop_data` to test if `data` is allowed to drop at `at_position` where `at_position` is local to this control.
 * 
 * 				```gdscript
 * 
 * 				func _can_drop_data(position, data):
 * 				    return typeof(data) == TYPE_DICTIONARY and data.has("color")
 * 
 * 				func _drop_data(position, data):
 * 				    var color = data["color"]
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override bool _CanDropData(Vector2 atPosition, Variant data)
 * 				{
 * 				    return data.VariantType == Variant.Type.Dictionary && data.AsGodotDictionary().ContainsKey("color");
 * 				}
 * 
 * 				public override void _DropData(Vector2 atPosition, Variant data)
 * 				{
 * 				    Color color = data.AsGodotDictionary()["color"].AsColor();
 * 				}
 * 				
 * 
 * ```
 * 
 * @param atPosition Vector2
 * @param data Variant
 */
  private dropData(atPosition: Vector2, data: Variant): void;
/**
 * Ends a bulk theme override update. See `begin_bulk_theme_override`.
 */
  endBulkThemeOverride(): void;
/**
 * Finds the next (below in the tree) `Control` that can receive the focus.
 * @returns Control
 */
  findNextValidFocus(): Control;
/**
 * Finds the previous (above in the tree) `Control` that can receive the focus.
 * @returns Control
 */
  findPrevValidFocus(): Control;
/**
 * Finds the next `Control` that can receive the focus on the specified `Side`.
 * 
 * **Note:** This is different from `get_focus_neighbor`, which returns the path of a specified focus neighbor.
 * @param side int
 * @returns Control
 */
  findValidFocusNeighbor(side: int): Control;
/**
 * Forces drag and bypasses `_get_drag_data` and `set_drag_preview` by passing `data` and `preview`. Drag will start even if the mouse is neither over nor pressed on this control.
 * The methods `_can_drop_data` and `_drop_data` must be implemented on controls that want to receive drop data.
 * @param data Variant
 * @param preview Control
 */
  forceDrag(data: Variant, preview: Control): void;
/**
 * Returns the anchor for the specified `Side`. A getter method for `anchor_bottom`, `anchor_left`, `anchor_right` and `anchor_top`.
 * @param side int
 * @returns float
 */
  getAnchor(side: int): float;
/**
 * Returns `offset_left` and `offset_top`. See also `position`.
 * @returns Vector2
 */
  getBegin(): Vector2;
/**
 * Returns combined minimum size from `custom_minimum_size` and `get_minimum_size`.
 * @returns Vector2
 */
  getCombinedMinimumSize(): Vector2;
/**
 * Returns the mouse cursor shape the control displays on mouse hover. See `CursorShape`.
 * @param position Vector2 (optional, default: Vector2(0, 0))
 * @returns int
 */
  getCursorShape(position?: Vector2): int;
/**
 * Godot calls this method to get data that can be dragged and dropped onto controls that expect drop data. Returns `null` if there is no data to drag. Controls that want to receive drop data should implement `_can_drop_data` and `_drop_data`. `at_position` is local to this control. Drag may be forced with `force_drag`.
 * A preview that will follow the mouse that should represent the data can be set with `set_drag_preview`. A good time to set the preview is in this method.
 * 
 * 				```gdscript
 * 
 * 				func _get_drag_data(position):
 * 				    var mydata = make_data() # This is your custom method generating the drag data.
 * 				    set_drag_preview(make_preview(mydata)) # This is your custom method generating the preview of the drag data.
 * 				    return mydata
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override Variant _GetDragData(Vector2 atPosition)
 * 				{
 * 				    var myData = MakeData(); // This is your custom method generating the drag data.
 * 				    SetDragPreview(MakePreview(myData)); // This is your custom method generating the preview of the drag data.
 * 				    return myData;
 * 				}
 * 				
 * 
 * ```
 * 
 * @param atPosition Vector2
 * @returns Variant
 */
  private getDragData(atPosition: Vector2): Variant;
/**
 * Returns `offset_right` and `offset_bottom`.
 * @returns Vector2
 */
  getEnd(): Vector2;
/**
 * Returns the focus neighbor for the specified `Side`. A getter method for `focus_neighbor_bottom`, `focus_neighbor_left`, `focus_neighbor_right` and `focus_neighbor_top`.
 * 
 * **Note:** To find the next `Control` on the specific `Side`, even if a neighbor is not assigned, use `find_valid_focus_neighbor`.
 * @param side int
 * @returns NodePath
 */
  getFocusNeighbor(side: int): NodePath;
/**
 * Returns the position and size of the control relative to the containing canvas. See `global_position` and `size`.
 * 
 * **Note:** If the node itself or any parent `CanvasItem` between the node and the canvas have a non default rotation or skew, the resulting size is likely not meaningful.
 * 
 * **Note:** Setting `Viewport.gui_snap_controls_to_pixels` to `true` can lead to rounding inaccuracies between the displayed control and the returned `Rect2`.
 * @returns Rect2
 */
  getGlobalRect(): Rect2;
/**
 * Returns the minimum size for this control. See `custom_minimum_size`.
 * @returns Vector2
 */
  getMinimumSize(): Vector2;
/**
 * Virtual method to be implemented by the user. Returns the minimum size for this control. Alternative to `custom_minimum_size` for controlling minimum size via code. The actual minimum size will be the max value of these two (in each axis separately).
 * If not overridden, defaults to `Vector2.ZERO`.
 * 
 * **Note:** This method will not be called when the script is attached to a `Control` node that already overrides its minimum size (e.g. `Label`, `Button`, `PanelContainer` etc.). It can only be used with most basic GUI nodes, like `Control`, `Container`, `Panel` etc.
 * @returns Vector2
 */
  private getMinimumSize(): Vector2;
/**
 * Returns the offset for the specified `Side`. A getter method for `offset_bottom`, `offset_left`, `offset_right` and `offset_top`.
 * @param offset int
 * @returns float
 */
  getOffset(offset: int): float;
/**
 * Returns the width/height occupied in the parent control.
 * @returns Vector2
 */
  getParentAreaSize(): Vector2;
/**
 * Returns the parent control node.
 * @returns Control
 */
  getParentControl(): Control;
/**
 * Returns the position and size of the control in the coordinate system of the containing node. See `position`, `scale` and `size`.
 * 
 * **Note:** If `rotation` is not the default rotation, the resulting size is not meaningful.
 * 
 * **Note:** Setting `Viewport.gui_snap_controls_to_pixels` to `true` can lead to rounding inaccuracies between the displayed control and the returned `Rect2`.
 * @returns Rect2
 */
  getRect(): Rect2;
/**
 * Returns the position of this `Control` in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.
 * Equals to `global_position` if the window is embedded (see `Viewport.gui_embed_subwindows`).
 * 
 * **Example:** Show a popup at the mouse position:
 * 
 * 				```gdscript
 * 
 * 				popup_menu.position = get_screen_position() + get_local_mouse_position()
 * 				popup_menu.reset_size()
 * 				popup_menu.popup()
 * 				
 * 
 * ```
 * @returns Vector2
 */
  getScreenPosition(): Vector2;
/**
 * Returns a `Color` from the first matching `Theme` in the tree if that `Theme` has a color item with the specified `name` and `theme_type`. If `theme_type` is omitted the class name of the current control is used as the type, or `theme_type_variation` if it is defined. If the type is a class name its parent classes are also checked, in order of inheritance. If the type is a variation its base types are checked, in order of dependency, then the control's class name and its parent classes are checked.
 * For the current control its local overrides are considered first (see `add_theme_color_override`), then its assigned `theme`. After the current control, each parent control and its assigned `theme` are considered; controls without a `theme` assigned are skipped. If no matching `Theme` is found in the tree, the custom project `Theme` (see `ProjectSettings.gui/theme/custom`) and the default `Theme` are used (see `ThemeDB`).
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    # Get the font color defined for the current Control's class, if it exists.
 * 				    modulate = get_theme_color("font_color")
 * 				    # Get the font color defined for the Button class.
 * 				    modulate = get_theme_color("font_color", "Button")
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Ready()
 * 				{
 * 				    // Get the font color defined for the current Control's class, if it exists.
 * 				    Modulate = GetThemeColor("font_color");
 * 				    // Get the font color defined for the Button class.
 * 				    Modulate = GetThemeColor("font_color", "Button");
 * 				}
 * 				
 * 
 * ```
 * 
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns Color
 */
  getThemeColor(name: StringName, themeType?: StringName): Color;
/**
 * Returns a constant from the first matching `Theme` in the tree if that `Theme` has a constant item with the specified `name` and `theme_type`.
 * See `get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns int
 */
  getThemeConstant(name: StringName, themeType?: StringName): int;
/**
 * Returns the default base scale value from the first matching `Theme` in the tree if that `Theme` has a valid `Theme.default_base_scale` value.
 * See `get_theme_color` for details.
 * @returns float
 */
  getThemeDefaultBaseScale(): float;
/**
 * Returns the default font from the first matching `Theme` in the tree if that `Theme` has a valid `Theme.default_font` value.
 * See `get_theme_color` for details.
 * @returns Font
 */
  getThemeDefaultFont(): Font;
/**
 * Returns the default font size value from the first matching `Theme` in the tree if that `Theme` has a valid `Theme.default_font_size` value.
 * See `get_theme_color` for details.
 * @returns int
 */
  getThemeDefaultFontSize(): int;
/**
 * Returns a `Font` from the first matching `Theme` in the tree if that `Theme` has a font item with the specified `name` and `theme_type`.
 * See `get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns Font
 */
  getThemeFont(name: StringName, themeType?: StringName): Font;
/**
 * Returns a font size from the first matching `Theme` in the tree if that `Theme` has a font size item with the specified `name` and `theme_type`.
 * See `get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns int
 */
  getThemeFontSize(name: StringName, themeType?: StringName): int;
/**
 * Returns an icon from the first matching `Theme` in the tree if that `Theme` has an icon item with the specified `name` and `theme_type`.
 * See `get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns Texture2D
 */
  getThemeIcon(name: StringName, themeType?: StringName): Texture2D;
/**
 * Returns a `StyleBox` from the first matching `Theme` in the tree if that `Theme` has a stylebox item with the specified `name` and `theme_type`.
 * See `get_theme_color` for details.
 * @param name StringName
 * @param themeType StringName (optional, default: &"")
 * @returns StyleBox
 */
  getThemeStylebox(name: StringName, themeType?: StringName): StyleBox;
/**
 * Returns the tooltip text for the position `at_position` in control's local coordinates, which will typically appear when the cursor is resting over this control. By default, it returns `tooltip_text`.
 * This method can be overridden to customize its behavior. See `_get_tooltip`.
 * 
 * **Note:** If this method returns an empty `String` and `_make_custom_tooltip` is not overridden, no tooltip is displayed.
 * @param atPosition Vector2 (optional, default: Vector2(0, 0))
 * @returns string
 */
  getTooltip(atPosition?: Vector2): string;
/**
 * Virtual method to be implemented by the user. Returns the tooltip text for the position `at_position` in control's local coordinates, which will typically appear when the cursor is resting over this control. See `get_tooltip`.
 * 
 * **Note:** If this method returns an empty `String` and `_make_custom_tooltip` is not overridden, no tooltip is displayed.
 * @param atPosition Vector2
 * @returns string
 */
  private getTooltip(atPosition: Vector2): string;
/**
 * Creates an `InputEventMouseButton` that attempts to click the control. If the event is received, the control gains focus.
 * 
 * 				```gdscript
 * 
 * 				func _process(delta):
 * 				    grab_click_focus() # When clicking another Control node, this node will be clicked instead.
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Process(double delta)
 * 				{
 * 				    GrabClickFocus(); // When clicking another Control node, this node will be clicked instead.
 * 				}
 * 				
 * 
 * ```
 * 
 */
  grabClickFocus(): void;
/**
 * Steal the focus from another control and become the focused control (see `focus_mode`).
 * 
 * **Note:** Using this method together with `Callable.call_deferred` makes it more reliable, especially when called inside `Node._ready`.
 */
  grabFocus(): void;
/**
 * Virtual method to be implemented by the user. Override this method to handle and accept inputs on UI elements. See also `accept_event`.
 * 
 * **Example:** Click on the control to print a message:
 * 
 * 				```gdscript
 * 
 * 				func _gui_input(event):
 * 				    if event is InputEventMouseButton:
 * 				        if event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
 * 				            print("I've been clicked D:")
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _GuiInput(InputEvent @event)
 * 				{
 * 				    if (@event is InputEventMouseButton mb)
 * 				    {
 * 				        if (mb.ButtonIndex == MouseButton.Left && mb.Pressed)
 * 				        {
 * 				            GD.Print("I've been clicked D:");
 * 				        }
 * 				    }
 * 				}
 * 				
 * 
 * ```
 * 
 * If the `event` inherits `InputEventMouse`, this method will **not** be called when:
 * - the control's `mouse_filter` is set to `MOUSE_FILTER_IGNORE`;
 * - the control is obstructed by another control on top, that doesn't have `mouse_filter` set to `MOUSE_FILTER_IGNORE`;
 * - the control's parent has `mouse_filter` set to `MOUSE_FILTER_STOP` or has accepted the event;
 * - the control's parent has `clip_contents` enabled and the `event`'s position is outside the parent's rectangle;
 * - the `event`'s position is outside the control (see `_has_point`).
 * 
 * **Note:** The `event`'s position is relative to this control's origin.
 * @param event InputEvent
 */
  private guiInput(event: InputEvent): void;
/**
 * Returns `true` if this is the current focused control. See `focus_mode`.
 * @returns boolean
 */
  hasFocus(): boolean;
/**
 * Virtual method to be implemented by the user. Returns whether the given `point` is inside this control.
 * If not overridden, default behavior is checking if the point is within control's Rect.
 * 
 * **Note:** If you want to check if a point is inside the control, you can use `Rect2(Vector2.ZERO, size).has_point(point)`.
 * @param point Vector2
 * @returns boolean
 */
  private hasPoint(point: Vector2): boolean;
/**
 * Returns `true` if there is a matching `Theme` in the tree that has a color item with the specified `name` and `theme_type`.
 * See `get_theme_color` for details.
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
 * See `get_theme_color` for details.
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
 * See `get_theme_color` for details.
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
 * See `get_theme_color` for details.
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
 * See `get_theme_color` for details.
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
 * See `get_theme_color` for details.
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
 * Returns `true` if a drag operation is successful. Alternative to `Viewport.gui_is_drag_successful`.
 * Best used with `Node.NOTIFICATION_DRAG_END`.
 * @returns boolean
 */
  isDragSuccessful(): boolean;
/**
 * Returns `true` if layout is right-to-left. See also `layout_direction`.
 * @returns boolean
 */
  isLayoutRtl(): boolean;
/**
 * Virtual method to be implemented by the user. Returns a `Control` node that should be used as a tooltip instead of the default one. `for_text` is the return value of `get_tooltip`.
 * The returned node must be of type `Control` or Control-derived. It can have child nodes of any type. It is freed when the tooltip disappears, so make sure you always provide a new instance (if you want to use a pre-existing node from your scene tree, you can duplicate it and pass the duplicated instance). When `null` or a non-Control node is returned, the default tooltip will be used instead.
 * The returned node will be added as child to a `PopupPanel`, so you should only provide the contents of that panel. That `PopupPanel` can be themed using `Theme.set_stylebox` for the type `"TooltipPanel"` (see `tooltip_text` for an example).
 * 
 * **Note:** The tooltip is shrunk to minimal size. If you want to ensure it's fully visible, you might want to set its `custom_minimum_size` to some non-zero value.
 * 
 * **Note:** The node (and any relevant children) should have their `CanvasItem.visible` set to `true` when returned, otherwise, the viewport that instantiates it will not be able to calculate its minimum size reliably.
 * 
 * **Note:** If overridden, this method is called even if `get_tooltip` returns an empty string. When this happens with the default tooltip, it is not displayed. To copy this behavior, return `null` in this method when `for_text` is empty.
 * 
 * **Example:** Use a constructed node as a tooltip:
 * 
 * 				```gdscript
 * 
 * 				func _make_custom_tooltip(for_text):
 * 				    var label = Label.new()
 * 				    label.text = for_text
 * 				    return label
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override Control _MakeCustomTooltip(string forText)
 * 				{
 * 				    var label = new Label();
 * 				    label.Text = forText;
 * 				    return label;
 * 				}
 * 				
 * 
 * ```
 * 
 * **Example:** Usa a scene instance as a tooltip:
 * 
 * 				```gdscript
 * 
 * 				func _make_custom_tooltip(for_text):
 * 				    var tooltip = preload("res://some_tooltip_scene.tscn").instantiate()
 * 				    tooltip.get_node("Label").text = for_text
 * 				    return tooltip
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override Control _MakeCustomTooltip(string forText)
 * 				{
 * 				    Node tooltip = ResourceLoader.Load<PackedScene>("res://some_tooltip_scene.tscn").Instantiate();
 * 				    tooltip.GetNode<Label>("Label").Text = forText;
 * 				    return tooltip;
 * 				}
 * 				
 * 
 * ```
 * 
 * @param forText string
 * @returns Object
 */
  private makeCustomTooltip(forText: string): Object;
/**
 * Give up the focus. No other control will be able to receive input.
 */
  releaseFocus(): void;
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
 * Resets the size to `get_combined_minimum_size`. This is equivalent to calling `set_size(Vector2())` (or any size below the minimum).
 */
  resetSize(): void;
/**
 * Sets the anchor for the specified `Side` to `anchor`. A setter method for `anchor_bottom`, `anchor_left`, `anchor_right` and `anchor_top`.
 * If `keep_offset` is `true`, offsets aren't updated after this operation.
 * If `push_opposite_anchor` is `true` and the opposite anchor overlaps this anchor, the opposite one will have its value overridden. For example, when setting left anchor to 1 and the right anchor has value of 0.5, the right anchor will also get value of 1. If `push_opposite_anchor` was `false`, the left anchor would get value 0.5.
 * @param side int
 * @param anchor float
 * @param keepOffset boolean (optional, default: false)
 * @param pushOppositeAnchor boolean (optional, default: true)
 */
  setAnchor(side: int, anchor: float, keepOffset?: boolean, pushOppositeAnchor?: boolean): void;
/**
 * Works the same as `set_anchor`, but instead of `keep_offset` argument and automatic update of offset, it allows to set the offset yourself (see `set_offset`).
 * @param side int
 * @param anchor float
 * @param offset float
 * @param pushOppositeAnchor boolean (optional, default: false)
 */
  setAnchorAndOffset(side: int, anchor: float, offset: float, pushOppositeAnchor?: boolean): void;
/**
 * Sets both anchor preset and offset preset. See `set_anchors_preset` and `set_offsets_preset`.
 * @param preset int
 * @param resizeMode int (optional, default: 0)
 * @param margin int (optional, default: 0)
 */
  setAnchorsAndOffsetsPreset(preset: int, resizeMode?: int, margin?: int): void;
/**
 * Sets the anchors to a `preset` from `Control.LayoutPreset` enum. This is the code equivalent to using the Layout menu in the 2D editor.
 * If `keep_offsets` is `true`, control's position will also be updated.
 * @param preset int
 * @param keepOffsets boolean (optional, default: false)
 */
  setAnchorsPreset(preset: int, keepOffsets?: boolean): void;
/**
 * Sets `offset_left` and `offset_top` at the same time. Equivalent of changing `position`.
 * @param position Vector2
 */
  setBegin(position: Vector2): void;
/**
 * Sets the given callables to be used instead of the control's own drag-and-drop virtual methods. If a callable is empty, its respective virtual method is used as normal.
 * The arguments for each callable should be exactly the same as their respective virtual methods, which would be:
 * - `drag_func` corresponds to `_get_drag_data` and requires a `Vector2`;
 * - `can_drop_func` corresponds to `_can_drop_data` and requires both a `Vector2` and a `Variant`;
 * - `drop_func` corresponds to `_drop_data` and requires both a `Vector2` and a `Variant`.
 * @param dragFunc Callable
 * @param canDropFunc Callable
 * @param dropFunc Callable
 */
  setDragForwarding(dragFunc: Callable, canDropFunc: Callable, dropFunc: Callable): void;
/**
 * Shows the given control at the mouse pointer. A good time to call this method is in `_get_drag_data`. The control must not be in the scene tree. You should not free the control, and you should not keep a reference to the control beyond the duration of the drag. It will be deleted automatically after the drag has ended.
 * 
 * 				```gdscript
 * 
 * 				@export var color = Color(1, 0, 0, 1)
 * 
 * 				func _get_drag_data(position):
 * 				    # Use a control that is not in the tree
 * 				    var cpb = ColorPickerButton.new()
 * 				    cpb.color = color
 * 				    cpb.size = Vector2(50, 50)
 * 				    set_drag_preview(cpb)
 * 				    return color
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				`Export`
 * 				private Color _color = new Color(1, 0, 0, 1);
 * 
 * 				public override Variant _GetDragData(Vector2 atPosition)
 * 				{
 * 				    // Use a control that is not in the tree
 * 				    var cpb = new ColorPickerButton();
 * 				    cpb.Color = _color;
 * 				    cpb.Size = new Vector2(50, 50);
 * 				    SetDragPreview(cpb);
 * 				    return _color;
 * 				}
 * 				
 * 
 * ```
 * 
 * @param control Control
 */
  setDragPreview(control: Control): void;
/**
 * Sets `offset_right` and `offset_bottom` at the same time.
 * @param position Vector2
 */
  setEnd(position: Vector2): void;
/**
 * Sets the focus neighbor for the specified `Side` to the `Control` at `neighbor` node path. A setter method for `focus_neighbor_bottom`, `focus_neighbor_left`, `focus_neighbor_right` and `focus_neighbor_top`.
 * @param side int
 * @param neighbor NodePath
 */
  setFocusNeighbor(side: int, neighbor: NodePath): void;
/**
 * Sets the `global_position` to given `position`.
 * If `keep_offsets` is `true`, control's anchors will be updated instead of offsets.
 * @param position Vector2
 * @param keepOffsets boolean (optional, default: false)
 */
  setGlobalPosition(position: Vector2, keepOffsets?: boolean): void;
/**
 * Sets the offset for the specified `Side` to `offset`. A setter method for `offset_bottom`, `offset_left`, `offset_right` and `offset_top`.
 * @param side int
 * @param offset float
 */
  setOffset(side: int, offset: float): void;
/**
 * Sets the offsets to a `preset` from `Control.LayoutPreset` enum. This is the code equivalent to using the Layout menu in the 2D editor.
 * Use parameter `resize_mode` with constants from `Control.LayoutPresetMode` to better determine the resulting size of the `Control`. Constant size will be ignored if used with presets that change size, e.g. `PRESET_LEFT_WIDE`.
 * Use parameter `margin` to determine the gap between the `Control` and the edges.
 * @param preset int
 * @param resizeMode int (optional, default: 0)
 * @param margin int (optional, default: 0)
 */
  setOffsetsPreset(preset: int, resizeMode?: int, margin?: int): void;
/**
 * Sets the `position` to given `position`.
 * If `keep_offsets` is `true`, control's anchors will be updated instead of offsets.
 * @param position Vector2
 * @param keepOffsets boolean (optional, default: false)
 */
  setPosition(position: Vector2, keepOffsets?: boolean): void;
/**
 * Sets the size (see `size`).
 * If `keep_offsets` is `true`, control's anchors will be updated instead of offsets.
 * @param size Vector2
 * @param keepOffsets boolean (optional, default: false)
 */
  setSize(size: Vector2, keepOffsets?: boolean): void;
/**
 * User defined BiDi algorithm override function.
 * Returns an `Array` of `Vector3i` text ranges and text base directions, in the left-to-right order. Ranges should cover full source `text` without overlaps. BiDi algorithm will be used on each range separately.
 * @param args GodotArray<any>
 * @param text string
 * @returns Vector3i[]
 */
  private structuredTextParser(args: GodotArray<any>, text: string): Vector3i[];
/**
 * Invalidates the size cache in this node and in parent nodes up to top level. Intended to be used with `get_minimum_size` when the return value is changed. Setting `custom_minimum_size` directly calls this method automatically.
 */
  updateMinimumSize(): void;
/**
 * Moves the mouse cursor to `position`, relative to `position` of this `Control`.
 * 
 * **Note:** `warp_mouse` is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
 * @param position Vector2
 */
  warpMouse(position: Vector2): void;
/**
 * Emitted when the node gains focus.
 */
  focusEntered: Signal<[]>;
/**
 * Emitted when the node loses focus.
 */
  focusExited: Signal<[]>;
/**
 * Emitted when the node receives an `InputEvent`.
 */
  guiInput: Signal<[event: InputEvent]>;
/**
 * Emitted when the node's minimum size changes.
 */
  minimumSizeChanged: Signal<[]>;
/**
 * Emitted when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its `mouse_filter` lets the event reach it and regardless if it's currently focused or not.
 * 
 * **Note:** `CanvasItem.z_index` doesn't affect, which Control receives the signal.
 */
  mouseEntered: Signal<[]>;
/**
 * Emitted when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its `mouse_filter` lets the event reach it and regardless if it's currently focused or not.
 * 
 * **Note:** `CanvasItem.z_index` doesn't affect, which Control receives the signal.
 * 
 * **Note:** If you want to check whether the mouse truly left the area, ignoring any top nodes, you can use code like this:
 * 
 * 				```gdscript
 * 
 * 				func _on_mouse_exited():
 * 				    if not Rect2(Vector2(), size).has_point(get_local_mouse_position()):
 * 				        # Not hovering over area.
 * 				
 * 
 * ```
 */
  mouseExited: Signal<[]>;
/**
 * Emitted when the control changes size.
 */
  resized: Signal<[]>;
/**
 * Emitted when one of the size flags changes. See `size_flags_horizontal` and `size_flags_vertical`.
 */
  sizeFlagsChanged: Signal<[]>;
/**
 * Emitted when the `NOTIFICATION_THEME_CHANGED` notification is sent.
 */
  themeChanged: Signal<[]>;
/**
 * The node cannot grab focus. Use with `focus_mode`.
 */
  static readonly FOCUS_NONE: int;
/**
 * The node can only grab focus on mouse clicks. Use with `focus_mode`.
 */
  static readonly FOCUS_CLICK: int;
/**
 * The node can grab focus on mouse click, using the arrows and the Tab keys on the keyboard, or using the D-pad buttons on a gamepad. Use with `focus_mode`.
 */
  static readonly FOCUS_ALL: int;
/**
 * Sent when the node changes size. Use `size` to get the new size.
 */
  static readonly NOTIFICATION_RESIZED: int;
/**
 * Sent when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its `mouse_filter` lets the event reach it and regardless if it's currently focused or not.
 * 
 * **Note:** `CanvasItem.z_index` doesn't affect which Control receives the notification.
 * See also `NOTIFICATION_MOUSE_ENTER_SELF`.
 */
  static readonly NOTIFICATION_MOUSE_ENTER: int;
/**
 * Sent when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its `mouse_filter` lets the event reach it and regardless if it's currently focused or not.
 * 
 * **Note:** `CanvasItem.z_index` doesn't affect which Control receives the notification.
 * See also `NOTIFICATION_MOUSE_EXIT_SELF`.
 */
  static readonly NOTIFICATION_MOUSE_EXIT: int;
/**
 * Sent when the mouse cursor enters the control's visible area, that is not occluded behind other Controls or Windows, provided its `mouse_filter` lets the event reach it and regardless if it's currently focused or not.
 * 
 * **Note:** `CanvasItem.z_index` doesn't affect which Control receives the notification.
 * See also `NOTIFICATION_MOUSE_ENTER`.
 */
  static readonly NOTIFICATION_MOUSE_ENTER_SELF: int;
/**
 * Sent when the mouse cursor leaves the control's visible area, that is not occluded behind other Controls or Windows, provided its `mouse_filter` lets the event reach it and regardless if it's currently focused or not.
 * 
 * **Note:** `CanvasItem.z_index` doesn't affect which Control receives the notification.
 * See also `NOTIFICATION_MOUSE_EXIT`.
 */
  static readonly NOTIFICATION_MOUSE_EXIT_SELF: int;
/**
 * Sent when the node grabs focus.
 */
  static readonly NOTIFICATION_FOCUS_ENTER: int;
/**
 * Sent when the node loses focus.
 */
  static readonly NOTIFICATION_FOCUS_EXIT: int;
/**
 * Sent when the node needs to refresh its theme items. This happens in one of the following cases:
 * - The `theme` property is changed on this node or any of its ancestors.
 * - The `theme_type_variation` property is changed on this node.
 * - One of the node's theme property overrides is changed.
 * - The node enters the scene tree.
 * 
 * **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.
 * 
 * **Note:** This notification is received alongside `Node.NOTIFICATION_ENTER_TREE`, so if you are instantiating a scene, the child nodes will not be initialized yet. You can use it to setup theming for this node, child nodes created from script, or if you want to access child nodes added in the editor, make sure the node is ready using `Node.is_node_ready`.
 * 
 * 			```gdscript
 * 
 * 			func _notification(what):
 * 			    if what == NOTIFICATION_THEME_CHANGED:
 * 			        if not is_node_ready():
 * 			            await ready # Wait until ready signal.
 * 			        $Label.add_theme_color_override("font_color", Color.YELLOW)
 * 			
 * 
 * ```
 */
  static readonly NOTIFICATION_THEME_CHANGED: int;
/**
 * Sent when this node is inside a `ScrollContainer` which has begun being scrolled when dragging the scrollable area *with a touch event*. This notification is *not* sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 * 
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when `ProjectSettings.input_devices/pointing/emulate_touch_from_mouse` is enabled.
 */
  static readonly NOTIFICATION_SCROLL_BEGIN: int;
/**
 * Sent when this node is inside a `ScrollContainer` which has stopped being scrolled when dragging the scrollable area *with a touch event*. This notification is *not* sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 * 
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when `ProjectSettings.input_devices/pointing/emulate_touch_from_mouse` is enabled.
 */
  static readonly NOTIFICATION_SCROLL_END: int;
/**
 * Sent when the control layout direction is changed from LTR or RTL or vice versa. This notification is propagated to child Control nodes as result of a change to `layout_direction`.
 */
  static readonly NOTIFICATION_LAYOUT_DIRECTION_CHANGED: int;
/**
 * Show the system's arrow mouse cursor when the user hovers the node. Use with `mouse_default_cursor_shape`.
 */
  static readonly CURSOR_ARROW: int;
/**
 * Show the system's I-beam mouse cursor when the user hovers the node. The I-beam pointer has a shape similar to "I". It tells the user they can highlight or insert text.
 */
  static readonly CURSOR_IBEAM: int;
/**
 * Show the system's pointing hand mouse cursor when the user hovers the node.
 */
  static readonly CURSOR_POINTING_HAND: int;
/**
 * Show the system's cross mouse cursor when the user hovers the node.
 */
  static readonly CURSOR_CROSS: int;
/**
 * Show the system's wait mouse cursor when the user hovers the node. Often an hourglass.
 */
  static readonly CURSOR_WAIT: int;
/**
 * Show the system's busy mouse cursor when the user hovers the node. Often an arrow with a small hourglass.
 */
  static readonly CURSOR_BUSY: int;
/**
 * Show the system's drag mouse cursor, often a closed fist or a cross symbol, when the user hovers the node. It tells the user they're currently dragging an item, like a node in the Scene dock.
 */
  static readonly CURSOR_DRAG: int;
/**
 * Show the system's drop mouse cursor when the user hovers the node. It can be an open hand. It tells the user they can drop an item they're currently grabbing, like a node in the Scene dock.
 */
  static readonly CURSOR_CAN_DROP: int;
/**
 * Show the system's forbidden mouse cursor when the user hovers the node. Often a crossed circle.
 */
  static readonly CURSOR_FORBIDDEN: int;
/**
 * Show the system's vertical resize mouse cursor when the user hovers the node. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically.
 */
  static readonly CURSOR_VSIZE: int;
/**
 * Show the system's horizontal resize mouse cursor when the user hovers the node. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally.
 */
  static readonly CURSOR_HSIZE: int;
/**
 * Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically.
 */
  static readonly CURSOR_BDIAGSIZE: int;
/**
 * Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of `CURSOR_BDIAGSIZE`. It tells the user they can resize the window or the panel both horizontally and vertically.
 */
  static readonly CURSOR_FDIAGSIZE: int;
/**
 * Show the system's move mouse cursor when the user hovers the node. It shows 2 double-headed arrows at a 90 degree angle. It tells the user they can move a UI element freely.
 */
  static readonly CURSOR_MOVE: int;
/**
 * Show the system's vertical split mouse cursor when the user hovers the node. On Windows, it's the same as `CURSOR_VSIZE`.
 */
  static readonly CURSOR_VSPLIT: int;
/**
 * Show the system's horizontal split mouse cursor when the user hovers the node. On Windows, it's the same as `CURSOR_HSIZE`.
 */
  static readonly CURSOR_HSPLIT: int;
/**
 * Show the system's help mouse cursor when the user hovers the node, a question mark.
 */
  static readonly CURSOR_HELP: int;
/**
 * Snap all 4 anchors to the top-left of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_TOP_LEFT: int;
/**
 * Snap all 4 anchors to the top-right of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_TOP_RIGHT: int;
/**
 * Snap all 4 anchors to the bottom-left of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_BOTTOM_LEFT: int;
/**
 * Snap all 4 anchors to the bottom-right of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_BOTTOM_RIGHT: int;
/**
 * Snap all 4 anchors to the center of the left edge of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_CENTER_LEFT: int;
/**
 * Snap all 4 anchors to the center of the top edge of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_CENTER_TOP: int;
/**
 * Snap all 4 anchors to the center of the right edge of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_CENTER_RIGHT: int;
/**
 * Snap all 4 anchors to the center of the bottom edge of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_CENTER_BOTTOM: int;
/**
 * Snap all 4 anchors to the center of the parent control's bounds. Use with `set_anchors_preset`.
 */
  static readonly PRESET_CENTER: int;
/**
 * Snap all 4 anchors to the left edge of the parent control. The left offset becomes relative to the left edge and the top offset relative to the top left corner of the node's parent. Use with `set_anchors_preset`.
 */
  static readonly PRESET_LEFT_WIDE: int;
/**
 * Snap all 4 anchors to the top edge of the parent control. The left offset becomes relative to the top left corner, the top offset relative to the top edge, and the right offset relative to the top right corner of the node's parent. Use with `set_anchors_preset`.
 */
  static readonly PRESET_TOP_WIDE: int;
/**
 * Snap all 4 anchors to the right edge of the parent control. The right offset becomes relative to the right edge and the top offset relative to the top right corner of the node's parent. Use with `set_anchors_preset`.
 */
  static readonly PRESET_RIGHT_WIDE: int;
/**
 * Snap all 4 anchors to the bottom edge of the parent control. The left offset becomes relative to the bottom left corner, the bottom offset relative to the bottom edge, and the right offset relative to the bottom right corner of the node's parent. Use with `set_anchors_preset`.
 */
  static readonly PRESET_BOTTOM_WIDE: int;
/**
 * Snap all 4 anchors to a vertical line that cuts the parent control in half. Use with `set_anchors_preset`.
 */
  static readonly PRESET_VCENTER_WIDE: int;
/**
 * Snap all 4 anchors to a horizontal line that cuts the parent control in half. Use with `set_anchors_preset`.
 */
  static readonly PRESET_HCENTER_WIDE: int;
/**
 * Snap all 4 anchors to the respective corners of the parent control. Set all 4 offsets to 0 after you applied this preset and the `Control` will fit its parent control. Use with `set_anchors_preset`.
 */
  static readonly PRESET_FULL_RECT: int;
/**
 * The control will be resized to its minimum size.
 */
  static readonly PRESET_MODE_MINSIZE: int;
/**
 * The control's width will not change.
 */
  static readonly PRESET_MODE_KEEP_WIDTH: int;
/**
 * The control's height will not change.
 */
  static readonly PRESET_MODE_KEEP_HEIGHT: int;
/**
 * The control's size will not change.
 */
  static readonly PRESET_MODE_KEEP_SIZE: int;
/**
 * Tells the parent `Container` to align the node with its start, either the top or the left edge. It is mutually exclusive with `SIZE_FILL` and other shrink size flags, but can be used with `SIZE_EXPAND` in some containers. Use with `size_flags_horizontal` and `size_flags_vertical`.
 * 
 * **Note:** Setting this flag is equal to not having any size flags.
 */
  static readonly SIZE_SHRINK_BEGIN: int;
/**
 * Tells the parent `Container` to expand the bounds of this node to fill all the available space without pushing any other node. It is mutually exclusive with shrink size flags. Use with `size_flags_horizontal` and `size_flags_vertical`.
 */
  static readonly SIZE_FILL: int;
/**
 * Tells the parent `Container` to let this node take all the available space on the axis you flag. If multiple neighboring nodes are set to expand, they'll share the space based on their stretch ratio. See `size_flags_stretch_ratio`. Use with `size_flags_horizontal` and `size_flags_vertical`.
 */
  static readonly SIZE_EXPAND: int;
/**
 * Sets the node's size flags to both fill and expand. See `SIZE_FILL` and `SIZE_EXPAND` for more information.
 */
  static readonly SIZE_EXPAND_FILL: int;
/**
 * Tells the parent `Container` to center the node in the available space. It is mutually exclusive with `SIZE_FILL` and other shrink size flags, but can be used with `SIZE_EXPAND` in some containers. Use with `size_flags_horizontal` and `size_flags_vertical`.
 */
  static readonly SIZE_SHRINK_CENTER: int;
/**
 * Tells the parent `Container` to align the node with its end, either the bottom or the right edge. It is mutually exclusive with `SIZE_FILL` and other shrink size flags, but can be used with `SIZE_EXPAND` in some containers. Use with `size_flags_horizontal` and `size_flags_vertical`.
 */
  static readonly SIZE_SHRINK_END: int;
/**
 * The control will receive mouse movement input events and mouse button input events if clicked on through `_gui_input`. The control will also receive the `mouse_entered` and `mouse_exited` signals. These events are automatically marked as handled, and they will not propagate further to other controls. This also results in blocking signals in other controls.
 */
  static readonly MOUSE_FILTER_STOP: int;
/**
 * The control will receive mouse movement input events and mouse button input events if clicked on through `_gui_input`. The control will also receive the `mouse_entered` and `mouse_exited` signals.
 * If this control does not handle the event, the event will propagate up to its parent control if it has one. The event is bubbled up the node hierarchy until it reaches a non-`CanvasItem`, a control with `MOUSE_FILTER_STOP`, or a `CanvasItem` with `CanvasItem.top_level` enabled. This will allow signals to fire in all controls it reaches. If no control handled it, the event will be passed to `Node._shortcut_input` for further processing.
 */
  static readonly MOUSE_FILTER_PASS: int;
/**
 * The control will not receive any mouse movement input events nor mouse button input events through `_gui_input`. The control will also not receive the `mouse_entered` nor `mouse_exited` signals. This will not block other controls from receiving these events or firing the signals. Ignored events will not be handled automatically. If a child has `MOUSE_FILTER_PASS` and an event was passed to this control, the event will further propagate up to the control's parent.
 * 
 * **Note:** If the control has received `mouse_entered` but not `mouse_exited`, changing the `mouse_filter` to `MOUSE_FILTER_IGNORE` will cause `mouse_exited` to be emitted.
 */
  static readonly MOUSE_FILTER_IGNORE: int;
/**
 * The control will grow to the left or top to make up if its minimum size is changed to be greater than its current size on the respective axis.
 */
  static readonly GROW_DIRECTION_BEGIN: int;
/**
 * The control will grow to the right or bottom to make up if its minimum size is changed to be greater than its current size on the respective axis.
 */
  static readonly GROW_DIRECTION_END: int;
/**
 * The control will grow in both directions equally to make up if its minimum size is changed to be greater than its current size.
 */
  static readonly GROW_DIRECTION_BOTH: int;
/**
 * Snaps one of the 4 anchor's sides to the origin of the node's `Rect`, in the top left. Use it with one of the `anchor_*` member variables, like `anchor_left`. To change all 4 anchors at once, use `set_anchors_preset`.
 */
  static readonly ANCHOR_BEGIN: int;
/**
 * Snaps one of the 4 anchor's sides to the end of the node's `Rect`, in the bottom right. Use it with one of the `anchor_*` member variables, like `anchor_left`. To change all 4 anchors at once, use `set_anchors_preset`.
 */
  static readonly ANCHOR_END: int;
/**
 * Automatic layout direction, determined from the parent control layout direction.
 */
  static readonly LAYOUT_DIRECTION_INHERITED: int;
/**
 * Automatic layout direction, determined from the current locale. Right-to-left layout direction is automatically used for languages that require it such as Arabic and Hebrew, but only if a valid translation file is loaded for the given language (unless said language is configured as a fallback in `ProjectSettings.internationalization/locale/fallback`). For all other languages (or if no valid translation file is found by Godot), left-to-right layout direction is used. If using `TextServerFallback` (`ProjectSettings.internationalization/rendering/text_driver`), left-to-right layout direction is always used regardless of the language. Right-to-left layout direction can also be forced using `ProjectSettings.internationalization/rendering/force_right_to_left_layout_direction`.
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
 * Automatic layout direction, determined from the system locale. Right-to-left layout direction is automatically used for languages that require it such as Arabic and Hebrew, but only if a valid translation file is loaded for the given language.. For all other languages (or if no valid translation file is found by Godot), left-to-right layout direction is used. If using `TextServerFallback` (`ProjectSettings.internationalization/rendering/text_driver`), left-to-right layout direction is always used regardless of the language.
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
 * Text writing direction is the same as layout direction.
 */
  static readonly TEXT_DIRECTION_INHERITED: int;
/**
 * Automatic text writing direction, determined from the current locale and text content.
 */
  static readonly TEXT_DIRECTION_AUTO: int;
/**
 * Left-to-right text writing direction.
 */
  static readonly TEXT_DIRECTION_LTR: int;
/**
 * Right-to-left text writing direction.
 */
  static readonly TEXT_DIRECTION_RTL: int;
}
