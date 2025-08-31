import type { GodotArray, GodotDictionary, ImageTextureLayered, Resource, float, int } from "../index.d.ts";
/**
 * An array of `Cubemap`s, stored together and with a single reference.
 * 
 * `CubemapArray`s are made of an array of `Cubemap`s. Like `Cubemap`s, they are made of multiple textures, the amount of which must be divisible by 6 (one for each face of the cube).
 * The primary benefit of `CubemapArray`s is that they can be accessed in shader code using a single texture reference. In other words, you can pass multiple `Cubemap`s into a shader using a single `CubemapArray`. `Cubemap`s are allocated in adjacent cache regions on the GPU, which makes `CubemapArray`s the most efficient way to store multiple `Cubemap`s.
 * Godot uses `CubemapArray`s internally for many effects, including the `Sky` if you set `ProjectSettings.rendering/reflections/sky_reflections/texture_array_reflections` to `true`.
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets. To create a CubemapArray from code, use `ImageTextureLayered.create_from_images` on an instance of the CubemapArray class.
 * The expected image order is X+, X-, Y+, Y-, Z+, Z- (in Godot's coordinate system, so Y+ is "up" and Z- is "forward"). You can use one of the following templates as a base:
 * - 2×3 cubemap template (default layout option) (https://raw.githubusercontent.com/godotengine/godot-docs/master/tutorials/assets_pipeline/img/cubemap_template_2x3.webp)
 * - 3×2 cubemap template (https://raw.githubusercontent.com/godotengine/godot-docs/master/tutorials/assets_pipeline/img/cubemap_template_3x2.webp)
 * - 1×6 cubemap template (https://raw.githubusercontent.com/godotengine/godot-docs/master/tutorials/assets_pipeline/img/cubemap_template_1x6.webp)
 * - 6×1 cubemap template (https://raw.githubusercontent.com/godotengine/godot-docs/master/tutorials/assets_pipeline/img/cubemap_template_6x1.webp)
 * Multiple layers are stacked on top of each other when using the default vertical import option (with the first layer at the top). Alternatively, you can choose an horizontal layout in the import options (with the first layer at the left).
 * 
 * **Note:** `CubemapArray` is not supported in the Compatibility renderer due to graphics API limitations.
 */
export class CubemapArray extends ImageTextureLayered {
/**
 * Creates a placeholder version of this resource (`PlaceholderCubemapArray`).
 * @returns Resource
 */
  createPlaceholder(): Resource;
}
