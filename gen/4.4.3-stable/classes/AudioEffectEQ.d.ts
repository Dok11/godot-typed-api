import type { AudioEffect, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Base class for audio equalizers. Gives you control over frequencies.
 * Use it to create a custom equalizer if `AudioEffectEQ6`, `AudioEffectEQ10` or `AudioEffectEQ21` don't fit your needs.
 * 
 * AudioEffectEQ gives you control over frequencies. Use it to compensate for existing deficiencies in audio. AudioEffectEQs are useful on the Master bus to completely master a mix and give it more character. They are also useful when a game is run on a mobile device, to adjust the mix to that kind of speakers (it can be added but disabled when headphones are plugged).
 */
export class AudioEffectEQ extends AudioEffect {
/**
 * Returns the number of bands of the equalizer.
 * @returns int
 */
  getBandCount(): int;
/**
 * Returns the band's gain at the specified index, in dB.
 * @param bandIdx int
 * @returns float
 */
  getBandGainDb(bandIdx: int): float;
/**
 * Sets band's gain at the specified index, in dB.
 * @param bandIdx int
 * @param volumeDb float
 */
  setBandGainDb(bandIdx: int, volumeDb: float): void;
}
