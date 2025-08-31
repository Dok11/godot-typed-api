import type { GodotArray, GodotDictionary, Node3D, Transform3D, float, int } from "../index.d.ts";
/**
 * Overrides the location sounds are heard from.
 * 
 * Once added to the scene tree and enabled using `make_current`, this node will override the location sounds are heard from. This can be used to listen from a location different from the `Camera3D`.
 */
export class AudioListener3D extends Node3D {
/**
 * Disables the listener to use the current camera's listener instead.
 */
  clearCurrent(): void;
/**
 * Returns the listener's global orthonormalized `Transform3D`.
 * @returns Transform3D
 */
  getListenerTransform(): Transform3D;
/**
 * Returns `true` if the listener was made current using `make_current`, `false` otherwise.
 * 
 * **Note:** There may be more than one AudioListener3D marked as "current" in the scene tree, but only the one that was made current last will be used.
 * @returns boolean
 */
  isCurrent(): boolean;
/**
 * Enables the listener. This will override the current camera's listener.
 */
  makeCurrent(): void;
}
