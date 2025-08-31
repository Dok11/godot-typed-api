import type { GodotArray, GodotDictionary, PackedByteArray, StreamPeer, float, int } from "../index.d.ts";
/**
 * A stream peer used to handle binary data streams.
 * 
 * A data buffer stream peer that uses a byte array as the stream. This object can be used to handle binary data from network sessions. To handle binary data stored in files, `FileAccess` can be used directly.
 * A `StreamPeerBuffer` object keeps an internal cursor which is the offset in bytes to the start of the buffer. Get and put operations are performed at the cursor position and will move the cursor accordingly.
 */
export class StreamPeerBuffer extends StreamPeer {
/**
 * The underlying data buffer. Setting this value resets the cursor.
 */
  dataArray: PackedByteArray;
/**
 * Clears the `data_array` and resets the cursor.
 */
  clear(): void;
/**
 * Returns a new `StreamPeerBuffer` with the same `data_array` content.
 * @returns StreamPeerBuffer
 */
  duplicate(): StreamPeerBuffer;
/**
 * Returns the current cursor position.
 * @returns int
 */
  getPosition(): int;
/**
 * Returns the size of `data_array`.
 * @returns int
 */
  getSize(): int;
/**
 * Resizes the `data_array`. This *doesn't* update the cursor.
 * @param size int
 */
  resize(size: int): void;
/**
 * Moves the cursor to the specified position. `position` must be a valid index of `data_array`.
 * @param position int
 */
  seek(position: int): void;
}
