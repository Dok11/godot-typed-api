import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Abstract class extended by lightmappers, for use in `LightmapGI`.
 * 
 * This class should be extended by custom lightmapper classes. Lightmappers can then be used with `LightmapGI` to provide fast baked global illumination in 3D.
 * Godot contains a built-in GPU-based lightmapper `LightmapperRD` that uses compute shaders, but custom lightmappers can be implemented by C++ modules.
 */
export class Lightmapper extends RefCounted {
}
