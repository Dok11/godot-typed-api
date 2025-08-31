import type { Color, GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * Texture with optional normal and specular maps for use in 2D rendering.
 * 
 * `CanvasTexture` is an alternative to `ImageTexture` for 2D rendering. It allows using normal maps and specular maps in any node that inherits from `CanvasItem`. `CanvasTexture` also allows overriding the texture's filter and repeat mode independently of the node's properties (or the project settings).
 * 
 * **Note:** `CanvasTexture` cannot be used in 3D. It will not display correctly when applied to any `VisualInstance3D`, such as `Sprite3D` or `Decal`. For physically-based materials in 3D, use `BaseMaterial3D` instead.
 */
export class CanvasTexture extends Texture2D {
/**
 * The diffuse (color) texture to use. This is the main texture you want to set in most cases.
 */
  diffuseTexture: Texture2D;
/**
 * The normal map texture to use. Only has a visible effect if `Light2D`s are affecting this `CanvasTexture`.
 * 
 * **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See this page (http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates) for a comparison of normal map coordinates expected by popular engines.
 */
  normalTexture: Texture2D;
  resourceLocalToScene: boolean;
/**
 * The multiplier for specular reflection colors. The `Light2D`'s color is also taken into account when determining the reflection color. Only has a visible effect if `Light2D`s are affecting this `CanvasTexture`.
 */
  specularColor: Color;
/**
 * The specular exponent for `Light2D` specular reflections. Higher values result in a more glossy/"wet" look, with reflections becoming more localized and less visible overall. The default value of `1.0` disables specular reflections entirely. Only has a visible effect if `Light2D`s are affecting this `CanvasTexture`.
 */
  specularShininess: float;
/**
 * The specular map to use for `Light2D` specular reflections. This should be a grayscale or colored texture, with brighter areas resulting in a higher `specular_shininess` value. Using a colored `specular_texture` allows controlling specular shininess on a per-channel basis. Only has a visible effect if `Light2D`s are affecting this `CanvasTexture`.
 */
  specularTexture: Texture2D;
/**
 * The texture filtering mode to use when drawing this `CanvasTexture`.
 */
  textureFilter: int;
/**
 * The texture repeat mode to use when drawing this `CanvasTexture`.
 */
  textureRepeat: int;
}
