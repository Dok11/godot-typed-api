import type { Color, GodotArray, GodotDictionary, Vector3, VisualInstance3D, float, int } from "../index.d.ts";
/**
 * Captures its surroundings to create fast, accurate reflections from a given point.
 * 
 * Captures its surroundings as a cubemap, and stores versions of it with increasing levels of blur to simulate different material roughnesses.
 * The `ReflectionProbe` is used to create high-quality reflections at a low performance cost (when `update_mode` is `UPDATE_ONCE`). `ReflectionProbe`s can be blended together and with the rest of the scene smoothly. `ReflectionProbe`s can also be combined with `VoxelGI`, SDFGI (`Environment.sdfgi_enabled`) and screen-space reflections (`Environment.ssr_enabled`) to get more accurate reflections in specific areas. `ReflectionProbe`s render all objects within their `cull_mask`, so updating them can be quite expensive. It is best to update them once with the important static objects and then leave them as-is.
 * 
 * **Note:** Unlike `VoxelGI` and SDFGI, `ReflectionProbe`s only source their environment from a `WorldEnvironment` node. If you specify an `Environment` resource within a `Camera3D` node, it will be ignored by the `ReflectionProbe`. This can lead to incorrect lighting within the `ReflectionProbe`.
 * 
 * **Note:** Reflection probes are only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, only 8 reflection probes can be displayed on each mesh resource. Attempting to display more than 8 reflection probes on a single mesh resource will result in reflection probes flickering in and out as the camera moves.
 * 
 * **Note:** When using the Mobile rendering method, reflection probes will only correctly affect meshes whose visibility AABB intersects with the reflection probe's AABB. If using a shader to deform the mesh in a way that makes it go outside its AABB, `GeometryInstance3D.extra_cull_margin` must be increased on the mesh. Otherwise, the reflection probe may not be visible on the mesh.
 */
export class ReflectionProbe extends VisualInstance3D {
/**
 * The custom ambient color to use within the `ReflectionProbe`'s box defined by its `size`. Only effective if `ambient_mode` is `AMBIENT_COLOR`.
 */
  ambientColor: Color;
/**
 * The custom ambient color energy to use within the `ReflectionProbe`'s box defined by its `size`. Only effective if `ambient_mode` is `AMBIENT_COLOR`.
 */
  ambientColorEnergy: float;
/**
 * The ambient color to use within the `ReflectionProbe`'s box defined by its `size`. The ambient color will smoothly blend with other `ReflectionProbe`s and the rest of the scene (outside the `ReflectionProbe`'s box defined by its `size`).
 */
  ambientMode: int;
/**
 * Defines the distance in meters over which a probe blends into the scene.
 */
  blendDistance: float;
/**
 * If `true`, enables box projection. This makes reflections look more correct in rectangle-shaped rooms by offsetting the reflection center depending on the camera's location.
 * 
 * **Note:** To better fit rectangle-shaped rooms that are not aligned to the grid, you can rotate the `ReflectionProbe` node.
 */
  boxProjection: boolean;
/**
 * Sets the cull mask which determines what objects are drawn by this probe. Every `VisualInstance3D` with a layer included in this cull mask will be rendered by the probe. It is best to only include large objects which are likely to take up a lot of space in the reflection in order to save on rendering cost.
 * This can also be used to prevent an object from reflecting upon itself (for instance, a `ReflectionProbe` centered on a vehicle).
 */
  cullMask: int;
/**
 * If `true`, computes shadows in the reflection probe. This makes the reflection probe slower to render; you may want to disable this if using the `UPDATE_ALWAYS` `update_mode`.
 */
  enableShadows: boolean;
/**
 * Defines the reflection intensity. Intensity modulates the strength of the reflection.
 */
  intensity: float;
/**
 * If `true`, reflections will ignore sky contribution.
 */
  interior: boolean;
/**
 * The maximum distance away from the `ReflectionProbe` an object can be before it is culled. Decrease this to improve performance, especially when using the `UPDATE_ALWAYS` `update_mode`.
 * 
 * **Note:** The maximum reflection distance is always at least equal to the probe's extents. This means that decreasing `max_distance` will not always cull objects from reflections, especially if the reflection probe's box defined by its `size` is already large.
 */
  maxDistance: float;
/**
 * The automatic LOD bias to use for meshes rendered within the `ReflectionProbe` (this is analog to `Viewport.mesh_lod_threshold`). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase `mesh_lod_threshold` to improve performance at the cost of geometry detail, especially when using the `UPDATE_ALWAYS` `update_mode`.
 * 
 * **Note:** `mesh_lod_threshold` does not affect `GeometryInstance3D` visibility ranges (also known as "manual" LOD or hierarchical LOD).
 */
  meshLodThreshold: float;
/**
 * Sets the origin offset to be used when this `ReflectionProbe` is in `box_projection` mode. This can be set to a non-zero value to ensure a reflection fits a rectangle-shaped room, while reducing the number of objects that "get in the way" of the reflection.
 */
  originOffset: Vector3;
/**
 * Sets the reflection mask which determines what objects have reflections applied from this probe. Every `VisualInstance3D` with a layer included in this reflection mask will have reflections applied from this probe. See also `cull_mask`, which can be used to exclude objects from appearing in the reflection while still making them affected by the `ReflectionProbe`.
 */
  reflectionMask: int;
/**
 * The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.
 * 
 * **Note:** To better fit areas that are not aligned to the grid, you can rotate the `ReflectionProbe` node.
 */
  size: Vector3;
/**
 * Sets how frequently the `ReflectionProbe` is updated. Can be `UPDATE_ONCE` or `UPDATE_ALWAYS`.
 */
  updateMode: int;
/**
 * Update the probe once on the next frame (recommended for most objects). The corresponding radiance map will be generated over the following six frames. This takes more time to update than `UPDATE_ALWAYS`, but it has a lower performance cost and can result in higher-quality reflections. The ReflectionProbe is updated when its transform changes, but not when nearby geometry changes. You can force a `ReflectionProbe` update by moving the `ReflectionProbe` slightly in any direction.
 */
  static readonly UPDATE_ONCE: int;
/**
 * Update the probe every frame. This provides better results for fast-moving dynamic objects (such as cars). However, it has a significant performance cost. Due to the cost, it's recommended to only use one ReflectionProbe with `UPDATE_ALWAYS` at most per scene. For all other use cases, use `UPDATE_ONCE`.
 */
  static readonly UPDATE_ALWAYS: int;
/**
 * Do not apply any ambient lighting inside the `ReflectionProbe`'s box defined by its `size`.
 */
  static readonly AMBIENT_DISABLED: int;
/**
 * Apply automatically-sourced environment lighting inside the `ReflectionProbe`'s box defined by its `size`.
 */
  static readonly AMBIENT_ENVIRONMENT: int;
/**
 * Apply custom ambient lighting inside the `ReflectionProbe`'s box defined by its `size`. See `ambient_color` and `ambient_color_energy`.
 */
  static readonly AMBIENT_COLOR: int;
}
