import type { GodotArray, GodotDictionary, StreamPeer, TLSOptions, float, int } from "../index.d.ts";
/**
 * A stream peer that handles TLS connections.
 * 
 * A stream peer that handles TLS connections. This object can be used to connect to a TLS server or accept a single TLS client connection.
 * 
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 */
export class StreamPeerTLS extends StreamPeer {
/**
 * Accepts a peer connection as a server using the given `server_options`. See `TLSOptions.server`.
 * @param stream StreamPeer
 * @param serverOptions TLSOptions
 * @returns int
 */
  acceptStream(stream: StreamPeer, serverOptions: TLSOptions): int;
/**
 * Connects to a peer using an underlying `StreamPeer` `stream` and verifying the remote certificate is correctly signed for the given `common_name`. You can pass the optional `client_options` parameter to customize the trusted certification authorities, or disable the common name verification. See `TLSOptions.client` and `TLSOptions.client_unsafe`.
 * @param stream StreamPeer
 * @param commonName string
 * @param clientOptions TLSOptions (optional, default: null)
 * @returns int
 */
  connectToStream(stream: StreamPeer, commonName: string, clientOptions?: TLSOptions): int;
/**
 * Disconnects from host.
 */
  disconnectFromStream(): void;
/**
 * Returns the status of the connection. See `Status` for values.
 * @returns int
 */
  getStatus(): int;
/**
 * Returns the underlying `StreamPeer` connection, used in `accept_stream` or `connect_to_stream`.
 * @returns StreamPeer
 */
  getStream(): StreamPeer;
/**
 * Poll the connection to check for incoming bytes. Call this right before `StreamPeer.get_available_bytes` for it to work properly.
 */
  poll(): void;
/**
 * A status representing a `StreamPeerTLS` that is disconnected.
 */
  static readonly STATUS_DISCONNECTED: int;
/**
 * A status representing a `StreamPeerTLS` during handshaking.
 */
  static readonly STATUS_HANDSHAKING: int;
/**
 * A status representing a `StreamPeerTLS` that is connected to a host.
 */
  static readonly STATUS_CONNECTED: int;
/**
 * A status representing a `StreamPeerTLS` in error state.
 */
  static readonly STATUS_ERROR: int;
/**
 * An error status that shows a mismatch in the TLS certificate domain presented by the host and the domain requested for validation.
 */
  static readonly STATUS_ERROR_HOSTNAME_MISMATCH: int;
}
