import type { AABB, Color, GodotArray, GodotDictionary, Mesh, PackedColorArray, PackedFloat32Array, PackedVector2Array, PackedVector3Array, Resource, Transform2D, Transform3D, float, int } from "../index.d.ts";
/**
 * Provides high-performance drawing of a mesh multiple times using GPU instancing.
 * 
 * MultiMesh provides low-level mesh instancing. Drawing thousands of `MeshInstance3D` nodes can be slow, since each object is submitted to the GPU then drawn individually.
 * MultiMesh is much faster as it can draw thousands of instances with a single draw call, resulting in less API overhead.
 * As a drawback, if the instances are too far away from each other, performance may be reduced as every single instance will always render (they are spatially indexed as one, for the whole object).
 * Since instances may have any behavior, the AABB used for visibility must be provided by the user.
 * 
 * **Note:** A MultiMesh is a single object, therefore the same maximum lights per object restriction applies. This means, that once the maximum lights are consumed by one or more instances, the rest of the MultiMesh instances will **not** receive any lighting.
 * 
 * **Note:** Blend Shapes will be ignored if used in a MultiMesh.
 */
export class MultiMesh extends Resource {
  buffer: PackedFloat32Array;
/**
 * Array containing each `Color` used by all instances of this mesh.
 * @deprecated Accessing this property is very slow. Use `set_instance_color` and `get_instance_color` instead.
 */
  colorArray: PackedColorArray;
/**
 * Custom AABB for this MultiMesh resource. Setting this manually prevents costly runtime AABB recalculations.
 */
  customAabb: AABB;
/**
 * Array containing each custom data value used by all instances of this mesh, as a `PackedColorArray`.
 * @deprecated Accessing this property is very slow. Use `set_instance_custom_data` and `get_instance_custom_data` instead.
 */
  customDataArray: PackedColorArray;
/**
 * Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.
 * By default, all instances are drawn but you can limit this with `visible_instance_count`.
 */
  instanceCount: int;
/**
 * `Mesh` resource to be instanced.
 * The looks of the individual instances can be modified using `set_instance_color` and `set_instance_custom_data`.
 */
  mesh: Mesh;
/**
 * Choose whether to use an interpolation method that favors speed or quality.
 * When using low physics tick rates (typically below 20) or high rates of object rotation, you may get better results from the high quality setting.
 * 
 * **Note:** Fast quality does not equate to low quality. Except in the special cases mentioned above, the quality should be comparable to high quality.
 */
  physicsInterpolationQuality: int;
/**
 * Array containing each `Transform2D` value used by all instances of this mesh, as a `PackedVector2Array`. Each transform is divided into 3 `Vector2` values corresponding to the transforms' `x`, `y`, and `origin`.
 * @deprecated Accessing this property is very slow. Use `set_instance_transform_2d` and `get_instance_transform_2d` instead.
 */
  transform2dArray: PackedVector2Array;
/**
 * Array containing each `Transform3D` value used by all instances of this mesh, as a `PackedVector3Array`. Each transform is divided into 4 `Vector3` values corresponding to the transforms' `x`, `y`, `z`, and `origin`.
 * @deprecated Accessing this property is very slow. Use `set_instance_transform` and `get_instance_transform` instead.
 */
  transformArray: PackedVector3Array;
/**
 * Format of transform used to transform mesh, either 2D or 3D.
 */
  transformFormat: int;
/**
 * If `true`, the `MultiMesh` will use color data (see `set_instance_color`). Can only be set when `instance_count` is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`.
 */
  useColors: boolean;
/**
 * If `true`, the `MultiMesh` will use custom data (see `set_instance_custom_data`). Can only be set when `instance_count` is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`.
 */
  useCustomData: boolean;
/**
 * Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers.
 */
  visibleInstanceCount: int;
/**
 * Returns the visibility axis-aligned bounding box in local space.
 * @returns AABB
 */
  getAabb(): AABB;
/**
 * Gets a specific instance's color multiplier.
 * @param instance int
 * @returns Color
 */
  getInstanceColor(instance: int): Color;
/**
 * Returns the custom data that has been set for a specific instance.
 * @param instance int
 * @returns Color
 */
  getInstanceCustomData(instance: int): Color;
/**
 * Returns the `Transform3D` of a specific instance.
 * @param instance int
 * @returns Transform3D
 */
  getInstanceTransform(instance: int): Transform3D;
/**
 * Returns the `Transform2D` of a specific instance.
 * @param instance int
 * @returns Transform2D
 */
  getInstanceTransform2d(instance: int): Transform2D;
/**
 * When using *physics interpolation*, this function allows you to prevent interpolation on an instance in the current physics tick.
 * This allows you to move instances instantaneously, and should usually be used when initially placing an instance such as a bullet to prevent graphical glitches.
 * @param instance int
 */
  resetInstancePhysicsInterpolation(instance: int): void;
/**
 * An alternative to setting the `buffer` property, which can be used with *physics interpolation*. This method takes two arrays, and can set the data for the current and previous tick in one go. The renderer will automatically interpolate the data at each frame.
 * This is useful for situations where the order of instances may change from physics tick to tick, such as particle systems.
 * When the order of instances is coherent, the simpler alternative of setting `buffer` can still be used with interpolation.
 * @param bufferCurr PackedFloat32Array
 * @param bufferPrev PackedFloat32Array
 */
  setBufferInterpolated(bufferCurr: PackedFloat32Array, bufferPrev: PackedFloat32Array): void;
/**
 * Sets the color of a specific instance by *multiplying* the mesh's existing vertex colors. This allows for different color tinting per instance.
 * 
 * **Note:** Each component is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.
 * For the color to take effect, ensure that `use_colors` is `true` on the `MultiMesh` and `BaseMaterial3D.vertex_color_use_as_albedo` is `true` on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white (`Color(1, 1, 1)`).
 * @param instance int
 * @param color Color
 */
  setInstanceColor(instance: int, color: Color): void;
/**
 * Sets custom data for a specific instance. `custom_data` is a `Color` type only to contain 4 floating-point numbers.
 * 
 * **Note:** Each number is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.
 * For the custom data to be used, ensure that `use_custom_data` is `true`.
 * This custom instance data has to be manually accessed in your custom shader using `INSTANCE_CUSTOM`.
 * @param instance int
 * @param customData Color
 */
  setInstanceCustomData(instance: int, customData: Color): void;
/**
 * Sets the `Transform3D` for a specific instance.
 * @param instance int
 * @param transform Transform3D
 */
  setInstanceTransform(instance: int, transform: Transform3D): void;
/**
 * Sets the `Transform2D` for a specific instance.
 * @param instance int
 * @param transform Transform2D
 */
  setInstanceTransform2d(instance: int, transform: Transform2D): void;
/**
 * Use this when using 2D transforms.
 */
  static readonly TRANSFORM_2D: int;
/**
 * Use this when using 3D transforms.
 */
  static readonly TRANSFORM_3D: int;
/**
 * Always interpolate using Basis lerping, which can produce warping artifacts in some situations.
 */
  static readonly INTERP_QUALITY_FAST: int;
/**
 * Attempt to interpolate using Basis slerping (spherical linear interpolation) where possible, otherwise fall back to lerping.
 */
  static readonly INTERP_QUALITY_HIGH: int;
}
