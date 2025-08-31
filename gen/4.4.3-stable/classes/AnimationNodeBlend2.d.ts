import type { AnimationNodeSync, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * Blends two animations linearly inside of an `AnimationNodeBlendTree`.
 * 
 * A resource to add to an `AnimationNodeBlendTree`. Blends two animations linearly based on the amount value.
 * In general, the blend value should be in the `[0.0, 1.0]` range. Values outside of this range can blend amplified or inverted animations, however, `AnimationNodeAdd2` works better for this purpose.
 */
export class AnimationNodeBlend2 extends AnimationNodeSync {
}
