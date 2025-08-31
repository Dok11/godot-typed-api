import type { Color, Dictionary, GodotArray, GodotDictionary, Image, PackedByteArray, PackedFloat32Array, PackedInt32Array, PackedStringArray, PackedVector2Array, RID, Rect2, RefCounted, Transform2D, Variant, Vector2, Vector2i, Vector3i, float, int } from "../index.d.ts";
/**
 * A server interface for font management and text rendering.
 * 
 * `TextServer` is the API backend for managing fonts and rendering text.
 * 
 * **Note:** This is a low-level API, consider using `TextLine`, `TextParagraph`, and `Font` classes instead.
 * This is an abstract class, so to get the currently active `TextServer` instance, use the following code:
 * 
 * 		```gdscript
 * 
 * 		var ts = TextServerManager.get_primary_interface()
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var ts = TextServerManager.GetPrimaryInterface();
 * 		
 * 
 * ```
 * 
 */
export class TextServer extends RefCounted {
/**
 * Creates a new, empty font cache entry resource. To free the resulting resource, use the `free_rid` method.
 * @returns RID
 */
  createFont(): RID;
/**
 * Creates a new variation existing font which is reusing the same glyph cache and font data. To free the resulting resource, use the `free_rid` method.
 * @param fontRid RID
 * @returns RID
 */
  createFontLinkedVariation(fontRid: RID): RID;
/**
 * Creates a new buffer for complex text layout, with the given `direction` and `orientation`. To free the resulting buffer, use `free_rid` method.
 * 
 * **Note:** Direction is ignored if server does not support `FEATURE_BIDI_LAYOUT` feature (supported by `TextServerAdvanced`).
 * 
 * **Note:** Orientation is ignored if server does not support `FEATURE_VERTICAL_LAYOUT` feature (supported by `TextServerAdvanced`).
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 * @returns RID
 */
  createShapedText(direction?: int, orientation?: int): RID;
/**
 * Draws box displaying character hexadecimal code. Used for replacing missing characters.
 * @param canvas RID
 * @param size int
 * @param pos Vector2
 * @param index int
 * @param color Color
 */
  drawHexCodeBox(canvas: RID, size: int, pos: Vector2, index: int, color: Color): void;
/**
 * Removes all rendered glyph information from the cache entry.
 * 
 * **Note:** This function will not remove textures associated with the glyphs, use `font_remove_texture` to remove them manually.
 * @param fontRid RID
 * @param size Vector2i
 */
  fontClearGlyphs(fontRid: RID, size: Vector2i): void;
/**
 * Removes all kerning overrides.
 * @param fontRid RID
 * @param size int
 */
  fontClearKerningMap(fontRid: RID, size: int): void;
/**
 * Removes all font sizes from the cache entry.
 * @param fontRid RID
 */
  fontClearSizeCache(fontRid: RID): void;
/**
 * Removes all textures from font cache entry.
 * 
 * **Note:** This function will not remove glyphs associated with the texture, use `font_remove_glyph` to remove them manually.
 * @param fontRid RID
 * @param size Vector2i
 */
  fontClearTextures(fontRid: RID, size: Vector2i): void;
/**
 * Draws single glyph into a canvas item at the position, using `font_rid` at the size `size`.
 * 
 * **Note:** Glyph index is specific to the font, use glyphs indices returned by `shaped_text_get_glyphs` or `font_get_glyph_index`.
 * 
 * **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.
 * @param fontRid RID
 * @param canvas RID
 * @param size int
 * @param pos Vector2
 * @param index int
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  fontDrawGlyph(fontRid: RID, canvas: RID, size: int, pos: Vector2, index: int, color?: Color): void;
/**
 * Draws single glyph outline of size `outline_size` into a canvas item at the position, using `font_rid` at the size `size`.
 * 
 * **Note:** Glyph index is specific to the font, use glyphs indices returned by `shaped_text_get_glyphs` or `font_get_glyph_index`.
 * 
 * **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.
 * @param fontRid RID
 * @param canvas RID
 * @param size int
 * @param outlineSize int
 * @param pos Vector2
 * @param index int
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  fontDrawGlyphOutline(fontRid: RID, canvas: RID, size: int, outlineSize: int, pos: Vector2, index: int, color?: Color): void;
/**
 * Returns font anti-aliasing mode.
 * @param fontRid RID
 * @returns int
 */
  fontGetAntialiasing(fontRid: RID): int;
/**
 * Returns the font ascent (number of pixels above the baseline).
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  fontGetAscent(fontRid: RID, size: int): float;
/**
 * Returns extra baseline offset (as a fraction of font height).
 * @param fontRid RID
 * @returns float
 */
  fontGetBaselineOffset(fontRid: RID): float;
/**
 * Returns character code associated with `glyph_index`, or `0` if `glyph_index` is invalid. See `font_get_glyph_index`.
 * @param fontRid RID
 * @param size int
 * @param glyphIndex int
 * @returns int
 */
  fontGetCharFromGlyphIndex(fontRid: RID, size: int, glyphIndex: int): int;
/**
 * Returns the font descent (number of pixels below the baseline).
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  fontGetDescent(fontRid: RID, size: int): float;
/**
 * Returns whether the font's embedded bitmap loading is disabled.
 * @param fontRid RID
 * @returns boolean
 */
  fontGetDisableEmbeddedBitmaps(fontRid: RID): boolean;
/**
 * Returns font embolden strength.
 * @param fontRid RID
 * @returns float
 */
  fontGetEmbolden(fontRid: RID): float;
/**
 * Returns number of faces in the TrueType / OpenType collection.
 * @param fontRid RID
 * @returns int
 */
  fontGetFaceCount(fontRid: RID): int;
/**
 * Returns an active face index in the TrueType / OpenType collection.
 * @param fontRid RID
 * @returns int
 */
  fontGetFaceIndex(fontRid: RID): int;
/**
 * Returns bitmap font fixed size.
 * @param fontRid RID
 * @returns int
 */
  fontGetFixedSize(fontRid: RID): int;
/**
 * Returns bitmap font scaling mode.
 * @param fontRid RID
 * @returns int
 */
  fontGetFixedSizeScaleMode(fontRid: RID): int;
/**
 * Returns `true` if font texture mipmap generation is enabled.
 * @param fontRid RID
 * @returns boolean
 */
  fontGetGenerateMipmaps(fontRid: RID): boolean;
/**
 * Returns the font oversampling factor, shared by all fonts in the TextServer.
 * @returns float
 */
  fontGetGlobalOversampling(): float;
/**
 * Returns glyph advance (offset of the next glyph).
 * 
 * **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.
 * @param fontRid RID
 * @param size int
 * @param glyph int
 * @returns Vector2
 */
  fontGetGlyphAdvance(fontRid: RID, size: int, glyph: int): Vector2;
/**
 * Returns outline contours of the glyph as a `Dictionary` with the following contents:
 * `points`         - `PackedVector3Array`, containing outline points. `x` and `y` are point coordinates. `z` is the type of the point, using the `ContourPointTag` values.
 * `contours`       - `PackedInt32Array`, containing indices the end points of each contour.
 * `orientation`    - [bool], contour orientation. If `true`, clockwise contours must be filled.
 * - Two successive `CONTOUR_CURVE_TAG_ON` points indicate a line segment.
 * - One `CONTOUR_CURVE_TAG_OFF_CONIC` point between two `CONTOUR_CURVE_TAG_ON` points indicates a single conic (quadratic) Bézier arc.
 * - Two `CONTOUR_CURVE_TAG_OFF_CUBIC` points between two `CONTOUR_CURVE_TAG_ON` points indicate a single cubic Bézier arc.
 * - Two successive `CONTOUR_CURVE_TAG_OFF_CONIC` points indicate two successive conic (quadratic) Bézier arcs with a virtual `CONTOUR_CURVE_TAG_ON` point at their middle.
 * - Each contour is closed. The last point of a contour uses the first point of a contour as its next point, and vice versa. The first point can be `CONTOUR_CURVE_TAG_OFF_CONIC` point.
 * @param font RID
 * @param size int
 * @param index int
 * @returns GodotDictionary<any>
 */
  fontGetGlyphContours(font: RID, size: int, index: int): GodotDictionary<any>;
/**
 * Returns the glyph index of a `char`, optionally modified by the `variation_selector`. See `font_get_char_from_glyph_index`.
 * @param fontRid RID
 * @param size int
 * @param char int
 * @param variationSelector int
 * @returns int
 */
  fontGetGlyphIndex(fontRid: RID, size: int, char: int, variationSelector: int): int;
/**
 * Returns list of rendered glyphs in the cache entry.
 * @param fontRid RID
 * @param size Vector2i
 * @returns PackedInt32Array
 */
  fontGetGlyphList(fontRid: RID, size: Vector2i): PackedInt32Array;
/**
 * Returns glyph offset from the baseline.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  fontGetGlyphOffset(fontRid: RID, size: Vector2i, glyph: int): Vector2;
/**
 * Returns size of the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  fontGetGlyphSize(fontRid: RID, size: Vector2i, glyph: int): Vector2;
/**
 * Returns index of the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns int
 */
  fontGetGlyphTextureIdx(fontRid: RID, size: Vector2i, glyph: int): int;
/**
 * Returns resource ID of the cache texture containing the glyph.
 * 
 * **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns RID
 */
  fontGetGlyphTextureRid(fontRid: RID, size: Vector2i, glyph: int): RID;
/**
 * Returns size of the cache texture containing the glyph.
 * 
 * **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  fontGetGlyphTextureSize(fontRid: RID, size: Vector2i, glyph: int): Vector2;
/**
 * Returns rectangle in the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Rect2
 */
  fontGetGlyphUvRect(fontRid: RID, size: Vector2i, glyph: int): Rect2;
/**
 * Returns the font hinting mode. Used by dynamic fonts only.
 * @param fontRid RID
 * @returns int
 */
  fontGetHinting(fontRid: RID): int;
/**
 * Returns glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled.
 * @param fontRid RID
 * @returns boolean
 */
  fontGetKeepRoundingRemainders(fontRid: RID): boolean;
/**
 * Returns kerning for the pair of glyphs.
 * @param fontRid RID
 * @param size int
 * @param glyphPair Vector2i
 * @returns Vector2
 */
  fontGetKerning(fontRid: RID, size: int, glyphPair: Vector2i): Vector2;
/**
 * Returns list of the kerning overrides.
 * @param fontRid RID
 * @param size int
 * @returns Vector2i[]
 */
  fontGetKerningList(fontRid: RID, size: int): Vector2i[];
/**
 * Returns `true` if support override is enabled for the `language`.
 * @param fontRid RID
 * @param language string
 * @returns boolean
 */
  fontGetLanguageSupportOverride(fontRid: RID, language: string): boolean;
/**
 * Returns list of language support overrides.
 * @param fontRid RID
 * @returns PackedStringArray
 */
  fontGetLanguageSupportOverrides(fontRid: RID): PackedStringArray;
/**
 * Returns the width of the range around the shape between the minimum and maximum representable signed distance.
 * @param fontRid RID
 * @returns int
 */
  fontGetMsdfPixelRange(fontRid: RID): int;
/**
 * Returns source font size used to generate MSDF textures.
 * @param fontRid RID
 * @returns int
 */
  fontGetMsdfSize(fontRid: RID): int;
/**
 * Returns font family name.
 * @param fontRid RID
 * @returns string
 */
  fontGetName(fontRid: RID): string;
/**
 * Returns font OpenType feature set override.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  fontGetOpentypeFeatureOverrides(fontRid: RID): GodotDictionary<any>;
/**
 * Returns `Dictionary` with OpenType font name strings (localized font names, version, description, license information, sample text, etc.).
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  fontGetOtNameStrings(fontRid: RID): GodotDictionary<any>;
/**
 * Returns font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.
 * @param fontRid RID
 * @returns float
 */
  fontGetOversampling(fontRid: RID): float;
/**
 * Returns scaling factor of the color bitmap font.
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  fontGetScale(fontRid: RID, size: int): float;
/**
 * Returns `true` if support override is enabled for the `script`.
 * @param fontRid RID
 * @param script string
 * @returns boolean
 */
  fontGetScriptSupportOverride(fontRid: RID, script: string): boolean;
/**
 * Returns list of script support overrides.
 * @param fontRid RID
 * @returns PackedStringArray
 */
  fontGetScriptSupportOverrides(fontRid: RID): PackedStringArray;
/**
 * Returns list of the font sizes in the cache. Each size is `Vector2i` with font size and outline size.
 * @param fontRid RID
 * @returns Vector2i[]
 */
  fontGetSizeCacheList(fontRid: RID): Vector2i[];
/**
 * Returns the spacing for `spacing` (see `TextServer.SpacingType`) in pixels (not relative to the font size).
 * @param fontRid RID
 * @param spacing int
 * @returns int
 */
  fontGetSpacing(fontRid: RID, spacing: int): int;
/**
 * Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.
 * @param fontRid RID
 * @returns int
 */
  fontGetStretch(fontRid: RID): int;
/**
 * Returns font style flags, see `FontStyle`.
 * @param fontRid RID
 * @returns int
 */
  fontGetStyle(fontRid: RID): int;
/**
 * Returns font style name.
 * @param fontRid RID
 * @returns string
 */
  fontGetStyleName(fontRid: RID): string;
/**
 * Returns font subpixel glyph positioning mode.
 * @param fontRid RID
 * @returns int
 */
  fontGetSubpixelPositioning(fontRid: RID): int;
/**
 * Returns a string containing all the characters available in the font.
 * @param fontRid RID
 * @returns string
 */
  fontGetSupportedChars(fontRid: RID): string;
/**
 * Returns an array containing all glyph indices in the font.
 * @param fontRid RID
 * @returns PackedInt32Array
 */
  fontGetSupportedGlyphs(fontRid: RID): PackedInt32Array;
/**
 * Returns number of textures used by font cache entry.
 * @param fontRid RID
 * @param size Vector2i
 * @returns int
 */
  fontGetTextureCount(fontRid: RID, size: Vector2i): int;
/**
 * Returns font cache texture image data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @returns Image
 */
  fontGetTextureImage(fontRid: RID, size: Vector2i, textureIndex: int): Image;
/**
 * Returns array containing glyph packing data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @returns PackedInt32Array
 */
  fontGetTextureOffsets(fontRid: RID, size: Vector2i, textureIndex: int): PackedInt32Array;
/**
 * Returns 2D transform applied to the font outlines.
 * @param fontRid RID
 * @returns Transform2D
 */
  fontGetTransform(fontRid: RID): Transform2D;
/**
 * Returns pixel offset of the underline below the baseline.
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  fontGetUnderlinePosition(fontRid: RID, size: int): float;
/**
 * Returns thickness of the underline in pixels.
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  fontGetUnderlineThickness(fontRid: RID, size: int): float;
/**
 * Returns variation coordinates for the specified font cache entry. See `font_supported_variation_list` for more info.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  fontGetVariationCoordinates(fontRid: RID): GodotDictionary<any>;
/**
 * Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.
 * @param fontRid RID
 * @returns int
 */
  fontGetWeight(fontRid: RID): int;
/**
 * Returns `true` if a Unicode `char` is available in the font.
 * @param fontRid RID
 * @param char int
 * @returns boolean
 */
  fontHasChar(fontRid: RID, char: int): boolean;
/**
 * Returns `true` if system fonts can be automatically used as fallbacks.
 * @param fontRid RID
 * @returns boolean
 */
  fontIsAllowSystemFallback(fontRid: RID): boolean;
/**
 * Returns `true` if auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only.
 * @param fontRid RID
 * @returns boolean
 */
  fontIsForceAutohinter(fontRid: RID): boolean;
/**
 * Returns `true`, if font supports given language (ISO 639 (https://en.wikipedia.org/wiki/ISO_639-1) code).
 * @param fontRid RID
 * @param language string
 * @returns boolean
 */
  fontIsLanguageSupported(fontRid: RID, language: string): boolean;
/**
 * Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data.
 * @param fontRid RID
 * @returns boolean
 */
  fontIsMultichannelSignedDistanceField(fontRid: RID): boolean;
/**
 * Returns `true`, if font supports given script (ISO 15924 code).
 * @param fontRid RID
 * @param script string
 * @returns boolean
 */
  fontIsScriptSupported(fontRid: RID, script: string): boolean;
/**
 * Removes specified rendered glyph information from the cache entry.
 * 
 * **Note:** This function will not remove textures associated with the glyphs, use `font_remove_texture` to remove them manually.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 */
  fontRemoveGlyph(fontRid: RID, size: Vector2i, glyph: int): void;
/**
 * Removes kerning override for the pair of glyphs.
 * @param fontRid RID
 * @param size int
 * @param glyphPair Vector2i
 */
  fontRemoveKerning(fontRid: RID, size: int, glyphPair: Vector2i): void;
/**
 * Remove language support override.
 * @param fontRid RID
 * @param language string
 */
  fontRemoveLanguageSupportOverride(fontRid: RID, language: string): void;
/**
 * Removes script support override.
 * @param fontRid RID
 * @param script string
 */
  fontRemoveScriptSupportOverride(fontRid: RID, script: string): void;
/**
 * Removes specified font size from the cache entry.
 * @param fontRid RID
 * @param size Vector2i
 */
  fontRemoveSizeCache(fontRid: RID, size: Vector2i): void;
/**
 * Removes specified texture from the cache entry.
 * 
 * **Note:** This function will not remove glyphs associated with the texture, remove them manually, using `font_remove_glyph`.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 */
  fontRemoveTexture(fontRid: RID, size: Vector2i, textureIndex: int): void;
/**
 * Renders specified glyph to the font cache texture.
 * @param fontRid RID
 * @param size Vector2i
 * @param index int
 */
  fontRenderGlyph(fontRid: RID, size: Vector2i, index: int): void;
/**
 * Renders the range of characters to the font cache texture.
 * @param fontRid RID
 * @param size Vector2i
 * @param start int
 * @param end int
 */
  fontRenderRange(fontRid: RID, size: Vector2i, start: int, end: int): void;
/**
 * If set to `true`, system fonts can be automatically used as fallbacks.
 * @param fontRid RID
 * @param allowSystemFallback boolean
 */
  fontSetAllowSystemFallback(fontRid: RID, allowSystemFallback: boolean): void;
/**
 * Sets font anti-aliasing mode.
 * @param fontRid RID
 * @param antialiasing int
 */
  fontSetAntialiasing(fontRid: RID, antialiasing: int): void;
/**
 * Sets the font ascent (number of pixels above the baseline).
 * @param fontRid RID
 * @param size int
 * @param ascent float
 */
  fontSetAscent(fontRid: RID, size: int, ascent: float): void;
/**
 * Sets extra baseline offset (as a fraction of font height).
 * @param fontRid RID
 * @param baselineOffset float
 */
  fontSetBaselineOffset(fontRid: RID, baselineOffset: float): void;
/**
 * Sets font source data, e.g contents of the dynamic font source file.
 * @param fontRid RID
 * @param data PackedByteArray
 */
  fontSetData(fontRid: RID, data: PackedByteArray): void;
/**
 * Sets the font descent (number of pixels below the baseline).
 * @param fontRid RID
 * @param size int
 * @param descent float
 */
  fontSetDescent(fontRid: RID, size: int, descent: float): void;
/**
 * If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).
 * @param fontRid RID
 * @param disableEmbeddedBitmaps boolean
 */
  fontSetDisableEmbeddedBitmaps(fontRid: RID, disableEmbeddedBitmaps: boolean): void;
/**
 * Sets font embolden strength. If `strength` is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.
 * @param fontRid RID
 * @param strength float
 */
  fontSetEmbolden(fontRid: RID, strength: float): void;
/**
 * Sets an active face index in the TrueType / OpenType collection.
 * @param fontRid RID
 * @param faceIndex int
 */
  fontSetFaceIndex(fontRid: RID, faceIndex: int): void;
/**
 * Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes.
 * @param fontRid RID
 * @param fixedSize int
 */
  fontSetFixedSize(fontRid: RID, fixedSize: int): void;
/**
 * Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero.
 * @param fontRid RID
 * @param fixedSizeScaleMode int
 */
  fontSetFixedSizeScaleMode(fontRid: RID, fixedSizeScaleMode: int): void;
/**
 * If set to `true` auto-hinting is preferred over font built-in hinting.
 * @param fontRid RID
 * @param forceAutohinter boolean
 */
  fontSetForceAutohinter(fontRid: RID, forceAutohinter: boolean): void;
/**
 * If set to `true` font texture mipmap generation is enabled.
 * @param fontRid RID
 * @param generateMipmaps boolean
 */
  fontSetGenerateMipmaps(fontRid: RID, generateMipmaps: boolean): void;
/**
 * Sets oversampling factor, shared by all font in the TextServer.
 * 
 * **Note:** This value can be automatically changed by display server.
 * @param oversampling float
 */
  fontSetGlobalOversampling(oversampling: float): void;
/**
 * Sets glyph advance (offset of the next glyph).
 * 
 * **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.
 * @param fontRid RID
 * @param size int
 * @param glyph int
 * @param advance Vector2
 */
  fontSetGlyphAdvance(fontRid: RID, size: int, glyph: int, advance: Vector2): void;
/**
 * Sets glyph offset from the baseline.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param offset Vector2
 */
  fontSetGlyphOffset(fontRid: RID, size: Vector2i, glyph: int, offset: Vector2): void;
/**
 * Sets size of the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param glSize Vector2
 */
  fontSetGlyphSize(fontRid: RID, size: Vector2i, glyph: int, glSize: Vector2): void;
/**
 * Sets index of the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param textureIdx int
 */
  fontSetGlyphTextureIdx(fontRid: RID, size: Vector2i, glyph: int, textureIdx: int): void;
/**
 * Sets rectangle in the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param uvRect Rect2
 */
  fontSetGlyphUvRect(fontRid: RID, size: Vector2i, glyph: int, uvRect: Rect2): void;
/**
 * Sets font hinting mode. Used by dynamic fonts only.
 * @param fontRid RID
 * @param hinting int
 */
  fontSetHinting(fontRid: RID, hinting: int): void;
/**
 * Sets glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled.
 * @param fontRid RID
 * @param keepRoundingRemainders boolean
 */
  fontSetKeepRoundingRemainders(fontRid: RID, keepRoundingRemainders: boolean): void;
/**
 * Sets kerning for the pair of glyphs.
 * @param fontRid RID
 * @param size int
 * @param glyphPair Vector2i
 * @param kerning Vector2
 */
  fontSetKerning(fontRid: RID, size: int, glyphPair: Vector2i, kerning: Vector2): void;
/**
 * Adds override for `font_is_language_supported`.
 * @param fontRid RID
 * @param language string
 * @param supported boolean
 */
  fontSetLanguageSupportOverride(fontRid: RID, language: string, supported: boolean): void;
/**
 * Sets the width of the range around the shape between the minimum and maximum representable signed distance.
 * @param fontRid RID
 * @param msdfPixelRange int
 */
  fontSetMsdfPixelRange(fontRid: RID, msdfPixelRange: int): void;
/**
 * Sets source font size used to generate MSDF textures.
 * @param fontRid RID
 * @param msdfSize int
 */
  fontSetMsdfSize(fontRid: RID, msdfSize: int): void;
/**
 * If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.
 * 
 * **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.
 * @param fontRid RID
 * @param msdf boolean
 */
  fontSetMultichannelSignedDistanceField(fontRid: RID, msdf: boolean): void;
/**
 * Sets the font family name.
 * @param fontRid RID
 * @param name string
 */
  fontSetName(fontRid: RID, name: string): void;
/**
 * Sets font OpenType feature set override.
 * @param fontRid RID
 * @param overrides GodotDictionary<any>
 */
  fontSetOpentypeFeatureOverrides(fontRid: RID, overrides: GodotDictionary<any>): void;
/**
 * Sets font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.
 * @param fontRid RID
 * @param oversampling float
 */
  fontSetOversampling(fontRid: RID, oversampling: float): void;
/**
 * Sets scaling factor of the color bitmap font.
 * @param fontRid RID
 * @param size int
 * @param scale float
 */
  fontSetScale(fontRid: RID, size: int, scale: float): void;
/**
 * Adds override for `font_is_script_supported`.
 * @param fontRid RID
 * @param script string
 * @param supported boolean
 */
  fontSetScriptSupportOverride(fontRid: RID, script: string, supported: boolean): void;
/**
 * Sets the spacing for `spacing` (see `TextServer.SpacingType`) to `value` in pixels (not relative to the font size).
 * @param fontRid RID
 * @param spacing int
 * @param value int
 */
  fontSetSpacing(fontRid: RID, spacing: int, value: int): void;
/**
 * Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.
 * 
 * **Note:** This value is used for font matching only and will not affect font rendering. Use `font_set_face_index`, `font_set_variation_coordinates`, or `font_set_transform` instead.
 * @param fontRid RID
 * @param weight int
 */
  fontSetStretch(fontRid: RID, weight: int): void;
/**
 * Sets the font style flags, see `FontStyle`.
 * 
 * **Note:** This value is used for font matching only and will not affect font rendering. Use `font_set_face_index`, `font_set_variation_coordinates`, `font_set_embolden`, or `font_set_transform` instead.
 * @param fontRid RID
 * @param style int
 */
  fontSetStyle(fontRid: RID, style: int): void;
/**
 * Sets the font style name.
 * @param fontRid RID
 * @param name string
 */
  fontSetStyleName(fontRid: RID, name: string): void;
/**
 * Sets font subpixel glyph positioning mode.
 * @param fontRid RID
 * @param subpixelPositioning int
 */
  fontSetSubpixelPositioning(fontRid: RID, subpixelPositioning: int): void;
/**
 * Sets font cache texture image data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @param image Image
 */
  fontSetTextureImage(fontRid: RID, size: Vector2i, textureIndex: int, image: Image): void;
/**
 * Sets array containing glyph packing data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @param offset PackedInt32Array
 */
  fontSetTextureOffsets(fontRid: RID, size: Vector2i, textureIndex: int, offset: PackedInt32Array): void;
/**
 * Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.
 * For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.
 * @param fontRid RID
 * @param transform Transform2D
 */
  fontSetTransform(fontRid: RID, transform: Transform2D): void;
/**
 * Sets pixel offset of the underline below the baseline.
 * @param fontRid RID
 * @param size int
 * @param underlinePosition float
 */
  fontSetUnderlinePosition(fontRid: RID, size: int, underlinePosition: float): void;
/**
 * Sets thickness of the underline in pixels.
 * @param fontRid RID
 * @param size int
 * @param underlineThickness float
 */
  fontSetUnderlineThickness(fontRid: RID, size: int, underlineThickness: float): void;
/**
 * Sets variation coordinates for the specified font cache entry. See `font_supported_variation_list` for more info.
 * @param fontRid RID
 * @param variationCoordinates GodotDictionary<any>
 */
  fontSetVariationCoordinates(fontRid: RID, variationCoordinates: GodotDictionary<any>): void;
/**
 * Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.
 * 
 * **Note:** This value is used for font matching only and will not affect font rendering. Use `font_set_face_index`, `font_set_variation_coordinates`, or `font_set_embolden` instead.
 * @param fontRid RID
 * @param weight int
 */
  fontSetWeight(fontRid: RID, weight: int): void;
/**
 * Returns the dictionary of the supported OpenType features.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  fontSupportedFeatureList(fontRid: RID): GodotDictionary<any>;
/**
 * Returns the dictionary of the supported OpenType variation coordinates.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  fontSupportedVariationList(fontRid: RID): GodotDictionary<any>;
/**
 * Converts a number from the Western Arabic (0..9) to the numeral systems used in `language`.
 * If `language` is omitted, the active locale will be used.
 * @param number_ string
 * @param language string (optional, default: "")
 * @returns string
 */
  formatNumber(number_: string, language?: string): string;
/**
 * Frees an object created by this `TextServer`.
 * @param rid RID
 */
  freeRid(rid: RID): void;
/**
 * Returns text server features, see `Feature`.
 * @returns int
 */
  getFeatures(): int;
/**
 * Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters).
 * @param size int
 * @param index int
 * @returns Vector2
 */
  getHexCodeBoxSize(size: int, index: int): Vector2;
/**
 * Returns the name of the server interface.
 * @returns string
 */
  getName(): string;
/**
 * Returns default TextServer database (e.g. ICU break iterators and dictionaries).
 * @returns PackedByteArray
 */
  getSupportData(): PackedByteArray;
/**
 * Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename.
 * @returns string
 */
  getSupportDataFilename(): string;
/**
 * Returns TextServer database (e.g. ICU break iterators and dictionaries) description.
 * @returns string
 */
  getSupportDataInfo(): string;
/**
 * Returns `true` if `rid` is valid resource owned by this text server.
 * @param rid RID
 * @returns boolean
 */
  has(rid: RID): boolean;
/**
 * Returns `true` if the server supports a feature.
 * @param feature int
 * @returns boolean
 */
  hasFeature(feature: int): boolean;
/**
 * Returns index of the first string in `dict` which is visually confusable with the `string`, or `-1` if none is found.
 * 
 * **Note:** This method doesn't detect invisible characters, for spoof detection use it in combination with `spoof_check`.
 * 
 * **Note:** Always returns `-1` if the server does not support the `FEATURE_UNICODE_SECURITY` feature.
 * @param string_ string
 * @param dict PackedStringArray
 * @returns int
 */
  isConfusable(string_: string, dict: PackedStringArray): int;
/**
 * Returns `true` if locale is right-to-left.
 * @param locale string
 * @returns boolean
 */
  isLocaleRightToLeft(locale: string): boolean;
/**
 * Returns `true` if `string` is a valid identifier.
 * If the text server supports the `FEATURE_UNICODE_IDENTIFIERS` feature, a valid identifier must:
 * - Conform to normalization form C.
 * - Begin with a Unicode character of class XID_Start or `"_"`.
 * - May contain Unicode characters of class XID_Continue in the other positions.
 * - Use UAX #31 recommended scripts only (mixed scripts are allowed).
 * If the `FEATURE_UNICODE_IDENTIFIERS` feature is not supported, a valid identifier must:
 * - Begin with a Unicode character of class XID_Start or `"_"`.
 * - May contain Unicode characters of class XID_Continue in the other positions.
 * @param string_ string
 * @returns boolean
 */
  isValidIdentifier(string_: string): boolean;
/**
 * Returns `true` if the given code point is a valid letter, i.e. it belongs to the Unicode category "L".
 * @param unicode int
 * @returns boolean
 */
  isValidLetter(unicode: int): boolean;
/**
 * Loads optional TextServer database (e.g. ICU break iterators and dictionaries).
 * 
 * **Note:** This function should be called before any other TextServer functions used, otherwise it won't have any effect.
 * @param filename string
 * @returns boolean
 */
  loadSupportData(filename: string): boolean;
/**
 * Converts readable feature, variation, script, or language name to OpenType tag.
 * @param name string
 * @returns int
 */
  nameToTag(name: string): int;
/**
 * Converts `number` from the numeral systems used in `language` to Western Arabic (0..9).
 * @param number_ string
 * @param language string (optional, default: "")
 * @returns string
 */
  parseNumber(number_: string, language?: string): string;
/**
 * Default implementation of the BiDi algorithm override function. See `StructuredTextParser` for more info.
 * @param parserType int
 * @param args GodotArray<any>
 * @param text string
 * @returns Vector3i[]
 */
  parseStructuredText(parserType: int, args: GodotArray<any>, text: string): Vector3i[];
/**
 * Returns percent sign used in the `language`.
 * @param language string (optional, default: "")
 * @returns string
 */
  percentSign(language?: string): string;
/**
 * Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.
 * 
 * **Note:** This function is used by during project export, to include TextServer database.
 * @param filename string
 * @returns boolean
 */
  saveSupportData(filename: string): boolean;
/**
 * Returns number of text spans added using `shaped_text_add_string` or `shaped_text_add_object`.
 * @param shaped RID
 * @returns int
 */
  shapedGetSpanCount(shaped: RID): int;
/**
 * Returns text embedded object key.
 * @param shaped RID
 * @param index int
 * @returns Variant
 */
  shapedGetSpanEmbeddedObject(shaped: RID, index: int): Variant;
/**
 * Returns text span metadata.
 * @param shaped RID
 * @param index int
 * @returns Variant
 */
  shapedGetSpanMeta(shaped: RID, index: int): Variant;
/**
 * Changes text span font, font size, and OpenType features, without changing the text.
 * @param shaped RID
 * @param index int
 * @param fonts RID[]
 * @param size int
 * @param opentypeFeatures GodotDictionary<any> (optional, default: {})
 */
  shapedSetSpanUpdateFont(shaped: RID, index: int, fonts: RID[], size: int, opentypeFeatures?: GodotDictionary<any>): void;
/**
 * Adds inline object to the text buffer, `key` must be unique. In the text, object is represented as `length` object replacement characters.
 * @param shaped RID
 * @param key Variant
 * @param size Vector2
 * @param inlineAlign int (optional, default: 5)
 * @param length int (optional, default: 1)
 * @param baseline float (optional, default: 0.0)
 * @returns boolean
 */
  shapedTextAddObject(shaped: RID, key: Variant, size: Vector2, inlineAlign?: int, length?: int, baseline?: float): boolean;
/**
 * Adds text span and font to draw it to the text buffer.
 * @param shaped RID
 * @param text string
 * @param fonts RID[]
 * @param size int
 * @param opentypeFeatures GodotDictionary<any> (optional, default: {})
 * @param language string (optional, default: "")
 * @param meta Variant (optional, default: null)
 * @returns boolean
 */
  shapedTextAddString(shaped: RID, text: string, fonts: RID[], size: int, opentypeFeatures?: GodotDictionary<any>, language?: string, meta?: Variant): boolean;
/**
 * Clears text buffer (removes text and inline objects).
 * @param rid RID
 */
  shapedTextClear(rid: RID): void;
/**
 * Returns composite character position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  shapedTextClosestCharacterPos(shaped: RID, pos: int): int;
/**
 * Draw shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).
 * @param shaped RID
 * @param canvas RID
 * @param pos Vector2
 * @param clipL float (optional, default: -1)
 * @param clipR float (optional, default: -1)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  shapedTextDraw(shaped: RID, canvas: RID, pos: Vector2, clipL?: float, clipR?: float, color?: Color): void;
/**
 * Draw the outline of the shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).
 * @param shaped RID
 * @param canvas RID
 * @param pos Vector2
 * @param clipL float (optional, default: -1)
 * @param clipR float (optional, default: -1)
 * @param outlineSize int (optional, default: 1)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  shapedTextDrawOutline(shaped: RID, canvas: RID, pos: Vector2, clipL?: float, clipR?: float, outlineSize?: int, color?: Color): void;
/**
 * Adjusts text width to fit to specified width, returns new text width.
 * @param shaped RID
 * @param width float
 * @param justificationFlags int (optional, default: 3)
 * @returns float
 */
  shapedTextFitToWidth(shaped: RID, width: float, justificationFlags?: int): float;
/**
 * Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).
 * 
 * **Note:** Overall ascent can be higher than font ascent, if some glyphs are displaced from the baseline.
 * @param shaped RID
 * @returns float
 */
  shapedTextGetAscent(shaped: RID): float;
/**
 * Returns shapes of the carets corresponding to the character offset `position` in the text. Returned caret shape is 1 pixel wide rectangle.
 * @param shaped RID
 * @param position int
 * @returns GodotDictionary<any>
 */
  shapedTextGetCarets(shaped: RID, position: int): GodotDictionary<any>;
/**
 * Returns array of the composite character boundaries.
 * @param shaped RID
 * @returns PackedInt32Array
 */
  shapedTextGetCharacterBreaks(shaped: RID): PackedInt32Array;
/**
 * Returns ellipsis character used for text clipping.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetCustomEllipsis(shaped: RID): int;
/**
 * Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.
 * @param shaped RID
 * @returns string
 */
  shapedTextGetCustomPunctuation(shaped: RID): string;
/**
 * Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).
 * 
 * **Note:** Overall descent can be higher than font descent, if some glyphs are displaced from the baseline.
 * @param shaped RID
 * @returns float
 */
  shapedTextGetDescent(shaped: RID): float;
/**
 * Returns direction of the text.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetDirection(shaped: RID): int;
/**
 * Returns dominant direction of in the range of text.
 * @param shaped RID
 * @param start int
 * @param end int
 * @returns int
 */
  shapedTextGetDominantDirectionInRange(shaped: RID, start: int, end: int): int;
/**
 * Returns number of glyphs in the ellipsis.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetEllipsisGlyphCount(shaped: RID): int;
/**
 * Returns array of the glyphs in the ellipsis.
 * @param shaped RID
 * @returns Dictionary[]
 */
  shapedTextGetEllipsisGlyphs(shaped: RID): Dictionary[];
/**
 * Returns position of the ellipsis.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetEllipsisPos(shaped: RID): int;
/**
 * Returns number of glyphs in the buffer.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetGlyphCount(shaped: RID): int;
/**
 * Returns an array of glyphs in the visual order.
 * @param shaped RID
 * @returns Dictionary[]
 */
  shapedTextGetGlyphs(shaped: RID): Dictionary[];
/**
 * Returns composite character's bounds as offsets from the start of the line.
 * @param shaped RID
 * @param pos int
 * @returns Vector2
 */
  shapedTextGetGraphemeBounds(shaped: RID, pos: int): Vector2;
/**
 * Returns direction of the text, inferred by the BiDi algorithm.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetInferredDirection(shaped: RID): int;
/**
 * Breaks text to the lines and returns character ranges for each line.
 * @param shaped RID
 * @param width float
 * @param start int (optional, default: 0)
 * @param breakFlags int (optional, default: 3)
 * @returns PackedInt32Array
 */
  shapedTextGetLineBreaks(shaped: RID, width: float, start?: int, breakFlags?: int): PackedInt32Array;
/**
 * Breaks text to the lines and columns. Returns character ranges for each segment.
 * @param shaped RID
 * @param width PackedFloat32Array
 * @param start int (optional, default: 0)
 * @param once boolean (optional, default: true)
 * @param breakFlags int (optional, default: 3)
 * @returns PackedInt32Array
 */
  shapedTextGetLineBreaksAdv(shaped: RID, width: PackedFloat32Array, start?: int, once?: boolean, breakFlags?: int): PackedInt32Array;
/**
 * Returns the glyph index of the inline object.
 * @param shaped RID
 * @param key Variant
 * @returns int
 */
  shapedTextGetObjectGlyph(shaped: RID, key: Variant): int;
/**
 * Returns the character range of the inline object.
 * @param shaped RID
 * @param key Variant
 * @returns Vector2i
 */
  shapedTextGetObjectRange(shaped: RID, key: Variant): Vector2i;
/**
 * Returns bounding rectangle of the inline object.
 * @param shaped RID
 * @param key Variant
 * @returns Rect2
 */
  shapedTextGetObjectRect(shaped: RID, key: Variant): Rect2;
/**
 * Returns array of inline objects.
 * @param shaped RID
 * @returns GodotArray<any>
 */
  shapedTextGetObjects(shaped: RID): GodotArray<any>;
/**
 * Returns text orientation.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetOrientation(shaped: RID): int;
/**
 * Returns the parent buffer from which the substring originates.
 * @param shaped RID
 * @returns RID
 */
  shapedTextGetParent(shaped: RID): RID;
/**
 * Returns `true` if text buffer is configured to display control characters.
 * @param shaped RID
 * @returns boolean
 */
  shapedTextGetPreserveControl(shaped: RID): boolean;
/**
 * Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.
 * 
 * **Note:** If set to `false`, nothing is displayed in place of invalid characters.
 * @param shaped RID
 * @returns boolean
 */
  shapedTextGetPreserveInvalid(shaped: RID): boolean;
/**
 * Returns substring buffer character range in the parent buffer.
 * @param shaped RID
 * @returns Vector2i
 */
  shapedTextGetRange(shaped: RID): Vector2i;
/**
 * Returns selection rectangles for the specified character range.
 * @param shaped RID
 * @param start int
 * @param end int
 * @returns PackedVector2Array
 */
  shapedTextGetSelection(shaped: RID, start: int, end: int): PackedVector2Array;
/**
 * Returns size of the text.
 * @param shaped RID
 * @returns Vector2
 */
  shapedTextGetSize(shaped: RID): Vector2;
/**
 * Returns extra spacing added between glyphs or lines in pixels.
 * @param shaped RID
 * @param spacing int
 * @returns int
 */
  shapedTextGetSpacing(shaped: RID, spacing: int): int;
/**
 * Returns the position of the overrun trim.
 * @param shaped RID
 * @returns int
 */
  shapedTextGetTrimPos(shaped: RID): int;
/**
 * Returns pixel offset of the underline below the baseline.
 * @param shaped RID
 * @returns float
 */
  shapedTextGetUnderlinePosition(shaped: RID): float;
/**
 * Returns thickness of the underline.
 * @param shaped RID
 * @returns float
 */
  shapedTextGetUnderlineThickness(shaped: RID): float;
/**
 * Returns width (for horizontal layout) or height (for vertical) of the text.
 * @param shaped RID
 * @returns float
 */
  shapedTextGetWidth(shaped: RID): float;
/**
 * Breaks text into words and returns array of character ranges. Use `grapheme_flags` to set what characters are used for breaking (see `GraphemeFlag`).
 * @param shaped RID
 * @param graphemeFlags int (optional, default: 264)
 * @param skipGraphemeFlags int (optional, default: 4)
 * @returns PackedInt32Array
 */
  shapedTextGetWordBreaks(shaped: RID, graphemeFlags?: int, skipGraphemeFlags?: int): PackedInt32Array;
/**
 * Returns `true` if text buffer contains any visible characters.
 * @param shaped RID
 * @returns boolean
 */
  shapedTextHasVisibleChars(shaped: RID): boolean;
/**
 * Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found.
 * @param shaped RID
 * @param coords float
 * @returns int
 */
  shapedTextHitTestGrapheme(shaped: RID, coords: float): int;
/**
 * Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position.
 * @param shaped RID
 * @param coords float
 * @returns int
 */
  shapedTextHitTestPosition(shaped: RID, coords: float): int;
/**
 * Returns `true` if buffer is successfully shaped.
 * @param shaped RID
 * @returns boolean
 */
  shapedTextIsReady(shaped: RID): boolean;
/**
 * Returns composite character end position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  shapedTextNextCharacterPos(shaped: RID, pos: int): int;
/**
 * Returns grapheme end position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  shapedTextNextGraphemePos(shaped: RID, pos: int): int;
/**
 * Trims text if it exceeds the given width.
 * @param shaped RID
 * @param width float (optional, default: 0)
 * @param overrunTrimFlags int (optional, default: 0)
 */
  shapedTextOverrunTrimToWidth(shaped: RID, width?: float, overrunTrimFlags?: int): void;
/**
 * Returns composite character start position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  shapedTextPrevCharacterPos(shaped: RID, pos: int): int;
/**
 * Returns grapheme start position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  shapedTextPrevGraphemePos(shaped: RID, pos: int): int;
/**
 * Sets new size and alignment of embedded object.
 * @param shaped RID
 * @param key Variant
 * @param size Vector2
 * @param inlineAlign int (optional, default: 5)
 * @param baseline float (optional, default: 0.0)
 * @returns boolean
 */
  shapedTextResizeObject(shaped: RID, key: Variant, size: Vector2, inlineAlign?: int, baseline?: float): boolean;
/**
 * Overrides BiDi for the structured text.
 * Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.
 * @param shaped RID
 * @param override GodotArray<any>
 */
  shapedTextSetBidiOverride(shaped: RID, override: GodotArray<any>): void;
/**
 * Sets ellipsis character used for text clipping.
 * @param shaped RID
 * @param char int
 */
  shapedTextSetCustomEllipsis(shaped: RID, char: int): void;
/**
 * Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.
 * @param shaped RID
 * @param punct string
 */
  shapedTextSetCustomPunctuation(shaped: RID, punct: string): void;
/**
 * Sets desired text direction. If set to `DIRECTION_AUTO`, direction will be detected based on the buffer contents and current locale.
 * 
 * **Note:** Direction is ignored if server does not support `FEATURE_BIDI_LAYOUT` feature (supported by `TextServerAdvanced`).
 * @param shaped RID
 * @param direction int (optional, default: 0)
 */
  shapedTextSetDirection(shaped: RID, direction?: int): void;
/**
 * Sets desired text orientation.
 * 
 * **Note:** Orientation is ignored if server does not support `FEATURE_VERTICAL_LAYOUT` feature (supported by `TextServerAdvanced`).
 * @param shaped RID
 * @param orientation int (optional, default: 0)
 */
  shapedTextSetOrientation(shaped: RID, orientation?: int): void;
/**
 * If set to `true` text buffer will display control characters.
 * @param shaped RID
 * @param enabled boolean
 */
  shapedTextSetPreserveControl(shaped: RID, enabled: boolean): void;
/**
 * If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed.
 * @param shaped RID
 * @param enabled boolean
 */
  shapedTextSetPreserveInvalid(shaped: RID, enabled: boolean): void;
/**
 * Sets extra spacing added between glyphs or lines in pixels.
 * @param shaped RID
 * @param spacing int
 * @param value int
 */
  shapedTextSetSpacing(shaped: RID, spacing: int, value: int): void;
/**
 * Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.
 * 
 * **Note:** It is not necessary to call this function manually, buffer will be shaped automatically as soon as any of its output data is requested.
 * @param shaped RID
 * @returns boolean
 */
  shapedTextShape(shaped: RID): boolean;
/**
 * Returns text glyphs in the logical order.
 * @param shaped RID
 * @returns Dictionary[]
 */
  shapedTextSortLogical(shaped: RID): Dictionary[];
/**
 * Returns text buffer for the substring of the text in the `shaped` text buffer (including inline objects).
 * @param shaped RID
 * @param start int
 * @param length int
 * @returns RID
 */
  shapedTextSubstr(shaped: RID, start: int, length: int): RID;
/**
 * Aligns shaped text to the given tab-stops.
 * @param shaped RID
 * @param tabStops PackedFloat32Array
 * @returns float
 */
  shapedTextTabAlign(shaped: RID, tabStops: PackedFloat32Array): float;
/**
 * Returns `true` if `string` is likely to be an attempt at confusing the reader.
 * 
 * **Note:** Always returns `false` if the server does not support the `FEATURE_UNICODE_SECURITY` feature.
 * @param string_ string
 * @returns boolean
 */
  spoofCheck(string_: string): boolean;
/**
 * Returns array of the composite character boundaries.
 * 
 * 				```gdscript
 * 
 * 				var ts = TextServerManager.get_primary_interface()
 * 				print(ts.string_get_character_breaks("Test ❤️‍🔥 Test")) # Prints [1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14]
 * 				
 * 
 * ```
 * @param string_ string
 * @param language string (optional, default: "")
 * @returns PackedInt32Array
 */
  stringGetCharacterBreaks(string_: string, language?: string): PackedInt32Array;
/**
 * Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.
 * When `chars_per_line` is greater than zero, line break boundaries are returned instead.
 * 
 * 				```gdscript
 * 
 * 				var ts = TextServerManager.get_primary_interface()
 * 				# Corresponds to the substrings "The", "Godot", "Engine", and "4".
 * 				print(ts.string_get_word_breaks("The Godot Engine, 4")) # Prints [0, 3, 4, 9, 10, 16, 18, 19]
 * 				# Corresponds to the substrings "The", "Godot", "Engin", and "e, 4".
 * 				print(ts.string_get_word_breaks("The Godot Engine, 4", "en", 5)) # Prints [0, 3, 4, 9, 10, 15, 15, 19]
 * 				# Corresponds to the substrings "The Godot" and "Engine, 4".
 * 				print(ts.string_get_word_breaks("The Godot Engine, 4", "en", 10)) # Prints [0, 9, 10, 19]
 * 				
 * 
 * ```
 * @param string_ string
 * @param language string (optional, default: "")
 * @param charsPerLine int (optional, default: 0)
 * @returns PackedInt32Array
 */
  stringGetWordBreaks(string_: string, language?: string, charsPerLine?: int): PackedInt32Array;
/**
 * Returns the string converted to lowercase.
 * 
 * **Note:** Casing is locale dependent and context sensitive if server support `FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION` feature (supported by `TextServerAdvanced`).
 * 
 * **Note:** The result may be longer or shorter than the original.
 * @param string_ string
 * @param language string (optional, default: "")
 * @returns string
 */
  stringToLower(string_: string, language?: string): string;
/**
 * Returns the string converted to title case.
 * 
 * **Note:** Casing is locale dependent and context sensitive if server support `FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION` feature (supported by `TextServerAdvanced`).
 * 
 * **Note:** The result may be longer or shorter than the original.
 * @param string_ string
 * @param language string (optional, default: "")
 * @returns string
 */
  stringToTitle(string_: string, language?: string): string;
/**
 * Returns the string converted to uppercase.
 * 
 * **Note:** Casing is locale dependent and context sensitive if server support `FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION` feature (supported by `TextServerAdvanced`).
 * 
 * **Note:** The result may be longer or shorter than the original.
 * @param string_ string
 * @param language string (optional, default: "")
 * @returns string
 */
  stringToUpper(string_: string, language?: string): string;
/**
 * Strips diacritics from the string.
 * 
 * **Note:** The result may be longer or shorter than the original.
 * @param string_ string
 * @returns string
 */
  stripDiacritics(string_: string): string;
/**
 * Converts OpenType tag to readable feature, variation, script, or language name.
 * @param tag int
 * @returns string
 */
  tagToName(tag: int): string;
/**
 * Font glyphs are rasterized as 1-bit bitmaps.
 */
  static readonly FONT_ANTIALIASING_NONE: int;
/**
 * Font glyphs are rasterized as 8-bit grayscale anti-aliased bitmaps.
 */
  static readonly FONT_ANTIALIASING_GRAY: int;
/**
 * Font glyphs are rasterized for LCD screens.
 * LCD subpixel layout is determined by the value of `gui/theme/lcd_subpixel_layout` project settings.
 * LCD subpixel anti-aliasing mode is suitable only for rendering horizontal, unscaled text in 2D.
 */
  static readonly FONT_ANTIALIASING_LCD: int;
/**
 * Unknown or unsupported subpixel layout, LCD subpixel antialiasing is disabled.
 */
  static readonly FONT_LCD_SUBPIXEL_LAYOUT_NONE: int;
/**
 * Horizontal RGB subpixel layout.
 */
  static readonly FONT_LCD_SUBPIXEL_LAYOUT_HRGB: int;
/**
 * Horizontal BGR subpixel layout.
 */
  static readonly FONT_LCD_SUBPIXEL_LAYOUT_HBGR: int;
/**
 * Vertical RGB subpixel layout.
 */
  static readonly FONT_LCD_SUBPIXEL_LAYOUT_VRGB: int;
/**
 * Vertical BGR subpixel layout.
 */
  static readonly FONT_LCD_SUBPIXEL_LAYOUT_VBGR: int;
/**
 * Represents the size of the `FontLCDSubpixelLayout` enum.
 */
  static readonly FONT_LCD_SUBPIXEL_LAYOUT_MAX: int;
/**
 * Text direction is determined based on contents and current locale.
 */
  static readonly DIRECTION_AUTO: int;
/**
 * Text is written from left to right.
 */
  static readonly DIRECTION_LTR: int;
/**
 * Text is written from right to left.
 */
  static readonly DIRECTION_RTL: int;
/**
 * Text writing direction is the same as base string writing direction. Used for BiDi override only.
 */
  static readonly DIRECTION_INHERITED: int;
/**
 * Text is written horizontally.
 */
  static readonly ORIENTATION_HORIZONTAL: int;
/**
 * Left to right text is written vertically from top to bottom.
 * Right to left text is written vertically from bottom to top.
 */
  static readonly ORIENTATION_VERTICAL: int;
/**
 * Do not justify text.
 */
  static readonly JUSTIFICATION_NONE: int;
/**
 * Justify text by adding and removing kashidas.
 */
  static readonly JUSTIFICATION_KASHIDA: int;
/**
 * Justify text by changing width of the spaces between the words.
 */
  static readonly JUSTIFICATION_WORD_BOUND: int;
/**
 * Remove trailing and leading spaces from the justified text.
 */
  static readonly JUSTIFICATION_TRIM_EDGE_SPACES: int;
/**
 * Only apply justification to the part of the text after the last tab.
 */
  static readonly JUSTIFICATION_AFTER_LAST_TAB: int;
/**
 * Apply justification to the trimmed line with ellipsis.
 */
  static readonly JUSTIFICATION_CONSTRAIN_ELLIPSIS: int;
/**
 * Do not apply justification to the last line of the paragraph.
 */
  static readonly JUSTIFICATION_SKIP_LAST_LINE: int;
/**
 * Do not apply justification to the last line of the paragraph with visible characters (takes precedence over `JUSTIFICATION_SKIP_LAST_LINE`).
 */
  static readonly JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS: int;
/**
 * Always apply justification to the paragraphs with a single line (`JUSTIFICATION_SKIP_LAST_LINE` and `JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS` are ignored).
 */
  static readonly JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE: int;
/**
 * Autowrap is disabled.
 */
  static readonly AUTOWRAP_OFF: int;
/**
 * Wraps the text inside the node's bounding rectangle by allowing to break lines at arbitrary positions, which is useful when very limited space is available.
 */
  static readonly AUTOWRAP_ARBITRARY: int;
/**
 * Wraps the text inside the node's bounding rectangle by soft-breaking between words.
 */
  static readonly AUTOWRAP_WORD: int;
/**
 * Behaves similarly to `AUTOWRAP_WORD`, but force-breaks a word if that single word does not fit in one line.
 */
  static readonly AUTOWRAP_WORD_SMART: int;
/**
 * Do not break the line.
 */
  static readonly BREAK_NONE: int;
/**
 * Break the line at the line mandatory break characters (e.g. `"\n"`).
 */
  static readonly BREAK_MANDATORY: int;
/**
 * Break the line between the words.
 */
  static readonly BREAK_WORD_BOUND: int;
/**
 * Break the line between any unconnected graphemes.
 */
  static readonly BREAK_GRAPHEME_BOUND: int;
/**
 * Should be used only in conjunction with `BREAK_WORD_BOUND`, break the line between any unconnected graphemes, if it's impossible to break it between the words.
 */
  static readonly BREAK_ADAPTIVE: int;
/**
 * Remove edge spaces from the broken line segments.
 */
  static readonly BREAK_TRIM_EDGE_SPACES: int;
/**
 * Subtract first line indentation width from all lines after the first one.
 */
  static readonly BREAK_TRIM_INDENT: int;
/**
 * Trims text before the shaping. e.g, increasing `Label.visible_characters` or `RichTextLabel.visible_characters` value is visually identical to typing the text.
 * 
 * **Note:** In this mode, trimmed text is not processed at all. It is not accounted for in line breaking and size calculations.
 */
  static readonly VC_CHARS_BEFORE_SHAPING: int;
/**
 * Displays glyphs that are mapped to the first `Label.visible_characters` or `RichTextLabel.visible_characters` characters from the beginning of the text.
 */
  static readonly VC_CHARS_AFTER_SHAPING: int;
/**
 * Displays `Label.visible_ratio` or `RichTextLabel.visible_ratio` glyphs, starting from the left or from the right, depending on `Control.layout_direction` value.
 */
  static readonly VC_GLYPHS_AUTO: int;
/**
 * Displays `Label.visible_ratio` or `RichTextLabel.visible_ratio` glyphs, starting from the left.
 */
  static readonly VC_GLYPHS_LTR: int;
/**
 * Displays `Label.visible_ratio` or `RichTextLabel.visible_ratio` glyphs, starting from the right.
 */
  static readonly VC_GLYPHS_RTL: int;
/**
 * No text trimming is performed.
 */
  static readonly OVERRUN_NO_TRIMMING: int;
/**
 * Trims the text per character.
 */
  static readonly OVERRUN_TRIM_CHAR: int;
/**
 * Trims the text per word.
 */
  static readonly OVERRUN_TRIM_WORD: int;
/**
 * Trims the text per character and adds an ellipsis to indicate that parts are hidden.
 */
  static readonly OVERRUN_TRIM_ELLIPSIS: int;
/**
 * Trims the text per word and adds an ellipsis to indicate that parts are hidden.
 */
  static readonly OVERRUN_TRIM_WORD_ELLIPSIS: int;
/**
 * No trimming is performed.
 */
  static readonly OVERRUN_NO_TRIM: int;
/**
 * Trims the text when it exceeds the given width.
 */
  static readonly OVERRUN_TRIM: int;
/**
 * Trims the text per word instead of per grapheme.
 */
  static readonly OVERRUN_TRIM_WORD_ONLY: int;
/**
 * Determines whether an ellipsis should be added at the end of the text.
 */
  static readonly OVERRUN_ADD_ELLIPSIS: int;
/**
 * Determines whether the ellipsis at the end of the text is enforced and may not be hidden.
 */
  static readonly OVERRUN_ENFORCE_ELLIPSIS: int;
/**
 * Accounts for the text being justified before attempting to trim it (see `JustificationFlag`).
 */
  static readonly OVERRUN_JUSTIFICATION_AWARE: int;
/**
 * Grapheme is supported by the font, and can be drawn.
 */
  static readonly GRAPHEME_IS_VALID: int;
/**
 * Grapheme is part of right-to-left or bottom-to-top run.
 */
  static readonly GRAPHEME_IS_RTL: int;
/**
 * Grapheme is not part of source text, it was added by justification process.
 */
  static readonly GRAPHEME_IS_VIRTUAL: int;
/**
 * Grapheme is whitespace.
 */
  static readonly GRAPHEME_IS_SPACE: int;
/**
 * Grapheme is mandatory break point (e.g. `"\n"`).
 */
  static readonly GRAPHEME_IS_BREAK_HARD: int;
/**
 * Grapheme is optional break point (e.g. space).
 */
  static readonly GRAPHEME_IS_BREAK_SOFT: int;
/**
 * Grapheme is the tabulation character.
 */
  static readonly GRAPHEME_IS_TAB: int;
/**
 * Grapheme is kashida.
 */
  static readonly GRAPHEME_IS_ELONGATION: int;
/**
 * Grapheme is punctuation character.
 */
  static readonly GRAPHEME_IS_PUNCTUATION: int;
/**
 * Grapheme is underscore character.
 */
  static readonly GRAPHEME_IS_UNDERSCORE: int;
/**
 * Grapheme is connected to the previous grapheme. Breaking line before this grapheme is not safe.
 */
  static readonly GRAPHEME_IS_CONNECTED: int;
/**
 * It is safe to insert a U+0640 before this grapheme for elongation.
 */
  static readonly GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL: int;
/**
 * Grapheme is an object replacement character for the embedded object.
 */
  static readonly GRAPHEME_IS_EMBEDDED_OBJECT: int;
/**
 * Grapheme is a soft hyphen.
 */
  static readonly GRAPHEME_IS_SOFT_HYPHEN: int;
/**
 * Disables font hinting (smoother but less crisp).
 */
  static readonly HINTING_NONE: int;
/**
 * Use the light font hinting mode.
 */
  static readonly HINTING_LIGHT: int;
/**
 * Use the default font hinting mode (crisper but less smooth).
 * 
 * **Note:** This hinting mode changes both horizontal and vertical glyph metrics. If applied to monospace font, some glyphs might have different width.
 */
  static readonly HINTING_NORMAL: int;
/**
 * Glyph horizontal position is rounded to the whole pixel size, each glyph is rasterized once.
 */
  static readonly SUBPIXEL_POSITIONING_DISABLED: int;
/**
 * Glyph horizontal position is rounded based on font size.
 * - To one quarter of the pixel size if font size is smaller or equal to `SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE`.
 * - To one half of the pixel size if font size is smaller or equal to `SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE`.
 * - To the whole pixel size for larger fonts.
 */
  static readonly SUBPIXEL_POSITIONING_AUTO: int;
/**
 * Glyph horizontal position is rounded to one half of the pixel size, each glyph is rasterized up to two times.
 */
  static readonly SUBPIXEL_POSITIONING_ONE_HALF: int;
/**
 * Glyph horizontal position is rounded to one quarter of the pixel size, each glyph is rasterized up to four times.
 */
  static readonly SUBPIXEL_POSITIONING_ONE_QUARTER: int;
/**
 * Maximum font size which will use one half of the pixel subpixel positioning in `SUBPIXEL_POSITIONING_AUTO` mode.
 */
  static readonly SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE: int;
/**
 * Maximum font size which will use one quarter of the pixel subpixel positioning in `SUBPIXEL_POSITIONING_AUTO` mode.
 */
  static readonly SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE: int;
/**
 * TextServer supports simple text layouts.
 */
  static readonly FEATURE_SIMPLE_LAYOUT: int;
/**
 * TextServer supports bidirectional text layouts.
 */
  static readonly FEATURE_BIDI_LAYOUT: int;
/**
 * TextServer supports vertical layouts.
 */
  static readonly FEATURE_VERTICAL_LAYOUT: int;
/**
 * TextServer supports complex text shaping.
 */
  static readonly FEATURE_SHAPING: int;
/**
 * TextServer supports justification using kashidas.
 */
  static readonly FEATURE_KASHIDA_JUSTIFICATION: int;
/**
 * TextServer supports complex line/word breaking rules (e.g. dictionary based).
 */
  static readonly FEATURE_BREAK_ITERATORS: int;
/**
 * TextServer supports loading bitmap fonts.
 */
  static readonly FEATURE_FONT_BITMAP: int;
/**
 * TextServer supports loading dynamic (TrueType, OpeType, etc.) fonts.
 */
  static readonly FEATURE_FONT_DYNAMIC: int;
/**
 * TextServer supports multichannel signed distance field dynamic font rendering.
 */
  static readonly FEATURE_FONT_MSDF: int;
/**
 * TextServer supports loading system fonts.
 */
  static readonly FEATURE_FONT_SYSTEM: int;
/**
 * TextServer supports variable fonts.
 */
  static readonly FEATURE_FONT_VARIABLE: int;
/**
 * TextServer supports locale dependent and context sensitive case conversion.
 */
  static readonly FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION: int;
/**
 * TextServer require external data file for some features, see `load_support_data`.
 */
  static readonly FEATURE_USE_SUPPORT_DATA: int;
/**
 * TextServer supports UAX #31 identifier validation, see `is_valid_identifier`.
 */
  static readonly FEATURE_UNICODE_IDENTIFIERS: int;
/**
 * TextServer supports Unicode Technical Report #36 (https://unicode.org/reports/tr36/) and Unicode Technical Standard #39 (https://unicode.org/reports/tr39/) based spoof detection features.
 */
  static readonly FEATURE_UNICODE_SECURITY: int;
/**
 * Contour point is on the curve.
 */
  static readonly CONTOUR_CURVE_TAG_ON: int;
/**
 * Contour point isn't on the curve, but serves as a control point for a conic (quadratic) Bézier arc.
 */
  static readonly CONTOUR_CURVE_TAG_OFF_CONIC: int;
/**
 * Contour point isn't on the curve, but serves as a control point for a cubic Bézier arc.
 */
  static readonly CONTOUR_CURVE_TAG_OFF_CUBIC: int;
/**
 * Spacing for each glyph.
 */
  static readonly SPACING_GLYPH: int;
/**
 * Spacing for the space character.
 */
  static readonly SPACING_SPACE: int;
/**
 * Spacing at the top of the line.
 */
  static readonly SPACING_TOP: int;
/**
 * Spacing at the bottom of the line.
 */
  static readonly SPACING_BOTTOM: int;
/**
 * Represents the size of the `SpacingType` enum.
 */
  static readonly SPACING_MAX: int;
/**
 * Font is bold.
 */
  static readonly FONT_BOLD: int;
/**
 * Font is italic or oblique.
 */
  static readonly FONT_ITALIC: int;
/**
 * Font have fixed-width characters.
 */
  static readonly FONT_FIXED_WIDTH: int;
/**
 * Use default Unicode BiDi algorithm.
 */
  static readonly STRUCTURED_TEXT_DEFAULT: int;
/**
 * BiDi override for URI.
 */
  static readonly STRUCTURED_TEXT_URI: int;
/**
 * BiDi override for file path.
 */
  static readonly STRUCTURED_TEXT_FILE: int;
/**
 * BiDi override for email.
 */
  static readonly STRUCTURED_TEXT_EMAIL: int;
/**
 * BiDi override for lists. Structured text options: list separator `String`.
 */
  static readonly STRUCTURED_TEXT_LIST: int;
/**
 * BiDi override for GDScript.
 */
  static readonly STRUCTURED_TEXT_GDSCRIPT: int;
/**
 * User defined structured text BiDi override function.
 */
  static readonly STRUCTURED_TEXT_CUSTOM: int;
/**
 * Bitmap font is not scaled.
 */
  static readonly FIXED_SIZE_SCALE_DISABLE: int;
/**
 * Bitmap font is scaled to the closest integer multiple of the font's fixed size. This is the recommended option for pixel art fonts.
 */
  static readonly FIXED_SIZE_SCALE_INTEGER_ONLY: int;
/**
 * Bitmap font is scaled to an arbitrary (fractional) size. This is the recommended option for non-pixel art fonts.
 */
  static readonly FIXED_SIZE_SCALE_ENABLED: int;
}
