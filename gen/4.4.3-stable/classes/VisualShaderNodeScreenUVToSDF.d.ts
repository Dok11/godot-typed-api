import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A function to convert screen UV to an SDF (signed-distance field), to be used within the visual shader graph.
 * 
 * Translates to `screen_uv_to_sdf(uv)` in the shader language. If the UV port isn't connected, `SCREEN_UV` is used instead.
 */
export class VisualShaderNodeScreenUVToSDF extends VisualShaderNode {
}
