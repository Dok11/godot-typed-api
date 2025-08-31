import type { Control, GodotArray, GodotDictionary, Signal, StringName, Texture2D, VideoStream, float, int } from "../index.d.ts";
/**
 * A control used for video playback.
 * 
 * A control used for playback of `VideoStream` resources.
 * Supported video formats are Ogg Theora (https://www.theora.org/) (`.ogv`, `VideoStreamTheora`) and any format exposed via a GDExtension plugin.
 * 
 * **Warning:** On Web, video playback *will* perform poorly due to missing architecture-specific assembly optimizations.
 */
export class VideoStreamPlayer extends Control {
/**
 * The embedded audio track to play.
 */
  audioTrack: int;
/**
 * If `true`, playback starts when the scene loads.
 */
  autoplay: boolean;
/**
 * Amount of time in milliseconds to store in buffer while playing.
 */
  bufferingMsec: int;
/**
 * Audio bus to use for sound playback.
 */
  bus: StringName;
/**
 * If `true`, the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions.
 */
  expand: boolean;
/**
 * If `true`, the video restarts when it reaches its end.
 */
  loop: boolean;
/**
 * If `true`, the video is paused.
 */
  paused: boolean;
/**
 * The assigned video stream. See description for supported formats.
 */
  stream: VideoStream;
/**
 * The current position of the stream, in seconds.
 * 
 * **Note:** Changing this value won't have any effect as seeking is not implemented yet, except in video formats implemented by a GDExtension add-on.
 */
  streamPosition: float;
/**
 * Audio volume as a linear value.
 */
  volume: float;
/**
 * Audio volume in dB.
 */
  volumeDb: float;
/**
 * The length of the current stream, in seconds.
 * 
 * **Note:** For `VideoStreamTheora` streams (the built-in format supported by Godot), this value will always be zero, as getting the stream length is not implemented yet. The feature may be supported by video formats implemented by a GDExtension add-on.
 * @returns float
 */
  getStreamLength(): float;
/**
 * Returns the video stream's name, or `"<No Stream>"` if no video stream is assigned.
 * @returns string
 */
  getStreamName(): string;
/**
 * Returns the current frame as a `Texture2D`.
 * @returns Texture2D
 */
  getVideoTexture(): Texture2D;
/**
 * Returns `true` if the video is playing.
 * 
 * **Note:** The video is still considered playing if paused during playback.
 * @returns boolean
 */
  isPlaying(): boolean;
/**
 * Starts the video playback from the beginning. If the video is paused, this will not unpause the video.
 */
  play(): void;
/**
 * Stops the video playback and sets the stream position to 0.
 * 
 * **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.
 */
  stop(): void;
/**
 * Emitted when playback is finished.
 */
  finished: Signal<[]>;
}
