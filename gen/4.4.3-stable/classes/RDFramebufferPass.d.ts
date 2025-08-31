import type { GodotArray, GodotDictionary, PackedInt32Array, RefCounted, float, int } from "../index.d.ts";
/**
 * Framebuffer pass attachment description (used by `RenderingDevice`).
 * 
 * This class contains the list of attachment descriptions for a framebuffer pass. Each points with an index to a previously supplied list of texture attachments.
 * Multipass framebuffers can optimize some configurations in mobile. On desktop, they provide little to no advantage.
 * This object is used by `RenderingDevice`.
 */
export class RDFramebufferPass extends RefCounted {
/**
 * Color attachments in order starting from 0. If this attachment is not used by the shader, pass ATTACHMENT_UNUSED to skip.
 */
  colorAttachments: PackedInt32Array;
/**
 * Depth attachment. ATTACHMENT_UNUSED should be used if no depth buffer is required for this pass.
 */
  depthAttachment: int;
/**
 * Used for multipass framebuffers (more than one render pass). Converts an attachment to an input. Make sure to also supply it properly in the `RDUniform` for the uniform set.
 */
  inputAttachments: PackedInt32Array;
/**
 * Attachments to preserve in this pass (otherwise they are erased).
 */
  preserveAttachments: PackedInt32Array;
/**
 * If the color attachments are multisampled, non-multisampled resolve attachments can be provided.
 */
  resolveAttachments: PackedInt32Array;
/**
 * Attachment is unused.
 */
  static readonly ATTACHMENT_UNUSED: int;
}
