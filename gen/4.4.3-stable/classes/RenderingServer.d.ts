import type { AABB, Basis, Callable, Color, Dictionary, GodotArray, GodotDictionary, Image, Object, PackedByteArray, PackedColorArray, PackedFloat32Array, PackedInt32Array, PackedInt64Array, PackedVector2Array, PackedVector3Array, Plane, RID, Rect2, RenderingDevice, Signal, StringName, Transform2D, Transform3D, Variant, Vector2, Vector2i, Vector3, Vector3i, float, int } from "../index.d.ts";
/**
 * Server for anything visible.
 * 
 * The rendering server is the API backend for everything visible. The whole scene system mounts on it to display. The rendering server is completely opaque: the internals are entirely implementation-specific and cannot be accessed.
 * The rendering server can be used to bypass the scene/`Node` system entirely. This can improve performance in cases where the scene system is the bottleneck, but won't improve performance otherwise (for instance, if the GPU is already fully utilized).
 * Resources are created using the `*_create` functions. These functions return `RID`s which are not references to the objects themselves, but opaque *pointers* towards these objects.
 * All objects are drawn to a viewport. You can use the `Viewport` attached to the `SceneTree` or you can create one yourself with `viewport_create`. When using a custom scenario or canvas, the scenario or canvas needs to be attached to the viewport using `viewport_set_scenario` or `viewport_attach_canvas`.
 * 
 * **Scenarios:** In 3D, all visual objects must be associated with a scenario. The scenario is a visual representation of the world. If accessing the rendering server from a running game, the scenario can be accessed from the scene tree from any `Node3D` node with `Node3D.get_world_3d`. Otherwise, a scenario can be created with `scenario_create`.
 * Similarly, in 2D, a canvas is needed to draw all canvas items.
 * 
 * **3D:** In 3D, all visible objects are comprised of a resource and an instance. A resource can be a mesh, a particle system, a light, or any other 3D object. In order to be visible resources must be attached to an instance using `instance_set_base`. The instance must also be attached to the scenario using `instance_set_scenario` in order to be visible. RenderingServer methods that don't have a prefix are usually 3D-specific (but not always).
 * 
 * **2D:** In 2D, all visible objects are some form of canvas item. In order to be visible, a canvas item needs to be the child of a canvas attached to a viewport, or it needs to be the child of another canvas item that is eventually attached to the canvas. 2D-specific RenderingServer methods generally start with `canvas_*`.
 * 
 * **Headless mode:** Starting the engine with the `--headless` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html) disables all rendering and window management functions. Most functions from `RenderingServer` will return dummy values in this case.
 */
export class RenderingServer extends Object {
/**
 * If `false`, disables rendering completely, but the engine logic is still being processed. You can call `force_draw` to draw a frame even with rendering disabled.
 */
  renderLoopEnabled: boolean;
/**
 * Bakes the material data of the Mesh passed in the `base` parameter with optional `material_overrides` to a set of `Image`s of size `image_size`. Returns an array of `Image`s containing material properties as specified in `BakeChannels`.
 * @param base RID
 * @param materialOverrides RID[]
 * @param imageSize Vector2i
 * @returns Image[]
 */
  bakeRenderUv2(base: RID, materialOverrides: RID[], imageSize: Vector2i): Image[];
/**
 * As the RenderingServer actual logic may run on an separate thread, accessing its internals from the main (or any other) thread will result in errors. To make it easier to run code that can safely access the rendering internals (such as `RenderingDevice` and similar RD classes), push a callable via this function so it will be executed on the render thread.
 * @param callable Callable
 */
  callOnRenderThread(callable: Callable): void;
/**
 * Creates a camera attributes object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_attributes_` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `CameraAttributes`.
 * @returns RID
 */
  cameraAttributesCreate(): RID;
/**
 * Sets the parameters to use with the auto-exposure effect. These parameters take on the same meaning as their counterparts in `CameraAttributes` and `CameraAttributesPractical`.
 * @param cameraAttributes RID
 * @param enable boolean
 * @param minSensitivity float
 * @param maxSensitivity float
 * @param speed float
 * @param scale float
 */
  cameraAttributesSetAutoExposure(cameraAttributes: RID, enable: boolean, minSensitivity: float, maxSensitivity: float, speed: float, scale: float): void;
/**
 * Sets the parameters to use with the DOF blur effect. These parameters take on the same meaning as their counterparts in `CameraAttributesPractical`.
 * @param cameraAttributes RID
 * @param farEnable boolean
 * @param farDistance float
 * @param farTransition float
 * @param nearEnable boolean
 * @param nearDistance float
 * @param nearTransition float
 * @param amount float
 */
  cameraAttributesSetDofBlur(cameraAttributes: RID, farEnable: boolean, farDistance: float, farTransition: float, nearEnable: boolean, nearDistance: float, nearTransition: float, amount: float): void;
/**
 * Sets the shape of the DOF bokeh pattern. Different shapes may be used to achieve artistic effect, or to meet performance targets. For more detail on available options see `DOFBokehShape`.
 * @param shape int
 */
  cameraAttributesSetDofBlurBokehShape(shape: int): void;
/**
 * Sets the quality level of the DOF blur effect to one of the options in `DOFBlurQuality`. `use_jitter` can be used to jitter samples taken during the blur pass to hide artifacts at the cost of looking more fuzzy.
 * @param quality int
 * @param useJitter boolean
 */
  cameraAttributesSetDofBlurQuality(quality: int, useJitter: boolean): void;
/**
 * Sets the exposure values that will be used by the renderers. The normalization amount is used to bake a given Exposure Value (EV) into rendering calculations to reduce the dynamic range of the scene.
 * The normalization factor can be calculated from exposure value (EV100) as follows:
 * 
 * 				```gdscript
 * 
 * 				func get_exposure_normalization(ev100: float):
 * 				    return 1.0 / (pow(2.0, ev100) * 1.2)
 * 				
 * 
 * ```
 * The exposure value can be calculated from aperture (in f-stops), shutter speed (in seconds), and sensitivity (in ISO) as follows:
 * 
 * 				```gdscript
 * 
 * 				func get_exposure(aperture: float, shutter_speed: float, sensitivity: float):
 * 				    return log((aperture * aperture) / shutter_speed * (100.0 / sensitivity)) / log(2)
 * 				
 * 
 * ```
 * @param cameraAttributes RID
 * @param multiplier float
 * @param normalization float
 */
  cameraAttributesSetExposure(cameraAttributes: RID, multiplier: float, normalization: float): void;
/**
 * Creates a 3D camera and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `Camera3D`.
 * @returns RID
 */
  cameraCreate(): RID;
/**
 * Sets the camera_attributes created with `camera_attributes_create` to the given camera.
 * @param camera RID
 * @param effects RID
 */
  cameraSetCameraAttributes(camera: RID, effects: RID): void;
/**
 * Sets the compositor used by this camera. Equivalent to `Camera3D.compositor`.
 * @param camera RID
 * @param compositor RID
 */
  cameraSetCompositor(camera: RID, compositor: RID): void;
/**
 * Sets the cull mask associated with this camera. The cull mask describes which 3D layers are rendered by this camera. Equivalent to `Camera3D.cull_mask`.
 * @param camera RID
 * @param layers int
 */
  cameraSetCullMask(camera: RID, layers: int): void;
/**
 * Sets the environment used by this camera. Equivalent to `Camera3D.environment`.
 * @param camera RID
 * @param env RID
 */
  cameraSetEnvironment(camera: RID, env: RID): void;
/**
 * Sets camera to use frustum projection. This mode allows adjusting the `offset` argument to create "tilted frustum" effects.
 * @param camera RID
 * @param size float
 * @param offset Vector2
 * @param zNear float
 * @param zFar float
 */
  cameraSetFrustum(camera: RID, size: float, offset: Vector2, zNear: float, zFar: float): void;
/**
 * Sets camera to use orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are.
 * @param camera RID
 * @param size float
 * @param zNear float
 * @param zFar float
 */
  cameraSetOrthogonal(camera: RID, size: float, zNear: float, zFar: float): void;
/**
 * Sets camera to use perspective projection. Objects on the screen becomes smaller when they are far away.
 * @param camera RID
 * @param fovyDegrees float
 * @param zNear float
 * @param zFar float
 */
  cameraSetPerspective(camera: RID, fovyDegrees: float, zNear: float, zFar: float): void;
/**
 * Sets `Transform3D` of camera.
 * @param camera RID
 * @param transform Transform3D
 */
  cameraSetTransform(camera: RID, transform: Transform3D): void;
/**
 * If `true`, preserves the horizontal aspect ratio which is equivalent to `Camera3D.KEEP_WIDTH`. If `false`, preserves the vertical aspect ratio which is equivalent to `Camera3D.KEEP_HEIGHT`.
 * @param camera RID
 * @param enable boolean
 */
  cameraSetUseVerticalAspect(camera: RID, enable: boolean): void;
/**
 * Creates a canvas and returns the assigned `RID`. It can be accessed with the RID that is returned. This RID will be used in all `canvas_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * Canvas has no `Resource` or `Node` equivalent.
 * @returns RID
 */
  canvasCreate(): RID;
/**
 * Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly.
 * @param item RID
 * @param animationLength float
 * @param sliceBegin float
 * @param sliceEnd float
 * @param offset float (optional, default: 0.0)
 */
  canvasItemAddAnimationSlice(item: RID, animationLength: float, sliceBegin: float, sliceEnd: float, offset?: float): void;
/**
 * Draws a circle on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_circle`.
 * @param item RID
 * @param pos Vector2
 * @param radius float
 * @param color Color
 * @param antialiased boolean (optional, default: false)
 */
  canvasItemAddCircle(item: RID, pos: Vector2, radius: float, color: Color, antialiased?: boolean): void;
/**
 * If `ignore` is `true`, ignore clipping on items drawn with this canvas item until this is called again with `ignore` set to `false`.
 * @param item RID
 * @param ignore boolean
 */
  canvasItemAddClipIgnore(item: RID, ignore: boolean): void;
/**
 * See also `CanvasItem.draw_lcd_texture_rect_region`.
 * @param item RID
 * @param rect Rect2
 * @param texture RID
 * @param srcRect Rect2
 * @param modulate Color
 */
  canvasItemAddLcdTextureRectRegion(item: RID, rect: Rect2, texture: RID, srcRect: Rect2, modulate: Color): void;
/**
 * Draws a line on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_line`.
 * @param item RID
 * @param from_ Vector2
 * @param to Vector2
 * @param color Color
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  canvasItemAddLine(item: RID, from_: Vector2, to: Vector2, color: Color, width?: float, antialiased?: boolean): void;
/**
 * Draws a mesh created with `mesh_create` with given `transform`, `modulate` color, and `texture`. This is used internally by `MeshInstance2D`.
 * @param item RID
 * @param mesh RID
 * @param transform Transform2D (optional, default: Transform2D(1, 0, 0, 1, 0, 0))
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param texture RID (optional, default: RID())
 */
  canvasItemAddMesh(item: RID, mesh: RID, transform?: Transform2D, modulate?: Color, texture?: RID): void;
/**
 * See also `CanvasItem.draw_msdf_texture_rect_region`.
 * @param item RID
 * @param rect Rect2
 * @param texture RID
 * @param srcRect Rect2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param outlineSize int (optional, default: 0)
 * @param pxRange float (optional, default: 1.0)
 * @param scale float (optional, default: 1.0)
 */
  canvasItemAddMsdfTextureRectRegion(item: RID, rect: Rect2, texture: RID, srcRect: Rect2, modulate?: Color, outlineSize?: int, pxRange?: float, scale?: float): void;
/**
 * Draws a 2D multiline on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_multiline` and `CanvasItem.draw_multiline_colors`.
 * @param item RID
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  canvasItemAddMultiline(item: RID, points: PackedVector2Array, colors: PackedColorArray, width?: float, antialiased?: boolean): void;
/**
 * Draws a 2D `MultiMesh` on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_multimesh`.
 * @param item RID
 * @param mesh RID
 * @param texture RID (optional, default: RID())
 */
  canvasItemAddMultimesh(item: RID, mesh: RID, texture?: RID): void;
/**
 * Draws a nine-patch rectangle on the `CanvasItem` pointed to by the `item` `RID`.
 * @param item RID
 * @param rect Rect2
 * @param source Rect2
 * @param texture RID
 * @param topleft Vector2
 * @param bottomright Vector2
 * @param xAxisMode int (optional, default: 0)
 * @param yAxisMode int (optional, default: 0)
 * @param drawCenter boolean (optional, default: true)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  canvasItemAddNinePatch(item: RID, rect: Rect2, source: Rect2, texture: RID, topleft: Vector2, bottomright: Vector2, xAxisMode?: int, yAxisMode?: int, drawCenter?: boolean, modulate?: Color): void;
/**
 * Draws particles on the `CanvasItem` pointed to by the `item` `RID`.
 * @param item RID
 * @param particles RID
 * @param texture RID
 */
  canvasItemAddParticles(item: RID, particles: RID, texture: RID): void;
/**
 * Draws a 2D polygon on the `CanvasItem` pointed to by the `item` `RID`. If you need more flexibility (such as being able to use bones), use `canvas_item_add_triangle_array` instead. See also `CanvasItem.draw_polygon`.
 * 
 * **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with `Geometry2D.triangulate_polygon` and using `CanvasItem.draw_mesh`, `CanvasItem.draw_multimesh`, or `canvas_item_add_triangle_array`.
 * @param item RID
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param uvs PackedVector2Array (optional, default: PackedVector2Array())
 * @param texture RID (optional, default: RID())
 */
  canvasItemAddPolygon(item: RID, points: PackedVector2Array, colors: PackedColorArray, uvs?: PackedVector2Array, texture?: RID): void;
/**
 * Draws a 2D polyline on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_polyline` and `CanvasItem.draw_polyline_colors`.
 * @param item RID
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param width float (optional, default: -1.0)
 * @param antialiased boolean (optional, default: false)
 */
  canvasItemAddPolyline(item: RID, points: PackedVector2Array, colors: PackedColorArray, width?: float, antialiased?: boolean): void;
/**
 * Draws a 2D primitive on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_primitive`.
 * @param item RID
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param uvs PackedVector2Array
 * @param texture RID
 */
  canvasItemAddPrimitive(item: RID, points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture: RID): void;
/**
 * Draws a rectangle on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_rect`.
 * @param item RID
 * @param rect Rect2
 * @param color Color
 * @param antialiased boolean (optional, default: false)
 */
  canvasItemAddRect(item: RID, rect: Rect2, color: Color, antialiased?: boolean): void;
/**
 * Sets a `Transform2D` that will be used to transform subsequent canvas item commands.
 * @param item RID
 * @param transform Transform2D
 */
  canvasItemAddSetTransform(item: RID, transform: Transform2D): void;
/**
 * Draws a 2D textured rectangle on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_texture_rect` and `Texture2D.draw_rect`.
 * @param item RID
 * @param rect Rect2
 * @param texture RID
 * @param tile boolean (optional, default: false)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param transpose boolean (optional, default: false)
 */
  canvasItemAddTextureRect(item: RID, rect: Rect2, texture: RID, tile?: boolean, modulate?: Color, transpose?: boolean): void;
/**
 * Draws the specified region of a 2D textured rectangle on the `CanvasItem` pointed to by the `item` `RID`. See also `CanvasItem.draw_texture_rect_region` and `Texture2D.draw_rect_region`.
 * @param item RID
 * @param rect Rect2
 * @param texture RID
 * @param srcRect Rect2
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 * @param transpose boolean (optional, default: false)
 * @param clipUv boolean (optional, default: true)
 */
  canvasItemAddTextureRectRegion(item: RID, rect: Rect2, texture: RID, srcRect: Rect2, modulate?: Color, transpose?: boolean, clipUv?: boolean): void;
/**
 * Draws a triangle array on the `CanvasItem` pointed to by the `item` `RID`. This is internally used by `Line2D` and `StyleBoxFlat` for rendering. `canvas_item_add_triangle_array` is highly flexible, but more complex to use than `canvas_item_add_polygon`.
 * 
 * **Note:** `count` is unused and can be left unspecified.
 * @param item RID
 * @param indices PackedInt32Array
 * @param points PackedVector2Array
 * @param colors PackedColorArray
 * @param uvs PackedVector2Array (optional, default: PackedVector2Array())
 * @param bones PackedInt32Array (optional, default: PackedInt32Array())
 * @param weights PackedFloat32Array (optional, default: PackedFloat32Array())
 * @param texture RID (optional, default: RID())
 * @param count int (optional, default: -1)
 */
  canvasItemAddTriangleArray(item: RID, indices: PackedInt32Array, points: PackedVector2Array, colors: PackedColorArray, uvs?: PackedVector2Array, bones?: PackedInt32Array, weights?: PackedFloat32Array, texture?: RID, count?: int): void;
/**
 * Attaches a skeleton to the `CanvasItem`. Removes the previous skeleton.
 * @param item RID
 * @param skeleton RID
 */
  canvasItemAttachSkeleton(item: RID, skeleton: RID): void;
/**
 * Clears the `CanvasItem` and removes all commands in it.
 * @param item RID
 */
  canvasItemClear(item: RID): void;
/**
 * Creates a new CanvasItem instance and returns its `RID`. It can be accessed with the RID that is returned. This RID will be used in all `canvas_item_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `CanvasItem`.
 * @returns RID
 */
  canvasItemCreate(): RID;
/**
 * Returns the value of the per-instance shader uniform from the specified canvas item instance. Equivalent to `CanvasItem.get_instance_shader_parameter`.
 * @param instance RID
 * @param parameter StringName
 * @returns Variant
 */
  canvasItemGetInstanceShaderParameter(instance: RID, parameter: StringName): Variant;
/**
 * Returns the default value of the per-instance shader uniform from the specified canvas item instance. Equivalent to `CanvasItem.get_instance_shader_parameter`.
 * @param instance RID
 * @param parameter StringName
 * @returns Variant
 */
  canvasItemGetInstanceShaderParameterDefaultValue(instance: RID, parameter: StringName): Variant;
/**
 * Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified canvas item instance.
 * The returned dictionary is in PropertyInfo format, with the keys `name`, `class_name`, `type`, `hint`, `hint_string`, and `usage`.
 * @param instance RID
 * @returns Dictionary[]
 */
  canvasItemGetInstanceShaderParameterList(instance: RID): Dictionary[];
/**
 * Prevents physics interpolation for the current physics tick.
 * This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.
 * @param item RID
 */
  canvasItemResetPhysicsInterpolation(item: RID): void;
/**
 * Sets the canvas group mode used during 2D rendering for the canvas item specified by the `item` RID. For faster but more limited clipping, use `canvas_item_set_clip` instead.
 * 
 * **Note:** The equivalent node functionality is found in `CanvasGroup` and `CanvasItem.clip_children`.
 * @param item RID
 * @param mode int
 * @param clearMargin float (optional, default: 5.0)
 * @param fitEmpty boolean (optional, default: false)
 * @param fitMargin float (optional, default: 0.0)
 * @param blurMipmaps boolean (optional, default: false)
 */
  canvasItemSetCanvasGroupMode(item: RID, mode: int, clearMargin?: float, fitEmpty?: boolean, fitMargin?: float, blurMipmaps?: boolean): void;
/**
 * If `clip` is `true`, makes the canvas item specified by the `item` RID not draw anything outside of its rect's coordinates. This clipping is fast, but works only with axis-aligned rectangles. This means that rotation is ignored by the clipping rectangle. For more advanced clipping shapes, use `canvas_item_set_canvas_group_mode` instead.
 * 
 * **Note:** The equivalent node functionality is found in `Label.clip_text`, `RichTextLabel` (always enabled) and more.
 * @param item RID
 * @param clip boolean
 */
  canvasItemSetClip(item: RID, clip: boolean): void;
/**
 * Sets the `CanvasItem` to copy a rect to the backbuffer.
 * @param item RID
 * @param enabled boolean
 * @param rect Rect2
 */
  canvasItemSetCopyToBackbuffer(item: RID, enabled: boolean, rect: Rect2): void;
/**
 * If `use_custom_rect` is `true`, sets the custom visibility rectangle (used for culling) to `rect` for the canvas item specified by `item`. Setting a custom visibility rect can reduce CPU load when drawing lots of 2D instances. If `use_custom_rect` is `false`, automatically computes a visibility rectangle based on the canvas item's draw commands.
 * @param item RID
 * @param useCustomRect boolean
 * @param rect Rect2 (optional, default: Rect2(0, 0, 0, 0))
 */
  canvasItemSetCustomRect(item: RID, useCustomRect: boolean, rect?: Rect2): void;
/**
 * Sets the default texture filter mode for the canvas item specified by the `item` RID. Equivalent to `CanvasItem.texture_filter`.
 * @param item RID
 * @param filter int
 */
  canvasItemSetDefaultTextureFilter(item: RID, filter: int): void;
/**
 * Sets the default texture repeat mode for the canvas item specified by the `item` RID. Equivalent to `CanvasItem.texture_repeat`.
 * @param item RID
 * @param repeat int
 */
  canvasItemSetDefaultTextureRepeat(item: RID, repeat: int): void;
/**
 * If `enabled` is `true`, enables multichannel signed distance field rendering mode for the canvas item specified by the `item` RID. This is meant to be used for font rendering, or with specially generated images using msdfgen (https://github.com/Chlumsky/msdfgen).
 * @param item RID
 * @param enabled boolean
 */
  canvasItemSetDistanceFieldMode(item: RID, enabled: boolean): void;
/**
 * If `enabled` is `true`, draws the canvas item specified by the `item` RID behind its parent. Equivalent to `CanvasItem.show_behind_parent`.
 * @param item RID
 * @param enabled boolean
 */
  canvasItemSetDrawBehindParent(item: RID, enabled: boolean): void;
/**
 * Sets the index for the `CanvasItem`.
 * @param item RID
 * @param index int
 */
  canvasItemSetDrawIndex(item: RID, index: int): void;
/**
 * Sets the per-instance shader uniform on the specified canvas item instance. Equivalent to `CanvasItem.set_instance_shader_parameter`.
 * @param instance RID
 * @param parameter StringName
 * @param value Variant
 */
  canvasItemSetInstanceShaderParameter(instance: RID, parameter: StringName, value: Variant): void;
/**
 * If `interpolated` is `true`, turns on physics interpolation for the canvas item.
 * @param item RID
 * @param interpolated boolean
 */
  canvasItemSetInterpolated(item: RID, interpolated: boolean): void;
/**
 * Sets the light `mask` for the canvas item specified by the `item` RID. Equivalent to `CanvasItem.light_mask`.
 * @param item RID
 * @param mask int
 */
  canvasItemSetLightMask(item: RID, mask: int): void;
/**
 * Sets a new `material` to the canvas item specified by the `item` RID. Equivalent to `CanvasItem.material`.
 * @param item RID
 * @param material RID
 */
  canvasItemSetMaterial(item: RID, material: RID): void;
/**
 * Multiplies the color of the canvas item specified by the `item` RID, while affecting its children. See also `canvas_item_set_self_modulate`. Equivalent to `CanvasItem.modulate`.
 * @param item RID
 * @param color Color
 */
  canvasItemSetModulate(item: RID, color: Color): void;
/**
 * Sets a parent `CanvasItem` to the `CanvasItem`. The item will inherit transform, modulation and visibility from its parent, like `CanvasItem` nodes in the scene tree.
 * @param item RID
 * @param parent RID
 */
  canvasItemSetParent(item: RID, parent: RID): void;
/**
 * Multiplies the color of the canvas item specified by the `item` RID, without affecting its children. See also `canvas_item_set_modulate`. Equivalent to `CanvasItem.self_modulate`.
 * @param item RID
 * @param color Color
 */
  canvasItemSetSelfModulate(item: RID, color: Color): void;
/**
 * If `enabled` is `true`, child nodes with the lowest Y position are drawn before those with a higher Y position. Y-sorting only affects children that inherit from the canvas item specified by the `item` RID, not the canvas item itself. Equivalent to `CanvasItem.y_sort_enabled`.
 * @param item RID
 * @param enabled boolean
 */
  canvasItemSetSortChildrenByY(item: RID, enabled: boolean): void;
/**
 * Sets the `transform` of the canvas item specified by the `item` RID. This affects where and how the item will be drawn. Child canvas items' transforms are multiplied by their parent's transform. Equivalent to `Node2D.transform`.
 * @param item RID
 * @param transform Transform2D
 */
  canvasItemSetTransform(item: RID, transform: Transform2D): void;
/**
 * Sets if the `CanvasItem` uses its parent's material.
 * @param item RID
 * @param enabled boolean
 */
  canvasItemSetUseParentMaterial(item: RID, enabled: boolean): void;
/**
 * Sets the rendering visibility layer associated with this `CanvasItem`. Only `Viewport` nodes with a matching rendering mask will render this `CanvasItem`.
 * @param item RID
 * @param visibilityLayer int
 */
  canvasItemSetVisibilityLayer(item: RID, visibilityLayer: int): void;
/**
 * Sets the given `CanvasItem` as visibility notifier. `area` defines the area of detecting visibility. `enter_callable` is called when the `CanvasItem` enters the screen, `exit_callable` is called when the `CanvasItem` exits the screen. If `enable` is `false`, the item will no longer function as notifier.
 * This method can be used to manually mimic `VisibleOnScreenNotifier2D`.
 * @param item RID
 * @param enable boolean
 * @param area Rect2
 * @param enterCallable Callable
 * @param exitCallable Callable
 */
  canvasItemSetVisibilityNotifier(item: RID, enable: boolean, area: Rect2, enterCallable: Callable, exitCallable: Callable): void;
/**
 * Sets the visibility of the `CanvasItem`.
 * @param item RID
 * @param visible boolean
 */
  canvasItemSetVisible(item: RID, visible: boolean): void;
/**
 * If this is enabled, the Z index of the parent will be added to the children's Z index.
 * @param item RID
 * @param enabled boolean
 */
  canvasItemSetZAsRelativeToParent(item: RID, enabled: boolean): void;
/**
 * Sets the `CanvasItem`'s Z index, i.e. its draw order (lower indexes are drawn first).
 * @param item RID
 * @param zIndex int
 */
  canvasItemSetZIndex(item: RID, zIndex: int): void;
/**
 * Transforms both the current and previous stored transform for a canvas item.
 * This allows transforming a canvas item without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.
 * @param item RID
 * @param transform Transform2D
 */
  canvasItemTransformPhysicsInterpolation(item: RID, transform: Transform2D): void;
/**
 * Attaches the canvas light to the canvas. Removes it from its previous canvas.
 * @param light RID
 * @param canvas RID
 */
  canvasLightAttachToCanvas(light: RID, canvas: RID): void;
/**
 * Creates a canvas light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `Light2D`.
 * @returns RID
 */
  canvasLightCreate(): RID;
/**
 * Attaches a light occluder to the canvas. Removes it from its previous canvas.
 * @param occluder RID
 * @param canvas RID
 */
  canvasLightOccluderAttachToCanvas(occluder: RID, canvas: RID): void;
/**
 * Creates a light occluder and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_occluder_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `LightOccluder2D`.
 * @returns RID
 */
  canvasLightOccluderCreate(): RID;
/**
 * Prevents physics interpolation for the current physics tick.
 * This is useful when moving an occluder to a new location, to give an instantaneous change rather than interpolation from the previous location.
 * @param occluder RID
 */
  canvasLightOccluderResetPhysicsInterpolation(occluder: RID): void;
/**
 * @param occluder RID
 * @param enable boolean
 */
  canvasLightOccluderSetAsSdfCollision(occluder: RID, enable: boolean): void;
/**
 * Enables or disables light occluder.
 * @param occluder RID
 * @param enabled boolean
 */
  canvasLightOccluderSetEnabled(occluder: RID, enabled: boolean): void;
/**
 * If `interpolated` is `true`, turns on physics interpolation for the light occluder.
 * @param occluder RID
 * @param interpolated boolean
 */
  canvasLightOccluderSetInterpolated(occluder: RID, interpolated: boolean): void;
/**
 * The light mask. See `LightOccluder2D` for more information on light masks.
 * @param occluder RID
 * @param mask int
 */
  canvasLightOccluderSetLightMask(occluder: RID, mask: int): void;
/**
 * Sets a light occluder's polygon.
 * @param occluder RID
 * @param polygon RID
 */
  canvasLightOccluderSetPolygon(occluder: RID, polygon: RID): void;
/**
 * Sets a light occluder's `Transform2D`.
 * @param occluder RID
 * @param transform Transform2D
 */
  canvasLightOccluderSetTransform(occluder: RID, transform: Transform2D): void;
/**
 * Transforms both the current and previous stored transform for a light occluder.
 * This allows transforming an occluder without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.
 * @param occluder RID
 * @param transform Transform2D
 */
  canvasLightOccluderTransformPhysicsInterpolation(occluder: RID, transform: Transform2D): void;
/**
 * Prevents physics interpolation for the current physics tick.
 * This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.
 * @param light RID
 */
  canvasLightResetPhysicsInterpolation(light: RID): void;
/**
 * Sets the blend mode for the given canvas light. See `CanvasLightBlendMode` for options. Equivalent to `Light2D.blend_mode`.
 * @param light RID
 * @param mode int
 */
  canvasLightSetBlendMode(light: RID, mode: int): void;
/**
 * Sets the color for a light.
 * @param light RID
 * @param color Color
 */
  canvasLightSetColor(light: RID, color: Color): void;
/**
 * Enables or disables a canvas light.
 * @param light RID
 * @param enabled boolean
 */
  canvasLightSetEnabled(light: RID, enabled: boolean): void;
/**
 * Sets a canvas light's energy.
 * @param light RID
 * @param energy float
 */
  canvasLightSetEnergy(light: RID, energy: float): void;
/**
 * Sets a canvas light's height.
 * @param light RID
 * @param height float
 */
  canvasLightSetHeight(light: RID, height: float): void;
/**
 * If `interpolated` is `true`, turns on physics interpolation for the canvas light.
 * @param light RID
 * @param interpolated boolean
 */
  canvasLightSetInterpolated(light: RID, interpolated: boolean): void;
/**
 * The light mask. See `LightOccluder2D` for more information on light masks.
 * @param light RID
 * @param mask int
 */
  canvasLightSetItemCullMask(light: RID, mask: int): void;
/**
 * The binary mask used to determine which layers this canvas light's shadows affects. See `LightOccluder2D` for more information on light masks.
 * @param light RID
 * @param mask int
 */
  canvasLightSetItemShadowCullMask(light: RID, mask: int): void;
/**
 * The layer range that gets rendered with this light.
 * @param light RID
 * @param minLayer int
 * @param maxLayer int
 */
  canvasLightSetLayerRange(light: RID, minLayer: int, maxLayer: int): void;
/**
 * The mode of the light, see `CanvasLightMode` constants.
 * @param light RID
 * @param mode int
 */
  canvasLightSetMode(light: RID, mode: int): void;
/**
 * Sets the color of the canvas light's shadow.
 * @param light RID
 * @param color Color
 */
  canvasLightSetShadowColor(light: RID, color: Color): void;
/**
 * Enables or disables the canvas light's shadow.
 * @param light RID
 * @param enabled boolean
 */
  canvasLightSetShadowEnabled(light: RID, enabled: boolean): void;
/**
 * Sets the canvas light's shadow's filter, see `CanvasLightShadowFilter` constants.
 * @param light RID
 * @param filter int
 */
  canvasLightSetShadowFilter(light: RID, filter: int): void;
/**
 * Smoothens the shadow. The lower, the smoother.
 * @param light RID
 * @param smooth float
 */
  canvasLightSetShadowSmooth(light: RID, smooth: float): void;
/**
 * Sets the texture to be used by a `PointLight2D`. Equivalent to `PointLight2D.texture`.
 * @param light RID
 * @param texture RID
 */
  canvasLightSetTexture(light: RID, texture: RID): void;
/**
 * Sets the offset of a `PointLight2D`'s texture. Equivalent to `PointLight2D.offset`.
 * @param light RID
 * @param offset Vector2
 */
  canvasLightSetTextureOffset(light: RID, offset: Vector2): void;
/**
 * Sets the scale factor of a `PointLight2D`'s texture. Equivalent to `PointLight2D.texture_scale`.
 * @param light RID
 * @param scale float
 */
  canvasLightSetTextureScale(light: RID, scale: float): void;
/**
 * Sets the canvas light's `Transform2D`.
 * @param light RID
 * @param transform Transform2D
 */
  canvasLightSetTransform(light: RID, transform: Transform2D): void;
/**
 * Sets the Z range of objects that will be affected by this light. Equivalent to `Light2D.range_z_min` and `Light2D.range_z_max`.
 * @param light RID
 * @param minZ int
 * @param maxZ int
 */
  canvasLightSetZRange(light: RID, minZ: int, maxZ: int): void;
/**
 * Transforms both the current and previous stored transform for a canvas light.
 * This allows transforming a light without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.
 * @param light RID
 * @param transform Transform2D
 */
  canvasLightTransformPhysicsInterpolation(light: RID, transform: Transform2D): void;
/**
 * Creates a new light occluder polygon and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_occluder_polygon_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `OccluderPolygon2D`.
 * @returns RID
 */
  canvasOccluderPolygonCreate(): RID;
/**
 * Sets an occluder polygons cull mode. See `CanvasOccluderPolygonCullMode` constants.
 * @param occluderPolygon RID
 * @param mode int
 */
  canvasOccluderPolygonSetCullMode(occluderPolygon: RID, mode: int): void;
/**
 * Sets the shape of the occluder polygon.
 * @param occluderPolygon RID
 * @param shape PackedVector2Array
 * @param closed boolean
 */
  canvasOccluderPolygonSetShape(occluderPolygon: RID, shape: PackedVector2Array, closed: boolean): void;
/**
 * @param disable boolean
 */
  canvasSetDisableScale(disable: boolean): void;
/**
 * A copy of the canvas item will be drawn with a local offset of the `mirroring`.
 * 
 * **Note:** This is equivalent to calling `canvas_set_item_repeat` like `canvas_set_item_repeat(item, mirroring, 1)`, with an additional check ensuring `canvas` is a parent of `item`.
 * @param canvas RID
 * @param item RID
 * @param mirroring Vector2
 */
  canvasSetItemMirroring(canvas: RID, item: RID, mirroring: Vector2): void;
/**
 * A copy of the canvas item will be drawn with a local offset of the `repeat_size` by the number of times of the `repeat_times`. As the `repeat_times` increases, the copies will spread away from the origin texture.
 * @param item RID
 * @param repeatSize Vector2
 * @param repeatTimes int
 */
  canvasSetItemRepeat(item: RID, repeatSize: Vector2, repeatTimes: int): void;
/**
 * Modulates all colors in the given canvas.
 * @param canvas RID
 * @param color Color
 */
  canvasSetModulate(canvas: RID, color: Color): void;
/**
 * Sets the `ProjectSettings.rendering/2d/shadow_atlas/size` to use for `Light2D` shadow rendering (in pixels). The value is rounded up to the nearest power of 2.
 * @param size int
 */
  canvasSetShadowTextureSize(size: int): void;
/**
 * Creates a canvas texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_texture_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method. See also `texture_2d_create`.
 * 
 * **Note:** The equivalent resource is `CanvasTexture` and is only meant to be used in 2D rendering, not 3D.
 * @returns RID
 */
  canvasTextureCreate(): RID;
/**
 * Sets the `channel`'s `texture` for the canvas texture specified by the `canvas_texture` RID. Equivalent to `CanvasTexture.diffuse_texture`, `CanvasTexture.normal_texture` and `CanvasTexture.specular_texture`.
 * @param canvasTexture RID
 * @param channel int
 * @param texture RID
 */
  canvasTextureSetChannel(canvasTexture: RID, channel: int, texture: RID): void;
/**
 * Sets the `base_color` and `shininess` to use for the canvas texture specified by the `canvas_texture` RID. Equivalent to `CanvasTexture.specular_color` and `CanvasTexture.specular_shininess`.
 * @param canvasTexture RID
 * @param baseColor Color
 * @param shininess float
 */
  canvasTextureSetShadingParameters(canvasTexture: RID, baseColor: Color, shininess: float): void;
/**
 * Sets the texture `filter` mode to use for the canvas texture specified by the `canvas_texture` RID.
 * @param canvasTexture RID
 * @param filter int
 */
  canvasTextureSetTextureFilter(canvasTexture: RID, filter: int): void;
/**
 * Sets the texture `repeat` mode to use for the canvas texture specified by the `canvas_texture` RID.
 * @param canvasTexture RID
 * @param repeat int
 */
  canvasTextureSetTextureRepeat(canvasTexture: RID, repeat: int): void;
/**
 * Creates a new compositor and adds it to the RenderingServer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * @returns RID
 */
  compositorCreate(): RID;
/**
 * Creates a new rendering effect and adds it to the RenderingServer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * @returns RID
 */
  compositorEffectCreate(): RID;
/**
 * Sets the callback type (`callback_type`) and callback method(`callback`) for this rendering effect.
 * @param effect RID
 * @param callbackType int
 * @param callback Callable
 */
  compositorEffectSetCallback(effect: RID, callbackType: int, callback: Callable): void;
/**
 * Enables/disables this rendering effect.
 * @param effect RID
 * @param enabled boolean
 */
  compositorEffectSetEnabled(effect: RID, enabled: boolean): void;
/**
 * Sets the flag (`flag`) for this rendering effect to `true` or `false` (`set`).
 * @param effect RID
 * @param flag int
 * @param set_ boolean
 */
  compositorEffectSetFlag(effect: RID, flag: int, set_: boolean): void;
/**
 * Sets the compositor effects for the specified compositor RID. `effects` should be an array containing RIDs created with `compositor_effect_create`.
 * @param compositor RID
 * @param effects RID[]
 */
  compositorSetCompositorEffects(compositor: RID, effects: RID[]): void;
/**
 * Creates a RenderingDevice that can be used to do draw and compute operations on a separate thread. Cannot draw to the screen nor share data with the global RenderingDevice.
 * 
 * **Note:** When using the OpenGL rendering driver or when running in headless mode, this function always returns `null`.
 * @returns RenderingDevice
 */
  createLocalRenderingDevice(): RenderingDevice;
/**
 * Returns the bounding rectangle for a canvas item in local space, as calculated by the renderer. This bound is used internally for culling.
 * 
 * **Warning:** This function is intended for debugging in the editor, and will pass through and return a zero `Rect2` in exported projects.
 * @param item RID
 * @returns Rect2
 */
  debugCanvasItemGetRect(item: RID): Rect2;
/**
 * Creates a decal and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `decal_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this decal to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent node is `Decal`.
 * @returns RID
 */
  decalCreate(): RID;
/**
 * Sets the `albedo_mix` in the decal specified by the `decal` RID. Equivalent to `Decal.albedo_mix`.
 * @param decal RID
 * @param albedoMix float
 */
  decalSetAlbedoMix(decal: RID, albedoMix: float): void;
/**
 * Sets the cull `mask` in the decal specified by the `decal` RID. Equivalent to `Decal.cull_mask`.
 * @param decal RID
 * @param mask int
 */
  decalSetCullMask(decal: RID, mask: int): void;
/**
 * Sets the distance fade parameters in the decal specified by the `decal` RID. Equivalent to `Decal.distance_fade_enabled`, `Decal.distance_fade_begin` and `Decal.distance_fade_length`.
 * @param decal RID
 * @param enabled boolean
 * @param begin float
 * @param length float
 */
  decalSetDistanceFade(decal: RID, enabled: boolean, begin: float, length: float): void;
/**
 * Sets the emission `energy` in the decal specified by the `decal` RID. Equivalent to `Decal.emission_energy`.
 * @param decal RID
 * @param energy float
 */
  decalSetEmissionEnergy(decal: RID, energy: float): void;
/**
 * Sets the upper fade (`above`) and lower fade (`below`) in the decal specified by the `decal` RID. Equivalent to `Decal.upper_fade` and `Decal.lower_fade`.
 * @param decal RID
 * @param above float
 * @param below float
 */
  decalSetFade(decal: RID, above: float, below: float): void;
/**
 * Sets the color multiplier in the decal specified by the `decal` RID to `color`. Equivalent to `Decal.modulate`.
 * @param decal RID
 * @param color Color
 */
  decalSetModulate(decal: RID, color: Color): void;
/**
 * Sets the normal `fade` in the decal specified by the `decal` RID. Equivalent to `Decal.normal_fade`.
 * @param decal RID
 * @param fade float
 */
  decalSetNormalFade(decal: RID, fade: float): void;
/**
 * Sets the `size` of the decal specified by the `decal` RID. Equivalent to `Decal.size`.
 * @param decal RID
 * @param size Vector3
 */
  decalSetSize(decal: RID, size: Vector3): void;
/**
 * Sets the `texture` in the given texture `type` slot for the specified decal. Equivalent to `Decal.set_texture`.
 * @param decal RID
 * @param type_ int
 * @param texture RID
 */
  decalSetTexture(decal: RID, type_: int, texture: RID): void;
/**
 * Sets the texture `filter` mode to use when rendering decals. This parameter is global and cannot be set on a per-decal basis.
 * @param filter int
 */
  decalsSetFilter(filter: int): void;
/**
 * Creates a directional light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this directional light to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent node is `DirectionalLight3D`.
 * @returns RID
 */
  directionalLightCreate(): RID;
/**
 * Sets the `size` of the directional light shadows in 3D. See also `ProjectSettings.rendering/lights_and_shadows/directional_shadow/size`. This parameter is global and cannot be set on a per-viewport basis.
 * @param size int
 * @param is16bits boolean
 */
  directionalShadowAtlasSetSize(size: int, is16bits: boolean): void;
/**
 * Sets the filter `quality` for directional light shadows in 3D. See also `ProjectSettings.rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality`. This parameter is global and cannot be set on a per-viewport basis.
 * @param quality int
 */
  directionalSoftShadowFilterSetQuality(quality: int): void;
/**
 * Generates and returns an `Image` containing the radiance map for the specified `environment` RID's sky. This supports built-in sky material and custom sky shaders. If `bake_irradiance` is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also `sky_bake_panorama`.
 * 
 * **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor.
 * 
 * **Note:** `size` should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than `Sky.radiance_size`, as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.
 * @param environment RID
 * @param bakeIrradiance boolean
 * @param size Vector2i
 * @returns Image
 */
  environmentBakePanorama(environment: RID, bakeIrradiance: boolean, size: Vector2i): Image;
/**
 * Creates an environment and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `environment_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `Environment`.
 * @returns RID
 */
  environmentCreate(): RID;
/**
 * If `enable` is `true`, enables bicubic upscaling for glow which improves quality at the cost of performance. Equivalent to `ProjectSettings.rendering/environment/glow/upscale_mode`.
 * @param enable boolean
 */
  environmentGlowSetUseBicubicUpscale(enable: boolean): void;
/**
 * Sets the values to be used with the "adjustments" post-process effect. See `Environment` for more details.
 * @param env RID
 * @param enable boolean
 * @param brightness float
 * @param contrast float
 * @param saturation float
 * @param use1dColorCorrection boolean
 * @param colorCorrection RID
 */
  environmentSetAdjustment(env: RID, enable: boolean, brightness: float, contrast: float, saturation: float, use1dColorCorrection: boolean, colorCorrection: RID): void;
/**
 * Sets the values to be used for ambient light rendering. See `Environment` for more details.
 * @param env RID
 * @param color Color
 * @param ambient int (optional, default: 0)
 * @param energy float (optional, default: 1.0)
 * @param skyContribution float (optional, default: 0.0)
 * @param reflectionSource int (optional, default: 0)
 */
  environmentSetAmbientLight(env: RID, color: Color, ambient?: int, energy?: float, skyContribution?: float, reflectionSource?: int): void;
/**
 * Sets the environment's background mode. Equivalent to `Environment.background_mode`.
 * @param env RID
 * @param bg int
 */
  environmentSetBackground(env: RID, bg: int): void;
/**
 * Color displayed for clear areas of the scene. Only effective if using the `ENV_BG_COLOR` background mode.
 * @param env RID
 * @param color Color
 */
  environmentSetBgColor(env: RID, color: Color): void;
/**
 * Sets the intensity of the background color.
 * @param env RID
 * @param multiplier float
 * @param exposureValue float
 */
  environmentSetBgEnergy(env: RID, multiplier: float, exposureValue: float): void;
/**
 * Sets the camera ID to be used as environment background.
 * @param env RID
 * @param id int
 */
  environmentSetCameraId(env: RID, id: int): void;
/**
 * Sets the maximum layer to use if using Canvas background mode.
 * @param env RID
 * @param maxLayer int
 */
  environmentSetCanvasMaxLayer(env: RID, maxLayer: int): void;
/**
 * Configures fog for the specified environment RID. See `fog_*` properties in `Environment` for more information.
 * @param env RID
 * @param enable boolean
 * @param lightColor Color
 * @param lightEnergy float
 * @param sunScatter float
 * @param density float
 * @param height float
 * @param heightDensity float
 * @param aerialPerspective float
 * @param skyAffect float
 * @param fogMode int (optional, default: 0)
 */
  environmentSetFog(env: RID, enable: boolean, lightColor: Color, lightEnergy: float, sunScatter: float, density: float, height: float, heightDensity: float, aerialPerspective: float, skyAffect: float, fogMode?: int): void;
/**
 * Configures glow for the specified environment RID. See `glow_*` properties in `Environment` for more information.
 * @param env RID
 * @param enable boolean
 * @param levels PackedFloat32Array
 * @param intensity float
 * @param strength float
 * @param mix float
 * @param bloomThreshold float
 * @param blendMode int
 * @param hdrBleedThreshold float
 * @param hdrBleedScale float
 * @param hdrLuminanceCap float
 * @param glowMapStrength float
 * @param glowMap RID
 */
  environmentSetGlow(env: RID, enable: boolean, levels: PackedFloat32Array, intensity: float, strength: float, mix: float, bloomThreshold: float, blendMode: int, hdrBleedThreshold: float, hdrBleedScale: float, hdrLuminanceCap: float, glowMapStrength: float, glowMap: RID): void;
/**
 * Configures signed distance field global illumination for the specified environment RID. See `sdfgi_*` properties in `Environment` for more information.
 * @param env RID
 * @param enable boolean
 * @param cascades int
 * @param minCellSize float
 * @param yScale int
 * @param useOcclusion boolean
 * @param bounceFeedback float
 * @param readSky boolean
 * @param energy float
 * @param normalBias float
 * @param probeBias float
 */
  environmentSetSdfgi(env: RID, enable: boolean, cascades: int, minCellSize: float, yScale: int, useOcclusion: boolean, bounceFeedback: float, readSky: boolean, energy: float, normalBias: float, probeBias: float): void;
/**
 * Sets the number of frames to use for converging signed distance field global illumination. Equivalent to `ProjectSettings.rendering/global_illumination/sdfgi/frames_to_converge`.
 * @param frames int
 */
  environmentSetSdfgiFramesToConverge(frames: int): void;
/**
 * Sets the update speed for dynamic lights' indirect lighting when computing signed distance field global illumination. Equivalent to `ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights`.
 * @param frames int
 */
  environmentSetSdfgiFramesToUpdateLight(frames: int): void;
/**
 * Sets the number of rays to throw per frame when computing signed distance field global illumination. Equivalent to `ProjectSettings.rendering/global_illumination/sdfgi/probe_ray_count`.
 * @param rayCount int
 */
  environmentSetSdfgiRayCount(rayCount: int): void;
/**
 * Sets the `Sky` to be used as the environment's background when using *BGMode* sky. Equivalent to `Environment.sky`.
 * @param env RID
 * @param sky RID
 */
  environmentSetSky(env: RID, sky: RID): void;
/**
 * Sets a custom field of view for the background `Sky`. Equivalent to `Environment.sky_custom_fov`.
 * @param env RID
 * @param scale float
 */
  environmentSetSkyCustomFov(env: RID, scale: float): void;
/**
 * Sets the rotation of the background `Sky` expressed as a `Basis`. Equivalent to `Environment.sky_rotation`, where the rotation vector is used to construct the `Basis`.
 * @param env RID
 * @param orientation Basis
 */
  environmentSetSkyOrientation(env: RID, orientation: Basis): void;
/**
 * Sets the variables to be used with the screen-space ambient occlusion (SSAO) post-process effect. See `Environment` for more details.
 * @param env RID
 * @param enable boolean
 * @param radius float
 * @param intensity float
 * @param power float
 * @param detail float
 * @param horizon float
 * @param sharpness float
 * @param lightAffect float
 * @param aoChannelAffect float
 */
  environmentSetSsao(env: RID, enable: boolean, radius: float, intensity: float, power: float, detail: float, horizon: float, sharpness: float, lightAffect: float, aoChannelAffect: float): void;
/**
 * Sets the quality level of the screen-space ambient occlusion (SSAO) post-process effect. See `Environment` for more details.
 * @param quality int
 * @param halfSize boolean
 * @param adaptiveTarget float
 * @param blurPasses int
 * @param fadeoutFrom float
 * @param fadeoutTo float
 */
  environmentSetSsaoQuality(quality: int, halfSize: boolean, adaptiveTarget: float, blurPasses: int, fadeoutFrom: float, fadeoutTo: float): void;
/**
 * Sets the quality level of the screen-space indirect lighting (SSIL) post-process effect. See `Environment` for more details.
 * @param quality int
 * @param halfSize boolean
 * @param adaptiveTarget float
 * @param blurPasses int
 * @param fadeoutFrom float
 * @param fadeoutTo float
 */
  environmentSetSsilQuality(quality: int, halfSize: boolean, adaptiveTarget: float, blurPasses: int, fadeoutFrom: float, fadeoutTo: float): void;
/**
 * Sets the variables to be used with the screen-space reflections (SSR) post-process effect. See `Environment` for more details.
 * @param env RID
 * @param enable boolean
 * @param maxSteps int
 * @param fadeIn float
 * @param fadeOut float
 * @param depthTolerance float
 */
  environmentSetSsr(env: RID, enable: boolean, maxSteps: int, fadeIn: float, fadeOut: float, depthTolerance: float): void;
/**
 * @param quality int
 */
  environmentSetSsrRoughnessQuality(quality: int): void;
/**
 * Sets the variables to be used with the "tonemap" post-process effect. See `Environment` for more details.
 * @param env RID
 * @param toneMapper int
 * @param exposure float
 * @param white float
 */
  environmentSetTonemap(env: RID, toneMapper: int, exposure: float, white: float): void;
/**
 * Sets the variables to be used with the volumetric fog post-process effect. See `Environment` for more details.
 * @param env RID
 * @param enable boolean
 * @param density float
 * @param albedo Color
 * @param emission Color
 * @param emissionEnergy float
 * @param anisotropy float
 * @param length float
 * @param pDetailSpread float
 * @param giInject float
 * @param temporalReprojection boolean
 * @param temporalReprojectionAmount float
 * @param ambientInject float
 * @param skyAffect float
 */
  environmentSetVolumetricFog(env: RID, enable: boolean, density: float, albedo: Color, emission: Color, emissionEnergy: float, anisotropy: float, length: float, pDetailSpread: float, giInject: float, temporalReprojection: boolean, temporalReprojectionAmount: float, ambientInject: float, skyAffect: float): void;
/**
 * Enables filtering of the volumetric fog scattering buffer. This results in much smoother volumes with very few under-sampling artifacts.
 * @param active boolean
 */
  environmentSetVolumetricFogFilterActive(active: boolean): void;
/**
 * Sets the resolution of the volumetric fog's froxel buffer. `size` is modified by the screen's aspect ratio and then used to set the width and height of the buffer. While `depth` is directly used to set the depth of the buffer.
 * @param size int
 * @param depth int
 */
  environmentSetVolumetricFogVolumeSize(size: int, depth: int): void;
/**
 * Creates a new fog volume and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `fog_volume_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `FogVolume`.
 * @returns RID
 */
  fogVolumeCreate(): RID;
/**
 * Sets the `Material` of the fog volume. Can be either a `FogMaterial` or a custom `ShaderMaterial`.
 * @param fogVolume RID
 * @param material RID
 */
  fogVolumeSetMaterial(fogVolume: RID, material: RID): void;
/**
 * Sets the shape of the fog volume to either `RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID`, `RenderingServer.FOG_VOLUME_SHAPE_CONE`, `RenderingServer.FOG_VOLUME_SHAPE_CYLINDER`, `RenderingServer.FOG_VOLUME_SHAPE_BOX` or `RenderingServer.FOG_VOLUME_SHAPE_WORLD`.
 * @param fogVolume RID
 * @param shape int
 */
  fogVolumeSetShape(fogVolume: RID, shape: int): void;
/**
 * Sets the size of the fog volume when shape is `RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID`, `RenderingServer.FOG_VOLUME_SHAPE_CONE`, `RenderingServer.FOG_VOLUME_SHAPE_CYLINDER` or `RenderingServer.FOG_VOLUME_SHAPE_BOX`.
 * @param fogVolume RID
 * @param size Vector3
 */
  fogVolumeSetSize(fogVolume: RID, size: Vector3): void;
/**
 * Forces redrawing of all viewports at once. Must be called from the main thread.
 * @param swapBuffers boolean (optional, default: true)
 * @param frameStep float (optional, default: 0.0)
 */
  forceDraw(swapBuffers?: boolean, frameStep?: float): void;
/**
 * Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.
 */
  forceSync(): void;
/**
 * Tries to free an object in the RenderingServer. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingServer directly.
 * @param rid RID
 */
  freeRid(rid: RID): void;
/**
 * Returns the name of the current rendering driver. This can be `vulkan`, `d3d12`, `metal`, `opengl3`, `opengl3_es`, or `opengl3_angle`. See also `get_current_rendering_method`.
 * The rendering driver is determined by `ProjectSettings.rendering/rendering_device/driver`, the `--rendering-driver` command line argument that overrides this project setting, or an automatic fallback that is applied depending on the hardware.
 * @returns string
 */
  getCurrentRenderingDriverName(): string;
/**
 * Returns the name of the current rendering method. This can be `forward_plus`, `mobile`, or `gl_compatibility`. See also `get_current_rendering_driver_name`.
 * The rendering method is determined by `ProjectSettings.rendering/renderer/rendering_method`, the `--rendering-method` command line argument that overrides this project setting, or an automatic fallback that is applied depending on the hardware.
 * @returns string
 */
  getCurrentRenderingMethod(): string;
/**
 * Returns the default clear color which is used when a specific clear color has not been selected. See also `set_default_clear_color`.
 * @returns Color
 */
  getDefaultClearColor(): Color;
/**
 * Returns the time taken to setup rendering on the CPU in milliseconds. This value is shared across all viewports and does *not* require `viewport_set_measure_render_time` to be enabled on a viewport to be queried. See also `viewport_get_measured_render_time_cpu`.
 * @returns float
 */
  getFrameSetupTimeCpu(): float;
/**
 * Returns the global RenderingDevice.
 * 
 * **Note:** When using the OpenGL rendering driver or when running in headless mode, this function always returns `null`.
 * @returns RenderingDevice
 */
  getRenderingDevice(): RenderingDevice;
/**
 * Returns a statistic about the rendering engine which can be used for performance profiling. See `RenderingServer.RenderingInfo` for a list of values that can be queried. See also `viewport_get_render_info`, which returns information specific to a viewport.
 * 
 * **Note:** Only 3D rendering is currently taken into account by some of these values, such as the number of draw calls.
 * 
 * **Note:** Rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, `get_rendering_info` returns `0`. To print rendering information in `_ready()` successfully, use the following:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    for _i in 2:
 * 				        await get_tree().process_frame
 * 
 * 				    print(RenderingServer.get_rendering_info(RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME))
 * 				
 * 
 * ```
 * @param info int
 * @returns int
 */
  getRenderingInfo(info: int): int;
/**
 * Returns the parameters of a shader.
 * @param shader RID
 * @returns Dictionary[]
 */
  getShaderParameterList(shader: RID): Dictionary[];
/**
 * Returns the RID of the test cube. This mesh will be created and returned on the first call to `get_test_cube`, then it will be cached for subsequent calls. See also `make_sphere_mesh`.
 * @returns RID
 */
  getTestCube(): RID;
/**
 * Returns the RID of a 256×256 texture with a testing pattern on it (in `Image.FORMAT_RGB8` format). This texture will be created and returned on the first call to `get_test_texture`, then it will be cached for subsequent calls. See also `get_white_texture`.
 * 
 * **Example:** Get the test texture and apply it to a `Sprite2D` node:
 * 
 * 				```gdscript
 * 
 * 				var texture_rid = RenderingServer.get_test_texture()
 * 				var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
 * 				$Sprite2D.texture = texture
 * 				
 * 
 * ```
 * @returns RID
 */
  getTestTexture(): RID;
/**
 * Returns the version of the graphics video adapter *currently in use* (e.g. "1.2.189" for Vulkan, "3.3.0 NVIDIA 510.60.02" for OpenGL). This version may be different from the actual latest version supported by the hardware, as Godot may not always request the latest version. See also `OS.get_video_adapter_driver_info`.
 * 
 * **Note:** When running a headless or server binary, this function returns an empty string.
 * @returns string
 */
  getVideoAdapterApiVersion(): string;
/**
 * Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2").
 * 
 * **Note:** When running a headless or server binary, this function returns an empty string.
 * 
 * **Note:** On the web platform, some browsers such as Firefox may report a different, fixed GPU name such as "GeForce GTX 980" (regardless of the user's actual GPU model). This is done to make fingerprinting more difficult.
 * @returns string
 */
  getVideoAdapterName(): string;
/**
 * Returns the type of the video adapter. Since dedicated graphics cards from a given generation will *usually* be significantly faster than integrated graphics made in the same generation, the device type can be used as a basis for automatic graphics settings adjustment. However, this is not always true, so make sure to provide users with a way to manually override graphics settings.
 * 
 * **Note:** When using the OpenGL rendering driver or when running in headless mode, this function always returns `RenderingDevice.DEVICE_TYPE_OTHER`.
 * @returns int
 */
  getVideoAdapterType(): int;
/**
 * Returns the vendor of the video adapter (e.g. "NVIDIA Corporation").
 * 
 * **Note:** When running a headless or server binary, this function returns an empty string.
 * @returns string
 */
  getVideoAdapterVendor(): string;
/**
 * Returns the ID of a 4×4 white texture (in `Image.FORMAT_RGB8` format). This texture will be created and returned on the first call to `get_white_texture`, then it will be cached for subsequent calls. See also `get_test_texture`.
 * 
 * **Example:** Get the white texture and apply it to a `Sprite2D` node:
 * 
 * 				```gdscript
 * 
 * 				var texture_rid = RenderingServer.get_white_texture()
 * 				var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
 * 				$Sprite2D.texture = texture
 * 				
 * 
 * ```
 * @returns RID
 */
  getWhiteTexture(): RID;
/**
 * If `half_resolution` is `true`, renders `VoxelGI` and SDFGI (`Environment.sdfgi_enabled`) buffers at halved resolution on each axis (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. `LightmapGI` rendering is not affected by this setting. Equivalent to `ProjectSettings.rendering/global_illumination/gi/use_half_resolution`.
 * @param halfResolution boolean
 */
  giSetUseHalfResolution(halfResolution: boolean): void;
/**
 * Creates a new global shader uniform.
 * 
 * **Note:** Global shader parameter names are case-sensitive.
 * @param name StringName
 * @param type_ int
 * @param defaultValue Variant
 */
  globalShaderParameterAdd(name: StringName, type_: int, defaultValue: Variant): void;
/**
 * Returns the value of the global shader uniform specified by `name`.
 * 
 * **Note:** `global_shader_parameter_get` has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
 * @param name StringName
 * @returns Variant
 */
  globalShaderParameterGet(name: StringName): Variant;
/**
 * Returns the list of global shader uniform names.
 * 
 * **Note:** `global_shader_parameter_get` has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
 * @returns StringName[]
 */
  globalShaderParameterGetList(): StringName[];
/**
 * Returns the type associated to the global shader uniform specified by `name`.
 * 
 * **Note:** `global_shader_parameter_get` has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
 * @param name StringName
 * @returns int
 */
  globalShaderParameterGetType(name: StringName): int;
/**
 * Removes the global shader uniform specified by `name`.
 * @param name StringName
 */
  globalShaderParameterRemove(name: StringName): void;
/**
 * Sets the global shader uniform `name` to `value`.
 * @param name StringName
 * @param value Variant
 */
  globalShaderParameterSet(name: StringName, value: Variant): void;
/**
 * Overrides the global shader uniform `name` with `value`. Equivalent to the `ShaderGlobalsOverride` node.
 * @param name StringName
 * @param value Variant
 */
  globalShaderParameterSetOverride(name: StringName, value: Variant): void;
/**
 * Returns `true` if changes have been made to the RenderingServer's data. `force_draw` is usually called if this happens.
 * @returns boolean
 */
  hasChanged(): boolean;
/**
 * This method does nothing and always returns `false`.
 * @param feature int
 * @returns boolean
 * @deprecated This method has not been used since Godot 3.0.
 */
  hasFeature(feature: int): boolean;
/**
 * Returns `true` if the OS supports a certain `feature`. Features might be `s3tc`, `etc`, and `etc2`.
 * @param feature string
 * @returns boolean
 */
  hasOsFeature(feature: string): boolean;
/**
 * Attaches a unique Object ID to instance. Object ID must be attached to instance for proper culling with `instances_cull_aabb`, `instances_cull_convex`, and `instances_cull_ray`.
 * @param instance RID
 * @param id int
 */
  instanceAttachObjectInstanceId(instance: RID, id: int): void;
/**
 * Attaches a skeleton to an instance. Removes the previous skeleton from the instance.
 * @param instance RID
 * @param skeleton RID
 */
  instanceAttachSkeleton(instance: RID, skeleton: RID): void;
/**
 * Creates a visual instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * An instance is a way of placing a 3D object in the scenario. Objects like particles, meshes, reflection probes and decals need to be associated with an instance to be visible in the scenario using `instance_set_base`.
 * 
 * **Note:** The equivalent node is `VisualInstance3D`.
 * @returns RID
 */
  instanceCreate(): RID;
/**
 * Creates a visual instance, adds it to the RenderingServer, and sets both base and scenario. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method. This is a shorthand for using `instance_create` and setting the base and scenario manually.
 * @param base RID
 * @param scenario RID
 * @returns RID
 */
  instanceCreate2(base: RID, scenario: RID): RID;
/**
 * Returns the value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to `GeometryInstance3D.get_instance_shader_parameter`.
 * 
 * **Note:** Per-instance shader parameter names are case-sensitive.
 * @param instance RID
 * @param parameter StringName
 * @returns Variant
 */
  instanceGeometryGetShaderParameter(instance: RID, parameter: StringName): Variant;
/**
 * Returns the default value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to `GeometryInstance3D.get_instance_shader_parameter`.
 * @param instance RID
 * @param parameter StringName
 * @returns Variant
 */
  instanceGeometryGetShaderParameterDefaultValue(instance: RID, parameter: StringName): Variant;
/**
 * Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified 3D geometry instance. The returned dictionary is in PropertyInfo format, with the keys `name`, `class_name`, `type`, `hint`, `hint_string` and `usage`. Equivalent to `GeometryInstance3D.get_instance_shader_parameter`.
 * @param instance RID
 * @returns Dictionary[]
 */
  instanceGeometryGetShaderParameterList(instance: RID): Dictionary[];
/**
 * Sets the shadow casting setting to one of `ShadowCastingSetting`. Equivalent to `GeometryInstance3D.cast_shadow`.
 * @param instance RID
 * @param shadowCastingSetting int
 */
  instanceGeometrySetCastShadowsSetting(instance: RID, shadowCastingSetting: int): void;
/**
 * Sets the flag for a given `InstanceFlags`. See `InstanceFlags` for more details.
 * @param instance RID
 * @param flag int
 * @param enabled boolean
 */
  instanceGeometrySetFlag(instance: RID, flag: int, enabled: boolean): void;
/**
 * Sets the lightmap GI instance to use for the specified 3D geometry instance. The lightmap UV scale for the specified instance (equivalent to `GeometryInstance3D.gi_lightmap_scale`) and lightmap atlas slice must also be specified.
 * @param instance RID
 * @param lightmap RID
 * @param lightmapUvScale Rect2
 * @param lightmapSlice int
 */
  instanceGeometrySetLightmap(instance: RID, lightmap: RID, lightmapUvScale: Rect2, lightmapSlice: int): void;
/**
 * Sets the level of detail bias to use when rendering the specified 3D geometry instance. Higher values result in higher detail from further away. Equivalent to `GeometryInstance3D.lod_bias`.
 * @param instance RID
 * @param lodBias float
 */
  instanceGeometrySetLodBias(instance: RID, lodBias: float): void;
/**
 * Sets a material that will be rendered for all surfaces on top of active materials for the mesh associated with this instance. Equivalent to `GeometryInstance3D.material_overlay`.
 * @param instance RID
 * @param material RID
 */
  instanceGeometrySetMaterialOverlay(instance: RID, material: RID): void;
/**
 * Sets a material that will override the material for all surfaces on the mesh associated with this instance. Equivalent to `GeometryInstance3D.material_override`.
 * @param instance RID
 * @param material RID
 */
  instanceGeometrySetMaterialOverride(instance: RID, material: RID): void;
/**
 * Sets the per-instance shader uniform on the specified 3D geometry instance. Equivalent to `GeometryInstance3D.set_instance_shader_parameter`.
 * @param instance RID
 * @param parameter StringName
 * @param value Variant
 */
  instanceGeometrySetShaderParameter(instance: RID, parameter: StringName, value: Variant): void;
/**
 * Sets the transparency for the given geometry instance. Equivalent to `GeometryInstance3D.transparency`.
 * A transparency of `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting `transparency` to a value greater than `0.0` (exclusive) will *not* disable shadow rendering.
 * In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.
 * 
 * **Note:** `transparency` is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.
 * @param instance RID
 * @param transparency float
 */
  instanceGeometrySetTransparency(instance: RID, transparency: float): void;
/**
 * Sets the visibility range values for the given geometry instance. Equivalent to `GeometryInstance3D.visibility_range_begin` and related properties.
 * @param instance RID
 * @param min float
 * @param max float
 * @param minMargin float
 * @param maxMargin float
 * @param fadeMode int
 */
  instanceGeometrySetVisibilityRange(instance: RID, min: float, max: float, minMargin: float, maxMargin: float, fadeMode: int): void;
/**
 * Prevents physics interpolation for the current physics tick.
 * This is useful when moving an instance to a new location, to give an instantaneous change rather than interpolation from the previous location.
 * @param instance RID
 */
  instanceResetPhysicsInterpolation(instance: RID): void;
/**
 * Returns an array of object IDs intersecting with the provided AABB. Only 3D nodes that inherit from `VisualInstance3D` are considered, such as `MeshInstance3D` or `DirectionalLight3D`. Use `@GlobalScope.instance_from_id` to obtain the actual nodes. A scenario RID must be provided, which is available in the `World3D` you want to query. This forces an update for all resources queued to update.
 * 
 * **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
 * @param aabb AABB
 * @param scenario RID (optional, default: RID())
 * @returns PackedInt64Array
 */
  instancesCullAabb(aabb: AABB, scenario?: RID): PackedInt64Array;
/**
 * Returns an array of object IDs intersecting with the provided convex shape. Only 3D nodes that inherit from `VisualInstance3D` are considered, such as `MeshInstance3D` or `DirectionalLight3D`. Use `@GlobalScope.instance_from_id` to obtain the actual nodes. A scenario RID must be provided, which is available in the `World3D` you want to query. This forces an update for all resources queued to update.
 * 
 * **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
 * @param convex Plane[]
 * @param scenario RID (optional, default: RID())
 * @returns PackedInt64Array
 */
  instancesCullConvex(convex: Plane[], scenario?: RID): PackedInt64Array;
/**
 * Returns an array of object IDs intersecting with the provided 3D ray. Only 3D nodes that inherit from `VisualInstance3D` are considered, such as `MeshInstance3D` or `DirectionalLight3D`. Use `@GlobalScope.instance_from_id` to obtain the actual nodes. A scenario RID must be provided, which is available in the `World3D` you want to query. This forces an update for all resources queued to update.
 * 
 * **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
 * @param from_ Vector3
 * @param to Vector3
 * @param scenario RID (optional, default: RID())
 * @returns PackedInt64Array
 */
  instancesCullRay(from_: Vector3, to: Vector3, scenario?: RID): PackedInt64Array;
/**
 * Sets the base of the instance. A base can be any of the 3D objects that are created in the RenderingServer that can be displayed. For example, any of the light types, mesh, multimesh, particle system, reflection probe, decal, lightmap, voxel GI and visibility notifiers are all types that can be set as the base of an instance in order to be displayed in the scenario.
 * @param instance RID
 * @param base RID
 */
  instanceSetBase(instance: RID, base: RID): void;
/**
 * Sets the weight for a given blend shape associated with this instance.
 * @param instance RID
 * @param shape int
 * @param weight float
 */
  instanceSetBlendShapeWeight(instance: RID, shape: int, weight: float): void;
/**
 * Sets a custom AABB to use when culling objects from the view frustum. Equivalent to setting `GeometryInstance3D.custom_aabb`.
 * @param instance RID
 * @param aabb AABB
 */
  instanceSetCustomAabb(instance: RID, aabb: AABB): void;
/**
 * Sets a margin to increase the size of the AABB when culling objects from the view frustum. This allows you to avoid culling objects that fall outside the view frustum. Equivalent to `GeometryInstance3D.extra_cull_margin`.
 * @param instance RID
 * @param margin float
 */
  instanceSetExtraVisibilityMargin(instance: RID, margin: float): void;
/**
 * If `true`, ignores both frustum and occlusion culling on the specified 3D geometry instance. This is not the same as `GeometryInstance3D.ignore_occlusion_culling`, which only ignores occlusion culling and leaves frustum culling intact.
 * @param instance RID
 * @param enabled boolean
 */
  instanceSetIgnoreCulling(instance: RID, enabled: boolean): void;
/**
 * Turns on and off physics interpolation for the instance.
 * @param instance RID
 * @param interpolated boolean
 */
  instanceSetInterpolated(instance: RID, interpolated: boolean): void;
/**
 * Sets the render layers that this instance will be drawn to. Equivalent to `VisualInstance3D.layers`.
 * @param instance RID
 * @param mask int
 */
  instanceSetLayerMask(instance: RID, mask: int): void;
/**
 * Sets the sorting offset and switches between using the bounding box or instance origin for depth sorting.
 * @param instance RID
 * @param sortingOffset float
 * @param useAabbCenter boolean
 */
  instanceSetPivotData(instance: RID, sortingOffset: float, useAabbCenter: boolean): void;
/**
 * Sets the scenario that the instance is in. The scenario is the 3D world that the objects will be displayed in.
 * @param instance RID
 * @param scenario RID
 */
  instanceSetScenario(instance: RID, scenario: RID): void;
/**
 * Sets the override material of a specific surface. Equivalent to `MeshInstance3D.set_surface_override_material`.
 * @param instance RID
 * @param surface int
 * @param material RID
 */
  instanceSetSurfaceOverrideMaterial(instance: RID, surface: int, material: RID): void;
/**
 * Sets the world space transform of the instance. Equivalent to `Node3D.global_transform`.
 * @param instance RID
 * @param transform Transform3D
 */
  instanceSetTransform(instance: RID, transform: Transform3D): void;
/**
 * Sets the visibility parent for the given instance. Equivalent to `Node3D.visibility_parent`.
 * @param instance RID
 * @param parent RID
 */
  instanceSetVisibilityParent(instance: RID, parent: RID): void;
/**
 * Sets whether an instance is drawn or not. Equivalent to `Node3D.visible`.
 * @param instance RID
 * @param visible boolean
 */
  instanceSetVisible(instance: RID, visible: boolean): void;
/**
 * Returns `true` if our code is currently executing on the rendering thread.
 * @returns boolean
 */
  isOnRenderThread(): boolean;
/**
 * If `true`, this directional light will blend between shadow map splits resulting in a smoother transition between them. Equivalent to `DirectionalLight3D.directional_shadow_blend_splits`.
 * @param light RID
 * @param enable boolean
 */
  lightDirectionalSetBlendSplits(light: RID, enable: boolean): void;
/**
 * Sets the shadow mode for this directional light. Equivalent to `DirectionalLight3D.directional_shadow_mode`. See `LightDirectionalShadowMode` for options.
 * @param light RID
 * @param mode int
 */
  lightDirectionalSetShadowMode(light: RID, mode: int): void;
/**
 * If `true`, this light will not be used for anything except sky shaders. Use this for lights that impact your sky shader that you may want to hide from affecting the rest of the scene. For example, you may want to enable this when the sun in your sky shader falls below the horizon.
 * @param light RID
 * @param mode int
 */
  lightDirectionalSetSkyMode(light: RID, mode: int): void;
/**
 * Creates a new lightmap global illumination instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `lightmap_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `LightmapGI`.
 * @returns RID
 */
  lightmapCreate(): RID;
/**
 * @param lightmap RID
 * @returns PackedInt32Array
 */
  lightmapGetProbeCaptureBspTree(lightmap: RID): PackedInt32Array;
/**
 * @param lightmap RID
 * @returns PackedVector3Array
 */
  lightmapGetProbeCapturePoints(lightmap: RID): PackedVector3Array;
/**
 * @param lightmap RID
 * @returns PackedColorArray
 */
  lightmapGetProbeCaptureSh(lightmap: RID): PackedColorArray;
/**
 * @param lightmap RID
 * @returns PackedInt32Array
 */
  lightmapGetProbeCaptureTetrahedra(lightmap: RID): PackedInt32Array;
/**
 * Used to inform the renderer what exposure normalization value was used while baking the lightmap. This value will be used and modulated at run time to ensure that the lightmap maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see `camera_attributes_set_exposure`.
 * @param lightmap RID
 * @param bakedExposure float
 */
  lightmapSetBakedExposureNormalization(lightmap: RID, bakedExposure: float): void;
/**
 * @param lightmap RID
 * @param bounds AABB
 */
  lightmapSetProbeBounds(lightmap: RID, bounds: AABB): void;
/**
 * @param lightmap RID
 * @param points PackedVector3Array
 * @param pointSh PackedColorArray
 * @param tetrahedra PackedInt32Array
 * @param bspTree PackedInt32Array
 */
  lightmapSetProbeCaptureData(lightmap: RID, points: PackedVector3Array, pointSh: PackedColorArray, tetrahedra: PackedInt32Array, bspTree: PackedInt32Array): void;
/**
 * @param speed float
 */
  lightmapSetProbeCaptureUpdateSpeed(speed: float): void;
/**
 * @param lightmap RID
 * @param interior boolean
 */
  lightmapSetProbeInterior(lightmap: RID, interior: boolean): void;
/**
 * Set the textures on the given `lightmap` GI instance to the texture array pointed to by the `light` RID. If the lightmap texture was baked with `LightmapGI.directional` set to `true`, then `uses_sh` must also be `true`.
 * @param lightmap RID
 * @param light RID
 * @param usesSh boolean
 */
  lightmapSetTextures(lightmap: RID, light: RID, usesSh: boolean): void;
/**
 * Toggles whether a bicubic filter should be used when lightmaps are sampled. This smoothens their appearance at a performance cost.
 * @param enable boolean
 */
  lightmapsSetBicubicFilter(enable: boolean): void;
/**
 * Sets whether to use a dual paraboloid or a cubemap for the shadow map. Dual paraboloid is faster but may suffer from artifacts. Equivalent to `OmniLight3D.omni_shadow_mode`.
 * @param light RID
 * @param mode int
 */
  lightOmniSetShadowMode(light: RID, mode: int): void;
/**
 * Sets the texture filter mode to use when rendering light projectors. This parameter is global and cannot be set on a per-light basis.
 * @param filter int
 */
  lightProjectorsSetFilter(filter: int): void;
/**
 * Sets the bake mode to use for the specified 3D light. Equivalent to `Light3D.light_bake_mode`.
 * @param light RID
 * @param bakeMode int
 */
  lightSetBakeMode(light: RID, bakeMode: int): void;
/**
 * Sets the color of the light. Equivalent to `Light3D.light_color`.
 * @param light RID
 * @param color Color
 */
  lightSetColor(light: RID, color: Color): void;
/**
 * Sets the cull mask for this 3D light. Lights only affect objects in the selected layers. Equivalent to `Light3D.light_cull_mask`.
 * @param light RID
 * @param mask int
 */
  lightSetCullMask(light: RID, mask: int): void;
/**
 * Sets the distance fade for this 3D light. This acts as a form of level of detail (LOD) and can be used to improve performance. Equivalent to `Light3D.distance_fade_enabled`, `Light3D.distance_fade_begin`, `Light3D.distance_fade_shadow`, and `Light3D.distance_fade_length`.
 * @param decal RID
 * @param enabled boolean
 * @param begin float
 * @param shadow float
 * @param length float
 */
  lightSetDistanceFade(decal: RID, enabled: boolean, begin: float, shadow: float, length: float): void;
/**
 * Sets the maximum SDFGI cascade in which the 3D light's indirect lighting is rendered. Higher values allow the light to be rendered in SDFGI further away from the camera.
 * @param light RID
 * @param cascade int
 */
  lightSetMaxSdfgiCascade(light: RID, cascade: int): void;
/**
 * If `true`, the 3D light will subtract light instead of adding light. Equivalent to `Light3D.light_negative`.
 * @param light RID
 * @param enable boolean
 */
  lightSetNegative(light: RID, enable: boolean): void;
/**
 * Sets the specified 3D light parameter. See `LightParam` for options. Equivalent to `Light3D.set_param`.
 * @param light RID
 * @param param int
 * @param value float
 */
  lightSetParam(light: RID, param: int, value: float): void;
/**
 * Sets the projector texture to use for the specified 3D light. Equivalent to `Light3D.light_projector`.
 * @param light RID
 * @param texture RID
 */
  lightSetProjector(light: RID, texture: RID): void;
/**
 * If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with `instance_geometry_set_cast_shadows_setting`. Equivalent to `Light3D.shadow_reverse_cull_face`.
 * @param light RID
 * @param enabled boolean
 */
  lightSetReverseCullFaceMode(light: RID, enabled: boolean): void;
/**
 * If `true`, light will cast shadows. Equivalent to `Light3D.shadow_enabled`.
 * @param light RID
 * @param enabled boolean
 */
  lightSetShadow(light: RID, enabled: boolean): void;
/**
 * Sets the shadow caster mask for this 3D light. Shadows will only be cast using objects in the selected layers. Equivalent to `Light3D.shadow_caster_mask`.
 * @param light RID
 * @param mask int
 */
  lightSetShadowCasterMask(light: RID, mask: int): void;
/**
 * Returns a mesh of a sphere with the given number of horizontal subdivisions, vertical subdivisions and radius. See also `get_test_cube`.
 * @param latitudes int
 * @param longitudes int
 * @param radius float
 * @returns RID
 */
  makeSphereMesh(latitudes: int, longitudes: int, radius: float): RID;
/**
 * Creates an empty material and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `material_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `Material`.
 * @returns RID
 */
  materialCreate(): RID;
/**
 * Returns the value of a certain material's parameter.
 * @param material RID
 * @param parameter StringName
 * @returns Variant
 */
  materialGetParam(material: RID, parameter: StringName): Variant;
/**
 * Sets an object's next material.
 * @param material RID
 * @param nextMaterial RID
 */
  materialSetNextPass(material: RID, nextMaterial: RID): void;
/**
 * Sets a material's parameter.
 * @param material RID
 * @param parameter StringName
 * @param value Variant
 */
  materialSetParam(material: RID, parameter: StringName, value: Variant): void;
/**
 * Sets a material's render priority.
 * @param material RID
 * @param priority int
 */
  materialSetRenderPriority(material: RID, priority: int): void;
/**
 * Sets a shader material's shader.
 * @param shaderMaterial RID
 * @param shader RID
 */
  materialSetShader(shaderMaterial: RID, shader: RID): void;
/**
 * @param mesh RID
 * @param surface GodotDictionary<any>
 */
  meshAddSurface(mesh: RID, surface: GodotDictionary<any>): void;
/**
 * @param mesh RID
 * @param primitive int
 * @param arrays GodotArray<any>
 * @param blendShapes GodotArray<any> (optional, default: [])
 * @param lods GodotDictionary<any> (optional, default: {})
 * @param compressFormat int (optional, default: 0)
 */
  meshAddSurfaceFromArrays(mesh: RID, primitive: int, arrays: GodotArray<any>, blendShapes?: GodotArray<any>, lods?: GodotDictionary<any>, compressFormat?: int): void;
/**
 * Removes all surfaces from a mesh.
 * @param mesh RID
 */
  meshClear(mesh: RID): void;
/**
 * Creates a new mesh and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `mesh_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this mesh to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent resource is `Mesh`.
 * @returns RID
 */
  meshCreate(): RID;
/**
 * @param surfaces Dictionary[]
 * @param blendShapeCount int (optional, default: 0)
 * @returns RID
 */
  meshCreateFromSurfaces(surfaces: Dictionary[], blendShapeCount?: int): RID;
/**
 * Returns a mesh's blend shape count.
 * @param mesh RID
 * @returns int
 */
  meshGetBlendShapeCount(mesh: RID): int;
/**
 * Returns a mesh's blend shape mode.
 * @param mesh RID
 * @returns int
 */
  meshGetBlendShapeMode(mesh: RID): int;
/**
 * Returns a mesh's custom aabb.
 * @param mesh RID
 * @returns AABB
 */
  meshGetCustomAabb(mesh: RID): AABB;
/**
 * @param mesh RID
 * @param surface int
 * @returns GodotDictionary<any>
 */
  meshGetSurface(mesh: RID, surface: int): GodotDictionary<any>;
/**
 * Returns a mesh's number of surfaces.
 * @param mesh RID
 * @returns int
 */
  meshGetSurfaceCount(mesh: RID): int;
/**
 * Sets a mesh's blend shape mode.
 * @param mesh RID
 * @param mode int
 */
  meshSetBlendShapeMode(mesh: RID, mode: int): void;
/**
 * Sets a mesh's custom aabb.
 * @param mesh RID
 * @param aabb AABB
 */
  meshSetCustomAabb(mesh: RID, aabb: AABB): void;
/**
 * @param mesh RID
 * @param shadowMesh RID
 */
  meshSetShadowMesh(mesh: RID, shadowMesh: RID): void;
/**
 * Returns a mesh's surface's buffer arrays.
 * @param mesh RID
 * @param surface int
 * @returns GodotArray<any>
 */
  meshSurfaceGetArrays(mesh: RID, surface: int): GodotArray<any>;
/**
 * Returns a mesh's surface's arrays for blend shapes.
 * @param mesh RID
 * @param surface int
 * @returns GodotArray<any>
 */
  meshSurfaceGetBlendShapeArrays(mesh: RID, surface: int): GodotArray<any>;
/**
 * Returns the stride of the attribute buffer for a mesh with given `format`.
 * @param format int
 * @param vertexCount int
 * @returns int
 */
  meshSurfaceGetFormatAttributeStride(format: int, vertexCount: int): int;
/**
 * Returns the stride of the combined normals and tangents for a mesh with given `format`. Note importantly that, while normals and tangents are in the vertex buffer with vertices, they are only interleaved with each other and so have a different stride than vertex positions.
 * @param format int
 * @param vertexCount int
 * @returns int
 */
  meshSurfaceGetFormatNormalTangentStride(format: int, vertexCount: int): int;
/**
 * Returns the offset of a given attribute by `array_index` in the start of its respective buffer.
 * @param format int
 * @param vertexCount int
 * @param arrayIndex int
 * @returns int
 */
  meshSurfaceGetFormatOffset(format: int, vertexCount: int, arrayIndex: int): int;
/**
 * Returns the stride of the skin buffer for a mesh with given `format`.
 * @param format int
 * @param vertexCount int
 * @returns int
 */
  meshSurfaceGetFormatSkinStride(format: int, vertexCount: int): int;
/**
 * Returns the stride of the vertex positions for a mesh with given `format`. Note importantly that vertex positions are stored consecutively and are not interleaved with the other attributes in the vertex buffer (normals and tangents).
 * @param format int
 * @param vertexCount int
 * @returns int
 */
  meshSurfaceGetFormatVertexStride(format: int, vertexCount: int): int;
/**
 * Returns a mesh's surface's material.
 * @param mesh RID
 * @param surface int
 * @returns RID
 */
  meshSurfaceGetMaterial(mesh: RID, surface: int): RID;
/**
 * Removes the surface at the given index from the Mesh, shifting surfaces with higher index down by one.
 * @param mesh RID
 * @param surface int
 */
  meshSurfaceRemove(mesh: RID, surface: int): void;
/**
 * Sets a mesh's surface's material.
 * @param mesh RID
 * @param surface int
 * @param material RID
 */
  meshSurfaceSetMaterial(mesh: RID, surface: int, material: RID): void;
/**
 * @param mesh RID
 * @param surface int
 * @param offset int
 * @param data PackedByteArray
 */
  meshSurfaceUpdateAttributeRegion(mesh: RID, surface: int, offset: int, data: PackedByteArray): void;
/**
 * @param mesh RID
 * @param surface int
 * @param offset int
 * @param data PackedByteArray
 */
  meshSurfaceUpdateSkinRegion(mesh: RID, surface: int, offset: int, data: PackedByteArray): void;
/**
 * @param mesh RID
 * @param surface int
 * @param offset int
 * @param data PackedByteArray
 */
  meshSurfaceUpdateVertexRegion(mesh: RID, surface: int, offset: int, data: PackedByteArray): void;
/**
 * @param multimesh RID
 * @param instances int
 * @param transformFormat int
 * @param colorFormat boolean (optional, default: false)
 * @param customDataFormat boolean (optional, default: false)
 * @param useIndirect boolean (optional, default: false)
 */
  multimeshAllocateData(multimesh: RID, instances: int, transformFormat: int, colorFormat?: boolean, customDataFormat?: boolean, useIndirect?: boolean): void;
/**
 * Creates a new multimesh on the RenderingServer and returns an `RID` handle. This RID will be used in all `multimesh_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this multimesh to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent resource is `MultiMesh`.
 * @returns RID
 */
  multimeshCreate(): RID;
/**
 * Calculates and returns the axis-aligned bounding box that encloses all instances within the multimesh.
 * @param multimesh RID
 * @returns AABB
 */
  multimeshGetAabb(multimesh: RID): AABB;
/**
 * Returns the MultiMesh data (such as instance transforms, colors, etc.). See `multimesh_set_buffer` for details on the returned data.
 * 
 * **Note:** If the buffer is in the engine's internal cache, it will have to be fetched from GPU memory and possibly decompressed. This means `multimesh_get_buffer` is potentially a slow operation and should be avoided whenever possible.
 * @param multimesh RID
 * @returns PackedFloat32Array
 */
  multimeshGetBuffer(multimesh: RID): PackedFloat32Array;
/**
 * Returns the `RenderingDevice` `RID` handle of the `MultiMesh`, which can be used as any other buffer on the Rendering Device.
 * @param multimesh RID
 * @returns RID
 */
  multimeshGetBufferRdRid(multimesh: RID): RID;
/**
 * Returns the `RenderingDevice` `RID` handle of the `MultiMesh` command buffer. This `RID` is only valid if `use_indirect` is set to `true` when allocating data through `multimesh_allocate_data`. It can be used to directly modify the instance count via buffer.
 * The data structure is dependent on both how many surfaces the mesh contains and whether it is indexed or not, the buffer has 5 integers in it, with the last unused if the mesh is not indexed.
 * Each of the values in the buffer correspond to these options:
 * [codeblock lang=text]
 * Indexed:
 * 0 - indexCount;
 * 1 - instanceCount;
 * 2 - firstIndex;
 * 3 - vertexOffset;
 * 4 - firstInstance;
 * Non Indexed:
 * 0 - vertexCount;
 * 1 - instanceCount;
 * 2 - firstVertex;
 * 3 - firstInstance;
 * 4 - unused;
 * [/codeblock]
 * @param multimesh RID
 * @returns RID
 */
  multimeshGetCommandBufferRdRid(multimesh: RID): RID;
/**
 * Returns the custom AABB defined for this MultiMesh resource.
 * @param multimesh RID
 * @returns AABB
 */
  multimeshGetCustomAabb(multimesh: RID): AABB;
/**
 * Returns the number of instances allocated for this multimesh.
 * @param multimesh RID
 * @returns int
 */
  multimeshGetInstanceCount(multimesh: RID): int;
/**
 * Returns the RID of the mesh that will be used in drawing this multimesh.
 * @param multimesh RID
 * @returns RID
 */
  multimeshGetMesh(multimesh: RID): RID;
/**
 * Returns the number of visible instances for this multimesh.
 * @param multimesh RID
 * @returns int
 */
  multimeshGetVisibleInstances(multimesh: RID): int;
/**
 * Returns the color by which the specified instance will be modulated.
 * @param multimesh RID
 * @param index int
 * @returns Color
 */
  multimeshInstanceGetColor(multimesh: RID, index: int): Color;
/**
 * Returns the custom data associated with the specified instance.
 * @param multimesh RID
 * @param index int
 * @returns Color
 */
  multimeshInstanceGetCustomData(multimesh: RID, index: int): Color;
/**
 * Returns the `Transform3D` of the specified instance.
 * @param multimesh RID
 * @param index int
 * @returns Transform3D
 */
  multimeshInstanceGetTransform(multimesh: RID, index: int): Transform3D;
/**
 * Returns the `Transform2D` of the specified instance. For use when the multimesh is set to use 2D transforms.
 * @param multimesh RID
 * @param index int
 * @returns Transform2D
 */
  multimeshInstanceGetTransform2d(multimesh: RID, index: int): Transform2D;
/**
 * Prevents physics interpolation for the specified instance during the current physics tick.
 * This is useful when moving an instance to a new location, to give an instantaneous change rather than interpolation from the previous location.
 * @param multimesh RID
 * @param index int
 */
  multimeshInstanceResetPhysicsInterpolation(multimesh: RID, index: int): void;
/**
 * Sets the color by which this instance will be modulated. Equivalent to `MultiMesh.set_instance_color`.
 * @param multimesh RID
 * @param index int
 * @param color Color
 */
  multimeshInstanceSetColor(multimesh: RID, index: int, color: Color): void;
/**
 * Sets the custom data for this instance. Custom data is passed as a `Color`, but is interpreted as a `vec4` in the shader. Equivalent to `MultiMesh.set_instance_custom_data`.
 * @param multimesh RID
 * @param index int
 * @param customData Color
 */
  multimeshInstanceSetCustomData(multimesh: RID, index: int, customData: Color): void;
/**
 * Sets the `Transform3D` for this instance. Equivalent to `MultiMesh.set_instance_transform`.
 * @param multimesh RID
 * @param index int
 * @param transform Transform3D
 */
  multimeshInstanceSetTransform(multimesh: RID, index: int, transform: Transform3D): void;
/**
 * Sets the `Transform2D` for this instance. For use when multimesh is used in 2D. Equivalent to `MultiMesh.set_instance_transform_2d`.
 * @param multimesh RID
 * @param index int
 * @param transform Transform2D
 */
  multimeshInstanceSetTransform2d(multimesh: RID, index: int, transform: Transform2D): void;
/**
 * Set the entire data to use for drawing the `multimesh` at once to `buffer` (such as instance transforms and colors). `buffer`'s size must match the number of instances multiplied by the per-instance data size (which depends on the enabled MultiMesh fields). Otherwise, an error message is printed and nothing is rendered. See also `multimesh_get_buffer`.
 * The per-instance data size and expected data order is:
 * [codeblock lang=text]
 * 2D:
 * - Position: 8 floats (8 floats for Transform2D)
 * - Position + Vertex color: 12 floats (8 floats for Transform2D, 4 floats for Color)
 * - Position + Custom data: 12 floats (8 floats for Transform2D, 4 floats of custom data)
 * - Position + Vertex color + Custom data: 16 floats (8 floats for Transform2D, 4 floats for Color, 4 floats of custom data)
 * 3D:
 * - Position: 12 floats (12 floats for Transform3D)
 * - Position + Vertex color: 16 floats (12 floats for Transform3D, 4 floats for Color)
 * - Position + Custom data: 16 floats (12 floats for Transform3D, 4 floats of custom data)
 * - Position + Vertex color + Custom data: 20 floats (12 floats for Transform3D, 4 floats for Color, 4 floats of custom data)
 * [/codeblock]
 * Instance transforms are in row-major order. Specifically:
 * - For `Transform2D` the float-order is: `(x.x, y.x, padding_float, origin.x, x.y, y.y, padding_float, origin.y)`.
 * - For `Transform3D` the float-order is: `(basis.x.x, basis.y.x, basis.z.x, origin.x, basis.x.y, basis.y.y, basis.z.y, origin.y, basis.x.z, basis.y.z, basis.z.z, origin.z)`.
 * @param multimesh RID
 * @param buffer PackedFloat32Array
 */
  multimeshSetBuffer(multimesh: RID, buffer: PackedFloat32Array): void;
/**
 * Alternative version of `multimesh_set_buffer` for use with physics interpolation.
 * Takes both an array of current data and an array of data for the previous physics tick.
 * @param multimesh RID
 * @param buffer PackedFloat32Array
 * @param bufferPrevious PackedFloat32Array
 */
  multimeshSetBufferInterpolated(multimesh: RID, buffer: PackedFloat32Array, bufferPrevious: PackedFloat32Array): void;
/**
 * Sets the custom AABB for this MultiMesh resource.
 * @param multimesh RID
 * @param aabb AABB
 */
  multimeshSetCustomAabb(multimesh: RID, aabb: AABB): void;
/**
 * Sets the mesh to be drawn by the multimesh. Equivalent to `MultiMesh.mesh`.
 * @param multimesh RID
 * @param mesh RID
 */
  multimeshSetMesh(multimesh: RID, mesh: RID): void;
/**
 * Turns on and off physics interpolation for this MultiMesh resource.
 * @param multimesh RID
 * @param interpolated boolean
 */
  multimeshSetPhysicsInterpolated(multimesh: RID, interpolated: boolean): void;
/**
 * Sets the physics interpolation quality for the `MultiMesh`.
 * A value of `MULTIMESH_INTERP_QUALITY_FAST` gives fast but low quality interpolation, a value of `MULTIMESH_INTERP_QUALITY_HIGH` gives slower but higher quality interpolation.
 * @param multimesh RID
 * @param quality int
 */
  multimeshSetPhysicsInterpolationQuality(multimesh: RID, quality: int): void;
/**
 * Sets the number of instances visible at a given time. If -1, all instances that have been allocated are drawn. Equivalent to `MultiMesh.visible_instance_count`.
 * @param multimesh RID
 * @param visible int
 */
  multimeshSetVisibleInstances(multimesh: RID, visible: int): void;
/**
 * Creates an occluder instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `occluder_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `Occluder3D` (not to be confused with the `OccluderInstance3D` node).
 * @returns RID
 */
  occluderCreate(): RID;
/**
 * Sets the mesh data for the given occluder RID, which controls the shape of the occlusion culling that will be performed.
 * @param occluder RID
 * @param vertices PackedVector3Array
 * @param indices PackedInt32Array
 */
  occluderSetMesh(occluder: RID, vertices: PackedVector3Array, indices: PackedInt32Array): void;
/**
 * Creates a new omni light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this omni light to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent node is `OmniLight3D`.
 * @returns RID
 */
  omniLightCreate(): RID;
/**
 * Creates a new 3D GPU particle collision or attractor and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `particles_collision_*` RenderingServer functions.
 * 
 * **Note:** The equivalent nodes are `GPUParticlesCollision3D` and `GPUParticlesAttractor3D`.
 * @returns RID
 */
  particlesCollisionCreate(): RID;
/**
 * Requests an update for the 3D GPU particle collision heightfield. This may be automatically called by the 3D GPU particle collision heightfield depending on its `GPUParticlesCollisionHeightField3D.update_mode`.
 * @param particlesCollision RID
 */
  particlesCollisionHeightFieldUpdate(particlesCollision: RID): void;
/**
 * Sets the attenuation `curve` for the 3D GPU particles attractor specified by the `particles_collision` RID. Only used for attractors, not colliders. Equivalent to `GPUParticlesAttractor3D.attenuation`.
 * @param particlesCollision RID
 * @param curve float
 */
  particlesCollisionSetAttractorAttenuation(particlesCollision: RID, curve: float): void;
/**
 * Sets the directionality `amount` for the 3D GPU particles attractor specified by the `particles_collision` RID. Only used for attractors, not colliders. Equivalent to `GPUParticlesAttractor3D.directionality`.
 * @param particlesCollision RID
 * @param amount float
 */
  particlesCollisionSetAttractorDirectionality(particlesCollision: RID, amount: float): void;
/**
 * Sets the `strength` for the 3D GPU particles attractor specified by the `particles_collision` RID. Only used for attractors, not colliders. Equivalent to `GPUParticlesAttractor3D.strength`.
 * @param particlesCollision RID
 * @param strength float
 */
  particlesCollisionSetAttractorStrength(particlesCollision: RID, strength: float): void;
/**
 * Sets the `extents` for the 3D GPU particles collision by the `particles_collision` RID. Equivalent to `GPUParticlesCollisionBox3D.size`, `GPUParticlesCollisionSDF3D.size`, `GPUParticlesCollisionHeightField3D.size`, `GPUParticlesAttractorBox3D.size` or `GPUParticlesAttractorVectorField3D.size` depending on the `particles_collision` type.
 * @param particlesCollision RID
 * @param extents Vector3
 */
  particlesCollisionSetBoxExtents(particlesCollision: RID, extents: Vector3): void;
/**
 * Sets the collision or attractor shape `type` for the 3D GPU particles collision or attractor specified by the `particles_collision` RID.
 * @param particlesCollision RID
 * @param type_ int
 */
  particlesCollisionSetCollisionType(particlesCollision: RID, type_: int): void;
/**
 * Sets the cull `mask` for the 3D GPU particles collision or attractor specified by the `particles_collision` RID. Equivalent to `GPUParticlesCollision3D.cull_mask` or `GPUParticlesAttractor3D.cull_mask` depending on the `particles_collision` type.
 * @param particlesCollision RID
 * @param mask int
 */
  particlesCollisionSetCullMask(particlesCollision: RID, mask: int): void;
/**
 * Sets the signed distance field `texture` for the 3D GPU particles collision specified by the `particles_collision` RID. Equivalent to `GPUParticlesCollisionSDF3D.texture` or `GPUParticlesAttractorVectorField3D.texture` depending on the `particles_collision` type.
 * @param particlesCollision RID
 * @param texture RID
 */
  particlesCollisionSetFieldTexture(particlesCollision: RID, texture: RID): void;
/**
 * Sets the heightfield `mask` for the 3D GPU particles heightfield collision specified by the `particles_collision` RID. Equivalent to `GPUParticlesCollisionHeightField3D.heightfield_mask`.
 * @param particlesCollision RID
 * @param mask int
 */
  particlesCollisionSetHeightFieldMask(particlesCollision: RID, mask: int): void;
/**
 * Sets the heightmap `resolution` for the 3D GPU particles heightfield collision specified by the `particles_collision` RID. Equivalent to `GPUParticlesCollisionHeightField3D.resolution`.
 * @param particlesCollision RID
 * @param resolution int
 */
  particlesCollisionSetHeightFieldResolution(particlesCollision: RID, resolution: int): void;
/**
 * Sets the `radius` for the 3D GPU particles sphere collision or attractor specified by the `particles_collision` RID. Equivalent to `GPUParticlesCollisionSphere3D.radius` or `GPUParticlesAttractorSphere3D.radius` depending on the `particles_collision` type.
 * @param particlesCollision RID
 * @param radius float
 */
  particlesCollisionSetSphereRadius(particlesCollision: RID, radius: float): void;
/**
 * Creates a GPU-based particle system and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `particles_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach these particles to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent nodes are `GPUParticles2D` and `GPUParticles3D`.
 * 
 * **Note:** All `particles_*` methods only apply to GPU-based particles, not CPU-based particles. `CPUParticles2D` and `CPUParticles3D` do not have equivalent RenderingServer functions available, as these use `MultiMeshInstance2D` and `MultiMeshInstance3D` under the hood (see `multimesh_*` methods).
 * @returns RID
 */
  particlesCreate(): RID;
/**
 * Manually emits particles from the `particles` instance.
 * @param particles RID
 * @param transform Transform3D
 * @param velocity Vector3
 * @param color Color
 * @param custom Color
 * @param emitFlags int
 */
  particlesEmit(particles: RID, transform: Transform3D, velocity: Vector3, color: Color, custom: Color, emitFlags: int): void;
/**
 * Calculates and returns the axis-aligned bounding box that contains all the particles. Equivalent to `GPUParticles3D.capture_aabb`.
 * @param particles RID
 * @returns AABB
 */
  particlesGetCurrentAabb(particles: RID): AABB;
/**
 * Returns `true` if particles are currently set to emitting.
 * @param particles RID
 * @returns boolean
 */
  particlesGetEmitting(particles: RID): boolean;
/**
 * Returns `true` if particles are not emitting and particles are set to inactive.
 * @param particles RID
 * @returns boolean
 */
  particlesIsInactive(particles: RID): boolean;
/**
 * Add particle system to list of particle systems that need to be updated. Update will take place on the next frame, or on the next call to `instances_cull_aabb`, `instances_cull_convex`, or `instances_cull_ray`.
 * @param particles RID
 */
  particlesRequestProcess(particles: RID): void;
/**
 * Requests particles to process for extra process time during a single frame.
 * @param particles RID
 * @param time float
 */
  particlesRequestProcessTime(particles: RID, time: float): void;
/**
 * Reset the particles on the next update. Equivalent to `GPUParticles3D.restart`.
 * @param particles RID
 */
  particlesRestart(particles: RID): void;
/**
 * Sets the number of particles to be drawn and allocates the memory for them. Equivalent to `GPUParticles3D.amount`.
 * @param particles RID
 * @param amount int
 */
  particlesSetAmount(particles: RID, amount: int): void;
/**
 * Sets the amount ratio for particles to be emitted. Equivalent to `GPUParticles3D.amount_ratio`.
 * @param particles RID
 * @param ratio float
 */
  particlesSetAmountRatio(particles: RID, ratio: float): void;
/**
 * @param particles RID
 * @param size float
 */
  particlesSetCollisionBaseSize(particles: RID, size: float): void;
/**
 * Sets a custom axis-aligned bounding box for the particle system. Equivalent to `GPUParticles3D.visibility_aabb`.
 * @param particles RID
 * @param aabb AABB
 */
  particlesSetCustomAabb(particles: RID, aabb: AABB): void;
/**
 * Sets the draw order of the particles to one of the named enums from `ParticlesDrawOrder`. See `ParticlesDrawOrder` for options. Equivalent to `GPUParticles3D.draw_order`.
 * @param particles RID
 * @param order int
 */
  particlesSetDrawOrder(particles: RID, order: int): void;
/**
 * Sets the number of draw passes to use. Equivalent to `GPUParticles3D.draw_passes`.
 * @param particles RID
 * @param count int
 */
  particlesSetDrawPasses(particles: RID, count: int): void;
/**
 * Sets the mesh to be used for the specified draw pass. Equivalent to `GPUParticles3D.draw_pass_1`, `GPUParticles3D.draw_pass_2`, `GPUParticles3D.draw_pass_3`, and `GPUParticles3D.draw_pass_4`.
 * @param particles RID
 * @param pass int
 * @param mesh RID
 */
  particlesSetDrawPassMesh(particles: RID, pass: int, mesh: RID): void;
/**
 * Sets the `Transform3D` that will be used by the particles when they first emit.
 * @param particles RID
 * @param transform Transform3D
 */
  particlesSetEmissionTransform(particles: RID, transform: Transform3D): void;
/**
 * Sets the velocity of a particle node, that will be used by `ParticleProcessMaterial.inherit_velocity_ratio`.
 * @param particles RID
 * @param velocity Vector3
 */
  particlesSetEmitterVelocity(particles: RID, velocity: Vector3): void;
/**
 * If `true`, particles will emit over time. Setting to `false` does not reset the particles, but only stops their emission. Equivalent to `GPUParticles3D.emitting`.
 * @param particles RID
 * @param emitting boolean
 */
  particlesSetEmitting(particles: RID, emitting: boolean): void;
/**
 * Sets the explosiveness ratio. Equivalent to `GPUParticles3D.explosiveness`.
 * @param particles RID
 * @param ratio float
 */
  particlesSetExplosivenessRatio(particles: RID, ratio: float): void;
/**
 * Sets the frame rate that the particle system rendering will be fixed to. Equivalent to `GPUParticles3D.fixed_fps`.
 * @param particles RID
 * @param fps int
 */
  particlesSetFixedFps(particles: RID, fps: int): void;
/**
 * If `true`, uses fractional delta which smooths the movement of the particles. Equivalent to `GPUParticles3D.fract_delta`.
 * @param particles RID
 * @param enable boolean
 */
  particlesSetFractionalDelta(particles: RID, enable: boolean): void;
/**
 * @param particles RID
 * @param enable boolean
 */
  particlesSetInterpolate(particles: RID, enable: boolean): void;
/**
 * Sets the value that informs a `ParticleProcessMaterial` to rush all particles towards the end of their lifetime.
 * @param particles RID
 * @param factor float
 */
  particlesSetInterpToEnd(particles: RID, factor: float): void;
/**
 * Sets the lifetime of each particle in the system. Equivalent to `GPUParticles3D.lifetime`.
 * @param particles RID
 * @param lifetime float
 */
  particlesSetLifetime(particles: RID, lifetime: float): void;
/**
 * Sets whether the GPU particles specified by the `particles` RID should be rendered in 2D or 3D according to `mode`.
 * @param particles RID
 * @param mode int
 */
  particlesSetMode(particles: RID, mode: int): void;
/**
 * If `true`, particles will emit once and then stop. Equivalent to `GPUParticles3D.one_shot`.
 * @param particles RID
 * @param oneShot boolean
 */
  particlesSetOneShot(particles: RID, oneShot: boolean): void;
/**
 * Sets the preprocess time for the particles' animation. This lets you delay starting an animation until after the particles have begun emitting. Equivalent to `GPUParticles3D.preprocess`.
 * @param particles RID
 * @param time float
 */
  particlesSetPreProcessTime(particles: RID, time: float): void;
/**
 * Sets the material for processing the particles.
 * 
 * **Note:** This is not the material used to draw the materials. Equivalent to `GPUParticles3D.process_material`.
 * @param particles RID
 * @param material RID
 */
  particlesSetProcessMaterial(particles: RID, material: RID): void;
/**
 * Sets the emission randomness ratio. This randomizes the emission of particles within their phase. Equivalent to `GPUParticles3D.randomness`.
 * @param particles RID
 * @param ratio float
 */
  particlesSetRandomnessRatio(particles: RID, ratio: float): void;
/**
 * Sets the speed scale of the particle system. Equivalent to `GPUParticles3D.speed_scale`.
 * @param particles RID
 * @param scale float
 */
  particlesSetSpeedScale(particles: RID, scale: float): void;
/**
 * @param particles RID
 * @param subemitterParticles RID
 */
  particlesSetSubemitter(particles: RID, subemitterParticles: RID): void;
/**
 * @param particles RID
 * @param bindPoses Transform3D[]
 */
  particlesSetTrailBindPoses(particles: RID, bindPoses: Transform3D[]): void;
/**
 * If `enable` is `true`, enables trails for the `particles` with the specified `length_sec` in seconds. Equivalent to `GPUParticles3D.trail_enabled` and `GPUParticles3D.trail_lifetime`.
 * @param particles RID
 * @param enable boolean
 * @param lengthSec float
 */
  particlesSetTrails(particles: RID, enable: boolean, lengthSec: float): void;
/**
 * @param particles RID
 * @param align int
 */
  particlesSetTransformAlign(particles: RID, align: int): void;
/**
 * If `true`, particles use local coordinates. If `false` they use global coordinates. Equivalent to `GPUParticles3D.local_coords`.
 * @param particles RID
 * @param enable boolean
 */
  particlesSetUseLocalCoordinates(particles: RID, enable: boolean): void;
/**
 * Sets the filter quality for omni and spot light shadows in 3D. See also `ProjectSettings.rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality`. This parameter is global and cannot be set on a per-viewport basis.
 * @param quality int
 */
  positionalSoftShadowFilterSetQuality(quality: int): void;
/**
 * Creates a reflection probe and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `reflection_probe_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this reflection probe to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent node is `ReflectionProbe`.
 * @returns RID
 */
  reflectionProbeCreate(): RID;
/**
 * Sets the reflection probe's custom ambient light color. Equivalent to `ReflectionProbe.ambient_color`.
 * @param probe RID
 * @param color Color
 */
  reflectionProbeSetAmbientColor(probe: RID, color: Color): void;
/**
 * Sets the reflection probe's custom ambient light energy. Equivalent to `ReflectionProbe.ambient_color_energy`.
 * @param probe RID
 * @param energy float
 */
  reflectionProbeSetAmbientEnergy(probe: RID, energy: float): void;
/**
 * Sets the reflection probe's ambient light mode. Equivalent to `ReflectionProbe.ambient_mode`.
 * @param probe RID
 * @param mode int
 */
  reflectionProbeSetAmbientMode(probe: RID, mode: int): void;
/**
 * If `true`, reflections will ignore sky contribution. Equivalent to `ReflectionProbe.interior`.
 * @param probe RID
 * @param enable boolean
 */
  reflectionProbeSetAsInterior(probe: RID, enable: boolean): void;
/**
 * Sets the distance in meters over which a probe blends into the scene.
 * @param probe RID
 * @param blendDistance float
 */
  reflectionProbeSetBlendDistance(probe: RID, blendDistance: float): void;
/**
 * Sets the render cull mask for this reflection probe. Only instances with a matching layer will be reflected by this probe. Equivalent to `ReflectionProbe.cull_mask`.
 * @param probe RID
 * @param layers int
 */
  reflectionProbeSetCullMask(probe: RID, layers: int): void;
/**
 * If `true`, uses box projection. This can make reflections look more correct in certain situations. Equivalent to `ReflectionProbe.box_projection`.
 * @param probe RID
 * @param enable boolean
 */
  reflectionProbeSetEnableBoxProjection(probe: RID, enable: boolean): void;
/**
 * If `true`, computes shadows in the reflection probe. This makes the reflection much slower to compute. Equivalent to `ReflectionProbe.enable_shadows`.
 * @param probe RID
 * @param enable boolean
 */
  reflectionProbeSetEnableShadows(probe: RID, enable: boolean): void;
/**
 * Sets the intensity of the reflection probe. Intensity modulates the strength of the reflection. Equivalent to `ReflectionProbe.intensity`.
 * @param probe RID
 * @param intensity float
 */
  reflectionProbeSetIntensity(probe: RID, intensity: float): void;
/**
 * Sets the max distance away from the probe an object can be before it is culled. Equivalent to `ReflectionProbe.max_distance`.
 * @param probe RID
 * @param distance float
 */
  reflectionProbeSetMaxDistance(probe: RID, distance: float): void;
/**
 * Sets the mesh level of detail to use in the reflection probe rendering. Higher values will use less detailed versions of meshes that have LOD variations generated, which can improve performance. Equivalent to `ReflectionProbe.mesh_lod_threshold`.
 * @param probe RID
 * @param pixels float
 */
  reflectionProbeSetMeshLodThreshold(probe: RID, pixels: float): void;
/**
 * Sets the origin offset to be used when this reflection probe is in box project mode. Equivalent to `ReflectionProbe.origin_offset`.
 * @param probe RID
 * @param offset Vector3
 */
  reflectionProbeSetOriginOffset(probe: RID, offset: Vector3): void;
/**
 * Sets the render reflection mask for this reflection probe. Only instances with a matching layer will have reflections applied from this probe. Equivalent to `ReflectionProbe.reflection_mask`.
 * @param probe RID
 * @param layers int
 */
  reflectionProbeSetReflectionMask(probe: RID, layers: int): void;
/**
 * Sets the resolution to use when rendering the specified reflection probe. The `resolution` is specified for each cubemap face: for instance, specifying `512` will allocate 6 faces of 512×512 each (plus mipmaps for roughness levels).
 * @param probe RID
 * @param resolution int
 */
  reflectionProbeSetResolution(probe: RID, resolution: int): void;
/**
 * Sets the size of the area that the reflection probe will capture. Equivalent to `ReflectionProbe.size`.
 * @param probe RID
 * @param size Vector3
 */
  reflectionProbeSetSize(probe: RID, size: Vector3): void;
/**
 * Sets how often the reflection probe updates. Can either be once or every frame. See `ReflectionProbeUpdateMode` for options.
 * @param probe RID
 * @param mode int
 */
  reflectionProbeSetUpdateMode(probe: RID, mode: int): void;
/**
 * Schedules a callback to the given callable after a frame has been drawn.
 * @param callable Callable
 */
  requestFrameDrawnCallback(callable: Callable): void;
/**
 * Creates a scenario and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `scenario_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * The scenario is the 3D world that all the visual instances exist in.
 * @returns RID
 */
  scenarioCreate(): RID;
/**
 * Sets the camera attributes (`effects`) that will be used with this scenario. See also `CameraAttributes`.
 * @param scenario RID
 * @param effects RID
 */
  scenarioSetCameraAttributes(scenario: RID, effects: RID): void;
/**
 * Sets the compositor (`compositor`) that will be used with this scenario. See also `Compositor`.
 * @param scenario RID
 * @param compositor RID
 */
  scenarioSetCompositor(scenario: RID, compositor: RID): void;
/**
 * Sets the environment that will be used with this scenario. See also `Environment`.
 * @param scenario RID
 * @param environment RID
 */
  scenarioSetEnvironment(scenario: RID, environment: RID): void;
/**
 * Sets the fallback environment to be used by this scenario. The fallback environment is used if no environment is set. Internally, this is used by the editor to provide a default environment.
 * @param scenario RID
 * @param environment RID
 */
  scenarioSetFallbackEnvironment(scenario: RID, environment: RID): void;
/**
 * Sets the screen-space roughness limiter parameters, such as whether it should be enabled and its thresholds. Equivalent to `ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/enabled`, `ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/amount` and `ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/limit`.
 * @param enable boolean
 * @param amount float
 * @param limit float
 */
  screenSpaceRoughnessLimiterSetActive(enable: boolean, amount: float, limit: float): void;
/**
 * Sets a boot image. The color defines the background color. If `scale` is `true`, the image will be scaled to fit the screen size. If `use_filter` is `true`, the image will be scaled with linear interpolation. If `use_filter` is `false`, the image will be scaled with nearest-neighbor interpolation.
 * @param image Image
 * @param color Color
 * @param scale boolean
 * @param useFilter boolean (optional, default: true)
 */
  setBootImage(image: Image, color: Color, scale: boolean, useFilter?: boolean): void;
/**
 * If `generate` is `true`, generates debug wireframes for all meshes that are loaded when using the Compatibility renderer. By default, the engine does not generate debug wireframes at runtime, since they slow down loading of assets and take up VRAM.
 * 
 * **Note:** You must call this method before loading any meshes when using the Compatibility renderer, otherwise wireframes will not be used.
 * @param generate boolean
 */
  setDebugGenerateWireframes(generate: boolean): void;
/**
 * Sets the default clear color which is used when a specific clear color has not been selected. See also `get_default_clear_color`.
 * @param color Color
 */
  setDefaultClearColor(color: Color): void;
/**
 * Creates an empty shader and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `shader_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `Shader`.
 * @returns RID
 */
  shaderCreate(): RID;
/**
 * Returns a shader's source code as a string.
 * @param shader RID
 * @returns string
 */
  shaderGetCode(shader: RID): string;
/**
 * Returns a default texture from a shader searched by name.
 * 
 * **Note:** If the sampler array is used use `index` to access the specified texture.
 * @param shader RID
 * @param name StringName
 * @param index int (optional, default: 0)
 * @returns RID
 */
  shaderGetDefaultTextureParameter(shader: RID, name: StringName, index?: int): RID;
/**
 * Returns the default value for the specified shader uniform. This is usually the value written in the shader source code.
 * @param shader RID
 * @param name StringName
 * @returns Variant
 */
  shaderGetParameterDefault(shader: RID, name: StringName): Variant;
/**
 * Sets the shader's source code (which triggers recompilation after being changed).
 * @param shader RID
 * @param code string
 */
  shaderSetCode(shader: RID, code: string): void;
/**
 * Sets a shader's default texture. Overwrites the texture given by name.
 * 
 * **Note:** If the sampler array is used use `index` to access the specified texture.
 * @param shader RID
 * @param name StringName
 * @param texture RID
 * @param index int (optional, default: 0)
 */
  shaderSetDefaultTextureParameter(shader: RID, name: StringName, texture: RID, index?: int): void;
/**
 * Sets the path hint for the specified shader. This should generally match the `Shader` resource's `Resource.resource_path`.
 * @param shader RID
 * @param path string
 */
  shaderSetPathHint(shader: RID, path: string): void;
/**
 * @param skeleton RID
 * @param bones int
 * @param is2dSkeleton boolean (optional, default: false)
 */
  skeletonAllocateData(skeleton: RID, bones: int, is2dSkeleton?: boolean): void;
/**
 * Returns the `Transform3D` set for a specific bone of this skeleton.
 * @param skeleton RID
 * @param bone int
 * @returns Transform3D
 */
  skeletonBoneGetTransform(skeleton: RID, bone: int): Transform3D;
/**
 * Returns the `Transform2D` set for a specific bone of this skeleton.
 * @param skeleton RID
 * @param bone int
 * @returns Transform2D
 */
  skeletonBoneGetTransform2d(skeleton: RID, bone: int): Transform2D;
/**
 * Sets the `Transform3D` for a specific bone of this skeleton.
 * @param skeleton RID
 * @param bone int
 * @param transform Transform3D
 */
  skeletonBoneSetTransform(skeleton: RID, bone: int, transform: Transform3D): void;
/**
 * Sets the `Transform2D` for a specific bone of this skeleton.
 * @param skeleton RID
 * @param bone int
 * @param transform Transform2D
 */
  skeletonBoneSetTransform2d(skeleton: RID, bone: int, transform: Transform2D): void;
/**
 * Creates a skeleton and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `skeleton_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * @returns RID
 */
  skeletonCreate(): RID;
/**
 * Returns the number of bones allocated for this skeleton.
 * @param skeleton RID
 * @returns int
 */
  skeletonGetBoneCount(skeleton: RID): int;
/**
 * @param skeleton RID
 * @param baseTransform Transform2D
 */
  skeletonSetBaseTransform2d(skeleton: RID, baseTransform: Transform2D): void;
/**
 * Generates and returns an `Image` containing the radiance map for the specified `sky` RID. This supports built-in sky material and custom sky shaders. If `bake_irradiance` is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also `environment_bake_panorama`.
 * 
 * **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor. `energy` values above `1.0` can be used to brighten the resulting image.
 * 
 * **Note:** `size` should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than `Sky.radiance_size`, as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.
 * @param sky RID
 * @param energy float
 * @param bakeIrradiance boolean
 * @param size Vector2i
 * @returns Image
 */
  skyBakePanorama(sky: RID, energy: float, bakeIrradiance: boolean, size: Vector2i): Image;
/**
 * Creates an empty sky and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `sky_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * @returns RID
 */
  skyCreate(): RID;
/**
 * Sets the material that the sky uses to render the background, ambient and reflection maps.
 * @param sky RID
 * @param material RID
 */
  skySetMaterial(sky: RID, material: RID): void;
/**
 * Sets the process `mode` of the sky specified by the `sky` RID. Equivalent to `Sky.process_mode`.
 * @param sky RID
 * @param mode int
 */
  skySetMode(sky: RID, mode: int): void;
/**
 * Sets the `radiance_size` of the sky specified by the `sky` RID (in pixels). Equivalent to `Sky.radiance_size`.
 * @param sky RID
 * @param radianceSize int
 */
  skySetRadianceSize(sky: RID, radianceSize: int): void;
/**
 * Creates a spot light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this spot light to an instance using `instance_set_base` using the returned RID.
 * @returns RID
 */
  spotLightCreate(): RID;
/**
 * Sets `ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality` to use when rendering materials that have subsurface scattering enabled.
 * @param quality int
 */
  subSurfaceScatteringSetQuality(quality: int): void;
/**
 * Sets the `ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale` and `ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale` to use when rendering materials that have subsurface scattering enabled.
 * @param scale float
 * @param depthScale float
 */
  subSurfaceScatteringSetScale(scale: float, depthScale: float): void;
/**
 * Creates a 2-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `Texture2D`.
 * 
 * **Note:** Not to be confused with `RenderingDevice.texture_create`, which creates the graphics API's own texture type as opposed to the Godot-specific `Texture2D` resource.
 * @param image Image
 * @returns RID
 */
  texture2dCreate(image: Image): RID;
/**
 * Returns an `Image` instance from the given `texture` `RID`.
 * 
 * **Example:** Get the test texture from `get_test_texture` and apply it to a `Sprite2D` node:
 * 
 * 				```gdscript
 * 
 * 				var texture_rid = RenderingServer.get_test_texture()
 * 				var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
 * 				$Sprite2D.texture = texture
 * 				
 * 
 * ```
 * @param texture RID
 * @returns Image
 */
  texture2dGet(texture: RID): Image;
/**
 * Creates a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `TextureLayered`.
 * @param layers Image[]
 * @param layeredType int
 * @returns RID
 */
  texture2dLayeredCreate(layers: Image[], layeredType: int): RID;
/**
 * Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also `texture_2d_placeholder_create`.
 * 
 * **Note:** The equivalent resource is `PlaceholderTextureLayered`.
 * @param layeredType int
 * @returns RID
 */
  texture2dLayeredPlaceholderCreate(layeredType: int): RID;
/**
 * Returns an `Image` instance from the given `texture` `RID` and `layer`.
 * @param texture RID
 * @param layer int
 * @returns Image
 */
  texture2dLayerGet(texture: RID, layer: int): Image;
/**
 * Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also `texture_2d_layered_placeholder_create`.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `PlaceholderTexture2D`.
 * @returns RID
 */
  texture2dPlaceholderCreate(): RID;
/**
 * Updates the texture specified by the `texture` `RID` with the data in `image`. A `layer` must also be specified, which should be `0` when updating a single-layer texture (`Texture2D`).
 * 
 * **Note:** The `image` must have the same width, height and format as the current `texture` data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height or format, use `texture_replace` instead.
 * @param texture RID
 * @param image Image
 * @param layer int
 */
  texture2dUpdate(texture: RID, image: Image, layer: int): void;
/**
 * **Note:** The equivalent resource is `Texture3D`.
 * @param format int
 * @param width int
 * @param height int
 * @param depth int
 * @param mipmaps boolean
 * @param data Image[]
 * @returns RID
 */
  texture3dCreate(format: int, width: int, height: int, depth: int, mipmaps: boolean, data: Image[]): RID;
/**
 * Returns 3D texture data as an array of `Image`s for the specified texture `RID`.
 * @param texture RID
 * @returns Image[]
 */
  texture3dGet(texture: RID): Image[];
/**
 * Creates a placeholder for a 3-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_3d_*` RenderingServer functions, although it does nothing when used.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent resource is `PlaceholderTexture3D`.
 * @returns RID
 */
  texture3dPlaceholderCreate(): RID;
/**
 * Updates the texture specified by the `texture` `RID`'s data with the data in `data`. All the texture's layers must be replaced at once.
 * 
 * **Note:** The `texture` must have the same width, height, depth and format as the current texture data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height, depth or format, use `texture_replace` instead.
 * @param texture RID
 * @param data Image[]
 */
  texture3dUpdate(texture: RID, data: Image[]): void;
/**
 * Creates a texture based on a native handle that was created outside of Godot's renderer.
 * 
 * **Note:** If using only the rendering device renderer, it's recommend to use `RenderingDevice.texture_create_from_extension` together with `RenderingServer.texture_rd_create`, rather than this method. It will give you much more control over the texture's format and usage.
 * @param type_ int
 * @param format int
 * @param nativeHandle int
 * @param width int
 * @param height int
 * @param depth int
 * @param layers int (optional, default: 1)
 * @param layeredType int (optional, default: 0)
 * @returns RID
 */
  textureCreateFromNativeHandle(type_: int, format: int, nativeHandle: int, width: int, height: int, depth: int, layers?: int, layeredType?: int): RID;
/**
 * Returns the format for the texture.
 * @param texture RID
 * @returns int
 */
  textureGetFormat(texture: RID): int;
/**
 * Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.
 * 
 * **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).
 * @param texture RID
 * @param srgb boolean (optional, default: false)
 * @returns int
 */
  textureGetNativeHandle(texture: RID, srgb?: boolean): int;
/**
 * @param texture RID
 * @returns string
 */
  textureGetPath(texture: RID): string;
/**
 * Returns a texture `RID` that can be used with `RenderingDevice`.
 * @param texture RID
 * @param srgb boolean (optional, default: false)
 * @returns RID
 */
  textureGetRdTexture(texture: RID, srgb?: boolean): RID;
/**
 * This method does nothing and always returns an invalid `RID`.
 * @param base RID
 * @returns RID
 * @deprecated ProxyTexture was removed in Godot 4.
 */
  textureProxyCreate(base: RID): RID;
/**
 * This method does nothing.
 * @param texture RID
 * @param proxyTo RID
 * @deprecated ProxyTexture was removed in Godot 4.
 */
  textureProxyUpdate(texture: RID, proxyTo: RID): void;
/**
 * Creates a new texture object based on a texture created directly on the `RenderingDevice`. If the texture contains layers, `layer_type` is used to define the layer type.
 * @param rdTexture RID
 * @param layerType int (optional, default: 0)
 * @returns RID
 */
  textureRdCreate(rdTexture: RID, layerType?: int): RID;
/**
 * Replaces `texture`'s texture data by the texture specified by the `by_texture` RID, without changing `texture`'s RID.
 * @param texture RID
 * @param byTexture RID
 */
  textureReplace(texture: RID, byTexture: RID): void;
/**
 * @param texture RID
 * @param enable boolean
 */
  textureSetForceRedrawIfVisible(texture: RID, enable: boolean): void;
/**
 * @param texture RID
 * @param path string
 */
  textureSetPath(texture: RID, path: string): void;
/**
 * @param texture RID
 * @param width int
 * @param height int
 */
  textureSetSizeOverride(texture: RID, width: int, height: int): void;
/**
 * Sets a viewport's camera.
 * @param viewport RID
 * @param camera RID
 */
  viewportAttachCamera(viewport: RID, camera: RID): void;
/**
 * Sets a viewport's canvas.
 * @param viewport RID
 * @param canvas RID
 */
  viewportAttachCanvas(viewport: RID, canvas: RID): void;
/**
 * Copies the viewport to a region of the screen specified by `rect`. If `viewport_set_render_direct_to_screen` is `true`, then the viewport does not use a framebuffer and the contents of the viewport are rendered directly to screen. However, note that the root viewport is drawn last, therefore it will draw over the screen. Accordingly, you must set the root viewport to an area that does not cover the area that you have attached this viewport to.
 * For example, you can set the root viewport to not render at all with the following code:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    RenderingServer.viewport_attach_to_screen(get_viewport().get_viewport_rid(), Rect2())
 * 				    RenderingServer.viewport_attach_to_screen($Viewport.get_viewport_rid(), Rect2(0, 0, 600, 600))
 * 				
 * 
 * ```
 * 
 * Using this can result in significant optimization, especially on lower-end devices. However, it comes at the cost of having to manage your viewports manually. For further optimization, see `viewport_set_render_direct_to_screen`.
 * @param viewport RID
 * @param rect Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param screen int (optional, default: 0)
 */
  viewportAttachToScreen(viewport: RID, rect?: Rect2, screen?: int): void;
/**
 * Creates an empty viewport and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `viewport_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `Viewport`.
 * @returns RID
 */
  viewportCreate(): RID;
/**
 * Returns the CPU time taken to render the last frame in milliseconds. This *only* includes time spent in rendering-related operations; scripts' `_process` functions and other engine subsystems are not included in this readout. To get a complete readout of CPU time spent to render the scene, sum the render times of all viewports that are drawn every frame plus `get_frame_setup_time_cpu`. Unlike `Engine.get_frames_per_second`, this method will accurately reflect CPU utilization even if framerate is capped via V-Sync or `Engine.max_fps`. See also `viewport_get_measured_render_time_gpu`.
 * 
 * **Note:** Requires measurements to be enabled on the specified `viewport` using `viewport_set_measure_render_time`. Otherwise, this method returns `0.0`.
 * @param viewport RID
 * @returns float
 */
  viewportGetMeasuredRenderTimeCpu(viewport: RID): float;
/**
 * Returns the GPU time taken to render the last frame in milliseconds. To get a complete readout of GPU time spent to render the scene, sum the render times of all viewports that are drawn every frame. Unlike `Engine.get_frames_per_second`, this method accurately reflects GPU utilization even if framerate is capped via V-Sync or `Engine.max_fps`. See also `viewport_get_measured_render_time_cpu`.
 * 
 * **Note:** Requires measurements to be enabled on the specified `viewport` using `viewport_set_measure_render_time`. Otherwise, this method returns `0.0`.
 * 
 * **Note:** When GPU utilization is low enough during a certain period of time, GPUs will decrease their power state (which in turn decreases core and memory clock speeds). This can cause the reported GPU time to increase if GPU utilization is kept low enough by a framerate cap (compared to what it would be at the GPU's highest power state). Keep this in mind when benchmarking using `viewport_get_measured_render_time_gpu`. This behavior can be overridden in the graphics driver settings at the cost of higher power usage.
 * @param viewport RID
 * @returns float
 */
  viewportGetMeasuredRenderTimeGpu(viewport: RID): float;
/**
 * Returns a statistic about the rendering engine which can be used for performance profiling. This is separated into render pass `type`s, each of them having the same `info`s you can query (different passes will return different values). See `RenderingServer.ViewportRenderInfoType` for a list of render pass types and `RenderingServer.ViewportRenderInfo` for a list of information that can be queried.
 * See also `get_rendering_info`, which returns global information across all viewports.
 * 
 * **Note:** Viewport rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, `viewport_get_render_info` returns `0`. To print rendering information in `_ready()` successfully, use the following:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    for _i in 2:
 * 				        await get_tree().process_frame
 * 
 * 				    print(
 * 				            RenderingServer.viewport_get_render_info(get_viewport().get_viewport_rid(),
 * 				            RenderingServer.VIEWPORT_RENDER_INFO_TYPE_VISIBLE,
 * 				            RenderingServer.VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME)
 * 				    )
 * 				
 * 
 * ```
 * @param viewport RID
 * @param type_ int
 * @param info int
 * @returns int
 */
  viewportGetRenderInfo(viewport: RID, type_: int, info: int): int;
/**
 * Returns the render target for the viewport.
 * @param viewport RID
 * @returns RID
 */
  viewportGetRenderTarget(viewport: RID): RID;
/**
 * Returns the viewport's last rendered frame.
 * @param viewport RID
 * @returns RID
 */
  viewportGetTexture(viewport: RID): RID;
/**
 * Returns the viewport's update mode. See `ViewportUpdateMode` constants for options.
 * 
 * **Warning:** Calling this from any thread other than the rendering thread will be detrimental to performance.
 * @param viewport RID
 * @returns int
 */
  viewportGetUpdateMode(viewport: RID): int;
/**
 * Detaches a viewport from a canvas.
 * @param viewport RID
 * @param canvas RID
 */
  viewportRemoveCanvas(viewport: RID, canvas: RID): void;
/**
 * If `true`, sets the viewport active, else sets it inactive.
 * @param viewport RID
 * @param active boolean
 */
  viewportSetActive(viewport: RID, active: boolean): void;
/**
 * Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.
 * The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See `ProjectSettings.rendering/textures/decals/filter` and `ProjectSettings.rendering/textures/light_projectors/filter`.
 * 
 * **Note:** In 3D, for this setting to have an effect, set `BaseMaterial3D.texture_filter` to `BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC` or `BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC` on materials.
 * 
 * **Note:** In 2D, for this setting to have an effect, set `CanvasItem.texture_filter` to `CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC` or `CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC` on the `CanvasItem` node displaying the texture (or in `CanvasTexture`). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.
 * @param viewport RID
 * @param anisotropicFilteringLevel int
 */
  viewportSetAnisotropicFilteringLevel(viewport: RID, anisotropicFilteringLevel: int): void;
/**
 * Sets the rendering mask associated with this `Viewport`. Only `CanvasItem` nodes with a matching rendering visibility layer will be rendered by this `Viewport`.
 * @param viewport RID
 * @param canvasCullMask int
 */
  viewportSetCanvasCullMask(viewport: RID, canvasCullMask: int): void;
/**
 * Sets the stacking order for a viewport's canvas.
 * `layer` is the actual canvas layer, while `sublayer` specifies the stacking order of the canvas among those in the same layer.
 * @param viewport RID
 * @param canvas RID
 * @param layer int
 * @param sublayer int
 */
  viewportSetCanvasStacking(viewport: RID, canvas: RID, layer: int, sublayer: int): void;
/**
 * Sets the transformation of a viewport's canvas.
 * @param viewport RID
 * @param canvas RID
 * @param offset Transform2D
 */
  viewportSetCanvasTransform(viewport: RID, canvas: RID, offset: Transform2D): void;
/**
 * Sets the clear mode of a viewport. See `ViewportClearMode` for options.
 * @param viewport RID
 * @param clearMode int
 */
  viewportSetClearMode(viewport: RID, clearMode: int): void;
/**
 * Sets the debug draw mode of a viewport. See `ViewportDebugDraw` for options.
 * @param viewport RID
 * @param draw int
 */
  viewportSetDebugDraw(viewport: RID, draw: int): void;
/**
 * Sets the default texture filtering mode for the specified `viewport` RID. See `CanvasItemTextureFilter` for options.
 * @param viewport RID
 * @param filter int
 */
  viewportSetDefaultCanvasItemTextureFilter(viewport: RID, filter: int): void;
/**
 * Sets the default texture repeat mode for the specified `viewport` RID. See `CanvasItemTextureRepeat` for options.
 * @param viewport RID
 * @param repeat int
 */
  viewportSetDefaultCanvasItemTextureRepeat(viewport: RID, repeat: int): void;
/**
 * If `true`, the viewport's canvas (i.e. 2D and GUI elements) is not rendered.
 * @param viewport RID
 * @param disable boolean
 */
  viewportSetDisable2d(viewport: RID, disable: boolean): void;
/**
 * If `true`, the viewport's 3D elements are not rendered.
 * @param viewport RID
 * @param disable boolean
 */
  viewportSetDisable3d(viewport: RID, disable: boolean): void;
/**
 * Sets the viewport's environment mode which allows enabling or disabling rendering of 3D environment over 2D canvas. When disabled, 2D will not be affected by the environment. When enabled, 2D will be affected by the environment if the environment background mode is `ENV_BG_CANVAS`. The default behavior is to inherit the setting from the viewport's parent. If the topmost parent is also set to `VIEWPORT_ENVIRONMENT_INHERIT`, then the behavior will be the same as if it was set to `VIEWPORT_ENVIRONMENT_ENABLED`.
 * @param viewport RID
 * @param mode int
 */
  viewportSetEnvironmentMode(viewport: RID, mode: int): void;
/**
 * Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.
 * @param viewport RID
 * @param sharpness float
 */
  viewportSetFsrSharpness(viewport: RID, sharpness: float): void;
/**
 * Sets the viewport's global transformation matrix.
 * @param viewport RID
 * @param transform Transform2D
 */
  viewportSetGlobalCanvasTransform(viewport: RID, transform: Transform2D): void;
/**
 * Sets the measurement for the given `viewport` RID (obtained using `Viewport.get_viewport_rid`). Once enabled, `viewport_get_measured_render_time_cpu` and `viewport_get_measured_render_time_gpu` will return values greater than `0.0` when queried with the given `viewport`.
 * @param viewport RID
 * @param enable boolean
 */
  viewportSetMeasureRenderTime(viewport: RID, enable: boolean): void;
/**
 * Sets the multisample antialiasing mode for 2D/Canvas on the specified `viewport` RID. See `ViewportMSAA` for options. Equivalent to `ProjectSettings.rendering/anti_aliasing/quality/msaa_2d` or `Viewport.msaa_2d`.
 * @param viewport RID
 * @param msaa int
 */
  viewportSetMsaa2d(viewport: RID, msaa: int): void;
/**
 * Sets the multisample antialiasing mode for 3D on the specified `viewport` RID. See `ViewportMSAA` for options. Equivalent to `ProjectSettings.rendering/anti_aliasing/quality/msaa_3d` or `Viewport.msaa_3d`.
 * @param viewport RID
 * @param msaa int
 */
  viewportSetMsaa3d(viewport: RID, msaa: int): void;
/**
 * Sets the `ProjectSettings.rendering/occlusion_culling/bvh_build_quality` to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis.
 * @param quality int
 */
  viewportSetOcclusionCullingBuildQuality(quality: int): void;
/**
 * Sets the `ProjectSettings.rendering/occlusion_culling/occlusion_rays_per_thread` to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis.
 * @param raysPerThread int
 */
  viewportSetOcclusionRaysPerThread(raysPerThread: int): void;
/**
 * Sets the viewport's parent to the viewport specified by the `parent_viewport` RID.
 * @param viewport RID
 * @param parentViewport RID
 */
  viewportSetParentViewport(viewport: RID, parentViewport: RID): void;
/**
 * Sets the number of subdivisions to use in the specified shadow atlas `quadrant` for omni and spot shadows. See also `Viewport.set_positional_shadow_atlas_quadrant_subdiv`.
 * @param viewport RID
 * @param quadrant int
 * @param subdivision int
 */
  viewportSetPositionalShadowAtlasQuadrantSubdivision(viewport: RID, quadrant: int, subdivision: int): void;
/**
 * Sets the `size` of the shadow atlas's images (used for omni and spot lights) on the viewport specified by the `viewport` RID. The value is rounded up to the nearest power of 2. If `use_16_bits` is `true`, use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.
 * 
 * **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).
 * @param viewport RID
 * @param size int
 * @param use16Bits boolean (optional, default: false)
 */
  viewportSetPositionalShadowAtlasSize(viewport: RID, size: int, use16Bits?: boolean): void;
/**
 * If `true`, render the contents of the viewport directly to screen. This allows a low-level optimization where you can skip drawing a viewport to the root viewport. While this optimization can result in a significant increase in speed (especially on older devices), it comes at a cost of usability. When this is enabled, you cannot read from the viewport or from the screen_texture. You also lose the benefit of certain window settings, such as the various stretch modes. Another consequence to be aware of is that in 2D the rendering happens in window coordinates, so if you have a viewport that is double the size of the window, and you set this, then only the portion that fits within the window will be drawn, no automatic scaling is possible, even if your game scene is significantly larger than the window size.
 * @param viewport RID
 * @param enabled boolean
 */
  viewportSetRenderDirectToScreen(viewport: RID, enabled: boolean): void;
/**
 * Sets the 3D resolution scaling mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.
 * @param viewport RID
 * @param scaling3dMode int
 */
  viewportSetScaling3dMode(viewport: RID, scaling3dMode: int): void;
/**
 * Scales the 3D render buffer based on the viewport size uses an image filter specified in `ViewportScaling3DMode` to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also `ViewportMSAA` for multi-sample antialiasing, which is significantly cheaper but only smoothens the edges of polygons.
 * When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.
 * @param viewport RID
 * @param scale float
 */
  viewportSetScaling3dScale(viewport: RID, scale: float): void;
/**
 * Sets a viewport's scenario. The scenario contains information about environment information, reflection atlas, etc.
 * @param viewport RID
 * @param scenario RID
 */
  viewportSetScenario(viewport: RID, scenario: RID): void;
/**
 * Sets the viewport's screen-space antialiasing mode. Equivalent to `ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa` or `Viewport.screen_space_aa`.
 * @param viewport RID
 * @param mode int
 */
  viewportSetScreenSpaceAa(viewport: RID, mode: int): void;
/**
 * Sets the viewport's 2D signed distance field `ProjectSettings.rendering/2d/sdf/oversize` and `ProjectSettings.rendering/2d/sdf/scale`. This is used when sampling the signed distance field in `CanvasItem` shaders as well as `GPUParticles2D` collision. This is *not* used by SDFGI in 3D rendering.
 * @param viewport RID
 * @param oversize int
 * @param scale int
 */
  viewportSetSdfOversizeAndScale(viewport: RID, oversize: int, scale: int): void;
/**
 * Sets the viewport's width and height in pixels.
 * @param viewport RID
 * @param width int
 * @param height int
 */
  viewportSetSize(viewport: RID, width: int, height: int): void;
/**
 * If `true`, canvas item transforms (i.e. origin position) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when `Camera2D` smoothing is enabled. Equivalent to `ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel`.
 * @param viewport RID
 * @param enabled boolean
 */
  viewportSetSnap2dTransformsToPixel(viewport: RID, enabled: boolean): void;
/**
 * If `true`, canvas item vertices (i.e. polygon points) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when `Camera2D` smoothing is enabled. Equivalent to `ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel`.
 * @param viewport RID
 * @param enabled boolean
 */
  viewportSetSnap2dVerticesToPixel(viewport: RID, enabled: boolean): void;
/**
 * Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close). To get sharper textures at a distance without introducing too much graininess, set this between `-0.75` and `0.0`. Enabling temporal antialiasing (`ProjectSettings.rendering/anti_aliasing/quality/use_taa`) can help reduce the graininess visible when using negative mipmap bias.
 * 
 * **Note:** When the 3D scaling mode is set to FSR 1.0, this value is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `-log2(1.0 / scale) + mipmap_bias`.
 * @param viewport RID
 * @param mipmapBias float
 */
  viewportSetTextureMipmapBias(viewport: RID, mipmapBias: float): void;
/**
 * If `true`, the viewport renders its background as transparent.
 * @param viewport RID
 * @param enabled boolean
 */
  viewportSetTransparentBackground(viewport: RID, enabled: boolean): void;
/**
 * Sets when the viewport should be updated. See `ViewportUpdateMode` constants for options.
 * @param viewport RID
 * @param updateMode int
 */
  viewportSetUpdateMode(viewport: RID, updateMode: int): void;
/**
 * If `true`, enables debanding on the specified viewport. Equivalent to `ProjectSettings.rendering/anti_aliasing/quality/use_debanding` or `Viewport.use_debanding`.
 * @param viewport RID
 * @param enable boolean
 */
  viewportSetUseDebanding(viewport: RID, enable: boolean): void;
/**
 * If `true`, 2D rendering will use a high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients. This setting has the same effect as `Viewport.use_hdr_2d`.
 * 
 * **Note:** This setting will have no effect when using the Compatibility renderer, which always renders in low dynamic range for performance reasons.
 * @param viewport RID
 * @param enabled boolean
 */
  viewportSetUseHdr2d(viewport: RID, enabled: boolean): void;
/**
 * If `true`, enables occlusion culling on the specified viewport. Equivalent to `ProjectSettings.rendering/occlusion_culling/use_occlusion_culling`.
 * @param viewport RID
 * @param enable boolean
 */
  viewportSetUseOcclusionCulling(viewport: RID, enable: boolean): void;
/**
 * If `true`, use temporal antialiasing. Equivalent to `ProjectSettings.rendering/anti_aliasing/quality/use_taa` or `Viewport.use_taa`.
 * @param viewport RID
 * @param enable boolean
 */
  viewportSetUseTaa(viewport: RID, enable: boolean): void;
/**
 * If `true`, the viewport uses augmented or virtual reality technologies. See `XRInterface`.
 * @param viewport RID
 * @param useXr boolean
 */
  viewportSetUseXr(viewport: RID, useXr: boolean): void;
/**
 * Sets the Variable Rate Shading (VRS) mode for the viewport. If the GPU does not support VRS, this property is ignored. Equivalent to `ProjectSettings.rendering/vrs/mode`.
 * @param viewport RID
 * @param mode int
 */
  viewportSetVrsMode(viewport: RID, mode: int): void;
/**
 * The texture to use when the VRS mode is set to `RenderingServer.VIEWPORT_VRS_TEXTURE`. Equivalent to `ProjectSettings.rendering/vrs/texture`.
 * @param viewport RID
 * @param texture RID
 */
  viewportSetVrsTexture(viewport: RID, texture: RID): void;
/**
 * Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored.
 * If set to `RenderingServer.VIEWPORT_VRS_UPDATE_ONCE`, the input texture is copied once and the mode is changed to `RenderingServer.VIEWPORT_VRS_UPDATE_DISABLED`.
 * @param viewport RID
 * @param mode int
 */
  viewportSetVrsUpdateMode(viewport: RID, mode: int): void;
/**
 * Creates a new 3D visibility notifier object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `visibility_notifier_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * To place in a scene, attach this notifier to an instance using `instance_set_base` using the returned RID.
 * 
 * **Note:** The equivalent node is `VisibleOnScreenNotifier3D`.
 * @returns RID
 */
  visibilityNotifierCreate(): RID;
/**
 * @param notifier RID
 * @param aabb AABB
 */
  visibilityNotifierSetAabb(notifier: RID, aabb: AABB): void;
/**
 * @param notifier RID
 * @param enterCallable Callable
 * @param exitCallable Callable
 */
  visibilityNotifierSetCallbacks(notifier: RID, enterCallable: Callable, exitCallable: Callable): void;
/**
 * @param voxelGi RID
 * @param toCellXform Transform3D
 * @param aabb AABB
 * @param octreeSize Vector3i
 * @param octreeCells PackedByteArray
 * @param dataCells PackedByteArray
 * @param distanceField PackedByteArray
 * @param levelCounts PackedInt32Array
 */
  voxelGiAllocateData(voxelGi: RID, toCellXform: Transform3D, aabb: AABB, octreeSize: Vector3i, octreeCells: PackedByteArray, dataCells: PackedByteArray, distanceField: PackedByteArray, levelCounts: PackedInt32Array): void;
/**
 * Creates a new voxel-based global illumination object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `voxel_gi_*` RenderingServer functions.
 * Once finished with your RID, you will want to free the RID using the RenderingServer's `free_rid` method.
 * 
 * **Note:** The equivalent node is `VoxelGI`.
 * @returns RID
 */
  voxelGiCreate(): RID;
/**
 * @param voxelGi RID
 * @returns PackedByteArray
 */
  voxelGiGetDataCells(voxelGi: RID): PackedByteArray;
/**
 * @param voxelGi RID
 * @returns PackedByteArray
 */
  voxelGiGetDistanceField(voxelGi: RID): PackedByteArray;
/**
 * @param voxelGi RID
 * @returns PackedInt32Array
 */
  voxelGiGetLevelCounts(voxelGi: RID): PackedInt32Array;
/**
 * @param voxelGi RID
 * @returns PackedByteArray
 */
  voxelGiGetOctreeCells(voxelGi: RID): PackedByteArray;
/**
 * @param voxelGi RID
 * @returns Vector3i
 */
  voxelGiGetOctreeSize(voxelGi: RID): Vector3i;
/**
 * @param voxelGi RID
 * @returns Transform3D
 */
  voxelGiGetToCellXform(voxelGi: RID): Transform3D;
/**
 * Used to inform the renderer what exposure normalization value was used while baking the voxel gi. This value will be used and modulated at run time to ensure that the voxel gi maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see `camera_attributes_set_exposure`.
 * @param voxelGi RID
 * @param bakedExposure float
 */
  voxelGiSetBakedExposureNormalization(voxelGi: RID, bakedExposure: float): void;
/**
 * Sets the `VoxelGIData.bias` value to use on the specified `voxel_gi`'s `RID`.
 * @param voxelGi RID
 * @param bias float
 */
  voxelGiSetBias(voxelGi: RID, bias: float): void;
/**
 * Sets the `VoxelGIData.dynamic_range` value to use on the specified `voxel_gi`'s `RID`.
 * @param voxelGi RID
 * @param range float
 */
  voxelGiSetDynamicRange(voxelGi: RID, range: float): void;
/**
 * Sets the `VoxelGIData.energy` value to use on the specified `voxel_gi`'s `RID`.
 * @param voxelGi RID
 * @param energy float
 */
  voxelGiSetEnergy(voxelGi: RID, energy: float): void;
/**
 * Sets the `VoxelGIData.interior` value to use on the specified `voxel_gi`'s `RID`.
 * @param voxelGi RID
 * @param enable boolean
 */
  voxelGiSetInterior(voxelGi: RID, enable: boolean): void;
/**
 * Sets the `VoxelGIData.normal_bias` value to use on the specified `voxel_gi`'s `RID`.
 * @param voxelGi RID
 * @param bias float
 */
  voxelGiSetNormalBias(voxelGi: RID, bias: float): void;
/**
 * Sets the `VoxelGIData.propagation` value to use on the specified `voxel_gi`'s `RID`.
 * @param voxelGi RID
 * @param amount float
 */
  voxelGiSetPropagation(voxelGi: RID, amount: float): void;
/**
 * Sets the `ProjectSettings.rendering/global_illumination/voxel_gi/quality` value to use when rendering. This parameter is global and cannot be set on a per-VoxelGI basis.
 * @param quality int
 */
  voxelGiSetQuality(quality: int): void;
/**
 * Sets the `VoxelGIData.use_two_bounces` value to use on the specified `voxel_gi`'s `RID`.
 * @param voxelGi RID
 * @param enable boolean
 */
  voxelGiSetUseTwoBounces(voxelGi: RID, enable: boolean): void;
/**
 * Emitted at the end of the frame, after the RenderingServer has finished updating all the Viewports.
 */
  framePostDraw: Signal<[]>;
/**
 * Emitted at the beginning of the frame, before the RenderingServer updates all the Viewports.
 */
  framePreDraw: Signal<[]>;
/**
 * Marks an error that shows that the index array is empty.
 */
  static readonly NO_INDEX_ARRAY: int;
/**
 * Number of weights/bones per vertex.
 */
  static readonly ARRAY_WEIGHTS_SIZE: int;
/**
 * The minimum Z-layer for canvas items.
 */
  static readonly CANVAS_ITEM_Z_MIN: int;
/**
 * The maximum Z-layer for canvas items.
 */
  static readonly CANVAS_ITEM_Z_MAX: int;
/**
 * The maximum number of glow levels that can be used with the glow post-processing effect.
 */
  static readonly MAX_GLOW_LEVELS: int;
/**
 * @deprecated This constant is not used by the engine.
 */
  static readonly MAX_CURSORS: int;
/**
 * The maximum number of directional lights that can be rendered at a given time in 2D.
 */
  static readonly MAX_2D_DIRECTIONAL_LIGHTS: int;
/**
 * The maximum number of surfaces a mesh can have.
 */
  static readonly MAX_MESH_SURFACES: int;
/**
 * 2D texture.
 */
  static readonly TEXTURE_TYPE_2D: int;
/**
 * Layered texture.
 */
  static readonly TEXTURE_TYPE_LAYERED: int;
/**
 * 3D texture.
 */
  static readonly TEXTURE_TYPE_3D: int;
/**
 * Array of 2-dimensional textures (see `Texture2DArray`).
 */
  static readonly TEXTURE_LAYERED_2D_ARRAY: int;
/**
 * Cubemap texture (see `Cubemap`).
 */
  static readonly TEXTURE_LAYERED_CUBEMAP: int;
/**
 * Array of cubemap textures (see `CubemapArray`).
 */
  static readonly TEXTURE_LAYERED_CUBEMAP_ARRAY: int;
/**
 * Left face of a `Cubemap`.
 */
  static readonly CUBEMAP_LAYER_LEFT: int;
/**
 * Right face of a `Cubemap`.
 */
  static readonly CUBEMAP_LAYER_RIGHT: int;
/**
 * Bottom face of a `Cubemap`.
 */
  static readonly CUBEMAP_LAYER_BOTTOM: int;
/**
 * Top face of a `Cubemap`.
 */
  static readonly CUBEMAP_LAYER_TOP: int;
/**
 * Front face of a `Cubemap`.
 */
  static readonly CUBEMAP_LAYER_FRONT: int;
/**
 * Back face of a `Cubemap`.
 */
  static readonly CUBEMAP_LAYER_BACK: int;
/**
 * Shader is a 3D shader.
 */
  static readonly SHADER_SPATIAL: int;
/**
 * Shader is a 2D shader.
 */
  static readonly SHADER_CANVAS_ITEM: int;
/**
 * Shader is a particle shader (can be used in both 2D and 3D).
 */
  static readonly SHADER_PARTICLES: int;
/**
 * Shader is a 3D sky shader.
 */
  static readonly SHADER_SKY: int;
/**
 * Shader is a 3D fog shader.
 */
  static readonly SHADER_FOG: int;
/**
 * Represents the size of the `ShaderMode` enum.
 */
  static readonly SHADER_MAX: int;
/**
 * The minimum renderpriority of all materials.
 */
  static readonly MATERIAL_RENDER_PRIORITY_MIN: int;
/**
 * The maximum renderpriority of all materials.
 */
  static readonly MATERIAL_RENDER_PRIORITY_MAX: int;
/**
 * Array is a vertex position array.
 */
  static readonly ARRAY_VERTEX: int;
/**
 * Array is a normal array.
 */
  static readonly ARRAY_NORMAL: int;
/**
 * Array is a tangent array.
 */
  static readonly ARRAY_TANGENT: int;
/**
 * Array is a vertex color array.
 */
  static readonly ARRAY_COLOR: int;
/**
 * Array is a UV coordinates array.
 */
  static readonly ARRAY_TEX_UV: int;
/**
 * Array is a UV coordinates array for the second set of UV coordinates.
 */
  static readonly ARRAY_TEX_UV2: int;
/**
 * Array is a custom data array for the first set of custom data.
 */
  static readonly ARRAY_CUSTOM0: int;
/**
 * Array is a custom data array for the second set of custom data.
 */
  static readonly ARRAY_CUSTOM1: int;
/**
 * Array is a custom data array for the third set of custom data.
 */
  static readonly ARRAY_CUSTOM2: int;
/**
 * Array is a custom data array for the fourth set of custom data.
 */
  static readonly ARRAY_CUSTOM3: int;
/**
 * Array contains bone information.
 */
  static readonly ARRAY_BONES: int;
/**
 * Array is weight information.
 */
  static readonly ARRAY_WEIGHTS: int;
/**
 * Array is an index array.
 */
  static readonly ARRAY_INDEX: int;
/**
 * Represents the size of the `ArrayType` enum.
 */
  static readonly ARRAY_MAX: int;
/**
 * The number of custom data arrays available (`ARRAY_CUSTOM0`, `ARRAY_CUSTOM1`, `ARRAY_CUSTOM2`, `ARRAY_CUSTOM3`).
 */
  static readonly ARRAY_CUSTOM_COUNT: int;
/**
 * Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, unsigned floating-point in the `[0.0, 1.0]` range.
 */
  static readonly ARRAY_CUSTOM_RGBA8_UNORM: int;
/**
 * Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, signed floating-point in the `[-1.0, 1.0]` range.
 */
  static readonly ARRAY_CUSTOM_RGBA8_SNORM: int;
/**
 * Custom data array contains 16-bit-per-channel red/green color data. Values are floating-point in half precision.
 */
  static readonly ARRAY_CUSTOM_RG_HALF: int;
/**
 * Custom data array contains 16-bit-per-channel red/green/blue/alpha color data. Values are floating-point in half precision.
 */
  static readonly ARRAY_CUSTOM_RGBA_HALF: int;
/**
 * Custom data array contains 32-bit-per-channel red color data. Values are floating-point in single precision.
 */
  static readonly ARRAY_CUSTOM_R_FLOAT: int;
/**
 * Custom data array contains 32-bit-per-channel red/green color data. Values are floating-point in single precision.
 */
  static readonly ARRAY_CUSTOM_RG_FLOAT: int;
/**
 * Custom data array contains 32-bit-per-channel red/green/blue color data. Values are floating-point in single precision.
 */
  static readonly ARRAY_CUSTOM_RGB_FLOAT: int;
/**
 * Custom data array contains 32-bit-per-channel red/green/blue/alpha color data. Values are floating-point in single precision.
 */
  static readonly ARRAY_CUSTOM_RGBA_FLOAT: int;
/**
 * Represents the size of the `ArrayCustomFormat` enum.
 */
  static readonly ARRAY_CUSTOM_MAX: int;
/**
 * Flag used to mark a vertex position array.
 */
  static readonly ARRAY_FORMAT_VERTEX: int;
/**
 * Flag used to mark a normal array.
 */
  static readonly ARRAY_FORMAT_NORMAL: int;
/**
 * Flag used to mark a tangent array.
 */
  static readonly ARRAY_FORMAT_TANGENT: int;
/**
 * Flag used to mark a vertex color array.
 */
  static readonly ARRAY_FORMAT_COLOR: int;
/**
 * Flag used to mark a UV coordinates array.
 */
  static readonly ARRAY_FORMAT_TEX_UV: int;
/**
 * Flag used to mark a UV coordinates array for the second UV coordinates.
 */
  static readonly ARRAY_FORMAT_TEX_UV2: int;
/**
 * Flag used to mark an array of custom per-vertex data for the first set of custom data.
 */
  static readonly ARRAY_FORMAT_CUSTOM0: int;
/**
 * Flag used to mark an array of custom per-vertex data for the second set of custom data.
 */
  static readonly ARRAY_FORMAT_CUSTOM1: int;
/**
 * Flag used to mark an array of custom per-vertex data for the third set of custom data.
 */
  static readonly ARRAY_FORMAT_CUSTOM2: int;
/**
 * Flag used to mark an array of custom per-vertex data for the fourth set of custom data.
 */
  static readonly ARRAY_FORMAT_CUSTOM3: int;
/**
 * Flag used to mark a bone information array.
 */
  static readonly ARRAY_FORMAT_BONES: int;
/**
 * Flag used to mark a weights array.
 */
  static readonly ARRAY_FORMAT_WEIGHTS: int;
/**
 * Flag used to mark an index array.
 */
  static readonly ARRAY_FORMAT_INDEX: int;
/**
 * Mask of mesh channels permitted in blend shapes.
 */
  static readonly ARRAY_FORMAT_BLEND_SHAPE_MASK: int;
/**
 * Shift of first custom channel.
 */
  static readonly ARRAY_FORMAT_CUSTOM_BASE: int;
/**
 * Number of format bits per custom channel. See `ArrayCustomFormat`.
 */
  static readonly ARRAY_FORMAT_CUSTOM_BITS: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 0.
 */
  static readonly ARRAY_FORMAT_CUSTOM0_SHIFT: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 1.
 */
  static readonly ARRAY_FORMAT_CUSTOM1_SHIFT: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 2.
 */
  static readonly ARRAY_FORMAT_CUSTOM2_SHIFT: int;
/**
 * Amount to shift `ArrayCustomFormat` for custom channel index 3.
 */
  static readonly ARRAY_FORMAT_CUSTOM3_SHIFT: int;
/**
 * Mask of custom format bits per custom channel. Must be shifted by one of the SHIFT constants. See `ArrayCustomFormat`.
 */
  static readonly ARRAY_FORMAT_CUSTOM_MASK: int;
/**
 * Shift of first compress flag. Compress flags should be passed to `ArrayMesh.add_surface_from_arrays` and `SurfaceTool.commit`.
 */
  static readonly ARRAY_COMPRESS_FLAGS_BASE: int;
/**
 * Flag used to mark that the array contains 2D vertices.
 */
  static readonly ARRAY_FLAG_USE_2D_VERTICES: int;
/**
 * Flag indices that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan.
 */
  static readonly ARRAY_FLAG_USE_DYNAMIC_UPDATE: int;
/**
 * Flag used to mark that the array uses 8 bone weights instead of 4.
 */
  static readonly ARRAY_FLAG_USE_8_BONE_WEIGHTS: int;
/**
 * Flag used to mark that the mesh does not have a vertex array and instead will infer vertex positions in the shader using indices and other information.
 */
  static readonly ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY: int;
/**
 * Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can.
 */
  static readonly ARRAY_FLAG_COMPRESS_ATTRIBUTES: int;
/**
 * Flag used to mark the start of the bits used to store the mesh version.
 */
  static readonly ARRAY_FLAG_FORMAT_VERSION_BASE: int;
/**
 * Flag used to shift a mesh format int to bring the version into the lowest digits.
 */
  static readonly ARRAY_FLAG_FORMAT_VERSION_SHIFT: int;
/**
 * Flag used to record the format used by prior mesh versions before the introduction of a version.
 */
  static readonly ARRAY_FLAG_FORMAT_VERSION_1: int;
/**
 * Flag used to record the second iteration of the mesh version flag. The primary difference between this and `ARRAY_FLAG_FORMAT_VERSION_1` is that this version supports `ARRAY_FLAG_COMPRESS_ATTRIBUTES` and in this version vertex positions are de-interleaved from normals and tangents.
 */
  static readonly ARRAY_FLAG_FORMAT_VERSION_2: int;
/**
 * Flag used to record the current version that the engine expects. Currently this is the same as `ARRAY_FLAG_FORMAT_VERSION_2`.
 */
  static readonly ARRAY_FLAG_FORMAT_CURRENT_VERSION: int;
/**
 * Flag used to isolate the bits used for mesh version after using `ARRAY_FLAG_FORMAT_VERSION_SHIFT` to shift them into place.
 */
  static readonly ARRAY_FLAG_FORMAT_VERSION_MASK: int;
/**
 * Primitive to draw consists of points.
 */
  static readonly PRIMITIVE_POINTS: int;
/**
 * Primitive to draw consists of lines.
 */
  static readonly PRIMITIVE_LINES: int;
/**
 * Primitive to draw consists of a line strip from start to end.
 */
  static readonly PRIMITIVE_LINE_STRIP: int;
/**
 * Primitive to draw consists of triangles.
 */
  static readonly PRIMITIVE_TRIANGLES: int;
/**
 * Primitive to draw consists of a triangle strip (the last 3 vertices are always combined to make a triangle).
 */
  static readonly PRIMITIVE_TRIANGLE_STRIP: int;
/**
 * Represents the size of the `PrimitiveType` enum.
 */
  static readonly PRIMITIVE_MAX: int;
/**
 * Blend shapes are normalized.
 */
  static readonly BLEND_SHAPE_MODE_NORMALIZED: int;
/**
 * Blend shapes are relative to base weight.
 */
  static readonly BLEND_SHAPE_MODE_RELATIVE: int;
/**
 * Use `Transform2D` to store MultiMesh transform.
 */
  static readonly MULTIMESH_TRANSFORM_2D: int;
/**
 * Use `Transform3D` to store MultiMesh transform.
 */
  static readonly MULTIMESH_TRANSFORM_3D: int;
/**
 * MultiMesh physics interpolation favors speed over quality.
 */
  static readonly MULTIMESH_INTERP_QUALITY_FAST: int;
/**
 * MultiMesh physics interpolation favors quality over speed.
 */
  static readonly MULTIMESH_INTERP_QUALITY_HIGH: int;
/**
 * Nearest-neighbor filter for light projectors (use for pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps.
 */
  static readonly LIGHT_PROJECTOR_FILTER_NEAREST: int;
/**
 * Linear filter for light projectors (use for non-pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps.
 */
  static readonly LIGHT_PROJECTOR_FILTER_LINEAR: int;
/**
 * Nearest-neighbor filter for light projectors (use for pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 */
  static readonly LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS: int;
/**
 * Linear filter for light projectors (use for non-pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 */
  static readonly LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS: int;
/**
 * Nearest-neighbor filter for light projectors (use for pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  static readonly LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC: int;
/**
 * Linear filter for light projectors (use for non-pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  static readonly LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC: int;
/**
 * Directional (sun/moon) light (see `DirectionalLight3D`).
 */
  static readonly LIGHT_DIRECTIONAL: int;
/**
 * Omni light (see `OmniLight3D`).
 */
  static readonly LIGHT_OMNI: int;
/**
 * Spot light (see `SpotLight3D`).
 */
  static readonly LIGHT_SPOT: int;
/**
 * The light's energy multiplier.
 */
  static readonly LIGHT_PARAM_ENERGY: int;
/**
 * The light's indirect energy multiplier (final indirect energy is `LIGHT_PARAM_ENERGY` * `LIGHT_PARAM_INDIRECT_ENERGY`).
 */
  static readonly LIGHT_PARAM_INDIRECT_ENERGY: int;
/**
 * The light's volumetric fog energy multiplier (final volumetric fog energy is `LIGHT_PARAM_ENERGY` * `LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY`).
 */
  static readonly LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY: int;
/**
 * The light's influence on specularity.
 */
  static readonly LIGHT_PARAM_SPECULAR: int;
/**
 * The light's range.
 */
  static readonly LIGHT_PARAM_RANGE: int;
/**
 * The size of the light when using spot light or omni light. The angular size of the light when using directional light.
 */
  static readonly LIGHT_PARAM_SIZE: int;
/**
 * The light's attenuation.
 */
  static readonly LIGHT_PARAM_ATTENUATION: int;
/**
 * The spotlight's angle.
 */
  static readonly LIGHT_PARAM_SPOT_ANGLE: int;
/**
 * The spotlight's attenuation.
 */
  static readonly LIGHT_PARAM_SPOT_ATTENUATION: int;
/**
 * The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering).
 */
  static readonly LIGHT_PARAM_SHADOW_MAX_DISTANCE: int;
/**
 * Proportion of shadow atlas occupied by the first split.
 */
  static readonly LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET: int;
/**
 * Proportion of shadow atlas occupied by the second split.
 */
  static readonly LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET: int;
/**
 * Proportion of shadow atlas occupied by the third split. The fourth split occupies the rest.
 */
  static readonly LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET: int;
/**
 * Proportion of shadow max distance where the shadow will start to fade out.
 */
  static readonly LIGHT_PARAM_SHADOW_FADE_START: int;
/**
 * Normal bias used to offset shadow lookup by object normal. Can be used to fix self-shadowing artifacts.
 */
  static readonly LIGHT_PARAM_SHADOW_NORMAL_BIAS: int;
/**
 * Bias the shadow lookup to fix self-shadowing artifacts.
 */
  static readonly LIGHT_PARAM_SHADOW_BIAS: int;
/**
 * Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect.
 */
  static readonly LIGHT_PARAM_SHADOW_PANCAKE_SIZE: int;
/**
 * The light's shadow opacity. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost.
 */
  static readonly LIGHT_PARAM_SHADOW_OPACITY: int;
/**
 * Blurs the edges of the shadow. Can be used to hide pixel artifacts in low resolution shadow maps. A high value can make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible.
 */
  static readonly LIGHT_PARAM_SHADOW_BLUR: int;
  static readonly LIGHT_PARAM_TRANSMITTANCE_BIAS: int;
/**
 * Constant representing the intensity of the light, measured in Lumens when dealing with a `SpotLight3D` or `OmniLight3D`, or measured in Lux with a `DirectionalLight3D`. Only used when `ProjectSettings.rendering/lights_and_shadows/use_physical_light_units` is `true`.
 */
  static readonly LIGHT_PARAM_INTENSITY: int;
/**
 * Represents the size of the `LightParam` enum.
 */
  static readonly LIGHT_PARAM_MAX: int;
/**
 * Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.
 */
  static readonly LIGHT_BAKE_DISABLED: int;
/**
 * Light is taken into account in static baking (`VoxelGI`, `LightmapGI`, SDFGI (`Environment.sdfgi_enabled`)). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off.
 */
  static readonly LIGHT_BAKE_STATIC: int;
/**
 * Light is taken into account in dynamic baking (`VoxelGI` and SDFGI (`Environment.sdfgi_enabled`) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to `LIGHT_BAKE_STATIC`. This has a greater performance cost compared to `LIGHT_BAKE_STATIC`. When using SDFGI, the update speed of dynamic lights is affected by `ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights`.
 */
  static readonly LIGHT_BAKE_DYNAMIC: int;
/**
 * Use a dual paraboloid shadow map for omni lights.
 */
  static readonly LIGHT_OMNI_SHADOW_DUAL_PARABOLOID: int;
/**
 * Use a cubemap shadow map for omni lights. Slower but better quality than dual paraboloid.
 */
  static readonly LIGHT_OMNI_SHADOW_CUBE: int;
/**
 * Use orthogonal shadow projection for directional light.
 */
  static readonly LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL: int;
/**
 * Use 2 splits for shadow projection when using directional light.
 */
  static readonly LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS: int;
/**
 * Use 4 splits for shadow projection when using directional light.
 */
  static readonly LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS: int;
/**
 * Use DirectionalLight3D in both sky rendering and scene lighting.
 */
  static readonly LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY: int;
/**
 * Only use DirectionalLight3D in scene lighting.
 */
  static readonly LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY: int;
/**
 * Only use DirectionalLight3D in sky rendering.
 */
  static readonly LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY: int;
/**
 * Lowest shadow filtering quality (fastest). Soft shadows are not available with this quality setting, which means the `Light3D.shadow_blur` property is ignored if `Light3D.light_size` and `Light3D.light_angular_distance` is `0.0`.
 * 
 * **Note:** The variable shadow blur performed by `Light3D.light_size` and `Light3D.light_angular_distance` is still effective when using hard shadow filtering. In this case, `Light3D.shadow_blur` *is* taken into account. However, the results will not be blurred, instead the blur amount is treated as a maximum radius for the penumbra.
 */
  static readonly SHADOW_QUALITY_HARD: int;
/**
 * Very low shadow filtering quality (faster). When using this quality setting, `Light3D.shadow_blur` is automatically multiplied by 0.75× to avoid introducing too much noise. This division only applies to lights whose `Light3D.light_size` or `Light3D.light_angular_distance` is `0.0`).
 */
  static readonly SHADOW_QUALITY_SOFT_VERY_LOW: int;
/**
 * Low shadow filtering quality (fast).
 */
  static readonly SHADOW_QUALITY_SOFT_LOW: int;
/**
 * Medium low shadow filtering quality (average).
 */
  static readonly SHADOW_QUALITY_SOFT_MEDIUM: int;
/**
 * High low shadow filtering quality (slow). When using this quality setting, `Light3D.shadow_blur` is automatically multiplied by 1.5× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose `Light3D.light_size` or `Light3D.light_angular_distance` is `0.0`).
 */
  static readonly SHADOW_QUALITY_SOFT_HIGH: int;
/**
 * Highest low shadow filtering quality (slowest). When using this quality setting, `Light3D.shadow_blur` is automatically multiplied by 2× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose `Light3D.light_size` or `Light3D.light_angular_distance` is `0.0`).
 */
  static readonly SHADOW_QUALITY_SOFT_ULTRA: int;
/**
 * Represents the size of the `ShadowQuality` enum.
 */
  static readonly SHADOW_QUALITY_MAX: int;
/**
 * Reflection probe will update reflections once and then stop.
 */
  static readonly REFLECTION_PROBE_UPDATE_ONCE: int;
/**
 * Reflection probe will update each frame. This mode is necessary to capture moving objects.
 */
  static readonly REFLECTION_PROBE_UPDATE_ALWAYS: int;
/**
 * Do not apply any ambient lighting inside the reflection probe's box defined by its size.
 */
  static readonly REFLECTION_PROBE_AMBIENT_DISABLED: int;
/**
 * Apply automatically-sourced environment lighting inside the reflection probe's box defined by its size.
 */
  static readonly REFLECTION_PROBE_AMBIENT_ENVIRONMENT: int;
/**
 * Apply custom ambient lighting inside the reflection probe's box defined by its size. See `reflection_probe_set_ambient_color` and `reflection_probe_set_ambient_energy`.
 */
  static readonly REFLECTION_PROBE_AMBIENT_COLOR: int;
/**
 * Albedo texture slot in a decal (`Decal.texture_albedo`).
 */
  static readonly DECAL_TEXTURE_ALBEDO: int;
/**
 * Normal map texture slot in a decal (`Decal.texture_normal`).
 */
  static readonly DECAL_TEXTURE_NORMAL: int;
/**
 * Occlusion/Roughness/Metallic texture slot in a decal (`Decal.texture_orm`).
 */
  static readonly DECAL_TEXTURE_ORM: int;
/**
 * Emission texture slot in a decal (`Decal.texture_emission`).
 */
  static readonly DECAL_TEXTURE_EMISSION: int;
/**
 * Represents the size of the `DecalTexture` enum.
 */
  static readonly DECAL_TEXTURE_MAX: int;
/**
 * Nearest-neighbor filter for decals (use for pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps.
 */
  static readonly DECAL_FILTER_NEAREST: int;
/**
 * Linear filter for decals (use for non-pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps.
 */
  static readonly DECAL_FILTER_LINEAR: int;
/**
 * Nearest-neighbor filter for decals (use for pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 */
  static readonly DECAL_FILTER_NEAREST_MIPMAPS: int;
/**
 * Linear filter for decals (use for non-pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 */
  static readonly DECAL_FILTER_LINEAR_MIPMAPS: int;
/**
 * Nearest-neighbor filter for decals (use for pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  static readonly DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC: int;
/**
 * Linear filter for decals (use for non-pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 */
  static readonly DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC: int;
/**
 * Low `VoxelGI` rendering quality using 4 cones.
 */
  static readonly VOXEL_GI_QUALITY_LOW: int;
/**
 * High `VoxelGI` rendering quality using 6 cones.
 */
  static readonly VOXEL_GI_QUALITY_HIGH: int;
/**
 * 2D particles.
 */
  static readonly PARTICLES_MODE_2D: int;
/**
 * 3D particles.
 */
  static readonly PARTICLES_MODE_3D: int;
  static readonly PARTICLES_TRANSFORM_ALIGN_DISABLED: int;
  static readonly PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD: int;
  static readonly PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY: int;
  static readonly PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY: int;
  static readonly PARTICLES_EMIT_FLAG_POSITION: int;
  static readonly PARTICLES_EMIT_FLAG_ROTATION_SCALE: int;
  static readonly PARTICLES_EMIT_FLAG_VELOCITY: int;
  static readonly PARTICLES_EMIT_FLAG_COLOR: int;
  static readonly PARTICLES_EMIT_FLAG_CUSTOM: int;
/**
 * Draw particles in the order that they appear in the particles array.
 */
  static readonly PARTICLES_DRAW_ORDER_INDEX: int;
/**
 * Sort particles based on their lifetime. In other words, the particle with the highest lifetime is drawn at the front.
 */
  static readonly PARTICLES_DRAW_ORDER_LIFETIME: int;
/**
 * Sort particles based on the inverse of their lifetime. In other words, the particle with the lowest lifetime is drawn at the front.
 */
  static readonly PARTICLES_DRAW_ORDER_REVERSE_LIFETIME: int;
/**
 * Sort particles based on their distance to the camera.
 */
  static readonly PARTICLES_DRAW_ORDER_VIEW_DEPTH: int;
  static readonly PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT: int;
  static readonly PARTICLES_COLLISION_TYPE_BOX_ATTRACT: int;
  static readonly PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT: int;
  static readonly PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE: int;
  static readonly PARTICLES_COLLISION_TYPE_BOX_COLLIDE: int;
  static readonly PARTICLES_COLLISION_TYPE_SDF_COLLIDE: int;
  static readonly PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE: int;
  static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256: int;
  static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512: int;
  static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024: int;
  static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048: int;
  static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096: int;
  static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192: int;
/**
 * Represents the size of the `ParticlesCollisionHeightfieldResolution` enum.
 */
  static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX: int;
/**
 * `FogVolume` will be shaped like an ellipsoid (stretched sphere).
 */
  static readonly FOG_VOLUME_SHAPE_ELLIPSOID: int;
/**
 * `FogVolume` will be shaped like a cone pointing upwards (in local coordinates). The cone's angle is set automatically to fill the size. The cone will be adjusted to fit within the size. Rotate the `FogVolume` node to reorient the cone. Non-uniform scaling via size is not supported (scale the `FogVolume` node instead).
 */
  static readonly FOG_VOLUME_SHAPE_CONE: int;
/**
 * `FogVolume` will be shaped like an upright cylinder (in local coordinates). Rotate the `FogVolume` node to reorient the cylinder. The cylinder will be adjusted to fit within the size. Non-uniform scaling via size is not supported (scale the `FogVolume` node instead).
 */
  static readonly FOG_VOLUME_SHAPE_CYLINDER: int;
/**
 * `FogVolume` will be shaped like a box.
 */
  static readonly FOG_VOLUME_SHAPE_BOX: int;
/**
 * `FogVolume` will have no shape, will cover the whole world and will not be culled.
 */
  static readonly FOG_VOLUME_SHAPE_WORLD: int;
/**
 * Represents the size of the `FogVolumeShape` enum.
 */
  static readonly FOG_VOLUME_SHAPE_MAX: int;
/**
 * Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using `Viewport.scaling_3d_scale`. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling.
 */
  static readonly VIEWPORT_SCALING_3D_MODE_BILINEAR: int;
/**
 * Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using `Viewport.scaling_3d_scale`. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.
 */
  static readonly VIEWPORT_SCALING_3D_MODE_FSR: int;
/**
 * Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using `Viewport.scaling_3d_scale`. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution.
 */
  static readonly VIEWPORT_SCALING_3D_MODE_FSR2: int;
/**
 * Use MetalFX spatial upscaling for the viewport's 3D buffer. The amount of scaling can be set using `Viewport.scaling_3d_scale`. Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.
 * 
 * **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.
 */
  static readonly VIEWPORT_SCALING_3D_MODE_METALFX_SPATIAL: int;
/**
 * Use MetalFX temporal upscaling for the viewport's 3D buffer. The amount of scaling can be set using `Viewport.scaling_3d_scale`. Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use MetalFX at native resolution as a TAA solution.
 * 
 * **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.
 */
  static readonly VIEWPORT_SCALING_3D_MODE_METALFX_TEMPORAL: int;
/**
 * Represents the size of the `ViewportScaling3DMode` enum.
 */
  static readonly VIEWPORT_SCALING_3D_MODE_MAX: int;
/**
 * Do not update the viewport's render target.
 */
  static readonly VIEWPORT_UPDATE_DISABLED: int;
/**
 * Update the viewport's render target once, then switch to `VIEWPORT_UPDATE_DISABLED`.
 */
  static readonly VIEWPORT_UPDATE_ONCE: int;
/**
 * Update the viewport's render target only when it is visible. This is the default value.
 */
  static readonly VIEWPORT_UPDATE_WHEN_VISIBLE: int;
/**
 * Update the viewport's render target only when its parent is visible.
 */
  static readonly VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE: int;
/**
 * Always update the viewport's render target.
 */
  static readonly VIEWPORT_UPDATE_ALWAYS: int;
/**
 * Always clear the viewport's render target before drawing.
 */
  static readonly VIEWPORT_CLEAR_ALWAYS: int;
/**
 * Never clear the viewport's render target.
 */
  static readonly VIEWPORT_CLEAR_NEVER: int;
/**
 * Clear the viewport's render target on the next frame, then switch to `VIEWPORT_CLEAR_NEVER`.
 */
  static readonly VIEWPORT_CLEAR_ONLY_NEXT_FRAME: int;
/**
 * Disable rendering of 3D environment over 2D canvas.
 */
  static readonly VIEWPORT_ENVIRONMENT_DISABLED: int;
/**
 * Enable rendering of 3D environment over 2D canvas.
 */
  static readonly VIEWPORT_ENVIRONMENT_ENABLED: int;
/**
 * Inherit enable/disable value from parent. If the topmost parent is also set to `VIEWPORT_ENVIRONMENT_INHERIT`, then this has the same behavior as `VIEWPORT_ENVIRONMENT_ENABLED`.
 */
  static readonly VIEWPORT_ENVIRONMENT_INHERIT: int;
/**
 * Represents the size of the `ViewportEnvironmentMode` enum.
 */
  static readonly VIEWPORT_ENVIRONMENT_MAX: int;
/**
 * Do not oversize the 2D signed distance field. Occluders may disappear when touching the viewport's edges, and `GPUParticles3D` collision may stop working earlier than intended. This has the lowest GPU requirements.
 */
  static readonly VIEWPORT_SDF_OVERSIZE_100_PERCENT: int;
/**
 * 2D signed distance field covers 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).
 */
  static readonly VIEWPORT_SDF_OVERSIZE_120_PERCENT: int;
/**
 * 2D signed distance field covers 50% of the viewport's size outside the viewport on each side (top, right, bottom, left).
 */
  static readonly VIEWPORT_SDF_OVERSIZE_150_PERCENT: int;
/**
 * 2D signed distance field covers 100% of the viewport's size outside the viewport on each side (top, right, bottom, left). This has the highest GPU requirements.
 */
  static readonly VIEWPORT_SDF_OVERSIZE_200_PERCENT: int;
/**
 * Represents the size of the `ViewportSDFOversize` enum.
 */
  static readonly VIEWPORT_SDF_OVERSIZE_MAX: int;
/**
 * Full resolution 2D signed distance field scale. This has the highest GPU requirements.
 */
  static readonly VIEWPORT_SDF_SCALE_100_PERCENT: int;
/**
 * Half resolution 2D signed distance field scale on each axis (25% of the viewport pixel count).
 */
  static readonly VIEWPORT_SDF_SCALE_50_PERCENT: int;
/**
 * Quarter resolution 2D signed distance field scale on each axis (6.25% of the viewport pixel count). This has the lowest GPU requirements.
 */
  static readonly VIEWPORT_SDF_SCALE_25_PERCENT: int;
/**
 * Represents the size of the `ViewportSDFScale` enum.
 */
  static readonly VIEWPORT_SDF_SCALE_MAX: int;
/**
 * Multisample antialiasing for 3D is disabled. This is the default value, and also the fastest setting.
 */
  static readonly VIEWPORT_MSAA_DISABLED: int;
/**
 * Multisample antialiasing uses 2 samples per pixel for 3D. This has a moderate impact on performance.
 */
  static readonly VIEWPORT_MSAA_2X: int;
/**
 * Multisample antialiasing uses 4 samples per pixel for 3D. This has a high impact on performance.
 */
  static readonly VIEWPORT_MSAA_4X: int;
/**
 * Multisample antialiasing uses 8 samples per pixel for 3D. This has a very high impact on performance. Likely unsupported on low-end and older hardware.
 */
  static readonly VIEWPORT_MSAA_8X: int;
/**
 * Represents the size of the `ViewportMSAA` enum.
 */
  static readonly VIEWPORT_MSAA_MAX: int;
/**
 * Anisotropic filtering is disabled.
 */
  static readonly VIEWPORT_ANISOTROPY_DISABLED: int;
/**
 * Use 2× anisotropic filtering.
 */
  static readonly VIEWPORT_ANISOTROPY_2X: int;
/**
 * Use 4× anisotropic filtering. This is the default value.
 */
  static readonly VIEWPORT_ANISOTROPY_4X: int;
/**
 * Use 8× anisotropic filtering.
 */
  static readonly VIEWPORT_ANISOTROPY_8X: int;
/**
 * Use 16× anisotropic filtering.
 */
  static readonly VIEWPORT_ANISOTROPY_16X: int;
/**
 * Represents the size of the `ViewportAnisotropicFiltering` enum.
 */
  static readonly VIEWPORT_ANISOTROPY_MAX: int;
/**
 * Do not perform any antialiasing in the full screen post-process.
 */
  static readonly VIEWPORT_SCREEN_SPACE_AA_DISABLED: int;
/**
 * Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K.
 */
  static readonly VIEWPORT_SCREEN_SPACE_AA_FXAA: int;
/**
 * Represents the size of the `ViewportScreenSpaceAA` enum.
 */
  static readonly VIEWPORT_SCREEN_SPACE_AA_MAX: int;
/**
 * Low occlusion culling BVH build quality (as defined by Embree). Results in the lowest CPU usage, but least effective culling.
 */
  static readonly VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW: int;
/**
 * Medium occlusion culling BVH build quality (as defined by Embree).
 */
  static readonly VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM: int;
/**
 * High occlusion culling BVH build quality (as defined by Embree). Results in the highest CPU usage, but most effective culling.
 */
  static readonly VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH: int;
/**
 * Number of objects drawn in a single frame.
 */
  static readonly VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME: int;
/**
 * Number of points, lines, or triangles drawn in a single frame.
 */
  static readonly VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME: int;
/**
 * Number of draw calls during this frame.
 */
  static readonly VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME: int;
/**
 * Represents the size of the `ViewportRenderInfo` enum.
 */
  static readonly VIEWPORT_RENDER_INFO_MAX: int;
/**
 * Visible render pass (excluding shadows).
 */
  static readonly VIEWPORT_RENDER_INFO_TYPE_VISIBLE: int;
/**
 * Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits.
 */
  static readonly VIEWPORT_RENDER_INFO_TYPE_SHADOW: int;
/**
 * Canvas item rendering. This includes all 2D rendering.
 */
  static readonly VIEWPORT_RENDER_INFO_TYPE_CANVAS: int;
/**
 * Represents the size of the `ViewportRenderInfoType` enum.
 */
  static readonly VIEWPORT_RENDER_INFO_TYPE_MAX: int;
/**
 * Debug draw is disabled. Default setting.
 */
  static readonly VIEWPORT_DEBUG_DRAW_DISABLED: int;
/**
 * Objects are displayed without light information.
 */
  static readonly VIEWPORT_DEBUG_DRAW_UNSHADED: int;
/**
 * Objects are displayed with only light information.
 */
  static readonly VIEWPORT_DEBUG_DRAW_LIGHTING: int;
/**
 * Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw (represented by brighter colors) means you are wasting performance on drawing pixels that are being hidden behind others.
 * 
 * **Note:** When using this debug draw mode, custom shaders will be ignored. This means vertex displacement won't be visible anymore.
 */
  static readonly VIEWPORT_DEBUG_DRAW_OVERDRAW: int;
/**
 * Debug draw draws objects in wireframe.
 * 
 * **Note:** `set_debug_generate_wireframes` must be called before loading any meshes for wireframes to be visible when using the Compatibility renderer.
 */
  static readonly VIEWPORT_DEBUG_DRAW_WIREFRAME: int;
/**
 * Normal buffer is drawn instead of regular scene so you can see the per-pixel normals that will be used by post-processing effects.
 */
  static readonly VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER: int;
/**
 * Objects are displayed with only the albedo value from `VoxelGI`s.
 */
  static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO: int;
/**
 * Objects are displayed with only the lighting value from `VoxelGI`s.
 */
  static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING: int;
/**
 * Objects are displayed with only the emission color from `VoxelGI`s.
 */
  static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION: int;
/**
 * Draws the shadow atlas that stores shadows from `OmniLight3D`s and `SpotLight3D`s in the upper left quadrant of the `Viewport`.
 */
  static readonly VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS: int;
/**
 * Draws the shadow atlas that stores shadows from `DirectionalLight3D`s in the upper left quadrant of the `Viewport`.
 * The slice of the camera frustum related to the shadow map cascade is superimposed to visualize coverage. The color of each slice matches the colors used for `VIEWPORT_DEBUG_DRAW_PSSM_SPLITS`. When shadow cascades are blended the overlap is taken into account when drawing the frustum slices.
 * The last cascade shows all frustum slices to illustrate the coverage of all slices.
 */
  static readonly VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS: int;
/**
 * Draws the estimated scene luminance. This is a 1×1 texture that is generated when autoexposure is enabled to control the scene's exposure.
 */
  static readonly VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE: int;
/**
 * Draws the screen space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have `Environment.ssao_enabled` set in your `WorldEnvironment`.
 */
  static readonly VIEWPORT_DEBUG_DRAW_SSAO: int;
/**
 * Draws the screen space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have `Environment.ssil_enabled` set in your `WorldEnvironment`.
 */
  static readonly VIEWPORT_DEBUG_DRAW_SSIL: int;
/**
 * Colors each PSSM split for the `DirectionalLight3D`s in the scene a different color so you can see where the splits are. In order they will be colored red, green, blue, yellow.
 */
  static readonly VIEWPORT_DEBUG_DRAW_PSSM_SPLITS: int;
/**
 * Draws the decal atlas that stores decal textures from `Decal`s.
 */
  static readonly VIEWPORT_DEBUG_DRAW_DECAL_ATLAS: int;
/**
 * Draws SDFGI cascade data. This is the data structure that is used to bounce lighting against and create reflections.
 */
  static readonly VIEWPORT_DEBUG_DRAW_SDFGI: int;
/**
 * Draws SDFGI probe data. This is the data structure that is used to give indirect lighting dynamic objects moving within the scene.
 */
  static readonly VIEWPORT_DEBUG_DRAW_SDFGI_PROBES: int;
/**
 * Draws the global illumination buffer (`VoxelGI` or SDFGI).
 */
  static readonly VIEWPORT_DEBUG_DRAW_GI_BUFFER: int;
/**
 * Disable mesh LOD. All meshes are drawn with full detail, which can be used to compare performance.
 */
  static readonly VIEWPORT_DEBUG_DRAW_DISABLE_LOD: int;
/**
 * Draws the `OmniLight3D` cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.
 */
  static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS: int;
/**
 * Draws the `SpotLight3D` cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.
 */
  static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS: int;
/**
 * Draws the `Decal` cluster. Clustering determines where decals are positioned in screen-space, which allows the engine to only process these portions of the screen for decals.
 */
  static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS: int;
/**
 * Draws the `ReflectionProbe` cluster. Clustering determines where reflection probes are positioned in screen-space, which allows the engine to only process these portions of the screen for reflection probes.
 */
  static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES: int;
/**
 * Draws the occlusion culling buffer. This low-resolution occlusion culling buffer is rasterized on the CPU and is used to check whether instances are occluded by other objects.
 */
  static readonly VIEWPORT_DEBUG_DRAW_OCCLUDERS: int;
/**
 * Draws the motion vectors buffer. This is used by temporal antialiasing to correct for motion that occurs during gameplay.
 */
  static readonly VIEWPORT_DEBUG_DRAW_MOTION_VECTORS: int;
/**
 * Internal buffer is drawn instead of regular scene so you can see the per-pixel output that will be used by post-processing effects.
 */
  static readonly VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER: int;
/**
 * Variable rate shading is disabled.
 */
  static readonly VIEWPORT_VRS_DISABLED: int;
/**
 * Variable rate shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view.
 */
  static readonly VIEWPORT_VRS_TEXTURE: int;
/**
 * Variable rate shading texture is supplied by the primary `XRInterface`. Note that this may override the update mode.
 */
  static readonly VIEWPORT_VRS_XR: int;
/**
 * Represents the size of the `ViewportVRSMode` enum.
 */
  static readonly VIEWPORT_VRS_MAX: int;
/**
 * The input texture for variable rate shading will not be processed.
 */
  static readonly VIEWPORT_VRS_UPDATE_DISABLED: int;
/**
 * The input texture for variable rate shading will be processed once.
 */
  static readonly VIEWPORT_VRS_UPDATE_ONCE: int;
/**
 * The input texture for variable rate shading will be processed each frame.
 */
  static readonly VIEWPORT_VRS_UPDATE_ALWAYS: int;
/**
 * Represents the size of the `ViewportVRSUpdateMode` enum.
 */
  static readonly VIEWPORT_VRS_UPDATE_MAX: int;
/**
 * Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use `SKY_MODE_REALTIME`. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses `SKY_MODE_INCREMENTAL`. Otherwise, this defaults to `SKY_MODE_QUALITY`.
 */
  static readonly SKY_MODE_AUTOMATIC: int;
/**
 * Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than `SKY_MODE_REALTIME` but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing `ProjectSettings.rendering/reflections/sky_reflections/ggx_samples`.
 */
  static readonly SKY_MODE_QUALITY: int;
/**
 * Uses the same high quality importance sampling to process the radiance map as `SKY_MODE_QUALITY`, but updates over several frames. The number of frames is determined by `ProjectSettings.rendering/reflections/sky_reflections/roughness_layers`. Use this when you need highest quality radiance maps, but have a sky that updates slowly.
 */
  static readonly SKY_MODE_INCREMENTAL: int;
/**
 * Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on `ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality`.
 * 
 * **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so `sky_set_radiance_size` must be set to `256`. Otherwise, a warning is printed and the overridden radiance size is ignored.
 */
  static readonly SKY_MODE_REALTIME: int;
/**
 * The rendering effect requires the color buffer to be resolved if MSAA is enabled.
 */
  static readonly COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_COLOR: int;
/**
 * The rendering effect requires the depth buffer to be resolved if MSAA is enabled.
 */
  static readonly COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_DEPTH: int;
/**
 * The rendering effect requires motion vectors to be produced.
 */
  static readonly COMPOSITOR_EFFECT_FLAG_NEEDS_MOTION_VECTORS: int;
/**
 * The rendering effect requires normals and roughness g-buffer to be produced (Forward+ only).
 */
  static readonly COMPOSITOR_EFFECT_FLAG_NEEDS_ROUGHNESS: int;
/**
 * The rendering effect requires specular data to be separated out (Forward+ only).
 */
  static readonly COMPOSITOR_EFFECT_FLAG_NEEDS_SEPARATE_SPECULAR: int;
/**
 * The callback is called before our opaque rendering pass, but after depth prepass (if applicable).
 */
  static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_OPAQUE: int;
/**
 * The callback is called after our opaque rendering pass, but before our sky is rendered.
 */
  static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_OPAQUE: int;
/**
 * The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections).
 */
  static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_SKY: int;
/**
 * The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers.
 */
  static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT: int;
/**
 * The callback is called after our transparent rendering pass, but before any built-in post-processing effects and output to our render target.
 */
  static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_TRANSPARENT: int;
  static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_ANY: int;
/**
 * Use the clear color as background.
 */
  static readonly ENV_BG_CLEAR_COLOR: int;
/**
 * Use a specified color as the background.
 */
  static readonly ENV_BG_COLOR: int;
/**
 * Use a sky resource for the background.
 */
  static readonly ENV_BG_SKY: int;
/**
 * Use a specified canvas layer as the background. This can be useful for instantiating a 2D scene in a 3D world.
 */
  static readonly ENV_BG_CANVAS: int;
/**
 * Do not clear the background, use whatever was rendered last frame as the background.
 */
  static readonly ENV_BG_KEEP: int;
/**
 * Displays a camera feed in the background.
 */
  static readonly ENV_BG_CAMERA_FEED: int;
/**
 * Represents the size of the `EnvironmentBG` enum.
 */
  static readonly ENV_BG_MAX: int;
/**
 * Gather ambient light from whichever source is specified as the background.
 */
  static readonly ENV_AMBIENT_SOURCE_BG: int;
/**
 * Disable ambient light.
 */
  static readonly ENV_AMBIENT_SOURCE_DISABLED: int;
/**
 * Specify a specific `Color` for ambient light.
 */
  static readonly ENV_AMBIENT_SOURCE_COLOR: int;
/**
 * Gather ambient light from the `Sky` regardless of what the background is.
 */
  static readonly ENV_AMBIENT_SOURCE_SKY: int;
/**
 * Use the background for reflections.
 */
  static readonly ENV_REFLECTION_SOURCE_BG: int;
/**
 * Disable reflections.
 */
  static readonly ENV_REFLECTION_SOURCE_DISABLED: int;
/**
 * Use the `Sky` for reflections regardless of what the background is.
 */
  static readonly ENV_REFLECTION_SOURCE_SKY: int;
/**
 * Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources.
 */
  static readonly ENV_GLOW_BLEND_MODE_ADDITIVE: int;
/**
 * Screen glow blending mode. Increases brightness, used frequently with bloom.
 */
  static readonly ENV_GLOW_BLEND_MODE_SCREEN: int;
/**
 * Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom).
 */
  static readonly ENV_GLOW_BLEND_MODE_SOFTLIGHT: int;
/**
 * Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness.
 */
  static readonly ENV_GLOW_BLEND_MODE_REPLACE: int;
/**
 * Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect.
 */
  static readonly ENV_GLOW_BLEND_MODE_MIX: int;
/**
 * Use a physically-based fog model defined primarily by fog density.
 */
  static readonly ENV_FOG_MODE_EXPONENTIAL: int;
/**
 * Use a simple fog model defined by start and end positions and a custom curve. While not physically accurate, this model can be useful when you need more artistic control.
 */
  static readonly ENV_FOG_MODE_DEPTH: int;
/**
 * Does not modify color data, resulting in a linear tonemapping curve which unnaturally clips bright values, causing bright lighting to look blown out. The simplest and fastest tonemapper.
 */
  static readonly ENV_TONE_MAPPER_LINEAR: int;
/**
 * A simple tonemapping curve that rolls off bright values to prevent clipping. This results in an image that can appear dull and low contrast. Slower than `ENV_TONE_MAPPER_LINEAR`.
 * 
 * **Note:** When `Environment.tonemap_white` is left at the default value of `1.0`, `ENV_TONE_MAPPER_REINHARD` produces an identical image to `ENV_TONE_MAPPER_LINEAR`.
 */
  static readonly ENV_TONE_MAPPER_REINHARD: int;
/**
 * Uses a film-like tonemapping curve to prevent clipping of bright values and provide better contrast than `ENV_TONE_MAPPER_REINHARD`. Slightly slower than `ENV_TONE_MAPPER_REINHARD`.
 */
  static readonly ENV_TONE_MAPPER_FILMIC: int;
/**
 * Uses a high-contrast film-like tonemapping curve and desaturates bright values for a more realistic appearance. Slightly slower than `ENV_TONE_MAPPER_FILMIC`.
 * 
 * **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.
 */
  static readonly ENV_TONE_MAPPER_ACES: int;
/**
 * Uses a film-like tonemapping curve and desaturates bright values for a more realistic appearance. Better than other tonemappers at maintaining the hue of colors as they become brighter. The slowest tonemapping option.
 * 
 * **Note:** `Environment.tonemap_white` is fixed at a value of `16.29`, which makes `ENV_TONE_MAPPER_AGX` unsuitable for use with the Mobile rendering method.
 */
  static readonly ENV_TONE_MAPPER_AGX: int;
/**
 * Lowest quality of roughness filter for screen-space reflections. Rough materials will not have blurrier screen-space reflections compared to smooth (non-rough) materials. This is the fastest option.
 */
  static readonly ENV_SSR_ROUGHNESS_QUALITY_DISABLED: int;
/**
 * Low quality of roughness filter for screen-space reflections.
 */
  static readonly ENV_SSR_ROUGHNESS_QUALITY_LOW: int;
/**
 * Medium quality of roughness filter for screen-space reflections.
 */
  static readonly ENV_SSR_ROUGHNESS_QUALITY_MEDIUM: int;
/**
 * High quality of roughness filter for screen-space reflections. This is the slowest option.
 */
  static readonly ENV_SSR_ROUGHNESS_QUALITY_HIGH: int;
/**
 * Lowest quality of screen-space ambient occlusion.
 */
  static readonly ENV_SSAO_QUALITY_VERY_LOW: int;
/**
 * Low quality screen-space ambient occlusion.
 */
  static readonly ENV_SSAO_QUALITY_LOW: int;
/**
 * Medium quality screen-space ambient occlusion.
 */
  static readonly ENV_SSAO_QUALITY_MEDIUM: int;
/**
 * High quality screen-space ambient occlusion.
 */
  static readonly ENV_SSAO_QUALITY_HIGH: int;
/**
 * Highest quality screen-space ambient occlusion. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality.
 */
  static readonly ENV_SSAO_QUALITY_ULTRA: int;
/**
 * Lowest quality of screen-space indirect lighting.
 */
  static readonly ENV_SSIL_QUALITY_VERY_LOW: int;
/**
 * Low quality screen-space indirect lighting.
 */
  static readonly ENV_SSIL_QUALITY_LOW: int;
/**
 * High quality screen-space indirect lighting.
 */
  static readonly ENV_SSIL_QUALITY_MEDIUM: int;
/**
 * High quality screen-space indirect lighting.
 */
  static readonly ENV_SSIL_QUALITY_HIGH: int;
/**
 * Highest quality screen-space indirect lighting. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality.
 */
  static readonly ENV_SSIL_QUALITY_ULTRA: int;
/**
 * Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality.
 */
  static readonly ENV_SDFGI_Y_SCALE_50_PERCENT: int;
/**
 * Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales.
 */
  static readonly ENV_SDFGI_Y_SCALE_75_PERCENT: int;
/**
 * Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings.
 */
  static readonly ENV_SDFGI_Y_SCALE_100_PERCENT: int;
/**
 * Throw 4 rays per frame when converging SDFGI. This has the lowest GPU requirements, but creates the most noisy result.
 */
  static readonly ENV_SDFGI_RAY_COUNT_4: int;
/**
 * Throw 8 rays per frame when converging SDFGI.
 */
  static readonly ENV_SDFGI_RAY_COUNT_8: int;
/**
 * Throw 16 rays per frame when converging SDFGI.
 */
  static readonly ENV_SDFGI_RAY_COUNT_16: int;
/**
 * Throw 32 rays per frame when converging SDFGI.
 */
  static readonly ENV_SDFGI_RAY_COUNT_32: int;
/**
 * Throw 64 rays per frame when converging SDFGI.
 */
  static readonly ENV_SDFGI_RAY_COUNT_64: int;
/**
 * Throw 96 rays per frame when converging SDFGI. This has high GPU requirements.
 */
  static readonly ENV_SDFGI_RAY_COUNT_96: int;
/**
 * Throw 128 rays per frame when converging SDFGI. This has very high GPU requirements, but creates the least noisy result.
 */
  static readonly ENV_SDFGI_RAY_COUNT_128: int;
/**
 * Represents the size of the `EnvironmentSDFGIRayCount` enum.
 */
  static readonly ENV_SDFGI_RAY_COUNT_MAX: int;
/**
 * Converge SDFGI over 5 frames. This is the most responsive, but creates the most noisy result with a given ray count.
 */
  static readonly ENV_SDFGI_CONVERGE_IN_5_FRAMES: int;
/**
 * Configure SDFGI to fully converge over 10 frames.
 */
  static readonly ENV_SDFGI_CONVERGE_IN_10_FRAMES: int;
/**
 * Configure SDFGI to fully converge over 15 frames.
 */
  static readonly ENV_SDFGI_CONVERGE_IN_15_FRAMES: int;
/**
 * Configure SDFGI to fully converge over 20 frames.
 */
  static readonly ENV_SDFGI_CONVERGE_IN_20_FRAMES: int;
/**
 * Configure SDFGI to fully converge over 25 frames.
 */
  static readonly ENV_SDFGI_CONVERGE_IN_25_FRAMES: int;
/**
 * Configure SDFGI to fully converge over 30 frames. This is the least responsive, but creates the least noisy result with a given ray count.
 */
  static readonly ENV_SDFGI_CONVERGE_IN_30_FRAMES: int;
/**
 * Represents the size of the `EnvironmentSDFGIFramesToConverge` enum.
 */
  static readonly ENV_SDFGI_CONVERGE_MAX: int;
/**
 * Update indirect light from dynamic lights in SDFGI over 1 frame. This is the most responsive, but has the highest GPU requirements.
 */
  static readonly ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME: int;
/**
 * Update indirect light from dynamic lights in SDFGI over 2 frames.
 */
  static readonly ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES: int;
/**
 * Update indirect light from dynamic lights in SDFGI over 4 frames.
 */
  static readonly ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES: int;
/**
 * Update indirect light from dynamic lights in SDFGI over 8 frames.
 */
  static readonly ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES: int;
/**
 * Update indirect light from dynamic lights in SDFGI over 16 frames. This is the least responsive, but has the lowest GPU requirements.
 */
  static readonly ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES: int;
/**
 * Represents the size of the `EnvironmentSDFGIFramesToUpdateLight` enum.
 */
  static readonly ENV_SDFGI_UPDATE_LIGHT_MAX: int;
/**
 * Disables subsurface scattering entirely, even on materials that have `BaseMaterial3D.subsurf_scatter_enabled` set to `true`. This has the lowest GPU requirements.
 */
  static readonly SUB_SURFACE_SCATTERING_QUALITY_DISABLED: int;
/**
 * Low subsurface scattering quality.
 */
  static readonly SUB_SURFACE_SCATTERING_QUALITY_LOW: int;
/**
 * Medium subsurface scattering quality.
 */
  static readonly SUB_SURFACE_SCATTERING_QUALITY_MEDIUM: int;
/**
 * High subsurface scattering quality. This has the highest GPU requirements.
 */
  static readonly SUB_SURFACE_SCATTERING_QUALITY_HIGH: int;
/**
 * Calculate the DOF blur using a box filter. The fastest option, but results in obvious lines in blur pattern.
 */
  static readonly DOF_BOKEH_BOX: int;
/**
 * Calculates DOF blur using a hexagon shaped filter.
 */
  static readonly DOF_BOKEH_HEXAGON: int;
/**
 * Calculates DOF blur using a circle shaped filter. Best quality and most realistic, but slowest. Use only for areas where a lot of performance can be dedicated to post-processing (e.g. cutscenes).
 */
  static readonly DOF_BOKEH_CIRCLE: int;
/**
 * Lowest quality DOF blur. This is the fastest setting, but you may be able to see filtering artifacts.
 */
  static readonly DOF_BLUR_QUALITY_VERY_LOW: int;
/**
 * Low quality DOF blur.
 */
  static readonly DOF_BLUR_QUALITY_LOW: int;
/**
 * Medium quality DOF blur.
 */
  static readonly DOF_BLUR_QUALITY_MEDIUM: int;
/**
 * Highest quality DOF blur. Results in the smoothest looking blur by taking the most samples, but is also significantly slower.
 */
  static readonly DOF_BLUR_QUALITY_HIGH: int;
/**
 * The instance does not have a type.
 */
  static readonly INSTANCE_NONE: int;
/**
 * The instance is a mesh.
 */
  static readonly INSTANCE_MESH: int;
/**
 * The instance is a multimesh.
 */
  static readonly INSTANCE_MULTIMESH: int;
/**
 * The instance is a particle emitter.
 */
  static readonly INSTANCE_PARTICLES: int;
/**
 * The instance is a GPUParticles collision shape.
 */
  static readonly INSTANCE_PARTICLES_COLLISION: int;
/**
 * The instance is a light.
 */
  static readonly INSTANCE_LIGHT: int;
/**
 * The instance is a reflection probe.
 */
  static readonly INSTANCE_REFLECTION_PROBE: int;
/**
 * The instance is a decal.
 */
  static readonly INSTANCE_DECAL: int;
/**
 * The instance is a VoxelGI.
 */
  static readonly INSTANCE_VOXEL_GI: int;
/**
 * The instance is a lightmap.
 */
  static readonly INSTANCE_LIGHTMAP: int;
/**
 * The instance is an occlusion culling occluder.
 */
  static readonly INSTANCE_OCCLUDER: int;
/**
 * The instance is a visible on-screen notifier.
 */
  static readonly INSTANCE_VISIBLITY_NOTIFIER: int;
/**
 * The instance is a fog volume.
 */
  static readonly INSTANCE_FOG_VOLUME: int;
/**
 * Represents the size of the `InstanceType` enum.
 */
  static readonly INSTANCE_MAX: int;
/**
 * A combination of the flags of geometry instances (mesh, multimesh, immediate and particles).
 */
  static readonly INSTANCE_GEOMETRY_MASK: int;
/**
 * Allows the instance to be used in baked lighting.
 */
  static readonly INSTANCE_FLAG_USE_BAKED_LIGHT: int;
/**
 * Allows the instance to be used with dynamic global illumination.
 */
  static readonly INSTANCE_FLAG_USE_DYNAMIC_GI: int;
/**
 * When set, manually requests to draw geometry on next frame.
 */
  static readonly INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE: int;
/**
 * Always draw, even if the instance would be culled by occlusion culling. Does not affect view frustum culling.
 */
  static readonly INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING: int;
/**
 * Represents the size of the `InstanceFlags` enum.
 */
  static readonly INSTANCE_FLAG_MAX: int;
/**
 * Disable shadows from this instance.
 */
  static readonly SHADOW_CASTING_SETTING_OFF: int;
/**
 * Cast shadows from this instance.
 */
  static readonly SHADOW_CASTING_SETTING_ON: int;
/**
 * Disable backface culling when rendering the shadow of the object. This is slightly slower but may result in more correct shadows.
 */
  static readonly SHADOW_CASTING_SETTING_DOUBLE_SIDED: int;
/**
 * Only render the shadows from the object. The object itself will not be drawn.
 */
  static readonly SHADOW_CASTING_SETTING_SHADOWS_ONLY: int;
/**
 * Disable visibility range fading for the given instance.
 */
  static readonly VISIBILITY_RANGE_FADE_DISABLED: int;
/**
 * Fade-out the given instance when it approaches its visibility range limits.
 */
  static readonly VISIBILITY_RANGE_FADE_SELF: int;
/**
 * Fade-in the given instance's dependencies when reaching its visibility range limits.
 */
  static readonly VISIBILITY_RANGE_FADE_DEPENDENCIES: int;
/**
 * Index of `Image` in array of `Image`s returned by `bake_render_uv2`. Image uses `Image.FORMAT_RGBA8` and contains albedo color in the `.rgb` channels and alpha in the `.a` channel.
 */
  static readonly BAKE_CHANNEL_ALBEDO_ALPHA: int;
/**
 * Index of `Image` in array of `Image`s returned by `bake_render_uv2`. Image uses `Image.FORMAT_RGBA8` and contains the per-pixel normal of the object in the `.rgb` channels and nothing in the `.a` channel. The per-pixel normal is encoded as `normal * 0.5 + 0.5`.
 */
  static readonly BAKE_CHANNEL_NORMAL: int;
/**
 * Index of `Image` in array of `Image`s returned by `bake_render_uv2`. Image uses `Image.FORMAT_RGBA8` and contains ambient occlusion (from material and decals only) in the `.r` channel, roughness in the `.g` channel, metallic in the `.b` channel and sub surface scattering amount in the `.a` channel.
 */
  static readonly BAKE_CHANNEL_ORM: int;
/**
 * Index of `Image` in array of `Image`s returned by `bake_render_uv2`. Image uses `Image.FORMAT_RGBAH` and contains emission color in the `.rgb` channels and nothing in the `.a` channel.
 */
  static readonly BAKE_CHANNEL_EMISSION: int;
/**
 * Diffuse canvas texture (`CanvasTexture.diffuse_texture`).
 */
  static readonly CANVAS_TEXTURE_CHANNEL_DIFFUSE: int;
/**
 * Normal map canvas texture (`CanvasTexture.normal_texture`).
 */
  static readonly CANVAS_TEXTURE_CHANNEL_NORMAL: int;
/**
 * Specular map canvas texture (`CanvasTexture.specular_texture`).
 */
  static readonly CANVAS_TEXTURE_CHANNEL_SPECULAR: int;
/**
 * The nine patch gets stretched where needed.
 */
  static readonly NINE_PATCH_STRETCH: int;
/**
 * The nine patch gets filled with tiles where needed.
 */
  static readonly NINE_PATCH_TILE: int;
/**
 * The nine patch gets filled with tiles where needed and stretches them a bit if needed.
 */
  static readonly NINE_PATCH_TILE_FIT: int;
/**
 * Uses the default filter mode for this `Viewport`.
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_DEFAULT: int;
/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_NEAREST: int;
/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_LINEAR: int;
/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: int;
/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: int;
/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 * 
 * **Note:** This texture filter is rarely useful in 2D projects. `CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS` is usually more appropriate in this case.
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: int;
/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting `ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`.
 * 
 * **Note:** This texture filter is rarely useful in 2D projects. `CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS` is usually more appropriate in this case.
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: int;
/**
 * Max value for `CanvasItemTextureFilter` enum.
 */
  static readonly CANVAS_ITEM_TEXTURE_FILTER_MAX: int;
/**
 * Uses the default repeat mode for this `Viewport`.
 */
  static readonly CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT: int;
/**
 * Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture.
 */
  static readonly CANVAS_ITEM_TEXTURE_REPEAT_DISABLED: int;
/**
 * Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.
 */
  static readonly CANVAS_ITEM_TEXTURE_REPEAT_ENABLED: int;
/**
 * Flip the texture when repeating so that the edge lines up instead of abruptly changing.
 */
  static readonly CANVAS_ITEM_TEXTURE_REPEAT_MIRROR: int;
/**
 * Max value for `CanvasItemTextureRepeat` enum.
 */
  static readonly CANVAS_ITEM_TEXTURE_REPEAT_MAX: int;
/**
 * Child draws over parent and is not clipped.
 */
  static readonly CANVAS_GROUP_MODE_DISABLED: int;
/**
 * Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn.
 */
  static readonly CANVAS_GROUP_MODE_CLIP_ONLY: int;
/**
 * Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area.
 */
  static readonly CANVAS_GROUP_MODE_CLIP_AND_DRAW: int;
  static readonly CANVAS_GROUP_MODE_TRANSPARENT: int;
/**
 * 2D point light (see `PointLight2D`).
 */
  static readonly CANVAS_LIGHT_MODE_POINT: int;
/**
 * 2D directional (sun/moon) light (see `DirectionalLight2D`).
 */
  static readonly CANVAS_LIGHT_MODE_DIRECTIONAL: int;
/**
 * Adds light color additive to the canvas.
 */
  static readonly CANVAS_LIGHT_BLEND_MODE_ADD: int;
/**
 * Adds light color subtractive to the canvas.
 */
  static readonly CANVAS_LIGHT_BLEND_MODE_SUB: int;
/**
 * The light adds color depending on transparency.
 */
  static readonly CANVAS_LIGHT_BLEND_MODE_MIX: int;
/**
 * Do not apply a filter to canvas light shadows.
 */
  static readonly CANVAS_LIGHT_FILTER_NONE: int;
/**
 * Use PCF5 filtering to filter canvas light shadows.
 */
  static readonly CANVAS_LIGHT_FILTER_PCF5: int;
/**
 * Use PCF13 filtering to filter canvas light shadows.
 */
  static readonly CANVAS_LIGHT_FILTER_PCF13: int;
/**
 * Max value of the `CanvasLightShadowFilter` enum.
 */
  static readonly CANVAS_LIGHT_FILTER_MAX: int;
/**
 * Culling of the canvas occluder is disabled.
 */
  static readonly CANVAS_OCCLUDER_POLYGON_CULL_DISABLED: int;
/**
 * Culling of the canvas occluder is clockwise.
 */
  static readonly CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE: int;
/**
 * Culling of the canvas occluder is counterclockwise.
 */
  static readonly CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE: int;
/**
 * Boolean global shader parameter (`global uniform bool ...`).
 */
  static readonly GLOBAL_VAR_TYPE_BOOL: int;
/**
 * 2-dimensional boolean vector global shader parameter (`global uniform bvec2 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_BVEC2: int;
/**
 * 3-dimensional boolean vector global shader parameter (`global uniform bvec3 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_BVEC3: int;
/**
 * 4-dimensional boolean vector global shader parameter (`global uniform bvec4 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_BVEC4: int;
/**
 * Integer global shader parameter (`global uniform int ...`).
 */
  static readonly GLOBAL_VAR_TYPE_INT: int;
/**
 * 2-dimensional integer vector global shader parameter (`global uniform ivec2 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_IVEC2: int;
/**
 * 3-dimensional integer vector global shader parameter (`global uniform ivec3 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_IVEC3: int;
/**
 * 4-dimensional integer vector global shader parameter (`global uniform ivec4 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_IVEC4: int;
/**
 * 2-dimensional integer rectangle global shader parameter (`global uniform ivec4 ...`). Equivalent to `GLOBAL_VAR_TYPE_IVEC4` in shader code, but exposed as a `Rect2i` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_RECT2I: int;
/**
 * Unsigned integer global shader parameter (`global uniform uint ...`).
 */
  static readonly GLOBAL_VAR_TYPE_UINT: int;
/**
 * 2-dimensional unsigned integer vector global shader parameter (`global uniform uvec2 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_UVEC2: int;
/**
 * 3-dimensional unsigned integer vector global shader parameter (`global uniform uvec3 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_UVEC3: int;
/**
 * 4-dimensional unsigned integer vector global shader parameter (`global uniform uvec4 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_UVEC4: int;
/**
 * Single-precision floating-point global shader parameter (`global uniform float ...`).
 */
  static readonly GLOBAL_VAR_TYPE_FLOAT: int;
/**
 * 2-dimensional floating-point vector global shader parameter (`global uniform vec2 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_VEC2: int;
/**
 * 3-dimensional floating-point vector global shader parameter (`global uniform vec3 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_VEC3: int;
/**
 * 4-dimensional floating-point vector global shader parameter (`global uniform vec4 ...`).
 */
  static readonly GLOBAL_VAR_TYPE_VEC4: int;
/**
 * Color global shader parameter (`global uniform vec4 ...`). Equivalent to `GLOBAL_VAR_TYPE_VEC4` in shader code, but exposed as a `Color` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_COLOR: int;
/**
 * 2-dimensional floating-point rectangle global shader parameter (`global uniform vec4 ...`). Equivalent to `GLOBAL_VAR_TYPE_VEC4` in shader code, but exposed as a `Rect2` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_RECT2: int;
/**
 * 2×2 matrix global shader parameter (`global uniform mat2 ...`). Exposed as a `PackedInt32Array` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_MAT2: int;
/**
 * 3×3 matrix global shader parameter (`global uniform mat3 ...`). Exposed as a `Basis` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_MAT3: int;
/**
 * 4×4 matrix global shader parameter (`global uniform mat4 ...`). Exposed as a `Projection` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_MAT4: int;
/**
 * 2-dimensional transform global shader parameter (`global uniform mat2x3 ...`). Exposed as a `Transform2D` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_TRANSFORM_2D: int;
/**
 * 3-dimensional transform global shader parameter (`global uniform mat3x4 ...`). Exposed as a `Transform3D` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_TRANSFORM: int;
/**
 * 2D sampler global shader parameter (`global uniform sampler2D ...`). Exposed as a `Texture2D` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_SAMPLER2D: int;
/**
 * 2D sampler array global shader parameter (`global uniform sampler2DArray ...`). Exposed as a `Texture2DArray` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_SAMPLER2DARRAY: int;
/**
 * 3D sampler global shader parameter (`global uniform sampler3D ...`). Exposed as a `Texture3D` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_SAMPLER3D: int;
/**
 * Cubemap sampler global shader parameter (`global uniform samplerCube ...`). Exposed as a `Cubemap` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_SAMPLERCUBE: int;
/**
 * External sampler global shader parameter (`global uniform samplerExternalOES ...`). Exposed as a `ExternalTexture` in the editor UI.
 */
  static readonly GLOBAL_VAR_TYPE_SAMPLEREXT: int;
/**
 * Represents the size of the `GlobalShaderParameterType` enum.
 */
  static readonly GLOBAL_VAR_TYPE_MAX: int;
/**
 * Number of objects rendered in the current 3D scene. This varies depending on camera position and rotation.
 */
  static readonly RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME: int;
/**
 * Number of points, lines, or triangles rendered in the current 3D scene. This varies depending on camera position and rotation.
 */
  static readonly RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME: int;
/**
 * Number of draw calls performed to render in the current 3D scene. This varies depending on camera position and rotation.
 */
  static readonly RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME: int;
/**
 * Texture memory used (in bytes).
 */
  static readonly RENDERING_INFO_TEXTURE_MEM_USED: int;
/**
 * Buffer memory used (in bytes). This includes vertex data, uniform buffers, and many miscellaneous buffer types used internally.
 */
  static readonly RENDERING_INFO_BUFFER_MEM_USED: int;
/**
 * Video memory used (in bytes). When using the Forward+ or Mobile renderers, this is always greater than the sum of `RENDERING_INFO_TEXTURE_MEM_USED` and `RENDERING_INFO_BUFFER_MEM_USED`, since there is miscellaneous data not accounted for by those two metrics. When using the Compatibility renderer, this is equal to the sum of `RENDERING_INFO_TEXTURE_MEM_USED` and `RENDERING_INFO_BUFFER_MEM_USED`.
 */
  static readonly RENDERING_INFO_VIDEO_MEM_USED: int;
/**
 * Number of pipeline compilations that were triggered by the 2D canvas renderer.
 */
  static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_CANVAS: int;
/**
 * Number of pipeline compilations that were triggered by loading meshes. These compilations will show up as longer loading times the first time a user runs the game and the pipeline is required.
 */
  static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_MESH: int;
/**
 * Number of pipeline compilations that were triggered by building the surface cache before rendering the scene. These compilations will show up as a stutter when loading an scene the first time a user runs the game and the pipeline is required.
 */
  static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_SURFACE: int;
/**
 * Number of pipeline compilations that were triggered while drawing the scene. These compilations will show up as stutters during gameplay the first time a user runs the game and the pipeline is required.
 */
  static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_DRAW: int;
/**
 * Number of pipeline compilations that were triggered to optimize the current scene. These compilations are done in the background and should not cause any stutters whatsoever.
 */
  static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_SPECIALIZATION: int;
/**
 * Pipeline compilation that was triggered by the 2D canvas renderer.
 */
  static readonly PIPELINE_SOURCE_CANVAS: int;
/**
 * Pipeline compilation that was triggered by loading a mesh.
 */
  static readonly PIPELINE_SOURCE_MESH: int;
/**
 * Pipeline compilation that was triggered by building the surface cache before rendering the scene.
 */
  static readonly PIPELINE_SOURCE_SURFACE: int;
/**
 * Pipeline compilation that was triggered while drawing the scene.
 */
  static readonly PIPELINE_SOURCE_DRAW: int;
/**
 * Pipeline compilation that was triggered to optimize the current scene.
 */
  static readonly PIPELINE_SOURCE_SPECIALIZATION: int;
/**
 * Represents the size of the `PipelineSource` enum.
 */
  static readonly PIPELINE_SOURCE_MAX: int;
/**
 * @deprecated This constant has not been used since Godot 3.0.
 */
  static readonly FEATURE_SHADERS: int;
/**
 * @deprecated This constant has not been used since Godot 3.0.
 */
  static readonly FEATURE_MULTITHREADED: int;
}
