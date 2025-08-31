import type { GodotArray, GodotDictionary, Lightmapper, float, int } from "../index.d.ts";
/**
 * The built-in GPU-based lightmapper for use with `LightmapGI`.
 * 
 * LightmapperRD ("RD" stands for `RenderingDevice`) is the built-in GPU-based lightmapper for use with `LightmapGI`. On most dedicated GPUs, it can bake lightmaps much faster than most CPU-based lightmappers. LightmapperRD uses compute shaders to bake lightmaps, so it does not require CUDA or OpenCL libraries to be installed to be usable.
 * 
 * **Note:** Only usable when using the RenderingDevice backend (Forward+ or Mobile renderers), not Compatibility.
 */
export class LightmapperRD extends Lightmapper {
}
