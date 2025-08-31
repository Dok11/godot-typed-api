import type { GodotArray, GodotDictionary, Node2D, float, int } from "../index.d.ts";
/**
 * Overrides the location sounds are heard from.
 * 
 * Once added to the scene tree and enabled using `make_current`, this node will override the location sounds are heard from. Only one `AudioListener2D` can be current. Using `make_current` will disable the previous `AudioListener2D`.
 * If there is no active `AudioListener2D` in the current `Viewport`, center of the screen will be used as a hearing point for the audio. `AudioListener2D` needs to be inside `SceneTree` to function.
 */
export class AudioListener2D extends Node2D {
/**
 * Disables the `AudioListener2D`. If it's not set as current, this method will have no effect.
 */
  clearCurrent(): void;
/**
 * Returns `true` if this `AudioListener2D` is currently active.
 * @returns boolean
 */
  isCurrent(): boolean;
/**
 * Makes the `AudioListener2D` active, setting it as the hearing point for the sounds. If there is already another active `AudioListener2D`, it will be disabled.
 * This method will have no effect if the `AudioListener2D` is not added to `SceneTree`.
 */
  makeCurrent(): void;
}
