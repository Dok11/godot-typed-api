import type { Color, GodotArray, GodotDictionary, Range, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * Texture-based progress bar. Useful for loading screens and life or stamina bars.
 * 
 * TextureProgressBar works like `ProgressBar`, but uses up to 3 textures instead of Godot's `Theme` resource. It can be used to create horizontal, vertical and radial progress bars.
 */
export class TextureProgressBar extends Range {
/**
 * The fill direction. See `FillMode` for possible values.
 */
  fillMode: int;
  mouseFilter: int;
/**
 * If `true`, Godot treats the bar's textures like in `NinePatchRect`. Use the `stretch_margin_*` properties like `stretch_margin_bottom` to set up the nine patch's 3×3 grid. When using a radial `fill_mode`, this setting will only enable stretching for `texture_progress`, while `texture_under` and `texture_over` will be treated like in `NinePatchRect`.
 */
  ninePatchStretch: boolean;
/**
 * Offsets `texture_progress` if `fill_mode` is `FILL_CLOCKWISE`, `FILL_COUNTER_CLOCKWISE`, or `FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE`.
 * 
 * **Note:** The effective radial center always stays within the `texture_progress` bounds. If you need to move it outside the texture's bounds, modify the `texture_progress` to contain additional empty space where needed.
 */
  radialCenterOffset: Vector2;
/**
 * Upper limit for the fill of `texture_progress` if `fill_mode` is `FILL_CLOCKWISE`, `FILL_COUNTER_CLOCKWISE`, or `FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE`. When the node's `value` is equal to its `max_value`, the texture fills up to this angle.
 * See `Range.value`, `Range.max_value`.
 */
  radialFillDegrees: float;
/**
 * Starting angle for the fill of `texture_progress` if `fill_mode` is `FILL_CLOCKWISE`, `FILL_COUNTER_CLOCKWISE`, or `FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE`. When the node's `value` is equal to its `min_value`, the texture doesn't show up at all. When the `value` increases, the texture fills and tends towards `radial_fill_degrees`.
 * 
 * **Note:** `radial_initial_angle` is wrapped between `0` and `360` degrees (inclusive).
 */
  radialInitialAngle: float;
  sizeFlagsVertical: int;
  step: float;
/**
 * The height of the 9-patch's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. Only effective if `nine_patch_stretch` is `true`.
 */
  stretchMarginBottom: int;
/**
 * The width of the 9-patch's left column. Only effective if `nine_patch_stretch` is `true`.
 */
  stretchMarginLeft: int;
/**
 * The width of the 9-patch's right column. Only effective if `nine_patch_stretch` is `true`.
 */
  stretchMarginRight: int;
/**
 * The height of the 9-patch's top row. Only effective if `nine_patch_stretch` is `true`.
 */
  stretchMarginTop: int;
/**
 * `Texture2D` that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of `texture_progress`.
 */
  textureOver: Texture2D;
/**
 * `Texture2D` that clips based on the node's `value` and `fill_mode`. As `value` increased, the texture fills up. It shows entirely when `value` reaches `max_value`. It doesn't show at all if `value` is equal to `min_value`.
 * The `value` property comes from `Range`. See `Range.value`, `Range.min_value`, `Range.max_value`.
 */
  textureProgress: Texture2D;
/**
 * The offset of `texture_progress`. Useful for `texture_over` and `texture_under` with fancy borders, to avoid transparent margins in your progress texture.
 */
  textureProgressOffset: Vector2;
/**
 * `Texture2D` that draws under the progress bar. The bar's background.
 */
  textureUnder: Texture2D;
/**
 * Multiplies the color of the bar's `texture_over` texture. The effect is similar to `CanvasItem.modulate`, except it only affects this specific texture instead of the entire node.
 */
  tintOver: Color;
/**
 * Multiplies the color of the bar's `texture_progress` texture.
 */
  tintProgress: Color;
/**
 * Multiplies the color of the bar's `texture_under` texture.
 */
  tintUnder: Color;
/**
 * Returns the stretch margin with the specified index. See `stretch_margin_bottom` and related properties.
 * @param margin int
 * @returns int
 */
  getStretchMargin(margin: int): int;
/**
 * Sets the stretch margin with the specified index. See `stretch_margin_bottom` and related properties.
 * @param margin int
 * @param value int
 */
  setStretchMargin(margin: int, value: int): void;
/**
 * The `texture_progress` fills from left to right.
 */
  static readonly FILL_LEFT_TO_RIGHT: int;
/**
 * The `texture_progress` fills from right to left.
 */
  static readonly FILL_RIGHT_TO_LEFT: int;
/**
 * The `texture_progress` fills from top to bottom.
 */
  static readonly FILL_TOP_TO_BOTTOM: int;
/**
 * The `texture_progress` fills from bottom to top.
 */
  static readonly FILL_BOTTOM_TO_TOP: int;
/**
 * Turns the node into a radial bar. The `texture_progress` fills clockwise. See `radial_center_offset`, `radial_initial_angle` and `radial_fill_degrees` to control the way the bar fills up.
 */
  static readonly FILL_CLOCKWISE: int;
/**
 * Turns the node into a radial bar. The `texture_progress` fills counterclockwise. See `radial_center_offset`, `radial_initial_angle` and `radial_fill_degrees` to control the way the bar fills up.
 */
  static readonly FILL_COUNTER_CLOCKWISE: int;
/**
 * The `texture_progress` fills from the center, expanding both towards the left and the right.
 */
  static readonly FILL_BILINEAR_LEFT_AND_RIGHT: int;
/**
 * The `texture_progress` fills from the center, expanding both towards the top and the bottom.
 */
  static readonly FILL_BILINEAR_TOP_AND_BOTTOM: int;
/**
 * Turns the node into a radial bar. The `texture_progress` fills radially from the center, expanding both clockwise and counterclockwise. See `radial_center_offset`, `radial_initial_angle` and `radial_fill_degrees` to control the way the bar fills up.
 */
  static readonly FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE: int;
}
