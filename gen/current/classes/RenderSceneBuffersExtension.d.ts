import type { GodotArray, GodotDictionary, RenderSceneBuffers, RenderSceneBuffersConfiguration, float, int } from "../index.d.ts";
/**
 * This class allows for a RenderSceneBuffer implementation to be made in GDExtension.
 * 
 * This class allows for a RenderSceneBuffer implementation to be made in GDExtension.
 */
export class RenderSceneBuffersExtension extends RenderSceneBuffers {
/**
 * Implement this in GDExtension to handle the (re)sizing of a viewport.
 * @param config RenderSceneBuffersConfiguration
 */
  private configure(config: RenderSceneBuffersConfiguration): void;
/**
 * Implement this in GDExtension to change the anisotropic filtering level.
 * @param anisotropicFilteringLevel int
 */
  private setAnisotropicFilteringLevel(anisotropicFilteringLevel: int): void;
/**
 * Implement this in GDExtension to record a new FSR sharpness value.
 * @param fsrSharpness float
 */
  private setFsrSharpness(fsrSharpness: float): void;
/**
 * Implement this in GDExtension to change the texture mipmap bias.
 * @param textureMipmapBias float
 */
  private setTextureMipmapBias(textureMipmapBias: float): void;
/**
 * Implement this in GDExtension to react to the debanding flag changing.
 * @param useDebanding boolean
 */
  private setUseDebanding(useDebanding: boolean): void;
}
