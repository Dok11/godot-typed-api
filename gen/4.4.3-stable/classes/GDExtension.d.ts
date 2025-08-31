import type { GodotArray, GodotDictionary, Resource, float, int } from "../index.d.ts";
/**
 * A native library for GDExtension.
 * 
 * The `GDExtension` resource type represents a shared library (https://en.wikipedia.org/wiki/Shared_library) which can expand the functionality of the engine. The `GDExtensionManager` singleton is responsible for loading, reloading, and unloading `GDExtension` resources.
 * 
 * **Note:** GDExtension itself is not a scripting language and has no relation to `GDScript` resources.
 */
export class GDExtension extends Resource {
/**
 * Returns the lowest level required for this extension to be properly initialized (see the `InitializationLevel` enum).
 * @returns int
 */
  getMinimumLibraryInitializationLevel(): int;
/**
 * Returns `true` if this extension's library has been opened.
 * @returns boolean
 */
  isLibraryOpen(): boolean;
/**
 * The library is initialized at the same time as the core features of the engine.
 */
  static readonly INITIALIZATION_LEVEL_CORE: int;
/**
 * The library is initialized at the same time as the engine's servers (such as `RenderingServer` or `PhysicsServer3D`).
 */
  static readonly INITIALIZATION_LEVEL_SERVERS: int;
/**
 * The library is initialized at the same time as the engine's scene-related classes.
 */
  static readonly INITIALIZATION_LEVEL_SCENE: int;
/**
 * The library is initialized at the same time as the engine's editor classes. Only happens when loading the GDExtension in the editor.
 */
  static readonly INITIALIZATION_LEVEL_EDITOR: int;
}
