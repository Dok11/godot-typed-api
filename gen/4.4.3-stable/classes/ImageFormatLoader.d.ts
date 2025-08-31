import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Base class to add support for specific image formats.
 * 
 * The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending `ImageFormatLoaderExtension`.
 */
export class ImageFormatLoader extends RefCounted {
  static readonly FLAG_NONE: int;
  static readonly FLAG_FORCE_LINEAR: int;
  static readonly FLAG_CONVERT_COLORS: int;
}
