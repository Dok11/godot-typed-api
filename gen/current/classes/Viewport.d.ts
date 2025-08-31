import type { AudioListener2D, AudioListener3D, Camera2D, Camera3D, Control, GodotArray, GodotDictionary, InputEvent, Node, RID, Rect2, Signal, Texture2D, Transform2D, Variant, Vector2, ViewportTexture, Window, World2D, World3D, float, int } from "../index.d.ts";
/**
 * Abstract base class for viewports. Encapsulates drawing and interaction with a game world.
 * 
 * A `Viewport` creates a different view into the screen, or a sub-view inside another viewport. Child 2D nodes will display on it, and child Camera3D 3D nodes will render on it too.
 * Optionally, a viewport can have its own 2D or 3D world, so it doesn't share what it draws with other viewports.
 * Viewports can also choose to be audio listeners, so they generate positional audio depending on a 2D or 3D camera child of it.
 * Also, viewports can be assigned to different screens in case the devices have multiple screens.
 * Finally, viewports can also behave as render targets, in which case they will not be visible unless the associated texture is used to draw.
 */
export class Viewport extends Node {
/**
 * Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.
 * The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See `ProjectSettings.rendering/textures/decals/filter` and `ProjectSettings.rendering/textures/light_projectors/filter`.
 * 
 * **Note:** In 3D, for this setting to have an effect, set `BaseMaterial3D.texture_filter` to `BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC` or `BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC` on materials.
 * 
 * **Note:** In 2D, for this setting to have an effect, set `CanvasItem.texture_filter` to `CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC` or `CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC` on the `CanvasItem` node displaying the texture (or in `CanvasTexture`). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.
 */
  anisotropicFilteringLevel: int;
/**
 * If `true`, the viewport will process 2D audio streams.
 */
  audioListenerEnable2d: boolean;
/**
 * If `true`, the viewport will process 3D audio streams.
 */
  audioListenerEnable3d: boolean;
/**
 * The rendering layers in which this `Viewport` renders `CanvasItem` nodes.
 */
  canvasCullMask: int;
/**
 * Sets the default filter mode used by `CanvasItem`s in this Viewport. See `DefaultCanvasItemTextureFilter` for options.
 */
  canvasItemDefaultTextureFilter: int;
/**
 * Sets the default repeat mode used by `CanvasItem`s in this Viewport. See `DefaultCanvasItemTextureRepeat` for options.
 */
  canvasItemDefaultTextureRepeat: int;
/**
 * The canvas transform of the viewport, useful for changing the on-screen positions of all child `CanvasItem`s. This is relative to the global canvas transform of the viewport.
 */
  canvasTransform: Transform2D;
/**
 * The overlay mode for test rendered geometry in debug purposes.
 */
  debugDraw: int;
/**
 * Disable 3D rendering (but keep 2D rendering).
 */
  disable3d: boolean;
/**
 * Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.
 * To control this property on the root viewport, set the `ProjectSettings.rendering/scaling_3d/fsr_sharpness` project setting.
 */
  fsrSharpness: float;
/**
 * The global canvas transform of the viewport. The canvas transform is relative to this.
 */
  globalCanvasTransform: Transform2D;
/**
 * If `true`, the viewport will not receive input events.
 */
  guiDisableInput: boolean;
/**
 * If `true`, sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If `false`, they will appear as separate windows handled by the operating system.
 */
  guiEmbedSubwindows: boolean;
/**
 * If `true`, the GUI controls on the viewport will lay pixel perfectly.
 */
  guiSnapControlsToPixels: boolean;
/**
 * If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.
 * A `SubViewportContainer` will automatically set this property to `false` for the `Viewport` contained inside of it.
 * See also `set_input_as_handled` and `is_input_handled`.
 */
  handleInputLocally: boolean;
/**
 * The automatic LOD bias to use for meshes rendered within the `Viewport` (this is analogous to `ReflectionProbe.mesh_lod_threshold`). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase `mesh_lod_threshold` to improve performance at the cost of geometry detail.
 * To control this property on the root viewport, set the `ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels` project setting.
 * 
 * **Note:** `mesh_lod_threshold` does not affect `GeometryInstance3D` visibility ranges (also known as "manual" LOD or hierarchical LOD).
 */
  meshLodThreshold: float;
/**
 * The multisample antialiasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of `Viewport.MSAA_2X` or `Viewport.MSAA_4X` is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing.
 * See also `ProjectSettings.rendering/anti_aliasing/quality/msaa_2d` and `RenderingServer.viewport_set_msaa_2d`.
 */
  msaa2d: int;
/**
 * The multisample antialiasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of `Viewport.MSAA_2X` or `Viewport.MSAA_4X` is best unless targeting very high-end systems. See also bilinear scaling 3D `scaling_3d_mode` for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.
 * See also `ProjectSettings.rendering/anti_aliasing/quality/msaa_3d` and `RenderingServer.viewport_set_msaa_3d`.
 */
  msaa3d: int;
/**
 * If `true`, the viewport will use a unique copy of the `World3D` defined in `world_3d`.
 */
  ownWorld3d: boolean;
  physicsInterpolationMode: int;
/**
 * If `true`, the objects rendered by viewport become subjects of mouse picking process.
 * 
 * **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.
 */
  physicsObjectPicking: boolean;
/**
 * If `true`, the input_event signal will only be sent to one physics object in the mouse picking process. If you want to get the top object only, you must also enable `physics_object_picking_sort`.
 * If `false`, an input_event signal will be sent to all physics objects in the mouse picking process.
 * This applies to 2D CanvasItem object picking only.
 */
  physicsObjectPickingFirstOnly: boolean;
/**
 * If `true`, objects receive mouse picking events sorted primarily by their `CanvasItem.z_index` and secondarily by their position in the scene tree. If `false`, the order is undetermined.
 * 
 * **Note:** This setting is disabled by default because of its potential expensive computational cost.
 * 
 * **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest `CanvasItem.z_index` receives the picking event.
 */
  physicsObjectPickingSort: boolean;
/**
 * Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.
 */
  positionalShadowAtlas16Bits: boolean;
/**
 * The subdivision amount of the first quadrant on the shadow atlas.
 */
  positionalShadowAtlasQuad0: int;
/**
 * The subdivision amount of the second quadrant on the shadow atlas.
 */
  positionalShadowAtlasQuad1: int;
/**
 * The subdivision amount of the third quadrant on the shadow atlas.
 */
  positionalShadowAtlasQuad2: int;
/**
 * The subdivision amount of the fourth quadrant on the shadow atlas.
 */
  positionalShadowAtlasQuad3: int;
/**
 * The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.
 * 
 * **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).
 */
  positionalShadowAtlasSize: int;
/**
 * Sets scaling 3D mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.
 * To control this property on the root viewport, set the `ProjectSettings.rendering/scaling_3d/mode` project setting.
 */
  scaling3dMode: int;
/**
 * Scales the 3D render buffer based on the viewport size uses an image filter specified in `ProjectSettings.rendering/scaling_3d/mode` to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also `ProjectSettings.rendering/anti_aliasing/quality/msaa_3d` for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.
 * When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.
 * To control this property on the root viewport, set the `ProjectSettings.rendering/scaling_3d/scale` project setting.
 */
  scaling3dScale: float;
/**
 * Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry.
 * See also `ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa` and `RenderingServer.viewport_set_screen_space_aa`.
 */
  screenSpaceAa: int;
/**
 * Controls how much of the original viewport's size should be covered by the 2D signed distance field. This SDF can be sampled in `CanvasItem` shaders and is also used for `GPUParticles2D` collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through `LightOccluder2D`s as the occluders leave the viewport, increase this setting.
 * The percentage is added on each axis and on both sides. For example, with the default `SDF_OVERSIZE_120_PERCENT`, the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).
 */
  sdfOversize: int;
/**
 * The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance.
 */
  sdfScale: int;
/**
 * If `true`, `CanvasItem` nodes will internally snap to full pixels. Their position can still be sub-pixel, but the decimals will not have effect. This can lead to a crisper appearance at the cost of less smooth movement, especially when `Camera2D` smoothing is enabled.
 */
  snap2dTransformsToPixel: boolean;
/**
 * If `true`, vertices of `CanvasItem` nodes will snap to full pixels. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when `Camera2D` smoothing is enabled.
 */
  snap2dVerticesToPixel: boolean;
/**
 * Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).
 * Enabling temporal antialiasing (`use_taa`) will automatically apply a `-0.5` offset to this value, while enabling FXAA (`screen_space_aa`) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.
 * 
 * **Note:** If `scaling_3d_scale` is lower than `1.0` (exclusive), `texture_mipmap_bias` is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.
 * To control this property on the root viewport, set the `ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias` project setting.
 */
  textureMipmapBias: float;
/**
 * If `true`, the viewport should render its background as transparent.
 */
  transparentBg: boolean;
/**
 * If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is *not* affected by debanding unless the `Environment.background_mode` is `Environment.BG_CANVAS`.
 * In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.
 * See also `ProjectSettings.rendering/anti_aliasing/quality/use_debanding` and `RenderingServer.viewport_set_use_debanding`.
 */
  useDebanding: boolean;
/**
 * If `true`, 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.
 * 
 * **Note:** This setting will have no effect when using the Compatibility renderer, which always renders in low dynamic range for performance reasons.
 */
  useHdr2d: boolean;
/**
 * If `true`, `OccluderInstance3D` nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, `ProjectSettings.rendering/occlusion_culling/use_occlusion_culling` must be set to `true` instead.
 * 
 * **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges (`GeometryInstance3D.visibility_range_begin` and `GeometryInstance3D.visibility_range_end`) compared to occlusion culling.
 * 
 * **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.
 */
  useOcclusionCulling: boolean;
/**
 * Enables temporal antialiasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.
 * 
 * **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.
 * See also `ProjectSettings.rendering/anti_aliasing/quality/use_taa` and `RenderingServer.viewport_set_use_taa`.
 */
  useTaa: boolean;
/**
 * If `true`, the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset.
 */
  useXr: boolean;
/**
 * The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored.
 */
  vrsMode: int;
/**
 * Texture to use when `vrs_mode` is set to `Viewport.VRS_TEXTURE`.
 * The texture *must* use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:
 * [codeblock lang=text]
 * - 1×1 = rgb(0, 0, 0)     - #000000
 * - 1×2 = rgb(0, 85, 0)    - #005500
 * - 2×1 = rgb(85, 0, 0)    - #550000
 * - 2×2 = rgb(85, 85, 0)   - #555500
 * - 2×4 = rgb(85, 170, 0)  - #55aa00
 * - 4×2 = rgb(170, 85, 0)  - #aa5500
 * - 4×4 = rgb(170, 170, 0) - #aaaa00
 * - 4×8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware
 * - 8×4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware
 * - 8×8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware
 * [/codeblock]
 */
  vrsTexture: Texture2D;
/**
 * Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored.
 */
  vrsUpdateMode: int;
/**
 * The custom `World2D` which can be used as 2D environment source.
 */
  world2d: World2D;
/**
 * The custom `World3D` which can be used as 3D environment source.
 */
  world3d: World3D;
/**
 * Returns the first valid `World2D` for this viewport, searching the `world_2d` property of itself and any Viewport ancestor.
 * @returns World2D
 */
  findWorld2d(): World2D;
/**
 * Returns the first valid `World3D` for this viewport, searching the `world_3d` property of itself and any Viewport ancestor.
 * @returns World3D
 */
  findWorld3d(): World3D;
/**
 * Returns the currently active 2D audio listener. Returns `null` if there are no active 2D audio listeners, in which case the active 2D camera will be treated as listener.
 * @returns AudioListener2D
 */
  getAudioListener2d(): AudioListener2D;
/**
 * Returns the currently active 3D audio listener. Returns `null` if there are no active 3D audio listeners, in which case the active 3D camera will be treated as listener.
 * @returns AudioListener3D
 */
  getAudioListener3d(): AudioListener3D;
/**
 * Returns the currently active 2D camera. Returns `null` if there are no active cameras.
 * @returns Camera2D
 */
  getCamera2d(): Camera2D;
/**
 * Returns the currently active 3D camera.
 * @returns Camera3D
 */
  getCamera3d(): Camera3D;
/**
 * Returns an individual bit on the rendering layer mask.
 * @param layer int
 * @returns boolean
 */
  getCanvasCullMaskBit(layer: int): boolean;
/**
 * Returns a list of the visible embedded `Window`s inside the viewport.
 * 
 * **Note:** `Window`s inside other viewports will not be listed.
 * @returns Window[]
 */
  getEmbeddedSubwindows(): Window[];
/**
 * Returns the transform from the viewport's coordinate system to the embedder's coordinate system.
 * @returns Transform2D
 */
  getFinalTransform(): Transform2D;
/**
 * Returns the mouse's position in this `Viewport` using the coordinate system of this `Viewport`.
 * @returns Vector2
 */
  getMousePosition(): Vector2;
/**
 * Returns the positional shadow atlas quadrant subdivision of the specified quadrant.
 * @param quadrant int
 * @returns int
 */
  getPositionalShadowAtlasQuadrantSubdiv(quadrant: int): int;
/**
 * Returns rendering statistics of the given type. See `RenderInfoType` and `RenderInfo` for options.
 * @param type_ int
 * @param info int
 * @returns int
 */
  getRenderInfo(type_: int, info: int): int;
/**
 * Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window.
 * @returns Transform2D
 */
  getScreenTransform(): Transform2D;
/**
 * Returns the automatically computed 2D stretch transform, taking the `Viewport`'s stretch settings into account. The final value is multiplied by `Window.content_scale_factor`, but only for the root viewport. If this method is called on a `SubViewport` (e.g., in a scene tree with `SubViewportContainer` and `SubViewport`), the scale factor of the root window will not be applied. Using `Transform2D.get_scale` on the returned value, this can be used to compensate for scaling when zooming a `Camera2D` node, or to scale down a `TextureRect` to be pixel-perfect regardless of the automatically computed scale factor.
 * 
 * **Note:** Due to how pixel scaling works, the returned transform's X and Y scale may differ slightly, even when `Window.content_scale_aspect` is set to a mode that preserves the pixels' aspect ratio. If `Window.content_scale_aspect` is `Window.CONTENT_SCALE_ASPECT_IGNORE`, the X and Y scale may differ *significantly*.
 * @returns Transform2D
 */
  getStretchTransform(): Transform2D;
/**
 * Returns the viewport's texture.
 * 
 * **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. `Node._ready`. To make sure the texture you get is correct, you can await `RenderingServer.frame_post_draw` signal.
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    await RenderingServer.frame_post_draw
 * 				    $Viewport.get_texture().get_image().save_png("user://Screenshot.png")
 * 				
 * 
 * ```
 * 
 * **Note:** When `use_hdr_2d` is `true` the returned texture will be an HDR image encoded in linear space.
 * @returns ViewportTexture
 */
  getTexture(): ViewportTexture;
/**
 * Returns the viewport's RID from the `RenderingServer`.
 * @returns RID
 */
  getViewportRid(): RID;
/**
 * Returns the visible rectangle in global screen coordinates.
 * @returns Rect2
 */
  getVisibleRect(): Rect2;
/**
 * Cancels the drag operation that was previously started through `Control._get_drag_data` or forced with `Control.force_drag`.
 */
  guiCancelDrag(): void;
/**
 * Returns the drag data from the GUI, that was previously returned by `Control._get_drag_data`.
 * @returns Variant
 */
  guiGetDragData(): Variant;
/**
 * Returns the currently focused `Control` within this viewport. If no `Control` is focused, returns `null`.
 * @returns Control
 */
  guiGetFocusOwner(): Control;
/**
 * Returns the `Control` that the mouse is currently hovering over in this viewport. If no `Control` has the cursor, returns `null`.
 * Typically the leaf `Control` node or deepest level of the subtree which claims hover. This is very useful when used together with `Node.is_ancestor_of` to find if the mouse is within a control tree.
 * @returns Control
 */
  guiGetHoveredControl(): Control;
/**
 * Returns `true` if a drag operation is currently ongoing and where the drop action could happen in this viewport.
 * Alternative to `Node.NOTIFICATION_DRAG_BEGIN` and `Node.NOTIFICATION_DRAG_END` when you prefer polling the value.
 * @returns boolean
 */
  guiIsDragging(): boolean;
/**
 * Returns `true` if the drag operation is successful.
 * @returns boolean
 */
  guiIsDragSuccessful(): boolean;
/**
 * Removes the focus from the currently focused `Control` within this viewport. If no `Control` has the focus, does nothing.
 */
  guiReleaseFocus(): void;
/**
 * Returns whether the current `InputEvent` has been handled. Input events are not handled until `set_input_as_handled` has been called during the lifetime of an `InputEvent`.
 * This is usually done as part of input handling methods like `Node._input`, `Control._gui_input` or others, as well as in corresponding signal handlers.
 * If `handle_input_locally` is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for `is_input_handled` instead.
 * @returns boolean
 */
  isInputHandled(): boolean;
/**
 * Inform the Viewport that the mouse has entered its area. Use this function before sending an `InputEventMouseButton` or `InputEventMouseMotion` to the `Viewport` with `Viewport.push_input`. See also `notify_mouse_exited`.
 * 
 * **Note:** In most cases, it is not necessary to call this function because `SubViewport` nodes that are children of `SubViewportContainer` are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in `TextureRect` or with an `Area3D` that forwards input events.
 */
  notifyMouseEntered(): void;
/**
 * Inform the Viewport that the mouse has left its area. Use this function when the node that displays the viewport notices the mouse has left the area of the displayed viewport. See also `notify_mouse_entered`.
 * 
 * **Note:** In most cases, it is not necessary to call this function because `SubViewport` nodes that are children of `SubViewportContainer` are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in `TextureRect` or with an `Area3D` that forwards input events.
 */
  notifyMouseExited(): void;
/**
 * Triggers the given `event` in this `Viewport`. This can be used to pass an `InputEvent` between viewports, or to locally apply inputs that were sent over the network or saved to a file.
 * If `in_local_coords` is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If `in_local_coords` is `true`, the event's position is in viewport coordinates.
 * While this method serves a similar purpose as `Input.parse_input_event`, it does not remap the specified `event` based on project settings like `ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`.
 * Calling this method will propagate calls to child nodes for following methods in the given order:
 * - `Node._input`
 * - `Control._gui_input` for `Control` nodes
 * - `Node._shortcut_input`
 * - `Node._unhandled_key_input`
 * - `Node._unhandled_input`
 * If an earlier method marks the input as handled via `set_input_as_handled`, any later method in this list will not be called.
 * If none of the methods handle the event and `physics_object_picking` is `true`, the event is used for physics object picking.
 * @param event InputEvent
 * @param inLocalCoords boolean (optional, default: false)
 */
  pushInput(event: InputEvent, inLocalCoords?: boolean): void;
/**
 * Helper method which calls the `set_text()` method on the currently focused `Control`, provided that it is defined (e.g. if the focused Control is `Button` or `LineEdit`).
 * @param text string
 */
  pushTextInput(text: string): void;
/**
 * Triggers the given `event` in this `Viewport`. This can be used to pass an `InputEvent` between viewports, or to locally apply inputs that were sent over the network or saved to a file.
 * If `in_local_coords` is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If `in_local_coords` is `true`, the event's position is in viewport coordinates.
 * Calling this method will propagate calls to child nodes for following methods in the given order:
 * - `Node._shortcut_input`
 * - `Node._unhandled_key_input`
 * - `Node._unhandled_input`
 * If an earlier method marks the input as handled via `set_input_as_handled`, any later method in this list will not be called.
 * If none of the methods handle the event and `physics_object_picking` is `true`, the event is used for physics object picking.
 * 
 * **Note:** This method doesn't propagate input events to embedded `Window`s or `SubViewport`s.
 * @param event InputEvent
 * @param inLocalCoords boolean (optional, default: false)
 * @deprecated Use `push_input` instead.
 */
  pushUnhandledInput(event: InputEvent, inLocalCoords?: boolean): void;
/**
 * Set/clear individual bits on the rendering layer mask. This simplifies editing this `Viewport`'s layers.
 * @param layer int
 * @param enable boolean
 */
  setCanvasCullMaskBit(layer: int, enable: boolean): void;
/**
 * Stops the input from propagating further down the `SceneTree`.
 * 
 * **Note:** This does not affect the methods in `Input`, only the way events are propagated.
 */
  setInputAsHandled(): void;
/**
 * Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible.
 * @param quadrant int
 * @param subdiv int
 */
  setPositionalShadowAtlasQuadrantSubdiv(quadrant: int, subdiv: int): void;
/**
 * Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary `Control.mouse_entered`, `CollisionObject2D.mouse_entered`, `CollisionObject3D.mouse_entered` and `Window.mouse_entered` signals and their respective `mouse_exited` counterparts.
 */
  updateMouseCursorState(): void;
/**
 * Moves the mouse pointer to the specified position in this `Viewport` using the coordinate system of this `Viewport`.
 * 
 * **Note:** `warp_mouse` is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
 * @param position Vector2
 */
  warpMouse(position: Vector2): void;
/**
 * Emitted when a Control node grabs keyboard focus.
 * 
 * **Note:** A Control node losing focus doesn't cause this signal to be emitted.
 */
  guiFocusChanged: Signal<[node: Control]>;
/**
 * Emitted when the size of the viewport is changed, whether by resizing of window, or some other means.
 */
  sizeChanged: Signal<[]>;
/**
 * This quadrant will not be used.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED: int;
/**
 * This quadrant will only be used by one shadow map.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_1: int;
/**
 * This quadrant will be split in 4 and used by up to 4 shadow maps.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_4: int;
/**
 * This quadrant will be split 16 ways and used by up to 16 shadow maps.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_16: int;
/**
 * This quadrant will be split 64 ways and used by up to 64 shadow maps.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_64: int;
/**
 * This quadrant will be split 256 ways and used by up to 256 shadow maps. Unless the `positional_shadow_atlas_size` is very high, the shadows in this quadrant will be very low resolution.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_256: int;
/**
 * This quadrant will be split 1024 ways and used by up to 1024 shadow maps. Unless the `positional_shadow_atlas_size` is very high, the shadows in this quadrant will be very low resolution.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_1024: int;
/**
 * Represents the size of the `PositionalShadowAtlasQuadrantSubdiv` enum.
 */
  static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_MAX: int;
/**
 * Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using `scaling_3d_scale`. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling.
 */
  static readonly SCALING_3D_MODE_BILINEAR: int;
/**
 * Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using `scaling_3d_scale`. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.
 */
  static readonly SCALING_3D_MODE_FSR: int;
/**
 * Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using `Viewport.scaling_3d_scale`. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution.
 */
  static readonly SCALING_3D_MODE_FSR2: int;
/**
 * Use the MetalFX spatial upscaler (https://developer.apple.com/documentation/metalfx/mtlfxspatialscaler#overview) for the viewport's 3D buffer.
 * The amount of scaling can be set using `scaling_3d_scale`.
 * Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.
 * More information: MetalFX (https://developer.apple.com/documentation/metalfx).
 * 
 * **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.
 */
  static readonly SCALING_3D_MODE_METALFX_SPATIAL: int;
/**
 * Use the MetalFX temporal upscaler (https://developer.apple.com/documentation/metalfx/mtlfxtemporalscaler#overview) for the viewport's 3D buffer.
 * The amount of scaling can be set using `scaling_3d_scale`. To determine the minimum input scale, use the `RenderingDevice.limit_get` method with `RenderingDevice.LIMIT_METALFX_TEMPORAL_SCALER_MIN_SCALE`.
 * Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use MetalFX at native resolution as a TAA solution.
 * More information: MetalFX (https://developer.apple.com/documentation/metalfx).
 * 
 * **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.
 */
  static readonly SCALING_3D_MODE_METALFX_TEMPORAL: int;
/**
 * Represents the size of the `Scaling3DMode` enum.
 */
  static readonly SCALING_3D_MODE_MAX: int;
/**
 * Multisample antialiasing mode disabled. This is the default value, and is also the fastest setting.
 */
  static readonly MSAA_DISABLED: int;
/**
 * Use 2× Multisample Antialiasing. This has a moderate performance cost. It helps reduce aliasing noticeably, but 4× MSAA still looks substantially better.
 */
  static readonly MSAA_2X: int;
/**
 * Use 4× Multisample Antialiasing. This has a significant performance cost, and is generally a good compromise between performance and quality.
 */
  static readonly MSAA_4X: int;
/**
 * Use 8× Multisample Antialiasing. This has a very high performance cost. The difference between 4× and 8× MSAA may not always be visible in real gameplay conditions. Likely unsupported on low-end and older hardware.
 */
  static readonly MSAA_8X: int;
/**
 * Represents the size of the `MSAA` enum.
 */
  static readonly MSAA_MAX: int;
/**
 * Anisotropic filtering is disabled.
 */
  static readonly ANISOTROPY_DISABLED: int;
/**
 * Use 2× anisotropic filtering.
 */
  static readonly ANISOTROPY_2X: int;
/**
 * Use 4× anisotropic filtering. This is the default value.
 */
  static readonly ANISOTROPY_4X: int;
/**
 * Use 8× anisotropic filtering.
 */
  static readonly ANISOTROPY_8X: int;
/**
 * Use 16× anisotropic filtering.
 */
  static readonly ANISOTROPY_16X: int;
/**
 * Represents the size of the `AnisotropicFiltering` enum.
 */
  static readonly ANISOTROPY_MAX: int;
/**
 * Do not perform any antialiasing in the full screen post-process.
 */
  static readonly SCREEN_SPACE_AA_DISABLED: int;
/**
 * Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K.
 */
  static readonly SCREEN_SPACE_AA_FXAA: int;
/**
 * Represents the size of the `ScreenSpaceAA` enum.
 */
  static readonly SCREEN_SPACE_AA_MAX: int;
/**
 * Amount of objects in frame.
 */
  static readonly RENDER_INFO_OBJECTS_IN_FRAME: int;
/**
 * Amount of vertices in frame.
 */
  static readonly RENDER_INFO_PRIMITIVES_IN_FRAME: int;
/**
 * Amount of draw calls in frame.
 */
  static readonly RENDER_INFO_DRAW_CALLS_IN_FRAME: int;
/**
 * Represents the size of the `RenderInfo` enum.
 */
  static readonly RENDER_INFO_MAX: int;
/**
 * Visible render pass (excluding shadows).
 */
  static readonly RENDER_INFO_TYPE_VISIBLE: int;
/**
 * Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits.
 */
  static readonly RENDER_INFO_TYPE_SHADOW: int;
/**
 * Canvas item rendering. This includes all 2D rendering.
 */
  static readonly RENDER_INFO_TYPE_CANVAS: int;
/**
 * Represents the size of the `RenderInfoType` enum.
 */
  static readonly RENDER_INFO_TYPE_MAX: int;
/**
 * Objects are displayed normally.
 */
  static readonly DEBUG_DRAW_DISABLED: int;
/**
 * Objects are displayed without light information.
 */
  static readonly DEBUG_DRAW_UNSHADED: int;
/**
 * Objects are displayed without textures and only with lighting information.
 */
  static readonly DEBUG_DRAW_LIGHTING: int;
/**
 * Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others.
 */
  static readonly DEBUG_DRAW_OVERDRAW: int;
/**
 * Objects are displayed as wireframe models.
 * 
 * **Note:** `RenderingServer.set_debug_generate_wireframes` must be called before loading any meshes for wireframes to be visible when using the Compatibility renderer.
 */
  static readonly DEBUG_DRAW_WIREFRAME: int;
/**
 * Objects are displayed without lighting information and their textures replaced by normal mapping.
 */
  static readonly DEBUG_DRAW_NORMAL_BUFFER: int;
/**
 * Objects are displayed with only the albedo value from `VoxelGI`s.
 */
  static readonly DEBUG_DRAW_VOXEL_GI_ALBEDO: int;
/**
 * Objects are displayed with only the lighting value from `VoxelGI`s.
 */
  static readonly DEBUG_DRAW_VOXEL_GI_LIGHTING: int;
/**
 * Objects are displayed with only the emission color from `VoxelGI`s.
 */
  static readonly DEBUG_DRAW_VOXEL_GI_EMISSION: int;
/**
 * Draws the shadow atlas that stores shadows from `OmniLight3D`s and `SpotLight3D`s in the upper left quadrant of the `Viewport`.
 */
  static readonly DEBUG_DRAW_SHADOW_ATLAS: int;
/**
 * Draws the shadow atlas that stores shadows from `DirectionalLight3D`s in the upper left quadrant of the `Viewport`.
 */
  static readonly DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS: int;
/**
 * Draws the scene luminance buffer (if available) in the upper left quadrant of the `Viewport`.
 */
  static readonly DEBUG_DRAW_SCENE_LUMINANCE: int;
/**
 * Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have `Environment.ssao_enabled` set in your `WorldEnvironment`.
 */
  static readonly DEBUG_DRAW_SSAO: int;
/**
 * Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have `Environment.ssil_enabled` set in your `WorldEnvironment`.
 */
  static readonly DEBUG_DRAW_SSIL: int;
/**
 * Colors each PSSM split for the `DirectionalLight3D`s in the scene a different color so you can see where the splits are. In order, they will be colored red, green, blue, and yellow.
 */
  static readonly DEBUG_DRAW_PSSM_SPLITS: int;
/**
 * Draws the decal atlas used by `Decal`s and light projector textures in the upper left quadrant of the `Viewport`.
 */
  static readonly DEBUG_DRAW_DECAL_ATLAS: int;
/**
 * Draws the cascades used to render signed distance field global illumination (SDFGI).
 * Does nothing if the current environment's `Environment.sdfgi_enabled` is `false` or SDFGI is not supported on the platform.
 */
  static readonly DEBUG_DRAW_SDFGI: int;
/**
 * Draws the probes used for signed distance field global illumination (SDFGI).
 * Does nothing if the current environment's `Environment.sdfgi_enabled` is `false` or SDFGI is not supported on the platform.
 */
  static readonly DEBUG_DRAW_SDFGI_PROBES: int;
/**
 * Draws the buffer used for global illumination (GI).
 */
  static readonly DEBUG_DRAW_GI_BUFFER: int;
/**
 * Draws all of the objects at their highest polycount, without low level of detail (LOD).
 */
  static readonly DEBUG_DRAW_DISABLE_LOD: int;
/**
 * Draws the cluster used by `OmniLight3D` nodes to optimize light rendering.
 */
  static readonly DEBUG_DRAW_CLUSTER_OMNI_LIGHTS: int;
/**
 * Draws the cluster used by `SpotLight3D` nodes to optimize light rendering.
 */
  static readonly DEBUG_DRAW_CLUSTER_SPOT_LIGHTS: int;
/**
 * Draws the cluster used by `Decal` nodes to optimize decal rendering.
 */
  static readonly DEBUG_DRAW_CLUSTER_DECALS: int;
/**
 * Draws the cluster used by `ReflectionProbe` nodes to optimize decal rendering.
 */
  static readonly DEBUG_DRAW_CLUSTER_REFLECTION_PROBES: int;
/**
 * Draws the buffer used for occlusion culling.
 */
  static readonly DEBUG_DRAW_OCCLUDERS: int;
/**
 * Draws vector lines over the viewport to indicate the movement of pixels between frames.
 */
  static readonly DEBUG_DRAW_MOTION_VECTORS: int;
/**
 * Draws the internal resolution buffer of the scene before post-processing is applied.
 */
  static readonly DEBUG_DRAW_INTERNAL_BUFFER: int;
/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST: int;
/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR: int;
/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: int;
/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if `ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter` is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to `Camera2D` zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: int;
/**
 * Represents the size of the `DefaultCanvasItemTextureFilter` enum.
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX: int;
/**
 * Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture.
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED: int;
/**
 * Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED: int;
/**
 * Flip the texture when repeating so that the edge lines up instead of abruptly changing.
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR: int;
/**
 * Represents the size of the `DefaultCanvasItemTextureRepeat` enum.
 */
  static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX: int;
/**
 * The signed distance field only covers the viewport's own rectangle.
 */
  static readonly SDF_OVERSIZE_100_PERCENT: int;
/**
 * The signed distance field is expanded to cover 20% of the viewport's size around the borders.
 */
  static readonly SDF_OVERSIZE_120_PERCENT: int;
/**
 * The signed distance field is expanded to cover 50% of the viewport's size around the borders.
 */
  static readonly SDF_OVERSIZE_150_PERCENT: int;
/**
 * The signed distance field is expanded to cover 100% (double) of the viewport's size around the borders.
 */
  static readonly SDF_OVERSIZE_200_PERCENT: int;
/**
 * Represents the size of the `SDFOversize` enum.
 */
  static readonly SDF_OVERSIZE_MAX: int;
/**
 * The signed distance field is rendered at full resolution.
 */
  static readonly SDF_SCALE_100_PERCENT: int;
/**
 * The signed distance field is rendered at half the resolution of this viewport.
 */
  static readonly SDF_SCALE_50_PERCENT: int;
/**
 * The signed distance field is rendered at a quarter the resolution of this viewport.
 */
  static readonly SDF_SCALE_25_PERCENT: int;
/**
 * Represents the size of the `SDFScale` enum.
 */
  static readonly SDF_SCALE_MAX: int;
/**
 * Variable Rate Shading is disabled.
 */
  static readonly VRS_DISABLED: int;
/**
 * Variable Rate Shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view.
 */
  static readonly VRS_TEXTURE: int;
/**
 * Variable Rate Shading's texture is supplied by the primary `XRInterface`.
 */
  static readonly VRS_XR: int;
/**
 * Represents the size of the `VRSMode` enum.
 */
  static readonly VRS_MAX: int;
/**
 * The input texture for variable rate shading will not be processed.
 */
  static readonly VRS_UPDATE_DISABLED: int;
/**
 * The input texture for variable rate shading will be processed once.
 */
  static readonly VRS_UPDATE_ONCE: int;
/**
 * The input texture for variable rate shading will be processed each frame.
 */
  static readonly VRS_UPDATE_ALWAYS: int;
/**
 * Represents the size of the `VRSUpdateMode` enum.
 */
  static readonly VRS_UPDATE_MAX: int;
}
