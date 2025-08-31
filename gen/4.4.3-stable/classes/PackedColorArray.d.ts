import type { Color, GodotArray, GodotDictionary, PackedByteArray, float, int } from "../index.d.ts";
/**
 * A packed array of `Color`s.
 * 
 * An array specifically designed to hold `Color`. Packs data tightly, so it saves memory for large array sizes.
 * 
 * **Differences between packed arrays, typed arrays, and untyped arrays:** Packed arrays are generally faster to iterate on and modify compared to a typed array of the same type (e.g. `PackedColorArray` versus `Array`Color``). Also, packed arrays consume less memory. As a downside, packed arrays are less flexible as they don't offer as many convenience methods such as `Array.map`. Typed arrays are in turn faster to iterate on and modify than untyped arrays.
 * 
 * **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use `duplicate`. This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.
 */
export class PackedColorArray {
/**
 * Appends an element at the end of the array (alias of `push_back`).
 * @param value Color
 * @returns boolean
 */
  append(value: Color): boolean;
/**
 * Appends a `PackedColorArray` at the end of this array.
 * @param array PackedColorArray
 */
  appendArray(array: PackedColorArray): void;
/**
 * Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a `before` specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.
 * 
 * **Note:** Calling `bsearch` on an unsorted array results in unexpected behavior.
 * @param value Color
 * @param before boolean (optional, default: true)
 * @returns int
 */
  bsearch(value: Color, before?: boolean): int;
/**
 * Clears the array. This is equivalent to using `resize` with a size of `0`.
 */
  clear(): void;
/**
 * Returns the number of times an element is in the array.
 * @param value Color
 * @returns int
 */
  count(value: Color): int;
/**
 * Creates a copy of the array, and returns it.
 * @returns PackedColorArray
 */
  duplicate(): PackedColorArray;
/**
 * Assigns the given value to all elements in the array. This can typically be used together with `resize` to create an array with a given size and initialized elements.
 * @param value Color
 */
  fill(value: Color): void;
/**
 * Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.
 * @param value Color
 * @param from_ int (optional, default: 0)
 * @returns int
 */
  find(value: Color, from_?: int): int;
/**
 * Returns the `Color` at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).
 * @param index int
 * @returns Color
 */
  get_(index: int): Color;
/**
 * Returns `true` if the array contains `value`.
 * @param value Color
 * @returns boolean
 */
  has(value: Color): boolean;
/**
 * Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).
 * @param atIndex int
 * @param value Color
 * @returns int
 */
  insert(atIndex: int, value: Color): int;
/**
 * Returns `true` if the array is empty.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Appends a value to the array.
 * @param value Color
 * @returns boolean
 */
  pushBack(value: Color): boolean;
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
 * @param value Color
 * @param from_ int (optional, default: -1)
 * @returns int
 */
  rfind(value: Color, from_?: int): int;
/**
 * Changes the `Color` at the given index.
 * @param index int
 * @param value Color
 */
  set_(index: int, value: Color): void;
/**
 * Returns the number of elements in the array.
 * @returns int
 */
  size(): int;
/**
 * Returns the slice of the `PackedColorArray`, from `begin` (inclusive) to `end` (exclusive), as a new `PackedColorArray`.
 * The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 * If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 * @param begin int
 * @param end int (optional, default: 2147483647)
 * @returns PackedColorArray
 */
  slice(begin: int, end?: int): PackedColorArray;
/**
 * Sorts the elements of the array in ascending order.
 */
  sort(): void;
/**
 * Returns a `PackedByteArray` with each color encoded as bytes.
 * @returns PackedByteArray
 */
  toByteArray(): PackedByteArray;
}
