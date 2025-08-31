import type { GodotArray, GodotDictionary, Tweener, float, int } from "../index.d.ts";
/**
 * Interpolates an abstract value and supplies it to a method called over time.
 * 
 * `MethodTweener` is similar to a combination of `CallbackTweener` and `PropertyTweener`. It calls a method providing an interpolated value as a parameter. See `Tween.tween_method` for more usage information.
 * The tweener will finish automatically if the callback's target object is freed.
 * 
 * **Note:** `Tween.tween_method` is the only correct way to create `MethodTweener`. Any `MethodTweener` created manually will not function correctly.
 */
export class MethodTweener extends Tweener {
/**
 * Sets the time in seconds after which the `MethodTweener` will start interpolating. By default there's no delay.
 * @param delay float
 * @returns MethodTweener
 */
  setDelay(delay: float): MethodTweener;
/**
 * Sets the type of used easing from `Tween.EaseType`. If not set, the default easing is used from the `Tween` that contains this Tweener.
 * @param ease int
 * @returns MethodTweener
 */
  setEase(ease: int): MethodTweener;
/**
 * Sets the type of used transition from `Tween.TransitionType`. If not set, the default transition is used from the `Tween` that contains this Tweener.
 * @param trans int
 * @returns MethodTweener
 */
  setTrans(trans: int): MethodTweener;
}
