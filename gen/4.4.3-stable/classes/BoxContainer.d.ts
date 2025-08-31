import type { Container, Control, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A container that arranges its child controls horizontally or vertically.
 * 
 * A container that arranges its child controls horizontally or vertically, rearranging them automatically when their minimum size changes.
 */
export class BoxContainer extends Container {
/**
 * The alignment of the container's children (must be one of `ALIGNMENT_BEGIN`, `ALIGNMENT_CENTER`, or `ALIGNMENT_END`).
 */
  alignment: int;
/**
 * If `true`, the `BoxContainer` will arrange its children vertically, rather than horizontally.
 * Can't be changed when using `HBoxContainer` and `VBoxContainer`.
 */
  vertical: boolean;
/**
 * Adds a `Control` node to the box as a spacer. If `begin` is `true`, it will insert the `Control` node in front of all other children.
 * @param begin boolean
 * @returns Control
 */
  addSpacer(begin: boolean): Control;
/**
 * The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout).
 */
  static readonly ALIGNMENT_BEGIN: int;
/**
 * The child controls will be centered in the container.
 */
  static readonly ALIGNMENT_CENTER: int;
/**
 * The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout).
 */
  static readonly ALIGNMENT_END: int;
}
