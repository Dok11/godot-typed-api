import type { GodotArray, GodotDictionary, PackedByteArray, float, int } from "../index.d.ts";
/**
 * A packed array of 32-bit floating-point values.
 * 
 * An array specifically designed to hold 32-bit floating-point values (float). Packs data tightly, so it saves memory for large array sizes.
 * If you need to pack 64-bit floats tightly, see `PackedFloat64Array`.
 * 
 * **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use `duplicate`. This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.
 */
export class PackedFloat32Array {
/**
 * Appends an element at the end of the array (alias of `push_back`).
 * @param value float
 * @returns boolean
 */
  append(value: float): boolean;
/**
 * Appends a `PackedFloat32Array` at the end of this array.
 * @param array PackedFloat32Array
 */
  appendArray(array: PackedFloat32Array): void;
/**
 * Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a `before` specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.
 * 
 * **Note:** Calling `bsearch` on an unsorted array results in unexpected behavior.
 * 
 * **Note:** `@GDScript.NAN` doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value float
 * @param before boolean (optional, default: true)
 * @returns int
 */
  bsearch(value: float, before?: boolean): int;
/**
 * Clears the array. This is equivalent to using `resize` with a size of `0`.
 */
  clear(): void;
/**
 * Returns the number of times an element is in the array.
 * 
 * **Note:** `@GDScript.NAN` doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value float
 * @returns int
 */
  count(value: float): int;
/**
 * Creates a copy of the array, and returns it.
 * @returns PackedFloat32Array
 */
  duplicate(): PackedFloat32Array;
/**
 * Assigns the given value to all elements in the array. This can typically be used together with `resize` to create an array with a given size and initialized elements.
 * @param value float
 */
  fill(value: float): void;
/**
 * Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.
 * 
 * **Note:** `@GDScript.NAN` doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value float
 * @param from_ int (optional, default: 0)
 * @returns int
 */
  find(value: float, from_?: int): int;
/**
 * Returns the 32-bit float at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).
 * @param index int
 * @returns float
 */
  get_(index: int): float;
/**
 * Returns `true` if the array contains `value`.
 * 
 * **Note:** `@GDScript.NAN` doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value float
 * @returns boolean
 */
  has(value: float): boolean;
/**
 * Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).
 * @param atIndex int
 * @param value float
 * @returns int
 */
  insert(atIndex: int, value: float): int;
/**
 * Returns `true` if the array is empty.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Appends an element at the end of the array.
 * @param value float
 * @returns boolean
 */
  pushBack(value: float): boolean;
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
 * 
 * **Note:** `@GDScript.NAN` doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value float
 * @param from_ int (optional, default: -1)
 * @returns int
 */
  rfind(value: float, from_?: int): int;
/**
 * Changes the float at the given index.
 * @param index int
 * @param value float
 */
  set_(index: int, value: float): void;
/**
 * Returns the number of elements in the array.
 * @returns int
 */
  size(): int;
/**
 * Returns the slice of the `PackedFloat32Array`, from `begin` (inclusive) to `end` (exclusive), as a new `PackedFloat32Array`.
 * The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 * If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 * @param begin int
 * @param end int (optional, default: 2147483647)
 * @returns PackedFloat32Array
 */
  slice(begin: int, end?: int): PackedFloat32Array;
/**
 * Sorts the elements of the array in ascending order.
 * 
 * **Note:** `@GDScript.NAN` doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.
 */
  sort(): void;
/**
 * Returns a copy of the data converted to a `PackedByteArray`, where each element has been encoded as 4 bytes.
 * The size of the new array will be `float32_array.size() * 4`.
 * @returns PackedByteArray
 */
  toByteArray(): PackedByteArray;
}
