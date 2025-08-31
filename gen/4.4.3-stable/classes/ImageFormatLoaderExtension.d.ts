import type { FileAccess, GodotArray, GodotDictionary, Image, ImageFormatLoader, PackedStringArray, float, int } from "../index.d.ts";
/**
 * Base class for creating `ImageFormatLoader` extensions (adding support for extra image formats).
 * 
 * The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending this class.
 * Be sure to respect the documented return types and values. You should create an instance of it, and call `add_format_loader` to register that loader during the initialization phase.
 */
export class ImageFormatLoaderExtension extends ImageFormatLoader {
/**
 * Add this format loader to the engine, allowing it to recognize the file extensions returned by `_get_recognized_extensions`.
 */
  addFormatLoader(): void;
/**
 * Returns the list of file extensions for this image format. Files with the given extensions will be treated as image file and loaded using this class.
 * @returns PackedStringArray
 */
  private getRecognizedExtensions(): PackedStringArray;
/**
 * Loads the content of `fileaccess` into the provided `image`.
 * @param image Image
 * @param fileaccess FileAccess
 * @param flags int
 * @param scale float
 * @returns int
 */
  private loadImage(image: Image, fileaccess: FileAccess, flags: int, scale: float): int;
/**
 * Remove this format loader from the engine.
 */
  removeFormatLoader(): void;
}
