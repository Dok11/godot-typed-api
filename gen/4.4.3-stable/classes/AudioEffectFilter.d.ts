import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a filter to the audio bus.
 * 
 * Allows frequencies other than the `cutoff_hz` to pass.
 */
export class AudioEffectFilter extends AudioEffect {
/**
 * Threshold frequency for the filter, in Hz.
 */
  cutoffHz: float;
/**
 * Steepness of the cutoff curve in dB per octave, also known as the order of the filter. Higher orders have a more aggressive cutoff.
 */
  db: int;
/**
 * Gain amount of the frequencies after the filter.
 */
  gain: float;
/**
 * Amount of boost in the frequency range near the cutoff frequency.
 */
  resonance: float;
/**
 * Cutting off at 6dB per octave.
 */
  static readonly FILTER_6DB: int;
/**
 * Cutting off at 12dB per octave.
 */
  static readonly FILTER_12DB: int;
/**
 * Cutting off at 18dB per octave.
 */
  static readonly FILTER_18DB: int;
/**
 * Cutting off at 24dB per octave.
 */
  static readonly FILTER_24DB: int;
}
