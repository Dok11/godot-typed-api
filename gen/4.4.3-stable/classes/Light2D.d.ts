import type { Color, GodotArray, GodotDictionary, Node2D, float, int } from "../index.d.ts";
/**
 * Casts light in a 2D environment.
 * 
 * Casts light in a 2D environment. A light is defined as a color, an energy value, a mode (see constants), and various other parameters (range and shadows-related).
 */
export class Light2D extends Node2D {
/**
 * The Light2D's blend mode. See `BlendMode` constants for values.
 */
  blendMode: int;
/**
 * The Light2D's `Color`.
 */
  color: Color;
/**
 * If `true`, Light2D will only appear when editing the scene.
 */
  editorOnly: boolean;
/**
 * If `true`, Light2D will emit light.
 */
  enabled: boolean;
/**
 * The Light2D's energy value. The larger the value, the stronger the light.
 */
  energy: float;
/**
 * The layer mask. Only objects with a matching `CanvasItem.light_mask` will be affected by the Light2D. See also `shadow_item_cull_mask`, which affects which objects can cast shadows.
 * 
 * **Note:** `range_item_cull_mask` is ignored by `DirectionalLight2D`, which will always light a 2D node regardless of the 2D node's `CanvasItem.light_mask`.
 */
  rangeItemCullMask: int;
/**
 * Maximum layer value of objects that are affected by the Light2D.
 */
  rangeLayerMax: int;
/**
 * Minimum layer value of objects that are affected by the Light2D.
 */
  rangeLayerMin: int;
/**
 * Maximum `z` value of objects that are affected by the Light2D.
 */
  rangeZMax: int;
/**
 * Minimum `z` value of objects that are affected by the Light2D.
 */
  rangeZMin: int;
/**
 * `Color` of shadows cast by the Light2D.
 */
  shadowColor: Color;
/**
 * If `true`, the Light2D will cast shadows.
 */
  shadowEnabled: boolean;
/**
 * Shadow filter type. See `ShadowFilter` for possible values.
 */
  shadowFilter: int;
/**
 * Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. `shadow_filter_smooth` only has an effect if `shadow_filter` is `SHADOW_FILTER_PCF5` or `SHADOW_FILTER_PCF13`.
 */
  shadowFilterSmooth: float;
/**
 * The shadow mask. Used with `LightOccluder2D` to cast shadows. Only occluders with a matching `CanvasItem.light_mask` will cast shadows. See also `range_item_cull_mask`, which affects which objects can *receive* the light.
 */
  shadowItemCullMask: int;
/**
 * Returns the light's height, which is used in 2D normal mapping. See `PointLight2D.height` and `DirectionalLight2D.height`.
 * @returns float
 */
  getHeight(): float;
/**
 * Sets the light's height, which is used in 2D normal mapping. See `PointLight2D.height` and `DirectionalLight2D.height`.
 * @param height float
 */
  setHeight(height: float): void;
/**
 * No filter applies to the shadow map. This provides hard shadow edges and is the fastest to render. See `shadow_filter`.
 */
  static readonly SHADOW_FILTER_NONE: int;
/**
 * Percentage closer filtering (5 samples) applies to the shadow map. This is slower compared to hard shadow rendering. See `shadow_filter`.
 */
  static readonly SHADOW_FILTER_PCF5: int;
/**
 * Percentage closer filtering (13 samples) applies to the shadow map. This is the slowest shadow filtering mode, and should be used sparingly. See `shadow_filter`.
 */
  static readonly SHADOW_FILTER_PCF13: int;
/**
 * Adds the value of pixels corresponding to the Light2D to the values of pixels under it. This is the common behavior of a light.
 */
  static readonly BLEND_MODE_ADD: int;
/**
 * Subtracts the value of pixels corresponding to the Light2D to the values of pixels under it, resulting in inversed light effect.
 */
  static readonly BLEND_MODE_SUB: int;
/**
 * Mix the value of pixels corresponding to the Light2D to the values of pixels under it by linear interpolation.
 */
  static readonly BLEND_MODE_MIX: int;
}
