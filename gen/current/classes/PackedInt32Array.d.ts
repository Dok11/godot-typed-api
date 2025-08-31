import type { GodotArray, GodotDictionary, PackedByteArray, float, int } from "../index.d.ts";
/**
 * A packed array of 32-bit integers.
 * 
 * An array specifically designed to hold 32-bit integer values. Packs data tightly, so it saves memory for large array sizes.
 * 
 * **Note:** This type stores signed 32-bit integers, which means it can take values in the interval `[-2^31, 2^31 - 1]`, i.e. `[-2147483648, 2147483647]`. Exceeding those bounds will wrap around. In comparison, [int] uses signed 64-bit integers which can hold much larger values. If you need to pack 64-bit integers tightly, see `PackedInt64Array`.
 * 
 * **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use `duplicate`. This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.
 */
export class PackedInt32Array {
/**
 * Appends an element at the end of the array (alias of `push_back`).
 * @param value int
 * @returns boolean
 */
  append(value: int): boolean;
/**
 * Appends a `PackedInt32Array` at the end of this array.
 * @param array PackedInt32Array
 */
  appendArray(array: PackedInt32Array): void;
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
 * Returns the number of times an element is in the array.
 * @param value int
 * @returns int
 */
  count(value: int): int;
/**
 * Creates a copy of the array, and returns it.
 * @returns PackedInt32Array
 */
  duplicate(): PackedInt32Array;
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
 * Returns the 32-bit integer at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).
 * @param index int
 * @returns int
 */
  get_(index: int): int;
/**
 * Returns `true` if the array contains `value`.
 * @param value int
 * @returns boolean
 */
  has(value: int): boolean;
/**
 * Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).
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
 * Appends a value to the array.
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
 * Changes the integer at the given index.
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
 * Returns the slice of the `PackedInt32Array`, from `begin` (inclusive) to `end` (exclusive), as a new `PackedInt32Array`.
 * The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 * If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 * @param begin int
 * @param end int (optional, default: 2147483647)
 * @returns PackedInt32Array
 */
  slice(begin: int, end?: int): PackedInt32Array;
/**
 * Sorts the elements of the array in ascending order.
 */
  sort(): void;
/**
 * Returns a copy of the data converted to a `PackedByteArray`, where each element has been encoded as 4 bytes.
 * The size of the new array will be `int32_array.size() * 4`.
 * @returns PackedByteArray
 */
  toByteArray(): PackedByteArray;
}
