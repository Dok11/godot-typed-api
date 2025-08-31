import type { Font, GodotArray, GodotDictionary, Object, Signal, StyleBox, Texture2D, Theme, float, int } from "../index.d.ts";
/**
 * A singleton that provides access to static information about `Theme` resources used by the engine and by your project.
 * 
 * This singleton provides access to static information about `Theme` resources used by the engine and by your projects. You can fetch the default engine theme, as well as your project configured theme.
 * `ThemeDB` also contains fallback values for theme properties.
 */
export class ThemeDB extends Object {
/**
 * The fallback base scale factor of every `Control` node and `Theme` resource. Used when no other value is available to the control.
 * See also `Theme.default_base_scale`.
 */
  fallbackBaseScale: float;
/**
 * The fallback font of every `Control` node and `Theme` resource. Used when no other value is available to the control.
 * See also `Theme.default_font`.
 */
  fallbackFont: Font;
/**
 * The fallback font size of every `Control` node and `Theme` resource. Used when no other value is available to the control.
 * See also `Theme.default_font_size`.
 */
  fallbackFontSize: int;
/**
 * The fallback icon of every `Control` node and `Theme` resource. Used when no other value is available to the control.
 */
  fallbackIcon: Texture2D;
/**
 * The fallback stylebox of every `Control` node and `Theme` resource. Used when no other value is available to the control.
 */
  fallbackStylebox: StyleBox;
/**
 * Returns a reference to the default engine `Theme`. This theme resource is responsible for the out-of-the-box look of `Control` nodes and cannot be overridden.
 * @returns Theme
 */
  getDefaultTheme(): Theme;
/**
 * Returns a reference to the custom project `Theme`. This theme resources allows to override the default engine theme for every control node in the project.
 * To set the project theme, see `ProjectSettings.gui/theme/custom`.
 * @returns Theme
 */
  getProjectTheme(): Theme;
/**
 * Emitted when one of the fallback values had been changed. Use it to refresh the look of controls that may rely on the fallback theme items.
 */
  fallbackChanged: Signal<[]>;
}
