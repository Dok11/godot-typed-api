import type { Animation, GodotArray, GodotDictionary, Resource, Signal, StringName, float, int } from "../index.d.ts";
/**
 * Container for `Animation` resources.
 * 
 * An animation library stores a set of animations accessible through `StringName` keys, for use with `AnimationPlayer` nodes.
 */
export class AnimationLibrary extends Resource {
/**
 * Adds the `animation` to the library, accessible by the key `name`.
 * @param name StringName
 * @param animation Animation
 * @returns int
 */
  addAnimation(name: StringName, animation: Animation): int;
/**
 * Returns the `Animation` with the key `name`. If the animation does not exist, `null` is returned and an error is logged.
 * @param name StringName
 * @returns Animation
 */
  getAnimation(name: StringName): Animation;
/**
 * Returns the keys for the `Animation`s stored in the library.
 * @returns StringName[]
 */
  getAnimationList(): StringName[];
/**
 * Returns the key count for the `Animation`s stored in the library.
 * @returns int
 */
  getAnimationListSize(): int;
/**
 * Returns `true` if the library stores an `Animation` with `name` as the key.
 * @param name StringName
 * @returns boolean
 */
  hasAnimation(name: StringName): boolean;
/**
 * Removes the `Animation` with the key `name`.
 * @param name StringName
 */
  removeAnimation(name: StringName): void;
/**
 * Changes the key of the `Animation` associated with the key `name` to `newname`.
 * @param name StringName
 * @param newname StringName
 */
  renameAnimation(name: StringName, newname: StringName): void;
/**
 * Emitted when an `Animation` is added, under the key `name`.
 */
  animationAdded: Signal<[name: StringName]>;
/**
 * Emitted when there's a change in one of the animations, e.g. tracks are added, moved or have changed paths. `name` is the key of the animation that was changed.
 * See also `Resource.changed`, which this acts as a relay for.
 */
  animationChanged: Signal<[name: StringName]>;
/**
 * Emitted when an `Animation` stored with the key `name` is removed.
 */
  animationRemoved: Signal<[name: StringName]>;
/**
 * Emitted when the key for an `Animation` is changed, from `name` to `to_name`.
 */
  animationRenamed: Signal<[name: StringName, toName: StringName]>;
}
