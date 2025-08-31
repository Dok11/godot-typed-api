import type { Color, Control, Font, GodotArray, GodotDictionary, PackedFloat32Array, PackedStringArray, PopupMenu, Rect2, RichTextEffect, Signal, Texture2D, VScrollBar, Variant, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * A control for displaying text that can contain different font styles, images, and basic formatting.
 * 
 * A control for displaying text that can contain custom fonts, images, and basic formatting. `RichTextLabel` manages these as an internal tag stack. It also adapts itself to given width/heights.
 * 
 * **Note:** `newline`, `push_paragraph`, `"\n"`, `"\r\n"`, `p` tag, and alignment tags start a new paragraph. Each paragraph is processed independently, in its own BiDi context. If you want to force line wrapping within paragraph, any other line breaking character can be used, for example, Form Feed (U+000C), Next Line (U+0085), Line Separator (U+2028).
 * 
 * **Note:** Assignments to `text` clear the tag stack and reconstruct it from the property's contents. Any edits made to `text` will erase previous edits made from other manual sources such as `append_text` and the `push_*` / `pop` methods.
 * 
 * **Note:** RichTextLabel doesn't support entangled BBCode tags. For example, instead of using [code skip-lint]**bold*bold italic**italic*[/code], use [code skip-lint]**bold*bold italic****italic*[/code].
 * 
 * **Note:** `push_*\/pop_*` functions won't affect BBCode.
 * 
 * **Note:** Unlike `Label`, `RichTextLabel` doesn't have a *property* to horizontally align text to the center. Instead, enable `bbcode_enabled` and surround the text in a [code skip-lint][center][/code] tag as follows: [code skip-lint][center]Example[/center][/code]. There is currently no built-in way to vertically align text either, but this can be emulated by relying on anchors/containers and the `fit_content` property.
 */
export class RichTextLabel extends Control {
/**
 * If set to something other than `TextServer.AUTOWRAP_OFF`, the text gets wrapped inside the node's bounding rectangle. To see how each mode behaves, see `TextServer.AutowrapMode`.
 */
  autowrapMode: int;
/**
 * If `true`, the label uses BBCode formatting.
 * 
 * **Note:** This only affects the contents of `text`, not the tag stack.
 */
  bbcodeEnabled: boolean;
  clipContents: boolean;
/**
 * If `true`, a right-click displays the context menu.
 */
  contextMenuEnabled: boolean;
/**
 * The currently installed custom effects. This is an array of `RichTextEffect`s.
 * To add a custom effect, it's more convenient to use `install_effect`.
 */
  customEffects: GodotArray<any>;
/**
 * If `true`, the selected text will be deselected when focus is lost.
 */
  deselectOnFocusLossEnabled: boolean;
/**
 * If `true`, allow drag and drop of selected text.
 */
  dragAndDropSelectionEnabled: boolean;
/**
 * If `true`, the label's minimum size will be automatically updated to fit its content, matching the behavior of `Label`.
 */
  fitContent: boolean;
/**
 * If `true`, the label underlines hint tags such as [code skip-lint][hint=description]{text}[/hint][/code].
 */
  hintUnderlined: boolean;
/**
 * Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the `HorizontalAlignment` constants.
 */
  horizontalAlignment: int;
/**
 * Line fill alignment rules. See `TextServer.JustificationFlag` for more information.
 */
  justificationFlags: int;
/**
 * Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
/**
 * If `true`, the label underlines meta tags such as [code skip-lint][url]{text}[/url][/code]. These tags can call a function when clicked if `meta_clicked` is connected to a function.
 */
  metaUnderlined: boolean;
/**
 * The delay after which the loading progress bar is displayed, in milliseconds. Set to `-1` to disable progress bar entirely.
 * 
 * **Note:** Progress bar is displayed only if `threaded` is enabled.
 */
  progressBarDelay: int;
/**
 * If `true`, the scrollbar is visible. Setting this to `false` does not block scrolling completely. See `scroll_to_line`.
 */
  scrollActive: boolean;
/**
 * If `true`, the window scrolls down to display new content automatically.
 */
  scrollFollowing: boolean;
/**
 * If `true`, the label allows text selection.
 */
  selectionEnabled: boolean;
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
 * The number of spaces associated with a single tab length. Does not affect `\t` in text tags, only indent tags.
 */
  tabSize: int;
/**
 * Aligns text to the given tab-stops.
 */
  tabStops: PackedFloat32Array;
/**
 * The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.
 * 
 * **Note:** If `bbcode_enabled` is `true`, it is unadvised to use the `+=` operator with `text` (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use `append_text` for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * If `true`, text processing is done in a background thread.
 */
  threaded: boolean;
/**
 * Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the `VerticalAlignment` constants.
 */
  verticalAlignment: int;
/**
 * The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.
 * 
 * **Note:** Setting this property updates `visible_ratio` accordingly.
 */
  visibleCharacters: int;
/**
 * Sets the clipping behavior when `visible_characters` or `visible_ratio` is set. See `TextServer.VisibleCharactersBehavior` for more info.
 */
  visibleCharactersBehavior: int;
/**
 * The fraction of characters to display, relative to the total number of characters (see `get_total_character_count`). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.
 * 
 * **Note:** Setting this property updates `visible_characters` accordingly.
 */
  visibleRatio: float;
/**
 * Adds an image's opening and closing tags to the tag stack, optionally providing a `width` and `height` to resize the image, a `color` to tint the image and a `region` to only use parts of the image.
 * If `width` or `height` is set to 0, the image size will be adjusted in order to keep the original aspect ratio.
 * If `width` and `height` are not set, but `region` is, the region's rect will be used.
 * `key` is an optional identifier, that can be used to modify the image via `update_image`.
 * If `pad` is set, and the image is smaller than the size specified by `width` and `height`, the image padding is added to match the size instead of upscaling.
 * If `size_in_percent` is set, `width` and `height` values are percentages of the control width instead of pixels.
 * @param image Texture2D
 * @param width int (optional, default: 0)
 * @param height int (optional, default: 0)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 * @param inlineAlign int (optional, default: 5)
 * @param region Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param key Variant (optional, default: null)
 * @param pad boolean (optional, default: false)
 * @param tooltip string (optional, default: "")
 * @param sizeInPercent boolean (optional, default: false)
 */
  addImage(image: Texture2D, width?: int, height?: int, color?: Color, inlineAlign?: int, region?: Rect2, key?: Variant, pad?: boolean, tooltip?: string, sizeInPercent?: boolean): void;
/**
 * Adds raw non-BBCode-parsed text to the tag stack.
 * @param text string
 */
  addText(text: string): void;
/**
 * Parses `bbcode` and adds tags to the tag stack as needed.
 * 
 * **Note:** Using this method, you can't close a tag that was opened in a previous `append_text` call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the `text` instead of using `append_text`.
 * @param bbcode string
 */
  appendText(bbcode: string): void;
/**
 * Clears the tag stack, causing the label to display nothing.
 * 
 * **Note:** This method does not affect `text`, and its contents will show again if the label is redrawn. However, setting `text` to an empty `String` also clears the stack.
 */
  clear(): void;
/**
 * Clears the current selection.
 */
  deselect(): void;
/**
 * Returns the line number of the character position provided. Line and character numbers are both zero-indexed.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @param character int
 * @returns int
 */
  getCharacterLine(character: int): int;
/**
 * Returns the paragraph number of the character position provided. Paragraph and character numbers are both zero-indexed.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @param character int
 * @returns int
 */
  getCharacterParagraph(character: int): int;
/**
 * Returns the height of the content.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @returns int
 */
  getContentHeight(): int;
/**
 * Returns the width of the content.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @returns int
 */
  getContentWidth(): int;
/**
 * Returns the total number of lines in the text. Wrapped text is counted as multiple lines.
 * 
 * **Note:** If `visible_characters_behavior` is set to `TextServer.VC_CHARS_BEFORE_SHAPING` only visible wrapped lines are counted.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @returns int
 */
  getLineCount(): int;
/**
 * Returns the vertical offset of the line found at the provided index.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @param line int
 * @returns float
 */
  getLineOffset(line: int): float;
/**
 * Returns the indexes of the first and last visible characters for the given `line`, as a `Vector2i`.
 * 
 * **Note:** If `visible_characters_behavior` is set to `TextServer.VC_CHARS_BEFORE_SHAPING` only visible wrapped lines are counted.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @param line int
 * @returns Vector2i
 */
  getLineRange(line: int): Vector2i;
/**
 * Returns the `PopupMenu` of this `RichTextLabel`. By default, this menu is displayed when right-clicking on the `RichTextLabel`.
 * You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see `MenuItems`). For example:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    var menu = get_menu()
 * 				    # Remove "Select All" item.
 * 				    menu.remove_item(MENU_SELECT_ALL)
 * 				    # Add custom items.
 * 				    menu.add_separator()
 * 				    menu.add_item("Duplicate Text", MENU_MAX + 1)
 * 				    # Connect callback.
 * 				    menu.id_pressed.connect(_on_item_pressed)
 * 
 * 				func _on_item_pressed(id):
 * 				    if id == MENU_MAX + 1:
 * 				        add_text("\n" + get_parsed_text())
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Ready()
 * 				{
 * 				    var menu = GetMenu();
 * 				    // Remove "Select All" item.
 * 				    menu.RemoveItem(RichTextLabel.MenuItems.SelectAll);
 * 				    // Add custom items.
 * 				    menu.AddSeparator();
 * 				    menu.AddItem("Duplicate Text", RichTextLabel.MenuItems.Max + 1);
 * 				    // Add event handler.
 * 				    menu.IdPressed += OnItemPressed;
 * 				}
 * 
 * 				public void OnItemPressed(int id)
 * 				{
 * 				    if (id == TextEdit.MenuItems.Max + 1)
 * 				    {
 * 				        AddText("\n" + GetParsedText());
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
 * Returns the total number of paragraphs (newlines or `p` tags in the tag stack's text tags). Considers wrapped text as one paragraph.
 * @returns int
 */
  getParagraphCount(): int;
/**
 * Returns the vertical offset of the paragraph found at the provided index.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @param paragraph int
 * @returns float
 */
  getParagraphOffset(paragraph: int): float;
/**
 * Returns the text without BBCode mark-up.
 * @returns string
 */
  getParsedText(): string;
/**
 * Returns the current selection text. Does not include BBCodes.
 * @returns string
 */
  getSelectedText(): string;
/**
 * Returns the current selection first character index if a selection is active, `-1` otherwise. Does not include BBCodes.
 * @returns int
 */
  getSelectionFrom(): int;
/**
 * Returns the current selection vertical line offset if a selection is active, `-1.0` otherwise.
 * @returns float
 */
  getSelectionLineOffset(): float;
/**
 * Returns the current selection last character index if a selection is active, `-1` otherwise. Does not include BBCodes.
 * @returns int
 */
  getSelectionTo(): int;
/**
 * Returns the total number of characters from text tags. Does not include BBCodes.
 * @returns int
 */
  getTotalCharacterCount(): int;
/**
 * Returns the number of visible lines.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @returns int
 */
  getVisibleLineCount(): int;
/**
 * Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.
 * 
 * **Note:** If `threaded` is enabled, this method returns a value for the loaded part of the document. Use `is_finished` or `finished` to determine whether document is fully loaded.
 * @returns int
 */
  getVisibleParagraphCount(): int;
/**
 * Returns the vertical scrollbar.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns VScrollBar
 */
  getVScrollBar(): VScrollBar;
/**
 * Installs a custom effect. This can also be done in the Inspector through the `custom_effects` property. `effect` should be a valid `RichTextEffect`.
 * 
 * **Example:** With the following script extending from `RichTextEffect`:
 * 
 * 				```gdscript
 * 
 * 				# effect.gd
 * 				class_name MyCustomEffect
 * 				extends RichTextEffect
 * 
 * 				var bbcode = "my_custom_effect"
 * 
 * 				# ...
 * 				
 * 
 * ```
 * The above effect can be installed in `RichTextLabel` from a script:
 * 
 * 				```gdscript
 * 
 * 				# rich_text_label.gd
 * 				extends RichTextLabel
 * 
 * 				func _ready():
 * 				    install_effect(MyCustomEffect.new())
 * 
 * 				    # Alternatively, if not using `class_name` in the script that extends RichTextEffect:
 * 				    install_effect(preload("res://effect.gd").new())
 * 				
 * 
 * ```
 * @param effect Variant
 */
  installEffect(effect: Variant): void;
/**
 * Invalidates `paragraph` and all subsequent paragraphs cache.
 * @param paragraph int
 * @returns boolean
 */
  invalidateParagraph(paragraph: int): boolean;
/**
 * If `threaded` is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`.
 * @returns boolean
 */
  isFinished(): boolean;
/**
 * Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided).
 * @returns boolean
 */
  isMenuVisible(): boolean;
/**
 * If `threaded` is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`.
 * @returns boolean
 * @deprecated Use `is_finished` instead.
 */
  isReady(): boolean;
/**
 * Executes a given action as defined in the `MenuItems` enum.
 * @param option int
 */
  menuOption(option: int): void;
/**
 * Adds a newline tag to the tag stack.
 */
  newline(): void;
/**
 * The assignment version of `append_text`. Clears the tag stack and inserts the new content.
 * @param bbcode string
 */
  parseBbcode(bbcode: string): void;
/**
 * Parses BBCode parameter `expressions` into a dictionary.
 * @param expressions PackedStringArray
 * @returns GodotDictionary<any>
 */
  parseExpressionsForValues(expressions: PackedStringArray): GodotDictionary<any>;
/**
 * Terminates the current tag. Use after `push_*` methods to close BBCodes manually. Does not need to follow `add_*` methods.
 */
  pop(): void;
/**
 * Terminates all tags opened by `push_*` methods.
 */
  popAll(): void;
/**
 * Terminates tags opened after the last `push_context` call (including context marker), or all tags if there's no context marker on the stack.
 */
  popContext(): void;
/**
 * Adds a [code skip-lint][bgcolor][/code] tag to the tag stack.
 * @param bgcolor Color
 */
  pushBgcolor(bgcolor: Color): void;
/**
 * Adds a [code skip-lint][font][/code] tag with a bold font to the tag stack. This is the same as adding a [code skip-lint][b][/code] tag if not currently in a [code skip-lint][i][/code] tag.
 */
  pushBold(): void;
/**
 * Adds a [code skip-lint][font][/code] tag with a bold italics font to the tag stack.
 */
  pushBoldItalics(): void;
/**
 * Adds a [code skip-lint][cell][/code] tag to the tag stack. Must be inside a [code skip-lint][table][/code] tag. See `push_table` for details. Use `set_table_column_expand` to set column expansion ratio, `set_cell_border_color` to set cell border, `set_cell_row_background_color` to set cell background, `set_cell_size_override` to override cell size, and `set_cell_padding` to set padding.
 */
  pushCell(): void;
/**
 * Adds a [code skip-lint][color][/code] tag to the tag stack.
 * @param color Color
 */
  pushColor(color: Color): void;
/**
 * Adds a context marker to the tag stack. See `pop_context`.
 */
  pushContext(): void;
/**
 * Adds a custom effect tag to the tag stack. The effect does not need to be in `custom_effects`. The environment is directly passed to the effect.
 * @param effect RichTextEffect
 * @param env GodotDictionary<any>
 */
  pushCustomfx(effect: RichTextEffect, env: GodotDictionary<any>): void;
/**
 * Adds a [code skip-lint][dropcap][/code] tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text.
 * @param string_ string
 * @param font Font
 * @param size int
 * @param dropcapMargins Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 * @param outlineSize int (optional, default: 0)
 * @param outlineColor Color (optional, default: Color(0, 0, 0, 0))
 */
  pushDropcap(string_: string, font: Font, size: int, dropcapMargins?: Rect2, color?: Color, outlineSize?: int, outlineColor?: Color): void;
/**
 * Adds a [code skip-lint][fgcolor][/code] tag to the tag stack.
 * @param fgcolor Color
 */
  pushFgcolor(fgcolor: Color): void;
/**
 * Adds a [code skip-lint][font][/code] tag to the tag stack. Overrides default fonts for its duration.
 * Passing `0` to `font_size` will use the existing default font size.
 * @param font Font
 * @param fontSize int (optional, default: 0)
 */
  pushFont(font: Font, fontSize?: int): void;
/**
 * Adds a [code skip-lint][font_size][/code] tag to the tag stack. Overrides default font size for its duration.
 * @param fontSize int
 */
  pushFontSize(fontSize: int): void;
/**
 * Adds a [code skip-lint][hint][/code] tag to the tag stack. Same as BBCode [code skip-lint][hint=something]{text}[/hint][/code].
 * @param description string
 */
  pushHint(description: string): void;
/**
 * Adds an [code skip-lint][indent][/code] tag to the tag stack. Multiplies `level` by current `tab_size` to determine new margin length.
 * @param level int
 */
  pushIndent(level: int): void;
/**
 * Adds a [code skip-lint][font][/code] tag with an italics font to the tag stack. This is the same as adding an [code skip-lint][i][/code] tag if not currently in a [code skip-lint][b][/code] tag.
 */
  pushItalics(): void;
/**
 * Adds language code used for text shaping algorithm and Open-Type font features.
 * @param language string
 */
  pushLanguage(language: string): void;
/**
 * Adds [code skip-lint][ol][/code] or [code skip-lint][ul][/code] tag to the tag stack. Multiplies `level` by current `tab_size` to determine new margin length.
 * @param level int
 * @param type_ int
 * @param capitalize boolean
 * @param bullet string (optional, default: "•")
 */
  pushList(level: int, type_: int, capitalize: boolean, bullet?: string): void;
/**
 * Adds a meta tag to the tag stack. Similar to the BBCode [code skip-lint]{text} (something)[/code], but supports non-`String` metadata types.
 * If `meta_underlined` is `true`, meta tags display an underline. This behavior can be customized with `underline_mode`.
 * 
 * **Note:** Meta tags do nothing by default when clicked. To assign behavior when clicked, connect `meta_clicked` to a function that is called when the meta tag is clicked.
 * @param data Variant
 * @param underlineMode int (optional, default: 1)
 * @param tooltip string (optional, default: "")
 */
  pushMeta(data: Variant, underlineMode?: int, tooltip?: string): void;
/**
 * Adds a [code skip-lint][font][/code] tag with a monospace font to the tag stack.
 */
  pushMono(): void;
/**
 * Adds a [code skip-lint][font][/code] tag with a normal font to the tag stack.
 */
  pushNormal(): void;
/**
 * Adds a [code skip-lint][outline_color][/code] tag to the tag stack. Adds text outline for its duration.
 * @param color Color
 */
  pushOutlineColor(color: Color): void;
/**
 * Adds a [code skip-lint][outline_size][/code] tag to the tag stack. Overrides default text outline size for its duration.
 * @param outlineSize int
 */
  pushOutlineSize(outlineSize: int): void;
/**
 * Adds a [code skip-lint][p][/code] tag to the tag stack.
 * @param alignment int
 * @param baseDirection int (optional, default: 0)
 * @param language string (optional, default: "")
 * @param stParser int (optional, default: 0)
 * @param justificationFlags int (optional, default: 163)
 * @param tabStops PackedFloat32Array (optional, default: PackedFloat32Array())
 */
  pushParagraph(alignment: int, baseDirection?: int, language?: string, stParser?: int, justificationFlags?: int, tabStops?: PackedFloat32Array): void;
/**
 * Adds a [code skip-lint][s][/code] tag to the tag stack.
 */
  pushStrikethrough(): void;
/**
 * Adds a [code skip-lint][table=columns,inline_align][/code] tag to the tag stack. Use `set_table_column_expand` to set column expansion ratio. Use `push_cell` to add cells.
 * @param columns int
 * @param inlineAlign int (optional, default: 0)
 * @param alignToRow int (optional, default: -1)
 */
  pushTable(columns: int, inlineAlign?: int, alignToRow?: int): void;
/**
 * Adds a [code skip-lint][u][/code] tag to the tag stack.
 */
  pushUnderline(): void;
/**
 * Removes a paragraph of content from the label. Returns `true` if the paragraph exists.
 * The `paragraph` argument is the index of the paragraph to remove, it can take values in the interval `[0, get_paragraph_count() - 1]`.
 * If `no_invalidate` is set to `true`, cache for the subsequent paragraphs is not invalidated. Use it for faster updates if deleted paragraph is fully self-contained (have no unclosed tags), or this call is part of the complex edit operation and `invalidate_paragraph` will be called at the end of operation.
 * @param paragraph int
 * @param noInvalidate boolean (optional, default: false)
 * @returns boolean
 */
  removeParagraph(paragraph: int, noInvalidate?: boolean): boolean;
/**
 * Scrolls the window's top line to match `line`.
 * @param line int
 */
  scrollToLine(line: int): void;
/**
 * Scrolls the window's top line to match first line of the `paragraph`.
 * @param paragraph int
 */
  scrollToParagraph(paragraph: int): void;
/**
 * Scrolls to the beginning of the current selection.
 */
  scrollToSelection(): void;
/**
 * Select all the text.
 * If `selection_enabled` is `false`, no selection will occur.
 */
  selectAll(): void;
/**
 * Sets color of a table cell border.
 * @param color Color
 */
  setCellBorderColor(color: Color): void;
/**
 * Sets inner padding of a table cell.
 * @param padding Rect2
 */
  setCellPadding(padding: Rect2): void;
/**
 * Sets color of a table cell. Separate colors for alternating rows can be specified.
 * @param oddRowBg Color
 * @param evenRowBg Color
 */
  setCellRowBackgroundColor(oddRowBg: Color, evenRowBg: Color): void;
/**
 * Sets minimum and maximum size overrides for a table cell.
 * @param minSize Vector2
 * @param maxSize Vector2
 */
  setCellSizeOverride(minSize: Vector2, maxSize: Vector2): void;
/**
 * Edits the selected column's expansion options. If `expand` is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.
 * For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.
 * If `expand` is `false`, the column will not contribute to the total ratio.
 * @param column int
 * @param expand boolean
 * @param ratio int (optional, default: 1)
 * @param shrink boolean (optional, default: true)
 */
  setTableColumnExpand(column: int, expand: boolean, ratio?: int, shrink?: boolean): void;
/**
 * Updates the existing images with the key `key`. Only properties specified by `mask` bits are updated. See `add_image`.
 * @param key Variant
 * @param mask int
 * @param image Texture2D
 * @param width int (optional, default: 0)
 * @param height int (optional, default: 0)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 * @param inlineAlign int (optional, default: 5)
 * @param region Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param pad boolean (optional, default: false)
 * @param tooltip string (optional, default: "")
 * @param sizeInPercent boolean (optional, default: false)
 */
  updateImage(key: Variant, mask: int, image: Texture2D, width?: int, height?: int, color?: Color, inlineAlign?: int, region?: Rect2, pad?: boolean, tooltip?: string, sizeInPercent?: boolean): void;
/**
 * Triggered when the document is fully loaded.
 * 
 * **Note:** This can happen before the text is processed for drawing. Scrolling values may not be valid until the document is drawn for the first time after this signal.
 */
  finished: Signal<[]>;
/**
 * Triggered when the user clicks on content between meta (URL) tags. If the meta is defined in BBCode, e.g. [code skip-lint]Text ({"key": "value"})[/code], then the parameter for this signal will always be a `String` type. If a particular type or an object is desired, the `push_meta` method must be used to manually insert the data into the tag stack. Alternatively, you can convert the `String` input to the desired type based on its contents (such as calling `JSON.parse` on it).
 * For example, the following method can be connected to `meta_clicked` to open clicked URLs using the user's default web browser:
 * 
 * 				```gdscript
 * 
 * 				# This assumes RichTextLabel's `meta_clicked` signal was connected to
 * 				# the function below using the signal connection dialog.
 * 				func _richtextlabel_on_meta_clicked(meta):
 * 				    # `meta` is of Variant type, so convert it to a String to avoid script errors at run-time.
 * 				    OS.shell_open(str(meta))
 * 				
 * 
 * ```
 * 
 */
  metaClicked: Signal<[meta: Variant]>;
/**
 * Triggers when the mouse exits a meta tag.
 */
  metaHoverEnded: Signal<[meta: Variant]>;
/**
 * Triggers when the mouse enters a meta tag.
 */
  metaHoverStarted: Signal<[meta: Variant]>;
/**
 * Each list item has a number marker.
 */
  static readonly LIST_NUMBERS: int;
/**
 * Each list item has a letter marker.
 */
  static readonly LIST_LETTERS: int;
/**
 * Each list item has a roman number marker.
 */
  static readonly LIST_ROMAN: int;
/**
 * Each list item has a filled circle marker.
 */
  static readonly LIST_DOTS: int;
/**
 * Copies the selected text.
 */
  static readonly MENU_COPY: int;
/**
 * Selects the whole `RichTextLabel` text.
 */
  static readonly MENU_SELECT_ALL: int;
/**
 * Represents the size of the `MenuItems` enum.
 */
  static readonly MENU_MAX: int;
/**
 * Meta tag does not display an underline, even if `meta_underlined` is `true`.
 */
  static readonly META_UNDERLINE_NEVER: int;
/**
 * If `meta_underlined` is `true`, meta tag always display an underline.
 */
  static readonly META_UNDERLINE_ALWAYS: int;
/**
 * If `meta_underlined` is `true`, meta tag display an underline when the mouse cursor is over it.
 */
  static readonly META_UNDERLINE_ON_HOVER: int;
/**
 * If this bit is set, `update_image` changes image texture.
 */
  static readonly UPDATE_TEXTURE: int;
/**
 * If this bit is set, `update_image` changes image size.
 */
  static readonly UPDATE_SIZE: int;
/**
 * If this bit is set, `update_image` changes image color.
 */
  static readonly UPDATE_COLOR: int;
/**
 * If this bit is set, `update_image` changes image inline alignment.
 */
  static readonly UPDATE_ALIGNMENT: int;
/**
 * If this bit is set, `update_image` changes image texture region.
 */
  static readonly UPDATE_REGION: int;
/**
 * If this bit is set, `update_image` changes image padding.
 */
  static readonly UPDATE_PAD: int;
/**
 * If this bit is set, `update_image` changes image tooltip.
 */
  static readonly UPDATE_TOOLTIP: int;
/**
 * If this bit is set, `update_image` changes image width from/to percents.
 */
  static readonly UPDATE_WIDTH_IN_PERCENT: int;
}
