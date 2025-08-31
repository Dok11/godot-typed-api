import type { AudioStreamPlaybackResampled, GodotArray, GodotDictionary, PackedVector2Array, Vector2, float, int } from "../index.d.ts";
/**
 * Plays back audio generated using `AudioStreamGenerator`.
 * 
 * This class is meant to be used with `AudioStreamGenerator` to play back the generated audio in real-time.
 */
export class AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled {
/**
 * Returns `true` if a buffer of the size `amount` can be pushed to the audio sample data buffer without overflowing it, `false` otherwise.
 * @param amount int
 * @returns boolean
 */
  canPushBuffer(amount: int): boolean;
/**
 * Clears the audio sample data buffer.
 */
  clearBuffer(): void;
/**
 * Returns the number of frames that can be pushed to the audio sample data buffer without overflowing it. If the result is `0`, the buffer is full.
 * @returns int
 */
  getFramesAvailable(): int;
/**
 * Returns the number of times the playback skipped due to a buffer underrun in the audio sample data. This value is reset at the start of the playback.
 * @returns int
 */
  getSkips(): int;
/**
 * Pushes several audio data frames to the buffer. This is usually more efficient than `push_frame` in C# and compiled languages via GDExtension, but `push_buffer` may be *less* efficient in GDScript.
 * @param frames PackedVector2Array
 * @returns boolean
 */
  pushBuffer(frames: PackedVector2Array): boolean;
/**
 * Pushes a single audio data frame to the buffer. This is usually less efficient than `push_buffer` in C# and compiled languages via GDExtension, but `push_frame` may be *more* efficient in GDScript.
 * @param frame Vector2
 * @returns boolean
 */
  pushFrame(frame: Vector2): boolean;
}
