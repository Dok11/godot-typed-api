import type { Curve, GodotArray, GodotDictionary, Resource, Signal, StringName, float, int } from "../index.d.ts";
/**
 * A transition within an `AnimationNodeStateMachine` connecting two `AnimationRootNode`s.
 * 
 * The path generated when using `AnimationNodeStateMachinePlayback.travel` is limited to the nodes connected by `AnimationNodeStateMachineTransition`.
 * You can set the timing and conditions of the transition in detail.
 */
export class AnimationNodeStateMachineTransition extends Resource {
/**
 * Turn on auto advance when this condition is set. The provided name will become a boolean parameter on the `AnimationTree` that can be controlled from code (see Using AnimationTree (https://docs.godotengine.org/en/stable/tutorials/animation/animation_tree.html#controlling-from-code)). For example, if `AnimationTree.tree_root` is an `AnimationNodeStateMachine` and `advance_condition` is set to `"idle"`:
 * 
 * 			```gdscript
 * 
 * 			$animation_tree.set("parameters/conditions/idle", is_on_floor and (linear_velocity.x == 0))
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			GetNode<AnimationTree>("animation_tree").Set("parameters/conditions/idle", IsOnFloor && (LinearVelocity.X == 0));
 * 			
 * 
 * ```
 * 
 */
  advanceCondition: StringName;
/**
 * Use an expression as a condition for state machine transitions. It is possible to create complex animation advance conditions for switching between states and gives much greater flexibility for creating complex state machines by directly interfacing with the script code.
 */
  advanceExpression: string;
/**
 * Determines whether the transition should be disabled, enabled when using `AnimationNodeStateMachinePlayback.travel`, or traversed automatically if the `advance_condition` and `advance_expression` checks are `true` (if assigned).
 */
  advanceMode: int;
/**
 * If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping.
 */
  breakLoopAtEnd: boolean;
/**
 * Lower priority transitions are preferred when travelling through the tree via `AnimationNodeStateMachinePlayback.travel` or `advance_mode` is set to `ADVANCE_MODE_AUTO`.
 */
  priority: int;
/**
 * If `true`, the destination animation is played back from the beginning when switched.
 */
  reset: boolean;
/**
 * The transition type.
 */
  switchMode: int;
/**
 * Ease curve for better control over cross-fade between this state and the next. Should be a unit `Curve`.
 */
  xfadeCurve: Curve;
/**
 * The time to cross-fade between this state and the next.
 * 
 * **Note:** `AnimationNodeStateMachine` transitions the current state immediately after the start of the fading. The precise remaining time can only be inferred from the main animation. When `AnimationNodeOutput` is considered as the most upstream, so the `xfade_time` is not scaled depending on the downstream delta. See also `AnimationNodeOneShot.fadeout_time`.
 */
  xfadeTime: float;
/**
 * Emitted when `advance_condition` is changed.
 */
  advanceConditionChanged: Signal<[]>;
/**
 * Switch to the next state immediately. The current state will end and blend into the beginning of the new one.
 */
  static readonly SWITCH_MODE_IMMEDIATE: int;
/**
 * Switch to the next state immediately, but will seek the new state to the playback position of the old state.
 */
  static readonly SWITCH_MODE_SYNC: int;
/**
 * Wait for the current state playback to end, then switch to the beginning of the next state animation.
 */
  static readonly SWITCH_MODE_AT_END: int;
/**
 * Don't use this transition.
 */
  static readonly ADVANCE_MODE_DISABLED: int;
/**
 * Only use this transition during `AnimationNodeStateMachinePlayback.travel`.
 */
  static readonly ADVANCE_MODE_ENABLED: int;
/**
 * Automatically use this transition if the `advance_condition` and `advance_expression` checks are `true` (if assigned).
 */
  static readonly ADVANCE_MODE_AUTO: int;
}
