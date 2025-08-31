import type { AnimationNode, AnimationNodeStateMachineTransition, AnimationRootNode, GodotArray, GodotDictionary, StringName, Vector2, float, int } from "../index.d.ts";
/**
 * A state machine with multiple `AnimationRootNode`s, used by `AnimationTree`.
 * 
 * Contains multiple `AnimationRootNode`s representing animation states, connected in a graph. State transitions can be configured to happen automatically or via code, using a shortest-path algorithm. Retrieve the `AnimationNodeStateMachinePlayback` object from the `AnimationTree` node to control it programmatically.
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
 * 		var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback") as AnimationNodeStateMachinePlayback;
 * 		stateMachine.Travel("some_state");
 * 		
 * 
 * ```
 * 
 */
export class AnimationNodeStateMachine extends AnimationRootNode {
/**
 * If `true`, allows teleport to the self state with `AnimationNodeStateMachinePlayback.travel`. When the reset option is enabled in `AnimationNodeStateMachinePlayback.travel`, the animation is restarted. If `false`, nothing happens on the teleportation to the self state.
 */
  allowTransitionToSelf: boolean;
/**
 * If `true`, treat the cross-fade to the start and end nodes as a blend with the RESET animation.
 * In most cases, when additional cross-fades are performed in the parent `AnimationNode` of the state machine, setting this property to `false` and matching the cross-fade time of the parent `AnimationNode` and the state machine's start node and end node gives good results.
 */
  resetEnds: boolean;
/**
 * This property can define the process of transitions for different use cases. See also `AnimationNodeStateMachine.StateMachineType`.
 */
  stateMachineType: int;
/**
 * Adds a new animation node to the graph. The `position` is used for display in the editor.
 * @param name StringName
 * @param node AnimationNode
 * @param position Vector2 (optional, default: Vector2(0, 0))
 */
  addNode(name: StringName, node: AnimationNode, position?: Vector2): void;
/**
 * Adds a transition between the given animation nodes.
 * @param from_ StringName
 * @param to StringName
 * @param transition AnimationNodeStateMachineTransition
 */
  addTransition(from_: StringName, to: StringName, transition: AnimationNodeStateMachineTransition): void;
/**
 * Returns the draw offset of the graph. Used for display in the editor.
 * @returns Vector2
 */
  getGraphOffset(): Vector2;
/**
 * Returns the animation node with the given name.
 * @param name StringName
 * @returns AnimationNode
 */
  getNode(name: StringName): AnimationNode;
/**
 * Returns the given animation node's name.
 * @param node AnimationNode
 * @returns StringName
 */
  getNodeName(node: AnimationNode): StringName;
/**
 * Returns the given animation node's coordinates. Used for display in the editor.
 * @param name StringName
 * @returns Vector2
 */
  getNodePosition(name: StringName): Vector2;
/**
 * Returns the given transition.
 * @param idx int
 * @returns AnimationNodeStateMachineTransition
 */
  getTransition(idx: int): AnimationNodeStateMachineTransition;
/**
 * Returns the number of connections in the graph.
 * @returns int
 */
  getTransitionCount(): int;
/**
 * Returns the given transition's start node.
 * @param idx int
 * @returns StringName
 */
  getTransitionFrom(idx: int): StringName;
/**
 * Returns the given transition's end node.
 * @param idx int
 * @returns StringName
 */
  getTransitionTo(idx: int): StringName;
/**
 * Returns `true` if the graph contains the given animation node.
 * @param name StringName
 * @returns boolean
 */
  hasNode(name: StringName): boolean;
/**
 * Returns `true` if there is a transition between the given animation nodes.
 * @param from_ StringName
 * @param to StringName
 * @returns boolean
 */
  hasTransition(from_: StringName, to: StringName): boolean;
/**
 * Deletes the given animation node from the graph.
 * @param name StringName
 */
  removeNode(name: StringName): void;
/**
 * Deletes the transition between the two specified animation nodes.
 * @param from_ StringName
 * @param to StringName
 */
  removeTransition(from_: StringName, to: StringName): void;
/**
 * Deletes the given transition by index.
 * @param idx int
 */
  removeTransitionByIndex(idx: int): void;
/**
 * Renames the given animation node.
 * @param name StringName
 * @param newName StringName
 */
  renameNode(name: StringName, newName: StringName): void;
/**
 * Replaces the given animation node with a new animation node.
 * @param name StringName
 * @param node AnimationNode
 */
  replaceNode(name: StringName, node: AnimationNode): void;
/**
 * Sets the draw offset of the graph. Used for display in the editor.
 * @param offset Vector2
 */
  setGraphOffset(offset: Vector2): void;
/**
 * Sets the animation node's coordinates. Used for display in the editor.
 * @param name StringName
 * @param position Vector2
 */
  setNodePosition(name: StringName, position: Vector2): void;
/**
 * Seeking to the beginning is treated as playing from the start state. Transition to the end state is treated as exiting the state machine.
 */
  static readonly STATE_MACHINE_TYPE_ROOT: int;
/**
 * Seeking to the beginning is treated as seeking to the beginning of the animation in the current state. Transition to the end state, or the absence of transitions in each state, is treated as exiting the state machine.
 */
  static readonly STATE_MACHINE_TYPE_NESTED: int;
/**
 * This is a grouped state machine that can be controlled from a parent state machine. It does not work independently. There must be a state machine with `state_machine_type` of `STATE_MACHINE_TYPE_ROOT` or `STATE_MACHINE_TYPE_NESTED` in the parent or ancestor.
 */
  static readonly STATE_MACHINE_TYPE_GROUPED: int;
}
