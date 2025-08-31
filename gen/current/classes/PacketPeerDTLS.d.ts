import type { GodotArray, GodotDictionary, PacketPeer, PacketPeerUDP, TLSOptions, float, int } from "../index.d.ts";
/**
 * DTLS packet peer.
 * 
 * This class represents a DTLS peer connection. It can be used to connect to a DTLS server, and is returned by `DTLSServer.take_connection`.
 * 
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 * 
 * **Warning:** TLS certificate revocation and certificate pinning are currently not supported. Revoked certificates are accepted as long as they are otherwise valid. If this is a concern, you may want to use automatically managed certificates with a short validity period.
 */
export class PacketPeerDTLS extends PacketPeer {
/**
 * Connects a `packet_peer` beginning the DTLS handshake using the underlying `PacketPeerUDP` which must be connected (see `PacketPeerUDP.connect_to_host`). You can optionally specify the `client_options` to be used while verifying the TLS connections. See `TLSOptions.client` and `TLSOptions.client_unsafe`.
 * @param packetPeer PacketPeerUDP
 * @param hostname string
 * @param clientOptions TLSOptions (optional, default: null)
 * @returns int
 */
  connectToPeer(packetPeer: PacketPeerUDP, hostname: string, clientOptions?: TLSOptions): int;
/**
 * Disconnects this peer, terminating the DTLS session.
 */
  disconnectFromPeer(): void;
/**
 * Returns the status of the connection. See `Status` for values.
 * @returns int
 */
  getStatus(): int;
/**
 * Poll the connection to check for incoming packets. Call this frequently to update the status and keep the connection working.
 */
  poll(): void;
/**
 * A status representing a `PacketPeerDTLS` that is disconnected.
 */
  static readonly STATUS_DISCONNECTED: int;
/**
 * A status representing a `PacketPeerDTLS` that is currently performing the handshake with a remote peer.
 */
  static readonly STATUS_HANDSHAKING: int;
/**
 * A status representing a `PacketPeerDTLS` that is connected to a remote peer.
 */
  static readonly STATUS_CONNECTED: int;
/**
 * A status representing a `PacketPeerDTLS` in a generic error state.
 */
  static readonly STATUS_ERROR: int;
/**
 * An error status that shows a mismatch in the DTLS certificate domain presented by the host and the domain requested for validation.
 */
  static readonly STATUS_ERROR_HOSTNAME_MISMATCH: int;
}
