import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Pipeline depth/stencil state (used by `RenderingDevice`).
 * 
 * `RDPipelineDepthStencilState` controls the way depth and stencil comparisons are performed when sampling those values using `RenderingDevice`.
 */
export class RDPipelineDepthStencilState extends RefCounted {
/**
 * The method used for comparing the previous back stencil value and `back_op_reference`.
 */
  backOpCompare: int;
/**
 * Selects which bits from the back stencil value will be compared.
 */
  backOpCompareMask: int;
/**
 * The operation to perform on the stencil buffer for back pixels that pass the stencil test but fail the depth test.
 */
  backOpDepthFail: int;
/**
 * The operation to perform on the stencil buffer for back pixels that fail the stencil test.
 */
  backOpFail: int;
/**
 * The operation to perform on the stencil buffer for back pixels that pass the stencil test.
 */
  backOpPass: int;
/**
 * The value the previous back stencil value will be compared to.
 */
  backOpReference: int;
/**
 * Selects which bits from the back stencil value will be changed.
 */
  backOpWriteMask: int;
/**
 * The method used for comparing the previous and current depth values.
 */
  depthCompareOperator: int;
/**
 * The maximum depth that returns `true` for `enable_depth_range`.
 */
  depthRangeMax: float;
/**
 * The minimum depth that returns `true` for `enable_depth_range`.
 */
  depthRangeMin: float;
/**
 * If `true`, each depth value will be tested to see if it is between `depth_range_min` and `depth_range_max`. If it is outside of these values, it is discarded.
 */
  enableDepthRange: boolean;
/**
 * If `true`, enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If `false`, objects will appear in the order they were drawn (like in Godot's 2D renderer).
 */
  enableDepthTest: boolean;
/**
 * If `true`, writes to the depth buffer whenever the depth test returns `true`. Only works when enable_depth_test is also `true`.
 */
  enableDepthWrite: boolean;
/**
 * If `true`, enables stencil testing. There are separate stencil buffers for front-facing triangles and back-facing triangles. See properties that begin with "front_op" and properties with "back_op" for each.
 */
  enableStencil: boolean;
/**
 * The method used for comparing the previous front stencil value and `front_op_reference`.
 */
  frontOpCompare: int;
/**
 * Selects which bits from the front stencil value will be compared.
 */
  frontOpCompareMask: int;
/**
 * The operation to perform on the stencil buffer for front pixels that pass the stencil test but fail the depth test.
 */
  frontOpDepthFail: int;
/**
 * The operation to perform on the stencil buffer for front pixels that fail the stencil test.
 */
  frontOpFail: int;
/**
 * The operation to perform on the stencil buffer for front pixels that pass the stencil test.
 */
  frontOpPass: int;
/**
 * The value the previous front stencil value will be compared to.
 */
  frontOpReference: int;
/**
 * Selects which bits from the front stencil value will be changed.
 */
  frontOpWriteMask: int;
}
