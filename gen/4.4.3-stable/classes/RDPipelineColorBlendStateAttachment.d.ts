import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Pipeline color blend state attachment (used by `RenderingDevice`).
 * 
 * Controls how blending between source and destination fragments is performed when using `RenderingDevice`.
 * For reference, this is how common user-facing blend modes are implemented in Godot's 2D renderer:
 * 
 * **Mix:**
 * 
 * 		```gdscript
 * 
 * 		var attachment = RDPipelineColorBlendStateAttachment.new()
 * 		attachment.enable_blend = true
 * 		attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * 		attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * 		attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * 		attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * 		
 * 
 * ```
 * 
 * **Add:**
 * 
 * 		```gdscript
 * 
 * 		var attachment = RDPipelineColorBlendStateAttachment.new()
 * 		attachment.enable_blend = true
 * 		attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * 		attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * 		attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * 		attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * 		
 * 
 * ```
 * 
 * **Subtract:**
 * 
 * 		```gdscript
 * 
 * 		var attachment = RDPipelineColorBlendStateAttachment.new()
 * 		attachment.enable_blend = true
 * 		attachment.alpha_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
 * 		attachment.color_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
 * 		attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * 		attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * 		attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * 		attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * 		
 * 
 * ```
 * 
 * **Multiply:**
 * 
 * 		```gdscript
 * 
 * 		var attachment = RDPipelineColorBlendStateAttachment.new()
 * 		attachment.enable_blend = true
 * 		attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_DST_COLOR
 * 		attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
 * 		attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_DST_ALPHA
 * 		attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
 * 		
 * 
 * ```
 * 
 * **Pre-multiplied alpha:**
 * 
 * 		```gdscript
 * 
 * 		var attachment = RDPipelineColorBlendStateAttachment.new()
 * 		attachment.enable_blend = true
 * 		attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * 		attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * 		attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * 		attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * 		attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * 		
 * 
 * ```
 */
export class RDPipelineColorBlendStateAttachment extends RefCounted {
/**
 * The blend mode to use for the alpha channel.
 */
  alphaBlendOp: int;
/**
 * The blend mode to use for the red/green/blue color channels.
 */
  colorBlendOp: int;
/**
 * Controls how the blend factor for the alpha channel is determined based on the destination's fragments.
 */
  dstAlphaBlendFactor: int;
/**
 * Controls how the blend factor for the color channels is determined based on the destination's fragments.
 */
  dstColorBlendFactor: int;
/**
 * If `true`, performs blending between the source and destination according to the factors defined in `src_color_blend_factor`, `dst_color_blend_factor`, `src_alpha_blend_factor` and `dst_alpha_blend_factor`. The blend modes `color_blend_op` and `alpha_blend_op` are also taken into account, with `write_r`, `write_g`, `write_b` and `write_a` controlling the output.
 */
  enableBlend: boolean;
/**
 * Controls how the blend factor for the alpha channel is determined based on the source's fragments.
 */
  srcAlphaBlendFactor: int;
/**
 * Controls how the blend factor for the color channels is determined based on the source's fragments.
 */
  srcColorBlendFactor: int;
/**
 * If `true`, writes the new alpha channel to the final result.
 */
  writeA: boolean;
/**
 * If `true`, writes the new blue color channel to the final result.
 */
  writeB: boolean;
/**
 * If `true`, writes the new green color channel to the final result.
 */
  writeG: boolean;
/**
 * If `true`, writes the new red color channel to the final result.
 */
  writeR: boolean;
/**
 * Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets `enable_blend` to `true`, `src_color_blend_factor` to `RenderingDevice.BLEND_FACTOR_SRC_ALPHA`, `dst_color_blend_factor` to `RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA`, `src_alpha_blend_factor` to `RenderingDevice.BLEND_FACTOR_SRC_ALPHA` and `dst_alpha_blend_factor` to `RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA`.
 */
  setAsMix(): void;
}
