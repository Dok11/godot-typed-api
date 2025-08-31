import type { GodotArray, GodotDictionary, Light2D, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * Positional 2D light source.
 * 
 * Casts light in a 2D environment. This light's shape is defined by a (usually grayscale) texture.
 */
export class PointLight2D extends Light2D {
/**
 * The height of the light. Used with 2D normal mapping. The units are in pixels, e.g. if the height is 100, then it will illuminate an object 100 pixels away at a 45° angle to the plane.
 */
  height: float;
/**
 * The offset of the light's `texture`.
 */
  offset: Vector2;
/**
 * `Texture2D` used for the light's appearance.
 */
  texture: Texture2D;
/**
 * The `texture`'s scale factor.
 */
  textureScale: float;
}
