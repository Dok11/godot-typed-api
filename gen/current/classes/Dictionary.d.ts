import type { GodotArray, GodotDictionary, StringName, Variant, float, int } from "../index.d.ts";
/**
 * A built-in data structure that holds key-value pairs.
 * 
 * Dictionaries are associative containers that contain values referenced by unique keys. Dictionaries will preserve the insertion order when adding new entries. In other programming languages, this data structure is often referred to as a hash map or an associative array.
 * You can define a dictionary by placing a comma-separated list of `key: value` pairs inside curly braces `{}`.
 * Creating a dictionary:
 * 
 * 		```gdscript
 * 
 * 		var my_dict = {} # Creates an empty dictionary.
 * 
 * 		var dict_variable_key = "Another key name"
 * 		var dict_variable_value = "value2"
 * 		var another_dict = {
 * 		    "Some key name": "value1",
 * 		    dict_variable_key: dict_variable_value,
 * 		}
 * 
 * 		var points_dict = {"White": 50, "Yellow": 75, "Orange": 100}
 * 
 * 		# Alternative Lua-style syntax.
 * 		# Doesn't require quotes around keys, but only string constants can be used as key names.
 * 		# Additionally, key names must start with a letter or an underscore.
 * 		# Here, `some_key` is a string literal, not a variable!
 * 		another_dict = {
 * 		    some_key = 42,
 * 		}
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var myDict = new Godot.Collections.Dictionary(); // Creates an empty dictionary.
 * 		var pointsDict = new Godot.Collections.Dictionary
 * 		{
 * 		    {"White", 50},
 * 		    {"Yellow", 75},
 * 		    {"Orange", 100}
 * 		};
 * 		
 * 
 * ```
 * 
 * You can access a dictionary's value by referencing its corresponding key. In the above example, `points_dict["White"]` will return `50`. You can also write `points_dict.White`, which is equivalent. However, you'll have to use the bracket syntax if the key you're accessing the dictionary with isn't a fixed string (such as a number or variable).
 * 
 * 		```gdscript
 * 
 * 		@export_enum("White", "Yellow", "Orange") var my_color: String
 * 		var points_dict = {"White": 50, "Yellow": 75, "Orange": 100}
 * 		func _ready():
 * 		    # We can't use dot syntax here as `my_color` is a variable.
 * 		    var points = points_dict[my_color]
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		[Export(PropertyHint.Enum, "White,Yellow,Orange")]
 * 		public string MyColor { get; set; }
 * 		private Godot.Collections.Dictionary _pointsDict = new Godot.Collections.Dictionary
 * 		{
 * 		    {"White", 50},
 * 		    {"Yellow", 75},
 * 		    {"Orange", 100}
 * 		};
 * 
 * 		public override void _Ready()
 * 		{
 * 		    int points = (int)_pointsDict`MyColor`;
 * 		}
 * 		
 * 
 * ```
 * 
 * In the above code, `points` will be assigned the value that is paired with the appropriate color selected in `my_color`.
 * Dictionaries can contain more complex data:
 * 
 * 		```gdscript
 * 
 * 		var my_dict = {
 * 		    "First Array": [1, 2, 3, 4] # Assigns an Array to a String key.
 * 		}
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var myDict = new Godot.Collections.Dictionary
 * 		{
 * 		    {"First Array", new Godot.Collections.Array{1, 2, 3, 4}}
 * 		};
 * 		
 * 
 * ```
 * 
 * To add a key to an existing dictionary, access it like an existing key and assign to it:
 * 
 * 		```gdscript
 * 
 * 		var points_dict = {"White": 50, "Yellow": 75, "Orange": 100}
 * 		points_dict["Blue"] = 150 # Add "Blue" as a key and assign 150 as its value.
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var pointsDict = new Godot.Collections.Dictionary
 * 		{
 * 		    {"White", 50},
 * 		    {"Yellow", 75},
 * 		    {"Orange", 100}
 * 		};
 * 		pointsDict["Blue"] = 150; // Add "Blue" as a key and assign 150 as its value.
 * 		
 * 
 * ```
 * 
 * Finally, dictionaries can contain different types of keys and values in the same dictionary:
 * 
 * 		```gdscript
 * 
 * 		# This is a valid dictionary.
 * 		# To access the string "Nested value" below, use `my_dict.sub_dict.sub_key` or `my_dict["sub_dict"]["sub_key"]`.
 * 		# Indexing styles can be mixed and matched depending on your needs.
 * 		var my_dict = {
 * 		    "String Key": 5,
 * 		    4: [1, 2, 3],
 * 		    7: "Hello",
 * 		    "sub_dict": {"sub_key": "Nested value"},
 * 		}
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// This is a valid dictionary.
 * 		// To access the string "Nested value" below, use `((Godot.Collections.Dictionary)myDict["sub_dict"])["sub_key"]`.
 * 		var myDict = new Godot.Collections.Dictionary {
 * 		    {"String Key", 5},
 * 		    {4, new Godot.Collections.Array{1,2,3}},
 * 		    {7, "Hello"},
 * 		    {"sub_dict", new Godot.Collections.Dictionary{{"sub_key", "Nested value"}}}
 * 		};
 * 		
 * 
 * ```
 * 
 * The keys of a dictionary can be iterated with the `for` keyword:
 * 
 * 		```gdscript
 * 
 * 		var groceries = {"Orange": 20, "Apple": 2, "Banana": 4}
 * 		for fruit in groceries:
 * 		    var amount = groceries[fruit]
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var groceries = new Godot.Collections.Dictionary{{"Orange", 20}, {"Apple", 2}, {"Banana", 4}};
 * 		foreach (var (fruit, amount) in groceries)
 * 		{
 * 		    // `fruit` is the key, `amount` is the value.
 * 		}
 * 		
 * 
 * ```
 * 
 * **Note:** Dictionaries are always passed by reference. To get a copy of a dictionary which can be modified independently of the original dictionary, use `duplicate`.
 * 
 * **Note:** Erasing elements while iterating over dictionaries is **not** supported and will result in unpredictable behavior.
 */
export class Dictionary {
/**
 * Assigns elements of another `dictionary` into the dictionary. Resizes the dictionary to match `dictionary`. Performs type conversions if the dictionary is typed.
 * @param dictionary GodotDictionary<any>
 */
  assign(dictionary: GodotDictionary<any>): void;
/**
 * Clears the dictionary, removing all entries from it.
 */
  clear(): void;
/**
 * Creates and returns a new copy of the dictionary. If `deep` is `true`, inner `Dictionary` and `Array` keys and values are also copied, recursively.
 * @param deep boolean (optional, default: false)
 * @returns GodotDictionary<any>
 */
  duplicate(deep?: boolean): GodotDictionary<any>;
/**
 * Removes the dictionary entry by key, if it exists. Returns `true` if the given `key` existed in the dictionary, otherwise `false`.
 * 
 * **Note:** Do not erase entries while iterating over the dictionary. You can iterate over the `keys` array instead.
 * @param key Variant
 * @returns boolean
 */
  erase(key: Variant): boolean;
/**
 * Finds and returns the first key whose associated value is equal to `value`, or `null` if it is not found.
 * 
 * **Note:** `null` is also a valid key. If inside the dictionary, `find_key` may give misleading results.
 * @param value Variant
 * @returns Variant
 */
  findKey(value: Variant): Variant;
/**
 * Returns the corresponding value for the given `key` in the dictionary. If the `key` does not exist, returns `default`, or `null` if the parameter is omitted.
 * @param key Variant
 * @param default_ Variant (optional, default: null)
 * @returns Variant
 */
  get_(key: Variant, default_?: Variant): Variant;
/**
 * Gets a value and ensures the key is set. If the `key` exists in the dictionary, this behaves like `get`. Otherwise, the `default` value is inserted into the dictionary and returned.
 * @param key Variant
 * @param default_ Variant (optional, default: null)
 * @returns Variant
 */
  getOrAdd(key: Variant, default_?: Variant): Variant;
/**
 * Returns the built-in `Variant` type of the typed dictionary's keys as a `Variant.Type` constant. If the keys are not typed, returns `TYPE_NIL`. See also `is_typed_key`.
 * @returns int
 */
  getTypedKeyBuiltin(): int;
/**
 * Returns the **built-in** class name of the typed dictionary's keys, if the built-in `Variant` type is `TYPE_OBJECT`. Otherwise, returns an empty `StringName`. See also `is_typed_key` and `Object.get_class`.
 * @returns StringName
 */
  getTypedKeyClassName(): StringName;
/**
 * Returns the `Script` instance associated with this typed dictionary's keys, or `null` if it does not exist. See also `is_typed_key`.
 * @returns Variant
 */
  getTypedKeyScript(): Variant;
/**
 * Returns the built-in `Variant` type of the typed dictionary's values as a `Variant.Type` constant. If the values are not typed, returns `TYPE_NIL`. See also `is_typed_value`.
 * @returns int
 */
  getTypedValueBuiltin(): int;
/**
 * Returns the **built-in** class name of the typed dictionary's values, if the built-in `Variant` type is `TYPE_OBJECT`. Otherwise, returns an empty `StringName`. See also `is_typed_value` and `Object.get_class`.
 * @returns StringName
 */
  getTypedValueClassName(): StringName;
/**
 * Returns the `Script` instance associated with this typed dictionary's values, or `null` if it does not exist. See also `is_typed_value`.
 * @returns Variant
 */
  getTypedValueScript(): Variant;
/**
 * Returns `true` if the dictionary contains an entry with the given `key`.
 * 
 * 				```gdscript
 * 
 * 				var my_dict = {
 * 				    "Godot" : 4,
 * 				    210 : null,
 * 				}
 * 
 * 				print(my_dict.has("Godot")) # Prints true
 * 				print(my_dict.has(210))     # Prints true
 * 				print(my_dict.has(4))       # Prints false
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var myDict = new Godot.Collections.Dictionary
 * 				{
 * 				    { "Godot", 4 },
 * 				    { 210, default },
 * 				};
 * 
 * 				GD.Print(myDict.ContainsKey("Godot")); // Prints True
 * 				GD.Print(myDict.ContainsKey(210));     // Prints True
 * 				GD.Print(myDict.ContainsKey(4));       // Prints False
 * 				
 * 
 * ```
 * 
 * In GDScript, this is equivalent to the `in` operator:
 * 
 * 				```gdscript
 * 
 * 				if "Godot" in {"Godot": 4}:
 * 				    print("The key is here!") # Will be printed.
 * 				
 * 
 * ```
 * 
 * **Note:** This method returns `true` as long as the `key` exists, even if its corresponding value is `null`.
 * @param key Variant
 * @returns boolean
 */
  has(key: Variant): boolean;
/**
 * Returns `true` if the dictionary contains all keys in the given `keys` array.
 * 
 * 				```gdscript
 * 
 * 				var data = {"width" : 10, "height" : 20}
 * 				data.has_all(["height", "width"]) # Returns true
 * 				
 * 
 * ```
 * @param keys GodotArray<any>
 * @returns boolean
 */
  hasAll(keys: GodotArray<any>): boolean;
/**
 * Returns a hashed 32-bit integer value representing the dictionary contents.
 * 
 * 				```gdscript
 * 
 * 				var dict1 = {"A": 10, "B": 2}
 * 				var dict2 = {"A": 10, "B": 2}
 * 
 * 				print(dict1.hash() == dict2.hash()) # Prints true
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var dict1 = new Godot.Collections.Dictionary{{"A", 10}, {"B", 2}};
 * 				var dict2 = new Godot.Collections.Dictionary{{"A", 10}, {"B", 2}};
 * 
 * 				// Godot.Collections.Dictionary has no Hash() method. Use GD.Hash() instead.
 * 				GD.Print(GD.Hash(dict1) == GD.Hash(dict2)); // Prints True
 * 				
 * 
 * ```
 * 
 * **Note:** Dictionaries with the same entries but in a different order will not have the same hash.
 * 
 * **Note:** Dictionaries with equal hash values are *not* guaranteed to be the same, because of hash collisions. On the contrary, dictionaries with different hash values are guaranteed to be different.
 * @returns int
 */
  hash(): int;
/**
 * Returns `true` if the dictionary is empty (its size is `0`). See also `size`.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Returns `true` if the dictionary is read-only. See `make_read_only`. Dictionaries are automatically read-only if declared with `const` keyword.
 * @returns boolean
 */
  isReadOnly(): boolean;
/**
 * Returns `true` if the dictionary is typed the same as `dictionary`.
 * @param dictionary GodotDictionary<any>
 * @returns boolean
 */
  isSameTyped(dictionary: GodotDictionary<any>): boolean;
/**
 * Returns `true` if the dictionary's keys are typed the same as `dictionary`'s keys.
 * @param dictionary GodotDictionary<any>
 * @returns boolean
 */
  isSameTypedKey(dictionary: GodotDictionary<any>): boolean;
/**
 * Returns `true` if the dictionary's values are typed the same as `dictionary`'s values.
 * @param dictionary GodotDictionary<any>
 * @returns boolean
 */
  isSameTypedValue(dictionary: GodotDictionary<any>): boolean;
/**
 * Returns `true` if the dictionary is typed. Typed dictionaries can only store keys/values of their associated type and provide type safety for the `[]` operator. Methods of typed dictionary still return `Variant`.
 * @returns boolean
 */
  isTyped(): boolean;
/**
 * Returns `true` if the dictionary's keys are typed.
 * @returns boolean
 */
  isTypedKey(): boolean;
/**
 * Returns `true` if the dictionary's values are typed.
 * @returns boolean
 */
  isTypedValue(): boolean;
/**
 * Returns the list of keys in the dictionary.
 * @returns GodotArray<any>
 */
  keys(): GodotArray<any>;
/**
 * Makes the dictionary read-only, i.e. disables modification of the dictionary's contents. Does not apply to nested content, e.g. content of nested dictionaries.
 */
  makeReadOnly(): void;
/**
 * Adds entries from `dictionary` to this dictionary. By default, duplicate keys are not copied over, unless `overwrite` is `true`.
 * 
 * 				```gdscript
 * 
 * 				var dict = { "item": "sword", "quantity": 2 }
 * 				var other_dict = { "quantity": 15, "color": "silver" }
 * 
 * 				# Overwriting of existing keys is disabled by default.
 * 				dict.merge(other_dict)
 * 				print(dict)  # { "item": "sword", "quantity": 2, "color": "silver" }
 * 
 * 				# With overwriting of existing keys enabled.
 * 				dict.merge(other_dict, true)
 * 				print(dict)  # { "item": "sword", "quantity": 15, "color": "silver" }
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				var dict = new Godot.Collections.Dictionary
 * 				{
 * 				    ["item"] = "sword",
 * 				    ["quantity"] = 2,
 * 				};
 * 
 * 				var otherDict = new Godot.Collections.Dictionary
 * 				{
 * 				    ["quantity"] = 15,
 * 				    ["color"] = "silver",
 * 				};
 * 
 * 				// Overwriting of existing keys is disabled by default.
 * 				dict.Merge(otherDict);
 * 				GD.Print(dict); // { "item": "sword", "quantity": 2, "color": "silver" }
 * 
 * 				// With overwriting of existing keys enabled.
 * 				dict.Merge(otherDict, true);
 * 				GD.Print(dict); // { "item": "sword", "quantity": 15, "color": "silver" }
 * 				
 * 
 * ```
 * 
 * **Note:** `merge` is *not* recursive. Nested dictionaries are considered as keys that can be overwritten or not depending on the value of `overwrite`, but they will never be merged together.
 * @param dictionary GodotDictionary<any>
 * @param overwrite boolean (optional, default: false)
 */
  merge(dictionary: GodotDictionary<any>, overwrite?: boolean): void;
/**
 * Returns a copy of this dictionary merged with the other `dictionary`. By default, duplicate keys are not copied over, unless `overwrite` is `true`. See also `merge`.
 * This method is useful for quickly making dictionaries with default values:
 * 
 * 				```gdscript
 * 
 * 				var base = { "fruit": "apple", "vegetable": "potato" }
 * 				var extra = { "fruit": "orange", "dressing": "vinegar" }
 * 				# Prints { "fruit": "orange", "vegetable": "potato", "dressing": "vinegar" }
 * 				print(extra.merged(base))
 * 				# Prints { "fruit": "apple", "vegetable": "potato", "dressing": "vinegar" }
 * 				print(extra.merged(base, true))
 * 				
 * 
 * ```
 * @param dictionary GodotDictionary<any>
 * @param overwrite boolean (optional, default: false)
 * @returns GodotDictionary<any>
 */
  merged(dictionary: GodotDictionary<any>, overwrite?: boolean): GodotDictionary<any>;
/**
 * Returns `true` if the two dictionaries contain the same keys and values, inner `Dictionary` and `Array` keys and values are compared recursively.
 * @param dictionary GodotDictionary<any>
 * @param recursionCount int
 * @returns boolean
 */
  recursiveEqual(dictionary: GodotDictionary<any>, recursionCount: int): boolean;
/**
 * Sets the value of the element at the given `key` to the given `value`. This is the same as using the `[]` operator (`array[index] = value`).
 * @param key Variant
 * @param value Variant
 * @returns boolean
 */
  set_(key: Variant, value: Variant): boolean;
/**
 * Returns the number of entries in the dictionary. Empty dictionaries (`{ }`) always return `0`. See also `is_empty`.
 * @returns int
 */
  size(): int;
/**
 * Sorts the dictionary in-place by key. This can be used to ensure dictionaries with the same contents produce equivalent results when getting the `keys`, getting the `values`, and converting to a string. This is also useful when wanting a JSON representation consistent with what is in memory, and useful for storing on a database that requires dictionaries to be sorted.
 */
  sort(): void;
/**
 * Returns the list of values in this dictionary.
 * @returns GodotArray<any>
 */
  values(): GodotArray<any>;
}
