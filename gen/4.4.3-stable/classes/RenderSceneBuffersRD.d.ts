import type { GodotArray, GodotDictionary, RDTextureFormat, RDTextureView, RID, RenderSceneBuffers, StringName, Vector2i, float, int } from "../index.d.ts";
/**
 * Render scene buffer implementation for the RenderingDevice based renderers.
 * 
 * This object manages all 3D rendering buffers for the rendering device based renderers. An instance of this object is created for every viewport that has 3D rendering enabled.
 * All buffers are organized in **contexts**. The default context is called **render_buffers** and can contain amongst others the color buffer, depth buffer, velocity buffers, VRS density map and MSAA variants of these buffers.
 * Buffers are only guaranteed to exist during rendering of the viewport.
 * 
 * **Note:** This is an internal rendering server object, do not instantiate this from script.
 */
export class RenderSceneBuffersRD extends RenderSceneBuffers {
/**
 * Frees all buffers related to this context.
 * @param context StringName
 */
  clearContext(context: StringName): void;
/**
 * Create a new texture with the given definition and cache this under the given name. Will return the existing texture if it already exists.
 * @param context StringName
 * @param name StringName
 * @param dataFormat int
 * @param usageBits int
 * @param textureSamples int
 * @param size Vector2i
 * @param layers int
 * @param mipmaps int
 * @param unique boolean
 * @param discardable boolean
 * @returns RID
 */
  createTexture(context: StringName, name: StringName, dataFormat: int, usageBits: int, textureSamples: int, size: Vector2i, layers: int, mipmaps: int, unique: boolean, discardable: boolean): RID;
/**
 * Create a new texture using the given format and view and cache this under the given name. Will return the existing texture if it already exists.
 * @param context StringName
 * @param name StringName
 * @param format RDTextureFormat
 * @param view RDTextureView
 * @param unique boolean
 * @returns RID
 */
  createTextureFromFormat(context: StringName, name: StringName, format: RDTextureFormat, view: RDTextureView, unique: boolean): RID;
/**
 * Create a new texture view for an existing texture and cache this under the given `view_name`. Will return the existing texture view if it already exists. Will error if the source texture doesn't exist.
 * @param context StringName
 * @param name StringName
 * @param viewName StringName
 * @param view RDTextureView
 * @returns RID
 */
  createTextureView(context: StringName, name: StringName, viewName: StringName, view: RDTextureView): RID;
/**
 * Returns the specified layer from the color texture we are rendering 3D content to.
 * If `msaa` is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.
 * @param layer int
 * @param msaa boolean (optional, default: false)
 * @returns RID
 */
  getColorLayer(layer: int, msaa?: boolean): RID;
/**
 * Returns the color texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.
 * If `msaa` is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.
 * @param msaa boolean (optional, default: false)
 * @returns RID
 */
  getColorTexture(msaa?: boolean): RID;
/**
 * Returns the specified layer from the depth texture we are rendering 3D content to.
 * If `msaa` is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.
 * @param layer int
 * @param msaa boolean (optional, default: false)
 * @returns RID
 */
  getDepthLayer(layer: int, msaa?: boolean): RID;
/**
 * Returns the depth texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.
 * If `msaa` is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.
 * @param msaa boolean (optional, default: false)
 * @returns RID
 */
  getDepthTexture(msaa?: boolean): RID;
/**
 * Returns the FSR sharpness value used while rendering the 3D content (if `get_scaling_3d_mode` is an FSR mode).
 * @returns float
 */
  getFsrSharpness(): float;
/**
 * Returns the internal size of the render buffer (size before upscaling) with which textures are created by default.
 * @returns Vector2i
 */
  getInternalSize(): Vector2i;
/**
 * Returns the applied 3D MSAA mode for this viewport.
 * @returns int
 */
  getMsaa3d(): int;
/**
 * Returns the render target associated with this buffers object.
 * @returns RID
 */
  getRenderTarget(): RID;
/**
 * Returns the scaling mode used for upscaling.
 * @returns int
 */
  getScaling3dMode(): int;
/**
 * Returns the screen-space antialiasing method applied.
 * @returns int
 */
  getScreenSpaceAa(): int;
/**
 * Returns the target size of the render buffer (size after upscaling).
 * @returns Vector2i
 */
  getTargetSize(): Vector2i;
/**
 * Returns a cached texture with this name.
 * @param context StringName
 * @param name StringName
 * @returns RID
 */
  getTexture(context: StringName, name: StringName): RID;
/**
 * Returns the texture format information with which a cached texture was created.
 * @param context StringName
 * @param name StringName
 * @returns RDTextureFormat
 */
  getTextureFormat(context: StringName, name: StringName): RDTextureFormat;
/**
 * Returns the number of MSAA samples used.
 * @returns int
 */
  getTextureSamples(): int;
/**
 * Returns a specific slice (layer or mipmap) for a cached texture.
 * @param context StringName
 * @param name StringName
 * @param layer int
 * @param mipmap int
 * @param layers int
 * @param mipmaps int
 * @returns RID
 */
  getTextureSlice(context: StringName, name: StringName, layer: int, mipmap: int, layers: int, mipmaps: int): RID;
/**
 * Returns the texture size of a given slice of a cached texture.
 * @param context StringName
 * @param name StringName
 * @param mipmap int
 * @returns Vector2i
 */
  getTextureSliceSize(context: StringName, name: StringName, mipmap: int): Vector2i;
/**
 * Returns a specific view of a slice (layer or mipmap) for a cached texture.
 * @param context StringName
 * @param name StringName
 * @param layer int
 * @param mipmap int
 * @param layers int
 * @param mipmaps int
 * @param view RDTextureView
 * @returns RID
 */
  getTextureSliceView(context: StringName, name: StringName, layer: int, mipmap: int, layers: int, mipmaps: int, view: RDTextureView): RID;
/**
 * Returns `true` if debanding is enabled.
 * @returns boolean
 */
  getUseDebanding(): boolean;
/**
 * Returns `true` if TAA is enabled.
 * @returns boolean
 */
  getUseTaa(): boolean;
/**
 * Returns the specified layer from the velocity texture we are rendering 3D content to.
 * @param layer int
 * @param msaa boolean (optional, default: false)
 * @returns RID
 */
  getVelocityLayer(layer: int, msaa?: boolean): RID;
/**
 * Returns the velocity texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.
 * If `msaa` is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.
 * @param msaa boolean (optional, default: false)
 * @returns RID
 */
  getVelocityTexture(msaa?: boolean): RID;
/**
 * Returns the view count for the associated viewport.
 * @returns int
 */
  getViewCount(): int;
/**
 * Returns `true` if a cached texture exists for this name.
 * @param context StringName
 * @param name StringName
 * @returns boolean
 */
  hasTexture(context: StringName, name: StringName): boolean;
}
