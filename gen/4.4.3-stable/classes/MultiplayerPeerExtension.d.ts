import type { GodotArray, GodotDictionary, MultiplayerPeer, PackedByteArray, float, int } from "../index.d.ts";
/**
 * Class that can be inherited to implement custom multiplayer API networking layers via GDExtension.
 * 
 * This class is designed to be inherited from a GDExtension plugin to implement custom networking layers for the multiplayer API (such as WebRTC). All the methods below **must** be implemented to have a working custom multiplayer implementation. See also `MultiplayerAPI`.
 */
export class MultiplayerPeerExtension extends MultiplayerPeer {
/**
 * Called when the multiplayer peer should be immediately closed (see `MultiplayerPeer.close`).
 */
  private close(): void;
/**
 * Called when the connected `p_peer` should be forcibly disconnected (see `MultiplayerPeer.disconnect_peer`).
 * @param pPeer int
 * @param pForce boolean
 */
  private disconnectPeer(pPeer: int, pForce: boolean): void;
/**
 * Called when the available packet count is internally requested by the `MultiplayerAPI`.
 * @returns int
 */
  private getAvailablePacketCount(): int;
/**
 * Called when the connection status is requested on the `MultiplayerPeer` (see `MultiplayerPeer.get_connection_status`).
 * @returns int
 */
  private getConnectionStatus(): int;
/**
 * Called when the maximum allowed packet size (in bytes) is requested by the `MultiplayerAPI`.
 * @returns int
 */
  private getMaxPacketSize(): int;
/**
 * Called when a packet needs to be received by the `MultiplayerAPI`, with `r_buffer_size` being the size of the binary `r_buffer` in bytes.
 * @param rBuffer unknown
 * @param rBufferSize unknown
 * @returns int
 */
  private getPacket(rBuffer: unknown, rBufferSize: unknown): int;
/**
 * Called to get the channel over which the next available packet was received. See `MultiplayerPeer.get_packet_channel`.
 * @returns int
 */
  private getPacketChannel(): int;
/**
 * Called to get the transfer mode the remote peer used to send the next available packet. See `MultiplayerPeer.get_packet_mode`.
 * @returns int
 */
  private getPacketMode(): int;
/**
 * Called when the ID of the `MultiplayerPeer` who sent the most recent packet is requested (see `MultiplayerPeer.get_packet_peer`).
 * @returns int
 */
  private getPacketPeer(): int;
/**
 * Called when a packet needs to be received by the `MultiplayerAPI`, if `_get_packet` isn't implemented. Use this when extending this class via GDScript.
 * @returns PackedByteArray
 */
  private getPacketScript(): PackedByteArray;
/**
 * Called when the transfer channel to use is read on this `MultiplayerPeer` (see `MultiplayerPeer.transfer_channel`).
 * @returns int
 */
  private getTransferChannel(): int;
/**
 * Called when the transfer mode to use is read on this `MultiplayerPeer` (see `MultiplayerPeer.transfer_mode`).
 * @returns int
 */
  private getTransferMode(): int;
/**
 * Called when the unique ID of this `MultiplayerPeer` is requested (see `MultiplayerPeer.get_unique_id`). The value must be between `1` and `2147483647`.
 * @returns int
 */
  private getUniqueId(): int;
/**
 * Called when the "refuse new connections" status is requested on this `MultiplayerPeer` (see `MultiplayerPeer.refuse_new_connections`).
 * @returns boolean
 */
  private isRefusingNewConnections(): boolean;
/**
 * Called when the "is server" status is requested on the `MultiplayerAPI`. See `MultiplayerAPI.is_server`.
 * @returns boolean
 */
  private isServer(): boolean;
/**
 * Called to check if the server can act as a relay in the current configuration. See `MultiplayerPeer.is_server_relay_supported`.
 * @returns boolean
 */
  private isServerRelaySupported(): boolean;
/**
 * Called when the `MultiplayerAPI` is polled. See `MultiplayerAPI.poll`.
 */
  private poll(): void;
/**
 * Called when a packet needs to be sent by the `MultiplayerAPI`, with `p_buffer_size` being the size of the binary `p_buffer` in bytes.
 * @param pBuffer unknown
 * @param pBufferSize int
 * @returns int
 */
  private putPacket(pBuffer: unknown, pBufferSize: int): int;
/**
 * Called when a packet needs to be sent by the `MultiplayerAPI`, if `_put_packet` isn't implemented. Use this when extending this class via GDScript.
 * @param pBuffer PackedByteArray
 * @returns int
 */
  private putPacketScript(pBuffer: PackedByteArray): int;
/**
 * Called when the "refuse new connections" status is set on this `MultiplayerPeer` (see `MultiplayerPeer.refuse_new_connections`).
 * @param pEnable boolean
 */
  private setRefuseNewConnections(pEnable: boolean): void;
/**
 * Called when the target peer to use is set for this `MultiplayerPeer` (see `MultiplayerPeer.set_target_peer`).
 * @param pPeer int
 */
  private setTargetPeer(pPeer: int): void;
/**
 * Called when the channel to use is set for this `MultiplayerPeer` (see `MultiplayerPeer.transfer_channel`).
 * @param pChannel int
 */
  private setTransferChannel(pChannel: int): void;
/**
 * Called when the transfer mode is set on this `MultiplayerPeer` (see `MultiplayerPeer.transfer_mode`).
 * @param pMode int
 */
  private setTransferMode(pMode: int): void;
}
