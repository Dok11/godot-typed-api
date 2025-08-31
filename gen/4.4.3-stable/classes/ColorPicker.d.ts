import type { Color, GodotArray, GodotDictionary, PackedColorArray, Signal, VBoxContainer, float, int } from "../index.d.ts";
/**
 * A widget that provides an interface for selecting or modifying a color.
 * 
 * A widget that provides an interface for selecting or modifying a color. It can optionally provide functionalities like a color sampler (eyedropper), color modes, and presets.
 * 
 * **Note:** This control is the color picker widget itself. You can use a `ColorPickerButton` instead if you need a button that brings up a `ColorPicker` in a popup.
 */
export class ColorPicker extends VBoxContainer {
/**
 * If `true`, it's possible to add presets under Swatches. If `false`, the button to add presets is disabled.
 */
  canAddSwatches: boolean;
/**
 * The currently selected color.
 */
  color: Color;
/**
 * The currently selected color mode. See `ColorModeType`.
 */
  colorMode: int;
/**
 * If `true`, the color mode buttons are visible.
 */
  colorModesVisible: boolean;
/**
 * If `true`, the color will apply only after the user releases the mouse button, otherwise it will apply immediately even in mouse motion event (which can cause performance issues).
 */
  deferredMode: boolean;
/**
 * If `true`, shows an alpha channel slider (opacity).
 */
  editAlpha: boolean;
/**
 * If `true`, the hex color code input field is visible.
 */
  hexVisible: boolean;
/**
 * The shape of the color space view. See `PickerShapeType`.
 */
  pickerShape: int;
/**
 * If `true`, the Swatches and Recent Colors presets are visible.
 */
  presetsVisible: boolean;
/**
 * If `true`, the color sampler and color preview are visible.
 */
  samplerVisible: boolean;
/**
 * If `true`, the color sliders are visible.
 */
  slidersVisible: boolean;
/**
 * Adds the given color to a list of color presets. The presets are displayed in the color picker and the user will be able to select them.
 * 
 * **Note:** The presets list is only for *this* color picker.
 * @param color Color
 */
  addPreset(color: Color): void;
/**
 * Adds the given color to a list of color recent presets so that it can be picked later. Recent presets are the colors that were picked recently, a new preset is automatically created and added to recent presets when you pick a new color.
 * 
 * **Note:** The recent presets list is only for *this* color picker.
 * @param color Color
 */
  addRecentPreset(color: Color): void;
/**
 * Removes the given color from the list of color presets of this color picker.
 * @param color Color
 */
  erasePreset(color: Color): void;
/**
 * Removes the given color from the list of color recent presets of this color picker.
 * @param color Color
 */
  eraseRecentPreset(color: Color): void;
/**
 * Returns the list of colors in the presets of the color picker.
 * @returns PackedColorArray
 */
  getPresets(): PackedColorArray;
/**
 * Returns the list of colors in the recent presets of the color picker.
 * @returns PackedColorArray
 */
  getRecentPresets(): PackedColorArray;
/**
 * Emitted when the color is changed.
 */
  colorChanged: Signal<[color: Color]>;
/**
 * Emitted when a preset is added.
 */
  presetAdded: Signal<[color: Color]>;
/**
 * Emitted when a preset is removed.
 */
  presetRemoved: Signal<[color: Color]>;
/**
 * Allows editing the color with Red/Green/Blue sliders.
 */
  static readonly MODE_RGB: int;
/**
 * Allows editing the color with Hue/Saturation/Value sliders.
 */
  static readonly MODE_HSV: int;
/**
 * Allows the color R, G, B component values to go beyond 1.0, which can be used for certain special operations that require it (like tinting without darkening or rendering sprites in HDR).
 */
  static readonly MODE_RAW: int;
/**
 * Allows editing the color with Hue/Saturation/Lightness sliders.
 * OKHSL is a new color space similar to HSL but that better match perception by leveraging the Oklab color space which is designed to be simple to use, while doing a good job at predicting perceived lightness, chroma and hue.
 * Okhsv and Okhsl color spaces (https://bottosson.github.io/posts/colorpicker/)
 */
  static readonly MODE_OKHSL: int;
/**
 * HSV Color Model rectangle color space.
 */
  static readonly SHAPE_HSV_RECTANGLE: int;
/**
 * HSV Color Model rectangle color space with a wheel.
 */
  static readonly SHAPE_HSV_WHEEL: int;
/**
 * HSV Color Model circle color space. Use Saturation as a radius.
 */
  static readonly SHAPE_VHS_CIRCLE: int;
/**
 * HSL OK Color Model circle color space.
 */
  static readonly SHAPE_OKHSL_CIRCLE: int;
/**
 * The color space shape and the shape select button are hidden. Can't be selected from the shapes popup.
 */
  static readonly SHAPE_NONE: int;
}
