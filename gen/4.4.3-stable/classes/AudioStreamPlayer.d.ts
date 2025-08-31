import type { AudioStream, AudioStreamPlayback, GodotArray, GodotDictionary, Node, Signal, StringName, float, int } from "../index.d.ts";
/**
 * A node for audio playback.
 * 
 * The `AudioStreamPlayer` node plays an audio stream non-positionally. It is ideal for user interfaces, menus, or background music.
 * To use this node, `stream` needs to be set to a valid `AudioStream` resource. Playing more than one sound at the same time is also supported, see `max_polyphony`.
 * If you need to play audio at a specific position, use `AudioStreamPlayer2D` or `AudioStreamPlayer3D` instead.
 */
export class AudioStreamPlayer extends Node {
/**
 * If `true`, this node calls `play` when entering the tree.
 */
  autoplay: boolean;
/**
 * The target bus name. All sounds from this node will be playing on this bus.
 * 
 * **Note:** At runtime, if no bus with the given name exists, all sounds will fall back on `"Master"`. See also `AudioServer.get_bus_name`.
 */
  bus: StringName;
/**
 * The maximum number of sounds this node can play at the same time. Calling `play` after this value is reached will cut off the oldest sounds.
 */
  maxPolyphony: int;
/**
 * The mix target channels, as one of the `MixTarget` constants. Has no effect when two speakers or less are detected (see `AudioServer.SpeakerMode`).
 */
  mixTarget: int;
/**
 * The audio's pitch and tempo, as a multiplier of the `stream`'s sample rate. A value of `2.0` doubles the audio's pitch, while a value of `0.5` halves the pitch.
 */
  pitchScale: float;
/**
 * The playback type of the stream player. If set other than to the default value, it will force that playback type.
 */
  playbackType: int;
/**
 * If `true`, this node is playing sounds. Setting this property has the same effect as `play` and `stop`.
 */
  playing: boolean;
/**
 * The `AudioStream` resource to be played. Setting this property stops all currently playing sounds. If left empty, the `AudioStreamPlayer` does not work.
 */
  stream: AudioStream;
/**
 * If `true`, the sounds are paused. Setting `stream_paused` to `false` resumes all sounds.
 * 
 * **Note:** This property is automatically changed when exiting or entering the tree, or this node is paused (see `Node.process_mode`).
 */
  streamPaused: boolean;
/**
 * Volume of sound, in decibels. This is an offset of the `stream`'s volume.
 * 
 * **Note:** To convert between decibel and linear energy (like most volume sliders do), use `volume_linear`, or `@GlobalScope.db_to_linear` and `@GlobalScope.linear_to_db`.
 */
  volumeDb: float;
/**
 * Volume of sound, as a linear value.
 * 
 * **Note:** This member modifies `volume_db` for convenience. The returned value is equivalent to the result of `@GlobalScope.db_to_linear` on `volume_db`. Setting this member is equivalent to setting `volume_db` to the result of `@GlobalScope.linear_to_db` on a value.
 */
  volumeLinear: float;
/**
 * Returns the position in the `AudioStream` of the latest sound, in seconds. Returns `0.0` if no sounds are playing.
 * 
 * **Note:** The position is not always accurate, as the `AudioServer` does not mix audio every processed frame. To get more accurate results, add `AudioServer.get_time_since_last_mix` to the returned position.
 * 
 * **Note:** This method always returns `0.0` if the `stream` is an `AudioStreamInteractive`, since it can have multiple clips playing at once.
 * @returns float
 */
  getPlaybackPosition(): float;
/**
 * Returns the latest `AudioStreamPlayback` of this node, usually the most recently created by `play`. If no sounds are playing, this method fails and returns an empty playback.
 * @returns AudioStreamPlayback
 */
  getStreamPlayback(): AudioStreamPlayback;
/**
 * Returns `true` if any sound is active, even if `stream_paused` is set to `true`. See also `playing` and `get_stream_playback`.
 * @returns boolean
 */
  hasStreamPlayback(): boolean;
/**
 * Plays a sound from the beginning, or the given `from_position` in seconds.
 * @param fromPosition float (optional, default: 0.0)
 */
  play(fromPosition?: float): void;
/**
 * Restarts all sounds to be played from the given `to_position`, in seconds. Does nothing if no sounds are playing.
 * @param toPosition float
 */
  seek(toPosition: float): void;
/**
 * Stops all sounds from this node.
 */
  stop(): void;
/**
 * Emitted when a sound finishes playing without interruptions. This signal is *not* emitted when calling `stop`, or when exiting the tree while sounds are playing.
 */
  finished: Signal<[]>;
/**
 * The audio will be played only on the first channel. This is the default.
 */
  static readonly MIX_TARGET_STEREO: int;
/**
 * The audio will be played on all surround channels.
 */
  static readonly MIX_TARGET_SURROUND: int;
/**
 * The audio will be played on the second channel, which is usually the center.
 */
  static readonly MIX_TARGET_CENTER: int;
}
