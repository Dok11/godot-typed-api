import type { Color, GodotArray, GodotDictionary, InputEvent, PackedStringArray, Resource, Signal, StringName, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * Object that holds the project-independent editor settings.
 * 
 * Object that holds the project-independent editor settings. These settings are generally visible in the **Editor > Editor Settings** menu.
 * Property names use slash delimiters to distinguish sections. Setting values can be of any `Variant` type. It's recommended to use `snake_case` for editor settings to be consistent with the Godot editor itself.
 * Accessing the settings can be done using the following methods, such as:
 * 
 * 		```gdscript
 * 
 * 		var settings = EditorInterface.get_editor_settings()
 * 		# `settings.set("some/property", 10)` also works as this class overrides `_set()` internally.
 * 		settings.set_setting("some/property", 10)
 * 		# `settings.get("some/property")` also works as this class overrides `_get()` internally.
 * 		settings.get_setting("some/property")
 * 		var list_of_settings = settings.get_property_list()
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
 * 		// `settings.set("some/property", value)` also works as this class overrides `_set()` internally.
 * 		settings.SetSetting("some/property", Value);
 * 		// `settings.get("some/property", value)` also works as this class overrides `_get()` internally.
 * 		settings.GetSetting("some/property");
 * 		Godot.Collections.Array<Godot.Collections.Dictionary> listOfSettings = settings.GetPropertyList();
 * 		
 * 
 * ```
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using `EditorInterface.get_editor_settings`.
 */
export class EditorSettings extends Resource {
/**
 * If `true`, the Asset Library uses multiple threads for its HTTP requests. This prevents the Asset Library from blocking the main thread for every loaded asset.
 */
  assetLibraryUseThreads: boolean;
/**
 * If `true`, automatically switches to the **Remote** scene tree when running the project from the editor. If `false`, stays on the **Local** scene tree when running the project from the editor.
 * 
 * **Warning:** Enabling this setting can cause stuttering when running a project with a large amount of nodes (typically a few thousands of nodes or more), even if the editor window isn't focused. This is due to the remote scene tree being updated every second regardless of whether the editor is focused.
 */
  debuggerAutoSwitchToRemoteSceneTree: boolean;
/**
 * If `true`, automatically switches to the **Stack Trace** panel when the debugger hits a breakpoint or steps.
 */
  debuggerAutoSwitchToStackTrace: boolean;
/**
 * If `true`, enables collection of profiling data from non-GDScript Godot functions, such as engine class methods. Enabling this slows execution while profiling further.
 */
  debuggerProfileNativeCalls: boolean;
/**
 * The size of the profiler's frame history. The default value (3600) allows seeing up to 60 seconds of profiling if the project renders at a constant 60 FPS. Higher values allow viewing longer periods of profiling in the graphs, especially when the project is running at high framerates.
 */
  debuggerProfilerFrameHistorySize: int;
/**
 * The maximum number of script functions that can be displayed per frame in the profiler. If there are more script functions called in a given profiler frame, these functions will be discarded from the profiling results entirely.
 * 
 * **Note:** This setting is only read when the profiler is first started, so changing it during profiling will have no effect.
 */
  debuggerProfilerFrameMaxFunctions: int;
/**
 * The target frame rate shown in the visual profiler graph, in frames per second.
 */
  debuggerProfilerTargetFps: int;
/**
 * The refresh interval for the remote inspector's properties (in seconds). Lower values are more reactive, but may cause stuttering while the project is running from the editor and the **Remote** scene tree is selected in the Scene tree dock.
 */
  debuggerRemoteInspectRefreshInterval: float;
/**
 * The refresh interval for the remote scene tree (in seconds). Lower values are more reactive, but may cause stuttering while the project is running from the editor and the **Remote** scene tree is selected in the Scene tree dock.
 */
  debuggerRemoteSceneTreeRefreshInterval: float;
/**
 * If `true`, displays folders in the FileSystem dock's bottom pane when split mode is enabled. If `false`, only files will be displayed in the bottom pane. Split mode can be toggled by pressing the icon next to the `res://` folder path.
 * 
 * **Note:** This setting has no effect when split mode is disabled (which is the default).
 */
  docksFilesystemAlwaysShowFolders: boolean;
/**
 * A comma separated list of unsupported file extensions to show in the FileSystem dock, e.g. `"ico,icns"`.
 */
  docksFilesystemOtherFileExtensions: string;
/**
 * A comma separated list of file extensions to consider as editable text files in the FileSystem dock (by double-clicking on the files), e.g. `"txt,md,cfg,ini,log,json,yml,yaml,toml,xml"`.
 */
  docksFilesystemTextfileExtensions: string;
/**
 * The thumbnail size to use in the FileSystem dock (in pixels). See also `filesystem/file_dialog/thumbnail_size`.
 */
  docksFilesystemThumbnailSize: int;
/**
 * The refresh interval to use for the Inspector dock's properties. The effect of this setting is mainly noticeable when adjusting gizmos in the 2D/3D editor and looking at the inspector at the same time. Lower values make the inspector refresh more often, but take up more CPU time.
 */
  docksPropertyEditorAutoRefreshInterval: float;
/**
 * The tint intensity to use for the subresources background in the Inspector dock. The tint is used to distinguish between different subresources in the inspector. Higher values result in a more noticeable background color difference.
 */
  docksPropertyEditorSubresourceHueTint: float;
/**
 * If `true`, when a node is deleted with animation tracks referencing it, a confirmation dialog appears before the tracks are deleted. The dialog will appear even when using the "Delete (No Confirm)" shortcut.
 */
  docksSceneTreeAskBeforeDeletingRelatedAnimationTracks: boolean;
/**
 * If `true`, displays a confirmation dialog after left-clicking the "percent" icon next to a node name in the Scene tree dock. When clicked, this icon revokes the node's scene-unique name, which can impact the behavior of scripts that rely on this scene-unique name due to identifiers not being found anymore.
 */
  docksSceneTreeAskBeforeRevokingUniqueName: boolean;
/**
 * If `true`, the scene tree dock will automatically unfold nodes when a node that has folded parents is selected.
 */
  docksSceneTreeAutoExpandToSelected: boolean;
/**
 * If `true`, new node created when reparenting node(s) will be positioned at the average position of the selected node(s).
 */
  docksSceneTreeCenterNodeOnReparent: boolean;
/**
 * If `true`, the scene tree dock will only show nodes that match the filter, without showing parents that don't. This settings can also be changed in the Scene dock's top menu.
 */
  docksSceneTreeHideFilteredOutParents: boolean;
/**
 * If `true`, the Create dialog (Create New Node/Create New Resource) will start with all its sections expanded. Otherwise, sections will be collapsed until the user starts searching (which will automatically expand sections as needed).
 */
  docksSceneTreeStartCreateDialogFullyExpanded: boolean;
/**
 * The "start" stop of the color gradient to use for bones in the 2D skeleton editor.
 */
  editors2dBoneColor1: Color;
/**
 * The "end" stop of the color gradient to use for bones in the 2D skeleton editor.
 */
  editors2dBoneColor2: Color;
/**
 * The color to use for inverse kinematics-enabled bones in the 2D skeleton editor.
 */
  editors2dBoneIkColor: Color;
/**
 * The outline color to use for non-selected bones in the 2D skeleton editor. See also `editors/2d/bone_selected_color`.
 */
  editors2dBoneOutlineColor: Color;
/**
 * The outline size in the 2D skeleton editor (in pixels). See also `editors/2d/bone_width`.
 * 
 * **Note:** Changes to this value only apply after modifying a `Bone2D` node in any way, or closing and reopening the scene.
 */
  editors2dBoneOutlineSize: float;
/**
 * The color to use for selected bones in the 2D skeleton editor. See also `editors/2d/bone_outline_color`.
 */
  editors2dBoneSelectedColor: Color;
/**
 * The bone width in the 2D skeleton editor (in pixels). See also `editors/2d/bone_outline_size`.
 * 
 * **Note:** Changes to this value only apply after modifying a `Bone2D` node in any way, or closing and reopening the scene.
 */
  editors2dBoneWidth: float;
/**
 * The grid color to use in the 2D editor.
 */
  editors2dGridColor: Color;
/**
 * The guides color to use in the 2D editor. Guides can be created by dragging the mouse cursor from the rulers.
 */
  editors2dGuidesColor: Color;
/**
 * The color to use when drawing smart snapping lines in the 2D editor. The smart snapping lines will automatically display when moving 2D nodes if smart snapping is enabled in the Snapping Options menu at the top of the 2D editor viewport.
 */
  editors2dSmartSnappingLineColor: Color;
/**
 * If `true`, the 2D editor will snap to integer zoom values when not holding the `Alt` key. If `false`, this behavior is swapped.
 */
  editors2dUseIntegerZoomByDefault: boolean;
/**
 * The color of the viewport border in the 2D editor. This border represents the viewport's size at the base resolution defined in the Project Settings. Objects placed outside this border will not be visible unless a `Camera2D` node is used, or unless the window is resized and the stretch mode is set to `disabled`.
 */
  editors2dViewportBorderColor: Color;
/**
 * The factor to use when zooming in or out in the 2D editor. For example, `1.1` will zoom in by 10% with every step. If set to `2.0`, zooming will only cycle through powers of two.
 */
  editors2dZoomSpeedFactor: float;
/**
 * The default camera vertical field of view to use in the 3D editor (in degrees). The camera field of view can be adjusted on a per-scene basis using the **View** menu at the top of the 3D editor. If a scene had its camera field of view adjusted using the **View** menu, this setting is ignored in the scene in question. This setting is also ignored while a `Camera3D` node is being previewed in the editor.
 * 
 * **Note:** The editor camera always uses the **Keep Height** aspect mode.
 */
  editors3dDefaultFov: float;
/**
 * The default camera far clip distance to use in the 3D editor (in degrees). Higher values make it possible to view objects placed further away from the camera, at the cost of lower precision in the depth buffer (which can result in visible Z-fighting in the distance). The camera far clip distance can be adjusted on a per-scene basis using the **View** menu at the top of the 3D editor. If a scene had its camera far clip distance adjusted using the **View** menu, this setting is ignored in the scene in question. This setting is also ignored while a `Camera3D` node is being previewed in the editor.
 */
  editors3dDefaultZFar: float;
/**
 * The default camera near clip distance to use in the 3D editor (in degrees). Lower values make it possible to view objects placed closer to the camera, at the cost of lower precision in the depth buffer (which can result in visible Z-fighting in the distance). The camera near clip distance can be adjusted on a per-scene basis using the **View** menu at the top of the 3D editor. If a scene had its camera near clip distance adjusted using the **View** menu, this setting is ignored in the scene in question. This setting is also ignored while a `Camera3D` node is being previewed in the editor.
 */
  editors3dDefaultZNear: float;
/**
 * The modifier key to use to enable freelook in the 3D editor (on top of pressing the right mouse button).
 * 
 * **Note:** Regardless of this setting, the freelook toggle keyboard shortcut (`Shift + F` by default) is always available.
 * 
 * **Note:** On certain window managers on Linux, the `Alt` key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.
 */
  editors3dFreelookFreelookActivationModifier: int;
/**
 * The base 3D freelook speed in units per second. This can be adjusted by using the mouse wheel while in freelook mode, or by holding down the "fast" or "slow" modifier keys (`Shift` and `Alt` by default, respectively).
 */
  editors3dFreelookFreelookBaseSpeed: float;
/**
 * The inertia of the 3D freelook camera. Higher values make the camera start and stop slower, which looks smoother but adds latency.
 */
  editors3dFreelookFreelookInertia: float;
/**
 * The navigation scheme to use when freelook is enabled in the 3D editor. Some of the navigation schemes below may be more convenient when designing specific levels in the 3D editor.
 * - **Default:** The "Freelook Forward", "Freelook Backward", "Freelook Up" and "Freelook Down" keys will move relative to the camera, taking its pitch angle into account for the movement.
 * - **Partially Axis-Locked:** The "Freelook Forward" and "Freelook Backward" keys will move relative to the camera, taking its pitch angle into account for the movement. The "Freelook Up" and "Freelook Down" keys will move in an "absolute" manner, *not* taking the camera's pitch angle into account for the movement.
 * - **Fully Axis-Locked:** The "Freelook Forward", "Freelook Backward", "Freelook Up" and "Freelook Down" keys will move in an "absolute" manner, *not* taking the camera's pitch angle into account for the movement.
 * See also `editors/3d/navigation/navigation_scheme`.
 */
  editors3dFreelookFreelookNavigationScheme: int;
/**
 * The mouse sensitivity to use while freelook mode is active in the 3D editor. See also `editors/3d/navigation_feel/orbit_sensitivity`.
 */
  editors3dFreelookFreelookSensitivity: float;
/**
 * If `true`, freelook speed is linked to the zoom value used in the camera orbit mode in the 3D editor.
 */
  editors3dFreelookFreelookSpeedZoomLink: boolean;
/**
 * The grid division bias to use in the 3D editor. Negative values will cause small grid divisions to appear earlier, whereas positive values will cause small grid divisions to appear later.
 */
  editors3dGridDivisionLevelBias: float;
/**
 * The largest grid division to use in the 3D editor. Together with `editors/3d/primary_grid_steps`, this determines how large the grid divisions can be. The grid divisions will not be able to get larger than `primary_grid_steps ^ grid_division_level_max` units. By default, when `editors/3d/primary_grid_steps` is `8`, this means grid divisions cannot get larger than `64` units each (so primary grid lines are `512` units apart), no matter how far away the camera is from the grid.
 */
  editors3dGridDivisionLevelMax: int;
/**
 * The smallest grid division to use in the 3D editor. Together with `editors/3d/primary_grid_steps`, this determines how small the grid divisions can be. The grid divisions will not be able to get smaller than `primary_grid_steps ^ grid_division_level_min` units. By default, this means grid divisions cannot get smaller than 1 unit each, no matter how close the camera is from the grid.
 */
  editors3dGridDivisionLevelMin: int;
/**
 * The grid size in units. Higher values prevent the grid from appearing "cut off" at certain angles, but make the grid more demanding to render. Depending on the camera's position, the grid may not be fully visible since a shader is used to fade it progressively.
 */
  editors3dGridSize: int;
/**
 * If `true`, renders the grid on the XY plane in perspective view. This can be useful for 3D side-scrolling games.
 */
  editors3dGridXyPlane: boolean;
/**
 * If `true`, renders the grid on the XZ plane in perspective view.
 */
  editors3dGridXzPlane: boolean;
/**
 * If `true`, renders the grid on the YZ plane in perspective view. This can be useful for 3D side-scrolling games.
 */
  editors3dGridYzPlane: boolean;
/**
 * Opacity of the default gizmo for moving, rotating, and scaling 3D nodes.
 */
  editors3dManipulatorGizmoOpacity: float;
/**
 * Size of the default gizmo for moving, rotating, and scaling 3D nodes.
 */
  editors3dManipulatorGizmoSize: int;
/**
 * If `true`, enables 3-button mouse emulation mode. This is useful on laptops when using a trackpad.
 * When 3-button mouse emulation mode is enabled, the pan, zoom and orbit modifiers can always be used in the 3D editor viewport, even when not holding down any mouse button.
 */
  editors3dNavigationEmulate3ButtonMouse: boolean;
/**
 * If `true`, allows using the top row `0`-`9` keys to function as their equivalent numpad keys for 3D editor navigation. This should be enabled on keyboards that have no numeric keypad available.
 */
  editors3dNavigationEmulateNumpad: boolean;
/**
 * If `true`, invert the horizontal mouse axis when panning or orbiting in the 3D editor. This setting does *not* apply to freelook mode.
 */
  editors3dNavigationInvertXAxis: boolean;
/**
 * If `true`, invert the vertical mouse axis when panning, orbiting, or using freelook mode in the 3D editor.
 */
  editors3dNavigationInvertYAxis: boolean;
/**
 * The navigation scheme preset to use in the 3D editor. Changing this setting will affect the mouse button and modifier keys used to navigate the 3D editor viewport.
 * All schemes can use `Mouse wheel` to zoom.
 * - **Godot:** `Middle mouse button` to orbit. `Shift + Middle mouse button` to pan. `Ctrl + Middle mouse button` to zoom.
 * - **Maya:** `Alt + Left mouse button` to orbit. `Middle mouse button` to pan, `Shift + Middle mouse button` to pan 10 times faster. `Alt + Right mouse button` to zoom.
 * - **Modo:** `Alt + Left mouse button` to orbit. `Alt + Shift + Left mouse button` to pan. `Ctrl + Alt + Left mouse button` to zoom.
 * - **Tablet/Trackpad:** `Alt` to orbit. `Shift` to pan. `Ctrl` to zoom. Enables 3-button mouse emulation mode.
 * See also `editors/3d/navigation/orbit_mouse_button`, `editors/3d/navigation/pan_mouse_button`, `editors/3d/navigation/zoom_mouse_button`, `editors/3d/freelook/freelook_navigation_scheme`, and `editors/3d/navigation/emulate_3_button_mouse`.
 * 
 * **Note:** On certain window managers on Linux, the `Alt` key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.
 */
  editors3dNavigationNavigationScheme: int;
/**
 * The mouse button that needs to be held down to orbit in the 3D editor viewport.
 */
  editors3dNavigationOrbitMouseButton: int;
/**
 * The mouse button that needs to be held down to pan in the 3D editor viewport.
 */
  editors3dNavigationPanMouseButton: int;
/**
 * If `true`, shows gizmos for moving and rotating the camera in the bottom corners of the 3D editor's viewport. Useful for devices that use touch screen.
 */
  editors3dNavigationShowViewportNavigationGizmo: boolean;
/**
 * If `true`, shows a small orientation gizmo in the top-right corner of the 3D editor's viewports.
 */
  editors3dNavigationShowViewportRotationGizmo: boolean;
/**
 * If `true`, warps the mouse around the 3D viewport while panning in the 3D editor. This makes it possible to pan over a large area without having to exit panning and adjust the mouse cursor.
 */
  editors3dNavigationWarpedMousePanning: boolean;
/**
 * The mouse button that needs to be held down to zoom in the 3D editor viewport.
 */
  editors3dNavigationZoomMouseButton: int;
/**
 * The mouse cursor movement direction to use when zooming by moving the mouse. This does not affect zooming with the mouse wheel.
 */
  editors3dNavigationZoomStyle: int;
/**
 * The inertia to use when orbiting in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency.
 */
  editors3dNavigationFeelOrbitInertia: float;
/**
 * The mouse sensitivity to use when orbiting in the 3D editor. See also `editors/3d/freelook/freelook_sensitivity`.
 */
  editors3dNavigationFeelOrbitSensitivity: float;
/**
 * The inertia to use when panning in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency.
 */
  editors3dNavigationFeelTranslationInertia: float;
/**
 * The mouse sensitivity to use when panning in the 3D editor.
 */
  editors3dNavigationFeelTranslationSensitivity: float;
/**
 * The inertia to use when zooming in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency.
 */
  editors3dNavigationFeelZoomInertia: float;
/**
 * The color to use for the primary 3D grid. The color's alpha channel affects the grid's opacity.
 */
  editors3dPrimaryGridColor: Color;
/**
 * If set above 0, where a primary grid line should be drawn. By default, primary lines are configured to be more visible than secondary lines. This helps with measurements in the 3D editor. See also `editors/3d/primary_grid_color` and `editors/3d/secondary_grid_color`.
 */
  editors3dPrimaryGridSteps: int;
/**
 * The color to use for the secondary 3D grid. This is generally a less visible color than `editors/3d/primary_grid_color`. The color's alpha channel affects the grid's opacity.
 */
  editors3dSecondaryGridColor: Color;
/**
 * The color to use for the selection box that surrounds selected nodes in the 3D editor viewport. The color's alpha channel influences the selection box's opacity.
 */
  editors3dSelectionBoxColor: Color;
/**
 * The color to use for the AABB gizmo that displays the `GeometryInstance3D`'s custom `AABB`.
 */
  editors3dGizmosGizmoColorsAabb: Color;
/**
 * The 3D editor gizmo color for `Camera3D`s.
 */
  editors3dGizmosGizmoColorsCamera: Color;
/**
 * The 3D editor gizmo color for CSG nodes (such as `CSGShape3D` or `CSGBox3D`).
 */
  editors3dGizmosGizmoColorsCsg: Color;
/**
 * The 3D editor gizmo color for `Decal` nodes.
 */
  editors3dGizmosGizmoColorsDecal: Color;
/**
 * The 3D editor gizmo color for `FogVolume` nodes.
 */
  editors3dGizmosGizmoColorsFogVolume: Color;
/**
 * The 3D editor gizmo color for the `GridMap` grid.
 */
  editors3dGizmosGizmoColorsGridmapGrid: Color;
/**
 * The color override to use for 3D editor gizmos if the `Node3D` in question is part of an instantiated scene file (from the perspective of the current scene).
 */
  editors3dGizmosGizmoColorsInstantiated: Color;
/**
 * The 3D editor gizmo color for `Joint3D`s and `PhysicalBone3D`s.
 */
  editors3dGizmosGizmoColorsJoint: Color;
/**
 * Color for representing `Joint3D.node_a` for some `Joint3D` types.
 */
  editors3dGizmosGizmoColorsJointBodyA: Color;
/**
 * Color for representing `Joint3D.node_b` for some `Joint3D` types.
 */
  editors3dGizmosGizmoColorsJointBodyB: Color;
/**
 * Color of lines displayed in baked `LightmapGI` node's grid.
 */
  editors3dGizmosGizmoColorsLightmapLines: Color;
/**
 * The 3D editor gizmo color used for `LightmapProbe` nodes.
 */
  editors3dGizmosGizmoColorsLightprobeLines: Color;
/**
 * The 3D editor gizmo color used for `OccluderInstance3D` nodes.
 */
  editors3dGizmosGizmoColorsOccluder: Color;
/**
 * The 3D editor gizmo color used for `GPUParticlesAttractor3D` nodes.
 */
  editors3dGizmosGizmoColorsParticleAttractor: Color;
/**
 * The 3D editor gizmo color used for `GPUParticlesCollision3D` nodes.
 */
  editors3dGizmosGizmoColorsParticleCollision: Color;
/**
 * The 3D editor gizmo color used for `CPUParticles3D` and `GPUParticles3D` nodes.
 */
  editors3dGizmosGizmoColorsParticles: Color;
/**
 * The 3D editor gizmo color used for `Path3D` tilt circles, which indicate the direction the `Curve3D` is tilted towards.
 */
  editors3dGizmosGizmoColorsPathTilt: Color;
/**
 * The 3D editor gizmo color used for `ReflectionProbe` nodes.
 */
  editors3dGizmosGizmoColorsReflectionProbe: Color;
/**
 * The 3D editor gizmo color used for the currently selected `Skeleton3D` bone.
 */
  editors3dGizmosGizmoColorsSelectedBone: Color;
/**
 * The 3D editor gizmo color used for `Skeleton3D` nodes.
 */
  editors3dGizmosGizmoColorsSkeleton: Color;
/**
 * The 3D editor gizmo color used for `SpringBoneCollision3D` nodes.
 */
  editors3dGizmosGizmoColorsSpringBoneCollision: Color;
/**
 * The 3D editor gizmo color used for `SpringBoneCollision3D` nodes with inside mode.
 */
  editors3dGizmosGizmoColorsSpringBoneInsideCollision: Color;
/**
 * The 3D editor gizmo color used for `SpringBoneSimulator3D` nodes.
 */
  editors3dGizmosGizmoColorsSpringBoneJoint: Color;
/**
 * The 3D editor gizmo color used for `AudioStreamPlayer3D`'s emission angle.
 */
  editors3dGizmosGizmoColorsStreamPlayer3d: Color;
/**
 * The 3D editor gizmo color used for `VisibleOnScreenNotifier3D` and `VisibleOnScreenEnabler3D` nodes.
 */
  editors3dGizmosGizmoColorsVisibilityNotifier: Color;
/**
 * The 3D editor gizmo color used for `VoxelGI` nodes.
 */
  editors3dGizmosGizmoColorsVoxelGi: Color;
/**
 * The length of `Skeleton3D` bone gizmos in the 3D editor.
 */
  editors3dGizmosGizmoSettingsBoneAxisLength: float;
/**
 * The shape of `Skeleton3D` bone gizmos in the 3D editor. **Wire** is a thin line, while **Octahedron** is a set of lines that represent a thicker hollow line pointing in a specific direction (similar to most 3D animation software).
 */
  editors3dGizmosGizmoSettingsBoneShape: int;
/**
 * Size of the disk gizmo displayed when editing `Path3D`'s tilt handles.
 */
  editors3dGizmosGizmoSettingsPath3dTiltDiskSize: float;
/**
 * If `true`, automatically updates animation tracks' target paths when renaming or reparenting nodes in the Scene tree dock.
 */
  editorsAnimationAutorenameAnimationTracks: boolean;
/**
 * If `true`, display a confirmation dialog when adding a new track to an animation by pressing the "key" icon next to a property. Holding Shift will bypass the dialog.
 * If `false`, the behavior is reversed, i.e. the dialog only appears when Shift is held.
 */
  editorsAnimationConfirmInsertTrack: boolean;
/**
 * If `true`, create a Bezier track instead of a standard track when pressing the "key" icon next to a property. Bezier tracks provide more control over animation curves, but are more difficult to adjust quickly.
 */
  editorsAnimationDefaultCreateBezierTracks: boolean;
/**
 * If `true`, create a `RESET` track when creating a new animation track. This track can be used to restore the animation to a "default" state.
 */
  editorsAnimationDefaultCreateResetTracks: boolean;
/**
 * The modulate color to use for "future" frames displayed in the animation editor's onion skinning feature.
 */
  editorsAnimationOnionLayersFutureColor: Color;
/**
 * The modulate color to use for "past" frames displayed in the animation editor's onion skinning feature.
 */
  editorsAnimationOnionLayersPastColor: Color;
  editorsBoneMapperHandleColorsError: Color;
  editorsBoneMapperHandleColorsMissing: Color;
  editorsBoneMapperHandleColorsSet: Color;
  editorsBoneMapperHandleColorsUnset: Color;
/**
 * Minimum width of GridMap's mesh palette side panel.
 */
  editorsGridMapPaletteMinWidth: int;
/**
 * The maximum distance at which tiles can be placed on a GridMap, relative to the camera position (in 3D units).
 */
  editorsGridMapPickDistance: float;
/**
 * Texture size of mesh previews generated for GridMap's MeshLibrary.
 */
  editorsGridMapPreviewSize: int;
/**
 * Controls whether the mouse wheel scroll zooms or pans in the 2D editor. See also `editors/panning/sub_editors_panning_scheme` and `editors/panning/animation_editors_panning_scheme`.
 */
  editorsPanning2dEditorPanningScheme: int;
/**
 * The panning speed when using the mouse wheel or touchscreen events in the 2D editor. This setting does not apply to panning by holding down the middle or right mouse buttons.
 */
  editorsPanning2dEditorPanSpeed: int;
/**
 * Controls whether the mouse wheel scroll zooms or pans in the animation track and Bezier editors. See also `editors/panning/2d_editor_panning_scheme` and `editors/panning/sub_editors_panning_scheme` (which controls the animation blend tree editor's pan behavior).
 */
  editorsPanningAnimationEditorsPanningScheme: int;
/**
 * If `true`, allows panning by holding down `Space` in the 2D editor viewport (in addition to panning with the middle or right mouse buttons). If `false`, the left mouse button must be held down while holding down `Space` to pan in the 2D editor viewport.
 */
  editorsPanningSimplePanning: boolean;
/**
 * Controls whether the mouse wheel scroll zooms or pans in subeditors. The list of affected subeditors is: animation blend tree editor, `Polygon2D` editor, tileset editor, texture region editor and visual shader editor. See also `editors/panning/2d_editor_panning_scheme` and `editors/panning/animation_editors_panning_scheme`.
 */
  editorsPanningSubEditorsPanningScheme: int;
/**
 * If `true`, warps the mouse around the 2D viewport while panning in the 2D editor. This makes it possible to pan over a large area without having to exit panning and adjust the mouse cursor.
 */
  editorsPanningWarpedMousePanning: boolean;
/**
 * The delay in seconds until more complex and performance costly polygon editors commit their outlines, e.g. the 2D navigation polygon editor rebakes the navigation mesh polygons. A negative value stops the auto bake.
 */
  editorsPolygonEditorAutoBakeDelay: float;
/**
 * The radius in which points can be selected in the `Polygon2D` and `CollisionPolygon2D` editors (in pixels). Higher values make it easier to select points quickly, but can make it more difficult to select the expected point when several points are located close to each other.
 */
  editorsPolygonEditorPointGrabRadius: int;
/**
 * If `true`, displays the polygon's previous shape in the 2D polygon editors with an opaque gray outline. This outline is displayed while dragging a point until the left mouse button is released.
 */
  editorsPolygonEditorShowPreviousOutline: boolean;
/**
 * If `true`, reopens shader files that were open in the shader editor when the project was last closed.
 */
  editorsShaderEditorBehaviorFilesRestoreShadersOnLoad: boolean;
/**
 * If `true`, displays a grid while the TileMap editor is active. See also `editors/tiles_editor/grid_color`.
 */
  editorsTilesEditorDisplayGrid: boolean;
/**
 * The color to use for the TileMap editor's grid.
 * 
 * **Note:** Only effective if `editors/tiles_editor/display_grid` is `true`.
 */
  editorsTilesEditorGridColor: Color;
/**
 * Highlight the currently selected TileMapLayer by dimming the other ones in the scene.
 */
  editorsTilesEditorHighlightSelectedLayer: boolean;
/**
 * The color of a graph node's header when it belongs to the "Color" category.
 */
  editorsVisualEditorsCategoryColorsColorColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Conditional" category.
 */
  editorsVisualEditorsCategoryColorsConditionalColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Input" category.
 */
  editorsVisualEditorsCategoryColorsInputColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Output" category.
 */
  editorsVisualEditorsCategoryColorsOutputColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Particle" category.
 */
  editorsVisualEditorsCategoryColorsParticleColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Scalar" category.
 */
  editorsVisualEditorsCategoryColorsScalarColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Special" category.
 */
  editorsVisualEditorsCategoryColorsSpecialColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Textures" category.
 */
  editorsVisualEditorsCategoryColorsTexturesColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Transform" category.
 */
  editorsVisualEditorsCategoryColorsTransformColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Utility" category.
 */
  editorsVisualEditorsCategoryColorsUtilityColor: Color;
/**
 * The color of a graph node's header when it belongs to the "Vector" category.
 */
  editorsVisualEditorsCategoryColorsVectorColor: Color;
/**
 * The color theme to use in the visual shader editor.
 */
  editorsVisualEditorsColorTheme: string;
/**
 * The color of a port/connection of boolean type.
 */
  editorsVisualEditorsConnectionColorsBooleanColor: Color;
/**
 * The color of a port/connection of sampler type.
 */
  editorsVisualEditorsConnectionColorsSamplerColor: Color;
/**
 * The color of a port/connection of scalar type (float, int, unsigned int).
 */
  editorsVisualEditorsConnectionColorsScalarColor: Color;
/**
 * The color of a port/connection of transform type.
 */
  editorsVisualEditorsConnectionColorsTransformColor: Color;
/**
 * The color of a port/connection of Vector2 type.
 */
  editorsVisualEditorsConnectionColorsVector2Color: Color;
/**
 * The color of a port/connection of Vector3 type.
 */
  editorsVisualEditorsConnectionColorsVector3Color: Color;
/**
 * The color of a port/connection of Vector4 type.
 */
  editorsVisualEditorsConnectionColorsVector4Color: Color;
/**
 * The pattern used for the background grid.
 */
  editorsVisualEditorsGridPattern: int;
/**
 * The curvature to use for connection lines in the visual shader editor. Higher values will make connection lines appear more curved, with values above `0.5` resulting in more "angular" turns in the middle of connection lines.
 */
  editorsVisualEditorsLinesCurvature: float;
/**
 * The opacity of the minimap displayed in the bottom-right corner of the visual shader editor.
 */
  editorsVisualEditorsMinimapOpacity: float;
/**
 * The size to use for port previews in the visual shader uniforms (toggled by clicking the "eye" icon next to an output). The value is defined in pixels at 100% zoom, and will scale with zoom automatically.
 */
  editorsVisualEditorsVisualShaderPortPreviewSize: int;
/**
 * Path to the SCP (secure copy) executable (used for remote deploy to desktop platforms). If left empty, the editor will attempt to run `scp` from `PATH`.
 * 
 * **Note:** SCP is not the same as SFTP. Specifying the SFTP executable here will not work.
 */
  exportSshScp: string;
/**
 * Path to the SSH executable (used for remote deploy to desktop platforms). If left empty, the editor will attempt to run `ssh` from `PATH`.
 */
  exportSshSsh: string;
/**
 * The folder where projects should be scanned for (recursively), in a way similar to the project manager's **Scan** button. This can be set to the same value as `filesystem/directories/default_project_path` for convenience.
 * 
 * **Note:** Setting this path to a folder with very large amounts of files/folders can slow down the project manager startup significantly. To keep the project manager quick to start up, it is recommended to set this value to a folder as "specific" as possible.
 */
  filesystemDirectoriesAutoscanProjectPath: string;
/**
 * The folder where new projects should be created by default when clicking the project manager's **New Project** button. This can be set to the same value as `filesystem/directories/autoscan_project_path` for convenience.
 */
  filesystemDirectoriesDefaultProjectPath: string;
/**
 * The program that opens 3D model scene files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.
 */
  filesystemExternalPrograms3dModelEditor: string;
/**
 * The program that opens audio files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.
 */
  filesystemExternalProgramsAudioEditor: string;
/**
 * The program that opens raster image files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.
 */
  filesystemExternalProgramsRasterImageEditor: string;
/**
 * The terminal emulator program to use when using **Open in Terminal** context menu action in the FileSystem dock. You can enter an absolute path to a program binary, or a path to a program that is present in the `PATH` environment variable.
 * If left empty, Godot will use the default terminal emulator for the system:
 * - **Windows:** PowerShell
 * - **macOS:** Terminal.app
 * - **Linux:** The first terminal found on the system in this order: gnome-terminal, konsole, xfce4-terminal, lxterminal, kitty, alacritty, urxvt, xterm.
 * To use Command Prompt (cmd) instead of PowerShell on Windows, enter `cmd` in this field and the correct flags will automatically be used.
 * On macOS, make sure to point to the actual program binary located within the `Programs/MacOS` folder of the .app bundle, rather than the .app bundle directory.
 * If specifying a custom terminal emulator, you may need to override `filesystem/external_programs/terminal_emulator_flags` so it opens in the correct folder.
 */
  filesystemExternalProgramsTerminalEmulator: string;
/**
 * The command-line arguments to pass to the terminal emulator that is run when using **Open in Terminal** context menu action in the FileSystem dock. See also `filesystem/external_programs/terminal_emulator`.
 * If left empty, the default flags are `{directory}`, which is replaced by the absolute path to the directory that is being opened in the terminal.
 * 
 * **Note:** If the terminal emulator is set to PowerShell, cmd, or Konsole, Godot will automatically prepend arguments to this list, as these terminals require nonstandard arguments to open in the correct folder.
 */
  filesystemExternalProgramsTerminalEmulatorFlags: string;
/**
 * The program that opens vector image files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.
 */
  filesystemExternalProgramsVectorImageEditor: string;
/**
 * The display mode to use in the editor's file dialogs.
 * - **Thumbnails** takes more space, but displays dynamic resource thumbnails, making resources easier to preview without having to open them.
 * - **List** is more compact but doesn't display dynamic resource thumbnails. Instead, it displays static icons based on the file extension.
 */
  filesystemFileDialogDisplayMode: int;
/**
 * If `true`, display hidden files in the editor's file dialogs. Files that have names starting with `.` are considered hidden (e.g. `.hidden_file`).
 */
  filesystemFileDialogShowHiddenFiles: boolean;
/**
 * The thumbnail size to use in the editor's file dialogs (in pixels). See also `docks/filesystem/thumbnail_size`.
 */
  filesystemFileDialogThumbnailSize: int;
/**
 * Password used for file server when exporting project with remote file system.
 */
  filesystemFileServerPassword: string;
/**
 * Port used for file server when exporting project with remote file system.
 */
  filesystemFileServerPort: int;
/**
 * The path to the Blender executable used for converting the Blender 3D scene files `.blend` to glTF 2.0 format during import. Blender 3.0 or later is required.
 * To enable this feature for your specific project, use `ProjectSettings.filesystem/import/blender/enabled`.
 * If this setting is empty, Blender's default paths will be detected and used automatically if present in this order:
 * 
 * **Windows:**
 * 
 * 			```gdscript
 * 
 * 			- C:\Program Files\Blender Foundation\blender.exe
 * 			- C:\Program Files (x86)\Blender Foundation\blender.exe
 * 			
 * 
 * ```
 * 
 * **macOS:**
 * 
 * 			```gdscript
 * 
 * 			- /opt/homebrew/bin/blender
 * 			- /opt/local/bin/blender
 * 			- /usr/local/bin/blender
 * 			- /usr/local/opt/blender
 * 			- /Applications/Blender.app/Contents/MacOS/Blender
 * 			
 * 
 * ```
 * 
 * **Linux/*BSD:**
 * 
 * 			```gdscript
 * 
 * 			- /usr/bin/blender
 * 			- /usr/local/bin/blender
 * 			- /opt/blender/bin/blender
 * 			
 * 
 * ```
 */
  filesystemImportBlenderBlenderPath: string;
/**
 * The port number used for Remote Procedure Call (RPC) communication with Godot's created process of the blender executable.
 * Setting this to 0 effectively disables communication with Godot and the blender process, making performance slower.
 */
  filesystemImportBlenderRpcPort: int;
/**
 * The maximum idle uptime (in seconds) of the Blender process.
 * This prevents Godot from having to create a new process for each import within the given seconds.
 */
  filesystemImportBlenderRpcServerUptime: float;
/**
 * The path to the FBX2glTF executable used for converting Autodesk FBX 3D scene files `.fbx` to glTF 2.0 format during import.
 * To enable this feature for your specific project, use `ProjectSettings.filesystem/import/fbx2gltf/enabled`.
 */
  filesystemImportFbxFbx2gltfPath: string;
/**
 * If `true`, uses lossless compression for binary resources.
 */
  filesystemOnSaveCompressBinaryResources: boolean;
/**
 * If `true`, when saving a file, the editor will rename the old file to a different name, save a new file, then only remove the old file once the new file has been saved. This makes loss of data less likely to happen if the editor or operating system exits unexpectedly while saving (e.g. due to a crash or power outage).
 * 
 * **Note:** On Windows, this feature can interact negatively with certain antivirus programs. In this case, you may have to set this to `false` to prevent file locking issues.
 */
  filesystemOnSaveSafeSaveOnBackupThenRename: boolean;
/**
 * If set to `Adaptive`, the dialog opens in list view or grid view depending on the requested type. If set to `Last Used`, the display mode will always open the way you last used it.
 */
  filesystemQuickOpenDialogDefaultDisplayMode: int;
/**
 * If `true`, fuzzy matching of search tokens is allowed.
 */
  filesystemQuickOpenDialogEnableFuzzyMatching: boolean;
/**
 * If `true`, results will include files located in the `addons` folder.
 */
  filesystemQuickOpenDialogIncludeAddons: boolean;
/**
 * The number of allowed missed query characters in a match, if fuzzy matching is enabled. For example, with the default value of 2, `foobar` would match `foobur` and `foob` but not `foo`.
 */
  filesystemQuickOpenDialogMaxFuzzyMisses: int;
/**
 * Maximum number of matches to show in dialog.
 */
  filesystemQuickOpenDialogMaxResults: int;
/**
 * If `true`, results will be highlighted with their search matches.
 */
  filesystemQuickOpenDialogShowSearchHighlight: boolean;
/**
 * The path to the directory containing the Open Image Denoise (OIDN) executable, used optionally for denoising lightmaps. It can be downloaded from openimagedenoise.org (https://www.openimagedenoise.org/downloads.html).
 * To enable this feature for your specific project, use `ProjectSettings.rendering/lightmapping/denoising/denoiser`.
 */
  filesystemToolsOidnOidnDenoisePath: string;
/**
 * If `true`, input events will be flushed just before every idle and physics frame.
 * If `false`, these events will be flushed only once per process frame, between iterations of the engine.
 * Enabling this setting can greatly improve input responsiveness, especially in devices that struggle to run at the project's intended frame rate.
 */
  inputBufferingAgileEventFlushing: boolean;
/**
 * If `true`, similar input events sent by the operating system are accumulated. When input accumulation is enabled, all input events generated during a frame will be merged and emitted when the frame is done rendering. Therefore, this limits the number of input method calls per second to the rendering FPS.
 * Input accumulation can be disabled to get slightly more precise/reactive input at the cost of increased CPU usage.
 * 
 * **Note:** Input accumulation is *enabled* by default.
 */
  inputBufferingUseAccumulatedInput: boolean;
/**
 * How to position the Cancel and OK buttons in the editor's `AcceptDialog`s. Different platforms have different standard behaviors for this, which can be overridden using this setting. This is useful if you use Godot both on Windows and macOS/Linux and your Godot muscle memory is stronger than your OS specific one.
 * - **Auto** follows the platform convention: Cancel first on macOS and Linux, OK first on Windows.
 * - **Cancel First** forces the ordering Cancel/OK.
 * - **OK First** forces the ordering OK/Cancel.
 */
  interfaceEditorAcceptDialogCancelOkButtons: int;
/**
 * If `true`, automatically opens screenshots with the default program associated to `.png` files after a screenshot is taken using the **Editor > Take Screenshot** action.
 */
  interfaceEditorAutomaticallyOpenScreenshots: boolean;
/**
 * The font to use for the script editor. Must be a resource of a `Font` type such as a `.ttf` or `.otf` font file.
 */
  interfaceEditorCodeFont: string;
/**
 * The font ligatures to enable for the currently configured code font. Not all fonts include support for ligatures.
 * 
 * **Note:** The default editor code font (JetBrains Mono (https://www.jetbrains.com/lp/mono/)) has contextual ligatures in its font file.
 */
  interfaceEditorCodeFontContextualLigatures: int;
/**
 * List of custom OpenType features to use, if supported by the currently configured code font. Not all fonts include support for custom OpenType features. The string should follow the OpenType specification.
 * 
 * **Note:** The default editor code font (JetBrains Mono (https://www.jetbrains.com/lp/mono/)) has custom OpenType features in its font file, but there is no documented list yet.
 */
  interfaceEditorCodeFontCustomOpentypeFeatures: string;
/**
 * List of alternative characters to use, if supported by the currently configured code font. Not all fonts include support for custom variations. The string should follow the OpenType specification.
 * 
 * **Note:** The default editor code font (JetBrains Mono (https://www.jetbrains.com/lp/mono/)) has alternate characters in its font file, but there is no documented list yet.
 */
  interfaceEditorCodeFontCustomVariations: string;
/**
 * The size of the font in the script editor. This setting does not impact the font size of the Output panel (see `run/output/font_size`).
 */
  interfaceEditorCodeFontSize: int;
/**
 * The custom editor scale factor to use. This can be used for displays with very high DPI where a scale factor of 200% is not sufficient.
 * 
 * **Note:** Only effective if `interface/editor/display_scale` is set to **Custom**.
 */
  interfaceEditorCustomDisplayScale: float;
/**
 * The display scale factor to use for the editor interface. Higher values are more suited to hiDPI/Retina displays.
 * If set to **Auto**, the editor scale is automatically determined based on the screen resolution and reported display DPI. This heuristic is not always ideal, which means you can get better results by setting the editor scale manually.
 * If set to **Custom**, the scaling value in `interface/editor/custom_display_scale` will be used.
 */
  interfaceEditorDisplayScale: int;
/**
 * Tab style of editor docks.
 */
  interfaceEditorDockTabStyle: int;
/**
 * The language to use for the editor interface.
 * Translations are provided by the community. If you spot a mistake, contribute to editor translations on Weblate! (https://docs.godotengine.org/en/stable/contributing/documentation/editor_and_docs_localization.html)
 */
  interfaceEditorEditorLanguage: string;
/**
 * The preferred monitor to display the editor. If **Auto**, the editor will remember the last screen it was displayed on across restarts.
 */
  interfaceEditorEditorScreen: int;
/**
 * Expanding main editor window content to the title, if supported by `DisplayServer`. See `DisplayServer.WINDOW_FLAG_EXTEND_TO_TITLE`.
 * Specific to the macOS platform.
 */
  interfaceEditorExpandToTitle: boolean;
/**
 * If set to `true`, MSDF font rendering will be used for the visual shader graph editor. You may need to set this to `false` when using a custom main font, as some fonts will look broken due to the use of self-intersecting outlines in their font data. Downloading the font from the font maker's official website as opposed to a service like Google Fonts can help resolve this issue.
 */
  interfaceEditorFontAllowMsdf: boolean;
/**
 * FreeType's font anti-aliasing mode used to render the editor fonts. Most fonts are not designed to look good with anti-aliasing disabled, so it's recommended to leave this enabled unless you're using a pixel art font.
 */
  interfaceEditorFontAntialiasing: int;
/**
 * If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).
 */
  interfaceEditorFontDisableEmbeddedBitmaps: boolean;
/**
 * The font hinting mode to use for the editor fonts. FreeType supports the following font hinting modes:
 * - **None:** Don't use font hinting when rasterizing the font. This results in a smooth font, but it can look blurry.
 * - **Light:** Use hinting on the X axis only. This is a compromise between font sharpness and smoothness.
 * - **Normal:** Use hinting on both X and Y axes. This results in a sharp font, but it doesn't look very smooth.
 * If set to **Auto**, the font hinting mode will be set to match the current operating system in use. This means the **Light** hinting mode will be used on Windows and Linux, and the **None** hinting mode will be used on macOS.
 */
  interfaceEditorFontHinting: int;
/**
 * The subpixel positioning mode to use when rendering editor font glyphs. This affects both the main and code fonts. **Disabled** is the fastest to render and uses the least memory. **Auto** only uses subpixel positioning for small font sizes (where the benefit is the most noticeable). **One Half of a Pixel** and **One Quarter of a Pixel** force the same subpixel positioning mode for all editor fonts, regardless of their size (with **One Quarter of a Pixel** being the highest-quality option).
 */
  interfaceEditorFontSubpixelPositioning: int;
/**
 * If `true`, (re)imports resources even if the editor window is unfocused or minimized. If `false`, resources are only (re)imported when the editor window is focused. This can be set to `true` to speed up iteration by starting the import process earlier when saving files in the project folder. This also allows getting visual feedback on changes without having to click the editor window, which is useful with multi-monitor setups. The downside of setting this to `true` is that it increases idle CPU usage and may steal CPU time from other applications when importing resources.
 */
  interfaceEditorImportResourcesWhenUnfocused: boolean;
/**
 * If `true`, keeps the screen on (even in case of inactivity), so the screensaver does not take over. Works on desktop and mobile platforms.
 */
  interfaceEditorKeepScreenOn: boolean;
/**
 * If `true`, setting names in the editor are localized when possible.
 * 
 * **Note:** This setting affects most `EditorInspector`s in the editor UI, primarily Project Settings and Editor Settings. To control names displayed in the Inspector dock, use `interface/inspector/default_property_name_style` instead.
 */
  interfaceEditorLocalizeSettings: boolean;
/**
 * The amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU/GPU usage, which can improve battery life on laptops. However, higher values will result in a less responsive editor. The default value is set to allow for maximum smoothness on monitors up to 144 Hz. See also `interface/editor/unfocused_low_processor_mode_sleep_usec`.
 * 
 * **Note:** This setting is ignored if `interface/editor/update_continuously` is `true`, as enabling that setting disables low-processor mode.
 */
  interfaceEditorLowProcessorModeSleepUsec: int;
/**
 * The font to use for the editor interface. Must be a resource of a `Font` type such as a `.ttf` or `.otf` font file.
 */
  interfaceEditorMainFont: string;
/**
 * The font to use for bold text in the editor interface. Must be a resource of a `Font` type such as a `.ttf` or `.otf` font file.
 */
  interfaceEditorMainFontBold: string;
/**
 * The size of the font in the editor interface.
 */
  interfaceEditorMainFontSize: int;
/**
 * If `true`, the mouse's additional side buttons will be usable to navigate in the script editor's file history. Set this to `false` if you're using the side buttons for other purposes (such as a push-to-talk button in a VoIP program).
 */
  interfaceEditorMouseExtraButtonsNavigateHistory: boolean;
/**
 * The preferred monitor to display the project manager.
 */
  interfaceEditorProjectManagerScreen: int;
/**
 * If `false`, the editor will save all scenes when confirming the **Save** action when quitting the editor or quitting to the project list. If `true`, the editor will ask to save each scene individually.
 */
  interfaceEditorSaveEachSceneOnQuit: boolean;
/**
 * If `true`, scenes and scripts are saved when the editor loses focus. Depending on the work flow, this behavior can be less intrusive than `text_editor/behavior/files/autosave_interval_secs` or remembering to save manually.
 */
  interfaceEditorSaveOnFocusLoss: boolean;
/**
 * If `true`, the editor's Script tab will have a separate distraction mode setting from the 2D/3D/AssetLib tabs. If `false`, the distraction-free mode toggle is shared between all tabs.
 */
  interfaceEditorSeparateDistractionMode: boolean;
/**
 * If enabled, displays internal engine errors in toast notifications (toggleable by clicking the "bell" icon at the bottom of the editor). No matter the value of this setting, non-internal engine errors will always be visible in toast notifications.
 * The default **Auto** value will only enable this if the editor was compiled with the `dev_build=yes` SCons option (the default is `dev_build=no`).
 */
  interfaceEditorShowInternalErrorsInToastNotifications: int;
/**
 * If enabled, displays an icon in the top-right corner of the editor that spins when the editor redraws a frame. This can be used to diagnose situations where the engine is constantly redrawing, which should be avoided as this increases CPU and GPU utilization for no good reason. To further troubleshoot these situations, start the editor with the `--debug-canvas-item-redraw` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 * Consider enabling this if you are developing editor plugins to ensure they only make the editor redraw when required.
 * The default **Auto** value will only enable this if the editor was compiled with the `dev_build=yes` SCons option (the default is `dev_build=no`).
 * 
 * **Note:** If `interface/editor/update_continuously` is `true`, the spinner icon displays in red.
 * 
 * **Note:** If the editor was started with the `--debug-canvas-item-redraw` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html), the update spinner will *never* display regardless of this setting's value. This is to avoid confusion with what would cause redrawing in real world scenarios.
 */
  interfaceEditorShowUpdateSpinner: int;
/**
 * If `true`, embed modal windows such as docks inside the main editor window. When single-window mode is enabled, tooltips will also be embedded inside the main editor window, which means they can't be displayed outside of the editor window. Single-window mode can be faster as it does not need to create a separate window for every popup and tooltip, which can be a slow operation depending on the operating system and rendering method in use.
 * This is equivalent to `ProjectSettings.display/window/subwindows/embed_subwindows` in the running project, except the setting's value is inverted.
 * 
 * **Note:** To query whether the editor can use multiple windows in an editor plugin, use `EditorInterface.is_multi_window_enabled` instead of querying the value of this editor setting.
 * 
 * **Note:** If `true`, game embedding is disabled.
 */
  interfaceEditorSingleWindowMode: boolean;
/**
 * Editor UI default layout direction.
 */
  interfaceEditorUiLayoutDirection: int;
/**
 * When the editor window is unfocused, the amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU/GPU usage, which can improve battery life on laptops (in addition to improving the running project's performance if the editor has to redraw continuously). However, higher values will result in a less responsive editor. The default value is set to limit the editor to 20 FPS when the editor window is unfocused. See also `interface/editor/low_processor_mode_sleep_usec`.
 * 
 * **Note:** This setting is ignored if `interface/editor/update_continuously` is `true`, as enabling that setting disables low-processor mode.
 */
  interfaceEditorUnfocusedLowProcessorModeSleepUsec: int;
/**
 * If `true`, redraws the editor every frame even if nothing has changed on screen. When this setting is enabled, the update spinner displays in red (see `interface/editor/show_update_spinner`).
 * 
 * **Warning:** This greatly increases CPU and GPU utilization, leading to increased power usage. This should only be enabled for troubleshooting purposes.
 */
  interfaceEditorUpdateContinuously: boolean;
/**
 * If `true`, editor main menu is using embedded `MenuBar` instead of system global menu.
 * Specific to the macOS platform.
 */
  interfaceEditorUseEmbeddedMenu: boolean;
/**
 * If `true`, editor UI uses OS native file/directory selection dialogs.
 */
  interfaceEditorUseNativeFileDialogs: boolean;
/**
 * Sets the V-Sync mode for the editor. Does not affect the project when run from the editor (this is controlled by `ProjectSettings.display/window/vsync/vsync_mode`).
 * Depending on the platform and used renderer, the engine will fall back to **Enabled** if the desired mode is not supported.
 * 
 * **Note:** V-Sync modes other than **Enabled** are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 */
  interfaceEditorVsyncMode: int;
/**
 * If `true`, when extending a script, the global class name of the script is inserted in the script creation dialog, if it exists. If `false`, the script's file path is always inserted.
 */
  interfaceEditorsDeriveScriptGlobalsByName: boolean;
/**
 * If `true`, the Scene dock will display buttons to quickly add a root node to a newly created scene.
 */
  interfaceEditorsShowSceneTreeRootSelection: boolean;
/**
 * If `true`, automatically expands property groups in the Inspector dock when opening a scene that hasn't been opened previously. If `false`, all groups remain collapsed by default.
 */
  interfaceInspectorAutoUnfoldForeignScenes: boolean;
/**
 * The default color picker mode to use when opening `ColorPicker`s in the editor. This mode can be temporarily adjusted on the color picker itself.
 */
  interfaceInspectorDefaultColorPickerMode: int;
/**
 * The default color picker shape to use when opening `ColorPicker`s in the editor. This shape can be temporarily adjusted on the color picker itself.
 */
  interfaceInspectorDefaultColorPickerShape: int;
/**
 * The floating-point precision to use for properties that don't define an explicit precision step. Lower values allow entering more precise values.
 */
  interfaceInspectorDefaultFloatStep: float;
/**
 * The default property name style to display in the Inspector dock. This style can be temporarily adjusted in the Inspector dock's menu.
 * - **Raw:** Displays properties in `snake_case`.
 * - **Capitalized:** Displays properties capitalized.
 * - **Localized:** Displays the localized string for the current editor language if a translation is available for the given property. If no translation is available, falls back to **Capitalized**.
 * 
 * **Note:** To display translated setting names in Project Settings and Editor Settings, use `interface/editor/localize_settings` instead.
 */
  interfaceInspectorDefaultPropertyNameStyle: int;
/**
 * If `true`, add a margin around Array, Dictionary, and Resource Editors that are not already colored.
 * 
 * **Note:** If `interface/inspector/nested_color_mode` is set to **Containers & Resources** this parameter will have no effect since those editors will already be colored.
 */
  interfaceInspectorDelimitateAllContainerAndResources: boolean;
/**
 * If `true`, forces all property groups to be expanded in the Inspector dock and prevents collapsing them.
 */
  interfaceInspectorDisableFolding: boolean;
/**
 * Base speed for increasing/decreasing float values by dragging them in the inspector.
 */
  interfaceInspectorFloatDragSpeed: float;
/**
 * If `true`, `Vector2` and `Vector2i` properties are shown on a single line in the inspector instead of two lines. This is overall more compact, but it can be harder to view and edit large values without expanding the inspector horizontally.
 */
  interfaceInspectorHorizontalVector2Editing: boolean;
/**
 * If `true`, `Vector3`, `Vector3i`, `Vector4`, `Vector4i`, `Rect2`, `Rect2i`, `Plane`, and `Quaternion` properties are shown on a single line in the inspector instead of multiple lines. This is overall more compact, but it can be harder to view and edit large values without expanding the inspector horizontally.
 */
  interfaceInspectorHorizontalVectorTypesEditing: boolean;
/**
 * The number of `Array` or `Dictionary` items to display on each "page" in the inspector. Higher values allow viewing more values per page, but take more time to load. This increased load time is noticeable when selecting nodes that have array or dictionary properties in the editor.
 */
  interfaceInspectorMaxArrayDictionaryItemsPerPage: int;
/**
 * Control which property editors are colored when they are opened.
 * - **Containers & Resources:** Color all Array, Dictionary, and Resource Editors.
 * - **Resources:** Color all Resource Editors.
 * - **External Resources:** Color Resource Editors that edits an external resource.
 */
  interfaceInspectorNestedColorMode: int;
/**
 * If `true`, subresources can be edited in the current inspector view. If the resource type is defined in `interface/inspector/resources_to_open_in_new_inspector` or if this setting is `false`, attempting to edit a subresource always opens a new inspector view.
 */
  interfaceInspectorOpenResourcesInCurrentInspector: boolean;
/**
 * List of resources that should always be opened in a new inspector view, even if `interface/inspector/open_resources_in_current_inspector` is `true`.
 */
  interfaceInspectorResourcesToOpenInNewInspector: PackedStringArray;
/**
 * If `true`, display OpenType features marked as `hidden` by the font file in the `Font` editor.
 */
  interfaceInspectorShowLowLevelOpentypeFeatures: boolean;
/**
 * If `true`, multiple window support in editor is enabled. The following panels can become dedicated windows (i.e. made floating): Docks, Script editor, Shader editor, and Game Workspace.
 * 
 * **Note:** When `interface/editor/single_window_mode` is `true`, the multi window support is always disabled.
 * 
 * **Note:** To query whether the editor can use multiple windows in an editor plugin, use `EditorInterface.is_multi_window_enabled` instead of querying the value of this editor setting.
 */
  interfaceMultiWindowEnable: boolean;
/**
 * If `true`, when panels are made floating they will be maximized.
 * If `false`, when panels are made floating their position and size will match the ones when they are attached (excluding window border) to the editor window.
 */
  interfaceMultiWindowMaximizeWindow: boolean;
/**
 * If `true`, the floating panel position, size, and screen will be saved on editor exit. On next launch the panels that were floating will be made floating in the saved positions, sizes and screens, if possible.
 */
  interfaceMultiWindowRestoreWindowsOnLoad: boolean;
/**
 * Controls when the Close (X) button is displayed on scene tabs at the top of the editor.
 */
  interfaceSceneTabsDisplayCloseButton: int;
/**
 * The maximum width of each scene tab at the top editor (in pixels).
 */
  interfaceSceneTabsMaximumWidth: int;
/**
 * If `true`, when a project is loaded, restores scenes that were opened on the last editor session.
 * 
 * **Note:** With many opened scenes, the editor may take longer to become usable. If starting the editor quickly is necessary, consider setting this to `false`.
 */
  interfaceSceneTabsRestoreScenesOnLoad: boolean;
/**
 * If `true`, show a button next to each scene tab that opens the scene's "dominant" script when clicked. The "dominant" script is the one that is at the highest level in the scene's hierarchy.
 */
  interfaceSceneTabsShowScriptButton: boolean;
/**
 * If `true`, display an automatically-generated thumbnail when hovering scene tabs with the mouse. Scene thumbnails are generated when saving the scene.
 */
  interfaceSceneTabsShowThumbnailOnHover: boolean;
/**
 * The color to use for "highlighted" user interface elements in the editor (pressed and hovered items).
 */
  interfaceThemeAccentColor: Color;
/**
 * The extra spacing to add to various GUI elements in the editor (in pixels). Increasing this value is useful to improve usability on touch screens, at the cost of reducing the amount of usable screen real estate.
 * See also `interface/theme/spacing_preset`.
 */
  interfaceThemeAdditionalSpacing: int;
/**
 * The base color to use for user interface elements in the editor. Secondary colors (such as darker/lighter variants) are derived from this color.
 */
  interfaceThemeBaseColor: Color;
/**
 * The base spacing used by various GUI elements in the editor (in pixels). See also `interface/theme/spacing_preset`.
 */
  interfaceThemeBaseSpacing: int;
/**
 * The border size to use for interface elements (in pixels).
 */
  interfaceThemeBorderSize: int;
/**
 * The contrast factor to use when deriving the editor theme's base color (see `interface/theme/base_color`). When using a positive values, the derived colors will be *darker* than the base color. This contrast factor can be set to a negative value, which will make the derived colors *brighter* than the base color. Negative contrast rates often look better for light themes.
 */
  interfaceThemeContrast: float;
/**
 * The corner radius to use for interface elements (in pixels). `0` is square.
 */
  interfaceThemeCornerRadius: int;
/**
 * The custom theme resource to use for the editor. Must be a Godot theme resource in `.tres` or `.res` format.
 */
  interfaceThemeCustomTheme: string;
/**
 * If `true`, draws additional borders around interactive UI elements in the editor. This is automatically enabled when using the **Black (OLED)** theme preset, as this theme preset uses a fully black background.
 */
  interfaceThemeDrawExtraBorders: boolean;
/**
 * If `true`, the editor theme preset will attempt to automatically match the system theme.
 */
  interfaceThemeFollowSystemTheme: boolean;
/**
 * The icon and font color scheme to use in the editor.
 * - **Auto** determines the color scheme to use automatically based on `interface/theme/base_color`.
 * - **Dark** makes fonts and icons dark (suitable for light themes). Icon colors are automatically converted by the editor following the set of rules defined in this file (https://github.com/godotengine/godot/blob/master/editor/themes/editor_theme_manager.cpp).
 * - **Light** makes fonts and icons light (suitable for dark themes).
 */
  interfaceThemeIconAndFontColor: int;
/**
 * The saturation to use for editor icons. Higher values result in more vibrant colors.
 * 
 * **Note:** The default editor icon saturation was increased by 30% in Godot 4.0 and later. To get Godot 3.x's icon saturation back, set `interface/theme/icon_saturation` to `0.77`.
 */
  interfaceThemeIconSaturation: float;
/**
 * The editor theme preset to use.
 */
  interfaceThemePreset: string;
/**
 * The opacity to use when drawing relationship lines in the editor's `Tree`-based GUIs (such as the Scene tree dock).
 */
  interfaceThemeRelationshipLineOpacity: float;
/**
 * The editor theme spacing preset to use. See also `interface/theme/base_spacing` and `interface/theme/additional_spacing`.
 */
  interfaceThemeSpacingPreset: string;
/**
 * If `true`, set accent color based on system settings.
 * 
 * **Note:** This setting is only effective on Windows, MacOS, and Android.
 */
  interfaceThemeUseSystemAccentColor: boolean;
/**
 * If `true`, long press on touchscreen is treated as right click.
 * 
 * **Note:** Defaults to `true` on touchscreen devices.
 */
  interfaceTouchscreenEnableLongPressAsRightClick: boolean;
/**
 * If `true`, enable two finger pan and scale gestures on touchscreen devices.
 * 
 * **Note:** Defaults to `true` on touchscreen devices.
 */
  interfaceTouchscreenEnablePanAndScaleGestures: boolean;
/**
 * If `true`, increases the scrollbar touch area to improve usability on touchscreen devices.
 * 
 * **Note:** Defaults to `true` on touchscreen devices.
 */
  interfaceTouchscreenIncreaseScrollbarTouchArea: boolean;
/**
 * Specify the multiplier to apply to the scale for the editor gizmo handles to improve usability on touchscreen devices.
 * 
 * **Note:** Defaults to `1` on non-touchscreen devices.
 */
  interfaceTouchscreenScaleGizmoHandles: float;
/**
 * Specifies how the engine should check for updates.
 * - **Disable Update Checks** will block the engine from checking updates (see also `network/connection/network_mode`).
 * - **Check Newest Preview** (default for preview versions) will check for the newest available development snapshot.
 * - **Check Newest Stable** (default for stable versions) will check for the newest available stable version.
 * - **Check Newest Patch** will check for the latest available stable version, but only within the same minor version. E.g. if your version is `4.3.stable`, you will be notified about `4.3.1.stable`, but not `4.4.stable`.
 * All update modes will ignore builds with different major versions (e.g. Godot 4 -> Godot 5).
 */
  networkConnectionEngineVersionUpdateMode: int;
/**
 * Determines whether online features are enabled in the editor, such as the Asset Library or update checks. Disabling these online features helps alleviate privacy concerns by preventing the editor from making HTTP requests to the Godot website or third-party platforms hosting assets from the Asset Library.
 */
  networkConnectionNetworkMode: int;
/**
 * The address to listen to when starting the remote debugger. This can be set to this device's local IP address to allow external clients to connect to the remote debugger (instead of restricting the remote debugger to connections from `localhost`).
 */
  networkDebugRemoteHost: string;
/**
 * The port to listen to when starting the remote debugger. Godot will try to use port numbers above the configured number if the configured number is already taken by another application.
 */
  networkDebugRemotePort: int;
/**
 * The host to use to contact the HTTP and HTTPS proxy in the editor (for the asset library and export template downloads). See also `network/http_proxy/port`.
 * 
 * **Note:** Godot currently doesn't automatically use system proxy settings, so you have to enter them manually here if needed.
 */
  networkHttpProxyHost: string;
/**
 * The port number to use to contact the HTTP and HTTPS proxy in the editor (for the asset library and export template downloads). See also `network/http_proxy/host`.
 * 
 * **Note:** Godot currently doesn't automatically use system proxy settings, so you have to enter them manually here if needed.
 */
  networkHttpProxyPort: int;
/**
 * The TLS certificate bundle to use for HTTP requests made within the editor (e.g. from the AssetLib tab). If left empty, the included Mozilla certificate bundle (https://github.com/godotengine/godot/blob/master/thirdparty/certs/ca-certificates.crt) will be used.
 */
  networkTlsEditorTlsCertificates: string;
/**
 * If `true`, enable TLSv1.3 negotiation.
 * 
 * **Note:** Only supported when using Mbed TLS 3.0 or later (Linux distribution packages may be compiled against older system Mbed TLS packages), otherwise the maximum supported TLS version is always TLSv1.2.
 */
  networkTlsEnableTlsV13: boolean;
/**
 * The renderer type that will be checked off by default when creating a new project. Accepted strings are "forward_plus", "mobile" or "gl_compatibility".
 */
  projectManagerDefaultRenderer: string;
/**
 * Directory naming convention for the project manager. Options are "No convention" (project name is directory name), "kebab-case" (default), "snake_case", "camelCase", "PascalCase", or "Title Case".
 */
  projectManagerDirectoryNamingConvention: int;
/**
 * The sorting order to use in the project manager. When changing the sorting order in the project manager, this setting is set permanently in the editor settings.
 */
  projectManagerSortingOrder: int;
/**
 * If `true`, saves all scenes and scripts automatically before running the project. Setting this to `false` prevents the editor from saving if there are no changes which can speed up the project startup slightly, but it makes it possible to run a project that has unsaved changes. (Unsaved changes will not be visible in the running project.)
 */
  runAutoSaveSaveBeforeRunning: boolean;
/**
 * The action to execute on the bottom panel when running the project.
 * 
 * **Note:** This option won't do anything if the bottom panel switching is locked using the pin button in the corner of the bottom panel.
 */
  runBottomPanelActionOnPlay: int;
/**
 * The action to execute on the bottom panel when stopping the project.
 * 
 * **Note:** This option won't do anything if the bottom panel switching is locked using the pin button in the corner of the bottom panel.
 */
  runBottomPanelActionOnStop: int;
/**
 * If `true`, the editor will clear the Output panel when running the project.
 */
  runOutputAlwaysClearOutputOnPlay: boolean;
/**
 * The size of the font in the **Output** panel at the bottom of the editor. This setting does not impact the font size of the script editor (see `interface/editor/code_font_size`).
 */
  runOutputFontSize: int;
/**
 * Maximum number of lines to show at any one time in the Output panel.
 */
  runOutputMaxLines: int;
/**
 * If `true`, on Linux/BSD, the editor will check for Wayland first instead of X11 (if available).
 */
  runPlatformsLinuxbsdPreferWayland: boolean;
/**
 * Specifies how the Play window is launched relative to the Android editor.
 * - **Auto (based on screen size)** (default) will automatically choose how to launch the Play window based on the device and screen metrics. Defaults to **Same as Editor** on phones and **Side-by-side with Editor** on tablets.
 * - **Same as Editor** will launch the Play window in the same window as the Editor.
 * - **Side-by-side with Editor** will launch the Play window side-by-side with the Editor window.
 * 
 * **Note:** Only available in the Android editor.
 */
  runWindowPlacementAndroidWindow: int;
/**
 * Overrides game embedding setting for all newly opened projects. If enabled, game embedding settings are not saved.
 */
  runWindowPlacementGameEmbedMode: int;
/**
 * The window mode to use to display the project when starting the project from the editor.
 * 
 * **Note:** Game embedding is not available for "Force Maximized" or "Force Fullscreen."
 */
  runWindowPlacementRect: int;
/**
 * The custom position to use when starting the project from the editor (in pixels from the top-left corner). Only effective if `run/window_placement/rect` is set to **Custom Position**.
 */
  runWindowPlacementRectCustomPosition: Vector2;
/**
 * The monitor to display the project on when starting the project from the editor.
 */
  runWindowPlacementScreen: int;
/**
 * If `true`, makes the caret blink according to `text_editor/appearance/caret/caret_blink_interval`. Disabling this setting can improve battery life on laptops if you spend long amounts of time in the script editor, since it will reduce the frequency at which the editor needs to be redrawn.
 */
  textEditorAppearanceCaretCaretBlink: boolean;
/**
 * The interval at which the caret will blink (in seconds). See also `text_editor/appearance/caret/caret_blink`.
 */
  textEditorAppearanceCaretCaretBlinkInterval: float;
/**
 * If `true`, highlights all occurrences of the currently selected text in the script editor. See also `text_editor/theme/highlighting/word_highlighted_color`.
 */
  textEditorAppearanceCaretHighlightAllOccurrences: boolean;
/**
 * If `true`, colors the background of the line the caret is currently on with `text_editor/theme/highlighting/current_line_color`.
 */
  textEditorAppearanceCaretHighlightCurrentLine: boolean;
/**
 * The shape of the caret to use in the script editor. **Line** displays a vertical line to the left of the current character, whereas **Block** displays an outline over the current character.
 */
  textEditorAppearanceCaretType: int;
/**
 * The column at which to display a subtle line as a line length guideline for scripts. This should generally be greater than `text_editor/appearance/guidelines/line_length_guideline_soft_column`.
 */
  textEditorAppearanceGuidelinesLineLengthGuidelineHardColumn: int;
/**
 * The column at which to display a *very* subtle line as a line length guideline for scripts. This should generally be lower than `text_editor/appearance/guidelines/line_length_guideline_hard_column`.
 */
  textEditorAppearanceGuidelinesLineLengthGuidelineSoftColumn: int;
/**
 * If `true`, displays line length guidelines to help you keep line lengths in check. See also `text_editor/appearance/guidelines/line_length_guideline_soft_column` and `text_editor/appearance/guidelines/line_length_guideline_hard_column`.
 */
  textEditorAppearanceGuidelinesShowLineLengthGuidelines: boolean;
/**
 * If `true`, highlights type-safe lines by displaying their line number color with `text_editor/theme/highlighting/safe_line_number_color` instead of `text_editor/theme/highlighting/line_number_color`. Type-safe lines are lines of code where the type of all variables is known at compile-time. These type-safe lines may run faster thanks to typed instructions.
 */
  textEditorAppearanceGuttersHighlightTypeSafeLines: boolean;
/**
 * If `true`, displays line numbers with zero padding (e.g. `007` instead of `7`).
 */
  textEditorAppearanceGuttersLineNumbersZeroPadded: boolean;
/**
 * If `true`, displays a gutter at the left containing icons for methods with signal connections and for overridden methods.
 */
  textEditorAppearanceGuttersShowInfoGutter: boolean;
/**
 * If `true`, displays line numbers in a gutter at the left.
 */
  textEditorAppearanceGuttersShowLineNumbers: boolean;
/**
 * If `text_editor/appearance/lines/word_wrap` is set to `1`, sets text wrapping mode. To see how each mode behaves, see `TextServer.AutowrapMode`.
 */
  textEditorAppearanceLinesAutowrapMode: int;
/**
 * If `true`, displays the folding arrows next to indented code sections and allows code folding. If `false`, hides the folding arrows next to indented code sections and disallows code folding.
 */
  textEditorAppearanceLinesCodeFolding: boolean;
/**
 * If `true`, wraps long lines over multiple lines to avoid horizontal scrolling. This is a display-only feature; it does not actually insert line breaks in your scripts.
 */
  textEditorAppearanceLinesWordWrap: int;
/**
 * The width of the minimap in the script editor (in pixels).
 */
  textEditorAppearanceMinimapMinimapWidth: int;
/**
 * If `true`, draws an overview of the script near the scroll bar. The minimap can be left-clicked to scroll directly to a location in an "absolute" manner.
 */
  textEditorAppearanceMinimapShowMinimap: boolean;
/**
 * If `true`, draws space characters as centered points.
 */
  textEditorAppearanceWhitespaceDrawSpaces: boolean;
/**
 * If `true`, draws tab characters as chevrons.
 */
  textEditorAppearanceWhitespaceDrawTabs: boolean;
/**
 * The space to add between lines (in pixels). Greater line spacing can help improve readability at the cost of displaying fewer lines on screen.
 */
  textEditorAppearanceWhitespaceLineSpacing: int;
/**
 * If `true`, documentation tooltips will appear when hovering over a symbol.
 */
  textEditorBehaviorDocumentationEnableTooltips: boolean;
/**
 * If `true`, tool scripts will be automatically soft-reloaded after they are saved.
 */
  textEditorBehaviorFilesAutoReloadAndParseScriptsOnSave: boolean;
/**
 * If `true`, automatically reloads scripts in the editor when they have been modified and saved by external editors.
 */
  textEditorBehaviorFilesAutoReloadScriptsOnExternalChange: boolean;
/**
 * If set to a value greater than `0`, automatically saves the current script following the specified interval (in seconds). This can be used to prevent data loss if the editor crashes.
 */
  textEditorBehaviorFilesAutosaveIntervalSecs: int;
/**
 * If `true`, converts indentation to match the script editor's indentation settings when saving a script. See also `text_editor/behavior/indent/type`.
 */
  textEditorBehaviorFilesConvertIndentOnSave: boolean;
/**
 * If `true`, opening a scene automatically opens the script attached to the root node, or the topmost node if the root has no script.
 */
  textEditorBehaviorFilesOpenDominantScriptOnSceneChange: boolean;
/**
 * If `true`, reopens scripts that were opened in the last session when the editor is reopened on a given project.
 */
  textEditorBehaviorFilesRestoreScriptsOnLoad: boolean;
/**
 * If `true`, trims all empty newlines after the final newline when saving a script. Final newlines refer to the empty newlines found at the end of files. Since these serve no practical purpose, they can and should be removed to make version control diffs less noisy.
 */
  textEditorBehaviorFilesTrimFinalNewlinesOnSave: boolean;
/**
 * If `true`, trims trailing whitespace when saving a script. Trailing whitespace refers to tab and space characters placed at the end of lines. Since these serve no practical purpose, they can and should be removed to make version control diffs less noisy.
 */
  textEditorBehaviorFilesTrimTrailingWhitespaceOnSave: boolean;
/**
 * If `true`, copying or cutting without a selection is performed on all lines with a caret. Otherwise, copy and cut require a selection.
 */
  textEditorBehaviorGeneralEmptySelectionClipboard: boolean;
/**
 * If `true`, automatically indents code when pressing the `Enter` key based on blocks above the new line.
 */
  textEditorBehaviorIndentAutoIndent: boolean;
/**
 * If `true`, all wrapped lines are indented to the same amount as the unwrapped line.
 */
  textEditorBehaviorIndentIndentWrappedLines: boolean;
/**
 * When using tab indentation, determines the length of each tab. When using space indentation, determines how many spaces are inserted when pressing `Tab` and when automatic indentation is performed.
 */
  textEditorBehaviorIndentSize: int;
/**
 * The indentation style to use (tabs or spaces).
 * 
 * **Note:** The GDScript style guide (https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_styleguide.html) recommends using tabs for indentation. It is advised to change this setting only if you need to work on a project that currently uses spaces for indentation.
 */
  textEditorBehaviorIndentType: int;
/**
 * The characters to consider as word delimiters if `text_editor/behavior/navigation/use_custom_word_separators` is `true`. This is in addition to default characters if `text_editor/behavior/navigation/use_default_word_separators` is `true`. The characters should be defined without separation, for example `_♥=`.
 */
  textEditorBehaviorNavigationCustomWordSeparators: string;
/**
 * If `true`, allows drag-and-dropping text in the script editor to move text. Disable this if you find yourself accidentally drag-and-dropping text in the script editor.
 */
  textEditorBehaviorNavigationDragAndDropSelection: boolean;
/**
 * If `true`, the caret will be moved when right-clicking somewhere in the script editor (like when left-clicking or middle-clicking). If `false`, the caret will only be moved when left-clicking or middle-clicking somewhere.
 */
  textEditorBehaviorNavigationMoveCaretOnRightClick: boolean;
/**
 * If `true`, opens the script editor when connecting a signal to an existing script method from the Node dock.
 */
  textEditorBehaviorNavigationOpenScriptWhenConnectingSignalToExistingMethod: boolean;
/**
 * If `true`, allows scrolling past the end of the file.
 */
  textEditorBehaviorNavigationScrollPastEndOfFile: boolean;
/**
 * If `true`, enables a smooth scrolling animation when using the mouse wheel to scroll. See `text_editor/behavior/navigation/v_scroll_speed` for the speed of this animation.
 * 
 * **Note:** `text_editor/behavior/navigation/smooth_scrolling` currently behaves poorly in projects where `ProjectSettings.physics/common/physics_ticks_per_second` has been increased significantly from its default value (`60`). In this case, it is recommended to disable this setting.
 */
  textEditorBehaviorNavigationSmoothScrolling: boolean;
/**
 * If `true`, prevents automatically switching between the Script and 2D/3D screens when selecting a node in the Scene tree dock.
 */
  textEditorBehaviorNavigationStayInScriptEditorOnNodeSelected: boolean;
/**
 * If `true`, uses the characters in `text_editor/behavior/navigation/custom_word_separators` as word separators for word navigation and operations. This is in addition to the default characters if `text_editor/behavior/navigation/use_default_word_separators` is also enabled. Word navigation and operations include double-clicking on a word or holding `Ctrl` (`Cmd` on macOS) while pressing `left`, `right`, `backspace`, or `delete`.
 */
  textEditorBehaviorNavigationUseCustomWordSeparators: boolean;
/**
 * If `true`, uses the characters in `\`!"#$%&'()*+,-./:;<=>?@[\]^\`{|}~`, the Unicode General Punctuation table, and the Unicode CJK Punctuation table as word separators for word navigation and operations. If `false`, a subset of these characters are used and does not include the characters `<>$~^=+|`. This is in addition to custom characters if `text_editor/behavior/navigation/use_custom_word_separators` is also enabled. These characters are used to determine where a word stops. Word navigation and operations include double-clicking on a word or holding `Ctrl` (`Cmd` on macOS) while pressing `left`, `right`, `backspace`, or `delete`.
 */
  textEditorBehaviorNavigationUseDefaultWordSeparators: boolean;
/**
 * The speed of scrolling in lines per second when `text_editor/behavior/navigation/smooth_scrolling` is `true`. Higher values make the script scroll by faster when using the mouse wheel.
 * 
 * **Note:** You can hold down `Alt` while using the mouse wheel to temporarily scroll 5 times faster.
 */
  textEditorBehaviorNavigationVScrollSpeed: int;
/**
 * If `true`, uses `NodePath` instead of `String` when appropriate for code autocompletion or for drag and dropping object properties into the script editor.
 */
  textEditorCompletionAddNodePathLiterals: boolean;
/**
 * If `true`, uses `StringName` instead of `String` when appropriate for code autocompletion.
 */
  textEditorCompletionAddStringNameLiterals: boolean;
/**
 * If `true`, adds GDScript static typing (https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/static_typing.html) hints such as `-> void` and `: int` when using code autocompletion or when creating onready variables by drag and dropping nodes into the script editor while pressing the `Ctrl` key. If `true`, newly created scripts will also automatically have type hints added to their method parameters and return types.
 */
  textEditorCompletionAddTypeHints: boolean;
/**
 * If `true`, automatically inserts the matching closing brace when the opening brace is inserted by typing or autocompletion. Also automatically removes the closing brace when pressing `Backspace` on the opening brace. This includes brackets (`()`, `[]`, `{}`), string quotation marks (`''`, `""`), and comments (`/**\/`) if the language supports it.
 */
  textEditorCompletionAutoBraceComplete: boolean;
/**
 * The delay in seconds after which autocompletion suggestions should be displayed when the user stops typing.
 */
  textEditorCompletionCodeCompleteDelay: float;
/**
 * If `true`, code completion will be triggered automatically after `text_editor/completion/code_complete_delay`. Even if `false`, code completion can be triggered manually with the `ui_text_completion_query` action (by default `Ctrl + Space` or `Cmd + Space` on macOS).
 */
  textEditorCompletionCodeCompleteEnabled: boolean;
/**
 * If `true` enables the coloring for some items in the autocompletion suggestions, like vector components.
 */
  textEditorCompletionColorizeSuggestions: boolean;
/**
 * If `true`, provides autocompletion suggestions for file paths in methods such as `load()` and `preload()`.
 */
  textEditorCompletionCompleteFilePaths: boolean;
/**
 * The delay in seconds after which the script editor should check for errors when the user stops typing.
 */
  textEditorCompletionIdleParseDelay: float;
/**
 * The delay used instead of `text_editor/completion/idle_parse_delay`, when the parser has found errors. A lower value should feel more responsive while fixing code, but may cause notable stuttering and increase CPU usage.
 */
  textEditorCompletionIdleParseDelayWithErrorsFound: float;
/**
 * If `true`, the code completion tooltip will appear below the current line unless there is no space on screen below the current line. If `false`, the code completion tooltip will appear above the current line.
 */
  textEditorCompletionPutCallhintTooltipBelowCurrentLine: boolean;
/**
 * If `true`, performs string autocompletion with single quotes. If `false`, performs string autocompletion with double quotes (which matches the GDScript style guide (https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_styleguide.html)).
 */
  textEditorCompletionUseSingleQuotes: boolean;
/**
 * The command-line arguments to pass to the external text editor that is run when `text_editor/external/use_external_editor` is `true`. See also `text_editor/external/exec_path`.
 */
  textEditorExternalExecFlags: string;
/**
 * The path to the text editor executable used to edit text files if `text_editor/external/use_external_editor` is `true`.
 */
  textEditorExternalExecPath: string;
/**
 * If `true`, uses an external editor instead of the built-in Script Editor. See also `text_editor/external/exec_path` and `text_editor/external/exec_flags`.
 */
  textEditorExternalUseExternalEditor: boolean;
/**
 * Controls which multi-line code blocks should be displayed in the editor help. This setting does not affect single-line code literals in the editor help.
 */
  textEditorHelpClassReferenceExamples: int;
/**
 * The font size to use for the editor help (built-in class reference).
 */
  textEditorHelpHelpFontSize: int;
/**
 * The font size to use for code samples in the editor help (built-in class reference).
 */
  textEditorHelpHelpSourceFontSize: int;
/**
 * The font size to use for headings in the editor help (built-in class reference).
 */
  textEditorHelpHelpTitleFontSize: int;
/**
 * If `true`, displays a table of contents at the left of the editor help (at the location where the members overview would appear when editing a script).
 */
  textEditorHelpShowHelpIndex: boolean;
/**
 * If `true`, the script's method list in the Script Editor is sorted alphabetically.
 */
  textEditorHelpSortFunctionsAlphabetically: boolean;
/**
 * If `true`, class reference pages are grouped together at the bottom of the Script Editor's script list.
 */
  textEditorScriptListGroupHelpPages: boolean;
/**
 * If `true`, the scripts that are used by the current scene are highlighted in the Script Editor's script list.
 */
  textEditorScriptListHighlightSceneScripts: boolean;
/**
 * Specifies how script paths should be displayed in Script Editor's script list. If using the "Name" option and some scripts share the same file name, more parts of their paths are revealed to avoid conflicts.
 */
  textEditorScriptListListScriptNamesAs: int;
/**
 * If `true`, the names of recently opened scripts in the Script Editor are highlighted with the accent color, with its intensity based on how recently they were opened.
 */
  textEditorScriptListScriptTemperatureEnabled: boolean;
/**
 * How many script names can be highlighted at most, if `text_editor/script_list/script_temperature_enabled` is `true`. Scripts older than this value use the default font color.
 */
  textEditorScriptListScriptTemperatureHistorySize: int;
/**
 * If `true`, displays an overview of the current script's member variables and functions at the left of the script editor. See also `text_editor/script_list/sort_members_outline_alphabetically`.
 */
  textEditorScriptListShowMembersOverview: boolean;
/**
 * If `true`, sorts the members outline (located at the left of the script editor) using alphabetical order. If `false`, sorts the members outline depending on the order in which members are found in the script.
 * 
 * **Note:** Only effective if `text_editor/script_list/show_members_overview` is `true`.
 */
  textEditorScriptListSortMembersOutlineAlphabetically: boolean;
/**
 * Specifies sorting used for Script Editor's open script list.
 */
  textEditorScriptListSortScriptsBy: int;
/**
 * The syntax theme to use in the script editor.
 * You can save your own syntax theme from your current settings by using **File > Theme > Save As...** at the top of the script editor. The syntax theme will then be available locally in the list of color themes.
 * You can find additional syntax themes to install in the godot-syntax-themes (https://github.com/godotengine/godot-syntax-themes) repository.
 */
  textEditorThemeColorTheme: string;
/**
 * The script editor's background color. If set to a translucent color, the editor theme's base color will be visible behind.
 */
  textEditorThemeHighlightingBackgroundColor: Color;
/**
 * The script editor's base type color (used for types like `Vector2`, `Vector3`, `Color`, ...).
 */
  textEditorThemeHighlightingBaseTypeColor: Color;
/**
 * The script editor's bookmark icon color (displayed in the gutter).
 */
  textEditorThemeHighlightingBookmarkColor: Color;
/**
 * The script editor's brace mismatch color. Used when the caret is currently on a mismatched brace, parenthesis or bracket character.
 */
  textEditorThemeHighlightingBraceMismatchColor: Color;
/**
 * The script editor's breakpoint icon color (displayed in the gutter).
 */
  textEditorThemeHighlightingBreakpointColor: Color;
/**
 * The script editor's caret background color.
 * 
 * **Note:** This setting has no effect as it's currently unused.
 */
  textEditorThemeHighlightingCaretBackgroundColor: Color;
/**
 * The script editor's caret color.
 */
  textEditorThemeHighlightingCaretColor: Color;
/**
 * The script editor's color for the code folding icon (displayed in the gutter).
 */
  textEditorThemeHighlightingCodeFoldingColor: Color;
/**
 * The script editor's comment color.
 * 
 * **Note:** In GDScript, unlike Python, multiline strings are not considered to be comments, and will use the string highlighting color instead.
 */
  textEditorThemeHighlightingCommentColor: Color;
/**
 * The script editor's autocompletion box background color.
 */
  textEditorThemeHighlightingCompletionBackgroundColor: Color;
/**
 * The script editor's autocompletion box background color to highlight existing characters in the completion results. This should be a translucent color so that `text_editor/theme/highlighting/completion_selected_color` can be seen behind.
 */
  textEditorThemeHighlightingCompletionExistingColor: Color;
/**
 * The script editor's autocompletion box text color.
 */
  textEditorThemeHighlightingCompletionFontColor: Color;
/**
 * The script editor's autocompletion box scroll bar color.
 */
  textEditorThemeHighlightingCompletionScrollColor: Color;
/**
 * The script editor's autocompletion box scroll bar color when hovered or pressed with the mouse.
 */
  textEditorThemeHighlightingCompletionScrollHoveredColor: Color;
/**
 * The script editor's autocompletion box background color for the currently selected line.
 */
  textEditorThemeHighlightingCompletionSelectedColor: Color;
/**
 * The script editor's control flow keyword color (used for keywords like `if`, `for`, `return`, ...).
 */
  textEditorThemeHighlightingControlFlowKeywordColor: Color;
/**
 * The script editor's background color for the line the caret is currently on. This should be set to a translucent color so that it can display on top of other line color modifiers such as `text_editor/theme/highlighting/mark_color`.
 */
  textEditorThemeHighlightingCurrentLineColor: Color;
/**
 * The script editor's documentation comment color. In GDScript, this is used for comments starting with `##`. In C#, this is used for comments starting with `///` or `/**`.
 */
  textEditorThemeHighlightingDocCommentColor: Color;
/**
 * The script editor's engine type color (`Object`, `Mesh`, `Node`, ...).
 */
  textEditorThemeHighlightingEngineTypeColor: Color;
/**
 * The script editor's color for the debugger's executing line icon (displayed in the gutter).
 */
  textEditorThemeHighlightingExecutingLineColor: Color;
/**
 * The script editor's background line highlighting color for folded code region.
 */
  textEditorThemeHighlightingFoldedCodeRegionColor: Color;
/**
 * The script editor's function call color.
 * 
 * **Note:** When using the GDScript syntax highlighter, this is replaced by the function definition color configured in the syntax theme for function definitions (e.g. `func _ready():`).
 */
  textEditorThemeHighlightingFunctionColor: Color;
/**
 * The script editor's non-control flow keyword color (used for keywords like `var`, `func`, `extends`, ...).
 */
  textEditorThemeHighlightingKeywordColor: Color;
/**
 * The script editor's color for the line length guideline. The "hard" line length guideline will be drawn with this color, whereas the "soft" line length guideline will be drawn with half of its opacity.
 */
  textEditorThemeHighlightingLineLengthGuidelineColor: Color;
/**
 * The script editor's color for line numbers. See also `text_editor/theme/highlighting/safe_line_number_color`.
 */
  textEditorThemeHighlightingLineNumberColor: Color;
/**
 * The script editor's background color for lines with errors. This should be set to a translucent color so that it can display on top of other line color modifiers such as `text_editor/theme/highlighting/current_line_color`.
 */
  textEditorThemeHighlightingMarkColor: Color;
/**
 * The script editor's color for member variables on objects (e.g. `self.some_property`).
 * 
 * **Note:** This color is not used for local variable declaration and access.
 */
  textEditorThemeHighlightingMemberVariableColor: Color;
/**
 * The script editor's color for numbers (integer and floating-point).
 */
  textEditorThemeHighlightingNumberColor: Color;
/**
 * The script editor's color for type-safe line numbers. See also `text_editor/theme/highlighting/line_number_color`.
 * 
 * **Note:** Only displayed if `text_editor/appearance/gutters/highlight_type_safe_lines` is `true`.
 */
  textEditorThemeHighlightingSafeLineNumberColor: Color;
/**
 * The script editor's color for the border of search results. This border helps bring further attention to the search result. Set this color's opacity to 0 to disable the border.
 */
  textEditorThemeHighlightingSearchResultBorderColor: Color;
/**
 * The script editor's background color for search results.
 */
  textEditorThemeHighlightingSearchResultColor: Color;
/**
 * The script editor's background color for the currently selected text.
 */
  textEditorThemeHighlightingSelectionColor: Color;
/**
 * The script editor's color for strings (single-line and multi-line).
 */
  textEditorThemeHighlightingStringColor: Color;
/**
 * The script editor's color for operators (`( ) [ ] { } + - * /`, ...).
 */
  textEditorThemeHighlightingSymbolColor: Color;
/**
 * The script editor's color for text not highlighted by any syntax highlighting rule.
 */
  textEditorThemeHighlightingTextColor: Color;
/**
 * The script editor's background color for text. This should be set to a translucent color so that it can display on top of other line color modifiers such as `text_editor/theme/highlighting/current_line_color`.
 */
  textEditorThemeHighlightingTextSelectedColor: Color;
/**
 * The script editor's color for user-defined types (using `class_name`).
 */
  textEditorThemeHighlightingUserTypeColor: Color;
/**
 * The script editor's color for words highlighted by selecting them. Only visible if `text_editor/appearance/caret/highlight_all_occurrences` is `true`.
 */
  textEditorThemeHighlightingWordHighlightedColor: Color;
/**
 * The vertical line separation used in text editors, in pixels.
 */
  textEditorThemeLineSpacing: int;
/**
 * Path to private SSH key file for the editor's Version Control integration credentials.
 */
  versionControlSshPrivateKeyPath: string;
/**
 * Path to public SSH key file for the editor's Version Control integration credentials.
 */
  versionControlSshPublicKeyPath: string;
/**
 * Default username for editor's Version Control integration.
 */
  versionControlUsername: string;
/**
 * Adds a custom property info to a property. The dictionary must contain:
 * - `name`: `String` (the name of the property)
 * - `type`: [int] (see `Variant.Type`)
 * - optionally `hint`: [int] (see `PropertyHint`) and `hint_string`: `String`
 * 
 * 				```gdscript
 * 
 * 				var settings = EditorInterface.get_editor_settings()
 * 				settings.set("category/property_name", 0)
 * 
 * 				var property_info = {
 * 				    "name": "category/property_name",
 * 				    "type": TYPE_INT,
 * 				    "hint": PROPERTY_HINT_ENUM,
 * 				    "hint_string": "one,two,three"
 * 				}
 * 
 * 				settings.add_property_info(property_info)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var settings = GetEditorInterface().GetEditorSettings();
 * 				settings.Set("category/property_name", 0);
 * 
 * 				var propertyInfo = new Godot.Collections.Dictionary
 * 				{
 * 				    {"name", "category/propertyName"},
 * 				    {"type", Variant.Type.Int},
 * 				    {"hint", PropertyHint.Enum},
 * 				    {"hint_string", "one,two,three"}
 * 				};
 * 
 * 				settings.AddPropertyInfo(propertyInfo);
 * 				
 * 
 * ```
 * 
 * @param info GodotDictionary<any>
 */
  addPropertyInfo(info: GodotDictionary<any>): void;
/**
 * Checks if any settings with the prefix `setting_prefix` exist in the set of changed settings. See also `get_changed_settings`.
 * @param settingPrefix string
 * @returns boolean
 */
  checkChangedSettingsInGroup(settingPrefix: string): boolean;
/**
 * Erases the setting whose name is specified by `property`.
 * @param property string
 */
  erase(property: string): void;
/**
 * Gets an array of the settings which have been changed since the last save. Note that internally `changed_settings` is cleared after a successful save, so generally the most appropriate place to use this method is when processing `NOTIFICATION_EDITOR_SETTINGS_CHANGED`.
 * @returns PackedStringArray
 */
  getChangedSettings(): PackedStringArray;
/**
 * Returns the list of favorite files and directories for this project.
 * @returns PackedStringArray
 */
  getFavorites(): PackedStringArray;
/**
 * Returns project-specific metadata for the `section` and `key` specified. If the metadata doesn't exist, `default` will be returned instead. See also `set_project_metadata`.
 * @param section string
 * @param key string
 * @param default_ Variant (optional, default: null)
 * @returns Variant
 */
  getProjectMetadata(section: string, key: string, default_?: Variant): Variant;
/**
 * Returns the list of recently visited folders in the file dialog for this project.
 * @returns PackedStringArray
 */
  getRecentDirs(): PackedStringArray;
/**
 * Returns the value of the setting specified by `name`. This is equivalent to using `Object.get` on the EditorSettings instance.
 * @param name string
 * @returns Variant
 */
  getSetting(name: string): Variant;
/**
 * Returns `true` if the setting specified by `name` exists, `false` otherwise.
 * @param name string
 * @returns boolean
 */
  hasSetting(name: string): boolean;
/**
 * Marks the passed editor setting as being changed, see `get_changed_settings`. Only settings which exist (see `has_setting`) will be accepted.
 * @param setting string
 */
  markSettingChanged(setting: string): void;
/**
 * Overrides the built-in editor action `name` with the input actions defined in `actions_list`.
 * @param name string
 * @param actionsList InputEvent[]
 */
  setBuiltinActionOverride(name: string, actionsList: InputEvent[]): void;
/**
 * Sets the list of favorite files and directories for this project.
 * @param dirs PackedStringArray
 */
  setFavorites(dirs: PackedStringArray): void;
/**
 * Sets the initial value of the setting specified by `name` to `value`. This is used to provide a value for the Revert button in the Editor Settings. If `update_current` is `true`, the setting is reset to `value` as well.
 * @param name StringName
 * @param value Variant
 * @param updateCurrent boolean
 */
  setInitialValue(name: StringName, value: Variant, updateCurrent: boolean): void;
/**
 * Sets project-specific metadata with the `section`, `key` and `data` specified. This metadata is stored outside the project folder and therefore won't be checked into version control. See also `get_project_metadata`.
 * @param section string
 * @param key string
 * @param data Variant
 */
  setProjectMetadata(section: string, key: string, data: Variant): void;
/**
 * Sets the list of recently visited folders in the file dialog for this project.
 * @param dirs PackedStringArray
 */
  setRecentDirs(dirs: PackedStringArray): void;
/**
 * Sets the `value` of the setting specified by `name`. This is equivalent to using `Object.set` on the EditorSettings instance.
 * @param name string
 * @param value Variant
 */
  setSetting(name: string, value: Variant): void;
/**
 * Emitted after any editor setting has changed.
 */
  settingsChanged: Signal<[]>;
/**
 * Emitted after any editor setting has changed. It's used by various editor plugins to update their visuals on theme changes or logic on configuration changes.
 */
  static readonly NOTIFICATION_EDITOR_SETTINGS_CHANGED: int;
}
