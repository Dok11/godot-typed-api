import type { Callable, GodotArray, GodotDictionary, Object, float, int } from "../index.d.ts";
/**
 * A singleton for managing `PhysicsServer3D` implementations.
 * 
 * `PhysicsServer3DManager` is the API for registering `PhysicsServer3D` implementations and for setting the default implementation.
 * 
 * **Note:** It is not possible to switch physics servers at runtime. This class is only used on startup at the server initialization level, by Godot itself and possibly by GDExtensions.
 */
export class PhysicsServer3DManager extends Object {
/**
 * Register a `PhysicsServer3D` implementation by passing a `name` and a `Callable` that returns a `PhysicsServer3D` object.
 * @param name string
 * @param createCallback Callable
 */
  registerServer(name: string, createCallback: Callable): void;
/**
 * Set the default `PhysicsServer3D` implementation to the one identified by `name`, if `priority` is greater than the priority of the current default implementation.
 * @param name string
 * @param priority int
 */
  setDefaultServer(name: string, priority: int): void;
}
