import type { GodotArray, GodotDictionary, VisualShaderNodeResizableBase, float, int } from "../index.d.ts";
/**
 * Base class for a family of nodes with variable number of input and output ports within the visual shader graph.
 * 
 * Currently, has no direct usage, use the derived classes instead.
 */
export class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
/**
 * Adds an input port with the specified `type` (see `VisualShaderNode.PortType`) and `name`.
 * @param id int
 * @param type_ int
 * @param name string
 */
  addInputPort(id: int, type_: int, name: string): void;
/**
 * Adds an output port with the specified `type` (see `VisualShaderNode.PortType`) and `name`.
 * @param id int
 * @param type_ int
 * @param name string
 */
  addOutputPort(id: int, type_: int, name: string): void;
/**
 * Removes all previously specified input ports.
 */
  clearInputPorts(): void;
/**
 * Removes all previously specified output ports.
 */
  clearOutputPorts(): void;
/**
 * Returns a free input port ID which can be used in `add_input_port`.
 * @returns int
 */
  getFreeInputPortId(): int;
/**
 * Returns a free output port ID which can be used in `add_output_port`.
 * @returns int
 */
  getFreeOutputPortId(): int;
/**
 * Returns the number of input ports in use. Alternative for `get_free_input_port_id`.
 * @returns int
 */
  getInputPortCount(): int;
/**
 * Returns a `String` description of the input ports as a colon-separated list using the format `id,type,name;` (see `add_input_port`).
 * @returns string
 */
  getInputs(): string;
/**
 * Returns the number of output ports in use. Alternative for `get_free_output_port_id`.
 * @returns int
 */
  getOutputPortCount(): int;
/**
 * Returns a `String` description of the output ports as a colon-separated list using the format `id,type,name;` (see `add_output_port`).
 * @returns string
 */
  getOutputs(): string;
/**
 * Returns `true` if the specified input port exists.
 * @param id int
 * @returns boolean
 */
  hasInputPort(id: int): boolean;
/**
 * Returns `true` if the specified output port exists.
 * @param id int
 * @returns boolean
 */
  hasOutputPort(id: int): boolean;
/**
 * Returns `true` if the specified port name does not override an existed port name and is valid within the shader.
 * @param name string
 * @returns boolean
 */
  isValidPortName(name: string): boolean;
/**
 * Removes the specified input port.
 * @param id int
 */
  removeInputPort(id: int): void;
/**
 * Removes the specified output port.
 * @param id int
 */
  removeOutputPort(id: int): void;
/**
 * Renames the specified input port.
 * @param id int
 * @param name string
 */
  setInputPortName(id: int, name: string): void;
/**
 * Sets the specified input port's type (see `VisualShaderNode.PortType`).
 * @param id int
 * @param type_ int
 */
  setInputPortType(id: int, type_: int): void;
/**
 * Defines all input ports using a `String` formatted as a colon-separated list: `id,type,name;` (see `add_input_port`).
 * @param inputs string
 */
  setInputs(inputs: string): void;
/**
 * Renames the specified output port.
 * @param id int
 * @param name string
 */
  setOutputPortName(id: int, name: string): void;
/**
 * Sets the specified output port's type (see `VisualShaderNode.PortType`).
 * @param id int
 * @param type_ int
 */
  setOutputPortType(id: int, type_: int): void;
/**
 * Defines all output ports using a `String` formatted as a colon-separated list: `id,type,name;` (see `add_output_port`).
 * @param outputs string
 */
  setOutputs(outputs: string): void;
}
