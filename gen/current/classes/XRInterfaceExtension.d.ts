import type { GodotArray, GodotDictionary, PackedFloat64Array, PackedStringArray, PackedVector3Array, RID, Rect2, Rect2i, StringName, Transform3D, Vector2, XRInterface, float, int } from "../index.d.ts";
/**
 * Base class for XR interface extensions (plugins).
 * 
 * External XR interface plugins should inherit from this class.
 */
export class XRInterfaceExtension extends XRInterface {
/**
 * Blits our render results to screen optionally applying lens distortion. This can only be called while processing `_commit_views`.
 * @param renderTarget RID
 * @param srcRect Rect2
 * @param dstRect Rect2i
 * @param useLayer boolean
 * @param layer int
 * @param applyLensDistortion boolean
 * @param eyeCenter Vector2
 * @param k1 float
 * @param k2 float
 * @param upscale float
 * @param aspectRatio float
 */
  addBlit(renderTarget: RID, srcRect: Rect2, dstRect: Rect2i, useLayer: boolean, layer: int, applyLensDistortion: boolean, eyeCenter: Vector2, k1: float, k2: float, upscale: float, aspectRatio: float): void;
/**
 * Called if interface is active and queues have been submitted.
 */
  private endFrame(): void;
/**
 * Return `true` if anchor detection is enabled for this interface.
 * @returns boolean
 */
  private getAnchorDetectionIsEnabled(): boolean;
/**
 * Returns the camera feed ID for the `CameraFeed` registered with the `CameraServer` that should be presented as the background on an AR capable device (if applicable).
 * @returns int
 */
  private getCameraFeedId(): int;
/**
 * Returns the `Transform3D` that positions the `XRCamera3D` in the world.
 * @returns Transform3D
 */
  private getCameraTransform(): Transform3D;
/**
 * Returns the capabilities of this interface.
 * @returns int
 */
  private getCapabilities(): int;
/**
 * @returns RID
 */
  getColorTexture(): RID;
/**
 * Return color texture into which to render (if applicable).
 * @returns RID
 */
  private getColorTexture(): RID;
/**
 * @returns RID
 */
  getDepthTexture(): RID;
/**
 * Return depth texture into which to render (if applicable).
 * @returns RID
 */
  private getDepthTexture(): RID;
/**
 * Returns the name of this interface.
 * @returns StringName
 */
  private getName(): StringName;
/**
 * Returns a `PackedVector3Array` that represents the play areas boundaries (if applicable).
 * @returns PackedVector3Array
 */
  private getPlayArea(): PackedVector3Array;
/**
 * Returns the play area mode that sets up our play area.
 * @returns int
 */
  private getPlayAreaMode(): int;
/**
 * Returns the projection matrix for the given view as a `PackedFloat64Array`.
 * @param view int
 * @param aspect float
 * @param zNear float
 * @param zFar float
 * @returns PackedFloat64Array
 */
  private getProjectionForView(view: int, aspect: float, zNear: float, zFar: float): PackedFloat64Array;
/**
 * Returns the size of our render target for this interface, this overrides the size of the `Viewport` marked as the xr viewport.
 * @returns Vector2
 */
  private getRenderTargetSize(): Vector2;
/**
 * Returns a valid `RID` for a texture to which we should render the current frame if supported by the interface.
 * @param renderTarget RID
 * @returns RID
 */
  getRenderTargetTexture(renderTarget: RID): RID;
/**
 * Returns a `PackedStringArray` with pose names configured by this interface. Note that user configuration can override this list.
 * @param trackerName StringName
 * @returns PackedStringArray
 */
  private getSuggestedPoseNames(trackerName: StringName): PackedStringArray;
/**
 * Returns a `PackedStringArray` with tracker names configured by this interface. Note that user configuration can override this list.
 * @returns PackedStringArray
 */
  private getSuggestedTrackerNames(): PackedStringArray;
/**
 * Returns a `Dictionary` with system information related to this interface.
 * @returns GodotDictionary<any>
 */
  private getSystemInfo(): GodotDictionary<any>;
/**
 * Returns a `XRInterface.TrackingStatus` specifying the current status of our tracking.
 * @returns int
 */
  private getTrackingStatus(): int;
/**
 * Returns a `Transform3D` for a given view.
 * @param view int
 * @param camTransform Transform3D
 * @returns Transform3D
 */
  private getTransformForView(view: int, camTransform: Transform3D): Transform3D;
/**
 * @returns RID
 */
  getVelocityTexture(): RID;
/**
 * Return velocity texture into which to render (if applicable).
 * @returns RID
 */
  private getVelocityTexture(): RID;
/**
 * Returns the number of views this interface requires, 1 for mono, 2 for stereoscopic.
 * @returns int
 */
  private getViewCount(): int;
/**
 * @returns RID
 */
  private getVrsTexture(): RID;
/**
 * Initializes the interface, returns `true` on success.
 * @returns boolean
 */
  private initialize(): boolean;
/**
 * Returns `true` if this interface has been initialized.
 * @returns boolean
 */
  private isInitialized(): boolean;
/**
 * Called after the XR `Viewport` draw logic has completed.
 * @param renderTarget RID
 * @param screenRect Rect2
 */
  private postDrawViewport(renderTarget: RID, screenRect: Rect2): void;
/**
 * Called if this is our primary `XRInterfaceExtension` before we start processing a `Viewport` for every active XR `Viewport`, returns `true` if that viewport should be rendered. An XR interface may return `false` if the user has taken off their headset and we can pause rendering.
 * @param renderTarget RID
 * @returns boolean
 */
  private preDrawViewport(renderTarget: RID): boolean;
/**
 * Called if this `XRInterfaceExtension` is active before rendering starts. Most XR interfaces will sync tracking at this point in time.
 */
  private preRender(): void;
/**
 * Called if this `XRInterfaceExtension` is active before our physics and game process is called. Most XR interfaces will update its `XRPositionalTracker`s at this point in time.
 */
  _process(): void;
/**
 * Enables anchor detection on this interface if supported.
 * @param enabled boolean
 */
  private setAnchorDetectionIsEnabled(enabled: boolean): void;
/**
 * Set the play area mode for this interface.
 * @param mode int
 * @returns boolean
 */
  private setPlayAreaMode(mode: int): boolean;
/**
 * Returns `true` if this interface supports this play area mode.
 * @param mode int
 * @returns boolean
 */
  private supportsPlayAreaMode(mode: int): boolean;
/**
 * Triggers a haptic pulse to be emitted on the specified tracker.
 * @param actionName string
 * @param trackerName StringName
 * @param frequency float
 * @param amplitude float
 * @param durationSec float
 * @param delaySec float
 */
  private triggerHapticPulse(actionName: string, trackerName: StringName, frequency: float, amplitude: float, durationSec: float, delaySec: float): void;
/**
 * Uninitialize the interface.
 */
  private uninitialize(): void;
}
