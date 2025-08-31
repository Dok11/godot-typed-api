import type { CameraAttributes, GodotArray, GodotDictionary, Node, Vector3, VisualInstance3D, VoxelGIData, float, int } from "../index.d.ts";
/**
 * Real-time global illumination (GI) probe.
 * 
 * `VoxelGI`s are used to provide high-quality real-time indirect light and reflections to scenes. They precompute the effect of objects that emit light and the effect of static geometry to simulate the behavior of complex light in real-time. `VoxelGI`s need to be baked before having a visible effect. However, once baked, dynamic objects will receive light from them. Furthermore, lights can be fully dynamic or baked.
 * 
 * **Note:** `VoxelGI` is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 * 
 * **Procedural generation:** `VoxelGI` can be baked in an exported project, which makes it suitable for procedurally generated or user-built levels as long as all the geometry is generated in advance. For games where geometry is generated at any time during gameplay, SDFGI is more suitable (see `Environment.sdfgi_enabled`).
 * 
 * **Performance:** `VoxelGI` is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider `LightmapGI` instead). To improve performance, adjust `ProjectSettings.rendering/global_illumination/voxel_gi/quality` and enable `ProjectSettings.rendering/global_illumination/gi/use_half_resolution` in the Project Settings. To provide a fallback for low-end hardware, consider adding an option to disable `VoxelGI` in your project's options menus. A `VoxelGI` node can be disabled by hiding it.
 * 
 * **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh. To further prevent light leaks, you can also strategically place temporary `MeshInstance3D` nodes with their `GeometryInstance3D.gi_mode` set to `GeometryInstance3D.GI_MODE_STATIC`. These temporary nodes can then be hidden after baking the `VoxelGI` node.
 */
export class VoxelGI extends VisualInstance3D {
/**
 * The `CameraAttributes` resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the `VoxelGI` will have banding artifacts or may have over-exposure artifacts.
 */
  cameraAttributes: CameraAttributes;
/**
 * The `VoxelGIData` resource that holds the data for this `VoxelGI`.
 */
  data: VoxelGIData;
/**
 * The size of the area covered by the `VoxelGI`. If you make the size larger without increasing the subdivisions with `subdiv`, the size of each cell will increase and result in lower detailed lighting.
 * 
 * **Note:** Size is clamped to 1.0 unit or more on each axis.
 */
  size: Vector3;
/**
 * Number of times to subdivide the grid that the `VoxelGI` operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance.
 */
  subdiv: int;
/**
 * Bakes the effect from all `GeometryInstance3D`s marked with `GeometryInstance3D.GI_MODE_STATIC` and `Light3D`s marked with either `Light3D.BAKE_STATIC` or `Light3D.BAKE_DYNAMIC`. If `create_visual_debug` is `true`, after baking the light, this will generate a `MultiMesh` that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the `VoxelGI`'s data and debug any issues that may be occurring.
 * 
 * **Note:** `bake` works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a `VoxelGI` node generally takes from 5 to 20 seconds in most scenes. Reducing `subdiv` can speed up baking.
 * 
 * **Note:** `GeometryInstance3D`s and `Light3D`s must be fully ready before `bake` is called. If you are procedurally creating those and some meshes or lights are missing from your baked `VoxelGI`, use `call_deferred("bake")` instead of calling `bake` directly.
 * @param fromNode Node (optional, default: null)
 * @param createVisualDebug boolean (optional, default: false)
 */
  bake(fromNode?: Node, createVisualDebug?: boolean): void;
/**
 * Calls `bake` with `create_visual_debug` enabled.
 */
  debugBake(): void;
/**
 * Use 64 subdivisions. This is the lowest quality setting, but the fastest. Use it if you can, but especially use it on lower-end hardware.
 */
  static readonly SUBDIV_64: int;
/**
 * Use 128 subdivisions. This is the default quality setting.
 */
  static readonly SUBDIV_128: int;
/**
 * Use 256 subdivisions.
 */
  static readonly SUBDIV_256: int;
/**
 * Use 512 subdivisions. This is the highest quality setting, but the slowest. On lower-end hardware, this could cause the GPU to stall.
 */
  static readonly SUBDIV_512: int;
/**
 * Represents the size of the `Subdiv` enum.
 */
  static readonly SUBDIV_MAX: int;
}
