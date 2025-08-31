import type { AnimationMixer, AnimationRootNode, GodotArray, GodotDictionary, NodePath, Signal, float, int } from "../index.d.ts";
/**
 * A node used for advanced animation transitions in an `AnimationPlayer`.
 * 
 * A node used for advanced animation transitions in an `AnimationPlayer`.
 * 
 * **Note:** When linked with an `AnimationPlayer`, several properties and methods of the corresponding `AnimationPlayer` will not function as expected. Playback and transitions should be handled using only the `AnimationTree` and its constituent `AnimationNode`(s). The `AnimationPlayer` node should be used solely for adding, deleting, and editing animations.
 */
export class AnimationTree extends AnimationMixer {
/**
 * The path to the `Node` used to evaluate the `AnimationNode` `Expression` if one is not explicitly specified internally.
 */
  advanceExpressionBaseNode: NodePath;
/**
 * The path to the `AnimationPlayer` used for animating.
 */
  animPlayer: NodePath;
  callbackModeDiscrete: int;
  deterministic: boolean;
/**
 * The root animation node of this `AnimationTree`. See `AnimationRootNode`.
 */
  treeRoot: AnimationRootNode;
/**
 * Returns the process notification in which to update animations.
 * @returns int
 * @deprecated Use `AnimationMixer.callback_mode_process` instead.
 */
  getProcessCallback(): int;
/**
 * Sets the process notification in which to update animations.
 * @param mode int
 * @deprecated Use `AnimationMixer.callback_mode_process` instead.
 */
  setProcessCallback(mode: int): void;
/**
 * Emitted when the `anim_player` is changed.
 */
  animationPlayerChanged: Signal<[]>;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`.
 */
  static readonly ANIMATION_PROCESS_PHYSICS: int;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE`.
 */
  static readonly ANIMATION_PROCESS_IDLE: int;
/**
 * @deprecated See `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL`.
 */
  static readonly ANIMATION_PROCESS_MANUAL: int;
}
