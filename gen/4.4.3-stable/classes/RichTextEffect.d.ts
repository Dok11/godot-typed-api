import type { CharFXTransform, GodotArray, GodotDictionary, Resource, float, int } from "../index.d.ts";
/**
 * A custom effect for a `RichTextLabel`.
 * 
 * A custom effect for a `RichTextLabel`, which can be loaded in the `RichTextLabel` inspector or using `RichTextLabel.install_effect`.
 * 
 * **Note:** For a `RichTextEffect` to be usable, a BBCode tag must be defined as a member variable called `bbcode` in the script.
 * 
 * [gdscript skip-lint]
 * # The RichTextEffect will be usable like this: `[example]Some text[/example]`
 * var bbcode = "example"
 * [/gdscript]
 * [csharp skip-lint]
 * // The RichTextEffect will be usable like this: `[example]Some text[/example]`
 * string bbcode = "example";
 * [/csharp]
 * 
 * **Note:** As soon as a `RichTextLabel` contains at least one `RichTextEffect`, it will continuously process the effect unless the project is paused. This may impact battery life negatively.
 */
export class RichTextEffect extends Resource {
/**
 * Override this method to modify properties in `char_fx`. The method must return `true` if the character could be transformed successfully. If the method returns `false`, it will skip transformation to avoid displaying broken text.
 * @param charFx CharFXTransform
 * @returns boolean
 */
  private processCustomFx(charFx: CharFXTransform): boolean;
}
