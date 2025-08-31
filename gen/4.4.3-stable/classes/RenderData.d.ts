import type { GodotArray, GodotDictionary, Object, RID, RenderSceneBuffers, RenderSceneData, float, int } from "../index.d.ts";
/**
 * Abstract render data object, holds frame data related to rendering a single frame of a viewport.
 * 
 * Abstract render data object, exists for the duration of rendering a single viewport.
 * 
 * **Note:** This is an internal rendering server object, do not instantiate this from script.
 */
export class RenderData extends Object {
/**
 * Returns the `RID` of the camera attributes object in the `RenderingServer` being used to render this viewport.
 * @returns RID
 */
  getCameraAttributes(): RID;
/**
 * Returns the `RID` of the environment object in the `RenderingServer` being used to render this viewport.
 * @returns RID
 */
  getEnvironment(): RID;
/**
 * Returns the `RenderSceneBuffers` object managing the scene buffers for rendering this viewport.
 * @returns RenderSceneBuffers
 */
  getRenderSceneBuffers(): RenderSceneBuffers;
/**
 * Returns the `RenderSceneData` object managing this frames scene data.
 * @returns RenderSceneData
 */
  getRenderSceneData(): RenderSceneData;
}
