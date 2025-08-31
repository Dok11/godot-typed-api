import type { Font, GodotArray, GodotDictionary, PackedStringArray, float, int } from "../index.d.ts";
/**
 * A font loaded from a system font. Falls back to a default theme font if not implemented on the host OS.
 * 
 * `SystemFont` loads a font from a system font with the first matching name from `font_names`.
 * It will attempt to match font style, but it's not guaranteed.
 * The returned font might be part of a font collection or be a variable font with OpenType "weight", "width" and/or "italic" features set.
 * You can create `FontVariation` of the system font for precise control over its features.
 * 
 * **Note:** This class is implemented on iOS, Linux, macOS and Windows, on other platforms it will fallback to default theme font.
 */
export class SystemFont extends Font {
/**
 * If set to `true`, system fonts can be automatically used as fallbacks.
 */
  allowSystemFallback: boolean;
/**
 * Font anti-aliasing mode.
 */
  antialiasing: int;
/**
 * If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).
 */
  disableEmbeddedBitmaps: boolean;
/**
 * If set to `true`, italic or oblique font is preferred.
 */
  fontItalic: boolean;
/**
 * Array of font family names to search, first matching font found is used.
 */
  fontNames: PackedStringArray;
/**
 * Preferred font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.
 */
  fontStretch: int;
/**
 * Preferred weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.
 */
  fontWeight: int;
/**
 * If set to `true`, auto-hinting is supported and preferred over font built-in hinting.
 */
  forceAutohinter: boolean;
/**
 * If set to `true`, generate mipmaps for the font textures.
 */
  generateMipmaps: boolean;
/**
 * Font hinting mode.
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
 * If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data.
 */
  multichannelSignedDistanceField: boolean;
/**
 * Font oversampling factor, if set to `0.0` global oversampling factor is used instead.
 */
  oversampling: float;
/**
 * Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use `TextServer.SUBPIXEL_POSITIONING_AUTO` to automatically enable it based on the font size.
 */
  subpixelPositioning: int;
}
