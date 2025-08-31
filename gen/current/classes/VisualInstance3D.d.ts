import type { AABB, GodotArray, GodotDictionary, Node3D, RID, float, int } from "../index.d.ts";
/**
 * Parent of all visual 3D nodes.
 * 
 * The `VisualInstance3D` is used to connect a resource to a visual representation. All visual 3D nodes inherit from the `VisualInstance3D`. In general, you should not access the `VisualInstance3D` properties directly as they are accessed and managed by the nodes that inherit from `VisualInstance3D`. `VisualInstance3D` is the node representation of the `RenderingServer` instance.
 */
export class VisualInstance3D extends Node3D {
/**
 * The render layer(s) this `VisualInstance3D` is drawn on.
 * This object will only be visible for `Camera3D`s whose cull mask includes any of the render layers this `VisualInstance3D` is set to.
 * For `Light3D`s, this can be used to control which `VisualInstance3D`s are affected by a specific light. For `GPUParticles3D`, this can be used to control which particles are effected by a specific attractor. For `Decal`s, this can be used to control which `VisualInstance3D`s are affected by a specific decal.
 * To adjust `layers` more easily using a script, use `get_layer_mask_value` and `set_layer_mask_value`.
 * 
 * **Note:** `VoxelGI`, SDFGI and `LightmapGI` will always take all layers into account to determine what contributes to global illumination. If this is an issue, set `GeometryInstance3D.gi_mode` to `GeometryInstance3D.GI_MODE_DISABLED` for meshes and `Light3D.light_bake_mode` to `Light3D.BAKE_DISABLED` for lights to exclude them from global illumination.
 */
  layers: int;
/**
 * The amount by which the depth of this `VisualInstance3D` will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the `VisualInstance3D` reliably draw on top of other `VisualInstance3D`s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this `VisualInstance3D` and the other nearby `VisualInstance3D`s.
 */
  sortingOffset: float;
/**
 * If `true`, the object is sorted based on the `AABB` center. The object will be sorted based on the global position otherwise.
 * The `AABB` center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with `GPUParticles3D` and `CPUParticles3D`.
 */
  sortingUseAabbCenter: boolean;
/**
 * Returns the `AABB` (also known as the bounding box) for this `VisualInstance3D`.
 * @returns AABB
 */
  getAabb(): AABB;
/**
 * @returns AABB
 */
  private getAabb(): AABB;
/**
 * Returns the RID of the resource associated with this `VisualInstance3D`. For example, if the Node is a `MeshInstance3D`, this will return the RID of the associated `Mesh`.
 * @returns RID
 */
  getBase(): RID;
/**
 * Returns the RID of this instance. This RID is the same as the RID returned by `RenderingServer.instance_create`. This RID is needed if you want to call `RenderingServer` functions directly on this `VisualInstance3D`.
 * @returns RID
 */
  getInstance(): RID;
/**
 * Returns whether or not the specified layer of the `layers` is enabled, given a `layer_number` between 1 and 20.
 * @param layerNumber int
 * @returns boolean
 */
  getLayerMaskValue(layerNumber: int): boolean;
/**
 * Sets the resource that is instantiated by this `VisualInstance3D`, which changes how the engine handles the `VisualInstance3D` under the hood. Equivalent to `RenderingServer.instance_set_base`.
 * @param base RID
 */
  setBase(base: RID): void;
/**
 * Based on `value`, enables or disables the specified layer in the `layers`, given a `layer_number` between 1 and 20.
 * @param layerNumber int
 * @param value boolean
 */
  setLayerMaskValue(layerNumber: int, value: boolean): void;
}
