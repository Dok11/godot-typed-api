import type { Color, GodotArray, GodotDictionary, GraphElement, HBoxContainer, Signal, float, int } from "../index.d.ts";
/**
 * GraphFrame is a special `GraphElement` that can be used to organize other `GraphElement`s inside a `GraphEdit`.
 * 
 * GraphFrame is a special `GraphElement` to which other `GraphElement`s can be attached. It can be configured to automatically resize to enclose all attached `GraphElement`s. If the frame is moved, all the attached `GraphElement`s inside it will be moved as well.
 * A GraphFrame is always kept behind the connection layer and other `GraphElement`s inside a `GraphEdit`.
 */
export class GraphFrame extends GraphElement {
/**
 * If `true`, the frame's rect will be adjusted automatically to enclose all attached `GraphElement`s.
 */
  autoshrinkEnabled: boolean;
/**
 * The margin around the attached nodes that is used to calculate the size of the frame when `autoshrink_enabled` is `true`.
 */
  autoshrinkMargin: int;
/**
 * The margin inside the frame that can be used to drag the frame.
 */
  dragMargin: int;
  mouseFilter: int;
/**
 * The color of the frame when `tint_color_enabled` is `true`.
 */
  tintColor: Color;
/**
 * If `true`, the tint color will be used to tint the frame.
 */
  tintColorEnabled: boolean;
/**
 * Title of the frame.
 */
  title: string;
/**
 * Returns the `HBoxContainer` used for the title bar, only containing a `Label` for displaying the title by default.
 * This can be used to add custom controls to the title bar such as option or close buttons.
 * @returns HBoxContainer
 */
  getTitlebarHbox(): HBoxContainer;
/**
 * Emitted when `autoshrink_enabled` or `autoshrink_margin` changes.
 */
  autoshrinkChanged: Signal<[]>;
}
