import type { GodotArray, GodotDictionary, Signal, SpriteBase3D, SpriteFrames, StringName, float, int } from "../index.d.ts";
/**
 * 2D sprite node in 3D world, that can use multiple 2D textures for animation.
 * 
 * `AnimatedSprite3D` is similar to the `Sprite3D` node, except it carries multiple textures as animation `sprite_frames`. Animations are created using a `SpriteFrames` resource, which allows you to import image files (or a folder containing said files) to provide the animation frames for the sprite. The `SpriteFrames` resource can be configured in the editor via the SpriteFrames bottom panel.
 */
export class AnimatedSprite3D extends SpriteBase3D {
/**
 * The current animation from the `sprite_frames` resource. If this value is changed, the `frame` counter and the `frame_progress` are reset.
 */
  animation: StringName;
/**
 * The key of the animation to play when the scene loads.
 */
  autoplay: string;
/**
 * The displayed animation frame's index. Setting this property also resets `frame_progress`. If this is not desired, use `set_frame_and_progress`.
 */
  frame: int;
/**
 * The progress value between `0.0` and `1.0` until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from `1.0` to `0.0`.
 */
  frameProgress: float;
/**
 * The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.
 * If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.
 */
  speedScale: float;
/**
 * The `SpriteFrames` resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the `SpriteFrames` resource.
 */
  spriteFrames: SpriteFrames;
/**
 * Returns the actual playing speed of current animation or `0` if not playing. This speed is the `speed_scale` property multiplied by `custom_speed` argument specified when calling the `play` method.
 * Returns a negative value if the current animation is playing backwards.
 * @returns float
 */
  getPlayingSpeed(): float;
/**
 * Returns `true` if an animation is currently playing (even if `speed_scale` and/or `custom_speed` are `0`).
 * @returns boolean
 */
  isPlaying(): boolean;
/**
 * Pauses the currently playing animation. The `frame` and `frame_progress` will be kept and calling `play` or `play_backwards` without arguments will resume the animation from the current playback position.
 * See also `stop`.
 */
  pause(): void;
/**
 * Plays the animation with key `name`. If `custom_speed` is negative and `from_end` is `true`, the animation will play backwards (which is equivalent to calling `play_backwards`).
 * If this method is called with that same animation `name`, or with no `name` parameter, the assigned animation will resume playing if it was paused.
 * @param name StringName (optional, default: &"")
 * @param customSpeed float (optional, default: 1.0)
 * @param fromEnd boolean (optional, default: false)
 */
  play(name?: StringName, customSpeed?: float, fromEnd?: boolean): void;
/**
 * Plays the animation with key `name` in reverse.
 * This method is a shorthand for `play` with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.
 * @param name StringName (optional, default: &"")
 */
  playBackwards(name?: StringName): void;
/**
 * Sets `frame` the `frame_progress` to the given values. Unlike setting `frame`, this method does not reset the `frame_progress` to `0.0` implicitly.
 * 
 * **Example:** Change the animation while keeping the same `frame` and `frame_progress`:
 * 
 * 				```gdscript
 * 
 * 				var current_frame = animated_sprite.get_frame()
 * 				var current_progress = animated_sprite.get_frame_progress()
 * 				animated_sprite.play("walk_another_skin")
 * 				animated_sprite.set_frame_and_progress(current_frame, current_progress)
 * 				
 * 
 * ```
 * 
 * @param frame int
 * @param progress float
 */
  setFrameAndProgress(frame: int, progress: float): void;
/**
 * Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also `pause`.
 */
  stop(): void;
/**
 * Emitted when `animation` changes.
 */
  animationChanged: Signal<[]>;
/**
 * Emitted when the animation reaches the end, or the start if it is played in reverse. When the animation finishes, it pauses the playback.
 * 
 * **Note:** This signal is not emitted if an animation is looping.
 */
  animationFinished: Signal<[]>;
/**
 * Emitted when the animation loops.
 */
  animationLooped: Signal<[]>;
/**
 * Emitted when `frame` changes.
 */
  frameChanged: Signal<[]>;
/**
 * Emitted when `sprite_frames` changes.
 */
  spriteFramesChanged: Signal<[]>;
}
