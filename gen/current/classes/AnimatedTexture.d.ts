import type { GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * Proxy texture for simple frame-based animations.
 * 
 * `AnimatedTexture` is a resource format for frame-based animations, where multiple textures can be chained automatically with a predefined delay for each frame. Unlike `AnimationPlayer` or `AnimatedSprite2D`, it isn't a `Node`, but has the advantage of being usable anywhere a `Texture2D` resource can be used, e.g. in a `TileSet`.
 * The playback of the animation is controlled by the `speed_scale` property, as well as each frame's duration (see `set_frame_duration`). The animation loops, i.e. it will restart at frame 0 automatically after playing the last frame.
 * `AnimatedTexture` currently requires all frame textures to have the same size, otherwise the bigger ones will be cropped to match the smallest one.
 * 
 * **Note:** AnimatedTexture doesn't support using `AtlasTexture`s. Each frame needs to be a separate `Texture2D`.
 * 
 * **Warning:** The current implementation is not efficient for the modern renderers.
 * @deprecated This class does not work properly in current versions and may be removed in the future. There is currently no equivalent workaround.
 */
export class AnimatedTexture extends Texture2D {
/**
 * Sets the currently visible frame of the texture. Setting this frame while playing resets the current frame time, so the newly selected frame plays for its whole configured frame duration.
 */
  currentFrame: int;
/**
 * Number of frames to use in the animation. While you can create the frames independently with `set_frame_texture`, you need to set this value for the animation to take new frames into account. The maximum number of frames is `MAX_FRAMES`.
 */
  frames: int;
/**
 * If `true`, the animation will only play once and will not loop back to the first frame after reaching the end. Note that reaching the end will not set `pause` to `true`.
 */
  oneShot: boolean;
/**
 * If `true`, the animation will pause where it currently is (i.e. at `current_frame`). The animation will continue from where it was paused when changing this property to `false`.
 */
  pause: boolean;
  resourceLocalToScene: boolean;
/**
 * The animation speed is multiplied by this value. If set to a negative value, the animation is played in reverse.
 */
  speedScale: float;
/**
 * Returns the given `frame`'s duration, in seconds.
 * @param frame int
 * @returns float
 */
  getFrameDuration(frame: int): float;
/**
 * Returns the given frame's `Texture2D`.
 * @param frame int
 * @returns Texture2D
 */
  getFrameTexture(frame: int): Texture2D;
/**
 * Sets the duration of any given `frame`. The final duration is affected by the `speed_scale`. If set to `0`, the frame is skipped during playback.
 * @param frame int
 * @param duration float
 */
  setFrameDuration(frame: int, duration: float): void;
/**
 * Assigns a `Texture2D` to the given frame. Frame IDs start at 0, so the first frame has ID 0, and the last frame of the animation has ID `frames` - 1.
 * You can define any number of textures up to `MAX_FRAMES`, but keep in mind that only frames from 0 to `frames` - 1 will be part of the animation.
 * @param frame int
 * @param texture Texture2D
 */
  setFrameTexture(frame: int, texture: Texture2D): void;
/**
 * The maximum number of frames supported by `AnimatedTexture`. If you need more frames in your animation, use `AnimationPlayer` or `AnimatedSprite2D`.
 */
  static readonly MAX_FRAMES: int;
}
