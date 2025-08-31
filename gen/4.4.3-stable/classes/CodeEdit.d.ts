import type { Color, Dictionary, GodotArray, GodotDictionary, PackedInt32Array, Resource, Signal, String, TextEdit, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * A multiline text editor designed for editing code.
 * 
 * CodeEdit is a specialized `TextEdit` designed for editing plain text code files. It has many features commonly found in code editors such as line numbers, line folding, code completion, indent management, and string/comment management.
 * 
 * **Note:** Regardless of locale, `CodeEdit` will by default always use left-to-right text direction to correctly display source code.
 */
export class CodeEdit extends TextEdit {
/**
 * If `true`, uses `auto_brace_completion_pairs` to automatically insert the closing brace when the opening brace is inserted by typing or autocompletion. Also automatically removes the closing brace when using backspace on the opening brace.
 */
  autoBraceCompletionEnabled: boolean;
/**
 * If `true`, highlights brace pairs when the caret is on either one, using `auto_brace_completion_pairs`. If matching, the pairs will be underlined. If a brace is unmatched, it is colored with [theme_item brace_mismatch_color].
 */
  autoBraceCompletionHighlightMatching: boolean;
/**
 * Sets the brace pairs to be autocompleted. For each entry in the dictionary, the key is the opening brace and the value is the closing brace that matches it. A brace is a `String` made of symbols. See `auto_brace_completion_enabled` and `auto_brace_completion_highlight_matching`.
 */
  autoBraceCompletionPairs: GodotDictionary<any>;
/**
 * If `true`, the `ProjectSettings.input/ui_text_completion_query` action requests code completion. To handle it, see `_request_code_completion` or `code_completion_requested`.
 */
  codeCompletionEnabled: boolean;
/**
 * Sets prefixes that will trigger code completion.
 */
  codeCompletionPrefixes: String[];
/**
 * Sets the comment delimiters. All existing comment delimiters will be removed.
 */
  delimiterComments: String[];
/**
 * Sets the string delimiters. All existing string delimiters will be removed.
 */
  delimiterStrings: String[];
/**
 * If `true`, bookmarks are drawn in the gutter. This gutter is shared with breakpoints and executing lines. See `set_line_as_bookmarked`.
 */
  guttersDrawBookmarks: boolean;
/**
 * If `true`, breakpoints are drawn in the gutter. This gutter is shared with bookmarks and executing lines. Clicking the gutter will toggle the breakpoint for the line, see `set_line_as_breakpoint`.
 */
  guttersDrawBreakpointsGutter: boolean;
/**
 * If `true`, executing lines are marked in the gutter. This gutter is shared with breakpoints and bookmarks. See `set_line_as_executing`.
 */
  guttersDrawExecutingLines: boolean;
/**
 * If `true`, the fold gutter is drawn. In this gutter, the [theme_item can_fold_code_region] icon is drawn for each foldable line (see `can_fold_line`) and the [theme_item folded_code_region] icon is drawn for each folded line (see `is_line_folded`). These icons can be clicked to toggle the fold state, see `toggle_foldable_line`. `line_folding` must be `true` to show icons.
 */
  guttersDrawFoldGutter: boolean;
/**
 * If `true`, the line number gutter is drawn. Line numbers start at `1` and are incremented for each line of text. Clicking and dragging in the line number gutter will select entire lines of text.
 */
  guttersDrawLineNumbers: boolean;
/**
 * If `true`, line numbers drawn in the gutter are zero padded based on the total line count. Requires `gutters_draw_line_numbers` to be set to `true`.
 */
  guttersZeroPadLineNumbers: boolean;
/**
 * If `true`, an extra indent is automatically inserted when a new line is added and a prefix in `indent_automatic_prefixes` is found. If a brace pair opening key is found, the matching closing brace will be moved to another new line (see `auto_brace_completion_pairs`).
 */
  indentAutomatic: boolean;
/**
 * Prefixes to trigger an automatic indent. Used when `indent_automatic` is set to `true`.
 */
  indentAutomaticPrefixes: String[];
/**
 * Size of the tabulation indent (one `Tab` press) in characters. If `indent_use_spaces` is enabled the number of spaces to use.
 */
  indentSize: int;
/**
 * Use spaces instead of tabs for indentation.
 */
  indentUseSpaces: boolean;
  layoutDirection: int;
/**
 * If `true`, lines can be folded. Otherwise, line folding methods like `fold_line` will not work and `can_fold_line` will always return `false`. See `gutters_draw_fold_gutter`.
 */
  lineFolding: boolean;
/**
 * Draws vertical lines at the provided columns. The first entry is considered a main hard guideline and is draw more prominently.
 */
  lineLengthGuidelines: int[];
/**
 * Set when a validated word from `symbol_validate` is clicked, the `symbol_lookup` should be emitted.
 */
  symbolLookupOnClick: boolean;
/**
 * Set when a word is hovered, the `symbol_hovered` should be emitted.
 */
  symbolTooltipOnHover: boolean;
  textDirection: int;
/**
 * Adds a brace pair.
 * Both the start and end keys must be symbols. Only the start key has to be unique.
 * @param startKey string
 * @param endKey string
 */
  addAutoBraceCompletionPair(startKey: string, endKey: string): void;
/**
 * Submits an item to the queue of potential candidates for the autocomplete menu. Call `update_code_completion_options` to update the list.
 * `location` indicates location of the option relative to the location of the code completion query. See `CodeEdit.CodeCompletionLocation` for how to set this value.
 * 
 * **Note:** This list will replace all current candidates.
 * @param type_ int
 * @param displayText string
 * @param insertText string
 * @param textColor Color (optional, default: Color(1, 1, 1, 1))
 * @param icon Resource (optional, default: null)
 * @param value Variant (optional, default: null)
 * @param location int (optional, default: 1024)
 */
  addCodeCompletionOption(type_: int, displayText: string, insertText: string, textColor?: Color, icon?: Resource, value?: Variant, location?: int): void;
/**
 * Adds a comment delimiter from `start_key` to `end_key`. Both keys should be symbols, and `start_key` must not be shared with other delimiters.
 * If `line_only` is `true` or `end_key` is an empty `String`, the region does not carry over to the next line.
 * @param startKey string
 * @param endKey string
 * @param lineOnly boolean (optional, default: false)
 */
  addCommentDelimiter(startKey: string, endKey: string, lineOnly?: boolean): void;
/**
 * Defines a string delimiter from `start_key` to `end_key`. Both keys should be symbols, and `start_key` must not be shared with other delimiters.
 * If `line_only` is `true` or `end_key` is an empty `String`, the region does not carry over to the next line.
 * @param startKey string
 * @param endKey string
 * @param lineOnly boolean (optional, default: false)
 */
  addStringDelimiter(startKey: string, endKey: string, lineOnly?: boolean): void;
/**
 * Cancels the autocomplete menu.
 */
  cancelCodeCompletion(): void;
/**
 * Returns `true` if the given line is foldable. A line is foldable if it is the start of a valid code region (see `get_code_region_start_tag`), if it is the start of a comment or string block, or if the next non-empty line is more indented (see `TextEdit.get_indent_level`).
 * @param line int
 * @returns boolean
 */
  canFoldLine(line: int): boolean;
/**
 * Clears all bookmarked lines.
 */
  clearBookmarkedLines(): void;
/**
 * Clears all breakpointed lines.
 */
  clearBreakpointedLines(): void;
/**
 * Removes all comment delimiters.
 */
  clearCommentDelimiters(): void;
/**
 * Clears all executed lines.
 */
  clearExecutingLines(): void;
/**
 * Removes all string delimiters.
 */
  clearStringDelimiters(): void;
/**
 * Inserts the selected entry into the text. If `replace` is `true`, any existing text is replaced rather than merged.
 * @param replace boolean (optional, default: false)
 */
  confirmCodeCompletion(replace?: boolean): void;
/**
 * Override this method to define how the selected entry should be inserted. If `replace` is `true`, any existing text should be replaced.
 * @param replace boolean
 */
  private confirmCodeCompletion(replace: boolean): void;
/**
 * Converts the indents of lines between `from_line` and `to_line` to tabs or spaces as set by `indent_use_spaces`.
 * Values of `-1` convert the entire text.
 * @param fromLine int (optional, default: -1)
 * @param toLine int (optional, default: -1)
 */
  convertIndent(fromLine?: int, toLine?: int): void;
/**
 * Creates a new code region with the selection. At least one single line comment delimiter have to be defined (see `add_comment_delimiter`).
 * A code region is a part of code that is highlighted when folded and can help organize your script.
 * Code region start and end tags can be customized (see `set_code_region_tags`).
 * Code regions are delimited using start and end tags (respectively `region` and `endregion` by default) preceded by one line comment delimiter. (eg. `#region` and `#endregion`)
 */
  createCodeRegion(): void;
/**
 * Deletes all lines that are selected or have a caret on them.
 */
  deleteLines(): void;
/**
 * If there is no selection, indentation is inserted at the caret. Otherwise, the selected lines are indented like `indent_lines`. Equivalent to the `ProjectSettings.input/ui_text_indent` action. The indentation characters used depend on `indent_use_spaces` and `indent_size`.
 */
  doIndent(): void;
/**
 * Duplicates all lines currently selected with any caret. Duplicates the entire line beneath the current one no matter where the caret is within the line.
 */
  duplicateLines(): void;
/**
 * Duplicates all selected text and duplicates all lines with a caret on them.
 */
  duplicateSelection(): void;
/**
 * Override this method to define what items in `candidates` should be displayed.
 * Both `candidates` and the return is a `Array` of `Dictionary`, see `get_code_completion_option` for `Dictionary` content.
 * @param candidates Dictionary[]
 * @returns Dictionary[]
 */
  private filterCodeCompletionCandidates(candidates: Dictionary[]): Dictionary[];
/**
 * Folds all lines that are possible to be folded (see `can_fold_line`).
 */
  foldAllLines(): void;
/**
 * Folds the given line, if possible (see `can_fold_line`).
 * @param line int
 */
  foldLine(line: int): void;
/**
 * Gets the matching auto brace close key for `open_key`.
 * @param openKey string
 * @returns string
 */
  getAutoBraceCompletionCloseKey(openKey: string): string;
/**
 * Gets all bookmarked lines.
 * @returns PackedInt32Array
 */
  getBookmarkedLines(): PackedInt32Array;
/**
 * Gets all breakpointed lines.
 * @returns PackedInt32Array
 */
  getBreakpointedLines(): PackedInt32Array;
/**
 * Gets the completion option at `index`. The return `Dictionary` has the following key-values:
 * `kind`: `CodeCompletionKind`
 * `display_text`: Text that is shown on the autocomplete menu.
 * `insert_text`: Text that is to be inserted when this item is selected.
 * `font_color`: Color of the text on the autocomplete menu.
 * `icon`: Icon to draw on the autocomplete menu.
 * `default_value`: Value of the symbol.
 * @param index int
 * @returns GodotDictionary<any>
 */
  getCodeCompletionOption(index: int): GodotDictionary<any>;
/**
 * Gets all completion options, see `get_code_completion_option` for return content.
 * @returns Dictionary[]
 */
  getCodeCompletionOptions(): Dictionary[];
/**
 * Gets the index of the current selected completion option.
 * @returns int
 */
  getCodeCompletionSelectedIndex(): int;
/**
 * Returns the code region end tag (without comment delimiter).
 * @returns string
 */
  getCodeRegionEndTag(): string;
/**
 * Returns the code region start tag (without comment delimiter).
 * @returns string
 */
  getCodeRegionStartTag(): string;
/**
 * Gets the end key for a string or comment region index.
 * @param delimiterIndex int
 * @returns string
 */
  getDelimiterEndKey(delimiterIndex: int): string;
/**
 * If `line` `column` is in a string or comment, returns the end position of the region. If not or no end could be found, both `Vector2` values will be `-1`.
 * @param line int
 * @param column int
 * @returns Vector2
 */
  getDelimiterEndPosition(line: int, column: int): Vector2;
/**
 * Gets the start key for a string or comment region index.
 * @param delimiterIndex int
 * @returns string
 */
  getDelimiterStartKey(delimiterIndex: int): string;
/**
 * If `line` `column` is in a string or comment, returns the start position of the region. If not or no start could be found, both `Vector2` values will be `-1`.
 * @param line int
 * @param column int
 * @returns Vector2
 */
  getDelimiterStartPosition(line: int, column: int): Vector2;
/**
 * Gets all executing lines.
 * @returns PackedInt32Array
 */
  getExecutingLines(): PackedInt32Array;
/**
 * Returns all lines that are currently folded.
 * @returns int[]
 */
  getFoldedLines(): int[];
/**
 * Returns the full text with char `0xFFFF` at the caret location.
 * @returns string
 */
  getTextForCodeCompletion(): string;
/**
 * Returns the full text with char `0xFFFF` at the cursor location.
 * @returns string
 */
  getTextForSymbolLookup(): string;
/**
 * Returns the full text with char `0xFFFF` at the specified location.
 * @param line int
 * @param column int
 * @returns string
 */
  getTextWithCursorChar(line: int, column: int): string;
/**
 * Returns `true` if close key `close_key` exists.
 * @param closeKey string
 * @returns boolean
 */
  hasAutoBraceCompletionCloseKey(closeKey: string): boolean;
/**
 * Returns `true` if open key `open_key` exists.
 * @param openKey string
 * @returns boolean
 */
  hasAutoBraceCompletionOpenKey(openKey: string): boolean;
/**
 * Returns `true` if comment `start_key` exists.
 * @param startKey string
 * @returns boolean
 */
  hasCommentDelimiter(startKey: string): boolean;
/**
 * Returns `true` if string `start_key` exists.
 * @param startKey string
 * @returns boolean
 */
  hasStringDelimiter(startKey: string): boolean;
/**
 * Indents all lines that are selected or have a caret on them. Uses spaces or a tab depending on `indent_use_spaces`. See `unindent_lines`.
 */
  indentLines(): void;
/**
 * Returns delimiter index if `line` `column` is in a comment. If `column` is not provided, will return delimiter index if the entire `line` is a comment. Otherwise `-1`.
 * @param line int
 * @param column int (optional, default: -1)
 * @returns int
 */
  isInComment(line: int, column?: int): int;
/**
 * Returns the delimiter index if `line` `column` is in a string. If `column` is not provided, will return the delimiter index if the entire `line` is a string. Otherwise `-1`.
 * @param line int
 * @param column int (optional, default: -1)
 * @returns int
 */
  isInString(line: int, column?: int): int;
/**
 * Returns `true` if the given line is bookmarked. See `set_line_as_bookmarked`.
 * @param line int
 * @returns boolean
 */
  isLineBookmarked(line: int): boolean;
/**
 * Returns `true` if the given line is breakpointed. See `set_line_as_breakpoint`.
 * @param line int
 * @returns boolean
 */
  isLineBreakpointed(line: int): boolean;
/**
 * Returns `true` if the given line is a code region end. See `set_code_region_tags`.
 * @param line int
 * @returns boolean
 */
  isLineCodeRegionEnd(line: int): boolean;
/**
 * Returns `true` if the given line is a code region start. See `set_code_region_tags`.
 * @param line int
 * @returns boolean
 */
  isLineCodeRegionStart(line: int): boolean;
/**
 * Returns `true` if the given line is marked as executing. See `set_line_as_executing`.
 * @param line int
 * @returns boolean
 */
  isLineExecuting(line: int): boolean;
/**
 * Returns `true` if the given line is folded. See `fold_line`.
 * @param line int
 * @returns boolean
 */
  isLineFolded(line: int): boolean;
/**
 * Moves all lines down that are selected or have a caret on them.
 */
  moveLinesDown(): void;
/**
 * Moves all lines up that are selected or have a caret on them.
 */
  moveLinesUp(): void;
/**
 * Removes the comment delimiter with `start_key`.
 * @param startKey string
 */
  removeCommentDelimiter(startKey: string): void;
/**
 * Removes the string delimiter with `start_key`.
 * @param startKey string
 */
  removeStringDelimiter(startKey: string): void;
/**
 * Emits `code_completion_requested`, if `force` is `true` will bypass all checks. Otherwise will check that the caret is in a word or in front of a prefix. Will ignore the request if all current options are of type file path, node path, or signal.
 * @param force boolean (optional, default: false)
 */
  requestCodeCompletion(force?: boolean): void;
/**
 * Override this method to define what happens when the user requests code completion. If `force` is `true`, any checks should be bypassed.
 * @param force boolean
 */
  private requestCodeCompletion(force: boolean): void;
/**
 * Sets the current selected completion option.
 * @param index int
 */
  setCodeCompletionSelectedIndex(index: int): void;
/**
 * Sets the code hint text. Pass an empty string to clear.
 * @param codeHint string
 */
  setCodeHint(codeHint: string): void;
/**
 * If `true`, the code hint will draw below the main caret. If `false`, the code hint will draw above the main caret. See `set_code_hint`.
 * @param drawBelow boolean
 */
  setCodeHintDrawBelow(drawBelow: boolean): void;
/**
 * Sets the code region start and end tags (without comment delimiter).
 * @param start string (optional, default: "region")
 * @param end string (optional, default: "endregion")
 */
  setCodeRegionTags(start?: string, end?: string): void;
/**
 * Sets the given line as bookmarked. If `true` and `gutters_draw_bookmarks` is `true`, draws the [theme_item bookmark] icon in the gutter for this line. See `get_bookmarked_lines` and `is_line_bookmarked`.
 * @param line int
 * @param bookmarked boolean
 */
  setLineAsBookmarked(line: int, bookmarked: boolean): void;
/**
 * Sets the given line as a breakpoint. If `true` and `gutters_draw_breakpoints_gutter` is `true`, draws the [theme_item breakpoint] icon in the gutter for this line. See `get_breakpointed_lines` and `is_line_breakpointed`.
 * @param line int
 * @param breakpointed boolean
 */
  setLineAsBreakpoint(line: int, breakpointed: boolean): void;
/**
 * Sets the given line as executing. If `true` and `gutters_draw_executing_lines` is `true`, draws the [theme_item executing_line] icon in the gutter for this line. See `get_executing_lines` and `is_line_executing`.
 * @param line int
 * @param executing boolean
 */
  setLineAsExecuting(line: int, executing: boolean): void;
/**
 * Sets the symbol emitted by `symbol_validate` as a valid lookup.
 * @param valid boolean
 */
  setSymbolLookupWordAsValid(valid: boolean): void;
/**
 * Toggle the folding of the code block at the given line.
 * @param line int
 */
  toggleFoldableLine(line: int): void;
/**
 * Toggle the folding of the code block on all lines with a caret on them.
 */
  toggleFoldableLinesAtCarets(): void;
/**
 * Unfolds all lines that are folded.
 */
  unfoldAllLines(): void;
/**
 * Unfolds the given line if it is folded or if it is hidden under a folded line.
 * @param line int
 */
  unfoldLine(line: int): void;
/**
 * Unindents all lines that are selected or have a caret on them. Uses spaces or a tab depending on `indent_use_spaces`. Equivalent to the `ProjectSettings.input/ui_text_dedent` action. See `indent_lines`.
 */
  unindentLines(): void;
/**
 * Submits all completion options added with `add_code_completion_option`. Will try to force the autocomplete menu to popup, if `force` is `true`.
 * 
 * **Note:** This will replace all current candidates.
 * @param force boolean
 */
  updateCodeCompletionOptions(force: boolean): void;
/**
 * Emitted when a breakpoint is added or removed from a line. If the line is moved via backspace a removed is emitted at the old line.
 */
  breakpointToggled: Signal<[line: int]>;
/**
 * Emitted when the user requests code completion. This signal will not be sent if `_request_code_completion` is overridden or `code_completion_enabled` is `false`.
 */
  codeCompletionRequested: Signal<[]>;
/**
 * Emitted when the user hovers over a symbol. Unlike `Control.mouse_entered`, this signal is not emitted immediately, but when the cursor is over the symbol for `ProjectSettings.gui/timers/tooltip_delay_sec` seconds.
 * 
 * **Note:** `symbol_tooltip_on_hover` must be `true` for this signal to be emitted.
 */
  symbolHovered: Signal<[symbol_: string, line: int, column: int]>;
/**
 * Emitted when the user has clicked on a valid symbol.
 */
  symbolLookup: Signal<[symbol_: string, line: int, column: int]>;
/**
 * Emitted when the user hovers over a symbol. The symbol should be validated and responded to, by calling `set_symbol_lookup_word_as_valid`.
 * 
 * **Note:** `symbol_lookup_on_click` must be `true` for this signal to be emitted.
 */
  symbolValidate: Signal<[symbol_: string]>;
/**
 * Marks the option as a class.
 */
  static readonly KIND_CLASS: int;
/**
 * Marks the option as a function.
 */
  static readonly KIND_FUNCTION: int;
/**
 * Marks the option as a Godot signal.
 */
  static readonly KIND_SIGNAL: int;
/**
 * Marks the option as a variable.
 */
  static readonly KIND_VARIABLE: int;
/**
 * Marks the option as a member.
 */
  static readonly KIND_MEMBER: int;
/**
 * Marks the option as an enum entry.
 */
  static readonly KIND_ENUM: int;
/**
 * Marks the option as a constant.
 */
  static readonly KIND_CONSTANT: int;
/**
 * Marks the option as a Godot node path.
 */
  static readonly KIND_NODE_PATH: int;
/**
 * Marks the option as a file path.
 */
  static readonly KIND_FILE_PATH: int;
/**
 * Marks the option as unclassified or plain text.
 */
  static readonly KIND_PLAIN_TEXT: int;
/**
 * The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes).
 */
  static readonly LOCATION_LOCAL: int;
/**
 * The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. `0` for the local class, `1` for the parent, `2` for the grandparent, etc.) to store the depth of an option in the class or a parent class.
 */
  static readonly LOCATION_PARENT_MASK: int;
/**
 * The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons).
 */
  static readonly LOCATION_OTHER_USER_CODE: int;
/**
 * The option is from other engine code, not covered by the other enum constants - e.g. built-in classes.
 */
  static readonly LOCATION_OTHER: int;
}
