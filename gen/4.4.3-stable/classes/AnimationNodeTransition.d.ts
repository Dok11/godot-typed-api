import type { AnimationNodeSync, Curve, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A transition within an `AnimationTree` connecting two `AnimationNode`s.
 * 
 * Simple state machine for cases which don't require a more advanced `AnimationNodeStateMachine`. Animations can be connected to the inputs and transition times can be specified.
 * After setting the request and changing the animation playback, the transition node automatically clears the request on the next process frame by setting its `transition_request` value to empty.
 * 
 * **Note:** When using a cross-fade, `current_state` and `current_index` change to the next state immediately after the cross-fade begins.
 * 
 * 		```gdscript
 * 
 * 		# Play child animation connected to "state_2" port.
 * 		animation_tree.set("parameters/Transition/transition_request", "state_2")
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/Transition/transition_request"] = "state_2"
 * 
 * 		# Get current state name (read-only).
 * 		animation_tree.get("parameters/Transition/current_state")
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/Transition/current_state"]
 * 
 * 		# Get current state index (read-only).
 * 		animation_tree.get("parameters/Transition/current_index")
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/Transition/current_index"]
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// Play child animation connected to "state_2" port.
 * 		animationTree.Set("parameters/Transition/transition_request", "state_2");
 * 
 * 		// Get current state name (read-only).
 * 		animationTree.Get("parameters/Transition/current_state");
 * 
 * 		// Get current state index (read-only).
 * 		animationTree.Get("parameters/Transition/current_index");
 * 		
 * 
 * ```
 * 
 */
export class AnimationNodeTransition extends AnimationNodeSync {
/**
 * If `true`, allows transition to the self state. When the reset option is enabled in input, the animation is restarted. If `false`, nothing happens on the transition to the self state.
 */
  allowTransitionToSelf: boolean;
/**
 * The number of enabled input ports for this animation node.
 */
  inputCount: int;
/**
 * Determines how cross-fading between animations is eased. If empty, the transition will be linear. Should be a unit `Curve`.
 */
  xfadeCurve: Curve;
/**
 * Cross-fading time (in seconds) between each animation connected to the inputs.
 * 
 * **Note:** `AnimationNodeTransition` transitions the current state immediately after the start of the fading. The precise remaining time can only be inferred from the main animation. When `AnimationNodeOutput` is considered as the most upstream, so the `xfade_time` is not scaled depending on the downstream delta. See also `AnimationNodeOneShot.fadeout_time`.
 */
  xfadeTime: float;
/**
 * Returns whether the animation breaks the loop at the end of the loop cycle for transition.
 * @param input int
 * @returns boolean
 */
  isInputLoopBrokenAtEnd(input: int): boolean;
/**
 * Returns whether the animation restarts when the animation transitions from the other animation.
 * @param input int
 * @returns boolean
 */
  isInputReset(input: int): boolean;
/**
 * Returns `true` if auto-advance is enabled for the given `input` index.
 * @param input int
 * @returns boolean
 */
  isInputSetAsAutoAdvance(input: int): boolean;
/**
 * Enables or disables auto-advance for the given `input` index. If enabled, state changes to the next input after playing the animation once. If enabled for the last input state, it loops to the first.
 * @param input int
 * @param enable boolean
 */
  setInputAsAutoAdvance(input: int, enable: boolean): void;
/**
 * If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping.
 * @param input int
 * @param enable boolean
 */
  setInputBreakLoopAtEnd(input: int, enable: boolean): void;
/**
 * If `true`, the destination animation is restarted when the animation transitions.
 * @param input int
 * @param enable boolean
 */
  setInputReset(input: int, enable: boolean): void;
}
