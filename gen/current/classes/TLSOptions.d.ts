import type { CryptoKey, GodotArray, GodotDictionary, RefCounted, X509Certificate, float, int } from "../index.d.ts";
/**
 * TLS configuration for clients and servers.
 * 
 * TLSOptions abstracts the configuration options for the `StreamPeerTLS` and `PacketPeerDTLS` classes.
 * Objects of this class cannot be instantiated directly, and one of the static methods `client`, `client_unsafe`, or `server` should be used instead.
 * 
 * 		```gdscript
 * 
 * 		# Create a TLS client configuration which uses our custom trusted CA chain.
 * 		var client_trusted_cas = load("res://my_trusted_cas.crt")
 * 		var client_tls_options = TLSOptions.client(client_trusted_cas)
 * 
 * 		# Create a TLS server configuration.
 * 		var server_certs = load("res://my_server_cas.crt")
 * 		var server_key = load("res://my_server_key.key")
 * 		var server_tls_options = TLSOptions.server(server_key, server_certs)
 * 		
 * 
 * ```
 * 
 */
export class TLSOptions extends RefCounted {
/**
 * Creates a TLS client configuration which validates certificates and their common names (fully qualified domain names).
 * You can specify a custom `trusted_chain` of certification authorities (the default CA list will be used if `null`), and optionally provide a `common_name_override` if you expect the certificate to have a common name other than the server FQDN.
 * 
 * **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.
 * @param trustedChain X509Certificate (optional, default: null)
 * @param commonNameOverride string (optional, default: "")
 * @returns TLSOptions
 */
  client(trustedChain?: X509Certificate, commonNameOverride?: string): TLSOptions;
/**
 * Creates an **unsafe** TLS client configuration where certificate validation is optional. You can optionally provide a valid `trusted_chain`, but the common name of the certificates will never be checked. Using this configuration for purposes other than testing **is not recommended**.
 * 
 * **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.
 * @param trustedChain X509Certificate (optional, default: null)
 * @returns TLSOptions
 */
  clientUnsafe(trustedChain?: X509Certificate): TLSOptions;
/**
 * Returns the common name (domain name) override specified when creating with `TLSOptions.client`.
 * @returns string
 */
  getCommonNameOverride(): string;
/**
 * Returns the `X509Certificate` specified when creating with `TLSOptions.server`.
 * @returns X509Certificate
 */
  getOwnCertificate(): X509Certificate;
/**
 * Returns the `CryptoKey` specified when creating with `TLSOptions.server`.
 * @returns CryptoKey
 */
  getPrivateKey(): CryptoKey;
/**
 * Returns the CA `X509Certificate` chain specified when creating with `TLSOptions.client` or `TLSOptions.client_unsafe`.
 * @returns X509Certificate
 */
  getTrustedCaChain(): X509Certificate;
/**
 * Returns `true` if created with `TLSOptions.server`, `false` otherwise.
 * @returns boolean
 */
  isServer(): boolean;
/**
 * Returns `true` if created with `TLSOptions.client_unsafe`, `false` otherwise.
 * @returns boolean
 */
  isUnsafeClient(): boolean;
/**
 * Creates a TLS server configuration using the provided `key` and `certificate`.
 * 
 * **Note:** The `certificate` should include the full certificate chain up to the signing CA (certificates file can be concatenated using a general purpose text editor).
 * @param key CryptoKey
 * @param certificate X509Certificate
 * @returns TLSOptions
 */
  server(key: CryptoKey, certificate: X509Certificate): TLSOptions;
}
