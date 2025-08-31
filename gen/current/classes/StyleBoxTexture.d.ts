import type { Color, GodotArray, GodotDictionary, Rect2, StyleBox, Texture2D, float, int } from "../index.d.ts";
/**
 * A texture-based nine-patch `StyleBox`.
 * 
 * A texture-based nine-patch `StyleBox`, in a way similar to `NinePatchRect`. This stylebox performs a 3×3 scaling of a texture, where only the center cell is fully stretched. This makes it possible to design bordered styles regardless of the stylebox's size.
 */
export class StyleBoxTexture extends StyleBox {
/**
 * Controls how the stylebox's texture will be stretched or tiled horizontally. See `AxisStretchMode` for possible values.
 */
  axisStretchHorizontal: int;
/**
 * Controls how the stylebox's texture will be stretched or tiled vertically. See `AxisStretchMode` for possible values.
 */
  axisStretchVertical: int;
/**
 * If `true`, the nine-patch texture's center tile will be drawn.
 */
  drawCenter: boolean;
/**
 * Expands the bottom margin of this style box when drawing, causing it to be drawn larger than requested.
 */
  expandMarginBottom: float;
/**
 * Expands the left margin of this style box when drawing, causing it to be drawn larger than requested.
 */
  expandMarginLeft: float;
/**
 * Expands the right margin of this style box when drawing, causing it to be drawn larger than requested.
 */
  expandMarginRight: float;
/**
 * Expands the top margin of this style box when drawing, causing it to be drawn larger than requested.
 */
  expandMarginTop: float;
/**
 * Modulates the color of the texture when this style box is drawn.
 */
  modulateColor: Color;
/**
 * The region to use from the `texture`.
 * This is equivalent to first wrapping the `texture` in an `AtlasTexture` with the same region.
 * If empty (`Rect2(0, 0, 0, 0)`), the whole `texture` is used.
 */
  regionRect: Rect2;
/**
 * The texture to use when drawing this style box.
 */
  texture: Texture2D;
/**
 * Increases the bottom margin of the 3×3 texture box.
 * A higher value means more of the source texture is considered to be part of the bottom border of the 3×3 box.
 * This is also the value used as fallback for `StyleBox.content_margin_bottom` if it is negative.
 */
  textureMarginBottom: float;
/**
 * Increases the left margin of the 3×3 texture box.
 * A higher value means more of the source texture is considered to be part of the left border of the 3×3 box.
 * This is also the value used as fallback for `StyleBox.content_margin_left` if it is negative.
 */
  textureMarginLeft: float;
/**
 * Increases the right margin of the 3×3 texture box.
 * A higher value means more of the source texture is considered to be part of the right border of the 3×3 box.
 * This is also the value used as fallback for `StyleBox.content_margin_right` if it is negative.
 */
  textureMarginRight: float;
/**
 * Increases the top margin of the 3×3 texture box.
 * A higher value means more of the source texture is considered to be part of the top border of the 3×3 box.
 * This is also the value used as fallback for `StyleBox.content_margin_top` if it is negative.
 */
  textureMarginTop: float;
/**
 * Returns the expand margin size of the specified `Side`.
 * @param margin int
 * @returns float
 */
  getExpandMargin(margin: int): float;
/**
 * Returns the margin size of the specified `Side`.
 * @param margin int
 * @returns float
 */
  getTextureMargin(margin: int): float;
/**
 * Sets the expand margin to `size` pixels for the specified `Side`.
 * @param margin int
 * @param size float
 */
  setExpandMargin(margin: int, size: float): void;
/**
 * Sets the expand margin to `size` pixels for all sides.
 * @param size float
 */
  setExpandMarginAll(size: float): void;
/**
 * Sets the margin to `size` pixels for the specified `Side`.
 * @param margin int
 * @param size float
 */
  setTextureMargin(margin: int, size: float): void;
/**
 * Sets the margin to `size` pixels for all sides.
 * @param size float
 */
  setTextureMarginAll(size: float): void;
/**
 * Stretch the stylebox's texture. This results in visible distortion unless the texture size matches the stylebox's size perfectly.
 */
  static readonly AXIS_STRETCH_MODE_STRETCH: int;
/**
 * Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system.
 */
  static readonly AXIS_STRETCH_MODE_TILE: int;
/**
 * Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. Unlike `AXIS_STRETCH_MODE_TILE`, the texture may be slightly stretched to make the nine-patch texture tile seamlessly.
 */
  static readonly AXIS_STRETCH_MODE_TILE_FIT: int;
}
