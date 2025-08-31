import type { GodotArray, GodotDictionary, Object, PackedVector2Array, RID, Rect2i, Vector2, float, int } from "../index.d.ts";
/**
 * Helper class for XR interfaces that generates VRS images.
 * 
 * This class is used by various XR interfaces to generate VRS textures that can be used to speed up rendering.
 */
export class XRVRS extends Object {
/**
 * The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.
 */
  vrsMinRadius: float;
/**
 * The render region that the VRS texture will be scaled to when generated.
 */
  vrsRenderRegion: Rect2i;
/**
 * The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is.
 */
  vrsStrength: float;
/**
 * Generates the VRS texture based on a render `target_size` adjusted by our VRS tile size. For each eyes focal point passed in `eye_foci` a layer is created. Focal point should be in NDC.
 * The result will be cached, requesting a VRS texture with unchanged parameters and settings will return the cached RID.
 * @param targetSize Vector2
 * @param eyeFoci PackedVector2Array
 * @returns RID
 */
  makeVrsTexture(targetSize: Vector2, eyeFoci: PackedVector2Array): RID;
}
