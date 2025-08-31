import type { GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * Texture provided by a `CameraFeed`.
 * 
 * This texture gives access to the camera texture provided by a `CameraFeed`.
 * 
 * **Note:** Many cameras supply YCbCr images which need to be converted in a shader.
 */
export class CameraTexture extends Texture2D {
/**
 * The ID of the `CameraFeed` for which we want to display the image.
 */
  cameraFeedId: int;
/**
 * Convenience property that gives access to the active property of the `CameraFeed`.
 */
  cameraIsActive: boolean;
  resourceLocalToScene: boolean;
/**
 * Which image within the `CameraFeed` we want access to, important if the camera image is split in a Y and CbCr component.
 */
  whichFeed: int;
}
