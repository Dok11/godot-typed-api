import type { GodotArray, GodotDictionary, Object, Signal, StringName, UndoRedo, Variant, float, int } from "../index.d.ts";
/**
 * Manages undo history of scenes opened in the editor.
 * 
 * `EditorUndoRedoManager` is a manager for `UndoRedo` objects associated with edited scenes. Each scene has its own undo history and `EditorUndoRedoManager` ensures that each action performed in the editor gets associated with a proper scene. For actions not related to scenes (`ProjectSettings` edits, external resources, etc.), a separate global history is used.
 * The usage is mostly the same as `UndoRedo`. You create and commit actions and the manager automatically decides under-the-hood what scenes it belongs to. The scene is deduced based on the first operation in an action, using the object from the operation. The rules are as follows:
 * - If the object is a `Node`, use the currently edited scene;
 * - If the object is a built-in resource, use the scene from its path;
 * - If the object is external resource or anything else, use global history.
 * This guessing can sometimes yield false results, so you can provide a custom context object when creating an action.
 * `EditorUndoRedoManager` is intended to be used by Godot editor plugins. You can obtain it using `EditorPlugin.get_undo_redo`. For non-editor uses or plugins that don't need to integrate with the editor's undo history, use `UndoRedo` instead.
 * The manager's API is mostly the same as in `UndoRedo`, so you can refer to its documentation for more examples. The main difference is that `EditorUndoRedoManager` uses object + method name for actions, instead of `Callable`.
 */
export class EditorUndoRedoManager extends Object {
/**
 * Register a method that will be called when the action is committed (i.e. the "do" action).
 * If this is the first operation, the `object` will be used to deduce target undo history.
 * @param object Object
 * @param method StringName
 */
  addDoMethod(object: Object, method: StringName): void;
/**
 * Register a property value change for "do".
 * If this is the first operation, the `object` will be used to deduce target undo history.
 * @param object Object
 * @param property StringName
 * @param value Variant
 */
  addDoProperty(object: Object, property: StringName, value: Variant): void;
/**
 * Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources.
 * @param object Object
 */
  addDoReference(object: Object): void;
/**
 * Register a method that will be called when the action is undone (i.e. the "undo" action).
 * If this is the first operation, the `object` will be used to deduce target undo history.
 * @param object Object
 * @param method StringName
 */
  addUndoMethod(object: Object, method: StringName): void;
/**
 * Register a property value change for "undo".
 * If this is the first operation, the `object` will be used to deduce target undo history.
 * @param object Object
 * @param property StringName
 * @param value Variant
 */
  addUndoProperty(object: Object, property: StringName, value: Variant): void;
/**
 * Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!).
 * @param object Object
 */
  addUndoReference(object: Object): void;
/**
 * Clears the given undo history. You can clear history for a specific scene, global history, or for all scenes at once if `id` is `INVALID_HISTORY`.
 * If `increase_version` is `true`, the undo history version will be increased, marking it as unsaved. Useful for operations that modify the scene, but don't support undo.
 * 
 * 				```gdscript
 * 
 * 				var scene_root = EditorInterface.get_edited_scene_root()
 * 				var undo_redo = EditorInterface.get_editor_undo_redo()
 * 				undo_redo.clear_history(undo_redo.get_object_history_id(scene_root))
 * 				
 * 
 * ```
 * 
 * **Note:** If you want to mark an edited scene as unsaved without clearing its history, use `EditorInterface.mark_scene_as_unsaved` instead.
 * @param id int (optional, default: -99)
 * @param increaseVersion boolean (optional, default: true)
 */
  clearHistory(id?: int, increaseVersion?: boolean): void;
/**
 * Commits the action. If `execute` is `true` (default), all "do" methods/properties are called/set when this function is called.
 * @param execute boolean (optional, default: true)
 */
  commitAction(execute?: boolean): void;
/**
 * Create a new action. After this is called, do all your calls to `add_do_method`, `add_undo_method`, `add_do_property`, and `add_undo_property`, then commit the action with `commit_action`.
 * The way actions are merged is dictated by the `merge_mode` argument. See `UndoRedo.MergeMode` for details.
 * If `custom_context` object is provided, it will be used for deducing target history (instead of using the first operation).
 * The way undo operation are ordered in actions is dictated by `backward_undo_ops`. When `backward_undo_ops` is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.
 * @param name string
 * @param mergeMode int (optional, default: 0)
 * @param customContext Object (optional, default: null)
 * @param backwardUndoOps boolean (optional, default: false)
 */
  createAction(name: string, mergeMode?: int, customContext?: Object, backwardUndoOps?: boolean): void;
/**
 * Forces the next operation (e.g. `add_do_method`) to use the action's history rather than guessing it from the object. This is sometimes needed when a history can't be correctly determined, like for a nested resource that doesn't have a path yet.
 * This method should only be used when absolutely necessary, otherwise it might cause invalid history state. For most of complex cases, the `custom_context` parameter of `create_action` is sufficient.
 */
  forceFixedHistory(): void;
/**
 * Returns the `UndoRedo` object associated with the given history `id`.
 * `id` above `0` are mapped to the opened scene tabs (but it doesn't match their order). `id` of `0` or lower have special meaning (see `SpecialHistory`).
 * Best used with `get_object_history_id`. This method is only provided in case you need some more advanced methods of `UndoRedo` (but keep in mind that directly operating on the `UndoRedo` object might affect editor's stability).
 * @param id int
 * @returns UndoRedo
 */
  getHistoryUndoRedo(id: int): UndoRedo;
/**
 * Returns the history ID deduced from the given `object`. It can be used with `get_history_undo_redo`.
 * @param object Object
 * @returns int
 */
  getObjectHistoryId(object: Object): int;
/**
 * Returns `true` if the `EditorUndoRedoManager` is currently committing the action, i.e. running its "do" method or property change (see `commit_action`).
 * @returns boolean
 */
  isCommittingAction(): boolean;
/**
 * Emitted when the list of actions in any history has changed, either when an action is committed or a history is cleared.
 */
  historyChanged: Signal<[]>;
/**
 * Emitted when the version of any history has changed as a result of undo or redo call.
 */
  versionChanged: Signal<[]>;
/**
 * Global history not associated with any scene, but with external resources etc.
 */
  static readonly GLOBAL_HISTORY: int;
/**
 * History associated with remote inspector. Used when live editing a running project.
 */
  static readonly REMOTE_HISTORY: int;
/**
 * Invalid "null" history. It's a special value, not associated with any object.
 */
  static readonly INVALID_HISTORY: int;
}
