import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Pipeline multisample state (used by `RenderingDevice`).
 * 
 * `RDPipelineMultisampleState` is used to control how multisample or supersample antialiasing is being performed when rendering using `RenderingDevice`.
 */
export class RDPipelineMultisampleState extends RefCounted {
/**
 * If `true`, alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing.
 */
  enableAlphaToCoverage: boolean;
/**
 * If `true`, alpha is forced to either `0.0` or `1.0`. This allows hardening the edges of antialiased alpha transparencies. Only relevant if `enable_alpha_to_coverage` is `true`.
 */
  enableAlphaToOne: boolean;
/**
 * If `true`, enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also `min_sample_shading`. See the per-sample shading Vulkan documentation (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading) for more details.
 */
  enableSampleShading: boolean;
/**
 * The multiplier of `sample_count` that determines how many samples are performed for each fragment. Must be between `0.0` and `1.0` (inclusive). Only effective if `enable_sample_shading` is `true`. If `min_sample_shading` is `1.0`, fragment invocation must only read from the coverage index sample. Tile image access must not be used if `enable_sample_shading` is *not* `1.0`.
 */
  minSampleShading: float;
/**
 * The number of MSAA samples (or SSAA samples if `enable_sample_shading` is `true`) to perform. Higher values result in better antialiasing, at the cost of performance.
 */
  sampleCount: int;
/**
 * The sample mask array. See the sample mask Vulkan documentation (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask) for more details.
 */
  sampleMasks: int[];
}
