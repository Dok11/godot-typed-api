import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Pipeline rasterization state (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDPipelineRasterizationState extends RefCounted {
/**
 * The cull mode to use when drawing polygons, which determines whether front faces or backfaces are hidden.
 */
  cullMode: int;
/**
 * A limit for how much each depth value can be offset. If negative, it serves as a minimum value, but if positive, it serves as a maximum value.
 */
  depthBiasClamp: float;
/**
 * A constant offset added to each depth value. Applied after `depth_bias_slope_factor`.
 */
  depthBiasConstantFactor: float;
/**
 * If `true`, each generated depth value will by offset by some amount. The specific amount is generated per polygon based on the values of `depth_bias_slope_factor` and `depth_bias_constant_factor`.
 */
  depthBiasEnabled: boolean;
/**
 * A constant scale applied to the slope of each polygons' depth. Applied before `depth_bias_constant_factor`.
 */
  depthBiasSlopeFactor: float;
/**
 * If `true`, primitives are discarded immediately before the rasterization stage.
 */
  discardPrimitives: boolean;
/**
 * If `true`, clamps depth values according to the minimum and maximum depth of the associated viewport.
 */
  enableDepthClamp: boolean;
/**
 * The winding order to use to determine which face of a triangle is considered its front face.
 */
  frontFace: int;
/**
 * The line width to use when drawing lines (in pixels). Thick lines may not be supported on all hardware.
 */
  lineWidth: float;
/**
 * The number of control points to use when drawing a patch with tessellation enabled. Higher values result in higher quality at the cost of performance.
 */
  patchControlPoints: int;
/**
 * If `true`, performs wireframe rendering for triangles instead of flat or textured rendering.
 */
  wireframe: boolean;
}
