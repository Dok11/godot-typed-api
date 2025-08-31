import type { Callable, Color, GodotArray, GodotDictionary, Object, PackedByteArray, PackedColorArray, PackedInt64Array, RDAttachmentFormat, RDFramebufferPass, RDPipelineColorBlendState, RDPipelineDepthStencilState, RDPipelineMultisampleState, RDPipelineRasterizationState, RDPipelineSpecializationConstant, RDSamplerState, RDShaderSPIRV, RDShaderSource, RDTextureFormat, RDTextureView, RDUniform, RDVertexAttribute, RID, Rect2, Vector2i, Vector3, float, int } from "../index.d.ts";
/**
 * Abstraction for working with modern low-level graphics APIs.
 * 
 * `RenderingDevice` is an abstraction for working with modern low-level graphics APIs such as Vulkan. Compared to `RenderingServer` (which works with Godot's own rendering subsystems), `RenderingDevice` is much lower-level and allows working more directly with the underlying graphics APIs. `RenderingDevice` is used in Godot to provide support for several modern low-level graphics APIs while reducing the amount of code duplication required. `RenderingDevice` can also be used in your own projects to perform things that are not exposed by `RenderingServer` or high-level nodes, such as using compute shaders.
 * On startup, Godot creates a global `RenderingDevice` which can be retrieved using `RenderingServer.get_rendering_device`. This global `RenderingDevice` performs drawing to the screen.
 * 
 * **Local RenderingDevices:** Using `RenderingServer.create_local_rendering_device`, you can create "secondary" rendering devices to perform drawing and GPU compute operations on separate threads.
 * 
 * **Note:** `RenderingDevice` assumes intermediate knowledge of modern graphics APIs such as Vulkan, Direct3D 12, Metal or WebGPU. These graphics APIs are lower-level than OpenGL or Direct3D 11, requiring you to perform what was previously done by the graphics driver itself. If you have difficulty understanding the concepts used in this class, follow the Vulkan Tutorial (https://vulkan-tutorial.com/) or Vulkan Guide (https://vkguide.dev/). It's recommended to have existing modern OpenGL or Direct3D 11 knowledge before attempting to learn a low-level graphics API.
 * 
 * **Note:** `RenderingDevice` is not available when running in headless mode or when using the Compatibility rendering method.
 */
export class RenderingDevice extends Object {
/**
 * This method does nothing.
 * @param from_ int (optional, default: 32767)
 * @param to int (optional, default: 32767)
 * @deprecated Barriers are automatically inserted by RenderingDevice.
 */
  barrier(from_?: int, to?: int): void;
/**
 * Clears the contents of the `buffer`, clearing `size_bytes` bytes, starting at `offset`.
 * Prints an error if:
 * - the size isn't a multiple of four
 * - the region specified by `offset` + `size_bytes` exceeds the buffer
 * - a draw list is currently active (created by `draw_list_begin`)
 * - a compute list is currently active (created by `compute_list_begin`)
 * @param buffer RID
 * @param offset int
 * @param sizeBytes int
 * @returns int
 */
  bufferClear(buffer: RID, offset: int, sizeBytes: int): int;
/**
 * Copies `size` bytes from the `src_buffer` at `src_offset` into `dst_buffer` at `dst_offset`.
 * Prints an error if:
 * - `size` exceeds the size of either `src_buffer` or `dst_buffer` at their corresponding offsets
 * - a draw list is currently active (created by `draw_list_begin`)
 * - a compute list is currently active (created by `compute_list_begin`)
 * @param srcBuffer RID
 * @param dstBuffer RID
 * @param srcOffset int
 * @param dstOffset int
 * @param size int
 * @returns int
 */
  bufferCopy(srcBuffer: RID, dstBuffer: RID, srcOffset: int, dstOffset: int, size: int): int;
/**
 * Returns a copy of the data of the specified `buffer`, optionally `offset_bytes` and `size_bytes` can be set to copy only a portion of the buffer.
 * 
 * **Note:** This method will block the GPU from working until the data is retrieved. Refer to `buffer_get_data_async` for an alternative that returns the data in more performant way.
 * @param buffer RID
 * @param offsetBytes int (optional, default: 0)
 * @param sizeBytes int (optional, default: 0)
 * @returns PackedByteArray
 */
  bufferGetData(buffer: RID, offsetBytes?: int, sizeBytes?: int): PackedByteArray;
/**
 * Asynchronous version of `buffer_get_data`. RenderingDevice will call `callback` in a certain amount of frames with the data the buffer had at the time of the request.
 * 
 * **Note:** At the moment, the delay corresponds to the amount of frames specified by `ProjectSettings.rendering/rendering_device/vsync/frame_queue_size`.
 * 
 * **Note:** Downloading large buffers can have a prohibitive cost for real-time even when using the asynchronous method due to hardware bandwidth limitations. When dealing with large resources, you can adjust settings such as `ProjectSettings.rendering/rendering_device/staging_buffer/block_size_kb` to improve the transfer speed at the cost of extra memory.
 * 
 * 				```gdscript
 * 
 * 				func _buffer_get_data_callback(array):
 * 				    value = array.decode_u32(0)
 * 
 * 				...
 * 
 * 				rd.buffer_get_data_async(buffer, _buffer_get_data_callback)
 * 				
 * 
 * ```
 * @param buffer RID
 * @param callback Callable
 * @param offsetBytes int (optional, default: 0)
 * @param sizeBytes int (optional, default: 0)
 * @returns int
 */
  bufferGetDataAsync(buffer: RID, callback: Callable, offsetBytes?: int, sizeBytes?: int): int;
/**
 * Returns the address of the given `buffer` which can be passed to shaders in any way to access underlying data. Buffer must have been created with this feature enabled.
 * 
 * **Note:** You must check that the GPU supports this functionality by calling `has_feature` with `SUPPORTS_BUFFER_DEVICE_ADDRESS` as a parameter.
 * @param buffer RID
 * @returns int
 */
  bufferGetDeviceAddress(buffer: RID): int;
/**
 * Updates a region of `size_bytes` bytes, starting at `offset`, in the buffer, with the specified `data`.
 * Prints an error if:
 * - the region specified by `offset` + `size_bytes` exceeds the buffer
 * - a draw list is currently active (created by `draw_list_begin`)
 * - a compute list is currently active (created by `compute_list_begin`)
 * @param buffer RID
 * @param offset int
 * @param sizeBytes int
 * @param data PackedByteArray
 * @returns int
 */
  bufferUpdate(buffer: RID, offset: int, sizeBytes: int, data: PackedByteArray): int;
/**
 * Creates a timestamp marker with the specified `name`. This is used for performance reporting with the `get_captured_timestamp_cpu_time`, `get_captured_timestamp_gpu_time` and `get_captured_timestamp_name` methods.
 * @param name string
 */
  captureTimestamp(name: string): void;
/**
 * Raises a Vulkan compute barrier in the specified `compute_list`.
 * @param computeList int
 */
  computeListAddBarrier(computeList: int): void;
/**
 * Starts a list of compute commands created with the `compute_*` methods. The returned value should be passed to other `compute_list_*` functions.
 * Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using `compute_list_end`.
 * A simple compute operation might look like this (code is not a complete example):
 * 
 * 				```gdscript
 * 
 * 				var rd = RenderingDevice.new()
 * 				var compute_list = rd.compute_list_begin()
 * 
 * 				rd.compute_list_bind_compute_pipeline(compute_list, compute_shader_dilate_pipeline)
 * 				rd.compute_list_bind_uniform_set(compute_list, compute_base_uniform_set, 0)
 * 				rd.compute_list_bind_uniform_set(compute_list, dilate_uniform_set, 1)
 * 
 * 				for i in atlas_slices:
 * 				    rd.compute_list_set_push_constant(compute_list, push_constant, push_constant.size())
 * 				    rd.compute_list_dispatch(compute_list, group_size.x, group_size.y, group_size.z)
 * 				    # No barrier, let them run all together.
 * 
 * 				rd.compute_list_end()
 * 				
 * 
 * ```
 * @returns int
 */
  computeListBegin(): int;
/**
 * Tells the GPU what compute pipeline to use when processing the compute list. If the shader has changed since the last time this function was called, Godot will unbind all descriptor sets and will re-bind them inside `compute_list_dispatch`.
 * @param computeList int
 * @param computePipeline RID
 */
  computeListBindComputePipeline(computeList: int, computePipeline: RID): void;
/**
 * Binds the `uniform_set` to this `compute_list`. Godot ensures that all textures in the uniform set have the correct Vulkan access masks. If Godot had to change access masks of textures, it will raise a Vulkan image memory barrier.
 * @param computeList int
 * @param uniformSet RID
 * @param setIndex int
 */
  computeListBindUniformSet(computeList: int, uniformSet: RID, setIndex: int): void;
/**
 * Submits the compute list for processing on the GPU. This is the compute equivalent to `draw_list_draw`.
 * @param computeList int
 * @param xGroups int
 * @param yGroups int
 * @param zGroups int
 */
  computeListDispatch(computeList: int, xGroups: int, yGroups: int, zGroups: int): void;
/**
 * Submits the compute list for processing on the GPU with the given group counts stored in the `buffer` at `offset`. Buffer must have been created with `STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT` flag.
 * @param computeList int
 * @param buffer RID
 * @param offset int
 */
  computeListDispatchIndirect(computeList: int, buffer: RID, offset: int): void;
/**
 * Finishes a list of compute commands created with the `compute_*` methods.
 */
  computeListEnd(): void;
/**
 * Sets the push constant data to `buffer` for the specified `compute_list`. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in `size_bytes` (this can be obtained by calling the `PackedByteArray.size` method on the passed `buffer`).
 * @param computeList int
 * @param buffer PackedByteArray
 * @param sizeBytes int
 */
  computeListSetPushConstant(computeList: int, buffer: PackedByteArray, sizeBytes: int): void;
/**
 * Creates a new compute pipeline. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param shader RID
 * @param specializationConstants RDPipelineSpecializationConstant[] (optional, default: [])
 * @returns RID
 */
  computePipelineCreate(shader: RID, specializationConstants?: RDPipelineSpecializationConstant[]): RID;
/**
 * Returns `true` if the compute pipeline specified by the `compute_pipeline` RID is valid, `false` otherwise.
 * @param computePipeline RID
 * @returns boolean
 */
  computePipelineIsValid(computePipeline: RID): boolean;
/**
 * Create a new local `RenderingDevice`. This is most useful for performing compute operations on the GPU independently from the rest of the engine.
 * @returns RenderingDevice
 */
  createLocalDevice(): RenderingDevice;
/**
 * Create a command buffer debug label region that can be displayed in third-party tools such as RenderDoc (https://renderdoc.org/). All regions must be ended with a `draw_command_end_label` call. When viewed from the linear series of submissions to a single queue, calls to `draw_command_begin_label` and `draw_command_end_label` must be matched and balanced.
 * The `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension must be available and enabled for command buffer debug label region to work. See also `draw_command_end_label`.
 * @param name string
 * @param color Color
 */
  drawCommandBeginLabel(name: string, color: Color): void;
/**
 * Ends the command buffer debug label region started by a `draw_command_begin_label` call.
 */
  drawCommandEndLabel(): void;
/**
 * This method does nothing.
 * @param name string
 * @param color Color
 * @deprecated Inserting labels no longer applies due to command reordering.
 */
  drawCommandInsertLabel(name: string, color: Color): void;
/**
 * Starts a list of raster drawing commands created with the `draw_*` methods. The returned value should be passed to other `draw_list_*` functions.
 * Multiple draw lists cannot be created at the same time; you must finish the previous draw list first using `draw_list_end`.
 * A simple drawing operation might look like this (code is not a complete example):
 * 
 * 				```gdscript
 * 
 * 				var rd = RenderingDevice.new()
 * 				var clear_colors = PackedColorArray([Color(0, 0, 0, 0), Color(0, 0, 0, 0), Color(0, 0, 0, 0)])
 * 				var draw_list = rd.draw_list_begin(framebuffers[i], RenderingDevice.CLEAR_COLOR_ALL, clear_colors, true, 1.0f, true, 0, Rect2(), RenderingDevice.OPAQUE_PASS)
 * 
 * 				# Draw opaque.
 * 				rd.draw_list_bind_render_pipeline(draw_list, raster_pipeline)
 * 				rd.draw_list_bind_uniform_set(draw_list, raster_base_uniform, 0)
 * 				rd.draw_list_set_push_constant(draw_list, raster_push_constant, raster_push_constant.size())
 * 				rd.draw_list_draw(draw_list, false, 1, slice_triangle_count[i] * 3)
 * 				# Draw wire.
 * 				rd.draw_list_bind_render_pipeline(draw_list, raster_pipeline_wire)
 * 				rd.draw_list_bind_uniform_set(draw_list, raster_base_uniform, 0)
 * 				rd.draw_list_set_push_constant(draw_list, raster_push_constant, raster_push_constant.size())
 * 				rd.draw_list_draw(draw_list, false, 1, slice_triangle_count[i] * 3)
 * 
 * 				rd.draw_list_end()
 * 				
 * 
 * ```
 * The `draw_flags` indicates if the texture attachments of the framebuffer should be cleared or ignored. Only one of the two flags can be used for each individual attachment. Ignoring an attachment means that any contents that existed before the draw list will be completely discarded, reducing the memory bandwidth used by the render pass but producing garbage results if the pixels aren't replaced. The default behavior allows the engine to figure out the right operation to use if the texture is discardable, which can result in increased performance. See `RDTextureFormat` or `texture_set_discardable`.
 * The `breadcrumb` parameter can be an arbitrary 32-bit integer that is useful to diagnose GPU crashes. If Godot is built in dev or debug mode; when the GPU crashes Godot will dump all shaders that were being executed at the time of the crash and the breadcrumb is useful to diagnose what passes did those shaders belong to.
 * It does not affect rendering behavior and can be set to 0. It is recommended to use `BreadcrumbMarker` enumerations for consistency but it's not required. It is also possible to use bitwise operations to add extra data. e.g.
 * 
 * 				```gdscript
 * 
 * 				rd.draw_list_begin(fb[i], RenderingDevice.CLEAR_COLOR_ALL, clear_colors, true, 1.0f, true, 0, Rect2(), RenderingDevice.OPAQUE_PASS | 5)
 * 				
 * 
 * ```
 * @param framebuffer RID
 * @param drawFlags int (optional, default: 0)
 * @param clearColorValues PackedColorArray (optional, default: PackedColorArray())
 * @param clearDepthValue float (optional, default: 1.0)
 * @param clearStencilValue int (optional, default: 0)
 * @param region Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param breadcrumb int (optional, default: 0)
 * @returns int
 */
  drawListBegin(framebuffer: RID, drawFlags?: int, clearColorValues?: PackedColorArray, clearDepthValue?: float, clearStencilValue?: int, region?: Rect2, breadcrumb?: int): int;
/**
 * High-level variant of `draw_list_begin`, with the parameters automatically being adjusted for drawing onto the window specified by the `screen` ID.
 * 
 * **Note:** Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, `draw_list_begin_for_screen` returns `INVALID_ID`.
 * @param screen int (optional, default: 0)
 * @param clearColor Color (optional, default: Color(0, 0, 0, 1))
 * @returns int
 */
  drawListBeginForScreen(screen?: int, clearColor?: Color): int;
/**
 * This method does nothing and always returns an empty `PackedInt64Array`.
 * @param framebuffer RID
 * @param splits int
 * @param initialColorAction int
 * @param finalColorAction int
 * @param initialDepthAction int
 * @param finalDepthAction int
 * @param clearColorValues PackedColorArray (optional, default: PackedColorArray())
 * @param clearDepth float (optional, default: 1.0)
 * @param clearStencil int (optional, default: 0)
 * @param region Rect2 (optional, default: Rect2(0, 0, 0, 0))
 * @param storageTextures RID[] (optional, default: [])
 * @returns PackedInt64Array
 * @deprecated Split draw lists are used automatically by RenderingDevice.
 */
  drawListBeginSplit(framebuffer: RID, splits: int, initialColorAction: int, finalColorAction: int, initialDepthAction: int, finalDepthAction: int, clearColorValues?: PackedColorArray, clearDepth?: float, clearStencil?: int, region?: Rect2, storageTextures?: RID[]): PackedInt64Array;
/**
 * Binds `index_array` to the specified `draw_list`.
 * @param drawList int
 * @param indexArray RID
 */
  drawListBindIndexArray(drawList: int, indexArray: RID): void;
/**
 * Binds `render_pipeline` to the specified `draw_list`.
 * @param drawList int
 * @param renderPipeline RID
 */
  drawListBindRenderPipeline(drawList: int, renderPipeline: RID): void;
/**
 * Binds `uniform_set` to the specified `draw_list`. A `set_index` must also be specified, which is an identifier starting from `0` that must match the one expected by the draw list.
 * @param drawList int
 * @param uniformSet RID
 * @param setIndex int
 */
  drawListBindUniformSet(drawList: int, uniformSet: RID, setIndex: int): void;
/**
 * Binds `vertex_array` to the specified `draw_list`.
 * @param drawList int
 * @param vertexArray RID
 */
  drawListBindVertexArray(drawList: int, vertexArray: RID): void;
/**
 * Removes and disables the scissor rectangle for the specified `draw_list`. See also `draw_list_enable_scissor`.
 * @param drawList int
 */
  drawListDisableScissor(drawList: int): void;
/**
 * Submits `draw_list` for rendering on the GPU. This is the raster equivalent to `compute_list_dispatch`.
 * @param drawList int
 * @param useIndices boolean
 * @param instances int
 * @param proceduralVertexCount int (optional, default: 0)
 */
  drawListDraw(drawList: int, useIndices: boolean, instances: int, proceduralVertexCount?: int): void;
/**
 * Submits `draw_list` for rendering on the GPU with the given parameters stored in the `buffer` at `offset`. Parameters being integers: vertex count, instance count, first vertex, first instance. And when using indices: index count, instance count, first index, vertex offset, first instance. Buffer must have been created with `STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT` flag.
 * @param drawList int
 * @param useIndices boolean
 * @param buffer RID
 * @param offset int (optional, default: 0)
 * @param drawCount int (optional, default: 1)
 * @param stride int (optional, default: 0)
 */
  drawListDrawIndirect(drawList: int, useIndices: boolean, buffer: RID, offset?: int, drawCount?: int, stride?: int): void;
/**
 * Creates a scissor rectangle and enables it for the specified `draw_list`. Scissor rectangles are used for clipping by discarding fragments that fall outside a specified rectangular portion of the screen. See also `draw_list_disable_scissor`.
 * 
 * **Note:** The specified `rect` is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.
 * @param drawList int
 * @param rect Rect2 (optional, default: Rect2(0, 0, 0, 0))
 */
  drawListEnableScissor(drawList: int, rect?: Rect2): void;
/**
 * Finishes a list of raster drawing commands created with the `draw_*` methods.
 */
  drawListEnd(): void;
/**
 * Sets blend constants for the specified `draw_list` to `color`. Blend constants are used only if the graphics pipeline is created with `DYNAMIC_STATE_BLEND_CONSTANTS` flag set.
 * @param drawList int
 * @param color Color
 */
  drawListSetBlendConstants(drawList: int, color: Color): void;
/**
 * Sets the push constant data to `buffer` for the specified `draw_list`. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in `size_bytes` (this can be obtained by calling the `PackedByteArray.size` method on the passed `buffer`).
 * @param drawList int
 * @param buffer PackedByteArray
 * @param sizeBytes int
 */
  drawListSetPushConstant(drawList: int, buffer: PackedByteArray, sizeBytes: int): void;
/**
 * Switches to the next draw pass.
 * @returns int
 */
  drawListSwitchToNextPass(): int;
/**
 * This method does nothing and always returns an empty `PackedInt64Array`.
 * @param splits int
 * @returns PackedInt64Array
 * @deprecated Split draw lists are used automatically by RenderingDevice.
 */
  drawListSwitchToNextPassSplit(splits: int): PackedInt64Array;
/**
 * Creates a new framebuffer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param textures RID[]
 * @param validateWithFormat int (optional, default: -1)
 * @param viewCount int (optional, default: 1)
 * @returns RID
 */
  framebufferCreate(textures: RID[], validateWithFormat?: int, viewCount?: int): RID;
/**
 * Creates a new empty framebuffer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param size Vector2i
 * @param samples int (optional, default: 0)
 * @param validateWithFormat int (optional, default: -1)
 * @returns RID
 */
  framebufferCreateEmpty(size: Vector2i, samples?: int, validateWithFormat?: int): RID;
/**
 * Creates a new multipass framebuffer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param textures RID[]
 * @param passes RDFramebufferPass[]
 * @param validateWithFormat int (optional, default: -1)
 * @param viewCount int (optional, default: 1)
 * @returns RID
 */
  framebufferCreateMultipass(textures: RID[], passes: RDFramebufferPass[], validateWithFormat?: int, viewCount?: int): RID;
/**
 * Creates a new framebuffer format with the specified `attachments` and `view_count`. Returns the new framebuffer's unique framebuffer format ID.
 * If `view_count` is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.
 * @param attachments RDAttachmentFormat[]
 * @param viewCount int (optional, default: 1)
 * @returns int
 */
  framebufferFormatCreate(attachments: RDAttachmentFormat[], viewCount?: int): int;
/**
 * Creates a new empty framebuffer format with the specified number of `samples` and returns its ID.
 * @param samples int (optional, default: 0)
 * @returns int
 */
  framebufferFormatCreateEmpty(samples?: int): int;
/**
 * Creates a multipass framebuffer format with the specified `attachments`, `passes` and `view_count` and returns its ID. If `view_count` is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.
 * @param attachments RDAttachmentFormat[]
 * @param passes RDFramebufferPass[]
 * @param viewCount int (optional, default: 1)
 * @returns int
 */
  framebufferFormatCreateMultipass(attachments: RDAttachmentFormat[], passes: RDFramebufferPass[], viewCount?: int): int;
/**
 * Returns the number of texture samples used for the given framebuffer `format` ID (returned by `framebuffer_get_format`).
 * @param format int
 * @param renderPass int (optional, default: 0)
 * @returns int
 */
  framebufferFormatGetTextureSamples(format: int, renderPass?: int): int;
/**
 * Returns the format ID of the framebuffer specified by the `framebuffer` RID. This ID is guaranteed to be unique for the same formats and does not need to be freed.
 * @param framebuffer RID
 * @returns int
 */
  framebufferGetFormat(framebuffer: RID): int;
/**
 * Returns `true` if the framebuffer specified by the `framebuffer` RID is valid, `false` otherwise.
 * @param framebuffer RID
 * @returns boolean
 */
  framebufferIsValid(framebuffer: RID): boolean;
/**
 * Tries to free an object in the RenderingDevice. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingDevice directly.
 * @param rid RID
 */
  freeRid(rid: RID): void;
/**
 * This method does nothing.
 * @deprecated Barriers are automatically inserted by RenderingDevice.
 */
  fullBarrier(): void;
/**
 * Returns the timestamp in CPU time for the rendering step specified by `index` (in microseconds since the engine started). See also `get_captured_timestamp_gpu_time` and `capture_timestamp`.
 * @param index int
 * @returns int
 */
  getCapturedTimestampCpuTime(index: int): int;
/**
 * Returns the timestamp in GPU time for the rendering step specified by `index` (in microseconds since the engine started). See also `get_captured_timestamp_cpu_time` and `capture_timestamp`.
 * @param index int
 * @returns int
 */
  getCapturedTimestampGpuTime(index: int): int;
/**
 * Returns the timestamp's name for the rendering step specified by `index`. See also `capture_timestamp`.
 * @param index int
 * @returns string
 */
  getCapturedTimestampName(index: int): string;
/**
 * Returns the total number of timestamps (rendering steps) available for profiling.
 * @returns int
 */
  getCapturedTimestampsCount(): int;
/**
 * Returns the index of the last frame rendered that has rendering timestamps available for querying.
 * @returns int
 */
  getCapturedTimestampsFrame(): int;
/**
 * Returns how many allocations the GPU has performed for internal driver structures.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @returns int
 */
  getDeviceAllocationCount(): int;
/**
 * Same as `get_device_allocation_count` but filtered for a given object type.
 * The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If `get_tracked_object_type_count` is 0, then type argument is ignored and always returns 0.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @param type_ int
 * @returns int
 */
  getDeviceAllocsByObjectType(type_: int): int;
/**
 * Same as `get_device_total_memory` but filtered for a given object type.
 * The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If `get_tracked_object_type_count` is 0, then type argument is ignored and always returns 0.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @param type_ int
 * @returns int
 */
  getDeviceMemoryByObjectType(type_: int): int;
/**
 * Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2"). Equivalent to `RenderingServer.get_video_adapter_name`. See also `get_device_vendor_name`.
 * @returns string
 */
  getDeviceName(): string;
/**
 * Returns the universally unique identifier for the pipeline cache. This is used to cache shader files on disk, which avoids shader recompilations on subsequent engine runs. This UUID varies depending on the graphics card model, but also the driver version. Therefore, updating graphics drivers will invalidate the shader cache.
 * @returns string
 */
  getDevicePipelineCacheUuid(): string;
/**
 * Returns how much bytes the GPU is using.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @returns int
 */
  getDeviceTotalMemory(): int;
/**
 * Returns the vendor of the video adapter (e.g. "NVIDIA Corporation"). Equivalent to `RenderingServer.get_video_adapter_vendor`. See also `get_device_name`.
 * @returns string
 */
  getDeviceVendorName(): string;
/**
 * Returns how many allocations the GPU driver has performed for internal driver structures.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @returns int
 */
  getDriverAllocationCount(): int;
/**
 * Same as `get_driver_allocation_count` but filtered for a given object type.
 * The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If `get_tracked_object_type_count` is 0, then type argument is ignored and always returns 0.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @param type_ int
 * @returns int
 */
  getDriverAllocsByObjectType(type_: int): int;
/**
 * Returns string report in CSV format using the following methods:
 * - `get_tracked_object_name`
 * - `get_tracked_object_type_count`
 * - `get_driver_total_memory`
 * - `get_driver_allocation_count`
 * - `get_driver_memory_by_object_type`
 * - `get_driver_allocs_by_object_type`
 * - `get_device_total_memory`
 * - `get_device_allocation_count`
 * - `get_device_memory_by_object_type`
 * - `get_device_allocs_by_object_type`
 * This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 * @returns string
 */
  getDriverAndDeviceMemoryReport(): string;
/**
 * Same as `get_driver_total_memory` but filtered for a given object type.
 * The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If `get_tracked_object_type_count` is 0, then type argument is ignored and always returns 0.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @param type_ int
 * @returns int
 */
  getDriverMemoryByObjectType(type_: int): int;
/**
 * Returns the unique identifier of the driver `resource` for the specified `rid`. Some driver resource types ignore the specified `rid` (see `DriverResource` descriptions). `index` is always ignored but must be specified anyway.
 * @param resource int
 * @param rid RID
 * @param index int
 * @returns int
 */
  getDriverResource(resource: int, rid: RID, index: int): int;
/**
 * Returns how much bytes the GPU driver is using for internal driver structures.
 * This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.
 * @returns int
 */
  getDriverTotalMemory(): int;
/**
 * Returns the frame count kept by the graphics API. Higher values result in higher input lag, but with more consistent throughput. For the main `RenderingDevice`, frames are cycled (usually 3 with triple-buffered V-Sync enabled). However, local `RenderingDevice`s only have 1 frame.
 * @returns int
 */
  getFrameDelay(): int;
/**
 * Returns the memory usage in bytes corresponding to the given `type`. When using Vulkan, these statistics are calculated by Vulkan Memory Allocator (https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator).
 * @param type_ int
 * @returns int
 */
  getMemoryUsage(type_: int): int;
/**
 * Returns a string with a performance report from the past frame. Updates every frame.
 * @returns string
 */
  getPerfReport(): string;
/**
 * Returns the name of the type of object for the given `type_index`. This value must be in range `[0; get_tracked_object_type_count - 1]`. If `get_tracked_object_type_count` is 0, then type argument is ignored and always returns the same string.
 * The return value is important because it gives meaning to the types passed to `get_driver_memory_by_object_type`, `get_driver_allocs_by_object_type`, `get_device_memory_by_object_type`, and `get_device_allocs_by_object_type`. Examples of strings it can return (not exhaustive):
 * - DEVICE_MEMORY
 * - PIPELINE_CACHE
 * - SWAPCHAIN_KHR
 * - COMMAND_POOL
 * Thus if e.g. `get_tracked_object_name(5)` returns "COMMAND_POOL", then `get_device_memory_by_object_type(5)` returns the bytes used by the GPU for command pools.
 * This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 * @param typeIndex int
 * @returns string
 */
  getTrackedObjectName(typeIndex: int): string;
/**
 * Returns how many types of trackable objects are.
 * This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` command line argument (https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html).
 * @returns int
 */
  getTrackedObjectTypeCount(): int;
/**
 * Returns `true` if the `feature` is supported by the GPU.
 * @param feature int
 * @returns boolean
 */
  hasFeature(feature: int): boolean;
/**
 * Creates a new index array. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param indexBuffer RID
 * @param indexOffset int
 * @param indexCount int
 * @returns RID
 */
  indexArrayCreate(indexBuffer: RID, indexOffset: int, indexCount: int): RID;
/**
 * Creates a new index buffer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param sizeIndices int
 * @param format int
 * @param data PackedByteArray (optional, default: PackedByteArray())
 * @param useRestartIndices boolean (optional, default: false)
 * @param creationBits int (optional, default: 0)
 * @returns RID
 */
  indexBufferCreate(sizeIndices: int, format: int, data?: PackedByteArray, useRestartIndices?: boolean, creationBits?: int): RID;
/**
 * Returns the value of the specified `limit`. This limit varies depending on the current graphics hardware (and sometimes the driver version). If the given limit is exceeded, rendering errors will occur.
 * Limits for various graphics hardware can be found in the Vulkan Hardware Database (https://vulkan.gpuinfo.org/).
 * @param limit int
 * @returns int
 */
  limitGet(limit: int): int;
/**
 * Creates a new render pipeline. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param shader RID
 * @param framebufferFormat int
 * @param vertexFormat int
 * @param primitive int
 * @param rasterizationState RDPipelineRasterizationState
 * @param multisampleState RDPipelineMultisampleState
 * @param stencilState RDPipelineDepthStencilState
 * @param colorBlendState RDPipelineColorBlendState
 * @param dynamicStateFlags int (optional, default: 0)
 * @param forRenderPass int (optional, default: 0)
 * @param specializationConstants RDPipelineSpecializationConstant[] (optional, default: [])
 * @returns RID
 */
  renderPipelineCreate(shader: RID, framebufferFormat: int, vertexFormat: int, primitive: int, rasterizationState: RDPipelineRasterizationState, multisampleState: RDPipelineMultisampleState, stencilState: RDPipelineDepthStencilState, colorBlendState: RDPipelineColorBlendState, dynamicStateFlags?: int, forRenderPass?: int, specializationConstants?: RDPipelineSpecializationConstant[]): RID;
/**
 * Returns `true` if the render pipeline specified by the `render_pipeline` RID is valid, `false` otherwise.
 * @param renderPipeline RID
 * @returns boolean
 */
  renderPipelineIsValid(renderPipeline: RID): boolean;
/**
 * Creates a new sampler. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param state RDSamplerState
 * @returns RID
 */
  samplerCreate(state: RDSamplerState): RID;
/**
 * Returns `true` if implementation supports using a texture of `format` with the given `sampler_filter`.
 * @param format int
 * @param samplerFilter int
 * @returns boolean
 */
  samplerIsFormatSupportedForFilter(format: int, samplerFilter: int): boolean;
/**
 * Returns the framebuffer format of the given screen.
 * 
 * **Note:** Only the main `RenderingDevice` returned by `RenderingServer.get_rendering_device` has a format. If called on a local `RenderingDevice`, this method prints an error and returns `INVALID_ID`.
 * @param screen int (optional, default: 0)
 * @returns int
 */
  screenGetFramebufferFormat(screen?: int): int;
/**
 * Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named `screen`, this returns the *window* size. See also `screen_get_width`.
 * 
 * **Note:** Only the main `RenderingDevice` returned by `RenderingServer.get_rendering_device` has a height. If called on a local `RenderingDevice`, this method prints an error and returns `INVALID_ID`.
 * @param screen int (optional, default: 0)
 * @returns int
 */
  screenGetHeight(screen?: int): int;
/**
 * Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named `screen`, this returns the *window* size. See also `screen_get_height`.
 * 
 * **Note:** Only the main `RenderingDevice` returned by `RenderingServer.get_rendering_device` has a width. If called on a local `RenderingDevice`, this method prints an error and returns `INVALID_ID`.
 * @param screen int (optional, default: 0)
 * @returns int
 */
  screenGetWidth(screen?: int): int;
/**
 * Sets the resource name for `id` to `name`. This is used for debugging with third-party tools such as RenderDoc (https://renderdoc.org/).
 * The following types of resources can be named: texture, sampler, vertex buffer, index buffer, uniform buffer, texture buffer, storage buffer, uniform set buffer, shader, render pipeline and compute pipeline. Framebuffers cannot be named. Attempting to name an incompatible resource type will print an error.
 * 
 * **Note:** Resource names are only set when the engine runs in verbose mode (`OS.is_stdout_verbose` = `true`), or when using an engine build compiled with the `dev_mode=yes` SCons option. The graphics driver must also support the `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension for named resources to work.
 * @param id RID
 * @param name string
 */
  setResourceName(id: RID, name: string): void;
/**
 * Compiles a binary shader from `spirv_data` and returns the compiled binary data as a `PackedByteArray`. This compiled shader is specific to the GPU model and driver version used; it will not work on different GPU models or even different driver versions. See also `shader_compile_spirv_from_source`.
 * `name` is an optional human-readable name that can be given to the compiled shader for organizational purposes.
 * @param spirvData RDShaderSPIRV
 * @param name string (optional, default: "")
 * @returns PackedByteArray
 */
  shaderCompileBinaryFromSpirv(spirvData: RDShaderSPIRV, name?: string): PackedByteArray;
/**
 * Compiles a SPIR-V from the shader source code in `shader_source` and returns the SPIR-V as a `RDShaderSPIRV`. This intermediate language shader is portable across different GPU models and driver versions, but cannot be run directly by GPUs until compiled into a binary shader using `shader_compile_binary_from_spirv`.
 * If `allow_cache` is `true`, make use of the shader cache generated by Godot. This avoids a potentially lengthy shader compilation step if the shader is already in cache. If `allow_cache` is `false`, Godot's shader cache is ignored and the shader will always be recompiled.
 * @param shaderSource RDShaderSource
 * @param allowCache boolean (optional, default: true)
 * @returns RDShaderSPIRV
 */
  shaderCompileSpirvFromSource(shaderSource: RDShaderSource, allowCache?: boolean): RDShaderSPIRV;
/**
 * Creates a new shader instance from a binary compiled shader. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method. See also `shader_compile_binary_from_spirv` and `shader_create_from_spirv`.
 * @param binaryData PackedByteArray
 * @param placeholderRid RID (optional, default: RID())
 * @returns RID
 */
  shaderCreateFromBytecode(binaryData: PackedByteArray, placeholderRid?: RID): RID;
/**
 * Creates a new shader instance from SPIR-V intermediate code. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method. See also `shader_compile_spirv_from_source` and `shader_create_from_bytecode`.
 * @param spirvData RDShaderSPIRV
 * @param name string (optional, default: "")
 * @returns RID
 */
  shaderCreateFromSpirv(spirvData: RDShaderSPIRV, name?: string): RID;
/**
 * Create a placeholder RID by allocating an RID without initializing it for use in `shader_create_from_bytecode`. This allows you to create an RID for a shader and pass it around, but defer compiling the shader to a later time.
 * @returns RID
 */
  shaderCreatePlaceholder(): RID;
/**
 * Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. `layout(location = ...)`) of the input variables (specified in GLSL by the `in` keyword).
 * @param shader RID
 * @returns int
 */
  shaderGetVertexInputAttributeMask(shader: RID): int;
/**
 * Creates a storage buffer (https://vkguide.dev/docs/chapter-4/storage_buffers/) with the specified `data` and `usage`. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param sizeBytes int
 * @param data PackedByteArray (optional, default: PackedByteArray())
 * @param usage int (optional, default: 0)
 * @param creationBits int (optional, default: 0)
 * @returns RID
 */
  storageBufferCreate(sizeBytes: int, data?: PackedByteArray, usage?: int, creationBits?: int): RID;
/**
 * Pushes the frame setup and draw command buffers then marks the local device as currently processing (which allows calling `sync`).
 * 
 * **Note:** Only available in local RenderingDevices.
 */
  submit(): void;
/**
 * Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.
 * 
 * **Note:** Only available in local RenderingDevices.
 * 
 * **Note:** `sync` can only be called after a `submit`.
 */
  sync(): void;
/**
 * Creates a new texture buffer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param sizeBytes int
 * @param format int
 * @param data PackedByteArray (optional, default: PackedByteArray())
 * @returns RID
 */
  textureBufferCreate(sizeBytes: int, format: int, data?: PackedByteArray): RID;
/**
 * Clears the specified `texture` by replacing all of its pixels with the specified `color`. `base_mipmap` and `mipmap_count` determine which mipmaps of the texture are affected by this clear operation, while `base_layer` and `layer_count` determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), `base_layer` must be `0` and `layer_count` must be `1`.
 * 
 * **Note:** `texture` can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to `FINAL_ACTION_CONTINUE`) to clear this texture.
 * @param texture RID
 * @param color Color
 * @param baseMipmap int
 * @param mipmapCount int
 * @param baseLayer int
 * @param layerCount int
 * @returns int
 */
  textureClear(texture: RID, color: Color, baseMipmap: int, mipmapCount: int, baseLayer: int, layerCount: int): int;
/**
 * Copies the `from_texture` to `to_texture` with the specified `from_pos`, `to_pos` and `size` coordinates. The Z axis of the `from_pos`, `to_pos` and `size` must be `0` for 2-dimensional textures. Source and destination mipmaps/layers must also be specified, with these parameters being `0` for textures without mipmaps or single-layer textures. Returns `@GlobalScope.OK` if the texture copy was successful or `@GlobalScope.ERR_INVALID_PARAMETER` otherwise.
 * 
 * **Note:** `from_texture` texture can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to `FINAL_ACTION_CONTINUE`) to copy this texture.
 * 
 * **Note:** `from_texture` texture requires the `TEXTURE_USAGE_CAN_COPY_FROM_BIT` to be retrieved.
 * 
 * **Note:** `to_texture` can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to `FINAL_ACTION_CONTINUE`) to copy this texture.
 * 
 * **Note:** `to_texture` requires the `TEXTURE_USAGE_CAN_COPY_TO_BIT` to be retrieved.
 * 
 * **Note:** `from_texture` and `to_texture` must be of the same type (color or depth).
 * @param fromTexture RID
 * @param toTexture RID
 * @param fromPos Vector3
 * @param toPos Vector3
 * @param size Vector3
 * @param srcMipmap int
 * @param dstMipmap int
 * @param srcLayer int
 * @param dstLayer int
 * @returns int
 */
  textureCopy(fromTexture: RID, toTexture: RID, fromPos: Vector3, toPos: Vector3, size: Vector3, srcMipmap: int, dstMipmap: int, srcLayer: int, dstLayer: int): int;
/**
 * Creates a new texture. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * 
 * **Note:** Not to be confused with `RenderingServer.texture_2d_create`, which creates the Godot-specific `Texture2D` resource as opposed to the graphics API's own texture type.
 * @param format RDTextureFormat
 * @param view RDTextureView
 * @param data PackedByteArray[] (optional, default: [])
 * @returns RID
 */
  textureCreate(format: RDTextureFormat, view: RDTextureView, data?: PackedByteArray[]): RID;
/**
 * Returns an RID for an existing `image` (`VkImage`) with the given `type`, `format`, `samples`, `usage_flags`, `width`, `height`, `depth`, and `layers`. This can be used to allow Godot to render onto foreign images.
 * @param type_ int
 * @param format int
 * @param samples int
 * @param usageFlags int
 * @param image int
 * @param width int
 * @param height int
 * @param depth int
 * @param layers int
 * @returns RID
 */
  textureCreateFromExtension(type_: int, format: int, samples: int, usageFlags: int, image: int, width: int, height: int, depth: int, layers: int): RID;
/**
 * Creates a shared texture using the specified `view` and the texture information from `with_texture`.
 * @param view RDTextureView
 * @param withTexture RID
 * @returns RID
 */
  textureCreateShared(view: RDTextureView, withTexture: RID): RID;
/**
 * Creates a shared texture using the specified `view` and the texture information from `with_texture`'s `layer` and `mipmap`. The number of included mipmaps from the original texture can be controlled using the `mipmaps` parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use `texture_create_shared`.
 * For 2D textures (which only have one layer), `layer` must be `0`.
 * 
 * **Note:** Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.
 * @param view RDTextureView
 * @param withTexture RID
 * @param layer int
 * @param mipmap int
 * @param mipmaps int (optional, default: 1)
 * @param sliceType int (optional, default: 0)
 * @returns RID
 */
  textureCreateSharedFromSlice(view: RDTextureView, withTexture: RID, layer: int, mipmap: int, mipmaps?: int, sliceType?: int): RID;
/**
 * Returns the `texture` data for the specified `layer` as raw binary data. For 2D textures (which only have one layer), `layer` must be `0`.
 * 
 * **Note:** `texture` can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to `FINAL_ACTION_CONTINUE`) to retrieve this texture. Otherwise, an error is printed and a empty `PackedByteArray` is returned.
 * 
 * **Note:** `texture` requires the `TEXTURE_USAGE_CAN_COPY_FROM_BIT` to be retrieved. Otherwise, an error is printed and a empty `PackedByteArray` is returned.
 * 
 * **Note:** This method will block the GPU from working until the data is retrieved. Refer to `texture_get_data_async` for an alternative that returns the data in more performant way.
 * @param texture RID
 * @param layer int
 * @returns PackedByteArray
 */
  textureGetData(texture: RID, layer: int): PackedByteArray;
/**
 * Asynchronous version of `texture_get_data`. RenderingDevice will call `callback` in a certain amount of frames with the data the texture had at the time of the request.
 * 
 * **Note:** At the moment, the delay corresponds to the amount of frames specified by `ProjectSettings.rendering/rendering_device/vsync/frame_queue_size`.
 * 
 * **Note:** Downloading large textures can have a prohibitive cost for real-time even when using the asynchronous method due to hardware bandwidth limitations. When dealing with large resources, you can adjust settings such as `ProjectSettings.rendering/rendering_device/staging_buffer/texture_download_region_size_px` and `ProjectSettings.rendering/rendering_device/staging_buffer/block_size_kb` to improve the transfer speed at the cost of extra memory.
 * 
 * 				```gdscript
 * 
 * 				func _texture_get_data_callback(array):
 * 				    value = array.decode_u32(0)
 * 
 * 				...
 * 
 * 				rd.texture_get_data_async(texture, 0, _texture_get_data_callback)
 * 				
 * 
 * ```
 * @param texture RID
 * @param layer int
 * @param callback Callable
 * @returns int
 */
  textureGetDataAsync(texture: RID, layer: int, callback: Callable): int;
/**
 * Returns the data format used to create this texture.
 * @param texture RID
 * @returns RDTextureFormat
 */
  textureGetFormat(texture: RID): RDTextureFormat;
/**
 * Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.
 * 
 * **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).
 * @param texture RID
 * @returns int
 * @deprecated Use `get_driver_resource` with `DRIVER_RESOURCE_TEXTURE` instead.
 */
  textureGetNativeHandle(texture: RID): int;
/**
 * Returns `true` if the `texture` is discardable, `false` otherwise. See `RDTextureFormat` or `texture_set_discardable`.
 * @param texture RID
 * @returns boolean
 */
  textureIsDiscardable(texture: RID): boolean;
/**
 * Returns `true` if the specified `format` is supported for the given `usage_flags`, `false` otherwise.
 * @param format int
 * @param usageFlags int
 * @returns boolean
 */
  textureIsFormatSupportedForUsage(format: int, usageFlags: int): boolean;
/**
 * Returns `true` if the `texture` is shared, `false` otherwise. See `RDTextureView`.
 * @param texture RID
 * @returns boolean
 */
  textureIsShared(texture: RID): boolean;
/**
 * Returns `true` if the `texture` is valid, `false` otherwise.
 * @param texture RID
 * @returns boolean
 */
  textureIsValid(texture: RID): boolean;
/**
 * Resolves the `from_texture` texture onto `to_texture` with multisample antialiasing enabled. This must be used when rendering a framebuffer for MSAA to work. Returns `@GlobalScope.OK` if successful, `@GlobalScope.ERR_INVALID_PARAMETER` otherwise.
 * 
 * **Note:** `from_texture` and `to_texture` textures must have the same dimension, format and type (color or depth).
 * 
 * **Note:** `from_texture` can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to `FINAL_ACTION_CONTINUE`) to resolve this texture.
 * 
 * **Note:** `from_texture` requires the `TEXTURE_USAGE_CAN_COPY_FROM_BIT` to be retrieved.
 * 
 * **Note:** `from_texture` must be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).
 * 
 * **Note:** `to_texture` can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to `FINAL_ACTION_CONTINUE`) to resolve this texture.
 * 
 * **Note:** `to_texture` texture requires the `TEXTURE_USAGE_CAN_COPY_TO_BIT` to be retrieved.
 * 
 * **Note:** `to_texture` texture must **not** be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).
 * @param fromTexture RID
 * @param toTexture RID
 * @returns int
 */
  textureResolveMultisample(fromTexture: RID, toTexture: RID): int;
/**
 * Updates the discardable property of `texture`.
 * If a texture is discardable, its contents do not need to be preserved between frames. This flag is only relevant when the texture is used as target in a draw list.
 * This information is used by `RenderingDevice` to figure out if a texture's contents can be discarded, eliminating unnecessary writes to memory and boosting performance.
 * @param texture RID
 * @param discardable boolean
 */
  textureSetDiscardable(texture: RID, discardable: boolean): void;
/**
 * Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), `layer` must be `0`. Returns `@GlobalScope.OK` if the update was successful, `@GlobalScope.ERR_INVALID_PARAMETER` otherwise.
 * 
 * **Note:** Updating textures is forbidden during creation of a draw or compute list.
 * 
 * **Note:** The existing `texture` can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to `FINAL_ACTION_CONTINUE`) to update this texture.
 * 
 * **Note:** The existing `texture` requires the `TEXTURE_USAGE_CAN_UPDATE_BIT` to be updatable.
 * @param texture RID
 * @param layer int
 * @param data PackedByteArray
 * @returns int
 */
  textureUpdate(texture: RID, layer: int, data: PackedByteArray): int;
/**
 * Creates a new uniform buffer. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param sizeBytes int
 * @param data PackedByteArray (optional, default: PackedByteArray())
 * @param creationBits int (optional, default: 0)
 * @returns RID
 */
  uniformBufferCreate(sizeBytes: int, data?: PackedByteArray, creationBits?: int): RID;
/**
 * Creates a new uniform set. It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param uniforms RDUniform[]
 * @param shader RID
 * @param shaderSet int
 * @returns RID
 */
  uniformSetCreate(uniforms: RDUniform[], shader: RID, shaderSet: int): RID;
/**
 * Checks if the `uniform_set` is valid, i.e. is owned.
 * @param uniformSet RID
 * @returns boolean
 */
  uniformSetIsValid(uniformSet: RID): boolean;
/**
 * Creates a vertex array based on the specified buffers. Optionally, `offsets` (in bytes) may be defined for each buffer.
 * @param vertexCount int
 * @param vertexFormat int
 * @param srcBuffers RID[]
 * @param offsets PackedInt64Array (optional, default: PackedInt64Array())
 * @returns RID
 */
  vertexArrayCreate(vertexCount: int, vertexFormat: int, srcBuffers: RID[], offsets?: PackedInt64Array): RID;
/**
 * It can be accessed with the RID that is returned.
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's `free_rid` method.
 * @param sizeBytes int
 * @param data PackedByteArray (optional, default: PackedByteArray())
 * @param creationBits int (optional, default: 0)
 * @returns RID
 */
  vertexBufferCreate(sizeBytes: int, data?: PackedByteArray, creationBits?: int): RID;
/**
 * Creates a new vertex format with the specified `vertex_descriptions`. Returns a unique vertex format ID corresponding to the newly created vertex format.
 * @param vertexDescriptions RDVertexAttribute[]
 * @returns int
 */
  vertexFormatCreate(vertexDescriptions: RDVertexAttribute[]): int;
/**
 * Rendering device type does not match any of the other enum values or is unknown.
 */
  static readonly DEVICE_TYPE_OTHER: int;
/**
 * Rendering device is an integrated GPU, which is typically *(but not always)* slower than dedicated GPUs (`DEVICE_TYPE_DISCRETE_GPU`). On Android and iOS, the rendering device type is always considered to be `DEVICE_TYPE_INTEGRATED_GPU`.
 */
  static readonly DEVICE_TYPE_INTEGRATED_GPU: int;
/**
 * Rendering device is a dedicated GPU, which is typically *(but not always)* faster than integrated GPUs (`DEVICE_TYPE_INTEGRATED_GPU`).
 */
  static readonly DEVICE_TYPE_DISCRETE_GPU: int;
/**
 * Rendering device is an emulated GPU in a virtual environment. This is typically much slower than the host GPU, which means the expected performance level on a dedicated GPU will be roughly equivalent to `DEVICE_TYPE_INTEGRATED_GPU`. Virtual machine GPU passthrough (such as VFIO) will not report the device type as `DEVICE_TYPE_VIRTUAL_GPU`. Instead, the host GPU's device type will be reported as if the GPU was not emulated.
 */
  static readonly DEVICE_TYPE_VIRTUAL_GPU: int;
/**
 * Rendering device is provided by software emulation (such as Lavapipe or SwiftShader (https://github.com/google/swiftshader)). This is the slowest kind of rendering device available; it's typically much slower than `DEVICE_TYPE_INTEGRATED_GPU`.
 */
  static readonly DEVICE_TYPE_CPU: int;
/**
 * Represents the size of the `DeviceType` enum.
 */
  static readonly DEVICE_TYPE_MAX: int;
/**
 * Specific device object based on a physical device.
 * - Vulkan: Vulkan device driver resource (`VkDevice`). (`rid` argument doesn't apply.)
 */
  static readonly DRIVER_RESOURCE_LOGICAL_DEVICE: int;
/**
 * Physical device the specific logical device is based on.
 * - Vulkan: `VkDevice`. (`rid` argument doesn't apply.)
 */
  static readonly DRIVER_RESOURCE_PHYSICAL_DEVICE: int;
/**
 * Top-most graphics API entry object.
 * - Vulkan: `VkInstance`. (`rid` argument doesn't apply.)
 */
  static readonly DRIVER_RESOURCE_TOPMOST_OBJECT: int;
/**
 * The main graphics-compute command queue.
 * - Vulkan: `VkQueue`. (`rid` argument doesn't apply.)
 */
  static readonly DRIVER_RESOURCE_COMMAND_QUEUE: int;
/**
 * The specific family the main queue belongs to.
 * - Vulkan: the queue family index, an `uint32_t`. (`rid` argument doesn't apply.)
 */
  static readonly DRIVER_RESOURCE_QUEUE_FAMILY: int;
/**
 * - Vulkan: `VkImage`.
 */
  static readonly DRIVER_RESOURCE_TEXTURE: int;
/**
 * The view of an owned or shared texture.
 * - Vulkan: `VkImageView`.
 */
  static readonly DRIVER_RESOURCE_TEXTURE_VIEW: int;
/**
 * The native id of the data format of the texture.
 * - Vulkan: `VkFormat`.
 */
  static readonly DRIVER_RESOURCE_TEXTURE_DATA_FORMAT: int;
/**
 * - Vulkan: `VkSampler`.
 */
  static readonly DRIVER_RESOURCE_SAMPLER: int;
/**
 * - Vulkan: `VkDescriptorSet`.
 */
  static readonly DRIVER_RESOURCE_UNIFORM_SET: int;
/**
 * Buffer of any kind of (storage, vertex, etc.).
 * - Vulkan: `VkBuffer`.
 */
  static readonly DRIVER_RESOURCE_BUFFER: int;
/**
 * - Vulkan: `VkPipeline`.
 */
  static readonly DRIVER_RESOURCE_COMPUTE_PIPELINE: int;
/**
 * - Vulkan: `VkPipeline`.
 */
  static readonly DRIVER_RESOURCE_RENDER_PIPELINE: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_LOGICAL_DEVICE` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_DEVICE: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_PHYSICAL_DEVICE` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_TOPMOST_OBJECT` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_INSTANCE: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_COMMAND_QUEUE` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_QUEUE: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_QUEUE_FAMILY` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_TEXTURE` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_IMAGE: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_TEXTURE_VIEW` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_IMAGE_VIEW: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_TEXTURE_DATA_FORMAT` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_SAMPLER` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_SAMPLER: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_UNIFORM_SET` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_BUFFER` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_BUFFER: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_COMPUTE_PIPELINE` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE: int;
/**
 * @deprecated Use `DRIVER_RESOURCE_RENDER_PIPELINE` instead.
 */
  static readonly DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE: int;
/**
 * 4-bit-per-channel red/green channel data format, packed into 8 bits. Values are in the `[0.0, 1.0]` range.
 * 
 * **Note:** More information on all data formats can be found on the Identification of formats (https://registry.khronos.org/vulkan/specs/1.1/html/vkspec.html#_identification_of_formats) section of the Vulkan specification, as well as the VkFormat (https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VkFormat.html) enum.
 */
  static readonly DATA_FORMAT_R4G4_UNORM_PACK8: int;
/**
 * 4-bit-per-channel red/green/blue/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R4G4B4A4_UNORM_PACK16: int;
/**
 * 4-bit-per-channel blue/green/red/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B4G4R4A4_UNORM_PACK16: int;
/**
 * Red/green/blue channel data format with 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R5G6B5_UNORM_PACK16: int;
/**
 * Blue/green/red channel data format with 5 bits of blue, 6 bits of green and 5 bits of red, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B5G6R5_UNORM_PACK16: int;
/**
 * Red/green/blue/alpha channel data format with 5 bits of red, 6 bits of green, 5 bits of blue and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R5G5B5A1_UNORM_PACK16: int;
/**
 * Blue/green/red/alpha channel data format with 5 bits of blue, 6 bits of green, 5 bits of red and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B5G5R5A1_UNORM_PACK16: int;
/**
 * Alpha/red/green/blue channel data format with 1 bit of alpha, 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A1R5G5B5_UNORM_PACK16: int;
/**
 * 8-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8_UNORM: int;
/**
 * 8-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8_SNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 */
  static readonly DATA_FORMAT_R8_USCALED: int;
/**
 * 8-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 */
  static readonly DATA_FORMAT_R8_SSCALED: int;
/**
 * 8-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_R8_UINT: int;
/**
 * 8-bit-per-channel signed integer red channel data format. Values are in the `[-127, 127]` range.
 */
  static readonly DATA_FORMAT_R8_SINT: int;
/**
 * 8-bit-per-channel unsigned floating-point red channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8_SRGB: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8_UNORM: int;
/**
 * 8-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8_SNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 */
  static readonly DATA_FORMAT_R8G8_USCALED: int;
/**
 * 8-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 */
  static readonly DATA_FORMAT_R8G8_SSCALED: int;
/**
 * 8-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_R8G8_UINT: int;
/**
 * 8-bit-per-channel signed integer red/green channel data format. Values are in the `[-127, 127]` range.
 */
  static readonly DATA_FORMAT_R8G8_SINT: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8_SRGB: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8_UNORM: int;
/**
 * 8-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8_SNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8_USCALED: int;
/**
 * 8-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8_SSCALED: int;
/**
 * 8-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_R8G8B8_UINT: int;
/**
 * 8-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-127, 127]` range.
 */
  static readonly DATA_FORMAT_R8G8B8_SINT: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8_SRGB: int;
/**
 * 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8_UNORM: int;
/**
 * 8-bit-per-channel signed floating-point blue/green/red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8_SNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8_USCALED: int;
/**
 * 8-bit-per-channel signed floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8_SSCALED: int;
/**
 * 8-bit-per-channel unsigned integer blue/green/red channel data format. Values are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_B8G8R8_UINT: int;
/**
 * 8-bit-per-channel signed integer blue/green/red channel data format. Values are in the `[-127, 127]` range.
 */
  static readonly DATA_FORMAT_B8G8R8_SINT: int;
/**
 * 8-bit-per-channel unsigned floating-point blue/green/red data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8_SRGB: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8A8_UNORM: int;
/**
 * 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8A8_SNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8A8_USCALED: int;
/**
 * 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8A8_SSCALED: int;
/**
 * 8-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_R8G8B8A8_UINT: int;
/**
 * 8-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-127, 127]` range.
 */
  static readonly DATA_FORMAT_R8G8B8A8_SINT: int;
/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R8G8B8A8_SRGB: int;
/**
 * 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8A8_UNORM: int;
/**
 * 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8A8_SNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8A8_USCALED: int;
/**
 * 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8A8_SSCALED: int;
/**
 * 8-bit-per-channel unsigned integer blue/green/red/alpha channel data format. Values are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_B8G8R8A8_UINT: int;
/**
 * 8-bit-per-channel signed integer blue/green/red/alpha channel data format. Values are in the `[-127, 127]` range.
 */
  static readonly DATA_FORMAT_B8G8R8A8_SINT: int;
/**
 * 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_B8G8R8A8_SRGB: int;
/**
 * 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A8B8G8R8_UNORM_PACK32: int;
/**
 * 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A8B8G8R8_SNORM_PACK32: int;
/**
 * 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[0.0, 255.0]` range.
 */
  static readonly DATA_FORMAT_A8B8G8R8_USCALED_PACK32: int;
/**
 * 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[-127.0, 127.0]` range.
 */
  static readonly DATA_FORMAT_A8B8G8R8_SSCALED_PACK32: int;
/**
 * 8-bit-per-channel unsigned integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_A8B8G8R8_UINT_PACK32: int;
/**
 * 8-bit-per-channel signed integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[-127, 127]` range.
 */
  static readonly DATA_FORMAT_A8B8G8R8_SINT_PACK32: int;
/**
 * 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value and non-linear sRGB encoding, packed in 32 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A8B8G8R8_SRGB_PACK32: int;
/**
 * Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A2R10G10B10_UNORM_PACK32: int;
/**
 * Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A2R10G10B10_SNORM_PACK32: int;
/**
 * Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1023.0]` range for red/green/blue and `[0.0, 3.0]` for alpha.
 */
  static readonly DATA_FORMAT_A2R10G10B10_USCALED_PACK32: int;
/**
 * Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511.0, 511.0]` range for red/green/blue and `[-1.0, 1.0]` for alpha.
 */
  static readonly DATA_FORMAT_A2R10G10B10_SSCALED_PACK32: int;
/**
 * Unsigned integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0, 1023]` range for red/green/blue and `[0, 3]` for alpha.
 */
  static readonly DATA_FORMAT_A2R10G10B10_UINT_PACK32: int;
/**
 * Signed integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511, 511]` range for red/green/blue and `[-1, 1]` for alpha.
 */
  static readonly DATA_FORMAT_A2R10G10B10_SINT_PACK32: int;
/**
 * Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A2B10G10R10_UNORM_PACK32: int;
/**
 * Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_A2B10G10R10_SNORM_PACK32: int;
/**
 * Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1023.0]` range for blue/green/red and `[0.0, 3.0]` for alpha.
 */
  static readonly DATA_FORMAT_A2B10G10R10_USCALED_PACK32: int;
/**
 * Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511.0, 511.0]` range for blue/green/red and `[-1.0, 1.0]` for alpha.
 */
  static readonly DATA_FORMAT_A2B10G10R10_SSCALED_PACK32: int;
/**
 * Unsigned integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0, 1023]` range for blue/green/red and `[0, 3]` for alpha.
 */
  static readonly DATA_FORMAT_A2B10G10R10_UINT_PACK32: int;
/**
 * Signed integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511, 511]` range for blue/green/red and `[-1, 1]` for alpha.
 */
  static readonly DATA_FORMAT_A2B10G10R10_SINT_PACK32: int;
/**
 * 16-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16_UNORM: int;
/**
 * 16-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16_SNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 */
  static readonly DATA_FORMAT_R16_USCALED: int;
/**
 * 16-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 */
  static readonly DATA_FORMAT_R16_SSCALED: int;
/**
 * 16-bit-per-channel unsigned integer red channel data format. Values are in the `[0.0, 65535]` range.
 */
  static readonly DATA_FORMAT_R16_UINT: int;
/**
 * 16-bit-per-channel signed integer red channel data format. Values are in the `[-32767, 32767]` range.
 */
  static readonly DATA_FORMAT_R16_SINT: int;
/**
 * 16-bit-per-channel signed floating-point red channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R16_SFLOAT: int;
/**
 * 16-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16G16_UNORM: int;
/**
 * 16-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16G16_SNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 */
  static readonly DATA_FORMAT_R16G16_USCALED: int;
/**
 * 16-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 */
  static readonly DATA_FORMAT_R16G16_SSCALED: int;
/**
 * 16-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0.0, 65535]` range.
 */
  static readonly DATA_FORMAT_R16G16_UINT: int;
/**
 * 16-bit-per-channel signed integer red/green channel data format. Values are in the `[-32767, 32767]` range.
 */
  static readonly DATA_FORMAT_R16G16_SINT: int;
/**
 * 16-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R16G16_SFLOAT: int;
/**
 * 16-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16_UNORM: int;
/**
 * 16-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16_SNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16_USCALED: int;
/**
 * 16-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16_SSCALED: int;
/**
 * 16-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0.0, 65535]` range.
 */
  static readonly DATA_FORMAT_R16G16B16_UINT: int;
/**
 * 16-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-32767, 32767]` range.
 */
  static readonly DATA_FORMAT_R16G16B16_SINT: int;
/**
 * 16-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R16G16B16_SFLOAT: int;
/**
 * 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16A16_UNORM: int;
/**
 * 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16A16_SNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16A16_USCALED: int;
/**
 * 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 */
  static readonly DATA_FORMAT_R16G16B16A16_SSCALED: int;
/**
 * 16-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0.0, 65535]` range.
 */
  static readonly DATA_FORMAT_R16G16B16A16_UINT: int;
/**
 * 16-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-32767, 32767]` range.
 */
  static readonly DATA_FORMAT_R16G16B16A16_SINT: int;
/**
 * 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R16G16B16A16_SFLOAT: int;
/**
 * 32-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^32 - 1]` range.
 */
  static readonly DATA_FORMAT_R32_UINT: int;
/**
 * 32-bit-per-channel signed integer red channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 */
  static readonly DATA_FORMAT_R32_SINT: int;
/**
 * 32-bit-per-channel signed floating-point red channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R32_SFLOAT: int;
/**
 * 32-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^32 - 1]` range.
 */
  static readonly DATA_FORMAT_R32G32_UINT: int;
/**
 * 32-bit-per-channel signed integer red/green channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 */
  static readonly DATA_FORMAT_R32G32_SINT: int;
/**
 * 32-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R32G32_SFLOAT: int;
/**
 * 32-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^32 - 1]` range.
 */
  static readonly DATA_FORMAT_R32G32B32_UINT: int;
/**
 * 32-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 */
  static readonly DATA_FORMAT_R32G32B32_SINT: int;
/**
 * 32-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R32G32B32_SFLOAT: int;
/**
 * 32-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^32 - 1]` range.
 */
  static readonly DATA_FORMAT_R32G32B32A32_UINT: int;
/**
 * 32-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 */
  static readonly DATA_FORMAT_R32G32B32A32_SINT: int;
/**
 * 32-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R32G32B32A32_SFLOAT: int;
/**
 * 64-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^64 - 1]` range.
 */
  static readonly DATA_FORMAT_R64_UINT: int;
/**
 * 64-bit-per-channel signed integer red channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 */
  static readonly DATA_FORMAT_R64_SINT: int;
/**
 * 64-bit-per-channel signed floating-point red channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R64_SFLOAT: int;
/**
 * 64-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^64 - 1]` range.
 */
  static readonly DATA_FORMAT_R64G64_UINT: int;
/**
 * 64-bit-per-channel signed integer red/green channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 */
  static readonly DATA_FORMAT_R64G64_SINT: int;
/**
 * 64-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R64G64_SFLOAT: int;
/**
 * 64-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^64 - 1]` range.
 */
  static readonly DATA_FORMAT_R64G64B64_UINT: int;
/**
 * 64-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 */
  static readonly DATA_FORMAT_R64G64B64_SINT: int;
/**
 * 64-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R64G64B64_SFLOAT: int;
/**
 * 64-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^64 - 1]` range.
 */
  static readonly DATA_FORMAT_R64G64B64A64_UINT: int;
/**
 * 64-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 */
  static readonly DATA_FORMAT_R64G64B64A64_SINT: int;
/**
 * 64-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_R64G64B64A64_SFLOAT: int;
/**
 * Unsigned floating-point blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 10 bits of blue channel, 11 bits of green channel and 11 bits of red channel.
 */
  static readonly DATA_FORMAT_B10G11R11_UFLOAT_PACK32: int;
/**
 * Unsigned floating-point exposure/blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 5 bits of exposure, 9 bits of blue channel, 9 bits of green channel and 9 bits of red channel.
 */
  static readonly DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32: int;
/**
 * 16-bit unsigned floating-point depth data format with normalized value. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_D16_UNORM: int;
/**
 * 24-bit unsigned floating-point depth data format with normalized value, plus 8 unused bits, packed in 32 bits. Values for depth are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_X8_D24_UNORM_PACK32: int;
/**
 * 32-bit signed floating-point depth data format with the value stored as-is.
 */
  static readonly DATA_FORMAT_D32_SFLOAT: int;
/**
 * 8-bit unsigned integer stencil data format.
 */
  static readonly DATA_FORMAT_S8_UINT: int;
/**
 * 16-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_D16_UNORM_S8_UINT: int;
/**
 * 24-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_D24_UNORM_S8_UINT: int;
/**
 * 32-bit signed floating-point depth data format with the value stored as-is, plus 8 bits of stencil in unsigned integer format. Values for stencil are in the `[0, 255]` range.
 */
  static readonly DATA_FORMAT_D32_SFLOAT_S8_UINT: int;
/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1).
 */
  static readonly DATA_FORMAT_BC1_RGB_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1).
 */
  static readonly DATA_FORMAT_BC1_RGB_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1).
 */
  static readonly DATA_FORMAT_BC1_RGBA_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1).
 */
  static readonly DATA_FORMAT_BC1_RGBA_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3).
 */
  static readonly DATA_FORMAT_BC2_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3).
 */
  static readonly DATA_FORMAT_BC2_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5).
 */
  static readonly DATA_FORMAT_BC3_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5).
 */
  static readonly DATA_FORMAT_BC3_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression.
 */
  static readonly DATA_FORMAT_BC4_UNORM_BLOCK: int;
/**
 * VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression.
 */
  static readonly DATA_FORMAT_BC4_SNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC).
 */
  static readonly DATA_FORMAT_BC5_UNORM_BLOCK: int;
/**
 * VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC).
 */
  static readonly DATA_FORMAT_BC5_SNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 10 and 13 bits for the red/green/blue channels. Using BC6H texture compression (also known as BPTC HDR).
 */
  static readonly DATA_FORMAT_BC6H_UFLOAT_BLOCK: int;
/**
 * VRAM-compressed signed red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 10 and 13 bits for the red/green/blue channels. Using BC6H texture compression (also known as BPTC HDR).
 */
  static readonly DATA_FORMAT_BC6H_SFLOAT_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR.
 */
  static readonly DATA_FORMAT_BC7_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR.
 */
  static readonly DATA_FORMAT_BC7_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK: int;
/**
 * 11-bit VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_EAC_R11_UNORM_BLOCK: int;
/**
 * 11-bit VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_EAC_R11_SNORM_BLOCK: int;
/**
 * 11-bit VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_EAC_R11G11_UNORM_BLOCK: int;
/**
 * 11-bit VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. Using ETC2 texture compression.
 */
  static readonly DATA_FORMAT_EAC_R11G11_SNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_4x4_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_4x4_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_5x4_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_5x4_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_5x5_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_5x5_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_6x5_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_6x5_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_6x6_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_6x6_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_8x5_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_8x5_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_8x6_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_8x6_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_8x8_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_8x8_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x5_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x5_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x6_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x6_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x8_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x8_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x10_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_10x10_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_12x10_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_12x10_SRGB_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_12x12_UNORM_BLOCK: int;
/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 */
  static readonly DATA_FORMAT_ASTC_12x12_SRGB_BLOCK: int;
/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G8B8G8R8_422_UNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_B8G8R8G8_422_UNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM: int;
/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM: int;
/**
 * 10-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R10X6_UNORM_PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R10X6G10X6_UNORM_2PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 */
  static readonly DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 */
  static readonly DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16: int;
/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R12X4_UNORM_PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R12X4G12X4_UNORM_2PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 */
  static readonly DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 */
  static readonly DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16: int;
/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16: int;
/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G16B16G16R16_422_UNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_B16G16R16G16_422_UNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 */
  static readonly DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM: int;
/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.
 */
  static readonly DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM: int;
/**
 * Represents the size of the `DataFormat` enum.
 */
  static readonly DATA_FORMAT_MAX: int;
/**
 * Vertex shader barrier mask.
 */
  static readonly BARRIER_MASK_VERTEX: int;
/**
 * Fragment shader barrier mask.
 */
  static readonly BARRIER_MASK_FRAGMENT: int;
/**
 * Compute barrier mask.
 */
  static readonly BARRIER_MASK_COMPUTE: int;
/**
 * Transfer barrier mask.
 */
  static readonly BARRIER_MASK_TRANSFER: int;
/**
 * Raster barrier mask (vertex and fragment). Equivalent to `BARRIER_MASK_VERTEX | BARRIER_MASK_FRAGMENT`.
 */
  static readonly BARRIER_MASK_RASTER: int;
/**
 * Barrier mask for all types (vertex, fragment, compute, transfer).
 */
  static readonly BARRIER_MASK_ALL_BARRIERS: int;
/**
 * No barrier for any type.
 */
  static readonly BARRIER_MASK_NO_BARRIER: int;
/**
 * 1-dimensional texture.
 */
  static readonly TEXTURE_TYPE_1D: int;
/**
 * 2-dimensional texture.
 */
  static readonly TEXTURE_TYPE_2D: int;
/**
 * 3-dimensional texture.
 */
  static readonly TEXTURE_TYPE_3D: int;
/**
 * `Cubemap` texture.
 */
  static readonly TEXTURE_TYPE_CUBE: int;
/**
 * Array of 1-dimensional textures.
 */
  static readonly TEXTURE_TYPE_1D_ARRAY: int;
/**
 * Array of 2-dimensional textures.
 */
  static readonly TEXTURE_TYPE_2D_ARRAY: int;
/**
 * Array of `Cubemap` textures.
 */
  static readonly TEXTURE_TYPE_CUBE_ARRAY: int;
/**
 * Represents the size of the `TextureType` enum.
 */
  static readonly TEXTURE_TYPE_MAX: int;
/**
 * Perform 1 texture sample (this is the fastest but lowest-quality for antialiasing).
 */
  static readonly TEXTURE_SAMPLES_1: int;
/**
 * Perform 2 texture samples.
 */
  static readonly TEXTURE_SAMPLES_2: int;
/**
 * Perform 4 texture samples.
 */
  static readonly TEXTURE_SAMPLES_4: int;
/**
 * Perform 8 texture samples. Not supported on mobile GPUs (including Apple Silicon).
 */
  static readonly TEXTURE_SAMPLES_8: int;
/**
 * Perform 16 texture samples. Not supported on mobile GPUs and many desktop GPUs.
 */
  static readonly TEXTURE_SAMPLES_16: int;
/**
 * Perform 32 texture samples. Not supported on most GPUs.
 */
  static readonly TEXTURE_SAMPLES_32: int;
/**
 * Perform 64 texture samples (this is the slowest but highest-quality for antialiasing). Not supported on most GPUs.
 */
  static readonly TEXTURE_SAMPLES_64: int;
/**
 * Represents the size of the `TextureSamples` enum.
 */
  static readonly TEXTURE_SAMPLES_MAX: int;
/**
 * Texture can be sampled.
 */
  static readonly TEXTURE_USAGE_SAMPLING_BIT: int;
/**
 * Texture can be used as a color attachment in a framebuffer.
 */
  static readonly TEXTURE_USAGE_COLOR_ATTACHMENT_BIT: int;
/**
 * Texture can be used as a depth/stencil attachment in a framebuffer.
 */
  static readonly TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT: int;
/**
 * Texture can be used as a storage image (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage).
 */
  static readonly TEXTURE_USAGE_STORAGE_BIT: int;
/**
 * Texture can be used as a storage image (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage) with support for atomic operations.
 */
  static readonly TEXTURE_USAGE_STORAGE_ATOMIC_BIT: int;
/**
 * Texture can be read back on the CPU using `texture_get_data` faster than without this bit, since it is always kept in the system memory.
 */
  static readonly TEXTURE_USAGE_CPU_READ_BIT: int;
/**
 * Texture can be updated using `texture_update`.
 */
  static readonly TEXTURE_USAGE_CAN_UPDATE_BIT: int;
/**
 * Texture can be a source for `texture_copy`.
 */
  static readonly TEXTURE_USAGE_CAN_COPY_FROM_BIT: int;
/**
 * Texture can be a destination for `texture_copy`.
 */
  static readonly TEXTURE_USAGE_CAN_COPY_TO_BIT: int;
/**
 * Texture can be used as a input attachment (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-inputattachment) in a framebuffer.
 */
  static readonly TEXTURE_USAGE_INPUT_ATTACHMENT_BIT: int;
/**
 * Return the sampled value as-is.
 */
  static readonly TEXTURE_SWIZZLE_IDENTITY: int;
/**
 * Always return `0.0` when sampling.
 */
  static readonly TEXTURE_SWIZZLE_ZERO: int;
/**
 * Always return `1.0` when sampling.
 */
  static readonly TEXTURE_SWIZZLE_ONE: int;
/**
 * Sample the red color channel.
 */
  static readonly TEXTURE_SWIZZLE_R: int;
/**
 * Sample the green color channel.
 */
  static readonly TEXTURE_SWIZZLE_G: int;
/**
 * Sample the blue color channel.
 */
  static readonly TEXTURE_SWIZZLE_B: int;
/**
 * Sample the alpha channel.
 */
  static readonly TEXTURE_SWIZZLE_A: int;
/**
 * Represents the size of the `TextureSwizzle` enum.
 */
  static readonly TEXTURE_SWIZZLE_MAX: int;
/**
 * 2-dimensional texture slice.
 */
  static readonly TEXTURE_SLICE_2D: int;
/**
 * Cubemap texture slice.
 */
  static readonly TEXTURE_SLICE_CUBEMAP: int;
/**
 * 3-dimensional texture slice.
 */
  static readonly TEXTURE_SLICE_3D: int;
/**
 * Nearest-neighbor sampler filtering. Sampling at higher resolutions than the source will result in a pixelated look.
 */
  static readonly SAMPLER_FILTER_NEAREST: int;
/**
 * Bilinear sampler filtering. Sampling at higher resolutions than the source will result in a blurry look.
 */
  static readonly SAMPLER_FILTER_LINEAR: int;
/**
 * Sample with repeating enabled.
 */
  static readonly SAMPLER_REPEAT_MODE_REPEAT: int;
/**
 * Sample with mirrored repeating enabled. When sampling outside the `[0.0, 1.0]` range, return a mirrored version of the sampler. This mirrored version is mirrored again if sampling further away, with the pattern repeating indefinitely.
 */
  static readonly SAMPLER_REPEAT_MODE_MIRRORED_REPEAT: int;
/**
 * Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the color of the last pixel on the edge.
 */
  static readonly SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE: int;
/**
 * Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the specified `RDSamplerState.border_color`.
 */
  static readonly SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER: int;
/**
 * Sample with mirrored repeating enabled, but only once. When sampling in the `[-1.0, 0.0]` range, return a mirrored version of the sampler. When sampling outside the `[-1.0, 1.0]` range, return the color of the last pixel on the edge.
 */
  static readonly SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE: int;
/**
 * Represents the size of the `SamplerRepeatMode` enum.
 */
  static readonly SAMPLER_REPEAT_MODE_MAX: int;
/**
 * Return a floating-point transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is `SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`.
 */
  static readonly SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK: int;
/**
 * Return a integer transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is `SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`.
 */
  static readonly SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK: int;
/**
 * Return a floating-point opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is `SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`.
 */
  static readonly SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK: int;
/**
 * Return a integer opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is `SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`.
 */
  static readonly SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK: int;
/**
 * Return a floating-point opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is `SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`.
 */
  static readonly SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE: int;
/**
 * Return a integer opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is `SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`.
 */
  static readonly SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE: int;
/**
 * Represents the size of the `SamplerBorderColor` enum.
 */
  static readonly SAMPLER_BORDER_COLOR_MAX: int;
/**
 * Vertex attribute addressing is a function of the vertex. This is used to specify the rate at which vertex attributes are pulled from buffers.
 */
  static readonly VERTEX_FREQUENCY_VERTEX: int;
/**
 * Vertex attribute addressing is a function of the instance index. This is used to specify the rate at which vertex attributes are pulled from buffers.
 */
  static readonly VERTEX_FREQUENCY_INSTANCE: int;
/**
 * Index buffer in 16-bit unsigned integer format. This limits the maximum index that can be specified to `65535`.
 */
  static readonly INDEX_BUFFER_FORMAT_UINT16: int;
/**
 * Index buffer in 32-bit unsigned integer format. This limits the maximum index that can be specified to `4294967295`.
 */
  static readonly INDEX_BUFFER_FORMAT_UINT32: int;
  static readonly STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT: int;
/**
 * Optionally, set this flag if you wish to use `buffer_get_device_address` functionality. You must first check the GPU supports it:
 * 
 * 			```gdscript
 * 
 * 			rd = RenderingServer.get_rendering_device()
 * 
 * 			if rd.has_feature(RenderingDevice.SUPPORTS_BUFFER_DEVICE_ADDRESS):
 * 			      storage_buffer = rd.storage_buffer_create(bytes.size(), bytes, RenderingDevice.STORAGE_BUFFER_USAGE_SHADER_DEVICE_ADDRESS):
 * 			      storage_buffer_address = rd.buffer_get_device_address(storage_buffer)
 * 			
 * 
 * ```
 * 
 */
  static readonly BUFFER_CREATION_DEVICE_ADDRESS_BIT: int;
/**
 * Set this flag so that it is created as storage. This is useful if Compute Shaders need access (for reading or writing) to the buffer, e.g. skeletal animations are processed in Compute Shaders which need access to vertex buffers, to be later consumed by vertex shaders as part of the regular rasterization pipeline.
 */
  static readonly BUFFER_CREATION_AS_STORAGE_BIT: int;
/**
 * Sampler uniform.
 */
  static readonly UNIFORM_TYPE_SAMPLER: int;
/**
 * Sampler uniform with a texture.
 */
  static readonly UNIFORM_TYPE_SAMPLER_WITH_TEXTURE: int;
/**
 * Texture uniform.
 */
  static readonly UNIFORM_TYPE_TEXTURE: int;
/**
 * Image uniform.
 */
  static readonly UNIFORM_TYPE_IMAGE: int;
/**
 * Texture buffer uniform.
 */
  static readonly UNIFORM_TYPE_TEXTURE_BUFFER: int;
/**
 * Sampler uniform with a texture buffer.
 */
  static readonly UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER: int;
/**
 * Image buffer uniform.
 */
  static readonly UNIFORM_TYPE_IMAGE_BUFFER: int;
/**
 * Uniform buffer uniform.
 */
  static readonly UNIFORM_TYPE_UNIFORM_BUFFER: int;
/**
 * Storage buffer (https://vkguide.dev/docs/chapter-4/storage_buffers/) uniform.
 */
  static readonly UNIFORM_TYPE_STORAGE_BUFFER: int;
/**
 * Input attachment uniform.
 */
  static readonly UNIFORM_TYPE_INPUT_ATTACHMENT: int;
/**
 * Represents the size of the `UniformType` enum.
 */
  static readonly UNIFORM_TYPE_MAX: int;
/**
 * Point rendering primitive (with constant size, regardless of distance from camera).
 */
  static readonly RENDER_PRIMITIVE_POINTS: int;
/**
 * Line list rendering primitive. Lines are drawn separated from each other.
 */
  static readonly RENDER_PRIMITIVE_LINES: int;
/**
 * Line list rendering primitive with adjacency. (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-lists-with-adjacency)
 * 
 * **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 */
  static readonly RENDER_PRIMITIVE_LINES_WITH_ADJACENCY: int;
/**
 * Line strip rendering primitive. Lines drawn are connected to the previous vertex.
 */
  static readonly RENDER_PRIMITIVE_LINESTRIPS: int;
/**
 * Line strip rendering primitive with adjacency. (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-strips-with-adjacency)
 * 
 * **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 */
  static readonly RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY: int;
/**
 * Triangle list rendering primitive. Triangles are drawn separated from each other.
 */
  static readonly RENDER_PRIMITIVE_TRIANGLES: int;
/**
 * Triangle list rendering primitive with adjacency. (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-lists-with-adjacency)
 * 
 * **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 */
  static readonly RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY: int;
/**
 * Triangle strip rendering primitive. Triangles drawn are connected to the previous triangle.
 */
  static readonly RENDER_PRIMITIVE_TRIANGLE_STRIPS: int;
/**
 * Triangle strip rendering primitive with adjacency. (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-strips-with-adjacency)
 * 
 * **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 */
  static readonly RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY: int;
/**
 * Triangle strip rendering primitive with *primitive restart* enabled. Triangles drawn are connected to the previous triangle, but a primitive restart index can be specified before drawing to create a second triangle strip after the specified index.
 * 
 * **Note:** Only compatible with indexed draws.
 */
  static readonly RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX: int;
/**
 * Tessellation patch rendering primitive. Only useful with tessellation shaders, which can be used to deform these patches.
 */
  static readonly RENDER_PRIMITIVE_TESSELATION_PATCH: int;
/**
 * Represents the size of the `RenderPrimitive` enum.
 */
  static readonly RENDER_PRIMITIVE_MAX: int;
/**
 * Do not use polygon front face or backface culling.
 */
  static readonly POLYGON_CULL_DISABLED: int;
/**
 * Use polygon frontface culling (faces pointing towards the camera are hidden).
 */
  static readonly POLYGON_CULL_FRONT: int;
/**
 * Use polygon backface culling (faces pointing away from the camera are hidden).
 */
  static readonly POLYGON_CULL_BACK: int;
/**
 * Clockwise winding order to determine which face of a polygon is its front face.
 */
  static readonly POLYGON_FRONT_FACE_CLOCKWISE: int;
/**
 * Counter-clockwise winding order to determine which face of a polygon is its front face.
 */
  static readonly POLYGON_FRONT_FACE_COUNTER_CLOCKWISE: int;
/**
 * Keep the current stencil value.
 */
  static readonly STENCIL_OP_KEEP: int;
/**
 * Set the stencil value to `0`.
 */
  static readonly STENCIL_OP_ZERO: int;
/**
 * Replace the existing stencil value with the new one.
 */
  static readonly STENCIL_OP_REPLACE: int;
/**
 * Increment the existing stencil value and clamp to the maximum representable unsigned value if reached. Stencil bits are considered as an unsigned integer.
 */
  static readonly STENCIL_OP_INCREMENT_AND_CLAMP: int;
/**
 * Decrement the existing stencil value and clamp to the minimum value if reached. Stencil bits are considered as an unsigned integer.
 */
  static readonly STENCIL_OP_DECREMENT_AND_CLAMP: int;
/**
 * Bitwise-invert the existing stencil value.
 */
  static readonly STENCIL_OP_INVERT: int;
/**
 * Increment the stencil value and wrap around to `0` if reaching the maximum representable unsigned. Stencil bits are considered as an unsigned integer.
 */
  static readonly STENCIL_OP_INCREMENT_AND_WRAP: int;
/**
 * Decrement the stencil value and wrap around to the maximum representable unsigned if reaching the minimum. Stencil bits are considered as an unsigned integer.
 */
  static readonly STENCIL_OP_DECREMENT_AND_WRAP: int;
/**
 * Represents the size of the `StencilOperation` enum.
 */
  static readonly STENCIL_OP_MAX: int;
/**
 * "Never" comparison (opposite of `COMPARE_OP_ALWAYS`).
 */
  static readonly COMPARE_OP_NEVER: int;
/**
 * "Less than" comparison.
 */
  static readonly COMPARE_OP_LESS: int;
/**
 * "Equal" comparison.
 */
  static readonly COMPARE_OP_EQUAL: int;
/**
 * "Less than or equal" comparison.
 */
  static readonly COMPARE_OP_LESS_OR_EQUAL: int;
/**
 * "Greater than" comparison.
 */
  static readonly COMPARE_OP_GREATER: int;
/**
 * "Not equal" comparison.
 */
  static readonly COMPARE_OP_NOT_EQUAL: int;
/**
 * "Greater than or equal" comparison.
 */
  static readonly COMPARE_OP_GREATER_OR_EQUAL: int;
/**
 * "Always" comparison (opposite of `COMPARE_OP_NEVER`).
 */
  static readonly COMPARE_OP_ALWAYS: int;
/**
 * Represents the size of the `CompareOperator` enum.
 */
  static readonly COMPARE_OP_MAX: int;
/**
 * Clear logic operation (result is always `0`). See also `LOGIC_OP_SET`.
 */
  static readonly LOGIC_OP_CLEAR: int;
/**
 * AND logic operation.
 */
  static readonly LOGIC_OP_AND: int;
/**
 * AND logic operation with the *destination* operand being inverted. See also `LOGIC_OP_AND_INVERTED`.
 */
  static readonly LOGIC_OP_AND_REVERSE: int;
/**
 * Copy logic operation (keeps the *source* value as-is). See also `LOGIC_OP_COPY_INVERTED` and `LOGIC_OP_NO_OP`.
 */
  static readonly LOGIC_OP_COPY: int;
/**
 * AND logic operation with the *source* operand being inverted. See also `LOGIC_OP_AND_REVERSE`.
 */
  static readonly LOGIC_OP_AND_INVERTED: int;
/**
 * No-op logic operation (keeps the *destination* value as-is). See also `LOGIC_OP_COPY`.
 */
  static readonly LOGIC_OP_NO_OP: int;
/**
 * Exclusive or (XOR) logic operation.
 */
  static readonly LOGIC_OP_XOR: int;
/**
 * OR logic operation.
 */
  static readonly LOGIC_OP_OR: int;
/**
 * Not-OR (NOR) logic operation.
 */
  static readonly LOGIC_OP_NOR: int;
/**
 * Not-XOR (XNOR) logic operation.
 */
  static readonly LOGIC_OP_EQUIVALENT: int;
/**
 * Invert logic operation.
 */
  static readonly LOGIC_OP_INVERT: int;
/**
 * OR logic operation with the *destination* operand being inverted. See also `LOGIC_OP_OR_REVERSE`.
 */
  static readonly LOGIC_OP_OR_REVERSE: int;
/**
 * NOT logic operation (inverts the value). See also `LOGIC_OP_COPY`.
 */
  static readonly LOGIC_OP_COPY_INVERTED: int;
/**
 * OR logic operation with the *source* operand being inverted. See also `LOGIC_OP_OR_REVERSE`.
 */
  static readonly LOGIC_OP_OR_INVERTED: int;
/**
 * Not-AND (NAND) logic operation.
 */
  static readonly LOGIC_OP_NAND: int;
/**
 * SET logic operation (result is always `1`). See also `LOGIC_OP_CLEAR`.
 */
  static readonly LOGIC_OP_SET: int;
/**
 * Represents the size of the `LogicOperation` enum.
 */
  static readonly LOGIC_OP_MAX: int;
/**
 * Constant `0.0` blend factor.
 */
  static readonly BLEND_FACTOR_ZERO: int;
/**
 * Constant `1.0` blend factor.
 */
  static readonly BLEND_FACTOR_ONE: int;
/**
 * Color blend factor is `source color`. Alpha blend factor is `source alpha`.
 */
  static readonly BLEND_FACTOR_SRC_COLOR: int;
/**
 * Color blend factor is `1.0 - source color`. Alpha blend factor is `1.0 - source alpha`.
 */
  static readonly BLEND_FACTOR_ONE_MINUS_SRC_COLOR: int;
/**
 * Color blend factor is `destination color`. Alpha blend factor is `destination alpha`.
 */
  static readonly BLEND_FACTOR_DST_COLOR: int;
/**
 * Color blend factor is `1.0 - destination color`. Alpha blend factor is `1.0 - destination alpha`.
 */
  static readonly BLEND_FACTOR_ONE_MINUS_DST_COLOR: int;
/**
 * Color and alpha blend factor is `source alpha`.
 */
  static readonly BLEND_FACTOR_SRC_ALPHA: int;
/**
 * Color and alpha blend factor is `1.0 - source alpha`.
 */
  static readonly BLEND_FACTOR_ONE_MINUS_SRC_ALPHA: int;
/**
 * Color and alpha blend factor is `destination alpha`.
 */
  static readonly BLEND_FACTOR_DST_ALPHA: int;
/**
 * Color and alpha blend factor is `1.0 - destination alpha`.
 */
  static readonly BLEND_FACTOR_ONE_MINUS_DST_ALPHA: int;
/**
 * Color blend factor is `blend constant color`. Alpha blend factor is `blend constant alpha` (see `draw_list_set_blend_constants`).
 */
  static readonly BLEND_FACTOR_CONSTANT_COLOR: int;
/**
 * Color blend factor is `1.0 - blend constant color`. Alpha blend factor is `1.0 - blend constant alpha` (see `draw_list_set_blend_constants`).
 */
  static readonly BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR: int;
/**
 * Color and alpha blend factor is `blend constant alpha` (see `draw_list_set_blend_constants`).
 */
  static readonly BLEND_FACTOR_CONSTANT_ALPHA: int;
/**
 * Color and alpha blend factor is `1.0 - blend constant alpha` (see `draw_list_set_blend_constants`).
 */
  static readonly BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA: int;
/**
 * Color blend factor is `min(source alpha, 1.0 - destination alpha)`. Alpha blend factor is `1.0`.
 */
  static readonly BLEND_FACTOR_SRC_ALPHA_SATURATE: int;
/**
 * Color blend factor is `second source color`. Alpha blend factor is `second source alpha`. Only relevant for dual-source blending.
 */
  static readonly BLEND_FACTOR_SRC1_COLOR: int;
/**
 * Color blend factor is `1.0 - second source color`. Alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending.
 */
  static readonly BLEND_FACTOR_ONE_MINUS_SRC1_COLOR: int;
/**
 * Color and alpha blend factor is `second source alpha`. Only relevant for dual-source blending.
 */
  static readonly BLEND_FACTOR_SRC1_ALPHA: int;
/**
 * Color and alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending.
 */
  static readonly BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA: int;
/**
 * Represents the size of the `BlendFactor` enum.
 */
  static readonly BLEND_FACTOR_MAX: int;
/**
 * Additive blending operation (`source + destination`).
 */
  static readonly BLEND_OP_ADD: int;
/**
 * Subtractive blending operation (`source - destination`).
 */
  static readonly BLEND_OP_SUBTRACT: int;
/**
 * Reverse subtractive blending operation (`destination - source`).
 */
  static readonly BLEND_OP_REVERSE_SUBTRACT: int;
/**
 * Minimum blending operation (keep the lowest value of the two).
 */
  static readonly BLEND_OP_MINIMUM: int;
/**
 * Maximum blending operation (keep the highest value of the two).
 */
  static readonly BLEND_OP_MAXIMUM: int;
/**
 * Represents the size of the `BlendOperation` enum.
 */
  static readonly BLEND_OP_MAX: int;
/**
 * Allows dynamically changing the width of rendering lines.
 */
  static readonly DYNAMIC_STATE_LINE_WIDTH: int;
/**
 * Allows dynamically changing the depth bias.
 */
  static readonly DYNAMIC_STATE_DEPTH_BIAS: int;
  static readonly DYNAMIC_STATE_BLEND_CONSTANTS: int;
  static readonly DYNAMIC_STATE_DEPTH_BOUNDS: int;
  static readonly DYNAMIC_STATE_STENCIL_COMPARE_MASK: int;
  static readonly DYNAMIC_STATE_STENCIL_WRITE_MASK: int;
  static readonly DYNAMIC_STATE_STENCIL_REFERENCE: int;
/**
 * Load the previous contents of the framebuffer.
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_LOAD: int;
/**
 * Clear the whole framebuffer or its specified region.
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_CLEAR: int;
/**
 * Ignore the previous contents of the framebuffer. This is the fastest option if you'll overwrite all of the pixels and don't need to read any of them.
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_DISCARD: int;
/**
 * Represents the size of the `InitialAction` enum.
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_MAX: int;
/**
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_CLEAR_REGION: int;
/**
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_CLEAR_REGION_CONTINUE: int;
/**
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_KEEP: int;
/**
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_DROP: int;
/**
 * @deprecated Initial actions are solved automatically by RenderingDevice.
 */
  static readonly INITIAL_ACTION_CONTINUE: int;
/**
 * Store the result of the draw list in the framebuffer. This is generally what you want to do.
 * @deprecated Final actions are solved automatically by RenderingDevice.
 */
  static readonly FINAL_ACTION_STORE: int;
/**
 * Discard the contents of the framebuffer. This is the fastest option if you don't need to use the results of the draw list.
 * @deprecated Final actions are solved automatically by RenderingDevice.
 */
  static readonly FINAL_ACTION_DISCARD: int;
/**
 * Represents the size of the `FinalAction` enum.
 * @deprecated Final actions are solved automatically by RenderingDevice.
 */
  static readonly FINAL_ACTION_MAX: int;
/**
 * @deprecated Final actions are solved automatically by RenderingDevice.
 */
  static readonly FINAL_ACTION_READ: int;
/**
 * @deprecated Final actions are solved automatically by RenderingDevice.
 */
  static readonly FINAL_ACTION_CONTINUE: int;
/**
 * Vertex shader stage. This can be used to manipulate vertices from a shader (but not create new vertices).
 */
  static readonly SHADER_STAGE_VERTEX: int;
/**
 * Fragment shader stage (called "pixel shader" in Direct3D). This can be used to manipulate pixels from a shader.
 */
  static readonly SHADER_STAGE_FRAGMENT: int;
/**
 * Tessellation control shader stage. This can be used to create additional geometry from a shader.
 */
  static readonly SHADER_STAGE_TESSELATION_CONTROL: int;
/**
 * Tessellation evaluation shader stage. This can be used to create additional geometry from a shader.
 */
  static readonly SHADER_STAGE_TESSELATION_EVALUATION: int;
/**
 * Compute shader stage. This can be used to run arbitrary computing tasks in a shader, performing them on the GPU instead of the CPU.
 */
  static readonly SHADER_STAGE_COMPUTE: int;
/**
 * Represents the size of the `ShaderStage` enum.
 */
  static readonly SHADER_STAGE_MAX: int;
/**
 * Vertex shader stage bit (see also `SHADER_STAGE_VERTEX`).
 */
  static readonly SHADER_STAGE_VERTEX_BIT: int;
/**
 * Fragment shader stage bit (see also `SHADER_STAGE_FRAGMENT`).
 */
  static readonly SHADER_STAGE_FRAGMENT_BIT: int;
/**
 * Tessellation control shader stage bit (see also `SHADER_STAGE_TESSELATION_CONTROL`).
 */
  static readonly SHADER_STAGE_TESSELATION_CONTROL_BIT: int;
/**
 * Tessellation evaluation shader stage bit (see also `SHADER_STAGE_TESSELATION_EVALUATION`).
 */
  static readonly SHADER_STAGE_TESSELATION_EVALUATION_BIT: int;
/**
 * Compute shader stage bit (see also `SHADER_STAGE_COMPUTE`).
 */
  static readonly SHADER_STAGE_COMPUTE_BIT: int;
/**
 * Khronos' GLSL shading language (used natively by OpenGL and Vulkan). This is the language used for core Godot shaders.
 */
  static readonly SHADER_LANGUAGE_GLSL: int;
/**
 * Microsoft's High-Level Shading Language (used natively by Direct3D, but can also be used in Vulkan).
 */
  static readonly SHADER_LANGUAGE_HLSL: int;
/**
 * Boolean specialization constant.
 */
  static readonly PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL: int;
/**
 * Integer specialization constant.
 */
  static readonly PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT: int;
/**
 * Floating-point specialization constant.
 */
  static readonly PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT: int;
/**
 * Features support for buffer device address extension.
 */
  static readonly SUPPORTS_BUFFER_DEVICE_ADDRESS: int;
/**
 * Maximum number of uniform sets that can be bound at a given time.
 */
  static readonly LIMIT_MAX_BOUND_UNIFORM_SETS: int;
/**
 * Maximum number of color framebuffer attachments that can be used at a given time.
 */
  static readonly LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS: int;
/**
 * Maximum number of textures that can be used per uniform set.
 */
  static readonly LIMIT_MAX_TEXTURES_PER_UNIFORM_SET: int;
/**
 * Maximum number of samplers that can be used per uniform set.
 */
  static readonly LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET: int;
/**
 * Maximum number of storage buffers (https://vkguide.dev/docs/chapter-4/storage_buffers/) per uniform set.
 */
  static readonly LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET: int;
/**
 * Maximum number of storage images per uniform set.
 */
  static readonly LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET: int;
/**
 * Maximum number of uniform buffers per uniform set.
 */
  static readonly LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET: int;
/**
 * Maximum index for an indexed draw command.
 */
  static readonly LIMIT_MAX_DRAW_INDEXED_INDEX: int;
/**
 * Maximum height of a framebuffer (in pixels).
 */
  static readonly LIMIT_MAX_FRAMEBUFFER_HEIGHT: int;
/**
 * Maximum width of a framebuffer (in pixels).
 */
  static readonly LIMIT_MAX_FRAMEBUFFER_WIDTH: int;
/**
 * Maximum number of texture array layers.
 */
  static readonly LIMIT_MAX_TEXTURE_ARRAY_LAYERS: int;
/**
 * Maximum supported 1-dimensional texture size (in pixels on a single axis).
 */
  static readonly LIMIT_MAX_TEXTURE_SIZE_1D: int;
/**
 * Maximum supported 2-dimensional texture size (in pixels on a single axis).
 */
  static readonly LIMIT_MAX_TEXTURE_SIZE_2D: int;
/**
 * Maximum supported 3-dimensional texture size (in pixels on a single axis).
 */
  static readonly LIMIT_MAX_TEXTURE_SIZE_3D: int;
/**
 * Maximum supported cubemap texture size (in pixels on a single axis of a single face).
 */
  static readonly LIMIT_MAX_TEXTURE_SIZE_CUBE: int;
/**
 * Maximum number of textures per shader stage.
 */
  static readonly LIMIT_MAX_TEXTURES_PER_SHADER_STAGE: int;
/**
 * Maximum number of samplers per shader stage.
 */
  static readonly LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE: int;
/**
 * Maximum number of storage buffers (https://vkguide.dev/docs/chapter-4/storage_buffers/) per shader stage.
 */
  static readonly LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE: int;
/**
 * Maximum number of storage images per shader stage.
 */
  static readonly LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE: int;
/**
 * Maximum number of uniform buffers per uniform set.
 */
  static readonly LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE: int;
/**
 * Maximum size of a push constant. A lot of devices are limited to 128 bytes, so try to avoid exceeding 128 bytes in push constants to ensure compatibility even if your GPU is reporting a higher value.
 */
  static readonly LIMIT_MAX_PUSH_CONSTANT_SIZE: int;
/**
 * Maximum size of a uniform buffer.
 */
  static readonly LIMIT_MAX_UNIFORM_BUFFER_SIZE: int;
/**
 * Maximum vertex input attribute offset.
 */
  static readonly LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET: int;
/**
 * Maximum number of vertex input attributes.
 */
  static readonly LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES: int;
/**
 * Maximum number of vertex input bindings.
 */
  static readonly LIMIT_MAX_VERTEX_INPUT_BINDINGS: int;
/**
 * Maximum vertex input binding stride.
 */
  static readonly LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE: int;
/**
 * Minimum uniform buffer offset alignment.
 */
  static readonly LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT: int;
/**
 * Maximum shared memory size for compute shaders.
 */
  static readonly LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE: int;
/**
 * Maximum number of workgroups for compute shaders on the X axis.
 */
  static readonly LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X: int;
/**
 * Maximum number of workgroups for compute shaders on the Y axis.
 */
  static readonly LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y: int;
/**
 * Maximum number of workgroups for compute shaders on the Z axis.
 */
  static readonly LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z: int;
/**
 * Maximum number of workgroup invocations for compute shaders.
 */
  static readonly LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS: int;
/**
 * Maximum workgroup size for compute shaders on the X axis.
 */
  static readonly LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X: int;
/**
 * Maximum workgroup size for compute shaders on the Y axis.
 */
  static readonly LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y: int;
/**
 * Maximum workgroup size for compute shaders on the Z axis.
 */
  static readonly LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z: int;
/**
 * Maximum viewport width (in pixels).
 */
  static readonly LIMIT_MAX_VIEWPORT_DIMENSIONS_X: int;
/**
 * Maximum viewport height (in pixels).
 */
  static readonly LIMIT_MAX_VIEWPORT_DIMENSIONS_Y: int;
/**
 * Returns the smallest value for `ProjectSettings.rendering/scaling_3d/scale` when using the MetalFX temporal upscaler.
 * 
 * **Note:** The returned value is multiplied by a factor of `1000000` to preserve 6 digits of precision. It must be divided by `1000000.0` to convert the value to a floating point number.
 */
  static readonly LIMIT_METALFX_TEMPORAL_SCALER_MIN_SCALE: int;
/**
 * Returns the largest value for `ProjectSettings.rendering/scaling_3d/scale` when using the MetalFX temporal upscaler.
 * 
 * **Note:** The returned value is multiplied by a factor of `1000000` to preserve 6 digits of precision. It must be divided by `1000000.0` to convert the value to a floating point number.
 */
  static readonly LIMIT_METALFX_TEMPORAL_SCALER_MAX_SCALE: int;
/**
 * Memory taken by textures.
 */
  static readonly MEMORY_TEXTURES: int;
/**
 * Memory taken by buffers.
 */
  static readonly MEMORY_BUFFERS: int;
/**
 * Total memory taken. This is greater than the sum of `MEMORY_TEXTURES` and `MEMORY_BUFFERS`, as it also includes miscellaneous memory usage.
 */
  static readonly MEMORY_TOTAL: int;
/**
 * Returned by functions that return an ID if a value is invalid.
 */
  static readonly INVALID_ID: int;
/**
 * Returned by functions that return a format ID if a value is invalid.
 */
  static readonly INVALID_FORMAT_ID: int;
  static readonly NONE: int;
  static readonly REFLECTION_PROBES: int;
  static readonly SKY_PASS: int;
  static readonly LIGHTMAPPER_PASS: int;
  static readonly SHADOW_PASS_DIRECTIONAL: int;
  static readonly SHADOW_PASS_CUBE: int;
  static readonly OPAQUE_PASS: int;
  static readonly ALPHA_PASS: int;
  static readonly TRANSPARENT_PASS: int;
  static readonly POST_PROCESSING_PASS: int;
  static readonly BLIT_PASS: int;
  static readonly UI_PASS: int;
  static readonly DEBUG_PASS: int;
/**
 * Do not clear or ignore any attachments.
 */
  static readonly DRAW_DEFAULT_ALL: int;
/**
 * Clear the first color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_0: int;
/**
 * Clear the second color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_1: int;
/**
 * Clear the third color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_2: int;
/**
 * Clear the fourth color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_3: int;
/**
 * Clear the fifth color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_4: int;
/**
 * Clear the sixth color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_5: int;
/**
 * Clear the seventh color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_6: int;
/**
 * Clear the eighth color attachment.
 */
  static readonly DRAW_CLEAR_COLOR_7: int;
/**
 * Mask for clearing all color attachments.
 */
  static readonly DRAW_CLEAR_COLOR_MASK: int;
/**
 * Clear all color attachments.
 */
  static readonly DRAW_CLEAR_COLOR_ALL: int;
/**
 * Ignore the previous contents of the first color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_0: int;
/**
 * Ignore the previous contents of the second color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_1: int;
/**
 * Ignore the previous contents of the third color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_2: int;
/**
 * Ignore the previous contents of the fourth color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_3: int;
/**
 * Ignore the previous contents of the fifth color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_4: int;
/**
 * Ignore the previous contents of the sixth color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_5: int;
/**
 * Ignore the previous contents of the seventh color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_6: int;
/**
 * Ignore the previous contents of the eighth color attachment.
 */
  static readonly DRAW_IGNORE_COLOR_7: int;
/**
 * Mask for ignoring all the previous contents of the color attachments.
 */
  static readonly DRAW_IGNORE_COLOR_MASK: int;
/**
 * Ignore the previous contents of all color attachments.
 */
  static readonly DRAW_IGNORE_COLOR_ALL: int;
/**
 * Clear the depth attachment.
 */
  static readonly DRAW_CLEAR_DEPTH: int;
/**
 * Ignore the previous contents of the depth attachment.
 */
  static readonly DRAW_IGNORE_DEPTH: int;
/**
 * Clear the stencil attachment.
 */
  static readonly DRAW_CLEAR_STENCIL: int;
/**
 * Ignore the previous contents of the stencil attachment.
 */
  static readonly DRAW_IGNORE_STENCIL: int;
/**
 * Clear all attachments.
 */
  static readonly DRAW_CLEAR_ALL: int;
/**
 * Ignore the previous contents of all attachments.
 */
  static readonly DRAW_IGNORE_ALL: int;
}
