import type { CompositorEffect, GodotArray, GodotDictionary, Resource, float, int } from "../index.d.ts";
/**
 * Stores attributes used to customize how a Viewport is rendered.
 * 
 * The compositor resource stores attributes used to customize how a `Viewport` is rendered.
 */
export class Compositor extends Resource {
/**
 * The custom `CompositorEffect`s that are applied during rendering of viewports using this compositor.
 */
  compositorEffects: CompositorEffect[];
}
