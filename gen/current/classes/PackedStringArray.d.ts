import type { GodotArray, GodotDictionary, PackedByteArray, float, int } from "../index.d.ts";
/**
 * A packed array of `String`s.
 * 
 * An array specifically designed to hold `String`s. Packs data tightly, so it saves memory for large array sizes.
 * If you want to join the strings in the array, use `String.join`.
 * 
 * 		```gdscript
 * 
 * 		var string_array = PackedStringArray(["hello", "world"])
 * 		var string = " ".join(string_array)
 * 		print(string) # "hello world"
 * 		
 * 
 * ```
 * 
 * **Differences between packed arrays, typed arrays, and untyped arrays:** Packed arrays are generally faster to iterate on and modify compared to a typed array of the same type (e.g. `PackedStringArray` versus `Array`String``). Also, packed arrays consume less memory. As a downside, packed arrays are less flexible as they don't offer as many convenience methods such as `Array.map`. Typed arrays are in turn faster to iterate on and modify than untyped arrays.
 * 
 * **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use `duplicate`. This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.
 */
export class PackedStringArray {
/**
 * Appends an element at the end of the array (alias of `push_back`).
 * @param value string
 * @returns boolean
 */
  append(value: string): boolean;
/**
 * Appends a `PackedStringArray` at the end of this array.
 * @param array PackedStringArray
 */
  appendArray(array: PackedStringArray): void;
/**
 * Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a `before` specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.
 * 
 * **Note:** Calling `bsearch` on an unsorted array results in unexpected behavior.
 * @param value string
 * @param before boolean (optional, default: true)
 * @returns int
 */
  bsearch(value: string, before?: boolean): int;
/**
 * Clears the array. This is equivalent to using `resize` with a size of `0`.
 */
  clear(): void;
/**
 * Returns the number of times an element is in the array.
 * @param value string
 * @returns int
 */
  count(value: string): int;
/**
 * Creates a copy of the array, and returns it.
 * @returns PackedStringArray
 */
  duplicate(): PackedStringArray;
/**
 * Assigns the given value to all elements in the array. This can typically be used together with `resize` to create an array with a given size and initialized elements.
 * @param value string
 */
  fill(value: string): void;
/**
 * Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.
 * @param value string
 * @param from_ int (optional, default: 0)
 * @returns int
 */
  find(value: string, from_?: int): int;
/**
 * Returns the `String` at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).
 * @param index int
 * @returns string
 */
  get_(index: int): string;
/**
 * Returns `true` if the array contains `value`.
 * @param value string
 * @returns boolean
 */
  has(value: string): boolean;
/**
 * Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).
 * @param atIndex int
 * @param value string
 * @returns int
 */
  insert(atIndex: int, value: string): int;
/**
 * Returns `true` if the array is empty.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Appends a string element at end of the array.
 * @param value string
 * @returns boolean
 */
  pushBack(value: string): boolean;
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
 * @param value string
 * @param from_ int (optional, default: -1)
 * @returns int
 */
  rfind(value: string, from_?: int): int;
/**
 * Changes the `String` at the given index.
 * @param index int
 * @param value string
 */
  set_(index: int, value: string): void;
/**
 * Returns the number of elements in the array.
 * @returns int
 */
  size(): int;
/**
 * Returns the slice of the `PackedStringArray`, from `begin` (inclusive) to `end` (exclusive), as a new `PackedStringArray`.
 * The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 * If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 * @param begin int
 * @param end int (optional, default: 2147483647)
 * @returns PackedStringArray
 */
  slice(begin: int, end?: int): PackedStringArray;
/**
 * Sorts the elements of the array in ascending order.
 */
  sort(): void;
/**
 * Returns a `PackedByteArray` with each string encoded as UTF-8. Strings are `null` terminated.
 * @returns PackedByteArray
 */
  toByteArray(): PackedByteArray;
}
