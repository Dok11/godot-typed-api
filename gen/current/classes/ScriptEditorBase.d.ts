import type { Control, EditorSyntaxHighlighter, GodotArray, GodotDictionary, Object, Signal, VBoxContainer, float, int } from "../index.d.ts";
/**
 * Base editor for editing scripts in the `ScriptEditor`.
 * 
 * Base editor for editing scripts in the `ScriptEditor`. This does not include documentation items.
 */
export class ScriptEditorBase extends VBoxContainer {
/**
 * Adds a `EditorSyntaxHighlighter` to the open script.
 * @param highlighter EditorSyntaxHighlighter
 */
  addSyntaxHighlighter(highlighter: EditorSyntaxHighlighter): void;
/**
 * Returns the underlying `Control` used for editing scripts. For text scripts, this is a `CodeEdit`.
 * @returns Control
 */
  getBaseEditor(): Control;
/**
 * Emitted after script validation.
 */
  editedScriptChanged: Signal<[]>;
/**
 * Emitted when the user requests a specific documentation page.
 */
  goToHelp: Signal<[what: string]>;
/**
 * Emitted when the user requests to view a specific method of a script, similar to `request_open_script_at_line`.
 */
  goToMethod: Signal<[script: Object, method: string]>;
/**
 * Emitted after script validation or when the edited resource has changed.
 */
  nameChanged: Signal<[]>;
/**
 * Emitted when the user request to find and replace text in the file system.
 */
  replaceInFilesRequested: Signal<[text: string]>;
/**
 * Emitted when the user requests contextual help.
 */
  requestHelp: Signal<[topic: string]>;
/**
 * Emitted when the user requests to view a specific line of a script, similar to `go_to_method`.
 */
  requestOpenScriptAtLine: Signal<[script: Object, line: int]>;
/**
 * Emitted when the user contextual goto and the item is in the same script.
 */
  requestSaveHistory: Signal<[]>;
/**
 * Emitted when the user changes current script or moves caret by 10 or more columns within the same script.
 */
  requestSavePreviousState: Signal<[state: GodotDictionary<any>]>;
/**
 * Emitted when the user request to search text in the file system.
 */
  searchInFilesRequested: Signal<[text: string]>;
}
