import type { AudioEffectFilter, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a notch filter to the Audio bus.
 * 
 * Attenuates frequencies in a narrow band around the `AudioEffectFilter.cutoff_hz` and cuts frequencies outside of this range.
 */
export class AudioEffectNotchFilter extends AudioEffectFilter {
}
