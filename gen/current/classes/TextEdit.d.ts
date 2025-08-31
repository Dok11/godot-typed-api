import type { Callable, Color, Control, GodotArray, GodotDictionary, HScrollBar, PackedInt32Array, PackedStringArray, PopupMenu, Rect2i, Signal, SyntaxHighlighter, Texture2D, VScrollBar, Variant, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * A multiline text editor.
 * 
 * A multiline text editor. It also has limited facilities for editing code, such as syntax highlighting support. For more advanced facilities for editing code, see `CodeEdit`.
 * 
 * **Note:** Most viewport, caret, and edit methods contain a `caret_index` argument for `caret_multiple` support. The argument should be one of the following: `-1` for all carets, `0` for the main caret, or greater than `0` for secondary carets in the order they were created.
 * 
 * **Note:** When holding down `Alt`, the vertical scroll wheel will scroll 5 times as fast as it would normally do. This also works in the Godot script editor.
 */
export class TextEdit extends Control {
/**
 * If `wrap_mode` is set to `LINE_WRAPPING_BOUNDARY`, sets text wrapping mode. To see how each mode behaves, see `TextServer.AutowrapMode`.
 */
  autowrapMode: int;
/**
 * If `true`, makes the caret blink.
 */
  caretBlink: boolean;
/**
 * The interval at which the caret blinks (in seconds).
 */
  caretBlinkInterval: float;
/**
 * If `true`, caret will be visible when `editable` is disabled.
 */
  caretDrawWhenEditableDisabled: boolean;
/**
 * Allow moving caret, selecting and removing the individual composite character components.
 * 
 * **Note:** `Backspace` is always removing individual composite character components.
 */
  caretMidGrapheme: boolean;
/**
 * If `true`, a right-click moves the caret at the mouse position before displaying the context menu.
 * If `false`, the context menu ignores mouse location.
 */
  caretMoveOnRightClick: boolean;
/**
 * If `true`, multiple carets are allowed. Left-clicking with `Alt` adds a new caret. See `add_caret` and `get_caret_count`.
 */
  caretMultiple: boolean;
/**
 * Set the type of caret to draw.
 */
  caretType: int;
  clipContents: boolean;
/**
 * If `true`, a right-click displays the context menu.
 */
  contextMenuEnabled: boolean;
/**
 * The characters to consider as word delimiters if `use_custom_word_separators` is `true`. The characters should be defined without separation, for example `#_!`.
 */
  customWordSeparators: string;
/**
 * If `true`, the selected text will be deselected when focus is lost.
 */
  deselectOnFocusLossEnabled: boolean;
/**
 * If `true`, allow drag and drop of selected text. Text can still be dropped from other sources.
 */
  dragAndDropSelectionEnabled: boolean;
/**
 * If `true`, control characters are displayed.
 */
  drawControlChars: boolean;
/**
 * If `true`, the "space" character will have a visible representation.
 */
  drawSpaces: boolean;
/**
 * If `true`, the "tab" character will have a visible representation.
 */
  drawTabs: boolean;
/**
 * If `false`, existing text cannot be modified and new text cannot be added.
 */
  editable: boolean;
/**
 * If `true`, "Emoji and Symbols" menu is enabled.
 */
  emojiMenuEnabled: boolean;
/**
 * If `true`, copying or cutting without a selection is performed on all lines with a caret. Otherwise, copy and cut require a selection.
 */
  emptySelectionClipboardEnabled: boolean;
  focusMode: int;
/**
 * If `true`, all occurrences of the selected text will be highlighted.
 */
  highlightAllOccurrences: boolean;
/**
 * If `true`, the line containing the cursor is highlighted.
 */
  highlightCurrentLine: boolean;
/**
 * If `true`, all wrapped lines are indented to the same amount as the unwrapped line.
 */
  indentWrappedLines: boolean;
/**
 * Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
/**
 * If `false`, using middle mouse button to paste clipboard will be disabled.
 * 
 * **Note:** This method is only implemented on Linux.
 */
  middleMousePasteEnabled: boolean;
/**
 * If `true`, a minimap is shown, providing an outline of your source code. The minimap uses a fixed-width text size.
 */
  minimapDraw: boolean;
/**
 * The width, in pixels, of the minimap.
 */
  minimapWidth: int;
  mouseDefaultCursorShape: int;
/**
 * Text shown when the `TextEdit` is empty. It is **not** the `TextEdit`'s default value (see `text`).
 */
  placeholderText: string;
/**
 * If `true`, `TextEdit` will disable vertical scroll and fit minimum height to the number of visible lines. When both this property and `scroll_fit_content_width` are `true`, no scrollbars will be displayed.
 */
  scrollFitContentHeight: boolean;
/**
 * If `true`, `TextEdit` will disable horizontal scroll and fit minimum width to the widest line in the text. When both this property and `scroll_fit_content_height` are `true`, no scrollbars will be displayed.
 */
  scrollFitContentWidth: boolean;
/**
 * If there is a horizontal scrollbar, this determines the current horizontal scroll value in pixels.
 */
  scrollHorizontal: int;
/**
 * Allow scrolling past the last line into "virtual" space.
 */
  scrollPastEndOfFile: boolean;
/**
 * Scroll smoothly over the text rather than jumping to the next location.
 */
  scrollSmooth: boolean;
/**
 * If there is a vertical scrollbar, this determines the current vertical scroll value in line numbers, starting at 0 for the top line.
 */
  scrollVertical: float;
/**
 * Sets the scroll speed with the minimap or when `scroll_smooth` is enabled.
 */
  scrollVScrollSpeed: float;
/**
 * If `true`, text can be selected.
 * If `false`, text can not be selected by the user or by the `select` or `select_all` methods.
 */
  selectingEnabled: boolean;
/**
 * If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled.
 */
  shortcutKeysEnabled: boolean;
/**
 * Set BiDi algorithm override for the structured text.
 */
  structuredTextBidiOverride: int;
/**
 * Set additional options for BiDi override.
 */
  structuredTextBidiOverrideOptions: GodotArray<any>;
/**
 * The syntax highlighter to use.
 * 
 * **Note:** A `SyntaxHighlighter` instance should not be used across multiple `TextEdit` nodes.
 */
  syntaxHighlighter: SyntaxHighlighter;
/**
 * String value of the `TextEdit`.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * If `false`, using `Ctrl + Left` or `Ctrl + Right` (`Cmd + Left` or `Cmd + Right` on macOS) bindings will use the behavior of `use_default_word_separators`. If `true`, it will also stop the caret if a character within `custom_word_separators` is detected. Useful for subword moving. This behavior also will be applied to the behavior of text selection.
 */
  useCustomWordSeparators: boolean;
/**
 * If `false`, using `Ctrl + Left` or `Ctrl + Right` (`Cmd + Left` or `Cmd + Right` on macOS) bindings will stop moving caret only if a space or punctuation is detected. If `true`, it will also stop the caret if a character is part of `!"#$%&'()*+,-./:;<=>?@[\]^\`{|}~`, the Unicode General Punctuation table, or the Unicode CJK Punctuation table. Useful for subword moving. This behavior also will be applied to the behavior of text selection.
 */
  useDefaultWordSeparators: boolean;
/**
 * If `true`, the native virtual keyboard is shown when focused on platforms that support it.
 */
  virtualKeyboardEnabled: boolean;
/**
 * Sets the line wrapping mode to use.
 */
  wrapMode: int;
/**
 * Adds a new caret at the given location. Returns the index of the new caret, or `-1` if the location is invalid.
 * @param line int
 * @param column int
 * @returns int
 */
  addCaret(line: int, column: int): int;
/**
 * Adds an additional caret above or below every caret. If `below` is `true` the new caret will be added below and above otherwise.
 * @param below boolean
 */
  addCaretAtCarets(below: boolean): void;
/**
 * Register a new gutter to this `TextEdit`. Use `at` to have a specific gutter order. A value of `-1` appends the gutter to the right.
 * @param at int (optional, default: -1)
 */
  addGutter(at?: int): void;
/**
 * Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret.
 */
  addSelectionForNextOccurrence(): void;
/**
 * This method does nothing.
 * @param caret int
 * @param fromLine int
 * @param fromCol int
 * @param toLine int
 * @param toCol int
 * @deprecated No longer necessary since methods now adjust carets themselves.
 */
  adjustCaretsAfterEdit(caret: int, fromLine: int, fromCol: int, toLine: int, toCol: int): void;
/**
 * Adjust the viewport so the caret is visible.
 * @param caretIndex int (optional, default: 0)
 */
  adjustViewportToCaret(caretIndex?: int): void;
/**
 * Applies text from the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) (IME) to each caret and closes the IME if it is open.
 */
  applyIme(): void;
/**
 * Called when the user presses the backspace key. Can be overridden with `_backspace`.
 * @param caretIndex int (optional, default: -1)
 */
  backspace(caretIndex?: int): void;
/**
 * Override this method to define what happens when the user presses the backspace key.
 * @param caretIndex int
 */
  private backspace(caretIndex: int): void;
/**
 * Starts a multipart edit. All edits will be treated as one action until `end_complex_operation` is called.
 */
  beginComplexOperation(): void;
/**
 * Starts an edit for multiple carets. The edit must be ended with `end_multicaret_edit`. Multicaret edits can be used to edit text at multiple carets and delay merging the carets until the end, so the caret indexes aren't affected immediately. `begin_multicaret_edit` and `end_multicaret_edit` can be nested, and the merge will happen at the last `end_multicaret_edit`.
 * 
 * 				```gdscript
 * 
 * 				begin_complex_operation()
 * 				begin_multicaret_edit()
 * 				for i in range(get_caret_count()):
 * 				    if multicaret_edit_ignore_caret(i):
 * 				        continue
 * 				    # Logic here.
 * 				end_multicaret_edit()
 * 				end_complex_operation()
 * 				
 * 
 * ```
 */
  beginMulticaretEdit(): void;
/**
 * Closes the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) (IME) if it is open. Any text in the IME will be lost.
 */
  cancelIme(): void;
/**
 * Centers the viewport on the line the editing caret is at. This also resets the `scroll_horizontal` value to `0`.
 * @param caretIndex int (optional, default: 0)
 */
  centerViewportToCaret(caretIndex?: int): void;
/**
 * Performs a full reset of `TextEdit`, including undo history.
 */
  clear(): void;
/**
 * Clears the undo history.
 */
  clearUndoHistory(): void;
/**
 * Collapse all carets in the given range to the `from_line` and `from_column` position.
 * `inclusive` applies to both ends.
 * If `is_in_mulitcaret_edit` is `true`, carets that are collapsed will be `true` for `multicaret_edit_ignore_caret`.
 * `merge_overlapping_carets` will be called if any carets were collapsed.
 * @param fromLine int
 * @param fromColumn int
 * @param toLine int
 * @param toColumn int
 * @param inclusive boolean (optional, default: false)
 */
  collapseCarets(fromLine: int, fromColumn: int, toLine: int, toColumn: int, inclusive?: boolean): void;
/**
 * Copies the current text selection. Can be overridden with `_copy`.
 * @param caretIndex int (optional, default: -1)
 */
  copy(caretIndex?: int): void;
/**
 * Override this method to define what happens when the user performs a copy operation.
 * @param caretIndex int
 */
  private copy(caretIndex: int): void;
/**
 * Cut's the current selection. Can be overridden with `_cut`.
 * @param caretIndex int (optional, default: -1)
 */
  cut(caretIndex?: int): void;
/**
 * Override this method to define what happens when the user performs a cut operation.
 * @param caretIndex int
 */
  private cut(caretIndex: int): void;
/**
 * Deletes the selected text.
 * @param caretIndex int (optional, default: -1)
 */
  deleteSelection(caretIndex?: int): void;
/**
 * Deselects the current selection.
 * @param caretIndex int (optional, default: -1)
 */
  deselect(caretIndex?: int): void;
/**
 * Marks the end of steps in the current action started with `start_action`.
 */
  endAction(): void;
/**
 * Ends a multipart edit, started with `begin_complex_operation`. If called outside a complex operation, the current operation is pushed onto the undo/redo stack.
 */
  endComplexOperation(): void;
/**
 * Ends an edit for multiple carets, that was started with `begin_multicaret_edit`. If this was the last `end_multicaret_edit` and `merge_overlapping_carets` was called, carets will be merged.
 */
  endMulticaretEdit(): void;
/**
 * Returns the column the editing caret is at.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getCaretColumn(caretIndex?: int): int;
/**
 * Returns the number of carets in this `TextEdit`.
 * @returns int
 */
  getCaretCount(): int;
/**
 * Returns the caret pixel draw position.
 * @param caretIndex int (optional, default: 0)
 * @returns Vector2
 */
  getCaretDrawPos(caretIndex?: int): Vector2;
/**
 * Returns a list of caret indexes in their edit order, this done from bottom to top. Edit order refers to the way actions such as `insert_text_at_caret` are applied.
 * @returns PackedInt32Array
 * @deprecated Carets no longer need to be edited in any specific order. If the carets need to be sorted, use `get_sorted_carets` instead.
 */
  getCaretIndexEditOrder(): PackedInt32Array;
/**
 * Returns the line the editing caret is on.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getCaretLine(caretIndex?: int): int;
/**
 * Returns the wrap index the editing caret is on.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getCaretWrapIndex(caretIndex?: int): int;
/**
 * Returns the first column containing a non-whitespace character on the given line. If there is only whitespace, returns the number of characters.
 * @param line int
 * @returns int
 */
  getFirstNonWhitespaceColumn(line: int): int;
/**
 * Returns the first visible line.
 * @returns int
 */
  getFirstVisibleLine(): int;
/**
 * Returns the number of gutters registered.
 * @returns int
 */
  getGutterCount(): int;
/**
 * Returns the name of the gutter at the given index.
 * @param gutter int
 * @returns string
 */
  getGutterName(gutter: int): string;
/**
 * Returns the type of the gutter at the given index. Gutters can contain icons, text, or custom visuals. See `TextEdit.GutterType` for options.
 * @param gutter int
 * @returns int
 */
  getGutterType(gutter: int): int;
/**
 * Returns the width of the gutter at the given index.
 * @param gutter int
 * @returns int
 */
  getGutterWidth(gutter: int): int;
/**
 * Returns the `HScrollBar` used by `TextEdit`.
 * @returns HScrollBar
 */
  getHScrollBar(): HScrollBar;
/**
 * Returns the indent level of the given line. This is the number of spaces and tabs at the beginning of the line, with the tabs taking the tab size into account (see `get_tab_size`).
 * @param line int
 * @returns int
 */
  getIndentLevel(line: int): int;
/**
 * Returns the last visible line. Use `get_last_full_visible_line_wrap_index` for the wrap index.
 * @returns int
 */
  getLastFullVisibleLine(): int;
/**
 * Returns the last visible wrap index of the last visible line.
 * @returns int
 */
  getLastFullVisibleLineWrapIndex(): int;
/**
 * Returns the last unhidden line in the entire `TextEdit`.
 * @returns int
 */
  getLastUnhiddenLine(): int;
/**
 * Returns the text of a specific line.
 * @param line int
 * @returns string
 */
  getLine(line: int): string;
/**
 * Returns the custom background color of the given line. If no color is set, returns `Color(0, 0, 0, 0)`.
 * @param line int
 * @returns Color
 */
  getLineBackgroundColor(line: int): Color;
/**
 * Returns the line and column at the given position. In the returned vector, `x` is the column and `y` is the line.
 * If `clamp_line` is `false` and `position` is below the last line, `Vector2i(-1, -1)` is returned.
 * If `clamp_column` is `false` and `position` is outside the column range of the line, `Vector2i(-1, -1)` is returned.
 * @param position Vector2i
 * @param clampLine boolean (optional, default: true)
 * @param clampColumn boolean (optional, default: true)
 * @returns Vector2i
 */
  getLineColumnAtPos(position: Vector2i, clampLine?: boolean, clampColumn?: boolean): Vector2i;
/**
 * Returns the number of lines in the text.
 * @returns int
 */
  getLineCount(): int;
/**
 * Returns the icon currently in `gutter` at `line`. This only works when the gutter type is `GUTTER_TYPE_ICON` (see `set_gutter_type`).
 * @param line int
 * @param gutter int
 * @returns Texture2D
 */
  getLineGutterIcon(line: int, gutter: int): Texture2D;
/**
 * Returns the color currently in `gutter` at `line`.
 * @param line int
 * @param gutter int
 * @returns Color
 */
  getLineGutterItemColor(line: int, gutter: int): Color;
/**
 * Returns the metadata currently in `gutter` at `line`.
 * @param line int
 * @param gutter int
 * @returns Variant
 */
  getLineGutterMetadata(line: int, gutter: int): Variant;
/**
 * Returns the text currently in `gutter` at `line`. This only works when the gutter type is `GUTTER_TYPE_STRING` (see `set_gutter_type`).
 * @param line int
 * @param gutter int
 * @returns string
 */
  getLineGutterText(line: int, gutter: int): string;
/**
 * Returns the maximum value of the line height among all lines.
 * 
 * **Note:** The return value is influenced by [theme_item line_spacing] and [theme_item font_size]. And it will not be less than `1`.
 * @returns int
 */
  getLineHeight(): int;
/**
 * Returns an `Array` of line ranges where `x` is the first line and `y` is the last line. All lines within these ranges will have a caret on them or be part of a selection. Each line will only be part of one line range, even if it has multiple carets on it.
 * If a selection's end column (`get_selection_to_column`) is at column `0`, that line will not be included. If a selection begins on the line after another selection ends and `merge_adjacent` is `true`, or they begin and end on the same line, one line range will include both selections.
 * @param onlySelections boolean (optional, default: false)
 * @param mergeAdjacent boolean (optional, default: true)
 * @returns Vector2i[]
 */
  getLineRangesFromCarets(onlySelections?: boolean, mergeAdjacent?: boolean): Vector2i[];
/**
 * Returns the width in pixels of the `wrap_index` on `line`.
 * @param line int
 * @param wrapIndex int (optional, default: -1)
 * @returns int
 */
  getLineWidth(line: int, wrapIndex?: int): int;
/**
 * Returns line text as it is currently displayed, including IME composition string.
 * @param line int
 * @returns string
 */
  getLineWithIme(line: int): string;
/**
 * Returns the number of times the given line is wrapped.
 * @param line int
 * @returns int
 */
  getLineWrapCount(line: int): int;
/**
 * Returns the wrap index of the given column on the given line. This ranges from `0` to `get_line_wrap_count`.
 * @param line int
 * @param column int
 * @returns int
 */
  getLineWrapIndexAtColumn(line: int, column: int): int;
/**
 * Returns an array of `String`s representing each wrapped index.
 * @param line int
 * @returns PackedStringArray
 */
  getLineWrappedText(line: int): PackedStringArray;
/**
 * Returns the local mouse position adjusted for the text direction.
 * @returns Vector2
 */
  getLocalMousePos(): Vector2;
/**
 * Returns the `PopupMenu` of this `TextEdit`. By default, this menu is displayed when right-clicking on the `TextEdit`.
 * You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see `MenuItems`). For example:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    var menu = get_menu()
 * 				    # Remove all items after "Redo".
 * 				    menu.item_count = menu.get_item_index(MENU_REDO) + 1
 * 				    # Add custom items.
 * 				    menu.add_separator()
 * 				    menu.add_item("Insert Date", MENU_MAX + 1)
 * 				    # Connect callback.
 * 				    menu.id_pressed.connect(_on_item_pressed)
 * 
 * 				func _on_item_pressed(id):
 * 				    if id == MENU_MAX + 1:
 * 				        insert_text_at_caret(Time.get_date_string_from_system())
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Ready()
 * 				{
 * 				    var menu = GetMenu();
 * 				    // Remove all items after "Redo".
 * 				    menu.ItemCount = menu.GetItemIndex(TextEdit.MenuItems.Redo) + 1;
 * 				    // Add custom items.
 * 				    menu.AddSeparator();
 * 				    menu.AddItem("Insert Date", TextEdit.MenuItems.Max + 1);
 * 				    // Add event handler.
 * 				    menu.IdPressed += OnItemPressed;
 * 				}
 * 
 * 				public void OnItemPressed(int id)
 * 				{
 * 				    if (id == TextEdit.MenuItems.Max + 1)
 * 				    {
 * 				        InsertTextAtCaret(Time.GetDateStringFromSystem());
 * 				    }
 * 				}
 * 				
 * 
 * ```
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `Window.visible` property.
 * @returns PopupMenu
 */
  getMenu(): PopupMenu;
/**
 * Returns the equivalent minimap line at `position`.
 * @param position Vector2i
 * @returns int
 */
  getMinimapLineAtPos(position: Vector2i): int;
/**
 * Returns the number of lines that may be drawn on the minimap.
 * @returns int
 */
  getMinimapVisibleLines(): int;
/**
 * Similar to `get_next_visible_line_offset_from`, but takes into account the line wrap indexes. In the returned vector, `x` is the line, `y` is the wrap index.
 * @param line int
 * @param wrapIndex int
 * @param visibleAmount int
 * @returns Vector2i
 */
  getNextVisibleLineIndexOffsetFrom(line: int, wrapIndex: int, visibleAmount: int): Vector2i;
/**
 * Returns the count to the next visible line from `line` to `line + visible_amount`. Can also count backwards. For example if a `TextEdit` has 5 lines with lines 2 and 3 hidden, calling this with `line = 1, visible_amount = 1` would return 3.
 * @param line int
 * @param visibleAmount int
 * @returns int
 */
  getNextVisibleLineOffsetFrom(line: int, visibleAmount: int): int;
/**
 * Returns the local position for the given `line` and `column`. If `x` or `y` of the returned vector equal `-1`, the position is outside of the viewable area of the control.
 * 
 * **Note:** The Y position corresponds to the bottom side of the line. Use `get_rect_at_line_column` to get the top side position.
 * @param line int
 * @param column int
 * @returns Vector2i
 */
  getPosAtLineColumn(line: int, column: int): Vector2i;
/**
 * Returns the local position and size for the grapheme at the given `line` and `column`. If `x` or `y` position of the returned rect equal `-1`, the position is outside of the viewable area of the control.
 * 
 * **Note:** The Y position of the returned rect corresponds to the top side of the line, unlike `get_pos_at_line_column` which returns the bottom side.
 * @param line int
 * @param column int
 * @returns Rect2i
 */
  getRectAtLineColumn(line: int, column: int): Rect2i;
/**
 * Returns the last tagged saved version from `tag_saved_version`.
 * @returns int
 */
  getSavedVersion(): int;
/**
 * Returns the scroll position for `wrap_index` of `line`.
 * @param line int
 * @param wrapIndex int (optional, default: 0)
 * @returns float
 */
  getScrollPosForLine(line: int, wrapIndex?: int): float;
/**
 * Returns the text inside the selection of a caret, or all the carets if `caret_index` is its default value `-1`.
 * @param caretIndex int (optional, default: -1)
 * @returns string
 */
  getSelectedText(caretIndex?: int): string;
/**
 * Returns the caret index of the selection at the given `line` and `column`, or `-1` if there is none.
 * If `include_edges` is `false`, the position must be inside the selection and not at either end. If `only_selections` is `false`, carets without a selection will also be considered.
 * @param line int
 * @param column int
 * @param includeEdges boolean (optional, default: true)
 * @param onlySelections boolean (optional, default: true)
 * @returns int
 */
  getSelectionAtLineColumn(line: int, column: int, includeEdges?: boolean, onlySelections?: boolean): int;
/**
 * Returns the original start column of the selection.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 * @deprecated Use `get_selection_origin_column` instead.
 */
  getSelectionColumn(caretIndex?: int): int;
/**
 * Returns the selection begin column. Returns the caret column if there is no selection.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getSelectionFromColumn(caretIndex?: int): int;
/**
 * Returns the selection begin line. Returns the caret line if there is no selection.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getSelectionFromLine(caretIndex?: int): int;
/**
 * Returns the original start line of the selection.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 * @deprecated Use `get_selection_origin_line` instead.
 */
  getSelectionLine(caretIndex?: int): int;
/**
 * Returns the current selection mode.
 * @returns int
 */
  getSelectionMode(): int;
/**
 * Returns the origin column of the selection. This is the opposite end from the caret.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getSelectionOriginColumn(caretIndex?: int): int;
/**
 * Returns the origin line of the selection. This is the opposite end from the caret.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getSelectionOriginLine(caretIndex?: int): int;
/**
 * Returns the selection end column. Returns the caret column if there is no selection.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getSelectionToColumn(caretIndex?: int): int;
/**
 * Returns the selection end line. Returns the caret line if there is no selection.
 * @param caretIndex int (optional, default: 0)
 * @returns int
 */
  getSelectionToLine(caretIndex?: int): int;
/**
 * Returns the carets sorted by selection beginning from lowest line and column to highest (from top to bottom of text).
 * If `include_ignored_carets` is `false`, carets from `multicaret_edit_ignore_caret` will be ignored.
 * @param includeIgnoredCarets boolean (optional, default: false)
 * @returns PackedInt32Array
 */
  getSortedCarets(includeIgnoredCarets?: boolean): PackedInt32Array;
/**
 * Returns the `TextEdit`'s' tab size.
 * @returns int
 */
  getTabSize(): int;
/**
 * Returns the total width of all gutters and internal padding.
 * @returns int
 */
  getTotalGutterWidth(): int;
/**
 * Returns the total number of lines in the text. This includes wrapped lines and excludes folded lines. If `wrap_mode` is set to `LINE_WRAPPING_NONE` and no lines are folded (see `CodeEdit.is_line_folded`) then this is equivalent to `get_line_count`. See `get_visible_line_count_in_range` for a limited range of lines.
 * @returns int
 */
  getTotalVisibleLineCount(): int;
/**
 * Returns the current version of the `TextEdit`. The version is a count of recorded operations by the undo/redo history.
 * @returns int
 */
  getVersion(): int;
/**
 * Returns the number of lines that can visually fit, rounded down, based on this control's height.
 * @returns int
 */
  getVisibleLineCount(): int;
/**
 * Returns the total number of lines between `from_line` and `to_line` (inclusive) in the text. This includes wrapped lines and excludes folded lines. If the range covers all lines it is equivalent to `get_total_visible_line_count`.
 * @param fromLine int
 * @param toLine int
 * @returns int
 */
  getVisibleLineCountInRange(fromLine: int, toLine: int): int;
/**
 * Returns the `VScrollBar` of the `TextEdit`.
 * @returns VScrollBar
 */
  getVScrollBar(): VScrollBar;
/**
 * Returns the word at `position`.
 * @param position Vector2
 * @returns string
 */
  getWordAtPos(position: Vector2): string;
/**
 * Returns a `String` text with the word under the caret's location.
 * @param caretIndex int (optional, default: -1)
 * @returns string
 */
  getWordUnderCaret(caretIndex?: int): string;
/**
 * Override this method to define what happens when the user types in the provided key `unicode_char`.
 * @param unicodeChar int
 * @param caretIndex int
 */
  private handleUnicodeInput(unicodeChar: int, caretIndex: int): void;
/**
 * Returns `true` if the user has text in the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) (IME).
 * @returns boolean
 */
  hasImeText(): boolean;
/**
 * Returns `true` if a "redo" action is available.
 * @returns boolean
 */
  hasRedo(): boolean;
/**
 * Returns `true` if the user has selected text.
 * @param caretIndex int (optional, default: -1)
 * @returns boolean
 */
  hasSelection(caretIndex?: int): boolean;
/**
 * Returns `true` if an "undo" action is available.
 * @returns boolean
 */
  hasUndo(): boolean;
/**
 * Inserts a new line with `text` at `line`.
 * @param line int
 * @param text string
 */
  insertLineAt(line: int, text: string): void;
/**
 * Inserts the `text` at `line` and `column`.
 * If `before_selection_begin` is `true`, carets and selections that begin at `line` and `column` will moved to the end of the inserted text, along with all carets after it.
 * If `before_selection_end` is `true`, selections that end at `line` and `column` will be extended to the end of the inserted text. These parameters can be used to insert text inside of or outside of selections.
 * @param text string
 * @param line int
 * @param column int
 * @param beforeSelectionBegin boolean (optional, default: true)
 * @param beforeSelectionEnd boolean (optional, default: false)
 */
  insertText(text: string, line: int, column: int, beforeSelectionBegin?: boolean, beforeSelectionEnd?: boolean): void;
/**
 * Insert the specified text at the caret position.
 * @param text string
 * @param caretIndex int (optional, default: -1)
 */
  insertTextAtCaret(text: string, caretIndex?: int): void;
/**
 * Returns `true` if the caret of the selection is after the selection origin. This can be used to determine the direction of the selection.
 * @param caretIndex int (optional, default: 0)
 * @returns boolean
 */
  isCaretAfterSelectionOrigin(caretIndex?: int): boolean;
/**
 * Returns `true` if the caret is visible, `false` otherwise. A caret will be considered hidden if it is outside the scrollable area when scrolling is enabled.
 * 
 * **Note:** `is_caret_visible` does not account for a caret being off-screen if it is still within the scrollable area. It will return `true` even if the caret is off-screen as long as it meets `TextEdit`'s own conditions for being visible. This includes uses of `scroll_fit_content_width` and `scroll_fit_content_height` that cause the `TextEdit` to expand beyond the viewport's bounds.
 * @param caretIndex int (optional, default: 0)
 * @returns boolean
 */
  isCaretVisible(caretIndex?: int): boolean;
/**
 * Returns `true` if the user is dragging their mouse for scrolling, selecting, or text dragging.
 * @returns boolean
 */
  isDraggingCursor(): boolean;
/**
 * Returns `true` if the gutter at the given index is clickable. See `set_gutter_clickable`.
 * @param gutter int
 * @returns boolean
 */
  isGutterClickable(gutter: int): boolean;
/**
 * Returns `true` if the gutter at the given index is currently drawn. See `set_gutter_draw`.
 * @param gutter int
 * @returns boolean
 */
  isGutterDrawn(gutter: int): boolean;
/**
 * Returns `true` if the gutter at the given index is overwritable. See `set_gutter_overwritable`.
 * @param gutter int
 * @returns boolean
 */
  isGutterOverwritable(gutter: int): boolean;
/**
 * Returns `true` if a `begin_multicaret_edit` has been called and `end_multicaret_edit` has not yet been called.
 * @returns boolean
 */
  isInMulitcaretEdit(): boolean;
/**
 * Returns `true` if the gutter at the given index on the given line is clickable. See `set_line_gutter_clickable`.
 * @param line int
 * @param gutter int
 * @returns boolean
 */
  isLineGutterClickable(line: int, gutter: int): boolean;
/**
 * Returns if the given line is wrapped.
 * @param line int
 * @returns boolean
 */
  isLineWrapped(line: int): boolean;
/**
 * Returns `true` if the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). See `get_menu`.
 * @returns boolean
 */
  isMenuVisible(): boolean;
/**
 * Returns `true` if the mouse is over a selection. If `edges` is `true`, the edges are considered part of the selection.
 * @param edges boolean
 * @param caretIndex int (optional, default: -1)
 * @returns boolean
 */
  isMouseOverSelection(edges: boolean, caretIndex?: int): boolean;
/**
 * Returns `true` if overtype mode is enabled. See `set_overtype_mode_enabled`.
 * @returns boolean
 */
  isOvertypeModeEnabled(): boolean;
/**
 * Executes a given action as defined in the `MenuItems` enum.
 * @param option int
 */
  menuOption(option: int): void;
/**
 * Merge the gutters from `from_line` into `to_line`. Only overwritable gutters will be copied. See `set_gutter_overwritable`.
 * @param fromLine int
 * @param toLine int
 */
  mergeGutters(fromLine: int, toLine: int): void;
/**
 * Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.
 * If `is_in_mulitcaret_edit` is `true`, the merge will be queued to happen at the end of the multicaret edit. See `begin_multicaret_edit` and `end_multicaret_edit`.
 * 
 * **Note:** This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.
 */
  mergeOverlappingCarets(): void;
/**
 * Returns `true` if the given `caret_index` should be ignored as part of a multicaret edit. See `begin_multicaret_edit` and `end_multicaret_edit`. Carets that should be ignored are ones that were part of removed text and will likely be merged at the end of the edit, or carets that were added during the edit.
 * It is recommended to `continue` within a loop iterating on multiple carets if a caret should be ignored.
 * @param caretIndex int
 * @returns boolean
 */
  multicaretEditIgnoreCaret(caretIndex: int): boolean;
/**
 * Paste at the current location. Can be overridden with `_paste`.
 * @param caretIndex int (optional, default: -1)
 */
  paste(caretIndex?: int): void;
/**
 * Override this method to define what happens when the user performs a paste operation.
 * @param caretIndex int
 */
  private paste(caretIndex: int): void;
/**
 * Pastes the primary clipboard.
 * @param caretIndex int (optional, default: -1)
 */
  pastePrimaryClipboard(caretIndex?: int): void;
/**
 * Override this method to define what happens when the user performs a paste operation with middle mouse button.
 * 
 * **Note:** This method is only implemented on Linux.
 * @param caretIndex int
 */
  private pastePrimaryClipboard(caretIndex: int): void;
/**
 * Perform redo operation.
 */
  redo(): void;
/**
 * Removes the given caret index.
 * 
 * **Note:** This can result in adjustment of all other caret indices.
 * @param caret int
 */
  removeCaret(caret: int): void;
/**
 * Removes the gutter at the given index.
 * @param gutter int
 */
  removeGutter(gutter: int): void;
/**
 * Removes the line of text at `line`. Carets on this line will attempt to match their previous visual x position.
 * If `move_carets_down` is `true` carets will move to the next line down, otherwise carets will move up.
 * @param line int
 * @param moveCaretsDown boolean (optional, default: true)
 */
  removeLineAt(line: int, moveCaretsDown?: boolean): void;
/**
 * Removes all additional carets.
 */
  removeSecondaryCarets(): void;
/**
 * Removes text between the given positions.
 * @param fromLine int
 * @param fromColumn int
 * @param toLine int
 * @param toColumn int
 */
  removeText(fromLine: int, fromColumn: int, toLine: int, toColumn: int): void;
/**
 * Perform a search inside the text. Search flags can be specified in the `SearchFlags` enum.
 * In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.
 * 
 * 				```gdscript
 * 
 * 				var result = search("print", SEARCH_WHOLE_WORDS, 0, 0)
 * 				if result.x != -1:
 * 				    # Result found.
 * 				    var line_number = result.y
 * 				    var column_number = result.x
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Vector2I result = Search("print", (uint)TextEdit.SearchFlags.WholeWords, 0, 0);
 * 				if (result.X != -1)
 * 				{
 * 				    // Result found.
 * 				    int lineNumber = result.Y;
 * 				    int columnNumber = result.X;
 * 				}
 * 				
 * 
 * ```
 * 
 * @param text string
 * @param flags int
 * @param fromLine int
 * @param fromColumn int
 * @returns Vector2i
 */
  search(text: string, flags: int, fromLine: int, fromColumn: int): Vector2i;
/**
 * Selects text from `origin_line` and `origin_column` to `caret_line` and `caret_column` for the given `caret_index`. This moves the selection origin and the caret. If the positions are the same, the selection will be deselected.
 * If `selecting_enabled` is `false`, no selection will occur.
 * 
 * **Note:** If supporting multiple carets this will not check for any overlap. See `merge_overlapping_carets`.
 * @param originLine int
 * @param originColumn int
 * @param caretLine int
 * @param caretColumn int
 * @param caretIndex int (optional, default: 0)
 */
  select(originLine: int, originColumn: int, caretLine: int, caretColumn: int, caretIndex?: int): void;
/**
 * Select all the text.
 * If `selecting_enabled` is `false`, no selection will occur.
 */
  selectAll(): void;
/**
 * Selects the word under the caret.
 * @param caretIndex int (optional, default: -1)
 */
  selectWordUnderCaret(caretIndex?: int): void;
/**
 * Moves the caret to the specified `column` index.
 * If `adjust_viewport` is `true`, the viewport will center at the caret position after the move occurs.
 * 
 * **Note:** If supporting multiple carets this will not check for any overlap. See `merge_overlapping_carets`.
 * @param column int
 * @param adjustViewport boolean (optional, default: true)
 * @param caretIndex int (optional, default: 0)
 */
  setCaretColumn(column: int, adjustViewport?: boolean, caretIndex?: int): void;
/**
 * Moves the caret to the specified `line` index. The caret column will be moved to the same visual position it was at the last time `set_caret_column` was called, or clamped to the end of the line.
 * If `adjust_viewport` is `true`, the viewport will center at the caret position after the move occurs.
 * If `can_be_hidden` is `true`, the specified `line` can be hidden.
 * If `wrap_index` is `-1`, the caret column will be clamped to the `line`'s length. If `wrap_index` is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's `wrap_index` to the position from the last time `set_caret_column` was called.
 * 
 * **Note:** If supporting multiple carets this will not check for any overlap. See `merge_overlapping_carets`.
 * @param line int
 * @param adjustViewport boolean (optional, default: true)
 * @param canBeHidden boolean (optional, default: true)
 * @param wrapIndex int (optional, default: 0)
 * @param caretIndex int (optional, default: 0)
 */
  setCaretLine(line: int, adjustViewport?: boolean, canBeHidden?: boolean, wrapIndex?: int, caretIndex?: int): void;
/**
 * If `true`, the mouse cursor will change to a pointing hand (`Control.CURSOR_POINTING_HAND`) when hovering over the gutter at the given index. See `is_gutter_clickable` and `set_line_gutter_clickable`.
 * @param gutter int
 * @param clickable boolean
 */
  setGutterClickable(gutter: int, clickable: boolean): void;
/**
 * Set a custom draw callback for the gutter at the given index. `draw_callback` must take the following arguments: A line index [int], a gutter index [int], and an area `Rect2`. This callback only works when the gutter type is `GUTTER_TYPE_CUSTOM` (see `set_gutter_type`).
 * @param column int
 * @param drawCallback Callable
 */
  setGutterCustomDraw(column: int, drawCallback: Callable): void;
/**
 * If `true`, the gutter at the given index is drawn. The gutter type (`set_gutter_type`) determines how it is drawn. See `is_gutter_drawn`.
 * @param gutter int
 * @param draw boolean
 */
  setGutterDraw(gutter: int, draw: boolean): void;
/**
 * Sets the name of the gutter at the given index.
 * @param gutter int
 * @param name string
 */
  setGutterName(gutter: int, name: string): void;
/**
 * If `true`, the line data of the gutter at the given index can be overridden when using `merge_gutters`. See `is_gutter_overwritable`.
 * @param gutter int
 * @param overwritable boolean
 */
  setGutterOverwritable(gutter: int, overwritable: boolean): void;
/**
 * Sets the type of gutter at the given index. Gutters can contain icons, text, or custom visuals. See `TextEdit.GutterType` for options.
 * @param gutter int
 * @param type_ int
 */
  setGutterType(gutter: int, type_: int): void;
/**
 * Set the width of the gutter at the given index.
 * @param gutter int
 * @param width int
 */
  setGutterWidth(gutter: int, width: int): void;
/**
 * Sets the text for a specific `line`.
 * Carets on the line will attempt to keep their visual x position.
 * @param line int
 * @param newText string
 */
  setLine(line: int, newText: string): void;
/**
 * Positions the `wrap_index` of `line` at the center of the viewport.
 * @param line int
 * @param wrapIndex int (optional, default: 0)
 */
  setLineAsCenterVisible(line: int, wrapIndex?: int): void;
/**
 * Positions the `wrap_index` of `line` at the top of the viewport.
 * @param line int
 * @param wrapIndex int (optional, default: 0)
 */
  setLineAsFirstVisible(line: int, wrapIndex?: int): void;
/**
 * Positions the `wrap_index` of `line` at the bottom of the viewport.
 * @param line int
 * @param wrapIndex int (optional, default: 0)
 */
  setLineAsLastVisible(line: int, wrapIndex?: int): void;
/**
 * Sets the custom background color of the given line. If transparent, this color is applied on top of the default background color (See [theme_item background_color]). If set to `Color(0, 0, 0, 0)`, no additional color is applied.
 * @param line int
 * @param color Color
 */
  setLineBackgroundColor(line: int, color: Color): void;
/**
 * If `clickable` is `true`, makes the `gutter` on the given `line` clickable. This is like `set_gutter_clickable`, but for a single line. If `is_gutter_clickable` is `true`, this will not have any effect. See `is_line_gutter_clickable` and `gutter_clicked`.
 * @param line int
 * @param gutter int
 * @param clickable boolean
 */
  setLineGutterClickable(line: int, gutter: int, clickable: boolean): void;
/**
 * Sets the icon for `gutter` on `line` to `icon`. This only works when the gutter type is `GUTTER_TYPE_ICON` (see `set_gutter_type`).
 * @param line int
 * @param gutter int
 * @param icon Texture2D
 */
  setLineGutterIcon(line: int, gutter: int, icon: Texture2D): void;
/**
 * Sets the color for `gutter` on `line` to `color`.
 * @param line int
 * @param gutter int
 * @param color Color
 */
  setLineGutterItemColor(line: int, gutter: int, color: Color): void;
/**
 * Sets the metadata for `gutter` on `line` to `metadata`.
 * @param line int
 * @param gutter int
 * @param metadata Variant
 */
  setLineGutterMetadata(line: int, gutter: int, metadata: Variant): void;
/**
 * Sets the text for `gutter` on `line` to `text`. This only works when the gutter type is `GUTTER_TYPE_STRING` (see `set_gutter_type`).
 * @param line int
 * @param gutter int
 * @param text string
 */
  setLineGutterText(line: int, gutter: int, text: string): void;
/**
 * If `true`, enables overtype mode. In this mode, typing overrides existing text instead of inserting text. The `ProjectSettings.input/ui_text_toggle_insert_mode` action toggles overtype mode. See `is_overtype_mode_enabled`.
 * @param enabled boolean
 */
  setOvertypeModeEnabled(enabled: boolean): void;
/**
 * Sets the search `flags`. This is used with `set_search_text` to highlight occurrences of the searched text. Search flags can be specified from the `SearchFlags` enum.
 * @param flags int
 */
  setSearchFlags(flags: int): void;
/**
 * Sets the search text. See `set_search_flags`.
 * @param searchText string
 */
  setSearchText(searchText: string): void;
/**
 * Sets the current selection mode.
 * @param mode int
 */
  setSelectionMode(mode: int): void;
/**
 * Sets the selection origin column to the `column` for the given `caret_index`. If the selection origin is moved to the caret position, the selection will deselect.
 * @param column int
 * @param caretIndex int (optional, default: 0)
 */
  setSelectionOriginColumn(column: int, caretIndex?: int): void;
/**
 * Sets the selection origin line to the `line` for the given `caret_index`. If the selection origin is moved to the caret position, the selection will deselect.
 * If `can_be_hidden` is `false`, The line will be set to the nearest unhidden line below or above.
 * If `wrap_index` is `-1`, the selection origin column will be clamped to the `line`'s length. If `wrap_index` is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's `wrap_index` to the position from the last time `set_selection_origin_column` or `select` was called.
 * @param line int
 * @param canBeHidden boolean (optional, default: true)
 * @param wrapIndex int (optional, default: -1)
 * @param caretIndex int (optional, default: 0)
 */
  setSelectionOriginLine(line: int, canBeHidden?: boolean, wrapIndex?: int, caretIndex?: int): void;
/**
 * Sets the tab size for the `TextEdit` to use.
 * @param size int
 */
  setTabSize(size: int): void;
/**
 * Provide custom tooltip text. The callback method must take the following args: `hovered_word: String`.
 * @param callback Callable
 */
  setTooltipRequestFunc(callback: Callable): void;
/**
 * Moves a selection and a caret for the next occurrence of the current selection. If there is no active selection, moves to the next occurrence of the word under caret.
 */
  skipSelectionForNextOccurrence(): void;
/**
 * Starts an action, will end the current action if `action` is different.
 * An action will also end after a call to `end_action`, after `ProjectSettings.gui/timers/text_edit_idle_detect_sec` is triggered or a new undoable step outside the `start_action` and `end_action` calls.
 * @param action int
 */
  startAction(action: int): void;
/**
 * Swaps the two lines. Carets will be swapped with the lines.
 * @param fromLine int
 * @param toLine int
 */
  swapLines(fromLine: int, toLine: int): void;
/**
 * Tag the current version as saved.
 */
  tagSavedVersion(): void;
/**
 * Perform undo operation.
 */
  undo(): void;
/**
 * Emitted when any caret changes position.
 */
  caretChanged: Signal<[]>;
/**
 * Emitted when a gutter is added.
 */
  gutterAdded: Signal<[]>;
/**
 * Emitted when a gutter is clicked.
 */
  gutterClicked: Signal<[line: int, gutter: int]>;
/**
 * Emitted when a gutter is removed.
 */
  gutterRemoved: Signal<[]>;
/**
 * Emitted immediately when the text changes.
 * When text is added `from_line` will be less than `to_line`. On a remove `to_line` will be less than `from_line`.
 */
  linesEditedFrom: Signal<[fromLine: int, toLine: int]>;
/**
 * Emitted when the text changes.
 */
  textChanged: Signal<[]>;
/**
 * Emitted when `clear` is called or `text` is set.
 */
  textSet: Signal<[]>;
/**
 * Cuts (copies and clears) the selected text.
 */
  static readonly MENU_CUT: int;
/**
 * Copies the selected text.
 */
  static readonly MENU_COPY: int;
/**
 * Pastes the clipboard text over the selected text (or at the cursor's position).
 */
  static readonly MENU_PASTE: int;
/**
 * Erases the whole `TextEdit` text.
 */
  static readonly MENU_CLEAR: int;
/**
 * Selects the whole `TextEdit` text.
 */
  static readonly MENU_SELECT_ALL: int;
/**
 * Undoes the previous action.
 */
  static readonly MENU_UNDO: int;
/**
 * Redoes the previous action.
 */
  static readonly MENU_REDO: int;
/**
 * ID of "Text Writing Direction" submenu.
 */
  static readonly MENU_SUBMENU_TEXT_DIR: int;
/**
 * Sets text direction to inherited.
 */
  static readonly MENU_DIR_INHERITED: int;
/**
 * Sets text direction to automatic.
 */
  static readonly MENU_DIR_AUTO: int;
/**
 * Sets text direction to left-to-right.
 */
  static readonly MENU_DIR_LTR: int;
/**
 * Sets text direction to right-to-left.
 */
  static readonly MENU_DIR_RTL: int;
/**
 * Toggles control character display.
 */
  static readonly MENU_DISPLAY_UCC: int;
/**
 * ID of "Insert Control Character" submenu.
 */
  static readonly MENU_SUBMENU_INSERT_UCC: int;
/**
 * Inserts left-to-right mark (LRM) character.
 */
  static readonly MENU_INSERT_LRM: int;
/**
 * Inserts right-to-left mark (RLM) character.
 */
  static readonly MENU_INSERT_RLM: int;
/**
 * Inserts start of left-to-right embedding (LRE) character.
 */
  static readonly MENU_INSERT_LRE: int;
/**
 * Inserts start of right-to-left embedding (RLE) character.
 */
  static readonly MENU_INSERT_RLE: int;
/**
 * Inserts start of left-to-right override (LRO) character.
 */
  static readonly MENU_INSERT_LRO: int;
/**
 * Inserts start of right-to-left override (RLO) character.
 */
  static readonly MENU_INSERT_RLO: int;
/**
 * Inserts pop direction formatting (PDF) character.
 */
  static readonly MENU_INSERT_PDF: int;
/**
 * Inserts Arabic letter mark (ALM) character.
 */
  static readonly MENU_INSERT_ALM: int;
/**
 * Inserts left-to-right isolate (LRI) character.
 */
  static readonly MENU_INSERT_LRI: int;
/**
 * Inserts right-to-left isolate (RLI) character.
 */
  static readonly MENU_INSERT_RLI: int;
/**
 * Inserts first strong isolate (FSI) character.
 */
  static readonly MENU_INSERT_FSI: int;
/**
 * Inserts pop direction isolate (PDI) character.
 */
  static readonly MENU_INSERT_PDI: int;
/**
 * Inserts zero width joiner (ZWJ) character.
 */
  static readonly MENU_INSERT_ZWJ: int;
/**
 * Inserts zero width non-joiner (ZWNJ) character.
 */
  static readonly MENU_INSERT_ZWNJ: int;
/**
 * Inserts word joiner (WJ) character.
 */
  static readonly MENU_INSERT_WJ: int;
/**
 * Inserts soft hyphen (SHY) character.
 */
  static readonly MENU_INSERT_SHY: int;
/**
 * Opens system emoji and symbol picker.
 */
  static readonly MENU_EMOJI_AND_SYMBOL: int;
/**
 * Represents the size of the `MenuItems` enum.
 */
  static readonly MENU_MAX: int;
/**
 * No current action.
 */
  static readonly ACTION_NONE: int;
/**
 * A typing action.
 */
  static readonly ACTION_TYPING: int;
/**
 * A backwards delete action.
 */
  static readonly ACTION_BACKSPACE: int;
/**
 * A forward delete action.
 */
  static readonly ACTION_DELETE: int;
/**
 * Match case when searching.
 */
  static readonly SEARCH_MATCH_CASE: int;
/**
 * Match whole words when searching.
 */
  static readonly SEARCH_WHOLE_WORDS: int;
/**
 * Search from end to beginning.
 */
  static readonly SEARCH_BACKWARDS: int;
/**
 * Vertical line caret.
 */
  static readonly CARET_TYPE_LINE: int;
/**
 * Block caret.
 */
  static readonly CARET_TYPE_BLOCK: int;
/**
 * Not selecting.
 */
  static readonly SELECTION_MODE_NONE: int;
/**
 * Select as if `shift` is pressed.
 */
  static readonly SELECTION_MODE_SHIFT: int;
/**
 * Select single characters as if the user single clicked.
 */
  static readonly SELECTION_MODE_POINTER: int;
/**
 * Select whole words as if the user double clicked.
 */
  static readonly SELECTION_MODE_WORD: int;
/**
 * Select whole lines as if the user triple clicked.
 */
  static readonly SELECTION_MODE_LINE: int;
/**
 * Line wrapping is disabled.
 */
  static readonly LINE_WRAPPING_NONE: int;
/**
 * Line wrapping occurs at the control boundary, beyond what would normally be visible.
 */
  static readonly LINE_WRAPPING_BOUNDARY: int;
/**
 * When a gutter is set to string using `set_gutter_type`, it is used to contain text set via the `set_line_gutter_text` method.
 */
  static readonly GUTTER_TYPE_STRING: int;
/**
 * When a gutter is set to icon using `set_gutter_type`, it is used to contain an icon set via the `set_line_gutter_icon` method.
 */
  static readonly GUTTER_TYPE_ICON: int;
/**
 * When a gutter is set to custom using `set_gutter_type`, it is used to contain custom visuals controlled by a callback method set via the `set_gutter_custom_draw` method.
 */
  static readonly GUTTER_TYPE_CUSTOM: int;
}
