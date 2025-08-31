import type { GodotArray, GodotDictionary, JavaClass, RefCounted, float, int } from "../index.d.ts";
/**
 * Represents an object from the Java Native Interface.
 * 
 * Represents an object from the Java Native Interface. It can be returned from Java methods called on `JavaClass` or other `JavaObject`s. See `JavaClassWrapper` for an example.
 * 
 * **Note:** This class only works on Android. On any other platform, this class does nothing.
 * 
 * **Note:** This class is not to be confused with `JavaScriptObject`.
 */
export class JavaObject extends RefCounted {
/**
 * Returns the `JavaClass` that this object is an instance of.
 * @returns JavaClass
 */
  getJavaClass(): JavaClass;
}
