import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * An audio effect that can be used to adjust the intensity of stereo panning.
 * 
 * An audio effect that can be used to adjust the intensity of stereo panning.
 */
export class AudioEffectStereoEnhance extends AudioEffect {
/**
 * Amplifies the difference between stereo channels, increasing or decreasing existing panning. A value of 0.0 will downmix stereo to mono. Does not affect a mono signal.
 */
  panPullout: float;
/**
 * Widens sound stage through phase shifting in conjunction with `time_pullout_ms`. Just pans sound to the left channel if `time_pullout_ms` is 0.
 */
  surround: float;
/**
 * Widens sound stage through phase shifting in conjunction with `surround`. Just delays the right channel if `surround` is 0.
 */
  timePulloutMs: float;
}
