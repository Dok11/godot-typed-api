import type { Color, GodotArray, GodotDictionary, Material, Texture3D, float, int } from "../index.d.ts";
/**
 * A material that controls how volumetric fog is rendered, to be assigned to a `FogVolume`.
 * 
 * A `Material` resource that can be used by `FogVolume`s to draw volumetric effects.
 * If you need more advanced effects, use a custom fog shader (https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/fog_shader.html).
 */
export class FogMaterial extends Material {
/**
 * The single-scattering `Color` of the `FogVolume`. Internally, `albedo` is converted into single-scattering, which is additively blended with other `FogVolume`s and the `Environment.volumetric_fog_albedo`.
 */
  albedo: Color;
/**
 * The density of the `FogVolume`. Denser objects are more opaque, but may suffer from under-sampling artifacts that look like stripes. Negative values can be used to subtract fog from other `FogVolume`s or global volumetric fog.
 * 
 * **Note:** Due to limited precision, `density` values between `-0.001` and `0.001` (exclusive) act like `0.0`. This does not apply to `Environment.volumetric_fog_density`.
 */
  density: float;
/**
 * The 3D texture that is used to scale the `density` of the `FogVolume`. This can be used to vary fog density within the `FogVolume` with any kind of static pattern. For animated effects, consider using a custom fog shader (https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/fog_shader.html).
 */
  densityTexture: Texture3D;
/**
 * The hardness of the edges of the `FogVolume`. A higher value will result in softer edges, while a lower value will result in harder edges.
 */
  edgeFade: float;
/**
 * The `Color` of the light emitted by the `FogVolume`. Emitted light will not cast light or shadows on other objects, but can be useful for modulating the `Color` of the `FogVolume` independently from light sources.
 */
  emission: Color;
/**
 * The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of `0.0` results in uniform-density fog. The height threshold is determined by the height of the associated `FogVolume`.
 */
  heightFalloff: float;
}
