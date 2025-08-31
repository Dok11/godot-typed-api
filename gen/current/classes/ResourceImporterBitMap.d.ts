import type { GodotArray, GodotDictionary, ResourceImporter, float, int } from "../index.d.ts";
/**
 * Imports a `BitMap` resource (2D array of boolean values).
 * 
 * `BitMap` resources are typically used as click masks in `TextureButton` and `TouchScreenButton`.
 */
export class ResourceImporterBitMap extends ResourceImporter {
/**
 * The data source to use for generating the bitmap.
 * 
 * **Black & White:** Pixels whose HSV value is greater than the `threshold` will be considered as "enabled" (bit is `true`). If the pixel is lower than or equal to the threshold, it will be considered as "disabled" (bit is `false`).
 * 
 * **Alpha:** Pixels whose alpha value is greater than the `threshold` will be considered as "enabled" (bit is `true`). If the pixel is lower than or equal to the threshold, it will be considered as "disabled" (bit is `false`).
 */
  createFrom: int;
/**
 * The threshold to use to determine which bits should be considered enabled or disabled. See also `create_from`.
 */
  threshold: float;
}
