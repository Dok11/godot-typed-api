import type { GodotArray, GodotDictionary, PackedVector3Array, Projection, RefCounted, Signal, StringName, Transform3D, Vector2, float, int } from "../index.d.ts";
/**
 * Base class for an XR interface implementation.
 * 
 * This class needs to be implemented to make an AR or VR platform available to Godot and these should be implemented as C++ modules or GDExtension modules. Part of the interface is exposed to GDScript so you can detect, enable and configure an AR or VR platform.
 * Interfaces should be written in such a way that simply enabling them will give us a working setup. You can query the available interfaces through `XRServer`.
 */
export class XRInterface extends RefCounted {
/**
 * On an AR interface, `true` if anchor detection is enabled.
 */
  arIsAnchorDetectionEnabled: boolean;
/**
 * Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor.
 */
  environmentBlendMode: int;
/**
 * `true` if this is the primary interface.
 */
  interfaceIsPrimary: boolean;
/**
 * The play area mode for this interface.
 */
  xrPlayAreaMode: int;
/**
 * If this is an AR interface that requires displaying a camera feed as the background, this method returns the feed ID in the `CameraServer` for this interface.
 * @returns int
 */
  getCameraFeedId(): int;
/**
 * Returns a combination of `Capabilities` flags providing information about the capabilities of this interface.
 * @returns int
 */
  getCapabilities(): int;
/**
 * Returns the name of this interface (`"OpenXR"`, `"OpenVR"`, `"OpenHMD"`, `"ARKit"`, etc.).
 * @returns StringName
 */
  getName(): StringName;
/**
 * Returns an array of vectors that represent the physical play area mapped to the virtual space around the `XROrigin3D` point. The points form a convex polygon that can be used to react to or visualize the play area. This returns an empty array if this feature is not supported or if the information is not yet available.
 * @returns PackedVector3Array
 */
  getPlayArea(): PackedVector3Array;
/**
 * Returns the projection matrix for a view/eye.
 * @param view int
 * @param aspect float
 * @param near float
 * @param far float
 * @returns Projection
 */
  getProjectionForView(view: int, aspect: float, near: float, far: float): Projection;
/**
 * Returns the resolution at which we should render our intermediate results before things like lens distortion are applied by the VR platform.
 * @returns Vector2
 */
  getRenderTargetSize(): Vector2;
/**
 * Returns the an array of supported environment blend modes, see `XRInterface.EnvironmentBlendMode`.
 * @returns GodotArray<any>
 */
  getSupportedEnvironmentBlendModes(): GodotArray<any>;
/**
 * Returns a `Dictionary` with extra system info. Interfaces are expected to return `XRRuntimeName` and `XRRuntimeVersion` providing info about the used XR runtime. Additional entries may be provided specific to an interface.
 * 
 * **Note:**This information may only be available after `initialize` was successfully called.
 * @returns GodotDictionary<any>
 */
  getSystemInfo(): GodotDictionary<any>;
/**
 * If supported, returns the status of our tracking. This will allow you to provide feedback to the user whether there are issues with positional tracking.
 * @returns int
 */
  getTrackingStatus(): int;
/**
 * Returns the transform for a view/eye.
 * `view` is the view/eye index.
 * `cam_transform` is the transform that maps device coordinates to scene coordinates, typically the `Node3D.global_transform` of the current XROrigin3D.
 * @param view int
 * @param camTransform Transform3D
 * @returns Transform3D
 */
  getTransformForView(view: int, camTransform: Transform3D): Transform3D;
/**
 * Returns the number of views that need to be rendered for this device. 1 for Monoscopic, 2 for Stereoscopic.
 * @returns int
 */
  getViewCount(): int;
/**
 * Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.
 * After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.
 * 
 * **Note:** You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.
 * If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.
 * While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.
 * @returns boolean
 */
  initialize(): boolean;
/**
 * Returns `true` if this interface has been initialized.
 * @returns boolean
 */
  isInitialized(): boolean;
/**
 * Returns `true` if passthrough is enabled.
 * @returns boolean
 * @deprecated Check if `environment_blend_mode` is `XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND`, instead.
 */
  isPassthroughEnabled(): boolean;
/**
 * Returns `true` if this interface supports passthrough.
 * @returns boolean
 * @deprecated Check that `XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND` is supported using `get_supported_environment_blend_modes`, instead.
 */
  isPassthroughSupported(): boolean;
/**
 * Sets the active environment blend mode.
 * `mode` is the environment blend mode starting with the next frame.
 * 
 * **Note:** Not all runtimes support all environment blend modes, so it is important to check this at startup. For example:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    var xr_interface = XRServer.find_interface("OpenXR")
 * 				    if xr_interface and xr_interface.is_initialized():
 * 				        var vp = get_viewport()
 * 				        vp.use_xr = true
 * 				        var acceptable_modes = [XRInterface.XR_ENV_BLEND_MODE_OPAQUE, XRInterface.XR_ENV_BLEND_MODE_ADDITIVE]
 * 				        var modes = xr_interface.get_supported_environment_blend_modes()
 * 				        for mode in acceptable_modes:
 * 				            if mode in modes:
 * 				                xr_interface.set_environment_blend_mode(mode)
 * 				                break
 * 				
 * 
 * ```
 * @param mode int
 * @returns boolean
 */
  setEnvironmentBlendMode(mode: int): boolean;
/**
 * Sets the active play area mode, will return `false` if the mode can't be used with this interface.
 * 
 * **Note:** Changing this after the interface has already been initialized can be jarring for the player, so it's recommended to recenter on the HMD with `XRServer.center_on_hmd` (if switching to `XRInterface.XR_PLAY_AREA_STAGE`) or make the switch during a scene change.
 * @param mode int
 * @returns boolean
 */
  setPlayAreaMode(mode: int): boolean;
/**
 * Starts passthrough, will return `false` if passthrough couldn't be started.
 * 
 * **Note:** The viewport used for XR must have a transparent background, otherwise passthrough may not properly render.
 * @returns boolean
 * @deprecated Set the `environment_blend_mode` to `XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND`, instead.
 */
  startPassthrough(): boolean;
/**
 * Stops passthrough.
 * @deprecated Set the `environment_blend_mode` to `XRInterface.XR_ENV_BLEND_MODE_OPAQUE`, instead.
 */
  stopPassthrough(): void;
/**
 * Call this to find out if a given play area mode is supported by this interface.
 * @param mode int
 * @returns boolean
 */
  supportsPlayAreaMode(mode: int): boolean;
/**
 * Triggers a haptic pulse on a device associated with this interface.
 * `action_name` is the name of the action for this pulse.
 * `tracker_name` is optional and can be used to direct the pulse to a specific device provided that device is bound to this haptic.
 * `frequency` is the frequency of the pulse, set to `0.0` to have the system use a default frequency.
 * `amplitude` is the amplitude of the pulse between `0.0` and `1.0`.
 * `duration_sec` is the duration of the pulse in seconds.
 * `delay_sec` is a delay in seconds before the pulse is given.
 * @param actionName string
 * @param trackerName StringName
 * @param frequency float
 * @param amplitude float
 * @param durationSec float
 * @param delaySec float
 */
  triggerHapticPulse(actionName: string, trackerName: StringName, frequency: float, amplitude: float, durationSec: float, delaySec: float): void;
/**
 * Turns the interface off.
 */
  uninitialize(): void;
/**
 * Emitted when the play area is changed. This can be a result of the player resetting the boundary or entering a new play area, the player changing the play area mode, the world scale changing or the player resetting their headset orientation.
 */
  playAreaChanged: Signal<[mode: int]>;
/**
 * No XR capabilities.
 */
  static readonly XR_NONE: int;
/**
 * This interface can work with normal rendering output (non-HMD based AR).
 */
  static readonly XR_MONO: int;
/**
 * This interface supports stereoscopic rendering.
 */
  static readonly XR_STEREO: int;
/**
 * This interface supports quad rendering (not yet supported by Godot).
 */
  static readonly XR_QUAD: int;
/**
 * This interface supports VR.
 */
  static readonly XR_VR: int;
/**
 * This interface supports AR (video background and real world tracking).
 */
  static readonly XR_AR: int;
/**
 * This interface outputs to an external device. If the main viewport is used, the on screen output is an unmodified buffer of either the left or right eye (stretched if the viewport size is not changed to the same aspect ratio of `get_render_target_size`). Using a separate viewport node frees up the main viewport for other purposes.
 */
  static readonly XR_EXTERNAL: int;
/**
 * Tracking is behaving as expected.
 */
  static readonly XR_NORMAL_TRACKING: int;
/**
 * Tracking is hindered by excessive motion (the player is moving faster than tracking can keep up).
 */
  static readonly XR_EXCESSIVE_MOTION: int;
/**
 * Tracking is hindered by insufficient features, it's too dark (for camera-based tracking), player is blocked, etc.
 */
  static readonly XR_INSUFFICIENT_FEATURES: int;
/**
 * We don't know the status of the tracking or this interface does not provide feedback.
 */
  static readonly XR_UNKNOWN_TRACKING: int;
/**
 * Tracking is not functional (camera not plugged in or obscured, lighthouses turned off, etc.).
 */
  static readonly XR_NOT_TRACKING: int;
/**
 * Play area mode not set or not available.
 */
  static readonly XR_PLAY_AREA_UNKNOWN: int;
/**
 * Play area only supports orientation tracking, no positional tracking, area will center around player.
 */
  static readonly XR_PLAY_AREA_3DOF: int;
/**
 * Player is in seated position, limited positional tracking, fixed guardian around player.
 */
  static readonly XR_PLAY_AREA_SITTING: int;
/**
 * Player is free to move around, full positional tracking.
 */
  static readonly XR_PLAY_AREA_ROOMSCALE: int;
/**
 * Same as `XR_PLAY_AREA_ROOMSCALE` but origin point is fixed to the center of the physical space. In this mode, system-level recentering may be disabled, requiring the use of `XRServer.center_on_hmd`.
 */
  static readonly XR_PLAY_AREA_STAGE: int;
/**
 * Opaque blend mode. This is typically used for VR devices.
 */
  static readonly XR_ENV_BLEND_MODE_OPAQUE: int;
/**
 * Additive blend mode. This is typically used for AR devices or VR devices with passthrough.
 */
  static readonly XR_ENV_BLEND_MODE_ADDITIVE: int;
/**
 * Alpha blend mode. This is typically used for AR or VR devices with passthrough capabilities. The alpha channel controls how much of the passthrough is visible. Alpha of 0.0 means the passthrough is visible and this pixel works in ADDITIVE mode. Alpha of 1.0 means that the passthrough is not visible and this pixel works in OPAQUE mode.
 */
  static readonly XR_ENV_BLEND_MODE_ALPHA_BLEND: int;
}
