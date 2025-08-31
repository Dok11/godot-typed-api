import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Audio effect that can be used for real-time audio visualizations.
 * 
 * This audio effect does not affect sound output, but can be used for real-time audio visualizations.
 * This resource configures an `AudioEffectSpectrumAnalyzerInstance`, which performs the actual analysis at runtime. An instance can be obtained with `AudioServer.get_bus_effect_instance`.
 * See also `AudioStreamGenerator` for procedurally generating sounds.
 */
export class AudioEffectSpectrumAnalyzer extends AudioEffect {
/**
 * The length of the buffer to keep (in seconds). Higher values keep data around for longer, but require more memory.
 */
  bufferLength: float;
/**
 * The size of the Fast Fourier transform (https://en.wikipedia.org/wiki/Fast_Fourier_transform) buffer. Higher values smooth out the spectrum analysis over time, but have greater latency. The effects of this higher latency are especially noticeable with sudden amplitude changes.
 */
  fftSize: int;
  tapBackPos: float;
/**
 * Use a buffer of 256 samples for the Fast Fourier transform. Lowest latency, but least stable over time.
 */
  static readonly FFT_SIZE_256: int;
/**
 * Use a buffer of 512 samples for the Fast Fourier transform. Low latency, but less stable over time.
 */
  static readonly FFT_SIZE_512: int;
/**
 * Use a buffer of 1024 samples for the Fast Fourier transform. This is a compromise between latency and stability over time.
 */
  static readonly FFT_SIZE_1024: int;
/**
 * Use a buffer of 2048 samples for the Fast Fourier transform. High latency, but stable over time.
 */
  static readonly FFT_SIZE_2048: int;
/**
 * Use a buffer of 4096 samples for the Fast Fourier transform. Highest latency, but most stable over time.
 */
  static readonly FFT_SIZE_4096: int;
/**
 * Represents the size of the `FFTSize` enum.
 */
  static readonly FFT_SIZE_MAX: int;
}
