import type { GodotArray, GodotDictionary, PackedStringArray, SyntaxHighlighter, float, int } from "../index.d.ts";
/**
 * Base class for `SyntaxHighlighter` used by the `ScriptEditor`.
 * 
 * Base class that all `SyntaxHighlighter`s used by the `ScriptEditor` extend from.
 * Add a syntax highlighter to an individual script by calling `ScriptEditorBase.add_syntax_highlighter`. To apply to all scripts on open, call `ScriptEditor.register_syntax_highlighter`.
 */
export class EditorSyntaxHighlighter extends SyntaxHighlighter {
/**
 * Virtual method which can be overridden to return the syntax highlighter name.
 * @returns string
 */
  private getName(): string;
/**
 * Virtual method which can be overridden to return the supported language names.
 * @returns PackedStringArray
 */
  private getSupportedLanguages(): PackedStringArray;
}
