import type { EditorSyntaxHighlighter, GodotArray, GodotDictionary, PackedStringArray, PanelContainer, Script, ScriptEditorBase, Signal, float, int } from "../index.d.ts";
/**
 * Godot editor's script editor.
 * 
 * Godot editor's script editor.
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using `EditorInterface.get_script_editor`.
 */
export class ScriptEditor extends PanelContainer {
/**
 * Returns array of breakpoints.
 * @returns PackedStringArray
 */
  getBreakpoints(): PackedStringArray;
/**
 * Returns the `ScriptEditorBase` object that the user is currently editing.
 * @returns ScriptEditorBase
 */
  getCurrentEditor(): ScriptEditorBase;
/**
 * Returns a `Script` that is currently active in editor.
 * @returns Script
 */
  getCurrentScript(): Script;
/**
 * Returns an array with all `ScriptEditorBase` objects which are currently open in editor.
 * @returns ScriptEditorBase[]
 */
  getOpenScriptEditors(): ScriptEditorBase[];
/**
 * Returns an array with all `Script` objects which are currently open in editor.
 * @returns Script[]
 */
  getOpenScripts(): Script[];
/**
 * Opens help for the given topic. The `topic` is an encoded string that controls which class, method, constant, signal, annotation, property, or theme item should be focused.
 * The supported `topic` formats include `class_name:class`, `class_method:class:method`, `class_constant:class:constant`, `class_signal:class:signal`, `class_annotation:class:@annotation`, `class_property:class:property`, and `class_theme_item:class:item`, where `class` is the class name, `method` is the method name, `constant` is the constant name, `signal` is the signal name, `annotation` is the annotation name, `property` is the property name, and `item` is the theme item.
 * 
 * 				```gdscript
 * 
 * 				# Shows help for the Node class.
 * 				class_name:Node
 * 				# Shows help for the global min function.
 * 				# Global objects are accessible in the `@GlobalScope` namespace, shown here.
 * 				class_method:@GlobalScope:min
 * 				# Shows help for get_viewport in the Node class.
 * 				class_method:Node:get_viewport
 * 				# Shows help for the Input constant MOUSE_BUTTON_MIDDLE.
 * 				class_constant:Input:MOUSE_BUTTON_MIDDLE
 * 				# Shows help for the BaseButton signal pressed.
 * 				class_signal:BaseButton:pressed
 * 				# Shows help for the CanvasItem property visible.
 * 				class_property:CanvasItem:visible
 * 				# Shows help for the GDScript annotation export.
 * 				# Annotations should be prefixed with the `@` symbol in the descriptor, as shown here.
 * 				class_annotation:@GDScript:@export
 * 				# Shows help for the GraphNode theme item named panel_selected.
 * 				class_theme_item:GraphNode:panel_selected
 * 				
 * 
 * ```
 * @param topic string
 */
  gotoHelp(topic: string): void;
/**
 * Goes to the specified line in the current script.
 * @param lineNumber int
 */
  gotoLine(lineNumber: int): void;
/**
 * Opens the script create dialog. The script will extend `base_name`. The file extension can be omitted from `base_path`. It will be added based on the selected scripting language.
 * @param baseName string
 * @param basePath string
 */
  openScriptCreateDialog(baseName: string, basePath: string): void;
/**
 * Registers the `EditorSyntaxHighlighter` to the editor, the `EditorSyntaxHighlighter` will be available on all open scripts.
 * 
 * **Note:** Does not apply to scripts that are already opened.
 * @param syntaxHighlighter EditorSyntaxHighlighter
 */
  registerSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void;
/**
 * Unregisters the `EditorSyntaxHighlighter` from the editor.
 * 
 * **Note:** The `EditorSyntaxHighlighter` will still be applied to scripts that are already opened.
 * @param syntaxHighlighter EditorSyntaxHighlighter
 */
  unregisterSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void;
/**
 * Updates the documentation for the given `script` if the script's documentation is currently open.
 * 
 * **Note:** This should be called whenever the script is changed to keep the open documentation state up to date.
 * @param script Script
 */
  updateDocsFromScript(script: Script): void;
/**
 * Emitted when user changed active script. Argument is a freshly activated `Script`.
 */
  editorScriptChanged: Signal<[script: Script]>;
/**
 * Emitted when editor is about to close the active script. Argument is a `Script` that is going to be closed.
 */
  scriptClose: Signal<[script: Script]>;
}
