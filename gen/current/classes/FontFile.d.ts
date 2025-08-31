import type { Font, GodotArray, GodotDictionary, Image, PackedByteArray, PackedInt32Array, PackedStringArray, Rect2, Transform2D, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * Holds font source data and prerendered glyph cache, imported from a dynamic or a bitmap font.
 * 
 * `FontFile` contains a set of glyphs to represent Unicode characters imported from a font file, as well as a cache of rasterized glyphs, and a set of fallback `Font`s to use.
 * Use `FontVariation` to access specific OpenType variation of the font, create simulated bold / slanted version, and draw lines of text.
 * For more complex text processing, use `FontVariation` in conjunction with `TextLine` or `TextParagraph`.
 * Supported font formats:
 * - Dynamic font importer: TrueType (.ttf), TrueType collection (.ttc), OpenType (.otf), OpenType collection (.otc), WOFF (.woff), WOFF2 (.woff2), Type 1 (.pfb, .pfm).
 * - Bitmap font importer: AngelCode BMFont (.fnt, .font), text and binary (version 3) format variants.
 * - Monospace image font importer: All supported image formats.
 * 
 * **Note:** A character is a symbol that represents an item (letter, digit etc.) in an abstract way.
 * 
 * **Note:** A glyph is a bitmap or a shape used to draw one or more characters in a context-dependent manner. Glyph indices are bound to the specific font data source.
 * 
 * **Note:** If none of the font data sources contain glyphs for a character used in a string, the character in question will be replaced with a box displaying its hexadecimal code.
 * 
 * 		```gdscript
 * 
 * 		var f = load("res://BarlowCondensed-Bold.ttf")
 * 		$Label.add_theme_font_override("font", f)
 * 		$Label.add_theme_font_size_override("font_size", 64)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var f = ResourceLoader.Load<FontFile>("res://BarlowCondensed-Bold.ttf");
 * 		GetNode("Label").AddThemeFontOverride("font", f);
 * 		GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
 * 		
 * 
 * ```
 * 
 */
export class FontFile extends Font {
/**
 * If set to `true`, system fonts can be automatically used as fallbacks.
 */
  allowSystemFallback: boolean;
/**
 * Font anti-aliasing mode.
 */
  antialiasing: int;
/**
 * Contents of the dynamic font source file.
 */
  data: PackedByteArray;
/**
 * If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).
 */
  disableEmbeddedBitmaps: boolean;
/**
 * Font size, used only for the bitmap fonts.
 */
  fixedSize: int;
/**
 * Scaling mode, used only for the bitmap fonts with `fixed_size` greater than zero.
 */
  fixedSizeScaleMode: int;
/**
 * Font family name.
 */
  fontName: string;
/**
 * Font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.
 */
  fontStretch: int;
/**
 * Font style flags, see `TextServer.FontStyle`.
 */
  fontStyle: int;
/**
 * Weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.
 */
  fontWeight: int;
/**
 * If set to `true`, auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting).
 */
  forceAutohinter: boolean;
/**
 * If set to `true`, generate mipmaps for the font textures.
 */
  generateMipmaps: boolean;
/**
 * Font hinting mode. Used by dynamic fonts only.
 */
  hinting: int;
/**
 * If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled.
 */
  keepRoundingRemainders: boolean;
/**
 * The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, `msdf_pixel_range` must be set to at least *twice* the size of the largest font outline. The default `msdf_pixel_range` value of `16` allows outline sizes up to `8` to look correct.
 */
  msdfPixelRange: int;
/**
 * Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering.
 */
  msdfSize: int;
/**
 * If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for `Control`s that are scaled down (or for `Label3D`s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.
 * 
 * **Note:** If using font outlines, `msdf_pixel_range` must be set to at least *twice* the size of the largest font outline.
 * 
 * **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.
 */
  multichannelSignedDistanceField: boolean;
/**
 * Font OpenType feature set override.
 */
  opentypeFeatureOverrides: GodotDictionary<any>;
/**
 * Font oversampling factor. If set to `0.0`, the global oversampling factor is used instead. Used by dynamic fonts only (MSDF fonts ignore oversampling).
 */
  oversampling: float;
/**
 * Font style name.
 */
  styleName: string;
/**
 * Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use `TextServer.SUBPIXEL_POSITIONING_AUTO` to automatically enable it based on the font size.
 */
  subpixelPositioning: int;
/**
 * Removes all font cache entries.
 */
  clearCache(): void;
/**
 * Removes all rendered glyph information from the cache entry.
 * 
 * **Note:** This function will not remove textures associated with the glyphs, use `remove_texture` to remove them manually.
 * @param cacheIndex int
 * @param size Vector2i
 */
  clearGlyphs(cacheIndex: int, size: Vector2i): void;
/**
 * Removes all kerning overrides.
 * @param cacheIndex int
 * @param size int
 */
  clearKerningMap(cacheIndex: int, size: int): void;
/**
 * Removes all font sizes from the cache entry.
 * @param cacheIndex int
 */
  clearSizeCache(cacheIndex: int): void;
/**
 * Removes all textures from font cache entry.
 * 
 * **Note:** This function will not remove glyphs associated with the texture, use `remove_glyph` to remove them manually.
 * @param cacheIndex int
 * @param size Vector2i
 */
  clearTextures(cacheIndex: int, size: Vector2i): void;
/**
 * Returns the font ascent (number of pixels above the baseline).
 * @param cacheIndex int
 * @param size int
 * @returns float
 */
  getCacheAscent(cacheIndex: int, size: int): float;
/**
 * Returns number of the font cache entries.
 * @returns int
 */
  getCacheCount(): int;
/**
 * Returns the font descent (number of pixels below the baseline).
 * @param cacheIndex int
 * @param size int
 * @returns float
 */
  getCacheDescent(cacheIndex: int, size: int): float;
/**
 * Returns scaling factor of the color bitmap font.
 * @param cacheIndex int
 * @param size int
 * @returns float
 */
  getCacheScale(cacheIndex: int, size: int): float;
/**
 * Returns pixel offset of the underline below the baseline.
 * @param cacheIndex int
 * @param size int
 * @returns float
 */
  getCacheUnderlinePosition(cacheIndex: int, size: int): float;
/**
 * Returns thickness of the underline in pixels.
 * @param cacheIndex int
 * @param size int
 * @returns float
 */
  getCacheUnderlineThickness(cacheIndex: int, size: int): float;
/**
 * Returns character code associated with `glyph_index`, or `0` if `glyph_index` is invalid. See `get_glyph_index`.
 * @param size int
 * @param glyphIndex int
 * @returns int
 */
  getCharFromGlyphIndex(size: int, glyphIndex: int): int;
/**
 * Returns embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.
 * @param cacheIndex int
 * @returns float
 */
  getEmbolden(cacheIndex: int): float;
/**
 * Returns extra baseline offset (as a fraction of font height).
 * @param cacheIndex int
 * @returns float
 */
  getExtraBaselineOffset(cacheIndex: int): float;
/**
 * Returns spacing for `spacing` (see `TextServer.SpacingType`) in pixels (not relative to the font size).
 * @param cacheIndex int
 * @param spacing int
 * @returns int
 */
  getExtraSpacing(cacheIndex: int, spacing: int): int;
/**
 * Returns an active face index in the TrueType / OpenType collection.
 * @param cacheIndex int
 * @returns int
 */
  getFaceIndex(cacheIndex: int): int;
/**
 * Returns glyph advance (offset of the next glyph).
 * 
 * **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.
 * @param cacheIndex int
 * @param size int
 * @param glyph int
 * @returns Vector2
 */
  getGlyphAdvance(cacheIndex: int, size: int, glyph: int): Vector2;
/**
 * Returns the glyph index of a `char`, optionally modified by the `variation_selector`.
 * @param size int
 * @param char int
 * @param variationSelector int
 * @returns int
 */
  getGlyphIndex(size: int, char: int, variationSelector: int): int;
/**
 * Returns list of rendered glyphs in the cache entry.
 * @param cacheIndex int
 * @param size Vector2i
 * @returns PackedInt32Array
 */
  getGlyphList(cacheIndex: int, size: Vector2i): PackedInt32Array;
/**
 * Returns glyph offset from the baseline.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  getGlyphOffset(cacheIndex: int, size: Vector2i, glyph: int): Vector2;
/**
 * Returns glyph size.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @returns Vector2
 */
  getGlyphSize(cacheIndex: int, size: Vector2i, glyph: int): Vector2;
/**
 * Returns index of the cache texture containing the glyph.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @returns int
 */
  getGlyphTextureIdx(cacheIndex: int, size: Vector2i, glyph: int): int;
/**
 * Returns rectangle in the cache texture containing the glyph.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @returns Rect2
 */
  getGlyphUvRect(cacheIndex: int, size: Vector2i, glyph: int): Rect2;
/**
 * Returns kerning for the pair of glyphs.
 * @param cacheIndex int
 * @param size int
 * @param glyphPair Vector2i
 * @returns Vector2
 */
  getKerning(cacheIndex: int, size: int, glyphPair: Vector2i): Vector2;
/**
 * Returns list of the kerning overrides.
 * @param cacheIndex int
 * @param size int
 * @returns Vector2i[]
 */
  getKerningList(cacheIndex: int, size: int): Vector2i[];
/**
 * Returns `true` if support override is enabled for the `language`.
 * @param language string
 * @returns boolean
 */
  getLanguageSupportOverride(language: string): boolean;
/**
 * Returns list of language support overrides.
 * @returns PackedStringArray
 */
  getLanguageSupportOverrides(): PackedStringArray;
/**
 * Returns `true` if support override is enabled for the `script`.
 * @param script string
 * @returns boolean
 */
  getScriptSupportOverride(script: string): boolean;
/**
 * Returns list of script support overrides.
 * @returns PackedStringArray
 */
  getScriptSupportOverrides(): PackedStringArray;
/**
 * Returns list of the font sizes in the cache. Each size is `Vector2i` with font size and outline size.
 * @param cacheIndex int
 * @returns Vector2i[]
 */
  getSizeCacheList(cacheIndex: int): Vector2i[];
/**
 * Returns number of textures used by font cache entry.
 * @param cacheIndex int
 * @param size Vector2i
 * @returns int
 */
  getTextureCount(cacheIndex: int, size: Vector2i): int;
/**
 * Returns a copy of the font cache texture image.
 * @param cacheIndex int
 * @param size Vector2i
 * @param textureIndex int
 * @returns Image
 */
  getTextureImage(cacheIndex: int, size: Vector2i, textureIndex: int): Image;
/**
 * Returns a copy of the array containing glyph packing data.
 * @param cacheIndex int
 * @param size Vector2i
 * @param textureIndex int
 * @returns PackedInt32Array
 */
  getTextureOffsets(cacheIndex: int, size: Vector2i, textureIndex: int): PackedInt32Array;
/**
 * Returns 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.
 * @param cacheIndex int
 * @returns Transform2D
 */
  getTransform(cacheIndex: int): Transform2D;
/**
 * Returns variation coordinates for the specified font cache entry. See `Font.get_supported_variation_list` for more info.
 * @param cacheIndex int
 * @returns GodotDictionary<any>
 */
  getVariationCoordinates(cacheIndex: int): GodotDictionary<any>;
/**
 * Loads an AngelCode BMFont (.fnt, .font) bitmap font from file `path`.
 * 
 * **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.
 * @param path string
 * @returns int
 */
  loadBitmapFont(path: string): int;
/**
 * Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file `path`.
 * 
 * **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.
 * @param path string
 * @returns int
 */
  loadDynamicFont(path: string): int;
/**
 * Removes specified font cache entry.
 * @param cacheIndex int
 */
  removeCache(cacheIndex: int): void;
/**
 * Removes specified rendered glyph information from the cache entry.
 * 
 * **Note:** This function will not remove textures associated with the glyphs, use `remove_texture` to remove them manually.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 */
  removeGlyph(cacheIndex: int, size: Vector2i, glyph: int): void;
/**
 * Removes kerning override for the pair of glyphs.
 * @param cacheIndex int
 * @param size int
 * @param glyphPair Vector2i
 */
  removeKerning(cacheIndex: int, size: int, glyphPair: Vector2i): void;
/**
 * Remove language support override.
 * @param language string
 */
  removeLanguageSupportOverride(language: string): void;
/**
 * Removes script support override.
 * @param script string
 */
  removeScriptSupportOverride(script: string): void;
/**
 * Removes specified font size from the cache entry.
 * @param cacheIndex int
 * @param size Vector2i
 */
  removeSizeCache(cacheIndex: int, size: Vector2i): void;
/**
 * Removes specified texture from the cache entry.
 * 
 * **Note:** This function will not remove glyphs associated with the texture. Remove them manually using `remove_glyph`.
 * @param cacheIndex int
 * @param size Vector2i
 * @param textureIndex int
 */
  removeTexture(cacheIndex: int, size: Vector2i, textureIndex: int): void;
/**
 * Renders specified glyph to the font cache texture.
 * @param cacheIndex int
 * @param size Vector2i
 * @param index int
 */
  renderGlyph(cacheIndex: int, size: Vector2i, index: int): void;
/**
 * Renders the range of characters to the font cache texture.
 * @param cacheIndex int
 * @param size Vector2i
 * @param start int
 * @param end int
 */
  renderRange(cacheIndex: int, size: Vector2i, start: int, end: int): void;
/**
 * Sets the font ascent (number of pixels above the baseline).
 * @param cacheIndex int
 * @param size int
 * @param ascent float
 */
  setCacheAscent(cacheIndex: int, size: int, ascent: float): void;
/**
 * Sets the font descent (number of pixels below the baseline).
 * @param cacheIndex int
 * @param size int
 * @param descent float
 */
  setCacheDescent(cacheIndex: int, size: int, descent: float): void;
/**
 * Sets scaling factor of the color bitmap font.
 * @param cacheIndex int
 * @param size int
 * @param scale float
 */
  setCacheScale(cacheIndex: int, size: int, scale: float): void;
/**
 * Sets pixel offset of the underline below the baseline.
 * @param cacheIndex int
 * @param size int
 * @param underlinePosition float
 */
  setCacheUnderlinePosition(cacheIndex: int, size: int, underlinePosition: float): void;
/**
 * Sets thickness of the underline in pixels.
 * @param cacheIndex int
 * @param size int
 * @param underlineThickness float
 */
  setCacheUnderlineThickness(cacheIndex: int, size: int, underlineThickness: float): void;
/**
 * Sets embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.
 * @param cacheIndex int
 * @param strength float
 */
  setEmbolden(cacheIndex: int, strength: float): void;
/**
 * Sets extra baseline offset (as a fraction of font height).
 * @param cacheIndex int
 * @param baselineOffset float
 */
  setExtraBaselineOffset(cacheIndex: int, baselineOffset: float): void;
/**
 * Sets the spacing for `spacing` (see `TextServer.SpacingType`) to `value` in pixels (not relative to the font size).
 * @param cacheIndex int
 * @param spacing int
 * @param value int
 */
  setExtraSpacing(cacheIndex: int, spacing: int, value: int): void;
/**
 * Sets an active face index in the TrueType / OpenType collection.
 * @param cacheIndex int
 * @param faceIndex int
 */
  setFaceIndex(cacheIndex: int, faceIndex: int): void;
/**
 * Sets glyph advance (offset of the next glyph).
 * 
 * **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.
 * @param cacheIndex int
 * @param size int
 * @param glyph int
 * @param advance Vector2
 */
  setGlyphAdvance(cacheIndex: int, size: int, glyph: int, advance: Vector2): void;
/**
 * Sets glyph offset from the baseline.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @param offset Vector2
 */
  setGlyphOffset(cacheIndex: int, size: Vector2i, glyph: int, offset: Vector2): void;
/**
 * Sets glyph size.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @param glSize Vector2
 */
  setGlyphSize(cacheIndex: int, size: Vector2i, glyph: int, glSize: Vector2): void;
/**
 * Sets index of the cache texture containing the glyph.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @param textureIdx int
 */
  setGlyphTextureIdx(cacheIndex: int, size: Vector2i, glyph: int, textureIdx: int): void;
/**
 * Sets rectangle in the cache texture containing the glyph.
 * @param cacheIndex int
 * @param size Vector2i
 * @param glyph int
 * @param uvRect Rect2
 */
  setGlyphUvRect(cacheIndex: int, size: Vector2i, glyph: int, uvRect: Rect2): void;
/**
 * Sets kerning for the pair of glyphs.
 * @param cacheIndex int
 * @param size int
 * @param glyphPair Vector2i
 * @param kerning Vector2
 */
  setKerning(cacheIndex: int, size: int, glyphPair: Vector2i, kerning: Vector2): void;
/**
 * Adds override for `Font.is_language_supported`.
 * @param language string
 * @param supported boolean
 */
  setLanguageSupportOverride(language: string, supported: boolean): void;
/**
 * Adds override for `Font.is_script_supported`.
 * @param script string
 * @param supported boolean
 */
  setScriptSupportOverride(script: string, supported: boolean): void;
/**
 * Sets font cache texture image.
 * @param cacheIndex int
 * @param size Vector2i
 * @param textureIndex int
 * @param image Image
 */
  setTextureImage(cacheIndex: int, size: Vector2i, textureIndex: int, image: Image): void;
/**
 * Sets array containing glyph packing data.
 * @param cacheIndex int
 * @param size Vector2i
 * @param textureIndex int
 * @param offset PackedInt32Array
 */
  setTextureOffsets(cacheIndex: int, size: Vector2i, textureIndex: int, offset: PackedInt32Array): void;
/**
 * Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.
 * @param cacheIndex int
 * @param transform Transform2D
 */
  setTransform(cacheIndex: int, transform: Transform2D): void;
/**
 * Sets variation coordinates for the specified font cache entry. See `Font.get_supported_variation_list` for more info.
 * @param cacheIndex int
 * @param variationCoordinates GodotDictionary<any>
 */
  setVariationCoordinates(cacheIndex: int, variationCoordinates: GodotDictionary<any>): void;
}
