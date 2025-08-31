import type { AudioSample, AudioStreamPlayback, Dictionary, GodotArray, GodotDictionary, Resource, Signal, float, int } from "../index.d.ts";
/**
 * Base class for audio streams.
 * 
 * Base class for audio streams. Audio streams are used for sound effects and music playback, and support WAV (via `AudioStreamWAV`) and Ogg (via `AudioStreamOggVorbis`) file formats.
 */
export class AudioStream extends Resource {
/**
 * Returns if the current `AudioStream` can be used as a sample. Only static streams can be sampled.
 * @returns boolean
 */
  canBeSampled(): boolean;
/**
 * Generates an `AudioSample` based on the current stream.
 * @returns AudioSample
 */
  generateSample(): AudioSample;
/**
 * Override this method to return the bar beats of this stream.
 * @returns int
 */
  private getBarBeats(): int;
/**
 * Overridable method. Should return the total number of beats of this audio stream. Used by the engine to determine the position of every beat.
 * Ideally, the returned value should be based off the stream's sample rate (`AudioStreamWAV.mix_rate`, for example).
 * @returns int
 */
  private getBeatCount(): int;
/**
 * Overridable method. Should return the tempo of this audio stream, in beats per minute (BPM). Used by the engine to determine the position of every beat.
 * Ideally, the returned value should be based off the stream's sample rate (`AudioStreamWAV.mix_rate`, for example).
 * @returns float
 */
  private getBpm(): float;
/**
 * Returns the length of the audio stream in seconds.
 * @returns float
 */
  getLength(): float;
/**
 * Override this method to customize the returned value of `get_length`. Should return the length of this audio stream, in seconds.
 * @returns float
 */
  private getLength(): float;
/**
 * Return the controllable parameters of this stream. This array contains dictionaries with a property info description format (see `Object.get_property_list`). Additionally, the default value for this parameter must be added tho each dictionary in "default_value" field.
 * @returns Dictionary[]
 */
  private getParameterList(): Dictionary[];
/**
 * Override this method to customize the name assigned to this audio stream. Unused by the engine.
 * @returns string
 */
  private getStreamName(): string;
/**
 * Override this method to return `true` if this stream has a loop.
 * @returns boolean
 */
  private hasLoop(): boolean;
/**
 * Returns a newly created `AudioStreamPlayback` intended to play this audio stream. Useful for when you want to extend `_instantiate_playback` but call `instantiate_playback` from an internally held AudioStream subresource. An example of this can be found in the source code for `AudioStreamRandomPitch::instantiate_playback`.
 * @returns AudioStreamPlayback
 */
  instantiatePlayback(): AudioStreamPlayback;
/**
 * Override this method to customize the returned value of `instantiate_playback`. Should return a new `AudioStreamPlayback` created when the stream is played (such as by an `AudioStreamPlayer`).
 * @returns AudioStreamPlayback
 */
  private instantiatePlayback(): AudioStreamPlayback;
/**
 * Returns `true` if the stream is a collection of other streams, `false` otherwise.
 * @returns boolean
 */
  isMetaStream(): boolean;
/**
 * Returns `true` if this audio stream only supports one channel (*monophony*), or `false` if the audio stream supports two or more channels (*polyphony*).
 * @returns boolean
 */
  isMonophonic(): boolean;
/**
 * Override this method to customize the returned value of `is_monophonic`. Should return `true` if this audio stream only supports one channel.
 * @returns boolean
 */
  private isMonophonic(): boolean;
/**
 * Signal to be emitted to notify when the parameter list changed.
 */
  parameterListChanged: Signal<[]>;
}
