import type { GodotArray, GodotDictionary, PackedByteArray, RefCounted, Variant, float, int } from "../index.d.ts";
/**
 * Abstract base class for interacting with streams.
 * 
 * StreamPeer is an abstract base class mostly used for stream-based protocols (such as TCP). It provides an API for sending and receiving data through streams as raw data or strings.
 * 
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 */
export class StreamPeer extends RefCounted {
/**
 * If `true`, this `StreamPeer` will using big-endian format for encoding and decoding.
 */
  bigEndian: boolean;
/**
 * Gets a signed 16-bit value from the stream.
 * @returns int
 */
  get16(): int;
/**
 * Gets a signed 32-bit value from the stream.
 * @returns int
 */
  get32(): int;
/**
 * Gets a signed 64-bit value from the stream.
 * @returns int
 */
  get64(): int;
/**
 * Gets a signed byte from the stream.
 * @returns int
 */
  get8(): int;
/**
 * Returns the number of bytes this `StreamPeer` has available.
 * @returns int
 */
  getAvailableBytes(): int;
/**
 * Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the `bytes` argument. If not enough bytes are available, the function will block until the desired amount is received. This function returns two values, an `Error` code and a data array.
 * @param bytes int
 * @returns GodotArray<any>
 */
  getData(bytes: int): GodotArray<any>;
/**
 * Gets a double-precision float from the stream.
 * @returns float
 */
  getDouble(): float;
/**
 * Gets a single-precision float from the stream.
 * @returns float
 */
  getFloat(): float;
/**
 * Gets a half-precision float from the stream.
 * @returns float
 */
  getHalf(): float;
/**
 * Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the "bytes" argument. If not enough bytes are available, the function will return how many were actually received. This function returns two values, an `Error` code, and a data array.
 * @param bytes int
 * @returns GodotArray<any>
 */
  getPartialData(bytes: int): GodotArray<any>;
/**
 * Gets an ASCII string with byte-length `bytes` from the stream. If `bytes` is negative (default) the length will be read from the stream using the reverse process of `put_string`.
 * @param bytes int (optional, default: -1)
 * @returns string
 */
  getString(bytes?: int): string;
/**
 * Gets an unsigned 16-bit value from the stream.
 * @returns int
 */
  getU16(): int;
/**
 * Gets an unsigned 32-bit value from the stream.
 * @returns int
 */
  getU32(): int;
/**
 * Gets an unsigned 64-bit value from the stream.
 * @returns int
 */
  getU64(): int;
/**
 * Gets an unsigned byte from the stream.
 * @returns int
 */
  getU8(): int;
/**
 * Gets a UTF-8 string with byte-length `bytes` from the stream (this decodes the string sent as UTF-8). If `bytes` is negative (default) the length will be read from the stream using the reverse process of `put_utf8_string`.
 * @param bytes int (optional, default: -1)
 * @returns string
 */
  getUtf8String(bytes?: int): string;
/**
 * Gets a Variant from the stream. If `allow_objects` is `true`, decoding objects is allowed.
 * Internally, this uses the same decoding mechanism as the `@GlobalScope.bytes_to_var` method.
 * 
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 * @param allowObjects boolean (optional, default: false)
 * @returns Variant
 */
  getVar(allowObjects?: boolean): Variant;
/**
 * Puts a signed 16-bit value into the stream.
 * @param value int
 */
  put16(value: int): void;
/**
 * Puts a signed 32-bit value into the stream.
 * @param value int
 */
  put32(value: int): void;
/**
 * Puts a signed 64-bit value into the stream.
 * @param value int
 */
  put64(value: int): void;
/**
 * Puts a signed byte into the stream.
 * @param value int
 */
  put8(value: int): void;
/**
 * Sends a chunk of data through the connection, blocking if necessary until the data is done sending. This function returns an `Error` code.
 * @param data PackedByteArray
 * @returns int
 */
  putData(data: PackedByteArray): int;
/**
 * Puts a double-precision float into the stream.
 * @param value float
 */
  putDouble(value: float): void;
/**
 * Puts a single-precision float into the stream.
 * @param value float
 */
  putFloat(value: float): void;
/**
 * Puts a half-precision float into the stream.
 * @param value float
 */
  putHalf(value: float): void;
/**
 * Sends a chunk of data through the connection. If all the data could not be sent at once, only part of it will. This function returns two values, an `Error` code and an integer, describing how much data was actually sent.
 * @param data PackedByteArray
 * @returns GodotArray<any>
 */
  putPartialData(data: PackedByteArray): GodotArray<any>;
/**
 * Puts a zero-terminated ASCII string into the stream prepended by a 32-bit unsigned integer representing its size.
 * 
 * **Note:** To put an ASCII string without prepending its size, you can use `put_data`:
 * 
 * 				```gdscript
 * 
 * 				put_data("Hello world".to_ascii_buffer())
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				PutData("Hello World".ToAsciiBuffer());
 * 				
 * 
 * ```
 * 
 * @param value string
 */
  putString(value: string): void;
/**
 * Puts an unsigned 16-bit value into the stream.
 * @param value int
 */
  putU16(value: int): void;
/**
 * Puts an unsigned 32-bit value into the stream.
 * @param value int
 */
  putU32(value: int): void;
/**
 * Puts an unsigned 64-bit value into the stream.
 * @param value int
 */
  putU64(value: int): void;
/**
 * Puts an unsigned byte into the stream.
 * @param value int
 */
  putU8(value: int): void;
/**
 * Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.
 * 
 * **Note:** To put a UTF-8 string without prepending its size, you can use `put_data`:
 * 
 * 				```gdscript
 * 
 * 				put_data("Hello world".to_utf8_buffer())
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				PutData("Hello World".ToUtf8Buffer());
 * 				
 * 
 * ```
 * 
 * @param value string
 */
  putUtf8String(value: string): void;
/**
 * Puts a Variant into the stream. If `full_objects` is `true` encoding objects is allowed (and can potentially include code).
 * Internally, this uses the same encoding mechanism as the `@GlobalScope.var_to_bytes` method.
 * @param value Variant
 * @param fullObjects boolean (optional, default: false)
 */
  putVar(value: Variant, fullObjects?: boolean): void;
}
