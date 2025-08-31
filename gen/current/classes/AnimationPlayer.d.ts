import type { AnimationMixer, GodotArray, GodotDictionary, NodePath, PackedStringArray, Signal, StringName, float, int } from "../index.d.ts";
/**
 * A node used for animation playback.
 * 
 * An animation player is used for general-purpose playback of animations. It contains a dictionary of `AnimationLibrary` resources and custom blend times between animation transitions.
 * Some methods and properties use a single key to reference an animation directly. These keys are formatted as the key for the library, followed by a forward slash, then the key for the animation within the library, for example `"movement/run"`. If the library's key is an empty string (known as the default library), the forward slash is omitted, being the same key used by the library.
 * `AnimationPlayer` is better-suited than `Tween` for more complex animations, for example ones with non-trivial timings. It can also be used over `Tween` if the animation track editor is more convenient than doing it in code.
 * Updating the target properties of animations occurs at the process frame.
 */
export class AnimationPlayer extends AnimationMixer {
/**
 * If playing, the current animation's key, otherwise, the animation last played. When set, this changes the animation, but will not play it unless already playing. See also `current_animation`.
 */
  assignedAnimation: string;
/**
 * The key of the animation to play when the scene loads.
 */
  autoplay: string;
/**
 * The key of the currently playing animation. If no animation is playing, the property's value is an empty string. Changing this value does not restart the animation. See `play` for more information on playing animations.
 * 
 * **Note:** While this property appears in the Inspector, it's not meant to be edited, and it's not saved in the scene. This property is mainly used to get the currently playing animation, and internally for animation playback tracks. For more information, see `Animation`.
 */
  currentAnimation: string;
/**
 * The length (in seconds) of the currently playing animation.
 */
  currentAnimationLength: float;
/**
 * The position (in seconds) of the currently playing animation.
 */
  currentAnimationPosition: float;
/**
 * If `true` and the engine is running in Movie Maker mode (see `MovieWriter`), exits the engine with `SceneTree.quit` as soon as an animation is done playing in this `AnimationPlayer`. A message is printed when the engine quits for this reason.
 * 
 * **Note:** This obeys the same logic as the `AnimationMixer.animation_finished` signal, so it will not quit the engine if the animation is set to be looping.
 */
  movieQuitOnFinish: boolean;
/**
 * If `true`, performs `AnimationMixer.capture` before playback automatically. This means just `play_with_capture` is executed with default arguments instead of `play`.
 * 
 * **Note:** Capture interpolation is only performed if the animation contains a capture track. See also `Animation.UPDATE_CAPTURE`.
 */
  playbackAutoCapture: boolean;
/**
 * See also `play_with_capture` and `AnimationMixer.capture`.
 * If `playback_auto_capture_duration` is negative value, the duration is set to the interval between the current position and the first key.
 */
  playbackAutoCaptureDuration: float;
/**
 * The ease type of the capture interpolation. See also `Tween.EaseType`.
 */
  playbackAutoCaptureEaseType: int;
/**
 * The transition type of the capture interpolation. See also `Tween.TransitionType`.
 */
  playbackAutoCaptureTransitionType: int;
/**
 * The default time in which to blend animations. Ranges from 0 to 4096 with 0.01 precision.
 */
  playbackDefaultBlendTime: float;
/**
 * The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.
 * If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.
 */
  speedScale: float;
/**
 * Returns the key of the animation which is queued to play after the `animation_from` animation.
 * @param animationFrom StringName
 * @returns StringName
 */
  animationGetNext(animationFrom: StringName): StringName;
/**
 * Triggers the `animation_to` animation when the `animation_from` animation completes.
 * @param animationFrom StringName
 * @param animationTo StringName
 */
  animationSetNext(animationFrom: StringName, animationTo: StringName): void;
/**
 * Clears all queued, unplayed animations.
 */
  clearQueue(): void;
/**
 * Returns the blend time (in seconds) between two animations, referenced by their keys.
 * @param animationFrom StringName
 * @param animationTo StringName
 * @returns float
 */
  getBlendTime(animationFrom: StringName, animationTo: StringName): float;
/**
 * Returns the call mode used for "Call Method" tracks.
 * @returns int
 * @deprecated Use `AnimationMixer.callback_mode_method` instead.
 */
  getMethodCallMode(): int;
/**
 * Returns the actual playing speed of current animation or `0` if not playing. This speed is the `speed_scale` property multiplied by `custom_speed` argument specified when calling the `play` method.
 * Returns a negative value if the current animation is playing backwards.
 * @returns float
 */
  getPlayingSpeed(): float;
/**
 * Returns the process notification in which to update animations.
 * @returns int
 * @deprecated Use `AnimationMixer.callback_mode_process` instead.
 */
  getProcessCallback(): int;
/**
 * Returns a list of the animation keys that are currently queued to play.
 * @returns PackedStringArray
 */
  getQueue(): PackedStringArray;
/**
 * Returns the node which node path references will travel from.
 * @returns NodePath
 * @deprecated Use `AnimationMixer.root_node` instead.
 */
  getRoot(): NodePath;
/**
 * Returns the end time of the section currently being played.
 * @returns float
 */
  getSectionEndTime(): float;
/**
 * Returns the start time of the section currently being played.
 * @returns float
 */
  getSectionStartTime(): float;
/**
 * Returns `true` if an animation is currently playing with section.
 * @returns boolean
 */
  hasSection(): boolean;
/**
 * Returns `true` if an animation is currently playing (even if `speed_scale` and/or `custom_speed` are `0`).
 * @returns boolean
 */
  isPlaying(): boolean;
/**
 * Pauses the currently playing animation. The `current_animation_position` will be kept and calling `play` or `play_backwards` without arguments or with the same animation name as `assigned_animation` will resume the animation.
 * See also `stop`.
 */
  pause(): void;
/**
 * Plays the animation with key `name`. Custom blend times and speed can be set.
 * The `from_end` option only affects when switching to a new animation track, or if the same track but at the start or end. It does not affect resuming playback that was paused in the middle of an animation. If `custom_speed` is negative and `from_end` is `true`, the animation will play backwards (which is equivalent to calling `play_backwards`).
 * The `AnimationPlayer` keeps track of its current or last played animation with `assigned_animation`. If this method is called with that same animation `name`, or with no `name` parameter, the assigned animation will resume playing if it was paused.
 * 
 * **Note:** The animation will be updated the next time the `AnimationPlayer` is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call `advance(0)`.
 * @param name StringName (optional, default: &"")
 * @param customBlend float (optional, default: -1)
 * @param customSpeed float (optional, default: 1.0)
 * @param fromEnd boolean (optional, default: false)
 */
  play(name?: StringName, customBlend?: float, customSpeed?: float, fromEnd?: boolean): void;
/**
 * Plays the animation with key `name` in reverse.
 * This method is a shorthand for `play` with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.
 * @param name StringName (optional, default: &"")
 * @param customBlend float (optional, default: -1)
 */
  playBackwards(name?: StringName, customBlend?: float): void;
/**
 * Plays the animation with key `name` and the section starting from `start_time` and ending on `end_time`. See also `play`.
 * Setting `start_time` to a value outside the range of the animation means the start of the animation will be used instead, and setting `end_time` to a value outside the range of the animation means the end of the animation will be used instead. `start_time` cannot be equal to `end_time`.
 * @param name StringName (optional, default: &"")
 * @param startTime float (optional, default: -1)
 * @param endTime float (optional, default: -1)
 * @param customBlend float (optional, default: -1)
 * @param customSpeed float (optional, default: 1.0)
 * @param fromEnd boolean (optional, default: false)
 */
  playSection(name?: StringName, startTime?: float, endTime?: float, customBlend?: float, customSpeed?: float, fromEnd?: boolean): void;
/**
 * Plays the animation with key `name` and the section starting from `start_time` and ending on `end_time` in reverse.
 * This method is a shorthand for `play_section` with `custom_speed = -1.0` and `from_end = true`, see its description for more information.
 * @param name StringName (optional, default: &"")
 * @param startTime float (optional, default: -1)
 * @param endTime float (optional, default: -1)
 * @param customBlend float (optional, default: -1)
 */
  playSectionBackwards(name?: StringName, startTime?: float, endTime?: float, customBlend?: float): void;
/**
 * Plays the animation with key `name` and the section starting from `start_marker` and ending on `end_marker`.
 * If the start marker is empty, the section starts from the beginning of the animation. If the end marker is empty, the section ends on the end of the animation. See also `play`.
 * @param name StringName (optional, default: &"")
 * @param startMarker StringName (optional, default: &"")
 * @param endMarker StringName (optional, default: &"")
 * @param customBlend float (optional, default: -1)
 * @param customSpeed float (optional, default: 1.0)
 * @param fromEnd boolean (optional, default: false)
 */
  playSectionWithMarkers(name?: StringName, startMarker?: StringName, endMarker?: StringName, customBlend?: float, customSpeed?: float, fromEnd?: boolean): void;
/**
 * Plays the animation with key `name` and the section starting from `start_marker` and ending on `end_marker` in reverse.
 * This method is a shorthand for `play_section_with_markers` with `custom_speed = -1.0` and `from_end = true`, see its description for more information.
 * @param name StringName (optional, default: &"")
 * @param startMarker StringName (optional, default: &"")
 * @param endMarker StringName (optional, default: &"")
 * @param customBlend float (optional, default: -1)
 */
  playSectionWithMarkersBackwards(name?: StringName, startMarker?: StringName, endMarker?: StringName, customBlend?: float): void;
/**
 * See also `AnimationMixer.capture`.
 * You can use this method to use more detailed options for capture than those performed by `playback_auto_capture`. When `playback_auto_capture` is `false`, this method is almost the same as the following:
 * 
 * 				```gdscript
 * 
 * 				capture(name, duration, trans_type, ease_type)
 * 				play(name, custom_blend, custom_speed, from_end)
 * 				
 * 
 * ```
 * If `name` is blank, it specifies `assigned_animation`.
 * If `duration` is a negative value, the duration is set to the interval between the current position and the first key, when `from_end` is `true`, uses the interval between the current position and the last key instead.
 * 
 * **Note:** The `duration` takes `speed_scale` into account, but `custom_speed` does not, because the capture cache is interpolated with the blend result and the result may contain multiple animations.
 * @param name StringName (optional, default: &"")
 * @param duration float (optional, default: -1.0)
 * @param customBlend float (optional, default: -1)
 * @param customSpeed float (optional, default: 1.0)
 * @param fromEnd boolean (optional, default: false)
 * @param transType int (optional, default: 0)
 * @param easeType int (optional, default: 0)
 */
  playWithCapture(name?: StringName, duration?: float, customBlend?: float, customSpeed?: float, fromEnd?: boolean, transType?: int, easeType?: int): void;
/**
 * Queues an animation for playback once the current animation and all previously queued animations are done.
 * 
 * **Note:** If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.
 * @param name StringName
 */
  queue(name: StringName): void;
/**
 * Resets the current section if section is set.
 */
  resetSection(): void;
/**
 * Seeks the animation to the `seconds` point in time (in seconds). If `update` is `true`, the animation updates too, otherwise it updates at process time. Events between the current frame and `seconds` are skipped.
 * If `update_only` is `true`, the method / audio / animation playback tracks will not be processed.
 * 
 * **Note:** Seeking to the end of the animation doesn't emit `AnimationMixer.animation_finished`. If you want to skip animation and emit the signal, use `AnimationMixer.advance`.
 * @param seconds float
 * @param update boolean (optional, default: false)
 * @param updateOnly boolean (optional, default: false)
 */
  seek(seconds: float, update?: boolean, updateOnly?: boolean): void;
/**
 * Specifies a blend time (in seconds) between two animations, referenced by their keys.
 * @param animationFrom StringName
 * @param animationTo StringName
 * @param sec float
 */
  setBlendTime(animationFrom: StringName, animationTo: StringName, sec: float): void;
/**
 * Sets the call mode used for "Call Method" tracks.
 * @param mode int
 * @deprecated Use `AnimationMixer.callback_mode_method` instead.
 */
  setMethodCallMode(mode: int): void;
/**
 * Sets the process notification in which to update animations.
 * @param mode int
 * @deprecated Use `AnimationMixer.callback_mode_process` instead.
 */
  setProcessCallback(mode: int): void;
/**
 * Sets the node which node path references will travel from.
 * @param path NodePath
 * @deprecated Use `AnimationMixer.root_node` instead.
 */
  setRoot(path: NodePath): void;
/**
 * Changes the start and end times of the section being played. The current playback position will be clamped within the new section. See also `play_section`.
 * @param startTime float (optional, default: -1)
 * @param endTime float (optional, default: -1)
 */
  setSection(startTime?: float, endTime?: float): void;
/**
 * Changes the start and end markers of the section being played. The current playback position will be clamped within the new section. See also `play_section_with_markers`.
 * If the argument is empty, the section uses the beginning or end of the animation. If both are empty, it means that the section is not set.
 * @param startMarker StringName (optional, default: &"")
 * @param endMarker StringName (optional, default: &"")
 */
  setSectionWithMarkers(startMarker?: StringName, endMarker?: StringName): void;
/**
 * Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also `pause`.
 * If `keep_state` is `true`, the animation state is not updated visually.
 * 
 * **Note:** The method / audio / animation playback tracks will not be processed by this method.
 * @param keepState boolean (optional, default: false)
 */
  stop(keepState?: boolean): void;
/**
 * Emitted when a queued animation plays after the previous animation finished. See also `AnimationPlayer.queue`.
 * 
 * **Note:** The signal is not emitted when the animation is changed via `AnimationPlayer.play` or by an `AnimationTree`.
 */
  animationChanged: Signal<[oldName: StringName, newName: StringName]>;
/**
 * Emitted when `current_animation` changes.
 */
  currentAnimationChanged: Signal<[name: string]>;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`.
 */
  static readonly ANIMATION_PROCESS_PHYSICS: int;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE`.
 */
  static readonly ANIMATION_PROCESS_IDLE: int;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL`.
 */
  static readonly ANIMATION_PROCESS_MANUAL: int;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_DEFERRED`.
 */
  static readonly ANIMATION_METHOD_CALL_DEFERRED: int;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE`.
 */
  static readonly ANIMATION_METHOD_CALL_IMMEDIATE: int;
}
