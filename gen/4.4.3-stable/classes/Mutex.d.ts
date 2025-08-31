import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * A binary `Semaphore` for synchronization of multiple `Thread`s.
 * 
 * A synchronization mutex (mutual exclusion). This is used to synchronize multiple `Thread`s, and is equivalent to a binary `Semaphore`. It guarantees that only one thread can access a critical section at a time.
 * This is a reentrant mutex, meaning that it can be locked multiple times by one thread, provided it also unlocks it as many times.
 * 
 * **Warning:** Mutexes must be used carefully to avoid deadlocks.
 * 
 * **Warning:** To ensure proper cleanup without crashes or deadlocks, the following conditions must be met:
 * - When a `Mutex`'s reference count reaches zero and it is therefore destroyed, no threads (including the one on which the destruction will happen) must have it locked.
 * - When a `Thread`'s reference count reaches zero and it is therefore destroyed, it must not have any mutex locked.
 */
export class Mutex extends RefCounted {
/**
 * Locks this `Mutex`, blocks until it is unlocked by the current owner.
 * 
 * **Note:** This function returns without blocking if the thread already has ownership of the mutex.
 */
  lock(): void;
/**
 * Tries locking this `Mutex`, but does not block. Returns `true` on success, `false` otherwise.
 * 
 * **Note:** This function returns `true` if the thread already has ownership of the mutex.
 * @returns boolean
 */
  tryLock(): boolean;
/**
 * Unlocks this `Mutex`, leaving it to other threads.
 * 
 * **Note:** If a thread called `lock` or `try_lock` multiple times while already having ownership of the mutex, it must also call `unlock` the same number of times in order to unlock it correctly.
 * 
 * **Warning:** Calling `unlock` more times that `lock` on a given thread, thus ending up trying to unlock a non-locked mutex, is wrong and may causes crashes or deadlocks.
 */
  unlock(): void;
}
