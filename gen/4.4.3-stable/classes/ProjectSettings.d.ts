import type { Color, Dictionary, GodotArray, GodotDictionary, Object, PackedStringArray, Signal, StringName, Variant, Vector2, Vector2i, Vector3, float, int } from "../index.d.ts";
/**
 * Stores globally-accessible variables.
 * 
 * Stores variables that can be accessed from everywhere. Use `get_setting`, `set_setting` or `has_setting` to access them. Variables stored in `project.godot` are also loaded into `ProjectSettings`, making this object very useful for reading custom game configuration options.
 * When naming a Project Settings property, use the full path to the setting including the category. For example, `"application/config/name"` for the project name. Category and property names can be viewed in the Project Settings dialog.
 * 
 * **Feature tags:** Project settings can be overridden for specific platforms and configurations (debug, release, ...) using feature tags (https://docs.godotengine.org/en/stable/tutorials/export/feature_tags.html).
 * 
 * **Overriding:** Any project setting can be overridden by creating a file named `override.cfg` in the project's root directory. This can also be used in exported projects by placing this file in the same directory as the project binary. Overriding will still take the base project settings' feature tags (https://docs.godotengine.org/en/stable/tutorials/export/feature_tags.html) in account. Therefore, make sure to *also* override the setting with the desired feature tags if you want them to override base project settings on all platforms and configurations.
 */
export class ProjectSettings extends Object {
/**
 * If `true`, `AnimationMixer` prints the warning of interpolation being forced to choose the shortest rotation path due to multiple angle interpolation types being mixed in the `AnimationMixer` cache.
 */
  animationWarningsCheckAngleInterpolationTypeConflicting: boolean;
/**
 * If `true`, `AnimationMixer` prints the warning of no matching object of the track path in the scene.
 */
  animationWarningsCheckInvalidTrackPaths: boolean;
/**
 * Background color for the boot splash.
 */
  applicationBootSplashBgColor: Color;
/**
 * If `true`, scale the boot splash image to the full window size (preserving the aspect ratio) when the engine starts. If `false`, the engine will leave it at the default pixel size.
 */
  applicationBootSplashFullsize: boolean;
/**
 * Path to an image used as the boot splash. If left empty, the default Godot Engine splash will be displayed instead.
 * 
 * **Note:** Only effective if `application/boot_splash/show_image` is `true`.
 * 
 * **Note:** The only supported format is PNG. Using another image format will result in an error.
 * 
 * **Note:** The image will also show when opening the project in the editor. If you want to display the default splash image in the editor, add an empty override for `editor_hint` feature.
 */
  applicationBootSplashImage: string;
/**
 * Minimum boot splash display time (in milliseconds). It is not recommended to set too high values for this setting.
 */
  applicationBootSplashMinimumDisplayTime: int;
/**
 * If `true`, displays the image specified in `application/boot_splash/image` when the engine starts. If `false`, only displays the plain color specified in `application/boot_splash/bg_color`.
 */
  applicationBootSplashShowImage: boolean;
/**
 * If `true`, applies linear filtering when scaling the image (recommended for high-resolution artwork). If `false`, uses nearest-neighbor interpolation (recommended for pixel art).
 */
  applicationBootSplashUseFilter: boolean;
/**
 * If `true`, the application automatically accepts quitting requests.
 */
  applicationConfigAutoAcceptQuit: boolean;
/**
 * This user directory is used for storing persistent data (`user://` filesystem). If a custom directory name is defined, this name will be appended to the system-specific user data directory (same parent folder as the Godot configuration folder documented in `OS.get_user_data_dir`).
 * The `application/config/use_custom_user_dir` setting must be enabled for this to take effect.
 * 
 * **Note:** If `application/config/custom_user_dir_name` contains trailing periods, they will be stripped as folder names ending with a period are not allowed on Windows.
 */
  applicationConfigCustomUserDirName: string;
/**
 * The project's description, displayed as a tooltip in the Project Manager when hovering the project.
 */
  applicationConfigDescription: string;
/**
 * Icon used for the project, set when project loads. Exporters will also use this icon as a fallback if necessary.
 */
  applicationConfigIcon: string;
/**
 * Icon set in `.icns` format used on macOS to set the game's icon. This is done automatically on start by calling `DisplayServer.set_native_icon`.
 */
  applicationConfigMacosNativeIcon: string;
/**
 * The project's name. It is used both by the Project Manager and by exporters. The project name can be translated by translating its value in localization files. The window title will be set to match the project name automatically on startup.
 * 
 * **Note:** Changing this value will also change the user data folder's path if `application/config/use_custom_user_dir` is `false`. After renaming the project, you will no longer be able to access existing data in `user://` unless you rename the old folder to match the new project name. See Data paths (https://docs.godotengine.org/en/stable/tutorials/io/data_paths.html) in the documentation for more information.
 */
  applicationConfigName: string;
/**
 * Translations of the project's name. This setting is used by OS tools to translate application name on Android, iOS and macOS.
 */
  applicationConfigNameLocalized: GodotDictionary<any>;
/**
 * Specifies a file to override project settings. For example: `user://custom_settings.cfg`. See "Overriding" in the `ProjectSettings` class description at the top for more information.
 * 
 * **Note:** Regardless of this setting's value, `res://override.cfg` will still be read to override the project settings.
 */
  applicationConfigProjectSettingsOverride: string;
/**
 * If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).
 */
  applicationConfigQuitOnGoBack: boolean;
/**
 * If `true`, the project will save user data to its own user directory. If `application/config/custom_user_dir_name` is empty, `<OS user data directory>/<project name>` directory will be used. If `false`, the project will save user data to `<OS user data directory>/Godot/app_userdata/<project name>`.
 * See also File paths in Godot projects (https://docs.godotengine.org/en/stable/tutorials/io/data_paths.html#accessing-persistent-user-data-user). This setting is only effective on desktop platforms.
 */
  applicationConfigUseCustomUserDir: boolean;
/**
 * If `true`, the project will use a hidden directory (`.godot`) for storing project-specific data (metadata, shader cache, etc.).
 * If `false`, a non-hidden directory (`godot`) will be used instead.
 * 
 * **Note:** Restart the application after changing this setting.
 * 
 * **Note:** Changing this value can help on platforms or with third-party tools where hidden directory patterns are disallowed. Only modify this setting if you know that your environment requires it, as changing the default can impact compatibility with some external tools or plugins which expect the default `.godot` folder.
 */
  applicationConfigUseHiddenProjectDataDirectory: boolean;
/**
 * The project's human-readable version identifier. This is used by exporters if the version identifier isn't overridden there. If `application/config/version` is an empty string and the version identifier isn't overridden in an exporter, the exporter will use `1.0.0` as a version identifier.
 */
  applicationConfigVersion: string;
/**
 * Icon set in `.ico` format used on Windows to set the game's icon. This is done automatically on start by calling `DisplayServer.set_native_icon`.
 */
  applicationConfigWindowsNativeIcon: string;
/**
 * Time samples for frame deltas are subject to random variation introduced by the platform, even when frames are displayed at regular intervals thanks to V-Sync. This can lead to jitter. Delta smoothing can often give a better result by filtering the input deltas to correct for minor fluctuations from the refresh rate.
 * 
 * **Note:** Delta smoothing is only attempted when `display/window/vsync/vsync_mode` is set to `enabled`, as it does not work well without V-Sync.
 * It may take several seconds at a stable frame rate before the smoothing is initially activated. It will only be active on machines where performance is adequate to render frames at the refresh rate.
 */
  applicationRunDeltaSmoothing: boolean;
/**
 * If `true`, disables printing to standard error. If `true`, this also hides error and warning messages printed by `@GlobalScope.push_error` and `@GlobalScope.push_warning`. See also `application/run/disable_stdout`.
 * Changes to this setting will only be applied upon restarting the application. To control this at runtime, use `Engine.print_error_messages`.
 */
  applicationRunDisableStderr: boolean;
/**
 * If `true`, disables printing to standard output. This is equivalent to starting the editor or project with the `--quiet` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html). See also `application/run/disable_stderr`.
 * Changes to this setting will only be applied upon restarting the application. To control this at runtime, use `Engine.print_to_stdout`.
 */
  applicationRunDisableStdout: boolean;
/**
 * If `true`, allows the `Alt + Space` keys to display the window menu. This menu allows the user to perform various window management operations such as moving, resizing, or minimizing the window.
 * 
 * **Note:** When the menu is displayed, project execution will pause until the menu is *fully* closed due to Windows behavior. Consider this when enabling this setting in a networked multiplayer game. The menu is only considered fully closed when an option is selected, when the user clicks outside, or when `Escape` is pressed after bringing up the window menu *and* another key is pressed afterwards.
 * 
 * **Note:** This setting is implemented only on Windows.
 */
  applicationRunEnableAltSpaceMenu: boolean;
/**
 * If `true`, flushes the standard output stream every time a line is printed. This affects both terminal logging and file logging.
 * When running a project, this setting must be enabled if you want logs to be collected by service managers such as systemd/journalctl. This setting is disabled by default on release builds, since flushing on every printed line will negatively affect performance if lots of lines are printed in a rapid succession. Also, if this setting is enabled, logged files will still be written successfully if the application crashes or is otherwise killed by the user (without being closed "normally").
 * 
 * **Note:** Regardless of this setting, the standard error stream (`stderr`) is always flushed when a line is printed to it.
 * Changes to this setting will only be applied upon restarting the application.
 */
  applicationRunFlushStdoutOnPrint: boolean;
/**
 * Debug build override for `application/run/flush_stdout_on_print`, as performance is less important during debugging.
 * Changes to this setting will only be applied upon restarting the application.
 */
  applicationRunFlushStdoutOnPrintDebug: boolean;
/**
 * Forces a *constant* delay between frames in the main loop (in milliseconds). In most situations, `application/run/max_fps` should be preferred as an FPS limiter as it's more precise.
 * This setting can be overridden using the `--frame-delay <ms;>` command line argument.
 */
  applicationRunFrameDelayMsec: int;
/**
 * If `true`, enables low-processor usage mode. When enabled, the engine takes longer to redraw, but only redraws the screen if necessary. This may lower power consumption, and is intended for editors or mobile applications. For most games, because the screen needs to be redrawn every frame, it is recommended to keep this setting disabled.
 */
  applicationRunLowProcessorMode: boolean;
/**
 * Amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU usage.
 */
  applicationRunLowProcessorModeSleepUsec: int;
/**
 * The name of the type implementing the engine's main loop.
 */
  applicationRunMainLoopType: string;
/**
 * Path to the main scene file that will be loaded when the project runs.
 */
  applicationRunMainScene: string;
/**
 * Maximum number of frames per second allowed. A value of `0` means "no limit". The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project logic and rendering.
 * Limiting the FPS can be useful to reduce system power consumption, which reduces heat and noise emissions (and improves battery life on mobile devices).
 * If `display/window/vsync/vsync_mode` is set to `Enabled` or `Adaptive`, it takes precedence and the forced FPS number cannot exceed the monitor's refresh rate.
 * If `display/window/vsync/vsync_mode` is `Enabled`, on monitors with variable refresh rate enabled (G-Sync/FreeSync), using an FPS limit a few frames lower than the monitor's refresh rate will reduce input lag while avoiding tearing (https://blurbusters.com/howto-low-lag-vsync-on/).
 * If `display/window/vsync/vsync_mode` is `Disabled`, limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.
 * See also `physics/common/physics_ticks_per_second`.
 * This setting can be overridden using the `--max-fps <fps>` command line argument (including with a value of `0` for unlimited framerate).
 * 
 * **Note:** This property is only read when the project starts. To change the rendering FPS cap at runtime, set `Engine.max_fps` instead.
 */
  applicationRunMaxFps: int;
/**
 * If `true`, the engine header is printed in the console on startup. This header describes the current version of the engine, as well as the renderer being used. This behavior can also be disabled on the command line with the `--no-header` option.
 */
  applicationRunPrintHeader: boolean;
/**
 * Audio buses will disable automatically when sound goes below a given dB threshold for a given time. This saves CPU as effects assigned to that bus will no longer do any processing.
 */
  audioBusesChannelDisableThresholdDb: float;
/**
 * Audio buses will disable automatically when sound goes below a given dB threshold for a given time. This saves CPU as effects assigned to that bus will no longer do any processing.
 */
  audioBusesChannelDisableTime: float;
/**
 * Default `AudioBusLayout` resource file to use in the project, unless overridden by the scene.
 */
  audioBusesDefaultBusLayout: string;
/**
 * Specifies the audio driver to use. This setting is platform-dependent as each platform supports different audio drivers. If left empty, the default audio driver will be used.
 * The `Dummy` audio driver disables all audio playback and recording, which is useful for non-game applications as it reduces CPU usage. It also prevents the engine from appearing as an application playing audio in the OS' audio mixer.
 * To query the value that is being used at run-time (which may be overridden by command-line arguments or headless mode), use `AudioServer.get_driver_name`.
 * 
 * **Note:** The driver in use can be overridden at runtime via the `--audio-driver` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 */
  audioDriverDriver: string;
/**
 * If `true`, microphone input will be allowed. This requires appropriate permissions to be set when exporting to Android or iOS.
 * 
 * **Note:** If the operating system blocks access to audio input devices (due to the user's privacy settings), audio capture will only return silence. On Windows 10 and later, make sure that apps are allowed to access the microphone in the OS' privacy settings.
 */
  audioDriverEnableInput: boolean;
/**
 * Target mixing rate used for audio (in Hz). In general, it's better to not touch this and leave it to the host operating system.
 * 
 * **Note:** On iOS and macOS, mixing rate is determined by audio driver, this value is ignored.
 * 
 * **Note:** Input and output mixing rates might be different. Use `AudioServer.get_mix_rate` and `AudioServer.get_input_mix_rate` to get actual values.
 */
  audioDriverMixRate: int;
/**
 * Safer override for `audio/driver/mix_rate` in the Web platform. Here `0` means "let the browser choose" (since some browsers do not like forcing the mix rate).
 */
  audioDriverMixRateWeb: int;
/**
 * Specifies the preferred output latency in milliseconds for audio. Lower values will result in lower audio latency at the cost of increased CPU usage. Low values may result in audible crackling on slower hardware.
 * Audio output latency may be constrained by the host operating system and audio hardware drivers. If the host can not provide the specified audio output latency then Godot will attempt to use the nearest latency allowed by the host. As such you should always use `AudioServer.get_output_latency` to determine the actual audio output latency.
 * Audio output latency can be overridden using the `--audio-output-latency <ms>` command line argument.
 * 
 * **Note:** This setting is ignored on Android, and on all versions of Windows prior to Windows 10.
 */
  audioDriverOutputLatency: int;
/**
 * Safer override for `audio/driver/output_latency` in the Web platform, to avoid audio issues especially on mobile devices.
 */
  audioDriverOutputLatencyWeb: int;
/**
 * The base strength of the panning effect for all `AudioStreamPlayer2D` nodes. The panning strength can be further scaled on each Node using `AudioStreamPlayer2D.panning_strength`. A value of `0.0` disables stereo panning entirely, leaving only volume attenuation in place. A value of `1.0` completely mutes one of the channels if the sound is located exactly to the left (or right) of the listener.
 * The default value of `0.5` is tuned for headphones. When using speakers, you may find lower values to sound better as speakers have a lower stereo separation compared to headphones.
 */
  audioGeneral2dPanningStrength: float;
/**
 * The base strength of the panning effect for all `AudioStreamPlayer3D` nodes. The panning strength can be further scaled on each Node using `AudioStreamPlayer3D.panning_strength`. A value of `0.0` disables stereo panning entirely, leaving only volume attenuation in place. A value of `1.0` completely mutes one of the channels if the sound is located exactly to the left (or right) of the listener.
 * The default value of `0.5` is tuned for headphones. When using speakers, you may find lower values to sound better as speakers have a lower stereo separation compared to headphones.
 */
  audioGeneral3dPanningStrength: float;
/**
 * Specifies the default playback type of the platform.
 * The default value is set to **Stream**, as most platforms have no issues mixing streams.
 */
  audioGeneralDefaultPlaybackType: int;
/**
 * Specifies the default playback type of the Web platform.
 * The default value is set to **Sample** as the Web platform is not suited to mix audio streams outside of the Web Audio API, especially when exporting a single-threaded game. **Sample** allows for lower latency on the web platform at the cost of flexibility (`AudioEffect`s are not supported).
 * 
 * **Warning:** Forcing **Stream** on the Web platform may cause high audio latency and crackling, especially when exporting a multi-threaded game.
 */
  audioGeneralDefaultPlaybackTypeWeb: int;
/**
 * Sets the mixWithOthers (https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616611-mixwithothers) option for the AVAudioSession on iOS. This will override the mix behavior, if the category is set to `Play and Record`, `Playback`, or `Multi Route`.
 * `Ambient` always has this set per default.
 */
  audioGeneralIosMixWithOthers: boolean;
/**
 * Sets the AVAudioSessionCategory (https://developer.apple.com/documentation/avfaudio/avaudiosessioncategory) on iOS. Use the `Playback` category to get sound output, even if the phone is in silent mode.
 */
  audioGeneralIosSessionCategory: int;
/**
 * If `true`, text-to-speech support is enabled, see `DisplayServer.tts_get_voices` and `DisplayServer.tts_speak`.
 * 
 * **Note:** Enabling TTS can cause addition idle CPU usage and interfere with the sleep mode, so consider disabling it if TTS is not used.
 */
  audioGeneralTextToSpeech: boolean;
/**
 * Setting to hardcode audio delay when playing video. Best to leave this unchanged unless you know what you are doing.
 */
  audioVideoVideoDelayCompensationMs: int;
/**
 * If `true`, ambient lights will be imported from COLLADA models as `DirectionalLight3D`. If `false`, ambient lights will be ignored.
 */
  colladaUseAmbient: boolean;
/**
 * The default compression level for gzip. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level. `-1` uses the default gzip compression level, which is identical to `6` but could change in the future due to underlying zlib updates.
 */
  compressionFormatsGzipCompressionLevel: int;
/**
 * The default compression level for Zlib. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level. `-1` uses the default gzip compression level, which is identical to `6` but could change in the future due to underlying zlib updates.
 */
  compressionFormatsZlibCompressionLevel: int;
/**
 * The default compression level for Zstandard. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level.
 */
  compressionFormatsZstdCompressionLevel: int;
/**
 * Enables long-distance matching (https://github.com/facebook/zstd/releases/tag/v1.3.2) in Zstandard.
 */
  compressionFormatsZstdLongDistanceMatching: boolean;
/**
 * Largest size limit (in power of 2) allowed when compressing using long-distance matching with Zstandard. Higher values can result in better compression, but will require more memory when compressing and decompressing.
 */
  compressionFormatsZstdWindowLogSize: int;
/**
 * If canvas item redraw debugging is active, this color will be flashed on canvas items when they redraw.
 */
  debugCanvasItemsDebugRedrawColor: Color;
/**
 * If canvas item redraw debugging is active, this will be the time the flash will last each time they redraw.
 */
  debugCanvasItemsDebugRedrawTime: float;
/**
 * If `true`, logs all output and error messages to files. See also `debug/file_logging/log_path`, `debug/file_logging/max_log_files`, and `application/run/flush_stdout_on_print`.
 */
  debugFileLoggingEnableFileLogging: boolean;
/**
 * Desktop override for `debug/file_logging/enable_file_logging`, as log files are not readily accessible on mobile/Web platforms.
 */
  debugFileLoggingEnableFileLoggingPc: boolean;
/**
 * Path at which to store log files for the project. Using a path under `user://` is recommended.
 * This can be specified manually on the command line using the `--log-file <file>` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html). If this command line argument is specified, log rotation is automatically disabled (see `debug/file_logging/max_log_files`).
 */
  debugFileLoggingLogPath: string;
/**
 * Specifies the maximum number of log files allowed (used for rotation). Set to `1` to disable log file rotation.
 * If the `--log-file <file>` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html) is used, log rotation is always disabled.
 */
  debugFileLoggingMaxLogFiles: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when an `assert` call always evaluates to `false`.
 */
  debugGdscriptWarningsAssertAlwaysFalse: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when an `assert` call always evaluates to `true`.
 */
  debugGdscriptWarningsAssertAlwaysTrue: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a local variable captured by a lambda is reassigned, since this does not modify the outer local variable.
 */
  debugGdscriptWarningsConfusableCaptureReassignment: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when an identifier contains characters that can be confused with something else, like when mixing different alphabets.
 */
  debugGdscriptWarningsConfusableIdentifier: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when an identifier declared in the nested block has the same name as an identifier declared below in the parent block.
 */
  debugGdscriptWarningsConfusableLocalDeclaration: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when an identifier that will be shadowed below in the block is used.
 */
  debugGdscriptWarningsConfusableLocalUsage: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a constant is used as a function.
 * @deprecated This warning is never produced. Instead, an error is generated if the expression type is known at compile time.
 */
  debugGdscriptWarningsConstantUsedAsFunction: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when deprecated keywords are used.
 * 
 * **Note:** There are currently no deprecated keywords, so this warning is never produced.
 */
  debugGdscriptWarningsDeprecatedKeyword: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when an empty file is parsed.
 */
  debugGdscriptWarningsEmptyFile: int;
/**
 * If `true`, enables specific GDScript warnings (see `debug/gdscript/warnings/*` settings). If `false`, disables all GDScript warnings.
 */
  debugGdscriptWarningsEnable: boolean;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a variable has an enum type but no explicit default value, but only if the enum does not contain `0` as a valid value.
 */
  debugGdscriptWarningsEnumVariableWithoutDefault: int;
/**
 * If `true`, scripts in the `res://addons` folder will not generate warnings.
 */
  debugGdscriptWarningsExcludeAddons: boolean;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when using a function as if it is a property.
 * @deprecated This warning is never produced. When a function is used as a property, a `Callable` is returned.
 */
  debugGdscriptWarningsFunctionUsedAsProperty: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when `Node.get_node` (or the shorthand `$`) is used as default value of a class variable without the `@onready` annotation.
 */
  debugGdscriptWarningsGetNodeDefaultWithoutOnready: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a ternary operator may emit values with incompatible types.
 */
  debugGdscriptWarningsIncompatibleTernary: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a static inferred type uses a `Variant` as initial value, which makes the static type to also be Variant.
 */
  debugGdscriptWarningsInferenceOnVariant: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a variable, constant, or parameter has an implicitly inferred static type.
 * 
 * **Note:** This warning is recommended *in addition* to `debug/gdscript/warnings/untyped_declaration` if you want to always specify the type explicitly. Having `INFERRED_DECLARATION` warning level higher than `UNTYPED_DECLARATION` warning level makes little sense and is not recommended.
 */
  debugGdscriptWarningsInferredDeclaration: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when trying to use an integer as an enum without an explicit cast.
 */
  debugGdscriptWarningsIntAsEnumWithoutCast: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when trying to use an integer as an enum when there is no matching enum member for that numeric value.
 */
  debugGdscriptWarningsIntAsEnumWithoutMatch: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when dividing an integer by another integer (the decimal part will be discarded).
 */
  debugGdscriptWarningsIntegerDivision: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when the base class script has the `@tool` annotation, but the current class script does not have it.
 */
  debugGdscriptWarningsMissingTool: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when passing a floating-point value to a function that expects an integer (it will be converted and lose precision).
 */
  debugGdscriptWarningsNarrowingConversion: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a method in the script overrides a native method, because it may not behave as expected.
 */
  debugGdscriptWarningsNativeMethodOverride: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when the `@onready` annotation is used together with the `@export` annotation, since it may not behave as expected.
 */
  debugGdscriptWarningsOnreadyWithExport: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when using a property as if it is a function.
 * @deprecated This warning is never produced. Instead, an error is generated if the expression type is known at compile time.
 */
  debugGdscriptWarningsPropertyUsedAsFunction: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a function that is not a coroutine is called with await.
 */
  debugGdscriptWarningsRedundantAwait: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when the `@static_unload` annotation is used in a script without any static variables.
 */
  debugGdscriptWarningsRedundantStaticUnload: int;
/**
 * When enabled, using a property, enum, or function that was renamed since Godot 3 will produce a hint if an error occurs.
 */
  debugGdscriptWarningsRenamedInGodot4Hint: boolean;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when calling a function without using its return value (by assigning it to a variable or using it as a function argument). These return values are sometimes used to indicate possible errors using the `Error` enum.
 */
  debugGdscriptWarningsReturnValueDiscarded: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when defining a local or member variable, signal, or enum that would have the same name as a built-in function or global class name, thus shadowing it.
 */
  debugGdscriptWarningsShadowedGlobalIdentifier: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a local variable or local constant shadows a member declared in the current class.
 */
  debugGdscriptWarningsShadowedVariable: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a local variable or local constant shadows a member declared in a base class.
 */
  debugGdscriptWarningsShadowedVariableBaseClass: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when calling an expression that may have no effect on the surrounding code, such as writing `2 + 2` as a statement.
 */
  debugGdscriptWarningsStandaloneExpression: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when calling a ternary expression that may have no effect on the surrounding code, such as writing `42 if active else 0` as a statement.
 */
  debugGdscriptWarningsStandaloneTernary: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when calling a static method from an instance of a class instead of from the class directly.
 */
  debugGdscriptWarningsStaticCalledOnInstance: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when using a variable that wasn't previously assigned.
 */
  debugGdscriptWarningsUnassignedVariable: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when assigning a variable using an assignment operator like `+=` if the variable wasn't previously assigned.
 */
  debugGdscriptWarningsUnassignedVariableOpAssign: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when unreachable code is detected (such as after a `return` statement that will always be executed).
 */
  debugGdscriptWarningsUnreachableCode: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when an unreachable `match` pattern is detected.
 */
  debugGdscriptWarningsUnreachablePattern: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when using an expression whose type may not be compatible with the function parameter expected.
 */
  debugGdscriptWarningsUnsafeCallArgument: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a `Variant` value is cast to a non-Variant.
 */
  debugGdscriptWarningsUnsafeCast: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when calling a method whose presence is not guaranteed at compile-time in the class.
 */
  debugGdscriptWarningsUnsafeMethodAccess: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when accessing a property whose presence is not guaranteed at compile-time in the class.
 */
  debugGdscriptWarningsUnsafePropertyAccess: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when returning a call from a `void` function when such call cannot be guaranteed to be also `void`.
 */
  debugGdscriptWarningsUnsafeVoidReturn: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a variable or parameter has no static type, or if a function has no static return type.
 * 
 * **Note:** This warning is recommended together with `EditorSettings.text_editor/completion/add_type_hints` to help achieve type safety.
 */
  debugGdscriptWarningsUntypedDeclaration: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a local constant is never used.
 */
  debugGdscriptWarningsUnusedLocalConstant: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a function parameter is never used.
 */
  debugGdscriptWarningsUnusedParameter: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a private member variable is never used.
 */
  debugGdscriptWarningsUnusedPrivateClassVariable: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a signal is declared but never explicitly used in the class.
 */
  debugGdscriptWarningsUnusedSignal: int;
/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a local variable is unused.
 */
  debugGdscriptWarningsUnusedVariable: int;
/**
 * Message to be displayed before the backtrace when the engine crashes. By default, this message is only used in exported projects due to the editor-only override applied to this setting.
 */
  debugSettingsCrashHandlerMessage: string;
/**
 * Editor-only override for `debug/settings/crash_handler/message`. Does not affect exported projects in debug or release mode.
 */
  debugSettingsCrashHandlerMessageEditor: string;
/**
 * Maximum call stack allowed for debugging GDScript.
 */
  debugSettingsGdscriptMaxCallStack: int;
/**
 * If `true`, enables warnings which can help pinpoint where nodes are being incorrectly updated, which will result in incorrect interpolation and visual glitches.
 * When a node is being interpolated, it is essential that the transform is set during `Node._physics_process` (during a physics tick) rather than `Node._process` (during a frame).
 */
  debugSettingsPhysicsInterpolationEnableWarnings: boolean;
/**
 * Maximum number of functions per frame allowed when profiling.
 */
  debugSettingsProfilerMaxFunctions: int;
/**
 * Maximum number of timestamp query elements allowed per frame for visual profiling.
 */
  debugSettingsProfilerMaxTimestampQueryElements: int;
/**
 * Print frames per second to standard output every second.
 */
  debugSettingsStdoutPrintFps: boolean;
/**
 * Print GPU profile information to standard output every second. This includes how long each frame takes the GPU to render on average, broken down into different steps of the render pipeline, such as CanvasItems, shadows, glow, etc.
 */
  debugSettingsStdoutPrintGpuProfile: boolean;
/**
 * Print more information to standard output when running. It displays information such as memory leaks, which scenes and resources are being loaded, etc. This can also be enabled using the `--verbose` or `-v` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html), even on an exported project. See also `OS.is_stdout_verbose` and `@GlobalScope.print_verbose`.
 */
  debugSettingsStdoutVerboseStdout: boolean;
/**
 * When set to `true`, produces a warning when the shader exceeds certain device limits. Currently, the only device limit checked is the limit on uniform buffer size. More device limits will be added in the future.
 */
  debugShaderLanguageWarningsDeviceLimitExceeded: boolean;
/**
 * If `true`, enables specific shader warnings (see `debug/shader_language/warnings/*` settings). If `false`, disables all shader warnings.
 */
  debugShaderLanguageWarningsEnable: boolean;
/**
 * When set to `true`, produces a warning when two floating-point numbers are compared directly with the `==` operator or the `!=` operator.
 */
  debugShaderLanguageWarningsFloatComparison: boolean;
/**
 * When set to `true`, produces a warning upon encountering certain formatting errors. Currently this only checks for empty statements. More formatting errors may be added over time.
 */
  debugShaderLanguageWarningsFormattingError: boolean;
/**
 * When set to `true`, produces a warning when the shader contains `POSITION = vec4(vertex,` as this was very common code written in Godot 4.2 and earlier that was paired with a QuadMesh to produce a full screen post processes pass. With the switch to reversed z in 4.3, this trick no longer works, as it implicitly relied on the `VERTEX.z` being 0.
 */
  debugShaderLanguageWarningsMagicPositionWrite: boolean;
/**
 * When set to `true`, warnings are treated as errors.
 */
  debugShaderLanguageWarningsTreatWarningsAsErrors: boolean;
/**
 * When set to `true`, produces a warning when a constant is never used.
 */
  debugShaderLanguageWarningsUnusedConstant: boolean;
/**
 * When set to `true`, produces a warning when a function is never used.
 */
  debugShaderLanguageWarningsUnusedFunction: boolean;
/**
 * When set to `true`, produces a warning when a local variable is never used.
 */
  debugShaderLanguageWarningsUnusedLocalVariable: boolean;
/**
 * When set to `true`, produces a warning when a struct is never used.
 */
  debugShaderLanguageWarningsUnusedStruct: boolean;
/**
 * When set to `true`, produces a warning when a uniform is never used.
 */
  debugShaderLanguageWarningsUnusedUniform: boolean;
/**
 * When set to `true`, produces a warning when a varying is never used.
 */
  debugShaderLanguageWarningsUnusedVarying: boolean;
/**
 * Color of the avoidance agents radius, visible when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceAgentsRadiusColor: Color;
/**
 * If enabled, displays avoidance agents radius when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceEnableAgentsRadius: boolean;
/**
 * If enabled, displays avoidance obstacles radius when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceEnableObstaclesRadius: boolean;
/**
 * If enabled, displays static avoidance obstacles when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceEnableObstaclesStatic: boolean;
/**
 * Color of the avoidance obstacles radius, visible when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceObstaclesRadiusColor: Color;
/**
 * Color of the static avoidance obstacles edges when their vertices are winded in order to push agents in, visible when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceObstaclesStaticEdgePushinColor: Color;
/**
 * Color of the static avoidance obstacles edges when their vertices are winded in order to push agents out, visible when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceObstaclesStaticEdgePushoutColor: Color;
/**
 * Color of the static avoidance obstacles faces when their vertices are winded in order to push agents in, visible when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceObstaclesStaticFacePushinColor: Color;
/**
 * Color of the static avoidance obstacles faces when their vertices are winded in order to push agents out, visible when "Visible Avoidance" is enabled in the Debug menu.
 */
  debugShapesAvoidanceObstaclesStaticFacePushoutColor: Color;
/**
 * Color of the contact points between collision shapes, visible when "Visible Collision Shapes" is enabled in the Debug menu.
 */
  debugShapesCollisionContactColor: Color;
/**
 * Sets whether 2D physics will display collision outlines in game when "Visible Collision Shapes" is enabled in the Debug menu.
 */
  debugShapesCollisionDraw2dOutlines: boolean;
/**
 * Maximum number of contact points between collision shapes to display when "Visible Collision Shapes" is enabled in the Debug menu.
 */
  debugShapesCollisionMaxContactsDisplayed: int;
/**
 * Color of the collision shapes, visible when "Visible Collision Shapes" is enabled in the Debug menu.
 */
  debugShapesCollisionShapeColor: Color;
/**
 * Color to display enabled navigation agent paths when an agent has debug enabled.
 */
  debugShapesNavigationAgentPathColor: Color;
/**
 * Rasterized size (pixel) used to render navigation agent path points when an agent has debug enabled.
 */
  debugShapesNavigationAgentPathPointSize: float;
/**
 * Color to display edge connections between navigation regions, visible when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEdgeConnectionColor: Color;
/**
 * If enabled, displays navigation agent paths when an agent has debug enabled.
 */
  debugShapesNavigationEnableAgentPaths: boolean;
/**
 * If enabled, displays navigation agent paths through geometry when an agent has debug enabled.
 */
  debugShapesNavigationEnableAgentPathsXray: boolean;
/**
 * If enabled, displays edge connections between navigation regions when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEnableEdgeConnections: boolean;
/**
 * If enabled, displays edge connections between navigation regions through geometry when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEnableEdgeConnectionsXray: boolean;
/**
 * If enabled, displays navigation mesh polygon edges when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEnableEdgeLines: boolean;
/**
 * If enabled, displays navigation mesh polygon edges through geometry when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEnableEdgeLinesXray: boolean;
/**
 * If enabled, colorizes each navigation mesh polygon face with a random color when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEnableGeometryFaceRandomColor: boolean;
/**
 * If enabled, displays navigation link connections when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEnableLinkConnections: boolean;
/**
 * If enabled, displays navigation link connections through geometry when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationEnableLinkConnectionsXray: boolean;
/**
 * Color to display enabled navigation mesh polygon edges, visible when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationGeometryEdgeColor: Color;
/**
 * Color to display disabled navigation mesh polygon edges, visible when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationGeometryEdgeDisabledColor: Color;
/**
 * Color to display enabled navigation mesh polygon faces, visible when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationGeometryFaceColor: Color;
/**
 * Color to display disabled navigation mesh polygon faces, visible when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationGeometryFaceDisabledColor: Color;
/**
 * Color to use to display navigation link connections, visible when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationLinkConnectionColor: Color;
/**
 * Color to use to display disabled navigation link connections, visible when "Visible Navigation" is enabled in the Debug menu.
 */
  debugShapesNavigationLinkConnectionDisabledColor: Color;
/**
 * Color of the curve path geometry, visible when "Visible Paths" is enabled in the Debug menu.
 */
  debugShapesPathsGeometryColor: Color;
/**
 * Line width of the curve path geometry, visible when "Visible Paths" is enabled in the Debug menu.
 */
  debugShapesPathsGeometryWidth: float;
/**
 * Sets the driver to be used by the display server. This property can not be edited directly, instead, set the driver using the platform-specific overrides.
 */
  displayDisplayServerDriver: string;
/**
 * Android override for `display/display_server/driver`.
 */
  displayDisplayServerDriverAndroid: string;
/**
 * iOS override for `display/display_server/driver`.
 */
  displayDisplayServerDriverIos: string;
/**
 * LinuxBSD override for `display/display_server/driver`.
 */
  displayDisplayServerDriverLinuxbsd: string;
/**
 * MacOS override for `display/display_server/driver`.
 */
  displayDisplayServerDriverMacos: string;
/**
 * Windows override for `display/display_server/driver`.
 */
  displayDisplayServerDriverWindows: string;
/**
 * Custom image for the mouse cursor (limited to 256×256).
 */
  displayMouseCursorCustomImage: string;
/**
 * Hotspot for the custom mouse cursor image.
 */
  displayMouseCursorCustomImageHotspot: Vector2;
/**
 * Position offset for tooltips, relative to the mouse cursor's hotspot.
 */
  displayMouseCursorTooltipPositionOffset: Vector2;
/**
 * If `true`, allows HiDPI display on Windows, macOS, Android, iOS and Web. If `false`, the platform's low-DPI fallback will be used on HiDPI displays, which causes the window to be displayed in a blurry or pixelated manner (and can cause various window management bugs). Therefore, it is recommended to make your project scale to multiple resolutions (https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html) instead of disabling this setting.
 * 
 * **Note:** This setting has no effect on Linux as DPI-awareness fallbacks are not supported there.
 */
  displayWindowDpiAllowHidpi: boolean;
/**
 * If `true`, keeps the screen on (even in case of inactivity), so the screensaver does not take over. Works on desktop and mobile platforms.
 */
  displayWindowEnergySavingKeepScreenOn: boolean;
/**
 * Enable Swappy for stable frame pacing on Android. Highly recommended.
 * 
 * **Note:** This option will be forced off when using OpenXR.
 */
  displayWindowFramePacingAndroidEnableFramePacing: boolean;
/**
 * Swappy mode to use. The options are:
 * - pipeline_forced_on: Try to honor `Engine.max_fps`. Pipelining is always on. This is the same behavior as Desktop PC.
 * - auto_fps_pipeline_forced_on: Autocalculate max fps. Actual max_fps will be between 0 and `Engine.max_fps`. While this sounds convenient, beware that Swappy will often downgrade max fps until it finds something that can be met and sustained. That means if your game runs between 40fps and 60fps on a 60hz screen, after some time Swappy will downgrade max fps so that the game renders at perfect 30fps.
 * - auto_fps_auto_pipeline: Same as auto_fps_pipeline_forced_on, but if Swappy detects that rendering is very fast (e.g. it takes < 8ms to render on a 60hz screen) Swappy will disable pipelining to minimize input latency. This is the default.
 * 
 * **Note:** If `Engine.max_fps` is 0, actual max_fps will considered as to be the screen's refresh rate (often 60hz, 90hz or 120hz depending on device model and OS settings).
 */
  displayWindowFramePacingAndroidSwappyMode: int;
/**
 * The default screen orientation to use on mobile devices. See `DisplayServer.ScreenOrientation` for possible values.
 * 
 * **Note:** When set to a portrait orientation, this project setting does not flip the project resolution's width and height automatically. Instead, you have to set `display/window/size/viewport_width` and `display/window/size/viewport_height` accordingly.
 */
  displayWindowHandheldOrientation: int;
/**
 * If `true`, iOS devices that support high refresh rate/"ProMotion" will be allowed to render at up to 120 frames per second.
 */
  displayWindowIosAllowHighRefreshRate: boolean;
/**
 * If `true`, the home indicator is hidden automatically. This only affects iOS devices without a physical home button.
 */
  displayWindowIosHideHomeIndicator: boolean;
/**
 * If `true`, the status bar is hidden while the app is running.
 */
  displayWindowIosHideStatusBar: boolean;
/**
 * If `true`, it will require two swipes to access iOS UI that uses gestures.
 * 
 * **Note:** This setting has no effect on the home indicator if `hide_home_indicator` is `true`.
 */
  displayWindowIosSuppressUiGesture: boolean;
/**
 * If `true`, allows per-pixel transparency for the window background. This affects performance, so leave it on `false` unless you need it. See also `display/window/size/transparent` and `rendering/viewport/transparent_background`.
 */
  displayWindowPerPixelTransparencyAllowed: boolean;
/**
 * Forces the main window to be always on top.
 * 
 * **Note:** This setting is ignored on iOS, Android, and Web.
 */
  displayWindowSizeAlwaysOnTop: boolean;
/**
 * Forces the main window to be borderless.
 * 
 * **Note:** This setting is ignored on iOS, Android, and Web.
 */
  displayWindowSizeBorderless: boolean;
/**
 * Main window content is expanded to the full size of the window. Unlike a borderless window, the frame is left intact and can be used to resize the window, and the title bar is transparent, but has minimize/maximize/close buttons.
 * 
 * **Note:** This setting is implemented only on macOS.
 */
  displayWindowSizeExtendToTitle: boolean;
/**
 * Main window initial position (in virtual desktop coordinates), this setting is used only if `display/window/size/initial_position_type` is set to "Absolute" (`0`).
 * 
 * **Note:** This setting only affects the exported project, or when the project is run from the command line. In the editor, the value of `EditorSettings.run/window_placement/rect_custom_position` is used instead.
 */
  displayWindowSizeInitialPosition: Vector2i;
/**
 * Main window initial position.
 * `0` - "Absolute", `display/window/size/initial_position` is used to set window position.
 * `1` - "Primary Screen Center".
 * `2` - "Other Screen Center", `display/window/size/initial_screen` is used to set the screen.
 * 
 * **Note:** This setting only affects the exported project, or when the project is run from the command line. In the editor, the value of `EditorSettings.run/window_placement/rect` is used instead.
 */
  displayWindowSizeInitialPositionType: int;
/**
 * Main window initial screen, this setting is used only if `display/window/size/initial_position_type` is set to "Other Screen Center" (`2`).
 * 
 * **Note:** This setting only affects the exported project, or when the project is run from the command line. In the editor, the value of `EditorSettings.run/window_placement/screen` is used instead.
 */
  displayWindowSizeInitialScreen: int;
/**
 * Main window mode. See `DisplayServer.WindowMode` for possible values and how each mode behaves.
 * 
 * **Note:** Game embedding is available only in the "Windowed" mode.
 */
  displayWindowSizeMode: int;
/**
 * Main window can't be focused. No-focus window will ignore all input, except mouse clicks.
 */
  displayWindowSizeNoFocus: boolean;
/**
 * If `true`, allows the window to be resizable by default.
 * 
 * **Note:** This property is only read when the project starts. To change whether the window is resizable at runtime, set `Window.unresizable` instead on the root Window, which can be retrieved using `get_viewport().get_window()`. `Window.unresizable` takes the opposite value of this setting.
 * 
 * **Note:** Certain window managers can be configured to ignore the non-resizable status of a window. Do not rely on this setting as a guarantee that the window will *never* be resizable.
 * 
 * **Note:** This setting is ignored on iOS.
 */
  displayWindowSizeResizable: boolean;
/**
 * If `true`, the main window uses sharp corners by default.
 * 
 * **Note:** This property is implemented only on Windows (11).
 */
  displayWindowSizeSharpCorners: boolean;
/**
 * If `true`, enables a window manager hint that the main window background *can* be transparent. This does not make the background actually transparent. For the background to be transparent, the root viewport must also be made transparent by enabling `rendering/viewport/transparent_background`.
 * 
 * **Note:** To use a transparent splash screen, set `application/boot_splash/bg_color` to `Color(0, 0, 0, 0)`.
 * 
 * **Note:** This setting has no effect if `display/window/per_pixel_transparency/allowed` is set to `false`.
 */
  displayWindowSizeTransparent: boolean;
/**
 * Sets the game's main viewport height. On desktop platforms, this is also the initial window height, represented by an indigo-colored rectangle in the 2D editor. Stretch mode settings also use this as a reference when using the `canvas_items` or `viewport` stretch modes. See also `display/window/size/viewport_width`, `display/window/size/window_width_override` and `display/window/size/window_height_override`.
 */
  displayWindowSizeViewportHeight: int;
/**
 * Sets the game's main viewport width. On desktop platforms, this is also the initial window width, represented by an indigo-colored rectangle in the 2D editor. Stretch mode settings also use this as a reference when using the `canvas_items` or `viewport` stretch modes. See also `display/window/size/viewport_height`, `display/window/size/window_width_override` and `display/window/size/window_height_override`.
 */
  displayWindowSizeViewportWidth: int;
/**
 * On desktop platforms, overrides the game's initial window height. See also `display/window/size/window_width_override`, `display/window/size/viewport_width` and `display/window/size/viewport_height`.
 * 
 * **Note:** By default, or when set to `0`, the initial window height is the `display/window/size/viewport_height`. This setting is ignored on iOS, Android, and Web.
 */
  displayWindowSizeWindowHeightOverride: int;
/**
 * On desktop platforms, overrides the game's initial window width. See also `display/window/size/window_height_override`, `display/window/size/viewport_width` and `display/window/size/viewport_height`.
 * 
 * **Note:** By default, or when set to `0`, the initial window width is the `display/window/size/viewport_width`. This setting is ignored on iOS, Android, and Web.
 */
  displayWindowSizeWindowWidthOverride: int;
  displayWindowStretchAspect: string;
/**
 * Defines how the base size is stretched to fit the resolution of the window or screen.
 * 
 * **"disabled"**: No stretching happens. One unit in the scene corresponds to one pixel on the screen. In this mode, `display/window/stretch/aspect` has no effect. Recommended for non-game applications.
 * 
 * **"canvas_items"**: The base size specified in width and height in the project settings is stretched to cover the whole screen (taking `display/window/stretch/aspect` into account). This means that everything is rendered directly at the target resolution. 3D is unaffected, while in 2D, there is no longer a 1:1 correspondence between sprite pixels and screen pixels, which may result in scaling artifacts. Recommended for most games that don't use a pixel art aesthetic, although it is possible to use this stretch mode for pixel art games too (especially in 3D).
 * 
 * **"viewport"**: The size of the root `Viewport` is set precisely to the base size specified in the Project Settings' Display section. The scene is rendered to this viewport first. Finally, this viewport is scaled to fit the screen (taking `display/window/stretch/aspect` into account). Recommended for games that use a pixel art aesthetic.
 */
  displayWindowStretchMode: string;
/**
 * The scale factor multiplier to use for 2D elements. This multiplies the final scale factor determined by `display/window/stretch/mode`. If using the **Disabled** stretch mode, this scale factor is applied as-is. This can be adjusted to make the UI easier to read on certain displays.
 */
  displayWindowStretchScale: float;
/**
 * The policy to use to determine the final scale factor for 2D elements. This affects how `display/window/stretch/scale` is applied, in addition to the automatic scale factor determined by `display/window/stretch/mode`.
 * 
 * **"fractional"**: The scale factor will not be modified.
 * 
 * **"integer"**: The scale factor will be floored to an integer value, which means that the screen size will always be an integer multiple of the base viewport size. This provides a crisp pixel art appearance.
 * 
 * **Note:** When using integer scaling with a stretch mode, resizing the window to be smaller than the base viewport size will clip the contents. Consider preventing that by setting `Window.min_size` to the same value as the base viewport size defined in `display/window/size/viewport_width` and `display/window/size/viewport_height`.
 */
  displayWindowStretchScaleMode: string;
/**
 * If `true`, subwindows are embedded in the main window (this is also called single-window mode). Single-window mode can be faster as it does not need to create a separate window for every popup and tooltip, which can be a slow operation depending on the operating system and rendering method in use.
 * If `false`, subwindows are created as separate windows (this is also called multi-window mode). This allows them to be moved outside the main window and use native operating system window decorations.
 * This is equivalent to `EditorSettings.interface/editor/single_window_mode` in the editor, except the setting's value is inverted.
 */
  displayWindowSubwindowsEmbedSubwindows: boolean;
/**
 * Sets the V-Sync mode for the main game window. The editor's own V-Sync mode can be set using `EditorSettings.interface/editor/vsync_mode`.
 * See `DisplayServer.VSyncMode` for possible values and how they affect the behavior of your application.
 * Depending on the platform and rendering method, the engine will fall back to **Enabled** if the desired mode is not supported.
 * V-Sync can be disabled on the command line using the `--disable-vsync` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 * 
 * **Note:** The **Adaptive** and **Mailbox** V-Sync modes are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 * 
 * **Note:** This property is only read when the project starts. To change the V-Sync mode at runtime, call `DisplayServer.window_set_vsync_mode` instead.
 */
  displayWindowVsyncVsyncMode: int;
/**
 * Name of the .NET assembly. This name is used as the name of the `.csproj` and `.sln` files. By default, it's set to the name of the project (`application/config/name`) allowing to change it in the future without affecting the .NET assembly.
 */
  dotnetProjectAssemblyName: string;
/**
 * Number of times to attempt assembly reloading after rebuilding .NET assemblies. Effectively also the timeout in seconds to wait for unloading of script assemblies to finish.
 */
  dotnetProjectAssemblyReloadAttempts: int;
/**
 * Directory that contains the `.sln` file. By default, the `.sln` files is in the root of the project directory, next to the `project.godot` and `.csproj` files.
 * Changing this value allows setting up a multi-project scenario where there are multiple `.csproj`. Keep in mind that the Godot project is considered one of the C# projects in the workspace and it's root directory should contain the `project.godot` and `.csproj` next to each other.
 */
  dotnetProjectSolutionDirectory: string;
/**
 * If `true`, text resource (`tres`) and text scene (`tscn`) files are converted to their corresponding binary format on export. This decreases file sizes and speeds up loading slightly.
 * 
 * **Note:** Because a resource's file extension may change in an exported project, it is heavily recommended to use `@GDScript.load` or `ResourceLoader` instead of `FileAccess` to load resources dynamically.
 * 
 * **Note:** The project settings file (`project.godot`) will always be converted to binary on export, regardless of this setting.
 */
  editorExportConvertTextResourcesToBinary: boolean;
/**
 * The maximum width to use when importing textures as an atlas. The value will be rounded to the nearest power of two when used. Use this to prevent imported textures from growing too large in the other direction.
 */
  editorImportAtlasMaxWidth: int;
  editorImportReimportMissingImportedFiles: boolean;
/**
 * If `true` importing of resources is run on multiple threads.
 */
  editorImportUseMultipleThreads: boolean;
/**
 * If `true`, requests V-Sync to be disabled when writing a movie (similar to setting `display/window/vsync/vsync_mode` to **Disabled**). This can speed up video writing if the hardware is fast enough to render, encode and save the video at a framerate higher than the monitor's refresh rate.
 * 
 * **Note:** `editor/movie_writer/disable_vsync` has no effect if the operating system or graphics driver forces V-Sync with no way for applications to disable it.
 */
  editorMovieWriterDisableVsync: boolean;
/**
 * The number of frames per second to record in the video when writing a movie. Simulation speed will adjust to always match the specified framerate, which means the engine will appear to run slower at higher `editor/movie_writer/fps` values. Certain FPS values will require you to adjust `editor/movie_writer/mix_rate` to prevent audio from desynchronizing over time.
 * This can be specified manually on the command line using the `--fixed-fps <fps>` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 */
  editorMovieWriterFps: int;
/**
 * The audio mix rate to use in the recorded audio when writing a movie (in Hz). This can be different from `audio/driver/mix_rate`, but this value must be divisible by `editor/movie_writer/fps` to prevent audio from desynchronizing over time.
 */
  editorMovieWriterMixRate: int;
/**
 * The JPEG quality to use when writing a video to an AVI file, between `0.01` and `1.0` (inclusive). Higher `quality` values result in better-looking output at the cost of larger file sizes. Recommended `quality` values are between `0.75` and `0.9`. Even at quality `1.0`, JPEG compression remains lossy.
 * 
 * **Note:** This does not affect the audio quality or writing PNG image sequences.
 */
  editorMovieWriterMjpegQuality: float;
/**
 * The output path for the movie. The file extension determines the `MovieWriter` that will be used.
 * Godot has 2 built-in `MovieWriter`s:
 * - AVI container with MJPEG for video and uncompressed audio (`.avi` file extension). Lossy compression, medium file sizes, fast encoding. The lossy compression quality can be adjusted by changing `ProjectSettings.editor/movie_writer/mjpeg_quality`. The resulting file can be viewed in most video players, but it must be converted to another format for viewing on the web or by Godot with `VideoStreamPlayer`. MJPEG does not support transparency. AVI output is currently limited to a file of 4 GB in size at most.
 * - PNG image sequence for video and WAV for audio (`.png` file extension). Lossless compression, large file sizes, slow encoding. Designed to be encoded to a video file with another tool such as FFmpeg (https://ffmpeg.org/) after recording. Transparency is currently not supported, even if the root viewport is set to be transparent.
 * If you need to encode to a different format or pipe a stream through third-party software, you can extend this `MovieWriter` class to create your own movie writers.
 * When using PNG output, the frame number will be appended at the end of the file name. It starts from 0 and is padded with 8 digits to ensure correct sorting and easier processing. For example, if the output path is `/tmp/hello.png`, the first two frames will be `/tmp/hello00000000.png` and `/tmp/hello00000001.png`. The audio will be saved at `/tmp/hello.wav`.
 */
  editorMovieWriterMovieFile: string;
/**
 * The speaker mode to use in the recorded audio when writing a movie. See `AudioServer.SpeakerMode` for possible values.
 */
  editorMovieWriterSpeakerMode: int;
/**
 * The format of the default signal callback name (in the Signal Connection Dialog). The following substitutions are available: `{NodeName}`, `{nodeName}`, `{node_name}`, `{SignalName}`, `{signalName}`, and `{signal_name}`.
 */
  editorNamingDefaultSignalCallbackName: string;
/**
 * The format of the default signal callback name when a signal connects to the same node that emits it (in the Signal Connection Dialog). The following substitutions are available: `{NodeName}`, `{nodeName}`, `{node_name}`, `{SignalName}`, `{signalName}`, and `{signal_name}`.
 */
  editorNamingDefaultSignalCallbackToSelfName: string;
/**
 * When creating node names automatically, set the type of casing to use in this project. This is mostly an editor setting.
 */
  editorNamingNodeNameCasing: int;
/**
 * What to use to separate node name from number. This is mostly an editor setting.
 */
  editorNamingNodeNameNumSeparator: int;
/**
 * When generating scene file names from scene root node, set the type of casing to use in this project. This is mostly an editor setting.
 */
  editorNamingSceneNameCasing: int;
/**
 * When generating script file names from the selected node, set the type of casing to use in this project. This is mostly an editor setting.
 */
  editorNamingScriptNameCasing: int;
/**
 * The command-line arguments to append to Godot's own command line when running the project. This doesn't affect the editor itself.
 * It is possible to make another executable run Godot by using the `%command%` placeholder. The placeholder will be replaced with Godot's own command line. Program-specific arguments should be placed *before* the placeholder, whereas Godot-specific arguments should be placed *after* the placeholder.
 * For example, this can be used to force the project to run on the dedicated GPU in an NVIDIA Optimus system on Linux:
 * [codeblock lang=text]
 * prime-run %command%
 * [/codeblock]
 */
  editorRunMainRunArgs: string;
/**
 * Text-based file extensions to include in the script editor's "Find in Files" feature. You can add e.g. `tscn` if you wish to also parse your scene files, especially if you use built-in scripts which are serialized in the scene files.
 */
  editorScriptSearchInFileExtensions: PackedStringArray;
/**
 * Search path for project-specific script templates. Godot will search for script templates both in the editor-specific path and in this project-specific path.
 */
  editorScriptTemplatesSearchPath: string;
  editorVersionControlAutoloadOnStartup: boolean;
  editorVersionControlPluginName: string;
/**
 * If `true`, Blender 3D scene files with the `.blend` extension will be imported by converting them to glTF 2.0.
 * This requires configuring a path to a Blender executable in the editor settings at `filesystem/import/blender/blender_path`. Blender 3.0 or later is required.
 */
  filesystemImportBlenderEnabled: boolean;
/**
 * Override for `filesystem/import/blender/enabled` on Android where Blender can't easily be accessed from Godot.
 */
  filesystemImportBlenderEnabledAndroid: boolean;
/**
 * Override for `filesystem/import/blender/enabled` on the Web where Blender can't easily be accessed from Godot.
 */
  filesystemImportBlenderEnabledWeb: boolean;
/**
 * If `true`, Autodesk FBX 3D scene files with the `.fbx` extension will be imported by converting them to glTF 2.0.
 * This requires configuring a path to an FBX2glTF executable in the editor settings at `EditorSettings.filesystem/import/fbx/fbx2gltf_path`.
 */
  filesystemImportFbx2gltfEnabled: boolean;
/**
 * Override for `filesystem/import/fbx2gltf/enabled` on Android where FBX2glTF can't easily be accessed from Godot.
 */
  filesystemImportFbx2gltfEnabledAndroid: boolean;
/**
 * Override for `filesystem/import/fbx2gltf/enabled` on the Web where FBX2glTF can't easily be accessed from Godot.
 */
  filesystemImportFbx2gltfEnabledWeb: boolean;
/**
 * Default value for `ScrollContainer.scroll_deadzone`, which will be used for all `ScrollContainer`s unless overridden.
 */
  guiCommonDefaultScrollDeadzone: int;
/**
 * If `true`, snaps `Control` node vertices to the nearest pixel to ensure they remain crisp even when the camera moves or zooms.
 */
  guiCommonSnapControlsToPixels: boolean;
/**
 * If `true`, swaps **Cancel** and **OK** buttons in dialogs on Windows to follow interface conventions. `DisplayServer.get_swap_cancel_ok` can be used to query whether buttons are swapped at run-time.
 * 
 * **Note:** This doesn't affect native dialogs such as the ones spawned by `DisplayServer.dialog_show`.
 */
  guiCommonSwapCancelOk: boolean;
/**
 * Maximum undo/redo history size for `TextEdit` fields.
 */
  guiCommonTextEditUndoStackMaxSize: int;
  guiFontsDynamicFontsUseOversampling: boolean;
/**
 * Path to a custom `Theme` resource file to use for the project (`.theme` or generic `.tres`/`.res` extension).
 */
  guiThemeCustom: string;
/**
 * Path to a custom `Font` resource to use as default for all GUI elements of the project.
 */
  guiThemeCustomFont: string;
/**
 * Font anti-aliasing mode for the default project font. See `FontFile.antialiasing`.
 * 
 * **Note:** This setting does not affect custom `Font`s used within the project. Use the **Import** dock for that instead (see `ResourceImporterDynamicFont.antialiasing`).
 */
  guiThemeDefaultFontAntialiasing: int;
/**
 * If set to `true`, the default font will have mipmaps generated. This prevents text from looking grainy when a `Control` is scaled down, or when a `Label3D` is viewed from a long distance (if `Label3D.texture_filter` is set to a mode that displays mipmaps).
 * Enabling `gui/theme/default_font_generate_mipmaps` increases font generation time and memory usage. Only enable this setting if you actually need it.
 * 
 * **Note:** This setting does not affect custom `Font`s used within the project. Use the **Import** dock for that instead (see `ResourceImporterDynamicFont.generate_mipmaps`).
 */
  guiThemeDefaultFontGenerateMipmaps: boolean;
/**
 * Font hinting mode for the default project font. See `FontFile.hinting`.
 * 
 * **Note:** This setting does not affect custom `Font`s used within the project. Use the **Import** dock for that instead (see `ResourceImporterDynamicFont.hinting`).
 */
  guiThemeDefaultFontHinting: int;
/**
 * If set to `true`, the default font will use multichannel signed distance field (MSDF) for crisp rendering at any size. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for `Control`s that are scaled down (or for `Label3D`s viewed from a long distance).
 * MSDF font rendering can be combined with `gui/theme/default_font_generate_mipmaps` to further improve font rendering quality when scaled down.
 * 
 * **Note:** This setting does not affect custom `Font`s used within the project. Use the **Import** dock for that instead (see `ResourceImporterDynamicFont.multichannel_signed_distance_field`).
 */
  guiThemeDefaultFontMultichannelSignedDistanceField: boolean;
/**
 * Font glyph subpixel positioning mode for the default project font. See `FontFile.subpixel_positioning`.
 * 
 * **Note:** This setting does not affect custom `Font`s used within the project. Use the **Import** dock for that instead (see `ResourceImporterDynamicFont.subpixel_positioning`).
 */
  guiThemeDefaultFontSubpixelPositioning: int;
/**
 * The default scale factor for `Control`s, when not overridden by a `Theme`.
 * 
 * **Note:** This property is only read when the project starts. To change the default scale at runtime, set `ThemeDB.fallback_base_scale` instead.
 */
  guiThemeDefaultThemeScale: float;
/**
 * LCD subpixel layout used for font anti-aliasing. See `TextServer.FontLCDSubpixelLayout`.
 */
  guiThemeLcdSubpixelLayout: int;
/**
 * When `BaseButton.shortcut_feedback` is enabled, this is the time the `BaseButton` will remain highlighted after a shortcut.
 */
  guiTimersButtonShortcutFeedbackHighlightTime: float;
/**
 * Timer setting for incremental search in `Tree`, `ItemList`, etc. controls (in milliseconds).
 */
  guiTimersIncrementalSearchMaxIntervalMsec: int;
/**
 * Timer for detecting idle in `TextEdit` (in seconds).
 */
  guiTimersTextEditIdleDetectSec: float;
/**
 * Default delay for tooltips (in seconds).
 */
  guiTimersTooltipDelaySec: float;
/**
 * Delay for tooltips in the editor.
 */
  guiTimersTooltipDelaySecEditorHint: float;
/**
 * Default `InputEventAction` to confirm a focused button, menu or list item, or validate input.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiAccept: GodotDictionary<any>;
/**
 * Default `InputEventAction` to discard a modal or pending input.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiCancel: GodotDictionary<any>;
/**
 * Default `InputEventAction` to copy a selection to the clipboard.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiCopy: GodotDictionary<any>;
/**
 * Default `InputEventAction` to cut a selection to the clipboard.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiCut: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move down in the UI.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiDown: GodotDictionary<any>;
/**
 * Default `InputEventAction` to go to the end position of a `Control` (e.g. last item in an `ItemList` or a `Tree`), matching the behavior of `KEY_END` on typical desktop UI systems.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiEnd: GodotDictionary<any>;
/**
 * Default `InputEventAction` to refresh the contents of the current directory of a `FileDialog`.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiFiledialogRefresh: GodotDictionary<any>;
/**
 * Default `InputEventAction` to toggle showing hidden files and directories in a `FileDialog`.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiFiledialogShowHidden: GodotDictionary<any>;
/**
 * Default `InputEventAction` to go up one directory in a `FileDialog`.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiFiledialogUpOneLevel: GodotDictionary<any>;
/**
 * Default `InputEventAction` to focus the next `Control` in the scene. The focus behavior can be configured via `Control.focus_next`.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiFocusNext: GodotDictionary<any>;
/**
 * Default `InputEventAction` to focus the previous `Control` in the scene. The focus behavior can be configured via `Control.focus_previous`.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiFocusPrev: GodotDictionary<any>;
/**
 * Default `InputEventAction` to delete a `GraphNode` in a `GraphEdit`.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiGraphDelete: GodotDictionary<any>;
/**
 * Default `InputEventAction` to duplicate a `GraphNode` in a `GraphEdit`.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiGraphDuplicate: GodotDictionary<any>;
/**
 * Default `InputEventAction` to go to the start position of a `Control` (e.g. first item in an `ItemList` or a `Tree`), matching the behavior of `KEY_HOME` on typical desktop UI systems.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiHome: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move left in the UI.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiLeft: GodotDictionary<any>;
/**
 * Default `InputEventAction` to open a context menu in a text field.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiMenu: GodotDictionary<any>;
/**
 * Default `InputEventAction` to go down a page in a `Control` (e.g. in an `ItemList` or a `Tree`), matching the behavior of `KEY_PAGEDOWN` on typical desktop UI systems.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiPageDown: GodotDictionary<any>;
/**
 * Default `InputEventAction` to go up a page in a `Control` (e.g. in an `ItemList` or a `Tree`), matching the behavior of `KEY_PAGEUP` on typical desktop UI systems.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiPageUp: GodotDictionary<any>;
/**
 * Default `InputEventAction` to paste from the clipboard.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiPaste: GodotDictionary<any>;
/**
 * Default `InputEventAction` to redo an undone action.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiRedo: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move right in the UI.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiRight: GodotDictionary<any>;
/**
 * Default `InputEventAction` to select an item in a `Control` (e.g. in an `ItemList` or a `Tree`).
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiSelect: GodotDictionary<any>;
/**
 * Default `InputEventAction` to swap input direction, i.e. change between left-to-right to right-to-left modes. Affects text-editing controls (`LineEdit`, `TextEdit`).
 */
  inputUiSwapInputDirection: GodotDictionary<any>;
/**
 * If a selection is currently active with the last caret in text fields, searches for the next occurrence of the selection, adds a caret and selects the next occurrence.
 * If no selection is currently active with the last caret in text fields, selects the word currently under the caret.
 * The action can be performed sequentially for all occurrences of the selection of the last caret and for all existing carets.
 * The viewport is adjusted to the latest newly added caret.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextAddSelectionForNextOccurrence: GodotDictionary<any>;
/**
 * Default `InputEventAction` to delete the character before the text cursor.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextBackspace: GodotDictionary<any>;
/**
 * Default `InputEventAction` to delete **all** text before the text cursor.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextBackspaceAllToLeft: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to delete all text before the text cursor.
 */
  inputUiTextBackspaceAllToLeftMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to delete all characters before the cursor up until a whitespace or punctuation character.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextBackspaceWord: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to delete a word.
 */
  inputUiTextBackspaceWordMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to add an additional caret above every caret of a text.
 */
  inputUiTextCaretAddAbove: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to add a caret above every caret.
 */
  inputUiTextCaretAddAboveMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to add an additional caret below every caret of a text.
 */
  inputUiTextCaretAddBelow: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to add a caret below every caret.
 */
  inputUiTextCaretAddBelowMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor to the end of the text.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretDocumentEnd: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to move the text cursor to the end of the text.
 */
  inputUiTextCaretDocumentEndMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor to the start of the text.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretDocumentStart: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to move the text cursor to the start of the text.
 */
  inputUiTextCaretDocumentStartMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor down.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretDown: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor left.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretLeft: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor to the end of the line.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretLineEnd: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to move the text cursor to the end of the line.
 */
  inputUiTextCaretLineEndMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor to the start of the line.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretLineStart: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to move the text cursor to the start of the line.
 */
  inputUiTextCaretLineStartMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor down one page.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretPageDown: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor up one page.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretPageUp: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor right.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretRight: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor up.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretUp: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor left to the next whitespace or punctuation.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretWordLeft: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to move the text cursor back one word.
 */
  inputUiTextCaretWordLeftMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move the text cursor right to the next whitespace or punctuation.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCaretWordRight: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to move the text cursor forward one word.
 */
  inputUiTextCaretWordRightMacos: GodotDictionary<any>;
/**
 * If there's only one caret active and with a selection, clears the selection.
 * In case there's more than one caret active, removes the secondary carets and clears their selections.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextClearCaretsAndSelection: GodotDictionary<any>;
/**
 * Default `InputEventAction` to accept an autocompletion hint.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCompletionAccept: GodotDictionary<any>;
/**
 * Default `InputEventAction` to request autocompletion.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCompletionQuery: GodotDictionary<any>;
/**
 * Default `InputEventAction` to accept an autocompletion hint, replacing existing text.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextCompletionReplace: GodotDictionary<any>;
/**
 * Default `InputEventAction` to unindent text.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextDedent: GodotDictionary<any>;
/**
 * Default `InputEventAction` to delete the character after the text cursor.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextDelete: GodotDictionary<any>;
/**
 * Default `InputEventAction` to delete **all** text after the text cursor.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextDeleteAllToRight: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to delete all text after the text cursor.
 */
  inputUiTextDeleteAllToRightMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to delete all characters after the cursor up until a whitespace or punctuation character.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextDeleteWord: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to delete a word after the text cursor.
 */
  inputUiTextDeleteWordMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to indent the current line.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextIndent: GodotDictionary<any>;
/**
 * Default `InputEventAction` to insert a new line at the position of the text cursor.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextNewline: GodotDictionary<any>;
/**
 * Default `InputEventAction` to insert a new line before the current one.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextNewlineAbove: GodotDictionary<any>;
/**
 * Default `InputEventAction` to insert a new line after the current one.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextNewlineBlank: GodotDictionary<any>;
/**
 * Default `InputEventAction` to scroll down one line of text.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextScrollDown: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to scroll down one line.
 */
  inputUiTextScrollDownMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to scroll up one line of text.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextScrollUp: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to scroll up one line.
 */
  inputUiTextScrollUpMacos: GodotDictionary<any>;
/**
 * Default `InputEventAction` to select all text.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextSelectAll: GodotDictionary<any>;
/**
 * If no selection is currently active, selects the word currently under the caret in text fields. If a selection is currently active, deselects the current selection.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextSelectWordUnderCaret: GodotDictionary<any>;
/**
 * macOS specific override for the shortcut to select the word currently under the caret.
 */
  inputUiTextSelectWordUnderCaretMacos: GodotDictionary<any>;
/**
 * If no selection is currently active with the last caret in text fields, searches for the next occurrence of the word currently under the caret and moves the caret to the next occurrence. The action can be performed sequentially for other occurrences of the word under the last caret.
 * If a selection is currently active with the last caret in text fields, searches for the next occurrence of the selection, adds a caret, selects the next occurrence then deselects the previous selection and its associated caret. The action can be performed sequentially for other occurrences of the selection of the last caret.
 * The viewport is adjusted to the latest newly added caret.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextSkipSelectionForNextOccurrence: GodotDictionary<any>;
/**
 * Default `InputEventAction` to submit a text field.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextSubmit: GodotDictionary<any>;
/**
 * Default `InputEventAction` to toggle *insert mode* in a text field. While in insert mode, inserting new text overrides the character after the cursor, unless the next character is a new line.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiTextToggleInsertMode: GodotDictionary<any>;
/**
 * Default `InputEventAction` to undo the most recent action.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiUndo: GodotDictionary<any>;
/**
 * Default `InputEventAction` to start Unicode character hexadecimal code input in a text field.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiUnicodeStart: GodotDictionary<any>;
/**
 * Default `InputEventAction` to move up in the UI.
 * 
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several `Control`s. The events assigned to the action can however be modified.
 */
  inputUiUp: GodotDictionary<any>;
/**
 * If `true`, key/touch/joystick events will be flushed just before every idle and physics frame.
 * If `false`, such events will be flushed only once per process frame, between iterations of the engine.
 * Enabling this can greatly improve the responsiveness to input, specially in devices that need to run multiple physics frames per visible (process) frame, because they can't run at the target frame rate.
 * 
 * **Note:** Currently implemented only on Android.
 */
  inputDevicesBufferingAgileEventFlushing: boolean;
/**
 * If `true`, `Input.is_action_just_pressed` and `Input.is_action_just_released` will only return `true` if the action is still in the respective state, i.e. an action that is pressed *and* released on the same frame will be missed.
 * If `false`, no input will be lost.
 * 
 * **Note:** You should in nearly all cases prefer the `false` setting. The legacy behavior is to enable supporting old projects that rely on the old logic, without changes to script.
 */
  inputDevicesCompatibilityLegacyJustPressedBehavior: boolean;
/**
 * Specifies the tablet driver to use. If left empty, the default driver will be used.
 * 
 * **Note:** The driver in use can be overridden at runtime via the `--tablet-driver` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 * 
 * **Note:** Use `DisplayServer.tablet_set_current_driver` to switch tablet driver in runtime.
 */
  inputDevicesPenTabletDriver: string;
/**
 * Override for `input_devices/pen_tablet/driver` on Windows. Supported values are:
 * - `auto` (default), uses `wintab` if Windows Ink is disabled in the Wacom Tablet Properties or system settings, `winink` otherwise.
 * - `winink`, uses Windows native "Windows Ink" driver.
 * - `wintab`, uses Wacom "WinTab" driver.
 * - `dummy`, tablet input is disabled.
 */
  inputDevicesPenTabletDriverWindows: string;
/**
 * If `true`, long press events on an Android touchscreen are transformed into right click events.
 */
  inputDevicesPointingAndroidEnableLongPressAsRightClick: boolean;
/**
 * If `true`, multi-touch pan and scale gestures are enabled on Android devices.
 */
  inputDevicesPointingAndroidEnablePanAndScaleGestures: boolean;
/**
 * On Wear OS devices, defines which axis of the mouse wheel rotary input is mapped to. This rotary input is usually performed by rotating the physical or virtual (touch-based) bezel on a smartwatch.
 */
  inputDevicesPointingAndroidRotaryInputScrollAxis: int;
/**
 * If `true`, sends mouse input events when tapping or swiping on the touchscreen.
 */
  inputDevicesPointingEmulateMouseFromTouch: boolean;
/**
 * If `true`, sends touch input events when clicking or dragging the mouse.
 */
  inputDevicesPointingEmulateTouchFromMouse: boolean;
/**
 * If `true`, the accelerometer sensor is enabled and `Input.get_accelerometer` returns valid data.
 */
  inputDevicesSensorsEnableAccelerometer: boolean;
/**
 * If `true`, the gravity sensor is enabled and `Input.get_gravity` returns valid data.
 */
  inputDevicesSensorsEnableGravity: boolean;
/**
 * If `true`, the gyroscope sensor is enabled and `Input.get_gyroscope` returns valid data.
 */
  inputDevicesSensorsEnableGyroscope: boolean;
/**
 * If `true`, the magnetometer sensor is enabled and `Input.get_magnetometer` returns valid data.
 */
  inputDevicesSensorsEnableMagnetometer: boolean;
/**
 * The locale to fall back to if a translation isn't available in a given language. If left empty, `en` (English) will be used.
 * 
 * **Note:** Not to be confused with `TextServerFallback`.
 */
  internationalizationLocaleFallback: string;
/**
 * If `true`, text server break iteration rule sets, dictionaries and other optional data are included in the exported project.
 * 
 * **Note:** "ICU / HarfBuzz / Graphite" text server data includes dictionaries for Burmese, Chinese, Japanese, Khmer, Lao and Thai as well as Unicode Standard Annex #29 and Unicode Standard Annex #14 word and line breaking rules. Data is about 4 MB large.
 * 
 * **Note:** `TextServerFallback` does not use additional data.
 */
  internationalizationLocaleIncludeTextServerData: boolean;
/**
 * If non-empty, this locale will be used instead of the automatically detected system locale.
 * 
 * **Note:** This setting also applies to the exported project. To only affect testing within the editor, override this setting with an `editor` feature tag (https://docs.godotengine.org/en/stable/tutorials/export/feature_tags.html) for localization testing purposes.
 */
  internationalizationLocaleTest: string;
/**
 * Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization.
 */
  internationalizationPseudolocalizationDoubleVowels: boolean;
/**
 * The expansion ratio to use during pseudolocalization. A value of `0.3` is sufficient for most practical purposes, and will increase the length of each string by 30%.
 */
  internationalizationPseudolocalizationExpansionRatio: float;
/**
 * If `true`, emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew. See also `internationalization/rendering/force_right_to_left_layout_direction`.
 */
  internationalizationPseudolocalizationFakeBidi: boolean;
/**
 * Replace all characters in the string with `*`. Useful for finding non-localizable strings.
 */
  internationalizationPseudolocalizationOverride: boolean;
/**
 * Prefix that will be prepended to the pseudolocalized string.
 */
  internationalizationPseudolocalizationPrefix: string;
/**
 * Replace all characters with their accented variants during pseudolocalization.
 */
  internationalizationPseudolocalizationReplaceWithAccents: boolean;
/**
 * Skip placeholders for string formatting like `%s` or `%f` during pseudolocalization. Useful to identify strings which need additional control characters to display correctly.
 */
  internationalizationPseudolocalizationSkipPlaceholders: boolean;
/**
 * Suffix that will be appended to the pseudolocalized string.
 */
  internationalizationPseudolocalizationSuffix: string;
/**
 * If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.
 * 
 * **Note:** This property is only read when the project starts. To toggle pseudolocalization at run-time, use `TranslationServer.pseudolocalization_enabled` instead.
 */
  internationalizationPseudolocalizationUsePseudolocalization: boolean;
/**
 * Force layout direction and text writing direction to RTL for all controls, even if the current locale is intended to use a left-to-right layout and text writing direction. This should be enabled for testing purposes only. See also `internationalization/pseudolocalization/fake_bidi`.
 */
  internationalizationRenderingForceRightToLeftLayoutDirection: boolean;
/**
 * If `true`, root node will use `Node.AUTO_TRANSLATE_MODE_ALWAYS`, otherwise `Node.AUTO_TRANSLATE_MODE_DISABLED` will be used.
 * 
 * **Note:** This property is only read when the project starts. To change the auto translate mode at runtime, set `Node.auto_translate_mode` of `SceneTree.root` instead.
 */
  internationalizationRenderingRootNodeAutoTranslate: boolean;
/**
 * Root node default layout direction.
 */
  internationalizationRenderingRootNodeLayoutDirection: int;
/**
 * Specifies the `TextServer` to use. If left empty, the default will be used.
 * "ICU / HarfBuzz / Graphite" (`TextServerAdvanced`) is the most advanced text driver, supporting right-to-left typesetting and complex scripts (for languages like Arabic, Hebrew, etc.). The "Fallback" text driver (`TextServerFallback`) does not support right-to-left typesetting and complex scripts.
 * 
 * **Note:** The driver in use can be overridden at runtime via the `--text-driver` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 * 
 * **Note:** There is an additional `Dummy` text driver available, which disables all text rendering and font-related functionality. This driver is not listed in the project settings, but it can be enabled when running the editor or project using the `--text-driver Dummy` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 */
  internationalizationRenderingTextDriver: string;
/**
 * Optional name for the 2D navigation layer 1. If left empty, the layer will display as "Layer 1".
 */
  layerNames2dNavigationLayer1: string;
/**
 * Optional name for the 2D navigation layer 10. If left empty, the layer will display as "Layer 10".
 */
  layerNames2dNavigationLayer10: string;
/**
 * Optional name for the 2D navigation layer 11. If left empty, the layer will display as "Layer 11".
 */
  layerNames2dNavigationLayer11: string;
/**
 * Optional name for the 2D navigation layer 12. If left empty, the layer will display as "Layer 12".
 */
  layerNames2dNavigationLayer12: string;
/**
 * Optional name for the 2D navigation layer 13. If left empty, the layer will display as "Layer 13".
 */
  layerNames2dNavigationLayer13: string;
/**
 * Optional name for the 2D navigation layer 14. If left empty, the layer will display as "Layer 14".
 */
  layerNames2dNavigationLayer14: string;
/**
 * Optional name for the 2D navigation layer 15. If left empty, the layer will display as "Layer 15".
 */
  layerNames2dNavigationLayer15: string;
/**
 * Optional name for the 2D navigation layer 16. If left empty, the layer will display as "Layer 16".
 */
  layerNames2dNavigationLayer16: string;
/**
 * Optional name for the 2D navigation layer 17. If left empty, the layer will display as "Layer 17".
 */
  layerNames2dNavigationLayer17: string;
/**
 * Optional name for the 2D navigation layer 18. If left empty, the layer will display as "Layer 18".
 */
  layerNames2dNavigationLayer18: string;
/**
 * Optional name for the 2D navigation layer 19. If left empty, the layer will display as "Layer 19".
 */
  layerNames2dNavigationLayer19: string;
/**
 * Optional name for the 2D navigation layer 2. If left empty, the layer will display as "Layer 2".
 */
  layerNames2dNavigationLayer2: string;
/**
 * Optional name for the 2D navigation layer 20. If left empty, the layer will display as "Layer 20".
 */
  layerNames2dNavigationLayer20: string;
/**
 * Optional name for the 2D navigation layer 21. If left empty, the layer will display as "Layer 21".
 */
  layerNames2dNavigationLayer21: string;
/**
 * Optional name for the 2D navigation layer 22. If left empty, the layer will display as "Layer 22".
 */
  layerNames2dNavigationLayer22: string;
/**
 * Optional name for the 2D navigation layer 23. If left empty, the layer will display as "Layer 23".
 */
  layerNames2dNavigationLayer23: string;
/**
 * Optional name for the 2D navigation layer 24. If left empty, the layer will display as "Layer 24".
 */
  layerNames2dNavigationLayer24: string;
/**
 * Optional name for the 2D navigation layer 25. If left empty, the layer will display as "Layer 25".
 */
  layerNames2dNavigationLayer25: string;
/**
 * Optional name for the 2D navigation layer 26. If left empty, the layer will display as "Layer 26".
 */
  layerNames2dNavigationLayer26: string;
/**
 * Optional name for the 2D navigation layer 27. If left empty, the layer will display as "Layer 27".
 */
  layerNames2dNavigationLayer27: string;
/**
 * Optional name for the 2D navigation layer 28. If left empty, the layer will display as "Layer 28".
 */
  layerNames2dNavigationLayer28: string;
/**
 * Optional name for the 2D navigation layer 29. If left empty, the layer will display as "Layer 29".
 */
  layerNames2dNavigationLayer29: string;
/**
 * Optional name for the 2D navigation layer 3. If left empty, the layer will display as "Layer 3".
 */
  layerNames2dNavigationLayer3: string;
/**
 * Optional name for the 2D navigation layer 30. If left empty, the layer will display as "Layer 30".
 */
  layerNames2dNavigationLayer30: string;
/**
 * Optional name for the 2D navigation layer 31. If left empty, the layer will display as "Layer 31".
 */
  layerNames2dNavigationLayer31: string;
/**
 * Optional name for the 2D navigation layer 32. If left empty, the layer will display as "Layer 32".
 */
  layerNames2dNavigationLayer32: string;
/**
 * Optional name for the 2D navigation layer 4. If left empty, the layer will display as "Layer 4".
 */
  layerNames2dNavigationLayer4: string;
/**
 * Optional name for the 2D navigation layer 5. If left empty, the layer will display as "Layer 5".
 */
  layerNames2dNavigationLayer5: string;
/**
 * Optional name for the 2D navigation layer 6. If left empty, the layer will display as "Layer 6".
 */
  layerNames2dNavigationLayer6: string;
/**
 * Optional name for the 2D navigation layer 7. If left empty, the layer will display as "Layer 7".
 */
  layerNames2dNavigationLayer7: string;
/**
 * Optional name for the 2D navigation layer 8. If left empty, the layer will display as "Layer 8".
 */
  layerNames2dNavigationLayer8: string;
/**
 * Optional name for the 2D navigation layer 9. If left empty, the layer will display as "Layer 9".
 */
  layerNames2dNavigationLayer9: string;
/**
 * Optional name for the 2D physics layer 1. If left empty, the layer will display as "Layer 1".
 */
  layerNames2dPhysicsLayer1: string;
/**
 * Optional name for the 2D physics layer 10. If left empty, the layer will display as "Layer 10".
 */
  layerNames2dPhysicsLayer10: string;
/**
 * Optional name for the 2D physics layer 11. If left empty, the layer will display as "Layer 11".
 */
  layerNames2dPhysicsLayer11: string;
/**
 * Optional name for the 2D physics layer 12. If left empty, the layer will display as "Layer 12".
 */
  layerNames2dPhysicsLayer12: string;
/**
 * Optional name for the 2D physics layer 13. If left empty, the layer will display as "Layer 13".
 */
  layerNames2dPhysicsLayer13: string;
/**
 * Optional name for the 2D physics layer 14. If left empty, the layer will display as "Layer 14".
 */
  layerNames2dPhysicsLayer14: string;
/**
 * Optional name for the 2D physics layer 15. If left empty, the layer will display as "Layer 15".
 */
  layerNames2dPhysicsLayer15: string;
/**
 * Optional name for the 2D physics layer 16. If left empty, the layer will display as "Layer 16".
 */
  layerNames2dPhysicsLayer16: string;
/**
 * Optional name for the 2D physics layer 17. If left empty, the layer will display as "Layer 17".
 */
  layerNames2dPhysicsLayer17: string;
/**
 * Optional name for the 2D physics layer 18. If left empty, the layer will display as "Layer 18".
 */
  layerNames2dPhysicsLayer18: string;
/**
 * Optional name for the 2D physics layer 19. If left empty, the layer will display as "Layer 19".
 */
  layerNames2dPhysicsLayer19: string;
/**
 * Optional name for the 2D physics layer 2. If left empty, the layer will display as "Layer 2".
 */
  layerNames2dPhysicsLayer2: string;
/**
 * Optional name for the 2D physics layer 20. If left empty, the layer will display as "Layer 20".
 */
  layerNames2dPhysicsLayer20: string;
/**
 * Optional name for the 2D physics layer 21. If left empty, the layer will display as "Layer 21".
 */
  layerNames2dPhysicsLayer21: string;
/**
 * Optional name for the 2D physics layer 22. If left empty, the layer will display as "Layer 22".
 */
  layerNames2dPhysicsLayer22: string;
/**
 * Optional name for the 2D physics layer 23. If left empty, the layer will display as "Layer 23".
 */
  layerNames2dPhysicsLayer23: string;
/**
 * Optional name for the 2D physics layer 24. If left empty, the layer will display as "Layer 24".
 */
  layerNames2dPhysicsLayer24: string;
/**
 * Optional name for the 2D physics layer 25. If left empty, the layer will display as "Layer 25".
 */
  layerNames2dPhysicsLayer25: string;
/**
 * Optional name for the 2D physics layer 26. If left empty, the layer will display as "Layer 26".
 */
  layerNames2dPhysicsLayer26: string;
/**
 * Optional name for the 2D physics layer 27. If left empty, the layer will display as "Layer 27".
 */
  layerNames2dPhysicsLayer27: string;
/**
 * Optional name for the 2D physics layer 28. If left empty, the layer will display as "Layer 28".
 */
  layerNames2dPhysicsLayer28: string;
/**
 * Optional name for the 2D physics layer 29. If left empty, the layer will display as "Layer 29".
 */
  layerNames2dPhysicsLayer29: string;
/**
 * Optional name for the 2D physics layer 3. If left empty, the layer will display as "Layer 3".
 */
  layerNames2dPhysicsLayer3: string;
/**
 * Optional name for the 2D physics layer 30. If left empty, the layer will display as "Layer 30".
 */
  layerNames2dPhysicsLayer30: string;
/**
 * Optional name for the 2D physics layer 31. If left empty, the layer will display as "Layer 31".
 */
  layerNames2dPhysicsLayer31: string;
/**
 * Optional name for the 2D physics layer 32. If left empty, the layer will display as "Layer 32".
 */
  layerNames2dPhysicsLayer32: string;
/**
 * Optional name for the 2D physics layer 4. If left empty, the layer will display as "Layer 4".
 */
  layerNames2dPhysicsLayer4: string;
/**
 * Optional name for the 2D physics layer 5. If left empty, the layer will display as "Layer 5".
 */
  layerNames2dPhysicsLayer5: string;
/**
 * Optional name for the 2D physics layer 6. If left empty, the layer will display as "Layer 6".
 */
  layerNames2dPhysicsLayer6: string;
/**
 * Optional name for the 2D physics layer 7. If left empty, the layer will display as "Layer 7".
 */
  layerNames2dPhysicsLayer7: string;
/**
 * Optional name for the 2D physics layer 8. If left empty, the layer will display as "Layer 8".
 */
  layerNames2dPhysicsLayer8: string;
/**
 * Optional name for the 2D physics layer 9. If left empty, the layer will display as "Layer 9".
 */
  layerNames2dPhysicsLayer9: string;
/**
 * Optional name for the 2D render layer 1. If left empty, the layer will display as "Layer 1".
 */
  layerNames2dRenderLayer1: string;
/**
 * Optional name for the 2D render layer 10. If left empty, the layer will display as "Layer 10".
 */
  layerNames2dRenderLayer10: string;
/**
 * Optional name for the 2D render layer 11. If left empty, the layer will display as "Layer 11".
 */
  layerNames2dRenderLayer11: string;
/**
 * Optional name for the 2D render layer 12. If left empty, the layer will display as "Layer 12".
 */
  layerNames2dRenderLayer12: string;
/**
 * Optional name for the 2D render layer 13. If left empty, the layer will display as "Layer 13".
 */
  layerNames2dRenderLayer13: string;
/**
 * Optional name for the 2D render layer 14. If left empty, the layer will display as "Layer 14".
 */
  layerNames2dRenderLayer14: string;
/**
 * Optional name for the 2D render layer 15. If left empty, the layer will display as "Layer 15".
 */
  layerNames2dRenderLayer15: string;
/**
 * Optional name for the 2D render layer 16. If left empty, the layer will display as "Layer 16".
 */
  layerNames2dRenderLayer16: string;
/**
 * Optional name for the 2D render layer 17. If left empty, the layer will display as "Layer 17".
 */
  layerNames2dRenderLayer17: string;
/**
 * Optional name for the 2D render layer 18. If left empty, the layer will display as "Layer 18".
 */
  layerNames2dRenderLayer18: string;
/**
 * Optional name for the 2D render layer 19. If left empty, the layer will display as "Layer 19".
 */
  layerNames2dRenderLayer19: string;
/**
 * Optional name for the 2D render layer 2. If left empty, the layer will display as "Layer 2".
 */
  layerNames2dRenderLayer2: string;
/**
 * Optional name for the 2D render layer 20. If left empty, the layer will display as "Layer 20".
 */
  layerNames2dRenderLayer20: string;
/**
 * Optional name for the 2D render layer 3. If left empty, the layer will display as "Layer 3".
 */
  layerNames2dRenderLayer3: string;
/**
 * Optional name for the 2D render layer 4. If left empty, the layer will display as "Layer 4".
 */
  layerNames2dRenderLayer4: string;
/**
 * Optional name for the 2D render layer 5. If left empty, the layer will display as "Layer 5".
 */
  layerNames2dRenderLayer5: string;
/**
 * Optional name for the 2D render layer 6. If left empty, the layer will display as "Layer 6".
 */
  layerNames2dRenderLayer6: string;
/**
 * Optional name for the 2D render layer 7. If left empty, the layer will display as "Layer 7".
 */
  layerNames2dRenderLayer7: string;
/**
 * Optional name for the 2D render layer 8. If left empty, the layer will display as "Layer 8".
 */
  layerNames2dRenderLayer8: string;
/**
 * Optional name for the 2D render layer 9. If left empty, the layer will display as "Layer 9".
 */
  layerNames2dRenderLayer9: string;
/**
 * Optional name for the 3D navigation layer 1. If left empty, the layer will display as "Layer 1".
 */
  layerNames3dNavigationLayer1: string;
/**
 * Optional name for the 3D navigation layer 10. If left empty, the layer will display as "Layer 10".
 */
  layerNames3dNavigationLayer10: string;
/**
 * Optional name for the 3D navigation layer 11. If left empty, the layer will display as "Layer 11".
 */
  layerNames3dNavigationLayer11: string;
/**
 * Optional name for the 3D navigation layer 12. If left empty, the layer will display as "Layer 12".
 */
  layerNames3dNavigationLayer12: string;
/**
 * Optional name for the 3D navigation layer 13. If left empty, the layer will display as "Layer 13".
 */
  layerNames3dNavigationLayer13: string;
/**
 * Optional name for the 3D navigation layer 14. If left empty, the layer will display as "Layer 14".
 */
  layerNames3dNavigationLayer14: string;
/**
 * Optional name for the 3D navigation layer 15. If left empty, the layer will display as "Layer 15".
 */
  layerNames3dNavigationLayer15: string;
/**
 * Optional name for the 3D navigation layer 16. If left empty, the layer will display as "Layer 16".
 */
  layerNames3dNavigationLayer16: string;
/**
 * Optional name for the 3D navigation layer 17. If left empty, the layer will display as "Layer 17".
 */
  layerNames3dNavigationLayer17: string;
/**
 * Optional name for the 3D navigation layer 18. If left empty, the layer will display as "Layer 18".
 */
  layerNames3dNavigationLayer18: string;
/**
 * Optional name for the 3D navigation layer 19. If left empty, the layer will display as "Layer 19".
 */
  layerNames3dNavigationLayer19: string;
/**
 * Optional name for the 3D navigation layer 2. If left empty, the layer will display as "Layer 2".
 */
  layerNames3dNavigationLayer2: string;
/**
 * Optional name for the 3D navigation layer 20. If left empty, the layer will display as "Layer 20".
 */
  layerNames3dNavigationLayer20: string;
/**
 * Optional name for the 3D navigation layer 21. If left empty, the layer will display as "Layer 21".
 */
  layerNames3dNavigationLayer21: string;
/**
 * Optional name for the 3D navigation layer 22. If left empty, the layer will display as "Layer 22".
 */
  layerNames3dNavigationLayer22: string;
/**
 * Optional name for the 3D navigation layer 23. If left empty, the layer will display as "Layer 23".
 */
  layerNames3dNavigationLayer23: string;
/**
 * Optional name for the 3D navigation layer 24. If left empty, the layer will display as "Layer 24".
 */
  layerNames3dNavigationLayer24: string;
/**
 * Optional name for the 3D navigation layer 25. If left empty, the layer will display as "Layer 25".
 */
  layerNames3dNavigationLayer25: string;
/**
 * Optional name for the 3D navigation layer 26. If left empty, the layer will display as "Layer 26".
 */
  layerNames3dNavigationLayer26: string;
/**
 * Optional name for the 3D navigation layer 27. If left empty, the layer will display as "Layer 27".
 */
  layerNames3dNavigationLayer27: string;
/**
 * Optional name for the 3D navigation layer 28. If left empty, the layer will display as "Layer 28".
 */
  layerNames3dNavigationLayer28: string;
/**
 * Optional name for the 3D navigation layer 29. If left empty, the layer will display as "Layer 29".
 */
  layerNames3dNavigationLayer29: string;
/**
 * Optional name for the 3D navigation layer 3. If left empty, the layer will display as "Layer 3".
 */
  layerNames3dNavigationLayer3: string;
/**
 * Optional name for the 3D navigation layer 30. If left empty, the layer will display as "Layer 30".
 */
  layerNames3dNavigationLayer30: string;
/**
 * Optional name for the 3D navigation layer 31. If left empty, the layer will display as "Layer 31".
 */
  layerNames3dNavigationLayer31: string;
/**
 * Optional name for the 3D navigation layer 32. If left empty, the layer will display as "Layer 32".
 */
  layerNames3dNavigationLayer32: string;
/**
 * Optional name for the 3D navigation layer 4. If left empty, the layer will display as "Layer 4".
 */
  layerNames3dNavigationLayer4: string;
/**
 * Optional name for the 3D navigation layer 5. If left empty, the layer will display as "Layer 5".
 */
  layerNames3dNavigationLayer5: string;
/**
 * Optional name for the 3D navigation layer 6. If left empty, the layer will display as "Layer 6".
 */
  layerNames3dNavigationLayer6: string;
/**
 * Optional name for the 3D navigation layer 7. If left empty, the layer will display as "Layer 7".
 */
  layerNames3dNavigationLayer7: string;
/**
 * Optional name for the 3D navigation layer 8. If left empty, the layer will display as "Layer 8".
 */
  layerNames3dNavigationLayer8: string;
/**
 * Optional name for the 3D navigation layer 9. If left empty, the layer will display as "Layer 9".
 */
  layerNames3dNavigationLayer9: string;
/**
 * Optional name for the 3D physics layer 1. If left empty, the layer will display as "Layer 1".
 */
  layerNames3dPhysicsLayer1: string;
/**
 * Optional name for the 3D physics layer 10. If left empty, the layer will display as "Layer 10".
 */
  layerNames3dPhysicsLayer10: string;
/**
 * Optional name for the 3D physics layer 11. If left empty, the layer will display as "Layer 11".
 */
  layerNames3dPhysicsLayer11: string;
/**
 * Optional name for the 3D physics layer 12. If left empty, the layer will display as "Layer 12".
 */
  layerNames3dPhysicsLayer12: string;
/**
 * Optional name for the 3D physics layer 13. If left empty, the layer will display as "Layer 13".
 */
  layerNames3dPhysicsLayer13: string;
/**
 * Optional name for the 3D physics layer 14. If left empty, the layer will display as "Layer 14".
 */
  layerNames3dPhysicsLayer14: string;
/**
 * Optional name for the 3D physics layer 15. If left empty, the layer will display as "Layer 15".
 */
  layerNames3dPhysicsLayer15: string;
/**
 * Optional name for the 3D physics layer 16. If left empty, the layer will display as "Layer 16".
 */
  layerNames3dPhysicsLayer16: string;
/**
 * Optional name for the 3D physics layer 17. If left empty, the layer will display as "Layer 17".
 */
  layerNames3dPhysicsLayer17: string;
/**
 * Optional name for the 3D physics layer 18. If left empty, the layer will display as "Layer 18".
 */
  layerNames3dPhysicsLayer18: string;
/**
 * Optional name for the 3D physics layer 19. If left empty, the layer will display as "Layer 19".
 */
  layerNames3dPhysicsLayer19: string;
/**
 * Optional name for the 3D physics layer 2. If left empty, the layer will display as "Layer 2".
 */
  layerNames3dPhysicsLayer2: string;
/**
 * Optional name for the 3D physics layer 20. If left empty, the layer will display as "Layer 20".
 */
  layerNames3dPhysicsLayer20: string;
/**
 * Optional name for the 3D physics layer 21. If left empty, the layer will display as "Layer 21".
 */
  layerNames3dPhysicsLayer21: string;
/**
 * Optional name for the 3D physics layer 22. If left empty, the layer will display as "Layer 22".
 */
  layerNames3dPhysicsLayer22: string;
/**
 * Optional name for the 3D physics layer 23. If left empty, the layer will display as "Layer 23".
 */
  layerNames3dPhysicsLayer23: string;
/**
 * Optional name for the 3D physics layer 24. If left empty, the layer will display as "Layer 24".
 */
  layerNames3dPhysicsLayer24: string;
/**
 * Optional name for the 3D physics layer 25. If left empty, the layer will display as "Layer 25".
 */
  layerNames3dPhysicsLayer25: string;
/**
 * Optional name for the 3D physics layer 26. If left empty, the layer will display as "Layer 26".
 */
  layerNames3dPhysicsLayer26: string;
/**
 * Optional name for the 3D physics layer 27. If left empty, the layer will display as "Layer 27".
 */
  layerNames3dPhysicsLayer27: string;
/**
 * Optional name for the 3D physics layer 28. If left empty, the layer will display as "Layer 28".
 */
  layerNames3dPhysicsLayer28: string;
/**
 * Optional name for the 3D physics layer 29. If left empty, the layer will display as "Layer 29".
 */
  layerNames3dPhysicsLayer29: string;
/**
 * Optional name for the 3D physics layer 3. If left empty, the layer will display as "Layer 3".
 */
  layerNames3dPhysicsLayer3: string;
/**
 * Optional name for the 3D physics layer 30. If left empty, the layer will display as "Layer 30".
 */
  layerNames3dPhysicsLayer30: string;
/**
 * Optional name for the 3D physics layer 31. If left empty, the layer will display as "Layer 31".
 */
  layerNames3dPhysicsLayer31: string;
/**
 * Optional name for the 3D physics layer 32. If left empty, the layer will display as "Layer 32".
 */
  layerNames3dPhysicsLayer32: string;
/**
 * Optional name for the 3D physics layer 4. If left empty, the layer will display as "Layer 4".
 */
  layerNames3dPhysicsLayer4: string;
/**
 * Optional name for the 3D physics layer 5. If left empty, the layer will display as "Layer 5".
 */
  layerNames3dPhysicsLayer5: string;
/**
 * Optional name for the 3D physics layer 6. If left empty, the layer will display as "Layer 6".
 */
  layerNames3dPhysicsLayer6: string;
/**
 * Optional name for the 3D physics layer 7. If left empty, the layer will display as "Layer 7".
 */
  layerNames3dPhysicsLayer7: string;
/**
 * Optional name for the 3D physics layer 8. If left empty, the layer will display as "Layer 8".
 */
  layerNames3dPhysicsLayer8: string;
/**
 * Optional name for the 3D physics layer 9. If left empty, the layer will display as "Layer 9".
 */
  layerNames3dPhysicsLayer9: string;
/**
 * Optional name for the 3D render layer 1. If left empty, the layer will display as "Layer 1".
 */
  layerNames3dRenderLayer1: string;
/**
 * Optional name for the 3D render layer 10. If left empty, the layer will display as "Layer 10".
 */
  layerNames3dRenderLayer10: string;
/**
 * Optional name for the 3D render layer 11. If left empty, the layer will display as "Layer 11".
 */
  layerNames3dRenderLayer11: string;
/**
 * Optional name for the 3D render layer 12. If left empty, the layer will display as "Layer 12".
 */
  layerNames3dRenderLayer12: string;
/**
 * Optional name for the 3D render layer 13. If left empty, the layer will display as "Layer 13".
 */
  layerNames3dRenderLayer13: string;
/**
 * Optional name for the 3D render layer 14. If left empty, the layer will display as "Layer 14".
 */
  layerNames3dRenderLayer14: string;
/**
 * Optional name for the 3D render layer 15. If left empty, the layer will display as "Layer 15".
 */
  layerNames3dRenderLayer15: string;
/**
 * Optional name for the 3D render layer 16. If left empty, the layer will display as "Layer 16".
 */
  layerNames3dRenderLayer16: string;
/**
 * Optional name for the 3D render layer 17. If left empty, the layer will display as "Layer 17".
 */
  layerNames3dRenderLayer17: string;
/**
 * Optional name for the 3D render layer 18. If left empty, the layer will display as "Layer 18".
 */
  layerNames3dRenderLayer18: string;
/**
 * Optional name for the 3D render layer 19. If left empty, the layer will display as "Layer 19".
 */
  layerNames3dRenderLayer19: string;
/**
 * Optional name for the 3D render layer 2. If left empty, the layer will display as "Layer 2".
 */
  layerNames3dRenderLayer2: string;
/**
 * Optional name for the 3D render layer 20. If left empty, the layer will display as "Layer 20".
 */
  layerNames3dRenderLayer20: string;
/**
 * Optional name for the 3D render layer 3. If left empty, the layer will display as "Layer 3".
 */
  layerNames3dRenderLayer3: string;
/**
 * Optional name for the 3D render layer 4. If left empty, the layer will display as "Layer 4".
 */
  layerNames3dRenderLayer4: string;
/**
 * Optional name for the 3D render layer 5. If left empty, the layer will display as "Layer 5".
 */
  layerNames3dRenderLayer5: string;
/**
 * Optional name for the 3D render layer 6. If left empty, the layer will display as "Layer 6".
 */
  layerNames3dRenderLayer6: string;
/**
 * Optional name for the 3D render layer 7. If left empty, the layer will display as "Layer 7".
 */
  layerNames3dRenderLayer7: string;
/**
 * Optional name for the 3D render layer 8. If left empty, the layer will display as "Layer 8".
 */
  layerNames3dRenderLayer8: string;
/**
 * Optional name for the 3D render layer 9. If left empty, the layer will display as "Layer 9".
 */
  layerNames3dRenderLayer9: string;
/**
 * Optional name for the navigation avoidance layer 1. If left empty, the layer will display as "Layer 1".
 */
  layerNamesAvoidanceLayer1: string;
/**
 * Optional name for the navigation avoidance layer 10. If left empty, the layer will display as "Layer 10".
 */
  layerNamesAvoidanceLayer10: string;
/**
 * Optional name for the navigation avoidance layer 11. If left empty, the layer will display as "Layer 11".
 */
  layerNamesAvoidanceLayer11: string;
/**
 * Optional name for the navigation avoidance layer 12. If left empty, the layer will display as "Layer 12".
 */
  layerNamesAvoidanceLayer12: string;
/**
 * Optional name for the navigation avoidance layer 13. If left empty, the layer will display as "Layer 13".
 */
  layerNamesAvoidanceLayer13: string;
/**
 * Optional name for the navigation avoidance layer 14. If left empty, the layer will display as "Layer 14".
 */
  layerNamesAvoidanceLayer14: string;
/**
 * Optional name for the navigation avoidance layer 15. If left empty, the layer will display as "Layer 15".
 */
  layerNamesAvoidanceLayer15: string;
/**
 * Optional name for the navigation avoidance layer 16. If left empty, the layer will display as "Layer 16".
 */
  layerNamesAvoidanceLayer16: string;
/**
 * Optional name for the navigation avoidance layer 17. If left empty, the layer will display as "Layer 17".
 */
  layerNamesAvoidanceLayer17: string;
/**
 * Optional name for the navigation avoidance layer 18. If left empty, the layer will display as "Layer 18".
 */
  layerNamesAvoidanceLayer18: string;
/**
 * Optional name for the navigation avoidance layer 19. If left empty, the layer will display as "Layer 19".
 */
  layerNamesAvoidanceLayer19: string;
/**
 * Optional name for the navigation avoidance layer 2. If left empty, the layer will display as "Layer 2".
 */
  layerNamesAvoidanceLayer2: string;
/**
 * Optional name for the navigation avoidance layer 20. If left empty, the layer will display as "Layer 20".
 */
  layerNamesAvoidanceLayer20: string;
/**
 * Optional name for the navigation avoidance layer 21. If left empty, the layer will display as "Layer 21".
 */
  layerNamesAvoidanceLayer21: string;
/**
 * Optional name for the navigation avoidance layer 22. If left empty, the layer will display as "Layer 22".
 */
  layerNamesAvoidanceLayer22: string;
/**
 * Optional name for the navigation avoidance layer 23. If left empty, the layer will display as "Layer 23".
 */
  layerNamesAvoidanceLayer23: string;
/**
 * Optional name for the navigation avoidance layer 24. If left empty, the layer will display as "Layer 24".
 */
  layerNamesAvoidanceLayer24: string;
/**
 * Optional name for the navigation avoidance layer 25. If left empty, the layer will display as "Layer 25".
 */
  layerNamesAvoidanceLayer25: string;
/**
 * Optional name for the navigation avoidance layer 26. If left empty, the layer will display as "Layer 26".
 */
  layerNamesAvoidanceLayer26: string;
/**
 * Optional name for the navigation avoidance layer 27. If left empty, the layer will display as "Layer 27".
 */
  layerNamesAvoidanceLayer27: string;
/**
 * Optional name for the navigation avoidance layer 28. If left empty, the layer will display as "Layer 28".
 */
  layerNamesAvoidanceLayer28: string;
/**
 * Optional name for the navigation avoidance layer 29. If left empty, the layer will display as "Layer 29".
 */
  layerNamesAvoidanceLayer29: string;
/**
 * Optional name for the navigation avoidance layer 3. If left empty, the layer will display as "Layer 3".
 */
  layerNamesAvoidanceLayer3: string;
/**
 * Optional name for the navigation avoidance layer 30. If left empty, the layer will display as "Layer 30".
 */
  layerNamesAvoidanceLayer30: string;
/**
 * Optional name for the navigation avoidance layer 31. If left empty, the layer will display as "Layer 31".
 */
  layerNamesAvoidanceLayer31: string;
/**
 * Optional name for the navigation avoidance layer 32. If left empty, the layer will display as "Layer 32".
 */
  layerNamesAvoidanceLayer32: string;
/**
 * Optional name for the navigation avoidance layer 4. If left empty, the layer will display as "Layer 4".
 */
  layerNamesAvoidanceLayer4: string;
/**
 * Optional name for the navigation avoidance layer 5. If left empty, the layer will display as "Layer 5".
 */
  layerNamesAvoidanceLayer5: string;
/**
 * Optional name for the navigation avoidance layer 6. If left empty, the layer will display as "Layer 6".
 */
  layerNamesAvoidanceLayer6: string;
/**
 * Optional name for the navigation avoidance layer 7. If left empty, the layer will display as "Layer 7".
 */
  layerNamesAvoidanceLayer7: string;
/**
 * Optional name for the navigation avoidance layer 8. If left empty, the layer will display as "Layer 8".
 */
  layerNamesAvoidanceLayer8: string;
/**
 * Optional name for the navigation avoidance layer 9. If left empty, the layer will display as "Layer 9".
 */
  layerNamesAvoidanceLayer9: string;
/**
 * Godot uses a message queue to defer some function calls. If you run out of space on it (you will see an error), you can increase the size here.
 */
  memoryLimitsMessageQueueMaxSizeMb: int;
/**
 * Default cell size for 2D navigation maps. See `NavigationServer2D.map_set_cell_size`.
 */
  navigation2dDefaultCellSize: float;
/**
 * Default edge connection margin for 2D navigation maps. See `NavigationServer2D.map_set_edge_connection_margin`.
 */
  navigation2dDefaultEdgeConnectionMargin: float;
/**
 * Default link connection radius for 2D navigation maps. See `NavigationServer2D.map_set_link_connection_radius`.
 */
  navigation2dDefaultLinkConnectionRadius: float;
/**
 * If enabled 2D navigation regions will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. This setting only affects World2D default navigation maps.
 */
  navigation2dUseEdgeConnections: boolean;
/**
 * Default cell height for 3D navigation maps. See `NavigationServer3D.map_set_cell_height`.
 */
  navigation3dDefaultCellHeight: float;
/**
 * Default cell size for 3D navigation maps. See `NavigationServer3D.map_set_cell_size`.
 */
  navigation3dDefaultCellSize: float;
/**
 * Default edge connection margin for 3D navigation maps. See `NavigationServer3D.map_set_edge_connection_margin`.
 */
  navigation3dDefaultEdgeConnectionMargin: float;
/**
 * Default link connection radius for 3D navigation maps. See `NavigationServer3D.map_set_link_connection_radius`.
 */
  navigation3dDefaultLinkConnectionRadius: float;
/**
 * Default up orientation for 3D navigation maps. See `NavigationServer3D.map_set_up`.
 */
  navigation3dDefaultUp: Vector3;
/**
 * Default merge rasterizer cell scale for 3D navigation maps. See `NavigationServer3D.map_set_merge_rasterizer_cell_scale`.
 */
  navigation3dMergeRasterizerCellScale: float;
/**
 * If enabled 3D navigation regions will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. This setting only affects World3D default navigation maps.
 */
  navigation3dUseEdgeConnections: boolean;
/**
 * If enabled and avoidance calculations use multiple threads the threads run with high priority.
 */
  navigationAvoidanceThreadModelAvoidanceUseHighPriorityThreads: boolean;
/**
 * If enabled the avoidance calculations use multiple threads.
 */
  navigationAvoidanceThreadModelAvoidanceUseMultipleThreads: boolean;
/**
 * If enabled and async navmesh baking uses multiple threads the threads run with high priority.
 */
  navigationBakingThreadModelBakingUseHighPriorityThreads: boolean;
/**
 * If enabled the async navmesh baking uses multiple threads.
 */
  navigationBakingThreadModelBakingUseMultipleThreads: boolean;
/**
 * If enabled, and baking would potentially lead to an engine crash, the baking will be interrupted and an error message with explanation will be raised.
 */
  navigationBakingUseCrashPreventionChecks: boolean;
/**
 * Maximum number of threads that can run pathfinding queries simultaneously on the same pathfinding graph, for example the same navigation map. Additional threads increase memory consumption and synchronization time due to the need for extra data copies prepared for each thread. A value of `-1` means unlimited and the maximum available OS processor count is used. Defaults to `1` when the OS does not support threads.
 */
  navigationPathfindingMaxThreads: int;
/**
 * If enabled, navigation map synchronization uses an async process that runs on a background thread. This avoids stalling the main thread but adds an additional delay to any navigation map change.
 */
  navigationWorldMapUseAsyncIterations: boolean;
/**
 * Maximum number of characters allowed to send as output from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection.
 */
  networkLimitsDebuggerMaxCharsPerSecond: int;
/**
 * Maximum number of errors allowed to be sent from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection.
 */
  networkLimitsDebuggerMaxErrorsPerSecond: int;
/**
 * Maximum number of messages in the debugger queue. Over this value, content is dropped. This helps to limit the debugger memory usage.
 */
  networkLimitsDebuggerMaxQueuedMessages: int;
/**
 * Maximum number of warnings allowed to be sent from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection.
 */
  networkLimitsDebuggerMaxWarningsPerSecond: int;
/**
 * Default size of packet peer stream for deserializing Godot data (in bytes, specified as a power of two). The default value `16` is equal to 65,536 bytes. Over this size, data is dropped.
 */
  networkLimitsPacketPeerStreamMaxBufferPo2: int;
/**
 * Timeout (in seconds) for connection attempts using TCP.
 */
  networkLimitsTcpConnectTimeoutSeconds: int;
/**
 * Maximum size (in kiB) for the `WebRTCDataChannel` input buffer.
 */
  networkLimitsWebrtcMaxChannelInBufferKb: int;
/**
 * The CA certificates bundle to use for TLS connections. If this is set to a non-empty value, this will *override* Godot's default Mozilla certificate bundle (https://github.com/godotengine/godot/blob/master/thirdparty/certs/ca-certificates.crt). If left empty, the default certificate bundle will be used.
 * If in doubt, leave this setting empty.
 */
  networkTlsCertificateBundleOverride: string;
/**
 * If `true`, enable TLSv1.3 negotiation.
 * 
 * **Note:** Only supported when using Mbed TLS 3.0 or later (Linux distribution packages may be compiled against older system Mbed TLS packages), otherwise the maximum supported TLS version is always TLSv1.2.
 */
  networkTlsEnableTlsV13: boolean;
/**
 * The default rotational motion damping in 2D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.
 * Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate (`physics/common/physics_ticks_per_second`) will bring the object to a stop in one iteration.
 * 
 * **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.
 * During each physics tick, Godot will multiply the linear velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`. By default, bodies combine damp factors: `combined_damp` is the sum of the damp value of the body and this value or the area's value the body is in. See `RigidBody2D.DampMode`.
 * 
 * **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing `physics/common/physics_ticks_per_second` may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.
 */
  physics2dDefaultAngularDamp: float;
/**
 * The default gravity strength in 2D (in pixels per second squared).
 * 
 * **Note:** This property is only read when the project starts. To change the default gravity at runtime, use the following code sample:
 * 
 * 			```gdscript
 * 
 * 			# Set the default gravity strength to 980.
 * 			PhysicsServer2D.area_set_param(get_viewport().find_world_2d().space, PhysicsServer2D.AREA_PARAM_GRAVITY, 980)
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			// Set the default gravity strength to 980.
 * 			PhysicsServer2D.AreaSetParam(GetViewport().FindWorld2D().Space, PhysicsServer2D.AreaParameter.Gravity, 980);
 * 			
 * 
 * ```
 * 
 */
  physics2dDefaultGravity: float;
/**
 * The default gravity direction in 2D.
 * 
 * **Note:** This property is only read when the project starts. To change the default gravity vector at runtime, use the following code sample:
 * 
 * 			```gdscript
 * 
 * 			# Set the default gravity direction to `Vector2(0, 1)`.
 * 			PhysicsServer2D.area_set_param(get_viewport().find_world_2d().space, PhysicsServer2D.AREA_PARAM_GRAVITY_VECTOR, Vector2.DOWN)
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			// Set the default gravity direction to `Vector2(0, 1)`.
 * 			PhysicsServer2D.AreaSetParam(GetViewport().FindWorld2D().Space, PhysicsServer2D.AreaParameter.GravityVector, Vector2.Down)
 * 			
 * 
 * ```
 * 
 */
  physics2dDefaultGravityVector: Vector2;
/**
 * The default linear motion damping in 2D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.
 * Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate (`physics/common/physics_ticks_per_second`) will bring the object to a stop in one iteration.
 * 
 * **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.
 * During each physics tick, Godot will multiply the linear velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`, where `combined_damp` is the sum of the linear damp of the body and this value, or the area's value the body is in, assuming the body defaults to combine damp values. See `RigidBody2D.DampMode`.
 * 
 * **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing `physics/common/physics_ticks_per_second` may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.
 */
  physics2dDefaultLinearDamp: float;
/**
 * Sets which physics engine to use for 2D physics.
 * 
 * **DEFAULT** is currently equivalent to **GodotPhysics2D**, but may change in future releases. Select an explicit implementation if you want to ensure that your project stays on the same engine.
 * 
 * **GodotPhysics2D** is Godot's internal 2D physics engine.
 * 
 * **Dummy** is a 2D physics server that does nothing and returns only dummy values, effectively disabling all 2D physics functionality.
 * Third-party extensions and modules can add other physics engines to select with this setting.
 */
  physics2dPhysicsEngine: string;
/**
 * If `true`, the 2D physics server runs on a separate thread, making better use of multi-core CPUs. If `false`, the 2D physics server runs on the main thread. Running the physics server on a separate thread can increase performance, but restricts API access to only physics process.
 */
  physics2dRunOnSeparateThread: boolean;
/**
 * Threshold angular velocity under which a 2D physics body will be considered inactive. See `PhysicsServer2D.SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD`.
 */
  physics2dSleepThresholdAngular: float;
/**
 * Threshold linear velocity under which a 2D physics body will be considered inactive. See `PhysicsServer2D.SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD`.
 */
  physics2dSleepThresholdLinear: float;
/**
 * Maximum distance a shape can penetrate another shape before it is considered a collision. See `PhysicsServer2D.SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION`.
 */
  physics2dSolverContactMaxAllowedPenetration: float;
/**
 * Maximum distance a shape can be from another before they are considered separated and the contact is discarded. See `PhysicsServer2D.SPACE_PARAM_CONTACT_MAX_SEPARATION`.
 */
  physics2dSolverContactMaxSeparation: float;
/**
 * Maximum distance a pair of bodies has to move before their collision status has to be recalculated. See `PhysicsServer2D.SPACE_PARAM_CONTACT_RECYCLE_RADIUS`.
 */
  physics2dSolverContactRecycleRadius: float;
/**
 * Default solver bias for all physics constraints. Defines how much bodies react to enforce constraints. See `PhysicsServer2D.SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS`.
 * Individual constraints can have a specific bias value (see `Joint2D.bias`).
 */
  physics2dSolverDefaultConstraintBias: float;
/**
 * Default solver bias for all physics contacts. Defines how much bodies react to enforce contact separation. See `PhysicsServer2D.SPACE_PARAM_CONTACT_DEFAULT_BIAS`.
 * Individual shapes can have a specific bias value (see `Shape2D.custom_solver_bias`).
 */
  physics2dSolverDefaultContactBias: float;
/**
 * Number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. See `PhysicsServer2D.SPACE_PARAM_SOLVER_ITERATIONS`.
 */
  physics2dSolverSolverIterations: int;
/**
 * Time (in seconds) of inactivity before which a 2D physics body will put to sleep. See `PhysicsServer2D.SPACE_PARAM_BODY_TIME_TO_SLEEP`.
 */
  physics2dTimeBeforeSleep: float;
/**
 * The default rotational motion damping in 3D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.
 * Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate (`physics/common/physics_ticks_per_second`) will bring the object to a stop in one iteration.
 * 
 * **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.
 * During each physics tick, Godot will multiply the angular velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`. By default, bodies combine damp factors: `combined_damp` is the sum of the damp value of the body and this value or the area's value the body is in. See `RigidBody3D.DampMode`.
 * 
 * **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing `physics/common/physics_ticks_per_second` may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.
 */
  physics3dDefaultAngularDamp: float;
/**
 * The default gravity strength in 3D (in meters per second squared).
 * 
 * **Note:** This property is only read when the project starts. To change the default gravity at runtime, use the following code sample:
 * 
 * 			```gdscript
 * 
 * 			# Set the default gravity strength to 9.8.
 * 			PhysicsServer3D.area_set_param(get_viewport().find_world_3d().space, PhysicsServer3D.AREA_PARAM_GRAVITY, 9.8)
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			// Set the default gravity strength to 9.8.
 * 			PhysicsServer3D.AreaSetParam(GetViewport().FindWorld3D().Space, PhysicsServer3D.AreaParameter.Gravity, 9.8);
 * 			
 * 
 * ```
 * 
 */
  physics3dDefaultGravity: float;
/**
 * The default gravity direction in 3D.
 * 
 * **Note:** This property is only read when the project starts. To change the default gravity vector at runtime, use the following code sample:
 * 
 * 			```gdscript
 * 
 * 			# Set the default gravity direction to `Vector3(0, -1, 0)`.
 * 			PhysicsServer3D.area_set_param(get_viewport().find_world_3d().space, PhysicsServer3D.AREA_PARAM_GRAVITY_VECTOR, Vector3.DOWN)
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			// Set the default gravity direction to `Vector3(0, -1, 0)`.
 * 			PhysicsServer3D.AreaSetParam(GetViewport().FindWorld3D().Space, PhysicsServer3D.AreaParameter.GravityVector, Vector3.Down)
 * 			
 * 
 * ```
 * 
 */
  physics3dDefaultGravityVector: Vector3;
/**
 * The default linear motion damping in 3D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.
 * Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate (`physics/common/physics_ticks_per_second`) will bring the object to a stop in one iteration.
 * 
 * **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.
 * During each physics tick, Godot will multiply the linear velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`. By default, bodies combine damp factors: `combined_damp` is the sum of the damp value of the body and this value or the area's value the body is in. See `RigidBody3D.DampMode`.
 * 
 * **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing `physics/common/physics_ticks_per_second` may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.
 */
  physics3dDefaultLinearDamp: float;
/**
 * Sets which physics engine to use for 3D physics.
 * 
 * **DEFAULT** is currently equivalent to **GodotPhysics3D**, but may change in future releases. Select an explicit implementation if you want to ensure that your project stays on the same engine.
 * 
 * **GodotPhysics3D** is Godot's internal 3D physics engine.
 * 
 * **Jolt Physics** is an alternative physics engine that is generally faster and more reliable than **GodotPhysics3D**. As it was recently implemented, it is currently considered experimental and its behavior may change in future releases.
 * 
 * **Dummy** is a 3D physics server that does nothing and returns only dummy values, effectively disabling all 3D physics functionality.
 * Third-party extensions and modules can add other physics engines to select with this setting.
 */
  physics3dPhysicsEngine: string;
/**
 * If `true`, the 3D physics server runs on a separate thread, making better use of multi-core CPUs. If `false`, the 3D physics server runs on the main thread. Running the physics server on a separate thread can increase performance, but restricts API access to only physics process.
 * 
 * **Note:** When `physics/3d/physics_engine` is set to `Jolt Physics`, enabling this setting will prevent the 3D physics server from being able to provide any context when reporting errors and warnings, and will instead always refer to nodes as `<unknown>`.
 */
  physics3dRunOnSeparateThread: boolean;
/**
 * Threshold angular velocity under which a 3D physics body will be considered inactive. See `PhysicsServer3D.SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD`.
 */
  physics3dSleepThresholdAngular: float;
/**
 * Threshold linear velocity under which a 3D physics body will be considered inactive. See `PhysicsServer3D.SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD`.
 */
  physics3dSleepThresholdLinear: float;
/**
 * Maximum distance a shape can penetrate another shape before it is considered a collision. See `PhysicsServer3D.SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION`.
 */
  physics3dSolverContactMaxAllowedPenetration: float;
/**
 * Maximum distance a shape can be from another before they are considered separated and the contact is discarded. See `PhysicsServer3D.SPACE_PARAM_CONTACT_MAX_SEPARATION`.
 */
  physics3dSolverContactMaxSeparation: float;
/**
 * Maximum distance a pair of bodies has to move before their collision status has to be recalculated. See `PhysicsServer3D.SPACE_PARAM_CONTACT_RECYCLE_RADIUS`.
 */
  physics3dSolverContactRecycleRadius: float;
/**
 * Default solver bias for all physics contacts. Defines how much bodies react to enforce contact separation. See `PhysicsServer3D.SPACE_PARAM_CONTACT_DEFAULT_BIAS`.
 * Individual shapes can have a specific bias value (see `Shape3D.custom_solver_bias`).
 */
  physics3dSolverDefaultContactBias: float;
/**
 * Number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. See `PhysicsServer3D.SPACE_PARAM_SOLVER_ITERATIONS`.
 */
  physics3dSolverSolverIterations: int;
/**
 * Time (in seconds) of inactivity before which a 3D physics body will put to sleep. See `PhysicsServer3D.SPACE_PARAM_BODY_TIME_TO_SLEEP`.
 */
  physics3dTimeBeforeSleep: float;
/**
 * Enables `Viewport.physics_object_picking` on the root viewport.
 */
  physicsCommonEnableObjectPicking: boolean;
/**
 * Controls the maximum number of physics steps that can be simulated each rendered frame. The default value is tuned to avoid "spiral of death" situations where expensive physics simulations trigger more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than `1 / max_physics_steps_per_frame` of `physics/common/physics_ticks_per_second`. This occurs even if `delta` is consistently used in physics calculations. To avoid this, increase `physics/common/max_physics_steps_per_frame` if you have increased `physics/common/physics_ticks_per_second` significantly above its default value.
 * 
 * **Note:** This property is only read when the project starts. To change the maximum number of simulated physics steps per frame at runtime, set `Engine.max_physics_steps_per_frame` instead.
 */
  physicsCommonMaxPhysicsStepsPerFrame: int;
/**
 * If `true`, the renderer will interpolate the transforms of physics objects between the last two transforms, so that smooth motion is seen even when physics ticks do not coincide with rendered frames. See also `Node.physics_interpolation_mode` and `Node.reset_physics_interpolation`.
 * 
 * **Note:** If `true`, the physics jitter fix should be disabled by setting `physics/common/physics_jitter_fix` to `0.0`.
 * 
 * **Note:** This property is only read when the project starts. To toggle physics interpolation at runtime, set `SceneTree.physics_interpolation` instead.
 */
  physicsCommonPhysicsInterpolation: boolean;
/**
 * Controls how much physics ticks are synchronized with real time. For 0 or less, the ticks are synchronized. Such values are recommended for network games, where clock synchronization matters. Higher values cause higher deviation of in-game clock and real clock, but allows smoothing out framerate jitters. The default value of 0.5 should be good enough for most; values above 2 could cause the game to react to dropped frames with a noticeable delay and are not recommended.
 * 
 * **Note:** Jitter fix is automatically disabled at runtime when `physics/common/physics_interpolation` is enabled.
 * 
 * **Note:** When using a custom physics interpolation solution, the physics jitter fix should be disabled by setting `physics/common/physics_jitter_fix` to `0.0`.
 * 
 * **Note:** This property is only read when the project starts. To change the physics jitter fix at runtime, set `Engine.physics_jitter_fix` instead.
 */
  physicsCommonPhysicsJitterFix: float;
/**
 * The number of fixed iterations per second. This controls how often physics simulation and `Node._physics_process` methods are run. See also `application/run/max_fps`.
 * 
 * **Note:** This property is only read when the project starts. To change the physics FPS at runtime, set `Engine.physics_ticks_per_second` instead.
 * 
 * **Note:** Only `physics/common/max_physics_steps_per_frame` physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if `delta` is used consistently in physics calculations). Therefore, it is recommended to also increase `physics/common/max_physics_steps_per_frame` if increasing `physics/common/physics_ticks_per_second` significantly above its default value.
 */
  physicsCommonPhysicsTicksPerSecond: int;
/**
 * The maximum angle, in radians, between two adjacent triangles in a `ConcavePolygonShape3D` or `HeightMapShape3D` for which the edge between those triangles is considered inactive.
 * Collisions against an inactive edge will have its normal overridden to instead be the surface normal of the triangle. This can help alleviate ghost collisions.
 * 
 * **Note:** Setting this too high can result in objects not depenetrating properly.
 * 
 * **Note:** This applies to all shape queries, as well as physics bodies within the simulation.
 * 
 * **Note:** This does not apply when enabling Jolt's enhanced internal edge removal, which supersedes this.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dCollisionsActiveEdgeThreshold: float;
/**
 * The amount of collision margin to use for certain convex collision shapes, such as `BoxShape3D`, `CylinderShape3D` and `ConvexPolygonShape3D`, as a fraction of the shape's shortest axis, with `Shape3D.margin` as the upper bound. This is mainly used to speed up collision detection with convex shapes.
 * 
 * **Note:** Collision margins in Jolt do not add any extra size to the shape. Instead the shape is first shrunk by the margin and then expanded by the same amount, resulting in a shape with rounded corners.
 * 
 * **Note:** Setting this value too close to `0.0` may also negatively affect the accuracy of the collision detection with convex shapes.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dCollisionsCollisionMarginFraction: float;
/**
 * Which of the two nodes bound by a joint should represent the world when one of the two is omitted, as either `Joint3D.node_a` or `Joint3D.node_b`. This can be thought of as having the omitted node be a `StaticBody3D` at the joint's position. Joint limits are more easily expressed when `Joint3D.node_a` represents the world.
 * 
 * **Note:** In Godot Physics, only `Joint3D.node_b` can represent the world.
 */
  physicsJoltPhysics3dJointsWorldNode: int;
/**
 * The maximum angular velocity that a `RigidBody3D` can reach, in radians per second.
 * This is mainly used as a fail-safe, to prevent the simulation from exploding, as fast-moving objects colliding with complex physics structures can otherwise cause them to go out of control. Fast-moving objects can also cause a lot of stress on the collision detection system, which can slow down the simulation considerably.
 */
  physicsJoltPhysics3dLimitsMaxAngularVelocity: float;
/**
 * The maximum number of `PhysicsBody3D` to support at the same time, awake or sleeping. When this limit is exceeded, an error is reported and anything past that point is undefined behavior.
 * 
 * **Note:** This limit also applies within the editor.
 */
  physicsJoltPhysics3dLimitsMaxBodies: int;
/**
 * The maximum number of body pairs to allow processing of. When this limit is exceeded, a warning is reported and collisions will randomly be ignored while bodies pass through each other.
 */
  physicsJoltPhysics3dLimitsMaxBodyPairs: int;
/**
 * The maximum number of contact constraints to allow processing of. When this limit is exceeded, a warning is reported and collisions will randomly be ignored while bodies pass through each other.
 */
  physicsJoltPhysics3dLimitsMaxContactConstraints: int;
/**
 * The maximum linear velocity that a `RigidBody3D` can reach, in meters per second.
 * This is mainly used as a fail-safe, to prevent the simulation from exploding, as fast-moving objects colliding with complex physics structures can otherwise cause them to go out of control. Fast-moving objects can also cause a lot of stress on the collision detection system, which can slow down the simulation considerably.
 */
  physicsJoltPhysics3dLimitsMaxLinearVelocity: float;
/**
 * The amount of memory to pre-allocate for the stack allocator used within Jolt, in MiB. This allocator is used within the physics step to store things that are only needed during it, like which bodies are in contact, how they form islands and the data needed to solve the contacts.
 */
  physicsJoltPhysics3dLimitsTemporaryMemoryBufferSize: int;
/**
 * The size of `WorldBoundaryShape3D` boundaries, for all three dimensions. The plane is effectively centered within a box of this size, and anything outside of the box will not collide with it. This is necessary as `WorldBoundaryShape3D` is not unbounded when using Jolt, in order to prevent precision issues.
 * 
 * **Note:** Setting this value too high can make collision detection less accurate.
 * 
 * **Note:** Collisions against the effective edges of a `WorldBoundaryShape3D` will be inconsistent.
 */
  physicsJoltPhysics3dLimitsWorldBoundaryShapeSize: float;
/**
 * Fraction of the total penetration to depenetrate per iteration during motion queries.
 * 
 * **Note:** This affects methods `CharacterBody3D.move_and_slide`, `PhysicsBody3D.move_and_collide`, `PhysicsBody3D.test_move` and `PhysicsServer3D.body_test_motion`.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dMotionQueriesRecoveryAmount: float;
/**
 * The number of iterations to run when depenetrating during motion queries.
 * 
 * **Note:** This affects methods `CharacterBody3D.move_and_slide`, `PhysicsBody3D.move_and_collide`, `PhysicsBody3D.test_move` and `PhysicsServer3D.body_test_motion`.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dMotionQueriesRecoveryIterations: int;
/**
 * If `true`, enables Jolt's enhanced internal edge removal during motion queries. This can help alleviate ghost collisions, but only with edges within a single body, meaning edges between separate bodies can still cause ghost collisions.
 * 
 * **Note:** This affects methods `CharacterBody3D.move_and_slide`, `PhysicsBody3D.move_and_collide`, `PhysicsBody3D.test_move` and `PhysicsServer3D.body_test_motion`.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dMotionQueriesUseEnhancedInternalEdgeRemoval: boolean;
/**
 * If `true`, populates the `face_index` field in the results of `PhysicsDirectSpaceState3D.intersect_ray`, also accessed through `RayCast3D.get_collision_face_index`. If `false`, the `face_index` field will be left at its default value of `-1`.
 * 
 * **Note:** Enabling this setting will increase Jolt's memory usage for `ConcavePolygonShape3D` by around 25%.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dQueriesEnableRayCastFaceIndex: boolean;
/**
 * If `true`, enables Jolt's enhanced internal edge removal during shape queries. This can help alleviate ghost collisions when using shape queries for things like character movement, but only with edges within a single body, meaning edges between separate bodies can still cause ghost collisions.
 * 
 * **Note:** This affects methods `PhysicsDirectSpaceState3D.cast_motion`, `PhysicsDirectSpaceState3D.collide_shape`, `PhysicsDirectSpaceState3D.get_rest_info` and `PhysicsDirectSpaceState3D.intersect_shape`.
 * 
 * **Note:** Enabling this setting can cause certain shapes to be culled from the results entirely, but you will get at least one intersection per body.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dQueriesUseEnhancedInternalEdgeRemoval: boolean;
/**
 * If `true`, `RigidBody3D` nodes are allowed to go to sleep if their velocity is below the threshold defined in `physics/jolt_physics_3d/simulation/sleep_velocity_threshold` for the duration set in `physics/jolt_physics_3d/simulation/sleep_time_threshold`. This can improve physics simulation performance when there are non-moving `RigidBody3D` nodes, at the cost of some nodes possibly failing to wake up in certain scenarios. Consider disabling this temporarily to troubleshoot `RigidBody3D` nodes not moving when they should.
 */
  physicsJoltPhysics3dSimulationAllowSleep: boolean;
/**
 * If `true`, `Area3D` nodes are able to detect overlaps with `StaticBody3D` nodes.
 * 
 * **Note:** Enabling this setting can come at a heavy CPU and memory cost if you allow many/large `Area3D` to overlap with complex static geometry, such as `ConcavePolygonShape3D` or `HeightMapShape3D`. It is strongly recommended that you set up your collision layers and masks in such a way that only a few small `Area3D` nodes can detect `StaticBody3D` nodes.
 * 
 * **Note:** This also applies to overlaps with a `RigidBody3D` frozen with `RigidBody3D.FREEZE_MODE_STATIC`.
 * 
 * **Note:** This is not needed to detect overlaps with `AnimatableBody3D`, as it is a kinematic body, despite inheriting from `StaticBody3D`.
 */
  physicsJoltPhysics3dSimulationAreasDetectStaticBodies: boolean;
/**
 * How much of the position error of a `RigidBody3D` to fix during a physics step, where `0.0` is none and `1.0` is the full amount. This affects things like how quickly bodies depenetrate.
 * 
 * **Note:** Setting this value too high can make `RigidBody3D` nodes unstable.
 */
  physicsJoltPhysics3dSimulationBaumgarteStabilizationFactor: float;
/**
 * The maximum relative angle by which a body pair can move and still reuse the collision results from the previous physics step, in radians.
 */
  physicsJoltPhysics3dSimulationBodyPairContactCacheAngleThreshold: float;
/**
 * The maximum relative distance by which a body pair can move and still reuse the collision results from the previous physics step, in meters.
 */
  physicsJoltPhysics3dSimulationBodyPairContactCacheDistanceThreshold: float;
/**
 * If `true`, enables the body pair contact cache, which removes the need for potentially expensive collision detection when the relative orientation between two bodies hasn't changed much.
 */
  physicsJoltPhysics3dSimulationBodyPairContactCacheEnabled: boolean;
/**
 * The minimum velocity needed before a collision can be bouncy, in meters per second.
 * 
 * **Note:** This setting will only be read once during the lifetime of the application.
 */
  physicsJoltPhysics3dSimulationBounceVelocityThreshold: float;
/**
 * Fraction of a body's inner radius that may penetrate another body while using continuous collision detection.
 */
  physicsJoltPhysics3dSimulationContinuousCdMaxPenetration: float;
/**
 * Fraction of a body's inner radius that the body must move per step to make use of continuous collision detection.
 */
  physicsJoltPhysics3dSimulationContinuousCdMovementThreshold: float;
/**
 * If `true`, a `RigidBody3D` frozen with `RigidBody3D.FREEZE_MODE_KINEMATIC` is able to collide with other kinematic and static bodies, and therefore generate contacts for them.
 * 
 * **Note:** This setting can come at a heavy CPU and memory cost if you allow many/large frozen kinematic bodies with a non-zero `RigidBody3D.max_contacts_reported` to overlap with complex static geometry, such as `ConcavePolygonShape3D` or `HeightMapShape3D`.
 */
  physicsJoltPhysics3dSimulationGenerateAllKinematicContacts: boolean;
/**
 * How much bodies are allowed to penetrate each other, in meters.
 */
  physicsJoltPhysics3dSimulationPenetrationSlop: float;
/**
 * Number of solver position iterations. The greater the number of iterations, the more accurate the simulation will be, at the cost of CPU performance.
 */
  physicsJoltPhysics3dSimulationPositionSteps: int;
/**
 * Time in seconds a `RigidBody3D` will spend below the sleep velocity threshold before going to sleep.
 */
  physicsJoltPhysics3dSimulationSleepTimeThreshold: float;
/**
 * The linear velocity of specific points on the bounding box of a `RigidBody3D`, below which it can be put to sleep, in meters per second. These points help capture both the linear and angular motion of a `RigidBody3D`.
 */
  physicsJoltPhysics3dSimulationSleepVelocityThreshold: float;
/**
 * How big the points of a `SoftBody3D` are, in meters. A higher value can prevent behavior such as cloth laying perfectly flush against other surfaces and causing Z-fighting.
 */
  physicsJoltPhysics3dSimulationSoftBodyPointRadius: float;
/**
 * Radius around physics bodies, inside which speculative contact points will be detected, in meters. This is mainly used to prevent tunneling/penetration for `RigidBody3D` nodes during simulation.
 * 
 * **Note:** Setting this too high may result in ghost collisions, as speculative contacts are based on the closest points during the collision detection step which may not be the actual closest points by the time the two bodies hit.
 */
  physicsJoltPhysics3dSimulationSpeculativeContactDistance: float;
/**
 * If `true`, enables Jolt's enhanced internal edge removal for `RigidBody3D`. This can help alleviate ghost collisions when, for example, a `RigidBody3D` collides with the edges of two perfectly joined `BoxShape3D`. The removal only applies to edges internal to a single body, meaning edges between separate bodies can still cause ghost collisions.
 */
  physicsJoltPhysics3dSimulationUseEnhancedInternalEdgeRemoval: boolean;
/**
 * Number of solver velocity iterations. The greater the number of iterations, the more accurate the simulation will be, at the cost of CPU performance.
 * 
 * **Note:** This needs to be at least `2` in order for friction to work, as friction is applied using the non-penetration impulse from the previous iteration.
 */
  physicsJoltPhysics3dSimulationVelocitySteps: int;
/**
 * Maximum number of canvas item commands that can be batched into a single draw call.
 */
  rendering2dBatchingItemBufferSize: int;
/**
 * Maximum number of uniform sets that will be cached by the 2D renderer when batching draw calls.
 * 
 * **Note:** A project that uses a large number of unique sprite textures per frame may benefit from increasing this value.
 */
  rendering2dBatchingUniformSetCacheSize: int;
/**
 * Controls how much of the original viewport size should be covered by the 2D signed distance field. This SDF can be sampled in `CanvasItem` shaders and is used for `GPUParticles2D` collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through `LightOccluder2D`s as the occluders leave the viewport, increase this setting.
 * The percentage specified is added on each axis and on both sides. For example, with the default setting of 120%, the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).
 * 
 * **Note:** This property is only read when the project starts. To change the 2D SDF oversizing percentage at runtime, use `RenderingServer.viewport_set_sdf_oversize_and_scale` instead.
 */
  rendering2dSdfOversize: int;
/**
 * The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance. The default value (50%) renders at half the resolution of the viewport size on each axis, which means the SDF is generated with 25% of the viewport's pixel count.
 * 
 * **Note:** This property is only read when the project starts. To change the 2D SDF resolution scale at runtime, use `RenderingServer.viewport_set_sdf_oversize_and_scale` instead.
 */
  rendering2dSdfScale: int;
/**
 * The size of the 2D shadow atlas in pixels. Higher values result in more precise `Light2D` shadows, at the cost of performance and video memory usage. The specified value is rounded up to the nearest power of 2.
 * 
 * **Note:** This property is only read when the project starts. To change the 2D shadow atlas size at runtime, use `RenderingServer.canvas_set_shadow_texture_size` instead.
 */
  rendering2dShadowAtlasSize: int;
/**
 * If `true`, `CanvasItem` nodes will internally snap to full pixels. Useful for low-resolution pixel art games. Their position can still be sub-pixel, but the decimals will not have effect as the position is rounded. This can lead to a crisper appearance at the cost of less smooth movement, especially when `Camera2D` smoothing is enabled.
 * 
 * **Note:** This property is only read when the project starts. To toggle 2D transform snapping at runtime, use `RenderingServer.viewport_set_snap_2d_transforms_to_pixel` on the root `Viewport` instead.
 * 
 * **Note:** `Control` nodes are snapped to the nearest pixel by default. This is controlled by `gui/common/snap_controls_to_pixels`.
 * 
 * **Note:** It is not recommended to use this setting together with `rendering/2d/snap/snap_2d_vertices_to_pixel`, as movement may appear even less smooth. Prefer only enabling this setting instead.
 */
  rendering2dSnapSnap2dTransformsToPixel: boolean;
/**
 * If `true`, vertices of `CanvasItem` nodes will snap to full pixels. Useful for low-resolution pixel art games. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when `Camera2D` smoothing is enabled.
 * 
 * **Note:** This property is only read when the project starts. To toggle 2D vertex snapping at runtime, use `RenderingServer.viewport_set_snap_2d_vertices_to_pixel` on the root `Viewport` instead.
 * 
 * **Note:** `Control` nodes are snapped to the nearest pixel by default. This is controlled by `gui/common/snap_controls_to_pixels`.
 * 
 * **Note:** It is not recommended to use this setting together with `rendering/2d/snap/snap_2d_transforms_to_pixel`, as movement may appear even less smooth. Prefer only enabling that setting instead.
 */
  rendering2dSnapSnap2dVerticesToPixel: boolean;
/**
 * Sets the number of multisample antialiasing (MSAA) samples to use for 2D/Canvas rendering (as a power of two). MSAA is used to reduce aliasing around the edges of polygons. A higher MSAA value results in smoother edges but can be significantly slower on some hardware, especially integrated graphics due to their limited memory bandwidth. This has no effect on shader-induced aliasing or texture aliasing.
 * 
 * **Note:** MSAA is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 * 
 * **Note:** This property is only read when the project starts. To set the number of 2D MSAA samples at runtime, set `Viewport.msaa_2d` or use `RenderingServer.viewport_set_msaa_2d`.
 */
  renderingAntiAliasingQualityMsaa2d: int;
/**
 * Sets the number of multisample antialiasing (MSAA) samples to use for 3D rendering (as a power of two). MSAA is used to reduce aliasing around the edges of polygons. A higher MSAA value results in smoother edges but can be significantly slower on some hardware, especially integrated graphics due to their limited memory bandwidth. See also `rendering/scaling_3d/mode` for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.
 * 
 * **Note:** This property is only read when the project starts. To set the number of 3D MSAA samples at runtime, set `Viewport.msaa_3d` or use `RenderingServer.viewport_set_msaa_3d`.
 */
  renderingAntiAliasingQualityMsaa3d: int;
/**
 * Sets the screen-space antialiasing mode for the default screen `Viewport`. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry. The blurriness is partially counteracted by automatically using a negative mipmap LOD bias (see `rendering/textures/default_filters/texture_mipmap_bias`).
 * Another way to combat specular aliasing is to enable `rendering/anti_aliasing/screen_space_roughness_limiter/enabled`.
 * 
 * **Note:** Screen-space antialiasing is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 * 
 * **Note:** This property is only read when the project starts. To set the screen-space antialiasing mode at runtime, set `Viewport.screen_space_aa` on the root `Viewport` instead, or use `RenderingServer.viewport_set_screen_space_aa`.
 */
  renderingAntiAliasingQualityScreenSpaceAa: int;
/**
 * If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is *not* affected by debanding unless the `Environment.background_mode` is `Environment.BG_CANVAS`.
 * In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.
 * 
 * **Note:** This property is only read when the project starts. To set debanding at runtime, set `Viewport.use_debanding` on the root `Viewport` instead, or use `RenderingServer.viewport_set_use_debanding`.
 */
  renderingAntiAliasingQualityUseDebanding: boolean;
/**
 * Enables temporal antialiasing for the default screen `Viewport`. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion. Enabling TAA can make the image blurrier, which is partially counteracted by automatically using a negative mipmap LOD bias (see `rendering/textures/default_filters/texture_mipmap_bias`).
 * 
 * **Note:** The implementation is not complete yet. Some visual instances such as particles and skinned meshes may show ghosting artifacts in motion.
 * 
 * **Note:** TAA is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 * 
 * **Note:** This property is only read when the project starts. To set TAA at runtime, set `Viewport.use_taa` on the root `Viewport` instead, or use `RenderingServer.viewport_set_use_taa`.
 */
  renderingAntiAliasingQualityUseTaa: boolean;
/**
 * **Note:** This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call `RenderingServer.screen_space_roughness_limiter_set_active` instead.
 */
  renderingAntiAliasingScreenSpaceRoughnessLimiterAmount: float;
/**
 * If `true`, enables a spatial filter to limit roughness in areas with high-frequency detail. This can help reduce specular aliasing to an extent, though not as much as enabling `rendering/anti_aliasing/quality/use_taa`. This filter has a small performance cost, so consider disabling it if it doesn't benefit your scene noticeably.
 * 
 * **Note:** The screen-space roughness limiter is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 * 
 * **Note:** This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call `RenderingServer.screen_space_roughness_limiter_set_active` instead.
 */
  renderingAntiAliasingScreenSpaceRoughnessLimiterEnabled: boolean;
/**
 * **Note:** This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call `RenderingServer.screen_space_roughness_limiter_set_active` instead.
 */
  renderingAntiAliasingScreenSpaceRoughnessLimiterLimit: float;
/**
 * Sets the quality of the depth of field effect. Higher quality takes more samples, which is slower but looks smoother.
 */
  renderingCameraDepthOfFieldDepthOfFieldBokehQuality: int;
/**
 * Sets the depth of field shape. Can be Box, Hexagon, or Circle. Box is the fastest. Circle is the most realistic, but also the most expensive to compute.
 */
  renderingCameraDepthOfFieldDepthOfFieldBokehShape: int;
/**
 * If `true`, jitters DOF samples to make effect slightly blurrier and hide lines created from low sample rates. This can result in a slightly grainy appearance when used with a low number of samples.
 */
  renderingCameraDepthOfFieldDepthOfFieldUseJitter: boolean;
/**
 * Disables `rendering/driver/depth_prepass/enable` conditionally for certain vendors. By default, disables the depth prepass for mobile devices as mobile devices do not benefit from the depth prepass due to their unique architecture.
 */
  renderingDriverDepthPrepassDisableForVendors: string;
/**
 * If `true`, performs a previous depth pass before rendering 3D materials. This increases performance significantly in scenes with high overdraw, when complex materials and lighting are used. However, in scenes with few occluded surfaces, the depth prepass may reduce performance. If your game is viewed from a fixed angle that makes it easy to avoid overdraw (such as top-down or side-scrolling perspective), consider disabling the depth prepass to improve performance. This setting can be changed at run-time to optimize performance depending on the scene currently being viewed.
 * 
 * **Note:** Depth prepass is only supported when using the Forward+ or Compatibility rendering method. When using the Mobile rendering method, there is no depth prepass performed.
 */
  renderingDriverDepthPrepassEnable: boolean;
/**
 * The thread model to use for rendering. Rendering on a thread may improve performance, but synchronizing to the main thread can cause a bit more jitter.
 */
  renderingDriverThreadsThreadModel: int;
/**
 * Default background clear color. Overridable per `Viewport` using its `Environment`. See `Environment.background_mode` and `Environment.background_color` in particular. To change this default color programmatically, use `RenderingServer.set_default_clear_color`.
 */
  renderingEnvironmentDefaultsDefaultClearColor: Color;
/**
 * `Environment` that will be used as a fallback environment in case a scene does not specify its own environment. The default environment is loaded in at scene load time regardless of whether you have set an environment or not. If you do not rely on the fallback environment, you do not need to set this property.
 */
  renderingEnvironmentDefaultsDefaultEnvironment: string;
/**
 * Sets how the glow effect is upscaled before being copied onto the screen. Linear is faster, but looks blocky. Bicubic is slower but looks smooth.
 */
  renderingEnvironmentGlowUpscaleMode: int;
/**
 * Lower-end override for `rendering/environment/glow/upscale_mode` on mobile devices, due to performance concerns or driver support.
 */
  renderingEnvironmentGlowUpscaleModeMobile: int;
/**
 * Sets the quality for rough screen-space reflections. Turning off will make all screen space reflections sharp, while higher values make rough reflections look better.
 */
  renderingEnvironmentScreenSpaceReflectionRoughnessQuality: int;
/**
 * Quality target to use when `rendering/environment/ssao/quality` is set to `Ultra`. A value of `0.0` provides a quality and speed similar to `Medium` while a value of `1.0` provides much higher quality than any of the other settings at the cost of performance.
 */
  renderingEnvironmentSsaoAdaptiveTarget: float;
/**
 * Number of blur passes to use when computing screen-space ambient occlusion. A higher number will result in a smoother look, but will be slower to compute and will have less high-frequency detail.
 */
  renderingEnvironmentSsaoBlurPasses: int;
/**
 * Distance at which the screen-space ambient occlusion effect starts to fade out. Use this hide ambient occlusion from far away.
 */
  renderingEnvironmentSsaoFadeoutFrom: float;
/**
 * Distance at which the screen-space ambient occlusion is fully faded out. Use this hide ambient occlusion from far away.
 */
  renderingEnvironmentSsaoFadeoutTo: float;
/**
 * If `true`, screen-space ambient occlusion will be rendered at half size and then upscaled before being added to the scene. This is significantly faster but may miss small details. If `false`, screen-space ambient occlusion will be rendered at full size.
 */
  renderingEnvironmentSsaoHalfSize: boolean;
/**
 * Sets the quality of the screen-space ambient occlusion effect. Higher values take more samples and so will result in better quality, at the cost of performance. Setting to `Ultra` will use the `rendering/environment/ssao/adaptive_target` setting.
 */
  renderingEnvironmentSsaoQuality: int;
/**
 * Quality target to use when `rendering/environment/ssil/quality` is set to `Ultra`. A value of `0.0` provides a quality and speed similar to `Medium` while a value of `1.0` provides much higher quality than any of the other settings at the cost of performance. When using the adaptive target, the performance cost scales with the complexity of the scene.
 */
  renderingEnvironmentSsilAdaptiveTarget: float;
/**
 * Number of blur passes to use when computing screen-space indirect lighting. A higher number will result in a smoother look, but will be slower to compute and will have less high-frequency detail.
 */
  renderingEnvironmentSsilBlurPasses: int;
/**
 * Distance at which the screen-space indirect lighting effect starts to fade out. Use this to hide screen-space indirect lighting from far away.
 */
  renderingEnvironmentSsilFadeoutFrom: float;
/**
 * Distance at which the screen-space indirect lighting is fully faded out. Use this to hide screen-space indirect lighting from far away.
 */
  renderingEnvironmentSsilFadeoutTo: float;
/**
 * If `true`, screen-space indirect lighting will be rendered at half size and then upscaled before being added to the scene. This is significantly faster but may miss small details and may result in some objects appearing to glow at their edges.
 */
  renderingEnvironmentSsilHalfSize: boolean;
/**
 * Sets the quality of the screen-space indirect lighting effect. Higher values take more samples and so will result in better quality, at the cost of performance. Setting to `Ultra` will use the `rendering/environment/ssil/adaptive_target` setting.
 */
  renderingEnvironmentSsilQuality: int;
/**
 * Scales the depth over which the subsurface scattering effect is applied. A high value may allow light to scatter into a part of the mesh or another mesh that is close in screen space but far in depth. See also `rendering/environment/subsurface_scattering/subsurface_scattering_scale`.
 * 
 * **Note:** This property is only read when the project starts. To set the subsurface scattering depth scale at runtime, call `RenderingServer.sub_surface_scattering_set_scale` instead.
 */
  renderingEnvironmentSubsurfaceScatteringSubsurfaceScatteringDepthScale: float;
/**
 * Sets the quality of the subsurface scattering effect. Higher values are slower but look nicer. This affects the rendering of materials that have `BaseMaterial3D.subsurf_scatter_enabled` set to `true`, along with `ShaderMaterial`s that set `SSS_STRENGTH`.
 * 
 * **Note:** This property is only read when the project starts. To set the subsurface scattering quality at runtime, call `RenderingServer.sub_surface_scattering_set_quality` instead.
 */
  renderingEnvironmentSubsurfaceScatteringSubsurfaceScatteringQuality: int;
/**
 * Scales the distance over which samples are taken for subsurface scattering effect. Changing this does not impact performance, but higher values will result in significant artifacts as the samples will become obviously spread out. A lower value results in a smaller spread of scattered light. See also `rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale`.
 * 
 * **Note:** This property is only read when the project starts. To set the subsurface scattering scale at runtime, call `RenderingServer.sub_surface_scattering_set_scale` instead.
 */
  renderingEnvironmentSubsurfaceScatteringSubsurfaceScatteringScale: float;
/**
 * Enables filtering of the volumetric fog effect prior to integration. This substantially blurs the fog which reduces fine details but also smooths out harsh edges and aliasing artifacts. Disable when more detail is required.
 */
  renderingEnvironmentVolumetricFogUseFilter: int;
/**
 * Number of slices to use along the depth of the froxel buffer for volumetric fog. A lower number will be more efficient but may result in artifacts appearing during camera movement. See also `Environment.volumetric_fog_length`.
 */
  renderingEnvironmentVolumetricFogVolumeDepth: int;
/**
 * Base size used to determine size of froxel buffer in the camera X-axis and Y-axis. The final size is scaled by the aspect ratio of the screen, so actual values may differ from what is set. Set a larger size for more detailed fog, set a smaller size for better performance.
 */
  renderingEnvironmentVolumetricFogVolumeSize: int;
/**
 * Sets the driver to be used by the renderer when using the Compatibility renderer. Editing this property has no effect in the default configuration, as first-party platforms each have platform-specific overrides. Use those overrides to configure the driver for each platform.
 * This can be overridden using the `--rendering-driver <driver>` command line argument.
 * Supported values are:
 * - `opengl3`, OpenGL 3.3 on desktop platforms, OpenGL ES 3.0 on mobile platforms, WebGL 2.0 on web.
 * - `opengl3_angle`, OpenGL ES 3.0 using the ANGLE compatibility layer, supported on macOS (over native OpenGL) and Windows (over Direct3D 11).
 * - `opengl3_es`, OpenGL ES 3.0 on Linux/BSD.
 * 
 * **Note:** The availability of these options depends on whether the engine was compiled with support for them (determined by SCons options `opengl3` and `angle_libs`).
 * 
 * **Note:** The actual rendering driver may be automatically changed by the engine as a result of a fallback, or a user-specified command line argument. To get the actual rendering driver that is used at runtime, use `RenderingServer.get_current_rendering_driver_name` instead of reading this project setting's value.
 */
  renderingGlCompatibilityDriver: string;
/**
 * Android override for `rendering/gl_compatibility/driver`.
 * Only one option is supported:
 * - `opengl3`, OpenGL ES 3.0 from native drivers.
 */
  renderingGlCompatibilityDriverAndroid: string;
/**
 * iOS override for `rendering/gl_compatibility/driver`.
 * Only one option is supported:
 * - `opengl3`, OpenGL ES 3.0 from native drivers.
 */
  renderingGlCompatibilityDriverIos: string;
/**
 * LinuxBSD override for `rendering/gl_compatibility/driver`.
 * Two options are supported:
 * - `opengl3` (default), OpenGL 3.3 from native drivers.
 * - `opengl3_es`, OpenGL ES 3.0 from native drivers. If `rendering/gl_compatibility/fallback_to_gles` is enabled, this is used as a fallback if OpenGL 3.3 is not supported.
 */
  renderingGlCompatibilityDriverLinuxbsd: string;
/**
 * macOS override for `rendering/gl_compatibility/driver`.
 * Two options are supported:
 * - `opengl3` (default), OpenGL 3.3 from native drivers. If `rendering/gl_compatibility/fallback_to_native` is enabled, this is used as a fallback if ANGLE is configured as the preferred driver but not supported.
 * - `opengl3_angle`, OpenGL ES 3.0 using the ANGLE compatibility layer over native OpenGL drivers. If `rendering/gl_compatibility/fallback_to_angle` is enabled, this is used as a fallback if OpenGL 3.3 is not supported.
 */
  renderingGlCompatibilityDriverMacos: string;
/**
 * Web override for `rendering/gl_compatibility/driver`.
 * Only one option is supported:
 * - `opengl3`, WebGL 2.0. The underlying native API depends on the target OS, browser, and browser configuration.
 */
  renderingGlCompatibilityDriverWeb: string;
/**
 * Windows override for `rendering/gl_compatibility/driver`.
 * Two options are supported:
 * - `opengl3` (default), OpenGL 3.3 from native drivers. If `rendering/gl_compatibility/fallback_to_native` is enabled, this is used as a fallback if ANGLE is configured as the preferred driver but not supported.
 * - `opengl3_angle`, OpenGL ES 3.0 using the ANGLE compatibility layer over native Direct3D 11 drivers. If `rendering/gl_compatibility/fallback_to_angle` is enabled, this is used as a fallback if OpenGL 3.3 is not supported. By default, ANGLE is used as the default driver for some devices listed in `rendering/gl_compatibility/force_angle_on_devices`.
 */
  renderingGlCompatibilityDriverWindows: string;
/**
 * If `true`, the compatibility renderer will fall back to ANGLE if native OpenGL is not supported or the device is listed in `rendering/gl_compatibility/force_angle_on_devices`.
 * 
 * **Note:** This setting is implemented only on Windows.
 */
  renderingGlCompatibilityFallbackToAngle: boolean;
/**
 * If `true`, the compatibility renderer will fall back to OpenGLES if desktop OpenGL is not supported.
 * 
 * **Note:** This setting is implemented only on Linux/X11.
 */
  renderingGlCompatibilityFallbackToGles: boolean;
/**
 * If `true`, the compatibility renderer will fall back to native OpenGL if ANGLE is not supported, or ANGLE dynamic libraries aren't found.
 * 
 * **Note:** This setting is implemented on macOS and Windows.
 */
  renderingGlCompatibilityFallbackToNative: boolean;
/**
 * An `Array` of devices which should always use the ANGLE renderer.
 * Each entry is a `Dictionary` with the following keys: `vendor` and `name`. `name` can be set to `*` to add all devices with the specified `vendor`.
 * 
 * **Note:** This setting is implemented only on Windows.
 */
  renderingGlCompatibilityForceAngleOnDevices: GodotArray<any>;
/**
 * Maximum number of canvas items commands that can be drawn in a single viewport update. If more render commands are issued they will be ignored. Decreasing this limit may improve performance on bandwidth limited devices. Increase this limit if you find that not all objects are being drawn in a frame.
 */
  renderingGlCompatibilityItemBufferSize: int;
/**
 * If `true`, disables the threaded optimization feature from the NVIDIA drivers, which are known to cause stuttering in most OpenGL applications.
 * 
 * **Note:** This setting only works on Windows, as threaded optimization is disabled by default on other platforms.
 */
  renderingGlCompatibilityNvidiaDisableThreadedOptimization: boolean;
/**
 * If `true`, renders `VoxelGI` and SDFGI (`Environment.sdfgi_enabled`) buffers at halved resolution (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. `LightmapGI` rendering is not affected by this setting.
 * 
 * **Note:** This property is only read when the project starts. To set half-resolution GI at run-time, call `RenderingServer.gi_set_use_half_resolution` instead.
 */
  renderingGlobalIlluminationGiUseHalfResolution: boolean;
/**
 * The number of frames to use for converging signed distance field global illumination. Higher values lead to a less noisy result, at the cost of taking a longer time to fully converge. This means the scene's global illumination will be too dark for a longer period of time, especially when the camera moves fast. The actual convergence speed depends on rendered framerate. For example, with the default setting of 30 frames, rendering at 60 FPS will make SDFGI fully converge after 0.5 seconds. See also `rendering/global_illumination/sdfgi/frames_to_update_lights` and `rendering/global_illumination/sdfgi/probe_ray_count`.
 * 
 * **Note:** This property is only read when the project starts. To control SDFGI convergence speed at runtime, call `RenderingServer.environment_set_sdfgi_frames_to_converge` instead.
 */
  renderingGlobalIlluminationSdfgiFramesToConverge: int;
/**
 * The number of frames over which dynamic lights should be updated in signed distance field global illumination. Higher values take more time to update indirect lighting coming from dynamic lights, but result in better performance when many dynamic lights are present. See also `rendering/global_illumination/sdfgi/frames_to_converge` and `rendering/global_illumination/sdfgi/probe_ray_count`.
 * 
 * **Note:** This only affects `Light3D` nodes whose `Light3D.light_bake_mode` is `Light3D.BAKE_DYNAMIC` (which is the default). Consider making non-moving lights use the `Light3D.BAKE_STATIC` bake mode to improve performance.
 * 
 * **Note:** This property is only read when the project starts. To control SDFGI light update speed at runtime, call `RenderingServer.environment_set_sdfgi_frames_to_update_light` instead.
 */
  renderingGlobalIlluminationSdfgiFramesToUpdateLights: int;
/**
 * The number of rays to throw per frame when computing signed distance field global illumination. Higher values lead to a less noisy result, at the cost of performance. See also `rendering/global_illumination/sdfgi/frames_to_converge` and `rendering/global_illumination/sdfgi/frames_to_update_lights`.
 * 
 * **Note:** This property is only read when the project starts. To control SDFGI quality at runtime, call `RenderingServer.environment_set_sdfgi_ray_count` instead.
 */
  renderingGlobalIlluminationSdfgiProbeRayCount: int;
/**
 * The VoxelGI quality to use. High quality leads to more precise lighting and better reflections, but is slower to render. This setting does not affect the baked data and doesn't require baking the `VoxelGI` again to apply.
 * 
 * **Note:** This property is only read when the project starts. To control VoxelGI quality at runtime, call `RenderingServer.voxel_gi_set_quality` instead.
 */
  renderingGlobalIlluminationVoxelGiQuality: int;
/**
 * The maximum number of rays that can be thrown per pass when baking lightmaps with `LightmapGI`. Depending on the scene, adjusting this value may result in higher GPU utilization when baking lightmaps, leading to faster bake times.
 * 
 * **Note:** Using a value that is too high for your system can cause crashes due to the GPU being unresponsive for long periods of time, and the graphics driver being reset by the OS.
 */
  renderingLightmappingBakePerformanceMaxRaysPerPass: int;
/**
 * The maximum number of rays that can be thrown per pass when baking dynamic object lighting in `LightmapProbe`s with `LightmapGI`. Depending on the scene, adjusting this value may result in higher GPU utilization when baking lightmaps, leading to faster bake times.
 * 
 * **Note:** Using a value that is too high for your system can cause crashes due to the GPU being unresponsive for long periods of time, and the graphics driver being reset by the OS.
 */
  renderingLightmappingBakePerformanceMaxRaysPerProbePass: int;
/**
 * The maximum number of retry rays that can be thrown per pass when hitting a transparent surface when baking lightmaps with `LightmapGI`. Depending on the scene, reducing this value may lead to faster bake times.
 * 
 * **Note:** Using a value that is too high for your system can cause crashes due to the GPU being unresponsive for long periods of time, and the graphics driver being reset by the OS.
 */
  renderingLightmappingBakePerformanceMaxTransparencyRays: int;
/**
 * The region size to use when baking lightmaps with `LightmapGI`. The specified value is rounded up to the nearest power of 2.
 * 
 * **Note:** Using a value that is too high for your system can cause crashes due to the GPU being unresponsive for long periods of time, and the graphics driver being reset by the OS.
 */
  renderingLightmappingBakePerformanceRegionSize: int;
/**
 * The number of rays to use for baking dynamic object lighting in `LightmapProbe`s when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_HIGH`.
 */
  renderingLightmappingBakeQualityHighQualityProbeRayCount: int;
/**
 * The number of rays to use for baking lightmaps with `LightmapGI` when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_HIGH`.
 */
  renderingLightmappingBakeQualityHighQualityRayCount: int;
/**
 * The number of rays to use for baking dynamic object lighting in `LightmapProbe`s when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_LOW`.
 */
  renderingLightmappingBakeQualityLowQualityProbeRayCount: int;
/**
 * The number of rays to use for baking lightmaps with `LightmapGI` when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_LOW`.
 */
  renderingLightmappingBakeQualityLowQualityRayCount: int;
/**
 * The number of rays to use for baking dynamic object lighting in `LightmapProbe`s when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_MEDIUM`.
 */
  renderingLightmappingBakeQualityMediumQualityProbeRayCount: int;
/**
 * The number of rays to use for baking lightmaps with `LightmapGI` when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_MEDIUM`.
 */
  renderingLightmappingBakeQualityMediumQualityRayCount: int;
/**
 * The number of rays to use for baking dynamic object lighting in `LightmapProbe`s when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_ULTRA`.
 */
  renderingLightmappingBakeQualityUltraQualityProbeRayCount: int;
/**
 * The number of rays to use for baking lightmaps with `LightmapGI` when `LightmapGI.quality` is `LightmapGI.BAKE_QUALITY_ULTRA`.
 */
  renderingLightmappingBakeQualityUltraQualityRayCount: int;
/**
 * Denoiser tool used for denoising lightmaps.
 * Using OpenImageDenoise (https://www.openimagedenoise.org/) (OIDN) requires configuring a path to an OIDN executable in the editor settings at `EditorSettings.filesystem/tools/oidn/oidn_denoise_path`. OIDN can be downloaded from OpenImageDenoise's downloads page (https://www.openimagedenoise.org/downloads.html).
 * OIDN will use GPU acceleration when available. Unlike JNLM which uses compute shaders for acceleration, OIDN uses vendor-specific acceleration methods. For GPU acceleration to be available, the following libraries must be installed on the system depending on your GPU:
 * - NVIDIA GPUs: CUDA libraries
 * - AMD GPUs: HIP libraries
 * - Intel GPUs: SYCL libraries
 * If no GPU acceleration is configured on the system, multi-threaded CPU-based denoising will be performed instead. This CPU-based denoising is significantly slower than the JNLM denoiser in most cases.
 */
  renderingLightmappingDenoisingDenoiser: int;
/**
 * If `true`, applies a bicubic filter during lightmap sampling. This makes lightmaps look much smoother, at a moderate performance cost.
 * 
 * **Note:** The bicubic filter exaggerates the 'bleeding' effect that occurs when a lightmap's resolution is low enough.
 */
  renderingLightmappingLightmapGiUseBicubicFilter: boolean;
/**
 * The texel_size that is used to calculate the `Mesh.lightmap_size_hint` on `PrimitiveMesh` resources if `PrimitiveMesh.add_uv2` is enabled.
 */
  renderingLightmappingPrimitiveMeshesTexelSize: float;
/**
 * The framerate-independent update speed when representing dynamic object lighting from `LightmapProbe`s. Higher values make dynamic object lighting update faster. Higher values can prevent fast-moving objects from having "outdated" indirect lighting displayed on them, at the cost of possible flickering when an object moves from a bright area to a shaded area.
 */
  renderingLightmappingProbeCaptureUpdateSpeed: float;
/**
 * Use 16 bits for the directional shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.
 */
  renderingLightsAndShadowsDirectionalShadow16Bits: boolean;
/**
 * The directional shadow's size in pixels. Higher values will result in sharper shadows, at the cost of performance. The value is rounded up to the nearest power of 2.
 */
  renderingLightsAndShadowsDirectionalShadowSize: int;
/**
 * Lower-end override for `rendering/lights_and_shadows/directional_shadow/size` on mobile devices, due to performance concerns or driver support.
 */
  renderingLightsAndShadowsDirectionalShadowSizeMobile: int;
/**
 * Quality setting for shadows cast by `DirectionalLight3D`s. Higher quality settings use more samples when reading from shadow maps and are thus slower. Low quality settings may result in shadows looking grainy.
 * 
 * **Note:** The Soft Very Low setting will automatically multiply *constant* shadow blur by 0.75x to reduce the amount of noise visible. This automatic blur change only affects the constant blur factor defined in `Light3D.shadow_blur`, not the variable blur performed by `DirectionalLight3D`s' `Light3D.light_angular_distance`.
 * 
 * **Note:** The Soft High and Soft Ultra settings will automatically multiply *constant* shadow blur by 1.5× and 2× respectively to make better use of the increased sample count. This increased blur also improves stability of dynamic object shadows.
 */
  renderingLightsAndShadowsDirectionalShadowSoftShadowFilterQuality: int;
/**
 * Lower-end override for `rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality` on mobile devices, due to performance concerns or driver support.
 */
  renderingLightsAndShadowsDirectionalShadowSoftShadowFilterQualityMobile: int;
/**
 * Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.
 */
  renderingLightsAndShadowsPositionalShadowAtlas16Bits: boolean;
/**
 * Subdivision quadrant size for shadow mapping. See shadow mapping documentation.
 */
  renderingLightsAndShadowsPositionalShadowAtlasQuadrant0Subdiv: int;
/**
 * Subdivision quadrant size for shadow mapping. See shadow mapping documentation.
 */
  renderingLightsAndShadowsPositionalShadowAtlasQuadrant1Subdiv: int;
/**
 * Subdivision quadrant size for shadow mapping. See shadow mapping documentation.
 */
  renderingLightsAndShadowsPositionalShadowAtlasQuadrant2Subdiv: int;
/**
 * Subdivision quadrant size for shadow mapping. See shadow mapping documentation.
 */
  renderingLightsAndShadowsPositionalShadowAtlasQuadrant3Subdiv: int;
/**
 * Size for shadow atlas (used for OmniLights and SpotLights). See documentation.
 */
  renderingLightsAndShadowsPositionalShadowAtlasSize: int;
/**
 * Lower-end override for `rendering/lights_and_shadows/positional_shadow/atlas_size` on mobile devices, due to performance concerns or driver support.
 */
  renderingLightsAndShadowsPositionalShadowAtlasSizeMobile: int;
/**
 * Quality setting for shadows cast by `OmniLight3D`s and `SpotLight3D`s. Higher quality settings use more samples when reading from shadow maps and are thus slower. Low quality settings may result in shadows looking grainy.
 * 
 * **Note:** The Soft Very Low setting will automatically multiply *constant* shadow blur by 0.75x to reduce the amount of noise visible. This automatic blur change only affects the constant blur factor defined in `Light3D.shadow_blur`, not the variable blur performed by `DirectionalLight3D`s' `Light3D.light_angular_distance`.
 * 
 * **Note:** The Soft High and Soft Ultra settings will automatically multiply shadow blur by 1.5× and 2× respectively to make better use of the increased sample count. This increased blur also improves stability of dynamic object shadows.
 */
  renderingLightsAndShadowsPositionalShadowSoftShadowFilterQuality: int;
/**
 * Lower-end override for `rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality` on mobile devices, due to performance concerns or driver support.
 */
  renderingLightsAndShadowsPositionalShadowSoftShadowFilterQualityMobile: int;
/**
 * If `true`, items that cannot cast shadows into the view frustum will not be rendered into shadow maps.
 * This can increase performance.
 */
  renderingLightsAndShadowsTighterShadowCasterCulling: boolean;
/**
 * Enables the use of physically based units for light sources. Physically based units tend to be much larger than the arbitrary units used by Godot, but they can be used to match lighting within Godot to real-world lighting. Due to the large dynamic range of lighting conditions present in nature, Godot bakes exposure into the various lighting quantities before rendering. Most light sources bake exposure automatically at run time based on the active `CameraAttributes` resource, but `LightmapGI` and `VoxelGI` require a `CameraAttributes` resource to be set at bake time to reduce the dynamic range. At run time, Godot will automatically reconcile the baked exposure with the active exposure to ensure lighting remains consistent.
 */
  renderingLightsAndShadowsUsePhysicalLightUnits: boolean;
/**
 * The maximum number of clustered elements (`OmniLight3D` + `SpotLight3D` + `Decal` + `ReflectionProbe`) that can be rendered at once in the camera view. If there are more clustered elements present in the camera view, some of them will not be rendered (leading to pop-in during camera movement). Enabling distance fade on lights and decals (`Light3D.distance_fade_enabled`, `Decal.distance_fade_enabled`) can help avoid reaching this limit.
 * Decreasing this value may improve GPU performance on certain setups, even if the maximum number of clustered elements is never reached in the project.
 * 
 * **Note:** This setting is only effective when using the Forward+ rendering method, not Mobile and Compatibility.
 */
  renderingLimitsClusterBuilderMaxClusteredElements: float;
/**
 * The maximum number of uniforms that can be used by the global shader uniform buffer. Each item takes up one slot. In other words, a single uniform float and a uniform vec4 will take the same amount of space in the buffer.
 * 
 * **Note:** When using the Compatibility renderer, most mobile devices (and all web exports) will be limited to a maximum size of 1024 due to hardware constraints.
 */
  renderingLimitsGlobalShaderVariablesBufferSize: int;
/**
 * Max number of omnilights and spotlights renderable per object. At the default value of 8, this means that each surface can be affected by up to 8 omnilights and 8 spotlights. This is further limited by hardware support and `rendering/limits/opengl/max_renderable_lights`. Setting this low will slightly reduce memory usage, may decrease shader compile times, and may result in faster rendering on low-end, mobile, or web devices.
 * 
 * **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.
 */
  renderingLimitsOpenglMaxLightsPerObject: int;
/**
 * Max number of elements renderable in a frame. If more elements than this are visible per frame, they will not be drawn. Keep in mind elements refer to mesh surfaces and not meshes themselves. Setting this low will slightly reduce memory usage and may decrease shader compile times, particularly on web. For most uses, the default value is suitable, but consider lowering as much as possible on web export.
 * 
 * **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.
 */
  renderingLimitsOpenglMaxRenderableElements: int;
/**
 * Max number of positional lights renderable in a frame. If more lights than this number are used, they will be ignored. Setting this low will slightly reduce memory usage and may decrease shader compile times, particularly on web. For most uses, the default value is suitable, but consider lowering as much as possible on web export.
 * 
 * **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.
 */
  renderingLimitsOpenglMaxRenderableLights: int;
/**
 * The minimum number of instances that must be present in a scene to enable culling computations on multiple threads. If a scene has fewer instances than this number, culling is done on a single thread.
 */
  renderingLimitsSpatialIndexerThreadedCullMinimumInstances: int;
  renderingLimitsSpatialIndexerUpdateIterationsPerFrame: int;
/**
 * Maximum time (in seconds) before the `TIME` shader built-in variable rolls over. The `TIME` variable increments by `delta` each frame, and when it exceeds this value, it rolls over to `0.0`. Since large floating-point values are less precise than small floating-point values, this should be set as low as possible to maximize the precision of the `TIME` built-in variable in shaders. This is especially important on mobile platforms where precision in shaders is significantly reduced. However, if this is set too low, shader animations may appear to restart from the beginning while the project is running.
 * On desktop platforms, values below `4096` are recommended, ideally below `2048`. On mobile platforms, values below `64` are recommended, ideally below `32`.
 */
  renderingLimitsTimeTimeRolloverSecs: float;
/**
 * The automatic LOD bias to use for meshes rendered within the `ReflectionProbe`. Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase `rendering/mesh_lod/lod_change/threshold_pixels` to improve performance at the cost of geometry detail.
 * 
 * **Note:** `rendering/mesh_lod/lod_change/threshold_pixels` does not affect `GeometryInstance3D` visibility ranges (also known as "manual" LOD or hierarchical LOD).
 * 
 * **Note:** This property is only read when the project starts. To adjust the automatic LOD threshold at runtime, set `Viewport.mesh_lod_threshold` on the root `Viewport`.
 */
  renderingMeshLodLodChangeThresholdPixels: float;
/**
 * The Bounding Volume Hierarchy (https://en.wikipedia.org/wiki/Bounding_volume_hierarchy) quality to use when rendering the occlusion culling buffer. Higher values will result in more accurate occlusion culling, at the cost of higher CPU usage. See also `rendering/occlusion_culling/occlusion_rays_per_thread`.
 * 
 * **Note:** This property is only read when the project starts. To adjust the BVH build quality at runtime, use `RenderingServer.viewport_set_occlusion_culling_build_quality`.
 */
  renderingOcclusionCullingBvhBuildQuality: int;
/**
 * If `true`, the projection used for rendering the occlusion buffer will be jittered. This can help prevent objects being incorrectly culled when visible through small gaps.
 */
  renderingOcclusionCullingJitterProjection: boolean;
/**
 * The number of occlusion rays traced per CPU thread. Higher values will result in more accurate occlusion culling, at the cost of higher CPU usage. The occlusion culling buffer's pixel count is roughly equal to `occlusion_rays_per_thread * number_of_logical_cpu_cores`, so it will depend on the system's CPU. Therefore, CPUs with fewer cores will use a lower resolution to attempt keeping performance costs even across devices. See also `rendering/occlusion_culling/bvh_build_quality`.
 * 
 * **Note:** This property is only read when the project starts. To adjust the number of occlusion rays traced per thread at runtime, use `RenderingServer.viewport_set_occlusion_rays_per_thread`.
 */
  renderingOcclusionCullingOcclusionRaysPerThread: int;
/**
 * If `true`, `OccluderInstance3D` nodes will be usable for occlusion culling in 3D in the root viewport. In custom viewports, `Viewport.use_occlusion_culling` must be set to `true` instead.
 * 
 * **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it. Large open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges (`GeometryInstance3D.visibility_range_begin` and `GeometryInstance3D.visibility_range_end`) compared to occlusion culling.
 * 
 * **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.
 */
  renderingOcclusionCullingUseOcclusionCulling: boolean;
/**
 * Number of cubemaps to store in the reflection atlas. The number of `ReflectionProbe`s in a scene will be limited by this amount. A higher number requires more VRAM.
 */
  renderingReflectionsReflectionAtlasReflectionCount: int;
/**
 * Size of cubemap faces for `ReflectionProbe`s. A higher number requires more VRAM and may make reflection probe updating slower.
 */
  renderingReflectionsReflectionAtlasReflectionSize: int;
/**
 * Lower-end override for `rendering/reflections/reflection_atlas/reflection_size` on mobile devices, due to performance concerns or driver support.
 */
  renderingReflectionsReflectionAtlasReflectionSizeMobile: int;
/**
 * Use a higher quality variant of the fast filtering algorithm. Significantly slower than using default quality, but results in smoother reflections. Should only be used when the scene is especially detailed.
 */
  renderingReflectionsSkyReflectionsFastFilterHighQuality: boolean;
/**
 * Sets the number of samples to take when using importance sampling for `Sky`s and `ReflectionProbe`s. A higher value will result in smoother, higher quality reflections, but increases time to calculate radiance maps. In general, fewer samples are needed for simpler, low dynamic range environments while more samples are needed for HDR environments and environments with a high level of detail.
 */
  renderingReflectionsSkyReflectionsGgxSamples: int;
/**
 * Lower-end override for `rendering/reflections/sky_reflections/ggx_samples` on mobile devices, due to performance concerns or driver support.
 */
  renderingReflectionsSkyReflectionsGgxSamplesMobile: int;
/**
 * Limits the number of layers to use in radiance maps when using importance sampling. A lower number will be slightly faster and take up less VRAM.
 */
  renderingReflectionsSkyReflectionsRoughnessLayers: int;
/**
 * If `true`, uses texture arrays instead of mipmaps for reflection probes and panorama backgrounds (sky). This reduces jitter noise and upscaling artifacts on reflections, but is significantly slower to compute and uses `rendering/reflections/sky_reflections/roughness_layers` times more memory.
 */
  renderingReflectionsSkyReflectionsTextureArrayReflections: boolean;
/**
 * Lower-end override for `rendering/reflections/sky_reflections/texture_array_reflections` on mobile devices, due to performance concerns or driver support.
 */
  renderingReflectionsSkyReflectionsTextureArrayReflectionsMobile: boolean;
/**
 * Sets the renderer that will be used by the project. Options are:
 * 
 * **forward_plus** (Forward+): High-end renderer designed for desktop devices. Has a higher base overhead, but scales well with complex scenes. Not suitable for older devices or mobile.
 * 
 * **mobile** (Mobile): Modern renderer designed for mobile devices. Has a lower base overhead than Forward+, but does not scale as well to large scenes with many elements.
 * 
 * **gl_compatibility** (Compatibility): Low-end renderer designed for older devices. Based on the limitations of the OpenGL 3.3 / OpenGL ES 3.0 / WebGL 2 APIs.
 * This can be overridden using the `--rendering-method <method>` command line argument.
 * 
 * **Note:** The actual rendering method may be automatically changed by the engine as a result of a fallback, or a user-specified command line argument. To get the actual rendering method that is used at runtime, use `RenderingServer.get_current_rendering_method` instead of reading this project setting's value.
 */
  renderingRendererRenderingMethod: string;
/**
 * Override for `rendering/renderer/rendering_method` on mobile devices.
 */
  renderingRendererRenderingMethodMobile: string;
/**
 * Override for `rendering/renderer/rendering_method` on web.
 */
  renderingRendererRenderingMethodWeb: string;
/**
 * Version code of the Direct3D 12 Agility SDK (https://devblogs.microsoft.com/directx/directx12agility/) to use (`D3D12SDKVersion`). This must match the *minor* version that is installed next to the editor binary and in the export templates directory for the current editor version. For example, if you have `1.613.3` installed, you need to input `613` here.
 */
  renderingRenderingDeviceD3d12AgilitySdkVersion: int;
/**
 * The number of entries in the miscellaneous descriptors heap the Direct3D 12 rendering driver uses each frame, used for various operations like clearing a texture.
 * Depending on the complexity of scenes, this value may be lowered or may need to be raised.
 */
  renderingRenderingDeviceD3d12MaxMiscDescriptorsPerFrame: int;
/**
 * The number of entries in the resource descriptors heap the Direct3D 12 rendering driver uses each frame, used for most rendering operations.
 * Depending on the complexity of scenes, this value may be lowered or may need to be raised.
 */
  renderingRenderingDeviceD3d12MaxResourceDescriptorsPerFrame: int;
/**
 * The number of entries in the sampler descriptors heap the Direct3D 12 rendering driver uses each frame, used for most rendering operations.
 * Depending on the complexity of scenes, this value may be lowered or may need to be raised.
 */
  renderingRenderingDeviceD3d12MaxSamplerDescriptorsPerFrame: int;
/**
 * Sets the driver to be used by the renderer when using a RenderingDevice-based renderer like the Forward+ or Mobile renderers. Editing this property has no effect in the default configuration, as first-party platforms each have platform-specific overrides. Use those overrides to configure the driver for each platform.
 * This can be overridden using the `--rendering-driver <driver>` command line argument.
 * Supported values are:
 * - `metal`, Metal (supported on Apple Silicon Macs and iOS).
 * - `vulkan`, Vulkan (supported on all desktop and mobile platforms).
 * - `d3d12`, Direct3D 12 (supported on Windows).
 * 
 * **Note:** The availability of these options depends on whether the engine was compiled with support for them (determined by SCons options `vulkan`, `metal`, and `d3d12`).
 * 
 * **Note:** If a given platform has no registered drivers, it can fall back to the Compatibility renderer (OpenGL 3) if `rendering/rendering_device/fallback_to_opengl3` is enabled. This fallback happens automatically for the Web platform regardless of that property.
 * 
 * **Note:** The actual rendering driver may be automatically changed by the engine as a result of a fallback, or a user-specified command line argument. To get the actual rendering driver that is used at runtime, use `RenderingServer.get_current_rendering_driver_name` instead of reading this project setting's value.
 */
  renderingRenderingDeviceDriver: string;
/**
 * Android override for `rendering/rendering_device/driver`.
 * Only one option is supported:
 * - `vulkan`, Vulkan from native drivers.
 * 
 * **Note:** If Vulkan was disabled at compile time, there is no alternative RenderingDevice driver.
 */
  renderingRenderingDeviceDriverAndroid: string;
/**
 * iOS override for `rendering/rendering_device/driver`.
 * Two options are supported:
 * - `metal` (default), Metal from native drivers.
 * - `vulkan`, Vulkan over Metal via MoltenVK.
 */
  renderingRenderingDeviceDriverIos: string;
/**
 * LinuxBSD override for `rendering/rendering_device/driver`.
 * Only one option is supported:
 * - `vulkan`, Vulkan from native drivers.
 * 
 * **Note:** If Vulkan was disabled at compile time, there is no alternative RenderingDevice driver.
 */
  renderingRenderingDeviceDriverLinuxbsd: string;
/**
 * macOS override for `rendering/rendering_device/driver`.
 * Two options are supported:
 * - `metal` (default), Metal from native drivers, only supported on Apple Silicon Macs. On Intel Macs, it will automatically fall back to `vulkan` as Metal support is not implemented.
 * - `vulkan`, Vulkan over Metal via MoltenVK, supported on both Apple Silicon and Intel Macs.
 */
  renderingRenderingDeviceDriverMacos: string;
/**
 * Windows override for `rendering/rendering_device/driver`.
 * Two options are supported:
 * - `vulkan` (default), Vulkan from native drivers. If `rendering/rendering_device/fallback_to_vulkan` is enabled, this is used as a fallback if Direct3D 12 is not supported.
 * - `d3d12`, Direct3D 12 from native drivers. If `rendering/rendering_device/fallback_to_d3d12` is enabled, this is used as a fallback if Vulkan is not supported.
 */
  renderingRenderingDeviceDriverWindows: string;
/**
 * If `true`, the forward renderer will fall back to Direct3D 12 if Vulkan is not supported. The fallback is always attempted regardless of this setting if Vulkan driver support was disabled at compile time.
 * 
 * **Note:** This setting is implemented only on Windows.
 */
  renderingRenderingDeviceFallbackToD3d12: boolean;
/**
 * If `true`, the forward renderer will fall back to OpenGL 3 if Direct3D 12, Metal, and Vulkan are not supported.
 * 
 * **Note:** This setting is implemented only on Windows, Android, macOS, iOS, and Linux/X11.
 */
  renderingRenderingDeviceFallbackToOpengl3: boolean;
/**
 * If `true`, the forward renderer will fall back to Vulkan if Direct3D 12 (on Windows) or Metal (on macOS x86_64) are not supported. The fallback is always attempted regardless of this setting if Direct3D 12 (Windows) or Metal (macOS) driver support was disabled at compile time.
 * 
 * **Note:** This setting is implemented only on Windows and macOS.
 */
  renderingRenderingDeviceFallbackToVulkan: boolean;
/**
 * Enable the pipeline cache that is saved to disk if the graphics API supports it.
 * 
 * **Note:** This property is unable to control the pipeline caching the GPU driver itself does. Only turn this off along with deleting the contents of the driver's cache if you wish to simulate the experience a user will get when starting the game for the first time.
 */
  renderingRenderingDevicePipelineCacheEnable: boolean;
/**
 * Determines at which interval pipeline cache is saved to disk. The lower the value, the more often it is saved.
 */
  renderingRenderingDevicePipelineCacheSaveChunkSizeMb: float;
/**
 * The size of a block allocated in the staging buffers. Staging buffers are the intermediate resources the engine uses to upload or download data to the GPU. This setting determines the max amount of data that can be transferred in a copy operation. Increasing this will result in faster data transfers at the cost of extra memory.
 * 
 * **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.
 */
  renderingRenderingDeviceStagingBufferBlockSizeKb: int;
/**
 * The maximum amount of memory allowed to be used by staging buffers. If the amount of data being uploaded or downloaded exceeds this amount, the GPU will stall and wait for previous frames to finish.
 * 
 * **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.
 */
  renderingRenderingDeviceStagingBufferMaxSizeMb: int;
/**
 * The region size in pixels used to download texture data from the GPU when using methods like `RenderingDevice.texture_get_data_async`.
 * 
 * **Note:** This property's upper limit is controlled by `rendering/rendering_device/staging_buffer/block_size_kb` and whether it's possible to allocate a single block of texture data with this region size in the format that is requested.
 * 
 * **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.
 */
  renderingRenderingDeviceStagingBufferTextureDownloadRegionSizePx: int;
/**
 * The region size in pixels used to upload texture data from the GPU when using methods like `RenderingDevice.texture_update`.
 * 
 * **Note:** This property's upper limit is controlled by `rendering/rendering_device/staging_buffer/block_size_kb` and whether it's possible to allocate a single block of texture data with this region size in the format that is requested.
 * 
 * **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.
 */
  renderingRenderingDeviceStagingBufferTextureUploadRegionSizePx: int;
/**
 * The number of frames to track on the CPU side before stalling to wait for the GPU.
 * Try the V-Sync Simulator (https://darksylinc.github.io/vsync_simulator/), an interactive interface that simulates presentation to better understand how it is affected by different variables under various conditions.
 * 
 * **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.
 */
  renderingRenderingDeviceVsyncFrameQueueSize: int;
/**
 * The number of images the swapchain will consist of (back buffers + front buffer).
 * `2` corresponds to double-buffering and `3` to triple-buffering.
 * Double-buffering may give you the lowest lag/latency but if V-Sync is on and the system can't render at 60 fps, the framerate will go down in multiples of it (e.g. 30 fps, 15, 7.5, etc.). Triple buffering gives you higher framerate (specially if the system can't reach a constant 60 fps) at the cost of up to 1 frame of latency, with `DisplayServer.VSYNC_ENABLED` (FIFO).
 * Use double-buffering with `DisplayServer.VSYNC_ENABLED`. Triple-buffering is a must if you plan on using `DisplayServer.VSYNC_MAILBOX` mode.
 * Try the V-Sync Simulator (https://darksylinc.github.io/vsync_simulator/), an interactive interface that simulates presentation to better understand how it is affected by different variables under various conditions.
 * 
 * **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.
 * 
 * **Note:** Some platforms may restrict the actual value.
 */
  renderingRenderingDeviceVsyncSwapchainImageCount: int;
/**
 * The number of descriptors per pool. Godot's Vulkan backend uses linear pools for descriptors that will be created and destroyed within a single frame. Instead of destroying every single descriptor every frame, they all can be destroyed at once by resetting the pool they belong to.
 * A larger number is more efficient up to a limit, after that it will only waste RAM (maximum efficiency is achieved when there is no more than 1 pool per frame). A small number could end up with one pool per descriptor, which negatively impacts performance.
 * 
 * **Note:** Changing this property requires a restart to take effect.
 */
  renderingRenderingDeviceVulkanMaxDescriptorsPerPool: int;
/**
 * Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.
 */
  renderingScaling3dFsrSharpness: float;
/**
 * Sets the scaling 3D mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially-aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. On particularly low-end GPUs, the added cost of FSR may not be worth it (compared to using bilinear scaling with a slightly higher resolution scale to match performance).
 * 
 * **Note:** FSR is only effective when using the Forward+ rendering method, not Mobile or Compatibility. If using an incompatible rendering method, FSR will fall back to bilinear scaling.
 */
  renderingScaling3dMode: int;
/**
 * iOS override for `rendering/scaling_3d/mode`. This allows selecting the MetalFX spatial and MetalFX temporal scaling modes, which are exclusive to platforms where the Metal rendering driver is used.
 */
  renderingScaling3dModeIos: int;
/**
 * macOS override for `rendering/scaling_3d/mode`. This allows selecting the MetalFX spatial and MetalFX temporal scaling modes, which are exclusive to platforms where the Metal rendering driver is used.
 */
  renderingScaling3dModeMacos: int;
/**
 * Scales the 3D render buffer based on the viewport size uses an image filter specified in `rendering/scaling_3d/mode` to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also `rendering/anti_aliasing/quality/msaa_3d` for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.
 */
  renderingScaling3dScale: float;
  renderingShaderCompilerShaderCacheCompress: boolean;
/**
 * Enable the shader cache, which stores compiled shaders to disk to prevent stuttering from shader compilation the next time the shader is needed.
 */
  renderingShaderCompilerShaderCacheEnabled: boolean;
  renderingShaderCompilerShaderCacheStripDebug: boolean;
  renderingShaderCompilerShaderCacheStripDebugRelease: boolean;
  renderingShaderCompilerShaderCacheUseZstdCompression: boolean;
/**
 * If `true`, uses faster but lower-quality Lambert material lighting model instead of Burley.
 */
  renderingShadingOverridesForceLambertOverBurley: boolean;
/**
 * Lower-end override for `rendering/shading/overrides/force_lambert_over_burley` on mobile devices, due to performance concerns or driver support.
 */
  renderingShadingOverridesForceLambertOverBurleyMobile: boolean;
/**
 * If `true`, forces vertex shading for all rendering. This can increase performance a lot, but also reduces quality immensely. Can be used to optimize performance on low-end mobile devices.
 */
  renderingShadingOverridesForceVertexShading: boolean;
/**
 * The default texture filtering mode to use for `CanvasItem`s built-in texture. In shaders, this texture is accessed as `TEXTURE`.
 * 
 * **Note:** For pixel art aesthetics, see also `rendering/2d/snap/snap_2d_vertices_to_pixel` and `rendering/2d/snap/snap_2d_transforms_to_pixel`.
 */
  renderingTexturesCanvasTexturesDefaultTextureFilter: int;
/**
 * The default texture repeating mode to use for `CanvasItem`s built-in texture. In shaders, this texture is accessed as `TEXTURE`.
 */
  renderingTexturesCanvasTexturesDefaultTextureRepeat: int;
/**
 * The filtering quality to use for `Decal` nodes. When using one of the anisotropic filtering modes, the anisotropic filtering level is controlled by `rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  renderingTexturesDecalsFilter: int;
/**
 * Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.
 * The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See `rendering/textures/decals/filter` and `rendering/textures/light_projectors/filter`.
 * 
 * **Note:** In 3D, for this setting to have an effect, set `BaseMaterial3D.texture_filter` to `BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC` or `BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC` on materials.
 * 
 * **Note:** In 2D, for this setting to have an effect, set `CanvasItem.texture_filter` to `CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC` or `CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC` on the `CanvasItem` node displaying the texture (or in `CanvasTexture`). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.
 * 
 * **Note:** This property is only read when the project starts. To change the anisotropic filtering level at runtime, set `Viewport.anisotropic_filtering_level` on the root `Viewport` instead.
 */
  renderingTexturesDefaultFiltersAnisotropicFilteringLevel: int;
/**
 * Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).
 * Enabling temporal antialiasing (`rendering/anti_aliasing/quality/use_taa`) will automatically apply a `-0.5` offset to this value, while enabling FXAA (`rendering/anti_aliasing/quality/screen_space_aa`) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.
 * 
 * **Note:** If `rendering/scaling_3d/scale` is lower than `1.0` (exclusive), `rendering/textures/default_filters/texture_mipmap_bias` is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.
 */
  renderingTexturesDefaultFiltersTextureMipmapBias: float;
/**
 * If `true`, uses nearest-neighbor mipmap filtering when using mipmaps (also called "bilinear filtering"), which will result in visible seams appearing between mipmap stages. This may increase performance in mobile as less memory bandwidth is used. If `false`, linear mipmap filtering (also called "trilinear filtering") is used.
 * 
 * **Note:** This property is only read when the project starts. There is currently no way to change this setting at run-time.
 */
  renderingTexturesDefaultFiltersUseNearestMipmapFilter: boolean;
/**
 * The filtering quality to use for `OmniLight3D` and `SpotLight3D` projectors. When using one of the anisotropic filtering modes, the anisotropic filtering level is controlled by `rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  renderingTexturesLightProjectorsFilter: int;
/**
 * If `true`, the texture importer will import lossless textures using the PNG format. Otherwise, it will default to using WebP.
 */
  renderingTexturesLosslessCompressionForcePng: boolean;
/**
 * If `true`, the GPU texture compressor will cache the local RenderingDevice and its resources (shaders and pipelines), allowing for faster subsequent imports at a memory cost.
 */
  renderingTexturesVramCompressionCacheGpuCompressor: boolean;
/**
 * If `true`, the texture importer will utilize the GPU for compressing textures, improving the import time of large images.
 * 
 * **Note:** This only functions on a device which supports either Vulkan, Direct3D 12, or Metal as a rendering driver.
 * 
 * **Note:** Currently this only affects certain compressed formats (BC1, BC3, BC4, BC5, and BC6), all of which are exclusive to desktop platforms and consoles.
 */
  renderingTexturesVramCompressionCompressWithGpu: boolean;
/**
 * If `true`, the texture importer will import VRAM-compressed textures using the Ericsson Texture Compression 2 algorithm for lower quality textures and normal maps and Adaptable Scalable Texture Compression algorithm for high quality textures (in 4×4 block size).
 * 
 * **Note:** This setting is an override. The texture importer will always import the format the host platform needs, even if this is set to `false`.
 * 
 * **Note:** Changing this setting does *not* impact textures that were already imported before. To make this setting apply to textures that were already imported, exit the editor, remove the `.godot/imported/` folder located inside the project folder then restart the editor (see `application/config/use_hidden_project_data_directory`).
 */
  renderingTexturesVramCompressionImportEtc2Astc: boolean;
/**
 * If `true`, the texture importer will import VRAM-compressed textures using the S3 Texture Compression algorithm (DXT1-5) for lower quality textures and the BPTC algorithm (BC6H and BC7) for high quality textures. This algorithm is only supported on PC desktop platforms and consoles.
 * 
 * **Note:** This setting is an override. The texture importer will always import the format the host platform needs, even if this is set to `false`.
 * 
 * **Note:** Changing this setting does *not* impact textures that were already imported before. To make this setting apply to textures that were already imported, exit the editor, remove the `.godot/imported/` folder located inside the project folder then restart the editor (see `application/config/use_hidden_project_data_directory`).
 */
  renderingTexturesVramCompressionImportS3tcBptc: boolean;
/**
 * The default compression method for WebP. Affects both lossy and lossless WebP. A higher value results in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression method. Supported values are 0 to 6. Note that compression methods above 4 are very slow and offer very little savings.
 */
  renderingTexturesWebpCompressionCompressionMethod: int;
/**
 * The default compression factor for lossless WebP. Decompression speed is mostly unaffected by the compression factor. Supported values are 0 to 100.
 */
  renderingTexturesWebpCompressionLosslessCompressionFactor: float;
/**
 * If `true`, enables `Viewport.use_hdr_2d` on the root viewport. 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen. Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.
 * 
 * **Note:** This setting will have no effect when using the Compatibility renderer, which always renders in low dynamic range for performance reasons.
 * 
 * **Note:** This property is only read when the project starts. To toggle HDR 2D at runtime, set `Viewport.use_hdr_2d` on the root `Viewport`.
 */
  renderingViewportHdr2d: boolean;
/**
 * If `true`, enables `Viewport.transparent_bg` on the root viewport. This allows per-pixel transparency to be effective after also enabling `display/window/size/transparent` and `display/window/per_pixel_transparency/allowed`.
 */
  renderingViewportTransparentBackground: boolean;
/**
 * Set the default Variable Rate Shading (VRS) mode for the main viewport. See `Viewport.vrs_mode` to change this at runtime, and `Viewport.VRSMode` for possible values.
 */
  renderingVrsMode: int;
/**
 * If `rendering/vrs/mode` is set to **Texture**, this is the path to default texture loaded as the VRS image.
 * The texture *must* use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:
 * [codeblock lang=text]
 * - 1×1 = rgb(0, 0, 0)     - #000000
 * - 1×2 = rgb(0, 85, 0)    - #005500
 * - 2×1 = rgb(85, 0, 0)    - #550000
 * - 2×2 = rgb(85, 85, 0)   - #555500
 * - 2×4 = rgb(85, 170, 0)  - #55aa00
 * - 4×2 = rgb(170, 85, 0)  - #aa5500
 * - 4×4 = rgb(170, 170, 0) - #aaaa00
 * - 4×8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware
 * - 8×4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware
 * - 8×8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware
 * [/codeblock]
 */
  renderingVrsTexture: string;
/**
 * The ratio of `WorkerThreadPool`'s threads that will be reserved for low-priority tasks. For example, if 10 threads are available and this value is set to `0.3`, 3 of the worker threads will be reserved for low-priority tasks. The actual value won't exceed the number of CPU cores minus one, and if possible, at least one worker thread will be dedicated to low-priority tasks.
 */
  threadingWorkerPoolLowPriorityThreadRatio: float;
/**
 * Maximum number of threads to be used by `WorkerThreadPool`. Value of `-1` means no limit.
 */
  threadingWorkerPoolMaxThreads: int;
/**
 * If `true`, enables the analog threshold binding modifier if supported by the XR runtime.
 */
  xrOpenxrBindingModifiersAnalogThreshold: boolean;
/**
 * If `true`, enables the D-pad binding modifier if supported by the XR runtime.
 */
  xrOpenxrBindingModifiersDpadBinding: boolean;
/**
 * Action map configuration to load by default.
 */
  xrOpenxrDefaultActionMap: string;
/**
 * If `true`, Godot will setup and initialize OpenXR on startup.
 */
  xrOpenxrEnabled: boolean;
/**
 * Specify how OpenXR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor.
 */
  xrOpenxrEnvironmentBlendMode: int;
/**
 * Specifies the message types for which we request debug messages. Requires `xr/openxr/extensions/debug_utils` to be set and the extension to be supported by the XR runtime.
 */
  xrOpenxrExtensionsDebugMessageTypes: int;
/**
 * Enables debug utilities on XR runtimes that supports the debug utils extension. Sets the maximum severity being reported (0 = disabled, 1 = error, 2 = warning, 3 = info, 4 = verbose).
 */
  xrOpenxrExtensionsDebugUtils: int;
/**
 * Specify whether to enable eye tracking for this project. Depending on the platform, additional export configuration may be needed.
 */
  xrOpenxrExtensionsEyeGazeInteraction: boolean;
/**
 * If `true` the hand interaction profile extension will be activated if supported by the platform.
 */
  xrOpenxrExtensionsHandInteractionProfile: boolean;
/**
 * If `true`, the hand tracking extension is enabled if available.
 * 
 * **Note:** By default hand tracking will only work for data sources chosen by the XR runtime. For SteamVR this is the controller inferred data source, for most other runtimes this is the unobstructed data source. There is no way to query this. If a runtime supports the OpenXR data source extension you can use the `xr/openxr/extensions/hand_tracking_controller_data_source` and/or `xr/openxr/extensions/hand_tracking_unobstructed_data_source` to indicate you wish to enable these data sources. If neither is selected the data source extension is not enabled and the XR runtimes default behavior persists.
 */
  xrOpenxrExtensionsHandTracking: boolean;
/**
 * If `true`, support for the controller inferred data source is requested. If supported, you will receive hand tracking data even if the user has a controller in hand, with finger positions automatically inferred from controller input and/or sensors.
 * 
 * **Node:** This requires the OpenXR data source extension and controller inferred handtracking to be supported by the XR runtime. If not supported this setting will be ignored. `xr/openxr/extensions/hand_tracking` must be enabled for this setting to be used.
 */
  xrOpenxrExtensionsHandTrackingControllerDataSource: boolean;
/**
 * If `true`, support for the unobstructed data source is requested. If supported, you will receive hand tracking data based on the actual finger positions of the user often determined by optical tracking.
 * 
 * **Node:** This requires the OpenXR data source extension and unobstructed handtracking to be supported by the XR runtime. If not supported this setting will be ignored. `xr/openxr/extensions/hand_tracking` must be enabled for this setting to be used.
 */
  xrOpenxrExtensionsHandTrackingUnobstructedDataSource: boolean;
/**
 * Specify whether OpenXR should be configured for an HMD or a hand held device.
 */
  xrOpenxrFormFactor: int;
/**
 * If `true` and foveation is supported, will automatically adjust foveation level based on framerate up to the level set on `xr/openxr/foveation_level`.
 * 
 * **Note:** Only works on the Compatibility rendering method.
 */
  xrOpenxrFoveationDynamic: boolean;
/**
 * Applied foveation level if supported: 0 = off, 1 = low, 2 = medium, 3 = high.
 * 
 * **Note:** Only works on the Compatibility rendering method. On platforms other than Android, if `rendering/anti_aliasing/quality/msaa_3d` is enabled, this feature will be disabled.
 */
  xrOpenxrFoveationLevel: int;
/**
 * Specify the default reference space.
 */
  xrOpenxrReferenceSpace: int;
/**
 * If `true`, Godot will display an alert modal when OpenXR initialization fails on startup.
 */
  xrOpenxrStartupAlert: boolean;
/**
 * If `true`, OpenXR will manage the depth buffer and use the depth buffer for advanced reprojection provided this is supported by the XR runtime. Note that some rendering features in Godot can't be used with this feature.
 */
  xrOpenxrSubmitDepthBuffer: boolean;
/**
 * Specify the view configuration with which to configure OpenXR setting up either Mono or Stereo rendering.
 */
  xrOpenxrViewConfiguration: int;
/**
 * If `true`, Godot will compile shaders required for XR.
 */
  xrShadersEnabled: boolean;
/**
 * Adds a custom property info to a property. The dictionary must contain:
 * - `"name"`: `String` (the property's name)
 * - `"type"`: [int] (see `Variant.Type`)
 * - optionally `"hint"`: [int] (see `PropertyHint`) and `"hint_string"`: `String`
 * 
 * 				```gdscript
 * 
 * 				ProjectSettings.set("category/property_name", 0)
 * 
 * 				var property_info = {
 * 				    "name": "category/property_name",
 * 				    "type": TYPE_INT,
 * 				    "hint": PROPERTY_HINT_ENUM,
 * 				    "hint_string": "one,two,three"
 * 				}
 * 
 * 				ProjectSettings.add_property_info(property_info)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				ProjectSettings.Singleton.Set("category/property_name", 0);
 * 
 * 				var propertyInfo = new Godot.Collections.Dictionary
 * 				{
 * 				    {"name", "category/propertyName"},
 * 				    {"type", (int)Variant.Type.Int},
 * 				    {"hint", (int)PropertyHint.Enum},
 * 				    {"hint_string", "one,two,three"},
 * 				};
 * 
 * 				ProjectSettings.AddPropertyInfo(propertyInfo);
 * 				
 * 
 * ```
 * 
 * @param hint GodotDictionary<any>
 */
  addPropertyInfo(hint: GodotDictionary<any>): void;
/**
 * Clears the whole configuration (not recommended, may break things).
 * @param name string
 */
  clear(name: string): void;
/**
 * Returns an `Array` of registered global classes. Each global class is represented as a `Dictionary` that contains the following entries:
 * - `base` is a name of the base class;
 * - `class` is a name of the registered global class;
 * - `icon` is a path to a custom icon of the global class, if it has any;
 * - `language` is a name of a programming language in which the global class is written;
 * - `path` is a path to a file containing the global class.
 * 
 * **Note:** Both the script and the icon paths are local to the project filesystem, i.e. they start with `res://`.
 * @returns Dictionary[]
 */
  getGlobalClassList(): Dictionary[];
/**
 * Returns the order of a configuration value (influences when saved to the config file).
 * @param name string
 * @returns int
 */
  getOrder(name: string): int;
/**
 * Returns the value of the setting identified by `name`. If the setting doesn't exist and `default_value` is specified, the value of `default_value` is returned. Otherwise, `null` is returned.
 * 
 * 				```gdscript
 * 
 * 				print(ProjectSettings.get_setting("application/config/name"))
 * 				print(ProjectSettings.get_setting("application/config/custom_description", "No description specified."))
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				GD.Print(ProjectSettings.GetSetting("application/config/name"));
 * 				GD.Print(ProjectSettings.GetSetting("application/config/custom_description", "No description specified."));
 * 				
 * 
 * ```
 * 
 * **Note:** This method doesn't take potential feature overrides into account automatically. Use `get_setting_with_override` to handle seamlessly.
 * @param name string
 * @param defaultValue Variant (optional, default: null)
 * @returns Variant
 */
  getSetting(name: string, defaultValue?: Variant): Variant;
/**
 * Similar to `get_setting`, but applies feature tag overrides if any exists and is valid.
 * 
 * **Example:** If the setting override `"application/config/name.windows"` exists, and the following code is executed on a *Windows* operating system, the overridden setting is printed instead:
 * 
 * 				```gdscript
 * 
 * 				print(ProjectSettings.get_setting_with_override("application/config/name"))
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				GD.Print(ProjectSettings.GetSettingWithOverride("application/config/name"));
 * 				
 * 
 * ```
 * 
 * @param name StringName
 * @returns Variant
 */
  getSettingWithOverride(name: StringName): Variant;
/**
 * Returns the absolute, native OS path corresponding to the localized `path` (starting with `res://` or `user://`). The returned path will vary depending on the operating system and user preferences. See File paths in Godot projects (https://docs.godotengine.org/en/stable/tutorials/io/data_paths.html) to see what those paths convert to. See also `localize_path`.
 * 
 * **Note:** `globalize_path` with `res://` will not work in an exported project. Instead, prepend the executable's base directory to the path when running from an exported project:
 * 
 * 				```gdscript
 * 
 * 				var path = ""
 * 				if OS.has_feature("editor"):
 * 				    # Running from an editor binary.
 * 				    # `path` will contain the absolute path to `hello.txt` located in the project root.
 * 				    path = ProjectSettings.globalize_path("res://hello.txt")
 * 				else:
 * 				    # Running from an exported project.
 * 				    # `path` will contain the absolute path to `hello.txt` next to the executable.
 * 				    # This is *not* identical to using `ProjectSettings.globalize_path()` with a `res://` path,
 * 				    # but is close enough in spirit.
 * 				    path = OS.get_executable_path().get_base_dir().path_join("hello.txt")
 * 				
 * 
 * ```
 * @param path string
 * @returns string
 */
  globalizePath(path: string): string;
/**
 * Returns `true` if a configuration value is present.
 * @param name string
 * @returns boolean
 */
  hasSetting(name: string): boolean;
/**
 * Loads the contents of the .pck or .zip file specified by `pack` into the resource filesystem (`res://`). Returns `true` on success.
 * 
 * **Note:** If a file from `pack` shares the same path as a file already in the resource filesystem, any attempts to load that file will use the file from `pack` unless `replace_files` is set to `false`.
 * 
 * **Note:** The optional `offset` parameter can be used to specify the offset in bytes to the start of the resource pack. This is only supported for .pck files.
 * 
 * **Note:** `DirAccess` will not show changes made to the contents of `res://` after calling this function.
 * @param pack string
 * @param replaceFiles boolean (optional, default: true)
 * @param offset int (optional, default: 0)
 * @returns boolean
 */
  loadResourcePack(pack: string, replaceFiles?: boolean, offset?: int): boolean;
/**
 * Returns the localized path (starting with `res://`) corresponding to the absolute, native OS `path`. See also `globalize_path`.
 * @param path string
 * @returns string
 */
  localizePath(path: string): string;
/**
 * Saves the configuration to the `project.godot` file.
 * 
 * **Note:** This method is intended to be used by editor plugins, as modified `ProjectSettings` can't be loaded back in the running app. If you want to change project settings in exported projects, use `save_custom` to save `override.cfg` file.
 * @returns int
 */
  save(): int;
/**
 * Saves the configuration to a custom file. The file extension must be `.godot` (to save in text-based `ConfigFile` format) or `.binary` (to save in binary format). You can also save `override.cfg` file, which is also text, but can be used in exported projects unlike other formats.
 * @param file string
 * @returns int
 */
  saveCustom(file: string): int;
/**
 * Defines if the specified setting is considered basic or advanced. Basic settings will always be shown in the project settings. Advanced settings will only be shown if the user enables the "Advanced Settings" option.
 * @param name string
 * @param basic boolean
 */
  setAsBasic(name: string, basic: boolean): void;
/**
 * Defines if the specified setting is considered internal. An internal setting won't show up in the Project Settings dialog. This is mostly useful for addons that need to store their own internal settings without exposing them directly to the user.
 * @param name string
 * @param internal boolean
 */
  setAsInternal(name: string, internal: boolean): void;
/**
 * Sets the specified setting's initial value. This is the value the setting reverts to.
 * @param name string
 * @param value Variant
 */
  setInitialValue(name: string, value: Variant): void;
/**
 * Sets the order of a configuration value (influences when saved to the config file).
 * @param name string
 * @param position int
 */
  setOrder(name: string, position: int): void;
/**
 * Sets whether a setting requires restarting the editor to properly take effect.
 * 
 * **Note:** This is just a hint to display to the user that the editor must be restarted for changes to take effect. Enabling `set_restart_if_changed` does *not* delay the setting being set when changed.
 * @param name string
 * @param restart boolean
 */
  setRestartIfChanged(name: string, restart: boolean): void;
/**
 * Sets the value of a setting.
 * 
 * 				```gdscript
 * 
 * 				ProjectSettings.set_setting("application/config/name", "Example")
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				ProjectSettings.SetSetting("application/config/name", "Example");
 * 				
 * 
 * ```
 * 
 * This can also be used to erase custom project settings. To do this change the setting value to `null`.
 * @param name string
 * @param value Variant
 */
  setSetting(name: string, value: Variant): void;
/**
 * Emitted when any setting is changed, up to once per process frame.
 */
  settingsChanged: Signal<[]>;
}
