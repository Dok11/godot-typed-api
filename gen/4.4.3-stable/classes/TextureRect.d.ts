import type { Control, GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * A control that displays a texture.
 * 
 * A control that displays a texture, for example an icon inside a GUI. The texture's placement can be controlled with the `stretch_mode` property. It can scale, tile, or stay centered inside its bounding rectangle.
 */
export class TextureRect extends Control {
/**
 * Defines how minimum size is determined based on the texture's size. See `ExpandMode` for options.
 */
  expandMode: int;
/**
 * If `true`, texture is flipped horizontally.
 */
  flipH: boolean;
/**
 * If `true`, texture is flipped vertically.
 */
  flipV: boolean;
  mouseFilter: int;
/**
 * Controls the texture's behavior when resizing the node's bounding rectangle. See `StretchMode`.
 */
  stretchMode: int;
/**
 * The node's `Texture2D` resource.
 */
  texture: Texture2D;
/**
 * The minimum size will be equal to texture size, i.e. `TextureRect` can't be smaller than the texture.
 */
  static readonly EXPAND_KEEP_SIZE: int;
/**
 * The size of the texture won't be considered for minimum size calculation, so the `TextureRect` can be shrunk down past the texture size.
 */
  static readonly EXPAND_IGNORE_SIZE: int;
/**
 * The height of the texture will be ignored. Minimum width will be equal to the current height. Useful for horizontal layouts, e.g. inside `HBoxContainer`.
 */
  static readonly EXPAND_FIT_WIDTH: int;
/**
 * Same as `EXPAND_FIT_WIDTH`, but keeps texture's aspect ratio.
 */
  static readonly EXPAND_FIT_WIDTH_PROPORTIONAL: int;
/**
 * The width of the texture will be ignored. Minimum height will be equal to the current width. Useful for vertical layouts, e.g. inside `VBoxContainer`.
 */
  static readonly EXPAND_FIT_HEIGHT: int;
/**
 * Same as `EXPAND_FIT_HEIGHT`, but keeps texture's aspect ratio.
 */
  static readonly EXPAND_FIT_HEIGHT_PROPORTIONAL: int;
/**
 * Scale to fit the node's bounding rectangle.
 */
  static readonly STRETCH_SCALE: int;
/**
 * Tile inside the node's bounding rectangle.
 */
  static readonly STRETCH_TILE: int;
/**
 * The texture keeps its original size and stays in the bounding rectangle's top-left corner.
 */
  static readonly STRETCH_KEEP: int;
/**
 * The texture keeps its original size and stays centered in the node's bounding rectangle.
 */
  static readonly STRETCH_KEEP_CENTERED: int;
/**
 * Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio.
 */
  static readonly STRETCH_KEEP_ASPECT: int;
/**
 * Scale the texture to fit the node's bounding rectangle, center it and maintain its aspect ratio.
 */
  static readonly STRETCH_KEEP_ASPECT_CENTERED: int;
/**
 * Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits.
 */
  static readonly STRETCH_KEEP_ASPECT_COVERED: int;
}
