import type { GodotArray, GodotDictionary, PackedStringArray, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A visual shader node for shader parameter (uniform) of type [int].
 * 
 * A `VisualShaderNodeParameter` of type [int]. Offers additional customization for range of accepted values.
 */
export class VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
/**
 * Default value of this parameter, which will be used if not set externally. `default_value_enabled` must be enabled; defaults to `0` otherwise.
 */
  defaultValue: int;
/**
 * If `true`, the node will have a custom default value.
 */
  defaultValueEnabled: boolean;
/**
 * The names used for the enum select in the editor. `hint` must be `HINT_ENUM` for this to take effect.
 */
  enumNames: PackedStringArray;
/**
 * Range hint of this node. Use it to customize valid parameter range.
 */
  hint: int;
/**
 * The maximum value this parameter can take. `hint` must be either `HINT_RANGE` or `HINT_RANGE_STEP` for this to take effect.
 */
  max: int;
/**
 * The minimum value this parameter can take. `hint` must be either `HINT_RANGE` or `HINT_RANGE_STEP` for this to take effect.
 */
  min: int;
/**
 * The step between parameter's values. Forces the parameter to be a multiple of the given value. `hint` must be `HINT_RANGE_STEP` for this to take effect.
 */
  step: int;
/**
 * The parameter will not constrain its value.
 */
  static readonly HINT_NONE: int;
/**
 * The parameter's value must be within the specified `min`/`max` range.
 */
  static readonly HINT_RANGE: int;
/**
 * The parameter's value must be within the specified range, with the given `step` between values.
 */
  static readonly HINT_RANGE_STEP: int;
/**
 * The parameter uses an enum to associate preset values to names in the editor.
 */
  static readonly HINT_ENUM: int;
/**
 * Represents the size of the `Hint` enum.
 */
  static readonly HINT_MAX: int;
}
