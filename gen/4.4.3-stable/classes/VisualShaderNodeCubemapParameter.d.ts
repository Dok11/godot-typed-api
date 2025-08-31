import type { GodotArray, GodotDictionary, VisualShaderNodeTextureParameter, float, int } from "../index.d.ts";
/**
 * A `Cubemap` parameter node to be used within the visual shader graph.
 * 
 * Translated to `uniform samplerCube` in the shader language. The output value can be used as port for `VisualShaderNodeCubemap`.
 */
export class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
}
