import type { Color, GodotArray, GodotDictionary, Image, RID, Rect2, Resource, Texture, Vector2, float, int } from "../index.d.ts";
/**
 * Texture for 2D and 3D.
 * 
 * A texture works by registering an image in the video hardware, which then can be used in 3D models or 2D `Sprite2D` or GUI `Control`.
 * Textures are often created by loading them from a file. See `@GDScript.load`.
 * `Texture2D` is a base for other resources. It cannot be used directly.
 * 
 * **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations. Larger textures may fail to import.
 */
export class Texture2D extends Texture {
/**
 * Creates a placeholder version of this resource (`PlaceholderTexture2D`).
 * @returns Resource
 */
  createPlaceholder(): Resource;
/**
 * Draws the texture using a `CanvasItem` with the `RenderingServer` API at the specified `position`.
 * @param canvasItem RID
 * @param position Vector2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param transpose boolean (optional, default: false)
 */
  draw(canvasItem: RID, position: Vector2, modulate?: Color, transpose?: boolean): void;
/**
 * Called when the entire `Texture2D` is requested to be drawn over a `CanvasItem`, with the top-left offset specified in `pos`. `modulate` specifies a multiplier for the colors being drawn, while `transpose` specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).
 * 
 * **Note:** This is only used in 2D rendering, not 3D.
 * @param toCanvasItem RID
 * @param pos Vector2
 * @param modulate Color
 * @param transpose boolean
 */
  private draw(toCanvasItem: RID, pos: Vector2, modulate: Color, transpose: boolean): void;
/**
 * Draws the texture using a `CanvasItem` with the `RenderingServer` API.
 * @param canvasItem RID
 * @param rect Rect2
 * @param tile boolean
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param transpose boolean (optional, default: false)
 */
  drawRect(canvasItem: RID, rect: Rect2, tile: boolean, modulate?: Color, transpose?: boolean): void;
/**
 * Called when the `Texture2D` is requested to be drawn onto `CanvasItem`'s specified `rect`. `modulate` specifies a multiplier for the colors being drawn, while `transpose` specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).
 * 
 * **Note:** This is only used in 2D rendering, not 3D.
 * @param toCanvasItem RID
 * @param rect Rect2
 * @param tile boolean
 * @param modulate Color
 * @param transpose boolean
 */
  private drawRect(toCanvasItem: RID, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void;
/**
 * Draws a part of the texture using a `CanvasItem` with the `RenderingServer` API.
 * @param canvasItem RID
 * @param rect Rect2
 * @param srcRect Rect2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param transpose boolean (optional, default: false)
 * @param clipUv boolean (optional, default: true)
 */
  drawRectRegion(canvasItem: RID, rect: Rect2, srcRect: Rect2, modulate?: Color, transpose?: boolean, clipUv?: boolean): void;
/**
 * Called when a part of the `Texture2D` specified by `src_rect`'s coordinates is requested to be drawn onto `CanvasItem`'s specified `rect`. `modulate` specifies a multiplier for the colors being drawn, while `transpose` specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).
 * 
 * **Note:** This is only used in 2D rendering, not 3D.
 * @param toCanvasItem RID
 * @param rect Rect2
 * @param srcRect Rect2
 * @param modulate Color
 * @param transpose boolean
 * @param clipUv boolean
 */
  private drawRectRegion(toCanvasItem: RID, rect: Rect2, srcRect: Rect2, modulate: Color, transpose: boolean, clipUv: boolean): void;
/**
 * Returns the texture height in pixels.
 * @returns int
 */
  getHeight(): int;
/**
 * Called when the `Texture2D`'s height is queried.
 * @returns int
 */
  private getHeight(): int;
/**
 * Returns an `Image` that is a copy of data from this `Texture2D` (a new `Image` is created each time). `Image`s can be accessed and manipulated directly.
 * 
 * **Note:** This will return `null` if this `Texture2D` is invalid.
 * 
 * **Note:** This will fetch the texture data from the GPU, which might cause performance problems when overused. Avoid calling `get_image` every frame, especially on large textures.
 * @returns Image
 */
  getImage(): Image;
/**
 * Returns the texture size in pixels.
 * @returns Vector2
 */
  getSize(): Vector2;
/**
 * Returns the texture width in pixels.
 * @returns int
 */
  getWidth(): int;
/**
 * Called when the `Texture2D`'s width is queried.
 * @returns int
 */
  private getWidth(): int;
/**
 * Returns `true` if this `Texture2D` has an alpha channel.
 * @returns boolean
 */
  hasAlpha(): boolean;
/**
 * Called when the presence of an alpha channel in the `Texture2D` is queried.
 * @returns boolean
 */
  private hasAlpha(): boolean;
/**
 * Called when a pixel's opaque state in the `Texture2D` is queried at the specified `(x, y)` position.
 * @param x int
 * @param y int
 * @returns boolean
 */
  private isPixelOpaque(x: int, y: int): boolean;
}
