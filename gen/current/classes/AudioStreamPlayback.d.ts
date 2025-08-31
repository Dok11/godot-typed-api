import type { AudioSamplePlayback, GodotArray, GodotDictionary, PackedVector2Array, RefCounted, StringName, Variant, float, int } from "../index.d.ts";
/**
 * Meta class for playing back audio.
 * 
 * Can play, loop, pause a scroll through audio. See `AudioStream` and `AudioStreamOggVorbis` for usage.
 */
export class AudioStreamPlayback extends RefCounted {
/**
 * Returns the number of times the stream has looped.
 * @returns int
 */
  getLoopCount(): int;
/**
 * Overridable method. Should return how many times this audio stream has looped. Most built-in playbacks always return `0`.
 * @returns int
 */
  private getLoopCount(): int;
/**
 * Return the current value of a playback parameter by name (see `AudioStream._get_parameter_list`).
 * @param name StringName
 * @returns Variant
 */
  private getParameter(name: StringName): Variant;
/**
 * Returns the current position in the stream, in seconds.
 * @returns float
 */
  getPlaybackPosition(): float;
/**
 * Overridable method. Should return the current progress along the audio stream, in seconds.
 * @returns float
 */
  private getPlaybackPosition(): float;
/**
 * Returns the `AudioSamplePlayback` associated with this `AudioStreamPlayback` for playing back the audio sample of this stream.
 * @returns AudioSamplePlayback
 */
  getSamplePlayback(): AudioSamplePlayback;
/**
 * Returns `true` if the stream is playing.
 * @returns boolean
 */
  isPlaying(): boolean;
/**
 * Overridable method. Should return `true` if this playback is active and playing its audio stream.
 * @returns boolean
 */
  private isPlaying(): boolean;
/**
 * Override this method to customize how the audio stream is mixed. This method is called even if the playback is not active.
 * 
 * **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.
 * @param buffer unknown
 * @param rateScale float
 * @param frames int
 * @returns int
 */
  private mix(buffer: unknown, rateScale: float, frames: int): int;
/**
 * Mixes up to `frames` of audio from the stream from the current position, at a rate of `rate_scale`, advancing the stream.
 * Returns a `PackedVector2Array` where each element holds the left and right channel volume levels of each frame.
 * 
 * **Note:** Can return fewer frames than requested, make sure to use the size of the return value.
 * @param rateScale float
 * @param frames int
 * @returns PackedVector2Array
 */
  mixAudio(rateScale: float, frames: int): PackedVector2Array;
/**
 * Seeks the stream at the given `time`, in seconds.
 * @param time float (optional, default: 0.0)
 */
  seek(time?: float): void;
/**
 * Override this method to customize what happens when seeking this audio stream at the given `position`, such as by calling `AudioStreamPlayer.seek`.
 * @param position float
 */
  private seek(position: float): void;
/**
 * Set the current value of a playback parameter by name (see `AudioStream._get_parameter_list`).
 * @param name StringName
 * @param value Variant
 */
  private setParameter(name: StringName, value: Variant): void;
/**
 * Associates `AudioSamplePlayback` to this `AudioStreamPlayback` for playing back the audio sample of this stream.
 * @param playbackSample AudioSamplePlayback
 */
  setSamplePlayback(playbackSample: AudioSamplePlayback): void;
/**
 * Starts the stream from the given `from_pos`, in seconds.
 * @param fromPos float (optional, default: 0.0)
 */
  start(fromPos?: float): void;
/**
 * Override this method to customize what happens when the playback starts at the given position, such as by calling `AudioStreamPlayer.play`.
 * @param fromPos float
 */
  private start(fromPos: float): void;
/**
 * Stops the stream.
 */
  stop(): void;
/**
 * Override this method to customize what happens when the playback is stopped, such as by calling `AudioStreamPlayer.stop`.
 */
  private stop(): void;
/**
 * Overridable method. Called whenever the audio stream is mixed if the playback is active and `AudioServer.set_enable_tagging_used_audio_streams` has been set to `true`. Editor plugins may use this method to "tag" the current position along the audio stream and display it in a preview.
 */
  private tagUsedStreams(): void;
}
