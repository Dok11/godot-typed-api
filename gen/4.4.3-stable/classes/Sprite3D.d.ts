import type { GodotArray, GodotDictionary, Rect2, Signal, SpriteBase3D, Texture2D, Vector2i, float, int } from "../index.d.ts";
/**
 * 2D sprite node in a 3D world.
 * 
 * A node that displays a 2D texture in a 3D environment. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation. See also `SpriteBase3D` where properties such as the billboard mode are defined.
 */
export class Sprite3D extends SpriteBase3D {
/**
 * Current frame to display from sprite sheet. `hframes` or `vframes` must be greater than 1. This property is automatically adjusted when `hframes` or `vframes` are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`.
 */
  frame: int;
/**
 * Coordinates of the frame to display from sprite sheet. This is as an alias for the `frame` property. `hframes` or `vframes` must be greater than 1.
 */
  frameCoords: Vector2i;
/**
 * The number of columns in the sprite sheet. When this property is changed, `frame` is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, `frame` is reset to `0`.
 */
  hframes: int;
/**
 * If `true`, the sprite will use `region_rect` and display only the specified part of its texture.
 */
  regionEnabled: boolean;
/**
 * The region of the atlas texture to display. `region_enabled` must be `true`.
 */
  regionRect: Rect2;
/**
 * `Texture2D` object to draw. If `GeometryInstance3D.material_override` is used, this will be overridden. The size information is still used.
 */
  texture: Texture2D;
/**
 * The number of rows in the sprite sheet. When this property is changed, `frame` is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, `frame` is reset to `0`.
 */
  vframes: int;
/**
 * Emitted when the `frame` changes.
 */
  frameChanged: Signal<[]>;
/**
 * Emitted when the `texture` changes.
 */
  textureChanged: Signal<[]>;
}
