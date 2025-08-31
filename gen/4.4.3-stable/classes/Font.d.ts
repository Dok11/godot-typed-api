import type { Color, GodotArray, GodotDictionary, RID, Resource, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Abstract base class for fonts and font variations.
 * 
 * Abstract base class for different font types. It has methods for drawing text and font character introspection.
 */
export class Font extends Resource {
/**
 * Array of fallback `Font`s to use as a substitute if a glyph is not found in this current `Font`.
 * If this array is empty in a `FontVariation`, the `FontVariation.base_font`'s fallbacks are used instead.
 */
  fallbacks: Font[];
/**
 * Draw a single Unicode character `char` into a canvas item using the font, at a given position, with `modulate` color. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.
 * 
 * **Note:** Do not use this function to draw strings character by character, use `draw_string` or `TextLine` instead.
 * @param canvasItem RID
 * @param pos Vector2
 * @param char int
 * @param fontSize int
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @returns float
 */
  drawChar(canvasItem: RID, pos: Vector2, char: int, fontSize: int, modulate?: Color): float;
/**
 * Draw a single Unicode character `char` outline into a canvas item using the font, at a given position, with `modulate` color and `size` outline size. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.
 * 
 * **Note:** Do not use this function to draw strings character by character, use `draw_string` or `TextLine` instead.
 * @param canvasItem RID
 * @param pos Vector2
 * @param char int
 * @param fontSize int
 * @param size int (optional, default: -1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @returns float
 */
  drawCharOutline(canvasItem: RID, pos: Vector2, char: int, fontSize: int, size?: int, modulate?: Color): float;
/**
 * Breaks `text` into lines using rules specified by `brk_flags` and draws it into a canvas item using the font, at a given position, with `modulate` color, optionally clipping the width and aligning horizontally. `pos` specifies the baseline of the first line, not the top. To draw from the top, *ascent* must be added to the Y axis.
 * See also `CanvasItem.draw_multiline_string`.
 * @param canvasItem RID
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param maxLines int (optional, default: -1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param brkFlags int (optional, default: 3)
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawMultilineString(canvasItem: RID, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, maxLines?: int, modulate?: Color, brkFlags?: int, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Breaks `text` to the lines using rules specified by `brk_flags` and draws text outline into a canvas item using the font, at a given position, with `modulate` color and `size` outline size, optionally clipping the width and aligning horizontally. `pos` specifies the baseline of the first line, not the top. To draw from the top, *ascent* must be added to the Y axis.
 * See also `CanvasItem.draw_multiline_string_outline`.
 * @param canvasItem RID
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param maxLines int (optional, default: -1)
 * @param size int (optional, default: 1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param brkFlags int (optional, default: 3)
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawMultilineStringOutline(canvasItem: RID, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, maxLines?: int, size?: int, modulate?: Color, brkFlags?: int, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Draw `text` into a canvas item using the font, at a given position, with `modulate` color, optionally clipping the width and aligning horizontally. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.
 * See also `CanvasItem.draw_string`.
 * @param canvasItem RID
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawString(canvasItem: RID, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, modulate?: Color, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Draw `text` outline into a canvas item using the font, at a given position, with `modulate` color and `size` outline size, optionally clipping the width and aligning horizontally. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.
 * See also `CanvasItem.draw_string_outline`.
 * @param canvasItem RID
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param size int (optional, default: 1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawStringOutline(canvasItem: RID, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, size?: int, modulate?: Color, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Returns `TextServer` RID of the font cache for specific variation.
 * @param variationCoordinates GodotDictionary<any>
 * @param faceIndex int (optional, default: 0)
 * @param strength float (optional, default: 0.0)
 * @param transform Transform2D (optional, default: Transform2D(1, 0, 0, 1, 0, 0))
 * @param spacingTop int (optional, default: 0)
 * @param spacingBottom int (optional, default: 0)
 * @param spacingSpace int (optional, default: 0)
 * @param spacingGlyph int (optional, default: 0)
 * @param baselineOffset float (optional, default: 0.0)
 * @returns RID
 */
  findVariation(variationCoordinates: GodotDictionary<any>, faceIndex?: int, strength?: float, transform?: Transform2D, spacingTop?: int, spacingBottom?: int, spacingSpace?: int, spacingGlyph?: int, baselineOffset?: float): RID;
/**
 * Returns the average font ascent (number of pixels above the baseline).
 * 
 * **Note:** Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).
 * @param fontSize int (optional, default: 16)
 * @returns float
 */
  getAscent(fontSize?: int): float;
/**
 * Returns the size of a character. Does not take kerning into account.
 * 
 * **Note:** Do not use this function to calculate width of the string character by character, use `get_string_size` or `TextLine` instead. The height returned is the font height (see also `get_height`) and has no relation to the glyph height.
 * @param char int
 * @param fontSize int
 * @returns Vector2
 */
  getCharSize(char: int, fontSize: int): Vector2;
/**
 * Returns the average font descent (number of pixels below the baseline).
 * 
 * **Note:** Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).
 * @param fontSize int (optional, default: 16)
 * @returns float
 */
  getDescent(fontSize?: int): float;
/**
 * Returns number of faces in the TrueType / OpenType collection.
 * @returns int
 */
  getFaceCount(): int;
/**
 * Returns font family name.
 * @returns string
 */
  getFontName(): string;
/**
 * Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.
 * @returns int
 */
  getFontStretch(): int;
/**
 * Returns font style flags, see `TextServer.FontStyle`.
 * @returns int
 */
  getFontStyle(): int;
/**
 * Returns font style name.
 * @returns string
 */
  getFontStyleName(): string;
/**
 * Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.
 * @returns int
 */
  getFontWeight(): int;
/**
 * Returns the total average font height (ascent plus descent) in pixels.
 * 
 * **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).
 * @param fontSize int (optional, default: 16)
 * @returns float
 */
  getHeight(fontSize?: int): float;
/**
 * Returns the size of a bounding box of a string broken into the lines, taking kerning and advance into account.
 * See also `draw_multiline_string`.
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param maxLines int (optional, default: -1)
 * @param brkFlags int (optional, default: 3)
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 * @returns Vector2
 */
  getMultilineStringSize(text: string, alignment?: int, width?: float, fontSize?: int, maxLines?: int, brkFlags?: int, justificationFlags?: int, direction?: int, orientation?: int): Vector2;
/**
 * Returns a set of OpenType feature tags. More info: OpenType feature tags (https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags).
 * @returns GodotDictionary<any>
 */
  getOpentypeFeatures(): GodotDictionary<any>;
/**
 * Returns `Dictionary` with OpenType font name strings (localized font names, version, description, license information, sample text, etc.).
 * @returns GodotDictionary<any>
 */
  getOtNameStrings(): GodotDictionary<any>;
/**
 * Returns `Array` of valid `Font` `RID`s, which can be passed to the `TextServer` methods.
 * @returns RID[]
 */
  getRids(): RID[];
/**
 * Returns the spacing for the given `type` (see `TextServer.SpacingType`).
 * @param spacing int
 * @returns int
 */
  getSpacing(spacing: int): int;
/**
 * Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also `get_multiline_string_size` and `draw_string`.
 * For example, to get the string size as displayed by a single-line Label, use:
 * 
 * 				```gdscript
 * 
 * 				var string_size = $Label.get_theme_font("font").get_string_size($Label.text, HORIZONTAL_ALIGNMENT_LEFT, -1, $Label.get_theme_font_size("font_size"))
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Label label = GetNode<Label>("Label");
 * 				Vector2 stringSize = label.GetThemeFont("font").GetStringSize(label.Text, HorizontalAlignment.Left, -1, label.GetThemeFontSize("font_size"));
 * 				
 * 
 * ```
 * 
 * **Note:** Since kerning, advance and subpixel positioning are taken into account by `get_string_size`, using separate `get_string_size` calls on substrings of a string then adding the results together will return a different result compared to using a single `get_string_size` call on the full string.
 * 
 * **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by `get_height`.
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 * @returns Vector2
 */
  getStringSize(text: string, alignment?: int, width?: float, fontSize?: int, justificationFlags?: int, direction?: int, orientation?: int): Vector2;
/**
 * Returns a string containing all the characters available in the font.
 * If a given character is included in more than one font data source, it appears only once in the returned string.
 * @returns string
 */
  getSupportedChars(): string;
/**
 * Returns list of OpenType features supported by font.
 * @returns GodotDictionary<any>
 */
  getSupportedFeatureList(): GodotDictionary<any>;
/**
 * Returns list of supported variation coordinates (https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg), each coordinate is returned as `tag: Vector3i(min_value,max_value,default_value)`.
 * Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.
 * To print available variation axes of a variable font:
 * 
 * 				```gdscript
 * 
 * 				var fv = FontVariation.new()
 * 				fv.base_font = load("res://RobotoFlex.ttf")
 * 				var variation_list = fv.get_supported_variation_list()
 * 				for tag in variation_list:
 * 				    var name = TextServerManager.get_primary_interface().tag_to_name(tag)
 * 				    var values = variation_list[tag]
 * 				    print("variation axis: %s (%d)\n\tmin, max, default: %s" % [name, tag, values])
 * 				
 * 
 * ```
 * 
 * **Note:** To set and get variation coordinates of a `FontVariation`, use `FontVariation.variation_opentype`.
 * @returns GodotDictionary<any>
 */
  getSupportedVariationList(): GodotDictionary<any>;
/**
 * Returns average pixel offset of the underline below the baseline.
 * 
 * **Note:** Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.
 * @param fontSize int (optional, default: 16)
 * @returns float
 */
  getUnderlinePosition(fontSize?: int): float;
/**
 * Returns average thickness of the underline.
 * 
 * **Note:** Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.
 * @param fontSize int (optional, default: 16)
 * @returns float
 */
  getUnderlineThickness(fontSize?: int): float;
/**
 * Returns `true` if a Unicode `char` is available in the font.
 * @param char int
 * @returns boolean
 */
  hasChar(char: int): boolean;
/**
 * Returns `true`, if font supports given language (ISO 639 (https://en.wikipedia.org/wiki/ISO_639-1) code).
 * @param language string
 * @returns boolean
 */
  isLanguageSupported(language: string): boolean;
/**
 * Returns `true`, if font supports given script (ISO 15924 (https://en.wikipedia.org/wiki/ISO_15924) code).
 * @param script string
 * @returns boolean
 */
  isScriptSupported(script: string): boolean;
/**
 * Sets LRU cache capacity for `draw_*` methods.
 * @param singleLine int
 * @param multiLine int
 */
  setCacheCapacity(singleLine: int, multiLine: int): void;
}
