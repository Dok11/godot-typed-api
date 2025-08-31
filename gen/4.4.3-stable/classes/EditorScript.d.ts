import type { EditorInterface, GodotArray, GodotDictionary, Node, RefCounted, float, int } from "../index.d.ts";
/**
 * Base script that can be used to add extension functions to the editor.
 * 
 * Scripts extending this class and implementing its `_run` method can be executed from the Script Editor's **File > Run** menu option (or by pressing `Ctrl + Shift + X`) while the editor is running. This is useful for adding custom in-editor functionality to Godot. For more complex additions, consider using `EditorPlugin`s instead.
 * 
 * **Note:** Extending scripts need to have `tool` mode enabled.
 * 
 * **Example:** Running the following script prints "Hello from the Godot Editor!":
 * 
 * 		```gdscript
 * 
 * 		@tool
 * 		extends EditorScript
 * 
 * 		func _run():
 * 		    print("Hello from the Godot Editor!")
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		using Godot;
 * 
 * 		`Tool`
 * 		public partial class HelloEditor : EditorScript
 * 		{
 * 		    public override void _Run()
 * 		    {
 * 		        GD.Print("Hello from the Godot Editor!");
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 * **Note:** The script is run in the Editor context, which means the output is visible in the console window started with the Editor (stdout) instead of the usual Godot **Output** dock.
 * 
 * **Note:** EditorScript is `RefCounted`, meaning it is destroyed when nothing references it. This can cause errors during asynchronous operations if there are no references to the script.
 */
export class EditorScript extends RefCounted {
/**
 * Makes `node` root of the currently opened scene. Only works if the scene is empty. If the `node` is a scene instance, an inheriting scene will be created.
 * @param node Node
 */
  addRootNode(node: Node): void;
/**
 * Returns the `EditorInterface` singleton instance.
 * @returns EditorInterface
 * @deprecated `EditorInterface` is a global singleton and can be accessed directly by its name.
 */
  getEditorInterface(): EditorInterface;
/**
 * Returns the edited (current) scene's root `Node`. Equivalent of `EditorInterface.get_edited_scene_root`.
 * @returns Node
 */
  getScene(): Node;
/**
 * This method is executed by the Editor when **File > Run** is used.
 */
  private run(): void;
}
