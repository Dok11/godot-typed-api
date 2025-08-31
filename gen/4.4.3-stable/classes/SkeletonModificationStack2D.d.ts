import type { GodotArray, GodotDictionary, Resource, Skeleton2D, SkeletonModification2D, float, int } from "../index.d.ts";
/**
 * A resource that holds a stack of `SkeletonModification2D`s.
 * 
 * This resource is used by the Skeleton and holds a stack of `SkeletonModification2D`s.
 * This controls the order of the modifications and how they are applied. Modification order is especially important for full-body IK setups, as you need to execute the modifications in the correct order to get the desired results. For example, you want to execute a modification on the spine *before* the arms on a humanoid skeleton.
 * This resource also controls how strongly all of the modifications are applied to the `Skeleton2D`.
 */
export class SkeletonModificationStack2D extends Resource {
/**
 * If `true`, the modification's in the stack will be called. This is handled automatically through the `Skeleton2D` node.
 */
  enabled: boolean;
/**
 * The number of modifications in the stack.
 */
  modificationCount: int;
/**
 * The interpolation strength of the modifications in stack. A value of `0` will make it where the modifications are not applied, a strength of `0.5` will be half applied, and a strength of `1` will allow the modifications to be fully applied and override the `Skeleton2D` `Bone2D` poses.
 */
  strength: float;
/**
 * Adds the passed-in `SkeletonModification2D` to the stack.
 * @param modification SkeletonModification2D
 */
  addModification(modification: SkeletonModification2D): void;
/**
 * Deletes the `SkeletonModification2D` at the index position `mod_idx`, if it exists.
 * @param modIdx int
 */
  deleteModification(modIdx: int): void;
/**
 * Enables all `SkeletonModification2D`s in the stack.
 * @param enabled boolean
 */
  enableAllModifications(enabled: boolean): void;
/**
 * Executes all of the `SkeletonModification2D`s in the stack that use the same execution mode as the passed-in `execution_mode`, starting from index `0` to `modification_count`.
 * 
 * **Note:** The order of the modifications can matter depending on the modifications. For example, modifications on a spine should operate before modifications on the arms in order to get proper results.
 * @param delta float
 * @param executionMode int
 */
  execute(delta: float, executionMode: int): void;
/**
 * Returns a boolean that indicates whether the modification stack is setup and can execute.
 * @returns boolean
 */
  getIsSetup(): boolean;
/**
 * Returns the `SkeletonModification2D` at the passed-in index, `mod_idx`.
 * @param modIdx int
 * @returns SkeletonModification2D
 */
  getModification(modIdx: int): SkeletonModification2D;
/**
 * Returns the `Skeleton2D` node that the SkeletonModificationStack2D is bound to.
 * @returns Skeleton2D
 */
  getSkeleton(): Skeleton2D;
/**
 * Sets the modification at `mod_idx` to the passed-in modification, `modification`.
 * @param modIdx int
 * @param modification SkeletonModification2D
 */
  setModification(modIdx: int, modification: SkeletonModification2D): void;
/**
 * Sets up the modification stack so it can execute. This function should be called by `Skeleton2D` and shouldn't be manually called unless you know what you are doing.
 */
  setup(): void;
}
