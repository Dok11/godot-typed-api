import type { AudioBusLayout, AudioEffect, AudioEffectInstance, AudioStream, GodotArray, GodotDictionary, Object, PackedStringArray, Signal, StringName, float, int } from "../index.d.ts";
/**
 * Server interface for low-level audio access.
 * 
 * `AudioServer` is a low-level server interface for audio access. It is in charge of creating sample data (playable audio) as well as its playback via a voice interface.
 */
export class AudioServer extends Object {
/**
 * Number of available audio buses.
 */
  busCount: int;
/**
 * Name of the current device for audio input (see `get_input_device_list`). On systems with multiple audio inputs (such as analog, USB and HDMI audio), this can be used to select the audio input device. The value `"Default"` will record audio on the system-wide default audio input. If an invalid device name is set, the value will be reverted back to `"Default"`.
 * 
 * **Note:** `ProjectSettings.audio/driver/enable_input` must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
 */
  inputDevice: string;
/**
 * Name of the current device for audio output (see `get_output_device_list`). On systems with multiple audio outputs (such as analog, USB and HDMI audio), this can be used to select the audio output device. The value `"Default"` will play audio on the system-wide default audio output. If an invalid device name is set, the value will be reverted back to `"Default"`.
 */
  outputDevice: string;
/**
 * Scales the rate at which audio is played (i.e. setting it to `0.5` will make the audio be played at half its speed). See also `Engine.time_scale` to affect the general simulation speed, which is independent from `AudioServer.playback_speed_scale`.
 */
  playbackSpeedScale: float;
/**
 * Adds a bus at `at_position`.
 * @param atPosition int (optional, default: -1)
 */
  addBus(atPosition?: int): void;
/**
 * Adds an `AudioEffect` effect to the bus `bus_idx` at `at_position`.
 * @param busIdx int
 * @param effect AudioEffect
 * @param atPosition int (optional, default: -1)
 */
  addBusEffect(busIdx: int, effect: AudioEffect, atPosition?: int): void;
/**
 * Generates an `AudioBusLayout` using the available buses and effects.
 * @returns AudioBusLayout
 */
  generateBusLayout(): AudioBusLayout;
/**
 * Returns the number of channels of the bus at index `bus_idx`.
 * @param busIdx int
 * @returns int
 */
  getBusChannels(busIdx: int): int;
/**
 * Returns the `AudioEffect` at position `effect_idx` in bus `bus_idx`.
 * @param busIdx int
 * @param effectIdx int
 * @returns AudioEffect
 */
  getBusEffect(busIdx: int, effectIdx: int): AudioEffect;
/**
 * Returns the number of effects on the bus at `bus_idx`.
 * @param busIdx int
 * @returns int
 */
  getBusEffectCount(busIdx: int): int;
/**
 * Returns the `AudioEffectInstance` assigned to the given bus and effect indices (and optionally channel).
 * @param busIdx int
 * @param effectIdx int
 * @param channel int (optional, default: 0)
 * @returns AudioEffectInstance
 */
  getBusEffectInstance(busIdx: int, effectIdx: int, channel?: int): AudioEffectInstance;
/**
 * Returns the index of the bus with the name `bus_name`. Returns `-1` if no bus with the specified name exist.
 * @param busName StringName
 * @returns int
 */
  getBusIndex(busName: StringName): int;
/**
 * Returns the name of the bus with the index `bus_idx`.
 * @param busIdx int
 * @returns string
 */
  getBusName(busIdx: int): string;
/**
 * Returns the peak volume of the left speaker at bus index `bus_idx` and channel index `channel`.
 * @param busIdx int
 * @param channel int
 * @returns float
 */
  getBusPeakVolumeLeftDb(busIdx: int, channel: int): float;
/**
 * Returns the peak volume of the right speaker at bus index `bus_idx` and channel index `channel`.
 * @param busIdx int
 * @param channel int
 * @returns float
 */
  getBusPeakVolumeRightDb(busIdx: int, channel: int): float;
/**
 * Returns the name of the bus that the bus at index `bus_idx` sends to.
 * @param busIdx int
 * @returns StringName
 */
  getBusSend(busIdx: int): StringName;
/**
 * Returns the volume of the bus at index `bus_idx` in dB.
 * @param busIdx int
 * @returns float
 */
  getBusVolumeDb(busIdx: int): float;
/**
 * Returns the volume of the bus at index `bus_idx` as a linear value.
 * 
 * **Note:** The returned value is equivalent to the result of `@GlobalScope.db_to_linear` on the result of `get_bus_volume_db`.
 * @param busIdx int
 * @returns float
 */
  getBusVolumeLinear(busIdx: int): float;
/**
 * Returns the name of the current audio driver. The default usually depends on the operating system, but may be overridden via the `--audio-driver` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html). `--headless` also automatically sets the audio driver to `Dummy`. See also `ProjectSettings.audio/driver/driver`.
 * @returns string
 */
  getDriverName(): string;
/**
 * Returns the names of all audio input devices detected on the system.
 * 
 * **Note:** `ProjectSettings.audio/driver/enable_input` must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
 * @returns PackedStringArray
 */
  getInputDeviceList(): PackedStringArray;
/**
 * Returns the sample rate at the input of the `AudioServer`.
 * @returns float
 */
  getInputMixRate(): float;
/**
 * Returns the sample rate at the output of the `AudioServer`.
 * @returns float
 */
  getMixRate(): float;
/**
 * Returns the names of all audio output devices detected on the system.
 * @returns PackedStringArray
 */
  getOutputDeviceList(): PackedStringArray;
/**
 * Returns the audio driver's effective output latency. This is based on `ProjectSettings.audio/driver/output_latency`, but the exact returned value will differ depending on the operating system and audio driver.
 * 
 * **Note:** This can be expensive; it is not recommended to call `get_output_latency` every frame.
 * @returns float
 */
  getOutputLatency(): float;
/**
 * Returns the speaker configuration.
 * @returns int
 */
  getSpeakerMode(): int;
/**
 * Returns the relative time since the last mix occurred.
 * @returns float
 */
  getTimeSinceLastMix(): float;
/**
 * Returns the relative time until the next mix occurs.
 * @returns float
 */
  getTimeToNextMix(): float;
/**
 * If `true`, the bus at index `bus_idx` is bypassing effects.
 * @param busIdx int
 * @returns boolean
 */
  isBusBypassingEffects(busIdx: int): boolean;
/**
 * If `true`, the effect at index `effect_idx` on the bus at index `bus_idx` is enabled.
 * @param busIdx int
 * @param effectIdx int
 * @returns boolean
 */
  isBusEffectEnabled(busIdx: int, effectIdx: int): boolean;
/**
 * If `true`, the bus at index `bus_idx` is muted.
 * @param busIdx int
 * @returns boolean
 */
  isBusMute(busIdx: int): boolean;
/**
 * If `true`, the bus at index `bus_idx` is in solo mode.
 * @param busIdx int
 * @returns boolean
 */
  isBusSolo(busIdx: int): boolean;
/**
 * If `true`, the stream is registered as a sample. The engine will not have to register it before playing the sample.
 * If `false`, the stream will have to be registered before playing it. To prevent lag spikes, register the stream as sample with `register_stream_as_sample`.
 * @param stream AudioStream
 * @returns boolean
 */
  isStreamRegisteredAsSample(stream: AudioStream): boolean;
/**
 * Locks the audio driver's main loop.
 * 
 * **Note:** Remember to unlock it afterwards.
 */
  lock(): void;
/**
 * Moves the bus from index `index` to index `to_index`.
 * @param index int
 * @param toIndex int
 */
  moveBus(index: int, toIndex: int): void;
/**
 * Forces the registration of a stream as a sample.
 * 
 * **Note:** Lag spikes may occur when calling this method, especially on single-threaded builds. It is suggested to call this method while loading assets, where the lag spike could be masked, instead of registering the sample right before it needs to be played.
 * @param stream AudioStream
 */
  registerStreamAsSample(stream: AudioStream): void;
/**
 * Removes the bus at index `index`.
 * @param index int
 */
  removeBus(index: int): void;
/**
 * Removes the effect at index `effect_idx` from the bus at index `bus_idx`.
 * @param busIdx int
 * @param effectIdx int
 */
  removeBusEffect(busIdx: int, effectIdx: int): void;
/**
 * If `true`, the bus at index `bus_idx` is bypassing effects.
 * @param busIdx int
 * @param enable boolean
 */
  setBusBypassEffects(busIdx: int, enable: boolean): void;
/**
 * If `true`, the effect at index `effect_idx` on the bus at index `bus_idx` is enabled.
 * @param busIdx int
 * @param effectIdx int
 * @param enabled boolean
 */
  setBusEffectEnabled(busIdx: int, effectIdx: int, enabled: boolean): void;
/**
 * Overwrites the currently used `AudioBusLayout`.
 * @param busLayout AudioBusLayout
 */
  setBusLayout(busLayout: AudioBusLayout): void;
/**
 * If `true`, the bus at index `bus_idx` is muted.
 * @param busIdx int
 * @param enable boolean
 */
  setBusMute(busIdx: int, enable: boolean): void;
/**
 * Sets the name of the bus at index `bus_idx` to `name`.
 * @param busIdx int
 * @param name string
 */
  setBusName(busIdx: int, name: string): void;
/**
 * Connects the output of the bus at `bus_idx` to the bus named `send`.
 * @param busIdx int
 * @param send StringName
 */
  setBusSend(busIdx: int, send: StringName): void;
/**
 * If `true`, the bus at index `bus_idx` is in solo mode.
 * @param busIdx int
 * @param enable boolean
 */
  setBusSolo(busIdx: int, enable: boolean): void;
/**
 * Sets the volume in decibels of the bus at index `bus_idx` to `volume_db`.
 * @param busIdx int
 * @param volumeDb float
 */
  setBusVolumeDb(busIdx: int, volumeDb: float): void;
/**
 * Sets the volume as a linear value of the bus at index `bus_idx` to `volume_linear`.
 * 
 * **Note:** Using this method is equivalent to calling `set_bus_volume_db` with the result of `@GlobalScope.linear_to_db` on a value.
 * @param busIdx int
 * @param volumeLinear float
 */
  setBusVolumeLinear(busIdx: int, volumeLinear: float): void;
/**
 * If set to `true`, all instances of `AudioStreamPlayback` will call `AudioStreamPlayback._tag_used_streams` every mix step.
 * 
 * **Note:** This is enabled by default in the editor, as it is used by editor plugins for the audio stream previews.
 * @param enable boolean
 */
  setEnableTaggingUsedAudioStreams(enable: boolean): void;
/**
 * Swaps the position of two effects in bus `bus_idx`.
 * @param busIdx int
 * @param effectIdx int
 * @param byEffectIdx int
 */
  swapBusEffects(busIdx: int, effectIdx: int, byEffectIdx: int): void;
/**
 * Unlocks the audio driver's main loop. (After locking it, you should always unlock it.)
 */
  unlock(): void;
/**
 * Emitted when an audio bus is added, deleted, or moved.
 */
  busLayoutChanged: Signal<[]>;
/**
 * Emitted when the audio bus at `bus_index` is renamed from `old_name` to `new_name`.
 */
  busRenamed: Signal<[busIndex: int, oldName: StringName, newName: StringName]>;
/**
 * Two or fewer speakers were detected.
 */
  static readonly SPEAKER_MODE_STEREO: int;
/**
 * A 3.1 channel surround setup was detected.
 */
  static readonly SPEAKER_SURROUND_31: int;
/**
 * A 5.1 channel surround setup was detected.
 */
  static readonly SPEAKER_SURROUND_51: int;
/**
 * A 7.1 channel surround setup was detected.
 */
  static readonly SPEAKER_SURROUND_71: int;
/**
 * The playback will be considered of the type declared at `ProjectSettings.audio/general/default_playback_type`.
 */
  static readonly PLAYBACK_TYPE_DEFAULT: int;
/**
 * Force the playback to be considered as a stream.
 */
  static readonly PLAYBACK_TYPE_STREAM: int;
/**
 * Force the playback to be considered as a sample. This can provide lower latency and more stable playback (with less risk of audio crackling), at the cost of having less flexibility.
 * 
 * **Note:** Only currently supported on the web platform.
 * 
 * **Note:** `AudioEffect`s are not supported when playback is considered as a sample.
 */
  static readonly PLAYBACK_TYPE_SAMPLE: int;
/**
 * Represents the size of the `PlaybackType` enum.
 */
  static readonly PLAYBACK_TYPE_MAX: int;
}
