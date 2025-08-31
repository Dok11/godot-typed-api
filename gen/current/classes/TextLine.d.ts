import type { Color, Font, GodotArray, GodotDictionary, PackedFloat32Array, RID, Rect2, RefCounted, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * Holds a line of text.
 * 
 * Abstraction over `TextServer` for handling a single line of text.
 */
export class TextLine extends RefCounted {
/**
 * Sets text alignment within the line as if the line was horizontal.
 */
  alignment: int;
/**
 * Text writing direction.
 */
  direction: int;
/**
 * Ellipsis character used for text clipping.
 */
  ellipsisChar: string;
/**
 * Line alignment rules. For more info see `TextServer`.
 */
  flags: int;
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
 * Sets the clipping behavior when the text exceeds the text line's set width. See `TextServer.OverrunBehavior` for a description of all modes.
 */
  textOverrunBehavior: int;
/**
 * Text line width.
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
 * Clears text line (removes text and inline objects).
 */
  clear(): void;
/**
 * Draw text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  draw(canvas: RID, pos: Vector2, color?: Color): void;
/**
 * Draw text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.
 * @param canvas RID
 * @param pos Vector2
 * @param outlineSize int (optional, default: 1)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  drawOutline(canvas: RID, pos: Vector2, outlineSize?: int, color?: Color): void;
/**
 * Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).
 * @returns float
 */
  getLineAscent(): float;
/**
 * Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).
 * @returns float
 */
  getLineDescent(): float;
/**
 * Returns pixel offset of the underline below the baseline.
 * @returns float
 */
  getLineUnderlinePosition(): float;
/**
 * Returns thickness of the underline.
 * @returns float
 */
  getLineUnderlineThickness(): float;
/**
 * Returns width (for horizontal layout) or height (for vertical) of the text.
 * @returns float
 */
  getLineWidth(): float;
/**
 * Returns bounding rectangle of the inline object.
 * @param key Variant
 * @returns Rect2
 */
  getObjectRect(key: Variant): Rect2;
/**
 * Returns array of inline objects.
 * @returns GodotArray<any>
 */
  getObjects(): GodotArray<any>;
/**
 * Returns TextServer buffer RID.
 * @returns RID
 */
  getRid(): RID;
/**
 * Returns size of the bounding box of the text.
 * @returns Vector2
 */
  getSize(): Vector2;
/**
 * Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position.
 * @param coords float
 * @returns int
 */
  hitTest(coords: float): int;
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
 * Aligns text to the given tab-stops.
 * @param tabStops PackedFloat32Array
 */
  tabAlign(tabStops: PackedFloat32Array): void;
}
