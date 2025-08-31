import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Adds a distortion audio effect to an Audio bus.
 * Modifies the sound to make it distorted.
 * 
 * Different types are available: clip, tan, lo-fi (bit crushing), overdrive, or waveshape.
 * By distorting the waveform the frequency content changes, which will often make the sound "crunchy" or "abrasive". For games, it can simulate sound coming from some saturated device or speaker very efficiently.
 */
export class AudioEffectDistortion extends AudioEffect {
/**
 * Distortion power. Value can range from 0 to 1.
 */
  drive: float;
/**
 * High-pass filter, in Hz. Frequencies higher than this value will not be affected by the distortion. Value can range from 1 to 20000.
 */
  keepHfHz: float;
/**
 * Distortion type.
 */
  mode: int;
/**
 * Increases or decreases the volume after the effect, in decibels. Value can range from -80 to 24.
 */
  postGain: float;
/**
 * Increases or decreases the volume before the effect, in decibels. Value can range from -60 to 60.
 */
  preGain: float;
/**
 * Digital distortion effect which cuts off peaks at the top and bottom of the waveform.
 */
  static readonly MODE_CLIP: int;
  static readonly MODE_ATAN: int;
/**
 * Low-resolution digital distortion effect (bit depth reduction). You can use it to emulate the sound of early digital audio devices.
 */
  static readonly MODE_LOFI: int;
/**
 * Emulates the warm distortion produced by a field effect transistor, which is commonly used in solid-state musical instrument amplifiers. The `drive` property has no effect in this mode.
 */
  static readonly MODE_OVERDRIVE: int;
/**
 * Waveshaper distortions are used mainly by electronic musicians to achieve an extra-abrasive sound.
 */
  static readonly MODE_WAVESHAPE: int;
}
