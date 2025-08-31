import type { GodotArray, GodotDictionary, Image, Texture2D, Vector2i, float, int } from "../index.d.ts";
/**
 * A `Texture2D` based on an `Image`.
 * 
 * A `Texture2D` based on an `Image`. For an image to be displayed, an `ImageTexture` has to be created from it using the `create_from_image` method:
 * 
 * 		```gdscript
 * 
 * 		var image = Image.load_from_file("res://icon.svg")
 * 		var texture = ImageTexture.create_from_image(image)
 * 		$Sprite2D.texture = texture
 * 		
 * 
 * ```
 * This way, textures can be created at run-time by loading images both from within the editor and externally.
 * 
 * **Warning:** Prefer to load imported textures with `@GDScript.load` over loading them from within the filesystem dynamically with `Image.load`, as it may not work in exported projects:
 * 
 * 		```gdscript
 * 
 * 		var texture = load("res://icon.svg")
 * 		$Sprite2D.texture = texture
 * 		
 * 
 * ```
 * This is because images have to be imported as a `CompressedTexture2D` first to be loaded with `@GDScript.load`. If you'd still like to load an image file just like any other `Resource`, import it as an `Image` resource instead, and then load it normally using the `@GDScript.load` method.
 * 
 * **Note:** The image can be retrieved from an imported texture using the `Texture2D.get_image` method, which returns a copy of the image:
 * 
 * 		```gdscript
 * 
 * 		var texture = load("res://icon.svg")
 * 		var image = texture.get_image()
 * 		
 * 
 * ```
 * An `ImageTexture` is not meant to be operated from within the editor interface directly, and is mostly useful for rendering images on screen dynamically via code. If you need to generate images procedurally from within the editor, consider saving and importing images as custom texture resources implementing a new `EditorImportPlugin`.
 * 
 * **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations.
 */
export class ImageTexture extends Texture2D {
  resourceLocalToScene: boolean;
/**
 * Creates a new `ImageTexture` and initializes it by allocating and setting the data from an `Image`.
 * @param image Image
 * @returns ImageTexture
 */
  createFromImage(image: Image): ImageTexture;
/**
 * Returns the format of the texture, one of `Image.Format`.
 * @returns int
 */
  getFormat(): int;
/**
 * Replaces the texture's data with a new `Image`. This will re-allocate new memory for the texture.
 * If you want to update the image, but don't need to change its parameters (format, size), use `update` instead for better performance.
 * @param image Image
 */
  setImage(image: Image): void;
/**
 * Resizes the texture to the specified dimensions.
 * @param size Vector2i
 */
  setSizeOverride(size: Vector2i): void;
/**
 * Replaces the texture's data with a new `Image`.
 * 
 * **Note:** The texture has to be created using `create_from_image` or initialized first with the `set_image` method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.
 * Use this method over `set_image` if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.
 * @param image Image
 */
  update(image: Image): void;
}
