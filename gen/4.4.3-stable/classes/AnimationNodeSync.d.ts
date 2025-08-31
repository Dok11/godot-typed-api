import type { AnimationNode, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Base class for `AnimationNode`s with multiple input ports that must be synchronized.
 * 
 * An animation node used to combine, mix, or blend two or more animations together while keeping them synchronized within an `AnimationTree`.
 */
export class AnimationNodeSync extends AnimationNode {
/**
 * If `false`, the blended animations' frame are stopped when the blend value is `0`.
 * If `true`, forcing the blended animations to advance frame.
 */
  sync: boolean;
}
