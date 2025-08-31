import type { GodotArray, GodotDictionary, Image, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * Provides a compressed texture for disk and/or VRAM in a way that is portable.
 * 
 * This class allows storing compressed textures as self contained (not imported) resources.
 * For 2D usage (compressed on disk, uncompressed on VRAM), the lossy and lossless modes are recommended. For 3D usage (compressed on VRAM) it depends on the target platform.
 * If you intend to only use desktop, S3TC or BPTC are recommended. For only mobile, ETC2 is recommended.
 * For portable, self contained 3D textures that work on both desktop and mobile, Basis Universal is recommended (although it has a small quality cost and longer compression time as a tradeoff).
 * This resource is intended to be created from code.
 */
export class PortableCompressedTexture2D extends Texture2D {
/**
 * When running on the editor, this class will keep the source compressed data in memory. Otherwise, the source compressed data is lost after loading and the resource can't be re saved.
 * This flag allows to keep the compressed data in memory if you intend it to persist after loading.
 */
  keepCompressedBuffer: boolean;
  resourceLocalToScene: boolean;
/**
 * Allow overriding the texture size (for 2D only).
 */
  sizeOverride: Vector2;
/**
 * Initializes the compressed texture from a base image. The compression mode must be provided.
 * `normal_map` is recommended to ensure optimum quality if this image will be used as a normal map.
 * If lossy compression is requested, the quality setting can optionally be provided. This maps to Lossy WebP compression quality.
 * @param image Image
 * @param compressionMode int
 * @param normalMap boolean (optional, default: false)
 * @param lossyQuality float (optional, default: 0.8)
 */
  createFromImage(image: Image, compressionMode: int, normalMap?: boolean, lossyQuality?: float): void;
/**
 * Return the compression mode used (valid after initialized).
 * @returns int
 */
  getCompressionMode(): int;
/**
 * Return the image format used (valid after initialized).
 * @returns int
 */
  getFormat(): int;
/**
 * Return whether the flag is overridden for all textures of this type.
 * @returns boolean
 */
  isKeepingAllCompressedBuffers(): boolean;
/**
 * Overrides the flag globally for all textures of this type. This is used primarily by the editor.
 * @param keep boolean
 */
  setKeepAllCompressedBuffers(keep: boolean): void;
  static readonly COMPRESSION_MODE_LOSSLESS: int;
  static readonly COMPRESSION_MODE_LOSSY: int;
  static readonly COMPRESSION_MODE_BASIS_UNIVERSAL: int;
  static readonly COMPRESSION_MODE_S3TC: int;
  static readonly COMPRESSION_MODE_ETC2: int;
  static readonly COMPRESSION_MODE_BPTC: int;
}
