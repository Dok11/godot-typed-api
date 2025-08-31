import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a panner audio effect to an audio bus. Pans sound left or right.
 * 
 * Determines how much of an audio signal is sent to the left and right buses.
 */
export class AudioEffectPanner extends AudioEffect {
/**
 * Pan position. Value can range from -1 (fully left) to 1 (fully right).
 */
  pan: float;
}
