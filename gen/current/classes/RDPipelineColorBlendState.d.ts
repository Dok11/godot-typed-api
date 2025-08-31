import type { Color, GodotArray, GodotDictionary, RDPipelineColorBlendStateAttachment, RefCounted, float, int } from "../index.d.ts";
/**
 * Pipeline color blend state (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDPipelineColorBlendState extends RefCounted {
/**
 * The attachments that are blended together.
 */
  attachments: RDPipelineColorBlendStateAttachment[];
/**
 * The constant color to blend with. See also `RenderingDevice.draw_list_set_blend_constants`.
 */
  blendConstant: Color;
/**
 * If `true`, performs the logic operation defined in `logic_op`.
 */
  enableLogicOp: boolean;
/**
 * The logic operation to perform for blending. Only effective if `enable_logic_op` is `true`.
 */
  logicOp: int;
}
