import type { Callable, ConfirmationDialog, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Godot editor's command palette.
 * 
 * Object that holds all the available Commands and their shortcuts text. These Commands can be accessed through **Editor > Command Palette** menu.
 * Command key names use slash delimiters to distinguish sections, for example: `"example/command1"` then `example` will be the section name.
 * 
 * 		```gdscript
 * 
 * 		var command_palette = EditorInterface.get_command_palette()
 * 		# external_command is a function that will be called with the command is executed.
 * 		var command_callable = Callable(self, "external_command").bind(arguments)
 * 		command_palette.add_command("command", "test/command",command_callable)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		EditorCommandPalette commandPalette = EditorInterface.Singleton.GetCommandPalette();
 * 		// ExternalCommand is a function that will be called with the command is executed.
 * 		Callable commandCallable = new Callable(this, MethodName.ExternalCommand);
 * 		commandPalette.AddCommand("command", "test/command", commandCallable)
 * 		
 * 
 * ```
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using `EditorInterface.get_command_palette`.
 */
export class EditorCommandPalette extends ConfirmationDialog {
  dialogHideOnOk: boolean;
/**
 * Adds a custom command to EditorCommandPalette.
 * - `command_name`: `String` (Name of the **Command**. This is displayed to the user.)
 * - `key_name`: `String` (Name of the key for a particular **Command**. This is used to uniquely identify the **Command**.)
 * - `binded_callable`: `Callable` (Callable of the **Command**. This will be executed when the **Command** is selected.)
 * - `shortcut_text`: `String` (Shortcut text of the **Command** if available.)
 * @param commandName string
 * @param keyName string
 * @param bindedCallable Callable
 * @param shortcutText string (optional, default: "None")
 */
  addCommand(commandName: string, keyName: string, bindedCallable: Callable, shortcutText?: string): void;
/**
 * Removes the custom command from EditorCommandPalette.
 * - `key_name`: `String` (Name of the key for a particular **Command**.)
 * @param keyName string
 */
  removeCommand(keyName: string): void;
}
