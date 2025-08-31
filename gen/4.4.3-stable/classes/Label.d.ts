import type { Control, GodotArray, GodotDictionary, LabelSettings, PackedFloat32Array, Rect2, float, int } from "../index.d.ts";
/**
 * A control for displaying plain text.
 * 
 * A control for displaying plain text. It gives you control over the horizontal and vertical alignment and can wrap the text inside the node's bounding rectangle. It doesn't support bold, italics, or other rich text formatting. For that, use `RichTextLabel` instead.
 */
export class Label extends Control {
/**
 * If set to something other than `TextServer.AUTOWRAP_OFF`, the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see `TextServer.AutowrapMode`.
 */
  autowrapMode: int;
/**
 * If `true`, the Label only shows the text that fits inside its bounding rectangle and will clip text horizontally.
 */
  clipText: boolean;
/**
 * Ellipsis character used for text clipping.
 */
  ellipsisChar: string;
/**
 * Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the `HorizontalAlignment` constants.
 */
  horizontalAlignment: int;
/**
 * Line fill alignment rules. See `TextServer.JustificationFlag` for more information.
 */
  justificationFlags: int;
/**
 * A `LabelSettings` resource that can be shared between multiple `Label` nodes. Takes priority over theme properties.
 */
  labelSettings: LabelSettings;
/**
 * Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
/**
 * The number of the lines ignored and not displayed from the start of the `text` value.
 */
  linesSkipped: int;
/**
 * Limits the lines of text the node shows on screen.
 */
  maxLinesVisible: int;
  mouseFilter: int;
/**
 * String used as a paragraph separator. Each paragraph is processed independently, in its own BiDi context.
 */
  paragraphSeparator: string;
  sizeFlagsVertical: int;
/**
 * Set BiDi algorithm override for the structured text.
 */
  structuredTextBidiOverride: int;
/**
 * Set additional options for BiDi override.
 */
  structuredTextBidiOverrideOptions: GodotArray<any>;
/**
 * Aligns text to the given tab-stops.
 */
  tabStops: PackedFloat32Array;
/**
 * The text to display on screen.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * Sets the clipping behavior when the text exceeds the node's bounding rectangle. See `TextServer.OverrunBehavior` for a description of all modes.
 */
  textOverrunBehavior: int;
/**
 * If `true`, all the text displays as UPPERCASE.
 */
  uppercase: boolean;
/**
 * Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the `VerticalAlignment` constants.
 */
  verticalAlignment: int;
/**
 * The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.
 * 
 * **Note:** Setting this property updates `visible_ratio` accordingly.
 */
  visibleCharacters: int;
/**
 * Sets the clipping behavior when `visible_characters` or `visible_ratio` is set. See `TextServer.VisibleCharactersBehavior` for more info.
 */
  visibleCharactersBehavior: int;
/**
 * The fraction of characters to display, relative to the total number of characters (see `get_total_character_count`). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.
 * 
 * **Note:** Setting this property updates `visible_characters` accordingly.
 */
  visibleRatio: float;
/**
 * Returns the bounding rectangle of the character at position `pos` in the label's local coordinate system. If the character is a non-visual character or `pos` is outside the valid range, an empty `Rect2` is returned. If the character is a part of a composite grapheme, the bounding rectangle of the whole grapheme is returned.
 * @param pos int
 * @returns Rect2
 */
  getCharacterBounds(pos: int): Rect2;
/**
 * Returns the number of lines of text the Label has.
 * @returns int
 */
  getLineCount(): int;
/**
 * Returns the height of the line `line`.
 * If `line` is set to `-1`, returns the biggest line height.
 * If there are no lines, returns font size in pixels.
 * @param line int (optional, default: -1)
 * @returns int
 */
  getLineHeight(line?: int): int;
/**
 * Returns the total number of printable characters in the text (excluding spaces and newlines).
 * @returns int
 */
  getTotalCharacterCount(): int;
/**
 * Returns the number of lines shown. Useful if the `Label`'s height cannot currently display all lines.
 * @returns int
 */
  getVisibleLineCount(): int;
}
