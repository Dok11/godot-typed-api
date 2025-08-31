import type { Container, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A container that preserves the proportions of its child controls.
 * 
 * A container type that arranges its child controls in a way that preserves their proportions automatically when the container is resized. Useful when a container has a dynamic size and the child nodes must adjust their sizes accordingly without losing their aspect ratios.
 */
export class AspectRatioContainer extends Container {
/**
 * Specifies the horizontal relative position of child controls.
 */
  alignmentHorizontal: int;
/**
 * Specifies the vertical relative position of child controls.
 */
  alignmentVertical: int;
/**
 * The aspect ratio to enforce on child controls. This is the width divided by the height. The ratio depends on the `stretch_mode`.
 */
  ratio: float;
/**
 * The stretch mode used to align child controls.
 */
  stretchMode: int;
/**
 * The height of child controls is automatically adjusted based on the width of the container.
 */
  static readonly STRETCH_WIDTH_CONTROLS_HEIGHT: int;
/**
 * The width of child controls is automatically adjusted based on the height of the container.
 */
  static readonly STRETCH_HEIGHT_CONTROLS_WIDTH: int;
/**
 * The bounding rectangle of child controls is automatically adjusted to fit inside the container while keeping the aspect ratio.
 */
  static readonly STRETCH_FIT: int;
/**
 * The width and height of child controls is automatically adjusted to make their bounding rectangle cover the entire area of the container while keeping the aspect ratio.
 * When the bounding rectangle of child controls exceed the container's size and `Control.clip_contents` is enabled, this allows to show only the container's area restricted by its own bounding rectangle.
 */
  static readonly STRETCH_COVER: int;
/**
 * Aligns child controls with the beginning (left or top) of the container.
 */
  static readonly ALIGNMENT_BEGIN: int;
/**
 * Aligns child controls with the center of the container.
 */
  static readonly ALIGNMENT_CENTER: int;
/**
 * Aligns child controls with the end (right or bottom) of the container.
 */
  static readonly ALIGNMENT_END: int;
}
