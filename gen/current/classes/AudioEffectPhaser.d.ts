import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a phaser audio effect to an audio bus.
 * Combines the original signal with a copy that is slightly out of phase with the original.
 * 
 * Combines phase-shifted signals with the original signal. The movement of the phase-shifted signals is controlled using a low-frequency oscillator.
 */
export class AudioEffectPhaser extends AudioEffect {
/**
 * Governs how high the filter frequencies sweep. Low value will primarily affect bass frequencies. High value can sweep high into the treble. Value can range from 0.1 to 4.
 */
  depth: float;
/**
 * Output percent of modified sound. Value can range from 0.1 to 0.9.
 */
  feedback: float;
/**
 * Determines the maximum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000.
 */
  rangeMaxHz: float;
/**
 * Determines the minimum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000.
 */
  rangeMinHz: float;
/**
 * Adjusts the rate in Hz at which the effect sweeps up and down across the frequency range.
 */
  rateHz: float;
}
