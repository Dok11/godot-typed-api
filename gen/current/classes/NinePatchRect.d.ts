import type { Control, GodotArray, GodotDictionary, Rect2, Signal, Texture2D, float, int } from "../index.d.ts";
/**
 * A control that displays a texture by keeping its corners intact, but tiling its edges and center.
 * 
 * Also known as 9-slice panels, `NinePatchRect` produces clean panels of any size based on a small texture. To do so, it splits the texture in a 3×3 grid. When you scale the node, it tiles the texture's edges horizontally or vertically, tiles the center on both axes, and leaves the corners unchanged.
 */
export class NinePatchRect extends Control {
/**
 * The stretch mode to use for horizontal stretching/tiling. See `NinePatchRect.AxisStretchMode` for possible values.
 */
  axisStretchHorizontal: int;
/**
 * The stretch mode to use for vertical stretching/tiling. See `NinePatchRect.AxisStretchMode` for possible values.
 */
  axisStretchVertical: int;
/**
 * If `true`, draw the panel's center. Else, only draw the 9-slice's borders.
 */
  drawCenter: boolean;
  mouseFilter: int;
/**
 * The height of the 9-slice's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.
 */
  patchMarginBottom: int;
/**
 * The width of the 9-slice's left column. A margin of 16 means the 9-slice's left corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.
 */
  patchMarginLeft: int;
/**
 * The width of the 9-slice's right column. A margin of 16 means the 9-slice's right corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.
 */
  patchMarginRight: int;
/**
 * The height of the 9-slice's top row. A margin of 16 means the 9-slice's top corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.
 */
  patchMarginTop: int;
/**
 * Rectangular region of the texture to sample from. If you're working with an atlas, use this property to define the area the 9-slice should use. All other properties are relative to this one. If the rect is empty, NinePatchRect will use the whole texture.
 */
  regionRect: Rect2;
/**
 * The node's texture resource.
 */
  texture: Texture2D;
/**
 * Returns the size of the margin on the specified `Side`.
 * @param margin int
 * @returns int
 */
  getPatchMargin(margin: int): int;
/**
 * Sets the size of the margin on the specified `Side` to `value` pixels.
 * @param margin int
 * @param value int
 */
  setPatchMargin(margin: int, value: int): void;
/**
 * Emitted when the node's texture changes.
 */
  textureChanged: Signal<[]>;
/**
 * Stretches the center texture across the NinePatchRect. This may cause the texture to be distorted.
 */
  static readonly AXIS_STRETCH_MODE_STRETCH: int;
/**
 * Repeats the center texture across the NinePatchRect. This won't cause any visible distortion. The texture must be seamless for this to work without displaying artifacts between edges.
 */
  static readonly AXIS_STRETCH_MODE_TILE: int;
/**
 * Repeats the center texture across the NinePatchRect, but will also stretch the texture to make sure each tile is visible in full. This may cause the texture to be distorted, but less than `AXIS_STRETCH_MODE_STRETCH`. The texture must be seamless for this to work without displaying artifacts between edges.
 */
  static readonly AXIS_STRETCH_MODE_TILE_FIT: int;
}
