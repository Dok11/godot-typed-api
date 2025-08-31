import type { AnimationNodeSync, Curve, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Plays an animation once in an `AnimationNodeBlendTree`.
 * 
 * A resource to add to an `AnimationNodeBlendTree`. This animation node will execute a sub-animation and return once it finishes. Blend times for fading in and out can be customized, as well as filters.
 * After setting the request and changing the animation playback, the one-shot node automatically clears the request on the next process frame by setting its `request` value to `ONE_SHOT_REQUEST_NONE`.
 * 
 * 		```gdscript
 * 
 * 		# Play child animation connected to "shot" port.
 * 		animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE)
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE
 * 
 * 		# Abort child animation connected to "shot" port.
 * 		animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT)
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT
 * 
 * 		# Abort child animation with fading out connected to "shot" port.
 * 		animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT)
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT
 * 
 * 		# Get current state (read-only).
 * 		animation_tree.get("parameters/OneShot/active")
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/OneShot/active"]
 * 
 * 		# Get current internal state (read-only).
 * 		animation_tree.get("parameters/OneShot/internal_active")
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/OneShot/internal_active"]
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// Play child animation connected to "shot" port.
 * 		animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Fire);
 * 
 * 		// Abort child animation connected to "shot" port.
 * 		animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Abort);
 * 
 * 		// Abort child animation with fading out connected to "shot" port.
 * 		animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.FadeOut);
 * 
 * 		// Get current state (read-only).
 * 		animationTree.Get("parameters/OneShot/active");
 * 
 * 		// Get current internal state (read-only).
 * 		animationTree.Get("parameters/OneShot/internal_active");
 * 		
 * 
 * ```
 * 
 */
export class AnimationNodeOneShot extends AnimationNodeSync {
/**
 * If `true`, the sub-animation will restart automatically after finishing.
 * In other words, to start auto restarting, the animation must be played once with the `ONE_SHOT_REQUEST_FIRE` request. The `ONE_SHOT_REQUEST_ABORT` request stops the auto restarting, but it does not disable the `autorestart` itself. So, the `ONE_SHOT_REQUEST_FIRE` request will start auto restarting again.
 */
  autorestart: boolean;
/**
 * The delay after which the automatic restart is triggered, in seconds.
 */
  autorestartDelay: float;
/**
 * If `autorestart` is `true`, a random additional delay (in seconds) between 0 and this value will be added to `autorestart_delay`.
 */
  autorestartRandomDelay: float;
/**
 * If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping.
 */
  breakLoopAtEnd: boolean;
/**
 * Determines how cross-fading between animations is eased. If empty, the transition will be linear. Should be a unit `Curve`.
 */
  fadeinCurve: Curve;
/**
 * The fade-in duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 0 second and ends at 1 second during the animation.
 * 
 * **Note:** `AnimationNodeOneShot` transitions the current state after the end of the fading. When `AnimationNodeOutput` is considered as the most upstream, so the `fadein_time` is scaled depending on the downstream delta. For example, if this value is set to `1.0` and a `AnimationNodeTimeScale` with a value of `2.0` is chained downstream, the actual processing time will be 0.5 second.
 */
  fadeinTime: float;
/**
 * Determines how cross-fading between animations is eased. If empty, the transition will be linear. Should be a unit `Curve`.
 */
  fadeoutCurve: Curve;
/**
 * The fade-out duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 4 second and ends at 5 second during the animation.
 * 
 * **Note:** `AnimationNodeOneShot` transitions the current state after the end of the fading. When `AnimationNodeOutput` is considered as the most upstream, so the `fadeout_time` is scaled depending on the downstream delta. For example, if this value is set to `1.0` and an `AnimationNodeTimeScale` with a value of `2.0` is chained downstream, the actual processing time will be 0.5 second.
 */
  fadeoutTime: float;
/**
 * The blend type.
 */
  mixMode: int;
/**
 * The default state of the request. Nothing is done.
 */
  static readonly ONE_SHOT_REQUEST_NONE: int;
/**
 * The request to play the animation connected to "shot" port.
 */
  static readonly ONE_SHOT_REQUEST_FIRE: int;
/**
 * The request to stop the animation connected to "shot" port.
 */
  static readonly ONE_SHOT_REQUEST_ABORT: int;
/**
 * The request to fade out the animation connected to "shot" port.
 */
  static readonly ONE_SHOT_REQUEST_FADE_OUT: int;
/**
 * Blends two animations. See also `AnimationNodeBlend2`.
 */
  static readonly MIX_MODE_BLEND: int;
/**
 * Blends two animations additively. See also `AnimationNodeAdd2`.
 */
  static readonly MIX_MODE_ADD: int;
}
