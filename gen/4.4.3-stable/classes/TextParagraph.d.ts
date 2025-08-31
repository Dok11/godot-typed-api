import type { Color, Font, GodotArray, GodotDictionary, PackedFloat32Array, RID, Rect2, RefCounted, Variant, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * Holds a paragraph of text.
 * 
 * Abstraction over `TextServer` for handling a single paragraph of text.
 */
export class TextParagraph extends RefCounted {
/**
 * Paragraph horizontal alignment.
 */
  alignment: int;
/**
 * Line breaking rules. For more info see `TextServer`.
 */
  breakFlags: int;
/**
 * Custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.
 */
  customPunctuation: string;
/**
 * Text writing direction.
 */
  direction: int;
/**
 * Ellipsis character used for text clipping.
 */
  ellipsisChar: string;
/**
 * Line fill alignment rules. See `TextServer.JustificationFlag` for more information.
 */
  justificationFlags: int;
/**
 * Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative.
 */
  lineSpacing: float;
/**
 * Limits the lines of text shown.
 */
  maxLinesVisible: int;
/**
 * Text orientation.
 */
  orientation: int;
/**
 * If set to `true` text will display control characters.
 */
  preserveControl: boolean;
/**
 * If set to `true` text will display invalid characters.
 */
  preserveInvalid: boolean;
/**
 * Sets the clipping behavior when the text exceeds the paragraph's set width. See `TextServer.OverrunBehavior` for a description of all modes.
 */
  textOverrunBehavior: int;
/**
 * Paragraph width.
 */
  width: float;
/**
 * Adds inline object to the text buffer, `key` must be unique. In the text, object is represented as `length` object replacement characters.
 * @param key Variant
 * @param size Vector2
 * @param inlineAlign int (optional, default: 5)
 * @param length int (optional, default: 1)
 * @param baseline float (optional, default: 0.0)
 * @returns boolean
 */
  addObject(key: Variant, size: Vector2, inlineAlign?: int, length?: int, baseline?: float): boolean;
/**
 * Adds text span and font to draw it.
 * @param text string
 * @param font Font
 * @param fontSize int
 * @param language string (optional, default: "")
 * @param meta Variant (optional, default: null)
 * @returns boolean
 */
  addString(text: string, font: Font, fontSize: int, language?: string, meta?: Variant): boolean;
/**
 * Clears text paragraph (removes text and inline objects).
 */
  clear(): void;
/**
 * Removes dropcap.
 */
  clearDropcap(): void;
/**
 * Draw all lines of the text and drop cap into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 * @param dcColor Color (optional, default: Color(1, 1, 1, 1))
 */
  draw(canvas: RID, pos: Vector2, color?: Color, dcColor?: Color): void;
/**
 * Draw drop cap into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  drawDropcap(canvas: RID, pos: Vector2, color?: Color): void;
/**
 * Draw drop cap outline into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param outlineSize int (optional, default: 1)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  drawDropcapOutline(canvas: RID, pos: Vector2, outlineSize?: int, color?: Color): void;
/**
 * Draw single line of text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param line int
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  drawLine(canvas: RID, pos: Vector2, line: int, color?: Color): void;
/**
 * Draw outline of the single line of text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param line int
 * @param outlineSize int (optional, default: 1)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  drawLineOutline(canvas: RID, pos: Vector2, line: int, outlineSize?: int, color?: Color): void;
/**
 * Draw outlines of all lines of the text and drop cap into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param outlineSize int (optional, default: 1)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 * @param dcColor Color (optional, default: Color(1, 1, 1, 1))
 */
  drawOutline(canvas: RID, pos: Vector2, outlineSize?: int, color?: Color, dcColor?: Color): void;
/**
 * Returns number of lines used by dropcap.
 * @returns int
 */
  getDropcapLines(): int;
/**
 * Returns drop cap text buffer RID.
 * @returns RID
 */
  getDropcapRid(): RID;
/**
 * Returns drop cap bounding box size.
 * @returns Vector2
 */
  getDropcapSize(): Vector2;
/**
 * Returns the text line ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).
 * @param line int
 * @returns float
 */
  getLineAscent(line: int): float;
/**
 * Returns number of lines in the paragraph.
 * @returns int
 */
  getLineCount(): int;
/**
 * Returns the text line descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).
 * @param line int
 * @returns float
 */
  getLineDescent(line: int): float;
/**
 * Returns bounding rectangle of the inline object.
 * @param line int
 * @param key Variant
 * @returns Rect2
 */
  getLineObjectRect(line: int, key: Variant): Rect2;
/**
 * Returns array of inline objects in the line.
 * @param line int
 * @returns GodotArray<any>
 */
  getLineObjects(line: int): GodotArray<any>;
/**
 * Returns character range of the line.
 * @param line int
 * @returns Vector2i
 */
  getLineRange(line: int): Vector2i;
/**
 * Returns TextServer line buffer RID.
 * @param line int
 * @returns RID
 */
  getLineRid(line: int): RID;
/**
 * Returns size of the bounding box of the line of text. Returned size is rounded up.
 * @param line int
 * @returns Vector2
 */
  getLineSize(line: int): Vector2;
/**
 * Returns pixel offset of the underline below the baseline.
 * @param line int
 * @returns float
 */
  getLineUnderlinePosition(line: int): float;
/**
 * Returns thickness of the underline.
 * @param line int
 * @returns float
 */
  getLineUnderlineThickness(line: int): float;
/**
 * Returns width (for horizontal layout) or height (for vertical) of the line of text.
 * @param line int
 * @returns float
 */
  getLineWidth(line: int): float;
/**
 * Returns the size of the bounding box of the paragraph, without line breaks.
 * @returns Vector2
 */
  getNonWrappedSize(): Vector2;
/**
 * Returns TextServer full string buffer RID.
 * @returns RID
 */
  getRid(): RID;
/**
 * Returns the size of the bounding box of the paragraph.
 * @returns Vector2
 */
  getSize(): Vector2;
/**
 * Returns caret character offset at the specified coordinates. This function always returns a valid position.
 * @param coords Vector2
 * @returns int
 */
  hitTest(coords: Vector2): int;
/**
 * Sets new size and alignment of embedded object.
 * @param key Variant
 * @param size Vector2
 * @param inlineAlign int (optional, default: 5)
 * @param baseline float (optional, default: 0.0)
 * @returns boolean
 */
  resizeObject(key: Variant, size: Vector2, inlineAlign?: int, baseline?: float): boolean;
/**
 * Overrides BiDi for the structured text.
 * Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.
 * @param override GodotArray<any>
 */
  setBidiOverride(override: GodotArray<any>): void;
/**
 * Sets drop cap, overrides previously set drop cap. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text.
 * @param text string
 * @param font Font
 * @param fontSize int
 * @param dropcapMargins Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param language string (optional, default: "")
 * @returns boolean
 */
  setDropcap(text: string, font: Font, fontSize: int, dropcapMargins?: Rect2, language?: string): boolean;
/**
 * Aligns paragraph to the given tab-stops.
 * @param tabStops PackedFloat32Array
 */
  tabAlign(tabStops: PackedFloat32Array): void;
}
