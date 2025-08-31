import type { Control, GodotArray, GodotDictionary, PopupMenu, Signal, Texture2D, float, int } from "../index.d.ts";
/**
 * An input field for single-line text.
 * 
 * `LineEdit` provides an input field for editing a single line of text.
 * - When the `LineEdit` control is focused using the keyboard arrow keys, it will only gain focus and not enter edit mode.
 * - To enter edit mode, click on the control with the mouse, see also `keep_editing_on_text_submit`.
 * - To exit edit mode, press `ui_text_submit` or `ui_cancel` (by default `Escape`) actions.
 * - Check `edit`, `unedit`, `is_editing`, and `editing_toggled` for more information.
 * 
 * **Important:**
 * - Focusing the `LineEdit` with `ui_focus_next` (by default `Tab`) or `ui_focus_prev` (by default `Shift + Tab`) or `Control.grab_focus` still enters edit mode (for compatibility).
 * `LineEdit` features many built-in shortcuts that are always available (`Ctrl` here maps to `Cmd` on macOS):
 * - `Ctrl + C`: Copy
 * - `Ctrl + X`: Cut
 * - `Ctrl + V` or `Ctrl + Y`: Paste/"yank"
 * - `Ctrl + Z`: Undo
 * - `Ctrl + ~`: Swap input direction.
 * - `Ctrl + Shift + Z`: Redo
 * - `Ctrl + U`: Delete text from the caret position to the beginning of the line
 * - `Ctrl + K`: Delete text from the caret position to the end of the line
 * - `Ctrl + A`: Select all text
 * - `Up Arrow`/`Down Arrow`: Move the caret to the beginning/end of the line
 * On macOS, some extra keyboard shortcuts are available:
 * - `Cmd + F`: Same as `Right Arrow`, move the caret one character right
 * - `Cmd + B`: Same as `Left Arrow`, move the caret one character left
 * - `Cmd + P`: Same as `Up Arrow`, move the caret to the previous line
 * - `Cmd + N`: Same as `Down Arrow`, move the caret to the next line
 * - `Cmd + D`: Same as `Delete`, delete the character on the right side of caret
 * - `Cmd + H`: Same as `Backspace`, delete the character on the left side of the caret
 * - `Cmd + A`: Same as `Home`, move the caret to the beginning of the line
 * - `Cmd + E`: Same as `End`, move the caret to the end of the line
 * - `Cmd + Left Arrow`: Same as `Home`, move the caret to the beginning of the line
 * - `Cmd + Right Arrow`: Same as `End`, move the caret to the end of the line
 * 
 * **Note:** Caret movement shortcuts listed above are not affected by `shortcut_keys_enabled`.
 */
export class LineEdit extends Control {
/**
 * Text alignment as defined in the `HorizontalAlignment` enum.
 */
  alignment: int;
/**
 * If `true`, makes the caret blink.
 */
  caretBlink: boolean;
/**
 * The interval at which the caret blinks (in seconds).
 */
  caretBlinkInterval: float;
/**
 * The caret's column position inside the `LineEdit`. When set, the text may scroll to accommodate it.
 */
  caretColumn: int;
/**
 * If `true`, the `LineEdit` will always show the caret, even if focus is lost.
 */
  caretForceDisplayed: boolean;
/**
 * Allow moving caret, selecting and removing the individual composite character components.
 * 
 * **Note:** `Backspace` is always removing individual composite character components.
 */
  caretMidGrapheme: boolean;
/**
 * If `true`, the `LineEdit` will show a clear button if `text` is not empty, which can be used to clear the text quickly.
 */
  clearButtonEnabled: boolean;
/**
 * If `true`, the context menu will appear when right-clicked.
 */
  contextMenuEnabled: boolean;
/**
 * If `true`, the selected text will be deselected when focus is lost.
 */
  deselectOnFocusLossEnabled: boolean;
/**
 * If `true`, allow drag and drop of selected text.
 */
  dragAndDropSelectionEnabled: boolean;
/**
 * If `true`, control characters are displayed.
 */
  drawControlChars: boolean;
/**
 * If `false`, existing text cannot be modified and new text cannot be added.
 */
  editable: boolean;
/**
 * If `true`, "Emoji and Symbols" menu is enabled.
 */
  emojiMenuEnabled: boolean;
/**
 * If `true`, the `LineEdit` width will increase to stay longer than the `text`. It will **not** compress if the `text` is shortened.
 */
  expandToTextLength: boolean;
/**
 * If `true`, the `LineEdit` doesn't display decoration.
 */
  flat: boolean;
  focusMode: int;
/**
 * If `true`, the `LineEdit` will not exit edit mode when text is submitted by pressing `ui_text_submit` action (by default: `Enter` or `Kp Enter`).
 */
  keepEditingOnTextSubmit: boolean;
/**
 * Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead.
 */
  language: string;
/**
 * Maximum number of characters that can be entered inside the `LineEdit`. If `0`, there is no limit.
 * When a limit is defined, characters that would exceed `max_length` are truncated. This happens both for existing `text` contents when setting the max length, or for new text inserted in the `LineEdit`, including pasting.
 * If any input text is truncated, the `text_change_rejected` signal is emitted with the truncated substring as parameter:
 * 
 * 			```gdscript
 * 
 * 			text = "Hello world"
 * 			max_length = 5
 * 			# `text` becomes "Hello".
 * 			max_length = 10
 * 			text += " goodbye"
 * 			# `text` becomes "Hello good".
 * 			# `text_change_rejected` is emitted with "bye" as parameter.
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			Text = "Hello world";
 * 			MaxLength = 5;
 * 			// `Text` becomes "Hello".
 * 			MaxLength = 10;
 * 			Text += " goodbye";
 * 			// `Text` becomes "Hello good".
 * 			// `text_change_rejected` is emitted with "bye" as parameter.
 * 			
 * 
 * ```
 * 
 */
  maxLength: int;
/**
 * If `false`, using middle mouse button to paste clipboard will be disabled.
 * 
 * **Note:** This method is only implemented on Linux.
 */
  middleMousePasteEnabled: boolean;
  mouseDefaultCursorShape: int;
/**
 * Text shown when the `LineEdit` is empty. It is **not** the `LineEdit`'s default value (see `text`).
 */
  placeholderText: string;
/**
 * Sets the icon that will appear in the right end of the `LineEdit` if there's no `text`, or always, if `clear_button_enabled` is set to `false`.
 */
  rightIcon: Texture2D;
/**
 * If `true`, every character is replaced with the secret character (see `secret_character`).
 */
  secret: boolean;
/**
 * The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead.
 */
  secretCharacter: string;
/**
 * If `true`, the `LineEdit` will select the whole text when it gains focus.
 */
  selectAllOnFocus: boolean;
/**
 * If `false`, it's impossible to select the text using mouse nor keyboard.
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
 * String value of the `LineEdit`.
 * 
 * **Note:** Changing text using this property won't emit the `text_changed` signal.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * If `true`, the native virtual keyboard is shown when focused on platforms that support it.
 */
  virtualKeyboardEnabled: boolean;
/**
 * Specifies the type of virtual keyboard to show.
 */
  virtualKeyboardType: int;
/**
 * Applies text from the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) (IME) and closes the IME if it is open.
 */
  applyIme(): void;
/**
 * Closes the Input Method Editor (https://en.wikipedia.org/wiki/Input_method) (IME) if it is open. Any text in the IME will be lost.
 */
  cancelIme(): void;
/**
 * Erases the `LineEdit`'s `text`.
 */
  clear(): void;
/**
 * Deletes one character at the caret's current position (equivalent to pressing `Delete`).
 */
  deleteCharAtCaret(): void;
/**
 * Deletes a section of the `text` going from position `from_column` to `to_column`. Both parameters should be within the text's length.
 * @param fromColumn int
 * @param toColumn int
 */
  deleteText(fromColumn: int, toColumn: int): void;
/**
 * Clears the current selection.
 */
  deselect(): void;
/**
 * Allows entering edit mode whether the `LineEdit` is focused or not.
 * See also `keep_editing_on_text_submit`.
 */
  edit(): void;
/**
 * Returns the `PopupMenu` of this `LineEdit`. By default, this menu is displayed when right-clicking on the `LineEdit`.
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
 * 				    menu.ItemCount = menu.GetItemIndex(LineEdit.MenuItems.Redo) + 1;
 * 				    // Add custom items.
 * 				    menu.AddSeparator();
 * 				    menu.AddItem("Insert Date", LineEdit.MenuItems.Max + 1);
 * 				    // Add event handler.
 * 				    menu.IdPressed += OnItemPressed;
 * 				}
 * 
 * 				public void OnItemPressed(int id)
 * 				{
 * 				    if (id == LineEdit.MenuItems.Max + 1)
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
 * Returns the scroll offset due to `caret_column`, as a number of characters.
 * @returns float
 */
  getScrollOffset(): float;
/**
 * Returns the text inside the selection.
 * @returns string
 */
  getSelectedText(): string;
/**
 * Returns the selection begin column.
 * @returns int
 */
  getSelectionFromColumn(): int;
/**
 * Returns the selection end column.
 * @returns int
 */
  getSelectionToColumn(): int;
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
 * @returns boolean
 */
  hasSelection(): boolean;
/**
 * Returns `true` if an "undo" action is available.
 * @returns boolean
 */
  hasUndo(): boolean;
/**
 * Inserts `text` at the caret. If the resulting value is longer than `max_length`, nothing happens.
 * @param text string
 */
  insertTextAtCaret(text: string): void;
/**
 * Returns whether the `LineEdit` is being edited.
 * @returns boolean
 */
  isEditing(): boolean;
/**
 * Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided).
 * @returns boolean
 */
  isMenuVisible(): boolean;
/**
 * Executes a given action as defined in the `MenuItems` enum.
 * @param option int
 */
  menuOption(option: int): void;
/**
 * Selects characters inside `LineEdit` between `from` and `to`. By default, `from` is at the beginning and `to` at the end.
 * 
 * 				```gdscript
 * 
 * 				text = "Welcome"
 * 				select() # Will select "Welcome".
 * 				select(4) # Will select "ome".
 * 				select(2, 5) # Will select "lco".
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Text = "Welcome";
 * 				Select(); // Will select "Welcome".
 * 				Select(4); // Will select "ome".
 * 				Select(2, 5); // Will select "lco".
 * 				
 * 
 * ```
 * 
 * @param from_ int (optional, default: 0)
 * @param to int (optional, default: -1)
 */
  select(from_?: int, to?: int): void;
/**
 * Selects the whole `String`.
 */
  selectAll(): void;
/**
 * Allows exiting edit mode while preserving focus.
 */
  unedit(): void;
/**
 * Emitted when the `LineEdit` switches in or out of edit mode.
 */
  editingToggled: Signal<[toggledOn: boolean]>;
/**
 * Emitted when the text changes.
 */
  textChanged: Signal<[newText: string]>;
/**
 * Emitted when appending text that overflows the `max_length`. The appended text is truncated to fit `max_length`, and the part that couldn't fit is passed as the `rejected_substring` argument.
 */
  textChangeRejected: Signal<[rejectedSubstring: string]>;
/**
 * Emitted when the user presses the `ui_text_submit` action (by default: `Enter` or `Kp Enter`) while the `LineEdit` has focus.
 */
  textSubmitted: Signal<[newText: string]>;
/**
 * Cuts (copies and clears) the selected text.
 */
  static readonly MENU_CUT: int;
/**
 * Copies the selected text.
 */
  static readonly MENU_COPY: int;
/**
 * Pastes the clipboard text over the selected text (or at the caret's position).
 * Non-printable escape characters are automatically stripped from the OS clipboard via `String.strip_escapes`.
 */
  static readonly MENU_PASTE: int;
/**
 * Erases the whole `LineEdit` text.
 */
  static readonly MENU_CLEAR: int;
/**
 * Selects the whole `LineEdit` text.
 */
  static readonly MENU_SELECT_ALL: int;
/**
 * Undoes the previous action.
 */
  static readonly MENU_UNDO: int;
/**
 * Reverse the last undo action.
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
}
