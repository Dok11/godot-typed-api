import type { AudioEffect, AudioStreamWAV, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Audio effect used for recording the sound from an audio bus.
 * 
 * Allows the user to record the sound from an audio bus into an `AudioStreamWAV`. When used on the "Master" audio bus, this includes all audio output by Godot.
 * Unlike `AudioEffectCapture`, this effect encodes the recording with the given format (8-bit, 16-bit, or compressed) instead of giving access to the raw audio samples.
 * Can be used (with an `AudioStreamMicrophone`) to record from a microphone.
 * 
 * **Note:** `ProjectSettings.audio/driver/enable_input` must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
 */
export class AudioEffectRecord extends AudioEffect {
/**
 * Specifies the format in which the sample will be recorded. See `AudioStreamWAV.Format` for available formats.
 */
  format: int;
/**
 * Returns the recorded sample.
 * @returns AudioStreamWAV
 */
  getRecording(): AudioStreamWAV;
/**
 * Returns whether the recording is active or not.
 * @returns boolean
 */
  isRecordingActive(): boolean;
/**
 * If `true`, the sound will be recorded. Note that restarting the recording will remove the previously recorded sample.
 * @param record boolean
 */
  setRecordingActive(record: boolean): void;
}
