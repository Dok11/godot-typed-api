import type { GodotArray, GodotDictionary, PackedStringArray, Resource, StringName, Texture2D, float, int } from "../index.d.ts";
/**
 * Sprite frame library for AnimatedSprite2D and AnimatedSprite3D.
 * 
 * Sprite frame library for an `AnimatedSprite2D` or `AnimatedSprite3D` node. Contains frames and animation data for playback.
 */
export class SpriteFrames extends Resource {
/**
 * Adds a new `anim` animation to the library.
 * @param anim StringName
 */
  addAnimation(anim: StringName): void;
/**
 * Adds a frame to the `anim` animation. If `at_position` is `-1`, the frame will be added to the end of the animation. `duration` specifies the relative duration, see `get_frame_duration` for details.
 * @param anim StringName
 * @param texture Texture2D
 * @param duration float (optional, default: 1.0)
 * @param atPosition int (optional, default: -1)
 */
  addFrame(anim: StringName, texture: Texture2D, duration?: float, atPosition?: int): void;
/**
 * Removes all frames from the `anim` animation.
 * @param anim StringName
 */
  clear(anim: StringName): void;
/**
 * Removes all animations. An empty `default` animation will be created.
 */
  clearAll(): void;
/**
 * Duplicates the animation `anim_from` to a new animation named `anim_to`. Fails if `anim_to` already exists, or if `anim_from` does not exist.
 * @param animFrom StringName
 * @param animTo StringName
 */
  duplicateAnimation(animFrom: StringName, animTo: StringName): void;
/**
 * Returns `true` if the given animation is configured to loop when it finishes playing. Otherwise, returns `false`.
 * @param anim StringName
 * @returns boolean
 */
  getAnimationLoop(anim: StringName): boolean;
/**
 * Returns an array containing the names associated to each animation. Values are placed in alphabetical order.
 * @returns PackedStringArray
 */
  getAnimationNames(): PackedStringArray;
/**
 * Returns the speed in frames per second for the `anim` animation.
 * @param anim StringName
 * @returns float
 */
  getAnimationSpeed(anim: StringName): float;
/**
 * Returns the number of frames for the `anim` animation.
 * @param anim StringName
 * @returns int
 */
  getFrameCount(anim: StringName): int;
/**
 * Returns a relative duration of the frame `idx` in the `anim` animation (defaults to `1.0`). For example, a frame with a duration of `2.0` is displayed twice as long as a frame with a duration of `1.0`. You can calculate the absolute duration (in seconds) of a frame using the following formula:
 * 
 * 				```gdscript
 * 
 * 				absolute_duration = relative_duration / (animation_fps * abs(playing_speed))
 * 				
 * 
 * ```
 * In this example, `playing_speed` refers to either `AnimatedSprite2D.get_playing_speed` or `AnimatedSprite3D.get_playing_speed`.
 * @param anim StringName
 * @param idx int
 * @returns float
 */
  getFrameDuration(anim: StringName, idx: int): float;
/**
 * Returns the texture of the frame `idx` in the `anim` animation.
 * @param anim StringName
 * @param idx int
 * @returns Texture2D
 */
  getFrameTexture(anim: StringName, idx: int): Texture2D;
/**
 * Returns `true` if the `anim` animation exists.
 * @param anim StringName
 * @returns boolean
 */
  hasAnimation(anim: StringName): boolean;
/**
 * Removes the `anim` animation.
 * @param anim StringName
 */
  removeAnimation(anim: StringName): void;
/**
 * Removes the `anim` animation's frame `idx`.
 * @param anim StringName
 * @param idx int
 */
  removeFrame(anim: StringName, idx: int): void;
/**
 * Changes the `anim` animation's name to `newname`.
 * @param anim StringName
 * @param newname StringName
 */
  renameAnimation(anim: StringName, newname: StringName): void;
/**
 * If `loop` is `true`, the `anim` animation will loop when it reaches the end, or the start if it is played in reverse.
 * @param anim StringName
 * @param loop boolean
 */
  setAnimationLoop(anim: StringName, loop: boolean): void;
/**
 * Sets the speed for the `anim` animation in frames per second.
 * @param anim StringName
 * @param fps float
 */
  setAnimationSpeed(anim: StringName, fps: float): void;
/**
 * Sets the `texture` and the `duration` of the frame `idx` in the `anim` animation. `duration` specifies the relative duration, see `get_frame_duration` for details.
 * @param anim StringName
 * @param idx int
 * @param texture Texture2D
 * @param duration float (optional, default: 1.0)
 */
  setFrame(anim: StringName, idx: int, texture: Texture2D, duration?: float): void;
}
