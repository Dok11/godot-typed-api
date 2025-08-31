import type { AudioEffectFilter, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a band pass filter to the audio bus.
 * 
 * Attenuates the frequencies inside of a range around the `AudioEffectFilter.cutoff_hz` and cuts frequencies outside of this band.
 */
export class AudioEffectBandPassFilter extends AudioEffectFilter {
}
