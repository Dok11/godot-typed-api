import type { GodotArray, GodotDictionary, SkeletonModification2D, SkeletonModificationStack2D, float, int } from "../index.d.ts";
/**
 * A modification that holds and executes a `SkeletonModificationStack2D`.
 * 
 * This `SkeletonModification2D` holds a reference to a `SkeletonModificationStack2D`, allowing you to use multiple modification stacks on a single `Skeleton2D`.
 * 
 * **Note:** The modifications in the held `SkeletonModificationStack2D` will only be executed if their execution mode matches the execution mode of the SkeletonModification2DStackHolder.
 */
export class SkeletonModification2DStackHolder extends SkeletonModification2D {
/**
 * Returns the `SkeletonModificationStack2D` that this modification is holding.
 * @returns SkeletonModificationStack2D
 */
  getHeldModificationStack(): SkeletonModificationStack2D;
/**
 * Sets the `SkeletonModificationStack2D` that this modification is holding. This modification stack will then be executed when this modification is executed.
 * @param heldModificationStack SkeletonModificationStack2D
 */
  setHeldModificationStack(heldModificationStack: SkeletonModificationStack2D): void;
}
