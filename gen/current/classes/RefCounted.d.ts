import type { GodotArray, GodotDictionary, Object, float, int } from "../index.d.ts";
/**
 * Base class for reference-counted objects.
 * 
 * Base class for any object that keeps a reference count. `Resource` and many other helper objects inherit this class.
 * Unlike other `Object` types, `RefCounted`s keep an internal reference counter so that they are automatically released when no longer in use, and only then. `RefCounted`s therefore do not need to be freed manually with `Object.free`.
 * `RefCounted` instances caught in a cyclic reference will **not** be freed automatically. For example, if a node holds a reference to instance `A`, which directly or indirectly holds a reference back to `A`, `A`'s reference count will be 2. Destruction of the node will leave `A` dangling with a reference count of 1, and there will be a memory leak. To prevent this, one of the references in the cycle can be made weak with `@GlobalScope.weakref`.
 * In the vast majority of use cases, instantiating and using `RefCounted`-derived types is all you need to do. The methods provided in this class are only for advanced users, and can cause issues if misused.
 * 
 * **Note:** In C#, reference-counted objects will not be freed instantly after they are no longer in use. Instead, garbage collection will run periodically and will free reference-counted objects that are no longer in use. This means that unused ones will remain in memory for a while before being removed.
 */
export class RefCounted extends Object {
/**
 * Returns the current reference count.
 * @returns int
 */
  getReferenceCount(): int;
/**
 * Initializes the internal reference counter. Use this only if you really know what you are doing.
 * Returns whether the initialization was successful.
 * @returns boolean
 */
  initRef(): boolean;
/**
 * Increments the internal reference counter. Use this only if you really know what you are doing.
 * Returns `true` if the increment was successful, `false` otherwise.
 * @returns boolean
 */
  reference(): boolean;
/**
 * Decrements the internal reference counter. Use this only if you really know what you are doing.
 * Returns `true` if the object should be freed after the decrement, `false` otherwise.
 * @returns boolean
 */
  unreference(): boolean;
}
