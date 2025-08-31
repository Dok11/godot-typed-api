import type { CameraAttributes, Compositor, Environment, GodotArray, GodotDictionary, Node3D, Plane, Projection, RID, Transform3D, Vector2, Vector3, float, int } from "../index.d.ts";
/**
 * Camera node, displays from a point of view.
 * 
 * `Camera3D` is a special node that displays what is visible from its current location. Cameras register themselves in the nearest `Viewport` node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport. In other words, a camera just provides 3D display capabilities to a `Viewport`, and, without one, a scene registered in that `Viewport` (or higher viewports) can't be displayed.
 */
export class Camera3D extends Node3D {
/**
 * The `CameraAttributes` to use for this camera.
 */
  attributes: CameraAttributes;
/**
 * The `Compositor` to use for this camera.
 */
  compositor: Compositor;
/**
 * The culling mask that describes which `VisualInstance3D.layers` are rendered by this camera. By default, all 20 user-visible layers are rendered.
 * 
 * **Note:** Since the `cull_mask` allows for 32 layers to be stored in total, there are an additional 12 layers that are only used internally by the engine and aren't exposed in the editor. Setting `cull_mask` using a script allows you to toggle those reserved layers, which can be useful for editor plugins.
 * To adjust `cull_mask` more easily using a script, use `get_cull_mask_value` and `set_cull_mask_value`.
 * 
 * **Note:** `VoxelGI`, SDFGI and `LightmapGI` will always take all layers into account to determine what contributes to global illumination. If this is an issue, set `GeometryInstance3D.gi_mode` to `GeometryInstance3D.GI_MODE_DISABLED` for meshes and `Light3D.light_bake_mode` to `Light3D.BAKE_DISABLED` for lights to exclude them from global illumination.
 */
  cullMask: int;
/**
 * If `true`, the ancestor `Viewport` is currently using this camera.
 * If multiple cameras are in the scene, one will always be made current. For example, if two `Camera3D` nodes are present in the scene and only one is current, setting one camera's `current` to `false` will cause the other camera to be made current.
 */
  current: boolean;
/**
 * If not `DOPPLER_TRACKING_DISABLED`, this camera will simulate the Doppler effect (https://en.wikipedia.org/wiki/Doppler_effect) for objects changed in particular `_process` methods. See `DopplerTracking` for possible values.
 */
  dopplerTracking: int;
/**
 * The `Environment` to use for this camera.
 */
  environment: Environment;
/**
 * The distance to the far culling boundary for this camera relative to its local Z axis. Higher values allow the camera to see further away, while decreasing `far` can improve performance if it results in objects being partially or fully culled.
 */
  far: float;
/**
 * The camera's field of view angle (in degrees). Only applicable in perspective mode. Since `keep_aspect` locks one axis, `fov` sets the other axis' field of view angle.
 * For reference, the default vertical field of view value (`75.0`) is equivalent to a horizontal FOV of:
 * - ~91.31 degrees in a 4:3 viewport
 * - ~101.67 degrees in a 16:10 viewport
 * - ~107.51 degrees in a 16:9 viewport
 * - ~121.63 degrees in a 21:9 viewport
 */
  fov: float;
/**
 * The camera's frustum offset. This can be changed from the default to create "tilted frustum" effects such as Y-shearing (https://zdoom.org/wiki/Y-shearing).
 * 
 * **Note:** Only effective if `projection` is `PROJECTION_FRUSTUM`.
 */
  frustumOffset: Vector2;
/**
 * The horizontal (X) offset of the camera viewport.
 */
  hOffset: float;
/**
 * The axis to lock during `fov`/`size` adjustments. Can be either `KEEP_WIDTH` or `KEEP_HEIGHT`.
 */
  keepAspect: int;
/**
 * The distance to the near culling boundary for this camera relative to its local Z axis. Lower values allow the camera to see objects more up close to its origin, at the cost of lower precision across the *entire* range. Values lower than the default can lead to increased Z-fighting.
 */
  near: float;
/**
 * The camera's projection mode. In `PROJECTION_PERSPECTIVE` mode, objects' Z distance from the camera's local space scales their perceived size.
 */
  projection: int;
/**
 * The camera's size in meters measured as the diameter of the width or height, depending on `keep_aspect`. Only applicable in orthogonal and frustum modes.
 */
  size: float;
/**
 * The vertical (Y) offset of the camera viewport.
 */
  vOffset: float;
/**
 * If this is the current camera, remove it from being current. If `enable_next` is `true`, request to make the next camera current, if any.
 * @param enableNext boolean (optional, default: true)
 */
  clearCurrent(enableNext?: boolean): void;
/**
 * Returns the projection matrix that this camera uses to render to its associated viewport. The camera must be part of the scene tree to function.
 * @returns Projection
 */
  getCameraProjection(): Projection;
/**
 * Returns the camera's RID from the `RenderingServer`.
 * @returns RID
 */
  getCameraRid(): RID;
/**
 * Returns the transform of the camera plus the vertical (`v_offset`) and horizontal (`h_offset`) offsets; and any other adjustments made to the position and orientation of the camera by subclassed cameras such as `XRCamera3D`.
 * @returns Transform3D
 */
  getCameraTransform(): Transform3D;
/**
 * Returns whether or not the specified layer of the `cull_mask` is enabled, given a `layer_number` between 1 and 20.
 * @param layerNumber int
 * @returns boolean
 */
  getCullMaskValue(layerNumber: int): boolean;
/**
 * Returns the camera's frustum planes in world space units as an array of `Plane`s in the following order: near, far, left, top, right, bottom. Not to be confused with `frustum_offset`.
 * @returns Plane[]
 */
  getFrustum(): Plane[];
/**
 * Returns the RID of a pyramid shape encompassing the camera's view frustum, ignoring the camera's near plane. The tip of the pyramid represents the position of the camera.
 * @returns RID
 */
  getPyramidShapeRid(): RID;
/**
 * Returns `true` if the given position is behind the camera (the blue part of the linked diagram). See this diagram (https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png) for an overview of position query methods.
 * 
 * **Note:** A position which returns `false` may still be outside the camera's field of view.
 * @param worldPoint Vector3
 * @returns boolean
 */
  isPositionBehind(worldPoint: Vector3): boolean;
/**
 * Returns `true` if the given position is inside the camera's frustum (the green part of the linked diagram). See this diagram (https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png) for an overview of position query methods.
 * @param worldPoint Vector3
 * @returns boolean
 */
  isPositionInFrustum(worldPoint: Vector3): boolean;
/**
 * Makes this camera the current camera for the `Viewport` (see class description). If the camera node is outside the scene tree, it will attempt to become current once it's added.
 */
  makeCurrent(): void;
/**
 * Returns a normal vector from the screen point location directed along the camera. Orthogonal cameras are normalized. Perspective cameras account for perspective, screen width/height, etc.
 * @param screenPoint Vector2
 * @returns Vector3
 */
  projectLocalRayNormal(screenPoint: Vector2): Vector3;
/**
 * Returns the 3D point in world space that maps to the given 2D coordinate in the `Viewport` rectangle on a plane that is the given `z_depth` distance into the scene away from the camera.
 * @param screenPoint Vector2
 * @param zDepth float
 * @returns Vector3
 */
  projectPosition(screenPoint: Vector2, zDepth: float): Vector3;
/**
 * Returns a normal vector in world space, that is the result of projecting a point on the `Viewport` rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking.
 * @param screenPoint Vector2
 * @returns Vector3
 */
  projectRayNormal(screenPoint: Vector2): Vector3;
/**
 * Returns a 3D position in world space, that is the result of projecting a point on the `Viewport` rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking.
 * @param screenPoint Vector2
 * @returns Vector3
 */
  projectRayOrigin(screenPoint: Vector2): Vector3;
/**
 * Based on `value`, enables or disables the specified layer in the `cull_mask`, given a `layer_number` between 1 and 20.
 * @param layerNumber int
 * @param value boolean
 */
  setCullMaskValue(layerNumber: int, value: boolean): void;
/**
 * Sets the camera projection to frustum mode (see `PROJECTION_FRUSTUM`), by specifying a `size`, an `offset`, and the `z_near` and `z_far` clip planes in world space units. See also `frustum_offset`.
 * @param size float
 * @param offset Vector2
 * @param zNear float
 * @param zFar float
 */
  setFrustum(size: float, offset: Vector2, zNear: float, zFar: float): void;
/**
 * Sets the camera projection to orthogonal mode (see `PROJECTION_ORTHOGONAL`), by specifying a `size`, and the `z_near` and `z_far` clip planes in world space units. (As a hint, 2D games often use this projection, with values specified in pixels.)
 * @param size float
 * @param zNear float
 * @param zFar float
 */
  setOrthogonal(size: float, zNear: float, zFar: float): void;
/**
 * Sets the camera projection to perspective mode (see `PROJECTION_PERSPECTIVE`), by specifying a `fov` (field of view) angle in degrees, and the `z_near` and `z_far` clip planes in world space units.
 * @param fov float
 * @param zNear float
 * @param zFar float
 */
  setPerspective(fov: float, zNear: float, zFar: float): void;
/**
 * Returns the 2D coordinate in the `Viewport` rectangle that maps to the given 3D point in world space.
 * 
 * **Note:** When using this to position GUI elements over a 3D viewport, use `is_position_behind` to prevent them from appearing if the 3D point is behind the camera:
 * 
 * 				```gdscript
 * 
 * 				# This code block is part of a script that inherits from Node3D.
 * 				# `control` is a reference to a node inheriting from Control.
 * 				control.visible = not get_viewport().get_camera_3d().is_position_behind(global_transform.origin)
 * 				control.position = get_viewport().get_camera_3d().unproject_position(global_transform.origin)
 * 				
 * 
 * ```
 * @param worldPoint Vector3
 * @returns Vector2
 */
  unprojectPosition(worldPoint: Vector3): Vector2;
/**
 * Perspective projection. Objects on the screen becomes smaller when they are far away.
 */
  static readonly PROJECTION_PERSPECTIVE: int;
/**
 * Orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are.
 */
  static readonly PROJECTION_ORTHOGONAL: int;
/**
 * Frustum projection. This mode allows adjusting `frustum_offset` to create "tilted frustum" effects.
 */
  static readonly PROJECTION_FRUSTUM: int;
/**
 * Preserves the horizontal aspect ratio; also known as Vert- scaling. This is usually the best option for projects running in portrait mode, as taller aspect ratios will benefit from a wider vertical FOV.
 */
  static readonly KEEP_WIDTH: int;
/**
 * Preserves the vertical aspect ratio; also known as Hor+ scaling. This is usually the best option for projects running in landscape mode, as wider aspect ratios will automatically benefit from a wider horizontal FOV.
 */
  static readonly KEEP_HEIGHT: int;
/**
 * Disables Doppler effect (https://en.wikipedia.org/wiki/Doppler_effect) simulation (default).
 */
  static readonly DOPPLER_TRACKING_DISABLED: int;
/**
 * Simulate Doppler effect (https://en.wikipedia.org/wiki/Doppler_effect) by tracking positions of objects that are changed in `_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's `AudioStreamPlayer3D.pitch_scale`).
 */
  static readonly DOPPLER_TRACKING_IDLE_STEP: int;
/**
 * Simulate Doppler effect (https://en.wikipedia.org/wiki/Doppler_effect) by tracking positions of objects that are changed in `_physics_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's `AudioStreamPlayer3D.pitch_scale`).
 */
  static readonly DOPPLER_TRACKING_PHYSICS_STEP: int;
}
