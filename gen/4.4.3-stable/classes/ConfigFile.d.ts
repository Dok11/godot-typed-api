import type { GodotArray, GodotDictionary, PackedByteArray, PackedStringArray, RefCounted, Variant, float, int } from "../index.d.ts";
/**
 * Helper class to handle INI-style files.
 * 
 * This helper class can be used to store `Variant` values on the filesystem using INI-style formatting. The stored values are identified by a section and a key:
 * [codeblock lang=text]
 * [section]
 * some_key=42
 * string_example="Hello World3D!"
 * a_vector=Vector3(1, 0, 2)
 * [/codeblock]
 * The stored data can be saved to or parsed from a file, though ConfigFile objects can also be used directly without accessing the filesystem.
 * The following example shows how to create a simple `ConfigFile` and save it on disc:
 * 
 * 		```gdscript
 * 
 * 		# Create new ConfigFile object.
 * 		var config = ConfigFile.new()
 * 
 * 		# Store some values.
 * 		config.set_value("Player1", "player_name", "Steve")
 * 		config.set_value("Player1", "best_score", 10)
 * 		config.set_value("Player2", "player_name", "V3geta")
 * 		config.set_value("Player2", "best_score", 9001)
 * 
 * 		# Save it to a file (overwrite if already exists).
 * 		config.save("user://scores.cfg")
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// Create new ConfigFile object.
 * 		var config = new ConfigFile();
 * 
 * 		// Store some values.
 * 		config.SetValue("Player1", "player_name", "Steve");
 * 		config.SetValue("Player1", "best_score", 10);
 * 		config.SetValue("Player2", "player_name", "V3geta");
 * 		config.SetValue("Player2", "best_score", 9001);
 * 
 * 		// Save it to a file (overwrite if already exists).
 * 		config.Save("user://scores.cfg");
 * 		
 * 
 * ```
 * 
 * This example shows how the above file could be loaded:
 * 
 * 		```gdscript
 * 
 * 		var score_data = {}
 * 		var config = ConfigFile.new()
 * 
 * 		# Load data from a file.
 * 		var err = config.load("user://scores.cfg")
 * 
 * 		# If the file didn't load, ignore it.
 * 		if err != OK:
 * 		    return
 * 
 * 		# Iterate over all sections.
 * 		for player in config.get_sections():
 * 		    # Fetch the data for each section.
 * 		    var player_name = config.get_value(player, "player_name")
 * 		    var player_score = config.get_value(player, "best_score")
 * 		    score_data[player_name] = player_score
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var score_data = new Godot.Collections.Dictionary();
 * 		var config = new ConfigFile();
 * 
 * 		// Load data from a file.
 * 		Error err = config.Load("user://scores.cfg");
 * 
 * 		// If the file didn't load, ignore it.
 * 		if (err != Error.Ok)
 * 		{
 * 		    return;
 * 		}
 * 
 * 		// Iterate over all sections.
 * 		foreach (String player in config.GetSections())
 * 		{
 * 		    // Fetch the data for each section.
 * 		    var player_name = (String)config.GetValue(player, "player_name");
 * 		    var player_score = (int)config.GetValue(player, "best_score");
 * 		    score_data[player_name] = player_score;
 * 		}
 * 		
 * 
 * ```
 * 
 * Any operation that mutates the ConfigFile such as `set_value`, `clear`, or `erase_section`, only changes what is loaded in memory. If you want to write the change to a file, you have to save the changes with `save`, `save_encrypted`, or `save_encrypted_pass`.
 * Keep in mind that section and property names can't contain spaces. Anything after a space will be ignored on save and on load.
 * ConfigFiles can also contain manually written comment lines starting with a semicolon (`;`). Those lines will be ignored when parsing the file. Note that comments will be lost when saving the ConfigFile. This can still be useful for dedicated server configuration files, which are typically never overwritten without explicit user action.
 * 
 * **Note:** The file extension given to a ConfigFile does not have any impact on its formatting or behavior. By convention, the `.cfg` extension is used here, but any other extension such as `.ini` is also valid. Since neither `.cfg` nor `.ini` are standardized, Godot's ConfigFile formatting may differ from files written by other programs.
 */
export class ConfigFile extends RefCounted {
/**
 * Removes the entire contents of the config.
 */
  clear(): void;
/**
 * Obtain the text version of this config file (the same text that would be written to a file).
 * @returns string
 */
  encodeToText(): string;
/**
 * Deletes the specified section along with all the key-value pairs inside. Raises an error if the section does not exist.
 * @param section string
 */
  eraseSection(section: string): void;
/**
 * Deletes the specified key in a section. Raises an error if either the section or the key do not exist.
 * @param section string
 * @param key string
 */
  eraseSectionKey(section: string, key: string): void;
/**
 * Returns an array of all defined key identifiers in the specified section. Raises an error and returns an empty array if the section does not exist.
 * @param section string
 * @returns PackedStringArray
 */
  getSectionKeys(section: string): PackedStringArray;
/**
 * Returns an array of all defined section identifiers.
 * @returns PackedStringArray
 */
  getSections(): PackedStringArray;
/**
 * Returns the current value for the specified section and key. If either the section or the key do not exist, the method returns the fallback `default` value. If `default` is not specified or set to `null`, an error is also raised.
 * @param section string
 * @param key string
 * @param default_ Variant (optional, default: null)
 * @returns Variant
 */
  getValue(section: string, key: string, default_?: Variant): Variant;
/**
 * Returns `true` if the specified section exists.
 * @param section string
 * @returns boolean
 */
  hasSection(section: string): boolean;
/**
 * Returns `true` if the specified section-key pair exists.
 * @param section string
 * @param key string
 * @returns boolean
 */
  hasSectionKey(section: string, key: string): boolean;
/**
 * Loads the config file specified as a parameter. The file's contents are parsed and loaded in the `ConfigFile` object which the method was called on.
 * Returns `OK` on success, or one of the other `Error` values if the operation failed.
 * @param path string
 * @returns int
 */
  load(path: string): int;
/**
 * Loads the encrypted config file specified as a parameter, using the provided `key` to decrypt it. The file's contents are parsed and loaded in the `ConfigFile` object which the method was called on.
 * Returns `OK` on success, or one of the other `Error` values if the operation failed.
 * @param path string
 * @param key PackedByteArray
 * @returns int
 */
  loadEncrypted(path: string, key: PackedByteArray): int;
/**
 * Loads the encrypted config file specified as a parameter, using the provided `password` to decrypt it. The file's contents are parsed and loaded in the `ConfigFile` object which the method was called on.
 * Returns `OK` on success, or one of the other `Error` values if the operation failed.
 * @param path string
 * @param password string
 * @returns int
 */
  loadEncryptedPass(path: string, password: string): int;
/**
 * Parses the passed string as the contents of a config file. The string is parsed and loaded in the ConfigFile object which the method was called on.
 * Returns `OK` on success, or one of the other `Error` values if the operation failed.
 * @param data string
 * @returns int
 */
  parse(data: string): int;
/**
 * Saves the contents of the `ConfigFile` object to the file specified as a parameter. The output file uses an INI-style structure.
 * Returns `OK` on success, or one of the other `Error` values if the operation failed.
 * @param path string
 * @returns int
 */
  save(path: string): int;
/**
 * Saves the contents of the `ConfigFile` object to the AES-256 encrypted file specified as a parameter, using the provided `key` to encrypt it. The output file uses an INI-style structure.
 * Returns `OK` on success, or one of the other `Error` values if the operation failed.
 * @param path string
 * @param key PackedByteArray
 * @returns int
 */
  saveEncrypted(path: string, key: PackedByteArray): int;
/**
 * Saves the contents of the `ConfigFile` object to the AES-256 encrypted file specified as a parameter, using the provided `password` to encrypt it. The output file uses an INI-style structure.
 * Returns `OK` on success, or one of the other `Error` values if the operation failed.
 * @param path string
 * @param password string
 * @returns int
 */
  saveEncryptedPass(path: string, password: string): int;
/**
 * Assigns a value to the specified key of the specified section. If either the section or the key do not exist, they are created. Passing a `null` value deletes the specified key if it exists, and deletes the section if it ends up empty once the key has been removed.
 * @param section string
 * @param key string
 * @param value Variant
 */
  setValue(section: string, key: string, value: Variant): void;
}
