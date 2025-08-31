import type { AudioStream, GodotArray, GodotDictionary, PackedByteArray, float, int } from "../index.d.ts";
/**
 * Stores audio data loaded from WAV files.
 * 
 * AudioStreamWAV stores sound samples loaded from WAV files. To play the stored sound, use an `AudioStreamPlayer` (for non-positional audio) or `AudioStreamPlayer2D`/`AudioStreamPlayer3D` (for positional audio). The sound can be looped.
 * This class can also be used to store dynamically-generated PCM audio data. See also `AudioStreamGenerator` for procedural audio generation.
 */
export class AudioStreamWAV extends AudioStream {
/**
 * Contains the audio data in bytes.
 * 
 * **Note:** If `format` is set to `FORMAT_8_BITS`, this property expects signed 8-bit PCM data. To convert from unsigned 8-bit PCM, subtract 128 from each byte.
 * 
 * **Note:** If `format` is set to `FORMAT_QOA`, this property expects data from a full QOA file.
 */
  data: PackedByteArray;
/**
 * Audio format. See `Format` constants for values.
 */
  format: int;
/**
 * The loop start point (in number of samples, relative to the beginning of the stream).
 */
  loopBegin: int;
/**
 * The loop end point (in number of samples, relative to the beginning of the stream).
 */
  loopEnd: int;
/**
 * The loop mode. See `LoopMode` constants for values.
 */
  loopMode: int;
/**
 * The sample rate for mixing this audio. Higher values require more storage space, but result in better quality.
 * In games, common sample rates in use are `11025`, `16000`, `22050`, `32000`, `44100`, and `48000`.
 * According to the Nyquist-Shannon sampling theorem (https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem), there is no quality difference to human hearing when going past 40,000 Hz (since most humans can only hear up to ~20,000 Hz, often less). If you are using lower-pitched sounds such as voices, lower sample rates such as `32000` or `22050` may be usable with no loss in quality.
 */
  mixRate: int;
/**
 * If `true`, audio is stereo.
 */
  stereo: boolean;
/**
 * Creates a new `AudioStreamWAV` instance from the given buffer. The buffer must contain WAV data.
 * The keys and values of `options` match the properties of `ResourceImporterWAV`. The usage of `options` is identical to `AudioStreamWAV.load_from_file`.
 * @param streamData PackedByteArray
 * @param options GodotDictionary<any> (optional, default: {})
 * @returns AudioStreamWAV
 */
  loadFromBuffer(streamData: PackedByteArray, options?: GodotDictionary<any>): AudioStreamWAV;
/**
 * Creates a new `AudioStreamWAV` instance from the given file path. The file must be in WAV format.
 * The keys and values of `options` match the properties of `ResourceImporterWAV`.
 * 
 * **Example:** Load the first file dropped as a WAV and play it:
 * 
 * 				```gdscript
 * 
 * 				@onready var audio_player = $AudioStreamPlayer
 * 
 * 				func _ready():
 * 				    get_window().files_dropped.connect(_on_files_dropped)
 * 
 * 				func _on_files_dropped(files):
 * 				    if files[0].get_extension() == "wav":
 * 				        audio_player.stream = AudioStreamWAV.load_from_file(files[0], {
 * 				                "force/max_rate": true,
 * 				                "force/max_rate_hz": 11025
 * 				            })
 * 				        audio_player.play()
 * 				
 * 
 * ```
 * @param path string
 * @param options GodotDictionary<any> (optional, default: {})
 * @returns AudioStreamWAV
 */
  loadFromFile(path: string, options?: GodotDictionary<any>): AudioStreamWAV;
/**
 * Saves the AudioStreamWAV as a WAV file to `path`. Samples with IMA ADPCM or Quite OK Audio formats can't be saved.
 * 
 * **Note:** A `.wav` extension is automatically appended to `path` if it is missing.
 * @param path string
 * @returns int
 */
  saveToWav(path: string): int;
/**
 * 8-bit PCM audio codec.
 */
  static readonly FORMAT_8_BITS: int;
/**
 * 16-bit PCM audio codec.
 */
  static readonly FORMAT_16_BITS: int;
/**
 * Audio is lossily compressed as IMA ADPCM.
 */
  static readonly FORMAT_IMA_ADPCM: int;
/**
 * Audio is lossily compressed as Quite OK Audio (https://qoaformat.org/).
 */
  static readonly FORMAT_QOA: int;
/**
 * Audio does not loop.
 */
  static readonly LOOP_DISABLED: int;
/**
 * Audio loops the data between `loop_begin` and `loop_end`, playing forward only.
 */
  static readonly LOOP_FORWARD: int;
/**
 * Audio loops the data between `loop_begin` and `loop_end`, playing back and forth.
 */
  static readonly LOOP_PINGPONG: int;
/**
 * Audio loops the data between `loop_begin` and `loop_end`, playing backward only.
 */
  static readonly LOOP_BACKWARD: int;
}
