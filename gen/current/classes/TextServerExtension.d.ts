import type { Color, GodotArray, GodotDictionary, Image, PackedByteArray, PackedFloat32Array, PackedInt32Array, PackedStringArray, PackedVector2Array, RID, Rect2, TextServer, Transform2D, Variant, Vector2, Vector2i, Vector3i, float, int } from "../index.d.ts";
/**
 * Base class for custom `TextServer` implementations (plugins).
 * 
 * External `TextServer` implementations should inherit from this class.
 */
export class TextServerExtension extends TextServer {
/**
 * **Optional.**
 * This method is called before text server is unregistered.
 */
  private cleanup(): void;
/**
 * **Required.**
 * Creates a new, empty font cache entry resource.
 * @returns RID
 */
  private createFont(): RID;
/**
 * Optional, implement if font supports extra spacing or baseline offset.
 * Creates a new variation existing font which is reusing the same glyph cache and font data.
 * @param fontRid RID
 * @returns RID
 */
  private createFontLinkedVariation(fontRid: RID): RID;
/**
 * **Required.**
 * Creates a new buffer for complex text layout, with the given `direction` and `orientation`.
 * @param direction int
 * @param orientation int
 * @returns RID
 */
  private createShapedText(direction: int, orientation: int): RID;
/**
 * **Optional.**
 * Draws box displaying character hexadecimal code.
 * @param canvas RID
 * @param size int
 * @param pos Vector2
 * @param index int
 * @param color Color
 */
  private drawHexCodeBox(canvas: RID, size: int, pos: Vector2, index: int, color: Color): void;
/**
 * **Required.**
 * Removes all rendered glyph information from the cache entry.
 * @param fontRid RID
 * @param size Vector2i
 */
  private fontClearGlyphs(fontRid: RID, size: Vector2i): void;
/**
 * **Optional.**
 * Removes all kerning overrides.
 * @param fontRid RID
 * @param size int
 */
  private fontClearKerningMap(fontRid: RID, size: int): void;
/**
 * **Required.**
 * Removes all font sizes from the cache entry.
 * @param fontRid RID
 */
  private fontClearSizeCache(fontRid: RID): void;
/**
 * **Required.**
 * Removes all textures from font cache entry.
 * @param fontRid RID
 * @param size Vector2i
 */
  private fontClearTextures(fontRid: RID, size: Vector2i): void;
/**
 * **Required.**
 * Draws single glyph into a canvas item at the position, using `font_rid` at the size `size`.
 * @param fontRid RID
 * @param canvas RID
 * @param size int
 * @param pos Vector2
 * @param index int
 * @param color Color
 */
  private fontDrawGlyph(fontRid: RID, canvas: RID, size: int, pos: Vector2, index: int, color: Color): void;
/**
 * **Required.**
 * Draws single glyph outline of size `outline_size` into a canvas item at the position, using `font_rid` at the size `size`.
 * @param fontRid RID
 * @param canvas RID
 * @param size int
 * @param outlineSize int
 * @param pos Vector2
 * @param index int
 * @param color Color
 */
  private fontDrawGlyphOutline(fontRid: RID, canvas: RID, size: int, outlineSize: int, pos: Vector2, index: int, color: Color): void;
/**
 * **Optional.**
 * Returns font anti-aliasing mode.
 * @param fontRid RID
 * @returns int
 */
  private fontGetAntialiasing(fontRid: RID): int;
/**
 * **Required.**
 * Returns the font ascent (number of pixels above the baseline).
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  private fontGetAscent(fontRid: RID, size: int): float;
/**
 * **Optional.**
 * Returns extra baseline offset (as a fraction of font height).
 * @param fontRid RID
 * @returns float
 */
  private fontGetBaselineOffset(fontRid: RID): float;
/**
 * **Required.**
 * Returns character code associated with `glyph_index`, or `0` if `glyph_index` is invalid.
 * @param fontRid RID
 * @param size int
 * @param glyphIndex int
 * @returns int
 */
  private fontGetCharFromGlyphIndex(fontRid: RID, size: int, glyphIndex: int): int;
/**
 * **Required.**
 * Returns the font descent (number of pixels below the baseline).
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  private fontGetDescent(fontRid: RID, size: int): float;
/**
 * **Optional.**
 * Returns whether the font's embedded bitmap loading is disabled.
 * @param fontRid RID
 * @returns boolean
 */
  private fontGetDisableEmbeddedBitmaps(fontRid: RID): boolean;
/**
 * **Optional.**
 * Returns font embolden strength.
 * @param fontRid RID
 * @returns float
 */
  private fontGetEmbolden(fontRid: RID): float;
/**
 * **Optional.**
 * Returns number of faces in the TrueType / OpenType collection.
 * @param fontRid RID
 * @returns int
 */
  private fontGetFaceCount(fontRid: RID): int;
/**
 * **Optional.**
 * Returns an active face index in the TrueType / OpenType collection.
 * @param fontRid RID
 * @returns int
 */
  private fontGetFaceIndex(fontRid: RID): int;
/**
 * **Required.**
 * Returns bitmap font fixed size.
 * @param fontRid RID
 * @returns int
 */
  private fontGetFixedSize(fontRid: RID): int;
/**
 * **Required.**
 * Returns bitmap font scaling mode.
 * @param fontRid RID
 * @returns int
 */
  private fontGetFixedSizeScaleMode(fontRid: RID): int;
/**
 * **Optional.**
 * Returns `true` if font texture mipmap generation is enabled.
 * @param fontRid RID
 * @returns boolean
 */
  private fontGetGenerateMipmaps(fontRid: RID): boolean;
/**
 * **Optional.**
 * Returns the font oversampling factor, shared by all fonts in the TextServer.
 * @returns float
 */
  private fontGetGlobalOversampling(): float;
/**
 * **Required.**
 * Returns glyph advance (offset of the next glyph).
 * @param fontRid RID
 * @param size int
 * @param glyph int
 * @returns Vector2
 */
  private fontGetGlyphAdvance(fontRid: RID, size: int, glyph: int): Vector2;
/**
 * **Optional.**
 * Returns outline contours of the glyph.
 * @param fontRid RID
 * @param size int
 * @param index int
 * @returns GodotDictionary<any>
 */
  private fontGetGlyphContours(fontRid: RID, size: int, index: int): GodotDictionary<any>;
/**
 * **Required.**
 * Returns the glyph index of a `char`, optionally modified by the `variation_selector`.
 * @param fontRid RID
 * @param size int
 * @param char int
 * @param variationSelector int
 * @returns int
 */
  private fontGetGlyphIndex(fontRid: RID, size: int, char: int, variationSelector: int): int;
/**
 * **Required.**
 * Returns list of rendered glyphs in the cache entry.
 * @param fontRid RID
 * @param size Vector2i
 * @returns PackedInt32Array
 */
  private fontGetGlyphList(fontRid: RID, size: Vector2i): PackedInt32Array;
/**
 * **Required.**
 * Returns glyph offset from the baseline.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  private fontGetGlyphOffset(fontRid: RID, size: Vector2i, glyph: int): Vector2;
/**
 * **Required.**
 * Returns size of the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  private fontGetGlyphSize(fontRid: RID, size: Vector2i, glyph: int): Vector2;
/**
 * **Required.**
 * Returns index of the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns int
 */
  private fontGetGlyphTextureIdx(fontRid: RID, size: Vector2i, glyph: int): int;
/**
 * **Required.**
 * Returns resource ID of the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns RID
 */
  private fontGetGlyphTextureRid(fontRid: RID, size: Vector2i, glyph: int): RID;
/**
 * **Required.**
 * Returns size of the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  private fontGetGlyphTextureSize(fontRid: RID, size: Vector2i, glyph: int): Vector2;
/**
 * **Required.**
 * Returns rectangle in the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @returns Rect2
 */
  private fontGetGlyphUvRect(fontRid: RID, size: Vector2i, glyph: int): Rect2;
/**
 * **Optional.**
 * Returns the font hinting mode. Used by dynamic fonts only.
 * @param fontRid RID
 * @returns int
 */
  private fontGetHinting(fontRid: RID): int;
/**
 * **Optional.**
 * Returns glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled.
 * @param fontRid RID
 * @returns boolean
 */
  private fontGetKeepRoundingRemainders(fontRid: RID): boolean;
/**
 * **Optional.**
 * Returns kerning for the pair of glyphs.
 * @param fontRid RID
 * @param size int
 * @param glyphPair Vector2i
 * @returns Vector2
 */
  private fontGetKerning(fontRid: RID, size: int, glyphPair: Vector2i): Vector2;
/**
 * **Optional.**
 * Returns list of the kerning overrides.
 * @param fontRid RID
 * @param size int
 * @returns Vector2i[]
 */
  private fontGetKerningList(fontRid: RID, size: int): Vector2i[];
/**
 * **Optional.**
 * Returns `true` if support override is enabled for the `language`.
 * @param fontRid RID
 * @param language string
 * @returns boolean
 */
  private fontGetLanguageSupportOverride(fontRid: RID, language: string): boolean;
/**
 * **Optional.**
 * Returns list of language support overrides.
 * @param fontRid RID
 * @returns PackedStringArray
 */
  private fontGetLanguageSupportOverrides(fontRid: RID): PackedStringArray;
/**
 * **Optional.**
 * Returns the width of the range around the shape between the minimum and maximum representable signed distance.
 * @param fontRid RID
 * @returns int
 */
  private fontGetMsdfPixelRange(fontRid: RID): int;
/**
 * **Optional.**
 * Returns source font size used to generate MSDF textures.
 * @param fontRid RID
 * @returns int
 */
  private fontGetMsdfSize(fontRid: RID): int;
/**
 * **Optional.**
 * Returns font family name.
 * @param fontRid RID
 * @returns string
 */
  private fontGetName(fontRid: RID): string;
/**
 * **Optional.**
 * Returns font OpenType feature set override.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  private fontGetOpentypeFeatureOverrides(fontRid: RID): GodotDictionary<any>;
/**
 * **Optional.**
 * Returns `Dictionary` with OpenType font name strings (localized font names, version, description, license information, sample text, etc.).
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  private fontGetOtNameStrings(fontRid: RID): GodotDictionary<any>;
/**
 * **Optional.**
 * Returns font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.
 * @param fontRid RID
 * @returns float
 */
  private fontGetOversampling(fontRid: RID): float;
/**
 * **Required.**
 * Returns scaling factor of the color bitmap font.
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  private fontGetScale(fontRid: RID, size: int): float;
/**
 * **Optional.**
 * Returns `true` if support override is enabled for the `script`.
 * @param fontRid RID
 * @param script string
 * @returns boolean
 */
  private fontGetScriptSupportOverride(fontRid: RID, script: string): boolean;
/**
 * **Optional.**
 * Returns list of script support overrides.
 * @param fontRid RID
 * @returns PackedStringArray
 */
  private fontGetScriptSupportOverrides(fontRid: RID): PackedStringArray;
/**
 * **Required.**
 * Returns list of the font sizes in the cache. Each size is `Vector2i` with font size and outline size.
 * @param fontRid RID
 * @returns Vector2i[]
 */
  private fontGetSizeCacheList(fontRid: RID): Vector2i[];
/**
 * **Optional.**
 * Returns the spacing for `spacing` (see `TextServer.SpacingType`) in pixels (not relative to the font size).
 * @param fontRid RID
 * @param spacing int
 * @returns int
 */
  private fontGetSpacing(fontRid: RID, spacing: int): int;
/**
 * **Optional.**
 * Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.
 * @param fontRid RID
 * @returns int
 */
  private fontGetStretch(fontRid: RID): int;
/**
 * **Optional.**
 * Returns font style flags, see `TextServer.FontStyle`.
 * @param fontRid RID
 * @returns int
 */
  private fontGetStyle(fontRid: RID): int;
/**
 * **Optional.**
 * Returns font style name.
 * @param fontRid RID
 * @returns string
 */
  private fontGetStyleName(fontRid: RID): string;
/**
 * **Optional.**
 * Returns font subpixel glyph positioning mode.
 * @param fontRid RID
 * @returns int
 */
  private fontGetSubpixelPositioning(fontRid: RID): int;
/**
 * **Required.**
 * Returns a string containing all the characters available in the font.
 * @param fontRid RID
 * @returns string
 */
  private fontGetSupportedChars(fontRid: RID): string;
/**
 * **Required.**
 * Returns an array containing all glyph indices in the font.
 * @param fontRid RID
 * @returns PackedInt32Array
 */
  private fontGetSupportedGlyphs(fontRid: RID): PackedInt32Array;
/**
 * **Required.**
 * Returns number of textures used by font cache entry.
 * @param fontRid RID
 * @param size Vector2i
 * @returns int
 */
  private fontGetTextureCount(fontRid: RID, size: Vector2i): int;
/**
 * **Required.**
 * Returns font cache texture image data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @returns Image
 */
  private fontGetTextureImage(fontRid: RID, size: Vector2i, textureIndex: int): Image;
/**
 * **Optional.**
 * Returns array containing glyph packing data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @returns PackedInt32Array
 */
  private fontGetTextureOffsets(fontRid: RID, size: Vector2i, textureIndex: int): PackedInt32Array;
/**
 * **Optional.**
 * Returns 2D transform applied to the font outlines.
 * @param fontRid RID
 * @returns Transform2D
 */
  private fontGetTransform(fontRid: RID): Transform2D;
/**
 * **Required.**
 * Returns pixel offset of the underline below the baseline.
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  private fontGetUnderlinePosition(fontRid: RID, size: int): float;
/**
 * **Required.**
 * Returns thickness of the underline in pixels.
 * @param fontRid RID
 * @param size int
 * @returns float
 */
  private fontGetUnderlineThickness(fontRid: RID, size: int): float;
/**
 * **Optional.**
 * Returns variation coordinates for the specified font cache entry.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  private fontGetVariationCoordinates(fontRid: RID): GodotDictionary<any>;
/**
 * **Optional.**
 * Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.
 * @param fontRid RID
 * @returns int
 */
  private fontGetWeight(fontRid: RID): int;
/**
 * **Required.**
 * Returns `true` if a Unicode `char` is available in the font.
 * @param fontRid RID
 * @param char int
 * @returns boolean
 */
  private fontHasChar(fontRid: RID, char: int): boolean;
/**
 * **Optional.**
 * Returns `true` if system fonts can be automatically used as fallbacks.
 * @param fontRid RID
 * @returns boolean
 */
  private fontIsAllowSystemFallback(fontRid: RID): boolean;
/**
 * **Optional.**
 * Returns `true` if auto-hinting is supported and preferred over font built-in hinting.
 * @param fontRid RID
 * @returns boolean
 */
  private fontIsForceAutohinter(fontRid: RID): boolean;
/**
 * **Optional.**
 * Returns `true`, if font supports given language (ISO 639 (https://en.wikipedia.org/wiki/ISO_639-1) code).
 * @param fontRid RID
 * @param language string
 * @returns boolean
 */
  private fontIsLanguageSupported(fontRid: RID, language: string): boolean;
/**
 * **Optional.**
 * Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data.
 * @param fontRid RID
 * @returns boolean
 */
  private fontIsMultichannelSignedDistanceField(fontRid: RID): boolean;
/**
 * **Optional.**
 * Returns `true`, if font supports given script (ISO 15924 code).
 * @param fontRid RID
 * @param script string
 * @returns boolean
 */
  private fontIsScriptSupported(fontRid: RID, script: string): boolean;
/**
 * **Required.**
 * Removes specified rendered glyph information from the cache entry.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 */
  private fontRemoveGlyph(fontRid: RID, size: Vector2i, glyph: int): void;
/**
 * **Optional.**
 * Removes kerning override for the pair of glyphs.
 * @param fontRid RID
 * @param size int
 * @param glyphPair Vector2i
 */
  private fontRemoveKerning(fontRid: RID, size: int, glyphPair: Vector2i): void;
/**
 * **Optional.**
 * Remove language support override.
 * @param fontRid RID
 * @param language string
 */
  private fontRemoveLanguageSupportOverride(fontRid: RID, language: string): void;
/**
 * **Optional.**
 * Removes script support override.
 * @param fontRid RID
 * @param script string
 */
  private fontRemoveScriptSupportOverride(fontRid: RID, script: string): void;
/**
 * **Required.**
 * Removes specified font size from the cache entry.
 * @param fontRid RID
 * @param size Vector2i
 */
  private fontRemoveSizeCache(fontRid: RID, size: Vector2i): void;
/**
 * **Required.**
 * Removes specified texture from the cache entry.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 */
  private fontRemoveTexture(fontRid: RID, size: Vector2i, textureIndex: int): void;
/**
 * **Optional.**
 * Renders specified glyph to the font cache texture.
 * @param fontRid RID
 * @param size Vector2i
 * @param index int
 */
  private fontRenderGlyph(fontRid: RID, size: Vector2i, index: int): void;
/**
 * **Optional.**
 * Renders the range of characters to the font cache texture.
 * @param fontRid RID
 * @param size Vector2i
 * @param start int
 * @param end int
 */
  private fontRenderRange(fontRid: RID, size: Vector2i, start: int, end: int): void;
/**
 * **Optional.**
 * If set to `true`, system fonts can be automatically used as fallbacks.
 * @param fontRid RID
 * @param allowSystemFallback boolean
 */
  private fontSetAllowSystemFallback(fontRid: RID, allowSystemFallback: boolean): void;
/**
 * **Optional.**
 * Sets font anti-aliasing mode.
 * @param fontRid RID
 * @param antialiasing int
 */
  private fontSetAntialiasing(fontRid: RID, antialiasing: int): void;
/**
 * **Required.**
 * Sets the font ascent (number of pixels above the baseline).
 * @param fontRid RID
 * @param size int
 * @param ascent float
 */
  private fontSetAscent(fontRid: RID, size: int, ascent: float): void;
/**
 * **Optional.**
 * Sets extra baseline offset (as a fraction of font height).
 * @param fontRid RID
 * @param baselineOffset float
 */
  private fontSetBaselineOffset(fontRid: RID, baselineOffset: float): void;
/**
 * **Optional.**
 * Sets font source data, e.g contents of the dynamic font source file.
 * @param fontRid RID
 * @param data PackedByteArray
 */
  private fontSetData(fontRid: RID, data: PackedByteArray): void;
/**
 * **Optional.**
 * Sets pointer to the font source data, e.g contents of the dynamic font source file.
 * @param fontRid RID
 * @param dataPtr unknown
 * @param dataSize int
 */
  private fontSetDataPtr(fontRid: RID, dataPtr: unknown, dataSize: int): void;
/**
 * **Required.**
 * Sets the font descent (number of pixels below the baseline).
 * @param fontRid RID
 * @param size int
 * @param descent float
 */
  private fontSetDescent(fontRid: RID, size: int, descent: float): void;
/**
 * **Optional.**
 * If set to `true`, embedded font bitmap loading is disabled.
 * @param fontRid RID
 * @param disableEmbeddedBitmaps boolean
 */
  private fontSetDisableEmbeddedBitmaps(fontRid: RID, disableEmbeddedBitmaps: boolean): void;
/**
 * Sets font embolden strength. If `strength` is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.
 * @param fontRid RID
 * @param strength float
 */
  private fontSetEmbolden(fontRid: RID, strength: float): void;
/**
 * **Optional.**
 * Sets an active face index in the TrueType / OpenType collection.
 * @param fontRid RID
 * @param faceIndex int
 */
  private fontSetFaceIndex(fontRid: RID, faceIndex: int): void;
/**
 * **Required.**
 * Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes.
 * @param fontRid RID
 * @param fixedSize int
 */
  private fontSetFixedSize(fontRid: RID, fixedSize: int): void;
/**
 * **Required.**
 * Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero.
 * @param fontRid RID
 * @param fixedSizeScaleMode int
 */
  private fontSetFixedSizeScaleMode(fontRid: RID, fixedSizeScaleMode: int): void;
/**
 * **Optional.**
 * If set to `true` auto-hinting is preferred over font built-in hinting.
 * @param fontRid RID
 * @param forceAutohinter boolean
 */
  private fontSetForceAutohinter(fontRid: RID, forceAutohinter: boolean): void;
/**
 * **Optional.**
 * If set to `true` font texture mipmap generation is enabled.
 * @param fontRid RID
 * @param generateMipmaps boolean
 */
  private fontSetGenerateMipmaps(fontRid: RID, generateMipmaps: boolean): void;
/**
 * **Optional.**
 * Sets oversampling factor, shared by all font in the TextServer.
 * @param oversampling float
 */
  private fontSetGlobalOversampling(oversampling: float): void;
/**
 * **Required.**
 * Sets glyph advance (offset of the next glyph).
 * @param fontRid RID
 * @param size int
 * @param glyph int
 * @param advance Vector2
 */
  private fontSetGlyphAdvance(fontRid: RID, size: int, glyph: int, advance: Vector2): void;
/**
 * **Required.**
 * Sets glyph offset from the baseline.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param offset Vector2
 */
  private fontSetGlyphOffset(fontRid: RID, size: Vector2i, glyph: int, offset: Vector2): void;
/**
 * **Required.**
 * Sets size of the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param glSize Vector2
 */
  private fontSetGlyphSize(fontRid: RID, size: Vector2i, glyph: int, glSize: Vector2): void;
/**
 * **Required.**
 * Sets index of the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param textureIdx int
 */
  private fontSetGlyphTextureIdx(fontRid: RID, size: Vector2i, glyph: int, textureIdx: int): void;
/**
 * **Required.**
 * Sets rectangle in the cache texture containing the glyph.
 * @param fontRid RID
 * @param size Vector2i
 * @param glyph int
 * @param uvRect Rect2
 */
  private fontSetGlyphUvRect(fontRid: RID, size: Vector2i, glyph: int, uvRect: Rect2): void;
/**
 * **Optional.**
 * Sets font hinting mode. Used by dynamic fonts only.
 * @param fontRid RID
 * @param hinting int
 */
  private fontSetHinting(fontRid: RID, hinting: int): void;
/**
 * **Optional.**
 * Sets glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled.
 * @param fontRid RID
 * @param keepRoundingRemainders boolean
 */
  private fontSetKeepRoundingRemainders(fontRid: RID, keepRoundingRemainders: boolean): void;
/**
 * **Optional.**
 * Sets kerning for the pair of glyphs.
 * @param fontRid RID
 * @param size int
 * @param glyphPair Vector2i
 * @param kerning Vector2
 */
  private fontSetKerning(fontRid: RID, size: int, glyphPair: Vector2i, kerning: Vector2): void;
/**
 * **Optional.**
 * Adds override for `_font_is_language_supported`.
 * @param fontRid RID
 * @param language string
 * @param supported boolean
 */
  private fontSetLanguageSupportOverride(fontRid: RID, language: string, supported: boolean): void;
/**
 * **Optional.**
 * Sets the width of the range around the shape between the minimum and maximum representable signed distance.
 * @param fontRid RID
 * @param msdfPixelRange int
 */
  private fontSetMsdfPixelRange(fontRid: RID, msdfPixelRange: int): void;
/**
 * **Optional.**
 * Sets source font size used to generate MSDF textures.
 * @param fontRid RID
 * @param msdfSize int
 */
  private fontSetMsdfSize(fontRid: RID, msdfSize: int): void;
/**
 * **Optional.**
 * If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.
 * @param fontRid RID
 * @param msdf boolean
 */
  private fontSetMultichannelSignedDistanceField(fontRid: RID, msdf: boolean): void;
/**
 * **Optional.**
 * Sets the font family name.
 * @param fontRid RID
 * @param name string
 */
  private fontSetName(fontRid: RID, name: string): void;
/**
 * **Optional.**
 * Sets font OpenType feature set override.
 * @param fontRid RID
 * @param overrides GodotDictionary<any>
 */
  private fontSetOpentypeFeatureOverrides(fontRid: RID, overrides: GodotDictionary<any>): void;
/**
 * **Optional.**
 * Sets font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.
 * @param fontRid RID
 * @param oversampling float
 */
  private fontSetOversampling(fontRid: RID, oversampling: float): void;
/**
 * **Required.**
 * Sets scaling factor of the color bitmap font.
 * @param fontRid RID
 * @param size int
 * @param scale float
 */
  private fontSetScale(fontRid: RID, size: int, scale: float): void;
/**
 * **Optional.**
 * Adds override for `_font_is_script_supported`.
 * @param fontRid RID
 * @param script string
 * @param supported boolean
 */
  private fontSetScriptSupportOverride(fontRid: RID, script: string, supported: boolean): void;
/**
 * **Optional.**
 * Sets the spacing for `spacing` (see `TextServer.SpacingType`) to `value` in pixels (not relative to the font size).
 * @param fontRid RID
 * @param spacing int
 * @param value int
 */
  private fontSetSpacing(fontRid: RID, spacing: int, value: int): void;
/**
 * **Optional.**
 * Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.
 * @param fontRid RID
 * @param stretch int
 */
  private fontSetStretch(fontRid: RID, stretch: int): void;
/**
 * **Optional.**
 * Sets the font style flags, see `TextServer.FontStyle`.
 * @param fontRid RID
 * @param style int
 */
  private fontSetStyle(fontRid: RID, style: int): void;
/**
 * **Optional.**
 * Sets the font style name.
 * @param fontRid RID
 * @param nameStyle string
 */
  private fontSetStyleName(fontRid: RID, nameStyle: string): void;
/**
 * **Optional.**
 * Sets font subpixel glyph positioning mode.
 * @param fontRid RID
 * @param subpixelPositioning int
 */
  private fontSetSubpixelPositioning(fontRid: RID, subpixelPositioning: int): void;
/**
 * **Required.**
 * Sets font cache texture image data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @param image Image
 */
  private fontSetTextureImage(fontRid: RID, size: Vector2i, textureIndex: int, image: Image): void;
/**
 * **Optional.**
 * Sets array containing glyph packing data.
 * @param fontRid RID
 * @param size Vector2i
 * @param textureIndex int
 * @param offset PackedInt32Array
 */
  private fontSetTextureOffsets(fontRid: RID, size: Vector2i, textureIndex: int, offset: PackedInt32Array): void;
/**
 * **Optional.**
 * Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.
 * @param fontRid RID
 * @param transform Transform2D
 */
  private fontSetTransform(fontRid: RID, transform: Transform2D): void;
/**
 * **Required.**
 * Sets pixel offset of the underline below the baseline.
 * @param fontRid RID
 * @param size int
 * @param underlinePosition float
 */
  private fontSetUnderlinePosition(fontRid: RID, size: int, underlinePosition: float): void;
/**
 * **Required.**
 * Sets thickness of the underline in pixels.
 * @param fontRid RID
 * @param size int
 * @param underlineThickness float
 */
  private fontSetUnderlineThickness(fontRid: RID, size: int, underlineThickness: float): void;
/**
 * **Optional.**
 * Sets variation coordinates for the specified font cache entry.
 * @param fontRid RID
 * @param variationCoordinates GodotDictionary<any>
 */
  private fontSetVariationCoordinates(fontRid: RID, variationCoordinates: GodotDictionary<any>): void;
/**
 * **Optional.**
 * Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.
 * @param fontRid RID
 * @param weight int
 */
  private fontSetWeight(fontRid: RID, weight: int): void;
/**
 * **Optional.**
 * Returns the dictionary of the supported OpenType features.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  private fontSupportedFeatureList(fontRid: RID): GodotDictionary<any>;
/**
 * **Optional.**
 * Returns the dictionary of the supported OpenType variation coordinates.
 * @param fontRid RID
 * @returns GodotDictionary<any>
 */
  private fontSupportedVariationList(fontRid: RID): GodotDictionary<any>;
/**
 * **Optional.**
 * Converts a number from the Western Arabic (0..9) to the numeral systems used in `language`.
 * @param number_ string
 * @param language string
 * @returns string
 */
  private formatNumber(number_: string, language: string): string;
/**
 * **Required.**
 * Frees an object created by this `TextServer`.
 * @param rid RID
 */
  private freeRid(rid: RID): void;
/**
 * **Required.**
 * Returns text server features, see `TextServer.Feature`.
 * @returns int
 */
  private getFeatures(): int;
/**
 * **Optional.**
 * Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters).
 * @param size int
 * @param index int
 * @returns Vector2
 */
  private getHexCodeBoxSize(size: int, index: int): Vector2;
/**
 * **Required.**
 * Returns the name of the server interface.
 * @returns string
 */
  private getName(): string;
/**
 * **Optional.**
 * Returns default TextServer database (e.g. ICU break iterators and dictionaries).
 * @returns PackedByteArray
 */
  private getSupportData(): PackedByteArray;
/**
 * **Optional.**
 * Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename.
 * @returns string
 */
  private getSupportDataFilename(): string;
/**
 * **Optional.**
 * Returns TextServer database (e.g. ICU break iterators and dictionaries) description.
 * @returns string
 */
  private getSupportDataInfo(): string;
/**
 * **Required.**
 * Returns `true` if `rid` is valid resource owned by this text server.
 * @param rid RID
 * @returns boolean
 */
  private has(rid: RID): boolean;
/**
 * **Required.**
 * Returns `true` if the server supports a feature.
 * @param feature int
 * @returns boolean
 */
  private hasFeature(feature: int): boolean;
/**
 * **Optional.**
 * Returns index of the first string in `dict` which is visually confusable with the `string`, or `-1` if none is found.
 * @param string_ string
 * @param dict PackedStringArray
 * @returns int
 */
  private isConfusable(string_: string, dict: PackedStringArray): int;
/**
 * **Required.**
 * Returns `true` if locale is right-to-left.
 * @param locale string
 * @returns boolean
 */
  private isLocaleRightToLeft(locale: string): boolean;
/**
 * **Optional.**
 * Returns `true` if `string` is a valid identifier.
 * @param string_ string
 * @returns boolean
 */
  private isValidIdentifier(string_: string): boolean;
/**
 * @param unicode int
 * @returns boolean
 */
  private isValidLetter(unicode: int): boolean;
/**
 * **Optional.**
 * Loads optional TextServer database (e.g. ICU break iterators and dictionaries).
 * @param filename string
 * @returns boolean
 */
  private loadSupportData(filename: string): boolean;
/**
 * **Optional.**
 * Converts readable feature, variation, script, or language name to OpenType tag.
 * @param name string
 * @returns int
 */
  private nameToTag(name: string): int;
/**
 * **Optional.**
 * Converts `number` from the numeral systems used in `language` to Western Arabic (0..9).
 * @param number_ string
 * @param language string
 * @returns string
 */
  private parseNumber(number_: string, language: string): string;
/**
 * **Optional.**
 * Default implementation of the BiDi algorithm override function. See `TextServer.StructuredTextParser` for more info.
 * @param parserType int
 * @param args GodotArray<any>
 * @param text string
 * @returns Vector3i[]
 */
  private parseStructuredText(parserType: int, args: GodotArray<any>, text: string): Vector3i[];
/**
 * **Optional.**
 * Returns percent sign used in the `language`.
 * @param language string
 * @returns string
 */
  private percentSign(language: string): string;
/**
 * **Optional.**
 * Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.
 * @param filename string
 * @returns boolean
 */
  private saveSupportData(filename: string): boolean;
/**
 * **Required.**
 * Returns number of text spans added using `_shaped_text_add_string` or `_shaped_text_add_object`.
 * @param shaped RID
 * @returns int
 */
  private shapedGetSpanCount(shaped: RID): int;
/**
 * **Required.**
 * Returns text embedded object key.
 * @param shaped RID
 * @param index int
 * @returns Variant
 */
  private shapedGetSpanEmbeddedObject(shaped: RID, index: int): Variant;
/**
 * **Required.**
 * Returns text span metadata.
 * @param shaped RID
 * @param index int
 * @returns Variant
 */
  private shapedGetSpanMeta(shaped: RID, index: int): Variant;
/**
 * **Required.**
 * Changes text span font, font size, and OpenType features, without changing the text.
 * @param shaped RID
 * @param index int
 * @param fonts RID[]
 * @param size int
 * @param opentypeFeatures GodotDictionary<any>
 */
  private shapedSetSpanUpdateFont(shaped: RID, index: int, fonts: RID[], size: int, opentypeFeatures: GodotDictionary<any>): void;
/**
 * **Required.**
 * Adds inline object to the text buffer, `key` must be unique. In the text, object is represented as `length` object replacement characters.
 * @param shaped RID
 * @param key Variant
 * @param size Vector2
 * @param inlineAlign int
 * @param length int
 * @param baseline float
 * @returns boolean
 */
  private shapedTextAddObject(shaped: RID, key: Variant, size: Vector2, inlineAlign: int, length: int, baseline: float): boolean;
/**
 * **Required.**
 * Adds text span and font to draw it to the text buffer.
 * @param shaped RID
 * @param text string
 * @param fonts RID[]
 * @param size int
 * @param opentypeFeatures GodotDictionary<any>
 * @param language string
 * @param meta Variant
 * @returns boolean
 */
  private shapedTextAddString(shaped: RID, text: string, fonts: RID[], size: int, opentypeFeatures: GodotDictionary<any>, language: string, meta: Variant): boolean;
/**
 * **Required.**
 * Clears text buffer (removes text and inline objects).
 * @param shaped RID
 */
  private shapedTextClear(shaped: RID): void;
/**
 * **Optional.**
 * Returns composite character position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  private shapedTextClosestCharacterPos(shaped: RID, pos: int): int;
/**
 * **Optional.**
 * Draw shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).
 * @param shaped RID
 * @param canvas RID
 * @param pos Vector2
 * @param clipL float
 * @param clipR float
 * @param color Color
 */
  private shapedTextDraw(shaped: RID, canvas: RID, pos: Vector2, clipL: float, clipR: float, color: Color): void;
/**
 * **Optional.**
 * Draw the outline of the shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).
 * @param shaped RID
 * @param canvas RID
 * @param pos Vector2
 * @param clipL float
 * @param clipR float
 * @param outlineSize int
 * @param color Color
 */
  private shapedTextDrawOutline(shaped: RID, canvas: RID, pos: Vector2, clipL: float, clipR: float, outlineSize: int, color: Color): void;
/**
 * **Optional.**
 * Adjusts text width to fit to specified width, returns new text width.
 * @param shaped RID
 * @param width float
 * @param justificationFlags int
 * @returns float
 */
  private shapedTextFitToWidth(shaped: RID, width: float, justificationFlags: int): float;
/**
 * **Required.**
 * Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).
 * @param shaped RID
 * @returns float
 */
  private shapedTextGetAscent(shaped: RID): float;
/**
 * **Optional.**
 * Returns shapes of the carets corresponding to the character offset `position` in the text. Returned caret shape is 1 pixel wide rectangle.
 * @param shaped RID
 * @param position int
 * @param caret unknown
 */
  private shapedTextGetCarets(shaped: RID, position: int, caret: unknown): void;
/**
 * **Optional.**
 * Returns array of the composite character boundaries.
 * @param shaped RID
 * @returns PackedInt32Array
 */
  private shapedTextGetCharacterBreaks(shaped: RID): PackedInt32Array;
/**
 * **Optional.**
 * Returns ellipsis character used for text clipping.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetCustomEllipsis(shaped: RID): int;
/**
 * **Optional.**
 * Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.
 * @param shaped RID
 * @returns string
 */
  private shapedTextGetCustomPunctuation(shaped: RID): string;
/**
 * **Required.**
 * Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).
 * @param shaped RID
 * @returns float
 */
  private shapedTextGetDescent(shaped: RID): float;
/**
 * **Optional.**
 * Returns direction of the text.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetDirection(shaped: RID): int;
/**
 * **Optional.**
 * Returns dominant direction of in the range of text.
 * @param shaped RID
 * @param start int
 * @param end int
 * @returns int
 */
  private shapedTextGetDominantDirectionInRange(shaped: RID, start: int, end: int): int;
/**
 * **Required.**
 * Returns number of glyphs in the ellipsis.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetEllipsisGlyphCount(shaped: RID): int;
/**
 * **Required.**
 * Returns array of the glyphs in the ellipsis.
 * @param shaped RID
 * @returns unknown
 */
  private shapedTextGetEllipsisGlyphs(shaped: RID): unknown;
/**
 * **Required.**
 * Returns position of the ellipsis.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetEllipsisPos(shaped: RID): int;
/**
 * **Required.**
 * Returns number of glyphs in the buffer.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetGlyphCount(shaped: RID): int;
/**
 * **Required.**
 * Returns an array of glyphs in the visual order.
 * @param shaped RID
 * @returns unknown
 */
  private shapedTextGetGlyphs(shaped: RID): unknown;
/**
 * **Optional.**
 * Returns composite character's bounds as offsets from the start of the line.
 * @param shaped RID
 * @param pos int
 * @returns Vector2
 */
  private shapedTextGetGraphemeBounds(shaped: RID, pos: int): Vector2;
/**
 * **Optional.**
 * Returns direction of the text, inferred by the BiDi algorithm.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetInferredDirection(shaped: RID): int;
/**
 * **Optional.**
 * Breaks text to the lines and returns character ranges for each line.
 * @param shaped RID
 * @param width float
 * @param start int
 * @param breakFlags int
 * @returns PackedInt32Array
 */
  private shapedTextGetLineBreaks(shaped: RID, width: float, start: int, breakFlags: int): PackedInt32Array;
/**
 * **Optional.**
 * Breaks text to the lines and columns. Returns character ranges for each segment.
 * @param shaped RID
 * @param width PackedFloat32Array
 * @param start int
 * @param once boolean
 * @param breakFlags int
 * @returns PackedInt32Array
 */
  private shapedTextGetLineBreaksAdv(shaped: RID, width: PackedFloat32Array, start: int, once: boolean, breakFlags: int): PackedInt32Array;
/**
 * **Required.**
 * Returns the glyph index of the inline object.
 * @param shaped RID
 * @param key Variant
 * @returns int
 */
  private shapedTextGetObjectGlyph(shaped: RID, key: Variant): int;
/**
 * **Required.**
 * Returns the character range of the inline object.
 * @param shaped RID
 * @param key Variant
 * @returns Vector2i
 */
  private shapedTextGetObjectRange(shaped: RID, key: Variant): Vector2i;
/**
 * **Required.**
 * Returns bounding rectangle of the inline object.
 * @param shaped RID
 * @param key Variant
 * @returns Rect2
 */
  private shapedTextGetObjectRect(shaped: RID, key: Variant): Rect2;
/**
 * **Required.**
 * Returns array of inline objects.
 * @param shaped RID
 * @returns GodotArray<any>
 */
  private shapedTextGetObjects(shaped: RID): GodotArray<any>;
/**
 * **Optional.**
 * Returns text orientation.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetOrientation(shaped: RID): int;
/**
 * **Required.**
 * Returns the parent buffer from which the substring originates.
 * @param shaped RID
 * @returns RID
 */
  private shapedTextGetParent(shaped: RID): RID;
/**
 * **Optional.**
 * Returns `true` if text buffer is configured to display control characters.
 * @param shaped RID
 * @returns boolean
 */
  private shapedTextGetPreserveControl(shaped: RID): boolean;
/**
 * **Optional.**
 * Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.
 * @param shaped RID
 * @returns boolean
 */
  private shapedTextGetPreserveInvalid(shaped: RID): boolean;
/**
 * **Required.**
 * Returns substring buffer character range in the parent buffer.
 * @param shaped RID
 * @returns Vector2i
 */
  private shapedTextGetRange(shaped: RID): Vector2i;
/**
 * **Optional.**
 * Returns selection rectangles for the specified character range.
 * @param shaped RID
 * @param start int
 * @param end int
 * @returns PackedVector2Array
 */
  private shapedTextGetSelection(shaped: RID, start: int, end: int): PackedVector2Array;
/**
 * **Required.**
 * Returns size of the text.
 * @param shaped RID
 * @returns Vector2
 */
  private shapedTextGetSize(shaped: RID): Vector2;
/**
 * **Optional.**
 * Returns extra spacing added between glyphs or lines in pixels.
 * @param shaped RID
 * @param spacing int
 * @returns int
 */
  private shapedTextGetSpacing(shaped: RID, spacing: int): int;
/**
 * **Required.**
 * Returns the position of the overrun trim.
 * @param shaped RID
 * @returns int
 */
  private shapedTextGetTrimPos(shaped: RID): int;
/**
 * **Required.**
 * Returns pixel offset of the underline below the baseline.
 * @param shaped RID
 * @returns float
 */
  private shapedTextGetUnderlinePosition(shaped: RID): float;
/**
 * **Required.**
 * Returns thickness of the underline.
 * @param shaped RID
 * @returns float
 */
  private shapedTextGetUnderlineThickness(shaped: RID): float;
/**
 * **Required.**
 * Returns width (for horizontal layout) or height (for vertical) of the text.
 * @param shaped RID
 * @returns float
 */
  private shapedTextGetWidth(shaped: RID): float;
/**
 * **Optional.**
 * Breaks text into words and returns array of character ranges. Use `grapheme_flags` to set what characters are used for breaking (see `TextServer.GraphemeFlag`).
 * @param shaped RID
 * @param graphemeFlags int
 * @param skipGraphemeFlags int
 * @returns PackedInt32Array
 */
  private shapedTextGetWordBreaks(shaped: RID, graphemeFlags: int, skipGraphemeFlags: int): PackedInt32Array;
/**
 * **Optional.**
 * Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found.
 * @param shaped RID
 * @param coord float
 * @returns int
 */
  private shapedTextHitTestGrapheme(shaped: RID, coord: float): int;
/**
 * **Optional.**
 * Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position.
 * @param shaped RID
 * @param coord float
 * @returns int
 */
  private shapedTextHitTestPosition(shaped: RID, coord: float): int;
/**
 * **Required.**
 * Returns `true` if buffer is successfully shaped.
 * @param shaped RID
 * @returns boolean
 */
  private shapedTextIsReady(shaped: RID): boolean;
/**
 * **Optional.**
 * Returns composite character end position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  private shapedTextNextCharacterPos(shaped: RID, pos: int): int;
/**
 * **Optional.**
 * Returns grapheme end position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  private shapedTextNextGraphemePos(shaped: RID, pos: int): int;
/**
 * **Optional.**
 * Trims text if it exceeds the given width.
 * @param shaped RID
 * @param width float
 * @param trimFlags int
 */
  private shapedTextOverrunTrimToWidth(shaped: RID, width: float, trimFlags: int): void;
/**
 * **Optional.**
 * Returns composite character start position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  private shapedTextPrevCharacterPos(shaped: RID, pos: int): int;
/**
 * **Optional.**
 * Returns grapheme start position closest to the `pos`.
 * @param shaped RID
 * @param pos int
 * @returns int
 */
  private shapedTextPrevGraphemePos(shaped: RID, pos: int): int;
/**
 * **Required.**
 * Sets new size and alignment of embedded object.
 * @param shaped RID
 * @param key Variant
 * @param size Vector2
 * @param inlineAlign int
 * @param baseline float
 * @returns boolean
 */
  private shapedTextResizeObject(shaped: RID, key: Variant, size: Vector2, inlineAlign: int, baseline: float): boolean;
/**
 * **Optional.**
 * Overrides BiDi for the structured text.
 * @param shaped RID
 * @param override GodotArray<any>
 */
  private shapedTextSetBidiOverride(shaped: RID, override: GodotArray<any>): void;
/**
 * **Optional.**
 * Sets ellipsis character used for text clipping.
 * @param shaped RID
 * @param char int
 */
  private shapedTextSetCustomEllipsis(shaped: RID, char: int): void;
/**
 * **Optional.**
 * Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.
 * @param shaped RID
 * @param punct string
 */
  private shapedTextSetCustomPunctuation(shaped: RID, punct: string): void;
/**
 * **Optional.**
 * Sets desired text direction. If set to `TextServer.DIRECTION_AUTO`, direction will be detected based on the buffer contents and current locale.
 * @param shaped RID
 * @param direction int
 */
  private shapedTextSetDirection(shaped: RID, direction: int): void;
/**
 * **Optional.**
 * Sets desired text orientation.
 * @param shaped RID
 * @param orientation int
 */
  private shapedTextSetOrientation(shaped: RID, orientation: int): void;
/**
 * **Optional.**
 * If set to `true` text buffer will display control characters.
 * @param shaped RID
 * @param enabled boolean
 */
  private shapedTextSetPreserveControl(shaped: RID, enabled: boolean): void;
/**
 * **Optional.**
 * If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed.
 * @param shaped RID
 * @param enabled boolean
 */
  private shapedTextSetPreserveInvalid(shaped: RID, enabled: boolean): void;
/**
 * **Optional.**
 * Sets extra spacing added between glyphs or lines in pixels.
 * @param shaped RID
 * @param spacing int
 * @param value int
 */
  private shapedTextSetSpacing(shaped: RID, spacing: int, value: int): void;
/**
 * **Required.**
 * Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.
 * @param shaped RID
 * @returns boolean
 */
  private shapedTextShape(shaped: RID): boolean;
/**
 * **Required.**
 * Returns text glyphs in the logical order.
 * @param shaped RID
 * @returns unknown
 */
  private shapedTextSortLogical(shaped: RID): unknown;
/**
 * **Required.**
 * Returns text buffer for the substring of the text in the `shaped` text buffer (including inline objects).
 * @param shaped RID
 * @param start int
 * @param length int
 * @returns RID
 */
  private shapedTextSubstr(shaped: RID, start: int, length: int): RID;
/**
 * **Optional.**
 * Aligns shaped text to the given tab-stops.
 * @param shaped RID
 * @param tabStops PackedFloat32Array
 * @returns float
 */
  private shapedTextTabAlign(shaped: RID, tabStops: PackedFloat32Array): float;
/**
 * **Optional.**
 * Updates break points in the shaped text. This method is called by default implementation of text breaking functions.
 * @param shaped RID
 * @returns boolean
 */
  private shapedTextUpdateBreaks(shaped: RID): boolean;
/**
 * **Optional.**
 * Updates justification points in the shaped text. This method is called by default implementation of text justification functions.
 * @param shaped RID
 * @returns boolean
 */
  private shapedTextUpdateJustificationOps(shaped: RID): boolean;
/**
 * **Optional.**
 * Returns `true` if `string` is likely to be an attempt at confusing the reader.
 * @param string_ string
 * @returns boolean
 */
  private spoofCheck(string_: string): boolean;
/**
 * **Optional.**
 * Returns array of the composite character boundaries.
 * @param string_ string
 * @param language string
 * @returns PackedInt32Array
 */
  private stringGetCharacterBreaks(string_: string, language: string): PackedInt32Array;
/**
 * **Optional.**
 * Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.
 * @param string_ string
 * @param language string
 * @param charsPerLine int
 * @returns PackedInt32Array
 */
  private stringGetWordBreaks(string_: string, language: string, charsPerLine: int): PackedInt32Array;
/**
 * **Optional.**
 * Returns the string converted to lowercase.
 * @param string_ string
 * @param language string
 * @returns string
 */
  private stringToLower(string_: string, language: string): string;
/**
 * **Optional.**
 * Returns the string converted to title case.
 * @param string_ string
 * @param language string
 * @returns string
 */
  private stringToTitle(string_: string, language: string): string;
/**
 * **Optional.**
 * Returns the string converted to uppercase.
 * @param string_ string
 * @param language string
 * @returns string
 */
  private stringToUpper(string_: string, language: string): string;
/**
 * **Optional.**
 * Strips diacritics from the string.
 * @param string_ string
 * @returns string
 */
  private stripDiacritics(string_: string): string;
/**
 * **Optional.**
 * Converts OpenType tag to readable feature, variation, script, or language name.
 * @param tag int
 * @returns string
 */
  private tagToName(tag: int): string;
}
