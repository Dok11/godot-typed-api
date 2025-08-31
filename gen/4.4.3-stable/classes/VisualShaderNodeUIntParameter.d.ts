import type { GodotArray, GodotDictionary, VisualShaderNodeParameter, float, int } from "../index.d.ts";
/**
 * A visual shader node for shader parameter (uniform) of type unsigned [int].
 * 
 * A `VisualShaderNodeParameter` of type unsigned [int]. Offers additional customization for range of accepted values.
 */
export class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
/**
 * Default value of this parameter, which will be used if not set externally. `default_value_enabled` must be enabled; defaults to `0` otherwise.
 */
  defaultValue: int;
/**
 * If `true`, the node will have a custom default value.
 */
  defaultValueEnabled: boolean;
}
