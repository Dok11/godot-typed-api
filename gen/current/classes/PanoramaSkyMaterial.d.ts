import type { GodotArray, GodotDictionary, Material, Texture2D, float, int } from "../index.d.ts";
/**
 * A material that provides a special texture to a `Sky`, usually an HDR panorama.
 * 
 * A resource referenced in a `Sky` that is used to draw a background. `PanoramaSkyMaterial` functions similar to skyboxes in other engines, except it uses an equirectangular sky map instead of a `Cubemap`.
 * Using an HDR panorama is strongly recommended for accurate, high-quality reflections. Godot supports the Radiance HDR (`.hdr`) and OpenEXR (`.exr`) image formats for this purpose.
 * You can use this tool (https://danilw.github.io/GLSL-howto/cubemap_to_panorama_js/cubemap_to_panorama.html) to convert a cubemap to an equirectangular sky map.
 */
export class PanoramaSkyMaterial extends Material {
/**
 * The sky's overall brightness multiplier. Higher values result in a brighter sky.
 */
  energyMultiplier: float;
/**
 * A boolean value to determine if the background texture should be filtered or not.
 */
  filter: boolean;
/**
 * `Texture2D` to be applied to the `PanoramaSkyMaterial`.
 */
  panorama: Texture2D;
}
