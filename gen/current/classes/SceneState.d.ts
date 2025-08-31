import type { GodotArray, GodotDictionary, NodePath, PackedScene, PackedStringArray, RefCounted, StringName, Variant, float, int } from "../index.d.ts";
/**
 * Provides access to a scene file's information.
 * 
 * Maintains a list of resources, nodes, exported and overridden properties, and built-in scripts associated with a scene. They cannot be modified from a `SceneState`, only accessed. Useful for peeking into what a `PackedScene` contains without instantiating it.
 * This class cannot be instantiated directly, it is retrieved for a given scene as the result of `PackedScene.get_state`.
 */
export class SceneState extends RefCounted {
/**
 * Returns the list of bound parameters for the signal at `idx`.
 * @param idx int
 * @returns GodotArray<any>
 */
  getConnectionBinds(idx: int): GodotArray<any>;
/**
 * Returns the number of signal connections in the scene.
 * The `idx` argument used to query connection metadata in other `get_connection_*` methods in the interval `[0, get_connection_count() - 1]`.
 * @returns int
 */
  getConnectionCount(): int;
/**
 * Returns the connection flags for the signal at `idx`. See `Object.ConnectFlags` constants.
 * @param idx int
 * @returns int
 */
  getConnectionFlags(idx: int): int;
/**
 * Returns the method connected to the signal at `idx`.
 * @param idx int
 * @returns StringName
 */
  getConnectionMethod(idx: int): StringName;
/**
 * Returns the name of the signal at `idx`.
 * @param idx int
 * @returns StringName
 */
  getConnectionSignal(idx: int): StringName;
/**
 * Returns the path to the node that owns the signal at `idx`, relative to the root node.
 * @param idx int
 * @returns NodePath
 */
  getConnectionSource(idx: int): NodePath;
/**
 * Returns the path to the node that owns the method connected to the signal at `idx`, relative to the root node.
 * @param idx int
 * @returns NodePath
 */
  getConnectionTarget(idx: int): NodePath;
/**
 * Returns the number of unbound parameters for the signal at `idx`.
 * @param idx int
 * @returns int
 */
  getConnectionUnbinds(idx: int): int;
/**
 * Returns the number of nodes in the scene.
 * The `idx` argument used to query node data in other `get_node_*` methods in the interval `[0, get_node_count() - 1]`.
 * @returns int
 */
  getNodeCount(): int;
/**
 * Returns the list of group names associated with the node at `idx`.
 * @param idx int
 * @returns PackedStringArray
 */
  getNodeGroups(idx: int): PackedStringArray;
/**
 * Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the `idx` argument used here and in other methods.
 * @param idx int
 * @returns int
 */
  getNodeIndex(idx: int): int;
/**
 * Returns a `PackedScene` for the node at `idx` (i.e. the whole branch starting at this node, with its child nodes and resources), or `null` if the node is not an instance.
 * @param idx int
 * @returns PackedScene
 */
  getNodeInstance(idx: int): PackedScene;
/**
 * Returns the path to the represented scene file if the node at `idx` is an `InstancePlaceholder`.
 * @param idx int
 * @returns string
 */
  getNodeInstancePlaceholder(idx: int): string;
/**
 * Returns the name of the node at `idx`.
 * @param idx int
 * @returns StringName
 */
  getNodeName(idx: int): StringName;
/**
 * Returns the path to the owner of the node at `idx`, relative to the root node.
 * @param idx int
 * @returns NodePath
 */
  getNodeOwnerPath(idx: int): NodePath;
/**
 * Returns the path to the node at `idx`.
 * If `for_parent` is `true`, returns the path of the `idx` node's parent instead.
 * @param idx int
 * @param forParent boolean (optional, default: false)
 * @returns NodePath
 */
  getNodePath(idx: int, forParent?: boolean): NodePath;
/**
 * Returns the number of exported or overridden properties for the node at `idx`.
 * The `prop_idx` argument used to query node property data in other `get_node_property_*` methods in the interval `[0, get_node_property_count() - 1]`.
 * @param idx int
 * @returns int
 */
  getNodePropertyCount(idx: int): int;
/**
 * Returns the name of the property at `prop_idx` for the node at `idx`.
 * @param idx int
 * @param propIdx int
 * @returns StringName
 */
  getNodePropertyName(idx: int, propIdx: int): StringName;
/**
 * Returns the value of the property at `prop_idx` for the node at `idx`.
 * @param idx int
 * @param propIdx int
 * @returns Variant
 */
  getNodePropertyValue(idx: int, propIdx: int): Variant;
/**
 * Returns the type of the node at `idx`.
 * @param idx int
 * @returns StringName
 */
  getNodeType(idx: int): StringName;
/**
 * Returns `true` if the node at `idx` is an `InstancePlaceholder`.
 * @param idx int
 * @returns boolean
 */
  isNodeInstancePlaceholder(idx: int): boolean;
/**
 * If passed to `PackedScene.instantiate`, blocks edits to the scene state.
 */
  static readonly GEN_EDIT_STATE_DISABLED: int;
/**
 * If passed to `PackedScene.instantiate`, provides inherited scene resources to the local scene.
 * 
 * **Note:** Only available in editor builds.
 */
  static readonly GEN_EDIT_STATE_INSTANCE: int;
/**
 * If passed to `PackedScene.instantiate`, provides local scene resources to the local scene. Only the main scene should receive the main edit state.
 * 
 * **Note:** Only available in editor builds.
 */
  static readonly GEN_EDIT_STATE_MAIN: int;
/**
 * If passed to `PackedScene.instantiate`, it's similar to `GEN_EDIT_STATE_MAIN`, but for the case where the scene is being instantiated to be the base of another one.
 * 
 * **Note:** Only available in editor builds.
 */
  static readonly GEN_EDIT_STATE_MAIN_INHERITED: int;
}
