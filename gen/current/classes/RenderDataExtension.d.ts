import type { GodotArray, GodotDictionary, RID, RenderData, RenderSceneBuffers, RenderSceneData, float, int } from "../index.d.ts";
/**
 * This class allows for a RenderData implementation to be made in GDExtension.
 * 
 * This class allows for a RenderData implementation to be made in GDExtension.
 */
export class RenderDataExtension extends RenderData {
/**
 * Implement this in GDExtension to return the `RID` for the implementation's camera attributes object.
 * @returns RID
 */
  private getCameraAttributes(): RID;
/**
 * Implement this in GDExtension to return the `RID` of the implementation's environment object.
 * @returns RID
 */
  private getEnvironment(): RID;
/**
 * Implement this in GDExtension to return the implementation's `RenderSceneBuffers` object.
 * @returns RenderSceneBuffers
 */
  private getRenderSceneBuffers(): RenderSceneBuffers;
/**
 * Implement this in GDExtension to return the implementation's `RenderSceneDataExtension` object.
 * @returns RenderSceneData
 */
  private getRenderSceneData(): RenderSceneData;
}
