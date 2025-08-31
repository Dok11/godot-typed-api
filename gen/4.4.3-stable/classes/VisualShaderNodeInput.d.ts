import type { GodotArray, GodotDictionary, Signal, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * Represents the input shader parameter within the visual shader graph.
 * 
 * Gives access to input variables (built-ins) available for the shader. See the shading reference for the list of available built-ins for each shader type (check `Tutorials` section for link).
 */
export class VisualShaderNodeInput extends VisualShaderNode {
/**
 * One of the several input constants in lower-case style like: "vertex" (`VERTEX`) or "point_size" (`POINT_SIZE`).
 */
  inputName: string;
/**
 * Returns a translated name of the current constant in the Godot Shader Language. E.g. `"ALBEDO"` if the `input_name` equal to `"albedo"`.
 * @returns string
 */
  getInputRealName(): string;
/**
 * Emitted when input is changed via `input_name`.
 */
  inputTypeChanged: Signal<[]>;
}
