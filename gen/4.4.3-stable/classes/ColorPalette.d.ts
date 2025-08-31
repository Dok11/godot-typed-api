import type { GodotArray, GodotDictionary, PackedColorArray, Resource, float, int } from "../index.d.ts";
/**
 * A resource class for managing a palette of colors, which can be loaded and saved using `ColorPicker`.
 * 
 * The `ColorPalette` resource is designed to store and manage a collection of colors. This resource is useful in scenarios where a predefined set of colors is required, such as for creating themes, designing user interfaces, or managing game assets. The built-in `ColorPicker` control can also make use of `ColorPalette` without additional code.
 */
export class ColorPalette extends Resource {
/**
 * A `PackedColorArray` containing the colors in the palette.
 */
  colors: PackedColorArray;
}
