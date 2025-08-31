import type { GodotArray, GodotDictionary, PacketPeer, Signal, float, int } from "../index.d.ts";
/**
 * Abstract class for specialized `PacketPeer`s used by the `MultiplayerAPI`.
 * 
 * Manages the connection with one or more remote peers acting as server or client and assigning unique IDs to each of them. See also `MultiplayerAPI`.
 * 
 * **Note:** The `MultiplayerAPI` protocol is an implementation detail and isn't meant to be used by non-Godot servers. It may change without notice.
 * 
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 */
export class MultiplayerPeer extends PacketPeer {
/**
 * If `true`, this `MultiplayerPeer` refuses new connections.
 */
  refuseNewConnections: boolean;
/**
 * The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send **different and independent** state updates is a common way to optimize network usage and decrease latency in fast-paced games.
 * 
 * **Note:** The default channel (`0`) actually works as 3 separate channels (one for each `TransferMode`) so that `TRANSFER_MODE_RELIABLE` and `TRANSFER_MODE_UNRELIABLE_ORDERED` does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.
 */
  transferChannel: int;
/**
 * The manner in which to send packets to the target peer. See `TransferMode`, and the `set_target_peer` method.
 */
  transferMode: int;
/**
 * Immediately close the multiplayer peer returning to the state `CONNECTION_DISCONNECTED`. Connected peers will be dropped without emitting `peer_disconnected`.
 */
  close(): void;
/**
 * Disconnects the given `peer` from this host. If `force` is `true` the `peer_disconnected` signal will not be emitted for this peer.
 * @param peer int
 * @param force boolean (optional, default: false)
 */
  disconnectPeer(peer: int, force?: boolean): void;
/**
 * Returns a randomly generated integer that can be used as a network unique ID.
 * @returns int
 */
  generateUniqueId(): int;
/**
 * Returns the current state of the connection. See `ConnectionStatus`.
 * @returns int
 */
  getConnectionStatus(): int;
/**
 * Returns the channel over which the next available packet was received. See `PacketPeer.get_available_packet_count`.
 * @returns int
 */
  getPacketChannel(): int;
/**
 * Returns the transfer mode the remote peer used to send the next available packet. See `PacketPeer.get_available_packet_count`.
 * @returns int
 */
  getPacketMode(): int;
/**
 * Returns the ID of the `MultiplayerPeer` who sent the next available packet. See `PacketPeer.get_available_packet_count`.
 * @returns int
 */
  getPacketPeer(): int;
/**
 * Returns the ID of this `MultiplayerPeer`.
 * @returns int
 */
  getUniqueId(): int;
/**
 * Returns `true` if the server can act as a relay in the current configuration. That is, if the higher level `MultiplayerAPI` should notify connected clients of other peers, and implement a relay protocol to allow communication between them.
 * @returns boolean
 */
  isServerRelaySupported(): boolean;
/**
 * Waits up to 1 second to receive a new network event.
 */
  poll(): void;
/**
 * Sets the peer to which packets will be sent.
 * The `id` can be one of: `TARGET_PEER_BROADCAST` to send to all connected peers, `TARGET_PEER_SERVER` to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is `TARGET_PEER_BROADCAST`.
 * @param id int
 */
  setTargetPeer(id: int): void;
/**
 * Emitted when a remote peer connects.
 */
  peerConnected: Signal<[id: int]>;
/**
 * Emitted when a remote peer has disconnected.
 */
  peerDisconnected: Signal<[id: int]>;
/**
 * The MultiplayerPeer is disconnected.
 */
  static readonly CONNECTION_DISCONNECTED: int;
/**
 * The MultiplayerPeer is currently connecting to a server.
 */
  static readonly CONNECTION_CONNECTING: int;
/**
 * This MultiplayerPeer is connected.
 */
  static readonly CONNECTION_CONNECTED: int;
/**
 * Packets are sent to all connected peers.
 */
  static readonly TARGET_PEER_BROADCAST: int;
/**
 * Packets are sent to the remote peer acting as server.
 */
  static readonly TARGET_PEER_SERVER: int;
/**
 * Packets are not acknowledged, no resend attempts are made for lost packets. Packets may arrive in any order. Potentially faster than `TRANSFER_MODE_UNRELIABLE_ORDERED`. Use for non-critical data, and always consider whether the order matters.
 */
  static readonly TRANSFER_MODE_UNRELIABLE: int;
/**
 * Packets are not acknowledged, no resend attempts are made for lost packets. Packets are received in the order they were sent in. Potentially faster than `TRANSFER_MODE_RELIABLE`. Use for non-critical data or data that would be outdated if received late due to resend attempt(s) anyway, for example movement and positional data.
 */
  static readonly TRANSFER_MODE_UNRELIABLE_ORDERED: int;
/**
 * Packets must be received and resend attempts should be made until the packets are acknowledged. Packets must be received in the order they were sent in. Most reliable transfer mode, but potentially the slowest due to the overhead. Use for critical data that must be transmitted and arrive in order, for example an ability being triggered or a chat message. Consider carefully if the information really is critical, and use sparingly.
 */
  static readonly TRANSFER_MODE_RELIABLE: int;
}
