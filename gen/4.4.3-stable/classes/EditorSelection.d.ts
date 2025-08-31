import type { GodotArray, GodotDictionary, Node, Object, Signal, float, int } from "../index.d.ts";
/**
 * Manages the SceneTree selection in the editor.
 * 
 * This object manages the SceneTree selection in the editor.
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using `EditorInterface.get_selection`.
 */
export class EditorSelection extends Object {
/**
 * Adds a node to the selection.
 * 
 * **Note:** The newly selected node will not be automatically edited in the inspector. If you want to edit a node, use `EditorInterface.edit_node`.
 * @param node Node
 */
  addNode(node: Node): void;
/**
 * Clear the selection.
 */
  clear(): void;
/**
 * Returns the list of selected nodes.
 * @returns Node[]
 */
  getSelectedNodes(): Node[];
/**
 * Returns the list of selected nodes, optimized for transform operations (i.e. moving them, rotating, etc.). This list can be used to avoid situations where a node is selected and is also a child/grandchild.
 * @returns Node[]
 */
  getTransformableSelectedNodes(): Node[];
/**
 * Removes a node from the selection.
 * @param node Node
 */
  removeNode(node: Node): void;
/**
 * Emitted when the selection changes.
 */
  selectionChanged: Signal<[]>;
}
