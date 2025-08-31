import type { AudioEffectFilter, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a high-pass filter to the audio bus.
 * 
 * Cuts frequencies lower than the `AudioEffectFilter.cutoff_hz` and allows higher frequencies to pass.
 */
export class AudioEffectHighPassFilter extends AudioEffectFilter {
}
