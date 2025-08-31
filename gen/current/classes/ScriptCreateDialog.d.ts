import type { ConfirmationDialog, GodotArray, GodotDictionary, Script, Signal, float, int } from "../index.d.ts";
/**
 * Godot editor's popup dialog for creating new `Script` files.
 * 
 * The `ScriptCreateDialog` creates script files according to a given template for a given scripting language. The standard use is to configure its fields prior to calling one of the `Window.popup` methods.
 * 
 * 		```gdscript
 * 
 * 		func _ready():
 * 		    var dialog = ScriptCreateDialog.new();
 * 		    dialog.config("Node", "res://new_node.gd") # For in-engine types.
 * 		    dialog.config("\"res://base_node.gd\"", "res://derived_node.gd") # For script types.
 * 		    dialog.popup_centered()
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		public override void _Ready()
 * 		{
 * 		    var dialog = new ScriptCreateDialog();
 * 		    dialog.Config("Node", "res://NewNode.cs"); // For in-engine types.
 * 		    dialog.Config("\"res://BaseNode.cs\"", "res://DerivedNode.cs"); // For script types.
 * 		    dialog.PopupCentered();
 * 		}
 * 		
 * 
 * ```
 * 
 */
export class ScriptCreateDialog extends ConfirmationDialog {
  dialogHideOnOk: boolean;
  okButtonText: string;
  title: string;
/**
 * Prefills required fields to configure the ScriptCreateDialog for use.
 * @param inherits string
 * @param path string
 * @param builtInEnabled boolean (optional, default: true)
 * @param loadEnabled boolean (optional, default: true)
 */
  config(inherits: string, path: string, builtInEnabled?: boolean, loadEnabled?: boolean): void;
/**
 * Emitted when the user clicks the OK button.
 */
  scriptCreated: Signal<[script: Script]>;
}
