import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Vertex attribute (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDVertexAttribute extends RefCounted {
/**
 * The way that this attribute's data is interpreted when sent to a shader.
 */
  format: int;
/**
 * The rate at which this attribute is pulled from its vertex buffer.
 */
  frequency: int;
/**
 * The location in the shader that this attribute is bound to.
 */
  location: int;
/**
 * The number of bytes between the start of the vertex buffer and the first instance of this attribute.
 */
  offset: int;
/**
 * The number of bytes between the starts of consecutive instances of this attribute.
 */
  stride: int;
}
