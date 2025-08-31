import type { CameraFeed, GodotArray, GodotDictionary, Object, Signal, float, int } from "../index.d.ts";
/**
 * Server keeping track of different cameras accessible in Godot.
 * 
 * The `CameraServer` keeps track of different cameras accessible in Godot. These are external cameras such as webcams or the cameras on your phone.
 * It is notably used to provide AR modules with a video feed from the camera.
 * 
 * **Note:** This class is currently only implemented on Linux, macOS, and iOS. On other platforms no `CameraFeed`s will be available. To get a `CameraFeed` on iOS, the camera plugin from godot-ios-plugins (https://github.com/godotengine/godot-ios-plugins) is required.
 */
export class CameraServer extends Object {
/**
 * Adds the camera `feed` to the camera server.
 * @param feed CameraFeed
 */
  addFeed(feed: CameraFeed): void;
/**
 * Returns an array of `CameraFeed`s.
 * @returns CameraFeed[]
 */
  feeds(): CameraFeed[];
/**
 * Returns the `CameraFeed` corresponding to the camera with the given `index`.
 * @param index int
 * @returns CameraFeed
 */
  getFeed(index: int): CameraFeed;
/**
 * Returns the number of `CameraFeed`s registered.
 * @returns int
 */
  getFeedCount(): int;
/**
 * Removes the specified camera `feed`.
 * @param feed CameraFeed
 */
  removeFeed(feed: CameraFeed): void;
/**
 * Emitted when a `CameraFeed` is added (e.g. a webcam is plugged in).
 */
  cameraFeedAdded: Signal<[id: int]>;
/**
 * Emitted when a `CameraFeed` is removed (e.g. a webcam is unplugged).
 */
  cameraFeedRemoved: Signal<[id: int]>;
/**
 * The RGBA camera image.
 */
  static readonly FEED_RGBA_IMAGE: int;
/**
 * The YCbCr (https://en.wikipedia.org/wiki/YCbCr) camera image.
 */
  static readonly FEED_YCBCR_IMAGE: int;
/**
 * The Y component camera image.
 */
  static readonly FEED_Y_IMAGE: int;
/**
 * The CbCr component camera image.
 */
  static readonly FEED_CBCR_IMAGE: int;
}
