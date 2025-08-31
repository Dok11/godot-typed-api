import type { GodotArray, GodotDictionary, Resource, Variant, float, int } from "../index.d.ts";
/**
 * Base class for `VisualShader` nodes. Not related to scene nodes.
 * 
 * Visual shader graphs consist of various nodes. Each node in the graph is a separate object and they are represented as a rectangular boxes with title and a set of properties. Each node also has connection ports that allow to connect it to another nodes and control the flow of the shader.
 */
export class VisualShaderNode extends Resource {
/**
 * Represents the index of the frame this node is linked to. If set to `-1` the node is not linked to any frame.
 */
  linkedParentGraphFrame: int;
/**
 * Sets the output port index which will be showed for preview. If set to `-1` no port will be open for preview.
 */
  outputPortForPreview: int;
/**
 * Clears the default input ports value.
 */
  clearDefaultInputValues(): void;
/**
 * Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.
 * @param type_ int
 * @returns int
 */
  getDefaultInputPort(type_: int): int;
/**
 * Returns an `Array` containing default values for all of the input ports of the node in the form `[index0, value0, index1, value1, ...]`.
 * @returns GodotArray<any>
 */
  getDefaultInputValues(): GodotArray<any>;
/**
 * Returns the default value of the input `port`.
 * @param port int
 * @returns Variant
 */
  getInputPortDefaultValue(port: int): Variant;
/**
 * Removes the default value of the input `port`.
 * @param port int
 */
  removeInputPortDefaultValue(port: int): void;
/**
 * Sets the default input ports values using an `Array` of the form `[index0, value0, index1, value1, ...]`. For example: `[0, Vector3(0, 0, 0), 1, Vector3(0, 0, 0)]`.
 * @param values GodotArray<any>
 */
  setDefaultInputValues(values: GodotArray<any>): void;
/**
 * Sets the default `value` for the selected input `port`.
 * @param port int
 * @param value Variant
 * @param prevValue Variant (optional, default: null)
 */
  setInputPortDefaultValue(port: int, value: Variant, prevValue?: Variant): void;
/**
 * Floating-point scalar. Translated to [code skip-lint]float[/code] type in shader code.
 */
  static readonly PORT_TYPE_SCALAR: int;
/**
 * Integer scalar. Translated to [code skip-lint]int[/code] type in shader code.
 */
  static readonly PORT_TYPE_SCALAR_INT: int;
/**
 * Unsigned integer scalar. Translated to [code skip-lint]uint[/code] type in shader code.
 */
  static readonly PORT_TYPE_SCALAR_UINT: int;
/**
 * 2D vector of floating-point values. Translated to [code skip-lint]vec2[/code] type in shader code.
 */
  static readonly PORT_TYPE_VECTOR_2D: int;
/**
 * 3D vector of floating-point values. Translated to [code skip-lint]vec3[/code] type in shader code.
 */
  static readonly PORT_TYPE_VECTOR_3D: int;
/**
 * 4D vector of floating-point values. Translated to [code skip-lint]vec4[/code] type in shader code.
 */
  static readonly PORT_TYPE_VECTOR_4D: int;
/**
 * Boolean type. Translated to [code skip-lint]bool[/code] type in shader code.
 */
  static readonly PORT_TYPE_BOOLEAN: int;
/**
 * Transform type. Translated to [code skip-lint]mat4[/code] type in shader code.
 */
  static readonly PORT_TYPE_TRANSFORM: int;
/**
 * Sampler type. Translated to reference of sampler uniform in shader code. Can only be used for input ports in non-uniform nodes.
 */
  static readonly PORT_TYPE_SAMPLER: int;
/**
 * Represents the size of the `PortType` enum.
 */
  static readonly PORT_TYPE_MAX: int;
}
