import type { AudioEffectInstance, GodotArray, GodotDictionary, Vector2, float, int } from "../index.d.ts";
/**
 * Queryable instance of an `AudioEffectSpectrumAnalyzer`.
 * 
 * The runtime part of an `AudioEffectSpectrumAnalyzer`, which can be used to query the magnitude of a frequency range on its host bus.
 * An instance of this class can be obtained with `AudioServer.get_bus_effect_instance`.
 */
export class AudioEffectSpectrumAnalyzerInstance extends AudioEffectInstance {
/**
 * Returns the magnitude of the frequencies from `from_hz` to `to_hz` in linear energy as a Vector2. The `x` component of the return value represents the left stereo channel, and `y` represents the right channel.
 * `mode` determines how the frequency range will be processed. See `MagnitudeMode`.
 * @param fromHz float
 * @param toHz float
 * @param mode int (optional, default: 1)
 * @returns Vector2
 */
  getMagnitudeForFrequencyRange(fromHz: float, toHz: float, mode?: int): Vector2;
/**
 * Use the average value across the frequency range as magnitude.
 */
  static readonly MAGNITUDE_AVERAGE: int;
/**
 * Use the maximum value of the frequency range as magnitude.
 */
  static readonly MAGNITUDE_MAX: int;
}
