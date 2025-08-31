import type { GodotArray, GodotDictionary, VisualShaderNodeVarying, float, int } from "../index.d.ts";
/**
 * A visual shader node that gets a value of a varying.
 * 
 * Outputs a value of a varying defined in the shader. You need to first create a varying that can be used in the given function, e.g. varying getter in Fragment shader requires a varying with mode set to `VisualShader.VARYING_MODE_VERTEX_TO_FRAG_LIGHT`.
 */
export class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
}
