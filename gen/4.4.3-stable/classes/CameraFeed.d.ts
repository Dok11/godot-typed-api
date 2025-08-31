import type { GodotArray, GodotDictionary, Image, RefCounted, Signal, Transform2D, float, int } from "../index.d.ts";
/**
 * A camera feed gives you access to a single physical camera attached to your device.
 * 
 * A camera feed gives you access to a single physical camera attached to your device. When enabled, Godot will start capturing frames from the camera which can then be used. See also `CameraServer`.
 * 
 * **Note:** Many cameras will return YCbCr images which are split into two textures and need to be combined in a shader. Godot does this automatically for you if you set the environment to show the camera image in the background.
 * 
 * **Note:** This class is currently only implemented on Linux, macOS, and iOS. On other platforms no `CameraFeed`s will be available. To get a `CameraFeed` on iOS, the camera plugin from godot-ios-plugins (https://github.com/godotengine/godot-ios-plugins) is required.
 */
export class CameraFeed extends RefCounted {
/**
 * If `true`, the feed is active.
 */
  feedIsActive: boolean;
/**
 * The transform applied to the camera's image.
 */
  feedTransform: Transform2D;
/**
 * Formats supported by the feed. Each entry is a `Dictionary` describing format parameters.
 */
  formats: GodotArray<any>;
/**
 * Called when the camera feed is activated.
 * @returns boolean
 */
  private activateFeed(): boolean;
/**
 * Called when the camera feed is deactivated.
 */
  private deactivateFeed(): void;
/**
 * Returns feed image data type.
 * @returns int
 */
  getDatatype(): int;
/**
 * Returns the unique ID for this feed.
 * @returns int
 */
  getId(): int;
/**
 * Returns the camera's name.
 * @returns string
 */
  getName(): string;
/**
 * Returns the position of camera on the device.
 * @returns int
 */
  getPosition(): int;
/**
 * Returns the texture backend ID (usable by some external libraries that need a handle to a texture to write data).
 * @param feedImageType int
 * @returns int
 */
  getTextureTexId(feedImageType: int): int;
/**
 * Sets the feed as external feed provided by another library.
 * @param width int
 * @param height int
 */
  setExternal(width: int, height: int): void;
/**
 * Sets the feed format parameters for the given index in the `formats` array. Returns `true` on success. By default YUYV encoded stream is transformed to FEED_RGB. YUYV encoded stream output format can be changed with `parameters`.output value:
 * `separate` will result in FEED_YCBCR_SEP
 * `grayscale` will result in desaturated FEED_RGB
 * `copy` will result in FEED_YCBCR
 * @param index int
 * @param parameters GodotDictionary<any>
 * @returns boolean
 */
  setFormat(index: int, parameters: GodotDictionary<any>): boolean;
/**
 * Sets the camera's name.
 * @param name string
 */
  setName(name: string): void;
/**
 * Sets the position of this camera.
 * @param position int
 */
  setPosition(position: int): void;
/**
 * Sets RGB image for this feed.
 * @param rgbImage Image
 */
  setRgbImage(rgbImage: Image): void;
/**
 * Sets YCbCr image for this feed.
 * @param ycbcrImage Image
 */
  setYcbcrImage(ycbcrImage: Image): void;
/**
 * Emitted when the format has changed.
 */
  formatChanged: Signal<[]>;
/**
 * Emitted when a new frame is available.
 */
  frameChanged: Signal<[]>;
/**
 * No image set for the feed.
 */
  static readonly FEED_NOIMAGE: int;
/**
 * Feed supplies RGB images.
 */
  static readonly FEED_RGB: int;
/**
 * Feed supplies YCbCr images that need to be converted to RGB.
 */
  static readonly FEED_YCBCR: int;
/**
 * Feed supplies separate Y and CbCr images that need to be combined and converted to RGB.
 */
  static readonly FEED_YCBCR_SEP: int;
/**
 * Feed supplies external image.
 */
  static readonly FEED_EXTERNAL: int;
/**
 * Unspecified position.
 */
  static readonly FEED_UNSPECIFIED: int;
/**
 * Camera is mounted at the front of the device.
 */
  static readonly FEED_FRONT: int;
/**
 * Camera is mounted at the back of the device.
 */
  static readonly FEED_BACK: int;
}
