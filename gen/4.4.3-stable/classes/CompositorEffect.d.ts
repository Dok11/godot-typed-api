import type { GodotArray, GodotDictionary, RenderData, Resource, float, int } from "../index.d.ts";
/**
 * This resource allows for creating a custom rendering effect.
 * 
 * This resource defines a custom rendering effect that can be applied to `Viewport`s through the viewports' `Environment`. You can implement a callback that is called during rendering at a given stage of the rendering pipeline and allows you to insert additional passes. Note that this callback happens on the rendering thread. CompositorEffect is an abstract base class and must be extended to implement specific rendering logic.
 */
export class CompositorEffect extends Resource {
/**
 * If `true` and MSAA is enabled, this will trigger a color buffer resolve before the effect is run.
 * 
 * **Note:** In `_render_callback`, to access the resolved buffer use:
 * 
 * 			```gdscript
 * 
 * 			var render_scene_buffers = render_data.get_render_scene_buffers()
 * 			var color_buffer = render_scene_buffers.get_texture("render_buffers", "color")
 * 			
 * 
 * ```
 */
  accessResolvedColor: boolean;
/**
 * If `true` and MSAA is enabled, this will trigger a depth buffer resolve before the effect is run.
 * 
 * **Note:** In `_render_callback`, to access the resolved buffer use:
 * 
 * 			```gdscript
 * 
 * 			var render_scene_buffers = render_data.get_render_scene_buffers()
 * 			var depth_buffer = render_scene_buffers.get_texture("render_buffers", "depth")
 * 			
 * 
 * ```
 */
  accessResolvedDepth: boolean;
/**
 * The type of effect that is implemented, determines at what stage of rendering the callback is called.
 */
  effectCallbackType: int;
/**
 * If `true` this rendering effect is applied to any viewport it is added to.
 */
  enabled: boolean;
/**
 * If `true` this triggers motion vectors being calculated during the opaque render state.
 * 
 * **Note:** In `_render_callback`, to access the motion vector buffer use:
 * 
 * 			```gdscript
 * 
 * 			var render_scene_buffers = render_data.get_render_scene_buffers()
 * 			var motion_buffer = render_scene_buffers.get_velocity_texture()
 * 			
 * 
 * ```
 */
  needsMotionVectors: boolean;
/**
 * If `true` this triggers normal and roughness data to be output during our depth pre-pass, only applicable for the Forward+ renderer.
 * 
 * **Note:** In `_render_callback`, to access the roughness buffer use:
 * 
 * 			```gdscript
 * 
 * 			var render_scene_buffers = render_data.get_render_scene_buffers()
 * 			var roughness_buffer = render_scene_buffers.get_texture("forward_clustered", "normal_roughness")
 * 			
 * 
 * ```
 * The raw normal and roughness buffer is stored in an optimized format, different than the one available in Spatial shaders. When sampling the buffer, a conversion function must be applied. Use this function, copied from here (https://github.com/godotengine/godot/blob/da5f39889f155658cef7f7ec3cc1abb94e17d815/servers/rendering/renderer_rd/shaders/forward_clustered/scene_forward_clustered_inc.glsl#L334-L341):
 * 
 * 			```gdscript
 * 
 * 			vec4 normal_roughness_compatibility(vec4 p_normal_roughness) {
 * 			    float roughness = p_normal_roughness.w;
 * 			    if (roughness > 0.5) {
 * 			        roughness = 1.0 - roughness;
 * 			    }
 * 			    roughness /= (127.0 / 255.0);
 * 			    return vec4(normalize(p_normal_roughness.xyz * 2.0 - 1.0) * 0.5 + 0.5, roughness);
 * 			}
 * 			
 * 
 * ```
 */
  needsNormalRoughness: boolean;
/**
 * If `true` this triggers specular data being rendered to a separate buffer and combined after effects have been applied, only applicable for the Forward+ renderer.
 */
  needsSeparateSpecular: boolean;
/**
 * Implement this function with your custom rendering code. `effect_callback_type` should always match the effect callback type you've specified in `effect_callback_type`. `render_data` provides access to the rendering state, it is only valid during rendering and should not be stored.
 * @param effectCallbackType int
 * @param renderData RenderData
 */
  private renderCallback(effectCallbackType: int, renderData: RenderData): void;
/**
 * The callback is called before our opaque rendering pass, but after depth prepass (if applicable).
 */
  static readonly EFFECT_CALLBACK_TYPE_PRE_OPAQUE: int;
/**
 * The callback is called after our opaque rendering pass, but before our sky is rendered.
 */
  static readonly EFFECT_CALLBACK_TYPE_POST_OPAQUE: int;
/**
 * The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections).
 */
  static readonly EFFECT_CALLBACK_TYPE_POST_SKY: int;
/**
 * The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers.
 */
  static readonly EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT: int;
/**
 * The callback is called after our transparent rendering pass, but before any built-in post-processing effects and output to our render target.
 */
  static readonly EFFECT_CALLBACK_TYPE_POST_TRANSPARENT: int;
/**
 * Represents the size of the `EffectCallbackType` enum.
 */
  static readonly EFFECT_CALLBACK_TYPE_MAX: int;
}
