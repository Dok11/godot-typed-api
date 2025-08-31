import type { GodotArray, GodotDictionary, ResourceImporter, float, int } from "../index.d.ts";
/**
 * Imports a bitmap font in the BMFont (`.fnt`) format.
 * 
 * The BMFont format is a format created by the BMFont (https://www.angelcode.com/products/bmfont/) program. Many BMFont-compatible programs also exist, like BMGlyph (https://www.bmglyph.com/).
 * Compared to `ResourceImporterImageFont`, `ResourceImporterBMFont` supports bitmap fonts with varying glyph widths/heights.
 * See also `ResourceImporterDynamicFont`.
 */
export class ResourceImporterBMFont extends ResourceImporter {
/**
 * If `true`, uses lossless compression for the resulting font.
 */
  compress: boolean;
/**
 * List of font fallbacks to use if a glyph isn't found in this bitmap font. Fonts at the beginning of the array are attempted first.
 */
  fallbacks: GodotArray<any>;
/**
 * Font scaling mode.
 */
  scalingMode: int;
}
