import type { Color, Font, GodotArray, GodotDictionary, Resource, Vector2, float, int } from "../index.d.ts";
/**
 * Provides common settings to customize the text in a `Label`.
 * 
 * `LabelSettings` is a resource that provides common settings to customize the text in a `Label`. It will take priority over the properties defined in `Control.theme`. The resource can be shared between multiple labels and changed on the fly, so it's convenient and flexible way to setup text style.
 */
export class LabelSettings extends Resource {
/**
 * `Font` used for the text.
 */
  font: Font;
/**
 * Color of the text.
 */
  fontColor: Color;
/**
 * Size of the text.
 */
  fontSize: int;
/**
 * Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative.
 */
  lineSpacing: float;
/**
 * The color of the outline.
 */
  outlineColor: Color;
/**
 * Text outline size.
 */
  outlineSize: int;
/**
 * Vertical space between paragraphs. Added on top of `line_spacing`.
 */
  paragraphSpacing: float;
/**
 * Color of the shadow effect. If alpha is `0`, no shadow will be drawn.
 */
  shadowColor: Color;
/**
 * Offset of the shadow effect, in pixels.
 */
  shadowOffset: Vector2;
/**
 * Size of the shadow effect.
 */
  shadowSize: int;
}
