import type { GodotArray, GodotDictionary, PackedByteArray, Resource, float, int } from "../index.d.ts";
/**
 * SPIR-V intermediate representation as part of a `RDShaderFile` (used by `RenderingDevice`).
 * 
 * `RDShaderSPIRV` represents a `RDShaderFile`'s SPIR-V (https://www.khronos.org/spir/) code for various shader stages, as well as possible compilation error messages. SPIR-V is a low-level intermediate shader representation. This intermediate representation is not used directly by GPUs for rendering, but it can be compiled into binary shaders that GPUs can understand. Unlike compiled shaders, SPIR-V is portable across GPU models and driver versions.
 * This object is used by `RenderingDevice`.
 */
export class RDShaderSPIRV extends Resource {
/**
 * The SPIR-V bytecode for the compute shader stage.
 */
  bytecodeCompute: PackedByteArray;
/**
 * The SPIR-V bytecode for the fragment shader stage.
 */
  bytecodeFragment: PackedByteArray;
/**
 * The SPIR-V bytecode for the tessellation control shader stage.
 */
  bytecodeTesselationControl: PackedByteArray;
/**
 * The SPIR-V bytecode for the tessellation evaluation shader stage.
 */
  bytecodeTesselationEvaluation: PackedByteArray;
/**
 * The SPIR-V bytecode for the vertex shader stage.
 */
  bytecodeVertex: PackedByteArray;
/**
 * The compilation error message for the compute shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.
 */
  compileErrorCompute: string;
/**
 * The compilation error message for the fragment shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.
 */
  compileErrorFragment: string;
/**
 * The compilation error message for the tessellation control shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.
 */
  compileErrorTesselationControl: string;
/**
 * The compilation error message for the tessellation evaluation shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.
 */
  compileErrorTesselationEvaluation: string;
/**
 * The compilation error message for the vertex shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.
 */
  compileErrorVertex: string;
/**
 * Equivalent to getting one of `bytecode_compute`, `bytecode_fragment`, `bytecode_tesselation_control`, `bytecode_tesselation_evaluation`, `bytecode_vertex`.
 * @param stage int
 * @returns PackedByteArray
 */
  getStageBytecode(stage: int): PackedByteArray;
/**
 * Returns the compilation error message for the given shader `stage`. Equivalent to getting one of `compile_error_compute`, `compile_error_fragment`, `compile_error_tesselation_control`, `compile_error_tesselation_evaluation`, `compile_error_vertex`.
 * @param stage int
 * @returns string
 */
  getStageCompileError(stage: int): string;
/**
 * Sets the SPIR-V `bytecode` for the given shader `stage`. Equivalent to setting one of `bytecode_compute`, `bytecode_fragment`, `bytecode_tesselation_control`, `bytecode_tesselation_evaluation`, `bytecode_vertex`.
 * @param stage int
 * @param bytecode PackedByteArray
 */
  setStageBytecode(stage: int, bytecode: PackedByteArray): void;
/**
 * Sets the compilation error message for the given shader `stage` to `compile_error`. Equivalent to setting one of `compile_error_compute`, `compile_error_fragment`, `compile_error_tesselation_control`, `compile_error_tesselation_evaluation`, `compile_error_vertex`.
 * @param stage int
 * @param compileError string
 */
  setStageCompileError(stage: int, compileError: string): void;
}
