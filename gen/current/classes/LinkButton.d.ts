import type { BaseButton, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A button that represents a link.
 * 
 * A button that represents a link. This type of button is primarily used for interactions that cause a context change (like linking to a web page).
 * See also `BaseButton` which contains common properties and methods associated with this node.
 */
export class LinkButton extends BaseButton {
  focusMode: int;
/**
 * Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
  mouseDefaultCursorShape: int;
/**
 * Set BiDi algorithm override for the structured text.
 */
  structuredTextBidiOverride: int;
/**
 * Set additional options for BiDi override.
 */
  structuredTextBidiOverrideOptions: GodotArray<any>;
/**
 * The button's text that will be displayed inside the button's area.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * The underline mode to use for the text. See `LinkButton.UnderlineMode` for the available modes.
 */
  underline: int;
/**
 * The URI (https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) for this `LinkButton`. If set to a valid URI, pressing the button opens the URI using the operating system's default program for the protocol (via `OS.shell_open`). HTTP and HTTPS URLs open the default web browser.
 * 
 * 			```gdscript
 * 
 * 			uri = "https://godotengine.org"  # Opens the URL in the default web browser.
 * 			uri = "C:\SomeFolder"  # Opens the file explorer at the given path.
 * 			uri = "C:\SomeImage.png"  # Opens the given image in the default viewing app.
 * 			
 * 
 * ```
 * 
 * 			```csharp
 * 
 * 			Uri = "https://godotengine.org"; // Opens the URL in the default web browser.
 * 			Uri = "C:\SomeFolder"; // Opens the file explorer at the given path.
 * 			Uri = "C:\SomeImage.png"; // Opens the given image in the default viewing app.
 * 			
 * 
 * ```
 * 
 */
  uri: string;
/**
 * The LinkButton will always show an underline at the bottom of its text.
 */
  static readonly UNDERLINE_MODE_ALWAYS: int;
/**
 * The LinkButton will show an underline at the bottom of its text when the mouse cursor is over it.
 */
  static readonly UNDERLINE_MODE_ON_HOVER: int;
/**
 * The LinkButton will never show an underline at the bottom of its text.
 */
  static readonly UNDERLINE_MODE_NEVER: int;
}
