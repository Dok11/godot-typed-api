import type { EditorResourcePicker, GodotArray, GodotDictionary, Node, float, int } from "../index.d.ts";
/**
 * Godot editor's control for selecting the `script` property of a `Node`.
 * 
 * Similar to `EditorResourcePicker` this `Control` node is used in the editor's Inspector dock, but only to edit the `script` property of a `Node`. Default options for creating new resources of all possible subtypes are replaced with dedicated buttons that open the "Attach Node Script" dialog. Can be used with `EditorInspectorPlugin` to recreate the same behavior.
 * 
 * **Note:** You must set the `script_owner` for the custom context menu items to work.
 */
export class EditorScriptPicker extends EditorResourcePicker {
/**
 * The owner `Node` of the script property that holds the edited resource.
 */
  scriptOwner: Node;
}
