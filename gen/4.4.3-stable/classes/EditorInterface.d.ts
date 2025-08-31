import type { Callable, Control, EditorCommandPalette, EditorFileSystem, EditorInspector, EditorPaths, EditorResourcePreview, EditorSelection, EditorSettings, EditorToaster, EditorUndoRedoManager, FileSystemDock, GodotArray, GodotDictionary, Mesh, Node, Object, PackedInt32Array, PackedStringArray, Rect2i, Resource, Script, ScriptEditor, StringName, SubViewport, Texture2D, Theme, VBoxContainer, Vector2i, Window, float, int } from "../index.d.ts";
/**
 * Godot editor's interface.
 * 
 * `EditorInterface` gives you control over Godot editor's window. It allows customizing the window, saving and (re-)loading scenes, rendering mesh previews, inspecting and editing resources and objects, and provides access to `EditorSettings`, `EditorFileSystem`, `EditorResourcePreview`, `ScriptEditor`, the editor viewport, and information about scenes.
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton directly by its name.
 * 
 * 		```gdscript
 * 
 * 		var editor_settings = EditorInterface.get_editor_settings()
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// In C# you can access it via the static Singleton property.
 * 		EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
 * 		
 * 
 * ```
 * 
 */
export class EditorInterface extends Object {
/**
 * If `true`, enables distraction-free mode which hides side docks to increase the space available for the main view.
 */
  distractionFreeMode: boolean;
/**
 * If `true`, the Movie Maker mode is enabled in the editor. See `MovieWriter` for more information.
 */
  movieMakerEnabled: boolean;
/**
 * Edits the given `Node`. The node will be also selected if it's inside the scene tree.
 * @param node Node
 */
  editNode(node: Node): void;
/**
 * Edits the given `Resource`. If the resource is a `Script` you can also edit it with `edit_script` to specify the line and column position.
 * @param resource Resource
 */
  editResource(resource: Resource): void;
/**
 * Edits the given `Script`. The line and column on which to open the script can also be specified. The script will be open with the user-configured editor for the script's language which may be an external editor.
 * @param script Script
 * @param line int (optional, default: -1)
 * @param column int (optional, default: 0)
 * @param grabFocus boolean (optional, default: true)
 */
  editScript(script: Script, line?: int, column?: int, grabFocus?: boolean): void;
/**
 * Returns the main container of Godot editor's window. For example, you can use it to retrieve the size of the container and place your controls accordingly.
 * 
 * **Warning:** Removing and freeing this node will render the editor useless and may cause a crash.
 * @returns Control
 */
  getBaseControl(): Control;
/**
 * Returns the editor's `EditorCommandPalette` instance.
 * 
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 * @returns EditorCommandPalette
 */
  getCommandPalette(): EditorCommandPalette;
/**
 * Returns the current directory being viewed in the `FileSystemDock`. If a file is selected, its base directory will be returned using `String.get_base_dir` instead.
 * @returns string
 */
  getCurrentDirectory(): string;
/**
 * Returns the name of the currently activated feature profile. If the default profile is currently active, an empty string is returned instead.
 * In order to get a reference to the `EditorFeatureProfile`, you must load the feature profile using `EditorFeatureProfile.load_from_file`.
 * 
 * **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using `EditorPaths.get_config_dir`.
 * @returns string
 */
  getCurrentFeatureProfile(): string;
/**
 * Returns the current path being viewed in the `FileSystemDock`.
 * @returns string
 */
  getCurrentPath(): string;
/**
 * Returns the edited (current) scene's root `Node`.
 * @returns Node
 */
  getEditedSceneRoot(): Node;
/**
 * Returns the editor control responsible for main screen plugins and tools. Use it with plugins that implement `EditorPlugin._has_main_screen`.
 * 
 * **Note:** This node is a `VBoxContainer`, which means that if you add a `Control` child to it, you need to set the child's `Control.size_flags_vertical` to `Control.SIZE_EXPAND_FILL` to make it use the full available space.
 * 
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 * @returns VBoxContainer
 */
  getEditorMainScreen(): VBoxContainer;
/**
 * Returns the `EditorPaths` singleton.
 * @returns EditorPaths
 */
  getEditorPaths(): EditorPaths;
/**
 * Returns the actual scale of the editor UI (`1.0` being 100% scale). This can be used to adjust position and dimensions of the UI added by plugins.
 * 
 * **Note:** This value is set via the `interface/editor/display_scale` and `interface/editor/custom_display_scale` editor settings. Editor must be restarted for changes to be properly applied.
 * @returns float
 */
  getEditorScale(): float;
/**
 * Returns the editor's `EditorSettings` instance.
 * @returns EditorSettings
 */
  getEditorSettings(): EditorSettings;
/**
 * Returns the editor's `Theme`.
 * 
 * **Note:** When creating custom editor UI, prefer accessing theme items directly from your GUI nodes using the `get_theme_*` methods.
 * @returns Theme
 */
  getEditorTheme(): Theme;
/**
 * Returns the editor's `EditorToaster`.
 * @returns EditorToaster
 */
  getEditorToaster(): EditorToaster;
/**
 * Returns the editor's `EditorUndoRedoManager`.
 * @returns EditorUndoRedoManager
 */
  getEditorUndoRedo(): EditorUndoRedoManager;
/**
 * Returns the 2D editor `SubViewport`. It does not have a camera. Instead, the view transforms are done directly and can be accessed with `Viewport.global_canvas_transform`.
 * @returns SubViewport
 */
  getEditorViewport2d(): SubViewport;
/**
 * Returns the specified 3D editor `SubViewport`, from `0` to `3`. The viewport can be used to access the active editor cameras with `Viewport.get_camera_3d`.
 * @param idx int (optional, default: 0)
 * @returns SubViewport
 */
  getEditorViewport3d(idx?: int): SubViewport;
/**
 * Returns the editor's `FileSystemDock` instance.
 * 
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 * @returns FileSystemDock
 */
  getFileSystemDock(): FileSystemDock;
/**
 * Returns the editor's `EditorInspector` instance.
 * 
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 * @returns EditorInspector
 */
  getInspector(): EditorInspector;
/**
 * Returns an `Array` with the file paths of the currently opened scenes.
 * @returns PackedStringArray
 */
  getOpenScenes(): PackedStringArray;
/**
 * Returns the name of the scene that is being played. If no scene is currently being played, returns an empty string.
 * @returns string
 */
  getPlayingScene(): string;
/**
 * Returns the editor's `EditorFileSystem` instance.
 * @returns EditorFileSystem
 */
  getResourceFilesystem(): EditorFileSystem;
/**
 * Returns the editor's `EditorResourcePreview` instance.
 * @returns EditorResourcePreview
 */
  getResourcePreviewer(): EditorResourcePreview;
/**
 * Returns the editor's `ScriptEditor` instance.
 * 
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 * @returns ScriptEditor
 */
  getScriptEditor(): ScriptEditor;
/**
 * Returns an array containing the paths of the currently selected files (and directories) in the `FileSystemDock`.
 * @returns PackedStringArray
 */
  getSelectedPaths(): PackedStringArray;
/**
 * Returns the editor's `EditorSelection` instance.
 * @returns EditorSelection
 */
  getSelection(): EditorSelection;
/**
 * Shows the given property on the given `object` in the editor's Inspector dock. If `inspector_only` is `true`, plugins will not attempt to edit `object`.
 * @param object Object
 * @param forProperty string (optional, default: "")
 * @param inspectorOnly boolean (optional, default: false)
 */
  inspectObject(object: Object, forProperty?: string, inspectorOnly?: boolean): void;
/**
 * Returns `true` if multiple window support is enabled in the editor. Multiple window support is enabled if *all* of these statements are true:
 * - `EditorSettings.interface/multi_window/enable` is `true`.
 * - `EditorSettings.interface/editor/single_window_mode` is `false`.
 * - `Viewport.gui_embed_subwindows` is `false`. This is forced to `true` on platforms that don't support multiple windows such as Web, or when the `--single-window` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html) is used.
 * @returns boolean
 */
  isMultiWindowEnabled(): boolean;
/**
 * Returns `true` if a scene is currently being played, `false` otherwise. Paused scenes are considered as being played.
 * @returns boolean
 */
  isPlayingScene(): boolean;
/**
 * Returns `true` if the specified `plugin` is enabled. The plugin name is the same as its directory name.
 * @param plugin string
 * @returns boolean
 */
  isPluginEnabled(plugin: string): boolean;
/**
 * Returns mesh previews rendered at the given size as an `Array` of `Texture2D`s.
 * @param meshes Mesh[]
 * @param previewSize int
 * @returns Texture2D[]
 */
  makeMeshPreviews(meshes: Mesh[], previewSize: int): Texture2D[];
/**
 * Marks the current scene tab as unsaved.
 */
  markSceneAsUnsaved(): void;
/**
 * Opens the scene at the given path. If `set_inherited` is `true`, creates a new inherited scene.
 * @param sceneFilepath string
 * @param setInherited boolean (optional, default: false)
 */
  openSceneFromPath(sceneFilepath: string, setInherited?: boolean): void;
/**
 * Plays the currently active scene.
 */
  playCurrentScene(): void;
/**
 * Plays the scene specified by its filepath.
 * @param sceneFilepath string
 */
  playCustomScene(sceneFilepath: string): void;
/**
 * Plays the main scene.
 */
  playMainScene(): void;
/**
 * Pops up an editor dialog for creating an object.
 * The `callback` must take a single argument of type `StringName` which will contain the type name of the selected object or be empty if no item is selected.
 * The `base_type` specifies the base type of objects to display. For example, if you set this to "Resource", all types derived from `Resource` will display in the create dialog.
 * The `current_type` will be passed in the search box of the create dialog, and the specified type can be immediately selected when the dialog pops up. If the `current_type` is not derived from `base_type`, there will be no result of the type in the dialog.
 * The `dialog_title` allows you to define a custom title for the dialog. This is useful if you want to accurately hint the usage of the dialog. If the `dialog_title` is an empty string, the dialog will use "Create New 'Base Type'" as the default title.
 * The `type_blocklist` contains a list of type names, and the types in the blocklist will be hidden from the create dialog.
 * 
 * **Note:** Trying to list the base type in the `type_blocklist` will hide all types derived from the base type from the create dialog.
 * @param callback Callable
 * @param baseType StringName (optional, default: "")
 * @param currentType string (optional, default: "")
 * @param dialogTitle string (optional, default: "")
 * @param typeBlocklist StringName[] (optional, default: [])
 */
  popupCreateDialog(callback: Callable, baseType?: StringName, currentType?: string, dialogTitle?: string, typeBlocklist?: StringName[]): void;
/**
 * Pops up the `dialog` in the editor UI with `Window.popup_exclusive`. The dialog must have no current parent, otherwise the method fails.
 * See also `Window.set_unparent_when_invisible`.
 * @param dialog Window
 * @param rect Rect2i (optional, default: Rect2i(0, 0, 0, 0))
 */
  popupDialog(dialog: Window, rect?: Rect2i): void;
/**
 * Pops up the `dialog` in the editor UI with `Window.popup_exclusive_centered`. The dialog must have no current parent, otherwise the method fails.
 * See also `Window.set_unparent_when_invisible`.
 * @param dialog Window
 * @param minsize Vector2i (optional, default: Vector2i(0, 0))
 */
  popupDialogCentered(dialog: Window, minsize?: Vector2i): void;
/**
 * Pops up the `dialog` in the editor UI with `Window.popup_exclusive_centered_clamped`. The dialog must have no current parent, otherwise the method fails.
 * See also `Window.set_unparent_when_invisible`.
 * @param dialog Window
 * @param minsize Vector2i (optional, default: Vector2i(0, 0))
 * @param fallbackRatio float (optional, default: 0.75)
 */
  popupDialogCenteredClamped(dialog: Window, minsize?: Vector2i, fallbackRatio?: float): void;
/**
 * Pops up the `dialog` in the editor UI with `Window.popup_exclusive_centered_ratio`. The dialog must have no current parent, otherwise the method fails.
 * See also `Window.set_unparent_when_invisible`.
 * @param dialog Window
 * @param ratio float (optional, default: 0.8)
 */
  popupDialogCenteredRatio(dialog: Window, ratio?: float): void;
/**
 * Pops up an editor dialog for selecting a method from `object`. The `callback` must take a single argument of type `String` which will contain the name of the selected method or be empty if the dialog is canceled. If `current_value` is provided, the method will be selected automatically in the method list, if it exists.
 * @param object Object
 * @param callback Callable
 * @param currentValue string (optional, default: "")
 */
  popupMethodSelector(object: Object, callback: Callable, currentValue?: string): void;
/**
 * Pops up an editor dialog for selecting a `Node` from the edited scene. The `callback` must take a single argument of type `NodePath`. It is called on the selected `NodePath` or the empty path `^""` if the dialog is canceled. If `valid_types` is provided, the dialog will only show Nodes that match one of the listed Node types. If `current_value` is provided, the Node will be automatically selected in the tree, if it exists.
 * 
 * **Example:** Display the node selection dialog as soon as this node is added to the tree for the first time:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    if Engine.is_editor_hint():
 * 				        EditorInterface.popup_node_selector(_on_node_selected, ["Button"])
 * 
 * 				func _on_node_selected(node_path):
 * 				    if node_path.is_empty():
 * 				        print("node selection canceled")
 * 				    else:
 * 				        print("selected ", node_path)
 * 				
 * 
 * ```
 * @param callback Callable
 * @param validTypes StringName[] (optional, default: [])
 * @param currentValue Node (optional, default: null)
 */
  popupNodeSelector(callback: Callable, validTypes?: StringName[], currentValue?: Node): void;
/**
 * Pops up an editor dialog for selecting properties from `object`. The `callback` must take a single argument of type `NodePath`. It is called on the selected property path (see `NodePath.get_as_property_path`) or the empty path `^""` if the dialog is canceled. If `type_filter` is provided, the dialog will only show properties that match one of the listed `Variant.Type` values. If `current_value` is provided, the property will be selected automatically in the property list, if it exists.
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    if Engine.is_editor_hint():
 * 				        EditorInterface.popup_property_selector(this, _on_property_selected, `TYPE_INT`)
 * 
 * 				func _on_property_selected(property_path):
 * 				    if property_path.is_empty():
 * 				        print("property selection canceled")
 * 				    else:
 * 				        print("selected ", property_path)
 * 				
 * 
 * ```
 * @param object Object
 * @param callback Callable
 * @param typeFilter PackedInt32Array (optional, default: PackedInt32Array())
 * @param currentValue string (optional, default: "")
 */
  popupPropertySelector(object: Object, callback: Callable, typeFilter?: PackedInt32Array, currentValue?: string): void;
/**
 * Pops up an editor dialog for quick selecting a resource file. The `callback` must take a single argument of type `String` which will contain the path of the selected resource or be empty if the dialog is canceled. If `base_types` is provided, the dialog will only show resources that match these types. Only types deriving from `Resource` are supported.
 * @param callback Callable
 * @param baseTypes StringName[] (optional, default: [])
 */
  popupQuickOpen(callback: Callable, baseTypes?: StringName[]): void;
/**
 * Reloads the scene at the given path.
 * @param sceneFilepath string
 */
  reloadSceneFromPath(sceneFilepath: string): void;
/**
 * Restarts the editor. This closes the editor and then opens the same project. If `save` is `true`, the project will be saved before restarting.
 * @param save boolean (optional, default: true)
 */
  restartEditor(save?: boolean): void;
/**
 * Saves all opened scenes in the editor.
 */
  saveAllScenes(): void;
/**
 * Saves the currently active scene. Returns either `OK` or `ERR_CANT_CREATE`.
 * @returns int
 */
  saveScene(): int;
/**
 * Saves the currently active scene as a file at `path`.
 * @param path string
 * @param withPreview boolean (optional, default: true)
 */
  saveSceneAs(path: string, withPreview?: boolean): void;
/**
 * Selects the file, with the path provided by `file`, in the FileSystem dock.
 * @param file string
 */
  selectFile(file: string): void;
/**
 * Selects and activates the specified feature profile with the given `profile_name`. Set `profile_name` to an empty string to reset to the default feature profile.
 * A feature profile can be created programmatically using the `EditorFeatureProfile` class.
 * 
 * **Note:** The feature profile that gets activated must be located in the `feature_profiles` directory, as a file with the `.profile` extension. If a profile could not be found, an error occurs. The editor configuration folder can be found by using `EditorPaths.get_config_dir`.
 * @param profileName string
 */
  setCurrentFeatureProfile(profileName: string): void;
/**
 * Sets the editor's current main screen to the one specified in `name`. `name` must match the title of the tab in question exactly (e.g. `2D`, `3D`, [code skip-lint]Script[/code], or `AssetLib` for default tabs).
 * @param name string
 */
  setMainScreenEditor(name: string): void;
/**
 * Sets the enabled status of a plugin. The plugin name is the same as its directory name.
 * @param plugin string
 * @param enabled boolean
 */
  setPluginEnabled(plugin: string, enabled: boolean): void;
/**
 * Stops the scene that is currently playing.
 */
  stopPlayingScene(): void;
}
