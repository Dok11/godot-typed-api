import type { Font, GodotArray, GodotDictionary, Transform2D, float, int } from "../index.d.ts";
/**
 * A variation of a font with additional settings.
 * 
 * Provides OpenType variations, simulated bold / slant, and additional font settings like OpenType features and extra spacing.
 * To use simulated bold font variant:
 * 
 * 		```gdscript
 * 
 * 		var fv = FontVariation.new()
 * 		fv.base_font = load("res://BarlowCondensed-Regular.ttf")
 * 		fv.variation_embolden = 1.2
 * 		$Label.add_theme_font_override("font", fv)
 * 		$Label.add_theme_font_size_override("font_size", 64)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var fv = new FontVariation();
 * 		fv.SetBaseFont(ResourceLoader.Load<FontFile>("res://BarlowCondensed-Regular.ttf"));
 * 		fv.SetVariationEmbolden(1.2);
 * 		GetNode("Label").AddThemeFontOverride("font", fv);
 * 		GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
 * 		
 * 
 * ```
 * 
 * To set the coordinate of multiple variation axes:
 * 
 * 		```gdscript
 * 
 * 		var fv = FontVariation.new();
 * 		var ts = TextServerManager.get_primary_interface()
 * 		fv.base_font = load("res://BarlowCondensed-Regular.ttf")
 * 		fv.variation_opentype = { ts.name_to_tag("wght"): 900, ts.name_to_tag("custom_hght"): 900 }
 * 		
 * 
 * ```
 */
export class FontVariation extends Font {
/**
 * Base font used to create a variation. If not set, default `Theme` font is used.
 */
  baseFont: Font;
/**
 * Extra baseline offset (as a fraction of font height).
 */
  baselineOffset: float;
/**
 * A set of OpenType feature tags. More info: OpenType feature tags (https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags).
 */
  opentypeFeatures: GodotDictionary<any>;
/**
 * Extra spacing at the bottom of the line in pixels.
 */
  spacingBottom: int;
/**
 * Extra spacing between graphical glyphs.
 */
  spacingGlyph: int;
/**
 * Extra width of the space glyphs.
 */
  spacingSpace: int;
/**
 * Extra spacing at the top of the line in pixels.
 */
  spacingTop: int;
/**
 * If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.
 * 
 * **Note:** Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and `TextMesh` from working correctly.
 */
  variationEmbolden: float;
/**
 * Active face index in the TrueType / OpenType collection file.
 */
  variationFaceIndex: int;
/**
 * Font OpenType variation coordinates. More info: OpenType variation tags (https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg).
 * 
 * **Note:** This `Dictionary` uses OpenType tags as keys. Variation axes can be identified both by tags ([int], e.g. `0x77678674`) and names (`String`, e.g. `wght`). Some axes might be accessible by multiple names. For example, `wght` refers to the same axis as `weight`. Tags on the other hand are unique. To convert between names and tags, use `TextServer.name_to_tag` and `TextServer.tag_to_name`.
 * 
 * **Note:** To get available variation axes of a font, use `Font.get_supported_variation_list`.
 */
  variationOpentype: GodotDictionary<any>;
/**
 * 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.
 * For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.
 */
  variationTransform: Transform2D;
/**
 * Sets the spacing for `spacing` (see `TextServer.SpacingType`) to `value` in pixels (not relative to the font size).
 * @param spacing int
 * @param value int
 */
  setSpacing(spacing: int, value: int): void;
}
