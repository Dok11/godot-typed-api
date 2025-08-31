import type { AnimationNode, GodotArray, GodotDictionary, PackedFloat32Array, PackedFloat64Array, float, int } from "../index.d.ts";
/**
 * Base class for extending `AnimationRootNode`s from GDScript, C#, or C++.
 * 
 * `AnimationNodeExtension` exposes the APIs of `AnimationRootNode` to allow users to extend it from GDScript, C#, or C++. This class is not meant to be used directly, but to be extended by other classes. It is used to create custom nodes for the `AnimationTree` system.
 */
export class AnimationNodeExtension extends AnimationNode {
/**
 * Returns the animation's remaining time for the given node info. For looping animations, it will only return the remaining time if `break_loop` is `true`, a large integer value will be returned otherwise.
 * @param nodeInfo PackedFloat32Array
 * @param breakLoop boolean
 * @returns float
 */
  getRemainingTime(nodeInfo: PackedFloat32Array, breakLoop: boolean): float;
/**
 * Returns `true` if the animation for the given `node_info` is looping.
 * @param nodeInfo PackedFloat32Array
 * @returns boolean
 */
  isLooping(nodeInfo: PackedFloat32Array): boolean;
/**
 * A version of the `AnimationNode._process` method that is meant to be overridden by custom nodes. It returns a `PackedFloat32Array` with the processed animation data.
 * The `PackedFloat64Array` parameter contains the playback information, containing the following values encoded as floating point numbers (in order): playback time and delta, start and end times, whether a seek was requested (encoded as a float greater than `0`), whether the seek request was externally requested (encoded as a float greater than `0`), the current `Animation.LoopedFlag` (encoded as a float), and the current blend weight.
 * The function must return a `PackedFloat32Array` of the node's time info, containing the following values (in order): animation length, time position, delta, `Animation.LoopMode` (encoded as a float), whether the animation is about to end (encoded as a float greater than `0`) and whether the animation is infinite (encoded as a float greater than `0`). All values must be included in the returned array.
 * @param playbackInfo PackedFloat64Array
 * @param testOnly boolean
 * @returns PackedFloat32Array
 */
  private processAnimationNode(playbackInfo: PackedFloat64Array, testOnly: boolean): PackedFloat32Array;
}
