import type { Dictionary, GodotArray, GodotDictionary, Object, PackedStringArray, float, int } from "../index.d.ts";
/**
 * Internet protocol (IP) support functions such as DNS resolution.
 * 
 * IP contains support functions for the Internet Protocol (IP). TCP/IP support is in different classes (see `StreamPeerTCP` and `TCPServer`). IP provides DNS hostname resolution support, both blocking and threaded.
 */
export class IP extends Object {
/**
 * Removes all of a `hostname`'s cached references. If no `hostname` is given, all cached IP addresses are removed.
 * @param hostname string (optional, default: "")
 */
  clearCache(hostname?: string): void;
/**
 * Removes a given item `id` from the queue. This should be used to free a queue after it has completed to enable more queries to happen.
 * @param id int
 */
  eraseResolveItem(id: int): void;
/**
 * Returns all the user's current IPv4 and IPv6 addresses as an array.
 * @returns PackedStringArray
 */
  getLocalAddresses(): PackedStringArray;
/**
 * Returns all network adapters as an array.
 * Each adapter is a dictionary of the form:
 * 
 * 				```gdscript
 * 
 * 				{
 * 				    "index": "1", # Interface index.
 * 				    "name": "eth0", # Interface name.
 * 				    "friendly": "Ethernet One", # A friendly name (might be empty).
 * 				    "addresses": ["192.168.1.101"], # An array of IP addresses associated to this interface.
 * 				}
 * 				
 * 
 * ```
 * @returns Dictionary[]
 */
  getLocalInterfaces(): Dictionary[];
/**
 * Returns a queued hostname's IP address, given its queue `id`. Returns an empty string on error or if resolution hasn't happened yet (see `get_resolve_item_status`).
 * @param id int
 * @returns string
 */
  getResolveItemAddress(id: int): string;
/**
 * Returns resolved addresses, or an empty array if an error happened or resolution didn't happen yet (see `get_resolve_item_status`).
 * @param id int
 * @returns GodotArray<any>
 */
  getResolveItemAddresses(id: int): GodotArray<any>;
/**
 * Returns a queued hostname's status as a `ResolverStatus` constant, given its queue `id`.
 * @param id int
 * @returns int
 */
  getResolveItemStatus(id: int): int;
/**
 * Returns a given hostname's IPv4 or IPv6 address when resolved (blocking-type method). The address type returned depends on the `Type` constant given as `ip_type`.
 * @param host string
 * @param ipType int (optional, default: 3)
 * @returns string
 */
  resolveHostname(host: string, ipType?: int): string;
/**
 * Resolves a given hostname in a blocking way. Addresses are returned as an `Array` of IPv4 or IPv6 addresses depending on `ip_type`.
 * @param host string
 * @param ipType int (optional, default: 3)
 * @returns PackedStringArray
 */
  resolveHostnameAddresses(host: string, ipType?: int): PackedStringArray;
/**
 * Creates a queue item to resolve a hostname to an IPv4 or IPv6 address depending on the `Type` constant given as `ip_type`. Returns the queue ID if successful, or `RESOLVER_INVALID_ID` on error.
 * @param host string
 * @param ipType int (optional, default: 3)
 * @returns int
 */
  resolveHostnameQueueItem(host: string, ipType?: int): int;
/**
 * DNS hostname resolver status: No status.
 */
  static readonly RESOLVER_STATUS_NONE: int;
/**
 * DNS hostname resolver status: Waiting.
 */
  static readonly RESOLVER_STATUS_WAITING: int;
/**
 * DNS hostname resolver status: Done.
 */
  static readonly RESOLVER_STATUS_DONE: int;
/**
 * DNS hostname resolver status: Error.
 */
  static readonly RESOLVER_STATUS_ERROR: int;
/**
 * Maximum number of concurrent DNS resolver queries allowed, `RESOLVER_INVALID_ID` is returned if exceeded.
 */
  static readonly RESOLVER_MAX_QUERIES: int;
/**
 * Invalid ID constant. Returned if `RESOLVER_MAX_QUERIES` is exceeded.
 */
  static readonly RESOLVER_INVALID_ID: int;
/**
 * Address type: None.
 */
  static readonly TYPE_NONE: int;
/**
 * Address type: Internet protocol version 4 (IPv4).
 */
  static readonly TYPE_IPV4: int;
/**
 * Address type: Internet protocol version 6 (IPv6).
 */
  static readonly TYPE_IPV6: int;
/**
 * Address type: Any.
 */
  static readonly TYPE_ANY: int;
}
