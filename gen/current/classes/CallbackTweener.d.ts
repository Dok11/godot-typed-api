import type { GodotArray, GodotDictionary, Tweener, float, int } from "../index.d.ts";
/**
 * Calls the specified method after optional delay.
 * 
 * `CallbackTweener` is used to call a method in a tweening sequence. See `Tween.tween_callback` for more usage information.
 * The tweener will finish automatically if the callback's target object is freed.
 * 
 * **Note:** `Tween.tween_callback` is the only correct way to create `CallbackTweener`. Any `CallbackTweener` created manually will not function correctly.
 */
export class CallbackTweener extends Tweener {
/**
 * Makes the callback call delayed by given time in seconds.
 * 
 * **Example:** Call `Node.queue_free` after 2 seconds:
 * 
 * 				```gdscript
 * 
 * 				var tween = get_tree().create_tween()
 * 				tween.tween_callback(queue_free).set_delay(2)
 * 				
 * 
 * ```
 * @param delay float
 * @returns CallbackTweener
 */
  setDelay(delay: float): CallbackTweener;
}
