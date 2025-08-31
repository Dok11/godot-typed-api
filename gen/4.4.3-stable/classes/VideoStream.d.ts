import type { GodotArray, GodotDictionary, Resource, VideoStreamPlayback, float, int } from "../index.d.ts";
/**
 * Base resource for video streams.
 * 
 * Base resource type for all video streams. Classes that derive from `VideoStream` can all be used as resource types to play back videos in `VideoStreamPlayer`.
 */
export class VideoStream extends Resource {
/**
 * The video file path or URI that this `VideoStream` resource handles.
 * For `VideoStreamTheora`, this filename should be an Ogg Theora video file with the `.ogv` extension.
 */
  file: string;
/**
 * Called when the video starts playing, to initialize and return a subclass of `VideoStreamPlayback`.
 * @returns VideoStreamPlayback
 */
  private instantiatePlayback(): VideoStreamPlayback;
}
