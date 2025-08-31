import type { Color, Font, GodotArray, GodotDictionary, PackedStringArray, Resource, StringName, StyleBox, Texture2D, Variant, float, int } from "../index.d.ts";
/**
 * A resource used for styling/skinning `Control`s and `Window`s.
 * 
 * A resource used for styling/skinning `Control` and `Window` nodes. While individual controls can be styled using their local theme overrides (see `Control.add_theme_color_override`), theme resources allow you to store and apply the same settings across all controls sharing the same type (e.g. style all `Button`s the same). One theme resource can be used for the entire project, but you can also set a separate theme resource to a branch of control nodes. A theme resource assigned to a control applies to the control itself, as well as all of its direct and indirect children (as long as a chain of controls is uninterrupted).
 * Use `ProjectSettings.gui/theme/custom` to set up a project-scope theme that will be available to every control in your project.
 * Use `Control.theme` of any control node to set up a theme that will be available to that control and all of its direct and indirect children.
 */
export class Theme extends Resource {
/**
 * The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see `ThemeDB.fallback_base_scale`).
 * Use `has_default_base_scale` to check if this value is valid.
 */
  defaultBaseScale: float;
/**
 * The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see `ThemeDB.fallback_font`).
 * Use `has_default_font` to check if this value is valid.
 */
  defaultFont: Font;
/**
 * The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see `ThemeDB.fallback_font_size`).
 * Values below `1` are invalid and can be used to unset the property. Use `has_default_font_size` to check if this value is valid.
 */
  defaultFontSize: int;
/**
 * Adds an empty theme type for every valid data type.
 * 
 * **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.
 * @param themeType StringName
 */
  addType(themeType: StringName): void;
/**
 * Removes all the theme properties defined on the theme resource.
 */
  clear(): void;
/**
 * Removes the `Color` property defined by `name` and `theme_type`, if it exists.
 * Fails if it doesn't exist. Use `has_color` to check for existence.
 * @param name StringName
 * @param themeType StringName
 */
  clearColor(name: StringName, themeType: StringName): void;
/**
 * Removes the constant property defined by `name` and `theme_type`, if it exists.
 * Fails if it doesn't exist. Use `has_constant` to check for existence.
 * @param name StringName
 * @param themeType StringName
 */
  clearConstant(name: StringName, themeType: StringName): void;
/**
 * Removes the `Font` property defined by `name` and `theme_type`, if it exists.
 * Fails if it doesn't exist. Use `has_font` to check for existence.
 * @param name StringName
 * @param themeType StringName
 */
  clearFont(name: StringName, themeType: StringName): void;
/**
 * Removes the font size property defined by `name` and `theme_type`, if it exists.
 * Fails if it doesn't exist. Use `has_font_size` to check for existence.
 * @param name StringName
 * @param themeType StringName
 */
  clearFontSize(name: StringName, themeType: StringName): void;
/**
 * Removes the icon property defined by `name` and `theme_type`, if it exists.
 * Fails if it doesn't exist. Use `has_icon` to check for existence.
 * @param name StringName
 * @param themeType StringName
 */
  clearIcon(name: StringName, themeType: StringName): void;
/**
 * Removes the `StyleBox` property defined by `name` and `theme_type`, if it exists.
 * Fails if it doesn't exist. Use `has_stylebox` to check for existence.
 * @param name StringName
 * @param themeType StringName
 */
  clearStylebox(name: StringName, themeType: StringName): void;
/**
 * Removes the theme property of `data_type` defined by `name` and `theme_type`, if it exists.
 * Fails if it doesn't exist. Use `has_theme_item` to check for existence.
 * 
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 * @param dataType int
 * @param name StringName
 * @param themeType StringName
 */
  clearThemeItem(dataType: int, name: StringName, themeType: StringName): void;
/**
 * Unmarks `theme_type` as being a variation of another theme type. See `set_type_variation`.
 * @param themeType StringName
 */
  clearTypeVariation(themeType: StringName): void;
/**
 * Returns the `Color` property defined by `name` and `theme_type`, if it exists.
 * Returns the default color value if the property doesn't exist. Use `has_color` to check for existence.
 * @param name StringName
 * @param themeType StringName
 * @returns Color
 */
  getColor(name: StringName, themeType: StringName): Color;
/**
 * Returns a list of names for `Color` properties defined with `theme_type`. Use `get_color_type_list` to get a list of possible theme type names.
 * @param themeType string
 * @returns PackedStringArray
 */
  getColorList(themeType: string): PackedStringArray;
/**
 * Returns a list of all unique theme type names for `Color` properties. Use `get_type_list` to get a list of all unique theme types.
 * @returns PackedStringArray
 */
  getColorTypeList(): PackedStringArray;
/**
 * Returns the constant property defined by `name` and `theme_type`, if it exists.
 * Returns `0` if the property doesn't exist. Use `has_constant` to check for existence.
 * @param name StringName
 * @param themeType StringName
 * @returns int
 */
  getConstant(name: StringName, themeType: StringName): int;
/**
 * Returns a list of names for constant properties defined with `theme_type`. Use `get_constant_type_list` to get a list of possible theme type names.
 * @param themeType string
 * @returns PackedStringArray
 */
  getConstantList(themeType: string): PackedStringArray;
/**
 * Returns a list of all unique theme type names for constant properties. Use `get_type_list` to get a list of all unique theme types.
 * @returns PackedStringArray
 */
  getConstantTypeList(): PackedStringArray;
/**
 * Returns the `Font` property defined by `name` and `theme_type`, if it exists.
 * Returns the default theme font if the property doesn't exist and the default theme font is set up (see `default_font`). Use `has_font` to check for existence of the property and `has_default_font` to check for existence of the default theme font.
 * Returns the engine fallback font value, if neither exist (see `ThemeDB.fallback_font`).
 * @param name StringName
 * @param themeType StringName
 * @returns Font
 */
  getFont(name: StringName, themeType: StringName): Font;
/**
 * Returns a list of names for `Font` properties defined with `theme_type`. Use `get_font_type_list` to get a list of possible theme type names.
 * @param themeType string
 * @returns PackedStringArray
 */
  getFontList(themeType: string): PackedStringArray;
/**
 * Returns the font size property defined by `name` and `theme_type`, if it exists.
 * Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see `default_font_size`). Use `has_font_size` to check for existence of the property and `has_default_font_size` to check for existence of the default theme font.
 * Returns the engine fallback font size value, if neither exist (see `ThemeDB.fallback_font_size`).
 * @param name StringName
 * @param themeType StringName
 * @returns int
 */
  getFontSize(name: StringName, themeType: StringName): int;
/**
 * Returns a list of names for font size properties defined with `theme_type`. Use `get_font_size_type_list` to get a list of possible theme type names.
 * @param themeType string
 * @returns PackedStringArray
 */
  getFontSizeList(themeType: string): PackedStringArray;
/**
 * Returns a list of all unique theme type names for font size properties. Use `get_type_list` to get a list of all unique theme types.
 * @returns PackedStringArray
 */
  getFontSizeTypeList(): PackedStringArray;
/**
 * Returns a list of all unique theme type names for `Font` properties. Use `get_type_list` to get a list of all unique theme types.
 * @returns PackedStringArray
 */
  getFontTypeList(): PackedStringArray;
/**
 * Returns the icon property defined by `name` and `theme_type`, if it exists.
 * Returns the engine fallback icon value if the property doesn't exist (see `ThemeDB.fallback_icon`). Use `has_icon` to check for existence.
 * @param name StringName
 * @param themeType StringName
 * @returns Texture2D
 */
  getIcon(name: StringName, themeType: StringName): Texture2D;
/**
 * Returns a list of names for icon properties defined with `theme_type`. Use `get_icon_type_list` to get a list of possible theme type names.
 * @param themeType string
 * @returns PackedStringArray
 */
  getIconList(themeType: string): PackedStringArray;
/**
 * Returns a list of all unique theme type names for icon properties. Use `get_type_list` to get a list of all unique theme types.
 * @returns PackedStringArray
 */
  getIconTypeList(): PackedStringArray;
/**
 * Returns the `StyleBox` property defined by `name` and `theme_type`, if it exists.
 * Returns the engine fallback stylebox value if the property doesn't exist (see `ThemeDB.fallback_stylebox`). Use `has_stylebox` to check for existence.
 * @param name StringName
 * @param themeType StringName
 * @returns StyleBox
 */
  getStylebox(name: StringName, themeType: StringName): StyleBox;
/**
 * Returns a list of names for `StyleBox` properties defined with `theme_type`. Use `get_stylebox_type_list` to get a list of possible theme type names.
 * @param themeType string
 * @returns PackedStringArray
 */
  getStyleboxList(themeType: string): PackedStringArray;
/**
 * Returns a list of all unique theme type names for `StyleBox` properties. Use `get_type_list` to get a list of all unique theme types.
 * @returns PackedStringArray
 */
  getStyleboxTypeList(): PackedStringArray;
/**
 * Returns the theme property of `data_type` defined by `name` and `theme_type`, if it exists.
 * Returns the engine fallback value if the property doesn't exist (see `ThemeDB`). Use `has_theme_item` to check for existence.
 * 
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 * @param dataType int
 * @param name StringName
 * @param themeType StringName
 * @returns Variant
 */
  getThemeItem(dataType: int, name: StringName, themeType: StringName): Variant;
/**
 * Returns a list of names for properties of `data_type` defined with `theme_type`. Use `get_theme_item_type_list` to get a list of possible theme type names.
 * 
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 * @param dataType int
 * @param themeType string
 * @returns PackedStringArray
 */
  getThemeItemList(dataType: int, themeType: string): PackedStringArray;
/**
 * Returns a list of all unique theme type names for `data_type` properties. Use `get_type_list` to get a list of all unique theme types.
 * 
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 * @param dataType int
 * @returns PackedStringArray
 */
  getThemeItemTypeList(dataType: int): PackedStringArray;
/**
 * Returns a list of all unique theme type names. Use the appropriate `get_*_type_list` method to get a list of unique theme types for a single data type.
 * @returns PackedStringArray
 */
  getTypeList(): PackedStringArray;
/**
 * Returns the name of the base theme type if `theme_type` is a valid variation type. Returns an empty string otherwise.
 * @param themeType StringName
 * @returns StringName
 */
  getTypeVariationBase(themeType: StringName): StringName;
/**
 * Returns a list of all type variations for the given `base_type`.
 * @param baseType StringName
 * @returns PackedStringArray
 */
  getTypeVariationList(baseType: StringName): PackedStringArray;
/**
 * Returns `true` if the `Color` property defined by `name` and `theme_type` exists.
 * Returns `false` if it doesn't exist. Use `set_color` to define it.
 * @param name StringName
 * @param themeType StringName
 * @returns boolean
 */
  hasColor(name: StringName, themeType: StringName): boolean;
/**
 * Returns `true` if the constant property defined by `name` and `theme_type` exists.
 * Returns `false` if it doesn't exist. Use `set_constant` to define it.
 * @param name StringName
 * @param themeType StringName
 * @returns boolean
 */
  hasConstant(name: StringName, themeType: StringName): boolean;
/**
 * Returns `true` if `default_base_scale` has a valid value.
 * Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.
 * @returns boolean
 */
  hasDefaultBaseScale(): boolean;
/**
 * Returns `true` if `default_font` has a valid value.
 * Returns `false` if it doesn't.
 * @returns boolean
 */
  hasDefaultFont(): boolean;
/**
 * Returns `true` if `default_font_size` has a valid value.
 * Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.
 * @returns boolean
 */
  hasDefaultFontSize(): boolean;
/**
 * Returns `true` if the `Font` property defined by `name` and `theme_type` exists, or if the default theme font is set up (see `has_default_font`).
 * Returns `false` if neither exist. Use `set_font` to define the property.
 * @param name StringName
 * @param themeType StringName
 * @returns boolean
 */
  hasFont(name: StringName, themeType: StringName): boolean;
/**
 * Returns `true` if the font size property defined by `name` and `theme_type` exists, or if the default theme font size is set up (see `has_default_font_size`).
 * Returns `false` if neither exist. Use `set_font_size` to define the property.
 * @param name StringName
 * @param themeType StringName
 * @returns boolean
 */
  hasFontSize(name: StringName, themeType: StringName): boolean;
/**
 * Returns `true` if the icon property defined by `name` and `theme_type` exists.
 * Returns `false` if it doesn't exist. Use `set_icon` to define it.
 * @param name StringName
 * @param themeType StringName
 * @returns boolean
 */
  hasIcon(name: StringName, themeType: StringName): boolean;
/**
 * Returns `true` if the `StyleBox` property defined by `name` and `theme_type` exists.
 * Returns `false` if it doesn't exist. Use `set_stylebox` to define it.
 * @param name StringName
 * @param themeType StringName
 * @returns boolean
 */
  hasStylebox(name: StringName, themeType: StringName): boolean;
/**
 * Returns `true` if the theme property of `data_type` defined by `name` and `theme_type` exists.
 * Returns `false` if it doesn't exist. Use `set_theme_item` to define it.
 * 
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 * @param dataType int
 * @param name StringName
 * @param themeType StringName
 * @returns boolean
 */
  hasThemeItem(dataType: int, name: StringName, themeType: StringName): boolean;
/**
 * Returns `true` if `theme_type` is marked as a variation of `base_type`.
 * @param themeType StringName
 * @param baseType StringName
 * @returns boolean
 */
  isTypeVariation(themeType: StringName, baseType: StringName): boolean;
/**
 * Adds missing and overrides existing definitions with values from the `other` theme resource.
 * 
 * **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.
 * @param other Theme
 */
  mergeWith(other: Theme): void;
/**
 * Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base.
 * @param themeType StringName
 */
  removeType(themeType: StringName): void;
/**
 * Renames the `Color` property defined by `old_name` and `theme_type` to `name`, if it exists.
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use `has_color` to check for existence, and `clear_color` to remove the existing property.
 * @param oldName StringName
 * @param name StringName
 * @param themeType StringName
 */
  renameColor(oldName: StringName, name: StringName, themeType: StringName): void;
/**
 * Renames the constant property defined by `old_name` and `theme_type` to `name`, if it exists.
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use `has_constant` to check for existence, and `clear_constant` to remove the existing property.
 * @param oldName StringName
 * @param name StringName
 * @param themeType StringName
 */
  renameConstant(oldName: StringName, name: StringName, themeType: StringName): void;
/**
 * Renames the `Font` property defined by `old_name` and `theme_type` to `name`, if it exists.
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use `has_font` to check for existence, and `clear_font` to remove the existing property.
 * @param oldName StringName
 * @param name StringName
 * @param themeType StringName
 */
  renameFont(oldName: StringName, name: StringName, themeType: StringName): void;
/**
 * Renames the font size property defined by `old_name` and `theme_type` to `name`, if it exists.
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use `has_font_size` to check for existence, and `clear_font_size` to remove the existing property.
 * @param oldName StringName
 * @param name StringName
 * @param themeType StringName
 */
  renameFontSize(oldName: StringName, name: StringName, themeType: StringName): void;
/**
 * Renames the icon property defined by `old_name` and `theme_type` to `name`, if it exists.
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use `has_icon` to check for existence, and `clear_icon` to remove the existing property.
 * @param oldName StringName
 * @param name StringName
 * @param themeType StringName
 */
  renameIcon(oldName: StringName, name: StringName, themeType: StringName): void;
/**
 * Renames the `StyleBox` property defined by `old_name` and `theme_type` to `name`, if it exists.
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use `has_stylebox` to check for existence, and `clear_stylebox` to remove the existing property.
 * @param oldName StringName
 * @param name StringName
 * @param themeType StringName
 */
  renameStylebox(oldName: StringName, name: StringName, themeType: StringName): void;
/**
 * Renames the theme property of `data_type` defined by `old_name` and `theme_type` to `name`, if it exists.
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use `has_theme_item` to check for existence, and `clear_theme_item` to remove the existing property.
 * 
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 * @param dataType int
 * @param oldName StringName
 * @param name StringName
 * @param themeType StringName
 */
  renameThemeItem(dataType: int, oldName: StringName, name: StringName, themeType: StringName): void;
/**
 * Creates or changes the value of the `Color` property defined by `name` and `theme_type`. Use `clear_color` to remove the property.
 * @param name StringName
 * @param themeType StringName
 * @param color Color
 */
  setColor(name: StringName, themeType: StringName, color: Color): void;
/**
 * Creates or changes the value of the constant property defined by `name` and `theme_type`. Use `clear_constant` to remove the property.
 * @param name StringName
 * @param themeType StringName
 * @param constant int
 */
  setConstant(name: StringName, themeType: StringName, constant: int): void;
/**
 * Creates or changes the value of the `Font` property defined by `name` and `theme_type`. Use `clear_font` to remove the property.
 * @param name StringName
 * @param themeType StringName
 * @param font Font
 */
  setFont(name: StringName, themeType: StringName, font: Font): void;
/**
 * Creates or changes the value of the font size property defined by `name` and `theme_type`. Use `clear_font_size` to remove the property.
 * @param name StringName
 * @param themeType StringName
 * @param fontSize int
 */
  setFontSize(name: StringName, themeType: StringName, fontSize: int): void;
/**
 * Creates or changes the value of the icon property defined by `name` and `theme_type`. Use `clear_icon` to remove the property.
 * @param name StringName
 * @param themeType StringName
 * @param texture Texture2D
 */
  setIcon(name: StringName, themeType: StringName, texture: Texture2D): void;
/**
 * Creates or changes the value of the `StyleBox` property defined by `name` and `theme_type`. Use `clear_stylebox` to remove the property.
 * @param name StringName
 * @param themeType StringName
 * @param texture StyleBox
 */
  setStylebox(name: StringName, themeType: StringName, texture: StyleBox): void;
/**
 * Creates or changes the value of the theme property of `data_type` defined by `name` and `theme_type`. Use `clear_theme_item` to remove the property.
 * Fails if the `value` type is not accepted by `data_type`.
 * 
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 * @param dataType int
 * @param name StringName
 * @param themeType StringName
 * @param value Variant
 */
  setThemeItem(dataType: int, name: StringName, themeType: StringName, value: Variant): void;
/**
 * Marks `theme_type` as a variation of `base_type`.
 * This adds `theme_type` as a suggested option for `Control.theme_type_variation` on a `Control` that is of the `base_type` class.
 * Variations can also be nested, i.e. `base_type` can be another variation. If a chain of variations ends with a `base_type` matching the class of the `Control`, the whole chain is going to be suggested as options.
 * 
 * **Note:** Suggestions only show up if this theme resource is set as the project default theme. See `ProjectSettings.gui/theme/custom`.
 * @param themeType StringName
 * @param baseType StringName
 */
  setTypeVariation(themeType: StringName, baseType: StringName): void;
/**
 * Theme's `Color` item type.
 */
  static readonly DATA_TYPE_COLOR: int;
/**
 * Theme's constant item type.
 */
  static readonly DATA_TYPE_CONSTANT: int;
/**
 * Theme's `Font` item type.
 */
  static readonly DATA_TYPE_FONT: int;
/**
 * Theme's font size item type.
 */
  static readonly DATA_TYPE_FONT_SIZE: int;
/**
 * Theme's icon `Texture2D` item type.
 */
  static readonly DATA_TYPE_ICON: int;
/**
 * Theme's `StyleBox` item type.
 */
  static readonly DATA_TYPE_STYLEBOX: int;
/**
 * Maximum value for the DataType enum.
 */
  static readonly DATA_TYPE_MAX: int;
}
