import type { GodotArray, GodotDictionary, Object, RDUniform, RID, float, int } from "../index.d.ts";
/**
 * Uniform set cache manager for Rendering Device based renderers.
 * 
 * Uniform set cache manager for Rendering Device based renderers. Provides a way to create a uniform set and reuse it in subsequent calls for as long as the uniform set exists. Uniform set will automatically be cleaned up when dependent objects are freed.
 */
export class UniformSetCacheRD extends Object {
/**
 * Creates/returns a cached uniform set based on the provided uniforms for a given shader.
 * @param shader RID
 * @param set_ int
 * @param uniforms RDUniform[]
 * @returns RID
 */
  getCache(shader: RID, set_: int, uniforms: RDUniform[]): RID;
}
