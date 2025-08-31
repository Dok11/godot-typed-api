import type { GodotArray, GodotDictionary, MultiplayerPeer, Object, PackedInt32Array, RefCounted, Signal, StringName, Variant, float, int } from "../index.d.ts";
/**
 * High-level multiplayer API interface.
 * 
 * Base class for high-level multiplayer API implementations. See also `MultiplayerPeer`.
 * By default, `SceneTree` has a reference to an implementation of this class and uses it to provide multiplayer capabilities (i.e. RPCs) across the whole scene.
 * It is possible to override the MultiplayerAPI instance used by specific tree branches by calling the `SceneTree.set_multiplayer` method, effectively allowing to run both client and server in the same scene.
 * It is also possible to extend or replace the default implementation via scripting or native extensions. See `MultiplayerAPIExtension` for details about extensions, `SceneMultiplayer` for the details about the default implementation.
 */
export class MultiplayerAPI extends RefCounted {
/**
 * The peer object to handle the RPC system (effectively enabling networking when set). Depending on the peer itself, the MultiplayerAPI will become a network server (check with `is_server`) and will set root node's network mode to authority, or it will become a regular client peer. All child nodes are set to inherit the network mode by default. Handling of networking-related events (connection, disconnection, new clients) is done by connecting to MultiplayerAPI's signals.
 */
  multiplayerPeer: MultiplayerPeer;
/**
 * Returns a new instance of the default MultiplayerAPI.
 * @returns MultiplayerAPI
 */
  createDefaultInterface(): MultiplayerAPI;
/**
 * Returns the default MultiplayerAPI implementation class name. This is usually `"SceneMultiplayer"` when `SceneMultiplayer` is available. See `set_default_interface`.
 * @returns StringName
 */
  getDefaultInterface(): StringName;
/**
 * Returns the peer IDs of all connected peers of this MultiplayerAPI's `multiplayer_peer`.
 * @returns PackedInt32Array
 */
  getPeers(): PackedInt32Array;
/**
 * Returns the sender's peer ID for the RPC currently being executed.
 * 
 * **Note:** This method returns `0` when called outside of an RPC. As such, the original peer ID may be lost when code execution is delayed (such as with GDScript's `await` keyword).
 * @returns int
 */
  getRemoteSenderId(): int;
/**
 * Returns the unique peer ID of this MultiplayerAPI's `multiplayer_peer`.
 * @returns int
 */
  getUniqueId(): int;
/**
 * Returns `true` if there is a `multiplayer_peer` set.
 * @returns boolean
 */
  hasMultiplayerPeer(): boolean;
/**
 * Returns `true` if this MultiplayerAPI's `multiplayer_peer` is valid and in server mode (listening for connections).
 * @returns boolean
 */
  isServer(): boolean;
/**
 * Notifies the MultiplayerAPI of a new `configuration` for the given `object`. This method is used internally by `SceneTree` to configure the root path for this MultiplayerAPI (passing `null` and a valid `NodePath` as `configuration`). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. `SceneMultiplayer`) for details on how they use it.
 * 
 * **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via `MultiplayerAPIExtension`.
 * @param object Object
 * @param configuration Variant
 * @returns int
 */
  objectConfigurationAdd(object: Object, configuration: Variant): int;
/**
 * Notifies the MultiplayerAPI to remove a `configuration` for the given `object`. This method is used internally by `SceneTree` to configure the root path for this MultiplayerAPI (passing `null` and an empty `NodePath` as `configuration`). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. `SceneMultiplayer`) for details on how they use it.
 * 
 * **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via `MultiplayerAPIExtension`.
 * @param object Object
 * @param configuration Variant
 * @returns int
 */
  objectConfigurationRemove(object: Object, configuration: Variant): int;
/**
 * Method used for polling the MultiplayerAPI. You only need to worry about this if you set `SceneTree.multiplayer_poll` to `false`. By default, `SceneTree` will poll its MultiplayerAPI(s) for you.
 * 
 * **Note:** This method results in RPCs being called, so they will be executed in the same context of this function (e.g. `_process`, `physics`, `Thread`).
 * @returns int
 */
  poll(): int;
/**
 * Sends an RPC to the target `peer`. The given `method` will be called on the remote `object` with the provided `arguments`. The RPC may also be called locally depending on the implementation and RPC configuration. See `Node.rpc` and `Node.rpc_config`.
 * 
 * **Note:** Prefer using `Node.rpc`, `Node.rpc_id`, or `my_method.rpc(peer, arg1, arg2, ...)` (in GDScript), since they are faster. This method is mostly useful in conjunction with `MultiplayerAPIExtension` when extending or replacing the multiplayer capabilities.
 * @param peer int
 * @param object Object
 * @param method StringName
 * @param arguments GodotArray<any> (optional, default: [])
 * @returns int
 */
  rpc(peer: int, object: Object, method: StringName, arguments?: GodotArray<any>): int;
/**
 * Sets the default MultiplayerAPI implementation class. This method can be used by modules and extensions to configure which implementation will be used by `SceneTree` when the engine starts.
 * @param interfaceName StringName
 */
  setDefaultInterface(interfaceName: StringName): void;
/**
 * Emitted when this MultiplayerAPI's `multiplayer_peer` successfully connected to a server. Only emitted on clients.
 */
  connectedToServer: Signal<[]>;
/**
 * Emitted when this MultiplayerAPI's `multiplayer_peer` fails to establish a connection to a server. Only emitted on clients.
 */
  connectionFailed: Signal<[]>;
/**
 * Emitted when this MultiplayerAPI's `multiplayer_peer` connects with a new peer. ID is the peer ID of the new peer. Clients get notified when other clients connect to the same server. Upon connecting to a server, a client also receives this signal for the server (with ID being 1).
 */
  peerConnected: Signal<[id: int]>;
/**
 * Emitted when this MultiplayerAPI's `multiplayer_peer` disconnects from a peer. Clients get notified when other clients disconnect from the same server.
 */
  peerDisconnected: Signal<[id: int]>;
/**
 * Emitted when this MultiplayerAPI's `multiplayer_peer` disconnects from server. Only emitted on clients.
 */
  serverDisconnected: Signal<[]>;
/**
 * Used with `Node.rpc_config` to disable a method or property for all RPC calls, making it unavailable. Default for all methods.
 */
  static readonly RPC_MODE_DISABLED: int;
/**
 * Used with `Node.rpc_config` to set a method to be callable remotely by any peer. Analogous to the `@rpc("any_peer")` annotation. Calls are accepted from all remote peers, no matter if they are node's authority or not.
 */
  static readonly RPC_MODE_ANY_PEER: int;
/**
 * Used with `Node.rpc_config` to set a method to be callable remotely only by the current multiplayer authority (which is the server by default). Analogous to the `@rpc("authority")` annotation. See `Node.set_multiplayer_authority`.
 */
  static readonly RPC_MODE_AUTHORITY: int;
}
