import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A floating-point scalar operator to be used within the visual shader graph.
 * 
 * Applies `operator` to two floating-point inputs: `a` and `b`.
 */
export class VisualShaderNodeFloatOp extends VisualShaderNode {
/**
 * An operator to be applied to the inputs. See `Operator` for options.
 */
  operator: int;
/**
 * Sums two numbers using `a + b`.
 */
  static readonly OP_ADD: int;
/**
 * Subtracts two numbers using `a - b`.
 */
  static readonly OP_SUB: int;
/**
 * Multiplies two numbers using `a * b`.
 */
  static readonly OP_MUL: int;
/**
 * Divides two numbers using `a / b`.
 */
  static readonly OP_DIV: int;
/**
 * Calculates the remainder of two numbers. Translates to `mod(a, b)` in the Godot Shader Language.
 */
  static readonly OP_MOD: int;
/**
 * Raises the `a` to the power of `b`. Translates to `pow(a, b)` in the Godot Shader Language.
 */
  static readonly OP_POW: int;
/**
 * Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language.
 */
  static readonly OP_MAX: int;
/**
 * Returns the lesser of two numbers. Translates to `min(a, b)` in the Godot Shader Language.
 */
  static readonly OP_MIN: int;
/**
 * Returns the arc-tangent of the parameters. Translates to `atan(a, b)` in the Godot Shader Language.
 */
  static readonly OP_ATAN2: int;
/**
 * Generates a step function by comparing `b`(x) to `a`(edge). Returns 0.0 if `x` is smaller than `edge` and otherwise 1.0. Translates to `step(a, b)` in the Godot Shader Language.
 */
  static readonly OP_STEP: int;
/**
 * Represents the size of the `Operator` enum.
 */
  static readonly OP_ENUM_SIZE: int;
}
