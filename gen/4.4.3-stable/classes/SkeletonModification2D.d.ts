import type { GodotArray, GodotDictionary, Resource, SkeletonModificationStack2D, float, int } from "../index.d.ts";
/**
 * Base class for resources that operate on `Bone2D`s in a `Skeleton2D`.
 * 
 * This resource provides an interface that can be expanded so code that operates on `Bone2D` nodes in a `Skeleton2D` can be mixed and matched together to create complex interactions.
 * This is used to provide Godot with a flexible and powerful Inverse Kinematics solution that can be adapted for many different uses.
 */
export class SkeletonModification2D extends Resource {
/**
 * If `true`, the modification's `_execute` function will be called by the `SkeletonModificationStack2D`.
 */
  enabled: boolean;
/**
 * The execution mode for the modification. This tells the modification stack when to execute the modification. Some modifications have settings that are only available in certain execution modes.
 */
  executionMode: int;
/**
 * Takes an angle and clamps it so it is within the passed-in `min` and `max` range. `invert` will inversely clamp the angle, clamping it to the range outside of the given bounds.
 * @param angle float
 * @param min float
 * @param max float
 * @param invert boolean
 * @returns float
 */
  clampAngle(angle: float, min: float, max: float, invert: boolean): float;
/**
 * Used for drawing **editor-only** modification gizmos. This function will only be called in the Godot editor and can be overridden to draw custom gizmos.
 * 
 * **Note:** You will need to use the Skeleton2D from `SkeletonModificationStack2D.get_skeleton` and it's draw functions, as the `SkeletonModification2D` resource cannot draw on its own.
 */
  private drawEditorGizmo(): void;
/**
 * Executes the given modification. This is where the modification performs whatever function it is designed to do.
 * @param delta float
 */
  private execute(delta: float): void;
/**
 * Returns whether this modification will call `_draw_editor_gizmo` in the Godot editor to draw modification-specific gizmos.
 * @returns boolean
 */
  getEditorDrawGizmo(): boolean;
/**
 * Returns whether this modification has been successfully setup or not.
 * @returns boolean
 */
  getIsSetup(): boolean;
/**
 * Returns the `SkeletonModificationStack2D` that this modification is bound to. Through the modification stack, you can access the Skeleton2D the modification is operating on.
 * @returns SkeletonModificationStack2D
 */
  getModificationStack(): SkeletonModificationStack2D;
/**
 * Sets whether this modification will call `_draw_editor_gizmo` in the Godot editor to draw modification-specific gizmos.
 * @param drawGizmo boolean
 */
  setEditorDrawGizmo(drawGizmo: boolean): void;
/**
 * Manually allows you to set the setup state of the modification. This function should only rarely be used, as the `SkeletonModificationStack2D` the modification is bound to should handle setting the modification up.
 * @param isSetup boolean
 */
  setIsSetup(isSetup: boolean): void;
/**
 * Called when the modification is setup. This is where the modification performs initialization.
 * @param modificationStack SkeletonModificationStack2D
 */
  private setupModification(modificationStack: SkeletonModificationStack2D): void;
}
