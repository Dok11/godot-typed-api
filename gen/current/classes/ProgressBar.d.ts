import type { GodotArray, GodotDictionary, Range, float, int } from "../index.d.ts";
/**
 * A control used for visual representation of a percentage.
 * 
 * A control used for visual representation of a percentage. Shows fill percentage from right to left.
 */
export class ProgressBar extends Range {
/**
 * If `false`, the `indeterminate` animation will be paused in the editor.
 */
  editorPreviewIndeterminate: boolean;
/**
 * The fill direction. See `FillMode` for possible values.
 */
  fillMode: int;
/**
 * When set to `true`, the progress bar indicates that something is happening with an animation, but does not show the fill percentage or value.
 */
  indeterminate: boolean;
/**
 * If `true`, the fill percentage is displayed on the bar.
 */
  showPercentage: boolean;
/**
 * The progress bar fills from begin to end horizontally, according to the language direction. If `Control.is_layout_rtl` returns `false`, it fills from left to right, and if it returns `true`, it fills from right to left.
 */
  static readonly FILL_BEGIN_TO_END: int;
/**
 * The progress bar fills from end to begin horizontally, according to the language direction. If `Control.is_layout_rtl` returns `false`, it fills from right to left, and if it returns `true`, it fills from left to right.
 */
  static readonly FILL_END_TO_BEGIN: int;
/**
 * The progress fills from top to bottom.
 */
  static readonly FILL_TOP_TO_BOTTOM: int;
/**
 * The progress fills from bottom to top.
 */
  static readonly FILL_BOTTOM_TO_TOP: int;
}
