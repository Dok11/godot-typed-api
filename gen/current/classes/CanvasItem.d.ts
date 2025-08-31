import type { CanvasLayer, Color, Font, GodotArray, GodotDictionary, InputEvent, Material, Mesh, MultiMesh, Node, PackedColorArray, PackedVector2Array, RID, Rect2, Signal, StringName, StyleBox, Texture2D, Transform2D, Variant, Vector2, World2D, float, int } from "../index.d.ts";
/**
 * Abstract base class for everything in 2D space.
 * 
 * Abstract base class for everything in 2D space. Canvas items are laid out in a tree; children inherit and extend their parent's transform. `CanvasItem` is extended by `Control` for GUI-related nodes, and by `Node2D` for 2D game objects.
 * Any `CanvasItem` can draw. For this, `queue_redraw` is called by the engine, then `NOTIFICATION_DRAW` will be received on idle time to request a redraw. Because of this, canvas items don't need to be redrawn on every frame, improving the performance significantly. Several functions for drawing on the `CanvasItem` are provided (see `draw_*` functions). However, they can only be used inside `_draw`, its corresponding `Object._notification` or methods connected to the `draw` signal.
 * Canvas items are drawn in tree order on their canvas layer. By default, children are on top of their parents, so a root `CanvasItem` will be drawn behind everything. This behavior can be changed on a per-item basis.
 * A `CanvasItem` can be hidden, which will also hide its children. By adjusting various other properties of a `CanvasItem`, you can also modulate its color (via `modulate` or `self_modulate`), change its Z-index, blend mode, and more.
 * Note that properties like transform, modulation, and visibility are only propagated to *direct* `CanvasItem` child nodes. If there is a non-`CanvasItem` node in between, like `Node` or `AnimationPlayer`, the `CanvasItem` nodes below will have an independent position and `modulate` chain. See also `top_level`.
 */
export class CanvasItem extends Node {
/**
 * Allows the current node to clip child nodes, essentially acting as a mask.
 * 
 * **Note:** Clipping nodes cannot be nested or placed within `CanvasGroup`s. If an ancestor of this node clips its children or is a `CanvasGroup`, then this node's clip mode should be set to `CLIP_CHILDREN_DISABLED` to avoid unexpected behavior.
 */
  clipChildren: int;
/**
 * The rendering layers in which this `CanvasItem` responds to `Light2D` nodes.
 */
  lightMask: int;
/**
 * The material applied to this `CanvasItem`.
 */
  material: Material;
/**
 * The color applied to this `CanvasItem`. This property does affect child `CanvasItem`s, unlike `self_modulate` which only affects the node itself.
 */
  modulate: Color;
/**
 * The color applied to this `CanvasItem`. This property does **not** affect child `CanvasItem`s, unlike `modulate` which affects both the node itself and its children.
 * 
 * **Note:** Internal children (e.g. sliders in `ColorPicker` or tab bar in `TabContainer`) are also not affected by this property (see `include_internal` parameter of `Node.get_child` and other similar methods).
 */
  selfModulate: Color;
/**
 * If `true`, the object draws behind its parent.
 */
  showBehindParent: boolean;
/**
 * The texture filtering mode to use on this `CanvasItem`.
 */
  textureFilter: int;
/**
 * The texture repeating mode to use on this `CanvasItem`.
 */
  textureRepeat: int;
/**
 * If `true`, this `CanvasItem` will *not* inherit its transform from parent `CanvasItem`s. Its draw order will also be changed to make it draw on top of other `CanvasItem`s that do not have `top_level` set to `true`. The `CanvasItem` will effectively act as if it was placed as a child of a bare `Node`.
 */
  topLevel: boolean;
/**
 * If `true`, the parent `CanvasItem`'s `material` property is used as this one's material.
 */
  useParentMaterial: boolean;
/**
 * The rendering layer in which this `CanvasItem` is rendered by `Viewport` nodes. A `Viewport` will render a `CanvasItem` if it and all its parents share a layer with the `Viewport`'s canvas cull mask.
 */
  visibilityLayer: int;
/**
 * If `true`, this `CanvasItem` may be drawn. Whether this `CanvasItem` is actually drawn depends on the visibility of all of its `CanvasItem` ancestors. In other words: this `CanvasItem` will be drawn when `is_visible_in_tree` returns `true` and all `CanvasItem` ancestors share at least one `visibility_layer` with this `CanvasItem`.
 * 
 * **Note:** For controls that inherit `Popup`, the correct way to make them visible is to call one of the multiple `popup*()` functions instead.
 */
  visible: boolean;
/**
 * If `true`, this and child `CanvasItem` nodes with a higher Y position are rendered in front of nodes with a lower Y position. If `false`, this and child `CanvasItem` nodes are rendered normally in scene tree order.
 * With Y-sorting enabled on a parent node ('A') but disabled on a child node ('B'), the child node ('B') is sorted but its children ('C1', 'C2', etc.) render together on the same Y position as the child node ('B'). This allows you to organize the render order of a scene without changing the scene tree.
 * Nodes sort relative to each other only if they are on the same `z_index`.
 */
  ySortEnabled: boolean;
/**
 * If `true`, the node's Z index is relative to its parent's Z index. If this node's Z index is 2 and its parent's effective Z index is 3, then this node's effective Z index will be 2 + 3 = 5.
 */
  zAsRelative: boolean;
/**
 * Controls the order in which the nodes render. A node with a higher Z index will display in front of others. Must be between `RenderingServer.CANVAS_ITEM_Z_MIN` and `RenderingServer.CANVAS_ITEM_Z_MAX` (inclusive).
 * 
 * **Note:** Changing the Z index of a `Control` only affects the drawing order, not the order in which input events are handled. This can be useful to implement certain UI animations, e.g. a menu where hovered items are scaled and should overlap others.
 */
  zIndex: int;
/**
 * Called when `CanvasItem` has been requested to redraw (after `queue_redraw` is called, either manually or by the engine).
 * Corresponds to the `NOTIFICATION_DRAW` notification in `Object._notification`.
 */
  private draw(): void;
/**
 * Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly.
 * @param animationLength float
 * @param sliceBegin float
 * @param sliceEnd float
 * @param offset float (optional, default: 0.0)
 */
  drawAnimationSlice(animationLength: float, sliceBegin: float, sliceEnd: float, offset?: float): void;
/**
 * Draws an unfilled arc between the given angles with a uniform `color` and `width` and optional antialiasing (supported only for positive `width`). The larger the value of `point_count`, the smoother the curve. See also `draw_circle`.
 * If `width` is negative, it will be ignored and the arc will be drawn using `RenderingServer.PRIMITIVE_LINE_STRIP`. This means that when the CanvasItem is scaled, the arc will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * The arc is drawn from `start_angle` towards the value of `end_angle` so in clockwise direction if `start_angle < end_angle` and counter-clockwise otherwise. Passing the same angles but in reversed order will produce the same arc. If absolute difference of `start_angle` and `end_angle` is greater than `@GDScript.TAU` radians, then a full circle arc is drawn (i.e. arc will not overlap itself).
 * @param center Vector2
 * @param radius float
 * @param startAngle float
 * @param endAngle float
 * @param pointCount int
 * @param color Color
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawArc(center: Vector2, radius: float, startAngle: float, endAngle: float, pointCount: int, color: Color, width?: float, antialiased?: boolean): void;
/**
 * Draws a string first character using a custom font.
 * @param font Font
 * @param pos Vector2
 * @param char string
 * @param fontSize int (optional, default: 16)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  drawChar(font: Font, pos: Vector2, char: string, fontSize?: int, modulate?: Color): void;
/**
 * Draws a string first character outline using a custom font.
 * @param font Font
 * @param pos Vector2
 * @param char string
 * @param fontSize int (optional, default: 16)
 * @param size int (optional, default: -1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  drawCharOutline(font: Font, pos: Vector2, char: string, fontSize?: int, size?: int, modulate?: Color): void;
/**
 * Draws a circle. See also `draw_arc`, `draw_polyline`, and `draw_polygon`.
 * If `filled` is `true`, the circle will be filled with the `color` specified. If `filled` is `false`, the circle will be drawn as a stroke with the `color` and `width` specified.
 * If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * If `antialiased` is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.
 * 
 * **Note:** `width` is only effective if `filled` is `false`.
 * @param position Vector2
 * @param radius float
 * @param color Color
 * @param filled boolean (optional, default: true)
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawCircle(position: Vector2, radius: float, color: Color, filled?: boolean, width?: float, antialiased?: boolean): void;
/**
 * Draws a colored polygon of any number of points, convex or concave. Unlike `draw_polygon`, a single color must be specified for the whole polygon.
 * 
 * **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with `Geometry2D.triangulate_polygon` and using `draw_mesh`, `draw_multimesh`, or `RenderingServer.canvas_item_add_triangle_array`.
 * @param points PackedVector2Array
 * @param color Color
 * @param uvs PackedVector2Array (optional, default: PackedVector2Array())
 * @param texture Texture2D (optional, default: null)
 */
  drawColoredPolygon(points: PackedVector2Array, color: Color, uvs?: PackedVector2Array, texture?: Texture2D): void;
/**
 * Draws a dashed line from a 2D point to another, with a given color and width. See also `draw_line`, `draw_multiline`, and `draw_polyline`.
 * If `width` is negative, then a two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the line parts will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * `dash` is the length of each dash in pixels, with the gap between each dash being the same length. If `aligned` is `true`, the length of the first and last dashes may be shortened or lengthened to allow the line to begin and end at the precise points defined by `from` and `to`. Both ends are always symmetrical when `aligned` is `true`. If `aligned` is `false`, all dashes will have the same length, but the line may appear incomplete at the end due to the dash length not dividing evenly into the line length. Only full dashes are drawn when `aligned` is `false`.
 * If `antialiased` is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.
 * 
 * **Note:** `antialiased` is only effective if `width` is greater than `0.0`.
 * @param from_ Vector2
 * @param to Vector2
 * @param color Color
 * @param width float (optional, default: -1.0)
 * @param dash float (optional, default: 2.0)
 * @param aligned boolean (optional, default: true)
 * @param antialiased boolean (optional, default: false)
 */
  drawDashedLine(from_: Vector2, to: Vector2, color: Color, width?: float, dash?: float, aligned?: boolean, antialiased?: boolean): void;
/**
 * After submitting all animations slices via `draw_animation_slice`, this function can be used to revert drawing to its default state (all subsequent drawing commands will be visible). If you don't care about this particular use case, usage of this function after submitting the slices is not required.
 */
  drawEndAnimation(): void;
/**
 * Draws a textured rectangle region of the font texture with LCD subpixel anti-aliasing at a given position, optionally modulated by a color.
 * Texture is drawn using the following blend operation, blend mode of the `CanvasItemMaterial` is ignored:
 * 
 * 				```gdscript
 * 
 * 				dst.r = texture.r * modulate.r * modulate.a + dst.r * (1.0 - texture.r * modulate.a);
 * 				dst.g = texture.g * modulate.g * modulate.a + dst.g * (1.0 - texture.g * modulate.a);
 * 				dst.b = texture.b * modulate.b * modulate.a + dst.b * (1.0 - texture.b * modulate.a);
 * 				dst.a = modulate.a + dst.a * (1.0 - modulate.a);
 * 				
 * 
 * ```
 * @param texture Texture2D
 * @param rect Rect2
 * @param srcRect Rect2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  drawLcdTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate?: Color): void;
/**
 * Draws a line from a 2D point to another, with a given color and width. It can be optionally antialiased. See also `draw_dashed_line`, `draw_multiline`, and `draw_polyline`.
 * If `width` is negative, then a two-point primitive will be drawn instead of a four-point one. This means that when the CanvasItem is scaled, the line will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * @param from_ Vector2
 * @param to Vector2
 * @param color Color
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawLine(from_: Vector2, to: Vector2, color: Color, width?: float, antialiased?: boolean): void;
/**
 * Draws a `Mesh` in 2D, using the provided texture. See `MeshInstance2D` for related documentation.
 * @param mesh Mesh
 * @param texture Texture2D
 * @param transform Transform2D (optional, default: Transform2D(1, 0, 0, 1, 0, 0))
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  drawMesh(mesh: Mesh, texture: Texture2D, transform?: Transform2D, modulate?: Color): void;
/**
 * Draws a textured rectangle region of the multi-channel signed distance field texture at a given position, optionally modulated by a color. See `FontFile.multichannel_signed_distance_field` for more information and caveats about MSDF font rendering.
 * If `outline` is positive, each alpha channel value of pixel in region is set to maximum value of true distance in the `outline` radius.
 * Value of the `pixel_range` should the same that was used during distance field texture generation.
 * @param texture Texture2D
 * @param rect Rect2
 * @param srcRect Rect2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param outline float (optional, default: 0.0)
 * @param pixelRange float (optional, default: 4.0)
 * @param scale float (optional, default: 1.0)
 */
  drawMsdfTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate?: Color, outline?: float, pixelRange?: float, scale?: float): void;
/**
 * Draws multiple disconnected lines with a uniform `width` and `color`. Each line is defined by two consecutive points from `points` array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints. When drawing large amounts of lines, this is faster than using individual `draw_line` calls. To draw interconnected lines, use `draw_polyline` instead.
 * If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * 
 * **Note:** `antialiased` is only effective if `width` is greater than `0.0`.
 * @param points PackedVector2Array
 * @param color Color
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawMultiline(points: PackedVector2Array, color: Color, width?: float, antialiased?: boolean): void;
/**
 * Draws multiple disconnected lines with a uniform `width` and segment-by-segment coloring. Each segment is defined by two consecutive points from `points` array and a corresponding color from `colors` array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints and has `colors[i]` color. When drawing large amounts of lines, this is faster than using individual `draw_line` calls. To draw interconnected lines, use `draw_polyline_colors` instead.
 * If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * 
 * **Note:** `antialiased` is only effective if `width` is greater than `0.0`.
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawMultilineColors(points: PackedVector2Array, colors: PackedColorArray, width?: float, antialiased?: boolean): void;
/**
 * Breaks `text` into lines and draws it using the specified `font` at the `pos` (top-left corner). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.
 * @param font Font
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param maxLines int (optional, default: -1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param brkFlags int (optional, default: 3)
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawMultilineString(font: Font, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, maxLines?: int, modulate?: Color, brkFlags?: int, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Breaks `text` to the lines and draws text outline using the specified `font` at the `pos` (top-left corner). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.
 * @param font Font
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param maxLines int (optional, default: -1)
 * @param size int (optional, default: 1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param brkFlags int (optional, default: 3)
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawMultilineStringOutline(font: Font, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, maxLines?: int, size?: int, modulate?: Color, brkFlags?: int, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Draws a `MultiMesh` in 2D with the provided texture. See `MultiMeshInstance2D` for related documentation.
 * @param multimesh MultiMesh
 * @param texture Texture2D
 */
  drawMultimesh(multimesh: MultiMesh, texture: Texture2D): void;
/**
 * Draws a solid polygon of any number of points, convex or concave. Unlike `draw_colored_polygon`, each point's color can be changed individually. See also `draw_polyline` and `draw_polyline_colors`. If you need more flexibility (such as being able to use bones), use `RenderingServer.canvas_item_add_triangle_array` instead.
 * 
 * **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with `Geometry2D.triangulate_polygon` and using `draw_mesh`, `draw_multimesh`, or `RenderingServer.canvas_item_add_triangle_array`.
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param uvs PackedVector2Array (optional, default: PackedVector2Array())
 * @param texture Texture2D (optional, default: null)
 */
  drawPolygon(points: PackedVector2Array, colors: PackedColorArray, uvs?: PackedVector2Array, texture?: Texture2D): void;
/**
 * Draws interconnected line segments with a uniform `color` and `width` and optional antialiasing (supported only for positive `width`). When drawing large amounts of lines, this is faster than using individual `draw_line` calls. To draw disconnected lines, use `draw_multiline` instead. See also `draw_polygon`.
 * If `width` is negative, it will be ignored and the polyline will be drawn using `RenderingServer.PRIMITIVE_LINE_STRIP`. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * @param points PackedVector2Array
 * @param color Color
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawPolyline(points: PackedVector2Array, color: Color, width?: float, antialiased?: boolean): void;
/**
 * Draws interconnected line segments with a uniform `width`, point-by-point coloring, and optional antialiasing (supported only for positive `width`). Colors assigned to line points match by index between `points` and `colors`, i.e. each line segment is filled with a gradient between the colors of the endpoints. When drawing large amounts of lines, this is faster than using individual `draw_line` calls. To draw disconnected lines, use `draw_multiline_colors` instead. See also `draw_polygon`.
 * If `width` is negative, it will be ignored and the polyline will be drawn using `RenderingServer.PRIMITIVE_LINE_STRIP`. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawPolylineColors(points: PackedVector2Array, colors: PackedColorArray, width?: float, antialiased?: boolean): void;
/**
 * Draws a custom primitive. 1 point for a point, 2 points for a line, 3 points for a triangle, and 4 points for a quad. If 0 points or more than 4 points are specified, nothing will be drawn and an error message will be printed. See also `draw_line`, `draw_polyline`, `draw_polygon`, and `draw_rect`.
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param uvs PackedVector2Array
 * @param texture Texture2D (optional, default: null)
 */
  drawPrimitive(points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture?: Texture2D): void;
/**
 * Draws a rectangle. If `filled` is `true`, the rectangle will be filled with the `color` specified. If `filled` is `false`, the rectangle will be drawn as a stroke with the `color` and `width` specified. See also `draw_texture_rect`.
 * If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.
 * If `antialiased` is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.
 * 
 * **Note:** `width` is only effective if `filled` is `false`.
 * 
 * **Note:** Unfilled rectangles drawn with a negative `width` may not display perfectly. For example, corners may be missing or brighter due to overlapping lines (for a translucent `color`).
 * @param rect Rect2
 * @param color Color
 * @param filled boolean (optional, default: true)
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  drawRect(rect: Rect2, color: Color, filled?: boolean, width?: float, antialiased?: boolean): void;
/**
 * Sets a custom transform for drawing via components. Anything drawn afterwards will be transformed by this.
 * 
 * **Note:** `FontFile.oversampling` does *not* take `scale` into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling `ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field` (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, `SystemFont.multichannel_signed_distance_field` can be enabled in the inspector.
 * @param position Vector2
 * @param rotation float (optional, default: 0.0)
 * @param scale Vector2 (optional, default: Vector2(1, 1))
 */
  drawSetTransform(position: Vector2, rotation?: float, scale?: Vector2): void;
/**
 * Sets a custom transform for drawing via matrix. Anything drawn afterwards will be transformed by this.
 * @param xform Transform2D
 */
  drawSetTransformMatrix(xform: Transform2D): void;
/**
 * Draws `text` using the specified `font` at the `pos` (bottom-left corner using the baseline of the font). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.
 * 
 * **Example:** Draw "Hello world", using the project's default font:
 * 
 * 				```gdscript
 * 
 * 				# If using this method in a script that redraws constantly, move the
 * 				# `default_font` declaration to a member variable assigned in `_ready()`
 * 				# so the Control is only created once.
 * 				var default_font = ThemeDB.fallback_font
 * 				var default_font_size = ThemeDB.fallback_font_size
 * 				draw_string(default_font, Vector2(64, 64), "Hello world", HORIZONTAL_ALIGNMENT_LEFT, -1, default_font_size)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				// If using this method in a script that redraws constantly, move the
 * 				// `default_font` declaration to a member variable assigned in `_Ready()`
 * 				// so the Control is only created once.
 * 				Font defaultFont = ThemeDB.FallbackFont;
 * 				int defaultFontSize = ThemeDB.FallbackFontSize;
 * 				DrawString(defaultFont, new Vector2(64, 64), "Hello world", HORIZONTAL_ALIGNMENT_LEFT, -1, defaultFontSize);
 * 				
 * 
 * ```
 * 
 * See also `Font.draw_string`.
 * @param font Font
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawString(font: Font, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, modulate?: Color, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Draws `text` outline using the specified `font` at the `pos` (bottom-left corner using the baseline of the font). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.
 * @param font Font
 * @param pos Vector2
 * @param text string
 * @param alignment int (optional, default: 0)
 * @param width float (optional, default: -1)
 * @param fontSize int (optional, default: 16)
 * @param size int (optional, default: 1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param justificationFlags int (optional, default: 3)
 * @param direction int (optional, default: 0)
 * @param orientation int (optional, default: 0)
 */
  drawStringOutline(font: Font, pos: Vector2, text: string, alignment?: int, width?: float, fontSize?: int, size?: int, modulate?: Color, justificationFlags?: int, direction?: int, orientation?: int): void;
/**
 * Draws a styled rectangle.
 * @param styleBox StyleBox
 * @param rect Rect2
 */
  drawStyleBox(styleBox: StyleBox, rect: Rect2): void;
/**
 * Draws a texture at a given position.
 * @param texture Texture2D
 * @param position Vector2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  drawTexture(texture: Texture2D, position: Vector2, modulate?: Color): void;
/**
 * Draws a textured rectangle at a given position, optionally modulated by a color. If `transpose` is `true`, the texture will have its X and Y coordinates swapped. See also `draw_rect` and `draw_texture_rect_region`.
 * @param texture Texture2D
 * @param rect Rect2
 * @param tile boolean
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param transpose boolean (optional, default: false)
 */
  drawTextureRect(texture: Texture2D, rect: Rect2, tile: boolean, modulate?: Color, transpose?: boolean): void;
/**
 * Draws a textured rectangle from a texture's region (specified by `src_rect`) at a given position, optionally modulated by a color. If `transpose` is `true`, the texture will have its X and Y coordinates swapped. See also `draw_texture_rect`.
 * @param texture Texture2D
 * @param rect Rect2
 * @param srcRect Rect2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param transpose boolean (optional, default: false)
 * @param clipUv boolean (optional, default: true)
 */
  drawTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate?: Color, transpose?: boolean, clipUv?: boolean): void;
/**
 * Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations.
 */
  forceUpdateTransform(): void;
/**
 * Returns the `RID` of the `World2D` canvas where this item is in.
 * @returns RID
 */
  getCanvas(): RID;
/**
 * Returns the canvas item RID used by `RenderingServer` for this item.
 * @returns RID
 */
  getCanvasItem(): RID;
/**
 * Returns the `CanvasLayer` that contains this node, or `null` if the node is not in any `CanvasLayer`.
 * @returns CanvasLayer
 */
  getCanvasLayerNode(): CanvasLayer;
/**
 * Returns the transform from the coordinate system of the canvas, this item is in, to the `Viewport`s coordinate system.
 * @returns Transform2D
 */
  getCanvasTransform(): Transform2D;
/**
 * Returns the mouse's position in the `CanvasLayer` that this `CanvasItem` is in using the coordinate system of the `CanvasLayer`.
 * 
 * **Note:** For screen-space coordinates (e.g. when using a non-embedded `Popup`), you can use `DisplayServer.mouse_get_position`.
 * @returns Vector2
 */
  getGlobalMousePosition(): Vector2;
/**
 * Returns the global transform matrix of this item, i.e. the combined transform up to the topmost `CanvasItem` node. The topmost item is a `CanvasItem` that either has no parent, has non-`CanvasItem` parent or it has `top_level` enabled.
 * @returns Transform2D
 */
  getGlobalTransform(): Transform2D;
/**
 * Returns the transform from the local coordinate system of this `CanvasItem` to the `Viewport`s coordinate system.
 * @returns Transform2D
 */
  getGlobalTransformWithCanvas(): Transform2D;
/**
 * Get the value of a shader parameter as set on this instance.
 * @param name StringName
 * @returns Variant
 */
  getInstanceShaderParameter(name: StringName): Variant;
/**
 * Returns the mouse's position in this `CanvasItem` using the local coordinate system of this `CanvasItem`.
 * @returns Vector2
 */
  getLocalMousePosition(): Vector2;
/**
 * Returns the transform of this `CanvasItem` in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.
 * Equals to `get_global_transform` if the window is embedded (see `Viewport.gui_embed_subwindows`).
 * @returns Transform2D
 */
  getScreenTransform(): Transform2D;
/**
 * Returns the transform matrix of this item.
 * @returns Transform2D
 */
  getTransform(): Transform2D;
/**
 * Returns the viewport's boundaries as a `Rect2`.
 * @returns Rect2
 */
  getViewportRect(): Rect2;
/**
 * Returns the transform from the coordinate system of the canvas, this item is in, to the `Viewport`s embedders coordinate system.
 * @returns Transform2D
 */
  getViewportTransform(): Transform2D;
/**
 * Returns an individual bit on the rendering visibility layer.
 * @param layer int
 * @returns boolean
 */
  getVisibilityLayerBit(layer: int): boolean;
/**
 * Returns the `World2D` where this item is in.
 * @returns World2D
 */
  getWorld2d(): World2D;
/**
 * Hide the `CanvasItem` if it's currently visible. This is equivalent to setting `visible` to `false`.
 */
  hide(): void;
/**
 * Returns `true` if local transform notifications are communicated to children.
 * @returns boolean
 */
  isLocalTransformNotificationEnabled(): boolean;
/**
 * Returns `true` if global transform notifications are communicated to children.
 * @returns boolean
 */
  isTransformNotificationEnabled(): boolean;
/**
 * Returns `true` if the node is present in the `SceneTree`, its `visible` property is `true` and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree, and is therefore not drawn (see `_draw`).
 * Visibility is checked only in parent nodes that inherit from `CanvasItem`, `CanvasLayer`, and `Window`. If the parent is of any other type (such as `Node`, `AnimationPlayer`, or `Node3D`), it is assumed to be visible.
 * 
 * **Note:** This method does not take `visibility_layer` into account, so even if this method returns `true`, the node might end up not being rendered.
 * @returns boolean
 */
  isVisibleInTree(): boolean;
/**
 * Transforms `viewport_point` from the viewport's coordinates to this node's local coordinates.
 * For the opposite operation, use `get_global_transform_with_canvas`.
 * 
 * 				```gdscript
 * 
 * 				var viewport_point = get_global_transform_with_canvas() * local_point
 * 				
 * 
 * ```
 * @param viewportPoint Vector2
 * @returns Vector2
 */
  makeCanvasPositionLocal(viewportPoint: Vector2): Vector2;
/**
 * Transformations issued by `event`'s inputs are applied in local space instead of global space.
 * @param event InputEvent
 * @returns InputEvent
 */
  makeInputLocal(event: InputEvent): InputEvent;
/**
 * Moves this node to display on top of its siblings.
 * Internally, the node is moved to the bottom of parent's child list. The method has no effect on nodes without a parent.
 */
  moveToFront(): void;
/**
 * Queues the `CanvasItem` to redraw. During idle time, if `CanvasItem` is visible, `NOTIFICATION_DRAW` is sent and `_draw` is called. This only occurs **once** per frame, even if this method has been called multiple times.
 */
  queueRedraw(): void;
/**
 * Set the value of a shader uniform for this instance only (per-instance uniform (https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms)). See also `ShaderMaterial.set_shader_parameter` to assign a uniform on all instances using the same `ShaderMaterial`.
 * 
 * **Note:** For a shader uniform to be assignable on a per-instance basis, it *must* be defined with `instance uniform ...` rather than `uniform ...` in the shader code.
 * 
 * **Note:** `name` is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).
 * @param name StringName
 * @param value Variant
 */
  setInstanceShaderParameter(name: StringName, value: Variant): void;
/**
 * If `enable` is `true`, this node will receive `NOTIFICATION_LOCAL_TRANSFORM_CHANGED` when its local transform changes.
 * @param enable boolean
 */
  setNotifyLocalTransform(enable: boolean): void;
/**
 * If `enable` is `true`, this node will receive `NOTIFICATION_TRANSFORM_CHANGED` when its global transform changes.
 * @param enable boolean
 */
  setNotifyTransform(enable: boolean): void;
/**
 * Set/clear individual bits on the rendering visibility layer. This simplifies editing this `CanvasItem`'s visibility layer.
 * @param layer int
 * @param enabled boolean
 */
  setVisibilityLayerBit(layer: int, enabled: boolean): void;
/**
 * Show the `CanvasItem` if it's currently hidden. This is equivalent to setting `visible` to `true`. For controls that inherit `Popup`, the correct way to make them visible is to call one of the multiple `popup*()` functions instead.
 */
  show(): void;
/**
 * Emitted when the `CanvasItem` must redraw, *after* the related `NOTIFICATION_DRAW` notification, and *before* `_draw` is called.
 * 
 * **Note:** Deferred connections do not allow drawing through the `draw_*` methods.
 */
  draw: Signal<[]>;
/**
 * Emitted when the `CanvasItem` is hidden, i.e. it's no longer visible in the tree (see `is_visible_in_tree`).
 */
  hidden: Signal<[]>;
/**
 * Emitted when the `CanvasItem`'s boundaries (position or size) change, or when an action took place that may have affected these boundaries (e.g. changing `Sprite2D.texture`).
 */
  itemRectChanged: Signal<[]>;
/**
 * Emitted when the `CanvasItem`'s visibility changes, either because its own `visible` property changed or because its visibility in the tree changed (see `is_visible_in_tree`).
 */
  visibilityChanged: Signal<[]>;
/**
 * The `CanvasItem`'s global transform has changed. This notification is only received if enabled by `set_notify_transform`.
 */
  static readonly NOTIFICATION_TRANSFORM_CHANGED: int;
/**
 * The `CanvasItem`'s local transform has changed. This notification is only received if enabled by `set_notify_local_transform`.
 */
  static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED: int;
/**
 * The `CanvasItem` is requested to draw (see `_draw`).
 */
  static readonly NOTIFICATION_DRAW: int;
/**
 * The `CanvasItem`'s visibility has changed.
 */
  static readonly NOTIFICATION_VISIBILITY_CHANGED: int;
/**
 * The `CanvasItem` has entered the canvas.
 */
  static readonly NOTIFICATION_ENTER_CANVAS: int;
/**
 * The `CanvasItem` has exited the canvas.
 */
  static readonly NOTIFICATION_EXIT_CANVAS: int;
/**
 * The `CanvasItem`'s active `World2D` changed.
 */
  static readonly NOTIFICATION_WORLD_2D_CHANGED: int;
/**
 * The `CanvasItem` will inherit the filter from its parent.
 */
  static readonly TEXTURE_FILTER_PARENT_NODE: int;
/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly TEXTURE_FILTER_NEAREST: int;
/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly TEXTURE_FILTER_LINEAR: int;
/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: int;
/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: int;
/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 * 
 * **Note:** This texture filter is rarely useful in 2D projects. `TEXTURE_FILTER_NEAREST_WITH_MIPMAPS` is usually more appropriate in this case.
 */
  static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: int;
/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 * 
 * **Note:** This texture filter is rarely useful in 2D projects. `TEXTURE_FILTER_LINEAR_WITH_MIPMAPS` is usually more appropriate in this case.
 */
  static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: int;
/**
 * Represents the size of the `TextureFilter` enum.
 */
  static readonly TEXTURE_FILTER_MAX: int;
/**
 * The `CanvasItem` will inherit the filter from its parent.
 */
  static readonly TEXTURE_REPEAT_PARENT_NODE: int;
/**
 * Texture will not repeat.
 */
  static readonly TEXTURE_REPEAT_DISABLED: int;
/**
 * Texture will repeat normally.
 */
  static readonly TEXTURE_REPEAT_ENABLED: int;
/**
 * Texture will repeat in a 2×2 tiled mode, where elements at even positions are mirrored.
 */
  static readonly TEXTURE_REPEAT_MIRROR: int;
/**
 * Represents the size of the `TextureRepeat` enum.
 */
  static readonly TEXTURE_REPEAT_MAX: int;
/**
 * Child draws over parent and is not clipped.
 */
  static readonly CLIP_CHILDREN_DISABLED: int;
/**
 * Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn.
 */
  static readonly CLIP_CHILDREN_ONLY: int;
/**
 * Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area.
 */
  static readonly CLIP_CHILDREN_AND_DRAW: int;
/**
 * Represents the size of the `ClipChildrenMode` enum.
 */
  static readonly CLIP_CHILDREN_MAX: int;
}
