import type { GodotArray, GodotDictionary, PackedByteArray, PackedStringArray, RefCounted, Variant, float, int } from "../index.d.ts";
/**
 * Provides methods for file reading and writing operations.
 * 
 * This class can be used to permanently store data in the user device's file system and to read from it. This is useful for storing game save data or player configuration files.
 * Here's a sample on how to write and read from a file:
 * 
 * 		```gdscript
 * 
 * 		func save_to_file(content):
 * 		    var file = FileAccess.open("user://save_game.dat", FileAccess.WRITE)
 * 		    file.store_string(content)
 * 
 * 		func load_from_file():
 * 		    var file = FileAccess.open("user://save_game.dat", FileAccess.READ)
 * 		    var content = file.get_as_text()
 * 		    return content
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		public void SaveToFile(string content)
 * 		{
 * 		    using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Write);
 * 		    file.StoreString(content);
 * 		}
 * 
 * 		public string LoadFromFile()
 * 		{
 * 		    using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Read);
 * 		    string content = file.GetAsText();
 * 		    return content;
 * 		}
 * 		
 * 
 * ```
 * 
 * In the example above, the file will be saved in the user data folder as specified in the Data paths (https://docs.godotengine.org/en/stable/tutorials/io/data_paths.html) documentation.
 * `FileAccess` will close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. `close` can be used to close it before then explicitly. In C# the reference must be disposed manually, which can be done with the `using` statement or by calling the `Dispose` method directly.
 * 
 * **Note:** To access project resources once exported, it is recommended to use `ResourceLoader` instead of `FileAccess`, as some files are converted to engine-specific formats and their original source files might not be present in the exported PCK package. If using `FileAccess`, make sure the file is included in the export by changing its import mode to **Keep File (exported as is)** in the Import dock, or, for files where this option is not available, change the non-resource export filter in the Export dialog to include the file's extension (e.g. `*.txt`).
 * 
 * **Note:** Files are automatically closed only if the process exits "normally" (such as by clicking the window manager's close button or pressing **Alt + F4**). If you stop the project execution by pressing **F8** while the project is running, the file won't be closed as the game process will be killed. You can work around this by calling `flush` at regular intervals.
 */
export class FileAccess extends RefCounted {
/**
 * If `true`, the file is read with big-endian endianness (https://en.wikipedia.org/wiki/Endianness). If `false`, the file is read with little-endian endianness. If in doubt, leave this to `false` as most files are written with little-endian endianness.
 * 
 * **Note:** `big_endian` is only about the file format, not the CPU type. The CPU endianness doesn't affect the default endianness for files written.
 * 
 * **Note:** This is always reset to `false` whenever you open the file. Therefore, you must set `big_endian` *after* opening the file, not before.
 */
  bigEndian: boolean;
/**
 * Closes the currently opened file and prevents subsequent read/write operations. Use `flush` to persist the data to disk without closing the file.
 * 
 * **Note:** `FileAccess` will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. In C# the reference must be disposed after we are done using it, this can be done with the `using` statement or calling the `Dispose` method directly.
 */
  close(): void;
/**
 * Creates a temporary file. This file will be freed when the returned `FileAccess` is freed.
 * If `prefix` is not empty, it will be prefixed to the file name, separated by a `-`.
 * If `extension` is not empty, it will be appended to the temporary file name.
 * If `keep` is `true`, the file is not deleted when the returned `FileAccess` is freed.
 * Returns `null` if opening the file failed. You can use `get_open_error` to check the error that occurred.
 * @param modeFlags int
 * @param prefix string (optional, default: "")
 * @param extension string (optional, default: "")
 * @param keep boolean (optional, default: false)
 * @returns FileAccess
 */
  createTemp(modeFlags: int, prefix?: string, extension?: string, keep?: boolean): FileAccess;
/**
 * Returns `true` if the file cursor has already read past the end of the file.
 * 
 * **Note:** `eof_reached() == false` cannot be used to check whether there is more data available. To loop while there is more data available, use:
 * 
 * 				```gdscript
 * 
 * 				while file.get_position() < file.get_length():
 * 				    # Read data
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				while (file.GetPosition() < file.GetLength())
 * 				{
 * 				    // Read data
 * 				}
 * 				
 * 
 * ```
 * 
 * @returns boolean
 */
  eofReached(): boolean;
/**
 * Returns `true` if the file exists in the given path.
 * 
 * **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See `ResourceLoader.exists` for an alternative approach that takes resource remapping into account.
 * For a non-static, relative equivalent, use `DirAccess.file_exists`.
 * @param path string
 * @returns boolean
 */
  fileExists(path: string): boolean;
/**
 * Writes the file's buffer to disk. Flushing is automatically performed when the file is closed. This means you don't need to call `flush` manually before closing a file. Still, calling `flush` can be used to ensure the data is safe even if the project crashes instead of being closed gracefully.
 * 
 * **Note:** Only call `flush` when you actually need it. Otherwise, it will decrease performance due to constant disk writes.
 */
  flush(): void;
/**
 * Returns the next 16 bits from the file as an integer. See `store_16` for details on what values can be stored and retrieved this way.
 * @returns int
 */
  get16(): int;
/**
 * Returns the next 32 bits from the file as an integer. See `store_32` for details on what values can be stored and retrieved this way.
 * @returns int
 */
  get32(): int;
/**
 * Returns the next 64 bits from the file as an integer. See `store_64` for details on what values can be stored and retrieved this way.
 * @returns int
 */
  get64(): int;
/**
 * Returns the next 8 bits from the file as an integer. See `store_8` for details on what values can be stored and retrieved this way.
 * @returns int
 */
  get8(): int;
/**
 * Returns the whole file as a `String`. Text is interpreted as being UTF-8 encoded.
 * If `skip_cr` is `true`, carriage return characters (`\r`, CR) will be ignored when parsing the UTF-8, so that only line feed characters (`\n`, LF) represent a new line (Unix convention).
 * @param skipCr boolean (optional, default: false)
 * @returns string
 */
  getAsText(skipCr?: boolean): string;
/**
 * Returns next `length` bytes of the file as a `PackedByteArray`.
 * @param length int
 * @returns PackedByteArray
 */
  getBuffer(length: int): PackedByteArray;
/**
 * Returns the next value of the file in CSV (Comma-Separated Values) format. You can pass a different delimiter `delim` to use other than the default `","` (comma). This delimiter must be one-character long, and cannot be a double quotation mark.
 * Text is interpreted as being UTF-8 encoded. Text values must be enclosed in double quotes if they include the delimiter character. Double quotes within a text value can be escaped by doubling their occurrence.
 * For example, the following CSV lines are valid and will be properly parsed as two strings each:
 * [codeblock lang=text]
 * Alice,"Hello, Bob!"
 * Bob,Alice! What a surprise!
 * Alice,"I thought you'd reply with ""Hello, world""."
 * [/codeblock]
 * Note how the second line can omit the enclosing quotes as it does not include the delimiter. However it *could* very well use quotes, it was only written without for demonstration purposes. The third line must use `""` for each quotation mark that needs to be interpreted as such instead of the end of a text value.
 * @param delim string (optional, default: ",")
 * @returns PackedStringArray
 */
  getCsvLine(delim?: string): PackedStringArray;
/**
 * Returns the next 64 bits from the file as a floating-point number.
 * @returns float
 */
  getDouble(): float;
/**
 * Returns the last error that happened when trying to perform operations. Compare with the `ERR_FILE_*` constants from `Error`.
 * @returns int
 */
  getError(): int;
/**
 * Returns the whole `path` file contents as a `PackedByteArray` without any decoding.
 * Returns an empty `PackedByteArray` if an error occurred while opening the file. You can use `get_open_error` to check the error that occurred.
 * @param path string
 * @returns PackedByteArray
 */
  getFileAsBytes(path: string): PackedByteArray;
/**
 * Returns the whole `path` file contents as a `String`. Text is interpreted as being UTF-8 encoded.
 * Returns an empty `String` if an error occurred while opening the file. You can use `get_open_error` to check the error that occurred.
 * @param path string
 * @returns string
 */
  getFileAsString(path: string): string;
/**
 * Returns the next 32 bits from the file as a floating-point number.
 * @returns float
 */
  getFloat(): float;
/**
 * Returns the next 16 bits from the file as a half-precision floating-point number.
 * @returns float
 */
  getHalf(): float;
/**
 * Returns `true`, if file `hidden` attribute is set.
 * 
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 * @param file string
 * @returns boolean
 */
  getHiddenAttribute(file: string): boolean;
/**
 * Returns the size of the file in bytes. For a pipe, returns the number of bytes available for reading from the pipe.
 * @returns int
 */
  getLength(): int;
/**
 * Returns the next line of the file as a `String`. The returned string doesn't include newline (`\n`) or carriage return (`\r`) characters, but does include any other leading or trailing whitespace.
 * Text is interpreted as being UTF-8 encoded.
 * @returns string
 */
  getLine(): string;
/**
 * Returns an MD5 String representing the file at the given path or an empty `String` on failure.
 * @param path string
 * @returns string
 */
  getMd5(path: string): string;
/**
 * Returns the last time the `file` was modified in Unix timestamp format, or `0` on error. This Unix timestamp can be converted to another format using the `Time` singleton.
 * @param file string
 * @returns int
 */
  getModifiedTime(file: string): int;
/**
 * Returns the result of the last `open` call in the current thread.
 * @returns int
 */
  getOpenError(): int;
/**
 * Returns a `String` saved in Pascal format from the file.
 * Text is interpreted as being UTF-8 encoded.
 * @returns string
 */
  getPascalString(): string;
/**
 * Returns the path as a `String` for the current open file.
 * @returns string
 */
  getPath(): string;
/**
 * Returns the absolute path as a `String` for the current open file.
 * @returns string
 */
  getPathAbsolute(): string;
/**
 * Returns the file cursor's position.
 * @returns int
 */
  getPosition(): int;
/**
 * Returns `true`, if file `read only` attribute is set.
 * 
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 * @param file string
 * @returns boolean
 */
  getReadOnlyAttribute(file: string): boolean;
/**
 * Returns the next bits from the file as a floating-point number.
 * @returns float
 */
  getReal(): float;
/**
 * Returns an SHA-256 `String` representing the file at the given path or an empty `String` on failure.
 * @param path string
 * @returns string
 */
  getSha256(path: string): string;
/**
 * Returns file UNIX permissions.
 * 
 * **Note:** This method is implemented on iOS, Linux/BSD, and macOS.
 * @param file string
 * @returns int
 */
  getUnixPermissions(file: string): int;
/**
 * Returns the next `Variant` value from the file. If `allow_objects` is `true`, decoding objects is allowed.
 * Internally, this uses the same decoding mechanism as the `@GlobalScope.bytes_to_var` method.
 * 
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 * @param allowObjects boolean (optional, default: false)
 * @returns Variant
 */
  getVar(allowObjects?: boolean): Variant;
/**
 * Returns `true` if the file is currently opened.
 * @returns boolean
 */
  isOpen(): boolean;
/**
 * Creates a new `FileAccess` object and opens the file for writing or reading, depending on the flags.
 * Returns `null` if opening the file failed. You can use `get_open_error` to check the error that occurred.
 * @param path string
 * @param flags int
 * @returns FileAccess
 */
  open(path: string, flags: int): FileAccess;
/**
 * Creates a new `FileAccess` object and opens a compressed file for reading or writing.
 * 
 * **Note:** `open_compressed` can only read files that were saved by Godot, not third-party compression formats. See GitHub issue #28999 (https://github.com/godotengine/godot/issues/28999) for a workaround.
 * Returns `null` if opening the file failed. You can use `get_open_error` to check the error that occurred.
 * @param path string
 * @param modeFlags int
 * @param compressionMode int (optional, default: 0)
 * @returns FileAccess
 */
  openCompressed(path: string, modeFlags: int, compressionMode?: int): FileAccess;
/**
 * Creates a new `FileAccess` object and opens an encrypted file in write or read mode. You need to pass a binary key to encrypt/decrypt it.
 * 
 * **Note:** The provided key must be 32 bytes long.
 * Returns `null` if opening the file failed. You can use `get_open_error` to check the error that occurred.
 * @param path string
 * @param modeFlags int
 * @param key PackedByteArray
 * @param iv PackedByteArray (optional, default: PackedByteArray())
 * @returns FileAccess
 */
  openEncrypted(path: string, modeFlags: int, key: PackedByteArray, iv?: PackedByteArray): FileAccess;
/**
 * Creates a new `FileAccess` object and opens an encrypted file in write or read mode. You need to pass a password to encrypt/decrypt it.
 * Returns `null` if opening the file failed. You can use `get_open_error` to check the error that occurred.
 * @param path string
 * @param modeFlags int
 * @param pass string
 * @returns FileAccess
 */
  openEncryptedWithPass(path: string, modeFlags: int, pass: string): FileAccess;
/**
 * Resizes the file to a specified length. The file must be open in a mode that permits writing. If the file is extended, NUL characters are appended. If the file is truncated, all data from the end file to the original length of the file is lost.
 * @param length int
 * @returns int
 */
  resize(length: int): int;
/**
 * Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file).
 * @param position int
 */
  seek(position: int): void;
/**
 * Changes the file reading/writing cursor to the specified position (in bytes from the end of the file).
 * 
 * **Note:** This is an offset, so you should use negative numbers or the cursor will be at the end of the file.
 * @param position int (optional, default: 0)
 */
  seekEnd(position?: int): void;
/**
 * Sets file **hidden** attribute.
 * 
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 * @param file string
 * @param hidden boolean
 * @returns int
 */
  setHiddenAttribute(file: string, hidden: boolean): int;
/**
 * Sets file **read only** attribute.
 * 
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 * @param file string
 * @param ro boolean
 * @returns int
 */
  setReadOnlyAttribute(file: string, ro: boolean): int;
/**
 * Sets file UNIX permissions.
 * 
 * **Note:** This method is implemented on iOS, Linux/BSD, and macOS.
 * @param file string
 * @param permissions int
 * @returns int
 */
  setUnixPermissions(file: string, permissions: int): int;
/**
 * Stores an integer as 16 bits in the file.
 * 
 * **Note:** The `value` should lie in the interval `[0, 2^16 - 1]`. Any other value will overflow and wrap around.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * To store a signed integer, use `store_64` or store a signed integer from the interval `[-2^15, 2^15 - 1]` (i.e. keeping one bit for the signedness) and compute its sign manually when reading. For example:
 * 
 * 				```gdscript
 * 
 * 				const MAX_15B = 1 << 15
 * 				const MAX_16B = 1 << 16
 * 
 * 				func unsigned16_to_signed(unsigned):
 * 				    return (unsigned + MAX_15B) % MAX_16B - MAX_15B
 * 
 * 				func _ready():
 * 				    var f = FileAccess.open("user://file.dat", FileAccess.WRITE_READ)
 * 				    f.store_16(-42) # This wraps around and stores 65494 (2^16 - 42).
 * 				    f.store_16(121) # In bounds, will store 121.
 * 				    f.seek(0) # Go back to start to read the stored value.
 * 				    var read1 = f.get_16() # 65494
 * 				    var read2 = f.get_16() # 121
 * 				    var converted1 = unsigned16_to_signed(read1) # -42
 * 				    var converted2 = unsigned16_to_signed(read2) # 121
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Ready()
 * 				{
 * 				    using var f = FileAccess.Open("user://file.dat", FileAccess.ModeFlags.WriteRead);
 * 				    f.Store16(unchecked((ushort)-42)); // This wraps around and stores 65494 (2^16 - 42).
 * 				    f.Store16(121); // In bounds, will store 121.
 * 				    f.Seek(0); // Go back to start to read the stored value.
 * 				    ushort read1 = f.Get16(); // 65494
 * 				    ushort read2 = f.Get16(); // 121
 * 				    short converted1 = (short)read1; // -42
 * 				    short converted2 = (short)read2; // 121
 * 				}
 * 				
 * 
 * ```
 * 
 * @param value int
 * @returns boolean
 */
  store16(value: int): boolean;
/**
 * Stores an integer as 32 bits in the file.
 * 
 * **Note:** The `value` should lie in the interval `[0, 2^32 - 1]`. Any other value will overflow and wrap around.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * To store a signed integer, use `store_64`, or convert it manually (see `store_16` for an example).
 * @param value int
 * @returns boolean
 */
  store32(value: int): boolean;
/**
 * Stores an integer as 64 bits in the file.
 * 
 * **Note:** The `value` must lie in the interval `[-2^63, 2^63 - 1]` (i.e. be a valid [int] value).
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param value int
 * @returns boolean
 */
  store64(value: int): boolean;
/**
 * Stores an integer as 8 bits in the file.
 * 
 * **Note:** The `value` should lie in the interval `[0, 255]`. Any other value will overflow and wrap around.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * To store a signed integer, use `store_64`, or convert it manually (see `store_16` for an example).
 * @param value int
 * @returns boolean
 */
  store8(value: int): boolean;
/**
 * Stores the given array of bytes in the file.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param buffer PackedByteArray
 * @returns boolean
 */
  storeBuffer(buffer: PackedByteArray): boolean;
/**
 * Store the given `PackedStringArray` in the file as a line formatted in the CSV (Comma-Separated Values) format. You can pass a different delimiter `delim` to use other than the default `","` (comma). This delimiter must be one-character long.
 * Text will be encoded as UTF-8.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param values PackedStringArray
 * @param delim string (optional, default: ",")
 * @returns boolean
 */
  storeCsvLine(values: PackedStringArray, delim?: string): boolean;
/**
 * Stores a floating-point number as 64 bits in the file.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param value float
 * @returns boolean
 */
  storeDouble(value: float): boolean;
/**
 * Stores a floating-point number as 32 bits in the file.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param value float
 * @returns boolean
 */
  storeFloat(value: float): boolean;
/**
 * Stores a half-precision floating-point number as 16 bits in the file.
 * @param value float
 * @returns boolean
 */
  storeHalf(value: float): boolean;
/**
 * Stores `line` in the file followed by a newline character (`\n`), encoding the text as UTF-8.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param line string
 * @returns boolean
 */
  storeLine(line: string): boolean;
/**
 * Stores the given `String` as a line in the file in Pascal format (i.e. also store the length of the string).
 * Text will be encoded as UTF-8.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param string_ string
 * @returns boolean
 */
  storePascalString(string_: string): boolean;
/**
 * Stores a floating-point number in the file.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param value float
 * @returns boolean
 */
  storeReal(value: float): boolean;
/**
 * Stores `string` in the file without a newline character (`\n`), encoding the text as UTF-8.
 * 
 * **Note:** This method is intended to be used to write text files. The string is stored as a UTF-8 encoded buffer without string length or terminating zero, which means that it can't be loaded back easily. If you want to store a retrievable string in a binary file, consider using `store_pascal_string` instead. For retrieving strings from a text file, you can use `get_buffer(length).get_string_from_utf8()` (if you know the length) or `get_as_text`.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param string_ string
 * @returns boolean
 */
  storeString(string_: string): boolean;
/**
 * Stores any Variant value in the file. If `full_objects` is `true`, encoding objects is allowed (and can potentially include code).
 * Internally, this uses the same encoding mechanism as the `@GlobalScope.var_to_bytes` method.
 * 
 * **Note:** Not all properties are included. Only properties that are configured with the `PROPERTY_USAGE_STORAGE` flag set will be serialized. You can add a new usage flag to a property by overriding the `Object._get_property_list` method in your class. You can also check how property usage is configured by calling `Object._get_property_list`. See `PropertyUsageFlags` for the possible usage flags.
 * 
 * **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.
 * @param value Variant
 * @param fullObjects boolean (optional, default: false)
 * @returns boolean
 */
  storeVar(value: Variant, fullObjects?: boolean): boolean;
/**
 * Opens the file for read operations. The cursor is positioned at the beginning of the file.
 */
  static readonly READ: int;
/**
 * Opens the file for write operations. The file is created if it does not exist, and truncated if it does.
 * 
 * **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see `DirAccess.make_dir_recursive`.
 */
  static readonly WRITE: int;
/**
 * Opens the file for read and write operations. Does not truncate the file. The cursor is positioned at the beginning of the file.
 */
  static readonly READ_WRITE: int;
/**
 * Opens the file for read and write operations. The file is created if it does not exist, and truncated if it does. The cursor is positioned at the beginning of the file.
 * 
 * **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see `DirAccess.make_dir_recursive`.
 */
  static readonly WRITE_READ: int;
/**
 * Uses the FastLZ (https://fastlz.org/) compression method.
 */
  static readonly COMPRESSION_FASTLZ: int;
/**
 * Uses the DEFLATE (https://en.wikipedia.org/wiki/DEFLATE) compression method.
 */
  static readonly COMPRESSION_DEFLATE: int;
/**
 * Uses the Zstandard (https://facebook.github.io/zstd/) compression method.
 */
  static readonly COMPRESSION_ZSTD: int;
/**
 * Uses the gzip (https://www.gzip.org/) compression method.
 */
  static readonly COMPRESSION_GZIP: int;
/**
 * Uses the brotli (https://github.com/google/brotli) compression method (only decompression is supported).
 */
  static readonly COMPRESSION_BROTLI: int;
/**
 * Read for owner bit.
 */
  static readonly UNIX_READ_OWNER: int;
/**
 * Write for owner bit.
 */
  static readonly UNIX_WRITE_OWNER: int;
/**
 * Execute for owner bit.
 */
  static readonly UNIX_EXECUTE_OWNER: int;
/**
 * Read for group bit.
 */
  static readonly UNIX_READ_GROUP: int;
/**
 * Write for group bit.
 */
  static readonly UNIX_WRITE_GROUP: int;
/**
 * Execute for group bit.
 */
  static readonly UNIX_EXECUTE_GROUP: int;
/**
 * Read for other bit.
 */
  static readonly UNIX_READ_OTHER: int;
/**
 * Write for other bit.
 */
  static readonly UNIX_WRITE_OTHER: int;
/**
 * Execute for other bit.
 */
  static readonly UNIX_EXECUTE_OTHER: int;
/**
 * Set user id on execution bit.
 */
  static readonly UNIX_SET_USER_ID: int;
/**
 * Set group id on execution bit.
 */
  static readonly UNIX_SET_GROUP_ID: int;
/**
 * Restricted deletion (sticky) bit.
 */
  static readonly UNIX_RESTRICTED_DELETE: int;
}
