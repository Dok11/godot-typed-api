import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A `Color` function to be used within the visual shader graph.
 * 
 * Accept a `Color` to the input port and transform it according to `function`.
 */
export class VisualShaderNodeColorFunc extends VisualShaderNode {
/**
 * A function to be applied to the input color. See `Function` for options.
 */
  function_: int;
/**
 * Converts the color to grayscale using the following formula:
 * 
 * 			```gdscript
 * 
 * 			vec3 c = input;
 * 			float max1 = max(c.r, c.g);
 * 			float max2 = max(max1, c.b);
 * 			float max3 = max(max1, max2);
 * 			return vec3(max3, max3, max3);
 * 			
 * 
 * ```
 */
  static readonly FUNC_GRAYSCALE: int;
/**
 * Converts HSV vector to RGB equivalent.
 */
  static readonly FUNC_HSV2RGB: int;
/**
 * Converts RGB vector to HSV equivalent.
 */
  static readonly FUNC_RGB2HSV: int;
/**
 * Applies sepia tone effect using the following formula:
 * 
 * 			```gdscript
 * 
 * 			vec3 c = input;
 * 			float r = (c.r * 0.393) + (c.g * 0.769) + (c.b * 0.189);
 * 			float g = (c.r * 0.349) + (c.g * 0.686) + (c.b * 0.168);
 * 			float b = (c.r * 0.272) + (c.g * 0.534) + (c.b * 0.131);
 * 			return vec3(r, g, b);
 * 			
 * 
 * ```
 */
  static readonly FUNC_SEPIA: int;
/**
 * Converts color from linear color space to sRGB color space using the following formula:
 * 
 * 			```gdscript
 * 
 * 			vec3 c = clamp(c, vec3(0.0), vec3(1.0));
 * 			const vec3 a = vec3(0.055f);
 * 			return mix((vec3(1.0f) + a) * pow(c.rgb, vec3(1.0f / 2.4f)) - a, 12.92f * c.rgb, lessThan(c.rgb, vec3(0.0031308f)));
 * 			
 * 
 * ```
 * The Compatibility renderer uses a simpler formula:
 * 
 * 			```gdscript
 * 
 * 			vec3 c = input;
 * 			return max(vec3(1.055) * pow(c, vec3(0.416666667)) - vec3(0.055), vec3(0.0));
 * 			
 * 
 * ```
 */
  static readonly FUNC_LINEAR_TO_SRGB: int;
/**
 * Converts color from sRGB color space to linear color space using the following formula:
 * 
 * 			```gdscript
 * 
 * 			vec3 c = input;
 * 			return mix(pow((c.rgb + vec3(0.055)) * (1.0 / (1.0 + 0.055)), vec3(2.4)), c.rgb * (1.0 / 12.92), lessThan(c.rgb, vec3(0.04045)));
 * 			
 * 
 * ```
 * The Compatibility renderer uses a simpler formula:
 * 
 * 			```gdscript
 * 
 * 			vec3 c = input;
 * 			return c * (c * (c * 0.305306011 + 0.682171111) + 0.012522878);
 * 			
 * 
 * ```
 */
  static readonly FUNC_SRGB_TO_LINEAR: int;
/**
 * Represents the size of the `Function` enum.
 */
  static readonly FUNC_MAX: int;
}
