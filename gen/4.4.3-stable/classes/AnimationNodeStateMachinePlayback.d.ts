import type { GodotArray, GodotDictionary, Resource, StringName, float, int } from "../index.d.ts";
/**
 * Provides playback control for an `AnimationNodeStateMachine`.
 * 
 * Allows control of `AnimationTree` state machines created with `AnimationNodeStateMachine`. Retrieve with `$AnimationTree.get("parameters/playback")`.
 * 
 * 		```gdscript
 * 
 * 		var state_machine = $AnimationTree.get("parameters/playback")
 * 		state_machine.travel("some_state")
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback").As<AnimationNodeStateMachinePlayback>();
 * 		stateMachine.Travel("some_state");
 * 		
 * 
 * ```
 * 
 */
export class AnimationNodeStateMachinePlayback extends Resource {
  resourceLocalToScene: boolean;
/**
 * Returns the current state length.
 * 
 * **Note:** It is possible that any `AnimationRootNode` can be nodes as well as animations. This means that there can be multiple animations within a single state. Which animation length has priority depends on the nodes connected inside it. Also, if a transition does not reset, the remaining length at that point will be returned.
 * @returns float
 */
  getCurrentLength(): float;
/**
 * Returns the currently playing animation state.
 * 
 * **Note:** When using a cross-fade, the current state changes to the next state immediately after the cross-fade begins.
 * @returns StringName
 */
  getCurrentNode(): StringName;
/**
 * Returns the playback position within the current animation state.
 * @returns float
 */
  getCurrentPlayPosition(): float;
/**
 * Returns the starting state of currently fading animation.
 * @returns StringName
 */
  getFadingFromNode(): StringName;
/**
 * Returns the current travel path as computed internally by the A* algorithm.
 * @returns StringName[]
 */
  getTravelPath(): StringName[];
/**
 * Returns `true` if an animation is playing.
 * @returns boolean
 */
  isPlaying(): boolean;
/**
 * If there is a next path by travel or auto advance, immediately transitions from the current state to the next state.
 */
  next(): void;
/**
 * Starts playing the given animation.
 * If `reset` is `true`, the animation is played from the beginning.
 * @param node StringName
 * @param reset boolean (optional, default: true)
 */
  start(node: StringName, reset?: boolean): void;
/**
 * Stops the currently playing animation.
 */
  stop(): void;
/**
 * Transitions from the current state to another one, following the shortest path.
 * If the path does not connect from the current state, the animation will play after the state teleports.
 * If `reset_on_teleport` is `true`, the animation is played from the beginning when the travel cause a teleportation.
 * @param toNode StringName
 * @param resetOnTeleport boolean (optional, default: true)
 */
  travel(toNode: StringName, resetOnTeleport?: boolean): void;
}
