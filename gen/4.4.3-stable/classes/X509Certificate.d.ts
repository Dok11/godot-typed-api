import type { GodotArray, GodotDictionary, Resource, float, int } from "../index.d.ts";
/**
 * An X509 certificate (e.g. for TLS).
 * 
 * The X509Certificate class represents an X509 certificate. Certificates can be loaded and saved like any other `Resource`.
 * They can be used as the server certificate in `StreamPeerTLS.accept_stream` (along with the proper `CryptoKey`), and to specify the only certificate that should be accepted when connecting to a TLS server via `StreamPeerTLS.connect_to_stream`.
 */
export class X509Certificate extends Resource {
/**
 * Loads a certificate from `path` ("*.crt" file).
 * @param path string
 * @returns int
 */
  load(path: string): int;
/**
 * Loads a certificate from the given `string`.
 * @param string_ string
 * @returns int
 */
  loadFromString(string_: string): int;
/**
 * Saves a certificate to the given `path` (should be a "*.crt" file).
 * @param path string
 * @returns int
 */
  save(path: string): int;
/**
 * Returns a string representation of the certificate, or an empty string if the certificate is invalid.
 * @returns string
 */
  saveToString(): string;
}
