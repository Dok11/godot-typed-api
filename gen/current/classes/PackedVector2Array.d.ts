import type { GodotArray, GodotDictionary, PackedByteArray, Vector2, float, int } from "../index.d.ts";
/**
 * A packed array of `Vector2`s.
 * 
 * An array specifically designed to hold `Vector2`. Packs data tightly, so it saves memory for large array sizes.
 * 
 * **Differences between packed arrays, typed arrays, and untyped arrays:** Packed arrays are generally faster to iterate on and modify compared to a typed array of the same type (e.g. `PackedVector2Array` versus `Array`Vector2``). Also, packed arrays consume less memory. As a downside, packed arrays are less flexible as they don't offer as many convenience methods such as `Array.map`. Typed arrays are in turn faster to iterate on and modify than untyped arrays.
 * 
 * **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use `duplicate`. This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.
 */
export class PackedVector2Array {
/**
 * Appends an element at the end of the array (alias of `push_back`).
 * @param value Vector2
 * @returns boolean
 */
  append(value: Vector2): boolean;
/**
 * Appends a `PackedVector2Array` at the end of this array.
 * @param array PackedVector2Array
 */
  appendArray(array: PackedVector2Array): void;
/**
 * Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a `before` specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.
 * 
 * **Note:** Calling `bsearch` on an unsorted array results in unexpected behavior.
 * 
 * **Note:** Vectors with `@GDScript.NAN` elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value Vector2
 * @param before boolean (optional, default: true)
 * @returns int
 */
  bsearch(value: Vector2, before?: boolean): int;
/**
 * Clears the array. This is equivalent to using `resize` with a size of `0`.
 */
  clear(): void;
/**
 * Returns the number of times an element is in the array.
 * 
 * **Note:** Vectors with `@GDScript.NAN` elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value Vector2
 * @returns int
 */
  count(value: Vector2): int;
/**
 * Creates a copy of the array, and returns it.
 * @returns PackedVector2Array
 */
  duplicate(): PackedVector2Array;
/**
 * Assigns the given value to all elements in the array. This can typically be used together with `resize` to create an array with a given size and initialized elements.
 * @param value Vector2
 */
  fill(value: Vector2): void;
/**
 * Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.
 * 
 * **Note:** Vectors with `@GDScript.NAN` elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value Vector2
 * @param from_ int (optional, default: 0)
 * @returns int
 */
  find(value: Vector2, from_?: int): int;
/**
 * Returns the `Vector2` at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).
 * @param index int
 * @returns Vector2
 */
  get_(index: int): Vector2;
/**
 * Returns `true` if the array contains `value`.
 * 
 * **Note:** Vectors with `@GDScript.NAN` elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value Vector2
 * @returns boolean
 */
  has(value: Vector2): boolean;
/**
 * Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).
 * @param atIndex int
 * @param value Vector2
 * @returns int
 */
  insert(atIndex: int, value: Vector2): int;
/**
 * Returns `true` if the array is empty.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Inserts a `Vector2` at the end.
 * @param value Vector2
 * @returns boolean
 */
  pushBack(value: Vector2): boolean;
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
 * **Note:** Vectors with `@GDScript.NAN` elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 * @param value Vector2
 * @param from_ int (optional, default: -1)
 * @returns int
 */
  rfind(value: Vector2, from_?: int): int;
/**
 * Changes the `Vector2` at the given index.
 * @param index int
 * @param value Vector2
 */
  set_(index: int, value: Vector2): void;
/**
 * Returns the number of elements in the array.
 * @returns int
 */
  size(): int;
/**
 * Returns the slice of the `PackedVector2Array`, from `begin` (inclusive) to `end` (exclusive), as a new `PackedVector2Array`.
 * The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 * If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 * @param begin int
 * @param end int (optional, default: 2147483647)
 * @returns PackedVector2Array
 */
  slice(begin: int, end?: int): PackedVector2Array;
/**
 * Sorts the elements of the array in ascending order.
 * 
 * **Note:** Vectors with `@GDScript.NAN` elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 */
  sort(): void;
/**
 * Returns a `PackedByteArray` with each vector encoded as bytes.
 * @returns PackedByteArray
 */
  toByteArray(): PackedByteArray;
}
