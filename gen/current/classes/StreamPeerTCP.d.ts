import type { GodotArray, GodotDictionary, StreamPeer, float, int } from "../index.d.ts";
/**
 * A stream peer that handles TCP connections.
 * 
 * A stream peer that handles TCP connections. This object can be used to connect to TCP servers, or also is returned by a TCP server.
 * 
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 */
export class StreamPeerTCP extends StreamPeer {
/**
 * Opens the TCP socket, and binds it to the specified local address.
 * This method is generally not needed, and only used to force the subsequent call to `connect_to_host` to use the specified `host` and `port` as source address. This can be desired in some NAT punchthrough techniques, or when forcing the source network interface.
 * @param port int
 * @param host string (optional, default: "*")
 * @returns int
 */
  bind(port: int, host?: string): int;
/**
 * Connects to the specified `host:port` pair. A hostname will be resolved if valid. Returns `OK` on success.
 * @param host string
 * @param port int
 * @returns int
 */
  connectToHost(host: string, port: int): int;
/**
 * Disconnects from host.
 */
  disconnectFromHost(): void;
/**
 * Returns the IP of this peer.
 * @returns string
 */
  getConnectedHost(): string;
/**
 * Returns the port of this peer.
 * @returns int
 */
  getConnectedPort(): int;
/**
 * Returns the local port to which this peer is bound.
 * @returns int
 */
  getLocalPort(): int;
/**
 * Returns the status of the connection, see `Status`.
 * @returns int
 */
  getStatus(): int;
/**
 * Poll the socket, updating its state. See `get_status`.
 * @returns int
 */
  poll(): int;
/**
 * If `enabled` is `true`, packets will be sent immediately. If `enabled` is `false` (the default), packet transfers will be delayed and combined using Nagle's algorithm (https://en.wikipedia.org/wiki/Nagle%27s_algorithm).
 * 
 * **Note:** It's recommended to leave this disabled for applications that send large packets or need to transfer a lot of data, as enabling this can decrease the total available bandwidth.
 * @param enabled boolean
 */
  setNoDelay(enabled: boolean): void;
/**
 * The initial status of the `StreamPeerTCP`. This is also the status after disconnecting.
 */
  static readonly STATUS_NONE: int;
/**
 * A status representing a `StreamPeerTCP` that is connecting to a host.
 */
  static readonly STATUS_CONNECTING: int;
/**
 * A status representing a `StreamPeerTCP` that is connected to a host.
 */
  static readonly STATUS_CONNECTED: int;
/**
 * A status representing a `StreamPeerTCP` in error state.
 */
  static readonly STATUS_ERROR: int;
}
