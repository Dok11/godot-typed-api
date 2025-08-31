import type { GodotArray, GodotDictionary, TextureLayered, VisualShaderNodeSample3D, float, int } from "../index.d.ts";
/**
 * A 2D texture uniform array to be used within the visual shader graph.
 * 
 * Translated to `uniform sampler2DArray` in the shader language.
 */
export class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
/**
 * A source texture array. Used if `VisualShaderNodeSample3D.source` is set to `VisualShaderNodeSample3D.SOURCE_TEXTURE`.
 */
  textureArray: TextureLayered;
}
