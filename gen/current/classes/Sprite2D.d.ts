import type { GodotArray, GodotDictionary, Node2D, Rect2, Signal, Texture2D, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * General-purpose sprite node.
 * 
 * A node that displays a 2D texture. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation.
 */
export class Sprite2D extends Node2D {
/**
 * If `true`, texture is centered.
 * 
 * **Note:** For games with a pixel art aesthetic, textures may appear deformed when centered. This is caused by their position being between pixels. To prevent this, set this property to `false`, or consider enabling `ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel` and `ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel`.
 */
  centered: boolean;
/**
 * If `true`, texture is flipped horizontally.
 */
  flipH: boolean;
/**
 * If `true`, texture is flipped vertically.
 */
  flipV: boolean;
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
 * The texture's drawing offset.
 */
  offset: Vector2;
/**
 * If `true`, texture is cut from a larger atlas texture. See `region_rect`.
 */
  regionEnabled: boolean;
/**
 * If `true`, the area outside of the `region_rect` is clipped to avoid bleeding of the surrounding texture pixels. `region_enabled` must be `true`.
 */
  regionFilterClipEnabled: boolean;
/**
 * The region of the atlas texture to display. `region_enabled` must be `true`.
 */
  regionRect: Rect2;
/**
 * `Texture2D` object to draw.
 */
  texture: Texture2D;
/**
 * The number of rows in the sprite sheet. When this property is changed, `frame` is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, `frame` is reset to `0`.
 */
  vframes: int;
/**
 * Returns a `Rect2` representing the Sprite2D's boundary in local coordinates.
 * 
 * **Example:** Detect if the Sprite2D was clicked:
 * 
 * 				```gdscript
 * 
 * 				func _input(event):
 * 				    if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
 * 				        if get_rect().has_point(to_local(event.position)):
 * 				            print("A click!")
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Input(InputEvent @event)
 * 				{
 * 				    if (@event is InputEventMouseButton inputEventMouse)
 * 				    {
 * 				        if (inputEventMouse.Pressed && inputEventMouse.ButtonIndex == MouseButton.Left)
 * 				        {
 * 				            if (GetRect().HasPoint(ToLocal(inputEventMouse.Position)))
 * 				            {
 * 				                GD.Print("A click!");
 * 				            }
 * 				        }
 * 				    }
 * 				}
 * 				
 * 
 * ```
 * 
 * @returns Rect2
 */
  getRect(): Rect2;
/**
 * Returns `true`, if the pixel at the given position is opaque and `false` in other case. The position is in local coordinates.
 * 
 * **Note:** It also returns `false`, if the sprite's texture is `null` or if the given position is invalid.
 * @param pos Vector2
 * @returns boolean
 */
  isPixelOpaque(pos: Vector2): boolean;
/**
 * Emitted when the `frame` changes.
 */
  frameChanged: Signal<[]>;
/**
 * Emitted when the `texture` changes.
 */
  textureChanged: Signal<[]>;
}
