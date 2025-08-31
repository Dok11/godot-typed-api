import type { Animation, AnimationLibrary, GodotArray, GodotDictionary, Node, NodePath, PackedStringArray, Quaternion, Signal, StringName, Variant, Vector3, float, int } from "../index.d.ts";
/**
 * Base class for `AnimationPlayer` and `AnimationTree`.
 * 
 * Base class for `AnimationPlayer` and `AnimationTree` to manage animation lists. It also has general properties and methods for playback and blending.
 * After instantiating the playback information data within the extended class, the blending is processed by the `AnimationMixer`.
 */
export class AnimationMixer extends Node {
/**
 * If `true`, the `AnimationMixer` will be processing.
 */
  active: boolean;
/**
 * The number of possible simultaneous sounds for each of the assigned AudioStreamPlayers.
 * For example, if this value is `32` and the animation has two audio tracks, the two `AudioStreamPlayer`s assigned can play simultaneously up to `32` voices each.
 */
  audioMaxPolyphony: int;
/**
 * Ordinarily, tracks can be set to `Animation.UPDATE_DISCRETE` to update infrequently, usually when using nearest interpolation.
 * However, when blending with `Animation.UPDATE_CONTINUOUS` several results are considered. The `callback_mode_discrete` specify it explicitly. See also `AnimationCallbackModeDiscrete`.
 * To make the blended results look good, it is recommended to set this to `ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS` to update every frame during blending. Other values exist for compatibility and they are fine if there is no blending, but not so, may produce artifacts.
 */
  callbackModeDiscrete: int;
/**
 * The call mode used for "Call Method" tracks.
 */
  callbackModeMethod: int;
/**
 * The process notification in which to update animations.
 */
  callbackModeProcess: int;
/**
 * If `true`, the blending uses the deterministic algorithm. The total weight is not normalized and the result is accumulated with an initial value (`0` or a `"RESET"` animation if present).
 * This means that if the total amount of blending is `0.0`, the result is equal to the `"RESET"` animation.
 * If the number of tracks between the blended animations is different, the animation with the missing track is treated as if it had the initial value.
 * If `false`, The blend does not use the deterministic algorithm. The total weight is normalized and always `1.0`. If the number of tracks between the blended animations is different, nothing is done about the animation that is missing a track.
 * 
 * **Note:** In `AnimationTree`, the blending with `AnimationNodeAdd2`, `AnimationNodeAdd3`, `AnimationNodeSub2` or the weight greater than `1.0` may produce unexpected results.
 * For example, if `AnimationNodeAdd2` blends two nodes with the amount `1.0`, then total weight is `2.0` but it will be normalized to make the total amount `1.0` and the result will be equal to `AnimationNodeBlend2` with the amount `0.5`.
 */
  deterministic: boolean;
/**
 * This is used by the editor. If set to `true`, the scene will be saved with the effects of the reset animation (the animation with the key `"RESET"`) applied as if it had been seeked to time 0, with the editor keeping the values that the scene had before saving.
 * This makes it more convenient to preview and edit animations in the editor, as changes to the scene will not be saved as long as they are set in the reset animation.
 */
  resetOnSave: boolean;
/**
 * If `true`, `get_root_motion_position` value is extracted as a local translation value before blending. In other words, it is treated like the translation is done after the rotation.
 */
  rootMotionLocal: boolean;
/**
 * The path to the Animation track used for root motion. Paths must be valid scene-tree paths to a node, and must be specified starting from the parent node of the node that will reproduce the animation. The `root_motion_track` uses the same format as `Animation.track_set_path`, but note that a bone must be specified.
 * If the track has type `Animation.TYPE_POSITION_3D`, `Animation.TYPE_ROTATION_3D`, or `Animation.TYPE_SCALE_3D` the transformation will be canceled visually, and the animation will appear to stay in place. See also `get_root_motion_position`, `get_root_motion_rotation`, `get_root_motion_scale`, and `RootMotionView`.
 */
  rootMotionTrack: NodePath;
/**
 * The node which node path references will travel from.
 */
  rootNode: NodePath;
/**
 * Adds `library` to the animation player, under the key `name`.
 * AnimationMixer has a global library by default with an empty string as key. For adding an animation to the global library:
 * 
 * 				```gdscript
 * 
 * 				var global_library = mixer.get_animation_library("")
 * 				global_library.add_animation("animation_name", animation_resource)
 * 				
 * 
 * ```
 * 
 * @param name StringName
 * @param library AnimationLibrary
 * @returns int
 */
  addAnimationLibrary(name: StringName, library: AnimationLibrary): int;
/**
 * Manually advance the animations by the specified time (in seconds).
 * @param delta float
 */
  advance(delta: float): void;
/**
 * If the animation track specified by `name` has an option `Animation.UPDATE_CAPTURE`, stores current values of the objects indicated by the track path as a cache. If there is already a captured cache, the old cache is discarded.
 * After this it will interpolate with current animation blending result during the playback process for the time specified by `duration`, working like a crossfade.
 * You can specify `trans_type` as the curve for the interpolation. For better results, it may be appropriate to specify `Tween.TRANS_LINEAR` for cases where the first key of the track begins with a non-zero value or where the key value does not change, and `Tween.TRANS_QUAD` for cases where the key value changes linearly.
 * @param name StringName
 * @param duration float
 * @param transType int (optional, default: 0)
 * @param easeType int (optional, default: 0)
 */
  capture(name: StringName, duration: float, transType?: int, easeType?: int): void;
/**
 * `AnimationMixer` caches animated nodes. It may not notice if a node disappears; `clear_caches` forces it to update the cache again.
 */
  clearCaches(): void;
/**
 * Returns the key of `animation` or an empty `StringName` if not found.
 * @param animation Animation
 * @returns StringName
 */
  findAnimation(animation: Animation): StringName;
/**
 * Returns the key for the `AnimationLibrary` that contains `animation` or an empty `StringName` if not found.
 * @param animation Animation
 * @returns StringName
 */
  findAnimationLibrary(animation: Animation): StringName;
/**
 * Returns the `Animation` with the key `name`. If the animation does not exist, `null` is returned and an error is logged.
 * @param name StringName
 * @returns Animation
 */
  getAnimation(name: StringName): Animation;
/**
 * Returns the first `AnimationLibrary` with key `name` or `null` if not found.
 * To get the `AnimationMixer`'s global animation library, use `get_animation_library("")`.
 * @param name StringName
 * @returns AnimationLibrary
 */
  getAnimationLibrary(name: StringName): AnimationLibrary;
/**
 * Returns the list of stored library keys.
 * @returns StringName[]
 */
  getAnimationLibraryList(): StringName[];
/**
 * Returns the list of stored animation keys.
 * @returns PackedStringArray
 */
  getAnimationList(): PackedStringArray;
/**
 * Retrieve the motion delta of position with the `root_motion_track` as a `Vector3` that can be used elsewhere.
 * If `root_motion_track` is not a path to a track of type `Animation.TYPE_POSITION_3D`, returns `Vector3(0, 0, 0)`.
 * See also `root_motion_track` and `RootMotionView`.
 * The most basic example is applying position to `CharacterBody3D`:
 * 
 * 				```gdscript
 * 
 * 				var current_rotation
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        current_rotation = get_quaternion()
 * 				        state_machine.travel("Animate")
 * 				    var velocity = current_rotation * animation_tree.get_root_motion_position() / delta
 * 				    set_velocity(velocity)
 * 				    move_and_slide()
 * 				
 * 
 * ```
 * 
 * By using this in combination with `get_root_motion_rotation_accumulator`, you can apply the root motion position more correctly to account for the rotation of the node.
 * 
 * 				```gdscript
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        state_machine.travel("Animate")
 * 				    set_quaternion(get_quaternion() * animation_tree.get_root_motion_rotation())
 * 				    var velocity = (animation_tree.get_root_motion_rotation_accumulator().inverse() * get_quaternion()) * animation_tree.get_root_motion_position() / delta
 * 				    set_velocity(velocity)
 * 				    move_and_slide()
 * 				
 * 
 * ```
 * 
 * If `root_motion_local` is `true`, return the pre-multiplied translation value with the inverted rotation.
 * In this case, the code can be written as follows:
 * 
 * 				```gdscript
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        state_machine.travel("Animate")
 * 				    set_quaternion(get_quaternion() * animation_tree.get_root_motion_rotation())
 * 				    var velocity = get_quaternion() * animation_tree.get_root_motion_position() / delta
 * 				    set_velocity(velocity)
 * 				    move_and_slide()
 * 				
 * 
 * ```
 * 
 * @returns Vector3
 */
  getRootMotionPosition(): Vector3;
/**
 * Retrieve the blended value of the position tracks with the `root_motion_track` as a `Vector3` that can be used elsewhere.
 * This is useful in cases where you want to respect the initial key values of the animation.
 * For example, if an animation with only one key `Vector3(0, 0, 0)` is played in the previous frame and then an animation with only one key `Vector3(1, 0, 1)` is played in the next frame, the difference can be calculated as follows:
 * 
 * 				```gdscript
 * 
 * 				var prev_root_motion_position_accumulator
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        state_machine.travel("Animate")
 * 				    var current_root_motion_position_accumulator = animation_tree.get_root_motion_position_accumulator()
 * 				    var difference = current_root_motion_position_accumulator - prev_root_motion_position_accumulator
 * 				    prev_root_motion_position_accumulator = current_root_motion_position_accumulator
 * 				    transform.origin += difference
 * 				
 * 
 * ```
 * 
 * However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
 * @returns Vector3
 */
  getRootMotionPositionAccumulator(): Vector3;
/**
 * Retrieve the motion delta of rotation with the `root_motion_track` as a `Quaternion` that can be used elsewhere.
 * If `root_motion_track` is not a path to a track of type `Animation.TYPE_ROTATION_3D`, returns `Quaternion(0, 0, 0, 1)`.
 * See also `root_motion_track` and `RootMotionView`.
 * The most basic example is applying rotation to `CharacterBody3D`:
 * 
 * 				```gdscript
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        state_machine.travel("Animate")
 * 				    set_quaternion(get_quaternion() * animation_tree.get_root_motion_rotation())
 * 				
 * 
 * ```
 * 
 * @returns Quaternion
 */
  getRootMotionRotation(): Quaternion;
/**
 * Retrieve the blended value of the rotation tracks with the `root_motion_track` as a `Quaternion` that can be used elsewhere.
 * This is necessary to apply the root motion position correctly, taking rotation into account. See also `get_root_motion_position`.
 * Also, this is useful in cases where you want to respect the initial key values of the animation.
 * For example, if an animation with only one key `Quaternion(0, 0, 0, 1)` is played in the previous frame and then an animation with only one key `Quaternion(0, 0.707, 0, 0.707)` is played in the next frame, the difference can be calculated as follows:
 * 
 * 				```gdscript
 * 
 * 				var prev_root_motion_rotation_accumulator
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        state_machine.travel("Animate")
 * 				    var current_root_motion_rotation_accumulator = animation_tree.get_root_motion_rotation_accumulator()
 * 				    var difference = prev_root_motion_rotation_accumulator.inverse() * current_root_motion_rotation_accumulator
 * 				    prev_root_motion_rotation_accumulator = current_root_motion_rotation_accumulator
 * 				    transform.basis *=  Basis(difference)
 * 				
 * 
 * ```
 * 
 * However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
 * @returns Quaternion
 */
  getRootMotionRotationAccumulator(): Quaternion;
/**
 * Retrieve the motion delta of scale with the `root_motion_track` as a `Vector3` that can be used elsewhere.
 * If `root_motion_track` is not a path to a track of type `Animation.TYPE_SCALE_3D`, returns `Vector3(0, 0, 0)`.
 * See also `root_motion_track` and `RootMotionView`.
 * The most basic example is applying scale to `CharacterBody3D`:
 * 
 * 				```gdscript
 * 
 * 				var current_scale = Vector3(1, 1, 1)
 * 				var scale_accum = Vector3(1, 1, 1)
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        current_scale = get_scale()
 * 				        scale_accum = Vector3(1, 1, 1)
 * 				        state_machine.travel("Animate")
 * 				    scale_accum += animation_tree.get_root_motion_scale()
 * 				    set_scale(current_scale * scale_accum)
 * 				
 * 
 * ```
 * 
 * @returns Vector3
 */
  getRootMotionScale(): Vector3;
/**
 * Retrieve the blended value of the scale tracks with the `root_motion_track` as a `Vector3` that can be used elsewhere.
 * For example, if an animation with only one key `Vector3(1, 1, 1)` is played in the previous frame and then an animation with only one key `Vector3(2, 2, 2)` is played in the next frame, the difference can be calculated as follows:
 * 
 * 				```gdscript
 * 
 * 				var prev_root_motion_scale_accumulator
 * 
 * 				func _process(delta):
 * 				    if Input.is_action_just_pressed("animate"):
 * 				        state_machine.travel("Animate")
 * 				    var current_root_motion_scale_accumulator = animation_tree.get_root_motion_scale_accumulator()
 * 				    var difference = current_root_motion_scale_accumulator - prev_root_motion_scale_accumulator
 * 				    prev_root_motion_scale_accumulator = current_root_motion_scale_accumulator
 * 				    transform.basis = transform.basis.scaled(difference)
 * 				
 * 
 * ```
 * 
 * However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
 * @returns Vector3
 */
  getRootMotionScaleAccumulator(): Vector3;
/**
 * Returns `true` if the `AnimationMixer` stores an `Animation` with key `name`.
 * @param name StringName
 * @returns boolean
 */
  hasAnimation(name: StringName): boolean;
/**
 * Returns `true` if the `AnimationMixer` stores an `AnimationLibrary` with key `name`.
 * @param name StringName
 * @returns boolean
 */
  hasAnimationLibrary(name: StringName): boolean;
/**
 * A virtual function for processing after getting a key during playback.
 * @param animation Animation
 * @param track int
 * @param value Variant
 * @param objectId int
 * @param objectSubIdx int
 * @returns Variant
 */
  private postProcessKeyValue(animation: Animation, track: int, value: Variant, objectId: int, objectSubIdx: int): Variant;
/**
 * Removes the `AnimationLibrary` associated with the key `name`.
 * @param name StringName
 */
  removeAnimationLibrary(name: StringName): void;
/**
 * Moves the `AnimationLibrary` associated with the key `name` to the key `newname`.
 * @param name StringName
 * @param newname StringName
 */
  renameAnimationLibrary(name: StringName, newname: StringName): void;
/**
 * Notifies when an animation finished playing.
 * 
 * **Note:** This signal is not emitted if an animation is looping.
 */
  animationFinished: Signal<[animName: StringName]>;
/**
 * Notifies when the animation libraries have changed.
 */
  animationLibrariesUpdated: Signal<[]>;
/**
 * Notifies when an animation list is changed.
 */
  animationListChanged: Signal<[]>;
/**
 * Notifies when an animation starts playing.
 */
  animationStarted: Signal<[animName: StringName]>;
/**
 * Notifies when the caches have been cleared, either automatically, or manually via `clear_caches`.
 */
  cachesCleared: Signal<[]>;
/**
 * Notifies when the blending result related have been applied to the target objects.
 */
  mixerApplied: Signal<[]>;
/**
 * Notifies when the property related process have been updated.
 */
  mixerUpdated: Signal<[]>;
/**
 * Process animation during physics frames (see `Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`). This is especially useful when animating physics bodies.
 */
  static readonly ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS: int;
/**
 * Process animation during process frames (see `Node.NOTIFICATION_INTERNAL_PROCESS`).
 */
  static readonly ANIMATION_CALLBACK_MODE_PROCESS_IDLE: int;
/**
 * Do not process animation. Use `advance` to process the animation manually.
 */
  static readonly ANIMATION_CALLBACK_MODE_PROCESS_MANUAL: int;
/**
 * Batch method calls during the animation process, then do the calls after events are processed. This avoids bugs involving deleting nodes or modifying the AnimationPlayer while playing.
 */
  static readonly ANIMATION_CALLBACK_MODE_METHOD_DEFERRED: int;
/**
 * Make method calls immediately when reached in the animation.
 */
  static readonly ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE: int;
/**
 * An `Animation.UPDATE_DISCRETE` track value takes precedence when blending `Animation.UPDATE_CONTINUOUS` or `Animation.UPDATE_CAPTURE` track values and `Animation.UPDATE_DISCRETE` track values.
 */
  static readonly ANIMATION_CALLBACK_MODE_DISCRETE_DOMINANT: int;
/**
 * An `Animation.UPDATE_CONTINUOUS` or `Animation.UPDATE_CAPTURE` track value takes precedence when blending the `Animation.UPDATE_CONTINUOUS` or `Animation.UPDATE_CAPTURE` track values and the `Animation.UPDATE_DISCRETE` track values. This is the default behavior for `AnimationPlayer`.
 */
  static readonly ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE: int;
/**
 * Always treat the `Animation.UPDATE_DISCRETE` track value as `Animation.UPDATE_CONTINUOUS` with `Animation.INTERPOLATION_NEAREST`. This is the default behavior for `AnimationTree`.
 * If a value track has un-interpolatable type key values, it is internally converted to use `ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE` with `Animation.UPDATE_DISCRETE`.
 * Un-interpolatable type list:
 * - `@GlobalScope.TYPE_NIL`
 * - `@GlobalScope.TYPE_NODE_PATH`
 * - `@GlobalScope.TYPE_RID`
 * - `@GlobalScope.TYPE_OBJECT`
 * - `@GlobalScope.TYPE_CALLABLE`
 * - `@GlobalScope.TYPE_SIGNAL`
 * - `@GlobalScope.TYPE_DICTIONARY`
 * - `@GlobalScope.TYPE_PACKED_BYTE_ARRAY`
 * `@GlobalScope.TYPE_BOOL` and `@GlobalScope.TYPE_INT` are treated as `@GlobalScope.TYPE_FLOAT` during blending and rounded when the result is retrieved.
 * It is same for arrays and vectors with them such as `@GlobalScope.TYPE_PACKED_INT32_ARRAY` or `@GlobalScope.TYPE_VECTOR2I`, they are treated as `@GlobalScope.TYPE_PACKED_FLOAT32_ARRAY` or `@GlobalScope.TYPE_VECTOR2`. Also note that for arrays, the size is also interpolated.
 * `@GlobalScope.TYPE_STRING` and `@GlobalScope.TYPE_STRING_NAME` are interpolated between character codes and lengths, but note that there is a difference in algorithm between interpolation between keys and interpolation by blending.
 */
  static readonly ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS: int;
}
