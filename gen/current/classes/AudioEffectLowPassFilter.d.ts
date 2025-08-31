import type { AudioEffectFilter, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a low-pass filter to the audio bus.
 * 
 * Cuts frequencies higher than the `AudioEffectFilter.cutoff_hz` and allows lower frequencies to pass.
 */
export class AudioEffectLowPassFilter extends AudioEffectFilter {
}
