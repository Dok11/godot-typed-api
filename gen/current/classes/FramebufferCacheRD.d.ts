import type { GodotArray, GodotDictionary, Object, RDFramebufferPass, RID, float, int } from "../index.d.ts";
/**
 * Framebuffer cache manager for Rendering Device based renderers.
 * 
 * Framebuffer cache manager for Rendering Device based renderers. Provides a way to create a framebuffer and reuse it in subsequent calls for as long as the used textures exists. Framebuffers will automatically be cleaned up when dependent objects are freed.
 */
export class FramebufferCacheRD extends Object {
/**
 * Creates, or obtains a cached, framebuffer. `textures` lists textures accessed. `passes` defines the subpasses and texture allocation, if left empty a single pass is created and textures are allocated depending on their usage flags. `views` defines the number of views used when rendering.
 * @param textures RID[]
 * @param passes RDFramebufferPass[]
 * @param views int
 * @returns RID
 */
  getCacheMultipass(textures: RID[], passes: RDFramebufferPass[], views: int): RID;
}
