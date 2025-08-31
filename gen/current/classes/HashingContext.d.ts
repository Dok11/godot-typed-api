import type { GodotArray, GodotDictionary, PackedByteArray, RefCounted, float, int } from "../index.d.ts";
/**
 * Provides functionality for computing cryptographic hashes chunk by chunk.
 * 
 * The HashingContext class provides an interface for computing cryptographic hashes over multiple iterations. Useful for computing hashes of big files (so you don't have to load them all in memory), network streams, and data streams in general (so you don't have to hold buffers).
 * The `HashType` enum shows the supported hashing algorithms.
 * 
 * 		```gdscript
 * 
 * 		const CHUNK_SIZE = 1024
 * 
 * 		func hash_file(path):
 * 		    # Check that file exists.
 * 		    if not FileAccess.file_exists(path):
 * 		        return
 * 		    # Start an SHA-256 context.
 * 		    var ctx = HashingContext.new()
 * 		    ctx.start(HashingContext.HASH_SHA256)
 * 		    # Open the file to hash.
 * 		    var file = FileAccess.open(path, FileAccess.READ)
 * 		    # Update the context after reading each chunk.
 * 		    while file.get_position() < file.get_length():
 * 		        var remaining = file.get_length() - file.get_position()
 * 		        ctx.update(file.get_buffer(min(remaining, CHUNK_SIZE)))
 * 		    # Get the computed hash.
 * 		    var res = ctx.finish()
 * 		    # Print the result as hex string and array.
 * 		    printt(res.hex_encode(), Array(res))
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		public const int ChunkSize = 1024;
 * 
 * 		public void HashFile(string path)
 * 		{
 * 		    // Check that file exists.
 * 		    if (!FileAccess.FileExists(path))
 * 		    {
 * 		        return;
 * 		    }
 * 		    // Start an SHA-256 context.
 * 		    var ctx = new HashingContext();
 * 		    ctx.Start(HashingContext.HashType.Sha256);
 * 		    // Open the file to hash.
 * 		    using var file = FileAccess.Open(path, FileAccess.ModeFlags.Read);
 * 		    // Update the context after reading each chunk.
 * 		    while (file.GetPosition() < file.GetLength())
 * 		    {
 * 		        int remaining = (int)(file.GetLength() - file.GetPosition());
 * 		        ctx.Update(file.GetBuffer(Mathf.Min(remaining, ChunkSize)));
 * 		    }
 * 		    // Get the computed hash.
 * 		    byte[] res = ctx.Finish();
 * 		    // Print the result as hex string and array.
 * 		    GD.PrintT(res.HexEncode(), (Variant)res);
 * 		}
 * 		
 * 
 * ```
 * 
 */
export class HashingContext extends RefCounted {
/**
 * Closes the current context, and return the computed hash.
 * @returns PackedByteArray
 */
  finish(): PackedByteArray;
/**
 * Starts a new hash computation of the given `type` (e.g. `HASH_SHA256` to start computation of an SHA-256).
 * @param type_ int
 * @returns int
 */
  start(type_: int): int;
/**
 * Updates the computation with the given `chunk` of data.
 * @param chunk PackedByteArray
 * @returns int
 */
  update(chunk: PackedByteArray): int;
/**
 * Hashing algorithm: MD5.
 */
  static readonly HASH_MD5: int;
/**
 * Hashing algorithm: SHA-1.
 */
  static readonly HASH_SHA1: int;
/**
 * Hashing algorithm: SHA-256.
 */
  static readonly HASH_SHA256: int;
}
