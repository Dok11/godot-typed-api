import type { GodotArray, GodotDictionary, RefCounted, RenderSceneBuffersConfiguration, float, int } from "../index.d.ts";
/**
 * Abstract scene buffers object, created for each viewport for which 3D rendering is done.
 * 
 * Abstract scene buffers object, created for each viewport for which 3D rendering is done. It manages any additional buffers used during rendering and will discard buffers when the viewport is resized.
 * 
 * **Note:** This is an internal rendering server object, do not instantiate this from script.
 */
export class RenderSceneBuffers extends RefCounted {
/**
 * This method is called by the rendering server when the associated viewports configuration is changed. It will discard the old buffers and recreate the internal buffers used.
 * @param config RenderSceneBuffersConfiguration
 */
  configure(config: RenderSceneBuffersConfiguration): void;
}
