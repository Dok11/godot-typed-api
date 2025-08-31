import type { GodotArray, GodotDictionary, Object, PackedByteArray, Variant, float, int } from "../index.d.ts";
/**
 * Data transformation (marshaling) and encoding helpers.
 * 
 * Provides data transformation and encoding utility functions.
 */
export class Marshalls extends Object {
/**
 * Returns a decoded `PackedByteArray` corresponding to the Base64-encoded string `base64_str`.
 * @param base64Str string
 * @returns PackedByteArray
 */
  base64ToRaw(base64Str: string): PackedByteArray;
/**
 * Returns a decoded string corresponding to the Base64-encoded string `base64_str`.
 * @param base64Str string
 * @returns string
 */
  base64ToUtf8(base64Str: string): string;
/**
 * Returns a decoded `Variant` corresponding to the Base64-encoded string `base64_str`. If `allow_objects` is `true`, decoding objects is allowed.
 * Internally, this uses the same decoding mechanism as the `@GlobalScope.bytes_to_var` method.
 * 
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 * @param base64Str string
 * @param allowObjects boolean (optional, default: false)
 * @returns Variant
 */
  base64ToVariant(base64Str: string, allowObjects?: boolean): Variant;
/**
 * Returns a Base64-encoded string of a given `PackedByteArray`.
 * @param array PackedByteArray
 * @returns string
 */
  rawToBase64(array: PackedByteArray): string;
/**
 * Returns a Base64-encoded string of the UTF-8 string `utf8_str`.
 * @param utf8Str string
 * @returns string
 */
  utf8ToBase64(utf8Str: string): string;
/**
 * Returns a Base64-encoded string of the `Variant` `variant`. If `full_objects` is `true`, encoding objects is allowed (and can potentially include code).
 * Internally, this uses the same encoding mechanism as the `@GlobalScope.var_to_bytes` method.
 * @param variant Variant
 * @param fullObjects boolean (optional, default: false)
 * @returns string
 */
  variantToBase64(variant: Variant, fullObjects?: boolean): string;
}
