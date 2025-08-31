import type { AnimationNode, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Base class for `AnimationNode`s that hold one or multiple composite animations. Usually used for `AnimationTree.tree_root`.
 * 
 * `AnimationRootNode` is a base class for `AnimationNode`s that hold a complete animation. A complete animation refers to the output of an `AnimationNodeOutput` in an `AnimationNodeBlendTree` or the output of another `AnimationRootNode`. Used for `AnimationTree.tree_root` or in other `AnimationRootNode`s.
 * Examples of built-in root nodes include `AnimationNodeBlendTree` (allows blending nodes between each other using various modes), `AnimationNodeStateMachine` (allows to configure blending and transitions between nodes using a state machine pattern), `AnimationNodeBlendSpace2D` (allows linear blending between **three** `AnimationNode`s), `AnimationNodeBlendSpace1D` (allows linear blending only between **two** `AnimationNode`s).
 */
export class AnimationRootNode extends AnimationNode {
}
