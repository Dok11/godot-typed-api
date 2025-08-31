import type { GodotArray, GodotDictionary, PackedFloat32Array, Resource, Texture2D, float, int } from "../index.d.ts";
/**
 * Internal class used by `VideoStream` to manage playback state when played from a `VideoStreamPlayer`.
 * 
 * This class is intended to be overridden by video decoder extensions with custom implementations of `VideoStream`.
 */
export class VideoStreamPlayback extends Resource {
/**
 * Returns the number of audio channels.
 * @returns int
 */
  private getChannels(): int;
/**
 * Returns the video duration in seconds, if known, or 0 if unknown.
 * @returns float
 */
  private getLength(): float;
/**
 * Returns the audio sample rate used for mixing.
 * @returns int
 */
  private getMixRate(): int;
/**
 * Return the current playback timestamp. Called in response to the `VideoStreamPlayer.stream_position` getter.
 * @returns float
 */
  private getPlaybackPosition(): float;
/**
 * Allocates a `Texture2D` in which decoded video frames will be drawn.
 * @returns Texture2D
 */
  private getTexture(): Texture2D;
/**
 * Returns the paused status, as set by `_set_paused`.
 * @returns boolean
 */
  private isPaused(): boolean;
/**
 * Returns the playback state, as determined by calls to `_play` and `_stop`.
 * @returns boolean
 */
  private isPlaying(): boolean;
/**
 * Render `num_frames` audio frames (of `_get_channels` floats each) from `buffer`, starting from index `offset` in the array. Returns the number of audio frames rendered, or -1 on error.
 * @param numFrames int
 * @param buffer PackedFloat32Array (optional, default: PackedFloat32Array())
 * @param offset int (optional, default: 0)
 * @returns int
 */
  mixAudio(numFrames: int, buffer?: PackedFloat32Array, offset?: int): int;
/**
 * Called in response to `VideoStreamPlayer.autoplay` or `VideoStreamPlayer.play`. Note that manual playback may also invoke `_stop` multiple times before this method is called. `_is_playing` should return `true` once playing.
 */
  private play(): void;
/**
 * Seeks to `time` seconds. Called in response to the `VideoStreamPlayer.stream_position` setter.
 * @param time float
 */
  private seek(time: float): void;
/**
 * Select the audio track `idx`. Called when playback starts, and in response to the `VideoStreamPlayer.audio_track` setter.
 * @param idx int
 */
  private setAudioTrack(idx: int): void;
/**
 * Set the paused status of video playback. `_is_paused` must return `paused`. Called in response to the `VideoStreamPlayer.paused` setter.
 * @param paused boolean
 */
  private setPaused(paused: boolean): void;
/**
 * Stops playback. May be called multiple times before `_play`, or in response to `VideoStreamPlayer.stop`. `_is_playing` should return `false` once stopped.
 */
  private stop(): void;
/**
 * Ticks video playback for `delta` seconds. Called every frame as long as both `_is_paused` and `_is_playing` return `true`.
 * @param delta float
 */
  private update(delta: float): void;
}
