import type { GodotArray, GodotDictionary, Tweener, float, int } from "../index.d.ts";
/**
 * Runs a `Tween` nested within another `Tween`.
 * 
 * `SubtweenTweener` is used to execute a `Tween` as one step in a sequence defined by another `Tween`. See `Tween.tween_subtween` for more usage information.
 * 
 * **Note:** `Tween.tween_subtween` is the only correct way to create `SubtweenTweener`. Any `SubtweenTweener` created manually will not function correctly.
 */
export class SubtweenTweener extends Tweener {
/**
 * Sets the time in seconds after which the `SubtweenTweener` will start running the subtween. By default there's no delay.
 * @param delay float
 * @returns SubtweenTweener
 */
  setDelay(delay: float): SubtweenTweener;
}
