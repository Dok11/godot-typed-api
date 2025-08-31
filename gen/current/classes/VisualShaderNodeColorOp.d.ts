import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A `Color` operator to be used within the visual shader graph.
 * 
 * Applies `operator` to two color inputs.
 */
export class VisualShaderNodeColorOp extends VisualShaderNode {
/**
 * An operator to be applied to the inputs. See `Operator` for options.
 */
  operator: int;
/**
 * Produce a screen effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			result = vec3(1.0) - (vec3(1.0) - a) * (vec3(1.0) - b);
 * 			
 * 
 * ```
 */
  static readonly OP_SCREEN: int;
/**
 * Produce a difference effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			result = abs(a - b);
 * 			
 * 
 * ```
 */
  static readonly OP_DIFFERENCE: int;
/**
 * Produce a darken effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			result = min(a, b);
 * 			
 * 
 * ```
 */
  static readonly OP_DARKEN: int;
/**
 * Produce a lighten effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			result = max(a, b);
 * 			
 * 
 * ```
 */
  static readonly OP_LIGHTEN: int;
/**
 * Produce an overlay effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			for (int i = 0; i < 3; i++) {
 * 			    float base = a[i];
 * 			    float blend = b[i];
 * 			    if (base < 0.5) {
 * 			        result[i] = 2.0 * base * blend;
 * 			    } else {
 * 			        result[i] = 1.0 - 2.0 * (1.0 - blend) * (1.0 - base);
 * 			    }
 * 			}
 * 			
 * 
 * ```
 */
  static readonly OP_OVERLAY: int;
/**
 * Produce a dodge effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			result = a / (vec3(1.0) - b);
 * 			
 * 
 * ```
 */
  static readonly OP_DODGE: int;
/**
 * Produce a burn effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			result = vec3(1.0) - (vec3(1.0) - a) / b;
 * 			
 * 
 * ```
 */
  static readonly OP_BURN: int;
/**
 * Produce a soft light effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			for (int i = 0; i < 3; i++) {
 * 			    float base = a[i];
 * 			    float blend = b[i];
 * 			    if (base < 0.5) {
 * 			        result[i] = base * (blend + 0.5);
 * 			    } else {
 * 			        result[i] = 1.0 - (1.0 - base) * (1.0 - (blend - 0.5));
 * 			    }
 * 			}
 * 			
 * 
 * ```
 */
  static readonly OP_SOFT_LIGHT: int;
/**
 * Produce a hard light effect with the following formula:
 * 
 * 			```gdscript
 * 
 * 			for (int i = 0; i < 3; i++) {
 * 			    float base = a[i];
 * 			    float blend = b[i];
 * 			    if (base < 0.5) {
 * 			        result[i] = base * (2.0 * blend);
 * 			    } else {
 * 			        result[i] = 1.0 - (1.0 - base) * (1.0 - 2.0 * (blend - 0.5));
 * 			    }
 * 			}
 * 			
 * 
 * ```
 */
  static readonly OP_HARD_LIGHT: int;
/**
 * Represents the size of the `Operator` enum.
 */
  static readonly OP_MAX: int;
}
