import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a chorus audio effect.
 * 
 * Adds a chorus audio effect. The effect applies a filter with voices to duplicate the audio source and manipulate it through the filter.
 */
export class AudioEffectChorus extends AudioEffect {
/**
 * The effect's raw signal.
 */
  dry: float;
/**
 * The voice's cutoff frequency.
 */
  voice1CutoffHz: float;
/**
 * The voice's signal delay.
 */
  voice1DelayMs: float;
/**
 * The voice filter's depth.
 */
  voice1DepthMs: float;
/**
 * The voice's volume.
 */
  voice1LevelDb: float;
/**
 * The voice's pan level.
 */
  voice1Pan: float;
/**
 * The voice's filter rate.
 */
  voice1RateHz: float;
/**
 * The voice's cutoff frequency.
 */
  voice2CutoffHz: float;
/**
 * The voice's signal delay.
 */
  voice2DelayMs: float;
/**
 * The voice filter's depth.
 */
  voice2DepthMs: float;
/**
 * The voice's volume.
 */
  voice2LevelDb: float;
/**
 * The voice's pan level.
 */
  voice2Pan: float;
/**
 * The voice's filter rate.
 */
  voice2RateHz: float;
/**
 * The voice's cutoff frequency.
 */
  voice3CutoffHz: float;
/**
 * The voice's signal delay.
 */
  voice3DelayMs: float;
/**
 * The voice filter's depth.
 */
  voice3DepthMs: float;
/**
 * The voice's volume.
 */
  voice3LevelDb: float;
/**
 * The voice's pan level.
 */
  voice3Pan: float;
/**
 * The voice's filter rate.
 */
  voice3RateHz: float;
/**
 * The voice's cutoff frequency.
 */
  voice4CutoffHz: float;
/**
 * The voice's signal delay.
 */
  voice4DelayMs: float;
/**
 * The voice filter's depth.
 */
  voice4DepthMs: float;
/**
 * The voice's volume.
 */
  voice4LevelDb: float;
/**
 * The voice's pan level.
 */
  voice4Pan: float;
/**
 * The voice's filter rate.
 */
  voice4RateHz: float;
/**
 * The number of voices in the effect.
 */
  voiceCount: int;
/**
 * The effect's processed signal.
 */
  wet: float;
/**
 * @param voiceIdx int
 * @returns float
 */
  getVoiceCutoffHz(voiceIdx: int): float;
/**
 * @param voiceIdx int
 * @returns float
 */
  getVoiceDelayMs(voiceIdx: int): float;
/**
 * @param voiceIdx int
 * @returns float
 */
  getVoiceDepthMs(voiceIdx: int): float;
/**
 * @param voiceIdx int
 * @returns float
 */
  getVoiceLevelDb(voiceIdx: int): float;
/**
 * @param voiceIdx int
 * @returns float
 */
  getVoicePan(voiceIdx: int): float;
/**
 * @param voiceIdx int
 * @returns float
 */
  getVoiceRateHz(voiceIdx: int): float;
/**
 * @param voiceIdx int
 * @param cutoffHz float
 */
  setVoiceCutoffHz(voiceIdx: int, cutoffHz: float): void;
/**
 * @param voiceIdx int
 * @param delayMs float
 */
  setVoiceDelayMs(voiceIdx: int, delayMs: float): void;
/**
 * @param voiceIdx int
 * @param depthMs float
 */
  setVoiceDepthMs(voiceIdx: int, depthMs: float): void;
/**
 * @param voiceIdx int
 * @param levelDb float
 */
  setVoiceLevelDb(voiceIdx: int, levelDb: float): void;
/**
 * @param voiceIdx int
 * @param pan float
 */
  setVoicePan(voiceIdx: int, pan: float): void;
/**
 * @param voiceIdx int
 * @param rateHz float
 */
  setVoiceRateHz(voiceIdx: int, rateHz: float): void;
}
