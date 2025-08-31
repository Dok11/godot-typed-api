import type { AudioEffect, GodotArray, GodotDictionary, PackedVector2Array, float, int } from "../index.d.ts";
/**
 * Captures audio from an audio bus in real-time.
 * 
 * AudioEffectCapture is an AudioEffect which copies all audio frames from the attached audio effect bus into its internal ring buffer.
 * Application code should consume these audio frames from this ring buffer using `get_buffer` and process it as needed, for example to capture data from an `AudioStreamMicrophone`, implement application-defined effects, or to transmit audio over the network. When capturing audio data from a microphone, the format of the samples will be stereo 32-bit floating-point PCM.
 * Unlike `AudioEffectRecord`, this effect only returns the raw audio samples instead of encoding them into an `AudioStream`.
 */
export class AudioEffectCapture extends AudioEffect {
/**
 * Length of the internal ring buffer, in seconds. Setting the buffer length will have no effect if already initialized.
 */
  bufferLength: float;
/**
 * Returns `true` if at least `frames` audio frames are available to read in the internal ring buffer.
 * @param frames int
 * @returns boolean
 */
  canGetBuffer(frames: int): boolean;
/**
 * Clears the internal ring buffer.
 * 
 * **Note:** Calling this during a capture can cause the loss of samples which causes popping in the playback.
 */
  clearBuffer(): void;
/**
 * Gets the next `frames` audio samples from the internal ring buffer.
 * Returns a `PackedVector2Array` containing exactly `frames` audio samples if available, or an empty `PackedVector2Array` if insufficient data was available.
 * The samples are signed floating-point PCM between `-1` and `1`. You will have to scale them if you want to use them as 8 or 16-bit integer samples. (`v = 0x7fff * samples[0].x`)
 * @param frames int
 * @returns PackedVector2Array
 */
  getBuffer(frames: int): PackedVector2Array;
/**
 * Returns the total size of the internal ring buffer in frames.
 * @returns int
 */
  getBufferLengthFrames(): int;
/**
 * Returns the number of audio frames discarded from the audio bus due to full buffer.
 * @returns int
 */
  getDiscardedFrames(): int;
/**
 * Returns the number of frames available to read using `get_buffer`.
 * @returns int
 */
  getFramesAvailable(): int;
/**
 * Returns the number of audio frames inserted from the audio bus.
 * @returns int
 */
  getPushedFrames(): int;
}
