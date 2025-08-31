import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Shader source code (used by `RenderingDevice`).
 * 
 * Shader source code in text form.
 * See also `RDShaderFile`. `RDShaderSource` is only meant to be used with the `RenderingDevice` API. It should not be confused with Godot's own `Shader` resource, which is what Godot's various nodes use for high-level shader programming.
 */
export class RDShaderSource extends RefCounted {
/**
 * The language the shader is written in.
 */
  language: int;
/**
 * Source code for the shader's compute stage.
 */
  sourceCompute: string;
/**
 * Source code for the shader's fragment stage.
 */
  sourceFragment: string;
/**
 * Source code for the shader's tessellation control stage.
 */
  sourceTesselationControl: string;
/**
 * Source code for the shader's tessellation evaluation stage.
 */
  sourceTesselationEvaluation: string;
/**
 * Source code for the shader's vertex stage.
 */
  sourceVertex: string;
/**
 * Returns source code for the specified shader `stage`. Equivalent to getting one of `source_compute`, `source_fragment`, `source_tesselation_control`, `source_tesselation_evaluation` or `source_vertex`.
 * @param stage int
 * @returns string
 */
  getStageSource(stage: int): string;
/**
 * Sets `source` code for the specified shader `stage`. Equivalent to setting one of `source_compute`, `source_fragment`, `source_tesselation_control`, `source_tesselation_evaluation` or `source_vertex`.
 * 
 * **Note:** If you set the compute shader source code using this method directly, remember to remove the Godot-specific hint `#[compute]`.
 * @param stage int
 * @param source string
 */
  setStageSource(stage: int, source: string): void;
}
