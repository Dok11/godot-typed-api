import type { GodotArray, GodotDictionary, RefCounted, Signal, float, int } from "../index.d.ts";
/**
 * Abstract class for all Tweeners used by `Tween`.
 * 
 * Tweeners are objects that perform a specific animating task, e.g. interpolating a property or calling a method at a given time. A `Tweener` can't be created manually, you need to use a dedicated method from `Tween`.
 */
export class Tweener extends RefCounted {
/**
 * Emitted when the `Tweener` has just finished its job or became invalid (e.g. due to a freed object).
 */
  finished: Signal<[]>;
}
