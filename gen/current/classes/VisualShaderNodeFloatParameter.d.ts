import type { GodotArray, GodotDictionary, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A scalar float parameter to be used within the visual shader graph.
 * 
 * Translated to `uniform float` in the shader language.
 */
export class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
/**
 * A default value to be assigned within the shader.
 */
  defaultValue: float;
/**
 * Enables usage of the `default_value`.
 */
  defaultValueEnabled: boolean;
/**
 * A hint applied to the uniform, which controls the values it can take when set through the Inspector.
 */
  hint: int;
/**
 * Minimum value for range hints. Used if `hint` is set to `HINT_RANGE` or `HINT_RANGE_STEP`.
 */
  max: float;
/**
 * Maximum value for range hints. Used if `hint` is set to `HINT_RANGE` or `HINT_RANGE_STEP`.
 */
  min: float;
/**
 * Step (increment) value for the range hint with step. Used if `hint` is set to `HINT_RANGE_STEP`.
 */
  step: float;
/**
 * No hint used.
 */
  static readonly HINT_NONE: int;
/**
 * A range hint for scalar value, which limits possible input values between `min` and `max`. Translated to `hint_range(min, max)` in shader code.
 */
  static readonly HINT_RANGE: int;
/**
 * A range hint for scalar value with step, which limits possible input values between `min` and `max`, with a step (increment) of `step`). Translated to `hint_range(min, max, step)` in shader code.
 */
  static readonly HINT_RANGE_STEP: int;
/**
 * Represents the size of the `Hint` enum.
 */
  static readonly HINT_MAX: int;
}
