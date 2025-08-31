import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Attachment format (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDAttachmentFormat extends RefCounted {
/**
 * The attachment's data format.
 */
  format: int;
/**
 * The number of samples used when sampling the attachment.
 */
  samples: int;
/**
 * The attachment's usage flags, which determine what can be done with it.
 */
  usageFlags: int;
}
