import type { GodotArray, GodotDictionary, PackedByteArray, RefCounted, Variant, float, int } from "../index.d.ts";
/**
 * Abstraction and base class for packet-based protocols.
 * 
 * PacketPeer is an abstraction and base class for packet-based protocols (such as UDP). It provides an API for sending and receiving packets both as raw data or variables. This makes it easy to transfer data over a protocol, without having to encode data as low-level bytes or having to worry about network ordering.
 * 
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 */
export class PacketPeer extends RefCounted {
/**
 * Maximum buffer size allowed when encoding `Variant`s. Raise this value to support heavier memory allocations.
 * The `put_var` method allocates memory on the stack, and the buffer used will grow automatically to the closest power of two to match the size of the `Variant`. If the `Variant` is bigger than `encode_buffer_max_size`, the method will error out with `ERR_OUT_OF_MEMORY`.
 */
  encodeBufferMaxSize: int;
/**
 * Returns the number of packets currently available in the ring-buffer.
 * @returns int
 */
  getAvailablePacketCount(): int;
/**
 * Gets a raw packet.
 * @returns PackedByteArray
 */
  getPacket(): PackedByteArray;
/**
 * Returns the error state of the last packet received (via `get_packet` and `get_var`).
 * @returns int
 */
  getPacketError(): int;
/**
 * Gets a Variant. If `allow_objects` is `true`, decoding objects is allowed.
 * Internally, this uses the same decoding mechanism as the `@GlobalScope.bytes_to_var` method.
 * 
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 * @param allowObjects boolean (optional, default: false)
 * @returns Variant
 */
  getVar(allowObjects?: boolean): Variant;
/**
 * Sends a raw packet.
 * @param buffer PackedByteArray
 * @returns int
 */
  putPacket(buffer: PackedByteArray): int;
/**
 * Sends a `Variant` as a packet. If `full_objects` is `true`, encoding objects is allowed (and can potentially include code).
 * Internally, this uses the same encoding mechanism as the `@GlobalScope.var_to_bytes` method.
 * @param var_ Variant
 * @param fullObjects boolean (optional, default: false)
 * @returns int
 */
  putVar(var_: Variant, fullObjects?: boolean): int;
}
