import type { GodotArray, GodotDictionary, Projection, RID, RenderSceneData, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * This class allows for a RenderSceneData implementation to be made in GDExtension.
 * 
 * This class allows for a RenderSceneData implementation to be made in GDExtension.
 */
export class RenderSceneDataExtension extends RenderSceneData {
/**
 * Implement this in GDExtension to return the camera `Projection`.
 * @returns Projection
 */
  private getCamProjection(): Projection;
/**
 * Implement this in GDExtension to return the camera `Transform3D`.
 * @returns Transform3D
 */
  private getCamTransform(): Transform3D;
/**
 * Implement this in GDExtension to return the `RID` of the uniform buffer containing the scene data as a UBO.
 * @returns RID
 */
  private getUniformBuffer(): RID;
/**
 * Implement this in GDExtension to return the view count.
 * @returns int
 */
  private getViewCount(): int;
/**
 * Implement this in GDExtension to return the eye offset for the given `view`.
 * @param view int
 * @returns Vector3
 */
  private getViewEyeOffset(view: int): Vector3;
/**
 * Implement this in GDExtension to return the view `Projection` for the given `view`.
 * @param view int
 * @returns Projection
 */
  private getViewProjection(view: int): Projection;
}
