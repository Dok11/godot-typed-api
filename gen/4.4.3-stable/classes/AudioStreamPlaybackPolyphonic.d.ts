import type { AudioStream, AudioStreamPlayback, GodotArray, GodotDictionary, StringName, float, int } from "../index.d.ts";
/**
 * Playback instance for `AudioStreamPolyphonic`.
 * 
 * Playback instance for `AudioStreamPolyphonic`. After setting the `stream` property of `AudioStreamPlayer`, `AudioStreamPlayer2D`, or `AudioStreamPlayer3D`, the playback instance can be obtained by calling `AudioStreamPlayer.get_stream_playback`, `AudioStreamPlayer2D.get_stream_playback` or `AudioStreamPlayer3D.get_stream_playback` methods.
 */
export class AudioStreamPlaybackPolyphonic extends AudioStreamPlayback {
/**
 * Returns `true` if the stream associated with the given integer ID is still playing. Check `play_stream` for information on when this ID becomes invalid.
 * @param stream int
 * @returns boolean
 */
  isStreamPlaying(stream: int): boolean;
/**
 * Play an `AudioStream` at a given offset, volume, pitch scale, playback type, and bus. Playback starts immediately.
 * The return value is a unique integer ID that is associated to this playback stream and which can be used to control it.
 * This ID becomes invalid when the stream ends (if it does not loop), when the `AudioStreamPlaybackPolyphonic` is stopped, or when `stop_stream` is called.
 * This function returns `INVALID_ID` if the amount of streams currently playing equals `AudioStreamPolyphonic.polyphony`. If you need a higher amount of maximum polyphony, raise this value.
 * @param stream AudioStream
 * @param fromOffset float (optional, default: 0)
 * @param volumeDb float (optional, default: 0)
 * @param pitchScale float (optional, default: 1.0)
 * @param playbackType int (optional, default: 0)
 * @param bus StringName (optional, default: &"Master")
 * @returns int
 */
  playStream(stream: AudioStream, fromOffset?: float, volumeDb?: float, pitchScale?: float, playbackType?: int, bus?: StringName): int;
/**
 * Change the stream pitch scale. The `stream` argument is an integer ID returned by `play_stream`.
 * @param stream int
 * @param pitchScale float
 */
  setStreamPitchScale(stream: int, pitchScale: float): void;
/**
 * Change the stream volume (in db). The `stream` argument is an integer ID returned by `play_stream`.
 * @param stream int
 * @param volumeDb float
 */
  setStreamVolume(stream: int, volumeDb: float): void;
/**
 * Stop a stream. The `stream` argument is an integer ID returned by `play_stream`, which becomes invalid after calling this function.
 * @param stream int
 */
  stopStream(stream: int): void;
/**
 * Returned by `play_stream` in case it could not allocate a stream for playback.
 */
  static readonly INVALID_ID: int;
}
