import type { GodotArray, GodotDictionary, PackedFloat32Array, PackedFloat64Array, PackedInt32Array, PackedInt64Array, Variant, float, int } from "../index.d.ts";
/**
 * A packed array of bytes.
 * 
 * An array specifically designed to hold bytes. Packs data tightly, so it saves memory for large array sizes.
 * `PackedByteArray` also provides methods to encode/decode various types to/from bytes. The way values are encoded is an implementation detail and shouldn't be relied upon when interacting with external apps.
 * 
 * **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use `duplicate`. This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.
 */
export class PackedByteArray {
/**
 * Appends an element at the end of the array (alias of `push_back`).
 * @param value int
 * @returns boolean
 */
  append(value: int): boolean;
/**
 * Appends a `PackedByteArray` at the end of this array.
 * @param array PackedByteArray
 */
  appendArray(array: PackedByteArray): void;
/**
 * Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a `before` specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.
 * 
 * **Note:** Calling `bsearch` on an unsorted array results in unexpected behavior.
 * @param value int
 * @param before boolean (optional, default: true)
 * @returns int
 */
  bsearch(value: int, before?: boolean): int;
/**
 * Clears the array. This is equivalent to using `resize` with a size of `0`.
 */
  clear(): void;
/**
 * Returns a new `PackedByteArray` with the data compressed. Set the compression mode using one of `FileAccess.CompressionMode`'s constants.
 * @param compressionMode int (optional, default: 0)
 * @returns PackedByteArray
 */
  compress(compressionMode?: int): PackedByteArray;
/**
 * Returns the number of times an element is in the array.
 * @param value int
 * @returns int
 */
  count(value: int): int;
/**
 * Decodes a 64-bit floating-point number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns float
 */
  decodeDouble(byteOffset: int): float;
/**
 * Decodes a 32-bit floating-point number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns float
 */
  decodeFloat(byteOffset: int): float;
/**
 * Decodes a 16-bit floating-point number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns float
 */
  decodeHalf(byteOffset: int): float;
/**
 * Decodes a 16-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeS16(byteOffset: int): int;
/**
 * Decodes a 32-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeS32(byteOffset: int): int;
/**
 * Decodes a 64-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeS64(byteOffset: int): int;
/**
 * Decodes a 8-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeS8(byteOffset: int): int;
/**
 * Decodes a 16-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeU16(byteOffset: int): int;
/**
 * Decodes a 32-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeU32(byteOffset: int): int;
/**
 * Decodes a 64-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeU64(byteOffset: int): int;
/**
 * Decodes a 8-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.
 * @param byteOffset int
 * @returns int
 */
  decodeU8(byteOffset: int): int;
/**
 * Decodes a `Variant` from the bytes starting at `byte_offset`. Returns `null` if a valid variant can't be decoded or the value is `Object`-derived and `allow_objects` is `false`.
 * @param byteOffset int
 * @param allowObjects boolean (optional, default: false)
 * @returns Variant
 */
  decodeVar(byteOffset: int, allowObjects?: boolean): Variant;
/**
 * Decodes a size of a `Variant` from the bytes starting at `byte_offset`. Requires at least 4 bytes of data starting at the offset, otherwise fails.
 * @param byteOffset int
 * @param allowObjects boolean (optional, default: false)
 * @returns int
 */
  decodeVarSize(byteOffset: int, allowObjects?: boolean): int;
/**
 * Returns a new `PackedByteArray` with the data decompressed. Set `buffer_size` to the size of the uncompressed data. Set the compression mode using one of `FileAccess.CompressionMode`'s constants.
 * 
 * **Note:** Decompression is not guaranteed to work with data not compressed by Godot, for example if data compressed with the deflate compression mode lacks a checksum or header.
 * @param bufferSize int
 * @param compressionMode int (optional, default: 0)
 * @returns PackedByteArray
 */
  decompress(bufferSize: int, compressionMode?: int): PackedByteArray;
/**
 * Returns a new `PackedByteArray` with the data decompressed. Set the compression mode using one of `FileAccess.CompressionMode`'s constants. **This method only accepts brotli, gzip, and deflate compression modes.**
 * This method is potentially slower than `decompress`, as it may have to re-allocate its output buffer multiple times while decompressing, whereas `decompress` knows it's output buffer size from the beginning.
 * GZIP has a maximal compression ratio of 1032:1, meaning it's very possible for a small compressed payload to decompress to a potentially very large output. To guard against this, you may provide a maximum size this function is allowed to allocate in bytes via `max_output_size`. Passing -1 will allow for unbounded output. If any positive value is passed, and the decompression exceeds that amount in bytes, then an error will be returned.
 * 
 * **Note:** Decompression is not guaranteed to work with data not compressed by Godot, for example if data compressed with the deflate compression mode lacks a checksum or header.
 * @param maxOutputSize int
 * @param compressionMode int (optional, default: 0)
 * @returns PackedByteArray
 */
  decompressDynamic(maxOutputSize: int, compressionMode?: int): PackedByteArray;
/**
 * Creates a copy of the array, and returns it.
 * @returns PackedByteArray
 */
  duplicate(): PackedByteArray;
/**
 * Encodes a 64-bit floating-point number as bytes at the index of `byte_offset` bytes. The array must have at least 8 bytes of allocated space, starting at the offset.
 * @param byteOffset int
 * @param value float
 */
  encodeDouble(byteOffset: int, value: float): void;
/**
 * Encodes a 32-bit floating-point number as bytes at the index of `byte_offset` bytes. The array must have at least 4 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value float
 */
  encodeFloat(byteOffset: int, value: float): void;
/**
 * Encodes a 16-bit floating-point number as bytes at the index of `byte_offset` bytes. The array must have at least 2 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value float
 */
  encodeHalf(byteOffset: int, value: float): void;
/**
 * Encodes a 16-bit signed integer number as bytes at the index of `byte_offset` bytes. The array must have at least 2 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeS16(byteOffset: int, value: int): void;
/**
 * Encodes a 32-bit signed integer number as bytes at the index of `byte_offset` bytes. The array must have at least 4 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeS32(byteOffset: int, value: int): void;
/**
 * Encodes a 64-bit signed integer number as bytes at the index of `byte_offset` bytes. The array must have at least 8 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeS64(byteOffset: int, value: int): void;
/**
 * Encodes a 8-bit signed integer number (signed byte) at the index of `byte_offset` bytes. The array must have at least 1 byte of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeS8(byteOffset: int, value: int): void;
/**
 * Encodes a 16-bit unsigned integer number as bytes at the index of `byte_offset` bytes. The array must have at least 2 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeU16(byteOffset: int, value: int): void;
/**
 * Encodes a 32-bit unsigned integer number as bytes at the index of `byte_offset` bytes. The array must have at least 4 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeU32(byteOffset: int, value: int): void;
/**
 * Encodes a 64-bit unsigned integer number as bytes at the index of `byte_offset` bytes. The array must have at least 8 bytes of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeU64(byteOffset: int, value: int): void;
/**
 * Encodes a 8-bit unsigned integer number (byte) at the index of `byte_offset` bytes. The array must have at least 1 byte of space, starting at the offset.
 * @param byteOffset int
 * @param value int
 */
  encodeU8(byteOffset: int, value: int): void;
/**
 * Encodes a `Variant` at the index of `byte_offset` bytes. A sufficient space must be allocated, depending on the encoded variant's size. If `allow_objects` is `false`, `Object`-derived values are not permitted and will instead be serialized as ID-only.
 * @param byteOffset int
 * @param value Variant
 * @param allowObjects boolean (optional, default: false)
 * @returns int
 */
  encodeVar(byteOffset: int, value: Variant, allowObjects?: boolean): int;
/**
 * Assigns the given value to all elements in the array. This can typically be used together with `resize` to create an array with a given size and initialized elements.
 * @param value int
 */
  fill(value: int): void;
/**
 * Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.
 * @param value int
 * @param from_ int (optional, default: 0)
 * @returns int
 */
  find(value: int, from_?: int): int;
/**
 * Returns the byte at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).
 * @param index int
 * @returns int
 */
  get_(index: int): int;
/**
 * Converts ASCII/Latin-1 encoded array to `String`. Fast alternative to `get_string_from_utf8` if the content is ASCII/Latin-1 only. Unlike the UTF-8 function this function maps every byte to a character in the array. Multibyte sequences will not be interpreted correctly. For parsing user input always use `get_string_from_utf8`. This is the inverse of `String.to_ascii_buffer`.
 * @returns string
 */
  getStringFromAscii(): string;
/**
 * Converts UTF-16 encoded array to `String`. If the BOM is missing, system endianness is assumed. Returns empty string if source array is not valid UTF-16 string. This is the inverse of `String.to_utf16_buffer`.
 * @returns string
 */
  getStringFromUtf16(): string;
/**
 * Converts UTF-32 encoded array to `String`. System endianness is assumed. Returns empty string if source array is not valid UTF-32 string. This is the inverse of `String.to_utf32_buffer`.
 * @returns string
 */
  getStringFromUtf32(): string;
/**
 * Converts UTF-8 encoded array to `String`. Slower than `get_string_from_ascii` but supports UTF-8 encoded data. Use this function if you are unsure about the source of the data. For user input this function should always be preferred. Returns empty string if source array is not valid UTF-8 string. This is the inverse of `String.to_utf8_buffer`.
 * @returns string
 */
  getStringFromUtf8(): string;
/**
 * Converts wide character (`wchar_t`, UTF-16 on Windows, UTF-32 on other platforms) encoded array to `String`. Returns empty string if source array is not valid wide string. This is the inverse of `String.to_wchar_buffer`.
 * @returns string
 */
  getStringFromWchar(): string;
/**
 * Returns `true` if the array contains `value`.
 * @param value int
 * @returns boolean
 */
  has(value: int): boolean;
/**
 * Returns `true` if a valid `Variant` value can be decoded at the `byte_offset`. Returns `false` otherwise or when the value is `Object`-derived and `allow_objects` is `false`.
 * @param byteOffset int
 * @param allowObjects boolean (optional, default: false)
 * @returns boolean
 */
  hasEncodedVar(byteOffset: int, allowObjects?: boolean): boolean;
/**
 * Returns a hexadecimal representation of this array as a `String`.
 * 
 * 				```gdscript
 * 
 * 				var array = PackedByteArray([11, 46, 255])
 * 				print(array.hex_encode()) # Prints "0b2eff"
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				byte[] array = [11, 46, 255];
 * 				GD.Print(array.HexEncode()); // Prints "0b2eff"
 * 				
 * 
 * ```
 * 
 * @returns string
 */
  hexEncode(): string;
/**
 * Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).
 * @param atIndex int
 * @param value int
 * @returns int
 */
  insert(atIndex: int, value: int): int;
/**
 * Returns `true` if the array is empty.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Appends an element at the end of the array.
 * @param value int
 * @returns boolean
 */
  pushBack(value: int): boolean;
/**
 * Removes an element from the array by index.
 * @param index int
 */
  removeAt(index: int): void;
/**
 * Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling `resize` once and assigning the new values is faster than adding new elements one by one.
 * @param newSize int
 * @returns int
 */
  resize(newSize: int): int;
/**
 * Reverses the order of the elements in the array.
 */
  reverse(): void;
/**
 * Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.
 * @param value int
 * @param from_ int (optional, default: -1)
 * @returns int
 */
  rfind(value: int, from_?: int): int;
/**
 * Changes the byte at the given index.
 * @param index int
 * @param value int
 */
  set_(index: int, value: int): void;
/**
 * Returns the number of elements in the array.
 * @returns int
 */
  size(): int;
/**
 * Returns the slice of the `PackedByteArray`, from `begin` (inclusive) to `end` (exclusive), as a new `PackedByteArray`.
 * The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 * If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 * @param begin int
 * @param end int (optional, default: 2147483647)
 * @returns PackedByteArray
 */
  slice(begin: int, end?: int): PackedByteArray;
/**
 * Sorts the elements of the array in ascending order.
 */
  sort(): void;
/**
 * Returns a copy of the data converted to a `PackedFloat32Array`, where each block of 4 bytes has been converted to a 32-bit float (C++ [code skip-lint]float[/code]).
 * The size of the input array must be a multiple of 4 (size of 32-bit float). The size of the new array will be `byte_array.size() / 4`.
 * If the original data can't be converted to 32-bit floats, the resulting data is undefined.
 * @returns PackedFloat32Array
 */
  toFloat32Array(): PackedFloat32Array;
/**
 * Returns a copy of the data converted to a `PackedFloat64Array`, where each block of 8 bytes has been converted to a 64-bit float (C++ `double`, Godot [float]).
 * The size of the input array must be a multiple of 8 (size of 64-bit double). The size of the new array will be `byte_array.size() / 8`.
 * If the original data can't be converted to 64-bit floats, the resulting data is undefined.
 * @returns PackedFloat64Array
 */
  toFloat64Array(): PackedFloat64Array;
/**
 * Returns a copy of the data converted to a `PackedInt32Array`, where each block of 4 bytes has been converted to a signed 32-bit integer (C++ `int32_t`).
 * The size of the input array must be a multiple of 4 (size of 32-bit integer). The size of the new array will be `byte_array.size() / 4`.
 * If the original data can't be converted to signed 32-bit integers, the resulting data is undefined.
 * @returns PackedInt32Array
 */
  toInt32Array(): PackedInt32Array;
/**
 * Returns a copy of the data converted to a `PackedInt64Array`, where each block of 8 bytes has been converted to a signed 64-bit integer (C++ `int64_t`, Godot [int]).
 * The size of the input array must be a multiple of 8 (size of 64-bit integer). The size of the new array will be `byte_array.size() / 8`.
 * If the original data can't be converted to signed 64-bit integers, the resulting data is undefined.
 * @returns PackedInt64Array
 */
  toInt64Array(): PackedInt64Array;
}
