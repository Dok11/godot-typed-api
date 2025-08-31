import type { Color, GodotArray, GodotDictionary, RID, RefCounted, Transform2D, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * Controls how an individual character will be displayed in a `RichTextEffect`.
 * 
 * By setting various properties on this object, you can control how individual characters will be displayed in a `RichTextEffect`.
 */
export class CharFXTransform extends RefCounted {
/**
 * The color the character will be drawn with.
 */
  color: Color;
/**
 * The time elapsed since the `RichTextLabel` was added to the scene tree (in seconds). Time stops when the `RichTextLabel` is paused (see `Node.process_mode`). Resets when the text in the `RichTextLabel` is changed.
 * 
 * **Note:** Time still passes while the `RichTextLabel` is hidden.
 */
  elapsedTime: float;
/**
 * Contains the arguments passed in the opening BBCode tag. By default, arguments are strings; if their contents match a type such as [bool], [int] or [float], they will be converted automatically. Color codes in the form `#rrggbb` or `#rgb` will be converted to an opaque `Color`. String arguments may not contain spaces, even if they're quoted. If present, quotes will also be present in the final string.
 * For example, the opening BBCode tag `[example foo=hello bar=true baz=42 color=#ffffff]` will map to the following `Dictionary`:
 * 
 * 			```gdscript
 * 
 * 			{"foo": "hello", "bar": true, "baz": 42, "color": Color(1, 1, 1, 1)}
 * 			
 * 
 * ```
 */
  env: GodotDictionary<any>;
/**
 * `TextServer` RID of the font used to render glyph, this value can be used with `TextServer.font_*` methods to retrieve font information.
 * 
 * **Note:** Read-only. Setting this property won't affect drawing.
 */
  font: RID;
/**
 * Number of glyphs in the grapheme cluster. This value is set in the first glyph of a cluster.
 * 
 * **Note:** Read-only. Setting this property won't affect drawing.
 */
  glyphCount: int;
/**
 * Glyph flags. See `TextServer.GraphemeFlag` for more info.
 * 
 * **Note:** Read-only. Setting this property won't affect drawing.
 */
  glyphFlags: int;
/**
 * Glyph index specific to the `font`. If you want to replace this glyph, use `TextServer.font_get_glyph_index` with `font` to get a new glyph index for a single character.
 */
  glyphIndex: int;
/**
 * The position offset the character will be drawn with (in pixels).
 */
  offset: Vector2;
/**
 * If `true`, FX transform is called for outline drawing.
 * 
 * **Note:** Read-only. Setting this property won't affect drawing.
 */
  outline: boolean;
/**
 * Absolute character range in the string, corresponding to the glyph.
 * 
 * **Note:** Read-only. Setting this property won't affect drawing.
 */
  range: Vector2i;
/**
 * The character offset of the glyph, relative to the current `RichTextEffect` custom block.
 * 
 * **Note:** Read-only. Setting this property won't affect drawing.
 */
  relativeIndex: int;
/**
 * The current transform of the current glyph. It can be overridden (for example, by driving the position and rotation from a curve). You can also alter the existing value to apply transforms on top of other effects.
 */
  transform: Transform2D;
/**
 * If `true`, the character will be drawn. If `false`, the character will be hidden. Characters around hidden characters will reflow to take the space of hidden characters. If this is not desired, set their `color` to `Color(1, 1, 1, 0)` instead.
 */
  visible: boolean;
}
