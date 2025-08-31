import type { GodotArray, GodotDictionary, MainLoop, MultiplayerAPI, Node, NodePath, Object, PackedScene, SceneTreeTimer, Signal, StringName, Tween, Variant, Window, float, int } from "../index.d.ts";
/**
 * Manages the game loop via a hierarchy of nodes.
 * 
 * As one of the most important classes, the `SceneTree` manages the hierarchy of nodes in a scene, as well as scenes themselves. Nodes can be added, fetched and removed. The whole scene tree (and thus the current scene) can be paused. Scenes can be loaded, switched and reloaded.
 * You can also use the `SceneTree` to organize your nodes into **groups**: every node can be added to as many groups as you want to create, e.g. an "enemy" group. You can then iterate these groups or even call methods and set properties on all the nodes belonging to any given group.
 * `SceneTree` is the default `MainLoop` implementation used by the engine, and is thus in charge of the game loop.
 */
export class SceneTree extends MainLoop {
/**
 * If `true`, the application automatically accepts quitting requests.
 * For mobile platforms, see `quit_on_go_back`.
 */
  autoAcceptQuit: boolean;
/**
 * The root node of the currently loaded main scene, usually as a direct child of `root`. See also `change_scene_to_file`, `change_scene_to_packed`, and `reload_current_scene`.
 * 
 * **Warning:** Setting this property directly may not work as expected, as it does *not* add or remove any nodes from this tree.
 */
  currentScene: Node;
/**
 * If `true`, collision shapes will be visible when running the game from the editor for debugging purposes.
 * 
 * **Note:** This property is not designed to be changed at run-time. Changing the value of `debug_collisions_hint` while the project is running will not have the desired effect.
 */
  debugCollisionsHint: boolean;
/**
 * If `true`, navigation polygons will be visible when running the game from the editor for debugging purposes.
 * 
 * **Note:** This property is not designed to be changed at run-time. Changing the value of `debug_navigation_hint` while the project is running will not have the desired effect.
 */
  debugNavigationHint: boolean;
/**
 * If `true`, curves from `Path2D` and `Path3D` nodes will be visible when running the game from the editor for debugging purposes.
 * 
 * **Note:** This property is not designed to be changed at run-time. Changing the value of `debug_paths_hint` while the project is running will not have the desired effect.
 */
  debugPathsHint: boolean;
/**
 * The root of the scene currently being edited in the editor. This is usually a direct child of `root`.
 * 
 * **Note:** This property does nothing in release builds.
 */
  editedSceneRoot: Node;
/**
 * If `true` (default value), enables automatic polling of the `MultiplayerAPI` for this SceneTree during `process_frame`.
 * If `false`, you need to manually call `MultiplayerAPI.poll` to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual `Mutex` protection when accessing the `MultiplayerAPI` from threads.
 */
  multiplayerPoll: boolean;
/**
 * If `true`, the scene tree is considered paused. This causes the following behavior:
 * - 2D and 3D physics will be stopped, as well as collision detection and related signals.
 * - Depending on each node's `Node.process_mode`, their `Node._process`, `Node._physics_process` and `Node._input` callback methods may not called anymore.
 */
  paused: boolean;
/**
 * If `true`, the renderer will interpolate the transforms of physics objects between the last two transforms, so that smooth motion is seen even when physics ticks do not coincide with rendered frames.
 * The default value of this property is controlled by `ProjectSettings.physics/common/physics_interpolation`.
 */
  physicsInterpolation: boolean;
/**
 * If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).
 * To handle 'Go Back' button when this option is disabled, use `DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST`.
 */
  quitOnGoBack: boolean;
/**
 * The tree's root `Window`. This is top-most `Node` of the scene tree, and is always present. An absolute `NodePath` always starts from this node. Children of the root node may include the loaded `current_scene`, as well as any AutoLoad (https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html) configured in the Project Settings.
 * 
 * **Warning:** Do not delete this node. This will result in unstable behavior, followed by a crash.
 */
  root: Window;
/**
 * Calls `method` on each node inside this tree added to the given `group`. You can pass arguments to `method` by specifying them at the end of this method call. Nodes that cannot call `method` (either because the method doesn't exist or the arguments do not match) are ignored. See also `set_group` and `notify_group`.
 * 
 * **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.
 * 
 * **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new `StringName` on each call.
 * @param group StringName
 * @param method StringName
 */
  callGroup(group: StringName, method: StringName): void;
/**
 * Calls the given `method` on each node inside this tree added to the given `group`. Use `flags` to customize this method's behavior (see `GroupCallFlags`). Additional arguments for `method` can be passed at the end of this method. Nodes that cannot call `method` (either because the method doesn't exist or the arguments do not match) are ignored.
 * 
 * 				```gdscript
 * 
 * 				# Calls "hide" to all nodes of the "enemies" group, at the end of the frame and in reverse tree order.
 * 				get_tree().call_group_flags(
 * 				        SceneTree.GROUP_CALL_DEFERRED | SceneTree.GROUP_CALL_REVERSE,
 * 				        "enemies", "hide")
 * 				
 * 
 * ```
 * 
 * **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new `StringName` on each call.
 * @param flags int
 * @param group StringName
 * @param method StringName
 */
  callGroupFlags(flags: int, group: StringName, method: StringName): void;
/**
 * Changes the running scene to the one at the given `path`, after loading it into a `PackedScene` and creating a new instance.
 * Returns `OK` on success, `ERR_CANT_OPEN` if the `path` cannot be loaded into a `PackedScene`, or `ERR_CANT_CREATE` if that scene cannot be instantiated.
 * 
 * **Note:** See `change_scene_to_packed` for details on the order of operations.
 * @param path string
 * @returns int
 */
  changeSceneToFile(path: string): int;
/**
 * Changes the running scene to a new instance of the given `PackedScene` (which must be valid).
 * Returns `OK` on success, `ERR_CANT_CREATE` if the scene cannot be instantiated, or `ERR_INVALID_PARAMETER` if the scene is invalid.
 * 
 * **Note:** Operations happen in the following order when `change_scene_to_packed` is called:
 * 1. The current scene node is immediately removed from the tree. From that point, `Node.get_tree` called on the current (outgoing) scene will return `null`. `current_scene` will be `null`, too, because the new scene is not available yet.
 * 2. At the end of the frame, the formerly current scene, already removed from the tree, will be deleted (freed from memory) and then the new scene will be instantiated and added to the tree. `Node.get_tree` and `current_scene` will be back to working as usual.
 * This ensures that both scenes aren't running at the same time, while still freeing the previous scene in a safe way similar to `Node.queue_free`.
 * @param packedScene PackedScene
 * @returns int
 */
  changeSceneToPacked(packedScene: PackedScene): int;
/**
 * Returns a new `SceneTreeTimer`. After `time_sec` in seconds have passed, the timer will emit `SceneTreeTimer.timeout` and will be automatically freed.
 * If `process_always` is `false`, the timer will be paused when setting `SceneTree.paused` to `true`.
 * If `process_in_physics` is `true`, the timer will update at the end of the physics frame, instead of the process frame.
 * If `ignore_time_scale` is `true`, the timer will ignore `Engine.time_scale` and update with the real, elapsed time.
 * This method is commonly used to create a one-shot delay timer, as in the following example:
 * 
 * 				```gdscript
 * 
 * 				func some_function():
 * 				    print("start")
 * 				    await get_tree().create_timer(1.0).timeout
 * 				    print("end")
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public async Task SomeFunction()
 * 				{
 * 				    GD.Print("start");
 * 				    await ToSignal(GetTree().CreateTimer(1.0f), SceneTreeTimer.SignalName.Timeout);
 * 				    GD.Print("end");
 * 				}
 * 				
 * 
 * ```
 * 
 * **Note:** The timer is always updated *after* all of the nodes in the tree. A node's `Node._process` method would be called before the timer updates (or `Node._physics_process` if `process_in_physics` is set to `true`).
 * @param timeSec float
 * @param processAlways boolean (optional, default: true)
 * @param processInPhysics boolean (optional, default: false)
 * @param ignoreTimeScale boolean (optional, default: false)
 * @returns SceneTreeTimer
 */
  createTimer(timeSec: float, processAlways?: boolean, processInPhysics?: boolean, ignoreTimeScale?: boolean): SceneTreeTimer;
/**
 * Creates and returns a new `Tween` processed in this tree. The Tween will start automatically on the next process frame or physics frame (depending on its `Tween.TweenProcessMode`).
 * 
 * **Note:** A `Tween` created using this method is not bound to any `Node`. It may keep working until there is nothing left to animate. If you want the `Tween` to be automatically killed when the `Node` is freed, use `Node.create_tween` or `Tween.bind_node`.
 * @returns Tween
 */
  createTween(): Tween;
/**
 * Returns the first `Node` found inside the tree, that has been added to the given `group`, in scene hierarchy order. Returns `null` if no match is found. See also `get_nodes_in_group`.
 * @param group StringName
 * @returns Node
 */
  getFirstNodeInGroup(group: StringName): Node;
/**
 * Returns how many frames have been processed, since the application started. This is *not* a measurement of elapsed time.
 * @returns int
 */
  getFrame(): int;
/**
 * Searches for the `MultiplayerAPI` configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See `set_multiplayer`.
 * @param forPath NodePath (optional, default: NodePath(""))
 * @returns MultiplayerAPI
 */
  getMultiplayer(forPath?: NodePath): MultiplayerAPI;
/**
 * Returns the number of nodes inside this tree.
 * @returns int
 */
  getNodeCount(): int;
/**
 * Returns the number of nodes assigned to the given group.
 * @param group StringName
 * @returns int
 */
  getNodeCountInGroup(group: StringName): int;
/**
 * Returns an `Array` containing all nodes inside this tree, that have been added to the given `group`, in scene hierarchy order.
 * @param group StringName
 * @returns Node[]
 */
  getNodesInGroup(group: StringName): Node[];
/**
 * Returns an `Array` of currently existing `Tween`s in the tree, including paused tweens.
 * @returns Tween[]
 */
  getProcessedTweens(): Tween[];
/**
 * Returns `true` if a node added to the given group `name` exists in the tree.
 * @param name StringName
 * @returns boolean
 */
  hasGroup(name: StringName): boolean;
/**
 * Calls `Object.notification` with the given `notification` to all nodes inside this tree added to the `group`. See also Godot notifications (https://docs.godotengine.org/en/stable/tutorials/best_practices/godot_notifications.html) and `call_group` and `set_group`.
 * 
 * **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.
 * @param group StringName
 * @param notification int
 */
  notifyGroup(group: StringName, notification: int): void;
/**
 * Calls `Object.notification` with the given `notification` to all nodes inside this tree added to the `group`. Use `call_flags` to customize this method's behavior (see `GroupCallFlags`).
 * @param callFlags int
 * @param group StringName
 * @param notification int
 */
  notifyGroupFlags(callFlags: int, group: StringName, notification: int): void;
/**
 * Queues the given `obj` to be deleted, calling its `Object.free` at the end of the current frame. This method is similar to `Node.queue_free`.
 * @param obj Object
 */
  queueDelete(obj: Object): void;
/**
 * Quits the application at the end of the current iteration, with the given `exit_code`.
 * By convention, an exit code of `0` indicates success, whereas any other exit code indicates an error. For portability reasons, it should be between `0` and `125` (inclusive).
 * 
 * **Note:** On iOS this method doesn't work. Instead, as recommended by the iOS Human Interface Guidelines (https://developer.apple.com/library/archive/qa/qa1561/_index.html), the user is expected to close apps via the Home button.
 * @param exitCode int (optional, default: 0)
 */
  quit(exitCode?: int): void;
/**
 * Reloads the currently active scene, replacing `current_scene` with a new instance of its original `PackedScene`.
 * Returns `OK` on success, `ERR_UNCONFIGURED` if no `current_scene` is defined, `ERR_CANT_OPEN` if `current_scene` cannot be loaded into a `PackedScene`, or `ERR_CANT_CREATE` if the scene cannot be instantiated.
 * @returns int
 */
  reloadCurrentScene(): int;
/**
 * Sets the given `property` to `value` on all nodes inside this tree added to the given `group`. Nodes that do not have the `property` are ignored. See also `call_group` and `notify_group`.
 * 
 * **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.
 * 
 * **Note:** In C#, `property` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new `StringName` on each call.
 * @param group StringName
 * @param property string
 * @param value Variant
 */
  setGroup(group: StringName, property: string, value: Variant): void;
/**
 * Sets the given `property` to `value` on all nodes inside this tree added to the given `group`. Nodes that do not have the `property` are ignored. Use `call_flags` to customize this method's behavior (see `GroupCallFlags`).
 * 
 * **Note:** In C#, `property` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new `StringName` on each call.
 * @param callFlags int
 * @param group StringName
 * @param property string
 * @param value Variant
 */
  setGroupFlags(callFlags: int, group: StringName, property: string, value: Variant): void;
/**
 * Sets a custom `MultiplayerAPI` with the given `root_path` (controlling also the relative subpaths), or override the default one if `root_path` is empty.
 * 
 * **Note:** No `MultiplayerAPI` must be configured for the subpath containing `root_path`, nested custom multiplayers are not allowed. I.e. if one is configured for `"/root/Foo"` setting one for `"/root/Foo/Bar"` will cause an error.
 * @param multiplayer MultiplayerAPI
 * @param rootPath NodePath (optional, default: NodePath(""))
 */
  setMultiplayer(multiplayer: MultiplayerAPI, rootPath?: NodePath): void;
/**
 * If a current scene is loaded, calling this method will unload it.
 */
  unloadCurrentScene(): void;
/**
 * Emitted when the `node` enters this tree.
 */
  nodeAdded: Signal<[node: Node]>;
/**
 * Emitted when the `node`'s `Node.update_configuration_warnings` is called. Only emitted in the editor.
 */
  nodeConfigurationWarningChanged: Signal<[node: Node]>;
/**
 * Emitted when the `node` exits this tree.
 */
  nodeRemoved: Signal<[node: Node]>;
/**
 * Emitted when the `node`'s `Node.name` is changed.
 */
  nodeRenamed: Signal<[node: Node]>;
/**
 * Emitted immediately before `Node._physics_process` is called on every node in this tree.
 */
  physicsFrame: Signal<[]>;
/**
 * Emitted immediately before `Node._process` is called on every node in this tree.
 */
  processFrame: Signal<[]>;
/**
 * Emitted any time the tree's hierarchy changes (nodes being moved, renamed, etc.).
 */
  treeChanged: Signal<[]>;
/**
 * Emitted when the `Node.process_mode` of any node inside the tree is changed. Only emitted in the editor, to update the visibility of disabled nodes.
 */
  treeProcessModeChanged: Signal<[]>;
/**
 * Call nodes within a group with no special behavior (default).
 */
  static readonly GROUP_CALL_DEFAULT: int;
/**
 * Call nodes within a group in reverse tree hierarchy order (all nested children are called before their respective parent nodes).
 */
  static readonly GROUP_CALL_REVERSE: int;
/**
 * Call nodes within a group at the end of the current frame (can be either process or physics frame), similar to `Object.call_deferred`.
 */
  static readonly GROUP_CALL_DEFERRED: int;
/**
 * Call nodes within a group only once, even if the call is executed many times in the same frame. Must be combined with `GROUP_CALL_DEFERRED` to work.
 * 
 * **Note:** Different arguments are not taken into account. Therefore, when the same call is executed with different arguments, only the first call will be performed.
 */
  static readonly GROUP_CALL_UNIQUE: int;
}
