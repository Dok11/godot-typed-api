import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a delay audio effect to an audio bus. Plays input signal back after a period of time.
 * Two tap delay and feedback options.
 * 
 * Plays input signal back after a period of time. The delayed signal may be played back multiple times to create the sound of a repeating, decaying echo. Delay effects range from a subtle echo effect to a pronounced blending of previous sounds with new sounds.
 */
export class AudioEffectDelay extends AudioEffect {
/**
 * Output percent of original sound. At 0, only delayed sounds are output. Value can range from 0 to 1.
 */
  dry: float;
/**
 * If `true`, feedback is enabled.
 */
  feedbackActive: boolean;
/**
 * Feedback delay time in milliseconds.
 */
  feedbackDelayMs: float;
/**
 * Sound level for feedback.
 */
  feedbackLevelDb: float;
/**
 * Low-pass filter for feedback, in Hz. Frequencies below this value are filtered out of the source signal.
 */
  feedbackLowpass: float;
/**
 * If `true`, the first tap will be enabled.
 */
  tap1Active: boolean;
/**
 * First tap delay time in milliseconds.
 */
  tap1DelayMs: float;
/**
 * Sound level for the first tap.
 */
  tap1LevelDb: float;
/**
 * Pan position for the first tap. Value can range from -1 (fully left) to 1 (fully right).
 */
  tap1Pan: float;
/**
 * If `true`, the second tap will be enabled.
 */
  tap2Active: boolean;
/**
 * Second tap delay time in milliseconds.
 */
  tap2DelayMs: float;
/**
 * Sound level for the second tap.
 */
  tap2LevelDb: float;
/**
 * Pan position for the second tap. Value can range from -1 (fully left) to 1 (fully right).
 */
  tap2Pan: float;
}
