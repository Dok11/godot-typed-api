import type { AnimationNode, AnimationRootNode, GodotArray, GodotDictionary, Signal, StringName, Vector2, float, int } from "../index.d.ts";
/**
 * A sub-tree of many type `AnimationNode`s used for complex animations. Used by `AnimationTree`.
 * 
 * This animation node may contain a sub-tree of any other type animation nodes, such as `AnimationNodeTransition`, `AnimationNodeBlend2`, `AnimationNodeBlend3`, `AnimationNodeOneShot`, etc. This is one of the most commonly used animation node roots.
 * An `AnimationNodeOutput` node named `output` is created by default.
 */
export class AnimationNodeBlendTree extends AnimationRootNode {
/**
 * The global offset of all sub animation nodes.
 */
  graphOffset: Vector2;
/**
 * Adds an `AnimationNode` at the given `position`. The `name` is used to identify the created sub animation node later.
 * @param name StringName
 * @param node AnimationNode
 * @param position Vector2 (optional, default: Vector2(0, 0))
 */
  addNode(name: StringName, node: AnimationNode, position?: Vector2): void;
/**
 * Connects the output of an `AnimationNode` as input for another `AnimationNode`, at the input port specified by `input_index`.
 * @param inputNode StringName
 * @param inputIndex int
 * @param outputNode StringName
 */
  connectNode(inputNode: StringName, inputIndex: int, outputNode: StringName): void;
/**
 * Disconnects the animation node connected to the specified input.
 * @param inputNode StringName
 * @param inputIndex int
 */
  disconnectNode(inputNode: StringName, inputIndex: int): void;
/**
 * Returns the sub animation node with the specified `name`.
 * @param name StringName
 * @returns AnimationNode
 */
  getNode(name: StringName): AnimationNode;
/**
 * Returns the position of the sub animation node with the specified `name`.
 * @param name StringName
 * @returns Vector2
 */
  getNodePosition(name: StringName): Vector2;
/**
 * Returns `true` if a sub animation node with specified `name` exists.
 * @param name StringName
 * @returns boolean
 */
  hasNode(name: StringName): boolean;
/**
 * Removes a sub animation node.
 * @param name StringName
 */
  removeNode(name: StringName): void;
/**
 * Changes the name of a sub animation node.
 * @param name StringName
 * @param newName StringName
 */
  renameNode(name: StringName, newName: StringName): void;
/**
 * Modifies the position of a sub animation node.
 * @param name StringName
 * @param position Vector2
 */
  setNodePosition(name: StringName, position: Vector2): void;
/**
 * Emitted when the input port information is changed.
 */
  nodeChanged: Signal<[nodeName: StringName]>;
/**
 * The connection was successful.
 */
  static readonly CONNECTION_OK: int;
/**
 * The input node is `null`.
 */
  static readonly CONNECTION_ERROR_NO_INPUT: int;
/**
 * The specified input port is out of range.
 */
  static readonly CONNECTION_ERROR_NO_INPUT_INDEX: int;
/**
 * The output node is `null`.
 */
  static readonly CONNECTION_ERROR_NO_OUTPUT: int;
/**
 * Input and output nodes are the same.
 */
  static readonly CONNECTION_ERROR_SAME_NODE: int;
/**
 * The specified connection already exists.
 */
  static readonly CONNECTION_ERROR_CONNECTION_EXISTS: int;
}
