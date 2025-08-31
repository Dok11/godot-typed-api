import type { Color, GeometryInstance3D, GodotArray, GodotDictionary, Rect2, TriangleMesh, Vector2, float, int } from "../index.d.ts";
/**
 * 2D sprite node in 3D environment.
 * 
 * A node that displays 2D texture information in a 3D environment. See also `Sprite3D` where many other properties are defined.
 */
export class SpriteBase3D extends GeometryInstance3D {
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
 * The direction in which the front of the texture faces.
 */
  axis: int;
/**
 * The billboard mode to use for the sprite. See `BaseMaterial3D.BillboardMode` for possible values.
 * 
 * **Note:** When billboarding is enabled and the material also casts shadows, billboards will face **the** camera in the scene when rendering shadows. In scenes with multiple cameras, the intended shadow cannot be determined and this will result in undefined behavior. See GitHub Pull Request #72638 (https://github.com/godotengine/godot/pull/72638) for details.
 */
  billboard: int;
/**
 * If `true`, texture will be centered.
 */
  centered: boolean;
/**
 * If `true`, texture can be seen from the back as well, if `false`, it is invisible when looking at it from behind.
 */
  doubleSided: boolean;
/**
 * If `true`, the label is rendered at the same size regardless of distance.
 */
  fixedSize: boolean;
/**
 * If `true`, texture is flipped horizontally.
 */
  flipH: boolean;
/**
 * If `true`, texture is flipped vertically.
 */
  flipV: boolean;
/**
 * A color value used to *multiply* the texture's colors. Can be used for mood-coloring or to simulate the color of ambient light.
 * 
 * **Note:** Unlike `CanvasItem.modulate` for 2D, colors with values above `1.0` (overbright) are not supported.
 * 
 * **Note:** If a `GeometryInstance3D.material_override` is defined on the `SpriteBase3D`, the material override must be configured to take vertex colors into account for albedo. Otherwise, the color defined in `modulate` will be ignored. For a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` must be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function.
 */
  modulate: Color;
/**
 * If `true`, depth testing is disabled and the object will be drawn in render order.
 */
  noDepthTest: boolean;
/**
 * The texture's drawing offset.
 */
  offset: Vector2;
/**
 * The size of one pixel's width on the sprite to scale it in 3D.
 */
  pixelSize: float;
/**
 * Sets the render priority for the sprite. Higher priority objects will be sorted in front of lower priority objects.
 * 
 * **Note:** This only applies if `alpha_cut` is set to `ALPHA_CUT_DISABLED` (default value).
 * 
 * **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
 */
  renderPriority: int;
/**
 * If `true`, the `Light3D` in the `Environment` has effects on the sprite.
 */
  shaded: boolean;
/**
 * Filter flags for the texture. See `BaseMaterial3D.TextureFilter` for options.
 * 
 * **Note:** Linear filtering may cause artifacts around the edges, which are especially noticeable on opaque textures. To prevent this, use textures with transparent or identical colors around the edges.
 */
  textureFilter: int;
/**
 * If `true`, the texture's transparency and the opacity are used to make those parts of the sprite invisible.
 */
  transparent: boolean;
/**
 * Returns a `TriangleMesh` with the sprite's vertices following its current configuration (such as its `axis` and `pixel_size`).
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
 * Returns the rectangle representing this sprite.
 * @returns Rect2
 */
  getItemRect(): Rect2;
/**
 * If `true`, the specified flag will be enabled. See `SpriteBase3D.DrawFlags` for a list of flags.
 * @param flag int
 * @param enabled boolean
 */
  setDrawFlag(flag: int, enabled: boolean): void;
/**
 * If set, the texture's transparency and the opacity are used to make those parts of the sprite invisible.
 */
  static readonly FLAG_TRANSPARENT: int;
/**
 * If set, lights in the environment affect the sprite.
 */
  static readonly FLAG_SHADED: int;
/**
 * If set, texture can be seen from the back as well. If not, the texture is invisible when looking at it from behind.
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
 * This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping.
 */
  static readonly ALPHA_CUT_DISABLED: int;
/**
 * This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see `ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa`). On the bright side, this mode doesn't suffer from transparency sorting issues when multiple transparent materials are overlapping. This mode is also known as *alpha testing* or *1-bit transparency*.
 */
  static readonly ALPHA_CUT_DISCARD: int;
/**
 * This mode draws fully opaque pixels in the depth prepass. This is slower than `ALPHA_CUT_DISABLED` or `ALPHA_CUT_DISCARD`, but it allows displaying translucent areas and smooth edges while using proper sorting.
 */
  static readonly ALPHA_CUT_OPAQUE_PREPASS: int;
/**
 * This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque.
 */
  static readonly ALPHA_CUT_HASH: int;
}
