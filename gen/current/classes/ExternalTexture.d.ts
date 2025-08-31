import type { GodotArray, GodotDictionary, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * Texture which displays the content of an external buffer.
 * 
 * Displays the content of an external buffer provided by the platform.
 * Requires the OES_EGL_image_external (https://registry.khronos.org/OpenGL/extensions/OES/OES_EGL_image_external.txt) extension (OpenGL) or VK_ANDROID_external_memory_android_hardware_buffer (https://registry.khronos.org/vulkan/specs/1.1-extensions/html/vkspec.html#VK_ANDROID_external_memory_android_hardware_buffer) extension (Vulkan).
 * 
 * **Note:** This is currently only supported in Android builds.
 */
export class ExternalTexture extends Texture2D {
  resourceLocalToScene: boolean;
/**
 * External texture size.
 */
  size: Vector2;
/**
 * Returns the external texture ID.
 * Depending on your use case, you may need to pass this to platform APIs, for example, when creating an `android.graphics.SurfaceTexture` on Android.
 * @returns int
 */
  getExternalTextureId(): int;
/**
 * Sets the external buffer ID.
 * Depending on your use case, you may need to call this with data received from a platform API, for example, `SurfaceTexture.getHardwareBuffer()` on Android.
 * @param externalBufferId int
 */
  setExternalBufferId(externalBufferId: int): void;
}
