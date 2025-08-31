import type { AnimationRootNode, GodotArray, GodotDictionary, StringName, float, int } from "../index.d.ts";
/**
 * An input animation for an `AnimationNodeBlendTree`.
 * 
 * A resource to add to an `AnimationNodeBlendTree`. Only has one output port using the `animation` property. Used as an input for `AnimationNode`s that blend animations together.
 */
export class AnimationNodeAnimation extends AnimationRootNode {
/**
 * If `true`, on receiving a request to play an animation from the start, the first frame is not drawn, but only processed, and playback starts from the next frame.
 * See also the notes of `AnimationPlayer.play`.
 */
  advanceOnStart: boolean;
/**
 * Animation to use as an output. It is one of the animations provided by `AnimationTree.anim_player`.
 */
  animation: StringName;
/**
 * If `use_custom_timeline` is `true`, override the loop settings of the original `Animation` resource with the value.
 * 
 * **Note:** If the `Animation.loop_mode` isn't set to looping, the `Animation.track_set_interpolation_loop_wrap` option will not be respected. If you cannot get the expected behavior, consider duplicating the `Animation` resource and changing the loop settings.
 */
  loopMode: int;
/**
 * Determines the playback direction of the animation.
 */
  playMode: int;
/**
 * If `use_custom_timeline` is `true`, offset the start position of the animation.
 * This is useful for adjusting which foot steps first in 3D walking animations.
 */
  startOffset: float;
/**
 * If `true`, scales the time so that the length specified in `timeline_length` is one cycle.
 * This is useful for matching the periods of walking and running animations.
 * If `false`, the original animation length is respected. If you set the loop to `loop_mode`, the animation will loop in `timeline_length`.
 */
  stretchTimeScale: boolean;
/**
 * If `use_custom_timeline` is `true`, offset the start position of the animation.
 */
  timelineLength: float;
/**
 * If `true`, `AnimationNode` provides an animation based on the `Animation` resource with some parameters adjusted.
 */
  useCustomTimeline: boolean;
/**
 * Plays animation in forward direction.
 */
  static readonly PLAY_MODE_FORWARD: int;
/**
 * Plays animation in backward direction.
 */
  static readonly PLAY_MODE_BACKWARD: int;
}
