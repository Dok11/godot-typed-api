import type { GodotArray, GodotDictionary, StreamPeer, float, int } from "../index.d.ts";
/**
 * A stream peer that handles GZIP and deflate compression/decompression.
 * 
 * This class allows to compress or decompress data using GZIP/deflate in a streaming fashion. This is particularly useful when compressing or decompressing files that have to be sent through the network without needing to allocate them all in memory.
 * After starting the stream via `start_compression` (or `start_decompression`), calling `StreamPeer.put_partial_data` on this stream will compress (or decompress) the data, writing it to the internal buffer. Calling `StreamPeer.get_available_bytes` will return the pending bytes in the internal buffer, and `StreamPeer.get_partial_data` will retrieve the compressed (or decompressed) bytes from it. When the stream is over, you must call `finish` to ensure the internal buffer is properly flushed (make sure to call `StreamPeer.get_available_bytes` on last time to check if more data needs to be read after that).
 */
export class StreamPeerGZIP extends StreamPeer {
/**
 * Clears this stream, resetting the internal state.
 */
  clear(): void;
/**
 * Finalizes the stream, compressing or decompressing any buffered chunk left.
 * @returns int
 */
  finish(): int;
/**
 * Start the stream in compression mode with the given `buffer_size`, if `use_deflate` is `true` uses deflate instead of GZIP.
 * @param useDeflate boolean (optional, default: false)
 * @param bufferSize int (optional, default: 65535)
 * @returns int
 */
  startCompression(useDeflate?: boolean, bufferSize?: int): int;
/**
 * Start the stream in decompression mode with the given `buffer_size`, if `use_deflate` is `true` uses deflate instead of GZIP.
 * @param useDeflate boolean (optional, default: false)
 * @param bufferSize int (optional, default: 65535)
 * @returns int
 */
  startDecompression(useDeflate?: boolean, bufferSize?: int): int;
}
