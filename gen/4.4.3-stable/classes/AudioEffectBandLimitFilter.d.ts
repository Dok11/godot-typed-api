import type { AudioEffectFilter, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a band limit filter to the audio bus.
 * 
 * Limits the frequencies in a range around the `AudioEffectFilter.cutoff_hz` and allows frequencies outside of this range to pass.
 */
export class AudioEffectBandLimitFilter extends AudioEffectFilter {
}
