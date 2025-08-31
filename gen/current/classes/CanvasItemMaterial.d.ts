import type { GodotArray, GodotDictionary, Material, float, int } from "../index.d.ts";
/**
 * A material for `CanvasItem`s.
 * 
 * `CanvasItemMaterial`s provide a means of modifying the textures associated with a CanvasItem. They specialize in describing blend and lighting behaviors for textures. Use a `ShaderMaterial` to more fully customize a material's interactions with a `CanvasItem`.
 */
export class CanvasItemMaterial extends Material {
/**
 * The manner in which a material's rendering is applied to underlying textures.
 */
  blendMode: int;
/**
 * The manner in which material reacts to lighting.
 */
  lightMode: int;
/**
 * If `true`, enable spritesheet-based animation features when assigned to `GPUParticles2D` and `CPUParticles2D` nodes. The `ParticleProcessMaterial.anim_speed_max` or `CPUParticles2D.anim_speed_max` should also be set to a positive value for the animation to play.
 * This property (and other `particles_anim_*` properties that depend on it) has no effect on other types of nodes.
 */
  particlesAnimation: boolean;
/**
 * The number of columns in the spritesheet assigned as `Texture2D` for a `GPUParticles2D` or `CPUParticles2D`.
 * 
 * **Note:** This property is only used and visible in the editor if `particles_animation` is `true`.
 */
  particlesAnimHFrames: int;
/**
 * If `true`, the particles animation will loop.
 * 
 * **Note:** This property is only used and visible in the editor if `particles_animation` is `true`.
 */
  particlesAnimLoop: boolean;
/**
 * The number of rows in the spritesheet assigned as `Texture2D` for a `GPUParticles2D` or `CPUParticles2D`.
 * 
 * **Note:** This property is only used and visible in the editor if `particles_animation` is `true`.
 */
  particlesAnimVFrames: int;
/**
 * Mix blending mode. Colors are assumed to be independent of the alpha (opacity) value.
 */
  static readonly BLEND_MODE_MIX: int;
/**
 * Additive blending mode.
 */
  static readonly BLEND_MODE_ADD: int;
/**
 * Subtractive blending mode.
 */
  static readonly BLEND_MODE_SUB: int;
/**
 * Multiplicative blending mode.
 */
  static readonly BLEND_MODE_MUL: int;
/**
 * Mix blending mode. Colors are assumed to be premultiplied by the alpha (opacity) value.
 */
  static readonly BLEND_MODE_PREMULT_ALPHA: int;
/**
 * Render the material using both light and non-light sensitive material properties.
 */
  static readonly LIGHT_MODE_NORMAL: int;
/**
 * Render the material as if there were no light.
 */
  static readonly LIGHT_MODE_UNSHADED: int;
/**
 * Render the material as if there were only light.
 */
  static readonly LIGHT_MODE_LIGHT_ONLY: int;
}
