import type { Color, GodotArray, GodotDictionary, NodePath, PackedStringArray, Quaternion, Resource, StringName, Variant, Vector2, Vector3, float, int } from "../index.d.ts";
/**
 * Holds data that can be used to animate anything in the engine.
 * 
 * This resource holds data that can be used to animate anything in the engine. Animations are divided into tracks and each track must be linked to a node. The state of that node can be changed through time, by adding timed keys (events) to the track.
 * 
 * 		```gdscript
 * 
 * 		# This creates an animation that makes the node "Enemy" move to the right by
 * 		# 100 pixels in 2.0 seconds.
 * 		var animation = Animation.new()
 * 		var track_index = animation.add_track(Animation.TYPE_VALUE)
 * 		animation.track_set_path(track_index, "Enemy:position:x")
 * 		animation.track_insert_key(track_index, 0.0, 0)
 * 		animation.track_insert_key(track_index, 2.0, 100)
 * 		animation.length = 2.0
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// This creates an animation that makes the node "Enemy" move to the right by
 * 		// 100 pixels in 2.0 seconds.
 * 		var animation = new Animation();
 * 		int trackIndex = animation.AddTrack(Animation.TrackType.Value);
 * 		animation.TrackSetPath(trackIndex, "Enemy:position:x");
 * 		animation.TrackInsertKey(trackIndex, 0.0f, 0);
 * 		animation.TrackInsertKey(trackIndex, 2.0f, 100);
 * 		animation.Length = 2.0f;
 * 		
 * 
 * ```
 * 
 * Animations are just data containers, and must be added to nodes such as an `AnimationPlayer` to be played back. Animation tracks have different types, each with its own set of dedicated methods. Check `TrackType` to see available types.
 * 
 * **Note:** For 3D position/rotation/scale, using the dedicated `TYPE_POSITION_3D`, `TYPE_ROTATION_3D` and `TYPE_SCALE_3D` track types instead of `TYPE_VALUE` is recommended for performance reasons.
 */
export class Animation extends Resource {
/**
 * Returns `true` if the capture track is included. This is a cached readonly value for performance.
 */
  captureIncluded: boolean;
/**
 * The total length of the animation (in seconds).
 * 
 * **Note:** Length is not delimited by the last key, as this one may be before or after the end to ensure correct interpolation and looping.
 */
  length: float;
/**
 * Determines the behavior of both ends of the animation timeline during animation playback. This is used for correct interpolation of animation cycles, and for hinting the player that it must restart the animation.
 */
  loopMode: int;
/**
 * The animation step value.
 */
  step: float;
/**
 * Adds a marker to this Animation.
 * @param name StringName
 * @param time float
 */
  addMarker(name: StringName, time: float): void;
/**
 * Adds a track to the Animation.
 * @param type_ int
 * @param atPosition int (optional, default: -1)
 * @returns int
 */
  addTrack(type_: int, atPosition?: int): int;
/**
 * Returns the animation name at the key identified by `key_idx`. The `track_idx` must be the index of an Animation Track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns StringName
 */
  animationTrackGetKeyAnimation(trackIdx: int, keyIdx: int): StringName;
/**
 * Inserts a key with value `animation` at the given `time` (in seconds). The `track_idx` must be the index of an Animation Track.
 * @param trackIdx int
 * @param time float
 * @param animation StringName
 * @returns int
 */
  animationTrackInsertKey(trackIdx: int, time: float, animation: StringName): int;
/**
 * Sets the key identified by `key_idx` to value `animation`. The `track_idx` must be the index of an Animation Track.
 * @param trackIdx int
 * @param keyIdx int
 * @param animation StringName
 */
  animationTrackSetKeyAnimation(trackIdx: int, keyIdx: int, animation: StringName): void;
/**
 * Returns the end offset of the key identified by `key_idx`. The `track_idx` must be the index of an Audio Track.
 * End offset is the number of seconds cut off at the ending of the audio stream.
 * @param trackIdx int
 * @param keyIdx int
 * @returns float
 */
  audioTrackGetKeyEndOffset(trackIdx: int, keyIdx: int): float;
/**
 * Returns the start offset of the key identified by `key_idx`. The `track_idx` must be the index of an Audio Track.
 * Start offset is the number of seconds cut off at the beginning of the audio stream.
 * @param trackIdx int
 * @param keyIdx int
 * @returns float
 */
  audioTrackGetKeyStartOffset(trackIdx: int, keyIdx: int): float;
/**
 * Returns the audio stream of the key identified by `key_idx`. The `track_idx` must be the index of an Audio Track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns Resource
 */
  audioTrackGetKeyStream(trackIdx: int, keyIdx: int): Resource;
/**
 * Inserts an Audio Track key at the given `time` in seconds. The `track_idx` must be the index of an Audio Track.
 * `stream` is the `AudioStream` resource to play. `start_offset` is the number of seconds cut off at the beginning of the audio stream, while `end_offset` is at the ending.
 * @param trackIdx int
 * @param time float
 * @param stream Resource
 * @param startOffset float (optional, default: 0)
 * @param endOffset float (optional, default: 0)
 * @returns int
 */
  audioTrackInsertKey(trackIdx: int, time: float, stream: Resource, startOffset?: float, endOffset?: float): int;
/**
 * Returns `true` if the track at `track_idx` will be blended with other animations.
 * @param trackIdx int
 * @returns boolean
 */
  audioTrackIsUseBlend(trackIdx: int): boolean;
/**
 * Sets the end offset of the key identified by `key_idx` to value `offset`. The `track_idx` must be the index of an Audio Track.
 * @param trackIdx int
 * @param keyIdx int
 * @param offset float
 */
  audioTrackSetKeyEndOffset(trackIdx: int, keyIdx: int, offset: float): void;
/**
 * Sets the start offset of the key identified by `key_idx` to value `offset`. The `track_idx` must be the index of an Audio Track.
 * @param trackIdx int
 * @param keyIdx int
 * @param offset float
 */
  audioTrackSetKeyStartOffset(trackIdx: int, keyIdx: int, offset: float): void;
/**
 * Sets the stream of the key identified by `key_idx` to value `stream`. The `track_idx` must be the index of an Audio Track.
 * @param trackIdx int
 * @param keyIdx int
 * @param stream Resource
 */
  audioTrackSetKeyStream(trackIdx: int, keyIdx: int, stream: Resource): void;
/**
 * Sets whether the track will be blended with other animations. If `true`, the audio playback volume changes depending on the blend value.
 * @param trackIdx int
 * @param enable boolean
 */
  audioTrackSetUseBlend(trackIdx: int, enable: boolean): void;
/**
 * Returns the in handle of the key identified by `key_idx`. The `track_idx` must be the index of a Bezier Track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns Vector2
 */
  bezierTrackGetKeyInHandle(trackIdx: int, keyIdx: int): Vector2;
/**
 * Returns the out handle of the key identified by `key_idx`. The `track_idx` must be the index of a Bezier Track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns Vector2
 */
  bezierTrackGetKeyOutHandle(trackIdx: int, keyIdx: int): Vector2;
/**
 * Returns the value of the key identified by `key_idx`. The `track_idx` must be the index of a Bezier Track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns float
 */
  bezierTrackGetKeyValue(trackIdx: int, keyIdx: int): float;
/**
 * Inserts a Bezier Track key at the given `time` in seconds. The `track_idx` must be the index of a Bezier Track.
 * `in_handle` is the left-side weight of the added Bezier curve point, `out_handle` is the right-side one, while `value` is the actual value at this point.
 * @param trackIdx int
 * @param time float
 * @param value float
 * @param inHandle Vector2 (optional, default: Vector2(0, 0))
 * @param outHandle Vector2 (optional, default: Vector2(0, 0))
 * @returns int
 */
  bezierTrackInsertKey(trackIdx: int, time: float, value: float, inHandle?: Vector2, outHandle?: Vector2): int;
/**
 * Returns the interpolated value at the given `time` (in seconds). The `track_idx` must be the index of a Bezier Track.
 * @param trackIdx int
 * @param time float
 * @returns float
 */
  bezierTrackInterpolate(trackIdx: int, time: float): float;
/**
 * Sets the in handle of the key identified by `key_idx` to value `in_handle`. The `track_idx` must be the index of a Bezier Track.
 * @param trackIdx int
 * @param keyIdx int
 * @param inHandle Vector2
 * @param balancedValueTimeRatio float (optional, default: 1.0)
 */
  bezierTrackSetKeyInHandle(trackIdx: int, keyIdx: int, inHandle: Vector2, balancedValueTimeRatio?: float): void;
/**
 * Sets the out handle of the key identified by `key_idx` to value `out_handle`. The `track_idx` must be the index of a Bezier Track.
 * @param trackIdx int
 * @param keyIdx int
 * @param outHandle Vector2
 * @param balancedValueTimeRatio float (optional, default: 1.0)
 */
  bezierTrackSetKeyOutHandle(trackIdx: int, keyIdx: int, outHandle: Vector2, balancedValueTimeRatio?: float): void;
/**
 * Sets the value of the key identified by `key_idx` to the given value. The `track_idx` must be the index of a Bezier Track.
 * @param trackIdx int
 * @param keyIdx int
 * @param value float
 */
  bezierTrackSetKeyValue(trackIdx: int, keyIdx: int, value: float): void;
/**
 * Inserts a key in a given blend shape track. Returns the key index.
 * @param trackIdx int
 * @param time float
 * @param amount float
 * @returns int
 */
  blendShapeTrackInsertKey(trackIdx: int, time: float, amount: float): int;
/**
 * Returns the interpolated blend shape value at the given time (in seconds). The `track_idx` must be the index of a blend shape track.
 * @param trackIdx int
 * @param timeSec float
 * @param backward boolean (optional, default: false)
 * @returns float
 */
  blendShapeTrackInterpolate(trackIdx: int, timeSec: float, backward?: boolean): float;
/**
 * Clear the animation (clear all tracks and reset all).
 */
  clear(): void;
/**
 * Compress the animation and all its tracks in-place. This will make `track_is_compressed` return `true` once called on this `Animation`. Compressed tracks require less memory to be played, and are designed to be used for complex 3D animations (such as cutscenes) imported from external 3D software. Compression is lossy, but the difference is usually not noticeable in real world conditions.
 * 
 * **Note:** Compressed tracks have various limitations (such as not being editable from the editor), so only use compressed animations if you actually need them.
 * @param pageSize int (optional, default: 8192)
 * @param fps int (optional, default: 120)
 * @param splitTolerance float (optional, default: 4.0)
 */
  compress(pageSize?: int, fps?: int, splitTolerance?: float): void;
/**
 * Adds a new track to `to_animation` that is a copy of the given track from this animation.
 * @param trackIdx int
 * @param toAnimation Animation
 */
  copyTrack(trackIdx: int, toAnimation: Animation): void;
/**
 * Returns the index of the specified track. If the track is not found, return -1.
 * @param path NodePath
 * @param type_ int
 * @returns int
 */
  findTrack(path: NodePath, type_: int): int;
/**
 * Returns the name of the marker located at the given time.
 * @param time float
 * @returns StringName
 */
  getMarkerAtTime(time: float): StringName;
/**
 * Returns the given marker's color.
 * @param name StringName
 * @returns Color
 */
  getMarkerColor(name: StringName): Color;
/**
 * Returns every marker in this Animation, sorted ascending by time.
 * @returns PackedStringArray
 */
  getMarkerNames(): PackedStringArray;
/**
 * Returns the given marker's time.
 * @param name StringName
 * @returns float
 */
  getMarkerTime(name: StringName): float;
/**
 * Returns the closest marker that comes after the given time. If no such marker exists, an empty string is returned.
 * @param time float
 * @returns StringName
 */
  getNextMarker(time: float): StringName;
/**
 * Returns the closest marker that comes before the given time. If no such marker exists, an empty string is returned.
 * @param time float
 * @returns StringName
 */
  getPrevMarker(time: float): StringName;
/**
 * Returns the amount of tracks in the animation.
 * @returns int
 */
  getTrackCount(): int;
/**
 * Returns `true` if this Animation contains a marker with the given name.
 * @param name StringName
 * @returns boolean
 */
  hasMarker(name: StringName): boolean;
/**
 * Returns the method name of a method track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns StringName
 */
  methodTrackGetName(trackIdx: int, keyIdx: int): StringName;
/**
 * Returns the arguments values to be called on a method track for a given key in a given track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns GodotArray<any>
 */
  methodTrackGetParams(trackIdx: int, keyIdx: int): GodotArray<any>;
/**
 * Optimize the animation and all its tracks in-place. This will preserve only as many keys as are necessary to keep the animation within the specified bounds.
 * @param allowedVelocityErr float (optional, default: 0.01)
 * @param allowedAngularErr float (optional, default: 0.01)
 * @param precision int (optional, default: 3)
 */
  optimize(allowedVelocityErr?: float, allowedAngularErr?: float, precision?: int): void;
/**
 * Inserts a key in a given 3D position track. Returns the key index.
 * @param trackIdx int
 * @param time float
 * @param position Vector3
 * @returns int
 */
  positionTrackInsertKey(trackIdx: int, time: float, position: Vector3): int;
/**
 * Returns the interpolated position value at the given time (in seconds). The `track_idx` must be the index of a 3D position track.
 * @param trackIdx int
 * @param timeSec float
 * @param backward boolean (optional, default: false)
 * @returns Vector3
 */
  positionTrackInterpolate(trackIdx: int, timeSec: float, backward?: boolean): Vector3;
/**
 * Removes the marker with the given name from this Animation.
 * @param name StringName
 */
  removeMarker(name: StringName): void;
/**
 * Removes a track by specifying the track index.
 * @param trackIdx int
 */
  removeTrack(trackIdx: int): void;
/**
 * Inserts a key in a given 3D rotation track. Returns the key index.
 * @param trackIdx int
 * @param time float
 * @param rotation Quaternion
 * @returns int
 */
  rotationTrackInsertKey(trackIdx: int, time: float, rotation: Quaternion): int;
/**
 * Returns the interpolated rotation value at the given time (in seconds). The `track_idx` must be the index of a 3D rotation track.
 * @param trackIdx int
 * @param timeSec float
 * @param backward boolean (optional, default: false)
 * @returns Quaternion
 */
  rotationTrackInterpolate(trackIdx: int, timeSec: float, backward?: boolean): Quaternion;
/**
 * Inserts a key in a given 3D scale track. Returns the key index.
 * @param trackIdx int
 * @param time float
 * @param scale Vector3
 * @returns int
 */
  scaleTrackInsertKey(trackIdx: int, time: float, scale: Vector3): int;
/**
 * Returns the interpolated scale value at the given time (in seconds). The `track_idx` must be the index of a 3D scale track.
 * @param trackIdx int
 * @param timeSec float
 * @param backward boolean (optional, default: false)
 * @returns Vector3
 */
  scaleTrackInterpolate(trackIdx: int, timeSec: float, backward?: boolean): Vector3;
/**
 * Sets the given marker's color.
 * @param name StringName
 * @param color Color
 */
  setMarkerColor(name: StringName, color: Color): void;
/**
 * Finds the key index by time in a given track. Optionally, only find it if the approx/exact time is given.
 * If `limit` is `true`, it does not return keys outside the animation range.
 * If `backward` is `true`, the direction is reversed in methods that rely on one directional processing.
 * For example, in case `find_mode` is `FIND_MODE_NEAREST`, if there is no key in the current position just after seeked, the first key found is retrieved by searching before the position, but if `backward` is `true`, the first key found is retrieved after the position.
 * @param trackIdx int
 * @param time float
 * @param findMode int (optional, default: 0)
 * @param limit boolean (optional, default: false)
 * @param backward boolean (optional, default: false)
 * @returns int
 */
  trackFindKey(trackIdx: int, time: float, findMode?: int, limit?: boolean, backward?: boolean): int;
/**
 * Returns `true` if the track at `track_idx` wraps the interpolation loop. New tracks wrap the interpolation loop by default.
 * @param trackIdx int
 * @returns boolean
 */
  trackGetInterpolationLoopWrap(trackIdx: int): boolean;
/**
 * Returns the interpolation type of a given track.
 * @param trackIdx int
 * @returns int
 */
  trackGetInterpolationType(trackIdx: int): int;
/**
 * Returns the number of keys in a given track.
 * @param trackIdx int
 * @returns int
 */
  trackGetKeyCount(trackIdx: int): int;
/**
 * Returns the time at which the key is located.
 * @param trackIdx int
 * @param keyIdx int
 * @returns float
 */
  trackGetKeyTime(trackIdx: int, keyIdx: int): float;
/**
 * Returns the transition curve (easing) for a specific key (see the built-in math function `@GlobalScope.ease`).
 * @param trackIdx int
 * @param keyIdx int
 * @returns float
 */
  trackGetKeyTransition(trackIdx: int, keyIdx: int): float;
/**
 * Returns the value of a given key in a given track.
 * @param trackIdx int
 * @param keyIdx int
 * @returns Variant
 */
  trackGetKeyValue(trackIdx: int, keyIdx: int): Variant;
/**
 * Gets the path of a track. For more information on the path format, see `track_set_path`.
 * @param trackIdx int
 * @returns NodePath
 */
  trackGetPath(trackIdx: int): NodePath;
/**
 * Gets the type of a track.
 * @param trackIdx int
 * @returns int
 */
  trackGetType(trackIdx: int): int;
/**
 * Inserts a generic key in a given track. Returns the key index.
 * @param trackIdx int
 * @param time float
 * @param key Variant
 * @param transition float (optional, default: 1)
 * @returns int
 */
  trackInsertKey(trackIdx: int, time: float, key: Variant, transition?: float): int;
/**
 * Returns `true` if the track is compressed, `false` otherwise. See also `compress`.
 * @param trackIdx int
 * @returns boolean
 */
  trackIsCompressed(trackIdx: int): boolean;
/**
 * Returns `true` if the track at index `track_idx` is enabled.
 * @param trackIdx int
 * @returns boolean
 */
  trackIsEnabled(trackIdx: int): boolean;
/**
 * Returns `true` if the given track is imported. Else, return `false`.
 * @param trackIdx int
 * @returns boolean
 */
  trackIsImported(trackIdx: int): boolean;
/**
 * Moves a track down.
 * @param trackIdx int
 */
  trackMoveDown(trackIdx: int): void;
/**
 * Changes the index position of track `track_idx` to the one defined in `to_idx`.
 * @param trackIdx int
 * @param toIdx int
 */
  trackMoveTo(trackIdx: int, toIdx: int): void;
/**
 * Moves a track up.
 * @param trackIdx int
 */
  trackMoveUp(trackIdx: int): void;
/**
 * Removes a key by index in a given track.
 * @param trackIdx int
 * @param keyIdx int
 */
  trackRemoveKey(trackIdx: int, keyIdx: int): void;
/**
 * Removes a key at `time` in a given track.
 * @param trackIdx int
 * @param time float
 */
  trackRemoveKeyAtTime(trackIdx: int, time: float): void;
/**
 * Enables/disables the given track. Tracks are enabled by default.
 * @param trackIdx int
 * @param enabled boolean
 */
  trackSetEnabled(trackIdx: int, enabled: boolean): void;
/**
 * Sets the given track as imported or not.
 * @param trackIdx int
 * @param imported boolean
 */
  trackSetImported(trackIdx: int, imported: boolean): void;
/**
 * If `true`, the track at `track_idx` wraps the interpolation loop.
 * @param trackIdx int
 * @param interpolation boolean
 */
  trackSetInterpolationLoopWrap(trackIdx: int, interpolation: boolean): void;
/**
 * Sets the interpolation type of a given track.
 * @param trackIdx int
 * @param interpolation int
 */
  trackSetInterpolationType(trackIdx: int, interpolation: int): void;
/**
 * Sets the time of an existing key.
 * @param trackIdx int
 * @param keyIdx int
 * @param time float
 */
  trackSetKeyTime(trackIdx: int, keyIdx: int, time: float): void;
/**
 * Sets the transition curve (easing) for a specific key (see the built-in math function `@GlobalScope.ease`).
 * @param trackIdx int
 * @param keyIdx int
 * @param transition float
 */
  trackSetKeyTransition(trackIdx: int, keyIdx: int, transition: float): void;
/**
 * Sets the value of an existing key.
 * @param trackIdx int
 * @param key int
 * @param value Variant
 */
  trackSetKeyValue(trackIdx: int, key: int, value: Variant): void;
/**
 * Sets the path of a track. Paths must be valid scene-tree paths to a node and must be specified starting from the `AnimationMixer.root_node` that will reproduce the animation. Tracks that control properties or bones must append their name after the path, separated by `":"`.
 * For example, `"character/skeleton:ankle"` or `"character/mesh:transform/local"`.
 * @param trackIdx int
 * @param path NodePath
 */
  trackSetPath(trackIdx: int, path: NodePath): void;
/**
 * Swaps the track `track_idx`'s index position with the track `with_idx`.
 * @param trackIdx int
 * @param withIdx int
 */
  trackSwap(trackIdx: int, withIdx: int): void;
/**
 * Returns the update mode of a value track.
 * @param trackIdx int
 * @returns int
 */
  valueTrackGetUpdateMode(trackIdx: int): int;
/**
 * Returns the interpolated value at the given time (in seconds). The `track_idx` must be the index of a value track.
 * A `backward` mainly affects the direction of key retrieval of the track with `UPDATE_DISCRETE` converted by `AnimationMixer.ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS` to match the result with `track_find_key`.
 * @param trackIdx int
 * @param timeSec float
 * @param backward boolean (optional, default: false)
 * @returns Variant
 */
  valueTrackInterpolate(trackIdx: int, timeSec: float, backward?: boolean): Variant;
/**
 * Sets the update mode (see `UpdateMode`) of a value track.
 * @param trackIdx int
 * @param mode int
 */
  valueTrackSetUpdateMode(trackIdx: int, mode: int): void;
/**
 * Value tracks set values in node properties, but only those which can be interpolated. For 3D position/rotation/scale, using the dedicated `TYPE_POSITION_3D`, `TYPE_ROTATION_3D` and `TYPE_SCALE_3D` track types instead of `TYPE_VALUE` is recommended for performance reasons.
 */
  static readonly TYPE_VALUE: int;
/**
 * 3D position track (values are stored in `Vector3`s).
 */
  static readonly TYPE_POSITION_3D: int;
/**
 * 3D rotation track (values are stored in `Quaternion`s).
 */
  static readonly TYPE_ROTATION_3D: int;
/**
 * 3D scale track (values are stored in `Vector3`s).
 */
  static readonly TYPE_SCALE_3D: int;
/**
 * Blend shape track.
 */
  static readonly TYPE_BLEND_SHAPE: int;
/**
 * Method tracks call functions with given arguments per key.
 */
  static readonly TYPE_METHOD: int;
/**
 * Bezier tracks are used to interpolate a value using custom curves. They can also be used to animate sub-properties of vectors and colors (e.g. alpha value of a `Color`).
 */
  static readonly TYPE_BEZIER: int;
/**
 * Audio tracks are used to play an audio stream with either type of `AudioStreamPlayer`. The stream can be trimmed and previewed in the animation.
 */
  static readonly TYPE_AUDIO: int;
/**
 * Animation tracks play animations in other `AnimationPlayer` nodes.
 */
  static readonly TYPE_ANIMATION: int;
/**
 * No interpolation (nearest value).
 */
  static readonly INTERPOLATION_NEAREST: int;
/**
 * Linear interpolation.
 */
  static readonly INTERPOLATION_LINEAR: int;
/**
 * Cubic interpolation. This looks smoother than linear interpolation, but is more expensive to interpolate. Stick to `INTERPOLATION_LINEAR` for complex 3D animations imported from external software, even if it requires using a higher animation framerate in return.
 */
  static readonly INTERPOLATION_CUBIC: int;
/**
 * Linear interpolation with shortest path rotation.
 * 
 * **Note:** The result value is always normalized and may not match the key value.
 */
  static readonly INTERPOLATION_LINEAR_ANGLE: int;
/**
 * Cubic interpolation with shortest path rotation.
 * 
 * **Note:** The result value is always normalized and may not match the key value.
 */
  static readonly INTERPOLATION_CUBIC_ANGLE: int;
/**
 * Update between keyframes and hold the value.
 */
  static readonly UPDATE_CONTINUOUS: int;
/**
 * Update at the keyframes.
 */
  static readonly UPDATE_DISCRETE: int;
/**
 * Same as `UPDATE_CONTINUOUS` but works as a flag to capture the value of the current object and perform interpolation in some methods. See also `AnimationMixer.capture`, `AnimationPlayer.playback_auto_capture`, and `AnimationPlayer.play_with_capture`.
 */
  static readonly UPDATE_CAPTURE: int;
/**
 * At both ends of the animation, the animation will stop playing.
 */
  static readonly LOOP_NONE: int;
/**
 * At both ends of the animation, the animation will be repeated without changing the playback direction.
 */
  static readonly LOOP_LINEAR: int;
/**
 * Repeats playback and reverse playback at both ends of the animation.
 */
  static readonly LOOP_PINGPONG: int;
/**
 * This flag indicates that the animation proceeds without any looping.
 */
  static readonly LOOPED_FLAG_NONE: int;
/**
 * This flag indicates that the animation has reached the end of the animation and just after loop processed.
 */
  static readonly LOOPED_FLAG_END: int;
/**
 * This flag indicates that the animation has reached the start of the animation and just after loop processed.
 */
  static readonly LOOPED_FLAG_START: int;
/**
 * Finds the nearest time key.
 */
  static readonly FIND_MODE_NEAREST: int;
/**
 * Finds only the key with approximating the time.
 */
  static readonly FIND_MODE_APPROX: int;
/**
 * Finds only the key with matching the time.
 */
  static readonly FIND_MODE_EXACT: int;
}
