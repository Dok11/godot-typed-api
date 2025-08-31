import type { Control, GodotArray, GodotDictionary, PackedInt32Array, Rect2, Signal, float, int } from "../index.d.ts";
/**
 * Base class for all GUI containers.
 * 
 * Base class for all GUI containers. A `Container` automatically arranges its child controls in a certain way. This class can be inherited to make custom container types.
 */
export class Container extends Control {
  mouseFilter: int;
/**
 * Fit a child control in a given rect. This is mainly a helper for creating custom container classes.
 * @param child Control
 * @param rect Rect2
 */
  fitChildInRect(child: Control, rect: Rect2): void;
/**
 * Implement to return a list of allowed horizontal `Control.SizeFlags` for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.
 * 
 * **Note:** Having no size flags is equal to having `Control.SIZE_SHRINK_BEGIN`. As such, this value is always implicitly allowed.
 * @returns PackedInt32Array
 */
  private getAllowedSizeFlagsHorizontal(): PackedInt32Array;
/**
 * Implement to return a list of allowed vertical `Control.SizeFlags` for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.
 * 
 * **Note:** Having no size flags is equal to having `Control.SIZE_SHRINK_BEGIN`. As such, this value is always implicitly allowed.
 * @returns PackedInt32Array
 */
  private getAllowedSizeFlagsVertical(): PackedInt32Array;
/**
 * Queue resort of the contained children. This is called automatically anyway, but can be called upon request.
 */
  queueSort(): void;
/**
 * Emitted when children are going to be sorted.
 */
  preSortChildren: Signal<[]>;
/**
 * Emitted when sorting the children is needed.
 */
  sortChildren: Signal<[]>;
/**
 * Notification just before children are going to be sorted, in case there's something to process beforehand.
 */
  static readonly NOTIFICATION_PRE_SORT_CHILDREN: int;
/**
 * Notification for when sorting the children, it must be obeyed immediately.
 */
  static readonly NOTIFICATION_SORT_CHILDREN: int;
}
