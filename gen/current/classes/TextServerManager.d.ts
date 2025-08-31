import type { Dictionary, GodotArray, GodotDictionary, Object, Signal, StringName, TextServer, float, int } from "../index.d.ts";
/**
 * A singleton for managing `TextServer` implementations.
 * 
 * `TextServerManager` is the API backend for loading, enumerating, and switching `TextServer`s.
 * 
 * **Note:** Switching text server at runtime is possible, but will invalidate all fonts and text buffers. Make sure to unload all controls, fonts, and themes before doing so.
 */
export class TextServerManager extends Object {
/**
 * Registers a `TextServer` interface.
 * @param interface_ TextServer
 */
  addInterface(interface_: TextServer): void;
/**
 * Finds an interface by its `name`.
 * @param name string
 * @returns TextServer
 */
  findInterface(name: string): TextServer;
/**
 * Returns the interface registered at a given index.
 * @param idx int
 * @returns TextServer
 */
  getInterface(idx: int): TextServer;
/**
 * Returns the number of interfaces currently registered.
 * @returns int
 */
  getInterfaceCount(): int;
/**
 * Returns a list of available interfaces, with the index and name of each interface.
 * @returns Dictionary[]
 */
  getInterfaces(): Dictionary[];
/**
 * Returns the primary `TextServer` interface currently in use.
 * @returns TextServer
 */
  getPrimaryInterface(): TextServer;
/**
 * Removes an interface. All fonts and shaped text caches should be freed before removing an interface.
 * @param interface_ TextServer
 */
  removeInterface(interface_: TextServer): void;
/**
 * Sets the primary `TextServer` interface.
 * @param index TextServer
 */
  setPrimaryInterface(index: TextServer): void;
/**
 * Emitted when a new interface has been added.
 */
  interfaceAdded: Signal<[interfaceName: StringName]>;
/**
 * Emitted when an interface is removed.
 */
  interfaceRemoved: Signal<[interfaceName: StringName]>;
}
