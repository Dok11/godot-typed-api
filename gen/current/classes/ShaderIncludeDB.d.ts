import type { GodotArray, GodotDictionary, Object, PackedStringArray, float, int } from "../index.d.ts";
/**
 * Internal database of built in shader include files.
 * 
 * This object contains shader fragments from Godot's internal shaders. These can be used when access to internal uniform buffers and/or internal functions is required for instance when composing compositor effects or compute shaders. Only fragments for the current rendering device are loaded.
 */
export class ShaderIncludeDB extends Object {
/**
 * Returns the code for the built-in shader fragment. You can also access this in your shader code through `#include "filename"`.
 * @param filename string
 * @returns string
 */
  getBuiltInIncludeFile(filename: string): string;
/**
 * Returns `true` if an include file with this name exists.
 * @param filename string
 * @returns boolean
 */
  hasBuiltInIncludeFile(filename: string): boolean;
/**
 * Returns a list of built-in include files that are currently registered.
 * @returns PackedStringArray
 */
  listBuiltInIncludeFiles(): PackedStringArray;
}
