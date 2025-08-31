import type { Color, Font, GeometryInstance3D, GodotArray, GodotDictionary, TriangleMesh, Vector2, float, int } from "../index.d.ts";
/**
 * A node for displaying plain text in 3D space.
 * 
 * A node for displaying plain text in 3D space. By adjusting various properties of this node, you can configure things such as the text's appearance and whether it always faces the camera.
 */
export class Label3D extends GeometryInstance3D {
/**
 * Threshold at which antialiasing will be applied on the alpha channel.
 */
  alphaAntialiasingEdge: float;
/**
 * The type of alpha antialiasing to apply. See `BaseMaterial3D.AlphaAntiAliasing`.
 */
  alphaAntialiasingMode: int;
/**
 * The alpha cutting mode to use for the sprite. See `AlphaCutMode` for possible values.
 */
  alphaCut: int;
/**
 * The hashing scale for Alpha Hash. Recommended values between `0` and `2`.
 */
  alphaHashScale: float;
/**
 * Threshold at which the alpha scissor will discard values.
 */
  alphaScissorThreshold: float;
/**
 * If set to something other than `TextServer.AUTOWRAP_OFF`, the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see `TextServer.AutowrapMode`.
 */
  autowrapMode: int;
/**
 * The billboard mode to use for the label. See `BaseMaterial3D.BillboardMode` for possible values.
 */
  billboard: int;
  castShadow: int;
/**
 * If `true`, text can be seen from the back as well, if `false`, it is invisible when looking at it from behind.
 */
  doubleSided: boolean;
/**
 * If `true`, the label is rendered at the same size regardless of distance.
 */
  fixedSize: boolean;
/**
 * Font configuration used to display text.
 */
  font: Font;
/**
 * Font size of the `Label3D`'s text. To make the font look more detailed when up close, increase `font_size` while decreasing `pixel_size` at the same time.
 * Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.
 */
  fontSize: int;
  giMode: int;
/**
 * Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the `HorizontalAlignment` constants.
 */
  horizontalAlignment: int;
/**
 * Line fill alignment rules. See `TextServer.JustificationFlag` for more information.
 */
  justificationFlags: int;
/**
 * Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
/**
 * Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative.
 */
  lineSpacing: float;
/**
 * Text `Color` of the `Label3D`.
 */
  modulate: Color;
/**
 * If `true`, depth testing is disabled and the object will be drawn in render order.
 */
  noDepthTest: boolean;
/**
 * The text drawing offset (in pixels).
 */
  offset: Vector2;
/**
 * The tint of text outline.
 */
  outlineModulate: Color;
/**
 * Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.
 * 
 * **Note:** This only applies if `alpha_cut` is set to `ALPHA_CUT_DISABLED` (default value).
 * 
 * **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
 */
  outlineRenderPriority: int;
/**
 * Text outline size.
 */
  outlineSize: int;
/**
 * The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase `font_size` while decreasing `pixel_size` at the same time.
 */
  pixelSize: float;
/**
 * Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.
 * 
 * **Note:** This only applies if `alpha_cut` is set to `ALPHA_CUT_DISABLED` (default value).
 * 
 * **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
 */
  renderPriority: int;
/**
 * If `true`, the `Light3D` in the `Environment` has effects on the label.
 */
  shaded: boolean;
/**
 * Set BiDi algorithm override for the structured text.
 */
  structuredTextBidiOverride: int;
/**
 * Set additional options for BiDi override.
 */
  structuredTextBidiOverrideOptions: GodotArray<any>;
/**
 * The text to display on screen.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * Filter flags for the texture. See `BaseMaterial3D.TextureFilter` for options.
 */
  textureFilter: int;
/**
 * If `true`, all the text displays as UPPERCASE.
 */
  uppercase: boolean;
/**
 * Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the `VerticalAlignment` constants.
 */
  verticalAlignment: int;
/**
 * Text width (in pixels), used for autowrap and fill alignment.
 */
  width: float;
/**
 * Returns a `TriangleMesh` with the label's vertices following its current configuration (such as its `pixel_size`).
 * @returns TriangleMesh
 */
  generateTriangleMesh(): TriangleMesh;
/**
 * Returns the value of the specified flag.
 * @param flag int
 * @returns boolean
 */
  getDrawFlag(flag: int): boolean;
/**
 * If `true`, the specified flag will be enabled. See `Label3D.DrawFlags` for a list of flags.
 * @param flag int
 * @param enabled boolean
 */
  setDrawFlag(flag: int, enabled: boolean): void;
/**
 * If set, lights in the environment affect the label.
 */
  static readonly FLAG_SHADED: int;
/**
 * If set, text can be seen from the back as well. If not, the text is invisible when looking at it from behind.
 */
  static readonly FLAG_DOUBLE_SIDED: int;
/**
 * Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it.
 */
  static readonly FLAG_DISABLE_DEPTH_TEST: int;
/**
 * Label is scaled by depth so that it always appears the same size on screen.
 */
  static readonly FLAG_FIXED_SIZE: int;
/**
 * Represents the size of the `DrawFlags` enum.
 */
  static readonly FLAG_MAX: int;
/**
 * This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. `GeometryInstance3D.cast_shadow` has no effect when this transparency mode is used; the `Label3D` will never cast shadows.
 */
  static readonly ALPHA_CUT_DISABLED: int;
/**
 * This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see `ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa`). This mode is also known as *alpha testing* or *1-bit transparency*.
 * 
 * **Note:** This mode might have issues with anti-aliased fonts and outlines, try adjusting `alpha_scissor_threshold` or using MSDF font.
 * 
 * **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.
 */
  static readonly ALPHA_CUT_DISCARD: int;
/**
 * This mode draws fully opaque pixels in the depth prepass. This is slower than `ALPHA_CUT_DISABLED` or `ALPHA_CUT_DISCARD`, but it allows displaying translucent areas and smooth edges while using proper sorting.
 * 
 * **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.
 */
  static readonly ALPHA_CUT_OPAQUE_PREPASS: int;
/**
 * This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque.
 */
  static readonly ALPHA_CUT_HASH: int;
}
