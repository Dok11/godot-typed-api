import type { AudioStream, AudioStreamPlayback, GodotArray, GodotDictionary, Node3D, Signal, StringName, float, int } from "../index.d.ts";
/**
 * Plays positional sound in 3D space.
 * 
 * Plays audio with positional sound effects, based on the relative position of the audio listener. Positional effects include distance attenuation, directionality, and the Doppler effect. For greater realism, a low-pass filter is applied to distant sounds. This can be disabled by setting `attenuation_filter_cutoff_hz` to `20500`.
 * By default, audio is heard from the camera position. This can be changed by adding an `AudioListener3D` node to the scene and enabling it by calling `AudioListener3D.make_current` on it.
 * See also `AudioStreamPlayer` to play a sound non-positionally.
 * 
 * **Note:** Hiding an `AudioStreamPlayer3D` node does not disable its audio output. To temporarily disable an `AudioStreamPlayer3D`'s audio output, set `volume_db` to a very low value like `-100` (which isn't audible to human hearing).
 */
export class AudioStreamPlayer3D extends Node3D {
/**
 * Determines which `Area3D` layers affect the sound for reverb and audio bus effects. Areas can be used to redirect `AudioStream`s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater.
 */
  areaMask: int;
/**
 * The cutoff frequency of the attenuation low-pass filter, in Hz. A sound above this frequency is attenuated more than a sound below this frequency. To disable this effect, set this to `20500` as this frequency is above the human hearing limit.
 */
  attenuationFilterCutoffHz: float;
/**
 * Amount how much the filter affects the loudness, in decibels.
 */
  attenuationFilterDb: float;
/**
 * Decides if audio should get quieter with distance linearly, quadratically, logarithmically, or not be affected by distance, effectively disabling attenuation.
 */
  attenuationModel: int;
/**
 * If `true`, audio plays when the AudioStreamPlayer3D node is added to scene tree.
 */
  autoplay: boolean;
/**
 * The bus on which this audio is playing.
 * 
 * **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.
 */
  bus: StringName;
/**
 * Decides in which step the Doppler effect should be calculated.
 */
  dopplerTracking: int;
/**
 * The angle in which the audio reaches a listener unattenuated.
 */
  emissionAngleDegrees: float;
/**
 * If `true`, the audio should be attenuated according to the direction of the sound.
 */
  emissionAngleEnabled: boolean;
/**
 * Attenuation factor used if listener is outside of `emission_angle_degrees` and `emission_angle_enabled` is set, in decibels.
 */
  emissionAngleFilterAttenuationDb: float;
/**
 * Sets the absolute maximum of the sound level, in decibels.
 */
  maxDb: float;
/**
 * The distance past which the sound can no longer be heard at all. Only has an effect if set to a value greater than `0.0`. `max_distance` works in tandem with `unit_size`. However, unlike `unit_size` whose behavior depends on the `attenuation_model`, `max_distance` always works in a linear fashion. This can be used to prevent the `AudioStreamPlayer3D` from requiring audio mixing when the listener is far away, which saves CPU resources.
 */
  maxDistance: float;
/**
 * The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds.
 */
  maxPolyphony: int;
/**
 * Scales the panning strength for this node by multiplying the base `ProjectSettings.audio/general/3d_panning_strength` with this factor. Higher values will pan audio from left to right more dramatically than lower values.
 */
  panningStrength: float;
/**
 * The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate.
 */
  pitchScale: float;
/**
 * The playback type of the stream player. If set other than to the default value, it will force that playback type.
 */
  playbackType: int;
/**
 * If `true`, audio is playing or is queued to be played (see `play`).
 */
  playing: boolean;
/**
 * The `AudioStream` resource to be played.
 */
  stream: AudioStream;
/**
 * If `true`, the playback is paused. You can resume it by setting `stream_paused` to `false`.
 */
  streamPaused: boolean;
/**
 * The factor for the attenuation effect. Higher values make the sound audible over a larger distance.
 */
  unitSize: float;
/**
 * The base sound level before attenuation, in decibels.
 */
  volumeDb: float;
/**
 * The base sound level before attenuation, as a linear value.
 * 
 * **Note:** This member modifies `volume_db` for convenience. The returned value is equivalent to the result of `@GlobalScope.db_to_linear` on `volume_db`. Setting this member is equivalent to setting `volume_db` to the result of `@GlobalScope.linear_to_db` on a value.
 */
  volumeLinear: float;
/**
 * Returns the position in the `AudioStream`.
 * @returns float
 */
  getPlaybackPosition(): float;
/**
 * Returns the `AudioStreamPlayback` object associated with this `AudioStreamPlayer3D`.
 * @returns AudioStreamPlayback
 */
  getStreamPlayback(): AudioStreamPlayback;
/**
 * Returns whether the `AudioStreamPlayer` can return the `AudioStreamPlayback` object or not.
 * @returns boolean
 */
  hasStreamPlayback(): boolean;
/**
 * Queues the audio to play on the next physics frame, from the given position `from_position`, in seconds.
 * @param fromPosition float (optional, default: 0.0)
 */
  play(fromPosition?: float): void;
/**
 * Sets the position from which audio will be played, in seconds.
 * @param toPosition float
 */
  seek(toPosition: float): void;
/**
 * Stops the audio.
 */
  stop(): void;
/**
 * Emitted when the audio stops playing.
 */
  finished: Signal<[]>;
/**
 * Attenuation of loudness according to linear distance.
 */
  static readonly ATTENUATION_INVERSE_DISTANCE: int;
/**
 * Attenuation of loudness according to squared distance.
 */
  static readonly ATTENUATION_INVERSE_SQUARE_DISTANCE: int;
/**
 * Attenuation of loudness according to logarithmic distance.
 */
  static readonly ATTENUATION_LOGARITHMIC: int;
/**
 * No attenuation of loudness according to distance. The sound will still be heard positionally, unlike an `AudioStreamPlayer`. `ATTENUATION_DISABLED` can be combined with a `max_distance` value greater than `0.0` to achieve linear attenuation clamped to a sphere of a defined size.
 */
  static readonly ATTENUATION_DISABLED: int;
/**
 * Disables doppler tracking.
 */
  static readonly DOPPLER_TRACKING_DISABLED: int;
/**
 * Executes doppler tracking during process frames (see `Node.NOTIFICATION_INTERNAL_PROCESS`).
 */
  static readonly DOPPLER_TRACKING_IDLE_STEP: int;
/**
 * Executes doppler tracking during physics frames (see `Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`).
 */
  static readonly DOPPLER_TRACKING_PHYSICS_STEP: int;
}
