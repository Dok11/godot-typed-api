import type { GodotArray, GodotDictionary, Texture3D, VisualShaderNodeSample3D, float, int } from "../index.d.ts";
/**
 * Performs a 3D texture lookup within the visual shader graph.
 * 
 * Performs a lookup operation on the provided texture, with support for multiple texture sources to choose from.
 */
export class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
/**
 * A source texture. Used if `VisualShaderNodeSample3D.source` is set to `VisualShaderNodeSample3D.SOURCE_TEXTURE`.
 */
  texture: Texture3D;
}
