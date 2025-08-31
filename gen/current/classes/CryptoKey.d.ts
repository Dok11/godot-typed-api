import type { GodotArray, GodotDictionary, Resource, float, int } from "../index.d.ts";
/**
 * A cryptographic key (RSA or elliptic-curve).
 * 
 * The CryptoKey class represents a cryptographic key. Keys can be loaded and saved like any other `Resource`.
 * They can be used to generate a self-signed `X509Certificate` via `Crypto.generate_self_signed_certificate` and as private key in `StreamPeerTLS.accept_stream` along with the appropriate certificate.
 */
export class CryptoKey extends Resource {
/**
 * Returns `true` if this CryptoKey only has the public part, and not the private one.
 * @returns boolean
 */
  isPublicOnly(): boolean;
/**
 * Loads a key from `path`. If `public_only` is `true`, only the public key will be loaded.
 * 
 * **Note:** `path` should be a "*.pub" file if `public_only` is `true`, a "*.key" file otherwise.
 * @param path string
 * @param publicOnly boolean (optional, default: false)
 * @returns int
 */
  load(path: string, publicOnly?: boolean): int;
/**
 * Loads a key from the given `string_key`. If `public_only` is `true`, only the public key will be loaded.
 * @param stringKey string
 * @param publicOnly boolean (optional, default: false)
 * @returns int
 */
  loadFromString(stringKey: string, publicOnly?: boolean): int;
/**
 * Saves a key to the given `path`. If `public_only` is `true`, only the public key will be saved.
 * 
 * **Note:** `path` should be a "*.pub" file if `public_only` is `true`, a "*.key" file otherwise.
 * @param path string
 * @param publicOnly boolean (optional, default: false)
 * @returns int
 */
  save(path: string, publicOnly?: boolean): int;
/**
 * Returns a string containing the key in PEM format. If `public_only` is `true`, only the public key will be included.
 * @param publicOnly boolean (optional, default: false)
 * @returns string
 */
  saveToString(publicOnly?: boolean): string;
}
