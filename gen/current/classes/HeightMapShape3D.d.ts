import type { GodotArray, GodotDictionary, Image, PackedFloat32Array, Shape3D, float, int } from "../index.d.ts";
/**
 * A 3D height map shape used for physics collision.
 * 
 * A 3D heightmap shape, intended for use in physics. Usually used to provide a shape for a `CollisionShape3D`. This is useful for terrain, but it is limited as overhangs (such as caves) cannot be stored. Holes in a `HeightMapShape3D` are created by assigning very low values to points in the desired area.
 * 
 * **Performance:** `HeightMapShape3D` is faster to check collisions against than `ConcavePolygonShape3D`, but it is significantly slower than primitive shapes like `BoxShape3D`.
 * A heightmap collision shape can also be build by using an `Image` reference:
 * 
 * 		```gdscript
 * 
 * 		var heightmap_texture = ResourceLoader.load("res://heightmap_image.exr")
 * 		var heightmap_image = heightmap_texture.get_image()
 * 		heightmap_image.convert(Image.FORMAT_RF)
 * 
 * 		var height_min = 0.0
 * 		var height_max = 10.0
 * 
 * 		update_map_data_from_image(heightmap_image, height_min, height_max)
 * 		
 * 
 * ```
 * 
 */
export class HeightMapShape3D extends Shape3D {
/**
 * Height map data. The array's size must be equal to `map_width` multiplied by `map_depth`.
 */
  mapData: PackedFloat32Array;
/**
 * Number of vertices in the depth of the height map. Changing this will resize the `map_data`.
 */
  mapDepth: int;
/**
 * Number of vertices in the width of the height map. Changing this will resize the `map_data`.
 */
  mapWidth: int;
/**
 * Returns the largest height value found in `map_data`. Recalculates only when `map_data` changes.
 * @returns float
 */
  getMaxHeight(): float;
/**
 * Returns the smallest height value found in `map_data`. Recalculates only when `map_data` changes.
 * @returns float
 */
  getMinHeight(): float;
/**
 * Updates `map_data` with data read from an `Image` reference. Automatically resizes heightmap `map_width` and `map_depth` to fit the full image width and height.
 * The image needs to be in either `Image.FORMAT_RF` (32 bit), `Image.FORMAT_RH` (16 bit), or `Image.FORMAT_R8` (8 bit).
 * Each image pixel is read in as a float on the range from `0.0` (black pixel) to `1.0` (white pixel). This range value gets remapped to `height_min` and `height_max` to form the final height value.
 * @param image Image
 * @param heightMin float
 * @param heightMax float
 */
  updateMapDataFromImage(image: Image, heightMin: float, heightMax: float): void;
}
