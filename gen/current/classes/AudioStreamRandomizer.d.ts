import type { AudioStream, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Wraps a pool of audio streams with pitch and volume shifting.
 * 
 * Picks a random AudioStream from the pool, depending on the playback mode, and applies random pitch shifting and volume shifting during playback.
 */
export class AudioStreamRandomizer extends AudioStream {
/**
 * Controls how this AudioStreamRandomizer picks which AudioStream to play next.
 */
  playbackMode: int;
/**
 * The intensity of random pitch variation. A value of 1 means no variation.
 */
  randomPitch: float;
/**
 * The intensity of random volume variation. A value of 0 means no variation.
 */
  randomVolumeOffsetDb: float;
/**
 * The number of streams in the stream pool.
 */
  streamsCount: int;
/**
 * Insert a stream at the specified index. If the index is less than zero, the insertion occurs at the end of the underlying pool.
 * @param index int
 * @param stream AudioStream
 * @param weight float (optional, default: 1.0)
 */
  addStream(index: int, stream: AudioStream, weight?: float): void;
/**
 * Returns the stream at the specified index.
 * @param index int
 * @returns AudioStream
 */
  getStream(index: int): AudioStream;
/**
 * Returns the probability weight associated with the stream at the given index.
 * @param index int
 * @returns float
 */
  getStreamProbabilityWeight(index: int): float;
/**
 * Move a stream from one index to another.
 * @param indexFrom int
 * @param indexTo int
 */
  moveStream(indexFrom: int, indexTo: int): void;
/**
 * Remove the stream at the specified index.
 * @param index int
 */
  removeStream(index: int): void;
/**
 * Set the AudioStream at the specified index.
 * @param index int
 * @param stream AudioStream
 */
  setStream(index: int, stream: AudioStream): void;
/**
 * Set the probability weight of the stream at the specified index. The higher this value, the more likely that the randomizer will choose this stream during random playback modes.
 * @param index int
 * @param weight float
 */
  setStreamProbabilityWeight(index: int, weight: float): void;
/**
 * Pick a stream at random according to the probability weights chosen for each stream, but avoid playing the same stream twice in a row whenever possible. If only 1 sound is present in the pool, the same sound will always play, effectively allowing repeats to occur.
 */
  static readonly PLAYBACK_RANDOM_NO_REPEATS: int;
/**
 * Pick a stream at random according to the probability weights chosen for each stream. If only 1 sound is present in the pool, the same sound will always play.
 */
  static readonly PLAYBACK_RANDOM: int;
/**
 * Play streams in the order they appear in the stream pool. If only 1 sound is present in the pool, the same sound will always play.
 */
  static readonly PLAYBACK_SEQUENTIAL: int;
}
