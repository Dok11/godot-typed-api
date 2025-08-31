import type { Container, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A container that arranges its child controls horizontally or vertically and wraps them around at the borders.
 * 
 * A container that arranges its child controls horizontally or vertically and wraps them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line.
 */
export class FlowContainer extends Container {
/**
 * The alignment of the container's children (must be one of `ALIGNMENT_BEGIN`, `ALIGNMENT_CENTER`, or `ALIGNMENT_END`).
 */
  alignment: int;
/**
 * The wrap behavior of the last, partially filled row or column (must be one of `LAST_WRAP_ALIGNMENT_INHERIT`, `LAST_WRAP_ALIGNMENT_BEGIN`, `LAST_WRAP_ALIGNMENT_CENTER`, or `LAST_WRAP_ALIGNMENT_END`).
 */
  lastWrapAlignment: int;
/**
 * If `true`, reverses fill direction. Horizontal `FlowContainer`s will fill rows bottom to top, vertical `FlowContainer`s will fill columns right to left.
 * When using a vertical `FlowContainer` with a right to left `Control.layout_direction`, columns will fill left to right instead.
 */
  reverseFill: boolean;
/**
 * If `true`, the `FlowContainer` will arrange its children vertically, rather than horizontally.
 * Can't be changed when using `HFlowContainer` and `VFlowContainer`.
 */
  vertical: boolean;
/**
 * Returns the current line count.
 * @returns int
 */
  getLineCount(): int;
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
/**
 * The last partially filled row or column will wrap aligned to the previous row or column in accordance with `alignment`.
 */
  static readonly LAST_WRAP_ALIGNMENT_INHERIT: int;
/**
 * The last partially filled row or column will wrap aligned to the beginning of the previous row or column.
 */
  static readonly LAST_WRAP_ALIGNMENT_BEGIN: int;
/**
 * The last partially filled row or column will wrap aligned to the center of the previous row or column.
 */
  static readonly LAST_WRAP_ALIGNMENT_CENTER: int;
/**
 * The last partially filled row or column will wrap aligned to the end of the previous row or column.
 */
  static readonly LAST_WRAP_ALIGNMENT_END: int;
}
