import type { GodotArray, GodotDictionary, Object, Projection, RID, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Abstract render data object, holds scene data related to rendering a single frame of a viewport.
 * 
 * Abstract scene data object, exists for the duration of rendering a single viewport.
 * 
 * **Note:** This is an internal rendering server object, do not instantiate this from script.
 */
export class RenderSceneData extends Object {
/**
 * Returns the camera projection used to render this frame.
 * 
 * **Note:** If more than one view is rendered, this will return a combined projection.
 * @returns Projection
 */
  getCamProjection(): Projection;
/**
 * Returns the camera transform used to render this frame.
 * 
 * **Note:** If more than one view is rendered, this will return a centered transform.
 * @returns Transform3D
 */
  getCamTransform(): Transform3D;
/**
 * Return the `RID` of the uniform buffer containing the scene data as a UBO.
 * @returns RID
 */
  getUniformBuffer(): RID;
/**
 * Returns the number of views being rendered.
 * @returns int
 */
  getViewCount(): int;
/**
 * Returns the eye offset per view used to render this frame. This is the offset between our camera transform and the eye transform.
 * @param view int
 * @returns Vector3
 */
  getViewEyeOffset(view: int): Vector3;
/**
 * Returns the view projection per view used to render this frame.
 * 
 * **Note:** If a single view is rendered, this returns the camera projection. If more than one view is rendered, this will return a projection for the given view including the eye offset.
 * @param view int
 * @returns Projection
 */
  getViewProjection(view: int): Projection;
}
